
//creating new element to add new text

function addNewWeField() {

    //create new element of textarea.
    let newNode = document.createElement('textarea');

    //add class and attributes to the textnode
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute('rows', 2);
    newNode.classList.add('mt-2');
    newNode.setAttribute('placeholder', 'Enter here')

    //where to add 
    let weOb = document.getElementById('we');

    //when we click on this button new node will be added
    let weAddButtonOb = document.getElementById('weAddButton');

    //insert before the work experience in short where to insert. ANd when we click on that button it will get added
    weOb.insertBefore(newNode, weAddButtonOb);
}

//academic qualification add button

function addNewAqField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows', 2);
    newNode.setAttribute('placeholder', 'Enter here')

    let aqOb = document.getElementById('aq');

    let aqAddButtonOb = document.getElementById('aqAddButton');

 //insert before the button's div
    aqOb.insertBefore(newNode, aqAddButtonOb);
}
;

// Add new project tital field
function addNewPField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('pField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter title here')


    let pOb = document.getElementById('project');

    let AddButtonP = document.getElementById('pAddButton');


     //insert before the button's div
    pOb.insertBefore(newNode, AddButtonP);
}

// Add new project report field
function addNewPrField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('prField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'file');
  
    let prOb = document.getElementById('projectReport');

     //insert before the button's div
    let AddButtonPr = document.getElementById('prAddButton');


    prOb.insertBefore(newNode, AddButtonPr);
}


// Add new skill field
function addNewskField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('skillField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter skills');
  
    let skOb = document.getElementById('skills');

    let AddButtonsk = document.getElementById('skAddButton');

    //insert before the button's div
    skOb.insertBefore(newNode, AddButtonsk);
}

// Add new language field
function addNewLangField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('langField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter languages');
  
    let langOb = document.getElementById('languages');

    let AddButtonlang = document.getElementById('langAddButton');

    //insert before the button's div
    langOb.insertBefore(newNode, AddButtonlang);
}


// Add new Strengths field
function addNewStrengthField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('strengthField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter your strength');
  
    let strengthOb = document.getElementById('Strengths');

    let AddButtonStrength = document.getElementById('strengthAddButton');

    //insert in strengthOb and insert before the button's div
    strengthOb.insertBefore(newNode, AddButtonStrength);
}

// Add new Weakness field
function addNewWeaknessField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('weaknessField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter your weakness');
  
    let weaknessOb = document.getElementById('weaknesses');

    let AddButtonWeakness = document.getElementById('weaknessAddButton');

    //insert in strengthOb and insert before the button's div that is insert before AddButtonWeakness
    weaknessOb.insertBefore(newNode, AddButtonWeakness);
}

// Add new hobby field
function addNewHobbyField() {

    let newNode = document.createElement('input');
    newNode.classList.add('form-control');
    newNode.classList.add('hobbyField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('type', 'text');
    newNode.setAttribute('placeholder', 'Enter your hobbies');
  
    let hobbyOb = document.getElementById('hobbies');

    let AddButtonHobbies = document.getElementById('hobbyAddButton');

    //insert in strengthOb and insert before the button's div that is insert before AddButtonWeakness
    hobbyOb.insertBefore(newNode, AddButtonHobbies);
}

//generating resume
function generateResume() {
    // console.log("generating Resume");


    let nameField ="Name: " + document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");
    let nameT1_two=document.getElementById("nameT1-two");
    let nameT1_three=document.getElementById("nameT1-three");
    let nameT1_four=document.getElementById("nameT1-four");
    let nameT1_five=document.getElementById("nameT1-five");
    let nameT1_six=document.getElementById("nameT1-six");


    nameT1.innerHTML = nameField;
    nameT1_two.innerHTML=nameField;
    nameT1_three.innerHTML=nameField;
    nameT1_four.innerHTML=nameField;
    nameT1_five.innerHTML=nameField;
    nameT1_six.innerHTML=document.getElementById("nameField").value
   



    // //direct

    // document.getElementById("nameT2").innerHTML = nameField;

    

    // document.getElementById("nameT2-two").innerHTML = nameField;
    // document.getElementById("nameT2-three").innerHTML = nameField;
    // document.getElementById("nameT2-four").innerHTML = nameField;
    // document.getElementById("nameT2-five").innerHTML = nameField;



    // //contact


    document.getElementById("contactT").innerHTML = document.getElementById("contactIT").innerHTML +" "+ document.getElementById("contactField").value;
    document.getElementById("contactT-two").innerHTML = document.getElementById("contactIT-two").innerHTML +" "+ document.getElementById("contactField").value;
    document.getElementById("contactT-three").innerHTML = document.getElementById("contactIT-three").innerHTML +" "+ document.getElementById("contactField").value;
    document.getElementById("contactT-four").innerHTML = document.getElementById("contactIT-four").innerHTML +" "+ document.getElementById("contactField").value;
    document.getElementById("contactT-five").innerHTML = document.getElementById("contactIT-five").innerHTML +" "+ document.getElementById("contactField").value;
    document.getElementById("contactT-six").innerHTML = document.getElementById("contactIT-six").innerHTML +" "+ document.getElementById("contactField").value;




    // // Address

    document.getElementById("addressT").innerHTML = document.getElementById("addressIT").innerHTML +" "+ document.getElementById("addressField").value;
    document.getElementById("addressT-two").innerHTML = document.getElementById("addressIT-two").innerHTML +" "+ document.getElementById("addressField").value;
    document.getElementById("addressT-three").innerHTML = document.getElementById("addressIT-three").innerHTML +" "+ document.getElementById("addressField").value;
    document.getElementById("addressT-four").innerHTML = document.getElementById("addressIT-four").innerHTML +" "+ document.getElementById("addressField").value;
    document.getElementById("addressT-five").innerHTML = document.getElementById("addressIT-five").innerHTML +" "+ document.getElementById("addressField").value;
    document.getElementById("addressT-six").innerHTML = document.getElementById("addressIT-six").innerHTML +" "+ document.getElementById("addressField").value;




    //email id

    document.getElementById("emailT").innerHTML = document.getElementById("emailIT").innerHTML +" "+document.getElementById("emailField").value;
    document.getElementById("emailT-two").innerHTML = document.getElementById("emailIT-two").innerHTML +" "+document.getElementById("emailField").value;
    document.getElementById("emailT-three").innerHTML = document.getElementById("emailIT-three").innerHTML +" "+document.getElementById("emailField").value;
    document.getElementById("emailT-four").innerHTML = document.getElementById("emailIT-four").innerHTML +" "+document.getElementById("emailField").value;
    document.getElementById("emailT-five").innerHTML = document.getElementById("emailIT-five").innerHTML +" "+document.getElementById("emailField").value;
    document.getElementById("emailT-six").innerHTML = document.getElementById("emailIT-six").innerHTML +" "+document.getElementById("emailField").value;




    //social media links

    //fb
    document.getElementById("fbT").innerHTML = document.getElementById("fbIT").innerHTML +" "+ document.getElementById("fbField").value;
    document.getElementById("fbT-two").innerHTML = document.getElementById("fbIT-two").innerHTML +" "+ document.getElementById("fbField").value;
    document.getElementById("fbT-three").innerHTML = document.getElementById("fbIT-three").innerHTML +" "+ document.getElementById("fbField").value;
    document.getElementById("fbT-four").innerHTML = document.getElementById("fbIT-four").innerHTML +" "+ document.getElementById("fbField").value;
    document.getElementById("fbT-five").innerHTML = document.getElementById("fbIT-five").innerHTML +" "+ document.getElementById("fbField").value;
    document.getElementById("fbT-six").innerHTML = document.getElementById("fbIT-six").innerHTML +" "+ document.getElementById("fbField").value;




    //linkedin
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedIT").innerHTML +" "+ document.getElementById("linkedField").value;
    document.getElementById("linkedT-two").innerHTML = document.getElementById("linkedIT-two").innerHTML +" "+ document.getElementById("linkedField").value;
    document.getElementById("linkedT-three").innerHTML = document.getElementById("linkedIT-three").innerHTML +" "+ document.getElementById("linkedField").value;
    document.getElementById("linkedT-four").innerHTML = document.getElementById("linkedIT-four").innerHTML +" "+ document.getElementById("linkedField").value;
    document.getElementById("linkedT-five").innerHTML = document.getElementById("linkedIT-five").innerHTML +" "+ document.getElementById("linkedField").value;
    document.getElementById("linkedT-six").innerHTML = document.getElementById("linkedIT-six").innerHTML +" "+ document.getElementById("linkedField").value;




    //github
    document.getElementById("githubT").innerHTML = document.getElementById("githubIT").innerHTML +" " + document.getElementById("githubField").value;
    document.getElementById("githubT-two").innerHTML = document.getElementById("githubIT-two").innerHTML +" " + document.getElementById("githubField").value;
    document.getElementById("githubT-three").innerHTML = document.getElementById("githubIT-three").innerHTML +" " + document.getElementById("githubField").value;
    document.getElementById("githubT-four").innerHTML = document.getElementById("githubIT-four").innerHTML +" " + document.getElementById("githubField").value;
    document.getElementById("githubT-six").innerHTML = document.getElementById("githubIT-six").innerHTML +" " + document.getElementById("githubField").value;




    // //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT-two").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT-three").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT-four").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT-five").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("objectiveT-six").innerHTML = document.getElementById("objectiveField").value;




    // //work experience

    let wes = document.getElementsByClassName("weField");

    let str = '';

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;

    }

    document.getElementById("weT").innerHTML = str;
    document.getElementById("weT-two").innerHTML = str;
    document.getElementById("weT-three").innerHTML = str;
    document.getElementById("weT-four").innerHTML = str;
    document.getElementById("weT-five").innerHTML = str;
    document.getElementById("weT-six").innerHTML = str;




    // //academic qualifications

    let aqs = document.getElementsByClassName("eqField");

    let str1 = '';

    for (let e of aqs) {
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;
    document.getElementById('aqT-two').innerHTML = str1;
    document.getElementById('aqT-three').innerHTML = str1;
    document.getElementById('aqT-four').innerHTML = str1;
    document.getElementById('aqT-five').innerHTML = str1;
    document.getElementById('aqT-six').innerHTML = str1;






    // //Project title

    let pt = document.getElementsByClassName("pField")

    let str2 = '';

    for (let e of pt) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById('pT').innerHTML = str2;
    document.getElementById('pT-two').innerHTML = str2;
    document.getElementById('pT-three').innerHTML = str2;
    document.getElementById('pT-four').innerHTML = str2;
    document.getElementById('pT-five').innerHTML = str2;
    document.getElementById('pT-six').innerHTML = str2;




    
    // skills

    let sk = document.getElementsByClassName("skillField")

    let str3 = '';

    for (let e of sk) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }

    document.getElementById('skT').innerHTML = str3;
    document.getElementById('skT-two').innerHTML = str3;
    document.getElementById('skT-three').innerHTML = str3;
    document.getElementById('skT-four').innerHTML = str3;
    document.getElementById('skT-five').innerHTML = str3;
    document.getElementById('skT-six').innerHTML = str3;





    // Languages

    let lang = document.getElementsByClassName("langField")

    let str4 = '';

    for (let e of lang) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }

    document.getElementById('langT').innerHTML = str4;
    document.getElementById('langT-two').innerHTML = str4;
    document.getElementById('langT-three').innerHTML = str4;
    document.getElementById('langT-four').innerHTML = str4;
    document.getElementById('langT-five').innerHTML = str4;
    document.getElementById('langT-six').innerHTML = str4;




    // Strengths

    let strength = document.getElementsByClassName("strengthField")

    let str5 = '';

    for (let e of strength) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }

    document.getElementById('strengthT').innerHTML = str5;
    document.getElementById('strengthT-two').innerHTML = str5;
    document.getElementById('strengthT-three').innerHTML = str5;
    document.getElementById('strengthT-four').innerHTML = str5;
    document.getElementById('strengthT-five').innerHTML = str5;
    document.getElementById('strengthT-six').innerHTML = str5;





    // weaknesses

    let weakness = document.getElementsByClassName("weaknessField")

    let str6 = '';

    for (let e of weakness) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }

    document.getElementById('weaknessT').innerHTML = str6;
    document.getElementById('weaknessT-two').innerHTML = str6;
    document.getElementById('weaknessT-three').innerHTML = str6;
    document.getElementById('weaknessT-four').innerHTML = str6;
    document.getElementById('weaknessT-five').innerHTML = str6;
    document.getElementById('weaknessT-six').innerHTML = str6;





    // Hobbies

    let hobbies = document.getElementsByClassName("hobbyField")

    let str7 = '';  

    for (let e of hobbies) {
        str7 = str7 + `<li> ${e.value} </li>`;
    }

    document.getElementById('hobbiesT').innerHTML = str7;
    document.getElementById('hobbiesT-two').innerHTML = str7;
    document.getElementById('hobbiesT-three').innerHTML = str7;
    document.getElementById('hobbiesT-four').innerHTML = str7;
    document.getElementById('hobbiesT-five').innerHTML = str7;
    document.getElementById('hobbiesT-six').innerHTML = str7;











    // code for setting image

    //This is first image in that id that is why it is at zeroth position. So we get that image and store into file.

    let file = document.getElementById('imgField').files[0];

    //create an object to read a file from fleReader function()
    let reader = new FileReader();

    //Now we are going to read the data in the file in url format
    reader.readAsDataURL(file);

    // console.log(reader.result);

    //set image to template

    //we have to call onloadend function on the reader. That is when the file loads completely then at the end load our image and make the src of that id as reader.result
    reader.onloadend = function(){
        document.getElementById('imgTemplate').src = reader.result; 
        document.getElementById('imgTemplate-two').src = reader.result; 
        document.getElementById('imgTemplate-three').src = reader.result; 
        document.getElementById('imgTemplate-four').src = reader.result; 
        document.getElementById('imgTemplate-five').src = reader.result; 
        document.getElementById('imgTemplate-six').src = reader.result;         
    }

    // Printing resume

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume").style.display = 'none';
    document.getElementById("header").style.display = 'none';
    document.getElementById("about_us").style.display = 'none';
    document.getElementById("faq").style.display = 'none';
    document.getElementById("availableRT").style.display = 'none';
    document.getElementById("footer").style.display = 'none';



    document.getElementById("resume-template").style.display = 'block';
    document.getElementById("resume-template-two").style.display = 'block';
    document.getElementById("resume-template-three").style.display = 'block';
    document.getElementById("resume-template-four").style.display = 'block';
    document.getElementById("resume-template-five").style.display = 'block';
    document.getElementById("resume-template-six").style.display = 'block';


    
    

    
}

//print Resume
function printResume() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'block';
    document.getElementById("resume-template-two").style.display = 'none';
    document.getElementById("resume-template-three").style.display = 'none';
    document.getElementById("resume-template-four").style.display = 'none';
    document.getElementById("resume-template-five").style.display = 'none';
    document.getElementById("resume-template-six").style.display = 'none';
    window.print();
}


function printResumeTwo() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'none';
    document.getElementById("resume-template-two").style.display = 'blcok';
    document.getElementById("resume-template-three").style.display = 'none';
    document.getElementById("resume-template-four").style.display = 'none';
    document.getElementById("resume-template-five").style.display = 'none';
    document.getElementById("resume-template-six").style.display = 'none';
    window.print();
}


function printResumeThree() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'none';
    document.getElementById("resume-template-two").style.display = 'none';
    document.getElementById("resume-template-three").style.display = 'block';
    document.getElementById("resume-template-four").style.display = 'none';
    document.getElementById("resume-template-five").style.display = 'none';
    document.getElementById("resume-template-six").style.display = 'none';
    window.print();
}


function printResumeFour() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'none';
    document.getElementById("resume-template-two").style.display = 'none';
    document.getElementById("resume-template-three").style.display = 'none';
    document.getElementById("resume-template-four").style.display = 'block';
    document.getElementById("resume-template-five").style.display = 'none';
    document.getElementById("resume-template-six").style.display = 'none';
    window.print();
}


function printResumeFive() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'none';
    document.getElementById("resume-template-two").style.display = 'none';
    document.getElementById("resume-template-three").style.display = 'none';
    document.getElementById("resume-template-four").style.display = 'none';
    document.getElementById("resume-template-five").style.display = 'block';
    document.getElementById("resume-template-six").style.display = 'none';
    window.print();
}

function printResumeSix() {

    document.getElementById("resume-form").style.display = 'none';
    document.getElementById("resume-template").style.display = 'none';
    document.getElementById("resume-template-two").style.display = 'none';
    document.getElementById("resume-template-three").style.display = 'none';
    document.getElementById("resume-template-four").style.display = 'none';
    document.getElementById("resume-template-five").style.display = 'none';
    document.getElementById("resume-template-six").style.display = 'block';
    window.print();
}