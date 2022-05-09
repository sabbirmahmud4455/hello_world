	let arr = [];

	for (let index = 0; index < 99999999; index++) {
		arr.push(index+ 1)
	}

	const val = 1;

	let try_loop = 0;

	function binary_search(val, arr) {
		let lower = 0;
		let upper = arr.length - 1;

		for (let index = 0; lower <= upper; index++) {
			try_loop += 1;
		 	let middle = lower + Math.floor((upper - lower) / 2);
			
			if (val === arr[middle]) {
				return arr[middle];
			}

			if (val < arr[middle]) {
				upper = middle - 1
			} else {
				lower = middle + 1
			}
		}
		return -1;
	}


	console.time('binary')
	console.log('binary :' + binary_search(val, arr));
	console.timeEnd('binary')
	
	console.log('try_loop :'+ try_loop);
	



