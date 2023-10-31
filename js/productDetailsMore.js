function productDetailsMoreMiddleShow(){
    var productInfoShow = document.querySelector(".productInfoShow");
    var productDetailsMoreMiddle = document.querySelector(".productDetailsMoreMiddle");
    var productInfoHide = document.querySelector(".productInfoHide");
    var productInfo = document.querySelector(".productInfo");

    productDetailsMoreMiddle.style.height = "100%";
    productInfoShow.style.display = "none";
    productInfoHide.style.display = "block";
}
function productDetailsMoreMiddleHide(){
    var productInfoShow = document.querySelector(".productInfoShow");
    var productDetailsMoreMiddle = document.querySelector(".productDetailsMoreMiddle");
    var productInfoHide = document.querySelector(".productInfoHide");
    var productInfo = document.querySelector(".productInfo");

    productDetailsMoreMiddle.style.height = "26.3157vw";
    productInfoShow.style.display = "block";
    productInfoHide.style.display = "none";
}