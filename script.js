/* MENU */

        }

    }

}


/* ĐỒNG HỒ */

setInterval(function(){

    let now = new Date();


    document.getElementById("dongho")
    .innerHTML =
    now.toLocaleString("vi-VN");

},1000);


/* QR */

window.onload = function(){

    let hash = window.location.hash;


    if(hash == "#khohuanluyen"){

        document.getElementById("login")
        .style.display = "none";


        document.getElementById("khohuanluyen")
        .style.display = "block";

    }


    else if(hash == "#khohaucan"){

        document.getElementById("login")
        .style.display = "none";


        document.getElementById("khohaucan")
        .style.display = "block";

    }

};