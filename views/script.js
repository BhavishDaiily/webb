//const { response } = require("express")

const fpin=document.getElementById('fpin')
const tpin=document.getElementById('tpin')
const submitForm=document.getElementById('submitForm')

const service=document.getElementById('service')

submitForm.addEventListener("click",transportSubmit)



// window.addEventListener("DOMContentLoaded",async()=>{
//     const data=await axios.get("http://localhost:4000/details")
//     console.log(data)
// })

async function transportSubmit(){
  service.innerHTML=""  
  const obj={
        fpin:fpin.value,
        tpin:tpin.value
    }
    const data=await axios.post("http://localhost:4000/user",obj)
    const value=data.data.data;
    const values=data.data.result;
   //console.log(value.data[0].XPRESSBEES_TAT);
   //console.log(value.data[0])
   //if( value.service!=="No"){
   // console.log(data.data.XPRESSBEES_TAT);
    
  //for(i=0;i<value.data.length;i++){
    //console.log(data);
    let childs= `<table>
    <tr>
    <th>  </th>
    <th>XPRESSBEES</th>
    <th>DHL  </th>
    <th>BLUEDART</th>
    <th>GATI  </th>
    <th>DPWORLD </th></tr>

    <tr>
    <tr><td>TYPE OF SERVICE</td><td>${values.XPRESSBEES_SERVICE}</td>
    <td>${values.DHL_SERVICE}</td>
    <td>${values.BLUEDART_SERVICE}</td>
    <td>${values.GATI_SERVICE}</td>
    <td>${values.DPWORLD_SERVICE}</td></tr>
    
    <tr><td>TAT</td><td>${value.XPRESSBEES_TAT}</td>
    <td>${value.DHL_TAT}</td>
    <td>${value.BLUEDART_TAT}</td>
    <td>${value.GATI_TAT}</td>
    <td>${value.DPWORLD_TAT}</td></tr>
    <tr><td>TOTAL COST</td></tr>
    <tr><td>FINAL WEIGHT</td>
   </tr>

   
    </table>`
  
    //console.log()
    service.innerHTML+=childs
    //service.innerHTML+=child
    //service.innerHTML+=childd
    
   
  // }
   
}
//}

//var countre=1;
function add_more_field(){
  //countre+=1
  html='<pre><label for="L"> Length  :</label><input  type="number" id="L" name="L"><label for="B"> Width  :</label><input  type="number" id="B" name="B"><label for="H"> Height  :</label><input  type="number" id="H" name="H"><label for="NOB"> No of Box  :</label><input  type="number" id="NOB" name="NOB">&nbsp;&nbsp;</pre>'
var form=document.getElementById('add_button')
form.innerHTML+=html
}
