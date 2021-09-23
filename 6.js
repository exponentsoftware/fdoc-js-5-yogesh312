import fetch from 'node-fetch';

const response = await fetch("https://restcountries.com/v2/all");
const data = await response.json();
const languages = new Set();
const area =[]



function allLang(data){
    for(let Obj of data){
        if(Obj.languages){
            Object.values(Obj.languages).forEach(e=>languages.add(e))
        }
    }
    var size = languages.size;
    console.log(languages);
}
// allLang(data)

function area10(){
   for(let obj of data ){
       if(obj.area){
           area.push({country: obj.name,Area: obj.area})
       }
      
   } console.log(area)
}
area10()