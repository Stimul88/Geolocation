export default class BindToDom{
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup () {
    return `
          <form class="form-name hidden" name="form">
    <div class="form-container">
      <label for="name-input" class="name-label"></label>
      <span class="error-title">Что то пошло не так</span>
       <span class="error-message">
       К сожалению, нам не удалось определить ваше 
       местоположение, пожалуйста, дайте разрешение на
        использование геолокации, либо введите координаты
        в ручную.
       </span>
      <span class="geolocation-info">Широта и долгота через запятую (Пример: 51.50851, -0.12572)</span>
      <input  class="geolocation-input" id="name-input" name="name-input"  minlength="4" maxlength="40" size="10"/>
    </div>
    <div class="btn">
      <button class="escape" >Отмена</button>
      <button class="ок" >Ок</button>
    </div>
  </form>
  <div class="container-chat">
    <form class="chat-window">
      <div class="scroll-box"></div>
      <div class="chat-area"></div>
      <div class="user-input">
        <label for="message-input"></label>
        <input type="text" id="message-input" class="message-input" placeholder="">
        <div class="microphone">🎤</div>
        <div class="phone">&#9742;</div>
      </div>
    </form>
  </div>
        `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = BindToDom.markup
  }
}

