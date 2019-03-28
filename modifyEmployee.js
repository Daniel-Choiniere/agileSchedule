	function makeModifyRequest() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this);
                document.getElementById("modifyResponse").innerHTML = this.responseText;
                // document.getElementById("modifyID").value = "";
                // document.getElementById("fnameChange").value = "";
                // document.getElementById("lnameChange").value = "";
                // document.getElementById("salaryChange").value = "";
                // document.getElementById("timeInChange").value = "";
                // document.getElementById("timeOutChange").value = "";
       }
    };
    // open(method, url, async)
    let url = "https://cors-anywhere.herokuapp.com/https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/" + document.getElementById("modifyID").value;
    xhttp.open("PUT", url, true);
    
    // set header to match get request
    xhttp.setRequestHeader("Content-type", "application/json");
    const data = {
    	"firstName": document.getElementById("fnameChange").value,
    	"lastName": document.getElementById("lnameChange").value,
    	"hourlyPayRate": document.getElementById("salaryChange").value,
    	"timeIn": document.getElementById("timeInChange").value,
    	"timeOut": document.getElementById("timeOutChange").value
    	
    };
    // console.log(data);
    xhttp.send(JSON.stringify(data));                                              
}