<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Route;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        return Inertia::render('Products/AllAdminProducts', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Products/CreateProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'countries' => 'required|string|max:1000',
            'category' => 'required|string',
        ]);

        //deal with the image
        $imageName = time().'.'.$request->file->extension(); 
        $request->file->move(public_path('uploads'), $imageName);
        $validated['image'] = $imageName;

        $product = Product::create($validated);

        return Inertia::render('Products/AllAdminProducts', [
            'product' => $product,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($product)
    {
        $product = Product::find($product);

        return Inertia::render('Products/UpdateProduct',[
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'file' => 'nullable|file|mimes:jpeg,png,jpg,gif|max:2048',
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'countries' => 'required|string|max:1000',
            'category' => 'required|string',
        ]);

        // Find the product by ID
        $product = Product::findOrFail($id);

        // Handle file upload if a new file is provided
        if ($request->hasFile('file')) {
            // Delete the old image if it exists
            if ($product->image && file_exists(public_path('uploads/' . $product->image))) {
                unlink(public_path('uploads/' . $product->image));
            }

            // Save the new image
            $imageName = time() . '.' . $request->file->extension();
            $request->file->move(public_path('uploads'), $imageName);
            $validated['image'] = $imageName; // Add the new image name to the validated data
        }

        // Update the blog with validated data
        $product->update($validated);

        return Inertia::render('Products/AllAdminProducts', [
            'product' => $product,
        ])->with(['success' => 'Blog updated successfully!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        $product->delete();
        return Inertia::render('Product');
    }
}
