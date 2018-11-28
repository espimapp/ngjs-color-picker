!function (o) {
    function s(n) {
        if (r[n]) return r[n].exports;
        var t = r[n] = {exports: {}, id: n, loaded: !1};
        return o[n].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
    }

    var r = {};
    return s.m = o, s.c = r, s.p = "/", s(0)
}([function (o, s) {
    "use strict";
    angular.module("ngjsColorPicker", []).directive("ngjsColorPicker", function () {
        var o = '<ul ng-style="ulCss"> \t                <li ng-repeat="color in colors | limitTo: options.total" \t                    ng-class="{ \t                    selectedColor: (color===selectedColor), \t                    hRDF: $first&&hzRound, \t                    hRDL: $last&&hzRound, \t                    vRDF: $first&&vertRound, \t                    vRDL: $last&&vertRound, \t                    tlRound: $first&&columnRound, \t                    trRound: $index==(options.columns-1)&&columnRound, \t                    brRound: $last&&columnRound, \t                    blRound: $index==(colors.length-options.columns)&&columnRound \t                    }" \t                    ng-click="pick(color)" \t                    ng-attr-style="background-color:{{color}};" \t                    ng-style="getCss(color)"> \t                    </li>\t                </ul>',
            s = [{selector: "ul", rules: ["padding: 0", "outline: none", "list-style-type: none"]}, {
                selector: "li",
                rules: ["padding: 0", "margin: 0", "box-sizing: border-box", "outline: none"]
            }, {selector: "li.selectedColor", rules: ["border: 1px solid #333"]}, {
                selector: "li.hRDF",
                rules: ["border-radius: 5px 0 0 5px"]
            }, {selector: "li.hRDL", rules: ["border-radius: 0 5px 5px 0"]}, {
                selector: "li.vRDF",
                rules: ["border-radius: 5px 5px 0 0"]
            }, {selector: "li.vRDL", rules: ["border-radius: 0 0 5px 5px"]}, {
                selector: "li.tlRound",
                rules: ["border-radius: 5px 0 0 0"]
            }, {selector: "li.trRound", rules: ["border-radius: 0 5px 0 0;"]}, {
                selector: "li.brRound",
                rules: ["border-radius: 0 0 5px 0;"]
            }, {selector: "li.blRound", rules: ["border-radius: 0 0 0 5px;"]}],
            r = ["#B22222", "#dc2127", "#FF8C00", "#CD853F", "#FFD700", "#008000", "#0F5394",  "#dbadff", "#8B008B",  "#778899"],
            n = {colors: r, options: {size: 20, columns: null, randomColors: null}, gradient: null}, t = function (o) {
                o.colors = r, o.options = o.options || {}, o.options.size = o.options.size || n.options.size, o.options.columns = o.options.columns || n.options.columns, o.options.randomColors = o.options.randomColors || n.options.randomColors, o.options.total = o.options.total || o.colors.length, o.options.horizontal = !o.options.hasOwnProperty("horizontal") || o.options.horizontal, o.options.roundCorners = !!o.options.hasOwnProperty("roundCorners") && o.options.roundCorners, o.gradient = o.gradient || n.gradient, o.ulCss = {}, o.css = {}, o.css.display = o.options.horizontal ? "inline-block" : "block", o.css.width = o.css.height = o.options.size + "px"
            }, e = function (o) {
                if (o.customColors) o.colors = o.customColors; else if (o.options && o.options.randomColors) {
                    if (o.options.randomColors > 0) {
                        o.colors = [];
                        for (var s = o.options.randomColors; 0 !== s;) o.colors.push(p()), s--
                    }
                } else if (o.gradient) {
                    var r = a(o.gradient.start), n = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r);
                    if (n) {
                        o.colors = [];
                        for (var t = o.gradient.hasOwnProperty("count") ? o.gradient.count : 10, e = o.gradient.hasOwnProperty("step") ? o.gradient.step : 1; 0 !== t;) o.colors.push(f(0 === o.colors.length ? r : o.colors[o.colors.length - 1], e)), e += o.gradient.step, t--, "#ffffff" !== o.colors[o.colors.length - 1].toLowerCase() && "#000000" !== o.colors[o.colors.length - 1] || (t = 0)
                    }
                }
            }, l = function (o) {
                var s = o.css.width.indexOf("p");
                o.ulCss.width = o.options.columns * parseInt(o.css.width.substr(0, s), 10) + "px", o.ulCss.height = o.options.size * (o.colors.length / o.options.columns) + "px", o.css.cssFloat = "left";
                var r = o.colors.length % o.options.columns === 0;
                o.columnRound = r && o.options.columns && o.options.roundCorners
            }, i = function (o) {
                o.hzRound = o.options.horizontal && o.options.roundCorners && !o.options.columns, o.vertRound = !o.options.horizontal && o.options.roundCorners && !o.options.columns
            }, c = function (o) {
                o.selectedColor = o.selectedColor || o.colors[0]
            }, u = function (o, s) {
                var r = "ngjs-color-picker";
                return r + " " + o + " {" + s.join(";") + "}"
            }, d = function () {
                var o = s.map(function (o) {
                    return u(o.selector, o.rules)
                });
                angular.element(document).find("head").prepend('<style type="text/css">' + o.join(" ") + "</style>")
            }, p = function () {
                return "#" + (Math.random().toString(16) + "000000").slice(2, 8)
            }, a = function (o) {
                var s = +("#" === o.charAt(0));
                return "#" + o.substr(s).toLowerCase()
            }, f = function (o, s) {
                var r = parseInt(o.slice(1), 16), n = Math.round(2.55 * s), t = (r >> 16) + n, e = (r >> 8 & 255) + n,
                    l = (255 & r) + n;
                return "#" + (16777216 + 65536 * (t < 255 ? t < 1 ? 0 : t : 255) + 256 * (e < 255 ? e < 1 ? 0 : e : 255) + (l < 255 ? l < 1 ? 0 : l : 255)).toString(16).slice(1)
            };
        return {
            scope: {selectedColor: "=?", customColors: "=?", options: "=?", gradient: "=?"},
            restrict: "E",
            template: o,
            link: function (o) {
                t(o), e(o), c(o), i(o), d(), o.options.columns && l(o), o.getCss = function (s) {
                    return o.css.background = s, o.css
                }, o.pick = function (s) {
                    o.selectedColor = s
                }
            }
        }
    })
}]);
//# sourceMappingURL=ngjs-color-picker.js.map
