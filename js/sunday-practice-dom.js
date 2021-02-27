import cars from "./data.js";

const cartListRef = document.createElement("ul");
const modalRef = document.querySelector(".modal");
const modalImgRef = document.querySelector(".modal-img");
const formRef = document.querySelector(".form");
const inputRef = document.querySelector(".todo");
const todoListRef = document.querySelector(".todo-list");
const filterRef = document.querySelector(".filter");

document.body.prepend(cartListRef);

const carMarkup = cars.reduce((acc, { name, url, id, description }) => {
  return (
    acc +
    `<li id="${id}"><p>${name}</p><img src="${url}" alt="${description}" width="320"/></li>`
  );
}, "");

cartListRef.insertAdjacentHTML("beforeend", carMarkup);

cartListRef.addEventListener("click", ({ target }) => {
  if (target.localName === "img") {
    modalRef.style.display = "block";
    modalImgRef.src = target.src;
  }
});

modalRef.addEventListener("click", (e) => {
  if (e.target.localName !== "img") {
    modalRef.style.display = "none";
  }

  // if (e.currentTarget === e.target) {
  //   modalRef.style.display = "none";
  // }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    modalRef.style.display = "none";
  }
});

const todoList = [];

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  todoList.push(inputRef.value);
  const todoListMarkUp = todoList.reduce((acc, el) => {
    return acc + `<li><p>${el}</p></li>`;
  }, "");
  todoListRef.innerHTML = "";
  todoListRef.insertAdjacentHTML("beforeend", todoListMarkUp);
  inputRef.value = "";
});

filterRef.addEventListener("input", (event) => {
  const filteredItem = todoList.filter((elem) =>
    elem.includes(event.currentTarget.value)
  );
  if (filteredItem.length > 0) {
    const filterListMarkUp = filteredItem.reduce((acc, el) => {
      return acc + `<li><p>${el}</p></li>`;
    }, "");
    todoListRef.innerHTML = "";
    todoListRef.insertAdjacentHTML("beforeend", filterListMarkUp);
  }
});
