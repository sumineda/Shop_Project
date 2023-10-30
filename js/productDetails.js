function DetailsEachTextBoxShow(){
    var DetailsEachTextBox = document.querySelector(".DetailsEachTextBox");

    DetailsEachTextBox.style.display = 'block';
};

function DetailsEachTextBoxHide(){
    // var DetailsEachTextBox = document.querySelector(".DetailsEachTextBox")?.style.display = 'none';
    //? 연산자가 앞쪽 객체가 null 인지 체크함
    //널이면 뒤에 실행안함

    var DetailsEachTextBox = document.querySelector(".DetailsEachTextBox");
    DetailsEachTextBox.style.display = 'none';
    
    DetailsEachTextBox.style.display = 'none';
};