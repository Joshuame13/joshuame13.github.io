var analyze = document.getElementById("analyze");
var output_box = document.getElementById("output_box")

const test = function () {
    var guess_1_val = document.getElementById("guess_1").value
    var guess_2_val = document.getElementById("guess_2").value
    var guess_3_val = document.getElementById("guess_3").value
    var guess_4_val = document.getElementById("guess_4").value
    var guess_5_val = document.getElementById("guess_5").value
    var guess_6_val = document.getElementById("guess_6").value
    var color_1_val = document.getElementById("color_1").value
    var color_2_val = document.getElementById("color_2").value
    var color_3_val = document.getElementById("color_3").value
    var color_4_val = document.getElementById("color_4").value
    var color_5_val = document.getElementById("color_5").value
    var color_6_val = document.getElementById("color_6").value

    output_box.innerHTML=guess_1_val
}

analyze.addEventListener('click', test)
