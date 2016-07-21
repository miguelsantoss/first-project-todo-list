<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    public function todo()
    {
      return $this->belongsTo('App\Todo');
    }
}
