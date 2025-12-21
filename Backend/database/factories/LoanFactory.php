<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Book;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Loan>
 */
class LoanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'book_id' => Book::factory(),
            'borrower_name' => fake()->sentence(3),
            'loan_date' => fake()->date(),
            'return_date_expected' => fake()->date(),
            'status' => fake()->randomElement(['pending', 'returned', 'late']),
        ];
    }
}
