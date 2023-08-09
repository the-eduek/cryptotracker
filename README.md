# cryptotracker 2.0

## live

[the-eduek.github.io/cryptotracker](https://the-eduek.github.io/cryptotracker/)

cryptotracker gives users a list of top performing cryptocurrencies by market volume. users can add currencies they are interested in to a watchlist without the need for signing up or logging in. users can also make conversions from selected currencies to crypto coins in their watchlist or the more popular crypto coins.

## features

#### users can see crypto coins according to market volume
  ||
  | ------------- |
  | <img title='home page screenshot' src='./docs/img/home.jpeg' /> |
  | home page screenshot (v 2.0) |	



#### users can add coins to watchlist and see them anytime
  ||
  | ------------- |
  | <img title='watchlist page screenshot' src='./docs/img/watchlist.jpeg' /> |
  | watchlist page screenshot (v 2.0) |



#### users can convert between major currencies and more popular crypto coins by default, or convert between major currencies and crypto coins in their watchlist.
  ||
  | ------------- | 
  | <img title='convert page screenshot' src='./docs/img/convert.jpeg' /> |
  | convert page screenshot (v 2.0) |



#### new settings tab for customizable user options.
  ||
  | ------------- | 
  | <img title='seitings page screenshot' src='./docs/img/settings.jpeg' /> |
  | settings page screenshot (v 2.0) |



#### dark mode.
  ||||
  | ------------- | ------------- | ------------- |
  | <img title='watchlist page dark mode screenshot' src='./docs/img/dark_watchlist.jpeg' /> | <img title='coins page dark mode screenshot' src='./docs/img/dark_coins.jpeg' /> | <img title='convert page dark mode screenshot' src='./docs/img/dark_convert.jpeg' /> |
  | watchlist page dark mode screenshot (v 2.0) | coins page dark mode screenshot (v 2.0) | convert page dark mode screenshot (v 2.0) |



## improvements over v1

- in redesigning the app to give it a modern look, i changed the navigation icons to offer insight to the containing page information. on the old home page, there was a giant box that showed the app's default currency with no changing functionality. now the settings tab, when open, show the default currency and also allows to change currency.

  |||
  | ------------- | ------------- |
  | <img title='old home page screenshot' src='./docs/img/old_home.jpeg' /> | <img title='home page screenshot' src='./docs/img/home.jpeg' /> |
  | old home page screenshot (v 1.0) | home page screenshot (v 2.0) |



- empty state for when a user's watchlist is empty. also has a cta button that directs users to the coins page to view all coins. 

  |||
  | ------------- | ------------- |
  | <img title='old watchlist empty page screenshot' src='./docs/img/old_watchlist.jpeg' /> | <img title='watchlist empty page screenshot' src='./docs/img/watchlist_empty.jpeg' /> |
  | old watchlist empty page screenshot (v 1.0) | watchlist empty page screenshot (v 2.0) |



- embracing more whitespace in the convert page.

  |||
  | ------------- | ------------- |
  | <img title='old convert page screenshot' src='./docs/img/old_convert.jpeg' /> | <img title='convert page screenshot' src='./docs/img/convert.jpeg' /> |
  | old convert page screenshot (v 1.0) | convert page screenshot (v 2.0) |



- changes to the conversion result modal which also responds to swipe gestures. 

  ||
  | ------------- |
  | <img title='convert modal screenshot' src='./docs/img/convert_modal.jpeg' /> |
  | convert modal screenshot (v 2.0) |



- proper error handling. designed error states with informative messages.

  ||||
  | ------------- | ------------- | ------------- |
  | <img title='coins page error screenshot' src='./docs/img/home_error.jpeg' /> | <img title='convert page error screenshot' src='./docs/img/convert_error_1.jpeg' /> | <img title='convert page error screenshot' src='./docs/img/convert_error_2.jpeg' /> |
  | coins page error screenshot (v 2.0) | convert page value error screenshot (v 2.0) | convert page network error screenshot (v 2.0) |



- improved responsiveness

  ||||
  | ------------- | ------------- | ------------- |
  | <img title='watchlist page desktop screenshot' src='./docs/img/watchlist_lg.jpeg' /> | <img title='coins page desktop screenshot' src='./docs/img/home_lg.jpeg' /> | <img title='convert page desktop screenshot' src='./docs/img/convert_lg.jpeg' /> |
  | watchlist page desktop screenshot (v 2.0) | coins page desktop screenshot (v 2.0) | convert page desktop screenshot (v 2.0) |



- dark mode for improved accessibility

	

## updates

#### filter and sort coins

  users can now filter out coins they want to see by losers and gainers and this is automatically sorted by loss/gain percentage. users can now sort coins by market volume or price.

  ||
  | ------------- |
  | <img title='coins page screenshot' src='./docs/img/coins_2.jpeg' /> |
  | coins page modal screenshot (v 2.0) |



## project setup

this project is built with Vue 3 + TypeScript, Tailwind CSS

#### install dependencies
```bash
npm install
```



#### start the development server 
```bash
npm run dev
```
