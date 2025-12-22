<?php

namespace App\Http\Controllers;

use App\Models\Loan;
use App\Http\Requests\StoreLoanRequest;
use App\Http\Requests\UpdateLoanRequest;
use App\Models\Book;
use Illuminate\Support\Facades\Auth;

class LoanController extends Controller
{

    public function index()
    {
        $user=Auth::id();
        $loans  = Loan::where('user_id', $user)->with('book')->get();
        return response()->json([
            'message' => 'All Books loans',
            'books' => $loans
        ]);
    }


    public function store(StoreLoanRequest $request, Book $book)
    {
        $loaData = $request->validated();
        $loaData['user_id'] = Auth::id();
        $loaData['book_id'] = $book->id;
        $loaData['loan_date'] = now();
        $loan = Loan::create($loaData);

        return response()->json([
            'message' => 'Loan created successfully',
            'loan' => $loan
        ]);
    }


    public function returnBook(Loan $loan)
    {
         $this->authorize('update', $loan);
        $loan->update(['returned' => true]);
        return response()->json(['message' => 'Book rendu']);
    }

    public function update(UpdateLoanRequest $request, Loan $loan)
{
    $this->authorize('update', $loan);

       $loans = $request->validated();

        $loan->update($loans);


return response()->json($loan);
}


public function destroy(Loan $loan)
{
    $this->authorize('delete', $loan);
      $loan->delete();

return response()->json(['message' => 'Loan deleted']);
}


}
