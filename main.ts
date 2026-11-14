let grad = 0
let phi = 0
let y = 0
let x = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    x = input.acceleration(Dimension.Y)
    y = input.acceleration(Dimension.Z)
    phi = Math.atan2(y, x)
    grad = phi / 6.283185307179586 * 360 + 180
    music.play(music.createSoundExpression(
    WaveShape.Square,
    grad,
    grad,
    255,
    255,
    150,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
})
