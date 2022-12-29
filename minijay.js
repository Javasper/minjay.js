/*inspired by min.js by remy at https://github.com/remy */
  
$ = (function (document, window, $) {
  // Node covers all elements, but also the document objects
  var node = Node.prototype,
      nodeList = NodeList.prototype,
      forEach = 'forEach',
      trigger = 'trigger',
//      each = [][forEach],
      // note: createElement requires a string in Firefox
      dummy = document.createElement('i');
 


  NodeList.prototype.forEach = []['forEach'];

  // we have to explicitly add a window.on as it's not included
  // in the Node object.
  window.on = Node.prototype.on = function(event, fn)
  {
  
this.addEventListener(event, fn, false);    
return this;
  }

  NodeList.prototype.on = function(event, fn)
  {
  this['forEach'](function(el)
  {
  el.on(event, fn);
  
  });
  return this;
  }
  /*set way to create an event for all Node objects*/

  // we save a few bytes (but none really in compression)
  // by using [trigger] - really it's for consistency in the
  // source code.
  window.trigger = Node.prototype.trigger = function(type, data)
  {
  var event = new Event(type);
  this.dispatchEvent(event);
  return this;
  }

/*set way to create an event for all NodeList objects  */
NodeList.prototype.trigger = function(event)
{
this.forEach(function(el)
{
el.trigger(event);
})
return this;
}
/*create way to select element similar to JQuery*/


$ = function (s) {
  // querySelectorAll requires a string with a length
  // otherwise it throws an exception
  var r = document.querySelectorAll(s),
      length = r.length;
  // if we have a single element, just return that.
  // if there's no matched elements, return a nodeList to chain from
  // else return the NodeList collection from qSA
  return length == 1 ? r[0] : r;
};





  
Node.prototype.delegate = function(selector, e, fn)
{
    
    this.addEventListener(e, function(event){
        
        let childs  =   Array.from(this.querySelectorAll(selector));
        if(childs.indexOf(event.target) > -1)
        {
          fn(event.target);

        }

    }); /*addEventListener*/

}










  // $.on and $.trigger allow for pub/sub type global
  // custom events.
  $.on = node.on.bind(dummy);
  $[trigger] = node[trigger].bind(dummy);

  return $;


})(document, this);