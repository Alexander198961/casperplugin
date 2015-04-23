
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var count=0
var Request = require("sdk/request").Request;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
  //  "64": "./icon-64.png"
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
 // tabs.open("https://www.mozilla.org/");

pageMod.PageMod({
  include: "*",
  
  contentScriptFile : [ data.url("jquery-1.10.2.js") , data.url("jquery-1.10.2.min.js") , data.url("mytest.js") , data.url("my-keyboard.js") ],
  onAttach: function(worker) {
      //count=++count
    //  url="http://127.0.0.1:7379/SET/test"
   //   console.log(url)
      worker.port.on('response',function( message)
      {
        url="http://127.0.0.1:7379/SET/tester"  
        message=message.replace(/\//g , "slash") 
        count=++count
       
        url=url+parseInt(count)+"/"+message
        console.log(url) 
        var quijote = Request({
        url: url,
});
quijote.get();
  })

     }
   // );
}
);
}
