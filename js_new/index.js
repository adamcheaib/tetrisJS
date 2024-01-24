"use strict"

let current_controlled_block = generate_tetris_block_info();
let game_interval;



function gameplay_loop() {
    // context.clearRect(0,0, canvas.width, canvas.height);
    // These should run within a gameplay loop.
    draw_rows_and_columns();
    draw_block(current_controlled_block, gameplay_array);
    update_map(gameplay_array);
    // requestAnimationFrame(gameplay_loop);
}

window.addEventListener("keyup", add_player_control);
gameplay_loop();
