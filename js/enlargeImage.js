function enlargeImage(img) {
  var modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modal.style.zIndex = '999';
  modal.onclick = function() {
    document.body.removeChild(modal);
  };

  var modalImg = document.createElement('img');
  modalImg.src = img.src;
  modalImg.style.display = 'block';
  modalImg.style.maxWidth = '80%';
  modalImg.style.maxHeight = '80%';
  modalImg.style.margin = 'auto';
  modal.appendChild(modalImg);

  document.body.appendChild(modal);
}