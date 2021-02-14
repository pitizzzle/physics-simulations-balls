## goal
+ Simulate a ball that bounces off all the walls if it touches them.
+ The ball is initially stationary, and gravity is constantly acting on it downwards.

<br>



## equations

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20constants%20---------%7D%0D%0A" /></div><!--
\text{--------- constants ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0A%5Ctext%7B%5Chspace%7B50pt%7D%7D%0D%0Am%20%26%3D%20%5Ctext%7Bconst.%7D%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%5Chspace%7B14pt%7D(mass%20of%20the%20ball)%7D%5C%5C%0D%0Ag%20%26%3D%20%5Ctext%7Bconst.%7D%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%5Chspace%7B14pt%7D(gravity%20constant)%7D%5C%5C%0D%0Ar%26%3D%5Ctext%7Bconst.%7D%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%5Chspace%7B14pt%7D(radius%20of%20the%20ball)%7D%5C%5C%0D%0Aw%26%3D%5Ctext%7Bconst.%7D%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%5Chspace%7B14pt%7D(width%20of%20the%20scene)%7D%5C%5C%0D%0Ah%26%3D%5Ctext%7Bconst.%7D%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%5Chspace%7B14pt%7D(height%20of%20the%20scene)%7D%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
\text{\hspace{50pt}}
m &= \text{const.}\text{\small\color{Gray}\hspace{14pt}(mass of the ball)}\\
g &= \text{const.}\text{\small\color{Gray}\hspace{14pt}(gravity constant)}\\
r&=\text{const.}\text{\small\color{Gray}\hspace{14pt}(radius of the ball)}\\
w&=\text{const.}\text{\small\color{Gray}\hspace{14pt}(width of the scene)}\\
h&=\text{const.}\text{\small\color{Gray}\hspace{14pt}(height of the scene)}\\[8pt]
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20time%20step%20---------%7D%0D%0A" /></div><!--
\text{--------- time step ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20force%2C%20which%20is%20constant%20during%20the%20time%20step)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new force, which is constant during the time step)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0AF_x%20%26%3D%200%5C%5C%5B8pt%5D%0D%0AF_y%20%26%3D%20m%20%5Ccdot%20g%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
F_x &= 0\\[8pt]
F_y &= m \cdot g\\[8pt]
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20acceleration%2C%20which%20is%20constant%20during%20the%20time%20step)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new acceleration, which is constant during the time step)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Aa_x%20%26%3D%20%5Cfrac%7BF_x%7D%7Bm%7D%5C%5C%5B8pt%5D%0D%0Aa_y%20%26%3D%20%5Cfrac%7BF_y%7D%7Bm%7D%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
a_x &= \frac{F_x}{m}\\[8pt]
a_y &= \frac{F_y}{m}\\[8pt]
\end{aligned}
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

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B---------%20wall%20collisions%20---------%7D%0D%0A" /></div><!--
\text{--------- wall collisions ---------}
--><br>

<div align="center"><img src="img/level-3-collision-diagram.svg" alt="level-3-collision-diagram" width="700" /></div>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(left%20and%20right%20wall)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (left and right wall)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Av''_x%20%3D%0D%0A%20%20%20%20%5Cbegin%7Bcases%7D%0D%0A%20%20%20%20%20%20%20%20-%20v'_x%2C%20%26%20%5Ctext%7Bif%7D%5Cquad%20x%20%3C%20r%20%5C%3B%5C%3B%5Cvee%5C%3B%5C%3B%20w-r%20%3C%20x%5C%5C%0D%0A%20%20%20%20%20%20%20%20v'_x%2C%20%26%20%5Ctext%7Botherwise%7D%0D%0A%20%20%20%20%5Cend%7Bcases%7D%5C%5C%5B24pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
v''_x =
    \begin{cases}
        - v'_x, & \text{if}\quad x < r \;\;\vee\;\; w-r < x\\
        v'_x, & \text{otherwise}
    \end{cases}\\[24pt]
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(top%20and%20bottom%20wall)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (top and bottom wall)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Av''_y%20%3D%0D%0A%20%20%20%20%5Cbegin%7Bcases%7D%0D%0A%20%20%20%20%20%20%20%20-%20v'_y%2C%20%26%20%5Ctext%7Bif%7D%5Cquad%20y%20%3C%20r%20%5C%3B%5C%3B%5Cvee%5C%3B%5C%3B%20h-r%20%3C%20y%5C%5C%0D%0A%20%20%20%20%20%20%20%20v'_y%2C%20%26%20%5Ctext%7Botherwise%7D%0D%0A%20%20%20%20%5Cend%7Bcases%7D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
v''_y =
    \begin{cases}
        - v'_y, & \text{if}\quad y < r \;\;\vee\;\; h-r < y\\
        v'_y, & \text{otherwise}
    \end{cases}
\end{aligned}
--><br>

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

const g = 0.7;  // gravity constant

function simulateOneStep(dt) {
    const F_x = 0;
    const F_y = ball.m * g;

    const a_x = F_x / ball.m;
    const a_y = F_y / ball.m;
    
    ball.v_x += dt * a_x;
    ball.v_y += dt * a_y;

    ball.x += dt * ball.v_x;
    ball.y += dt * ball.v_y;

    if (ball.x < ball.r || canvas.w - ball.r < ball.x) {
        ball.v_x *= -1;
    }
    if (ball.y < ball.r || canvas.h - ball.r < ball.y) {
        ball.v_y *= -1;
    }
}
```

<br>


## discussion of the time step equations
+ Again, like in level 2, we have utilized the most simple time step equations, which are slightly less accurate than those that use the average velocity to update the position.
+ But this time, unlike in level 2, you will quickly notice a difference. The ball jumps lower with every bounce off the ground with the simple time step equations.
+ This simplified example illustrates that the problem is again caused by the circumstance that we assume the new velocity (that belongs to the state AFTER the time step) to be constant when updating the position of the ball. The collision is not symmetric, the ball approaches the ground with <img src="https://latex.codecogs.com/svg.latex?v%3D2" /><!--v=2--> but leaves it with only <img src="https://latex.codecogs.com/svg.latex?v%3D-1" /><!--v=-1-->.

<div align="center"><img src="img/level-3-simplified-collision-process-(1).svg" width="500" alt="level-3-simplified-collision-process-(1)" /></div>

+ This is easily fixed by using the average velocity to update the position of the ball, because then the collision becomes symmetric, retracting with the same velocity it approached with.

<div align="center"><img src="img/level-3-simplified-collision-process-(2).svg" width="500" alt="level-3-simplified-collision-process-(2)" /></div>

+ Hint:
  - The problem of asymmetric collisions only applies to special scenarios, like the current one, where a force acts on the ball.
  - In the next level, where we don't have any forces involved, we won't have the problem of asymmetric collisions when we use these simple time step equations instead of the ones with averaged velocity (only the problem of slight physical inaccuracy remains).

<br>


## equations <small>(using average velocity) (only what changed)</small>
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

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Ctext%7B%5Csmall%5Ccolor%7BGray%7D%20(new%20position%2C%20using%20the%20average%20velocity)%7D%0D%0A" /></div><!--
\text{\small\color{Gray} (new position, using the average velocity)}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0D%0A%5Cbegin%7Baligned%7D%0D%0Ax'%20%26%3D%20x%20%2B%20dx%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dx%26%3D%20dt%20%5Ccdot%20%5Cdfrac%7Bv_x%20%2B%20v'_x%7D%7B2%7D%5C%5C%5B8pt%5D%0D%0Ay'%20%26%3D%20y%20%2B%20dy%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dy%26%3D%20dt%20%5Ccdot%20%5Cdfrac%7Bv_y%20%2B%20v'_y%7D%7B2%7D%5C%5C%5B8pt%5D%0D%0A%5Cend%7Baligned%7D%0D%0A" /></div><!--
\begin{aligned}
x' &= x + dx  &  &\leftarrow  &  dx&= dt \cdot \dfrac{v_x + v'_x}{2}\\[8pt]
y' &= y + dy  &  &\leftarrow  &  dy&= dt \cdot \dfrac{v_y + v'_y}{2}\\[8pt]
\end{aligned}
--><br>

<br>



## code <small>(using average velocity) (only what changed)</small>
```js
// ...

function simulateOneStep(dt) {
    // ...
    
    const v_x_old = ball.v_x;
    const v_y_old = ball.v_y;
    ball.v_x += dt * a_x;
    ball.v_y += dt * a_y;
    
    ball.x += dt * 0.5 * (v_x_old + ball.v_x);
    ball.y += dt * 0.5 * (v_y_old + ball.v_y);

    // ...
}
```

<br>



## working example <small>(for all variants)</small>

|||
| --- | --- |
| [Code](https://github.com/pitizzzle/physics-simulations-balls/blob/main/code/level-3-wall-deterministic-collisions.html) | [Code Live](https://pitizzzle.github.io/simulate-ball-physics/code/level-3-wall-deterministic-collisions.html) |