exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("clustermanager").collection("nopause");
  var result = collection.find().toArray();
  return result;
};