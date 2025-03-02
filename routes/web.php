<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ContactUSController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Agronomists page
Route::get('/sales-agronomists', function () {
    return Inertia::render('SalesAgronomists');
});

// Home page
Route::get('/', [HomeController::class, 'homePage'])->name('home');
Route::get('/about', [HomeController::class, 'aboutPage'])->name('about');
Route::get('/contact', [HomeController::class, 'contactPage'])->name('contact');

// Products routes
Route::resource('products', ProductController::class)->except(['update']);
Route::post('/update-product/{id}', [ProductController::class, 'update'])->name('update-product');
Route::get('/zadzamatura-products', action: [HomeController::class, 'productPage'])->name('zadzamatura-products');

//Blogs routes
Route::resource('blogs', BlogController::class)->except(['update']);
Route::post('/update-blog/{id}', [BlogController::class, 'update'])->name('update-blog');
Route::get('/zadzamatura-blogs', action: [HomeController::class, 'blogPage'])->name('zadzamatura-blogs');

//Careers routes  list
Route::resource('careers', CareerController::class);
Route::get('/zadzamatura-careers', action: [HomeController::class, 'careerPage'])->name('zadzamatura-careers');


Route::post('/contact', [ContactUSController::class, 'sendMessage'])->name('contact-us');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
