function validate(){
    var phoneno = document.getElementById("no").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if(fname.length==0){
        alert("Please enter First Name!");
        document.getElementById("fname").style.borderColor = "red";
        return false;
    }
    
    if(lname.length==0){
        alert("Please enter Last Name!");
        document.getElementById("lname").style.borderColor = "red";
        return false;
    }

    if (phoneno.length != 10 || isNaN(phoneno)) {
        alert("Please enter a valid 10-digit phone number!");
        document.getElementById("no").style.borderColor = "red";
        return false;
    }
    document.getElementById("no").style.borderColor = "";
    document.getElementById("fname").style.borderColor = "";
    document.getElementById("lname").style.borderColor = "";

    insertIntoTable();
    return true;
  
}
function capitalise(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
}
function insertIntoTable(){
    var fname=capitalise(document.getElementById("fname").value);
    var lname=capitalise(document.getElementById("lname").value);
    var fno=document.getElementById("no").value;
    var hobby=capitalise(document.getElementById("hobby").value);

    var tab=document.getElementsByClassName("t")[0];

    var row=tab.insertRow(tab.rows.length);

    var cel1=row.insertCell(0);
    var cel2=row.insertCell(1);
    var cel3=row.insertCell(2);
    var cel4=row.insertCell(3);
    var cel5=row.insertCell(4);

    cel1.innerHTML=fname;
    cel2.innerHTML=lname;
    cel3.innerHTML=fno;
    cel4.innerHTML=hobby;
    cel5.innerHTML='<button onclick= "edit(this)">Edit</button> <button onclick= "deleteIt(this)">Delete</button>';
    
    document.getElementById("details").reset();    
    
}
function deleteIt(button){
    if (confirm('Are you sure to delete this record ?')) {
        row = button.parentElement.parentElement;
        document.getElementsByClassName("t")[0].deleteRow(row.rowIndex);
        resetForm();
    }
}
function edit(button){
        var row=button.parentElement.parentElement;
        var cells=row.children;
        var fname=cells[0].innerHTML;
        var lname=cells[1].innerHTML;
        var no=cells[2].innerHTML;
        var hobby=cells[3].innerHTML;
        
        cells[0].innerHTML='<input type="text" value="'+fname+'">';
        cells[1].innerHTML='<input type="text" value="'+lname+'">';
        cells[2].innerHTML='<input type="text" value="'+no+'">';
        cells[3].innerHTML='<input type="text" value="'+hobby+'">';
        cells[4].innerHTML='<button onclick = "save(this)"> Save </button>';
}
function save(button){
    var row=button.parentElement.parentElement;
    var cells=row.children;
    var newFName=capitalise(cells[0].firstChild.value);
    var newLName=capitalise(cells[1].firstChild.value);
    var newFNo=cells[2].firstChild.value;
    var newHobby=capitalise(cells[3].firstChild.value);

    cells[0].innerHTML=newFName;
        cells[1].innerHTML=newLName;
        cells[2].innerHTML=newFNo;
        cells[3].innerHTML=newHobby;
        cells[4].innerHTML='<button onclick = "edit(this)"> Edit </button> <button onclick= "deleteIt(this)">Delete</button>';
    

}