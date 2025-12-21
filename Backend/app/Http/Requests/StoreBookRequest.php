<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
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
        'title'       => 'required|string|max:50',
        'author'      => 'required|string|max:255',
        'image'       => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',

        ];
    }
}
