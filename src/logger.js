

export let logger = {

	info(...log){
		console.log('\x1B[0m[' + getTime() + ' INFO]: '+ log.join('') +'\x1B[0m');
	},

	mark(...log){
		console.log('\x1B[92m[' + getTime() + ' MARK]: '+ log.join('') +'\x1B[0m');
	},

	log(...log){
		console.log(log.join(''));
	},

	table(log){
		console.table(log);
	},

	warn(...log){
		console.log('\x1B[93m[' + getTime() + ' WARN]: '+ log.join('') +'\x1B[0m');
	},

	error(...log){
		console.log('\x1B[91m[' + getTime() + ' ERROR]: '+ log.join('') +'\x1B[0m');
	},

	throw(message, log, devInfo){
		if(message) logger.error(message);
		if(log) logger.log(log);
		if(devInfo) logger.mark(devInfo);
	},
};


function getTime(){
	let time = new Date();
	return	time.getHours().toString().padStart(2, '0')
			+':'+
			time.getMinutes().toString().padStart(2, '0')
			+':'+
			time.getSeconds().toString().padStart(2, '0')
	;
};
