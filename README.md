<h1 align="center">
  <img src="./public/logo.png" alt="Borges">
</h1>


From storyboarding, brainstorming, document organization, automated manuscript generation, Borges is an application intended to streamline the authoring process for writers and creatives.


#### :books: A Writing and Organization Toolkit for the 21st Century Author.

## Introduction

Borges is an application intended to streamline the creation process for writers. Everything from storyboarding, brainstorming, document organization, automated manuscript generation, and more are intended features for the tool.

There are other tools in the market that attempt to do the same, but all are meant for desktop environments and only have paid subscription modules. They're also very antiquated (in both functionality and design) and offer no real solutions for the modern author. 

Thus, Borges was developed to provide an open-source, web-based alternative to these legacy programs.

## Table of Contents

- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Updates](#updates)
- [Contributing](#contributing)
- [Credits](#credits)

## System Requirements
- Node.js ~14.15.0
- NPM ~6.14.8

Mostly for my own documentation, Borges currently utilizes the following application infrastructure:

*Focus*                             |  *Tool(s)*
------------------------------------|------------------------------------------------------------------------------------
Engine                              | Node.js
Primary Functions                   | Angular CLI framework
Build and Deployment Automation     | Gulp
Storage                             | MongoDB (via Mongoose middleware)
CI                                  | Gitlab
Testing                             | CodeSource

## :inbox_tray: Installation

To get started, run:

```
npm run setup
```

This will install all required modules, run Gulp task automation, and compile application components. 
Once ready, start the application with:

```
npm start
```

This starts the node backend server at `http://localhost:3000`, you can access Borges at `http://localhost:4200`. 

## Configuration

In development

## Usage

The *Writing Projects Dashboard* (initial view) shows all configurable projects available. By default it will load any projects that have been previously created and saved. Initially when you create a project, you can export it as an XML document, and import it when you want to work on it again. Saving and loading of document files will be added in future release. 

Currently, project schema is:

```xml
<root>
  <project>id</project>
    <projectName>project</projectName>
    <dateCreated>date created</dateCreated>
    <dateUpdated>date updated</dateUpdated>
    <type>story</type>
    <description>description</description>
    <status>status</status>
    <tags>tags</tags>
</root>
```


## Features

In development

## Updates

In development

## Contributing

In development

## Credits

In development

<a href="https://www.buymeacoffee.com/hieronymousbean" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" >
</a>

Please :star: the project if you enjoy it - much appreciated!
