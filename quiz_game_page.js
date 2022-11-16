score_2 = 0;
score_1 = 0;

document.getElementById("player1_name").innerHTML = localStorage.getItem("player1_name") + ": " + score_2;
document.getElementById("player2_name").innerHTML = localStorage.getItem("player2_name") + ": " + score_1;

document.getElementById("question_turn").innerHTML = "Question Turn - " + localStorage.getItem("player1_name");
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + localStorage.getItem("player2_name");

function send(output) {
    $("#"+"output").show();
    num_1= document.getElementById("number_1").value;
    num_2= document.getElementById("number_2").value;
    localStorage.setItem("number_1", num_1);
    localStorage.setItem("number_2", num_2);
    actual_answer = parseInt(num_1) * parseInt(num_2);
    question_number = "<h4>" + num_1 + " x " + num_2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}


