class UI_Label {
	constructor() {
		const 
			Browser = Laya.Browser,
			WebGL = Laya.WebGL,
			Stage = Laya.Stage,
			Stat = Laya.Stat;

		// 不支持WebGL时自动切换至Canvas
		Laya.init(800, 600, WebGL);

		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;

		Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
		Laya.stage.bgColor = "#232628";

		this.setup();
	}

	setup() {
		this.createLabel("#FFFFFF", null).pos(30, 50);
		this.createLabel("#00FFFF", null).pos(290, 50);
		this.createLabel("#FFFF00", "#FFFFFF").pos(30, 100);
		this.createLabel("#000000", "#FFFFFF").pos(290, 100);
		this.createLabel("#FFFFFF", "#00FFFF").pos(30, 150);
		this.createLabel("#0080FF", "#00FFFF").pos(290, 150);
	}

	createLabel(color, strokeColor) {
		const Label = Laya.Label;
		const STROKE_WIDTH = 4;

		var label = new Label();
		Laya.stage.addChild(label);
		label.font = "Microsoft YaHei";
		label.text = "SAMPLE DEMO";
		label.fontSize = 30;
		label.color = color;

		if (strokeColor) {
			label.stroke = STROKE_WIDTH;
			label.strokeColor = strokeColor;
		}

		return label;
	}
}

new UI_Label();