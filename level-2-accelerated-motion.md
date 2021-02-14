## goal
+ Let an initially stationary ball accelerate by simulating the push of a random but constant force.

<br>

## equations
<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20constants%20---------%7D%0D%0A" /></div><!--
\text{--------- constants ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0AF_x%20%26%3D%20const.%20%5C%5C%0D%0AF_y%20%26%3D%20const.%20%5C%5C%0D%0Am%20%26%3D%20const.%20%5C%5C%5B2pt%5D%0D%0Aa_x%20%26%3D%20%5Cdfrac%7BF_x%7D%7Bm%7D%20%3D%20const.%20%5C%5C%5B6pt%5D%0D%0Aa_y%20%26%3D%20%5Cdfrac%7BF_y%7D%7Bm%7D%20%3D%20const.%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
F_x &= const. \\
F_y &= const. \\
m &= const. \\[2pt]
a_x &= \dfrac{F_x}{m} = const. \\[6pt]
a_y &= \dfrac{F_y}{m} = const.\\[8pt]
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20time%20step%20---------%7D%0D%0A" /></div><!--
\text{--------- time step ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20velocity%20after%20the%20time%20step)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new velocity after the time step)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Av'_x%20%26%3D%20v_x%20%2B%20dv_x%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dv_x%20%26%3D%20dt%20%5Ccdot%20a_x%5C%5C%0D%0Av'_y%20%26%3D%20v_y%20%2B%20dv_y%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dv_y%20%26%3D%20dt%20%5Ccdot%20a_y%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
v'_x &= v_x + dv_x  &  &\leftarrow  &  dv_x &= dt \cdot a_x\\
v'_y &= v_y + dv_y  &  &\leftarrow  &  dv_y &= dt \cdot a_y\\[8pt]
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20position%2C%20using%20the%20new%20velocity)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new position, using the new velocity)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Ax'%26%3D%20x%20%2B%20dx%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dx%26%3D%20dt%20%5Ccdot%20v'_x%5C%5C%0D%0Ay'%26%3D%20y%20%2B%20dy%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dy%26%3D%20dt%20%5Ccdot%20v'_y%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
x'&= x + dx  &  &\leftarrow  &  dx&= dt \cdot v'_x\\
y'&= y + dy  &  &\leftarrow  &  dy&= dt \cdot v'_y\\[8pt]
\end{aligned}
--><br>

<br>

## code equivalent
```js
const ball = {
    x: 0.5 * canvas.w,  // center of canvas
    y: 0.5 * canvas.h,  //
    v_x: 0,  // initially stationary
    v_y: 0,  //
    m: 1,
};

const F_x = Math.random() * 0.4 - 0.2;  // random value in interval [-0.2; 0.2)
const F_y = Math.random() * 0.4 - 0.2;  //

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

## discussion of the time step equations
+ If you pay close attention to the time step equations above, you will notice that they're not 100% physically accurate.
+ The ball's position is always updated using the new velocity (that belongs to the state AFTER the time step), assuming this new velocity is already present and constant during the time step itself.
  <div align="center"><img src="img/level-2-v-t-diagram-(1).svg" alt="level-2-v-t-diagram-(1)" width="400" /></div>

+ In reality, this should not be the case. During the time step, to update the position we should assume that the velocity changes linearly from the start velocity to the new velocity, instead of having the new velocity all the time.
  <div align="center"><img src="img/level-2-v-t-diagram-(2).svg" alt="level-2-v-t-diagram-(2)" width="400" /></div>

+ To correct our time step equations in that regard, to update the position we can simply use the average velocity for each time step (ie. the mean of the old velocity and the new velocity), which is equivalent to the linear change from above.
  <div align="center"><img src="img/level-2-v-t-diagram-(3).svg" alt="level-2-v-t-diagram-(3)" width="400" /></div>

+ And then, how big is the error of our initial time step equations, compared to the physically correct ones?
  - The velocities after each time step are 100% identical.
  - The position has an error, as we already figured out.
  - Looking at the diagrams, we can clearly see, that the <img src="https://latex.codecogs.com/svg.latex?v(t)" /><!--v(t)--> graph of our initial time step equations is just shifted upwards by <img src="https://latex.codecogs.com/svg.latex?0.5%20%5Ccdot%20a%20%5Ccdot%201dt" /><!--0.5 \cdot a \cdot 1dt--> compared to the phyiscally correct time step equations.
  <div align="center"><img src="img/level-2-v-t-diagram-(4).svg" alt="level-2-v-t-diagram-(4)" width="400" /></div>

  - This means the error of our initial simple time step equations becomes smaller (relatively speaking) if we travel at high velocity, and it becomes smaller as well if we make the time steps smaller.
  <div align="center"><img src="img/level-2-v-t-diagram-(5).svg" alt="level-2-v-t-diagram-(5)" width="400" /></div>

+ To summarize, ..
  - We could use the initial simple time step equations and would probably don't see a difference.
  - But theoretically, it becomes slightly more physically accurate if we use the average velocity to update the position, because compared to our initial time step equations there is a small error margin.

<br>


## equations <small>(using average velocity) (only what changed)</small>
<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20time%20step%20---------%7D%0D%0A" /></div><!--
\text{--------- time step ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20position%2C%20using%20the%20average%20velocity)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new position, using the average velocity)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Ax'%26%3D%20x%20%2B%20dx%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dx%26%3D%20dt%20%5Ccdot%20%5Cdfrac%7Bv_x%20%2B%20v'_x%7D%7B2%7D%5C%5C%5B8pt%5D%0D%0Ay'%26%3D%20y%20%2B%20dy%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dy%26%3D%20dt%20%5Ccdot%20%5Cdfrac%7Bv_y%20%2B%20v'_y%7D%7B2%7D%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
x'&= x + dx  &  &\leftarrow  &  dx&= dt \cdot \dfrac{v_x + v'_x}{2}\\[8pt]
y'&= y + dy  &  &\leftarrow  &  dy&= dt \cdot \dfrac{v_y + v'_y}{2}\\[8pt]
\end{aligned}
--><br>

<br>


## code equivalent <small>(using average velocity) (only what changed)</small>
```js
// ...

function simulateOneStep(dt) {
    const a_x = F_x / ball.m;
    const a_y = F_y / ball.m;
    const v_x_old = ball.v_x;
    const v_y_old = ball.v_y;
    ball.v_x += dt * a_x;
    ball.v_y += dt * a_y;
    ball.x += dt * 0.5 * (v_x_old + ball.v_x);
    ball.y += dt * 0.5 * (v_y_old + ball.v_y);
}
```

<br>


## working example <small>(for all variants)</small>

|||
| --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-2-accelerated-motion.html) | [Code Live](https://pitizzzle.github.io/simulate-ball-physics/code/level-2-accelerated-motion.html) |
