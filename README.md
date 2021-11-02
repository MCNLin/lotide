# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mcnlin/lotide`

**Require it:**

`const _ = require('@mcnlin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the first element of an array
* `tail`: removes the first element and returns the rest of the array
* `middle`: return an array with only the middle element(s) of the provided array
* `assertEquals`: method that comparee 2 primitive types and writes an message either pass or fail
* `assertArraysEqual`:method that compares 2 arrays aserting if they are equal
* `eqArrays` : which takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: takes in 2 objects and returns true or false based on match
* `assertObjectsEqual`: method that compares 2 objects aserting if they are equal
* `without`: return a subset of a given array, removing unwanted elements.
* `countLetters`: A function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `letterPositions`:return all the indices (zero-based positions) in the string where each character is found.
* `findKeyByValue`: which takes in an object and a value. Scan the object and return the first key which contains the given value. If no key with that given value is found, then return undefined.
* `findKey`: takes an object and a callback. Iterates thorugh the object and return the first key for which the call back returns a truthy value. No key is found, then return undefined. 
* `map`: creates a new array populated with the results of calling a provided function on every element in the array.

