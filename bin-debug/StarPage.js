var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StarPage = (function (_super) {
    __extends(StarPage, _super);
    function StarPage() {
        var _this = _super.call(this) || this;
        _this.skinName = "starpage";
        _this.starpageA.play();
        _this.starbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.StarBtn, _this);
        _this.rule.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.Rule, _this);
        _this.rule2.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.Ruletow, _this);
        _this.rulebtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.RuleBtn, _this);
        return _this;
    }
    StarPage.prototype.StarBtn = function (ev) {
        this.RuleA.play();
    };
    StarPage.prototype.Rule = function (ev) {
        this.RuleB.play();
    };
    StarPage.prototype.Ruletow = function (ev) {
        this.addChild(new GameScene());
    };
    StarPage.prototype.RuleBtn = function () {
        window.location.href = "list.html";
    };
    return StarPage;
}(eui.Component));
__reflect(StarPage.prototype, "StarPage");
//# sourceMappingURL=StarPage.js.map