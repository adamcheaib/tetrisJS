"use strict"

// The game table is 10 (columns) x 13 (rows).
// The highest row is the one that will generate invisible blocks in case the highest visible row is full.
const game_table =
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

const canvas = document.getElementById(("canvas"));
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 720;

const amount_of_columns = game_table[0].length;
const amount_of_rows = game_table.length;

let column_width = canvas.width / amount_of_columns;
let row_height = canvas.height / amount_of_rows;

let existing_blocks = [];

function generate_tetris_block_info() {
    const block_variation = [
        {name: "i-block", column_sequence: [3, 4, 5, 6], row_sequence: [0, 0, 0, 0], color: "lightblue"},
        {name: "j-block", column_sequence: [3, 3, 4, 5], row_sequence: [0, 1, 1, 1], color: "blue"},
        {name: "l-block", column_sequence: [3, 4, 5, 5], row_sequence: [1, 1, 1, 0], color: "orange"},
        {name: "o-block", column_sequence: [3, 4, 3, 4], row_sequence: [0, 0, 1, 1], color: "yellow"},
        {name: "s-block", column_sequence: [3, 4, 4, 5], row_sequence: [1, 1, 0, 0], color: "green"},
        {name: "t-block", column_sequence: [3, 4, 4, 5], row_sequence: [1, 0, 1, 1], color: "purple"},
        {name: "z-block", column_sequence: [3, 4, 4, 5], row_sequence: [0, 0, 1, 1], color: "red"}
    ];

    const selected_block = block_variation[Math.floor(Math.random() * block_variation.length)];

    return selected_block;
}

// Places the block at the top.
function spawn_new_block(game_table, block_info) {
    for (let i = 0; i < block_info.column_sequence.length; i++) {
        game_table[block_info.row_sequence[i]][block_info.column_sequence[i]] = 1;
    }

    existing_blocks.unshift(block_info);
    row_lines = 0;
    column_lines = 0;
    go_through_rows(block_info);
}
function go_through_rows(block_info) {
    for (let row = 0; row < game_table.length; row++) {
        go_through_columns(row, block_info);
    }
}

function go_through_columns(row, block_info) {
    for (let column = 0; column < game_table.length; column++) {
        if (game_table[row][column] === 1) push_block_to_game(column, row, block_info)
    }
}

function push_block_to_game(column, row, block_info){
    context.fillStyle = block_info.color;
    context.fillRect(
        column_width * column + 1,
        row_height * row + 1,
        column_width - 2,
        row_height - 2,
    )

    existing_blocks.unshift(block_info);
}

function draw_blocks() {
    existing_blocks.forEach(block => {

    })
}