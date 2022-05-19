
let button=document.querySelector('#btn');
let ip=document.getElementById('ip');
let loc=document.getElementById('location');
let geo=document.getElementById('geo');
let timezone=document.getElementById('timezone');
let version=document.getElementById('version');
button.addEventListener('click', ()=>{
    fetch('http://ip-api.com/json/')
    .then((response) =>{return response.json()})
    .then((data)=>{
       // console.log(data);
      // alert(`Your IP Address is: ${data.query}`)
       ip.innerHTML=`Your IP Address is: ${data.query}`;
       version.innerHTML=`IP version is: IPV4`;
       loc.innerHTML=`Your location is: ${data.city} ${data.regionName}, ${data.country}`;
         geo.innerHTML=`Your Geo location is: ${data.lat}  ${data.lon}`;
         timezone.innerHTML=`Your time zone is: ${data.timezone}`;
    })
})
