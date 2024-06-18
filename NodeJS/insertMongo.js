const dbConnect = require('./readMongo');

// console.log(dbConnect);

const insert= async ()=>{
    const db = await dbConnect();
    db.insertOne({name: "MongoDB"});
    //collectionW.insert({name: "MongoDB"});
    console.log("Data Inserted Successfully");
};

insert();

console.log(dbConnect);