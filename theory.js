/*****
 * 
 * * * * * Creating a Basic ToDo list using Local Storage :-
 * 
 * 
 * # 1.) HTML Structure :-
                        - Create an HTML structure with an input field, a button, and a container to hold the todo items.
                        - Add a class to the container (e.g., "todo-lists-elem").

 * # 2.) JavaScript SetUp :-
                        - Select the necessary DOM elements and store references (e.g., "mainTodoElem" and "inputValue").

 * # 3.) Add Click Event :-
                        - Add a click event listener to the "Add Todo" button("btn").
                        - In the event listener, call a function (e.g., "addTodoList") to handle adding a new todo.

 * # 4.) Add ToDo Function :-
                        - In the "addTodoList" function, prevent the default form submission.
                        - Create a new todo element (e.g., a "div" with a class "main_todo_div") with the input value and a delete button.
                        - Append the new todo element to the container ("mainTodoElem").
                        -Store the todo data in an array ("localTodoLists") and update Local Storage using "localStorage.setItem".

 * # 5.) Get ToDo from Local Storage :-
                        - Create a function (e.g., "getTodoLIstFromLocal") to retrieve todo data from local storage using "localStorage.getItem".
                        - Use "JSON.parse" to convert the stored string into an array.

 * # 6.) Show ToDos :-
                        - Create a function (e.g., "showTodoList") to display todos on page load.
                        - Retrieve todo data from local storage using "getTodoListFromLocal".
                        - Iterate through the array and dynamically add todos to the container.

 * # 7.) Remove ToDo Function :-
                        - Create a function (e.g., "removeTodoList") to handle removing a todo.
                        - Use event delegation by adding a click event listener to the container ("mainTodoElem").
                        - Check if the clicked element has a class of "deleteBtn" and call the "removeTodoList" function.

 * # 8.) Update Local Storage on Remove :-
                        - In the "removeTodoList" function, update the "localTodoLists" array by filtering out the remove todo.
                        - Update local storage using "localStorage.setItem".

 * 
 * 
 * 
 */