```javascript
//Correct usage of $inc operator in MongoDB update operation.  Checks if the field exists before incrementing
db.collection('myCollection').updateOne({"_id":ObjectId("650000000000000000000000")},{"$inc":{"correctField":1}});
```