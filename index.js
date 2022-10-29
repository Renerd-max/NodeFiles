const fsPromises = require("fs").promises;
const path = require("node:path");



//the below code is executed first due to asynchronous function.

//console.log("hello......")

// fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), "Thanks for contacting me, what can I do for you?", (err) => {
//     if (err) throw err;
//     console.log("Write Complete")

//     //All use appendFile as acallback function of writeFile

//     fs.appendFile(path.join(__dirname, 'Files', 'reply.txt'), "\n\nOk, I got you. On it!", (err) => {
//         if (err) throw err;
//         console.log("Append Complete")

//         //If you want your files to behave in order, use it as acall-back function of the last command. e.g,rename.
//         fs.rename(path.join(__dirname, 'Files', 'reply.txt'), path.join(__dirname, 'Files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log("Rename Complete")
//         })
//     })
// })

//To avoid call-back hell, we will use fs.promises instead of plain fs. Next, we create a file operation function, using try catch, async, await.

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'Files', 'welcome.txt'), 'utf8');
        console.log(data); 
        await fsPromises.unlink(path.join(__dirname, 'Files', 'welcome.txt')); //unlink deletes the file.
        await fsPromises.writeFile(path.join(__dirname, 'Files', 'welcome2.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'Files', 'welcome2.txt'), '\n\nNice meeting you dear.');
        await fsPromises.rename(path.join(__dirname, 'Files', 'welcome2.txt'), path.join(__dirname, 'Files', 'promisedWelcome.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'Files', 'promisedWelcome.txt'), 'utf8');
        console.log(newData)
    } catch (err) {
        console.error(err);
    }
}

fileOps()

//on uncaught error. Exit

process.on('uncaughtException', err => {
    console.error(`Uncaught Error: ${err}`);
    process.exit(1);
})