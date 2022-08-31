let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  //document.getElementById("count-el").innerText = count;
  countEl.innerText = count;
}

console.log(count);

function save() {
  document.getElementById("entries").innerText = count;
}
