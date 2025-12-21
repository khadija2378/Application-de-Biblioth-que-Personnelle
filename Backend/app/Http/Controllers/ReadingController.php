<?php

namespace App\Http\Controllers;

use App\Models\Reading;
use App\Http\Requests\StoreReadingRequest;
use App\Http\Requests\UpdateReadingRequest;
use Illuminate\Support\Facades\Auth;

class ReadingController extends Controller
{
    
    public function index()
    {
        $user=Auth::id();
        $readings  = Reading::where('user_id', $user)->with('book')->get();
        return response()->json([
            'message' => 'All Reding books',
            'books' => $readings 
        ]);
    }
    
    public function indexFinished()
    {
        $user=Auth::id();
        $readings  = Reading::where('user_id', $user)->where('status', 'finished')->with('book')->get();
        return response()->json([
            'message' => 'All Finishe Reding books',
            'books' => $readings 
        ]);
    }
    
    public function store(StoreReadingRequest $request)
    {
        $readData = $request->validated();
        $readData['user_id'] = Auth::id();

        $book = Reading::create($readData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book
        ]);
    }


 public function update(Reading $reading)
{

        $reading->update(['status'=>'finished']);


return response()->json($reading);
}


public function destroy(Reading $reading)
{
$reading->delete();


return response()->json(['message' => 'Lecture supprimée']);
}

    
}
