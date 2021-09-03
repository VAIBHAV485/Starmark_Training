function Addrecord(name1){

var t1 = document.getElementById("table");

var csize=document.getElementById("table").rows.length;

csize+=1;
console.log(csize);
    if(name1!=''){    
    var name = name1;
    }
    else{
        var name=document.getElementById("ename").value;
    }

var c=document.getElementById("count")
c.innerHTML= csize +" Employees";
var row = t1.insertRow();
row.id=csize;
var btn1 = "<button class='edit' onclick='edit("+csize+")' id='csize'>Edit</button>";
var btn2 = "<button class='del' onclick='del("+row.id+")'>Delete</button>";

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

cell1.innerHTML = name;
cell2.innerHTML = btn1;
cell3.innerHTML = btn2;
}
function editrecord(name){
    var newname;
    newname=prompt("Enter new name");
    var name1=document.getElementById(name);
    name1.cells[0].innerHTML=newname;
}
function deleterecord(rowid){
    var count=document.getElementById(rowid).rowIndex;
    var csize= document.getElementById("table").rows.length;
    document.getElementById("table").deleteRow(count);
    var c=document.getElementById('count');
    c.innerHTML= (csize-1) +" Employees";
}