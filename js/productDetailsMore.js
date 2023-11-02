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
function BigImgChange1(){
    var BigImg = document.getElementById("BigImg");
    BigImg.src = "images/TOP/TopImg1_1.jpg"
};
function BigImgChange2(){
    var BigImg = document.getElementById("BigImg");
    BigImg.src = "images/TOP/TopImg1_2.jpg"
};
function BigImgBack(){
    var BigImg = document.getElementById("BigImg");
    BigImg.src = "images/TOP/TopImg1.jpg"
};