
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile : [ data.url("jquery-1.10.2.js") , data.url("jquery-1.10.2.min.js") , data.url("mytest.js") , data.url("my-keyboard.js") ],
  onAttach: function(worker) {
    //worker.port.emit('click' );
      worker.port.on('response',function( message)
      { 
      console.log(message)
      writeTextToFile(message,"/tmp/text")
     }
    );
}
});
function writeTextToFile(text, filename) {
  var fileIO = require("sdk/io/file");
  var TextWriter = fileIO.open(filename, "w");
  if (!TextWriter.closed) {
    TextWriter.write(text);
    TextWriter.close();
  }
}
