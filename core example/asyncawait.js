function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  //asynchronous functiion
  //In addition, all event properties and methods are an instance of an EventEmitter object.
  // To be able to access these properties and methods, create an EventEmitter object:
  async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();
  