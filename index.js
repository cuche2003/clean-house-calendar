const DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return Math.floor((t2-t1)/(24*3600*1000));
    },

}

function app() {

    const order = ["Thịnh", "Tuyến", "Hoàng", "Long", "Bách", "Cường", "Thuận", "Khoa"]

    const firstDate = new Date(2022, 9, 13);
    const currDate = new Date();

    const dateCount = DateDiff.inDays(firstDate, currDate);
    const currTurn = dateCount % order.length;

    const body = document.getElementsByTagName("body")[0];
    const dateDiv = document.createElement("div");
    const orderDiv = document.createElement("div");
    const turnDiv = document.createElement("div");

    dateDiv.innerHTML += `Ngày bắt đầu là ngày <b>${firstDate.toLocaleDateString("vi-VN")}</b><br>`;
    dateDiv.innerHTML += `Ngày hôm nay là ngày <b>${currDate.toLocaleDateString("vi-VN")}</b><br>`;
    dateDiv.innerHTML += `Kể từ ngày bắt đầu, hôm nay là ngày thứ <b>${dateCount}</b>`;

    orderDiv.innerHTML += `Thứ tự: [`;

    for (let i = 0; i < order.length; i++) {
        if ( i == currTurn ) {
            orderDiv.innerHTML += `<b>${order[i]}</b>, `
            continue;
        }
        orderDiv.innerHTML += `${order[i]}, `
    }
    orderDiv.innerHTML = orderDiv.innerHTML.slice(0,-2);
    orderDiv.innerHTML += `]`;

    turnDiv.innerHTML = `Hôm nay <b>${order[currTurn]}</b> làm!`;

    body.appendChild(dateDiv);
    body.appendChild(orderDiv);
    body.appendChild(turnDiv);

}

app();
