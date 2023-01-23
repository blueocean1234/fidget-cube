input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
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
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    while (input.logoIsPressed()) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    basic.clearScreen()
})
basic.showIcon(IconNames.Yes)
