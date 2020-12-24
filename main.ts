function przyspieszenie () {
    radio.sendNumber(input.acceleration(Dimension.X))
}
basic.showArrow(ArrowNames.North)
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 0) {
        przyspieszenie()
    }
})
