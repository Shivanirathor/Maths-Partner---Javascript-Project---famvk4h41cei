var savedResult = [];

function searchBtn() {
  let expression = document.getElementById("problemBar").value;
  let formula = document.getElementById("categoryBar").value;

  let result = fetch(`https://newton.now.sh/api/v2/${formula}/${expression}`);

  result
    .then((valueA) => {
      return valueA.json();
    })
    .then((valueB) => {
      //  console.log(valueB.result);
      savedResult.push(valueB);
      document.querySelector(
        ".inputBox1"
      ).innerHTML = ` So, The Result is ${valueB.result}`;
    });
}

function savedbtn() {
  const outputValue = document.querySelector(".inputBox1").innerHTML;
  // console.log("outputValue", outputValue);
  if (outputValue !== "Output Box...") {
    localStorage.setItem("savedResult", JSON.stringify(savedResult));
    alert("Success: Your solution is saved");
  } else {
    alert("Error: Solution not found!!");
  }
}

var hcount = 0;
function historybtn() {
  hcount++;
  if (hcount % 2 == 1) {
    document.querySelector(".historycon").style.display = "block";
    var data = document.querySelector(".historycon");

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var ans = localStorage.getItem(key);
      if (ans != null) {

        var container = document.createElement("div");
        var h3 = document.createElement("h3");
        var btn = document.createElement("button");
        console.log(btn)
       btn.innerHTML = "delete";
        btn.classList.add("remove");
        btn.addEventListener("click", (event) => {
          event.target.parentElement.remove();
          localStorage.clear();
        });

        h3.setAttribute("class", "remove");
        h3.innerHTML = ans;
        container.append(h3, btn);
        data.appendChild(container);
      }
    }
  } else {
    document.querySelector(".historycon").style.display = "none";
    var rem = document.querySelectorAll(".remove");
    console.log("printing", rem);
    for (var i = 0; i < rem.length; i++) {
      rem[i].remove();
    }
  }
}

function deleteBtn() {
  // console.log("working delete btn");
  document.querySelector(".inputBox1").innerHTML = "";
}
