(function(){
	function esc(s){
		return String(s)
			.replace(/&/g,'&amp;')
			.replace(/</g,'&lt;')
			.replace(/>/g,'&gt;')
			.replace(/\"/g,'&quot;')
			.replace(/'/g,'&#39;');
	}

	window.generateMeta = function(){
		var title = document.getElementById('title').value;
		var keywords = document.getElementById('keywords').value;
		var description = document.getElementById('description').value;
		var viewport = document.getElementById('viewport').value;
		var charset = document.getElementById('charset').value;
		var cache = document.getElementById('cache').value;
		var author = document.getElementById('author').value;
		var copyright = document.getElementById('copyright').value;
		var designer = document.getElementById('designer').value;

		var meta = '';
		meta += '<!DOCTYPE html>\n';
		meta += '<html lang="zh-CN">\n';
		meta += '<head>\n';
		meta += '    <meta charset="' + esc(charset) + '">\n';
		meta += '    <meta name="viewport" content="' + esc(viewport) + '">\n';
		meta += '    <title>' + esc(title) + '</title>\n';
		if (keywords) meta += '    <meta name="keywords" content="' + esc(keywords) + '">\n';
		if (description) meta += '    <meta name="description" content="' + esc(description) + '">\n';
		if (author) meta += '    <meta name="author" content="' + esc(author) + '">\n';
		if (copyright) meta += '    <meta name="copyright" content="' + esc(copyright) + '">\n';
		if (designer) meta += '    <meta name="designer" content="' + esc(designer) + '">\n';
		meta += '    <meta http-equiv="cache-control" content="' + esc(cache) + '">\n';
		meta += '</head>\n<body>\n\n</body>\n</html>';

		var out = document.getElementById('result');
		if (out) out.value = meta;
	};

	window.addEventListener('load', function(){
		if (typeof window.generateMeta === 'function') {
			window.generateMeta();
		}
	});
})();
