var inputs1 = [""];
var inputs2 = [""]
function getParagraph1(){
    for(var i = 1; i <= 6; i++){
        inputs1.push(document.getElementById("para1_input_box_" + i).value);
        document.getElementById("showParagraph1").innerHTML = inputs1.join(". ");
    }
}
function getParagraph2(){
    for(var i = 1; i <= 6; i++){
        inputs2.push(document.getElementById("para2_input_box_" + i).value);
        document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
    }
}