function emptyField(){
    let emptyTitle = document.getElementById("emptyTitle");
    if (document.getElementById("title").value == ''){
        emptyTitle.textContent = "This field is empty";
        emptyTitle.style.color = 'orange';
    }
    else{
        emptyTitle.textContent = "✔";
        emptyTitle.style.color = 'green';
    }
    let emptyLoc = document.getElementById("emptyLoc");
    if (document.getElementById("location").value == ''){
        emptyLoc.textContent = "This field is empty";
        emptyLoc.style.color = 'orange';
    }
    else{
        emptyLoc.textContent = "✔";
        emptyLoc.style.color = 'green';
    }
    let emptyDate = document.getElementById("emptyDate");
    if (document.getElementById("date").value == ''){
        emptyDate.textContent = "This field is empty";
        emptyDate.style.color = 'orange';
    }
    else{
        emptyDate.textContent = "✔";
        emptyDate.style.color = 'green';
    }
    let emptyNames = document.getElementById("emptyNames");
    if (document.getElementById("names").value == ''){
        emptyNames.textContent = "This field is empty";
        emptyNames.style.color = 'orange';
    }
    else{
        emptyNames.textContent = "✔";
        emptyNames.style.color = 'green';
    }
}

function clearData(){
    document.getElementById("summary").innerHTML="";
    document.getElementById("title").innerHTML="";
    document.getElementById("location").innerHTML="";
    document.getElementById("date").innerHTML="";
    document.getElementById("names").innerHTML="";
}

  
function displayData() {
    const form = document.forms["reg_form"];
    let formData = "<tr>";
    for (let i = 0; i <form.length-1 ;i++)
        formData += "<td>" + form.elements[i].value + "</td>";
    formData+="</tr>";
    document.getElementById("summary").innerHTML+=formData;}