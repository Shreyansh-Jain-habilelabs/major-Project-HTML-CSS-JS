if (JSON.parse(localStorage.getItem("showDetails"))) {
  let arr = JSON.parse(localStorage.getItem("showDetails")); 
  for (let i = 0; i < arr.length; i++) {
    $(".showCardContainer")[$(".showCardContainer").length - 1].innerHTML +=
      '<div class="card" style="width: 18rem"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text"></p><ul class="list-group list-group-flush"><li class="list-group-item"></li><li class="list-group-item"></li><li class="list-group-item"></li></ul><button onclick="bookMyShow(this)" class="btn btn-primary">Book Now</button></div></div>';
    $(".card-title")[$(".card-title").length - 1].innerHTML = arr[i].name;
    $(".card-text")[$(".card-text").length - 1].innerHTML = arr[i].showDiscription;
    $(".list-group-item")[$(".list-group-item").length - 3].innerHTML += arr[i].date;
    $(".list-group-item")[$(".list-group-item").length - 2].innerHTML += arr[i].time;
    $(".list-group-item")[$(".list-group-item").length - 1].innerHTML +=arr[i].price + "&#8377";
    $("img")[$("img").length - 1].setAttribute("src", arr[i].showImage);
  }
}

bookMyShow = (e) => {
  const keys = ["showName", "description", "date", "time", "price"];
  const bookedShowDetails = {};
  for (let i = 0; i < e.parentNode.childNodes.length - 1; i++) {
    if (e.parentNode.childNodes[i] == "[object HTMLUListElement]") {
      for (let j = 0; j < e.parentNode.childNodes[i].childNodes.length; j++) {
        bookedShowDetails[keys[i + j]] = e.parentNode.childNodes[i].childNodes[j].innerHTML;
      }
      continue;
    }
    bookedShowDetails[keys[i]] = e.parentNode.childNodes[i].innerHTML;
  }
  
  localStorage.setItem("bookedShowDetails", JSON.stringify(bookedShowDetails));
  
  location.assign("/html/bookMyShow.html");
};