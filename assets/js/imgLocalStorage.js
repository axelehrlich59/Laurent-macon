// Target all img tag of realisation page and make an array of this
let img = document.getElementsByName('img');

// All img in array 
let arrOfImg = ["https://source.unsplash.com/pWkk7iiCoDM/400x300",
                "https://source.unsplash.com/aob0ukAYfuI/400x300", 
                "https://source.unsplash.com/EUfxH-pze7s/400x300", 
                "https://source.unsplash.com/M185_qYH8vg/400x300",
                "https://source.unsplash.com/sesveuG_rNo/400x300", 
                "https://source.unsplash.com/AvhMzHwiE_0/400x300", 
                "https://source.unsplash.com/2gYsZUmockw/400x300", 
                "https://source.unsplash.com/EMSDtjVHdQ8/400x300", 
                "https://source.unsplash.com/8mUEy0ABdNE/400x300", 
                "https://source.unsplash.com/G9Rfc1qccH4/400x300", 
                "https://source.unsplash.com/aJeH0KcFkuc/400x300", 
                "https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"];

// Set img on the arrOfImg on the localStorage
localStorage.setItem('objOfImg', JSON.stringify(arrOfImg));

// Get data of localStorage
let getData = JSON.parse(localStorage.getItem('objOfImg'));

// Array for receiving data of LocalStorage
let arrOfLink = [];

// Loop for push img to the array
for(let itm of getData){
    arrOfLink.push(itm);
}
    
// Loop for initialize src of img by the data of array
for(let i = 0; i < arrOfLink.length;i++){
    img[i].src = arrOfLink[i];
}

