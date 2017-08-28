class GameOver extends eui.Component {
	private bg:eui.Image;
	private myscore:eui.Label;
	private gamer:eui.Image;
	private rank:eui.Image;
	public constructor() {
		super();
		this.skinName="gameover";
		this.myscore.text = myDate.score.toString();
		this.gamer.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GameRet,this)
		this.rank.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankBtn,this)
	}
	private GameRet(evt:egret.TouchEvent) {
		//alert("点了");
		this.parent.addChild(new GameScene());
		this.parent.removeChild(this);
	}
	private rankBtn(evt:egret.TouchEvent){
		window.location.href="list.html"
	}

}