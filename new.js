let URL = "https://cat-fact.herokuapp.com/facts";

let petInfo = async ()=>{
   let Response = await fetch(URL);
   setTimeout(() => {
   }, 5000);
    console.log(Response);
    
    let finalData = await Response.json();
    setTimeout(() => {
    console.log(finalData[3])
}, 5000);
}
petInfo()

function select(){
   let selectedValue = document.getElementById("select").value;

    if(finalData.length > 0){
        let fact = finalData[selectedValue].text;
    document.getElementById("result").innerHTML = "You Selected" + fact;
}else{
    document.getElementById("result").innerHTML = "Loading facts...";
}
}