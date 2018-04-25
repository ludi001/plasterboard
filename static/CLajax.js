function Clajax(url, type, params, callback) {
	if (!url || !type || url == '' || type == '') {
		callback('url或type参数错误！', false);
	} else {
		$.ajax({
			url: 'http://10.2.200.14:18080' + url,
			type: type,
			data: JSON.stringify(params),
			dataTypr: 'json',
			success: function(res) {
				callback(res, true)
			},
			error: function(res) {
				callback(res, false)
			},
		})
	}
}

function Clajax1(url, type, params, callback) {
	if (!url || !type || url == '' || type == '') {
		callback('url或type参数错误！', false);
	} else {
		$.ajax({
			url: 'http://192.168.9.202:8090' + url,
			type: type,
			data: JSON.stringify(params),
			dataTypr: 'json',
			success: function(res) {
				callback(res, true)
			},
			error: function(res) {
				callback(res, false)
			},
		})
	}
}