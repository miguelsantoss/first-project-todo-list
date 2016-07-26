<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;

use App\Todo;

use App\Item;

class ItemController extends Controller
{
    public function post(Request $request)
    {
      $name = $request->name;
      $todoid = $request->listid;
      $item = new Item();
      $item->name = $name;
      $item->todo_id= $todoid;
      $item->save();

      $temp = ['id' => $item->id];

      return response()->json($temp, 200);
    }
    public function delete(Request $request)
    {
      $id = $request->id;
      $item = Item::find($id);
      $item->delete();

      return response()->json(200);
    }
    public function put(Request $request)
    {
      $name = $request->name;
      $id = $request->id;
      $item = Item::find($id);
      $item->name = $name;
      $item->save();

      return response()->json(200);
    }
    public function priority(Request $request)
    {
      $priority = $request->priority;
      $id = $request->id;
      $item = Item::find($id);
      $item->priority = $priority;
      $item->save();

      return response()->json($response, 200);
    }
    
    public function mark(Request $request)
    {
      $id = $request->id;
      $item = Item::find($id);
      if ($item->done == 0)
      {
        $item->done = "1";
      }
      else
      {
        $item->done = "0";
      }
      $item->save();

      return response()->json(200);
    }

}
