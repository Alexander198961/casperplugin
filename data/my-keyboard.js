$( "body" ).on( "keydown", function( event ) {
 console.log(event.type+":"+event.which)
if(event.which!=18)
{
self.port.emit('response', event.type + ":"+event.which)
}
})
;
