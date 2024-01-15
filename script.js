let counter = 0;
function increment() {
counter++;
updatecount();
}
function decrement() {
counter--;
updatecount();
}
function reset() {
counter=0;
updatecount();
}
function updatecount() {
document.getElementById("updatecount").innerHTML = counter;
}               