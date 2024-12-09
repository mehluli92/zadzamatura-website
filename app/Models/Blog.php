<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title', 'slug', 'content', 'author_id', 'status', 'image',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
