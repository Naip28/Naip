document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("click");

  btn.addEventListener("click", function () {
    console.log("clicked");
    if (document.body.style.backgroundColor == '#FFEBCD'){
      console.log("апа");
      document.body.backgroundColor = "#63605a";
      document.body.color = "#191970";
    } else {
      console.log("авапвапрпа");
      document.body.style.backgroundColor  = "#FFEBCD";
      document.body.color = "#e3e1dc";
    }
  });
});
