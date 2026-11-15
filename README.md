# Static website for cataloging/sharing bug photos

Built using Eleventy.

Site is deployed on github pages at https://michael-wojdak.github.io/buggy-website

## Eleventy Info
build - `npx @11ty/eleventy`
serve with reload - `npx @11ty/eleventy --serve`

html templated using nunjuks which is similar to jinja

files in the `src/_data` folder are data files that are available to all templates. The `bug_data.html` template is to copy the entry data to the site
proper so js scripts can interact with it.

files in the `src/_includes` folder contain reusable code that can be used in other templates but do not get compiled into the site themselves.

Google fonts is a good place to find interesting fonts to use.

## Github Pages
default url is `username.github.io/repo-name`, which uses the repo name as the base unlike local builds which just use `/`. The `HtmlBasePlugin` should
automatically convert paths for html elements (images, stylesheets, links) using the `--pathprefix` option. Use `"{{ '/path' | htmlBaseUrl }}"` to manually
apply the correct site base url so everything works both locally and on github pages.


### Image formats
iphone images use heic. Currently going with .avif since it seems to have the good compression/quality and Google image search recently added support for it.

Previously was converting everything to jpg and using window's photo app to edit images. Switching to avif to save space and keep better quality images.

Can use gimp to crop images and save as avif (check fixed aspect ratio and enter a ratio e.g. `4:3`, export as avif with exif metadata).

Can also use [imagemagick](https://imagemagick.org/download/#windows) command to bulk convert images (should keep metadata and have good quality/size balance)
`magick input.heic output.avif`
`magick mogrify -format avif *.heic`

