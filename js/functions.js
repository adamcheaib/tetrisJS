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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

function generateTetrisBlock() {
    const block_variation = [
        {name: "i-block", column_sequence: [3,4,5,6], row_sequence: [0,0,0,0]},
        {name: "j-block", column_index: []},
        "l-block",
        "o-block",
        "s-block",
        "t-block",
        "z-block"
    ];

    const selected_block = block_variation[Math.floor(Math.random() * block_variation.length)];

    return selected_block;
}

console.log(generateTetrisBlock())