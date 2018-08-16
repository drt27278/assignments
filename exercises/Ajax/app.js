// JS
    // document.
    // How to create elements
        // var h1 = document.createElement("h1");
        // var display = document.getElementById("list");
    // How to append elements
        // h1.textContent = "Hey I am an h1"; // (to add text from JS to HTML)
        // display.appenChild(h1);

// C-R-U-D:
    // Http:
    
    // Get:    Read
    // Post:   Create
    // Delete: Destroy
    // Put:    Update


// AJAX - Asynchronous Javascript amd XML(Extensible Markup Language)

    // readystate, on readystatechange

var xhr = new XMLHttpRequest();
    

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // Parsing - turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText);
        displayData(data);

    }
    // Code to do the request.

};

// 1.Request type 2.URL 3.Is Asynchronous
xhr.open("GET", "http://swapi.co/api/people/2/", true);
xhr.send();

function displayData(data){
   var display =  document.getElementById("list");
   display.textContent = data.name;

}



