//your code here


let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];


function sort(touristSpots) {
	const regex=/^(a|an|the)\s/i
	const compare=(a,b)=>{
		const name1=a.replace(regex,'')
		const name2=b.replace(regex,'')
		return name1.localecompare(name2)
	}
	touristSpots.sort(compare)
	return touristSpots
}
let array=sort(touristSpots)
console.log(array)

