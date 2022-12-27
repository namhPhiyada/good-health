// alert('hello')
const formMedicine = document.querySelector('.form-horizontal');
const firstnameInput = document.querySelector('.firstname-input');
const lastnameInput = document.querySelector('.lastname-input');
const ageInput = document.querySelector('.age-input');
const weightInput = document.querySelector('.weight-input');
const highInput = document.querySelector('.high-input');
const sexInput = document.querySelector('.sex-input');
const emailInput = document.querySelector('.email-input');
const phoneInput = document.querySelector('.phone-input');
const adressInput = document.querySelector('.adress-input');
const cityInput = document.querySelector('.city-input');
const stateInput = document.querySelector('.state-input');
const sickInput = document.querySelector('.sick-input');

 function medicinedeliver(event){
    event.preventDefault();

    const user = {
        firstname: firstnameInput.value,
        lastname: lastnameInput.value,
        age: ageInput.value,
        weight: weightInput.value,
        high: highInput.value,
        sex: sexInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: adressInput.value,
        city: cityInput.value,
        state: stateInput.value,
        sick: sickInput.value
        
    }

    fetch('localhost:3000/medicine',{
        method: 'POST',
        headers:{
            'Content-Type':'applicatioj/json;charset=utf-8'
        },
        body: JSON.stringify(user)

    })
        .then((response)=>{
            return response.json();
        })
         .then((json)=>{
            alert('ส่งข้อมูลเรียบร้อย')
         })
         .catch((error)=>{
            console.log(error.message);
         })
 }

 formMedicine.addEventListener('submit', medicinedeliver);