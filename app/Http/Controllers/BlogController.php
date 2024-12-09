<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::all();
        return Inertia::render('Blog/Blog', [
            'data' => $blogs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Blog/CreateBlog');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'content' => 'required|string|max:1000',
            'status' => 'required|string',
        ]);

        //deal with the image
        $imageName = time().'.'.$request->file->extension(); 
        $request->file->move(public_path('uploads'), $imageName);
        $validated['image'] = $imageName;

        $user = Auth::user();

        $validated['author_id'] = $user->id;

        $blog = Blog::create($validated);

        // return Inertia::render('Blog/Blog', [
        //     'data' => $blog,
        // ]);
        return redirect()->route('blogs.index')->with('success', 'Blog post created successfully.');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $blog = Blog::find($id);
        return Inertia::render('Blog/ViewBlog',
        [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $blog = Blog::find($id);
        return Inertia::render('Blog/UpdateBlog',
        [
            'blog' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:2048', // File is optional
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
            'content' => 'required|string|max:1000',
            'status' => 'required|string',
        ]);

        // Find the blog by ID
        $blog = Blog::findOrFail($id);

        // Handle file upload if a new file is provided
        if ($request->hasFile('file')) {
            // Delete the old image if it exists
            if ($blog->image && file_exists(public_path('uploads/' . $blog->image))) {
                unlink(public_path('uploads/' . $blog->image));
            }

            // Save the new image
            $imageName = time() . '.' . $request->file->extension();
            $request->file->move(public_path('uploads'), $imageName);
            $validated['image'] = $imageName; // Add the new image name to the validated data
        }

        // Update the blog with validated data
        $blog->update($validated);

        $blog = Blog::all();
       
        return redirect()->route('blogs.index')->with('success', 'Blog updated successfully!');

    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        $blog->delete();
        
        return Inertia::render('Product', [
            'success' => 'Blog updated successfully!'
        ]);
    }
}
