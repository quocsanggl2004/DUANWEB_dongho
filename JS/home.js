document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Lấy giá trị của các trường
    var name = document.getElementById("registerName").value.trim();
    var email = document.getElementById("registerEmail").value.trim();
    var username = document.getElementById("registerUsername").value.trim();
    var password = document.getElementById("registerPassword").value;
    var confirmPassword = document.getElementById("registerConfirmPassword").value;

    // Kiểm tra nếu tên trống
    if (name === "") {
        alert("Vui lòng nhập họ và tên.");
        event.preventDefault(); // Ngăn việc submit form
        return;
    }

    // Kiểm tra định dạng email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        event.preventDefault();
        return;
    }

    // Kiểm tra tên đăng nhập
    if (username === "") {
        alert("Vui lòng nhập tên đăng nhập.");
        event.preventDefault();
        return;
    }

    // Kiểm tra độ dài mật khẩu (ít nhất 6 ký tự)
    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        event.preventDefault();
        return;
    }

    // Kiểm tra mật khẩu xác nhận có khớp với mật khẩu hay không
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        event.preventDefault();
        return;
    }

    // Nếu tất cả đều hợp lệ
    alert("Đăng ký thành công!");
});