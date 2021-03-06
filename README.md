[![GitHub issues](https://img.shields.io/github/issues/penrique/ngx-formly-components.svg)](https://github.com/penrique/ngx-formly-components/issues)
[![GitHub stars](https://img.shields.io/github/stars/penrique/ngx-formly-components.svg)](https://github.com/penrique/ngx-formly-components/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/penrique/ngx-formly-components/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/penrique/ngx-formly-components.svg?style=social)](https://twitter.com/intent/tweet?text=https://github.com/penrique/ngx-formly-components)

### Notice:
This is still a work in progress, not to be used in production environments... yet.

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Running the demo](#running-the-demo)
4. [Components](#components)
5. [Wrappers](#wrappers)
6. [Demo Code](#demo-code)

# Getting Started
Ngx-formly-components is an Angular 4+ module which contains a set of ready-to-use, easily configurable components to aid those who seek to create and mantain forms on the fly almost effortlessly.
It is designed to work along with [@angular/material](https://github.com/angular/material2) and [ng-formly](https://github.com/formly-js/ng-formly), which means you'll get really cool looking JSON configurable forms.

To get started there's a couple of steps required by angular material you'll have to complete before being able to use any components properly:

#### 1. Include a theme 
Including a theme is required to apply all of the core and theme styles to your application.
To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:
```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```
If you are not using the Angular CLI, you can include a prebuilt theme via a <link> element in your index.html.
For more information on theming and instructions on how to create a custom theme, see the [theming guide](https://material.angular.io/guide/theming).

#### 2. Add material icons
Include this line in your index.html if you don't plan on hosting the icons yourself:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet">
```
Otherwise you first have to download the icon font:
```bash
npm install material-design-icons --save
```
Once that's done downloading browse your node_modules folder and copy the iconfont folder from inside the material-design-icons folder to your project's assets folder.
Afterwards include `assets/material/iconfont/material-icons.css` to your project and you're set.


# Installation instructions
Install ngx-formly-components from [npm](www.npmjs.com/)
```bash
npm install ngx-formly-components@latest --save
```

Import `FormlyComponentsModule`
```ts
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormlyComponentsModule } from 'ngx-formly-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormlyComponentsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Running the demo
```bash
> npm install
> ng serve
>>> Open your browser on `http://localhost:4200`
```

# Components
### **Input**
---
| Input         | Type                  |
|---------------|-----------------------|
| `placeholder` | string                |
| `disabled`    | boolean               |
| `format`      | (e: string) => string |
| `source`      | Observable<string[]>  |
| `keydown`     | (e: any)=>void        |
| `password`    | boolean               |
| `maxLength`   | number                |

`@source`: A list which enables autocomplete capabilities

### **Textarea**
| Input         | Type                             |
|---------------|----------------------------------|
| `placeholder` | string                           |
| `disabled`    | boolean                          |
| `format`      | (e: string) => string            |
| `keydown`     | (e: any, shift: boolean)=>void   |
| `maxLength`   | number                           |
| `minRows`     | number                           |
| `maxRows`     | number                           |

### **Select**
---
| Input         | Type                  |
|---------------|-----------------------|
| `placeholder` | string                |
| `disabled`    | boolean               |
| `format`      | (e: string) => string |
| `nonull`      | boolean               |
| `maxRows`     | number                |
| `minRows`     | number                |
| `maxLength`   | number                |
| `changed`     | (e: any) => void      |

### **Select-Autocomplete**
---
| Input            | Type                                                   
|------------------|---------------------------------------------------------|
| `placeholder`    | string                                                  |
| `disabled`       | boolean                                                 |
| `source`         | Observable<{ name: string, value: string \| number }[]> |
| `nonull`         | boolean                                                 |
| `tooltip`        | 'before'\|'after'\|'above'\|'below'\|'left'\|'right'    |
| `debounceTime`   | number                                                  |
| `changed`        | (e: any) => void                                        |

### **Autocomplete**
---
| Input            | Type                                                                    |
|------------------|-------------------------------------------------------------------------|
| `placeholder`    | string                                                                  |
| `disabled`       | boolean                                                                 |
| `source`         | (e: string)=>Observable<{ name: string, value: string \|value: 2 }])}   |
| `tooltip`        | 'before'\|'after'\|'above'\|'below'\|'left'\|'right'                    |
| `debounceTime`   | number                                                                  |
| `changed`        | (e: any) => void                                                        |

### **Checklist**
| Input      | Type    | Example      |
|------------|---------|--------------|
| `text`     | string  | 'I agree'    |
| `disabled` | boolean | true         |

### **Datetime**
| Input         | Type                 |
|---------------|----------------------|
| `placeholder` | string               |
| `disabled`    | boolean              |
| `format`      | string               |
| `tooltip`     | string               |
| `mask`        | (string \| RegExp)[] |

### **Chips**
| Input              | Type                 |
|--------------------|----------------------|
| `placeholder`      | string               |
| `disabled`         | boolean              |
| `source`           | Observable<string[]> |
| `onlyAutocomplete` | boolean              |
| `maxItems`         | number               |
| `changed`         | (e: any) => void      |

### **Address-Picker**
> Not yet documented
### **Repeated-Section**
> Not yet documented
### **Blank**
> Just a blank, can be useful. Might want to check out `app.component.ts`

# Wrappers
* **Section**
* **Split**
* **Card**

# Demo code
### All available components are being used in the demo code, check out `app.component.ts` for more detailed information on how to use each. 

# Issues
### Feel free to submit any issues or features you want to see in the future! Happy coding!
