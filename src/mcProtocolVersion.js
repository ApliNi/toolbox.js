
// https://wiki.vg/Protocol_version_numbers
export let protocolVersionMax = 762;
export let protocolVersionAll = {
	762: '1.19.4',
	761: '1.19.3',
	760: '1.19.2',
	760: '1.19.1',
	759: '1.19',
	758: '1.18.2',
	757: '1.18.1',
	757: '1.18',
	756: '1.17.1',
	755: '1.17',
	754: '1.16.5',
	754: '1.16.4',
	753: '1.16.3',
	751: '1.16.2',
	736: '1.16.1',
	735: '1.16',
	578: '1.15.2',
	575: '1.15.1',
	573: '1.15',
	498: '1.14.4',
	490: '1.14.3',
	485: '1.14.2',
	480: '1.14.1',
	477: '1.14',
	404: '1.13.2',
	401: '1.13.1',
	393: '1.13',
	340: '1.12.2',
	338: '1.12.1',
	335: '1.12',
	316: '1.11.2',
	315: '1.11',
	210: '1.10.2',
	110: '1.9.4',
	108: '1.9.1',
	47: '1.8.9',
	4: '1.7.5',
};


// 匹配版本号的正则
const reg = new RegExp(/((?<![0-9\.])1\.[0-9]{1,2}(\.([0-9]{1,2}|[x|X]{1}))?(?![0-9\.]))+/g);

// 尝试获取版本号
// pv = 协议版本号
export function getVer(pv, vName, motd){
	let ver;

	// 尝试从版本名称中匹配版本号
	ver = getVerFromMatch(vName.match(reg));
	
	// 尝试从motd中匹配版本号
	if(ver === ''){
		ver = getVerFromMatch(motd.match(reg));
	}

	// 尝试使用协议版本号
	if(ver === ''){
		ver = protocolVersionAll[parseInt(pv)] || '';
	}

	if(ver === ''){
		ver = '未知版本';
	}

	return ver;
};


// 从正则表达式中获取版本
function getVerFromMatch(match){
	let _ver = '';
	if(match){
		// 多版本
		if(match.length > 1){
			_ver = match[0] +' - '+ match[match.length - 1];
		}else{
			_ver = match[0];
		}
	}
	return _ver.toLowerCase(); // 转换为小写
};
