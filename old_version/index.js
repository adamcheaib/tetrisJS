"use strict"

let column_lines = 0;
let row_lines = 0;

// Generates rows.
for (let i = 0; i < game_table.length + 1; i++) {
    context.beginPath();
    context.moveTo(0,row_lines);
    context.lineTo(canvas.width, row_lines);
    context.stroke();
    row_lines += 60;
}

// Generates columns.
for (let i = 0; i < 11; i++) {
    context.beginPath();
    context.moveTo(column_lines, 0);
    context.lineTo(column_lines, canvas.height);
    context.stroke();
    column_lines += canvas.width / 10;
}


spawn_new_block(game_table, generate_tetris_block_info());

function trigger_gameplay() {

}
