<?php

namespace App\Http\Controllers;

use App\Models\Reading;
use App\Http\Requests\StoreReadingRequest;
use App\Http\Requests\UpdateReadingRequest;

class ReadingController extends Controller
{
    
    public function index()
    {
        $readings  = Reading::with('book', 'user')->get();
        return response()->json([
            'message' => 'All Reding books',
            'books' => $readings 
        ]);
    }

    
    public function store(StoreReadingRequest $request)
    {
        $readData = $request->validated();
        $readData['user_id'] = Auth::user()->id;
        $readData['book_id'] = $request->book_id;

        $book = Reading::create($readData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book
        ]);
    }

    
}
