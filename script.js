//Generating CV
function generateCV()
{
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //name
    document.getElementById("nameT2").innerHTML= nameField;
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //email
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    //fb
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    //insta
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    //linked
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    //objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;
    
    //work experience
    document.getElementById("weT").innerHTML = document.getElementById("weField").value;

    //aq
    document.getElementById("aqT").innerHTML = document.getElementById("aqField").value;

    //sk
    document.getElementById("skT").innerHTML = document.getElementById("skField").value;

    //pr
    document.getElementById("prT").innerHTML = document.getElementById("prField").value;

    //code for setting image
    let file = document.getElementById("file").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set image to template

    reader.onloadend = function()
    {
        document.getElementById("imgT").src = reader.result;    
    };
    
    document.getElementById("cv-form").style.display = "block";
    document.getElementById("cv-template").style.display = "block";

}




//print cv
function printCV()
{
    
    window.print();
}