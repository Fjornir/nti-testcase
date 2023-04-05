function triggerSubmitButtonClick() {
    document.querySelector(".form-detail__button").dispatchEvent(new Event("click"));
  }