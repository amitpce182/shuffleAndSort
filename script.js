function shuffle() {
  let list = document.getElementById('cards');
  let len = list.children.length;
  for (let i = len; i >= 0; i--) {
    list.appendChild(list.children[Math.floor(Math.random() * i)]);
  }
}
function sortCards() {
  let container = document.getElementById('cards');
  let list = container.querySelectorAll('div');
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(list[i]);
  }
  newList.sort(function (a, b) {
    let a1 = parseInt(a.innerHTML);
    let b1 = parseInt(b.innerHTML);
    return a1 < b1 ? -1 : (a1 > b1 ? 1 : 0);
  });
  newList.reverse();
  for (let i = 0; i < newList.length; i++) {
    container.insertBefore(newList[i], container.firstChild);
  }
}
