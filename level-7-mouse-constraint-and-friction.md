## goal
+ The same as in level 6 ...
  - Simulate the motion of multiple balls.
  - There is no gravity, our simulation may be interpreted as a top-down view on a billiard table.
  - Collisions can happen with all the walls, and between each of the balls. Simulated using spring collisions.
  - All balls, except one, are initially stationary.

+ Additionally ...
  - Have one extra ball that follows the user's mouse position.
  - Apply friction to the movement of each ball.

<br>



## implementing friction
+ (1/3) Kinetic dry friction:
  - https://en.wikipedia.org/wiki/Friction#Dry_friction
  - $F_R = \mu \cdot m \cdot g$
  - In the direction opposite to the current velocity.
    <br>

+ (2/3) Drag:
  - https://en.wikipedia.org/wiki/Drag_equation
  - $F_R = \mu \cdot v^2 \quad$ (if you don't want size to play a role)
  - $F_R = \mu \cdot v^2 \cdot m \quad$ (if you don't want size or mass to play a role)
  - $F_R = \mu \cdot v^2 \cdot r \quad$ (if you have a puck)
  - $F_R = \mu \cdot v^2 \cdot r^2 \quad$ (if you have a ball)
    <br>

+ (3/3) Simplified Linear Velocity Friction
  - $v' = (1 - \mu)^{dt} \cdot v$

<br>



## equations <small>(only what changed to level 6)</small>
$$
\text{--------- constants ---------}
$$

$$
\begin{aligned}
\text{\hspace{50pt}}
\mu &= \text{const.}\text{\small\color{Gray}\hspace{14pt}(drag friction coefficient)}\\[14pt]
\end{aligned}
$$

$$
\text{--------- drag/friction ---------}
$$

$$
\text{\small\color{Gray} (for every ball i, except the one with mouse constraint, ...)}
$$

$$
\begin{aligned}
v_i &= \sqrt{v_{i,x}^{\,2} + v_{i,y}^{\,2}} + 0.000001 \quad\begin{gathered}\text{\small\color{Gray}(prevent division}\\[-4pt] \text{\small\color{Gray}with zero later)}\end{gathered}\\[4pt]
F_R &= \mu \cdot v_i^2 \cdot m_i^{-1} \\[4pt]
F'''_{i,x} &= F''_{i,x} - \dfrac{v_{i,x}}{v_i} \cdot F_R\\[8pt]
F'''_{i,y} &= F''_{i,y} - \dfrac{v_{i,y}}{v_i} \cdot F_R\\[8pt]
\end{aligned}
$$

<br>



## code equivalent <small>(only what changed to level 6)</small>
```js
const balls = [
    {
        x: 30,  // at the left
        y: 0.5 * canvas.h,  // vertically centered
        v_x: 10,  // moving straight to the right
        v_y: 0,   //
        m: 1,
        r: 15,
        color: '#E91E63',
    },
    {
        x: canvas.w - 50,  // at the right
        y: 0.5 * canvas.h,  // vertically centered
        v_x: 0,  // initially stationary
        v_y: 0,  //
        m: 1,
        r: 15,
        color: '#00BCD4',
    },

    // ...

    {
        isMouseConstrained: true,
        x: -100,
        y: -100,
        r: 15,
        color: 'red',
    },

];

const k = 5;  // spring stiffness
const mu = 0.0005;  // drag friction coefficient

function simulateOneStep(dt) {

    // ...

    for (let ball of balls) {
        if (ball.isMouseConstrained) {
            continue;
        }
        const v = Math.sqrt(ball.v_x ** 2 + ball.v_y ** 2) + 0.000001;  // '+0.000001' prevents division with zero later
        const F_R = mu * v**2 * ball.m;
        ball.F_x -= ball.v_x / v * F_R;
        ball.F_y -= ball.v_y / v * F_R;
        const a_x = ball.F_x / ball.m;
        const a_y = ball.F_y / ball.m;
        ball.v_x += dt * a_x;
        ball.v_y += dt * a_y;
        ball.x += dt * ball.v_x;
        ball.y += dt * ball.v_y;
    }
}

function onMouseMove(newMouseX, newMouseY) {
    for (let ball of balls) {
        if (ball.isMouseConstrained) {
            ball.x = newMouseX;
            ball.y = newMouseY;
        }
    }
}
```

<br>



## working example

|||
| --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-7-mouse-constraint-and-friction.html) | [Code Live](https://pitizzzle.github.io/simulate-ball-physics/code/level-7-mouse-constraint-and-friction.html) |
