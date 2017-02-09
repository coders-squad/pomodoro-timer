var test = QUnit.test;

test("check if the function exists",function(t){
  t.ok(window.program,"it exists");
});
document.getElementById('start').onclick = function(){
test("Timer should start at 25:00 minutes ",function(t){
  var time = program(25);
  t.deepEqual(time.gettime(), {minutes:25,seconds:0} , "Timer starts at 25:00");

});

	test("Start Timing() ", function(t) {
		
	 	  var Timer = program(25);
		  
		  Timer.timing();
		  var done = t.async();
		 // start interval
		  setTimeout(function() {
		    t.equal( Timer.gettime().seconds,59,"It decrease time");

		    ok( true, "timing done" );
		    done();
		  }, 1000);
	});

}
document.getElementById('stop').onclick = function(){
	test("Method pause should stop timing",function(t){
	  var Timer = program(25);
	  var done1 = t.async();
	  var done  = t.async();
	  setTimeout(function() {
	    Timer.pause();
	    ok( true, "timing paused" );
	    done1();
	  }, 1000);

	  setTimeout(function() {

	    t.equal( Timer.gettime().seconds,59,"It decrease time");

	    ok( true, "timing paused" );
	    done();
	  }, 3000);

	});
}
document.getElementById('reset').onclick = function(){
	test("Method reset() should set Time initial Input",function(t){

	  var Timer = program(25);
	  //Timer.timing();
	 var done1 = t.async();
	  var done  = t.async();
	  setTimeout(function() {
	    Timer.reset();
	    ok( true, "timing reset" );
	    done1();
	  }, 1000);

	  setTimeout(function() {

	    t.deepEqual( Timer.gettime(),{minutes:25 , seconds:0},"reset time");

	    ok( true, "timing reset" );
	    done();
	  }, 3000);


	});
}
