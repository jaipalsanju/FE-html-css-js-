console.log('Hello!');
let employees = [
    {
        name : 'Aravind',
        organization : 'Lyka',
        empid : '11244',
        phoneNumber : 7250819791,
        address:'Bangalore'
       },
       {
          name : 'Sanju',
          organization : 'Google',
          empid : '05811',
          phoneNumber : 9876543209,
          address:'Mumbai'
        },
        {
          name : 'Gautham',
          organization : 'MRF',
          empid : '54324',
          phoneNumber : 9495969495,
          address:'Kolkata'
        },
        {
          name : 'Preetham',
          organization : 'Puma',
          empid : '98333',
          phoneNumber : 8499900083,
          address:'Hyderabad'
        },
        {
            name : 'Nanda',
            organization : 'Nike',
            empid : '55555',
            phoneNumber : 7866655944,
            address:'Goa'
          },
          {
            name : 'kane',
            organization : 'Netflix',
            empid : '00112',
            phoneNumber : 7250819791,
            address:'Bangalore'
          },
          {
            name : 'Saahu',
            organization : 'Whatsapp.co',
            empid : '54321',
            phoneNumber : 7250819791,
            address:'Nagpur'
          },
]
let display=true;
function showemployesfun(){
let container=document.getElementById("container");

let div2=``;
employees.forEach((ele,index)=>{
  div2=div2+`<div id="${index}">
  <p>name : ${ele['name']}</p>
  <p>organization : ${ele['organization']}</p>
  <p>phoneNumber : ${ele['phoneNumber']}</p>
  <p>empid : ${ele['empid']}</p>
  <p>address : ${ele['address']}</p>
  <button id="${index}" onclick="Confirmation(${ele['empid']})">Delete</button>

  </div>
  `
})


container.innerHTML = div2;
display=!display
if(display){
  container.style.display='none';

}else{
  container.style.display='flex';

}
}


function Confirmation(x){
    
    let condiv=`<div id="confirmpopup"><p>Sure Are You Want To Delete It?</p><button onclick="Deleting(${x})">Yes,Delete</button><button id="nobtn" onclick="cancelling()">No,Cancel</button> </div>`

    container.innerHTML=condiv;

}

function Deleting(empid){
    let divindex=employees.findIndex((element)=>element['empid']==empid);

    employees.splice(divindex,1);
    showemployesfun();

}

function cancelling(){
    showemployesfun();
}




