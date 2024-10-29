/**
 * BÀI TẬP TÍNH LƯƠNG NHÂN VIÊN
 * INPUT: cho người dùng nhập vào số ngày làm và đặt hằng số tiền lương 1 ngày.
 * XỬ LÝ: tính tổng lương bằng cách nhân số ngày làm việc và lương 1 ngày.
 * OUTPUT: xuất ra tiền lương.
 */

// Đặt hằng số tiền lương một ngày
const luong1Ngay = 100000;

// Xử lý khi người dùng nhấn nút tính lương
document.getElementById("btnTinhLuong").onclick = function() {
    // Lấy số ngày làm từ người dùng
    var soNgayLam = document.getElementById("soNgayLam").value * 1;

    // Tính tổng lương
    var tongLuong = luong1Ngay * soNgayLam;

    // Xuất kết quả ra màn hình
    document.getElementById("ketQua").innerText = "Kết quả: " + tongLuong + " VND";
}