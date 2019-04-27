var chess_lines = [1, 2, 3, 4, 5, 6, 7, 8];
var chess_columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

//2 squares horizontally and 1 square vertically OR 2 squares vertically and one square horizontally
function get_all_moves(knight_position) {
  // separate the knight position in column and line
  // based on the array
  var index_knight_line = knight_position[1] - 1;
  var index_knight_column = chess_columns.indexOf(knight_position[0]);

  // we know the knight can only move horizontally
  // by 2 index's at most and then 1 vertically
  var first_direction = validate_move(index_knight_column, 2, 2);
  var second_direction = validate_move(index_knight_line, 1, 1);
  // now the column will move by 1 and the line by 2
  var third_direction = validate_move(index_knight_column, 1, 1);
  var forth_direction = validate_move(index_knight_line, 2, 2);

  // stores all possible moves in an array
  arr_possible_moves = [];
  arr_possible_moves = concat_moves(
    arr_possible_moves,
    first_direction,
    second_direction
  );
  arr_possible_moves = concat_moves(
    arr_possible_moves,
    third_direction,
    forth_direction
  );

  return arr_possible_moves;
}

function validate_move(current_position, move_left, move_right) {
  var left_line_position =
    current_position - move_left >= 0 ? current_position - move_left : null;
  var right_line_position =
    current_position + move_right < 9 ? current_position + move_right : null;
  return [left_line_position, right_line_position];
}

function concat_moves(arr_possible_moves, move_h, move_v) {
  move_h.forEach(function(item_move_h) {
    // for each move horizontally that's not
    // null try to make a move
    if (item_move_h !== null) {
      move_v.forEach(function(item_move_v) {
        // for each move vertically that's not
        // null try to finalize the move
        if (item_move_v !== null) {
          arr_possible_moves.push(
            chess_columns[item_move_h].toString() + (item_move_v + 1).toString()
          );
        }
      });
    }
  });
  return arr_possible_moves;
}

("use strict");

exports.list_all_available_moves = function(req, res) {
  // validate the position argument
  var knight_position = req.query.position;
  if (!knight_position || !/^[a-z]+[0-9]{1,2}$/.test(knight_position)) {
    res.status(400).send("Position argument with bad formatting");
    return;
  }

  var first_possible_moves = get_all_moves(knight_position);
  var second_possible_moves = [];

  first_possible_moves.forEach(function(position) {
    second_possible_moves = second_possible_moves.concat(
      get_all_moves(position)
    );
  });

  var all_moves = second_possible_moves.concat(first_possible_moves);
  res.json(all_moves);
};

// api/controllers/calculate_moves_controllers.js
