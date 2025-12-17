<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Http\Requests\StoreLoanRequest;
use App\Http\Requests\UpdateLoanRequest;

class LoanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $loans  = Loan::with('user')->get();
        return response()->json([
            'message' => 'All Books loans',
            'books' => $loans 
        ]);
    }

    
    public function store(StoreLoanRequest $request)
    {
        $loaData = $request->validated();
        
        $loaData['book_id'] = $request->book_id;

        $book = Loan::create($loaData);

        return response()->json([
            'message' => 'Book created successfully',
            'book' => $book
        ]);
    }

    
    public function show(Loan $loan)
    {
        //
    }

   
    public function update(UpdateLoanRequest $request, Loan $loan)
    {
        //
    }

    public function destroy(Loan $loan)
    {
        //
    }
}
