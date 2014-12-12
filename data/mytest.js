
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
var click;
$( "body" ).on( "click", function( event ) {
  click=event.target.tagName
  console.log('dsadasdas')
  self.port.emit('response','hello world') 
//  console.log('dasdasdas', click );
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


