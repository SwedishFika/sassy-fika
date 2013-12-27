# Sassy Fika
The Ghost theme for swedishfika.com
### Documentation

## GETTING STARTED

#### Prerequisites

* Ruby, SASS, Compass
* Node.js & NPM
* Bower

#### Install dependancies

1. Install Ruby - most Macs have it preinstalled. If on Windows, download from http://rubyinstaller.org/. Then run $ gem install compass in terminal
2. From a console / terminal, cd to the root folder of the project
3. Run `npm install`
4. Run `bower install`
5. In Gruntfile.js set values for `ghost_location` and `ghost_theme_name` 


#### Terminal commands

* Initiate watch: `grunt watch`.
* Compile scss using compass: `grunt compass`
* Uglify js: `grunt uglify`
* Combine and minify css: `grunt cssmin`