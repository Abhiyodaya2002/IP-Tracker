
let button=document.querySelector('#btn');
let ip=document.getElementById('ip');
let loc=document.getElementById('location');
let geo=document.getElementById('geo');
let timezone=document.getElementById('timezone');
let version=document.getElementById('version');
button.addEventListener('click', ()=>{
    fetch('https://ipapi.co/json')
    .then((response) =>{return response.json()})
    .then((data)=>{
       // console.log(data);
      // alert(`Your IP Address is: ${data.query}`)
       ip.innerHTML=`Your IP Address is: ${data.ip}`;
       version.innerHTML=`IP version is: ${data.version}`;
       loc.innerHTML=`Your location is: ${data.city} ${data.region}, ${data.country_name}`;
         geo.innerHTML=`Your Geo location is: ${data.latitude}  ${data.longitude}`;
         timezone.innerHTML=`Your time zone is: ${data.timezone}`;
    })
})
