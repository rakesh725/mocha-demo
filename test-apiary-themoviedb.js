
//Test 

var assert = require('assert');
var supertest = require('supertest');
var baseUrl;

var access_id='';
var session_id='';	
var request_token='';

describe('TheMovieDB - Setup', function(){
  before(function(){

     baseUrl = supertest('http://api.themoviedb.org');

  	 it('Autenticate', function(done){
  	 	//Autenticate
  		baseUrl
  		.get('/3/authentication/token/new?'+'api_key='+'31addf81beffb268d5834d55168738e2')
  		//.set('api_key', '31addf81beffb268d5834d55168738e2')
  		.expect(200)
  		.end(function(err, res){
  			if (err) return done(err);

			//Verify access_token is seen
  			if(body['request_token']){
  				request_token=body.request_token;
  			}else{
  				assert.fail(-1,1,'body.request_token not found');
  			}

  			
  		});

  	 });

  });


  describe('Test TheMovieDB', function(){

  	//Get session id / guest session id
  	it('Get session id', function(done){
  	 	//Get Access token
  		baseUrl
  		.get('/3/authentication/session/new?'+'api_key='+'31addf81beffb268d5834d55168738e2'+'&request_token='+request_token)
  		.set('api_key', '31addf81beffb268d5834d55168738e2')
  		.expect(200, done);
  	 })
     it('Get Guest session id', function(done){
        //Get Access token
        baseUrl
        .get('/3/authentication/guest_session/new?'+'api_key='+'31addf81beffb268d5834d55168738e2')
        //.set('api_key', '31addf81beffb268d5834d55168738e2')
        .expect(200)
        .end(function(err, res){

          if (err) return done(err);

            if(res.body.success){

                assert.equal(res.body.success, true);
                assert.notEqual(res.body.guest_session_id, '');
                assert.notEqual(res.body.expires_at, '');

            }else{
                assert.fail(-1,1,'body.success not found');

            }


        })

     })

    // ...
  });


})



