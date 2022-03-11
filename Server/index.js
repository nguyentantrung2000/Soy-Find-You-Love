const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const path = require("path");
// var key = require("./firebase-admin.json");
const admin = require("firebase-admin");



var serviceAccount = require("./firebase-admin.json");




admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());

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
  server.get("/api/:id", async function (request, response) {
    let params= request.params.id;
    let querySnapshot = await firestore.collection("User").doc(params);
    let datas = await querySnapshot.get();
        response.send(datas.data());
  }); 
 

server.post("/api", async (request, response) => {
    let body = request.body;
    console.log(body);
  try{ 
    let result = await firestore.collection(body.collectionName).add(body.data);
    response.send(
      {
      message: "Successful!!!",
    }
    );
  }catch(error){
      console.log("Error");
  }
    
  });


  server.put("/api/update",async (request, response)=>{
    let collectionName = request.body.collectionName;
    let docId = request.body.docId;
    console.log(collectionName,docId);
  try{
    let result= await firestore.collection(collectionName)
    .doc(docId)
    .update(request.body.data);
   console.log(result);
   response.send({
     message: "Update successful!!",
     updateTime: result.writeTime,
   })
  }catch (error){
    response.send({
      error: error.toString(),
    });
  }
  }) ;

  const  PORT = 3000;
  server.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });

