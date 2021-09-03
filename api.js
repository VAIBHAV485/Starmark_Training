function fetchall()
        {
            fetch('https://reqres.in/api/users')
             .then(response=>response.json())
              .then(posts=>{
                    var result='<table><th>Id</th><th>email</th><th></th>';
                        posts.data.forEach(function(posts){
                            result+="<tr>";
                            result+="<td>"+posts.id+"</td>"; 
                            result+="<td>"+posts.email+"</td>"; 
                            result+="<td><image src="+posts.avatar+"></image></td>"; 
                        });
                    document.getElementById("data").innerHTML = result;
                    });
            
                }
                function fetchone()
                {
                    var id=prompt("Enter your id");
                    fetch('https://jsonplaceholder.typicode.com/todos/'+id)
                    .then(response=>response.json())
                    .then(posts=>{
                    var result='<table><th>UserID</th><th>ID</th><th>Title</th> ';
                    result+="<tr>";
                    result+="<td>"+posts.userId+"</td>"; 
                    result+="<td>"+posts.id+"</td>"; 
                    result+="<td>"+posts.title+"</td>"; 
                    document.getElementById("data").innerHTML = result;    
                });
                }
                function alltitles()
                {
                    fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(response=>response.json())
                    .then(posts=>{

                    var result='<table><th>Title</th>';
                    posts.forEach(function(posts){
                    result+="<tr>";
                    result+="<td>"+posts.title+"</td>"; 
                });
                document.getElementById("data").innerHTML = result;  
            });
        }
