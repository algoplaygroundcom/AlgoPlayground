Specification of what I want `kalman3 - update` to contain:

An introduction, of course.

Then, the measurement model: describe how the measurement is modeled as a multiplication by the observation matrix \( H \), with added measurement noise. Provide a brief description of how this models the real-world sensor process.

Next, build the Kalman Gain and the update step from the ground up. Emphasize that the core idea is to determine what we trust more — the prediction from the model, or the measurement. We compare each using their expected errors, aiming to find an optimal balance.

Start by computing the innovation, defined as the difference between the measurement \( z \) and the predicted measurement \( H \hat{x}_{prior} \). This innovation represents the discrepancy between what we observed and what we expected based on our model — effectively, it is the error we witnessed.

To determine how significant this innovation is, we compare it to the expected uncertainty in the measurement. We begin with the prior error covariance \( P \), project it into the measurement space using \( H \) and \( H^\top \), and add the measurement noise covariance \( R \). This gives us the innovation covariance: \( S = HPH^\top + R \). To normalize the innovation, we invert \( S \).

The Kalman Gain is then constructed as:
\[
K = P H^\top S^{-1}
\]
It represents how much weight we give the innovation when updating our belief. If the gain is low, it means the model's prediction was more trustworthy (i.e., the expected error was small compared to the observed innovation). If the gain is high, it suggests that the observed discrepancy was larger than expected, meaning the model was likely inaccurate, and we should trust the measurement more.

Finally, we apply the Kalman Gain to the innovation and add the result to the prior state estimate. This yields the updated state estimate:
\[
\hat{x}_{posterior} = \hat{x}_{prior} + K (z - H \hat{x}_{prior})
\]


## 🌀 Interactive Animation 1: Innovation Visualization with a Pendulum

To help users intuitively understand the concept of innovation in the Kalman Filter update step, we begin with a focused animation showing the relationship between the true state, the model prediction, and noisy measurements.
This animation takes place right after the explanation about innovation.

### 🎯 Goal
Illustrate how measurements differ from the model's predicted state, and how this discrepancy (innovation) is affected by measurement noise.

### 👁️ Visual Elements
- **Red pendulum**: the true simulated pendulum angle (ground truth).
- **Blue pendulum**: the model's predicted angle (not yet updated by measurements).
- **Faint gray dots**: noisy measurements of the red pendulum’s angle, appearing briefly around it.
- **Thin arrows**: from each measurement dot to the blue (model) pendulum, representing the innovation at that moment. Each arrow fades and disappears with the measurement dot.

### 🖱️ User Controls
- **Slider for measurement noise (R)**: controls the spread (variance) of the measurement dots.
- **Button**: 'Play/Pause' to control the animation loop.

### 🔄 What the animation will do
1. Simulate a physical pendulum (red) and a model pendulum (blue) moving in parallel (blue may be incorrect).
2. At each timestep:
   - Generate noisy measurements around the red pendulum.
   - Display temporary measurement points.
   - Draw faint arrows from each measurement to the blue pendulum position to show the innovation.
3. Let the user adjust measurement noise in real time to see how measurement quality influences the observed innovation.

This will serve as the first of two animations. The second will build on this to demonstrate the update step and Kalman Gain behavior.
