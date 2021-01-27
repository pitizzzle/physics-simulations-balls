## goal
+ Let an initially stationary ball accelerate by simulating the push of a random but constant force (like a gravity force).

<br>

## equations

$$
\text{--------- constants ---------}
$$

$$
\begin{aligned}
F_x &= const. \\
F_y &= const. \\
m &= const. \\[8pt]
\end{aligned}
$$

$$
\text{--------- time step ---------}
$$

$$
\text{\small\color{gray} (new acceleration, which is constant during the time step)}
$$

$$
\begin{aligned}
a_x &= \frac{F_x}{m} \\[8pt]
a_y &= \frac{F_y}{m} \\[8pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (new velocity, which is constant during the time step)}
$$

$$
\begin{aligned}
dv_x &= dt \cdot a_x \\
dv_y &= dt \cdot a_y \\[8pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (new position)}
$$

$$
\begin{aligned}
dx &= dt \cdot v_x \\
dy &= dt \cdot v_y \\[8pt]
\end{aligned}
$$

<br>

## code
```js
const ball = {
    x: 0.5 * canvas.w,  // center of canvas
    y: 0.5 * canvas.h,  //
    v_x: 0,  // initially stationary
    v_y: 0,  //
    m: 1,
};

const F_x = Math.random() * 2 - 1;  // random value in interval [-1; 1)
const F_y = Math.random() * 2 - 1;  //

function simulateOneStep(dt) {
    const a_x = F_x / ball.m;
    const a_y = F_y / ball.m;
    ball.v_x += dt * a_x;
    ball.v_y += dt * a_y;
    ball.x += dt * ball.v_x;
    ball.y += dt * ball.v_y;
}
```

<br>

## working example

||||
| --- | --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-1-uniform-motion.html) | [Code Live](https://pitizzzle.github.io/physics-simulations-balls/code/level-1-uniform-motion.html) | [Code Fiddle](https://jsfiddle.net/pitizzzle/tozgs1c5/2/) |
