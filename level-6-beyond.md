
## advanced physics

### dealing with more complex objects (like rectangles or even arbitrary polygons)
+ if you want to understand it
  - Erik Neumann has assembled explanations and code for almost every simulation you can think of. Great work!
  - https://www.myphysicslab.com/
  - But beware: things get really complex pretty fast. I did not even work through it myself yet. Would be great if someone could explain it to me on day :P

+ if you just want to use it
  - [Matter.js](https://brm.io/matter-js/) is the most prominent library for universal rigid-body simulations.

<br>



## advanced rendering techniques:

### Motion Blur
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

