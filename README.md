# Bump's Umbraco Backoffice Extension Starter
A starter for building custom one-off Umbraco backoffice extensions with Lit and Vite, without packaging.

It is intended for project-specific tweaks to the backoffice with no intention of versioning or packaging. Consider using the [Opinionated Umbraco Package Starter Template](https://github.com/LottePitcher/opinionated-package-starter) for Umbraco Packages you intend to make available for install.


## Using this starter

1. [Download this repository as a zip](archive/refs/heads/main.zip) & unzip the `My.UmbracoBackofficeExtensions` folder into your solution root
2. Rename the project to suit your needs
3. Add the project to your solution and add a project reference to `My.UmbracoBackofficeExtensions.csproj` in your Umbraco site

## Development

Run `npm run watch` and debug your dot net project with live reload on for instant updates in the backoffice.

Add array elements to the `manifests.js` file to register your extensions.

## Building & Shipping

Building the solution will run the NPM install and Vite build automatically.