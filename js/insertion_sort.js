	// let arr = [11,20,2,8,18,19];
	let arr = [11,20,2,8,33,18,19,26,4,34,31,6,17,25,24,30,5,1,23,15,9,21,16,3,12,32,13,10,7,14,27,29,22,35,28];	

	function insertionSort(array){
		
		for (let i = 1; i < array.length; i++) {
			
			for (let j = i; j > 0; j--) {
			
				if (array[j] < array[j-1]) {
					[array[j], array[j-1]] = [array[j-1], array[j]]
				} else {
					break
				}
			}
		}

		return array;
	}

console.time('insertionSort')
console.log(insertionSort(arr));
console.timeEnd('insertionSort')