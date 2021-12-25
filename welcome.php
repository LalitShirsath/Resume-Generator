<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: form.php");
}

?>

<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style1.css"/>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#"> <img src="https://img.icons8.com/metro/26/000000/guest-male.png"> <?php echo "Welcome ". $_SESSION['username']?></a>
                </li>
            </ul>

            <div class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="logout.php">Logout</a>
                    </li>  
                </ul>
            </div>
         </div>
    </nav>

    <!-- CV Form -->
    <h1 class="text-center mt-2">Resume Generator</h1>
    
        
    <hr>
            
    <div class="container" id="cv-form">
        <div class="row">
            <div class="col-md-6 mt-3">
                <h3>Personal Information</h3>
                <form action="config1.php"  onsubmit="func()" method="post" enctype="multipart/form-data">
                <div class="form-group mt-2">
                    <label for="nameField">Your Name</label>
                    <input type="text" id="nameField" name="nameField" pattern="[A-Za-z ]{1,100}" placeholder="Enter Here" class="form-control">
                </div>

                <div class="form-group mt-2">
                    <label for="contactField">Your Contact No</label>
                    <input type="number" id="contactField" name="contactField" placeholder="Enter Here" class="form-control">
                </div>

                <div class="form-group mt-2">
                    <label for="emailField">Your Email</label>
                    <input type="email" id="emailField" name="emailField" placeholder="Enter Here" class="form-control">
                </div>

                <div class="form-group mt-2">
                    <label for="addressField">Your Address</label>
                    <textarea type="text" id="addressField" name="addressField" placeholder="Enter Here" class="form-control" rows="5"></textarea>
                </div>

                
                <p class="text-secondary mt-5"><h3>Important Links</h3></p>

                <div class="form-group mt-2">
                    <label for="linkedField">LinkedIn Profile</label>
                    <input type="text" id="linkedField" name="linkedField" placeholder="Enter Here" class="form-control">
                </div>
            
            </div>
            


            <div class="col-md-6 mt-3">
                <h3>Professional Information</h3>

                <div class="form-group mt-2">
                    <label for="objective">Objective</label>
                    <textarea type="text" id="objective" name="objective" placeholder="Enter Here" class="form-control" rows="4"></textarea>
                </div>

                <div class="form-group mt-2">
                    <label for="weField">Work Experience</label>
                    <textarea type="text" id="weField" name="weField" placeholder="Use format : <li>Role</li>Company|Duration" class="form-control" rows="3"></textarea>
                </div>

                <div class="form-group mt-2">
                    <label for="aqField">Academic Qualification</label>
                    <textarea type="text" id="aqField" name="aqField" placeholder="Use format : <li>Degree</li>School/College|Year of Passing" class="form-control" rows="3"></textarea>
                </div>
        
                <div class="form-group mt-2">
                    <label for="skField">Skills</label>
                    <textarea type="text" id="skField" name="skField" placeholder="Use format : <li>Skills</li>" class="form-control" rows="3"></textarea>
                </div>

                <div class="form-group mt-2">
                    <label for="prField">Projects</label>
                    <textarea type="text" id="prField" name="prField" placeholder="Enter Here" class="form-control" rows="3"></textarea>
                </div>

                <div class="form-group mt-3">
                    <label for="">Select your photo</label>
                    <input id="file" name="file" type="file" class="form-control">
                </div>

                <input style="background-color:white; border-color: white;" type="submit" class="btn btn-primary" name="submit" id="formSubmit"/>

                </form>
                
            </div>
            
        </div>

        <div class="container text-center mt-3">
            <button onclick="generateCV()" class="btn btn-primary btn-lg">
                Generate CV
            </button>
        </div>

    </div>

    <hr>

    
    <!-- cv template-->
    <div class="container" id="cv-template">
        
        <div class="row mt-5">
            <div class="col-md-4  text-center py-3 background">
                <!-- first column -->
                <img src="icon.jpg" alt="" class="img-fluid myimg" id="imgT"/>
                
                <div class="container">
                    <p id="nameT1">Name</p>
                    <p id="contactT">Contact Number</p>
                    <p id="emailT">Email</p>
                    <p id="addressT">Address</p>
                    <hr/>
                    <p>
                        <a id="linkedT" href="https://www.linkedin.com/">LinkedIn</a>
                    </p>
                </div>
            </div>

            <div class="col-md-8 py-3">
                <!-- second column -->
                <h1 id="nameT2" class="text-center" style="font-weight:980">Name</h1>

                <!-- Objective card-->
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Objective</h3>
                    </div>
                    <div class="card-body">
                        <p id="objectiveT">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis quas praesentium ad molestias ipsam unde molestiae voluptate. Illo ea aperiam, adipisci harum sunt, consectetur error facilis ab repellat commodi ducimus earum veniam corrupti dignissimos velit, molestiae officiis porro. Architecto unde debitis eius rerum dolore corporis, fugiat autem quaerat velit!</p>
                    </div>
                </div>

                <!-- Work Experience-->
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Work Experience</h3>
                    </div>
                    <div class="card-body">
                        <p id="weT">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <!-- Academic Qualification-->
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Academic Qualification</h3>
                    </div>
                    <div class="card-body">
                        <p id="aqT">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <!-- Skills-->
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Skills</h3>
                    </div>
                    <div class="card-body">
                        <p id="skT">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <!-- Projects -->
                <div class="card mt-4">
                    <div class="card-header background">
                        <h3>Projects</h3>
                    </div>
                    <div class="card-body">
                        <p id="prT">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div class="container mt-3 text-center">
                    <button onclick="printCV()" class="btn background">
                        Print CV
                    </button>
                </div>

            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="script.js"></script>
    

</body>

</html>

