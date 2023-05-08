let distances = 0
basic.forever(function () {
    distances = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    whaleysans.showNumber(distances)
    if (distances > 0 && distances < 20) {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.pause(3000)
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
    basic.pause(100)
})
