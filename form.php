<html>
<head>
    <title>Home Page</title>
    <link rel="stylesheet" type="text/css" href="backoffice.css">
</head>
<body>
    <div class="container">
<div>
    <h1 class="header_text">Hello <?php echo $_POST["username"]; ?></h1>
</div>
<div>
<p class="info">Email: <?php echo $_POST["email"]; ?></p>
<p class="info">Password: <?php echo $_POST["password"]; ?></p>
</div>
</div>

</body>
</html>