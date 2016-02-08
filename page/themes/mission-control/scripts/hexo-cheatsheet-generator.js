hexo.extend.generator.register('cheatsheet', function(locals) {

	var cheatsheets = locals.cheatsheets.sort('-title').toArray();
	var length = cheatsheets.length;

	return cheatsheets.map(function(cheatsheet, i) {
		var layout = cheatsheet.layout;
		var path = cheatsheet.path;
		cheatsheet.content = cheatsheet._content;

		console.dir(cheatsheet);

		if (!layout || layout === 'false') {
			return {
				path: path,
				data: cheatsheet.content
			};
		}

		if (i) cheatsheet.prev = cheatsheets[i - 1];
		if (i < length - 1) cheatsheet.next = cheatsheets[i + 1];

		var layouts = ['cheatsheet', 'post', 'page', 'index'];
		if (layout !== 'cheatsheet') layouts.unshift(layout);

		cheatsheet.__cheatsheet = true;

		return {
			path: path,
			layout: layouts,
			data: cheatsheet
		};
	});

	/*
		return locals.cheatsheets.map(function(cheatsheet){
	    return {
	      path: cheatsheet.path,
	      data: cheatsheet,
	      layout: 'cheatsheet'
	    };
	  });
		*/
});
