# Installation

## Prerequisites

- **[WordPress Core:](https://github.com/WordPress/WordPress)** All of the wordpress core files have been ignored in git. You will need to download the latest version and manually copy the core files in to the root folder of the repo. *If you run `npm install` it will automatically grab the Wordpress core and copy the files needed after the installation.
- **[Composer:](https://getcomposer.org/)** Composer is used to install dependencies for timber.
- **[NodeJS & NPM:](http://nodejs.org/)** Node is used for running grunt tasks.

1. Initialize and update git submodules - `git submodule update --init --recursive`
2. Install Timber's dependencies and move back to project root - `cd www/wp-content/themes/audicus/lib/timber && composer install && cd ../../../../../../`
3. Install all node packages - `npm install`
4. Create a database in your MAMP phpMyAdmin and edit the `wp-config.php` file to reflect login credentials
5. Create your own `config.json` file (based on `config-sample.json`) and update db info with your local database info.
6. Run `grunt db_import`
7. Run `grunt db_setup` to prep all files
8. Point your web server to the project folder
9. Finish installation and begin development!

### Grunt Tasks

- `grunt bowercopy` - Downloads front-end deps using bower, copies them to their respective folders, then removes `bower_components/`
- `grunt jshint` - Lints javascript source files
- `grunt uglify` - Concatenates and minifies javascript
- `grunt less` - Compiles less to css
- `grunt watch`  - Polls for changes in files to run `less` `jshint` and `uglify` as well as runs a live reload server
- `grunt build` -  Runs `uglify:site` followed `less:production` followed by `cssmin`
- `grunt setup` -  Runs `bowercopy` followed by `build`
- `grunt db_import` - Imports the database from `db/local.sql` into the database specified in your `config.json`
- `grunt db_dump` - Dumps the database from your localhost into `db/local.sql` **This overwrites anything in this file**
- `grunt` -  Runs `watch`