<img src="/images/html5.png" alt="html5logo"></img>
<img src="/images/html6.png" alt="html6logo"></img>
<h1>StayAhead Training Limited - Javascript 2</h1>

<h3><u>Chapter 1.1 - Primitives</u></h3>

>**A 'primitive variable' is one that contains a value. You can think of a primitive 
>variable as a segment of named memory in which a value,
>(some data) is stored.**

>**Primitives are immutable - not changeable**
<h3>There are five primitive data types in ES5 as follows:</h3>

1.  Number
> **Note:  Both integers (whole numbers) and floating (decimal numbers) are simply number types in Javascript.**
2.  String
3.  Boolean (capital B everytime, its someones name, you illiterate degenerates.)
4.  Undefined
5.  Null

<h3>You can verifty the type of a variable using the `typeof` operator:</h3>

<b>Example One:</b>
```javascript
  let x = 2;
  
  console.log(typeof x); //Number
  console.log(x); //2
```

The value of x, (which is 2), is <i><b>copied</b></i> into y.

```javascript
console.log(x) //2
```

<b>Example Two:</b>

```Javascript
let name = 'David';

console.log(typeof name); //String
console.log(name) //David
```

<h3><u>Primitives continued - Incrementals</u></h3>

<b>Example Three</b>

```javascript
  let number = 2;

  function increment(number) {
    number++;
  }
  increment(number);
```

Again the value of x is <i><b>copied</b></i> into the parameter number. The increment number has no effect on x.

```javascript
console.log(number); //2
```