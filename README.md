# Installation

## Prerequisites

- **[WordPress Core:](https://github.com/WordPress/WordPress)** All of the wordpress core files have been ignored in git. You will need to download the latest version and manually copy the core files in to the root folder of the repo.
- **[Composer:](https://getcomposer.org/)** Composer is used to install dependencies for timber.
- **[NodeJS & NPM:](http://nodejs.org/)** Node is used for running grunt tasks.

1. Initialize and update git submodules - `git submodule update --init --recursive`
2. Install Timber's dependencies - `cd wp-content/themes/starter/lib/timber && composer install & cd ../../../../../`
3. Install all node packages - `npm install`
4. Create a database in your MAMP phpMyAdmin and edit the wp-config file to reflect login credentials
5. Point your web server to the project folder
6. Finish installation and begin development!
