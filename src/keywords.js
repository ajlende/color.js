// To produce: Visit https://www.w3.org/TR/css-color-4/#named-colors
// and run in the console:
// copy($$("tr", $(".named-color-table tbody")).map(tr => `"${tr.cells[2].textContent.trim()}": [${tr.cells[4].textContent.trim().split(/\s+/).map(c => c === "0"? "0" : c === "255"? "1" : c + " / 255").join(", ")}]`).join(",\n"))

/** List of CSS color keywords
 *  Note that this does not include currentColor, transparent,
 *  or system colors
 *
 *  @type {Record<string, [number, number, number]>}
 */
export default {
	aliceblue: [240 / 255, 248 / 255, 1],
	antiquewhite: [250 / 255, 235 / 255, 215 / 255],
	aqua: [0, 1, 1],
	aquamarine: [127 / 255, 1, 212 / 255],
	azure: [240 / 255, 1, 1],
	beige: [245 / 255, 245 / 255, 220 / 255],
	bisque: [1, 228 / 255, 196 / 255],
	black: [0, 0, 0],
	blanchedalmond: [1, 235 / 255, 205 / 255],
	blue: [0, 0, 1],
	blueviolet: [138 / 255, 43 / 255, 226 / 255],
	brown: [165 / 255, 42 / 255, 42 / 255],
	burlywood: [222 / 255, 184 / 255, 135 / 255],
	cadetblue: [95 / 255, 158 / 255, 160 / 255],
	chartreuse: [127 / 255, 1, 0],
	chocolate: [210 / 255, 105 / 255, 30 / 255],
	coral: [1, 127 / 255, 80 / 255],
	cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
	cornsilk: [1, 248 / 255, 220 / 255],
	crimson: [220 / 255, 20 / 255, 60 / 255],
	cyan: [0, 1, 1],
	darkblue: [0, 0, 139 / 255],
	darkcyan: [0, 139 / 255, 139 / 255],
	darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
	darkgray: [169 / 255, 169 / 255, 169 / 255],
	darkgreen: [0, 100 / 255, 0],
	darkgrey: [169 / 255, 169 / 255, 169 / 255],
	darkkhaki: [189 / 255, 183 / 255, 107 / 255],
	darkmagenta: [139 / 255, 0, 139 / 255],
	darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
	darkorange: [1, 140 / 255, 0],
	darkorchid: [153 / 255, 50 / 255, 204 / 255],
	darkred: [139 / 255, 0, 0],
	darksalmon: [233 / 255, 150 / 255, 122 / 255],
	darkseagreen: [143 / 255, 188 / 255, 143 / 255],
	darkslateblue: [72 / 255, 61 / 255, 139 / 255],
	darkslategray: [47 / 255, 79 / 255, 79 / 255],
	darkslategrey: [47 / 255, 79 / 255, 79 / 255],
	darkturquoise: [0, 206 / 255, 209 / 255],
	darkviolet: [148 / 255, 0, 211 / 255],
	deeppink: [1, 20 / 255, 147 / 255],
	deepskyblue: [0, 191 / 255, 1],
	dimgray: [105 / 255, 105 / 255, 105 / 255],
	dimgrey: [105 / 255, 105 / 255, 105 / 255],
	dodgerblue: [30 / 255, 144 / 255, 1],
	firebrick: [178 / 255, 34 / 255, 34 / 255],
	floralwhite: [1, 250 / 255, 240 / 255],
	forestgreen: [34 / 255, 139 / 255, 34 / 255],
	fuchsia: [1, 0, 1],
	gainsboro: [220 / 255, 220 / 255, 220 / 255],
	ghostwhite: [248 / 255, 248 / 255, 1],
	gold: [1, 215 / 255, 0],
	goldenrod: [218 / 255, 165 / 255, 32 / 255],
	gray: [128 / 255, 128 / 255, 128 / 255],
	green: [0, 128 / 255, 0],
	greenyellow: [173 / 255, 1, 47 / 255],
	grey: [128 / 255, 128 / 255, 128 / 255],
	honeydew: [240 / 255, 1, 240 / 255],
	hotpink: [1, 105 / 255, 180 / 255],
	indianred: [205 / 255, 92 / 255, 92 / 255],
	indigo: [75 / 255, 0, 130 / 255],
	ivory: [1, 1, 240 / 255],
	khaki: [240 / 255, 230 / 255, 140 / 255],
	lavender: [230 / 255, 230 / 255, 250 / 255],
	lavenderblush: [1, 240 / 255, 245 / 255],
	lawngreen: [124 / 255, 252 / 255, 0],
	lemonchiffon: [1, 250 / 255, 205 / 255],
	lightblue: [173 / 255, 216 / 255, 230 / 255],
	lightcoral: [240 / 255, 128 / 255, 128 / 255],
	lightcyan: [224 / 255, 1, 1],
	lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
	lightgray: [211 / 255, 211 / 255, 211 / 255],
	lightgreen: [144 / 255, 238 / 255, 144 / 255],
	lightgrey: [211 / 255, 211 / 255, 211 / 255],
	lightpink: [1, 182 / 255, 193 / 255],
	lightsalmon: [1, 160 / 255, 122 / 255],
	lightseagreen: [32 / 255, 178 / 255, 170 / 255],
	lightskyblue: [135 / 255, 206 / 255, 250 / 255],
	lightslategray: [119 / 255, 136 / 255, 153 / 255],
	lightslategrey: [119 / 255, 136 / 255, 153 / 255],
	lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
	lightyellow: [1, 1, 224 / 255],
	lime: [0, 1, 0],
	limegreen: [50 / 255, 205 / 255, 50 / 255],
	linen: [250 / 255, 240 / 255, 230 / 255],
	magenta: [1, 0, 1],
	maroon: [128 / 255, 0, 0],
	mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
	mediumblue: [0, 0, 205 / 255],
	mediumorchid: [186 / 255, 85 / 255, 211 / 255],
	mediumpurple: [147 / 255, 112 / 255, 219 / 255],
	mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
	mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
	mediumspringgreen: [0, 250 / 255, 154 / 255],
	mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
	mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
	midnightblue: [25 / 255, 25 / 255, 112 / 255],
	mintcream: [245 / 255, 1, 250 / 255],
	mistyrose: [1, 228 / 255, 225 / 255],
	moccasin: [1, 228 / 255, 181 / 255],
	navajowhite: [1, 222 / 255, 173 / 255],
	navy: [0, 0, 128 / 255],
	oldlace: [253 / 255, 245 / 255, 230 / 255],
	olive: [128 / 255, 128 / 255, 0],
	olivedrab: [107 / 255, 142 / 255, 35 / 255],
	orange: [1, 165 / 255, 0],
	orangered: [1, 69 / 255, 0],
	orchid: [218 / 255, 112 / 255, 214 / 255],
	palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
	palegreen: [152 / 255, 251 / 255, 152 / 255],
	paleturquoise: [175 / 255, 238 / 255, 238 / 255],
	palevioletred: [219 / 255, 112 / 255, 147 / 255],
	papayawhip: [1, 239 / 255, 213 / 255],
	peachpuff: [1, 218 / 255, 185 / 255],
	peru: [205 / 255, 133 / 255, 63 / 255],
	pink: [1, 192 / 255, 203 / 255],
	plum: [221 / 255, 160 / 255, 221 / 255],
	powderblue: [176 / 255, 224 / 255, 230 / 255],
	purple: [128 / 255, 0, 128 / 255],
	rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
	red: [1, 0, 0],
	rosybrown: [188 / 255, 143 / 255, 143 / 255],
	royalblue: [65 / 255, 105 / 255, 225 / 255],
	saddlebrown: [139 / 255, 69 / 255, 19 / 255],
	salmon: [250 / 255, 128 / 255, 114 / 255],
	sandybrown: [244 / 255, 164 / 255, 96 / 255],
	seagreen: [46 / 255, 139 / 255, 87 / 255],
	seashell: [1, 245 / 255, 238 / 255],
	sienna: [160 / 255, 82 / 255, 45 / 255],
	silver: [192 / 255, 192 / 255, 192 / 255],
	skyblue: [135 / 255, 206 / 255, 235 / 255],
	slateblue: [106 / 255, 90 / 255, 205 / 255],
	slategray: [112 / 255, 128 / 255, 144 / 255],
	slategrey: [112 / 255, 128 / 255, 144 / 255],
	snow: [1, 250 / 255, 250 / 255],
	springgreen: [0, 1, 127 / 255],
	steelblue: [70 / 255, 130 / 255, 180 / 255],
	tan: [210 / 255, 180 / 255, 140 / 255],
	teal: [0, 128 / 255, 128 / 255],
	thistle: [216 / 255, 191 / 255, 216 / 255],
	tomato: [1, 99 / 255, 71 / 255],
	turquoise: [64 / 255, 224 / 255, 208 / 255],
	violet: [238 / 255, 130 / 255, 238 / 255],
	wheat: [245 / 255, 222 / 255, 179 / 255],
	white: [1, 1, 1],
	whitesmoke: [245 / 255, 245 / 255, 245 / 255],
	yellow: [1, 1, 0],
	yellowgreen: [154 / 255, 205 / 255, 50 / 255],
};
