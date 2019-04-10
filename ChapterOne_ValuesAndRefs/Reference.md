<img src="/images/html5.png" alt="html5logo"></img>
<img src="/images/html6.png" alt="html6logo"></img>

<h1>StayAhead Training Limited - Javascript 2</h1>

<h3><u>Chapter 1.2 - References</u></h3>

**An object is a collection of named value pair(s).**

**Objects ARE mutable, they can be changed**

> **A <u>'reference variable'</u> is one that contains a reference or pointer toward an object stored somewhere in memory.**  
> <br/>
> **You can think of a reference variable as an address, and the object (your friend) lives at this given address in your computers memory. So, when you need said objects help, you know where they live.**
> <br/>
> **And, like your friends, you can 'call' on an object.**
> <br/> **Thinking back to Chapter 1.1 - Primitive values, and sticking with the address analogy above, primitive values are like your parents; you know where they live, and they never go out. Dependable, but they never change...**

<b><u>A quick recap on objects:</u></b>

```javascript
let object = {
  property: value //only use a comma on 'property value pairs if its NOT the last item in the object.'
}; //if only one pair DONT USE a comma
```

<b>Calling an object - returns all 'property-value pairs' within the given object.</b>

```javascript
object;
```

<b>Calling an object property - explicitly returns part of the object you want to use</b>

```javascript
object.property;
```

<b>An example of an object:</b>

```javascript
let anObject = {
  (name)propertyOne: '(value)valueOne',   // together a 'named value pair!'
  (name)propertyTwo: '(value)valueTwo',   // another 'named value pair!'
  andSoOn: 'etc...'                       // you get the idea...
};
```

If we were to create a new object, as seen below:

```javascript
  function Game() { //this is how you create a new object from an existing one - dont worry about it  for now
    ...
  };

  let game = new Game();

  console.log(typeof game); //returns an object, not a function!
```

<h3>Example One - References</h3>

So, you have seen the below before, dont type it into your console this time.

```javascript
let objectOne = {
  propertyX: "valueOne",
  propertyY: "valueTwo"
};

let objectTwo = objectOne;

console.log(objectTwo);
```

Now you understand what a property is, and what a value is, lets simplify the above object using actual integers (numbers if you prefer 'real' words).
The below object is the same as the one above, were just making it easier to work with.

```javascript
let objectOne = {
  x: 1,
  y: 2
};

let objectTwo = objectOne;

console.log(objectTwo);
```

`objectTwo` should return the same values as `objectOne`.
<br/>
<br/>
What if we then add the following near the bottom of our code above?

```javascript
objectTwo.y = 3;
```

Look at example two to find out!

<b>Example One:</b>

```javascript
let x = 2;

console.log(typeof x); //Number
console.log(x); //2
```

The value of x, (which is 2), is <i><b>copied</b></i> into y.

<b>Example Two - Part One:</b>

```javascript
let objectOne = {
  x: 2,
  y: 1
};

let objectTwo = {
  //this will change in the second part of the example. Nothing else.
  x: 0,
  y: 0
};

console.log(`objectOne = `);
console.log(objectOne); //x = 2 and y = 1 within ObjectOne

console.log(`objectTwo = `);
console.log(objectTwo); //x = 0 and y = 1 within ObjectTwo

console.log("change objectOne.y to = 2");
objectOne.y = 2; //Now x should = 2 and y should = 2 within objectOne, we changed the y property, so all is as expected.

// below we double check the above has worked as expected:
console.log(`objectOne = `);
console.log(objectOne); //x = 2 and y = 2 within ObjectOne as expected. 😸

console.log(`objectTwo = `);
console.log(objectTwo); //x = 0 and y = 1 within ObjectTwo as expected. 😼

console.log("change objectTwo.y to = 3");
objectTwo.y = 3;

// below, we again double check the above change to objectTwo.y worked as expected.
console.log(`objectOne = `);
console.log(objectOne); //x = 2 and y = 2 within ObjectOne as expected. 😸

console.log(`objectTwo = `);
console.log(objectTwo); //x = 0 and y = 3 within ObjectTwo as expected. 😼
```

Easy. A bit long winded, but easy. What if we create a new object, using a reference to an existing object?

<b>Example Two - Part Two:</b>

Exactly the same code as above, apart from on line 6, but look at the differences in the `console.log` values:

```javascript
let objectOne = {
  x: 2,
  y: 1
};

let objectTwo = objectOne; //line 6 - this bit changed

console.log(`objectOne = `);
console.log(objectOne); // x = 2 and y = 1 within objectOne

console.log(`objectTwo = `);
console.log(objectTwo); // x = 2 and y = 1 within objectiveOne

console.log("change objectOne.y to = 2");
objectOne.y = 2; // we changed the y value of objectOne to 2, what happens to objectTwos values?

// lets double check
console.log(`objectOne = `);
console.log(objectOne); // x = 2 and y = 2 within ObjectOne, so far so good.

console.log(`objectTwo = `);
console.log(objectTwo); // x = 2 and y = 2 within objectTwo,
// if objectTwo was created to = objectOne, then any changes to objectOne will change objectTwo.
// but what if we change objectTwo directly, will the changes affect objectOne?

console.log("change objectTwo.y to = 3");
objectTwo.y = 3;

console.log(`objectOne = `);
console.log(objectOne); // x = 2 and y = 3, why is objectOne copying objectTwo????😠

console.log(`objectTwo = `);
console.log(objectTwo); // x = 2 and y = 3 as expected.
```

Think about this...

`objectTwo = objectOne.`
<br/>
<br/>
Therefore <b><u>both are the same object</u></b>, as below:
<br>

```javascript
objectTwo = objectOne = {
  x: 2,
  y: 1
};
```

They are not two seperate objects. They represent two references to the same object.
<br/>
<br/>
So when you change 'objectOne' or 'objectTwo' your not actually changing either. Your changing the object.
<br/>
<mark>You can get around this by using the spread operator.</mark>
<br/>
<br/>
<b>The Spread operator</b>
```javascript
let objectOne = {
  name: "Dan",
  age: 21
};

let objectTwo = {
  pets: "dog",
  married: true
};

let clonedObject = {
  ...objectOne
};

let mergedObject = {
  ...objectOne,
  ...objectTwo
};

console.log(
  `objectOne = ${JSON.stringify(objectOne)}`
);

console.log(
  `objectTwo = ${JSON.stringify(objectTwo)}`
);

console.log(
  `clonedObject = ${JSON.stringify(clonedObject)}`
);

console.log(
  `mergedObject = ${JSON.stringify(mergedObject)}`
);

```

<b>Object.getOwnPropertyNames()</b>

```javascript
let objectOne = {
  name: "Dan",
  age: 21
};

let objectTwo = {
  pets: "dog",
  married: true
};

console.log(Object.getOwnPropertyNames(objectTwo));

let myObject = Object.create({}, {
  getProperty: {
    value: function() { return this.property, this.anotherProperty; }
  }
});
myObject.property = "some property";
myObject.anotherProperty= "some other property";

console.log(Object.keys(myObject));
//returns property and anotherProperty, NOT the associated values.

// alternativly you can just use the following:
console.log(Object.properties(myObject));
// or
console.log(Object.values(myObject));
// or the easiest of the lot
console.log(Object.entries(myObject));
// returns  (2)[Array(2), Array(2)]
//      0:  (2)["name": "Daniel"]
//      1:  (2)["age": 21]
//  length: 2
//  __proto__: Array(0)
```
<b>Iterating through `Object key:value` pairs gracefully</b>

```javascript
const scaryMonster = {
  dinosaur: true,
  type: "T-Rex"
};

for(const[key, value] of Object.entries(scaryMonster)) {
  console.log(`${key} ${value}`);
};

// returns
// dinosaur true
// type T-Rex
```
<b>Converting an `Object` to a `Map`</b>

<br/>
<b><u>Thought for the day:</u></b> 
<br/>
<br/>All functions are objects, but not all objects are functions<br><br/>...wait what!?
