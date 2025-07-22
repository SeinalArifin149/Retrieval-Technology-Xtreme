<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    //
    protected $table = "Developer";

    protected $fillable = [
        'developer_id',
        'name_developer',
        'email_developer',
        'address',
        'logo',
    ];
}
