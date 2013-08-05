var toDoItems = ["item0"];
var DEFAULT_TEXT = "What needs to be done?";
var toDoItemID = "item";

function onInputBoxFocus(){
	box = document.getElementById('item0');	
	if (box.value === DEFAULT_TEXT){
		box.value = "";
		document.getElementById('item0').style.color = '#000000';
	}
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
		var text = document.getElementById('item0').value;
		containerDiv.innerHTML += createToDoItem(text);
		var itm = document.getElementById(toDoItems[toDoItems.length-1]);		
		itm.style.color = '#000000';
		document.getElementById('item0').style.color='#999999';			
	}
}

function createToDoItem(text){
	var newId = "item" + toDoItems.length;
	toDoItems.push(newId);
	console.log(text);
	var checkBox = "<input class='chkBox' type='checkBox'></input>";
	var inputBox = "<input id=" + newId + " value='" + text +"' class='toDoItem' type='text' onFocus='onToDoItemFocus()' onkeypress='return onToDoKeyPress(event)'></input>";
	var newItem = "<div class='toDoList'>" + checkBox + inputBox + "</div>";
	return newItem;
}
