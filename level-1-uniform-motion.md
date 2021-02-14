## goal
+ Move the ball uniformly in an arbitrary direction.

<br>

## equations
$$
\text{--------- constants ---------}
$$

$$
\begin{aligned}
v_x = const. \\
v_y = const.
\end{aligned}
$$

$$
\text{--------- time step ---------}
$$

$$
\begin{aligned}
x'&= x + dx  &  &\leftarrow  &  dx&= dt \cdot v_x\\
y'&= y + dy  &  &\leftarrow  &  dy&= dt \cdot v_y
\end{aligned}
$$

<br>

## code equivalent
```js
const ball = {
    x: 0,
    y: 0,
    vx: 1.5,
    vy: 3.0,
};

function simulateOneStep(dt) {
    ball.x += dt * ball.v_x;
    ball.y += dt * ball.v_y;
}
```

<br>

## discussion of the time step equations
+ Things are really simple here.
+ We assume the velocity of the object to be constant all the time. Therefore, in each time step the position shall be updated a tiny bit forward using this constant velocity.

<br>

## working example

|||
| --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-1-uniform-motion.html) | [Code Live](https://pitizzzle.github.io/simulate-ball-physics/code/level-1-uniform-motion.html) |
