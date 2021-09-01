function table(name1){

var t1 = document.getElementById("table");

var csize=document.getElementById("table").rows.length;

    if(name1!=''){    
    var name = name1;
    }
    else{
        var name=document.getElementById("ename").value;
    }

var c=document.getElementById("count")
c.innerHTML= csize +" Employees";
var row = t1.insertRow();

var btn1 = "<button class='edit' onclick='edit("+cell1+") id='row'>Edit</button>";
var btn2 = "<button class='del' onclick='del("+btn2+")'>Delete</button>";

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = name;
cell2.innerHTML = btn1;
cell3.innerHTML = btn2;
}
function edit(){
    var newname;
    newname=prompt("Enter new name");
    table(newname);

}
function del(){
    document.getElementById("table").deleteRow();
    var c=document.getElementById("count")
    c.innerHTML= (cs-1) +" Employees";
}