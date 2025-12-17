<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Support\Facades\Auth;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::with('user')->get();
        return response()->json([
            'message' => 'All Books',
            'books' => $books
        ]);
    }

    public function store(StoreBookRequest $request)
    {
        $booksData = $request->validated();
        $booksData['user_id'] = Auth::user()->id;

        if ($request->hasFile('image')) {
            $result = Cloudinary::upload($request->file('image')->getRealPath());
            $booksData['image'] = $result->getSecurePath();
        }

        $book = Book::create($booksData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book
        ]);
    }

    public function show(Book $book)
    {
        return response()->json([
            'message' => 'Book details',
            'book' => $book
        ]);
    }

    public function update(UpdateBookRequest $request, Book $book)
    {
        $booksData = $request->validated();

        if ($request->hasFile('image')) {
            if ($book->image) {
                $publicId = pathinfo(parse_url($book->image, PHP_URL_PATH), PATHINFO_FILENAME);
                Cloudinary::destroy($publicId);
            }

            $uploadedImage = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();
            $booksData['image'] = $uploadedImage;
        }

        $book->update($booksData);

        return response()->json([
            'message' => 'Book updated successfully',
            'book' => $book
        ]);
    }

    public function destroy(Book $book)
    {
        if ($book->image) {
            $publicId = pathinfo(parse_url($book->image, PHP_URL_PATH), PATHINFO_FILENAME);
            Cloudinary::destroy($publicId);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }
}
