module.exports =  {
	/**
	 * 对象转url参数
	 * @param {*} data,对象
	 * @param {*} isPrefix,是否自动加上"?"
	 */
	queryParams(data = {}, isPrefix = true) {
		let prefix = isPrefix ? '?' : ''
		let _result = []
		for (let key in data) {
			let value = data[key]
			// 去掉为空的参数
			if (['', undefined, null].indexOf(value) >= 0) {
				continue ;
			}
			if (value.constructor === Array) {
				value.forEach(_value => {
					_result.push(key + '[]=' + _value)
				})
			} else {
				_result.push(key + '=' + value)
			}
		}
		return _result.length ? prefix + _result.join('&') : ''
	}
}