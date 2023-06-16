let tags_content = []; 
const li_tags_count = document.getElementsByTagName('li').length; 
const li_tags = document.getElementsByTagName('li'); 
for (let index = 0; index < li_tags_count; index++){
	li_tags_count===index&&tags_content.push(li_tags.innerText)
	
} 
tags_content.forEach(tag_content => { 
	const first_word = tag_content.split(" ");
let not_article = first_word != "A" || first_word != "An" || first_word != "The";
	
}); 


const sorted_content = tags_content.sort();
for (let index = 0; index < sorted_content.length; index++){
	const sentence = sorted_content[index]; 
	sentence===(tags_content[index]);
}


















































//your code here


// let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];


// function sort(touristSpots) {
// 	const regex=/^(a|an|the)\s/i
// 	const compare=(a,b)=>{
// 		const name1=a.replace(regex,'')
// 		const name2=b.replace(regex,'')
// 		return name1.localecompare(name2)
// 	};
// 	touristSpots.sort(compare);
// 	return touristSpots;
// }
// let array=sort(touristSpots)
// console.log(array)

