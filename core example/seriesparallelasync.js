//parallel asynchronous
//When we have to run multiple tasks independent of each other without waiting until the 
//previous task has completed, parallel comes into the picture.
async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 100);
    }
  ],
  function(err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });
  //series asynchronous
  //When we have to run multiple tasks which depend on the output of the previous task.3,
  // series comes to our rescue.
  async.series([
    function(callback) {
      console.log('one');
      callback(null, 1);
    },
    function(callback) {
      console.log('two');
      callback(null, 2);
    },
    function(callback) {
      console.log('three');
      callback(null, 3);
    }
  ],
  function(err, results) {
    console.log(result);
    // results is now equal to [1, 2, 3]
  });
  
  //waterfalls asynchronous
  async.waterfall([
    function(callback) {
      callback(null, 'Task 1', 'Task 2');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
      let arg3 = arg1 + ' and ' + arg2;
      callback(null, arg3);
    },
    function(arg1, callback) {
      // arg1 now equals 'Task1 and Task2'
      arg1 += ' completed';
      callback(null, arg1);
    }
  ], function(err, result) {
    // result now equals to 'Task1 and Task2 completed'
    console.log(result);
  });
  