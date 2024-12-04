const fs = require("fs");
const path = require("path");

const folderCount = 25; // Number of folders to create

// Create folders and files
for (let i = 1; i <= folderCount; i++) {
  const folderName = `day${i}`;
  const folderPath = path.join(__dirname, folderName);

  // Create the folder
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);

    // Create app.js file
    fs.writeFileSync(
      path.join(folderPath, "app.js"),
      `console.log('App ${i} is running');`
    );

    // Create index.html file
    fs.writeFileSync(
      path.join(folderPath, "index.html"),
      `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Folder ${i}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to Folder ${i}</h1>
  <script src="app.js"></script>
</body>
</html>`
    );

    // Create styles.css file
    fs.writeFileSync(
      path.join(folderPath, "styles.css"),
      `
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}`
    );
  }

  console.log(`Folder${i} created with app.js, index.html, and styles.css`);
}

console.log("All folders created successfully!");
