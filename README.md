
# Partial Array prototype polyfill for mJS engine

## Overview

The [mJS](https://github.com/cesanta/mjs) is a restricted JavaScript engine designed for microcontrollers with limited resources. The array type does not support standard Array prototype to limit the library footprint.

This library adds some of the JavaScript [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) prototype utils. It modifies the prototype of an array instance. As different instances of array object does not share the same prototype object, each instance needs to be initialized separately. An array can be initialized by the Array.create() method. Arrays returned from utility functions are already initialized.

## Example
```
Array.create([ 1, 2, 3 ])
   .map(function(x) { return  x  *  2; })
   .every(function(x) { return (x  %  2) ==  0; });
```

## Available functions
Following functions are available:
 - [Array.create()](#array-create) - initializes an array instance
 - [Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
 - [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
 - [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 - [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
 - [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
 - [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
 - [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 - [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
 - [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) 

### Array.create()
The Array.create() method sets the prototype of an array instance object. 
#### Syntax
`Array.create([array])`
#### Parameters
`array` - The source array to be initialized.
#### Return value
The initialized instance of the array.
#### Description
The function return the initialized instance of the array. If no source array was supplied, an empty array is used. If non-array instance is supplied, `null` is returned. 

## Footprint
Not all functions are available to limit amount of storage and memory needed. There is no option of including only some of the functions at the moment.
