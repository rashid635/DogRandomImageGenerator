let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

//let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//   let fact= await getfact(); 
//  let  p = document.querySelector('#para')
//  p.innerText = fact;
//  console.log(fact);
  
     
// })

// async function getfact(){
//   try{
//     let res = await axios.get(url);
//     return res.data.fact;
//   }
//   catch(e)
//   {
//     return "Error : ";
//   }

// }
// Dog Random image Generator


async function getfact(){
    try{
      let res = await axios.get(url2);
      return res.data.message;
    }
    catch(e)
    {
      return "Error : ";
    }
  
  }
  let btn = document.querySelector("button");

   btn.addEventListener("click",async ()=>{
    let link = await getfact();
  let photo = document.querySelector("#result");
  photo.setAttribute("src", link);
  console.log(link);
       
  });
