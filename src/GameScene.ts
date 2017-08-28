class GameScene extends eui.Component {
	private bg: eui.Image;
	private bg2: eui.Image;
	private man: eui.Image;
	private checkface: boolean = true;
	private creatTimer: egret.Timer;
	public gameMain: eui.Group;
	public gameM: eui.Image;
	public myscore: eui.Label;
	private manMV: boolean = true;
	private label: egret.TextField;
	private ManSpeed: number = 0;
	private lasttime: number = 0;
	private dtSpeed:number=2;
	private dtmanSpeed:number=3.5;
	private orientation:egret.DeviceOrientation;
	public constructor() {
		super();
		this.skinName = "gamescene";
		this.man.anchorOffsetY = 140;
		//this.once(egret.Event.ADDED_TO_STAGE,this.gameInt,this);
		this.gameInt();
	}
	//重力感应沿着Y旋转进行判断返回值为角度
	private onOrientation(e: egret.OrientationEvent) {
		//this.label.text = "方向: \nalpha:" + this.ManSpeed;
		this.ManSpeed = e.gamma / 10;
	}
	private bridID: number = 0;
	private Dcreatbrid: eui.Image;
	private S: number = 0;//检测路程
	//创建阶梯
	private creatbrid() {
		//this.S++;
		//egret.log("路程"+this.S);
		var dtjoin=0.01;
		this.dtSpeed +=dtjoin;
		this.dtmanSpeed +=dtjoin;
		if(this.dtSpeed>=3){
			this.dtSpeed=3
		}
		if(this.dtmanSpeed>=4.5){
			this.dtmanSpeed=4.5
		}
		//小鸟位置数组存放
		var arr = [256, 369, 93, 369, 72, 256];
		++this.bridID;
		if (this.bridID >= 5) {
			this.bridID = 0;
		}
		var Dcreatbrid = new eui.Image();
		Dcreatbrid.x = arr[this.bridID];
		Dcreatbrid.y = -108;
		Dcreatbrid.width = 163;
		Dcreatbrid.height = 108;
		//Dcreatbrid.anchorOffsetY=54;
		switch (this.bridID) {
			case 0: {
				Dcreatbrid.source = "3P-5_png"
				break;
			}
			case 1: {
				Dcreatbrid.source = "3P-3_png"
				break;
			}
			case 2: {
				Dcreatbrid.source = "3P-4_png"
				break;
			}
			case 3: {
				Dcreatbrid.source = "3P-5_png"
				break;
			}
			case 4: {
				Dcreatbrid.source = "3P-3_png"
				break;
			}
			case 5: {
				Dcreatbrid.source = "3P-5_png"
				break;
			}
		}
		this.gameMain.addChild(Dcreatbrid);
	}
	private flagemanS: number = 0;//人物移动的
	private flagecheck: boolean = true;
	//游戏初始化
	private gameInt() {
		this.orientation = new egret.DeviceOrientation();
		this.orientation.addEventListener(egret.Event.CHANGE, this.onOrientation, this);
		this.orientation.start();
		myDate.score=0;
		egret.startTick(this.gamebggroun, this);
		//egret.Ticker.getInstance().register(this.gamebggroun,this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.manwork, this);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.creatbrid, this);
		//创建阶梯计时器
		this.creatTimer = new egret.Timer(1500, 0);
		this.creatTimer.addEventListener(egret.TimerEvent.TIMER, this.creatbrid, this);
		this.creatTimer.start();
	}
	//背景循环&设置阶梯循环&&人物跳动&&人物喜鹊碰撞检测
	private gamebggroun(timeStamp: number): boolean {
		//var dt = (timeStamp - this.lasttime) / 10;
		var dt = this.dtSpeed;
		var dtman = this.dtmanSpeed;
		var dtmans = this.dtmanSpeed+0.5;
		this.lasttime = timeStamp;
		if(dtman<=4.5&&dtman>4.25){
			this.S=60;
		}
		if(dtman<=4.25&&dtman>4){
			this.S=40;
		}
		if(dtman<=4&&dtman>3.75){
			this.S=20;
		}
		if(dtman<=3.75&&dtman>=3.5){
			this.S=0;
		}
		this.myscore.text = myDate.score.toString();
		//var dtman= (timeStamp - this.lasttime) / 5;
		 
		var pox = this.man.x;//检测x坐标1点
		var pox2 = this.man.x + 64;//检测x坐标2点
		var poy = this.man.y;//检测y点坐标
		this.bg.y += dt;
		this.bg2.y += dt;
		if (this.bg.y >= this.bg.getBounds().height - 20) {
			this.bg.y = -this.bg.getBounds().height;
		}
		if (this.bg2.y >= this.bg2.getBounds().height - 20) {
			this.bg2.y = -this.bg2.getBounds().height;
		}
		//人物跳动
		if (this.manMV) {
			this.flagemanS += dt;
			this.man.y -= dtman;
			this.man.x += this.ManSpeed;
			if (this.man.x <= 0) {
				this.man.x = 0;
			}
			if (this.man.x >= 575) {
				this.man.x = 575;
			}
			if (this.man.y <= 140) {
				this.flagemanS =90+this.S;
			}
			if (this.flagemanS >=90+this.S) {
				this.manMV = false;
			}
			if (this.flagemanS >= 50) {
				this.flagecheck=true;
			}
		} else {
			this.flagemanS -= dt;
			this.man.y += dtmans;
			this.man.x += this.ManSpeed;
			if (this.man.x <= 0) {
				this.man.x =1;
			}
			if (this.man.x >= 575) {
				this.man.x = 575;
			}

			if (this.man.y >= 1040) {
				//this.manMV=true;
				this.myGameOver()
			}
		}

		for (var i: number = 0; i < this.gameMain.numChildren; i++) {
			//给元素赋值深度。
			//this.setChildIndex(this.gameM, this.gameMain.numChildren)
			//this.setChildIndex(this.myscore, this.gameMain.numChildren);
			/*if(i>=1){
			this.S=Math.abs(this.gameMain.getChildAt(i).y-this.gameMain.getChildAt(i-1).y)
				egret.log(this.S+'距离')
			}*/
			//gameMain子元素
			this.gameMain.getChildAt(i).y += dt;
			//检查碰撞
			var a = this.gameMain.getChildAt(i);
			var isHit = new egret.Point(pox, poy);
			var isHit2 = new egret.Point(pox2, poy);
			var rect = new egret.Rectangle(a.x + 25, a.y + 38, a.width - 88, a.height - 10);
			//如果游戏页面中gameMain里元素y轴大于1040就移除元素。
			if (this.gameMain.getChildAt(i).y >= 1040) {
				this.gameMain.removeChild(this.gameMain.getChildAt(i));
			} else {
				if (this.flagecheck) {
					if (rect.containsPoint(isHit) || rect.containsPoint(isHit2)) {
						this.manMV = true;
						myDate.score++;
						this.flagecheck=false;
						if (this.flagemanS <= 270) {
							this.flagemanS = 1;
						}
					} 
				}else{

				}
			}

		}
		return false;
	}
	//人物跑动的动效
	private manwork(event: egret.Event) {
		egret.Tween.get(this.man, { loop: true }).to({ source: "man_png" }).wait(300).to({ source: "man2_png" }).wait(300)
	}
	private myGameOver() {
		this.orientation.stop(); 
		this.creatTimer.stop();
		egret.stopTick(this.gamebggroun,this);
		this.addChild(new GameOver())
	}
}