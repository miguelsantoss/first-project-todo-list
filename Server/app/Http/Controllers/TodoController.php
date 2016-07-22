<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Requests;

use App\Todo;

use App\Item;

class todoController extends Controller
{
    public function post(Request $request)
    {
      $name = $request->name;
      $todo = new todo();
      $todo->name = $name;
      $todo->save();

      return response()->json(200);
    }
    public function delete(Request $request)
    {
      $id = $request->id;
      $todo = todo::find($id);
      $todo->delete();

      return response()->json(200);
    }
    public function put(Request $request)
    {
      $name = $request->name;
      $id = $request->id;
      $todo = todo::find($id);
      $todo->name = $name;
      $todo->save();

      return response()->json(200);
    }
    public function get(Request $request)
    {
      $todos = todo::all();
      $response = [];
      foreach ($todos as &$todo)
      {
        $temp = [
          'id' => $todo->id,
          'name' => $todo->name,
          'items' => []
        ];
        $items = Item::where('todo_id', $todo->id)->get();
        $temp2 = [];
        foreach ($items as &$item) 
        {
          $temp2[] = [
            'id' => $item->id,
            'name' => $item->name,
            'priority' => $item->priority,
            'done' => $item->done
          ];
          $temp['lists'] = $temp2;
        }
        $response[] = $temp;
      }

      return response()->json($response, 200);
    }

}
