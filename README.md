# Vue Front-End Example

## read doc before using VUE  
- official manual : https://cn.vuejs.org/v2/guide/index.html
- migration Vue 1.x to 2.x : https://cn.vuejs.org/v2/guide/migration.html


## install Vue
### install node & npm
https://nodejs.org/en/download/ , download the latest LTS version.

### install vue for global command
```
npm install -g @vue/cli
``` 

 
---

## init Project by Vue CLI 
```
vue create project-name 
```

---

## init Project by Vue UI
```
vue ui
```
### next step 
Please follow the instructions on the page to create a project.


---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---
## VS Code
download from : [https://code.visualstudio.com/](https://code.visualstudio.com/)


### plugin
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Preview on Web Server](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server) 


## Intellij IDEA Ultimate plugin
- NodeJS
- Vue.js

---
Folder structure
- [public](public) : Any static assets placed in the [public](public) folder will simply be copied and not go through webpack. You need to reference them using absolute paths.
- [asserts](src/assets) : Assets like images or fonts can be stored here. Webpack can process these (ie. fingerprinting). For many cases, however, we will try to keep most files inside their respective src/features/ folder so that the project is sliced more vertical and split up by "Business Domain". 
- [components](src/components) : Any cross-cutting [components](src/components) live here. Read about the "src/features/" folder further down to understand the difference between cross-cutting components and components within a feature.
- [views](src/views) : One Page maps a Vue file and mpas to the settings in View Router
