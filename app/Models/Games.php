<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    //  
    protected $table = "Games";

    protected $fillable = [
        'game_id',
        'developer_id',
        'game_name',
        'category_id',
        'image',
        'Description',
    ];

    public function developer () {
        return $this->belongsTo(Developer::class,foreignKey: 'developer_id');
    }
   public function categories () {
    return$this->belongsToMany(CategoryGame::class,'category_game',"game_id","category_id");
   }

}

