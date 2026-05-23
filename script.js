function dangNhap(){



    let ten =

    document.getElementById("ten")
    .value;



    if(ten == ""){

        alert("Vui lòng nhập tên");

        return;

    }



    /* ẨN LOGIN */

    document.getElementById("login")
    .style.display = "none";



    /* HIỆN MAIN */

    document.getElementById("main")
    .style.display = "block";



    /* CHÀO */

    document.getElementById("chaomung")
    .innerHTML =

    "Xin chào: " + ten;

}



/* KHO HUẤN LUYỆN */

function hienKhoHuanLuyen(){



    document.getElementById("main")
    .style.display = "none";



    document.getElementById("khohuanluyen")
    .style.display = "block";



    document.getElementById("khohaucan")
    .style.display = "none";



    document.getElementById("thongke")
    .style.display = "none";



    dongMenu();

}



/* KHO HẬU CẦN */

function hienKhoHauCan(){



    document.getElementById("main")
    .style.display = "none";



    document.getElementById("khohuanluyen")
    .style.display = "none";



    document.getElementById("khohaucan")
    .style.display = "block";



    document.getElementById("thongke")
    .style.display = "none";



    dongMenu();

}
/* ĐỒNG HỒ */

setInterval(function(){



    let now = new Date();



    document.getElementById("dongho")
    .innerHTML =

    now.toLocaleString("vi-VN");



},1000);
/* ĐĂNG XUẤT */

function dangXuat(){



    location.reload();

}
/* TÌM KIẾM HUẤN LUYỆN */

function timKiemHL(){



    let input =

    document.getElementById("timkiemhl")
    .value.toLowerCase();



    let table =

    document.querySelectorAll(

    "#khohuanluyen table tr"

    );



    for(let i = 1; i < table.length; i++){



        let text =

        table[i].innerText.toLowerCase();



        if(text.includes(input)){

            table[i].style.display = "";

        }

        else{

            table[i].style.display = "none";

        }

    }

}



/* TÌM KIẾM HẬU CẦN */

function timKiemHC(){



    let input =

    document.getElementById("timkiemhc")
    .value.toLowerCase();



    let table =

    document.querySelectorAll(

    "#khohaucan table tr"

    );



    for(let i = 1; i < table.length; i++){



        let text =

        table[i].innerText.toLowerCase();



        if(text.includes(input)){

            table[i].style.display = "";

        }

        else{

            table[i].style.display = "none";

        }

    }

}
/* MỞ MENU */

function moMenu(){

    document.getElementById("menu")
    .style.left = "0";

}



/* ĐÓNG MENU */

function dongMenu(){

    document.getElementById("menu")
    .style.left = "-250px";

}
/* TRANG CHỦ */

function trangChu(){



    /* HIỆN MAIN */

    document.getElementById("main")
    .style.display = "block";



    /* ẨN KHO */

    document.getElementById("khohuanluyen")
    .style.display = "none";



    document.getElementById("khohaucan")
    .style.display = "none";



    /* ẨN THỐNG KÊ */

    document.getElementById("thongke")
    .style.display = "none";



    /* ĐÓNG MENU */

    dongMenu();

}
/* THỐNG KÊ */

function thongKe(){



    /* ẨN */

    document.getElementById("main")
    .style.display = "none";



    document.getElementById("khohuanluyen")
    .style.display = "none";



    document.getElementById("khohaucan")
    .style.display = "none";



    /* HIỆN THỐNG KÊ */

    document.getElementById("thongke")
    .style.display = "block";



    /* ĐẾM HUẤN LUYỆN */

    let hl =

    document.querySelectorAll(

    "#khohuanluyen table tr"

    ).length - 1;



    /* ĐẾM HẬU CẦN */

    let hc =

    document.querySelectorAll(

    "#khohaucan table tr"

    ).length - 1;



    /* TỔNG */

    let tong = hl + hc;



    /* HIỆN */

    document.getElementById("tkhl")
    .innerHTML = hl + " vật chất";



    document.getElementById("tkhc")
    .innerHTML = hc + " vật chất";



    document.getElementById("tktong")
    .innerHTML = tong + " vật chất";



    dongMenu();

}
/* MỞ TỪ QR */

window.onload = function(){



    let hash = window.location.hash;



    /* ẨN LOGIN */

    document.getElementById("login")
    .style.display = "none";



    /* HIỆN MAIN */

    document.getElementById("main")
    .style.display = "block";



    /* ẨN TẤT CẢ */

    document.getElementById("khohuanluyen")
    .style.display = "none";



    document.getElementById("khohaucan")
    .style.display = "none";



    document.getElementById("thongke")
    .style.display = "none";



    /* QR KHO HUẤN LUYỆN */

    if(hash == "#khohuanluyen"){



        hienKhoHuanLuyen();

    }



    /* QR KHO HẬU CẦN */

    else if(hash == "#khohaucan"){



        hienKhoHauCan();

    }

}