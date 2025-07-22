<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameSubmission extends Model
{
    //
    protected $table = "GameSubmisson";

    protected $fillable = [
        'submission_id',
        'developer_id',
        'game_name',
        'Description',
        'status',
    ];

}
