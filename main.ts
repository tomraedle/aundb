input.onButtonPressed(Button.A, function () {
    basic.showString("hi!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.forever(function () {
	
})
