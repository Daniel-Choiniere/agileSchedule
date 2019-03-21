        document.getElementById('button').addEventListener('click', loadEmployees);
        
        // Update an employees profile with a check in
        function checkIn() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://cors.io/?https://careerdevs18-liftedresearch.c9users.io:8080/api/employees/', true);
        }
        
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
                            '<li>'+ employees[i].name +'</li>' +
                            '<li>ID: '+ employees[i].id +'</li>' +
                            '<li>TIME IN: '+ employees[i].timeIn +'</li>' +
                            '<li>TIME OUT: '+ employees[i].timeOut +'</li>' +
                            '</ul>' +
                            '</div>';
                    }
                    document.getElementById('users').innerHTML = output;
                }    
            };
        xhr.send();        
        }   
        