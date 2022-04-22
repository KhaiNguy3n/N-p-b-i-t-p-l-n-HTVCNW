
        function KiemTraTenDN(){
            var re = /^[a-z]\w*/;
            if(re.test(document.getElementById('txtDN').value.trim())==false){
                tendn.innerText = " * bắt buộc, bắt đầu bằng ký tự chữ";
                return false;
            }
            else{
                tendn.innerText=" *";
                return true;
            }
        }
        function KiemTraPassWord(){
            var re = /(?=.*\d).{6,}/;
            if(re.test(document.getElementById('txtMK').value.trim())==false){
                mk.innerText = " * phải có chứ, số, và ít nhât 6 ký tự";
                return fasle;
            }
            else{
                mk.innerText = " *";
                return true;
            }
        }
        function KiemTraXacNhanPassword(){
            if(document.getElementById('txtXNMK').value!=document.getElementById('txtMK').value){
                xnmk.innerText = " * phải giống ô mật khẩu";
                return false;
            }
            else{
                xnmk.innerText=" *";
                return true;
            }
        }
        function KiemTraNgaySinh(){
            var ns = new Date(document.getElementById('txtNS').value);
            var today = new Date();
            if(eval(today.getFullYear() - ns.getFullYear())<=12){
                ngaysinh.innerText = " tuổi phải trên 12";
                return false;
            }
            else{
                ngaysinh.innerText="";
                return true;

            }
        }
        function SubmitForm(){
            if(KiemTraTenDN()==false||KiemTraPassWord()==false||KiemTraXacNhanPassword()==false){
                alert("Thông tin nhập vào không hợp lệ");
            }
            else{
                var tt1 = document.getElementById("txtName").value;
                var tt2 = document.getElementById("txtNS").value;
                var tt3 = document.getElementById("txtDC").value;
                var w = open("index.html", "Ketqua");
                w.document.write("<b> THÔNG TIN CÁ NHÂN </b> <br>");
                w.document.write("Họ tên: "+tt1+"<br>");
                w.document.write("Năm sinh: "+tt2+"<br>");
                w.document.write("Địa chỉ: "+tt3+" <br>");
            }
        }
