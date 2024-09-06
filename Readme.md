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
	border: 5px solid rgb(238, 109, 86);
}

.ribbon span {
	position: absolute;
	display: block;
	width: 225px;
	padding: 15px 0;
	background-color: tomato;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	color: #fff;
	font: 700 14px/1 "Lato", sans-serif;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
	text-transform: uppercase;
	text-align: center;
}

/* /_ top left_/ */
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

/* Dashboard */
.dashboard,
.Add__container {
	padding: 50px 0 0;
	min-height: calc(100vh - 56px);
}

.add-new-orchid button {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-weight: bold;
	border: none;
	outline: none;
	border-radius: 5px;
	background: #1376f8;
	font-size: 20px;
	width: 100%;
	margin-bottom: 20px;
}

.add-new-orchid button:hover {
	background: #2e2100;
}

.dashboard__table {
	vertical-align: middle;
	font-size: 20px;
}

.dashboard__table img {
	width: 100%;
	height: 90px;
	object-fit: cover;
	background-position: center center;
}

.dashboard__table .image {
	width: 260px;
}

.dashboard__table thead th:first-child,
.dashboard__table thead th:nth-of-type(4),
.dashboard__table thead th:nth-of-type(5),
.dashboard__table thead th:nth-of-type(6),
.dashboard__table thead th:last-child,
.dashboard__table tbody td:first-child,
.dashboard__table tbody td:nth-of-type(4),
.dashboard__table tbody td:nth-of-type(5),
.dashboard__table tbody td:nth-of-type(6),
.dashboard__table tbody td:last-child {
	text-align: center;
}

.dashboard__table svg {
	color: #fff;
}

.dashboard__table button {
	font-size: 16px;
}

.dashboard__table td,
.dashboard__table th {
	vertical-align: middle;
}

.dashboard__table img {
	width: 100%;
	height: 100px;
	object-fit: cover;
	background-position: center center;
}

.dashboard__table .btn-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 5px;
}

.dashboard__table .btn-wrapper button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
}

/* ========= PAGINATION ========= */
.pagination {
	margin-top: 20px;
	justify-content: center;
}

.page-link {
	display: inline-flex;
	width: 40px;
	height: 40px;
	padding: 0;
	color: #1376f8;
	font-weight: bold;
	font-size: 1.8rem;
	border: none;
	outline: none;
	text-align: center;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	transition: all 0.25s ease-in-out;
}

.page-item.active .page-link {
	background: #1376f8;
}

.page-link:hover {
	color: #2e2100;
}

.page-item.active .page-link:hover {
	color: #fff;
}

.dashboard .page-item:first-child .page-link,
.dashboard .page-item:last-child .page-link {
	border-radius: 50%;
}

.page-item:not(:first-child) {
	margin-left: 8px;
}
```
