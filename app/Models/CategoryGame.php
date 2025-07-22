<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryGame extends Model
{
    //
    protected $table = "Category";

    protected $fillable = [
        'category_id',
        'category',
    ];
    public function games () {
        return$this->belongsToMany(Games::class,'category_game',"category_id","game_id");
       }
}

