# RXJS Observable Array

This package allows you to create an array where you can detect changes that occure on it.

### 1. Install

`npm i rxjs-array`

### 2. Usage

    // import from node_modules
    import {ObservableArray} from 'rxjs-array';
    
    // define just like 'new Array()'
    const array = new ObservableArray();

    // Outputs changes of the array
    array.changes.subscribe(x => console.log(x));

    // Use the array normally
    array[0] = Math.random();
    array.push(Math.random(), Math.random(), Math.random());
    array.splice(2,1);