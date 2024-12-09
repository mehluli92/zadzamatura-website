<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Career;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Route;

class HomeController extends Controller
{
    public function homePage() {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function aboutPage() {
        return Inertia::render('About', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function contactPage() {
        return Inertia::render('Contact');
    }

    public function productPage(Request $request) {
        $query = Product::query();

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $products = $query->get();

        return Inertia::render('Product', [
            'data' => $products
        ]);
    }

    public function blogPage(Request $request) {
        $query = Blog::query();

        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        $query->where('status', 'published');

        $query->orderBy('created_at', 'desc');

        $blogs = $query->get();


        return Inertia::render('AllBlogs', [
            'data' => $blogs
        ]);
    }

    public function careerPage(Request $request) {

        $query = Career::query();
    
        // Apply filters if provided
        if ($request->filled('due_date')) {
            $query->where('due_date', $request->input('due_date'));
        }
    
        if ($request->filled('title')) {
            $query->where('title', 'like', '%' . $request->input('title') . '%');
        }
    
        if ($request->filled('employment_type')) {
            $query->where('employment_type', $request->input('employment_type'));
        }
    
        // Fetch the careers in reverse order
        $careers = $query->orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Careers', [
            'careers' => $careers,
            'filters' => $request->only(keys: ['due_date', 'title', 'employment_type']),
        ]);
    }


}
