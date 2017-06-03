document.addEventListener("DOMContentLoaded", 
 function (event)
 {
 	console.log("This is my flowerbot");
	function postTextLex() {

		AWS.config.apiVersions = {
        lexruntime: '2016-11-28',
        // other service API versions
       };

        
       	//Specify AWS credentials
        AWS.config.update({
		    accessKeyId: "<YOUR AWS API KEY>",
    		secretAccessKey: "<YOUR AWS ACCESS KEY>",
    		region:'us-east-1' //choose a region
		});


		var lexruntime = new AWS.LexRuntime();
		var getInput = document.getElementById("txtInput").value;

		//Create parameters for Lex
		var params = {
		  botAlias: '<yourbotalias>', /* required */
		  botName: '<yourbotname>', /* required --example OrderFlowers*/
		  inputText: getInput, /* required */
		  userId: '<typeanyusername>', /* required */
		  sessionAttributes: {}
		};

		//Post Text to Lex
		lexruntime.postText(params, function(err, data) {
		  if (err) {
		    console.log(err, err.stack); // an error occurred
		  }
		  else {
		 	   console.log(data); // successful response
		 	   document.getElementById("content").innerHTML += data.message + "<br>";
		  } ;   
		 });
		 
		 //Set the text box blank
		 document.getElementById("txtInput").value='';

	}
	document.getElementById("startChat").onclick = postTextLex;
 }
)