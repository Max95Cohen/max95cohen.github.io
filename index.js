"use strict";

function i() {
}

i.init = function () {
    i.t(), window.addEventListener("beforeunload", function (c) {
        c.preventDefault(), c.returnValue = ""
    }), document.addEventListener("keydown", function (c) {
        if ("Enter" === c.key) return i.o();
        if ("c" !== c.key) {
            if ("q" === c.key || "t" === c.key) {
                var t = document.getElementsByName("radio");
                return "q" === c.key && (t[0].checked = !0, i.u(1)), "t" === c.key && (t[1].checked = !0, i.u(2)), i.o()
            }
        } else {
            t = document.getElementById("O");
            t && (t.select(), t.setSelectionRange(0, 1e3), document.execCommand("copy"), c.preventDefault())
        }
    })
}, i.o = function () {
    var c = i.i() + i.m(), c = i.h(c);
    i.k = c.join(""), i.p()
}, i.p = function () {
    var c, t = document.getElementById("L"), n = document.getElementById("O");
    t && n && (c = i.k, t.value = c.toLowerCase(), n.value = c, i.v(c))
}, i.i = function () {
    var c = document.querySelectorAll("#G input[type=checkbox]:checked"), t = "";
    if (c && c.length) for (var n = 0; n < c.length; n++) t += c[n].parentNode.textContent;
    return t
}, i.h = function (c) {
    for (var t = Math.floor, n = c.length, e = [], o = 0; o < n; o++) e.push(c[o]);
    for (var u = 0; u < n; u++) {
        var i = t(Math.random() * n), d = t(Math.random() * n);
        i === d && (0 < i ? i-- : 0 === d && d++);
        var r = e[i];
        e[i] = e[d], e[d] = r
    }
    return e
}, i.m = function () {
    var c = document.getElementById("A"), t = document.getElementById("b"), n = document.getElementById("C"),
        e = document.getElementById("d"), o = document.getElementById("E"), u = document.getElementById("f");
    return c && t && (i.l = c, i.G = t, c.querySelector("input[type=checkbox]:checked") ? (c = this.h(c.innerText.trim())).length = t.value : c = [], i.L(t)), n && e && (i.M = n, i.I = e, n.querySelector("input[type=checkbox]:checked") ? (n = this.h(n.innerText.trim())).length = e.value : n = [], i.L(e)), o && u && (i.O = o, i.q = u, o.querySelector("input[type=checkbox]:checked") ? (o = this.h(o.innerText.trim())).length = u.value : o = [], i.L(u)), c.join("") + n.join("") + o.join("")
}, i.t = function () {
    var c = document.getElementById("G");
    c && c.addEventListener("click", function (c) {
        switch (c.target.tagName) {
            case"LABEL":
            case"INPUT":
                i.o();
                break;
            default:
                c.preventDefault()
        }
    });
    c = document.querySelector("button");
    c && (c.addEventListener("click", i.o), c.click());
    c = document.querySelector("#H");
    c && c.addEventListener("click", function (c) {
        c = c.target;
        "INPUT" === c.tagName && (i.u(c.dataset.A), i.o())
    })
}, i.u = function (c) {
    var t;
    switch (+c) {
        case 1:
            i.l && (i.l.checked = !0), i.G && (i.G.value = 3), i.M && (i.M.checked = !0), i.M && (i.I.value = 3), i.O && (i.O.checked = !0), i.q && (i.q.value = 3), (t = document.querySelectorAll('#G input[type="checkbox"]')) && t.length && (t[2].checked = !0, t[3].checked = !0, t[4].checked = !0, t[10].checked = !0);
            break;
        case 2:
            i.l && (i.l.checked = !0), i.G && (i.G.value = 11), i.M && (i.M.checked = !0), i.M && (i.I.value = 11), i.O && (i.O.checked = !0), i.q && (i.q.value = 11), (t = document.querySelectorAll('#G input[type="checkbox"]')) && t.length && (t[2].checked = !0, t[3].checked = !0, t[4].checked = !0, t[10].checked = !0)
    }
}, i.L = function (c) {
    c.addEventListener("change", i.o)
}, i.v = function (c) {
    var t = document.getElementById("I");
    t && (t.innerText = c.length)
}, i.k = "", document.addEventListener("DOMContentLoaded", i.init);