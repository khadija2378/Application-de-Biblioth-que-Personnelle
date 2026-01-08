<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use Illuminate\Support\Facades\Auth;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index()
    {
        $user=Auth::user()->id;
        $books = Book::where('user_id', $user)->get();
        return response()->json([
            'message' => 'All Books',
            'books' => $books
        ]);
    }

    public function store(StoreBookRequest $request)
    {
        $booksData = $request->validated();
        $booksData['user_id'] = Auth::id();

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
    $this->authorize('view', $book);

    $book->load(['loans','readings']);

    return response()->json([
        'message' => 'Book details',
        'book' => $book
    ]);
}

    public function update(UpdateBookRequest $request, Book $book)
    {
        $this->authorize('update', $book);
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
        $this->authorize('delete', $book);
        if ($book->image) {
            $publicId = pathinfo(parse_url($book->image, PHP_URL_PATH), PATHINFO_FILENAME);
            Cloudinary::destroy($publicId);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted successfully']);
    }

    public function search(Request $request){
      {
    $search = $request->query('search');

    $books = Book::when($search, function ($query, $search) {
        $query->where('title', 'like', "%{$search}%")
              ->orWhere('author', 'like', "%{$search}%");
    })->get();

    return response()->json($books);
}
    }
}
