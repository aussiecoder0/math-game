input.onButtonPressed(Button.A, function () {
    if (number == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    wait = 0
})
input.onButtonPressed(Button.B, function () {
    if (number == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    wait = 0
})
let wait = 0
let number = 0
number = 1
wait = 1
basic.showNumber(number)
basic.showString("+")
basic.showNumber(number)
basic.showString("Press A")
basic.pause(5000)
number = 2
wait = 1
basic.showNumber(number)
basic.showString("+")
basic.showNumber(number)
basic.showString("Press B")
