"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello world");
var user = /** @class */ (function () {
    function user(email, name) {
        this.coursecontent = 1;
        this.city = "sargodha";
        this.email = email;
        this.name = name;
    }
    user.prototype.delToken = function () {
        console.log("Tokken deleted");
    };
    Object.defineProperty(user.prototype, "getAppleEmail", {
        get: function () {
            return "your email is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "getCourseContent", {
        get: function () {
            return this.coursecontent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(user.prototype, "courseContent", {
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this.coursecontent = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return user;
}());
var subuser = /** @class */ (function (_super) {
    __extends(subuser, _super);
    function subuser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subuser.prototype.changeCourseContent = function () {
        this.courseContent = 4;
    };
    return subuser;
}(user));
var waseem = new user("mw@gmail.com", "waseemakram");
