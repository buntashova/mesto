
class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleDeleteIconClick }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._template = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._id = data._id;

    this._isLike = false;

  }

  fillCard(myInfo) {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".elements__image");
    this._like = this._element.querySelector(".elements__amount-like")

    this._setEventListeners();

    this._element.querySelector(".elements__description").innerText = this._name;
    this._image.alt = this._name;
    this._image.src = this._link;

    this._like.textContent = this._likes.length;

    this._likes.forEach(element => {
      if (element._id === myInfo.id) {
        this._element.querySelector(".elements__like").classList.toggle("elements__like_active");
      }

    })

    return this._element;
  }

  isLike() {
    return this._isLike;
  }

  updateLengthLikes(length) {
    this._like.textContent = length;
  }

  _getTemplate() {
    const elementsTemplate = document
      .querySelector(this._template)
      .content
      .cloneNode(true);

    return elementsTemplate;
  }

  handleDelete(evt) {
    evt.target.closest(".elements__element").remove();
  }

  changeLike(evt) {
    evt.target.classList.toggle("elements__like_active");

  }

  _setEventListeners() {
    this._element.querySelector(".elements__trash").addEventListener("click", (evt) => {

      this._handleDeleteIconClick(evt);
    });

    this._element.querySelector(".elements__like").addEventListener("click", (evt) => {
      if (this._isLike = !this._isLike) {
        this._isLike = true;
      }
      else {
        this._isLike = false;
      }
      this._handleLikeClick(evt);
    });

    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
}

export { Card };