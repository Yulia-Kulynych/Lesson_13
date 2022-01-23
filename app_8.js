let button = document.getElementById('hider')

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
//1 и 2 в removeEventListener передается уже другая функция, потому не может быть удалена
