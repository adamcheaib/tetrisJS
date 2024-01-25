"use strict"

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

function update_table() {
    reset_map_temporarily();

    if (gameplay_array.length !== 0) {

        for (let i = 0; i < gameplay_array.length; i++) {
            const current_block = gameplay_array[i];

            for (let sequence = 0; sequence < current_block.row_sequence.length; sequence++) {
                game_table[current_block.row_sequence[sequence]][current_block.column_sequence[sequence]] = current_block.id;
            }
        }
    }

    check_for_full_lines();
    render_graphics();
}


function reset_map_temporarily() {
    for (let row = 0; row < game_table.length; row++) {
        for (let column = 0; column < game_table[row].length; column++) {
            game_table[row][column] = 0;
        }
    }
}

function check_for_full_lines() {
    for (let row = 0; row < game_table.length; row++) {
        if (!game_table[row].includes(0)) {
            for (let column = 0; column < game_table[row].length; column++) {
                game_table[row][column] = 0;
            }
        }
    }
}