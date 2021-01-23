## goal
+ move the ball uniformly in an arbitrary direction

<br>

## equations
$$
\begin{aligned}
v_x = const. \\
v_y = const.
\end{aligned}
$$
$$
\begin{aligned}
\text{time step: { }{ }{ } } dx &= dt * v_x \\
dy &= dt * v_y
\end{aligned}
$$

<br>

## code
```js
const ball = {
    x: 0,
    y: 0,
    vx: 1,
    vy: 2,
};

renderLoop(function (dt) {
    ball.x += dt * ball.vx;
    ball.y += dt * ball.vy;
});
```

<br>

## working example

+ [code]
+ [fiddle]
