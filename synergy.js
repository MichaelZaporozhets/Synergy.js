
//  __                                     _     
// / _\_   _ _ __   ___ _ __ __ _ _   _   (_)___ 
// \ \| | | | '_ \ / _ \ '__/ _` | | | |  | / __|
// _\ \ |_| | | | |  __/ | | (_| | |_| |_ | \__ \
// \__/\__, |_| |_|\___|_|  \__, |\__, (_)/ |___/
//     |___/                |___/ |___/ |__/     

// Come synergize with me...


// USAGE:

// "I want to enlarge business growth by the end of the year.".synergize();

// OR

// var synergizedText = synergize("I want to enlarge business growth by the end of the year.")



(function(exports) {
	var synergizer = function() {
		this.synergaurus = [
			{
				find: ['expand','enlarge','get bigger'],
				replace: ['propagate', 'amplify', 'aggrandize']
			},
			{
				find: ['combine'],
				replace: ['synergise','synthesize','network']
			},
			{
				find: ['make sure','ensure'],
				replace: ['establish','verify','corroborate']
			},
			{
				find: ['to profit', 'improve margins'],
				replace: ['monegise']
			},
			{
				find: ['helpful'],
				replace: ['advantageous']
			},
			{
				find: ['technology','solution','software','project','repository','meeting'],
				replace: ['innovative cloud solution']
			},
			{
				find: ['solve', 'fix'],
				replace: ['innovate']
			}
		]
	}

	synergizer.prototype.synergize = function(input) {

		var synergizingMap = synergizer.synergaurus;
		var synergizedText = input;

		for(i in synergizingMap) {
			var test = false;
			for(j in synergizingMap[i].find) {
				if(test !== true) {
					var words = synergizedText.split(' ');
					for(k in words) {
						if(words[k].indexOf(synergizingMap[i].find[j]) !== -1) {
							var which = Math.floor(Math.random() * synergizingMap[i].replace.length);
							words[k] = words[k].replace(synergizingMap[i].find[j],synergizingMap[i].replace[which]);
						}
					}
					synergizedText = words.join(' ');
				}
			}
		}
		return synergizedText;
	}

	var synergizer = new synergizer();
	String.prototype.synergize = function () { return synergizer.synergize(this.toString()); };
	exports.synergize = synergizer.synergize;
})(this);