---
header: Digital Image Processing
description: Changing images for the better (or worse).
---

# Finite Impulse Response Filters

$$y[m,n] = \sum_{k=-N}^N \sum_{l=-N}^N h[k,l] x[m-k,n-l]$$

# Edge Detection

## Continuous Time Gradient Methods

We can use the gradient of an image to find edges.

$$\nabla f(x,y) = \Bigg[\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y} \Bigg]$$

If the gradient is larger than some threshold $T$, we define those as edges.

$$e(x,y) = \begin{cases}
1 & |\nabla f(x,y)| > T \\
0 & \text{otherwise}
\end{cases}$$

## Discrete Time Gradient Methods

In order to find the gradient, we must use approximations using finite differences. In this case, it is the central difference:

$$\frac{\partial f(x,y)}{\partial x} \Big|_{x=m\Delta_x, y=n\Delta_y} \approx \frac{f[m+1,n]-f[m-1,n]}{2\Delta_x}$$


# Resolution Conversion

To change the resolution of an image, interpolating or decimating is required.

## Interpolation

Image interpolation is the upsampling of an image, or the insertion of data points into the image to increase resolution, then applying a filter to the upsampled image.

Procedurally, if the rate increase is $U$, $U-1$ zeros are inserted between each original data point. Then, apply a filter $H(e^{j\omega})$.

### Interpolation System

$$x[n] \rightarrow 
\boxed{
  \uparrow U
} \rightarrow
\boxed{
  H(e^{j\omega})
} \rightarrow
y[n] \text{}$$

### Upsampling

First, upsample the filter by factor $U$.

$$y[n] = 
\begin{cases} 
\displaystyle x\bigg[\frac{n}{U}\bigg] & n=KU \text{ for some } K  \\
0 & \text{otherwise}
\end{cases}$$

$$y[n] = \sum_{k=-\infty}^\infty x[k] \delta[n-kL]$$

$$Y(e^{jw}) = X(e^{i\omega U})$$ 

### Filter

After upsampling, apply a filter to smooth out the image.

$$H(e^{j\omega}) = U \sum_{k=-\infty}^\infty \text{rect} \bigg(U \cdot \frac{\omega - 2\pi k}{2\pi} \bigg)$$

$$h=[n] = \text{sinc}\bigg( \frac{n}{U} \bigg)$$

$$Y(e^{j\omega}) = H(e^{j\omega}) X(e^{j\omega})$$

## Decimation

Image decimation is the application of a filter, then the deletion of data points between the original ones. Alternatively, it is the extraction of only certain samples of the image.

Procedurally, if the period is $D$, we take only every $D$ point in the image.

### Decimation System

$$x[n] \rightarrow 
\boxed{
  H(e^{j\omega})
} \rightarrow
\boxed{
  \downarrow D
} \rightarrow
y[n] \text{}$$

$$Y(e^{j\omega}) = \frac{1}{D}\sum_{k=0}^{D-1} X(e^{i\omega-2\pi k /D}$$

### Filter

First, filter the image ot remove high freqencies.

$$H(e^{j\omega}) = \sum_{k=-\infty}^\infty \text{rect} \bigg(D \cdot \frac{\omega - 2\pi k}{2\pi} \bigg)$$
