import AddTicket from './AddTicket';
import BindToDom from "./BindToDom";

const container = document.querySelector('.container');
const bindToDom = new BindToDom(container)

const addTicket = new AddTicket();

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()

  bindToDom.bindToDOM()
  addTicket.init()
})


