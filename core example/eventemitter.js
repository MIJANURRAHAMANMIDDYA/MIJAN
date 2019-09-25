//Every action on a computer is an event. Like when a connection is made or a file is opened.
//Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your
// own events.

//To include the built-in Events module use the require() method.
//In addition, all event properties and methods are an instance of an EventEmitter object. 
//To be able to access these properties and methods, create an EventEmitter object:
var emitter = require('events').EventEmitter;

function LoopProcessor(num) {
    var e = new emitter();
    
    setTimeout(function ()
       {
        
          for (var i = 1; i <= num; i++) 
        {
            e.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            e.emit('AfterProcess', i);
         }
    }
    , 2000)
    
    return e;
}
var lp = LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});
