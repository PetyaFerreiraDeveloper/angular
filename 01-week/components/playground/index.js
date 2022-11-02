var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return "".concat(this.name, " says Hi");
    };
    return User;
}());
var user = new User('Pesho');
console.log(user.sayHello());
