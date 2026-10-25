let btn=document.querySelector("button");

btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText=fact;
    let link=await getimg();
    //console.log(link);
    let img=document.querySelector("#show");
    img.setAttribute("src",link);

})

let url="https://catfact.ninja/fact"; 

let url2="https://api.thecatapi.com/v1/images/search?utm_source=chatgpt.com";

async function getFacts() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch (e){
        console.log("error - ",e);
        return "No fact found"
    }
}

async function getimg() {
    try{
        let res2=await axios.get(url2);
        return res2.data[0].url;
    }catch(e){
        console.log("Error -",e);
        return "No image found";
    }
}