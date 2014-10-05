---
layout: post
title: <em class="pre-header">Site performance Part 2:</em> Image Optimisation
permalink: /blog/front-end-performance/image-optimisation/
categories: performance, site speed, image optimisation
---





## The low hanging fruit…

###Choosing the correct format
Its important to choose the correct format to get the best image compression to file size ratio. 

####JPEG for Photographs
Generally speaking JPEG is best for photographs, and can be selectively optimised. Due to the nature of the way jpeg compression works, it is often advisable to avoid images with hard lines that need remain crisp, such as text overlays, as these often do not compress well with jpeg. 

#####Selective optimisation
Some graphics software, notably the (almost defunct) Fireworks, will allow selective optimisation. This lets you apply varying levels of compression across different areas of one image, simply by creating a mask and choosing selective optimisation from the menu.

JPEGS can be losslessly compressed using in pagespeed insights automatically from within dev tools.


####<abbr title="Portable Network Graphics">PNG</abbr> or GIF for graphics



####WEBP for the awesome

WEBP is a comparively new format developed by Google specifically to address the issue of filesize. Using webP very often yeilds smaller files with no discernable loss of quality, however support for both generation and rendering is currently limited. <support callout> This can be addressed through server side tools.


###Optimise, then optimise again
There are a a variety of standalone tools and websites for squeezing PNG files event further. I use tinypng.com for its ease of use and overall results. <PNG compression callout> J

optimzilla - mention 

further reading

