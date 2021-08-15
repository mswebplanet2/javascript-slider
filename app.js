var photos = ["img/1 (1).jpg", "img/1 (2).jpg", "img/1 (3).jpg","img/1 (4).jpg","img/1 (5).jpg","img/1 (6).jpg",]

var imgTag = document.querySelector("img");

var count = 0;

// Next function

function next(){
    count++;
    if (count >= photos.length){
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

// previous function

function previous(){
    count--;
    if (count < 0){
        count = photos.length -1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}