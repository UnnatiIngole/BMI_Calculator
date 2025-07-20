const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const heights = document.querySelector("#height").value;
  const weights = document.querySelector("#weight").value;
  const results = document.querySelector("#result");
  const guides = document.querySelector("#guide");
  const bmi = (weights*10000) / (heights * heights);
  if (heights === " " || heights < 0 || isNaN(heights)) {
    results.innerHTML = "Please give a valid height";
  } else if (weights === " " || weights < 0 || isNaN(weights)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    results.innerHTML = `Your BMI value is:${bmi}`;
  }
  if(bmi<18.6){
    guides.innerHTML="UnderWeight";
  }
  else if(bmi>18.6&&bmi<24.9){
    guides.innerHTML="NormalWeight";
  }
  else{
    guides.innerHTML="NormalWeight";
  }
});



     








