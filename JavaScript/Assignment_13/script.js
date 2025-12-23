var cell = document.getElementsByClassName("cell");
var show_winner = document.getElementById("show_winner_text");
var new_game = document.getElementById("new_game");
var friend = document.getElementById("friend");
var computer = document.getElementById("computer");

var score_X_f = document.getElementById("score_X");
var score_O_f = document.getElementById("score_O");
var score_draw_f = document.getElementById("score_draw");

var score_X_b = 0;
var score_O_b = 0;
var score_Draw_b = 0;

var main_board_f = [
    [cell[0], cell[1], cell[2]],
    [cell[3], cell[4], cell[5]],
    [cell[6], cell[7], cell[8]]
];

var main_board_b = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

var ply = "player X"
var game_mode = "friend";

friend.addEventListener("change", function () {
    if (this.checked) game_mode = "friend";
});

computer.addEventListener("change", function () {
    if (this.checked) game_mode = "computer";
});


function computerMove() {
    let emptyCells = [];

    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (main_board_b[i][j] == null) {
                emptyCells.push([i, j]);
            }
        }
    }

    if (emptyCells.length === 0) return;

    let randIndex = Math.floor(Math.random() * emptyCells.length);
    let [row, col] = emptyCells[randIndex];

    main_board_b[row][col] = "O";
    main_board_f[row][col].style.backgroundColor = "lightskyblue";
    main_board_f[row][col].innerHTML = "O";
    main_board_f[row][col].style.color = "blue";

    ply = "player X";
    check();
}


function game(row, col){
    if (main_board_b[row][col] == null){

        if (ply == "player X"){
            main_board_b[row][col] = "X";
            main_board_f[row][col].style.backgroundColor = "pink";
            main_board_f[row][col].innerHTML = "X";
            main_board_f[row][col].style.color = "red";

            ply = "player O";
            check();

            if (game_mode === "computer") {
                setTimeout(computerMove, 300);
            }
        }

        else if (ply == "player O" && game_mode === "friend"){
            main_board_b[row][col] = "O";
            main_board_f[row][col].style.backgroundColor = "lightskyblue";
            main_board_f[row][col].innerHTML = "O";
            main_board_f[row][col].style.color = "blue";

            ply = "player X";
            check();
        }
    }
    else{
        alert("This cell isn't null !");
    }
}


function check(){
    if (main_board_b[0][0] == "X" && main_board_b[0][1] == "X" && main_board_b[0][2] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[1][0] == "X" && main_board_b[1][1] == "X" && main_board_b[1][2] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[2][0] == "X" && main_board_b[2][1] == "X" && main_board_b[2][2] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[0][0] == "X" && main_board_b[1][0] == "X" && main_board_b[2][0] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[0][1] == "X" && main_board_b[1][1] == "X" && main_board_b[2][1] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[0][2] == "X" && main_board_b[1][2] == "X" && main_board_b[2][2] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[0][2] == "X" && main_board_b[1][1] == "X" && main_board_b[2][0] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }
    else if (main_board_b[0][0] == "X" && main_board_b[1][1] == "X" && main_board_b[2][2] == "X"){
        score_X_b ++;
        score_X_f.innerHTML = score_X_b;
        show_winner.innerHTML = "X Won!!!"
        return false;
    }


    if (main_board_b[0][0] == "O" && main_board_b[0][1] == "O" && main_board_b[0][2] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[1][0] == "O" && main_board_b[1][1] == "O" && main_board_b[1][2] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[2][0] == "O" && main_board_b[2][1] == "O" && main_board_b[2][2] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[0][0] == "O" && main_board_b[1][0] == "O" && main_board_b[2][0] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[0][1] == "O" && main_board_b[1][1] == "O" && main_board_b[2][1] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[0][2] == "O" && main_board_b[1][2] == "O" && main_board_b[2][2] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[0][2] == "O" && main_board_b[1][1] == "O" && main_board_b[2][0] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }
    else if (main_board_b[0][0] == "O" && main_board_b[1][1] == "O" && main_board_b[2][2] == "O"){
        score_O_b ++;
        score_O_f.innerHTML = score_O_b;
        show_winner.innerHTML = "O Won!!!"
        return false;
    }

    var draw = 0;
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (main_board_b[i][j] != null) {
                draw ++;
            }
        }
    }
    if(draw == 9){
        score_Draw_b ++;
        score_draw_f.innerHTML = score_Draw_b;
        show_winner.innerHTML = "Draw!!"
        return false;
    }
}

new_game.onclick = function(){
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            main_board_b[i][j] = null;
            main_board_f[i][j].style.backgroundColor = "rgba(60, 60, 60, 0.5)";
            main_board_f[i][j].innerHTML = "";
        }
    }
}


