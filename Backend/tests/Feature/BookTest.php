<?php

namespace Tests\Feature;

use App\Models\Book;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    public function test_book()
    {
Storage::fake('public');

       $user = User::factory()->create([
        'email' => 'khadija@test.com',
        'password' => Hash::make('password'),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer ' . $token)
                     ->post('/api/books', [
            'title' => 'Laravel',
            'author' => 'Taylor',
            'image' => UploadedFile::fake()->image('avatar.jpg'),
        ]);

        $response->assertStatus(201);

    }
}
