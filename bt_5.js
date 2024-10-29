/**
 * BÀI TẬP TÍNH KÝ SỐ
 * INPUT: nhap vao 1 so 
 * XỬ LÝ: tinh so ky so
 * OUTPUT: hien thi ket qua
 */

// xử lý khi người dùng nhấn nút Tính số ký số
document.getElementById("btnTinhKySo").onclick = function() {
    // Lấy số can tinh
    var soCanTinh = document.getElementById("soCanTinhKySo").value * 1;

    // Tách số hàng chục và hàng đơn vị
    var hangChuc = Math.floor(soCanTinh / 10); // lấy phần nguyên khi chia cho 10
    var hangDonVi = soCanTinh % 10; // lấy phần dư khi chia cho 10

    // Tính số ký số
    var soKySo = hangChuc + hangDonVi;

    // Xuất kết quả ra màn hình
    document.getElementById("ketQua6").innerText = "Kết quả: " + soKySo;
}