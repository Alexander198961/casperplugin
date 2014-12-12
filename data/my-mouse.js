/*
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
*/
self.port.on('click', function() {
self.port.emit('response', 'lalala');

});
/*
//$( "body" ).on( "click", function( event ) {
//self.port.emit(arr.push(getXPath(event.target))) ;
//console.log('aaaaaaaaaaaa')
//}
//);
//self.port.on("getElements", function() {
 // console.log('zzzzzzzzzz')
  //for (var i = 0; i < arr.length; i++) {
    //self.port.emit("gotElement", arr[i]);
    
 // }
//});
//self.port.on("getElements", function() {
//  var arr =new Array("sdadas","dsad","dsadasd")
//  for (var i = 0; i < arr.length; i++) {
 //   self.port.emit("gotElement", arr[i]);
 // }
//});
//self.port.on("getElements", function() {
 
  //for (var i = 0; i < arr.length; i++) {
    //self.port.emit("gotElement", arr[i]);
  //}
//});
  

//self.port.on("getElements", function() {
  //  for(i=0;i<arr.length;i++)
    //{
     // self.port.emit("gotElement", arr[i]);
   // }
//});
*/

