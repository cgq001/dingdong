import {timeFormat} from '@/uview/libs/function/timeFormat.js';
module.exports = {
	timeFrom(timestamp = null, format = 'yyyy-mm-dd'){
		if (timestamp == null) timestamp = Number(new Date());
		timestamp = parseInt(timestamp);
		// 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
		if(timestamp.toString().length == 10) timestamp *= 1000;
	    var timer =  (new Date()).getTime() - timestamp;
		timer = parseInt(timer / 1000);
		// 如果小于5分钟,则返回"刚刚",其他以此类推
		let tips = '';
		switch(true) {
			case timer < 300: 
				tips = '刚刚'; break;
			case timer >= 300 && timer < 3600:
				tips = parseInt(timer / 60) + '分钟前'; break;
			case timer >= 300 && timer < 86400:
				tips = parseInt(timer / 3600) + '小时前'; break;
			case timer >= 300 && timer < 2592000:
				tips = parseInt(timer / 86400) + '天前'; break;
			default :
				tips = timeFormat(timestamp, format);
		}
	    return tips;
	}
}