let todoStr = localStorage.getItem('Item');
let todoList = todoStr ? JSON.parse(todoStr) : [
  {
    item: 'Buy Milk', 
    duedate: '2024-07-04'
  },
  {
    item: 'Cottage Cheese', 
    duedate: '2024-07-05'
  },
];

// let todoList = [
//   {
//     item: 'Buy Milk', 
//     duedate: '2024-07-09'
//   },
//   {
//     item: 'Cottage Cheese', 
//     duedate: '2024-07-08'
//   },
// ];
displayItems();
function addTodo(){
 let inputElement = document.querySelector('#todo-input');
 let dateElements = document.querySelector('#todo-date');
 let todoItem = inputElement.value;
 let todoDate = dateElements.value;
 todoList.push({item:todoItem, duedate:todoDate});
 console.log(todoList);
 localStorage.setItem('Item',JSON.stringify(todoList));
 inputElement.value = ''; //empty the input todo field after add
 dateElements.value = '';
 displayItems();
 }
function displayItems(){
 let containerElements = document.querySelector('.todo-container');
 let newHtml = '';
 for(let i=0; i < todoList.length; i++){
  let item = todoList[i].item;
  let duedate = todoList[i].duedate;
  newHtml += `
    <span>${item}</span>
    <span>${duedate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    localStorage.setItem('Item',JSON.stringify(todoList));  
    displayItems();">Delete</button>
  `;
 }
 containerElements.innerHTML = newHtml;
}
