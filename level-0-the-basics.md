## time steps
+ If we had a single moving object, like a ball accelerating downwards due to gravity, we could deterministically compute its physical variables (like position and velocity) as a function of time ...
<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Cbegin%7Baligned%7D%0Ay(t)%20%26%3D%20%5Cdfrac%7Bg%7D%7B2%7D%20%5Ccdot%20t%5E2%5C%5C%0Av(t)%20%26%3D%20g%20%5Ccdot%20t%0A%5Cend%7Baligned%7D%0A" /></div><!--
\begin{aligned}
y(t) &= \dfrac{g}{2} \cdot t^2\\
v(t) &= g \cdot t
\end{aligned}
--><br>
+ But in more complex simulations the position and velocity of a moving object depend on the interactions it has with its environment, whose results we most oftenly can't easily express as a function of time.
  - Example: If we simulate the balls on a billiard table (like we will do, starting in level 4), the collisions between the balls are too complex and interrelated to be able to predict the position of each ball as a function of time.
  <div align="center"><img src="img/level-6-billiard-example.gif" alt="level-6-billiard-example" width="420" /></div>

+ The universal approach to such complex simulations is breaking it up into small incremental **time steps** (eg. time steps of length 1 millisecond).

  <div align="center"><img src="img/level-0-time-step-diagram.svg" alt="level-0-time-step-diagram" width="420" /></div>

<!-- + A methodology quite similar to the concept of [numerical integration](https://en.wikipedia.org/wiki/Numerical_integration) and the [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral). -->

+ Because the time steps are really small, we are allowed the following approximations:
  * (1. Approxim.) The motion update which happens during each time step is free/uninterrupted from any interactions/collisions. Only after (or before) the motion update in each time step we check for and execute updates for any interactions/collisions. This eliminates the complex interrelation of motion and interactions/collisions. We simply divide it into to distinct procedures.
  * (2. Approxim.) Physical variables like the velocity or the acceleration of an object may be assumed to be constant during a time step, because they should not change much during such small time anyway.
+ Because of these two approximations, our simulations are not 100% accurate. But they're pretty close. And the smaller the time steps, the more accurate the approximation.
+ To get the time steps really small, you will often want to have more than one time step per frame, because your render frame rate is typically only 60Hz or lower.
  - In our code examples we use a fixed number of **sub-steps** per frame, eg. 20 sub-steps per frame.
+ And finally one last thing. There are different "styles" of updating the physical variables of objects like position, velocity and acceleration with the time step equations. I call them "styles" because all of them are just approximations.
  - A common difference between these styles of updating motion in the time step equations is whether they assume forces and velocities to be strictly constant during the time step or if they actually take some kind of averaging approach, for example assuming the physical variables change linearly from one state to another.
  - Don't worry about this, for now. This concept will be revisited a couple of times.
<!--
+ Example:
  - The most simple and straight-forward way of doing a motion update is computing the sum of forces on our object based on the current state, then compute the acceleration equivalent of that force, then assume this acceleration to be constant for the period of this time step and compute the velocity for after the time step, then use this new velocity or the old velocity to compute the new position of the object after the time step.
  - A more advanced
+ We will explore different styles of motion updates in the following levels. For now, just understand that there is not one right way to do it.
+ A critical characteristic of update rules in general is that update rules are () not right or wrong. All update rule sets are only approximations, or "styles" to simulate something.
+ They differ in ..
  - complexity (less is better)
  - and accuracy/realism (more is better)
+ [NOT TESTED YET] it seems like there is always a clear winner in terams of accuracy, but it's usually the most complex, and it depends on the circumstance how much we can step down and still have accurate results
+ The accuracy and realism of a set of update rules depends on the concrete circumstances in your simulation.
  - See "Level 3 - Wall Collisions Deterministic" as a good example for that. Especially if you compare with "XXXXXX" (Level 6? averaged velocities for spring collisions)
+ So you have to assess which update rules are best suited for your simulation. It's not always that easy.
  - Either you go the theoretical path, trying to figure out on paper which appromixations are most accurate, ..
  - or you go the practical path, simply piting different update rule sets against each other and comparing their results (which is often easier and faster, but may leave some insights undiscovered).
-->
<br><br>



## collisions
+ A collision between two simulated objects (eg. a ball and another ball) is detected by checking whether their geometric shapes (circles in our case) overlap. Because if they overlap, the objects must have bumped into each other.
  <div align="center"><img src="img/level-0-collision-diagram-(1).gif" alt="level-0-collision-diagram-(1)" width="250" /></div>
+ The same applies to a collision between a ball and a wall. If the ball "sticks" in the wall (overlaps with it) it must have bumped into it.
  <div align="center"><img src="img/level-0-collision-diagram-(2).gif" alt="level-0-collision-diagram-(2)" width="250" /></div>

<br><br>



## dimensions, coordinate system
+ We stick to 2D simulations.
  - 3D simulations would basically work the same way, but we don't want to rush, right? 😁
+ So we have the <img src="https://latex.codecogs.com/svg.latex?x" /><!--x--> and the <img src="https://latex.codecogs.com/svg.latex?y" /><!--y--> dimension in a cartesian coordinate system.
  <div align="center"><img src="img/level-0-coordinate-system.svg" alt="level-0-coordinate-system" width="350" /></div>
+ Some physical variables of the balls thereby become vectors, meaning they're split up in their respective <img src="https://latex.codecogs.com/svg.latex?x" /><!--x--> and <img src="https://latex.codecogs.com/svg.latex?y" /><!--y--> components:
<div align="center"><img src="https://latex.codecogs.com/svg.latex?%0A%5Cvec%7Bp%7D%20%3D%20%5Cbegin%7Bpmatrix%7Dx%5C%5C%20y%5Cend%7Bpmatrix%7D%20%5Cquad%0A%5Cvec%7Bv%7D%20%3D%20%5Cbegin%7Bpmatrix%7Dv_x%5C%5C%20v_y%5Cend%7Bpmatrix%7D%20%5Cquad%0A%5Cvec%7Ba%7D%20%3D%20%5Cbegin%7Bpmatrix%7Da_x%5C%5C%20a_y%5Cend%7Bpmatrix%7D%0A" /></div><!--
\vec{p} = \begin{pmatrix}x\\ y\end{pmatrix} \quad
\vec{v} = \begin{pmatrix}v_x\\ v_y\end{pmatrix} \quad
\vec{a} = \begin{pmatrix}a_x\\ a_y\end{pmatrix}
--><br>

