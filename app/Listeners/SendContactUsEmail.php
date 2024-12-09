<?php

namespace App\Listeners;

use App\Events\ContactUsEmail;
use App\Mail\ContactMessage;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Log;
use Mail;

class SendContactUsEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ContactUsEmail $event): void
    {
        // $data = [
        //     'name' => ($event->data['name'] ?? 'Anonymous'),
        //     'email' => ($event->data['email'] ?? 'no-reply@example.com'),
        //     'message' => ($event->data['message'] ?? 'No message provided.'),
        //     'subject' => ($event->data['subject'] ?? 'Contact Us email without a subject'),
        // ];

        Log::info($event->data['email']);

        Mail::to('nokwaramehluli@gmail.com')->send(new ContactMessage($event->data));
    }
}
