input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("OWW! That hurts!")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Bye Adhya!")
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Rollerskate)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello Adhya!")
})
basic.showIcon(IconNames.Yes)
