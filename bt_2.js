/**
 * BÀI TẬP TÍNH SỐ TRUNG BÌNH KHI NHẬP 5 SỐ
 * INPUT: nhap vao 5 so thuc
 * XỬ LÝ: tinh trung binh cua 5 so thuc
 * OUTPUT: hien thi ket qua
 */

document.getElementById("btnTinhTrungBinh").onclick = function() {
    // Lấy giá trị của 5 ô đầu vào và chuyển đổi thành số thực
    var soThu1 = parseFloat(document.getElementById("soThu1").value);
    var soThu2 = parseFloat(document.getElementById("soThu2").value);
    var soThu3 = parseFloat(document.getElementById("soThu3").value);
    var soThu4 = parseFloat(document.getElementById("soThu4").value);
    var soThu5 = parseFloat(document.getElementById("soThu5").value);

    // Tính tổng và trung bình của 5 số
    var tong = soThu1 + soThu2 + soThu3 + soThu4 + soThu5;
    var trungBinh = tong / 5;

    // Xuất kết quả ra màn hình
    document.getElementById("ketQua2").innerText = "Kết quả: " + trungBinh;
}