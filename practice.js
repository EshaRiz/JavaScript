let URL = "https://cat-fact.herokuapp.com/facts";

let catFacts = async ()=>{
    let Response = await fetch(URL);
    setTimeout(() => {
        console.log(Response);
    }, 4000);

    let finalresponse = await Response.json();
    document.write("Loading Facts......");
    setTimeout(() => {
        document.write("<br> Fact no 1 is : " + finalresponse[0].text);
    }, 4000);
    setTimeout(() => {
        document.write("<br> Fact no 2 is : " + finalresponse[1].text);
    }, 5000);
    setTimeout(() => {
        document.write("<br> Fact no 3 is : " + finalresponse[2].text);
    }, 6000);
    setTimeout(() => {
        document.write("<br> Fact no 4 is : " + finalresponse[3].text);
    }, 7000);
    setTimeout(() => {
        document.write("<br> Fact no 5 is : " + finalresponse[4].text);
    }, 8000);
    

}

catFacts();