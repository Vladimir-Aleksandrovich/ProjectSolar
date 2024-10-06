  // test

  const usd = document.querySelector(".usd"),
  rub = document.querySelector(".rub"),
  testDiv = document.querySelector(".test-div");
testDiv.style.display = "flex";   
testDiv.style.flexDirection = "column";      

testDiv.style.width = "100%";
testDiv.style.height = "40px";
rub.style.fontSize = "20px";
usd.style.fontSize = "20px";
rub.style.width = "150px";
usd.style.width = "150px";
rub.value = "30";

rub.addEventListener("input", () => {

    // fetch

fetch("js/BD.json", {
method: "GET",
headers: {
  "Content-type": "application/json" 
}
}).then(response => response.json())
.then(json => {
  let data = json.current.usd
  usd.value = +rub.value * data
})


   // XMLLHttp

//  req = new XMLHttpRequest();

//  req.open("GET", "js/BD.json");

//  req.setRequestHeader("Content-type", "application/json; charset=utf-8");

//  req.send();

//  req.addEventListener("load", () => {
//    if (req.status == 200 & req.readyState == 4) {
//      let data = JSON.parse(req.response)
//      usd.value = +rub.value * JSON.parse(data.current.usd);
//    } else if (req.status == 404) {
//     console.log('error')
//    }
})