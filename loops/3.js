// for of loop

// ["" , "" , ""]
// [{}, {} , {} ]


const arr=[1,2,3,4,5]
for (const val of arr) {
    console.log(val);
    
}
const greeitng="hello world"
for (const greet of greeitng) {
     if (greet==' ')
        continue
    console.log(`each char is ${greet}`);
    
}

//maps //unique

const map = new Map()
map.set('In',"india")
map.set('us',"usa")
map.set('p',"pak")
map.set('sl',"sri lanka ")

//console.log(map);

for (const [key,value] of map) {  // desconstrution of map is done here using [key,value]
    console.log(key,':-', value);
}

const myObject={
 'game':"pubg",
 'game2':"bgmi"
}

// for (const [key,value] of myObject) {  // cannot iterate to object by this means
//     console.log(key, ':-',value);
    
// }

// array aur maps  ke liye for of loop
