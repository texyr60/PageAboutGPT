let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let photo1 = document.querySelector('#photo1');
let photo2 = document.querySelector('#photo2');
let photo3 = document.querySelector('#photo3');
let photo4 = document.querySelector('#photo4');
let photo5 = document.querySelector('#photo5');

let activePhotoNumber = 1;

let hideActivePhoto = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showPhoto = (photoNumber) => {
    hideActivePhoto()
    document.querySelector('#photo' + photoNumber).classList.add('active')
}

let showNextPhoto = () => {
    if(activePhotoNumber === 5) {
        activePhotoNumber = 1;
    } else {
        activePhotoNumber = activePhotoNumber+1;
    }

    showPhoto(activePhotoNumber)
}

let showPreviousPhoto = () => {
    if(activePhotoNumber === 1) {
        activePhotoNumber = 5;
    } else {
        activePhotoNumber = activePhotoNumber-1;
    }

    showPhoto(activePhotoNumber)
}

let showPhoto1 = () => {
    photoNumber(1);
}

let showPhoto2 = () => {
    photoNumber(2);
}

let showPhoto3 = () => {
    photoNumber(3);
}

let showPhoto4 = () => {
    photoNumber(4);
}

let showPhoto5 = () => {
    photoNumber(5);
}



arrowRight.addEventListener('click', showNextPhoto)
arrowLeft.addEventListener('click', showPreviousPhoto)