const fs = require("fs")
const path = require("node:path")

const rs = fs.createReadStream(path.join(__dirname, 'Files', 'free.txt'), "utf8");
const ws = fs.createWriteStream(path.join(__dirname, 'Files', 'newFree.txt'));

// rs.on("data", (dataChunk) => {
//     ws.write(dataChunk);
// })

//While the above code is efficient in handling large files, it is more efficient to pipe it as shown below,.

rs.pipe(ws);