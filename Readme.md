# npm command

```bash
npm i react-router-dom
npm i react-icons
npm i sass
npm i react-toastify
npm install react-bootstrap bootstrap
npm i formik
npm i yup
```

## Attention

```js
ICONS
import { IoMdAddCircle } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

TOAST MESSAGE
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
```

## MainAPI.JS

```js
export const MainAPI = "https://???.mockapi.io/???";
```

## REGEX

Regex checking for date format of DD/MM/YYYY

```js
/^(?:(?:31\/(?:0[13578]|1[02]))\/(?:19|20)\d{2}|(?:(?:29|30)\/(?:0[13-9]|1[0-2])\/(?:19|20)\d{2})|(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])\/(?:19|20)\d{2}|29\/02\/(?:19|20)(?:[02468][048]|[13579][26]))$/;
```

Regex checking for lowercase, numbers, or special charaters

```js
/^[a-z0-9\s!@#$%^&*(),.<>]+$/;
```

Regex checking for lowercase

```js
/^[a-z\s]+$/;
```

## Data Demo
```json
[
	{
		"id": "1",
		"artName": "3D Fabric Paint, Glow in the Dark A402",
		"price": 15,
		"description": "Puffy Paint for Fabric - Create eye-catching, 3D designs with this bright and vibrant color.",
		"glassSurface": true,
		"image": "https://m.media-amazon.com/images/I/61I8rKtZE0L._AC_SX679_.jpg",
		"brand": "Arteza",
		"limitedTimeDeal": 0.27
	},
	{
		"id": "2",
		"artName": "Worldwide Neon Dimensional Fabric Paint Assortment",
		"price": 13,
		"description": "Brilliant colors, smart prices! Top-quality fabric paint at a budget price.",
		"glassSurface": false,
		"image": "https://m.media-amazon.com/images/I/71yL1rYRRGL._SX522_.jpg",
		"brand": "Color Splash",
		"limitedTimeDeal": 0.18
	},
	{
		"id": "3",
		"artName": "Edding 4500 textile marker - set of 10 colors (basic)",
		"price": 29,
		"description": "De edding textielstiften en pennen zijn verkrijgbaar in 20 levendige kleuren; voor het tekenen van precieze lijnen, bekijk de edding 4600 textielstift.",
		"glassSurface": false,
		"image": "https://m.media-amazon.com/images/I/71iNvJ0u+7L._AC_SX679_.jpg",
		"brand": "Edding",
		"limitedTimeDeal": 0
	},
	{
		"id": "4",
		"artName": "Real Brush Pens, Set of 12, Bright Tones",
		"price": 12,
		"description": "Self-Moistening and Self-Cleaning Flexible Nylon Bristles: You don’t have to moisten or clean the bristles of our markers for artists after blending with other colors.",
		"glassSurface": true,
		"image": "https://cdn2.jomashop.com/media/catalog/product/g/u/gucci-ladies-gucci-bloom-edp-spray-1-oz-30-ml-8005610481081.jpg",
		"brand": "Arteza",
		"limitedTimeDeal": 0.16
	},
	{
		"id": "5",
		"artName": "Watercolor Pencils, 72 Colored Drawing Pencils for Artists",
		"price": 40,
		"description": "Add Depth to Your Art with These Watercolor Pencils: With a dab of a wet brush, these watercolor pencils for artists allow you to blend, layer, and create unique effects that lend drama to artworks.",
		"glassSurface": false,
		"image": "https://m.media-amazon.com/images/I/81k7uavjV1L._AC_SX466_.jpg",
		"brand": "Arteza",
		"limitedTimeDeal": 0
	},
	{
		"id": "6",
		"artName": "edding, textile pen 4600, round tip, 1 mm, red",
		"price": 12,
		"description": "Max. allowed washing temperature of the paint application: 60 °C.",
		"glassSurface": true,
		"image": "https://m.media-amazon.com/images/I/41apzbsl-LL._AC_SX679_.jpg",
		"brand": "Edding",
		"limitedTimeDeal": 0
	},
	{
		"id": "7",
		"artName": " Watercolor Brush Markers, 36 Piece, Multicolor, 410-36",
		"price": 45,
		"description": "HAVE FUN: Pinpoint precision control, so you can create washes, gradients, shading effects, and much more. Blend colors together to create variants of your own from light pastels to bold shades. Create with no worry or mess. Hassle-free free with no bleeding or smearing.",
		"glassSurface": true,
		"image": "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/e/x/explorer-mont-blanc-edp-spray-33-oz-100-ml-m-124069.jpg",
		"brand": "KingArt",
		"limitedTimeDeal": 0.3
	},
	{
		"id": "8",
		"artName": "Dual Tip Brush Pen Art Markers with Fineliner, Unqiue Colors, Set of 36",
		"price": 16,
		"description": "Ideal For Fine Art, Brush Lettering, Faux Calligraphy, Illustrations, Water Color Illustrations, Journaling And More!",
		"glassSurface": false,
		"image": "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/t/i/tiziana-terenzi-unisex-kirke-extrait-de-parfum-spray-338-oz-tester-fragrances-0908763216987.jpg",
		"brand": "KingArt",
		"limitedTimeDeal": 0.42
	},
	{
		"id": "9",
		"artName": "8-oz. Color Splash! Washable Glitter Paint Assortment (Pack of 8)",
		"price": 35,
		"description": "Brilliant colors, smart prices! Top-quality non-toxic washable glitter paint at a budget price.",
		"glassSurface": false,
		"image": "https://m.media-amazon.com/images/I/81xR31HH+ML._SX522_.jpg",
		"brand": "Color Splash",
		"limitedTimeDeal": 0
	}
]
```

## Code Ribbon

Ribbon HTML

```html
<div class="box">
	<div class="ribbon ribbon-top-left"><span>ribbon</span></div>
	<div class="ribbon ribbon-top-right"><span>ribbon</span></div>
	<div class="ribbon ribbon-bottom-left"><span>ribbon</span></div>
	<div class="ribbon ribbon-bottom-right"><span>ribbon</span></div>
</div>
```

Ribbon CSS

```css
@import url(https://fonts.googleapis.com/css?family=Lato:700);
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #f0f0f0;
}
.box {
	position: relative;
	max-width: 600px;
	width: 90%;
	height: 400px;
	background: #fff;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

// __common__
.ribbon {
	width: 150px;
	height: 150px;
	overflow: hidden;
	position: absolute;
}
.ribbon::before,
.ribbon::after {
	position: absolute;
	z-index: -1;
	content: "";
	display: block;
	border: 5px solid #2980b9;
}
.ribbon span {
	position: absolute;
	display: block;
	width: 225px;
	padding: 15px 0;
	background-color: #3498db;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	color: #fff;
	font: 700 18px/1 "Lato", sans-serif;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	text-transform: uppercase;
	text-align: center;
}

// __top left__
.ribbon-top-left {
	top: -10px;
	left: -10px;
}
.ribbon-top-left::before,
.ribbon-top-left::after {
	border-top-color: transparent;
	border-left-color: transparent;
}
.ribbon-top-left::before {
	top: 0;
	right: 0;
}
.ribbon-top-left::after {
	bottom: 0;
	left: 0;
}
.ribbon-top-left span {
	right: -25px;
	top: 30px;
	transform: rotate(-45deg);
}

// __top right__
.ribbon-top-right {
	top: -10px;
	right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
	border-top-color: transparent;
	border-right-color: transparent;
}
.ribbon-top-right::before {
	top: 0;
	left: 0;
}
.ribbon-top-right::after {
	bottom: 0;
	right: 0;
}
.ribbon-top-right span {
	left: -25px;
	top: 30px;
	transform: rotate(45deg);
}

// __bottom left__
.ribbon-bottom-left {
	bottom: -10px;
	left: -10px;
}
.ribbon-bottom-left::before,
.ribbon-bottom-left::after {
	border-bottom-color: transparent;
	border-left-color: transparent;
}
.ribbon-bottom-left::before {
	bottom: 0;
	right: 0;
}
.ribbon-bottom-left::after {
	top: 0;
	left: 0;
}
.ribbon-bottom-left span {
	right: -25px;
	bottom: 30px;
	transform: rotate(225deg);
}

// __bottom right__
.ribbon-bottom-right {
	bottom: -10px;
	right: -10px;
}
.ribbon-bottom-right::before,
.ribbon-bottom-right::after {
	border-bottom-color: transparent;
	border-right-color: transparent;
}
.ribbon-bottom-right::before {
	bottom: 0;
	left: 0;
}
.ribbon-bottom-right::after {
	top: 0;
	right: 0;
}
.ribbon-bottom-right span {
	left: -25px;
	bottom: 30px;
	transform: rotate(-225deg);
}
```

RIBBON SCSS

```scss
$color_1: #fff;
$background-color_1: #3498db;
$border-top-color_1: transparent;
$border-right-color_1: transparent;
$border-bottom-color_1: transparent;
$border-left-color_1: transparent;

@import "https://fonts.googleapis.com/css?family=Lato:700";
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: #f0f0f0;
}
.box {
	position: relative;
	max-width: 600px;
	width: 90%;
	height: 400px;
	background: #fff;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

// __common__
.ribbon {
	width: 150px;
	height: 150px;
	overflow: hidden;
	position: absolute;
	&::before {
		position: absolute;
		z-index: -1;
		content: "";
		display: block;
		border: 5px solid #2980b9;
	}
	&::after {
		position: absolute;
		z-index: -1;
		content: "";
		display: block;
		border: 5px solid #2980b9;
	}
	span {
		position: absolute;
		display: block;
		width: 225px;
		padding: 15px 0;
		background-color: $background-color_1;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		color: $color_1;
		font: 700 18px/1 "Lato", sans-serif;
		text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
		text-transform: uppercase;
		text-align: center;
	}
}

// __top left__
.ribbon-top-left {
	top: -10px;
	left: -10px;
	&::before {
		border-top-color: $border-top-color_1;
		border-left-color: $border-left-color_1;
		top: 0;
		right: 0;
	}
	&::after {
		border-top-color: $border-top-color_1;
		border-left-color: $border-left-color_1;
		bottom: 0;
		left: 0;
	}
	span {
		right: -25px;
		top: 30px;
		transform: rotate(-45deg);
	}
}

// __top right__
.ribbon-top-right {
	top: -10px;
	right: -10px;
	&::before {
		border-top-color: $border-top-color_1;
		border-right-color: $border-right-color_1;
		top: 0;
		left: 0;
	}
	&::after {
		border-top-color: $border-top-color_1;
		border-right-color: $border-right-color_1;
		bottom: 0;
		right: 0;
	}
	span {
		left: -25px;
		top: 30px;
		transform: rotate(45deg);
	}
}

// __bottom left__
.ribbon-bottom-left {
	bottom: -10px;
	left: -10px;
	&::before {
		border-bottom-color: $border-bottom-color_1;
		border-left-color: $border-left-color_1;
		bottom: 0;
		right: 0;
	}
	&::after {
		border-bottom-color: $border-bottom-color_1;
		border-left-color: $border-left-color_1;
		top: 0;
		left: 0;
	}
	span {
		right: -25px;
		bottom: 30px;
		transform: rotate(225deg);
	}
}

// __bottom right__
.ribbon-bottom-right {
	bottom: -10px;
	right: -10px;
	&::before {
		border-bottom-color: $border-bottom-color_1;
		border-right-color: $border-right-color_1;
		bottom: 0;
		left: 0;
	}
	&::after {
		border-bottom-color: $border-bottom-color_1;
		border-right-color: $border-right-color_1;
		top: 0;
		right: 0;
	}
	span {
		left: -25px;
		bottom: 30px;
		transform: rotate(-225deg);
	}
}
```
