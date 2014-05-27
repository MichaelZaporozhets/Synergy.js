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