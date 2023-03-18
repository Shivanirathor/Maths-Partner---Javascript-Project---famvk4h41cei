
function savedbtn(){
    console.log("working save btn")
    var wet =  document.querySelector(".inputBox1").innerHTML;
    var set =  document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(wet,set);
    console.log(localStorage.getItem(set));
    set++;
}

var hcount = 0 
function historybtn(){
    console.log("working history btn")
    hcount++;
    if(hcount%2==1){
        document.querySelector(".historycon").style.display = "block";
        var data = document.querySelector('.historycon');

        for (p in localStorage) {
            var ans = localStorage.getItem(p);
            if (ans != null) {
                // console.log(ans);
                var h3 = document.createElement("h3");
                h3.setAttribute('class', 'remove')

                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3);
                data.appendChild(h3);

            }
        }
    }else{
        document.querySelector(".historycon").style.display = "none";
        var rem = document.querySelectorAll('.remove');
        console.log(rem);
        for (var i = 0; i < rem.length; i++) {
            rem[i].remove();
        }
    }
}

function searchBtn(){
    event.preventDefault();

    console.log("working search btn")
   var problem = document.getElementById('problemBar').value;
   var category = document.getElementById('categoryBar').value;

   let pro = fetch(`https://newton.vercel.app/api/v2/${category}/${problem}`)
   console.log(pro)
   pro.then((reponse) => {
    console.log(reponse.status)
    console.log(reponse.ok)
    return reponse.json()
   }).then((value) => {
    console.log(value);
    var input2 =  value.result;
    document.querySelector(".inputBox2").innerHTML = input2;
   })
   

   const Input1  = document.querySelector(".inputBox1").innerHTML = category+" :"+problem;
   var set =  document.querySelector(".inputBox1").value;
   var wet =  document.querySelector(".inputBox2").innerHTML;
   localStorage.setItem(set,wet);
}


function deleteBtn(ele){
    console.log("working delete btn")
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
}
