[![N|Solid](https://www.arcanys.com/wp-content/themes/arcanys/img/logo.jpg)](https://www.arcanys.com/)

# Arcanys Angular API
This is a simple API integration using RESTful methods(GET,POST,PUT,DELETE) and with built-in common end-points we usually use on our applications.

### NEXT UPDATE: I need to add common validations

### Files
The package consists of two Classes:
  - **ArcanysApiClient** - index.js
  - **User** which extends **ArcanysApiClient** - user.service.js

### Tech
This package uses a number of open source projects to work properly:
* [AngularJS 1.x] - HTML enhanced for web apps!
* [ES6] - making javascript an OOP place!

### Repository
And of course this package itself is open source located at [Github]

### Installation
```sh
$ cd yourAppRoot
$ npm install arcanys-angular-api --save
```

### Usage
Import the library
```sh
import User from 'arcanys-angular-api';
```
Then register it as service
```sh
angular.module('myApp', []).service('User', User);
```
On your controller, you need to inject Angular's $http to the package:
```sh
this.User.setHttp($http);
```
Then you set the urls for each built-in end-point
```sh
this.User.setLoginUrl('http://url-address/login');
```
Finally, use the built-in functions
```sh
this.User.login(data).then(
      (response) => {
        setTimeout(() => {
          this.success(response.data);
        },3000);
      }, 
      (error) => {
        this.fail(error.data);
      }
    );
```

### Built-in functions
**LOGIN**
* setLoginUrl(url)
* login(data)

**CONFIRM**
* setConfirmUrl(url)
* confirm(data)

**REGISTER**
* setRegisterUrl(url)
* register(data)

**SEND EMAIL**
* setSendEmailUrl(url)
* sendEmail(data)

**RECOVER PASSWORD**
* setRecoverUrl(url)
* recoverPass(data)

**RESET PASSWORD**
* setResetPassUrl(url)
* resetPass(data)

### Core functions which you only need
* setHttp($http)
* setContentType('application/json')




   [AngularJS 1.x]: <http://angularjs.org>
   [ES6]: <http://es6-features.org/>
   [Github]: <https://github.com/npagong/arcanys-angular-api>
