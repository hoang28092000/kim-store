window.onscroll = function() {
    const navbar = document.getElementById("freeshiping");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.top = "0"; // Hiện navbar
    } else {
        navbar.style.top = "-60px"; // Ẩn navbar
    }
};

window.onscroll = function() {
    var header = document.querySelector('.top_header');

    // Kiểm tra vị trí cuộn
    if (window.pageYOffset > 0) {
        header.classList.add('scrolled'); // Thêm lớp đổ bóng khi cuộn
    } else {
        header.classList.remove('scrolled'); // Xóa lớp khi không cuộn
    }
};