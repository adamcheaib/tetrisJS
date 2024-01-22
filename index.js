"use strict"

const canvas = document.getElementById(("canvas"));
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 720;

let row_lines = 0;

for (let i = 0; i < 12; i++) {
    context.beginPath();
    context.moveTo(0,row_lines);
    context.lineTo(canvas.width, row_lines);
    context.stroke();
    row_lines += 60;
}