(function(){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeading = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  // i want to change all the content on the page
  function changeElements() {
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    while (subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }

    objectIndex.images.forEach(function(image, index) {
      var newSubImg = document.createElement('img');
      newSubImg.src = "images/"+ objectIndex.images[index];
      newSubImg.className += " thumb";
      newSubImg.dataset.index = index;
      newSubImg.addEventListener('click', popLightBox, false);
      subImages.appendChild(newSubImg);
      newSubImg.addEventListener('click', function() {popLightBox(index, objectIndex); }, false);

    });

    theSubhead.classList.remove(appliedClass);
    theHeading.classList.remove(appliedClass);

    theSubhead.firstChild.nodeValue = objectIndex.headline;
    theSeasonText.firstChild.nodeValue = objectIndex.text;



    appliedClass = this.id;

    theSubhead.classList.add(this.id);

  }

  theImages.forEach(function(image, index){
    image.addEventListener('click', changeElements, false);
  });

  function popLightBox(currentIndex, currentObject) {
    debugger;
    window.scrollTo(0,0);
    document.body.style.overflow = 'hidden';
    let lightbox = document.querySelector('.lightbox');
    let lightboxImg =lightbox.querySelector('img');
    let lightboxDesc = lightbox.querySelector('p');
    let lightboxClose = document.querySelector('.close-lightbox');
    lightbox.style.display = 'block';
    lightboxImg.src = "images/"+ currentObject.images[currentIndex];
    lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

    lightBoxClose.addEventListener('click', closeLightbox, false);

  }

  function closeLightboc(){
    debugger;
  }

})();
