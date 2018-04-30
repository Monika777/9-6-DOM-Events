var addElem = document.getElementById('addElem');
var list = document.getElementById('list');


addElem.addEventListener('click', function() {
	var element = document.createElement('li');
	var itemNumber = list.getElementsByTagName('li');
	element.innerHTML = 'item '+itemNumber.length;
  	list.appendChild(element);
});

//checkOnclickEvent('button was clicked')
