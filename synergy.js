
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


			// prefixDep: depend on a prefix to apply this rule
			// suffixDep: depend on a suffix to apply this rule


			{
				find: ['expand','enlarge'],
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
				replace: ['mutually advantageous and cooperative']
			},
			{
				find: ['technology','solution','software','project','repository','meeting'],
				replace: ['innovative cloud solution']
			},
			{
				prefixDep: 'to',
				find: ['to solve', 'to fix'],
				replace: ['to innovate and synergize']
			},
			{
				find: ['advantage'],
				replace: ['cutting edge optimization']
			},
			{
				find: ['SEO'],
				replace: ['Search Engine Optimizating Synergy']
			},
			{
				find: ['precise'],
				replace: ['precise (to a point of synergy)']
			},
			{
				suffixDep: 'lol',
				find: ['meow lol'],
				replace: ['test lol']
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
					var removeList = [];
					for(k in words) {
						if(typeof synergizingMap[i].prefixDep !== 'undefined' && words[k-1] == synergizingMap[i].prefixDep) {
							if(words[k].indexOf(synergizingMap[i].find[j].replace(synergizingMap[i].prefixDep+' ','')) !== -1) {
								var which = Math.floor(Math.random() * synergizingMap[i].replace.length);
								removeList.push(parseInt(k-1));
								words[k] = words[k].replace(synergizingMap[i].find[j].replace(synergizingMap[i].prefixDep+' ',''),synergizingMap[i].replace[which]);
							}
						} else if(typeof synergizingMap[i].suffixDep !== 'undefined' && words[parseInt(k+1)] == synergizingMap[i].suffixDep) {
							if(words[k].indexOf(synergizingMap[i].find[j].replace(' '+synergizingMap[i].suffixDep,'')) !== -1) {
								var which = Math.floor(Math.random() * synergizingMap[i].replace.length);
								removeList.push(parseInt(k+1));
								words[k] = words[k].replace(synergizingMap[i].find[j].replace(' '+synergizingMap[i].suffixDep,''),synergizingMap[i].replace[which]);
							}
						} else {
							if(words[k].indexOf(synergizingMap[i].find[j]) !== -1) {
								var which = Math.floor(Math.random() * synergizingMap[i].replace.length);
								words[k] = words[k].replace(synergizingMap[i].find[j],synergizingMap[i].replace[which]);
							}
						}
					}

					//remove redundant text
					for(i in removeList) {
						words.splice(removeList[i]-i, 1);
					}

					//bring the peanut butter back to the jelly
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