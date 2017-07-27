(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"NCSOFT_graph1m_atlas_", frames: [[522,1110,520,553],[1044,555,520,553],[0,1110,520,553],[0,3330,520,553],[522,2220,520,553],[1044,1110,520,553],[0,1665,520,553],[522,1665,520,553],[1044,1665,520,553],[0,2220,520,553],[0,2775,520,553],[1044,2220,520,553],[522,2775,520,553],[522,3330,520,553],[1044,2775,520,553],[1044,3330,520,553],[0,0,520,553],[522,0,520,553],[1044,0,520,553],[0,555,520,553],[522,555,520,553]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image_0 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_10 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_35 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_36 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_37 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_38 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_39 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_40 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_41 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_42 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_43 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_44 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.spriteSheet = ss["NCSOFT_graph1m_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ti3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-7.6,179.9,15.3);


(lib.ti2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("ACgCVQgZgMgOgVQgOgVgBgbIA+AAQACAUAMALQAMALATAAQAVAAALgPQAMgPAAgdQAAgcgNgNQgOgOgYAAQgWAAgOALIgGAGIgygNIASigICxAAIAAA1Ih9AAIgIBEQAWgMAZAAQAuAAAZAcQAaAbAAAzQAAAegNAZQgNAZgYAMQgYAOghAAQgcAAgZgMgAjKCVQgYgMgOgVQgOgVgBgbIA+AAQACAUALALQANALASAAQAWAAALgPQAMgQAAgcQAAgbgNgOQgOgOgYAAQgXAAgNALIgGAGIgygNIASigICxAAIAAA1Ih+AAIgHBEQAWgMAZAAQAtAAAaAcQAaAcAAAyQAAAegNAZQgPAZgWAMQgYAOghAAQgcAAgagMgAm+CVQgYgLgOgWQgOgUgCgcIA/AAQABAUAMALQANALASAAQAVAAAMgPQAMgQAAgcQAAgbgOgOQgNgOgYAAQgXAAgNALIgHAGIgxgNIASigICxAAIAAA1Ih+AAIgIBEQAXgMAZAAQAtAAAaAcQAZAbAAAzQAAAfgMAYQgPAZgXAMQgYAOggAAQgcAAgagMgAGyCVQgKgKAAgRIAAgJQAAgRAKgKQAKgKASAAQASAAAKAKQALAKAAASIAAAIQAAARgLAKQgKAKgSAAQgSAAgKgKgAHDBlQgEAEAAAIIAAAKQAAAHAEAEQAFAFAGAAQAPAAAAgRIAAgJQAAgHgEgFQgEgEgHAAQgHAAgEAEgAACCWQgJgKAAgOQAAgQAJgJQAKgJAQAAQAPAAAKAJQAKAJAAAQQAAAOgKAKQgJAJgQAAQgQAAgKgJgAFvCGIBXiKIARAIIhXCLgAFdAwQgKgJAAgSIAAgIQAAgQAKgKQALgKARAAQARAAALAKQALAKAAAQIAAAJQAAAQgLALQgLAKgRAAQgRAAgLgLgAFuABQgEAEAAAIIAAAJQAAAIAEAEQAFAEAGAAQAIAAADgEQAEgFAAgHIAAgJQAAgHgEgFQgDgEgIAAQgGAAgFAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-16,100.2,32.2);


(lib.ti1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ANGBxIAAhYIg6AAQgOAlgiAAQgYAAgPgVQgQgWAAgiQAAgjAQgWQAPgVAYAAQAgAAAPAhIA7AAIAAgyIASAAIAADfgALBg7QgLARAAAbQAAAaALARQALARAQAAQARAAALgRQAKgRAAgaQAAgcgKgQQgLgRgRAAQgQAAgLARgAMTgPQAAAMgCANIA1AAIAAg2Ig2AAQADANAAAQgAW3BwIAAjeIASAAIAADegAJmBwIAAjeIATAAIAADegAAuBwIAAhRIhaAAIAAgQIDIAAIAAAQIhbAAIAABRgAiRBwIAAhzIgiAAIAABoIgRAAIAAjOIARAAIAABXIAiAAIAAhcIARAAIAADegADLBuIAAgzICEAAIAAgUIiEAAIAAgOIBDAAIAAgWIhcAAIAAgNIDJAAIAAANIhbAAIAAAWIBBAAIAAAwIiEAAIAAAWICLAAIAAAPgAojBtIAAhZIASAAIAAAdIBpAAIAAgdIASAAIAABZgAoRBeIBpAAIAAgeIhpAAgA2vBtIAAhCIATAAIAAAzICJAAIAAAPgAsIBrIAAhFIASAAIAAA2ICBAAIAAAPgAy+BrIAAhFIASAAIAAA2ICFAAIAAAPgAVUBpIAAhQIg/ABIgDgPQBfAAA1gIIACAOQghAFghACIAABRgASZBeIAAgRIApAAIAAiLIggAAIAAgNQAXgFAOgIIAPAAIAAClIAlAAIAAARgAOABUIAAgQIBcAAIAAg7IhCAAIAAhlICWAAIAAAPIiEAAIAABIICHAAIAAAOIhFAAIAAA7IBcAAIAAAQgAwLBTIAAgPIDLAAIAAAPgAHFA3QBZgrAHhTIhWAAIAAgPIBoAAQAABphoAzgAw/A5IAAinIARAAIAACngAkxA2IAAiJIASAAIAAB5QAsgBAegGIACAPQgmAIgqAAgAqRA2IAAilIASAAIAABGIAhAAIAAAPIghAAIAABQgAxqAzIAAhSIgfAAIAAgPIAfAAIAAg8IARAAIAACdgAuFAKQgXgPgKgVQgJAVgXAPQgVAOgbAFIgHgPQAggGAWgSQAYgVAAgbIAAgBIhIAAIAAgPIBIAAIAAgfIATAAIAAAfIBIAAIAAAPIhIAAIAAABQAAAbAYAVQAWASAgAGIgHAPQgbgFgVgOgA3IAXIAAgPIBTAAIAAggIASAAIAAAgIBkAAIAAAPgAssAIQAZgIAQgVQAPgVAAgbIAAgcIASAAIAAAdQAAAXAQAUQAPATAYAIIgJAPQgmgOgQgmQgPApgpARgAzfASIAAhuIBUAAIAAAPIhCAAIAAAhIA5AAIAAAOIg5AAIAAAhQAtAAAggFIABAOQgeAGg0AAgAmoAJIAAgyIgvAAQgDAUgPAMQgQALgXAAQgZAAgQgNQgQgOAAgXQAAgXAQgOQAQgPAZAAQAXAAAPAMQAQAMADAUIAvAAIAAg2IASAAIAAB3gAoshKQgMAKAAAQQAAAPAMALQALAKARAAQASAAALgKQALgKAAgQQAAgQgLgKQgLgKgSAAQgRAAgLAKgA0wgIQADgNACgYIiIAHIgDgQICMgFIAAgZIiHAAIAAgPICZAAIAAATQAAArgGAegAU0gVQgQgMAAgVQAAgUAQgNQAPgMAZAAQAZAAAQAMQAPANAAAUQAAAVgPAMQgQANgZAAQgZAAgPgNgAVAhMQgLAJAAANQAAAOALAIQALAJARAAQARAAALgJQALgIAAgOQAAgNgLgJQgLgIgRAAQgRAAgLAIgABagcQgYgPgKgUQgKAUgYAPQgWAOgaAFIgHgPQAfgFAWgSQAagTAAgXIAAgNIAUAAIAAANQAAAXAaATQAXASAfAFIgHAPQgbgFgWgOgAE4ghQgYgJgJgQQgKAQgYAJQgWAJgcADIgGgOQAggDAWgKQAYgLACgRIhGAAIAAgOIBHAAIAAgWIASAAIAAAWIBHAAIAAAOIhGAAQACARAXALQAWAKAgADIgGAOQgcgDgWgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.1,-11.2,296.3,22.6);


(lib.gp1_t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwBbIAAi0IATAAIAAC0gAB5BYIAAhDIByAAIAABDgACMBIIBLAAIAAgiIhLAAgAALBSIAAhTIgfAAQgQAggkAVIgLgOQA0ghAEg4IgvAAIAAgQIBEAAQAAAbgIAXIAZAAIAAhEIATAAIAACngAh/BJQgEgFAAgGQAAgHAEgGQAFgEAGAAQAGAAAFAEQAEAGAAAHQAAAGgEAFQgFAFgGgBQgGABgFgFgAjqBLIAAgTIAgAAIAAhlIgaAAIAAgPQATgEAMgHIAQAAIAAB/IAcAAIAAATgADXAMIAAhlIAUAAIAABlgABrgHQgNgMAAgSQAAgUANgMQAOgMATABQAVgBANAMQANAMAAAUQAAASgNAMQgNALgVAAQgTAAgOgLgAB5g5QgHAIgBAMQABALAHAHQAIAHALAAQAMAAAIgHQAHgHABgLQgBgMgHgIQgIgGgMAAQgLAAgIAGg");
	this.shape.setTransform(23.5,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADEBBQgIgIAAgNIAAgIQAAgNAIgIQAIgIANAAQAOAAAJAIQAIAIAAAOIAAAHQAAANgIAIQgKAIgMAAQgNAAgJgIgADRAbQgDAEAAAGIAAAHQAAAGAEADQADAEAFAAQAMAAAAgNIAAgIQAAgFgEgEQgEgEgFAAQgEAAgEAEgAAoBEQgLgGgGgJQgGgKgBgLIAbAAQABAJAGAEQAEAFAJAAQAJAAAGgHQAEgHAAgMQAAgMgFgHQgHgFgKAAQgKAAgGAEIgCADIgWgGIAIhHIBNAAIAAAYIg2AAIgEAeQAKgFALAAQATAAALAMQALAMAAAXQABAOgGAKQgGALgKAGQgKAGgPAAQgMAAgLgFgAh1BEQgMgGgFgJQgHgKABgLIAbAAQABAJAEAEQAGAFAIAAQAKAAAEgHQAGgHAAgMQAAgMgHgHQgFgFgLAAQgKAAgFAEIgEADIgVgGIAIhHIBNAAIAAAYIg3AAIgDAeQAKgFAKAAQAVAAALAMQAKAMABAXQgBAOgFAKQgGALgKAGQgLAGgOAAQgMAAgLgFgAjgBEQgLgGgGgJQgGgKAAgLIAbAAQABAJAFAEQAFAFAJAAQAJAAAFgHQAFgHAAgMQAAgMgGgHQgFgFgLAAQgKAAgGAEIgDADIgWgGIAJhHIBNAAIAAAYIg3AAIgEAeQALgFAKAAQAUAAALAMQALAMAAAXQABANgHALQgFALgKAGQgLAGgOAAQgNAAgLgFgAgcBEQgEgFAAgGQAAgGAEgFQAEgEAHAAQAHAAAFAEQAEAFAAAGQAAAHgEAEQgFAEgHAAQgGAAgFgEgACQA1IBEhuIAMAHIhCBvgACCgOQgIgIAAgOIAAgHQAAgNAIgIQAJgIAMAAQAOAAAJAIQAHAIAAAOIAAAHQAAANgHAIQgJAIgNAAQgNAAgJgIgACPg0QgDADAAAHIAAAHQAAAGADADQADAEAGAAQAFAAADgEQADgDAAgGIAAgIQAAgFgDgEQgDgEgGAAQgFAAgDAEg");
	this.shape_1.setTransform(165.2,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190,18.1);


(lib.g1_gp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#332D2B").ss(5,1,1).p("AlmHBQBSBBBjAgQBnAiBsgHQDugOCeiyQCeiygPjsQgOjuiyieQiyidjsAOQjuAOieCyQidCyAODsQAGB2A2Br");
	this.shape.setTransform(4.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#332D2B").ss(5,1,1).p("AgJk8IAGALIgQBEIhDBEIBxBfIBpAYIA2BZIAFBNIhGBuIgXBbIgqgRIgmg/Ig3hFIAJgWIAahbIgng9IhMgbIgxgfIgZgpQAWg+ApgyQArg1A6gjg");
	this.shape_1.setTransform(-27.7,-13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#332D2B").ss(5,1,1).p("ACSBSQAABbgjBRIgqgaIAAhpIgthuIhhAAIhIg1IARhFIAygxIgUhQIBegPQBGA+AnBWQApBZAABig");
	this.shape_2.setTransform(48.4,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D4AF80").ss(5,1,1).p("Ajcj8IBCABQBPAEBDAOQDVAtANCCIADAbQABAigKAlQghB3iEBe");
	this.shape_3.setTransform(57.5,-23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4AF80").ss(5,1,1).p("AhJhoICTAwIhKCh");
	this.shape_4.setTransform(22.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D4AF80").ss(5,1,1).p("AjokkQhjA8hWBVQitCqA8CCIAFALQAJAPAQAQQAzA0BcAZQEsBQJcjk");
	this.shape_5.setTransform(-24.9,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D4AF80").s().p("AgCCdQgPgLgBgSIgHhIIgfAKIgNAWQgLAVgXAAIgEAAQgMgBgJgHQgJgIgEgLIgZhLQgFgPAHgOQAHgOAQgGQAFgCAIAAQAJAAAGADIAUAIIAdgLIgmg0QgMgSAIgUQAIgVAWgDIAUgFIAIAAQAQAAAMALIBDBCIAxgQQAJgCAJAAQANAAAKAEQAWAKAHAWQAHAUgKAVQgKAUgVAHIgrAPIgJBsQgBAOgJAKQgIAJgNADIgUAFIgJAAQgNAAgJgHgAAUB8IAUgEIALiEIBDgZQAGgCADgGQADgFgCgGQgCgEgFgDQgDgBgEgBIgGABIhIAYIhUhTIgVAEIBEBfIhdAgIgigMIAZBJIAUgkIBdggg");
	this.shape_6.setTransform(11.4,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.1,-59.9,164.2,119.9);


(lib.ClipGroup_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Az1D6IAAnzMAnrAAAIAAHzg");
	mask.setTransform(147,205.1);

	// Layer 3
	this.instance = new lib.Image_0();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_47, new cjs.Rectangle(20,180.1,254,50), null);


(lib.ClipGroup_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjqD6IAAnzIHVAAIAAHzg");
	mask.setTransform(297.5,205.1);

	// Layer 3
	this.instance = new lib.Image_1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_46, new cjs.Rectangle(274,180.1,46.9,50), null);


(lib.ClipGroup_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjMD6IAAnzIGZAAIAAHzg");
	mask.setTransform(340.5,205.1);

	// Layer 3
	this.instance = new lib.Image_2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_45, new cjs.Rectangle(320,180.1,41.1,50), null);


(lib.ClipGroup_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuD6IAAnzIFdAAIAAHzg");
	mask.setTransform(378.5,205.1);

	// Layer 3
	this.instance = new lib.Image_3();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_44, new cjs.Rectangle(361,180.1,34.9,50), null);


(lib.ClipGroup_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuD6IAAnzIFdAAIAAHzg");
	mask.setTransform(413.5,205.1);

	// Layer 3
	this.instance = new lib.Image_4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_43, new cjs.Rectangle(396,180.1,35.1,50), null);


(lib.ClipGroup_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiGD6IAAnzIENAAIAAHzg");
	mask.setTransform(441.5,205.1);

	// Layer 3
	this.instance = new lib.Image_5();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, new cjs.Rectangle(428,180.1,27,50), null);


(lib.ClipGroup_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAD6IAAnzICBAAIAAHzg");
	mask.setTransform(461.5,205.1);

	// Layer 3
	this.instance = new lib.Image_6();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, new cjs.Rectangle(455,180.1,12.9,50), null);


(lib.ClipGroup_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhAD6IAAnzICBAAIAAHzg");
	mask.setTransform(473.5,205.1);

	// Layer 3
	this.instance = new lib.Image_7();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, new cjs.Rectangle(467,180.1,13.1,50), null);


(lib.ClipGroup_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgnD6IAAnzIBPAAIAAHzg");
	mask.setTransform(484,205.1);

	// Layer 3
	this.instance = new lib.Image_8();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, new cjs.Rectangle(480,180.1,8,50), null);


(lib.ClipGroup_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiD6IAAnzIBFAAIAAHzg");
	mask.setTransform(490.5,205.1);

	// Layer 3
	this.instance = new lib.Image_9();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, new cjs.Rectangle(487,180.1,6.9,50), null);


(lib.ClipGroup_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOD6IAAnzIAdAAIAAHzg");
	mask.setTransform(495.5,205.1);

	// Layer 3
	this.instance = new lib.Image_10();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, new cjs.Rectangle(494,180.1,3,50), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjlBzIAAgKIHBAAIAAjbIAKAAIAADlg");
	mask.setTransform(297,241.5);

	// Layer 3
	this.instance = new lib.Image_35();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(274,230,46,23), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlOEYIAAgKIKTAAIAAolIAKAAIAAIvg");
	mask.setTransform(327.5,258);

	// Layer 3
	this.instance = new lib.Image_36();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(294,230,67.1,56), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Al2GuIAAgKILjAAIAAtRIAKAAIAANbg");
	mask.setTransform(358.5,273);

	// Layer 3
	this.instance = new lib.Image_37();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(321,230,75,86), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmZI1IAAgKIMpAAIAAxfIAKAAIAARpg");
	mask.setTransform(387,286.5);

	// Layer 3
	this.instance = new lib.Image_38();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(346,230,82,113), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmPLLIAAgKIMVAAIAA2LIAKAAIAAWVg");
	mask.setTransform(415,301.5);

	// Layer 3
	this.instance = new lib.Image_39();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(375,230,80,143), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AldNhIAAgKIKyAAIAA63IAJAAIAAbBg");
	mask.setTransform(432,316.5);

	// Layer 3
	this.instance = new lib.Image_40();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(397,230,70,173), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkXP3IAAgKIIlAAIAA/jIAKAAIAAftg");
	mask.setTransform(452,331.5);

	// Layer 3
	this.instance = new lib.Image_41();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(424,230,56,203), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai4SNIAAgKIFnAAMAAAgkPIAKAAMAAAAkZg");
	mask.setTransform(468.5,346.5);

	// Layer 3
	this.instance = new lib.Image_42();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(450,230,37.1,233), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhjUjIAAgKIC9AAMAAAgo7IAKAAMAAAApFg");
	mask.setTransform(484,361.5);

	// Layer 3
	this.instance = new lib.Image_43();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(474,230,20,263), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgEW5MAAAgtxIAJAAMAAAAtxg");
	mask.setTransform(496.5,376.5);

	// Layer 3
	this.instance = new lib.Image_44();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(496,230,1,293), null);


(lib.gp1_t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(219.7,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("ADNBKIAAiSIAVAAIAAA7IARAAIAAARIgRAAIAABGgAgGBHIAAgwIATAAIAAAgIBOAAIAAAQgAhAA5QgFgDAAgHQAAgGAFgFQADgEAHgBQAGABAEAEQAEAFAAAGQAAAHgEADQgEAFgGAAQgHAAgDgFgAiaA8IAAgTIAYAAIAAhKIgVAAIAAgPQAQgDAMgHIAQAAIAABjIAWAAIAAATgAjyA8IAAgTIAZAAIAAhKIgVAAIAAgPQAQgDALgHIAQAAIAABjIAXAAIAAATgABuAgIAjAAIAAgMQgLgDgHgHQgHgHAAgJQAAgNAKgHQAJgIAQAAQAQAAAJAIQAKAHAAANQAAATgZAHIAAALIAhgDIABAPQgeAGg5AAgACLgGQAAAKAQAAQAQAAAAgKQAAgMgQAAQgQAAAAAMgABBAiIAAhqIAUAAIAAAqIATAAIAAARIgTAAIAAAvgAgWAKIAAhGIBDAAIAABGgAgCgGIAbAAIAAgmIgbAAgABxgoIAAgRIAgAAIAAgPIAUAAIAAAPIAgAAIAAARg");
	this.shape.setTransform(24.3,285);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgHgHAAgKIAAgGQAAgKAHgHQAHgGAKAAQALAAAHAGQAGAHAAALIAAAFQAAALgGAGQgHAGgLABQgLgBgGgGgAB9AWQgCADAAAFIAAAFQAAAFADACQACADAEAAQAKAAAAgKIAAgGQAAgEgDgDQgCgEgFAAQgEAAgDAEgAgJA2QgIgEgGgIQgFgIAAgJIAWAAQABAIAEADQADAFAGAAQAIgBAEgFQAEgGAAgKQAAgJgFgFQgEgFgJAAQgGAAgGAEIgCACIgRgFIAGg5IA9AAIAAATIgrAAIgDAZQAIgFAIAAQAQAAAJAKQAJAJAAATQAAALgFAIQgEAJgJAEQgIAGgMAAQgIAAgJgFgAiRAuQgJgLgBgYIAAgUQAAgXAKgNQAJgMASAAQASAAAKAMQAJAMABAXIAAAUQAAAXgKANQgJANgTAAQgSAAgJgNgAiBghQgDAFgBAOIAAAbQAAANAEAHQADAIAIAAQAJgBADgGQAEgHAAgNIAAgaQAAgOgEgGQgEgHgIAAQgHAAgEAGgAhAA2QgEgDAAgFQAAgEAEgFQAEgDAFgBQAEABAFADQADADAAAGQAAAFgDADQgFAEgEAAQgFAAgEgEgABJAqIA2hYIALAHIg2BYgAA+gLQgHgHAAgLIAAgFQAAgKAHgHQAGgHALABQALgBAHAHQAGAHAAAKIAAAGQAAALgGAGQgHAHgKAAQgLAAgHgHgABJgpQgDACAAAFIAAAGQAAAFADADQACADAFgBQAEAAACgCQADgDAAgFIAAgGQAAgEgDgDQgCgEgFAAQgEAAgCAEg");
	this.shape_1.setTransform(430.1,287.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-230,520,553);


(lib.gp1_t10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(219.7,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AAYBCQgNgIAAgOQAAgNANgIQANgIAWAAQAXAAANAIQAOAIAAANQAAAOgOAIQgNAIgXAAQgWAAgNgIgAAfAsQAAANAcAAQAdAAAAgNQAAgMgdAAQgcAAAAAMgADcBJIAAiSIAVAAIAAA8IASAAIAAARIgSAAIAABFgAhQA5QgEgEAAgGQAAgHAEgEQAEgFAGAAQAGAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgGAAQgGAAgEgFgAilAuQgLgQAAgeQAAgdALgQQAKgPASAAQASAAAKAPQALAQAAAdQAAAegLAQQgKAQgSAAQgSAAgKgQgAiaAAQAAAsARAAQARAAAAgsQAAgqgRAAQgRAAAAAqgAkCA8IAAgTIAZAAIAAhKIgVAAIAAgPQAQgDALgHIARAAIAABjIAWAAIAAATgAB+AgIAiAAIAAgNQgYgFAAgVQAAgMAKgIQAJgHAQAAQAPAAAKAHQAKAIAAAMQAAAJgHAIQgHAHgLACIAAAMIAggDIACAPQgeAGg5AAgACbgHQAAALAQAAQAPAAAAgLQAAgLgPAAQgQAAAAALgABXAMIAAgQIgfAAQgMAKgQAAQgQAAgLgJQgKgKAAgQQAAgPAKgLQALgKAQAAQARAAALALIAfAAIAAgTIAVAAIAABVgAAPgqQgFAFAAAIQAAAIAFAFQAFAFAIAAQAIAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgIAAQgIAAgFAFgABCgdIgBAIIAWAAIAAgQIgWAAgACAgoIAAgRIAgAAIAAgPIAVAAIAAAPIAfAAIAAARg");
	this.shape.setTransform(25.9,255);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgHgGAAgLIAAgGQAAgLAHgGQAHgHAKABQALgBAHAHQAGAGAAALIAAAGQAAALgGAGQgHAHgLgBQgLABgGgHgAB9AVQgCAEAAAEIAAAGQAAAEADAEQACACAEABQAKAAAAgLIAAgGQAAgEgDgEQgCgCgFgBQgEABgDACgAiRAuQgJgMgBgXIAAgUQAAgXAKgNQAJgNASAAQASAAAKANQAJALABAYIAAAUQAAAWgKAOQgJAMgTAAQgSAAgJgMgAiBghQgDAFgBAOIAAAbQAAANAEAIQADAGAIAAQAJABADgHQAEgHAAgNIAAgaQAAgOgEgHQgEgGgIAAQgHAAgEAGgAhAA3QgEgEAAgFQAAgFAEgEQAEgEAFABQAEgBAFAEQADADAAAGQAAAGgDADQgFADgEAAQgFAAgEgDgAgTA5IAqheIg2AAIAAgTIBNAAIAAANIgrBkgABJArIA2hYIALAFIg2BYgAA+gLQgHgHAAgKIAAgGQAAgKAHgHQAGgHALAAQALAAAHAHQAGAGAAALIAAAGQAAALgGAGQgHAHgKgBQgLABgHgHgABJgqQgDADAAAFIAAAGQAAAFADADQACADAFAAQAEAAACgDQADgDAAgFIAAgGQAAgEgDgEQgCgCgFAAQgEAAgCACg");
	this.shape_1.setTransform(405.1,257.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-230,520,553);


(lib.gp1_t9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_5();
	this.instance.parent = this;
	this.instance.setTransform(220.3,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AgkBCQgNgIAAgNQAAgNANgHQANgHAXAAQAWAAANAHQAOAHAAANQAAANgOAIQgNAIgWgBQgXABgNgIgAgdAtQABAMAcAAQAcAAAAgMQAAgLgcAAQgcAAgBALgAhoA6QgEgFAAgGQAAgHAEgEQAEgFAGABQAHgBADAFQAEAEABAHQgBAGgEAFQgDAEgHAAQgGAAgEgEgAjHAxIANgPQAGAJAMAAQAXAAABgoQgJANgOAAQgQAAgIgJQgKgJAAgSQABgSAKgLQALgLAPAAQASAAAKAOQANAQAAAdQAAAfgOARQgLAPgTAAQgTAAgNgNgAi0gUQABAUAQAAQALAAAIgMQgCgegSAAQgPAAgBAWgABJA4IAAgRIAtAAIAAgyIAVAAIAAAyIA/AAIAAARgACjAVQAGgagBgnIhSAAIAAgQIBnAAIAAAOQAAAngFAfgAAbAQIAAhZIAVAAIAAAkIARAAIAAASIgRAAIAAAjgAhDgGIAaAAIAAgZIATAAIAAAYIApgDIACAPQggAFg3AAgAgJgSQADgPAAgPIg1AAIAAgQIBIAAIAAAJQAAAXgDAPg");
	this.shape.setTransform(20.2,226);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABwA0QgHgGABgLIAAgGQgBgKAHgHQAIgHAJAAQALAAAHAHQAGAGAAAMIAAAFQAAALgGAGQgHAGgLAAQgLAAgGgGgAB7AVQgDAEAAAFIAAAFQAAAEADADQACAEAEAAQAKAAAAgLIAAgGQAAgFgDgDQgCgCgFAAQgDAAgDACgAgUAuQgLgMAAgWIAAgIQAAgRAGgOQAIgPAMgHQALgIASAAIADAAIAAASIgCAAQgPACgJAGQgIAIgBAOQAIgJAMAAQAPAAAJALQAIAKAAARQAAAKgFAJQgFAKgIAFQgIAEgLAAQgRAAgKgMgAgCACQgEADgDAFIAAAHQAAAKAEAHQAFAGAHAAQAGAAAFgFQAEgHAAgIQAAgJgEgHQgEgEgIAAQgFAAgDACgAhDA3QgDgEgBgFQABgEADgFQAFgEAEAAQAFAAAEAEQADAEABAFQgBAGgDADQgEADgFAAQgEAAgFgDgAh+A5IAAhWIgaAIIAAgSIAtgRIACAAIAABxgABHAqIA2hXIAKAFIg2BYgAA8gLQgIgHABgLIAAgFQgBgKAIgHQAGgGAKgBQALABAHAGQAGAHAAALIAAAFQAAALgGAGQgHAGgKAAQgLAAgGgGgABGgqQgDADAAAGIAAAFQAAAFADACQACAEAFAAQAEAAACgEQADgCAAgFIAAgGQAAgEgDgEQgBgCgGAAQgEAAgCACg");
	this.shape_1.setTransform(381,228.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-230,520,553);


(lib.gp1_t8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_6();
	this.instance.parent = this;
	this.instance.setTransform(220.2,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("ADyBKIAAiTIAVAAIAACTgABtBJIAAiSIATAAIAACSgAgiBJIAAiSIAVAAIAACSgAioBJIAAhJIgMAAIAABDIgTAAIAAiJIATAAIAAA1IAMAAIAAg4IATAAIAACSgAE0BHIAAgtIAVAAIAAAcIBNAAIAAARgABPBDIAAhFIgNAAIAAAnIg5AAIAAhfIA5AAIAAAnIANAAIAAgzIAUAAIAACJgAAcAUIATAAIAAg9IgTAAgAk2A5QgEgEAAgGQAAgGAEgFQAEgFAGAAQAHAAAEAFQAEAFAAAGQAAAGgEAEQgEAFgHAAQgGAAgEgFgAmKA1QgLgIAAgPQAAgTAUgLIAAAAQgPgMAAgQQAAgPAKgIQAJgJAPAAQAPAAAKAJQAJAJAAAOQAAAQgPALIAAABQATAJAAAVQAAAOgKAJQgLAJgSAAQgQAAgLgJgAmBAcQAAAHAFAFQAGAGAIgBQARAAAAgQQAAgHgHgGQgGgFgNgFQgKAJAAANgAl8gcQAAANAVAIQAIgIAAgLQAAgIgEgEQgEgFgHAAQgOAAAAAPgAkGAdQgIgOAAgYQAAgYAIgPQAIgOAPAAQAOAAAIAOQAJAPAAAYQAAAYgJAOQgIAPgOAAQgPAAgIgPgAj8gJQAAAhANAAQAMAAAAghQAAghgMgBQgNABAAAhgACfAcQgLgPAAgXQAAgYALgPQAKgOARABQAQgBALAOQAKAPAAAYQAAAXgKAPQgLAOgQAAQgRAAgKgOgACtgjQgFAJAAAQQAAAPAFAJQAFAJAIgBQAIABAFgJQAFgJAAgPQAAgQgFgJQgFgIgIgBQgIABgFAIgAh9AlIAAhgIAUAAIAABOQAegBAegFIACARQgeAIgngBgAF+AkIAAgsIgYAAIAAgRIAYAAIAAgLIgYAAIAAgRIAYAAIAAgTIAVAAIAABsgAEaACQARgFAJgOQAIgNAAgRIAAgRIAVAAIAAARQAAAkAfAMIgLAQQgVgIgKgXQgJAXgYAKg");
	this.shape.setTransform(40.6,197);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgGgGAAgLIAAgGQAAgKAGgHQAIgGAKAAQALAAAGAGQAHAHAAALIAAAFQAAALgHAGQgGAGgLABQgLgBgHgGgAB+AWQgCADgBAFIAAAFQAAAEADADQADADAEAAQAJABAAgLIAAgGQABgEgDgDQgDgDgEgBQgEABgDADgAhAA2QgDgDAAgFQAAgFADgEQAFgDAEgBQAFABAEADQAEAEAAAFQAAAFgEADQgEAEgFAAQgEAAgFgEgAgcA5IAAgQIAjgmIALgOQAEgGAAgGQAAgGgEgGQgEgEgHAAQgHAAgDAFQgFAFAAAJIgWAAQAAgKAFgJQAEgIAKgGQAJgEAJAAQARAAAKAIQAJAIAAAQQAAAJgEAIQgDAHgMANIgYAbIAvAAIAAASgAiaA5IAAgQIAjgmIALgOQAEgGAAgGQAAgIgEgEQgEgEgGAAQgHAAgFAFQgEAEAAAKIgWAAQAAgKAEgJQAFgIAJgGQAKgEAKAAQARAAAKAIQAJAIAAAQQAAAIgEAJQgDAHgMANIgZAbIAvAAIAAASgABKAqIA2hYIALAHIg2BYgAA/gLQgHgHAAgLIAAgFQAAgKAHgHQAGgGALAAQALAAAGAGQAHAHAAALIAAAFQAAALgHAGQgGAGgLABQgLgBgGgGgABJgpQgCACAAAGIAAAFQAAAFACADQADACAEAAQAFAAACgDQADgCgBgFIAAgGQABgEgDgDQgCgEgFAAQgEAAgDAEg");
	this.shape_1.setTransform(355.5,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-230,520,553);


(lib.gp1_t7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(221.1,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AELBKIAAgrIg2AAIAAgRICCAAIAAARIg3AAIAAArgABZBIIAAgmIBOAAIAAgIIhOAAIAAgQIBjAAIAAAmIhOAAIAAAIIBSAAIAAAQgAlGBHIAAgrIAUAAIAAAaIBRAAIAAARgAF5BHIAAguIAVAAIAAAdIBNAAIAAARgAivBHIAAgvIAUAAIAAAeIBOAAIAAARgAl8A5QgDgEAAgGQAAgHADgEQAFgFAFAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgHAAQgFAAgFgFgAnFA8QACggAGgVQAHgWAPgXIgzAAIAAgUIBMAAIAAAOQgTAYgGAXQgGATgBAmgAhAA4IAAgRICBAAIAAARgAhkAkIAAhtIATAAIAABtgAHEAjIAAgrIgZAAIAAgRIAZAAIAAgMIgZAAIAAgRIAZAAIAAgTIAUAAIAABsgAiAAhIAAgxIgOAAIAAgRIAOAAIAAglIATAAIAABngAFgACQAQgFAJgOQAIgNAAgSIAAgRIAVAAIAAARQAAAlAfAMIgKAQQgWgJgKgWQgJAXgYAKgAgwATIAAhRIBiAAIAAARIhOAAIAAAPIBLAAIAAARIhLAAIAAAPIBPAAIAAARgAlVASIAAgQIAwAAIAAgRIAUAAIAAARIA9AAIAAAQgAjEAQIAAhOIA1AAIAAARIgiAAIAAAOIAdAAIAAAQIgdAAIAAAPQAZgBAOgCIACAPQgTAEggAAgADlADIAAgrIBOAAIAAgMIhOAAIAAgQIBjAAIAAAsIhPAAIAAAMIBSAAIAAAPgABLADIAAgQIA2AAIAAgPIAUAAIAAAPIA2AAIAAAQgAj7gGIADgSIhQADIgCgRIBTgCIAAgLIhQAAIAAgQIBkAAIAAAOQAAAdgDATgACLgtQgOAUgmAFIgGgQQAYgCAMgKQAMgIAAgNIAAgDIAUAAIAAADQAAANAMAIQAMAKAYACIgHAQQgmgFgNgUg");
	this.shape.setTransform(47.5,167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB0A0QgHgGAAgLIAAgGQAAgLAHgGQAGgHALABQALgBAHAHQAGAHAAAKIAAAGQAAALgGAGQgHAHgLAAQgLAAgGgHgAB+AVQgCAEAAAEIAAAGQAAAFADADQACACAEAAQAKAAAAgKIAAgGQAAgEgDgEQgDgDgEAAQgEAAgDADgAiSAyQgKgJAAgPIAVAAQAAAGAFAEQAFAFAHAAQAHAAAFgFQAEgFAAgGQAAgRgSAAIgLAAIAAgRIALAAQAIAAAFgEQAEgFAAgHQAAgGgEgFQgEgDgHAAQgHAAgEADQgEAFAAAEIgWAAQAAgHAFgJQAEgGAJgEQAJgEAJAAQARAAALAJQAJAHAAAQQAAAIgEAHQgEAGgIAEQAKADAEAGQAEAHAAAJQAAAPgLAKQgKAIgSABQgQgBgLgIgAg/A2QgEgDAAgFQAAgFAEgEQAEgEAFABQAEgBAFAEQADADAAAGQAAAFgDADQgFAEgEAAQgFAAgEgEgAADA5IAAhWIgZAIIAAgSIAsgRIADAAIAABxgABKArIA2hYIALAGIg2BXgAA/gLQgHgHAAgKIAAgGQAAgKAHgHQAGgHALABQALgBAHAHQAGAGAAALIAAAGQAAALgGAGQgHAHgKgBQgLABgHgHgABKgqQgDADAAAFIAAAGQAAAGADACQACACAFAAQAEAAACgCQADgDAAgFIAAgGQAAgEgDgEQgCgDgFABQgEgBgCADg");
	this.shape_1.setTransform(331.4,168.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-230,520,553);


(lib.gp1_t6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_8();
	this.instance.parent = this;
	this.instance.setTransform(220.1,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("Ag1BJIAAglIBNAAIAAgHIhNAAIAAgPIAnAAIAAgJIg2AAIAAgOICAAAIAAAOIg2AAIAAAJIAnAAIAAAkIhNAAIAAAIIBQAAIAAAPgABbBIIAAgvIAUAAIAAAeIBNAAIAAARgAhqA6QgEgEAAgGQAAgHAEgEQAEgFAGAAQAHAAADAFQAEAEABAHQgBAGgEAEQgDAFgHAAQgGAAgEgFgAi8AxQgNgQAAgeQAAgeAOgRQAMgPASAAQATAAANANIgNAPQgGgJgLAAQgYAAgBAoQAKgNANAAQAiAAAAAkQAAASgLALQgLALgOAAQgSAAgLgOgAizAPQADAeAQAAQAGAAAFgFQAFgGAAgLQAAgUgQAAQgLAAgIAMgACiAkIAAhsIAUAAIAAAqIATAAIAAARIgTAAIAAAxgABFAAIAPAAIAAgrIgLAAIAAgRIBMAAIAAARIgLAAIAAApIARgCIAAAOQghAGgyAAgABogBIAPAAIAAgqIgPAAgAgEggQgNARgoACIgFgQQAngBAHgPIgoAAIAAgPIAqAAIAAgMIAUAAIAAAMIAqAAIAAAPIgoAAQAIAPAnABIgGAQQgngCgOgRg");
	this.shape.setTransform(20.2,137.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB0A0QgGgGAAgLIAAgGQAAgKAGgHQAIgHAKAAQALAAAGAHQAHAGAAAMIAAAFQAAALgHAGQgGAGgLAAQgLAAgHgGgAB/AVQgDAEAAAFIAAAFQAAAEADADQADAEAEAAQAJAAAAgLIAAgGQAAgEgCgEQgDgCgEAAQgEAAgDACgAg/A3QgDgEAAgFQAAgEADgFQAFgEAEAAQAFAAAEAEQAEAEAAAFQAAAGgEADQgEADgFAAQgEAAgFgDgAgbA5IAAgQIAjgnIALgNQADgHAAgFQAAgGgDgGQgEgEgHAAQgHAAgEAFQgEAGAAAIIgWAAQAAgKAFgJQAEgIAJgFQAJgGAKAAQARAAAKAJQAJAIAAAQQAAAIgEAJQgDAIgMALIgZAbIAwAAIAAATgAhuA5IAAgZIguAAIgBgOIAuhKIAXAAIAABGIAMAAIAAASIgMAAIAAAZgAiHAOIAZAAIAAgngABLAqIA2hXIAKAFIg2BYgABAgLQgHgHAAgLIAAgFQAAgKAHgHQAGgGALgBQALABAGAGQAHAHAAALIAAAFQAAALgHAGQgGAGgLAAQgLAAgGgGgABKgqQgCADAAAGIAAAFQAAAFACADQADADAEAAQAFAAACgEQACgCAAgFIAAgGQAAgEgCgEQgCgCgFAAQgEAAgDACg");
	this.shape_1.setTransform(305.4,138.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-230,520,553);


(lib.gp1_t5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_9();
	this.instance.parent = this;
	this.instance.setTransform(220.5,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AgjBCQgNgIAAgNQAAgOANgHQANgIAWAAQAXAAAMAIQANAHABAOQgBANgNAIQgNAIgWAAQgVAAgOgIgAgbAtQAAAMAbAAQAcAAAAgMQAAgMgcAAQgbAAAAAMgABYAvQAAgMANgHQANgHAYAAQAXAAANAHQANAHAAAMQAAAagxAAQgyAAAAgagABsAvQABALAdAAQAdAAAAgLQAAgKgdAAQgdAAgBAKgAhnA5QgEgEAAgGQAAgHAEgEQAEgFAGAAQAHAAADAFQAEAEABAHQgBAGgEAEQgDAFgHAAQgGAAgEgFgAjJAuIAKgPQAMAMAOAAQAJAAAFgGQAFgGAAgKQAAgKgEgGQgGgFgIAAQgIAAgKAGIgKgGIADg6IA9AAIAAAUIgqAAIgCAZQAHgDAHAAQAPAAAKAJQALAJAAASQAAATgNAMQgLALgRAAQgYAAgOgQgABJANIAAgQIA3AAIAAgSIAUAAIAAASIA3AAIAAAQgAAaANIAAhWIAVAAIAAAiIATAAIAAASIgTAAIAAAigAg8AFIAAhFIAUAAIAAATIAcAAIAAgTIATAAIAABFgAgogLIAcAAIAAgSIgcAAgACKgoQgPAWgkAGIgIgQQAXgDANgLQAMgKAAgOIAAgEIAVAAIAAAEQAAAOALAKQANALAXADIgHAQQgkgGgOgWg");
	this.shape.setTransform(20.3,108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgHgHAAgKIAAgGQAAgLAHgGQAHgGAKgBQALABAHAGQAGAHAAALIAAAFQAAAKgGAHQgHAGgLAAQgLAAgGgGgAB9AWQgCADAAAFIAAAFQAAAEACADQADADAEABQAKAAAAgLIAAgGQgBgEgCgDQgDgDgEAAQgEAAgDADgAiQAuQgLgNAAgUIAAgIQAAgRAHgPQAHgOANgIQAMgIARAAIADAAIAAASIgCAAQgPABgJAHQgJAJgCANQAKgJANAAQAPAAAHALQAJAIAAATQAAAKgEAKQgFAIgJAFQgIAGgLgBQgSABgKgNgAh+ACQgEADgDAFIAAAGQAAALAFAHQAEAGAHABQAHAAAFgHQAEgGABgIQgBgKgEgFQgFgFgHAAQgFAAgEACgAhAA3QgEgEAAgFQAAgFAEgEQAEgDAFgBQAEABAFADQADAEAAAFQAAAGgDADQgFADgEAAQgFAAgEgDgAABA5IAAhWIgZAIIAAgSIAtgRIADAAIAABxgABJAqIA2hYIAKAHIg2BYgAA+gLQgHgHAAgLIAAgFQAAgKAHgHQAGgGALgBQALABAHAGQAGAHAAALIAAAFQAAALgGAGQgHAGgKABQgLgBgHgGgABIgpQgCACAAAGIAAAFQAAAFACADQADACAFAAQAEAAACgDQACgCABgFIAAgGQgBgEgCgDQgCgDgFgBQgEABgDADg");
	this.shape_1.setTransform(281,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-230,520,553);


(lib.gp1_t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_10();
	this.instance.parent = this;
	this.instance.setTransform(220.6,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("ACkBKIAAgnIhKAAIAAgQIBfAAIAAA3gAgyBIIAAgyIBhAAIAAAygAgeA3IA5AAIAAgRIg5AAgAhoA5QgEgEAAgGQAAgHAEgEQAEgFAGAAQAHAAAEAFQAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFgAiaA8IAAgfIgxAAIAAgQIArhHIAbAAIAABFIAOAAIAAASIgOAAIAAAfgAijgRIgSAcIAbAAIABgwIgBAAgACkAMIAAhVIAVAAIAAAjIATAAIAAARIgTAAIAAAhgAhBALIAAgPICAAAIAAAPgABVgDQgLgKAAgQQAAgPALgLQALgKAQAAQARAAALAKQALALAAAPQAAAQgLAKQgLAJgRAAQgQAAgLgJgABjgqQgFAFAAAIQAAAJAFAFQAFAEAIAAQAJAAAFgEQAFgFAAgJQAAgIgFgFQgFgFgJAAQgIAAgFAFgAgngUQgOgIAAgNQAAgOAOgHQAOgIAYAAQAXAAAOAIQAOAHAAAOQAAANgOAIQgOAHgXAAQgXAAgPgHgAgggpQAAAMAfAAQAeAAAAgMQAAgNgeAAQgfAAAAANg");
	this.shape.setTransform(20.4,79);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB0A0QgGgHAAgKIAAgGQAAgLAGgGQAIgGAJAAQALAAAHAGQAGAHAAAKIAAAGQAAALgGAGQgHAHgLAAQgKAAgHgHgAB/AWQgDADAAAEIAAAGQAAAFADADQACACAEAAQAKAAAAgKIAAgGQAAgEgDgDQgCgEgFAAQgEAAgCAEgAgUAyQgKgJAAgPIAWAAQAAAGAFAEQAEAFAGAAQAIAAAFgFQAEgFAAgGQAAgSgSAAIgLAAIAAgQIALAAQAIAAAEgEQAEgEAAgIQAAgHgEgEQgDgDgIAAQgGAAgEADQgDAEAAAFIgXAAQABgJAFgHQAEgGAIgFQAKgDAHAAQATAAAJAJQAKAHAAAQQAAAIgFAHQgEAFgHAEQAJADAEAHQAFAHAAAJQAAAQgLAJQgKAIgTABQgPgBgLgIgAg/A2QgDgDgBgFQABgFADgEQAFgDAEAAQAFAAAEADQADADABAGQgBAFgDADQgEAEgFAAQgEAAgFgEgAiRA5IArheIg3AAIAAgTIBPAAIAAANIgrBkgABLArIA2hZIAKAHIg2BYgABAgLQgIgHABgKIAAgGQgBgKAIgHQAFgHAMABQAKgBAHAHQAGAHAAAKIAAAGQAAALgGAGQgHAHgKAAQgLAAgGgHgABKgqQgCADAAAFIAAAGQAAAGACACQADADAEgBQAEAAACgCQADgDAAgFIAAgGQAAgEgDgEQgCgDgEAAQgEAAgDADg");
	this.shape_1.setTransform(255.9,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.4,-230,520,553);


(lib.gp1_t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_11();
	this.instance.parent = this;
	this.instance.setTransform(220.5,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("ABtBCQgOgHAAgOQAAgNAOgIQAMgHAYAAQAWAAANAHQANAIAAANQAAAOgNAHQgNAIgWAAQgYAAgMgIgAB0AtQAAANAdAAQAbAAABgNQgBgMgbAAQgdAAAAAMgAAgBKIAAglIhLAAIAAgRIBgAAIAAA2gAhqBJIAAiSIAUAAIAACSgAjyA5QgEgEAAgGQAAgHAEgEQAEgFAGAAQAHAAADAFQAEAEABAHQgBAGgEAEQgDAFgHAAQgGAAgEgFgAlUAtIAKgOQANAMANAAQAJAAAFgFQAFgEAAgIQAAgTgfAAIAAgQQAcAAAAgSQAAgOgPgBQgLABgLAKIgMgOQAQgPASAAQARAAAKAIQALAJgBAPQABATgUAIIAAAAQAYAGAAAXQAAAPgNAKQgLAJgRAAQgYAAgOgRgADUA4IAAgRIA2AAIAAgbIgoAAIAAhMIAUAAIAAAXIA9AAIAAgXIAUAAIAABMIgoAAIAAAbIA3AAIAAARgAD2gEIA9AAIAAgUIg9AAgAjNAdQARgIAKgSQAJgQAAgUIAAgIIgeAAIAAgSIBQAAIAAASIgeAAIAAAIQABATAIAPQAKARARAHIgLARQgYgKgLgdQgKAfgYAMgACsAOIAAgiIgVAAIAAgRIAVAAIAAgkIAUAAIAABXgABJgCQAPgGAKgNQAHgMABgOIgcAAIAAgRIBMAAIAAARIgbAAQAAANAIALQAJAMAPAFIgKAQQgWgIgKgUQgLAXgXAJgAAgAOIAAhXIAVAAIAABXgAhCgGQASgGAIgNQAJgMgBgPIAAgOIAWAAIAAAOQAAAhAfAKIgJAQQgWgHgLgVQgKAWgYAIg");
	this.shape.setTransform(34.2,49);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgGgGAAgLIAAgGQAAgLAGgGQAIgHAKAAQAKAAAHAHQAHAGgBALIAAAGQABALgHAGQgHAHgKgBQgLABgHgHgAB+AVQgDAEAAAEIAAAGQAAAFADADQADADAEAAQAJAAAAgLIAAgGQAAgEgDgEQgDgCgDAAQgFAAgCACgAhAA3QgEgEAAgFQAAgEAEgFQAFgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEADgFAAQgEAAgFgDgAiLA6IAAgTIAFAAQAdgBABgbQgHAJgNAAQgOAAgIgKQgJgKAAgRQgBgMAFgIQAFgJAJgGQAIgGALAAQAKAAAJAGQAIAHAFAKQAFAJAAAOIAAAJQAAAcgOAPQgNAQgaACgAiCghQgEAGAAAKQAAAKAEAFQAFAFAHAAQAGAAADgDQADgCADgEIAAgJQAAgLgEgHQgFgGgGAAQgHAAgFAGgAgcA5IAAgQIAjgnIALgNQADgHAAgFQAAgHgEgFQgDgEgHAAQgHAAgEAFQgEAFAAAJIgXAAQABgKAFgJQAEgIAJgFQAKgFAJgBQAQAAALAJQAJAIAAAQQAAAIgFAJQgCAIgMALIgYAbIAuAAIAAATgABJArIA2hYIALAFIg2BYgAA/gLQgIgHAAgKIAAgGQAAgKAIgHQAFgHAMAAQALAAAGAHQAHAGgBAMIAAAFQABALgHAGQgGAGgLAAQgLAAgGgGgABJgqQgDADABAGIAAAFQgBAGADABQADAEAEAAQAEAAADgEQACgCAAgFIAAgGQAAgEgCgEQgDgCgEAAQgFAAgCACg");
	this.shape_1.setTransform(230.9,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-230,520,553);


(lib.gp1_t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_12();
	this.instance.parent = this;
	this.instance.setTransform(220.4,46.5,1,1,0,0,0,260,276.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AD2BKIAAhOIgYAAIAAgRIAYAAIAAg0IAVAAIAACTgABYBJIAAgtIgeAAIAAAtIgVAAIAAgtIgeAAIAAgRICCAAIAAARIgdAAIAAAtgAhpBIIAAg3IBeAAIAAA3gAhUA3IA1AAIAAgVIg1AAgAipA6QgDgFAAgGQAAgGADgFQAFgFAFABQAHgBAEAFQAEAFAAAGQAAAGgEAFQgEAEgHAAQgFAAgFgEgAkIA8IAAgOQAxgtAAgXQAAgTgRAAQgLAAgKAMIgMgNQAQgSAUAAQAQAAALAKQAJAKAAARQAAAagmAnIArgCIAAAUgACZApIAAhmIBCAAIAAARIguAAIAAAYIAqAAIAAARIgqAAIAAAbQAdgBAYgDIABAQQgXAFgoAAgAiAAAQAbgJANgOIglADIgDgRIAxgBIACgKIgrAAIAAgRIBBAAQgBAegPAVQgPATgiALgAgfAKIAAgdIgZAAIAAgRIAZAAIAAglIAUAAIAABTgAAUAAIAAgRIARAAIAAggIgSAAIAAgRIBrAAIAAARIgTAAIAAAgIASAAIAAARgAA6gRIAdAAIAAggIgdAAg");
	this.shape.setTransform(26.7,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABzA0QgGgHgBgKIAAgGQABgLAGgGQAHgGALgBQALABAGAGQAHAHAAALIAAAFQAAALgHAGQgGAGgLAAQgLAAgHgGgAB9AWQgCADAAAFIAAAFQAAAEADADQADADAEABQAJAAAAgLIAAgGQAAgEgCgDQgEgDgDAAQgEAAgEADgAgJA3QgIgFgFgIQgGgIABgJIAVAAQABAHAEAFQADAEAGAAQAIgBAEgFQAEgHAAgJQAAgJgFgGQgEgEgIAAQgHAAgGAEIgCABIgRgEIAGg5IA+AAIAAATIgsAAIgCAYQAHgEAJAAQAPAAAJALQAJAIAAATQAAALgEAIQgFAJgJAEQgHAGgNgBQgIAAgJgDgAhAA3QgDgEAAgFQAAgFADgEQAFgDAEgBQAFABAEADQAEAEgBAFQABAGgEADQgEADgFAAQgEAAgFgDgAiLA6IAAgTIAFAAQAcgBADgaQgJAIgMAAQgOAAgIgKQgKgKABgRQgBgLAFgKQAFgIAJgGQAIgFALgBQALABAIAFQAIAHAFAJQAFAKAAAOIAAAJQAAAcgOAQQgNAPgaACgAiBghQgFAHAAAIQAAAKAFAGQAEAFAHAAQAGAAADgDQAEgBACgEIAAgKQAAgLgEgHQgFgGgGAAQgHAAgEAGgABJAqIA2hYIALAGIg2BZgAA+gLQgGgHgBgLIAAgFQABgKAGgHQAHgGALgBQALABAGAGQAHAHAAALIAAAFQAAALgHAGQgHAGgKABQgLgBgHgGgABJgpQgCACgBAGIAAAFQABAFACADQACACAFAAQAFAAACgDQACgCAAgFIAAgGQAAgEgCgDQgDgDgEgBQgEABgDADg");
	this.shape_1.setTransform(205.8,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-230,520,553);


(lib.gp1_bar_gp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B27E").s().p("AAtAtQgGgFAAgKIAAgFQAAgJAGgGQAGgFAJAAQAKAAAFAFQAGAGAAAKIAAAFQAAAJgGAFQgFAGgKAAQgJAAgGgGgAA2ATQgCACAAAFIAAAFQAAADACADQADADADAAQAIAAAAgJIAAgGQAAgEgCgCQgCgDgEAAQgDAAgDADgAhIAoQgIgLAAgTIAAgSQAAgVAIgKQAJgLAPAAQAQAAAIAKQAJAMAAATIAAASQAAAUgIALQgKALgPAAQgPAAgJgLgAg6gdQgDAFAAAMIAAAXQAAAMADAGQAEAGAGAAQAHAAADgGQAEgGAAgLIAAgXQAAgMgEgGQgDgFgHAAQgHAAgDAFgAAJAlIAvhNIAJAFIgvBNgAAAgKQgGgFAAgKIAAgFQAAgJAGgGQAFgFAJAAQAJAAAGAFQAGAGAAAKIAAAFQAAAJgGAFQgGAGgJAAQgJAAgFgGgAAIgkQgCACAAAFIAAAFQAAAEACACQADADADAAQAEAAACgDQACgCAAgFIAAgFQAAgEgCgCQgBgDgFAAQgEAAgCADg");
	this.shape.setTransform(8.1,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8B27E").s().p("AB2AtQgHgFAAgKIAAgFQAAgJAHgGQAFgFAJAAQAKAAAFAFQAHAGAAAKIAAAFQgBAJgFAFQgGAGgKAAQgJAAgFgGgAB/ATQgDACAAAFIAAAFQAAADADADQACADADAAQAIAAAAgJIAAgGQAAgEgCgCQgCgDgEAAQgDAAgCADgAAAAoQgIgLAAgTIAAgSQAAgVAIgKQAIgLAPAAQARAAAHAKQAJAMAAATIAAASQAAAUgIALQgIALgRAAQgPAAgIgLgAANgdQgDAGAAALIAAAXQAAAMADAGQAEAGAGAAQAIAAACgGQAEgFAAgMIAAgXQAAgMgEgGQgCgFgIAAQgHAAgDAFgAhKAoQgJgLAAgTIAAgSQABgVAHgKQAJgLAQAAQAQAAAIAKQAJAMAAATIAAASQgBAUgHALQgJALgQAAQgQAAgIgLgAg8gdQgDAFAAAMIAAAXQAAAMADAGQADAGAHAAQAHAAADgGQAEgGAAgLIAAgXQAAgMgEgGQgDgFgHAAQgHAAgDAFgAiCAyIAAhMIgWAIIAAgQIAngPIACAAIAABjgABRAlIAvhNIAJAFIgvBNgABHgKQgFgFAAgKIAAgFQAAgIAFgHQAHgFAIAAQAJAAAHAFQAFAGABAKIAAAFQgBAJgFAFQgGAGgKAAQgJAAgGgGgABRgkQgDACAAAFIAAAFQAAAEADACQACADADAAQAEAAACgDQACgDAAgEIAAgFQAAgDgCgDQgCgDgEAAQgEAAgBADg");
	this.shape_1.setTransform(484.8,5.1);

	this.instance = new lib.ClipGroup_37();
	this.instance.parent = this;
	this.instance.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_1 = new lib.ClipGroup_38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_2 = new lib.ClipGroup_39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_3 = new lib.ClipGroup_40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_4 = new lib.ClipGroup_41();
	this.instance_4.parent = this;
	this.instance_4.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_5 = new lib.ClipGroup_42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_6 = new lib.ClipGroup_43();
	this.instance_6.parent = this;
	this.instance_6.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_7 = new lib.ClipGroup_44();
	this.instance_7.parent = this;
	this.instance_7.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_8 = new lib.ClipGroup_45();
	this.instance_8.parent = this;
	this.instance_8.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_9 = new lib.ClipGroup_46();
	this.instance_9.parent = this;
	this.instance_9.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.instance_10 = new lib.ClipGroup_47();
	this.instance_10.parent = this;
	this.instance_10.setTransform(248.3,117.6,1,1,0,0,0,260,276.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.7,-158.9,520,553);


// stage content:
(lib.NCSOFT_graph1m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
        nc_chart01 = this;
	}
	this.frame_74 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74).call(this.frame_74).wait(1));

	// t11
	this.instance = new lib.gp1_t11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(148.1,156.5,0.58,0.58,0,0,0,219.7,46.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({y:162.3,alpha:1},5).wait(11));

	// t10
	this.instance_1 = new lib.gp1_t10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.1,156.5,0.58,0.58,0,0,0,219.7,46.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({y:162.3,alpha:1},5).wait(14));

	// t9
	this.instance_2 = new lib.gp1_t9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(148,156.5,0.58,0.58,0,0,0,220.3,46.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({y:162.3,alpha:1},5).wait(17));

	// t8
	this.instance_3 = new lib.gp1_t8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(148.1,156.5,0.58,0.58,0,0,0,220.2,46.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({_off:false},0).to({y:162.3,alpha:1},5).wait(20));

	// t7
	this.instance_4 = new lib.gp1_t7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(148.1,156.5,0.58,0.58,0,0,0,221.2,46.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(47).to({_off:false},0).to({y:162.3,alpha:1},5).wait(23));

	// t6
	this.instance_5 = new lib.gp1_t6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.1,156.5,0.58,0.58,0,0,0,220.2,46.6);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({y:162.3,alpha:1},5).wait(26));

	// t5
	this.instance_6 = new lib.gp1_t5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(148.1,156.5,0.58,0.58,0,0,0,220.6,46.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({y:162.3,alpha:1},5).wait(29));

	// t4
	this.instance_7 = new lib.gp1_t4("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(148.1,156.5,0.58,0.58,0,0,0,220.7,46.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({y:162.3,alpha:1},5).wait(32));

	// t3
	this.instance_8 = new lib.gp1_t3("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(148.1,156.5,0.58,0.58,0,0,0,220.6,46.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(35).to({_off:false},0).to({y:162.3,alpha:1},5).wait(35));

	// t2
	this.instance_9 = new lib.gp1_t2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(148,156.5,0.58,0.58,0,0,0,220.3,46.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({y:162.3,alpha:1},5).wait(38));

	// t1
	this.instance_10 = new lib.gp1_t1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(75.9,115.4,0.58,0.58,0,0,0,95,9.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({y:121.2,alpha:1},5).wait(41));

	// bar
	this.instance_11 = new lib.gp1_bar_gp("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(148.1,174,0.58,0.58,0,0,0,248.3,117.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({_off:false},0).to({y:162.3,alpha:1},8).wait(46));

	// tit3
	this.instance_12 = new lib.ti3("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(143.5,96.6,0.58,0.58);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(15).to({_off:false},0).to({regY:0.1,y:85,alpha:1},4).wait(56));

	// tit2
	this.instance_13 = new lib.ti2("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(258,66.5,0.58,0.58,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).to({x:240.6,alpha:1},4).wait(59));

	// tit1
	this.instance_14 = new lib.ti1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(100.8,66.1,0.58,0.58,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({x:112.4,alpha:1},4).wait(62));

	// icon
	this.instance_15 = new lib.g1_gp("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(142.5,38,0.135,0.135,0,0,0,0.4,0.4);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:0.1,regY:0,scaleX:0.32,scaleY:0.32,y:26.4,alpha:1},5).to({regX:0.3,regY:0.1,scaleX:0.4,scaleY:0.4},2).to({regX:0.1,regY:0,scaleX:0.32,scaleY:0.32},2).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.7,199.1,23.5,17.5);
// library properties:
lib.properties = {
	id: '6E0F2A2B378B424FBFA3192930A40FE0',
	width: 300,
	height: 340,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"img/NCSOFT_graph1m_atlas_.png", id:"NCSOFT_graph1m_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6E0F2A2B378B424FBFA3192930A40FE0'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;