bluetooth.startUartService()
let angle = 0
basic.forever(function () {
    bluetooth.uartWriteNumber(angle)
    pins.servoWritePin(AnalogPin.P0, angle)
    angle = angle + 10
    basic.pause(200)
    if (angle >= 180) {
        angle = 0
    }
})
