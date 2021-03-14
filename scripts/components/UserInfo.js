class UserInfo {
  constructor(nameSelector, bioSelector) {
    this._name = document.querySelector(nameSelector);
    this._bio = document.querySelector(bioSelector);;
  }

  getUserInfo() {
    const info = {
      name: this._name.textContent,
      bio: this._bio.textContent
    }
    return info
  }

  setUserInfo(newName, newBio) {

    this._name.textContent = newName;
    this._bio.textContent = newBio;
  }
}

export { UserInfo }