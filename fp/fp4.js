function initMap() {
  // 地図の中心を決める
  var latlng = new google.maps.LatLng(34.745921,135.356663);

  // 地図を表示するためのオプションを設定する
  var opt = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // 地図を表示する。
  var map = new google.maps.Map(document.getElementById('map'), opt);

  var marker = new google.maps.Marker({
                     position: latlng,
                     map: map
        });
}
