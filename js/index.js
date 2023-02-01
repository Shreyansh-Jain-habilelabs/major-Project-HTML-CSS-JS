
let arr = JSON.parse(localStorage.getItem("showDetails"));
for (let i = 0; i < arr.length; i++) {
  document.getElementsByClassName("showCardContainer")[document.getElementsByClassName("showCardContainer").length-1].innerHTML +=
    '<div class="card" style="width: 18rem"><img src="" alt="" /><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text"></p><ul class="list-group list-group-flush"><li class="list-group-item"></li><li class="list-group-item"></li><li class="list-group-item"></li></ul><button onclick="bookMyShow(this)" class="btn btn-primary">Book Now</button></div></div>';
  document.getElementsByClassName("card-title")[document.getElementsByClassName("card-title").length-1].innerHTML = arr[i].name;
  document.getElementsByClassName("card-text")[document.getElementsByClassName("card-text").length-1].innerHTML = arr[i].showDiscription;
  document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-3].innerHTML += arr[i].date;
  document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-2].innerHTML += arr[i].time;
  document.getElementsByClassName("list-group-item")[document.getElementsByClassName("list-group-item").length-1].innerHTML += arr[i].price +"&#8377";
  document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1].setAttribute("src",arr[i].showImage);
  console.log(document.getElementsByTagName("img")[document.getElementsByTagName("img").length-1]);
}

bookMyShow = (e)=>{
  const keys = ["showName", "description", "date", "time", "price"];
  const bookedShowDetails = {};
  for (let i = 0; i < (e.parentNode.childNodes).length-1; i++) {
    if(e.parentNode.childNodes[i] == "[object HTMLUListElement]"){
      for (let j = 0; j < (e.parentNode.childNodes[i].childNodes).length; j++) {
        bookedShowDetails[keys[i+j]] = e.parentNode.childNodes[i].childNodes[j].innerHTML;
      }
      continue;
    }
    bookedShowDetails[keys[i]] = e.parentNode.childNodes[i].innerHTML;
  }
  localStorage.setItem("bookedShowDetails",JSON.stringify(bookedShowDetails));
  location.assign("/html/bookMyShow.html");
};