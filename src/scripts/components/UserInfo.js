class UserInfo {
  constructor(nameSelector, bioSelector, avatar, api) {
    this._name = document.querySelector(nameSelector);
    this._bio = document.querySelector(bioSelector);
    this._avatar = document.querySelector(avatar);
    this._api = api
  }

  getUserInfo() {
    this._api.getInfoUser()
      .then(data => {
        this._name.textContent = data.name;
        this._bio.textContent = data.about;
        this._avatar.src = data.avatar;
        this._id = data._id
      })

    const info = {
      name: this._name.textContent,
      bio: this._bio.textContent,
      id: this._id,
      avatar: this._avatar.src
    }
    return info
  }

  setUserInfo(newName, newBio) {
    this._api.editInfoUser(newName, newBio)

    this._name.textContent = newName;
    this._bio.textContent = newBio;
  }

  setUserAvatar(avatar) {
    this._avatar.src = avatar;
  }

}

export { UserInfo }