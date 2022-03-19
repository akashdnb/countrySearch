const search = document.querySelector(".search");
const sInput= search.querySelector("#searchBox");
const sBtn = search.querySelector("#searchBtn");
const countryList= 
       document.querySelector(".countryList");
const linkTag=search.querySelector("a");
       

sInput.onkeyup=(e)=>{
  countryList.innerHTML="";
  let userData= e.target.value;
  let farr=[];
  
  if(userData){
    farr= suggestions.filter((data)=>{
     return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    farr= farr.map((data)=>{
      let l= sInput.value.length;
      let s1=data.substring(0,l);
     let s2=data.substring(l,data.length);
     data=`<li><b>${s1}</b>${s2}</li>`;
     return data;
    });
    showSuggestions(farr);
    let allList = countryList.querySelectorAll("li");

for (let i = 0; i < allList.length; i++) {
allList[i].setAttribute("onclick", "select(this)");
countryList.classList.remove("active");
}
  
} else{
    countryList.classList.remove("active");
      }
}

function BtnClick(){
    countyrList.innerHTML="";
  var selectData = sInput.value;
  if(selectData){
let webLink = `https://www.google.com/search?q=${selectData}`;
linkTag.setAttribute("href", webLink);
linkTag.click();
  }
  else{
    alert("Choose any country!!");
  }
 }
 
 function showSuggestions(list){
  let listData;

if(!list.length){
userValue = sInput.value;
 listData = `<li>${userValue}</li>`;

}else{
listData = list.join('');
}
countryList.innerHTML = listData;
    }


function select(element){
  let selectData = element.textContent;
  sInput.value = selectData;
  countryList.innerHTML="";
  /*
  sBtn.onclick = ()=>{
webLink = `https://www.google.com/search?q=${selectData}`;
linkTag.setAttribute("href", webLink);
linkTag.click();
  }  */
}
sInput.addEventListener("search",function(){
  countryList.innerHTML="";
});
