"use strict"

const canvas = document.getElementById(("canvas"));
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 720;

const rows_amount = game_table.length;
const columns_amount = game_table[0].length;

const row_size = canvas.height / rows_amount;
const column_size = canvas.width / columns_amount;

// This is the size for each tile of each different figure.
const block_tile_height = row_size - 2;
const block_tile_width = column_size - 2;

let gameplay_array = [];

function draw_rows_and_columns() {
    for (let i = 0; i < columns_amount + 1; i++) { // The + 1 is just to draw the right border of the table.
        context.beginPath();
        context.moveTo(i * column_size, 0);
        context.lineTo(i * column_size, canvas.height);
        context.stroke();
    }

    for (let i = 0; i < rows_amount + 1; i++) { // The + 1 is just to add the bottom border of the table.
        context.beginPath();
        context.moveTo(0, i * row_size);
        context.lineTo(canvas.width, i * row_size);
        context.stroke();
    }
}


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

    return block_variation[Math.floor(Math.random() * block_variation.length)];
}

function draw_block(block_object) {
    context.fillStyle = block_object.color;

    for (let block_tile = 0; block_tile < block_object.row_sequence.length; block_tile++) {
        context.fillRect(
            block_object.column_sequence[block_tile] * column_size + 1,
            block_object.row_sequence[block_tile] * row_size + 1,
            block_tile_width,
            block_tile_height,
        )
    }

    gameplay_array.push(block_object);
}

function add_player_control(event) {
    console.clear();
    console.table(game_table)

    if (event.key === "ArrowRight") {
        // Make sure that the row you are passing as argument is correct!
        if (control_possible_horizontal_movement(
            "right",
            current_controlled_block.column_sequence,
            0) === true)
        {
            for (let i = 0; i < current_controlled_block.column_sequence.length; i++) {
                current_controlled_block.column_sequence[i]++;
            }
        }
    }

        if (event.key === "ArrowLeft") {
            // Make sure that the row you are passing as argument is correct!
            if (control_possible_horizontal_movement(
                "left",
                current_controlled_block.column_sequence,
                0) === true)
            {
                for (let i = 0; i < current_controlled_block.column_sequence.length; i++) {
                    current_controlled_block.column_sequence[i]--;
                }
            }
        }

        context.clearRect(0,0, canvas.width, canvas.height);
        draw_rows_and_columns();
        draw_block(current_controlled_block, gameplay_array);
}

// Must go through this function again once I
function control_possible_horizontal_movement(direction, column_positions, row_positions) {
   if (direction === "left") {

       if (game_table[row_positions][column_positions[0] - 1] === undefined
           ||
           game_table[row_positions][column_positions[0] - 1] === 1
       )
           return false;
   }

   if (direction === "right") {
       if (game_table[row_positions][column_positions[3] + 1] === undefined
           ||
           game_table[row_positions][column_positions[3] + 1] === 1
       ) return false;
   }

   return true;
}