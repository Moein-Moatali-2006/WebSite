var cells = document.getElementsByClassName("cell");
var score_x = document.getElementById("score_x");
var score_o = document.getElementById("score_o");
var score_draw = document.getElementById("score_draw");

var score_x_counter = 0;

// ui - frontend
var buttons = [[cells[0], cells[1], cells[2]],
               [cells[3], cells[4], cells[5]],
               [cells[6], cells[7], cells[8]]];
// logic - backend
var flags = [[null, null, null],
            [null, null, null],
            [null, null, null]];

var ply = "X";

function show_index(x, y){
    if (flags[x][y] == null){
        if (ply == "X"){
        flags[x][y] = "X";
        buttons[x][y].innerHTML = "X";
        buttons[x][y].classList.add("X");
        ply = "O";
        }
        else if (ply == "O"){
            flags[x][y] = "O";
            buttons[x][y].innerHTML = "O";
            buttons[x][y].classList.add("O");
            ply = "X";
        } 
    }
    else{
        alert("مثل آدم بازی کن");
    }
    check_game();
}

function check_game(){
    if(flags[0][0]=="X" && flags[0][1]=="X" && flags[0][2]=="X"){
        alert("بازیکن X  برنده شد.")
        score_x_counter ++;
        score_x.innerHTML = score_x_counter;
    }
    if(flags[1][0]=="X" && flags[1][1]=="X" && flags[1][2]=="X"){
        alert("بازیکن X  برنده شد.")
    }
}