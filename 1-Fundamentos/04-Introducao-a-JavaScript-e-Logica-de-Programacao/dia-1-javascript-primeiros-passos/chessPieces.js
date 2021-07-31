String piece = "Rook";

let lowerCasedPiece = piece.toLowerCase();

switch (lowerCasedPiece) {
  case pawn:
    console.log("1 step foward");
    break;
  case knight:
    console.log("L shape");
    break;
  case bishop:
    console.log("L shape");
    break;
  case rook:
    console.log("L shape");
    break;
  case queen:
    console.log("L shape");
    break;
  case king:
    console.log("L shape");
    break;

  default:
    console.log("Error, input pieces name in english");
    break;
}