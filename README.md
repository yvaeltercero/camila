# camila
Responsive and absolute-free skin for Roundcube

## Features

* Works with Roundcube v1.3.X
* Based in Larry skin
* Implemented to be a responsive alternative to default skin in Roundcube
* Highly customizable (uses SASS stylesheets and variables)
* Approach to avoid absolute positioning
* Uses flex, viewport measuring and grid system to group content in responsive interfaces

## Installation

To install, download a copy of the master branch and place it in the `skins` directory of your Roundcube installation directory.

Then, update your current configuration (`config.inc.php`) to set the skin property:

```
$config['skin'] = 'camila'
```

## To-do

* Cleaning up some parts of the code
* Review some issues with the compose page
* Accesibility analysis
* Code review and issues solving

## Work in progress

`camila` is a work in progress effort, so if you give it a try and want to offer some feedback or report a problem, please do it in the Issues page. If want to make a contribution, please feel free to send a pull request.
