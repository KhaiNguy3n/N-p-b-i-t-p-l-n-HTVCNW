$(document).ready(function () {
  var i = 1;
  $("#myBtn").click(function () {
    $("#myModal").modal();
  });


  function kiemTraHT() {
    var re =/([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,}$)/;
    if ($("#txtHT").val() == "") {
      $("#tbHT").html("* Bắt buộc nhập");
      return false;
    }
    if (!re.test($("#txtHT").val())) {
      $("#tbHT").html("* Mỗi kí tự đầu viết hoa không sử dụng số");
      return false;
    }
    $("#tbHT").html("*");
    return true;
  }
  $("#txtHT").blur(kiemTraHT);


  function kiemTraDiaChi() {
    if ($("#txtDiaChi").val() == "") {
      $("#tbDiaChi").html("* Bắt buộc nhập");
      return false;
    }
        $("#tbDiaChi").html("*"); 
        return true;
  }
  $("#txtDiaChi").blur(kiemTraDiaChi);


  function kiemTraDT(){
    if($("#txtDT").val() == ""){
      $("#tbDT").html("* Bắt buộc nhập");
      return false;
    }
    var re =/((09|03|07|08|05)+([0-9]{8})\b)/;
    if (!re.test($("#txtDT").val())) {
      $("#tbDT").html("* Số điện thoại của bạn không đúng");
      return false;
    }
    $("#tbDT").html("*");
    return true;
  }
  $("#txtDT").blur(kiemTraDT);


  $("#btnSave").click(function () {
    if (
      !kiemTraHT()||
      !kiemTraDiaChi()||
      !kiemTraDT() 
    ) {
      $("#thongbao").html("Xin vui lòng nhập đúng và đầy đủ thông tin")
      return false;
    }
    var hoten= $("#txtHT").val();
    var diachi= $("#txtDiemDen").val();
    var dienthoai= $("#txtDT").val();
    var them = "<tr><td>" + (i++) + "</td><td>" + hoten + "</td><td>" + diachi + "</td><td>" + dienthoai + "</td></tr>"
    $("table tbody").append(them);
    $("#myModal").modal("hide");
    return true;
  });
});

