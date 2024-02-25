document.addEventListener("DOMContentLoaded", function () {
  document.body.style.background == "#FFEBCD";

  const btn = document.getElementById("click");
  btn.addEventListener("click", function () {
    console.log("clicked");
    console.log(document.body.style.backgroundColor);
    if (document.body.style.background == "#FFEBCD"){
      console.log("апа");
      document.body.style.background = "#5c5c5c";
      document.body.color = "#191970";
    } else {
      console.log("авапвапрпа");
      document.body.style.background = "#FFEBCD";
      document.body.color = "#e3e1dc";
    }
  });
});
