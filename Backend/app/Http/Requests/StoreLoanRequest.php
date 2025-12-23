<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLoanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        'user_id'     => 'exists:users,id',
        'book_id'       => 'exists:books,id',
        'borrower_name' => 'required|string|max:50',
        'loan_date'     => 'date',
        'return_date' => 'required|date|after_or_equal:loan_date',
        'returned'        => 'boolean',
        ];
    }
}
