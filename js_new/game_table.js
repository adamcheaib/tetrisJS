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

function reset_specific_line(row_index) {
    for (let i = 0; i < game_table[row_index].length; i++) {
        game_table[row_index][i] = 0;
    }
}

function check_for_full_lines() {
    let full_rows = [];

    for (let i = 0; i < game_table.length; i++) {
        if (!game_table[i].includes(0)) {
            full_rows.push(i);
        }
    }

    if (full_rows.length !== 0) {
        console.log("Function triggered.");
        clear_full_lines(full_rows);
    }
}

// 1. Check which blocks have lines in row 11.
// 2. Pick out the index of the number 11 in the row_sequence.
// 3. Splice the eleven(s) from the row_sequence and the column positions with the same index as the eleven(s).
function clear_full_lines(arr) {
    console.log(arr);
    console.log(gameplay_array);
    // for (let i = 0; i < game_table[0].length; i++) {
    //     let row_index_to_remove = arr[i];
    //
    //     if (gameplay_array[i].row_sequence.includes(arr[row_index_to_remove])) {
    //         console.log(gameplay_array[i]);
    //         gameplay_array[i].row_sequence.splice(gameplay_array[i].row_sequence.indexOf(row_index_to_remove), 1);
    //         gameplay_array[i].column_sequence.splice(gameplay_array[i].row_sequence.indexOf(row_index_to_remove), 1);
    //         reset_specific_line(row_index_to_remove);
    //     }
    // }
}