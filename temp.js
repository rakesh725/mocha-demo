
var assert = require('assert');


var baseUrl = 'http://localhost:4500/api/v1';

var testObj = ["Banana", "Orange", "Apple", "Mango"];


describe('Test the array', function(){
  before(function(){
  	testObj.push["Kiwi","Peach"]
    // ...
  });


//Verify each value
describe('Check array', function(){
  describe('first value must be banana', function(){
    it('should return banana', function(){
    	   console.log('1st vaule: '+testObj[0]);

    	  assert.equal("Banana", testObj[0]);
    });
    it('should return Mango', function(){

    	  assert.equal("Mango", testObj[3]);
    })
  })
});


//Update array
describe('Delete last element', function(){
    it('Remove last element', function(){
    	testObj.pop();
    });
    it('Verify last element', function(){
    	console.log('Last vaule: '+testObj.length);
		assert.equal("Apple", testObj[testObj.length-1]);
    });
    

  })
});













