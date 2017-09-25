(function(){
  var theImages = document.querySelectorAll('.image-holder'),
  theHeading = document.querySelector('.heading'),
  theSubhead = document.querySelector('.main-copy h2'),
  theSeasonText = document.querySelector('.main-copy p'),
  appliedClass;

  // i want to change all the content on the page
  function changeElements() {
    debugger;
    let subImages = document.querySelector('.subImagesContainer');
    let objectIndex = dynamicContent[this.id];

    while (subImages.firstChild) {
      subImages.removeChild(subImages.firstChild);
    }

    objectIndex.images.forEach(function(image, index) {
      let newSubImg = document.createElement('img');
      newSubImg.classlist.add('thumb');
      newSubImg.src = "images/"+ objectIndex.images[index];
      newsubImg.dataset.index = index;
      newSubImg.addEventListener('click', popLightBox, false);
      subImages.appendChild(newSubImg);
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

  function popLightBox() {
    debugger;
    let lightbox = document.querySelector('.lightbox');
    lightbox.style.display = block;

  }

})();
