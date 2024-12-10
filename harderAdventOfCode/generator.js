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
    fs.writeFileSync(path.join(folderPath, "index.txt"), ``);
  }

  console.log(`Folder${i} created with app.js, index.html, and styles.css`);
}

console.log("All folders created successfully!");
