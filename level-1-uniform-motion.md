## goal
+ Move the ball uniformly in an arbitrary direction.

<br>

## equations
<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Ctext%7B---------%20constants%20---------%7D%0A" /></div><!--
\text{--------- constants ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Cbegin%7Baligned%7D%0Av_x%20%3D%20const.%20%5C%5C%0Av_y%20%3D%20const.%0A%5Cend%7Baligned%7D%0A" /></div><!--
\begin{aligned}
v_x = const. \\
v_y = const.
\end{aligned}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Ctext%7B---------%20time%20step%20---------%7D%0A" /></div><!--
\text{--------- time step ---------}
--><br>

<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Cbegin%7Baligned%7D%0Ax'%26%3D%20x%20%2B%20dx%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dx%26%3D%20dt%20%5Ccdot%20v_x%5C%5C%0Ay'%26%3D%20y%20%2B%20dy%20%20%26%20%20%26%5Cleftarrow%20%20%26%20%20dy%26%3D%20dt%20%5Ccdot%20v_y%0A%5Cend%7Baligned%7D%0A" /></div><!--
\begin{aligned}
x'&= x + dx  &  &\leftarrow  &  dx&= dt \cdot v_x\\
y'&= y + dy  &  &\leftarrow  &  dy&= dt \cdot v_y
\end{aligned}
--><br>

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
