export const getLists     = 'api/todo';
export const createList   = 'api/new/list?name=';
export const deleteList   = 'api/delete/list?id=';
export const createTodo   = { listId: 'api/new/item?listid=', name: '&name=', priority: '&priority=' };
export const deleteTodo   = 'api/delete/item?id=';
export const markTodo     = 'api/mark?id=';
export const priorityTodo = { id: 'api/priority?id=', priority: '&priority=' };
export const renameList   = { id: 'api/rename/list?id=', name: '&name=' };
export const renameTodo   = { id: 'api/rename/item?id=', name: '&name=' };

/*

- GET: `/api/todo` Lists the todo lists in the following format:
```{
  'lists': [
    {
      'id': 1,
      'name': 'List #1',
      'items': [
        {
          'id': 0,
          'name': 'Item #1',
          'priority': 'LOW',
          'done': '0'
        }
      ]
    }
  }
```
- POST: `/api/new/list?name=$NAME` Creates a new list with the specified name
- POST: `/api/new/item?listid=$LISTID&name=$NAME&priority=$PRIORITY` Adds a new item with the specified name and the specified priority to the specified list
- POST: `/api/new/item?listid=$LISTID&name=$NAME` Also adds a new item with the specified name and puts priority to 'LOW'
- DELETE: `/api/delete/list?listid=$LISTID` Deletes the specified list
- DELETE: `/api/delete/item?itemid=$ITEMID` Deletes the specified item from the specified list
- PUT: `/api/rename/list?listid=$LISTID&name=$NAME` Renames the specified list to the specified name
- PUT: `/api/rename/item?itemid=$ITEMID&name=$NAME` Renames the specified item of the specified list to the specified name
- PUT: `/api/priority?itemid=$ITEMID&priority=$PRIORITY` Changes the priority of the specified item of the specified list to the specified priority
- PUT: `/api/mark?itemid=$ITEMID` Marks/Unmarks the specified item of the specified list as done

*/
