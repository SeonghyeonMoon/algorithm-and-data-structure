const fs = require('fs');
// const fs = require('fs').promises;
// 3가지 형태
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { }
// promises.rename().then().catch(console.error)

// try {
// 	fs.renameSync('./file.txt', './fileNew.txt');
// } catch (e) {
// 	console.log(e)
// }
// console.log('hello');

fs.readFile('../input.txt', 'utf-8', (error, data) => {
	if (error) throw error;
	console.log(data);
	fs.writeFile('../input.txt', 'Hi! Hi!!\n', (error) => {
		console.log(error);
	});
	fs.appendFile('../input.txt', 'Hi! Hi!!', (error) => console.log(error));
});


