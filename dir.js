const fs = require("fs")

//the code below creates a new directory. we wrap it in an if argument that prevents the directory from creating, if it already exists.

if (!fs.existsSync("./newDir")) {
    fs.mkdir("./newDir", (err) => {
        if (err) throw err;
        console.log("Directory created")
    })
}

//The code below deletes the directory, if it does exists.

if (fs.existsSync("./newDir")) {
    fs.rmdir("./newDir", (err) => {
        if (err) throw err;
        console.log("Directory Removed")
    })
}