<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class List_Game extends Model
{
    //
    protected $table = "List_Game";

    protected $fillable = [
        'developer_id',
        'game_name',
        'price',
        'description',
        'cover_url',
        'image_url',
    ];

    public function Developer() {
        return $this->belongsTo(Developer::class);
    }
    public function Category() {
        return $this->belongsToMany=(CategoryGame::class);
    }
    public function user() {
        return $this->belongsTo(Developer::class);
    }



}
