
$('p').forEach(function (el, index) {
  console.log(el.innerHTML);


console.log("I passed the fourth test");




});
A very small clone of JQuery. 
The main thing I cloned from JQuery is the $. 

Like JQuery, you can specify which tag(s) to manipulate with $.(). 

For example: 

$('p:first-child a').on('click', function (event) {
	event.preventDefault();

  console.log("I passed the first test(bind Event)");
  // do something else
});
Means all <a> tags that are the first childs of a <p> tag, I want them to do something (event.preventDefault()) when they are clicked on. Or in layman term, don't go anywhere when you click on those link tags. 

You can also make up an even like this. 


$('a').on('foo', function () {
 console.log("I passed the second test(Custom Event)");
});

$('a:first-child').trigger('foo');
 
The above we made up an event like "foo". Unlike "click", its not a built in event.
The second part we trigger this made up event "foo". 
This will execute the console.log() stuff we specified.

We can also specify all tags with a .forEach like below. 
	
	
$('p').forEach(function (el, index) {
  console.log(el.innerHTML);


console.log("I passed the fourth test");




});
	
