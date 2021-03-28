class UserInfo {
  constructor(nameSelector, bioSelector, avatar, api) {
    this._name = document.querySelector(nameSelector);
    this._bio = document.querySelector(bioSelector);
    this._avatar = document.querySelector(avatar);
    this._api = api
  }

  fillUserInfo() {
    this._api.getInfoUser()
      .then(data => {
        this._name.textContent = data.name;
        this._bio.textContent = data.about;
        this._avatar.style.backgroundImage = `url("${data.avatar}")`;
        this._id = data._id
      })
      .catch(err => {
        console.log("Невозможно получить данные пользователя Ошибка: " + err)
      })
  }
  getUserInfo() {
    const info = {
      name: this._name.textContent,
      bio: this._bio.textContent,
      id: this._id,
      avatar: this._avatar.src
    }
    return info
  }

  setUserInfo(newName, newBio, popup) {
    this._api.editInfoUser(newName, newBio)
      .then(res => {
        this._name.textContent = newName;
        this._bio.textContent = newBio;
        popup.close();

      })
      .catch(err => {
        console.log("Невозможно установить новые данные пользователя Ошибка: " + err)
      })
  }

  setUserAvatar(avatar) {
    this._avatar.style.backgroundImage = `url("${avatar}")`;
  }

}

export { UserInfo }