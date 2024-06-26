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
console.log("waseem akram");
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameramood, filter) {
        this.cameramood = cameramood;
        this.filter = filter;
    }
    TakePhoto.prototype.getReelTime = function () {
        return 8;
    };
    return TakePhoto;
}());
var instagram = /** @class */ (function (_super) {
    __extends(instagram, _super);
    function instagram(cameramood, filter, burst) {
        var _this = _super.call(this, cameramood, filter) || this;
        _this.cameramood = cameramood;
        _this.filter = filter;
        _this.burst = burst;
        _this.burst = burst;
        return _this;
    }
    instagram.prototype.getsepia = function () {
        console.log("sepia");
    };
    return instagram;
}(TakePhoto));
var insta = new instagram("test", true, 3);
insta.getReelTime();
// const hc = new TakePhoto("test", true);
