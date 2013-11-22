/**
 * Identify and apply alignment from a string
 *
 * @param text
 * @returns {{text: *, align: string}}
 */

module.exports.identify = function(text) {

	if (!text) {
		return {
			text: text,
			align: 'left'
		};
	}

	var c1 = text.substr(0, 1),
		c2 = text.substr(-1),
		align = 'left';

	if (c1 == '>' && c2 == '<') {
		text = text.substr(1, text.length).substr(0, text.length-2);
		align = 'center';
	} else if (c1 == '>') {
		text = text.substr(1, text.length);
		align = 'right';
	} else if (c2 == '<') {
		text = text.substr(0, text.length-1);
		align = 'left';
	}

	return {
		text: text,
		align: align
	};
};


module.exports.apply = function(text, width, align) {

	var spaces = width - text.length;

	switch (align) {
		case 'center':
			spaces = Math.floor(spaces/2);
			break;
		case 'left':
			spaces = 0;
			break;
	}

	for (var i=0; i<spaces; i++) {
		text = ' ' + text;
	}

	return text;
};