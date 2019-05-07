// This is a JavaScript file

//FOTO

$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum:true,
    });

    function onSuccess(imageData){
      var image = document.getElementById('imagem');
      image.src = "data:image/jpeg;base64,"+ imageData;
    }
    function onFail(message){
      alert('Failed because: '+message)
    }

});





  //MAPA      

$(document).on("click","#camera",function(){

function mapa(position){

          L.mapquest.key = 'fu7dT8pJ5oUfqnV1cQE0hXgfhytADJef';

          var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
          });

          L.marker([position.coords.latitude, position.coords.longitude], {
              icon: L.mapquest.icons.marker(),
              draggable: false
            }).bindPopup('Denver, CO').addTo(map);

          map.addControl(L.mapquest.control());
        };
        navigator.geolocation.getCurrentPosition(mapa);
});




//LOCALIZAÇÂO
$(document).on("click","#camera",function(){

  var onSuccess = function(position) {
            $ ("#lat").val(position.coords.latitude);
            $ ("#long").val(position.coords.longitude);
        };
});



//VIBRAR
$(document).on("click","#camera",function(){
  navigator.vibrate(400);
});