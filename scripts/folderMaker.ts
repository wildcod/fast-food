const fs = require('fs');
const path = require('path');

// helper functions:
const creatDir = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });
};

const writeToFile = (filePath, contentList) => {
  fs.writeFileSync(filePath, contentList);
};

// -------------------- Component content -----------------------------//

const getTsxFileContent = (componentName) =>
  `import React from 'react';
   import './${componentName}.scss';
   interface Props {}
   const ${componentName}: React.FC<Props> = () => {
      return (
         <div>${componentName}</div>
    );
  };
  export default ${componentName};`;

// --------------------Reading Inputs through terminal-----------------------------//

const createComponentDir = (fileLoc, componentName) => {
  const dir = path.resolve(fileLoc, componentName);
  if (!fs.existsSync(dir)) {
    creatDir(dir);
    console.log('Folder Created !!');
  }
};

// -------------------- Creating Component File -----------------------------//

const createComponentFile = (fileLoc, componentName) => {
  const dir = path.resolve(fileLoc);
  if (!fs.existsSync(dir)) {
    creatDir(dir);
    console.log('File Created !!');
  }
  const fileName = path.resolve(dir, componentName, `${componentName}.tsx`);
  const fileContent = getTsxFileContent(componentName);
  writeToFile(fileName, fileContent);
};

// -------------------- Creating Scss File -----------------------------//

const createComponentScssFile = (fileLoc, componentName) => {
  const dir = path.resolve(fileLoc);
  const fileName = path.resolve(dir, componentName, `${componentName}.scss`);
  const fileContent = ''; // TODO: Add common content;
  writeToFile(fileName, fileContent);
};

// --------------------Reading Inputs through terminal-----------------------------//

(() => {
  const folderPath = process.argv[2]; // relative path
  const componentName = process.argv[3];

  try {
    createComponentDir(folderPath, componentName);
    createComponentFile(folderPath, componentName);
    createComponentScssFile(folderPath, componentName);
    console.log('Created Successfully !!');
  } catch (error) {
    console.error(error.message);
  }
})();
