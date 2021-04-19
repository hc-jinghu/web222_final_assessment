function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let valid = true;
  let lat = document.getElementById("latitude");
  let long = document.getElementById("longitude");
  if(parseFloat(lat) > 90 || parseFloat(lat) < -90) {
    let lat_error = document.getElementById("lat_error");
    lat_error.innerHTML = " must be a valid Latitude (-90 to 90)";
    valid = false;
  }

  if(parseFloat(long) > 180 || parseFloat(long) < -180) {
    let long_error = document.getElementById("long_error");
    long_error.innerHTML = " must be a valid Longitude (-180 to 180)";
    valid = false;
  }

  if(valid) {
    return true;
  } else {
    return false;
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
