var toDoItems = ["item0"];
var DEFAULT_TEXT = "What needs to be done?";
var toDoItemID = "item";

function onInputBoxFocus(){
	var containerDiv = document.getElementById('item0');
	var box = containerDiv.getElementsByTagName('input')[1];	
	if (box.value === DEFAULT_TEXT){
		box.value = "";
	};
	box.style.color = '#000000';
}


function onInputBoxBlur(){
	var containerDiv = document.getElementById('item0');
	var box = containerDiv.getElementsByTagName('input')[1];
	if (box.value === ""){
		box.value = DEFAULT_TEXT;				
	}	
	box.style.color = '#999999';
}

function onToDoItemFocus(){

}

function onToDoKeyPress(e){
	if (e.keyCode === 13) {
	}
}

function randomColor(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function onKeyPress(e){
	if(e.keyCode === 13){
		var containerDiv = document.getElementById('id1');
		var toDoObject= document.getElementById('item0');
		var inputBox = toDoObject.getElementsByTagName('input')[1];
		if (inputBox.value !== "") {
			containerDiv.innerHTML += createToDoItem(inputBox.value);
			var newToDoItem = document.getElementById(toDoItems[toDoItems.length-1])
			var label = newToDoItem.getElementsByTagName('label')[0];
			label.style.color = '#000000';
		}else{
			inputBox.blur();			
		}
		onInputBoxBlur();
	}
}

function removeToDoItem(e){
	console.log("hi");
	console.log(e.target.parentNode);
	var element = e.target.parentNode;
	var elementID = element.getAttribute('id');
	console.log(elementID);
	element.parentNode.removeChild(element);
}

function createToDoItem(text){
	var newId = "item" + toDoItems.length;
	toDoItems.push(newId);
	var checkBox = "<input class='chkBox' type='checkBox'></input>";
	var textArea = "<label class='toDoItem' onFocus='onToDoItemFocus()' onkeypress='return onToDoKeyPress(event)'>"+text+" </label>";
	var removeButton = "<input type='button' class='remove' onClick='removeToDoItem(event)' value='X'> </input>";
	var newItem = "<div id='" + newId + "' class='toDoList'>" + checkBox + textArea + removeButton + "</div>";
	return newItem;
}
