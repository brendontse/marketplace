$(document).ready(function() {
  $("#order").submit(function(event) {
    var customerName = $('#customerName').val();
    var customerStreet = $('#customerStreet').val();
    var customerCity = $('#customerCity').val();
    var customerState = $('#customerState').val();
    var customerZip = $('#customerZip').val();

    $("input:checkbox[name=item]:checked").each(function(){
      var items = $(this).val();
      $('#itemReceipt').append(items + "<br>");
    });


    $('.customerName').text(customerName);
    $('.customerStreet').text(customerStreet);
    $('.customerCity').text(customerCity);
    $('.customerState').text(customerState);
    $('.customerZip').text(customerZip);
    // console.log(customerName);
    // console.log(customerStreet);
    // console.log(customerCity);
    // console.log(customerState);
    // console.log(customerZip);

    $('#shippingReceipt').show();
    event.preventDefault();

  });
});
