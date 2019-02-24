$(document).ready(function(data){
  $.getJSON("http://localhost:3077/getvehicledata", function(data){
    var vehicledata = '';
    $.each(data,function(key,value){
      vehicledata  +='<tr>';
      vehicledata += '<td>'+value._id+'</td>';
      vehicledata += '<td>'+value.Vehicle_Id+'</td>';
      vehicledata += '<td>'+value.Vehicle_Type+'</td>';
      vehicledata += '<td>'+value.percentCO+'</td>';
      vehicledata += '<td>'+value.Status+'</td>';
      vehicledata += '</tr>';
    });
    $("td").css({"background-color": "yellow", "font-size": "200%"});
    $('#pollutionbody').append(vehicledata);
  });
});
