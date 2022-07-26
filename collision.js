function isCollide(redSquare ,finishLine) {
    return !(
        ((redSquare.y + redSquare.height) < (finishLine.y)) ||
        (redSquare.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}