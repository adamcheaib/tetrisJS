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
    let full_rows = []; // Sparar alla rows som är fulla.

    for (let i = 0; i < game_table.length; i++) {
        if (!game_table[i].includes(0)) {
            full_rows.push(i); // Här läggs dem till i listan.
        }
    }

    if (full_rows.length !== 0) {
        clear_full_lines(full_rows);
    }
}

// 1. Check which blocks have lines in row 11.
// 2. Pick out the index of the number 11 in the row_sequence.
// 3. Splice the eleven(s) from the row_sequence and the column positions with the same index as the eleven(s).
function clear_full_lines(arr) {
    console.log("The full lines are: " + arr);
    for (let block = 0; block < gameplay_array.length; block++) {
        const current_block = gameplay_array[block];

        for (let i = 0; i < arr.length; i++) {
            let current_full_row = arr[i];

            if (current_block.row_sequence.includes(current_full_row)) {

                let tiles_to_remove = current_block.row_sequence.filter(num => num === current_full_row);
                console.log(tiles_to_remove);

                for (let j = 0; j <= tiles_to_remove.length; j++) {
                    let full_row_index = current_block.row_sequence.lastIndexOf(current_full_row);
                    if (full_row_index !== -1) {
                        current_block.row_sequence.splice(full_row_index, 1);
                        current_block.column_sequence.splice(full_row_index, 1);
                    }

                    if (current_block.row_sequence.length === 0) {
                        gameplay_array.splice(gameplay_array.indexOf(current_block), 1);
                    }

                }

                clear_full_lines(current_full_row);
                for (let to_move_down = 0; to_move_down < arr.length; to_move_down++) {
                    results_after_cleared_line(arr[to_move_down]);
                }

            }

        }
    }


    update_table();
}

// 1. Check for all the rows above of the cleared line.
// 2. E.g. Line 4 was cleared. That means Line 3, 2, 1 need to be moved down one row.
// 3. Create a loop that starts from line 3 and decrements to -1.
// 4. The loop checks if a block has the index of the current row to be modified in it (for example 3).
// 5. If it does, increment the number of the row.


// Analyze this function and double-check so that the row numbers are correct!
function results_after_cleared_line(row_index) {
    for (let row = row_index - 1; row >= 0; row--) {
        const current_row = game_table[row];

        for (let i = 0; i < gameplay_array.length; i++) {
            if (gameplay_array[i].row_sequence.includes(row)) {
                for (let j = 0; j < gameplay_array[i].row_sequence.length; j++) {
                    if (gameplay_array[i].row_sequence[j] === row) gameplay_array[i].row_sequence[j]++;

                }
            }
        }
    }
}