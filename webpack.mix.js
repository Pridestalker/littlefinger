const mix = require('laravel-mix');

mix
    .postCss('assets/styles/main.pcss', 'dist/styles')
    .copyDirectory('assets/images', 'dist/images')
    .options({
        postCss: [
            require('postcss-import'),
            require('tailwindcss'),
            require('precss'),
            require('postcss-short-border'),
            require('postcss-short-spacing'),
            require('postcss-color-mod-function'),
            require('autoprefixer')
        ]
    })
