bookMyShow = (e, values) => {
  e.preventDefault();

  let bookingShowName = JSON.parse(localStorage.getItem("bookedShowDetails"));

  const userDetails = {};

  for (let i = 0; i < values.length - 1; i++) {
    userDetails[values[i].id] = values[i].value;
  }
  userDetails["date"] =  bookingShowName.date;
  userDetails["time"] = bookingShowName.time;
  // ----------------------------- Validation -----------------------------
  if (
    "name" in userDetails &&
    "email" in userDetails &&
    "phoneNumber" in userDetails
  ) {
    if (
      validateName(userDetails.name) &&
      validateEmail(userDetails.email) &&
      validatePhone(userDetails.phoneNumber)
    ) {
      // ----------------------------- Data adding in local storage -----------------------------
      let dataInLocalStorage = localStorage.getItem(bookingShowName.showName);
      dataInLocalStorage = dataInLocalStorage ? JSON.parse(dataInLocalStorage) : [];
      dataInLocalStorage.push(userDetails);
      localStorage.setItem(bookingShowName.showName, JSON.stringify(dataInLocalStorage));
      location.assign("/index.html");
    }
  } else {
    alert("No field can be empty!");
  }
};

// ----------------------------- Email Validation -----------------------------
validateEmail = (emailEntered) => {
  let validRegex = /([A-Za-z0-9]\w+)([@])([a-z]\w+)(\.[a-z]{3})/;

  if (!emailEntered.match(validRegex)) {
    alert("Invalid email address!");
    return false;
  }
  return true;
};

// ----------------------------- Name Validation -----------------------------
validateName = (nameEntered) => {
  let validRegex = /([A-Za-z]\w+) ([A-Za-z]\w+)/;

  if (!nameEntered.match(validRegex)) {
    alert("Invalid Name!");
    return false;
  }
  return true;
};

// ----------------------------- Phone Validation -----------------------------
validatePhone = (phoneEntered) => {
  let validRegex = /[0-9]{10}/;

  if (!phoneEntered.match(validRegex)) {
    alert("Invalid Phone Number!");
    return false;
  }
  return true;
};