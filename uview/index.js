// 引入全局mixin
import mixin from '@/uview/libs/mixin/mixin.js'

// 全局挂载引入http相关请求拦截插件
import http from "@/uview/libs/request";

function wranning(str) {
	// 开发环境进行信息输出,主要是一些报错信息
	// 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
	// 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
	if (process.env.NODE_ENV === 'development') {
		console.warn(str);
	}
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数
import {
	queryParams
} from '@/uview/libs/function/queryParams.js';
// 路由封装
import {
	route
} from '@/uview/libs/function/route.js';
// 时间格式化
import {
	timeFormat
} from '@/uview/libs/function/timeFormat.js';
// 时间戳格式化,返回多久之前
import {
	timeFrom
} from '@/uview/libs/function/timeFrom.js';
// 颜色渐变相关,colorGradient-颜色渐变,hexToRgb-十六进制颜色转rgb颜色,rgbToHex-rgb转十六进制
import {
	colorGradient,
	hexToRgb,
	rgbToHex
} from '@/uview/libs/function/colorGradient.js';
// 生成全局唯一guid字符串
import {
	guid
} from '@/uview/libs/function/guid.js';
// 主题相关颜色,info|success|warning|primary|default|error,此颜色已在uview.scss中定义,但是为js中也能使用,故也定义一份
import {
	color
} from '@/uview/libs/function/color.js';
// 根据type获取图标名称
import {
	type2icon
} from '@/uview/libs/function/type2icon.js';
// 打乱数组的顺序
import {
	randomArray
} from "@/uview/libs/function/randomArray.js";

// 规则检验
import test from "@/uview/libs/function/test.js";
// 随机数
import {
	random
} from "@/uview/libs/function/random.js";
// 去除空格
import {
	trim
} from "@/uview/libs/function/trim.js";
// toast提示，对uni.showToast的封装
import {
	toast
} from "@/uview/libs/function/toast.js";

import config from "@/uview/libs/config/config.js";

const $u = {
	queryParams,
	route,
	timeFormat,
	date: timeFormat, // 另名date
	timeFrom,
	colorGradient,
	guid,
	color,
	type2icon,
	randomArray,
	wranning,
	get: http.get,
	post: http.post,
	hexToRgb,
	rgbToHex,
	test,
	random,
	trim,
	type: ['primary', 'success', 'error', 'warning', 'info'],
	http,
	toast,
	config, // uView配置信息相关，比如版本号
}

const install = (Vue) => {
	Vue.mixin(mixin);
	// Vue.mixin(vuexStore);
	// 时间格式化，同时两个名称，date和timeFormat
	Vue.filter('timeFormat', (timestamp, format) => {
		return timeFormat(timestamp, format);
	})
	Vue.filter('date', (timestamp, format) => {
		return timeFormat(timestamp, format);
	})
	// 将多久以前的方法，注入到全局过滤器
	Vue.filter('timeFrom', (timestamp, format) => {
		return timeFrom(timestamp, format);
	})
	Vue.prototype.$u = $u;
}

export default {
	install
}
