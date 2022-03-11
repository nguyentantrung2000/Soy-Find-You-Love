const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const path = require("path");
// var key = require("./firebase-admin.json");
const firebase = require("./database");
const firestore = firebase.firestore();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

const PORT = 3000;
server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

server.get("/user", async function(request, response) {
    let body = request.body;
    let querySnapshot = (await firestore.collection(body.collectionName).get()).docs.map(value => {
        let temp = value.data();
        return temp;
    });
    response.send(querySnapshot);
});

server.get("/user/:id", async function(request, response) {
    let params = request.params.id;
    console.log(params);
    let querySnapshot = await firestore.collection("User").doc(params);
    let datas = await querySnapshot.get().then((value) => {
        let temp = value.data()
        console.log(temp)
        return temp;
    });
    response.send(datas);
});


server.post("/user", async(request, response) => {
    let body = request.body;
    console.log(body);
    try {
        let result = await firestore.collection(body.collectionName).add(body.data);
        response.send({
            message: "Successful!!!",
        });
    } catch (error) {
        console.log(error);
    }

});
server.put("/user/update", async(request, response) => {
    let collectionName = request.body.collectionName;
    let docId = request.body.docId;
    console.log(collectionName, docId);
    try {
        let result = await firestore.collection(collectionName)
            .doc(docId)
            .update(request.body.data);
        console.log(result);
        response.send({
            message: "Update successful!!",
            updateTime: result.writeTime,
        })
    } catch (error) {
        response.send({
            error: error.toString(),
        });
    }
});








// server.get("/api/:name", async function (request, response) {
//     let params = request.params.name;
//     console.log("API 1 " + params);
//     let querySnapshot = await firestore.collection(params).get();

//     let datas = await querySnapshot.docs.map((value) => {
//       let temp = value.data();
//       return temp;
//     });
//     response.send(datas);
//   });