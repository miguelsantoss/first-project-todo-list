<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function() {
  return view('index');
});
Route::post('api/new/list', 'TodoController@post');

Route::post('api/new/item', 'ItemController@post');

Route::delete('api/delete/list', 'TodoController@delete');

Route::delete('api/delete/item', 'ItemController@delete');

Route::put('api/rename/list', 'TodoController@put');

Route::put('api/rename/item', 'ItemController@put');

Route::put('api/priority/item', 'ItemController@priority');

/* Auth Routes
Route::post('api/register', 'AuthController@register');

Route::post('api/login', 'AuthController@login');

Route::post('api/logout', 'AuthController@logout');
*/

Route::get('api/todo', 'TodoController@get');

Route::put('api/mark', 'ItemController@mark');

Route::auth();

Route::get('/home', 'HomeController@index');
