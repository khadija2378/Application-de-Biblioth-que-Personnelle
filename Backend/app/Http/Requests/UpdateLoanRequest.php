<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateLoanRequest extends FormRequest
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
        'book_id'=> 'exists:books,id',
        'borrower_name' => 'sometimes|string|max:50',
        'loan_date' => 'sometimes|date',
        'return_date_expected' => 'sometimes|date|after_or_equal:loan_date',
        'status' => 'string|in:pending,returned,late',
        ];
    }
}
