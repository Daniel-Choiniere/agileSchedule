
/*global today*/
document.getElementById('allEmployees').addEventListener('click', loadEmployees);

// Load Employee Data
function loadEmployees() {
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "http://careerdevs18-liftedresearch.c9users.io:8080/api/employees/", true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            
            let empData = JSON.parse(this.responseText);
            let output = empData;
            
            document.getElementById('dataDisplay').innerHTML = output;
        }    
    };
xhr.send();        
}   