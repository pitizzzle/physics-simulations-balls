## goal
+ Simulate a ball that bounces off all the walls if it touches them.
+ The ball is initially stationary, and gravity is constantly acting on it downwards.

<br>

## equations

$$
\text{--------- constants ---------}
$$

$$
\begin{aligned}
\text{\hspace{50pt}}
m &= \text{const.}\text{\small\color{gray}\hspace{14pt}(mass of the ball)}\\
g &= \text{const.}\text{\small\color{gray}\hspace{14pt}(gravity constant)}\\
r&=\text{const.}\text{\small\color{gray}\hspace{14pt}(radius of the ball)}\\
w&=\text{const.}\text{\small\color{gray}\hspace{14pt}(width of the scene)}\\
h&=\text{const.}\text{\small\color{gray}\hspace{14pt}(height of the scene)}\\[8pt]
\end{aligned}
$$

$$
\text{--------- time step ---------}
$$

$$
\text{\small\color{gray} (new force, which is constant during the time step)}
$$

$$
\begin{aligned}
F_x &= 0\\[8pt]
F_y &= m \cdot g\\[8pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (new acceleration, which is constant during the time step)}
$$

$$
\begin{aligned}
a_x &= \frac{F_x}{m}\\[8pt]
a_y &= \frac{F_y}{m}\\[8pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (new velocity, which is constant during the time step)}
$$

$$
\begin{aligned}
dv_x &= dt \cdot a_x\\
dv_y &= dt \cdot a_y\\[8pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (new position)}
$$

$$
\begin{aligned}
dx &= dt \cdot v_x\\
dy &= dt \cdot v_y\\[8pt]
\end{aligned}
$$

$$
\text{--------- wall collisions ---------}
$$

$$
\text{\small\color{gray} (left and right wall)}
$$

$$
\begin{aligned}
v'_x =
\begin{cases}
    + \left| v_x \right|, & \text{if}\:\:\: x-r \lt 0\\
    - \left| v_x \right|, & \text{if}\:\:\: x+r \gt w\\
    v_x,               & \text{otherwise}
\end{cases}\\[24pt]
\end{aligned}
$$

$$
\text{\small\color{gray} (top and bottom wall)}
$$

$$
\begin{aligned}
v'_y =
\begin{cases}
    + \left| v_y \right|, & \text{if}\:\:\: y-r \lt 0\\
    - \left| v_y \right|, & \text{if}\:\:\: y+r \gt h\\
    v_y,               & \text{otherwise}
\end{cases}
\end{aligned}
$$


<br>

## code
```js
const ball = {
    x: 0.5 * canvas.w,  // horizontally centered
    y: 0.2 * canvas.h,  // at the top
    v_x: 0,  // initially stationary
    v_y: 0,  //
    m: 1,
    r: 15,
};

const g = 0.5;  // gravity constant

function simulateOneStep(dt) {
    const F_x = 0;
    const F_y = ball.m * g;
    const a_x = F_x / ball.m;
    const a_y = F_y / ball.m;
    ball.v_x += dt * a_x;
    ball.v_y += dt * a_y;
    ball.x += dt * ball.v_x;
    ball.y += dt * ball.v_y;
}
```

<br>


## the problem
+ You will notice, that using the update rules above, the ball jumps lower with every bounce off the ground.
+ It's true that simulating motion in discrete time steps is just an approximation, and therefore not 100% accurate. But normally, you don't actually see the inaccuracy this drastically, because the errors resulting in lower-than-reality speeds balance out with errors resulting in higher-than-reality speeds. If you see that errors constructively accumulate, like that the ball is jumping lower and lower, you know that there must be a systematic flaw in your simulation rules.
+ By looking at a simplified example we can figure it out.
+ Simply reversing the direction of the velocity does not work well together with our time step equations which treat the new velocity (for the state AFTER the step) as the average velocity DURING the step.
+ [IMAGE]
+ This is the reason why the ball loses velocity systematically.
+ The solution? For these specific update rules we have to adapt our update rules. The problem is solved by applying the ACTUAL average velocity for each time step, instead of treating the new velocity (for the state after the time step) as the average velocity during the time step.
+ [IMAGE]

<br>


## equations <small>(using average velocity)</small>
...

<br>


## code <small>(using average velocity)</small>
...

<br>



## working example <small>(for both update rule sets)</small>

||||
| --- | --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-1-uniform-motion.html) | [Code Live](https://pitizzzle.github.io/physics-simulations-balls/code/level-1-uniform-motion.html) | [Code Fiddle](https://jsfiddle.net/pitizzzle/tozgs1c5/2/) |
