/**
 * BÀI TẬP QUY ĐỔI TIỀN
 * INPUT: người dùng nhập số tiền và quy định hằng số chuyển đổi.
 * XỬ LÝ: lấy số tiền của người dùng và tính ra tiền sau khi quy đổi.
 * OUTPUT: hiển thị kết quả.
 */

// Đặt hằng số tỉ giá
const TIGIA = 23500;

// xử lý khi người dùng bấm nút quy đổi.
document.getElementById("btnQuyDoiTien").onclick = function() {
    // Lấy số tiền từ người dùng
    var soTienUSD = document.getElementById("soTienUSD").value * 1;

    // Tính tiền sau khi quy đổi
    var soTienVND = soTienUSD * TIGIA;

    // Xuất kết quả ra môn hình
    document.getElementById("ketQua3").innerText = "Kết quả: " + soTienVND + " VND";
}
