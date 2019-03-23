document.getElementById('allEmployeeButton').addEventListener('click', loadEmployees);

// Load All Employees
function loadEmployees() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cors.io/?https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/', true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            var employees = JSON.parse(this.responseText);
    
            var output = "";
            for (var i in employees){
                output += 
                    '<div class="user">' +
                    '<ul style="list-style: none">' +
                    '<li>'+ '<strong>' + employees[i].name + '</strong>' +'</li>' +
                    '<li><strong>ID:</strong> '+ employees[i].id +'</li>' +
                    '<li><strong>TIME IN:</strong> '+ employees[i].timeIn +'</li>' +
                    '<li><strong>TIME OUT:</strong> '+ employees[i].timeOut +'</li>' +
                    '</ul>' +
                    '</div>';
            }
            document.getElementById('users').innerHTML = output;
        }    
    };
xhr.send();        
}   
        
        
        