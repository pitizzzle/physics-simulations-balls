
## advanced physics

#### simulating internal friction for collisions
+ For deterministic collisions ...
  - You can simply solve the system of equations for a collision, but replacing the energy conservation equation with the more general factor of $e$.
  $$
  \begin{gathered}
    \begin{vmatrix}
    \quad m_1 \cdot u_1 + m_2 \cdot u_2 = m_1 \cdot v_1 + m_2 \cdot v_2 \quad\\
    e \cdot (u_1 - u_2) = v_2 - v_1
    \end{vmatrix}\\[8pt]
    ...
  \end{gathered}
  $$
  
  - See [here](https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Book%3A_Classical_Mechanics_(Tatum)/05%3A_Collisions/5.04%3A_Oblique_Collisions) for a little bit more information on the coefficient of restitution.
  <br>

+ For spring collisions ...
  - You can try something like applying a factor $e \leq 1$ on the spring force during a collision, but only in the retraction phase (if the objects are already moving away from each other)
  $$
  F = \begin{cases}
    s \cdot k, & \text{if collision and objects are approaching each other}\\
    s \cdot k \cdot e, & \text{if collision and objects moving away from each other}\\
    0, & \text{otherwise}
  \end{cases}
  $$

<br>


#### interpolating the movement of the user's mouse
+ This highly increases precision and user friendliness of mouse constraints.
+ Without interpolating the user's mouse position, the posisition jumps from one point to the next, even if all the balls are simulated using 20 sub steps per frame or so, which can result in weird behavior.
  - For example, if you move your mouse fast enough you can warp trough another object without colliding with it xD.
  - When you interpolate the user's mouse position, this can't happen anymore.
+ Interpolating the user's mouse position means that in each of your sub steps for a frame you interpolate between the current mouse position and the mouse position before that.
  - For this to work you will have to delay the mouse positions that you give your simulation.

<br>


#### dealing with more complex objects like rectangles or even arbitrary polygons, torque simulation, path constraints
+ If you want to understand it yourself..
  - Erik Neumann has assembled explanations and code for almost every simulation you can think of, including arbitrary polygons and r (see [this example](https://www.myphysicslab.com/engine2D/pendulum-clock-en.html)) and torque simulation, and path constraints. Great work!
  - https://www.myphysicslab.com/
  - examples:
    - Polygon Shapes and Torque Simulation https://www.myphysicslab.com/engine2D/shapes-en.html
    - Roller Coaster with Two Balls https://www.myphysicslab.com/roller/roller-double-en.html
  - But beware: things get quite complex pretty fast. I didn't even work through it myself yet. Would be great if one day someone could explain it to me :P
  <br>

+ If you just want to use it..
  - [Matter.js](https://brm.io/matter-js/) is the most prominent library for universal rigid-body simulations.

<br>



## advanced rendering techniques:

#### Motion Blur
+ basic concept:
  - You have to emulate what happens in real film camera.
  - If a red rectangle flies through the image, each pixel in the image only depicts a translucent percentage of that red color, proportional to the time the object was seeable on that pixel.
  - If a pixel "sees" the red for the full life-time of the frame, it is assigned red with 100% opacity. But if a pixel "sees" the red only for 50% of the life-time of the the frame, it is assigned red with 50% opacity.
+ technique 1:
  - divide each frame in $n$ simulation sub-steps, and render your object for each of the sub-steps (in contrast to once for each frame), but all with $100% / n$ opacity (in contrast to $100%$ opacity).
  - Keep in mind that if you have overlaying objects, you have to preserve the layering of them. One way would be to not render the objects in each of the sub-steps, but only save their positions/rotations from each of the sub-steps, and then render after all steps with the right layering.
+ technique 2:
  - Apply motion blur in post-processing on the rendered frame.
  - Use a new initially empty frame buffer as output, so that all the computions can happen on the original frame/buffer without interfering itself.
  - You have to know the pixel velocity of the object you want to blur (the distance the object traveled since the last frame).
  - The "blur" is then simply applied by averaging the pixel values between the current pixel position and the pixel position that results if you substract the pixel velocity from the current pixel position.
  - If you want to take into account rotation, you will need to compute the pixel velocity for each pixel of the object independently. The same holds true for 3D rendering. But here you need projection matrices as well, and z-Buffer. Described more detailly here: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-27-motion-blur-post-processing-effect.
  - This technique is often used in Computer Graphics, because it is easier for Render Engines to apply motion blur in post-processing.
  - But it's definetely way more complex:
    * It's not trivial to average pixels along an axis. You will need interpolation for that.
    * If your object moves into the frame from outside the frame, you will have to average with pixels out of the pixel. Good luck ;)
    * If you have overlaying objects, things become really tricky. You basically have to render the layers one after each other, on top of each other, else it won't look good xD. But for this, your renderer has to output all layers in independent buffers, which contradicts our assumption that we can apply motion blur as simple post-processing on the rendered frame, yo.
