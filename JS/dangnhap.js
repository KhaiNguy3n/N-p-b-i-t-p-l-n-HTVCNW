$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function () {
      $("#myModal").modal();
    });
function kiemTRaDN(){
    var re = /^[a-z]\w*/;
    if ($("#txtDN").val() == "") {
        $("#tbDN").html("* Bắt buộc nhập");
        return false;
      }
    if (!re.test($("#txtDN").val())) {
        $("#tbDN").html("* Bắt buộc, bắt đầu bằng ký tự chữ");
        return false;
      }
      $("#tbDN").html("*");
      return true;
}
    $("#txtDN").blur(kiemTRaDN);

    function kiemTraPW(){
        var re = /(?=.*\d).{6,}/;
       if($("#txtP").val() == "") {
            $("#tbP").html("* Bắt buộc nhập");
            return false;
          }
        if (!re.test($("#txtP").val())) {
            $("#tbP").html("* Phải có ít nhất 6 kí tự");
            return false;
          }
          $("#tbP").html("*");
          return true;
    }
    $("#txtP").blur(kiemTraPW);

    $("#btnSave").click(function () {
        if (!kiemTRaDN()||!kiemTraPW()) {
          $("#thongbao").html("Xin vui lòng nhập đúng và đầy đủ thông tin")
          return false;
        }
        var dn= $("#txtDN").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + dn  +"</td></tr>"
        $("table tbody").append(them);
        return true;
      });
    });
