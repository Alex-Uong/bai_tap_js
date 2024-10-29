/**
 * BÀI TẬP TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
 * INPUT: nhập độ dài 2 cạnh hình chữa nhật.
 * XỬ LÝ: 
 * - Tính chu vi hình chữa nhật.
 * - Tính diện tích hình chữa nhất.
 * OUTPUT: hien thi ket qua
 */

document.getElementById("btnTinh").onclick = function() {
    // Lấy 2 cạnh hình chữa nhật 
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    // Tính chu vi hình chữa nhật
    var chuVi = (chieuDai + chieuRong) * 2;

    // Tính diện tích hình chữa nhật
    var dienTich = chieuDai * chieuRong;

    // Xuất kết quả ra môn hình
    document.getElementById("ketQua4").innerText = "Chu vi: " + chuVi;
    document.getElementById("ketQua5").innerText = "Dien tich: " + dienTich;
}
