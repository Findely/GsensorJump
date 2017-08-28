var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.skinName = "gameover";
        _this.myscore.text = myDate.score.toString();
        _this.gamer.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.GameRet, _this);
        _this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.rankBtn, _this);
        return _this;
    }
    GameOver.prototype.GameRet = function (evt) {
        //alert("点了");
        this.parent.addChild(new GameScene());
        this.parent.removeChild(this);
    };
    GameOver.prototype.rankBtn = function (evt) {
        window.location.href = "list.html";
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver");
//# sourceMappingURL=GameOver.js.map