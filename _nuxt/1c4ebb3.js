(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{499:function(e,n,t){"use strict";t.r(n),n.default="---\nheader: Digital Image Processing\ndescription: Changing images for the better (or worse).\n---\n\n# Finite Impulse Response Filters\n\n$$y[m,n] = \\sum_{k=-N}^N \\sum_{l=-N}^N h[k,l] x[m-k,n-l]$$\n\n# Edge Detection\n\n## Continuous Time Gradient Methods\n\nWe can use the gradient of an image to find edges.\n\n$$\\nabla f(x,y) = \\Bigg[\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y} \\Bigg]$$\n\nIf the gradient is larger than some threshold $T$, we define those as edges.\n\n$$e(x,y) = \\begin{cases}\n1 & |\\nabla f(x,y)| > T \\\\\n0 & \\text{otherwise}\n\\end{cases}$$\n\n## Discrete Time Gradient Methods\n\nIn order to find the gradient, we must use approximations using finite differences. In this case, it is the central difference:\n\n$$\\frac{\\partial f(x,y)}{\\partial x} \\Big|_{x=m\\Delta_x, y=n\\Delta_y} \\approx \\frac{f[m+1,n]-f[m-1,n]}{2\\Delta_x}$$\n\n\n# Resolution Conversion\n\nTo change the resolution of an image, interpolating or decimating is required.\n\n## Interpolation\n\nImage interpolation is the upsampling of an image, or the insertion of data points into the image to increase resolution, then applying a filter to the upsampled image.\n\nProcedurally, if the rate increase is $U$, $U-1$ zeros are inserted between each original data point. Then, apply a filter $H(e^{j\\omega})$.\n\n### Interpolation System\n\n$$x[n] \\rightarrow \n\\boxed{\n  \\uparrow U\n} \\rightarrow\n\\boxed{\n  H(e^{j\\omega})\n} \\rightarrow\ny[n] \\text{}$$\n\n### Upsampling\n\nFirst, upsample the filter by factor $U$.\n\n$$y[n] = \n\\begin{cases} \n\\displaystyle x\\bigg[\\frac{n}{U}\\bigg] & n=KU \\text{ for some } K  \\\\\n0 & \\text{otherwise}\n\\end{cases}$$\n\n$$y[n] = \\sum_{k=-\\infty}^\\infty x[k] \\delta[n-kL]$$\n\n$$Y(e^{jw}) = X(e^{i\\omega U})$$ \n\n### Filter\n\nAfter upsampling, apply a filter to smooth out the image.\n\n$$H(e^{j\\omega}) = U \\sum_{k=-\\infty}^\\infty \\text{rect} \\bigg(U \\cdot \\frac{\\omega - 2\\pi k}{2\\pi} \\bigg)$$\n\n$$h=[n] = \\text{sinc}\\bigg( \\frac{n}{U} \\bigg)$$\n\n$$Y(e^{j\\omega}) = H(e^{j\\omega}) X(e^{j\\omega})$$\n\n## Decmation\n\nImage decimation is the application of a filter, then the deletion of data points between the original ones. Alternatively, it is the extraction of only certain samples of the image.\n\nProcedurally, if the period is $D$, we take only every $D$ point in the image.\n\n### Decimation System\n\n$$x[n] \\rightarrow \n\\boxed{\n  H(e^{j\\omega})\n} \\rightarrow\n\\boxed{\n  \\downarrow D\n} \\rightarrow\ny[n] \\text{}$$\n\n$$Y(e^{j\\omega}) = \\frac{1}{D}\\sum_{k=0}^{D-1} X(e^{i\\omega-2\\pi k /D}$$\n\n### Filter\n\nFirst, filter the image ot remove high freqencies.\n\n$$H(e^{j\\omega}) = \\sum_{k=-\\infty}^\\infty \\text{rect} \\bigg(D \\cdot \\frac{\\omega - 2\\pi k}{2\\pi} \\bigg)$$\n"}}]);