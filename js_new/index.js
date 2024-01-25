"use strict"

// The interval should be where the logic runs.
let game_interval = setInterval(() => {
    add_player_control({key: "ArrowDown"})
}, 1000)

generate_tetris_block_info(gameplay_array);
update_table();

function render_graphics() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw_rows_and_columns();
    draw_all_blocks();
}

render_graphics();
window.addEventListener("keyup", add_player_control);
