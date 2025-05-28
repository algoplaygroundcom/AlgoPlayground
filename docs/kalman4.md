specification of what i want 'kalman4 - full implementation' to contain:

at the start, i want it to contain an explanation of how to whole system works.
initially, the state vector is intitalized to be the best first guess of the system states, and the 
covariance matrix is set to be the initial uncertinty.

the kalman filter's purpose is to output estimations of the system's state, at a given rate.
measurements start arriving, sometimes at a certian rate, sometimes at a variable rate.
when each measurement arrives, the kalman filter updates it's current state and covariance, and continues to output the state estimates.

then an explanation about the visualization we are going to see, with a little twist in it - the kalman filter's dynamic model is not accurate, and there is optionally a little wind blowing towards the right side.

then, i want an animation. the animation contains a real and a model pendulum, both swinging. the user can control using a slider the:
- measurement noise (R), which affects the spread of the measurement points around the real pendulum.
- measurement rate, which affects how often the measurements arrive.
- delta t, which affects the time step of the simulation.
- model error Q, which affects the process noise covariance, simulating inaccuracies in the model.
- wind speed, which affects the real pendulum's motion. (default - 0)
- at any time, the user can click a button to stop the measurement updates, and then click it again to resume them.
- the user can also click a button to reset the simulation, which will reset the pendulums and the state vector.

aside from the pendulums, the user will see a graph with the state vector's angle and variance compared to the real, and another graph for the angular velocity and variance compared to the real.

after that ,