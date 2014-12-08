var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
var fileIO = require("sdk/io/file");
//var file= require("./my-script.js");
pageMod.PageMod({
  include: "*",
  contentScriptFile : [ data.url("jquery-1.10.2.js") , data.url("jquery-1.10.2.min.js") , data.url("my-mouse.js") , data.url("my-keyboard.js") ]  
});

