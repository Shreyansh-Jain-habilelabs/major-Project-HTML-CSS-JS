let fillData = () => {
  let arr = JSON.parse(localStorage.getItem("showDetails"));
  for (let i = 0; i < arr.length; i++) {
    document.getElementsByClassName("showCardContainer")[document.getElementsByClassName("showCardContainer").length-1].innerHTML +=
      '<div class="card" style="width: 18rem"><img src="" alt="" /><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text"></p><ul class="list-group list-group-flush"><li class="list-group-item">Date: </li><li class="list-group-item">Time: </li><li class="list-group-item">Price: </li></ul><a href="/html/bookMyShow.html" class="btn btn-primary">Book Now</a></div></div>';
    document.getElementsByClassName("card-title")[document.getElementsByClassName("card-title").length-1].innerHTML = arr[i].name;
    document.getElementsByClassName("card-text")[document.getElementsByClassName("card-text").length-1].innerHTML = arr[i].showDiscription;
    document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-3].innerHTML += arr[i].date;
    document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-2].innerHTML += arr[i].time;
    document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-1].innerHTML += arr[i].price;
    document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].setAttribute("src",arr[i].showImage);
  }
};
// setAttribute("src",arr[1].showImage)
fillData();

