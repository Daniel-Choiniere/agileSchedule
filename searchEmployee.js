function searchEmployee() {
    var url = "https://cors.io/?https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/" + document.getElementById("lname").value;
    location.href = url;
    return false;
}
