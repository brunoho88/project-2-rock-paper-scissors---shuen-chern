let rps = 0
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 4)
    if (rps < 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (rps < 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (rps < 3) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
