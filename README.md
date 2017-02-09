
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

### You probably know that testing is good, but the first hurdle to overcome when trying to write unit tests for client-side code is the lack of any actual units; JavaScript code is written for each page of a website or each module of an application and is closely intermixed with back-end logic and related HTML. In the worst case, the code is completely mixed with HTML, as inline events handlers.


# How to test By QUnit :
--- 
The first thing we need to do is include all the QUnit source. QUnit needs 3 things:
1. We need to include the QUnit JS Source 
2. We can link to the QUnit stylesheet to make the output look good 
3. It needs a specific HTML structure. 
You can find download links for the JS & CSS files here. You could include them direct but I like to download them & add them locally, putting them into the qunitsrc directory.
```html 
<link rel="stylesheet" href="qunitsrc/qunit.css" type="text/css" media="screen">
<script type="text/javascript" src="qunitsrc/qunit.js"></script>
<script type="text/javascript" src="app/instagramwrapper.js"></script>
<script type="text/javascript" src="test/instagramwrapper_tests.js"></script>
And the HTML structure we need:
<h1 id="qunit-header">QUnit Test Suite</h1>
<h2 id="qunit-banner"></h2>
<div id="qunit-testrunner-toolbar"></div>
<h2 id="qunit-userAgent"></h2>
<ol id="qunit-tests"></ol>
```

Most of those are fairly explanatory. If not, don’t worry, once we run an actual test it should become more apparent. Before we write our actual code, lets set up a test test just to make sure it works. Load up instagramwrapper_tests.js (I’ll refer to this as just “the tests file” from now on) and put in:
```js
function saysHi(name) {
        return "Hi, " + name;
};

test('saysHi()', function() {
equal(sayHi("Jack"), "Hi, Jack", "function outputs string correctly")

});
```
You can see I define a simple function and then run tests on it, expecting sayHi("Jack") to equal "Hi, Jack". If you run it however, we get a failure:

```js
saysHi() (1, 0, 1)
Died on test #1: sayHi is not defined
Source: at Object.<anonymous> (http://instagram.jsp/test/instagramwrapper_tests.js:6:10)
```

## Why’s that?
Well, turns out in the equal() call I referenced sayHi, but it’s actually saysHi.
Run it again, and it passes!

Now, for our first real test:

```js
test("check if the function exists",function(t){
t.ok(window.program,"it exists");
});
```
## So the test should make sure if function program is there in src.js or NOT if not the test will fail.
While I already add function program there then the test should pass
![alt text](https://files.gitter.im/Coders-Squade/Lobby/fN5c/Screenshot-from-2017-02-09-09-53-16.png "Logo Title Text 1")





# Why to use TDD:
---

Here are three reasons that TDD might help a developer/team:

Better understanding of what you're going to write 

Enforces the policy of writing tests a little better 

Speeds up development 

One reason to write the tests first is to have a better understanding of the actual code before you write it. To me, this is the main benefit of test driven development. When you write the test cases first, you think more critically about the corner cases.

It's then easier to address them when you write the code and ensure that they're accurate.

Another reason is to actually enforce writing the tests. Often when people do unit-testing without the TDD, they have a testing framework set up, write some new code, and then quit. They think that the code already works just fine, so why write tests? It's simple enough that it won't break, right? But now you've lost the advantages of doing unit-tests in the first place (completely different discussion). Write them first, and they're already there.

Writing these tests first could mean that you don't need to launch the program in a debugging environment (slow — especially for larger projects) to test if a few small things work. Of course there's no excuse for not doing so before committing changes.
Convincing yourself or other people to write the tests first may be difficult. You may have better luck getting them to write both at the same time which may be just as beneficial.

![alt text](http://cdn.shopify.com/s/files/1/0257/1675/t/147/assets/pomodoro-getstarted.jpg?2830237113431392721 "Logo Title Text 1")


# What is Pomodoro Timer & How It works for developers :
---

The fundamentals of the Pomodoro Technique are simple yet incredibly effective.
 
1. CHOOSE A TASK YOU'D LIKE TO GET DONE
Something big, something small, something you’ve been putting off for a million years: it doesn’t matter. What matters is that it’s something that deserves our full, undivided attention.
 
2. SET THE POMODORO FOR 25 MINUTES
So that you both know when your time finished
 
3. WORK ON THE TASK UNTIL THE POMODORO RINGS
One develper do test and the other make the production.

