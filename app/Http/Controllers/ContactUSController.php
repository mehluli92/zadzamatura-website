<?php

namespace App\Http\Controllers;

use App\Events\ContactUsEmail;
use Illuminate\Http\Request;
use Log;

class ContactUSController extends Controller
{
    public function sendMessage(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
            'subject' => 'required'
        ]);

        try {
            event( new ContactUsEmail($request->all()));
            return redirect()->route('contact')->with('success', 'Email sent successfully!');
        } catch (\Exception $e) {
            // Log the error for debugging
            Log::error('Failed to send contact email: ' . $e->getMessage());
            return redirect()->route('contact')->with('error', 'Failed to send email. Please try again later.');
        }    
    }
}
