input.onButtonPressed(Button.A, function () {
    basic.showString("hi!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    basic.setLedColor(0x0000ff)
})
basic.forever(function () {
	
})
