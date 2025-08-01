 /////*****************************************************************************/////

        // // // ----// //----// Starting of defining a function getTodoListFromLocal. //----// //----//

        // // // It is defined on top to get updated or previous data from the localStorage instead of accesing the other function;
        const getTodoListFromLocal = () => {
            // console.log(JSON.parse(localStorage.getItem("storeLocal"))); // Getting data from localStorage on console after refreshing the page;
            return(JSON.parse(localStorage.getItem("storeLocal"))); // Returning it to reflect data on display;
          };
  
          // // // ----// //----// Ending of defining a function getTodoListFromLocal. //----// //----//
  
          /////*****************************************************************************/////
  
          
          // // // ----// //----// Starting of defining a function updateToDoListOnLocalStorag to update the localStorage of filter data. //----// //----//
  
          const updateToDoListOnLocalStorage = (localToDoList) => {
            return(localStorage.setItem("storeLocal", JSON.stringify(localToDoList))); // // Finally, filtering i.e., daleting the targetted value and storing the updated data on localStorage;
          };
  
          // // // ----// //----// Ending of defining a function updateToDoListOnLocalStorag to update the localStorage of filter data. //----// //----//
  
          /////*****************************************************************************/////
  
  
          //  let localToDoList = []; // Declaring a variable to make an empty array to store data and make it function scope instead of block;
  
          let localToDoList = getTodoListFromLocal() || []; // Referencing to getTodoListFromLocal() to get the updated or previous data first. If data is not there then blank array or null;
  
          // // // ----// //----// Starting of Select the necessary DOM elements and storing their references. //----// //----//
  
          const accInputValue = document.getElementById("inputValue");
          console.log(accInputValue); // Getting the input element on Console Tab;
          const accToDoListElem = document.querySelector(".todo-lists-elem");
          console.log(accToDoListElem); // Getting the section element on Console Tab;
  
          // // // ----// //----// Ending of Select the necessary DOM elements and storing their references. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of defining a function addTodoDynamicElement and passing the same argument as parameter from showTodoListData function. //----// //----//
  
          const addTodoDynamicElement = (curElem) => { // Passing updated parameter(curElem) to show on display;
            let divTag = document.createElement("div"); // Creation of div tag;
            divTag.classList.add('main_todo_div'); // Giving the class name to div tag;
            divTag.innerHTML = `<li>${curElem}</li><button class="deleteBtn">Delete</button>`; // Creation of li tag & btn tag with class name with text Delete;
  
            accToDoListElem.append(divTag); // Pushing the divTag inside the todo-lists-elem i.e., section tag; Getting the Output on the display after AddTodo btn click as li and delete btn;
          };
  
          // // // ----// //----// Ending of defining a function addTodoDynamicElement and passing the same argument as parameter from showTodoListData function. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of defining a function addTodoList and calling inside add btn listener. //----// //----//
  
          const addTodoList = (event) => {
            event.preventDefault(); // Prevent the default behaviour automatic submission of form tag;
            console.log("Calling a addTodoList function"); // Getting on Console Tab => Calling a addTodoList function;
  
            // let divTag = document.createElement("div"); // Creation of div tag;
            // divTag.className = "main_todo_div"; // Giving the class to div tag;
            // console.log(divTag); // Getting the div element on Console Tab after AddToDo btn click;
  
            // let deleteBtn = document.createElement('button'); // Creation of button tag;
            // deleteBtn.innerText = "Delete"; // Giving the text to button tag;
            // console.log(deleteBtn); // Getting the button element on Console Tab after AddToDo btn click;
  
            ///////////---------------------------------------------------------------------------------------
  
            // let localToDoList = []; // Declaring a variable to make an empty array to store data;
            // const toDoListsValue = accInputValue.value; // Storing the accInputValue.value to toDoListsValue variable;
            const toDoListsValue = accInputValue.value.trim(); // Storing the accInputValue.value to toDoListsValue variable;
            
            // // // Use of Conditional Statement with includes method to check the duplicate on server-side or display/screen. Whereas for localStorage we have used the Set method to neglect the duplicate data like wise here if-else & includes();
            // // // Also, tackle the blank space to be added on the main display or screen or server-side;
            if(!localToDoList.includes(toDoListsValue) && toDoListsValue !== ""){
              localToDoList.push(toDoListsValue); // Now, pushing toDoListsValue in the array named as localToDoList;
            
            // console.log(localToDoList); //  // Getting on Console Tab => ['umar'] But, we are getting only one item in the array because let (let localToDoList = []; ) is a block scope variable and everytime the data updates it remember (let localToDoList = [];) as empty array as every rendering of a program;
            
            // console.log(localToDoList); // Getting on Console Tab => ['apple', 'banana', 'apple', 'banana'] Now, we are getting multiple data on an array because let (let localToDoList = [];) is outside of this function previously it was an block scope now it is declared outside this function;
  
  
            // // // Set :- It is useful when uniqueness is a priority, and the order of elements is not crucial. Sets are often used for tasks like filtering out duplicates from an array. And, in Set there is not push method applies.
            // localToDoList = new Set(localToDoList);
            // console.log(localToDoList); // Getting on Console Tab => Set(1) {'shiva'} and if we again enter the new data or duplicate data then we got the error => TypeError: localToDoList.push is not a function ; That means in Set there is not push method applies.
  
            // localToDoList = [new Set(localToDoList)];
            // console.log(localToDoList); // Getting on Console Tab => array of data inside an array of data. But, not neglecting the duplicate ones;
  
            localToDoList = [...new Set(localToDoList)];
            // console.log(localToDoList); // Getting on Console Tab => Now, we are getting the array of data without any duplicates because of spread method;
  
            localStorage.setItem("storeLocal", JSON.stringify(localToDoList)); // Storing data on the Local Storage in key/value pairs i.e., key("storeLocal") and value(JSON.stringify(localToDoList)). Can be seen in Application Tab;
            
            ///////////---------------------------------------------------------------------------------------
  
            
            /** Instead of Creating the div and button tag separately. We can make it once.**/
            // let divTag = document.createElement("div"); // Creation of div tag;
            // divTag.classList.add('main_todo_div'); // Giving the class name to div tag;
            // divTag.innerHTML = `<li>${accInputValue.value}</li><button class="deleteBtn">Delete</button>`; // Creation of li tag & btn tag with class name with text Delete;
            // console.log(divTag); // Getting  on Console Tab. The div element and inside it li tag with btn tag form after AddToDo btn click;
  
            // accToDoListElem.append(divTag); // Pushing the divTag inside the todo-lists-elem i.e., section tag; Getting the Output on the display after AddTodo btn click as li and delete btn;
  
  
            addTodoDynamicElement(toDoListsValue); // Reusable function i.e.,(addTodoDynamicElement(toDoListsValue)) having same thing only argument changes;
            }
  
            accInputValue.value = ""; //Clearing the input field after enter data;
  
          };
  
          // // // ----// //----// Ending of defining a function addTodoList and calling inside add btn listener. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of defining a function removeTodoList and calling inside accToDoListElem listener. //----// //----//
  
          const removeTodoList = (event) => {
            console.log(event); // Getting on Console Tab => PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  
            let delRemove = event.target; // Defining a variable and passing event.target;
            
            //console.log(event.target);  // Getting on Console Tab => We are able to target the value by one click;
            
            // delRemove.remove(); // Getting on Console Tab => Removing the targeted value from the screen/display. If you can a delete btn or text value or near by all div it will be removed but only not from localStorage;
  
            // let deleteToDos = delRemove.previousElementSibling; // Targetting the previous element sibling;
            // console.log(deleteToDos); // Getting on Console Tab =>  <li>varun</li> i.e., if we click on text or delete btn we are able to get the element li tag;
  
            let deleteToDos = delRemove.previousElementSibling.innerText; // Targetting the previous element sibling text or value;
            // console.log(deleteToDos); // Getting on Console Tab => Now, instead of li tag. If we now click on text we get error or if we click on delete btn then getting the targeted value of that li tag.
  
            let delParentElem = delRemove.parentElement; // Catching the parent element i.e., section tag  to remove the child li tag;
  
            // // // Now, comparing the array of localToDoList with the targetted value of items whether to delete the correct one by filtering out the data;
            localToDoList = localToDoList.filter((currElement) => {
              return(currElement !== deleteToDos.toLowerCase());
            });
  
            updateToDoListOnLocalStorage(localToDoList); // Now, updating the localStorage with the filtered data by calling this function. After the getTodoListFromLocal();
  
            delParentElem.remove(); // Deleting the targeted li tag now. From the main screen/display;
  
            console.log(deleteToDos); // Getting on Console Tab => Now, we are getting the targetted delete btn click values; 
  
          };
  
          // // // ----// //----// Ending of defining a function removeTodoList and calling inside accToDoListElem listener. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of defining a function showTodoListData to display todos on page load. //----// //----//
  
          const showTodoListData = () => {
            console.log(localToDoList); // Getting data on console; if no data then [];
  
            // // // Using forEach method instead of map method because here, we don't want the new array. We only update the array;
            localToDoList.forEach((curElem) => {
              return addTodoDynamicElement(curElem); // Passing argument to addTodoDynamicElement() with updated data of an array;
            });
  
          };
  
          showTodoListData(); // Calling the function;
  
          // // // ----// //----// Ending of defining a function showTodoListData to display todos on page load. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of click event listener to add todos and calling a function addTodoList. //----// //----//
  
          document.querySelector(".btn").addEventListener("click", (event) => {
            console.log("Add btn click"); // Getting on Console Tab => Add btn click;
            addTodoList(event); // Calling or invoking the function;
          });
  
          // // // ----// //----// Ending of click event listener to add todos and calling a function addTodoList. //----// //----//
  
          /////*****************************************************************************/////
  
          // // // ----// //----// Starting of click event listener to remove or delete todos and calling a function removeTodoList. //----// //----//
  
          accToDoListElem.addEventListener("click", (event) => {
            event.preventDefault; // Prevent the default behaviour automatic submission of form tag;
            // console.log(event.target);
            // removeTodoList(event); // Calling the function here;
  
            if(event.target.classList.contains("deleteBtn")){ 
              // // Finally, deleting the appropriate deletion from the delete btn only. Previously, deletion happens from text and delete btn and by espically section tag anywhere clicking;
              removeTodoList(event);
            }
          });
  
          // // // ----// //----// Ending of click event listener to remove or delete todos and calling a function removeTodoList. //----// //----//
  
          /////*****************************************************************************/////