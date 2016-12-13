
/* Write your function here. Useful type checking functions: 
 *
 * typeof(obj) === "string"
 * typeof(obj) === "number"
 * Array.isArray(obj) === true
 * typeof(obj) === "object" [and !isArray]
 */

var my_json_encode = function(obj) {
  if (obj === undefined) { return '"undefined"' }
  
  switch (typeof obj) {
    case 'object':
        if (Array.isArray(obj) === true) {
            // var aresult = '['
            // for (var i = 0; i < obj.length; i++ ) {
            //     if (i === obj.length - 1) {
            //         aresult += my_json_encode(obj[i]);    
            //     } else {
            //         aresult += my_json_encode(obj[i]) + ', ';
            //     }
            // }
            // return aresult + ']'
            
            for (var i = 0; i < obj.length; i++ ) {
                obj[i] = my_json_encode(obj[i]);
            }
            
            return '[' + obj.join(', ') + ']';
        } else {
            // var t0 = GlobalPerformance.performance.now();
            // var t0 = new Date().getTime();
            
            var oresult = '{';
            var keys = Object.keys(obj);
            
            for (var i = 0; i < keys.length; i++) {
                if (i === keys.length - 1) {
                    oresult += my_json_encode(keys[i]) + ' : ' + my_json_encode(obj[keys[i]]);
                } else {
                    oresult += my_json_encode(keys[i]) + ' : ' + my_json_encode(obj[keys[i]])  + ', ';
                }
            }
            // var t1 = performance.now();
            // var t1 = new Date().getTime();
            // console.log(t1-t0);
            return oresult + '}';
        }
    case 'string':
        return '"' + obj + '"';
    case 'number':
        return obj.toString();
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";
var parsed_input;

process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {
	parsed_input = JSON.parse(input); 
    output = my_json_encode(parsed_input);
  
    process.stdout.write(output);
});

