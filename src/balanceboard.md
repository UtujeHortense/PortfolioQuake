## IMPLEMENTATION
In order to achieve the final results there was a large effort on all the respective parts of the project: 

_Mechanics_: Create all the necessary parts of the physical robot in respect to measuments and weights.This included;
- The movable bottom part 
- The plate on which the ball would be on
- The tail which in turn is holding the camera on top of the plate(By the way the esthetics of the project was that of a scorpion)

_Electronics_: Handle the wiring and proper electrical connection.Considering the movable part has wheels it also has its own motors which needs to be fed with the right amount of current to move the whole load. 
In addition the plate holding the ball is connected to two servo motors which equally require current to allow the plate to move and recenter the ball.

_Programming_: Make sure the robot has a functional mind capable of :
- Detecting the ball
- Moving the servo to recenter the ball if its out of position, aka PID(Propotional, Integral,Derivative) control. The concept of PID in mechatronics entails the ability of a system to correct errors with the help of inputs given and outputs obtained.
> Example of PID: `the system` is a human being trying to run across a field of a `100m`. The initial input is their current position which is at `0m`, since the objective is being at 100m this produces an error of `100` and there fore they correct by moving forward. The next time they are in the middle of the field at `50m`,once again this produces an error of `50` and so on until the error is `0`.
In the case of this project the PID control surrounds correcting the position of the ball so that it doesn't fall off.
- Respond to joystick commands to move the bottom wheels

### Image acquision
Diving deeper on the programming part, the image treatment was done with python's opencv library and picamera to get the frames being captured by the camera.This had to be optimised in order to get as many frames as posible in real time without lagging.
### Ball tracking
Once the frames were acquired and treated, came the part of recognising the ball from the frame. Even if the camera was positioned to capture just the ball, if anything else was to be put on the plate it would create noise. The solution was to utilise the HSV(Hue Saturation Value) dimensions of the frame in order to pin point a particular color which we designated for the ball (green). In addition to that , the ball had to have the righ amount of radius in combination to the correct hsv value to qualify as the ball.
### Correction
The correction which is the PID control part was implemented with the help of the gpiozero library which allows to send a signal to servo motors. This is a crucial part since knowing that the ball is outside of the favored zone is not enough if its not put back in place.
The signal allowed for the servo to move the plate on both the x and y axis hence the correction.

## Demonstration

<iframe width="494" height="879" src="https://www.youtube.com/embed/TBOKzBPj3-w" title="PID Control and movement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dp9iU0wFddM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	
									

