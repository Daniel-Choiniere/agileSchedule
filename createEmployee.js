	function makePOSTRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this);
                document.getElementById("postResponse").innerHTML = this.responseText;
       }
    };
    
    // open(method, url, async)
    xhttp.open("POST", "https://cors-anywhere.herokuapp.com/https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/", true);
    
    // set header to match get request
    xhttp.setRequestHeader("Content-type", "application/json");
    const data = {
    	"firstName": document.getElementById("fname").value,
    	"lastName": document.getElementById("lname").value,
    	"hourlyPayRate": document.getElementById("payrate").value,
    };
    console.log(data);
    xhttp.send(JSON.stringify(data));                                                   
}
