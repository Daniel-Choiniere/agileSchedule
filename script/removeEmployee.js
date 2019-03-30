function removeEmployee() {
    var xhr = new XMLHttpRequest();
    var url = "https://cors-anywhere.herokuapp.com/https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/" + document.getElementById("deleteID").value;;
    console.log(url);
    xhr.open("DELETE", url, true);
    xhr.onload = function () {
    	var users = JSON.parse(xhr.responseText);
    	if (xhr.readyState == 4 && xhr.status == "200") {
    		console.log(this.responseText);
    	} else {
    		console.error(users);
    	}
    };
    xhr.send(null);
} 