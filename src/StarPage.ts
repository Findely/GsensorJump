class StarPage extends eui.Component {
	public bg: eui.Image;
	public page1_1: eui.Image;
	public starbtn: eui.Image;
	public rulebtn: eui.Image;
	public rule: eui.Image;
	public rule2: eui.Image;
	private starpageA: egret.tween.TweenGroup;
	private RuleA: egret.tween.TweenGroup;
	private RuleB: egret.tween.TweenGroup;
	public constructor() {
		super();
		this.skinName = "starpage";
		this.starpageA.play();
		this.starbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.StarBtn,this);
		this.rule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Rule,this);
		this.rule2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.Ruletow,this);
		this.rulebtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.RuleBtn,this);
	}
	private StarBtn(ev:egret.Event) {
		this.RuleA.play();
	}
	private Rule(ev:egret.Event) {
		this.RuleB.play();
	}
	private Ruletow(ev:egret.Event) {
		this.addChild(new GameScene());
	}
	private RuleBtn(){
		window.location.href="list.html"
	}
}