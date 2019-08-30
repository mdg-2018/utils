exports = function(arg){
  console.log(arg);
  var collection = context.services.get("mongodb-atlas").db("clustermanager").collection("nopause");
  var result = collection.insertOne(arg);

  return result;
};