"use strict"

const canvas = document.getElementById(("canvas"));
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 720;

let row_lines = 0;
let column_lines = 0;

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