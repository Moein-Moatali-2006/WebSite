var cell = document.getElementsByClassName("cell");

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


function game(row, col){
    if (main_board_b[row][col] == null){

        if (ply ==  "player X"){
            main_board_b[row][col] = "X";
            main_board_f[row][col].style.backgroundColor = "pink";
            main_board_f[row][col].innerHTML = "X";
            main_board_f[row][col].style.color = "red";
            ply = "player O";
        }
        else if (ply ==  "player O"){
            main_board_b[row][col] = "O";
            main_board_f[row][col].style.backgroundColor = "lightskyblue";
            main_board_f[row][col].innerHTML = "O";
            main_board_f[row][col].style.color = "blue";
            ply = "player X";
        }
    }
    else{
        alert("This cell isn't null !");
    }
}