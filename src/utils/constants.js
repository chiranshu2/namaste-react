export const CDN_URL=
"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" ;

export const SWIGGY_API =
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//xxproxy 
export const RESTAURANT_MENU_API =
"https://www.swiggy.com/dapi/menu/v4/full?lat=28.4640087729816&lng=77.02618695368315&menuId=";


 export const LOGO_URL=
"https://media-hosting.imagekit.io/9a82d704d33940b2/Screenshot%202025-05-14%20140633.png?Expires=1841821209&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2ENSBhHoHi7tyxORlTvIeftD-tSIisfZKPpS9cDreI0j~-EzC4iEdresRejjyXFbFl0DZbnI3rIiQr9CmtZizag6vw1lbe58fJD8nWgM5hGj0~b0tON20z8GqLoWgbh~6ukmFV7-mk1GIkIRq5x0UOJPVM40CXwShoPptHcFIRZSxji7RS8IUff2ED2Vp0rrMYNy3S0dgh-xypq2t~9TMRL9gPPLzrAi-wjQBeE1jzAj4gF8HmLycIITVDAV-BShPGPHQvU~~O7Os-uD2H8j8tIM~KVyqPgLU7h9i4uJyvvp8bdG05uV~ZzUM40SOti05JMlZGsBJxSaXwpN6U0rsg__";

export const IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;

// Swiggy API to get Restaurant data using foodfire server
export const FOODFIRE_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`;

// Swiggy API to get Restaurant Menu data using foodfire server
export const FOODFIRE_MENU_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=`;

// shimmer card unit


// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";