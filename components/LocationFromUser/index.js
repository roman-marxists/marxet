const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const success = (pos) => {
  const crd = pos.coords;
  console.log("latitude is :", crd.latitude);
  console.log("longitude is :", crd.longitude);
  console.log("more or less is :", crd.accuracy);
};

const errors = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const getGeolocation = () => {
  if (navigator.geolocation) {
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "granted") {
        console.log(result.state);
        // call the get currentlocation function
        navigator.geolocation.getCurrentPosition(success);
      } else if (result.state === "prompt") {
        navigator.geolocation.getCurrentPosition(success, errors, options);
      } else if (result.state === "denied") {
        console.log(result.state);
        // add directions here to turn on their location
      }
      result.onChange = function () {
        console.log(result.state);
      };
    });
  } else {
    alert("sorry not available");
  }
};

module.exports = { getGeolocation };
