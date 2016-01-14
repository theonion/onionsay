# onionsay[![Build Status](https://travis-ci.org/theonion/onionsay.svg?branch=master)](https://travis-ci.org/theonion/onionsay)

> Tell The Onion what to say

Like [cowsay](http://en.wikipedia.org/wiki/Cowsay), but less cow.

![](screenshot.png)


## Install

```
$ npm install --save theonion/onionsay
```


## Usage

```js
var onionsay = require('onionsay');

console.log(onionsay('AMERICA\'S FINEST NEWS SOURCE!'));

/*
                    /      
                    ///    
                    ////   
          ////////////     
      //// ///     //      
   //// ///     /////      
  /// ///     //// //      
 /// //      ///   //      
 ////       ///   ///      
 ////     ////    ///      .--------------------------.
 ///      ///    ////      |   AMERICA'S FINEST NEWS  |
 ///     ///    /////      |          SOURCE!         |
  //    ///  ///// //      '--------------------------'
   //  ////////// ///      
   //////        ///       
  ////////   //////        
   ///  /////////          
 */
```

*You can style your text with [chalk](https://github.com/sindresorhus/chalk) before passing it to `onionsay`.*


## CLI

```
$ npm install --global theonion/onionsay
```

```
$ onionsay --help

  Tell Onion what to say (forked from yosay)

  Usage
    onionsay <string>
    onionsay <string> --maxLength 8
    echo <string> | onionsay

  Example
    onionsay "TU STULTUS ES"
                    /      
                    ///    
                    ////   
          ////////////     
      //// ///     //      
   //// ///     /////      
  /// ///     //// //      
 /// //      ///   //      
 ////       ///   ///      
 ////     ////    ///      .--------------------------.
 ///      ///    ////      |       TU STULTUS ES      |
 ///     ///    /////      '--------------------------'
  //    ///  ///// //      
   //  ////////// ///      
   //////        ///       
  ////////   //////        
   ///  /////////          
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
Copyright (c) Google
