
var infoDiv = document.getElementById('info');

let map = L.map('map').setView([25.034189838257852, 121.56451743512416], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.033964, 121.564468]).addTo(map)
                .bindPopup('這裡是台北 101!');
                //.openPopup();

var marker2 = L.marker([25.02628220891764, 121.52756985187678]).addTo(map)
                .bindPopup('這裡是師大!');
                //.openPopup();

var marker3 = L.marker([25.08365587103092, 121.55747698890538]).addTo(map)
                .bindPopup('這裡是美麗華!');
                //.openPopup();


marker.on('click', function () {
    console.log("Click 1");
    infoDiv.textContent = "101介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.033964, 121.564468]); // 平移到台北 101
});

marker2.on('click', function () {
    console.log("Click 2");
    infoDiv.textContent = "師大介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.02628220891764, 121.52756985187678]); // 平移到台北 101
});

marker3.on('click', function () {
    console.log("Click 3");
    infoDiv.textContent = "美麗華介紹";
    //infoDiv.textContent = '你點擊了: 台北 101 ';
    map.panTo([25.08365587103092, 121.55747698890538]); // 平移到台北 101
});

function goPage(){
    window.location.href = "https://mira-ar.n010.app/show/XGJFpE";
}

//25.02628220891764, 121.52756985187678