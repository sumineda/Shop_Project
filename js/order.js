function orderTapOrder() {
    var orderTapOrder = document.querySelector(".orderTapOrder");
    var orderTapCancel = document.querySelector("orderTapCancel");

    var AllOrder = document.querySelector(".AllOrder");
    var OrderCancel = document.querySelector(".OrderCancel");

    OrderCancel.style.display ="none";
    AllOrder.style.display = "block";
};

function orderTapCancel() {
    var orderTapOrder = document.querySelector(".orderTapOrder");
    var orderTapCancel = document.querySelector("orderTapCancel");

    var AllOrder = document.querySelector(".AllOrder");
    var OrderCancel = document.querySelector(".OrderCancel");

    OrderCancel.style.display ="block";
    AllOrder.style.display = "none";
 };