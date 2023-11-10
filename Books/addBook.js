var API_ENDPOINT = "https://kydmmjjd59.execute-api.us-east-1.amazonaws.com/dev"
//GET REQUEST
document.getElementById("submit").onclick = function(){
 var inputData = {
   "book_name":$('#book_name').val(),
       "author":$('#author').val(),
       "year":$('#year').val()
		};
 $.ajax({
       url: API_ENDPOINT,
       type: 'POST',
       data:  JSON.stringify(inputData)  ,
       contentType: 'application/json; charset=utf-8',
       success: function (response) {
         document.getElementById("addBook").innerHTML = "New Book is added successfully!";
       },
       error: function () {
           alert("error");
       }
   });
}

