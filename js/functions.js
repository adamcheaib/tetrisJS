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

let current_block;

// Continue here. The sizes need to be adjusted based on each box created in the table.
let block_width = 49;
let block_height = 59;

function generateTetrisBlock() {
    const block_variation = [
        {name: "i-block", column_sequence: [3, 4, 5, 6], row_sequence: [0, 0, 0, 0], color: "lightblue"},
        {name: "j-block", column_sequence: [3, 3, 4, 5], row_sequence: [0, 1, 1, 1], color: "blue"},
        {name: "l-block", column_sequence: [3, 4, 5, 5], row_sequence: [1, 1, 1, 0], color: "orange"},
        {name: "o-block", column_sequence: [3, 4, 3, 4], row_sequence: [0, 0, 1, 1], color: "yellow"},
        {name: "s-block", column_sequence: [3, 4, 4, 5], row_sequence: [1, 1, 0, 0], color: "green"},
        {name: "t-block", column_sequence: [3, 4, 4, 5], row_sequence: [0, 1, 1, 1], color: "purple"},
        {name: "z-block", column_sequence: [3, 4, 4, 5], row_sequence: [0, 0, 1, 1], color: "red"}
    ];

    const selected_block = block_variation[Math.floor(Math.random() * block_variation.length)];

    return selected_block;
}

function spawn_block(block_info) {
    // Game_table
}

spawn_block()

// function check_straight_line() {
//
// }