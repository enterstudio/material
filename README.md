Demo and Documention: https://blox.src.zone/material

The Blox Material angular library provides an integration between
[Google's Material Components for the Web](https://github.com/material-components/material-components-web)
and [Angular](https://angular.io).

Blox Material makes it possible to create beautiful apps with modular and customizable UI components,
designed according to the [Material Design Guideliness](https://material.io/guidelines).

The integration between Blox Material and the underlying Material Components for the Web,
is done by providing Angular Directives.

## Status 

Component                | Directives | Comments
------------------------ | --------- |
button                   | [See demo](https://blox.src.zone/material#/directives/button) |
card                     | [See demo](https://blox.src.zone/material#/directives/card) |
checkbox                 | [See demo](https://blox.src.zone/material#/directives/checkbox) |
dialog                   |           |
drawer                   |           |
fab                      | [See demo](https://blox.src.zone/material#/directives/fab) |
form-field               | Available |
grid-list                |           |
icon-toggle              | [See demo](https://blox.src.zone/material#/directives/icon-toggle) |
layout-grid              |           |
linear-progress          |           |
list                     |           |
menu                     |           |
radio                    | [See demo](https://blox.src.zone/material#/directives/radio) |
ripple                   |           | See AbstractMdcRipple for attaching ripples to other components/directives
select                   |           |
selection-control        |           |
slider                   |           |
snackbar                 | Available |
switch                   |           |
tabs                     | [See demo](https://blox.src.zone/material#/directives/tab) |
textfield                | [See demo](https://blox.src.zone/material#/directives/textfield) |
toolbar                  | [See demo](https://blox.src.zone/material#/directives/toolbar) |

## Alternatives
* [Material2](https://material.angular.io):
  The Angular team's Material Design components built for and with Angular.
  When you use Angular exclusively this is a nice alternative for creating a Material
  Design UI.
  Blox Material really shines when creating user interfaces for both Angular and non-Angular
  applications, as you can leverage the same Material Components and Styling in both cases.
* [angular-mdc-web](https://github.com/trimox/angular-mdc-web):
  Another integration library for leveraging Material Components for the Web in Angular
  applications. The angular-mdc-web integration is mostly based upon Angular Components.
  Blox Material uses Angular Directives for the integration.
  There are advantages to both approaches.
  The Directives approach taken by Blox Material makes it possible to share the same markup
  and styling between both Angular and non-Angular applications.

## Quick Links
*  [Demo, documentation and examples](https://blox.src.zone/material)