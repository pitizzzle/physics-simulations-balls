## time steps
+ Why time steps?
  - If we have a single moving object, like a ball accelerating downards due to gravity, we could deterministically compute its values (like position and velocity) at any given point in time
    * .... [equations]
  - But if the values of on object depend in a complex interrelated way on other values, like when a ball collides with walls and other balls, we can no longer solve a deterministic equation for its motion. The interactions are too complex to predict their results far into the future.
  - The universal approach to such complex simulations is using **time steps**.

+ How do time steps work?
  - We repeatedly and incrementally compute what will happen over the next small time step of length $dt$ (eg. 1 millisecond).
  - This helps, because for these small time steps we can roughly approximate ...
    * that some values are constant
    * and that no interactions happen during the time steps (only between them)
  - Under these constraints, everything becomes non-complex again, and we can apply our deterministic equations (for each small time step)
    * ... [equations]
  - This methodology is closely related to the concept of [numerical integration](https://en.wikipedia.org/wiki/Numerical_integration) and the [Riemann integral](https://en.wikipedia.org/wiki/Riemann_integral).
   - We don't have 100% accuracy. But our approxmitations are pretty good.
  - And the smaller the time steps, the more accurate the approximation.


<br><br>


## dimensions, coordinate system
+ We stick to 2D simulations.
  - They are a lot easier than 3D simulations but make almost the same amount of fun, because our screens are flat anyway.
+ So we have the $x$ and the $y$ dimension in an cartesian coordinate system.
  - .... [image of the coordinate system]
+ basically all the balls' values become vectors, meaning they're split up in their respective $x$ and $y$ components
  - .... [formulas of split up components]

