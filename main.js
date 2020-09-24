//==================Bai 1:So nguyen to =======================
//    var soNguyenTo = true
//    var inputNumber = Number(prompt("Enter your number",0)) 
//     if(inputNumber<2){
//         soNguyenTo=false
//     }
//     if(soNguyenTo){
//         for(var i=2;i<= Math.sqrt(inputNumber);i++){
//             if(inputNumber % i==0){
//                 soNguyenTo =false
//                 break
//             }
//         }
//     }
//     if (soNguyenTo){
//         alert (inputNumber + "" + " Là số nguyên tố")
//     }
//     else{
//         alert(inputNumber + "" + " Không phải là số nguyên tố")
//     }
//================Bai 2:Viet chuong trinh in ra n so nhap tu ban phim=========
// var n = 10
// for(var i=0;i<n;i++){
//     console.log(i);
// }
//================Bai 3:Viết chương trình in ra các số lẻ từ 1 đến n==========
// var n = 10
// for(var i=0;i<n;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }
//===============Bai 4:Viết chương trình in ra các số chẳn từ 1 đến n=========
// var n = 10
// for(var i=0;i<n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
//==============Bai 5:Viết chương trình tính tổng từ 1 đến n?=================
// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
 
//     while (index <= n)
//     {
//         tong += index
//         index++
//     }
 
//     document.write("Tổng số  từ 1 tới " + n + " là: " + tong + "<br/>");
// }
// tinh_tong(10)
//==============Bai 6: Viết chương trình tính tổng bình phương của các số từ 1 đến n===
// function tinh_tong(n)
// {
//     var tong = 0;
//     var index = 0;
//     while (index <= n)
//     {
//         tong += index*index
//         index++
//     }
//     document.write("Tổng số  từ 1 tới " + n + " là: " + tong + "<br/>");
// }
// tinh_tong(3)
//==============Bai 7:Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
// function kiem_tra_snt(n)
// {
//         var flag = true;
//     if (n < 2) {
//         flag = false;
//     }
//     else if (n == 2) {
//         flag = true;
//     }
//     else if (n % 2 == 0) {
//         flag = false;
//     }
//     else {
//         for (var i = 3; i <= Math.sqrt(n); i += 2)
//         {
//             if (n % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
 
//     return flag;
// }
 
// // Hàm in ra các số nguyên tố từ 1 tới n
// function print_snt(number)
// {
//     // Ép number sang kiểu INT
//     number = parseInt(number);
//     // Lặp để in kết quả
//     var html = '';
//     for (var i = 1; i <= number; i++) {
//         // Nếu là số nguyên tố thì in ra
//         if (kiem_tra_snt(i)){
//             html += i + ' <br/>';
//         }
//     }
//    document.write(html)
// }
// print_snt(10)
//==============Bai 8:Tính tổng các số lẻ trong khoảng 1 đến n?
// var n = 6
// var s = 0
// for(var i =0;i<n;i++){
//     if(i%2!=0){
//         s=s+i
//     }
//     console.log(s);
// }
//==============Bai 9: Kiểm tra số n có toàn số lẻ tạo thành hay không======
// var mang =[1,3,5,2,9]
// var trangthai=true
// if(mang%2!=0){
//     trangthai =true
//     console.log("Mảng toàn số lẻ");
// }else{
//     trangthai=false
//     console.log("Mảng không toàn số lẻ");
// }
//==============Bai 10: bâng cuu chuong
document.write("Bang nhan 2:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 2"+"="+(i*2))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 3:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 3"+"="+(i*3))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 4:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 4"+"="+(i*4))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 5:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 5"+"="+(i*5))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 6:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 6"+"="+(i*6))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 7:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 7"+"="+(i*7))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 8:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 8"+"="+(i*8))
}
document.write("</br>===================================");
document.write("</br>")
document.write("Bang nhan 9:");
for(var i =0;i<10;i++){
document.write("<br/>"+i+"x 9"+"="+(i*9))
}


   
