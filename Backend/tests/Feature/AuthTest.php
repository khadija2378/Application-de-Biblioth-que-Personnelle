<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthTest extends TestCase
{
   use RefreshDatabase;

    public function test_register()
    {
        $response = $this->post('/api/register', [
            'name' => 'Khadija',
            'email' => 'khadija@test.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', [
            'email' => 'khadija@test.com',
        ]);
    }

    public function test_login(){

        $user = User::factory()->create([
        'email' => 'khadija@test.com',
        'password' => Hash::make('password'),
    ]);

    $response = $this->post('/api/login', [
        'email' => 'khadija@test.com',
        'password' => 'password',
    ]);

    $response->assertStatus(200)
             ->assertJsonStructure([
                 'token'
             ]);

    }

    public function test_logout()
{
     $user = User::factory()->create([
        'email' => 'khadija@test.com',
        'password' => Hash::make('password'),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    $response = $this->withHeader('Authorization', 'Bearer ' . $token)
                     ->post('/api/logout');

    $response->assertStatus(200);

    $this->assertCount(0, $user->tokens);
}

    public function test_Users(){
        
         $user = User::factory()->create([
        'email' => 'khadija@test.com',
        'password' => Hash::make('password'),
        'role' => 'admin',
    ]);
    $token = $user->createToken('auth_token')->plainTextToken;
    $response = $this->withHeader('Authorization', 'Bearer ' . $token)
                     ->get('/api/users');

    $response->assertStatus(200);
    }
}
