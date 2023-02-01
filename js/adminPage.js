createShow = (e) => {
  e.preventDefault();

  let showDetails = {};
  const imgData = {};
  for (let i = 0; i < e.target.length - 1; i++) {
    if (e.target[i].value) {
      console.log(`yes = ${e.target[i].value}`);
      showDetails[e.target[i].id] = e.target[i].value;
    }
    // if (e.target[i].type === "file") {
    //   console.log(e.target[i]);
    //   let file = e.target[i].files[0];
    //   let reader = new FileReader();
    //   reader.onloadend = () => {
    //     console.log("RESULT", reader.result);
    //     imgData[e.target[i].id] = reader.result;
    //   };
    //   reader.readAsDataURL(file);
    // }
  }

  if (
    "name" in showDetails &&
    "price" in showDetails &&
    "time" in showDetails &&
    "date" in showDetails &&
    "showDiscription" in showDetails &&
    "showImage" in showDetails
  ) {
    if (
      validateName(showDetails.name) &&
      validatePrice(showDetails.date) &&
      validateDate(showDetails.date) &&
      validateTime(showDetails.time) &&
      validateImage(showDetails.showImage)
    ) {
      if (checkExistingShow(showDetails.time, showDetails.date)) {
        alert("Time already contais a Show !");
        // location.assign("/html/adminPage.html");
      } else {
        // ----------------------------- Data adding in local storage -----------------------------
        let dataInLocalStorage = localStorage.getItem("showDetails");
        dataInLocalStorage = dataInLocalStorage ? JSON.parse(dataInLocalStorage) : [];
        dataInLocalStorage.push(showDetails);
        localStorage.setItem("showDetails", JSON.stringify(dataInLocalStorage));
        alert("Show added Successfully.");
        // location.assign("/index.html");
      }
    }
  } else {
    alert("No field can be empty!");
  }


};

// ----------------------------- Name Validation -----------------------------
validateName = (nameEntered) => {
  let validRegex = /([A-Z a-z])/;

  if (!nameEntered.match(validRegex)) {
    alert("Invalid Show Name!");
    return false;
  }
  return true;
};

// ----------------------------- Price Validation -----------------------------
validatePrice = (priceEntered) => {
  let validRegex = /[0-9]/;

  if (!priceEntered.match(validRegex)) {
    alert("Invalid Price!");
    return false;
  }
  return true;
};

// ----------------------------- Date Validation -----------------------------
validateDate = (dateEntered) => {
  let validRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;

  if (!dateEntered.match(validRegex)) {
    alert("Invalid Date!");
    return false;
  }
  return true;
};

// ----------------------------- Time Validation -----------------------------
validateTime = (timeEntered) => {
  let validRegex = /[0-9]{2}:[0-9]{2}/;

  if (!timeEntered.match(validRegex)) {
    alert("Invalid Time!");
    return false;
  }
  return true;
};

// ----------------------------- Image Validation -----------------------------
validateImage = (imageUploaded) => {
  let extension = imageUploaded.substring(imageUploaded.lastIndexOf(".") + 1).toLowerCase();
  let validRegex = /(jpg)|(jpeg)|(png)/;

  if (!extension.match(validRegex)) {
    alert("Invalid Time!");
    return false;
  }
  return true;
};

// ----------------------------- Discription Validate -----------------------------
// validateDiscription = (showDiscriptionEntered) => {
//   let validRegex = /[A-Za-z ]/;

//   if (!extension.match(validRegex)) {
//     alert("Invalid Time!");
//     return false;
//   }
//   return true;
// };

// ----------------------------- Check Existing Show Validate -----------------------------

checkExistingShow = (timeEntered, dateEntered) => {
  if (localStorage.getItem("showDetails")) {
    let arr = Object.values(JSON.parse(localStorage.getItem("showDetails")));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].time === timeEntered && arr[i].date === dateEntered) {
        return true;
      }
    }
  }
  return false;
};
