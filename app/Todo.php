<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
  public function items()
  {
    return $this->hasMany('App\Item');
  }
}
