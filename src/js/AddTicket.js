export default class AddTicket {
  constructor() {
    this.container = document.querySelector('.container');
  }

  init() {
    const chatWindow = this.container.querySelector('.chat-window');
    chatWindow.addEventListener('submit', this.addTickets)
  }

  addTickets (e) {
    e.preventDefault()
    const container = document.querySelector('.container');
    const formName = container.querySelector('.form-name');
    const messageInput = container.querySelector('.message-input');
    const chatArea = container.querySelector('.chat-area');

    if(messageInput.value === '') return;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (data) {

        const { latitude, longitude } = data.coords;

        const newElement = `<div class="message-container">
                      <div class="message-box">
                      <div class="message-mark"></div>
                    <div class="title">
                      <span class="title-text">${messageInput.value}</span>
                    </div>
                    <div class="geo-and-eye">
                      <span class="geo">[${latitude} ${longitude}]</span>
                      <span class="eye">👁</span>
                    </div>
                    <span class="date">${new Date().toLocaleString()}</span>
                    </div>
                    </div>`

        chatArea.insertAdjacentHTML('afterbegin', newElement)

        messageInput.value = ''
        chatArea.scrollTop = chatArea.scrollHeight;

        }, function(error) {
        formName.classList.remove('hidden');

        formName.addEventListener('submit', AddTicket.addGeolocation)

          console.log(error);
        }, { enableHighAccuracy: true}
      )
    }
  }

  static addGeolocation(e) {
    e.preventDefault()
    const container = document.querySelector('.container');
    const chatArea = container.querySelector('.chat-area');
    const messageInput = container.querySelector('.message-input');
    const formName = container.querySelector('.form-name');
    const geolocationInput = container.querySelector('.geolocation-input');

    if(AddTicket.geolocationValidate(geolocationInput.value)) {
      const geoCoordinate = geolocationInput.value.trim().split(' ')

      const newElement = `<div class="message-container">
                      <div class="message-box">
                      <div class="message-mark"></div>
                    <div class="title">
                      <span class="title-text">${messageInput.value}</span>
                    </div>
                    <div class="geo-and-eye">
                      <span class="geo">[${geoCoordinate[0]} ${geoCoordinate[1]}]</span>
                      <span class="eye">👁</span>
                    </div>
                    <span class="date">${new Date().toLocaleString()}</span>
                    </div>
                    </div>`

      chatArea.insertAdjacentHTML('afterbegin', newElement)

      messageInput.value = '';
      geolocationInput.value = '';

      formName.classList.add('hidden');
      chatArea.scrollTop = chatArea.scrollHeight;

      return;
    }

    alert('Неправильно введены данные!')
  }

  static geolocationValidate (geo) {
    console.log(geo)
    const regex = /^\d+\.\d+,\s-\d+\.\d+\d$/gm;

    return regex.test(geo);
  }
}
