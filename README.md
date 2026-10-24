# Simplified static website for cataloging/sharing bug photos
using Eleventy static site generate that runs off of Nodejs

build - `npx @11ty/eleventy`
serve with reload - `npx @11ty/eleventy --serve`

html templated using nunjuks which is similar to jinja


### Image formats
iphone images use heic. image search seems to require jpg, png, or webp. avif or webp seem to have the best compression/quality for displaying on the website.

Previously was converting everything to jpg and using window's photo app to edit images. Switching to avif to save space and better quality images.

Can use gimp to crop images and save as avif (check fixed aspect ratio and enter a ratio e.g. `5:4`, export as avif with exif metadata).

Can also use [imagemagick](https://imagemagick.org/download/#windows) command to bulk convert images (should keep metadata and have good quality/size balance)
`magick input.heic output.avif`
`magick mogrify -format avif *.heic`

May need to convert images to jpg for online image search and to avif for inclusion in the site itself.


### Converting Data Files
find:
"scientific":(.*),
and replace:
"scientific":$1,
    "order": "Araneae",

and 
"name":(.*),
"id":$1,
    "name":$1,