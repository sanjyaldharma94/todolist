//creating self-invoking function
(function() {
	//creating reference to the input and button from index,html
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	//reference to the todo and done list
	var lists = {
		todo: document.getElementById('todo'),
		done: document.getElementById('done')
	};
//creating a function to create a list to push in the list
  var makeTaskHtml = function(str){

  	var checkbox = document.createElement('input');
	var el = document.createElement('li');
	var label = document.createElement('span');
	
    checkbox.type = 'checkbox';
	checkbox.addEventListener('click', onCheck);
	 label.textContent = str;
	
    el.appendChild(checkbox);
    el.appendChild(label);
    
	return el;
};
var addTask = function(task){
  lists.todo.appendChild(task)
};

var onCheck = function(event){
  var task = event.target.parentElement;
  var list = task.parentElement.id;
 
  lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
   this.checked = true;
};

input.focus();

var onInput = function() {
	var str = input.value; 
   //console.log(str);
	if(str.length > 0) {
   addTask(makeTaskHtml(str, onCheck));

  input.value = "";
  input.focus();
      }
  };

btn.addEventListener('click', onInput);
input.addEventListener('keyup', function(event){
	var code = event.keyCode;

	if(code === 13) {
		onInput();
   }
});
	input.focus();

//addTask(lists.todo, makeTaskHtml('test Task#1'))
//addTask(lists.done, makeTaskHtml('test task#2'))
}());




