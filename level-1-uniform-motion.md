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

function simulateOneStep(dt) {
    ball.x += dt * ball.vx;
    ball.y += dt * ball.vy;
}
```

<br>

## working example

||||
| --- | --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-1-uniform-motion.html) | [Code Live](https://pitizzzle.github.io/physics-simulations-balls/code/level-1-uniform-motion.html) | [Code Fiddle](https://jsfiddle.net/pitizzzle/tozgs1c5/2/) |
