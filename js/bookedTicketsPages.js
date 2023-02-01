// let mountains = JSON.parse(localStorage.getItem(Object.keys));

let arr = Object.keys(localStorage);
arr.map((values) => {
  if (values != "showDetails" && values != "bookedShowDetails") {
    if (localStorage.getItem(values)) {
      $(".tableContainer")[$(".tableContainer").length-1].innerHTML += '<div class="mx-auto my-3" style="width: 90%;"><h1 style="text-align: center;text-transform: uppercase;"></h1><table class="table table-striped table-hover"></table></div>';
      $("h1")[$("h1").length-1].innerText = values;
      let table = $("table")[$("table").length-1];
      let data = JSON.parse(localStorage.getItem(values));
      generateTableHead(table,Object.keys(data[0]));
      generateTable(table,data);
    }
  }
});

function generateTableHead(table, data) {
  let thead = table.createTBody();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}