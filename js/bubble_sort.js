	// let arr = [11,20,2,8,18,19];
	let arr = [11,20,2,8,33,18,19,26,4,34,31,6,17,25,24,30,5,1,23,15,9,21,16,3,12,32,13,10,7,14,27,29,22,35,28];
	

	function bubbleSort(arr){
		for (let i = 0; i < arr.length; i++) {
			
			for (let j = 0; j < arr.length - i; j++) {
				if (arr[j] > arr[j + 1]) {
					let team = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = team;
				}
			}
		}
		return arr
	}

console.time('bubbleSort')
console.log(bubbleSort(arr));
console.timeEnd('bubbleSort')


