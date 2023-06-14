var savedResult = [];

function searchBtn() {
  let expression = document.getElementById("problemBar").value; 
  let formula = document.getElementById("categoryBar").value;
  
  let result = fetch(`https://newton.now.sh/api/v2/${formula}/${expression}`);

  result.then((valueA) => {
    return valueA.json();
  }).then((valueB) => {
    //  console.log(valueB.result);
     savedResult.push(valueB)
     document.querySelector(".inputBox1").innerHTML= ` So, The Result is ${valueB.result}`;
  });
}


function savedbtn() {
//  console.log("savedresult", savedResult);
localStorage.setItem("savedResult" ,JSON.stringify(savedResult)); 
 
}

var hcount = 0;
function historybtn() {
//   localStorage.setItem("Name", "shivani");
//   console.log("working history btn");
  hcount++;
  if (hcount % 2 == 1) {
    document.querySelector(".historycon").style.display = "block";
    var data = document.querySelector(".historycon");

    for (p in localStorage) {
      var ans = localStorage.getItem(p);
      if (ans != null) {
  
        // console.log(ans);
        var h3 = document.createElement("h3");
        h3.setAttribute("class", "remove");
        h3.innerHTML = `${ans}`;
        // <h3 class="remove"> value=> Result = 5 </h3>
        // console.log(h3);
        data.appendChild(h3);
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
