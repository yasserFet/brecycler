function checkSize() {
  var input = document.getElementById("fileInput");
  var list = document.getElementById("fileList");
  list.innerHTML = "";
  for (var i = 0; i < input.files.length; i++) {
    var div = document.createElement("div")
    var item1 = document.createElement("p");
    item1.className = "item1"
    item1.textContent = "File " + (i + 1) + ": ";
    div.appendChild(item1);

    var item2 = document.createElement("p");
    item2.textContent = input.files[i].name;
    item2.className = "item2"
    div.appendChild(item2);

    var item3 = document.createElement("p");
    item3.textContent = "(" + (input.files[i].size / 1024).toFixed(2) + " KB)";
    item3.className = "item3"
    div.appendChild(item3);


    div.className="helper"
    list.appendChild(div);
  }
}