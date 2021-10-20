input.onButtonPressed(Button.A, function () {
    if (number == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    if (number == 2) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
let number = 0
number = 1
basic.showNumber(number)
basic.showString("+")
basic.showNumber(number)
basic.showString("Press A")
number = 2
basic.showNumber(number)
basic.showString("+")
basic.showNumber(number)
basic.showString("Press B")
