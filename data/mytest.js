
function getXPath( element )
{
var val=element.value;
    //alert("val="+val);
    var xpath = '';
    for ( ; element && element.nodeType == 1; element = element.parentNode )
    {
        //alert(element);
        var id = $(element.parentNode).children(element.tagName).index(element) + 1;
        id > 1 ? (id = '[' + id + ']') : (id = '');
        xpath = '/' + element.tagName.toLowerCase() + id + xpath;
    }
    return xpath;
}
var click=0;

self.port.emit('response', window.location.href)
$( "body" ).on( "click", function( event ) {

// var xpath=getXPath(event.target)
 //var passedJson=JSON.stringfy({url:window.location.href, position:xpath });
  // var ValidJSON = JSON.stringify({ id:click , url: window.location.href, position:xpath});

// self.port.emit('response', ValidJSON)
  //self.port.emit('response', window.location.href)

  self.port.emit('response', getXPath(event.target)) 
})

//self.port.on("detach", function() {
 // console.log("AAAAAAAA")
//})
//self.port.on('detach', function() {
//self.port.on('message',  'AAASASAsASASAS');
//})
//});
//self.addEventListener('mousedown', function(evt) {
//  self.postMessage(evt.data);
//}, false);


