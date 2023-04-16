const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeInsert = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const memeContainer = document.getElementById('meme-image-container');
const modelPhotos = document.getElementById('model-photos');
const stylesBorder = [
  '3px dashed rgb(255, 0, 0)',
  '5px double rgb(0, 0, 255)',
  '6px groove rgb(0, 128, 0)',
];

const createModel = () => {
  for (let index = 1; index <= 4; index += 1) {
    const model = document.createElement('div');
    model.id = `meme-${index}`;
    model.classList = (`model meme-${index}`);
    model.style.backgroundImage = `url('https://source.unsplash.com/random/500x500?${index}')`;
    const text = document.createElement('p');
    text.innerHTML = 'Seu texto aqui!';
    text.classList.add('model-text');
    model.appendChild(text);
    modelPhotos.appendChild(model);
  }
};

const transferText = () => {
  textInput.addEventListener('keyup', () => {
    memeText.innerHTML = textInput.value;
  });
};

const uploadImg = () => {
  memeInsert.addEventListener('change', () => {
    const listFile = memeInsert.files;
    if (listFile.length) {
      memeImage.style.backgroundImage = `url('${URL.createObjectURL(listFile[0])}')`;
      memeImage.style.backgroundSize = '100% 100%';
      memeImage.style.backgroundPosition = 'initial';
    }
  });
};

const changeBorder = () => {
  document.addEventListener('click', (event) => {
    const button = event.target;
    if (button.tagName === 'BUTTON') {
      const index = Array.prototype.indexOf.call(button.parentElement.children, button);
      memeContainer.style.border = stylesBorder[index];
    }
  });
};

window.onload = () => {
  createModel();
  transferText();
  uploadImg();
  changeBorder();
  const model = document.querySelectorAll('.model');
  for (let index = 0; index < model.length; index += 1) {
    model[index].addEventListener('click', () => {
      const classModel = model[index].classList[1];
      console.log(classModel);
      memeImage.classList = classModel;
      // memeImage.style.backgroundImage = model[index].style.backgroundImage;
      memeImage.style.backgroundSize = '100% 100%';
      memeImage.style.backgroundPosition = 'initial';
    });
  }
};
