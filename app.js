window.addEventListener('load', () => {
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `...${lat},${long}`; // check the api first
        });
        fetch(api).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        })
    }
    
});