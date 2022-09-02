input.onPinPressed(TouchPin.P2, function () {
    pins.servoWritePin(AnalogPin.P16, angle)
    basic.pause(100)
    angle = angle - 10
    pins.servoWritePin(AnalogPin.P16, angle)
    basic.pause(100)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . . . # .
        # # # . .
        `)
    pins.servoWritePin(AnalogPin.P16, angle)
    basic.pause(100)
    angle = angle + 10
    pins.servoWritePin(AnalogPin.P16, angle)
    basic.pause(100)
})
let angle = 0
angle = 0
basic.forever(function () {
	
})
