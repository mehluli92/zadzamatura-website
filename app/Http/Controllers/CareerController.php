<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
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
    
        return Inertia::render('Careers/AllCareersAdmin', [
            'careers' => $careers,
            'filters' => $request->only(['due_date', 'title', 'employment_type']),
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Careers/CreateCareer');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'department' => 'required|string|max:1000',
            'employment_type' => 'required|string',
            'email' => 'required|string',
            'due_date' => 'required',
        ]);

       Career::create($validated);

        return redirect()->route('careers.index')->with('success', 'Career created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        return Inertia::render('Careers/ShowCareer', [
            'career' => $career,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career)
    {
        return Inertia::render('Careers/UpdateCareer', [
            'career' => $career,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Career $career)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'department' => 'required|string|max:1000',
            'employment_type' => 'required|string',
            'email' => 'required|string',
            'due_date' => 'required',
        ]);

        $career->update($validated);

        return redirect()->route('careers.index')->with('success', 'Career updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('careers.index')->with('success', 'Career deleted successfully.');
    }
}
