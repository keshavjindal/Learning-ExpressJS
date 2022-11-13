const express = require("express")
const path = require("path") // default node module

const app = express()

app.use(express.static(path.join(__dirname , "public")))

// app.get('/' , (req , res) => {
//     // res.send("keshav")
//     // res.send("<h1>keshav</h1>")
//     res.sendFile(path.join(__dirname , "rough.html"))
// })

/*
If we deploy this project on some server and then run it,
then first we will see the environments file of the process. If it
has a port variable, we will run the server on that PORT, else we 
will run the server on 5000 port.
*/
const PORT = process.env.PORT || 5000

// () => console.log() is a callback function
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))