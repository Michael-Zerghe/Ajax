   //Create the XHR Object
  /* let xhr = new XMLHttpRequest;


   //Call the open function, GET-type of request, url, true-asynchronous
   xhr.open('GET','https://thatsthespir.it/api' , true)


   //call the onload 
   xhr.onload = function() 
       {
           //check if the status is 200(means everything is okay)
           if (this.status === 200) 
               {
                   //return server response as an object with JSON.parse
                   console.log(JSON.parse(this.responseText));
       }
               }
   //call send
   xhr.send(); */


   //Common Types of HTTP Statuses
   // 200: OK
   // 404: ERROR
   // 403: FORBIDDEN

   async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://thatsthespir.it/api');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }


//call getData function
getData()
.then(data => document.getElementById("quote").innerHTML = data.quote + data.author);

//log the data