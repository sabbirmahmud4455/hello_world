	let arr = [11,2,8,4,6,5,1,15,9,3,12,13,10,7,14];

	const selection_sort = (arr) => {
		for (let i = 0; i < arr.length; i++) {
			let min_index = i;

			for (let j = 0; j < arr.length; j++) {
				
				if (arr[j] > arr[min_index]) {
					min_index = j
				}

				if (min_index != i) {
					// Swapping the elements
					let tmp = arr[i]; 
					arr[i] = arr[min_index];
					arr[min_index] = tmp;
				}
			}
		}
		return arr
	}

console.log(selection_sort(arr));
console.log(arr);



