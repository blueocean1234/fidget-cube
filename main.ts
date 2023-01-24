input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("\"Bye!!!!\"")
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Yes)
