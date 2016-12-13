    // This is the text editor interface. 
    // Anything you type or change here will be seen by the other person in real time.
    
    var myFunc = function (string) {
        console.log(string)
    }
    
    var myDebouncedFunc = debounce(myFunc, 1000)
    
    myDebouncedFunc('hello')
    myDebouncedFunc('hello')
    myDebouncedFunc('hello')
    myDebouncedFunc('only this should output', 'asdasd')
    
    // => executes once
    
    // function debounce(myFunc, time) {
    //     var _timer;
    //     return function() {
    //         if (_timer !== undefined) {
    //           clearTimeout(_timer);
    //         }
            
    //         console.log(arguments)
    //          _timer = setTimeout(myFunc.bind(this, arguments), time);
    //     };
    // };
    
    
    function debounce(myFunc, time) {
        var _timer;
        return function() {
            var _this = this;
            var args = arguments;
            
            if (_timer) {
               clearTimeout(_timer);
            }
            
             _timer = setTimeout(function() {
                 myFunc.apply(_this, args)
                 _timer = null;
             }, time);
    };
};
