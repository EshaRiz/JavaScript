const URL = "https://dummyjson.com/users";

let userData = async ()=>{
    let data = await fetch(URL);
    setTimeout(() => {
        console.log(data);
    }, 2000);

    let finalData = await data.json();
    // document.write("Waiting for Response........");
    document.getElementById("loading").innerHTML = "Waiting for Response........" ; 
    setTimeout(() => {
        document.write("<br>" + finalData.users[0].phone)
    }, 5000);
}

userData();