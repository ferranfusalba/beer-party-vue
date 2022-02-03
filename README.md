# beer-party-vue

## Welcome
Welcome to Deale's Beer Party App! This SPA will guide you through the different 25 beers that will be available at the party. Choose your favorite one and join us!

Okay, but first, let's explain how to execute the app and some details.

## Install
First, do a `git clone` of this repo. Then, open the cloned folder on your terminal and run `npm install`. Wait a few seconds until it finishes. Next, run `npm run serve` and open your browser on `localhost:8080`. Alternatively, you can visit `beer-party-vue.vercel.app`, but that's not the point.

## Design and navigation
The app has been designed as mobile-first. Although responsive, the desktop view is quite an adaptation of the mobile version, with the elements stretched and centered.

It has been built with Vue, applying the Vue Router to make this app as SPA. I also installed Bootstrap through npm (no CDN links). The app consists of two views:
- The first one, the home, lists all the different 25 beers, each one in a card with some info — name, tagline, thumbnail, and abv & ibu tags.
- The second view is the beer's details. All the data from the JSON reference has been placed in this view. Elements have been ordered, placed in different components (accordions, cards, tags, lists, sausage menu), and styled with background colors and fonts, downloaded from Google Fonts, and installed locally. Also, a popover has been installed (as Bootstrap's original one wasn't functioning well) on the ABV and IBU cards, where they show the definition of those concepts. The second view has the router path `/beer/:id`, where `id` is the id of every object of the JSON (aka, every beer's id).

## Fetching data from API
Regarding API/JSON details, I used Vuex Store (`src/store/index.js`) to manage the data. I created a `beers` array in the state, filled with the data from the API website through an `async function` (although I initially did it on axios).
    - The `Beers.vue` view (the home view) has a local array called `beersList`, filled with the data from the Vuex `beers` array. In this view, a `v-for` div is run 25 times, as it finds 25 items on the `beerList` array. On each item, it adds a `router-link` to router to every id through params, then, inside it shows the card with the details.
    - The detailed `Beer.vue` view has also a local array called `beerLocal`, on which takes the data from the Vuex `beers` array, but with an `params.id` of -1, for the params and the beer details to coincide (to not start with 0). Also, this view has some of its data declared in the `data` function, to access the nested objects or arrays. As some of the values change or return `null` on different items, some `v-if` and `v-for` have been applied to show the correct information in every case (not showing empty spaces, for example). Cases are if IBU, math_temp's duration and method's twist return null or not, and a for loop to iterate through the different items of every ingredient, as for every beer, the number of items is different.

## Components and Styles
Components have also been applied to optimize code that repeats the same structure. The `Tag.vue`, `Method.vue` and `Volume.vue` components are some examples. Some props are passed to change their value in the view, filling it with strings or objects.

The visual structure of the app was made with Bootstrap and CSS. Only flexbox, margins, rows-columns and component structure (cards, accordion) have been declared in the classes of the html files (vue's `template`). The CSS stylesheet serves the local fonts, colors, borders, text-aligns, images behavior, etc.


---
### Original README

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
