input.onButtonPressed(Button.A, function () {
    SensorPlus.Calibrate(25, AnalogPin.P1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Math.round(SensorPlus.get_ntup(AnalogPin.P1)))
})
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
