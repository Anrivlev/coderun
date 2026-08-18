async function getAllFilesRecursively(folder) {
  const size = await getFolderSize(folder);
  const children = await getChildrenOfFolder(folder, size);
  const files = [];
  const folders = [];
  for (let child of children) {
    if (isFile(child)) files.push(child);
    else folders.push(child);
  }
  const folderPromises = folders.map((folder) =>
    getAllFilesRecursively(folder),
  );
  const recursiveFiles = await Promise.all(folderPromises);
  return [...files, ...recursiveFiles.flat()];
}

async function getChildrenOfFolder(folder, size) {
  const promises = [];
  for (let i = 0; i < size; i++) {
    promises.push(readFromFolder(folder, i));
  }
  return Promise.all(promises);
}

async function readFromFolder(folder, index) {
  const readPromise = new Promise((resolve, reject) => {
    folder.read(index, (file) => {
      resolve(file);
    });
  });
  return readPromise;
}

function isFile(fileOrFolder) {
  const typeOfFileOrFolder = typeof fileOrFolder;
  return (
    typeOfFileOrFolder === "string" ||
    fileOrFolder === undefined ||
    fileOrFolder === null ||
    (typeOfFileOrFolder === "object" && Object.keys(fileOrFolder).length === 0)
  );
}

function isFolder(fileOrFolder) {
  return !isFile(fileOrFolder);
}

async function getFolderSize(folder) {
  const sizePromise = new Promise((resolve, reject) => {
    folder.size((size) => {
      resolve(size);
    });
  });
  return sizePromise;
}

function isFileBrokenAndRepairable(file) {
  return typeof file === "string" && file !== "file";
}

module.exports = async function (input) {
  const allFiles = await getAllFilesRecursively(input);
  const filteredFiles = allFiles
    .filter((file) => isFileBrokenAndRepairable(file))
    .sort();
  return filteredFiles;
};
