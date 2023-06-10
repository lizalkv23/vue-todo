;(function () {
  "use strict"
  var o = {
      4602: function (o, t, e) {
        var n = e(9242),
          d = e(3396)
        function s(o, t, e, n, s, i) {
          const c = (0, d.up)("modal-popup"),
            r = (0, d.up)("todo-layout")
          return (
            (0, d.wg)(), (0, d.iD)("div", null, [(0, d.Wm)(c), (0, d.Wm)(r)])
          )
        }
        var i = e(7139)
        const c = { class: "modal__popup" }
        function r(o, t, e, n, s, r) {
          const a = (0, d.up)("my-button")
          return (
            (0, d.wg)(),
            (0, d.iD)(
              "div",
              { class: (0, i.C_)(["body-todo modal", s.show ? "" : "close"]) },
              [
                (0, d._)("div", c, [
                  (0, d.Wm)(
                    a,
                    {
                      type: "button",
                      onClick: t[0] || (t[0] = (o) => r.showModal()),
                    },
                    {
                      default: (0, d.w5)(() => [
                        (0, d.Uk)(" You Ready ?🤗🤗🤗 "),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ],
              2
            )
          )
        }
        const a = { type: "button", class: "modal__btn" }
        function l(o, t, e, n, s, i) {
          return (
            (0, d.wg)(),
            (0, d.iD)("button", a, [
              (0, d.WI)(o.$slots, "default", {}, void 0, !0),
            ])
          )
        }
        var u = {},
          _ = e(89)
        const h = (0, _.Z)(u, [
          ["render", l],
          ["__scopeId", "data-v-36d3ffad"],
        ])
        var p = h,
          f = {
            components: { MyButton: p },
            data() {
              return { show: !0 }
            },
            methods: {
              showModal() {
                this.show = !this.show
              },
            },
          }
        const v = (0, _.Z)(f, [
          ["render", r],
          ["__scopeId", "data-v-566e9c16"],
        ])
        var b = v
        const m = (o) => (
            (0, d.dD)("data-v-d1099bb4"), (o = o()), (0, d.Cn)(), o
          ),
          y = { class: "todo" },
          k = { class: "todo__container" },
          w = { class: "todo__body body-todo" },
          g = m(() =>
            (0, d._)("h1", { class: "body-todo__title" }, "To-Do", -1)
          ),
          I = { class: "body-todo__search" },
          P = { class: "body-todo__input" },
          C = { key: 0, class: "body-todo__list" },
          D = ["id", "checked", "onClick"],
          T = m(() => (0, d._)("span", null, null, -1)),
          O = { class: "body-todo__block" }
        function x(o, t, e, s, c, r) {
          const a = (0, d.up)("my-button")
          return (
            (0, d.wg)(),
            (0, d.iD)("div", y, [
              (0, d._)("div", k, [
                (0, d._)("div", w, [
                  g,
                  (0, d._)(
                    "div",
                    {
                      class: (0, i.C_)([
                        "body-todo__inner",
                        this.todoItems.length <= 0 ? "block" : "",
                      ]),
                    },
                    [
                      (0, d._)("div", I, [
                        (0, d._)("div", P, [
                          (0, d.wy)(
                            (0, d._)(
                              "input",
                              {
                                type: "text",
                                placeholder: "What will you do?",
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (o) => (this.todoPost = o)),
                                onKeyup: t[1] || (t[1] = (o) => r.addTask(o)),
                              },
                              null,
                              544
                            ),
                            [[n.nr, this.todoPost]]
                          ),
                        ]),
                        (0, d.Wm)(
                          a,
                          {
                            class: "body-todo__btn",
                            onClick:
                              t[2] || (t[2] = (o) => r.createdTodoPost()),
                          },
                          {
                            default: (0, d.w5)(() => [(0, d.Uk)(" Add 📝 ")]),
                            _: 1,
                          }
                        ),
                      ]),
                      c.todoItems.length > 0
                        ? ((0, d.wg)(),
                          (0, d.iD)("div", C, [
                            ((0, d.wg)(!0),
                            (0, d.iD)(
                              d.HY,
                              null,
                              (0, d.Ko)(
                                c.todoItems,
                                (o) => (
                                  (0, d.wg)(),
                                  (0, d.iD)(
                                    "div",
                                    { class: "body-todo__item", key: o.id },
                                    [
                                      (0, d._)(
                                        "label",
                                        {
                                          class: "body-todo__label",
                                          style: (0, i.j5)({
                                            textDecoration: o.checked
                                              ? "line-through"
                                              : "none",
                                          }),
                                        },
                                        [
                                          (0, d._)(
                                            "input",
                                            {
                                              type: "checkbox",
                                              name: "",
                                              id: o.id,
                                              checked: o.checked,
                                              onClick: (t) =>
                                                r.completedTask(o.id),
                                            },
                                            null,
                                            8,
                                            D
                                          ),
                                          T,
                                          (0, d.Uk)(
                                            " " + (0, i.zw)(o.title),
                                            1
                                          ),
                                        ],
                                        4
                                      ),
                                      (0, d._)("div", O, [
                                        (0, d.Wm)(
                                          a,
                                          {
                                            class: "body-todo__ready",
                                            onClick: (t) =>
                                              r.completedTask(o.id),
                                          },
                                          {
                                            default: (0, d.w5)(() => [
                                              (0, d.Uk)(" Ready ✔ "),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ),
                                        (0, d.Wm)(
                                          a,
                                          {
                                            class: "body-todo__delete",
                                            onClick: (t) => r.removeTodo(o.id),
                                          },
                                          {
                                            default: (0, d.w5)(() => [
                                              (0, d.Uk)(" Delete ❌ "),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ),
                                      ]),
                                    ]
                                  )
                                )
                              ),
                              128
                            )),
                          ]))
                        : (0, d.kq)("", !0),
                    ],
                    2
                  ),
                ]),
              ]),
            ])
          )
        }
        e(7658)
        var W = {
          components: { MyButton: p },
          data() {
            return { todoPost: "", todoItems: [] }
          },
          methods: {
            createdTodoPost() {
              this.todoPost.trim() &&
                (this.todoItems.push({
                  id: Date.now(),
                  title: this.todoPost,
                  checked: !1,
                }),
                (this.todoPost = ""))
            },
            addTask(o) {
              "Enter" === o.code &&
                this.todoPost.trim() &&
                (this.todoItems.push({
                  id: Date.now(),
                  title: this.todoPost,
                  checked: !1,
                }),
                (this.todoPost = ""))
            },
            removeTodo(o) {
              this.todoItems = this.todoItems.filter((t) => t.id !== o)
            },
            completedTask(o) {
              this.todoItems = this.todoItems.map(
                (t) => (t.id === o && (t.checked = !t.checked), t)
              )
            },
          },
        }
        const j = (0, _.Z)(W, [
          ["render", x],
          ["__scopeId", "data-v-d1099bb4"],
        ])
        var M = j,
          U = { components: { ModalPopup: b, TodoLayout: M } }
        const Z = (0, _.Z)(U, [["render", s]])
        var B = Z
        ;(0, n.ri)(B).mount("#app")
      },
    },
    t = {}
  function e(n) {
    var d = t[n]
    if (void 0 !== d) return d.exports
    var s = (t[n] = { exports: {} })
    return o[n].call(s.exports, s, s.exports, e), s.exports
  }
  ;(e.m = o),
    (function () {
      var o = []
      e.O = function (t, n, d, s) {
        if (!n) {
          var i = 1 / 0
          for (l = 0; l < o.length; l++) {
            ;(n = o[l][0]), (d = o[l][1]), (s = o[l][2])
            for (var c = !0, r = 0; r < n.length; r++)
              (!1 & s || i >= s) &&
              Object.keys(e.O).every(function (o) {
                return e.O[o](n[r])
              })
                ? n.splice(r--, 1)
                : ((c = !1), s < i && (i = s))
            if (c) {
              o.splice(l--, 1)
              var a = d()
              void 0 !== a && (t = a)
            }
          }
          return t
        }
        s = s || 0
        for (var l = o.length; l > 0 && o[l - 1][2] > s; l--) o[l] = o[l - 1]
        o[l] = [n, d, s]
      }
    })(),
    (function () {
      e.n = function (o) {
        var t =
          o && o.__esModule
            ? function () {
                return o["default"]
              }
            : function () {
                return o
              }
        return e.d(t, { a: t }), t
      }
    })(),
    (function () {
      e.d = function (o, t) {
        for (var n in t)
          e.o(t, n) &&
            !e.o(o, n) &&
            Object.defineProperty(o, n, { enumerable: !0, get: t[n] })
      }
    })(),
    (function () {
      e.g = (function () {
        if ("object" === typeof globalThis) return globalThis
        try {
          return this || new Function("return this")()
        } catch (o) {
          if ("object" === typeof window) return window
        }
      })()
    })(),
    (function () {
      e.o = function (o, t) {
        return Object.prototype.hasOwnProperty.call(o, t)
      }
    })(),
    (function () {
      var o = { 143: 0 }
      e.O.j = function (t) {
        return 0 === o[t]
      }
      var t = function (t, n) {
          var d,
            s,
            i = n[0],
            c = n[1],
            r = n[2],
            a = 0
          if (
            i.some(function (t) {
              return 0 !== o[t]
            })
          ) {
            for (d in c) e.o(c, d) && (e.m[d] = c[d])
            if (r) var l = r(e)
          }
          for (t && t(n); a < i.length; a++)
            (s = i[a]), e.o(o, s) && o[s] && o[s][0](), (o[s] = 0)
          return e.O(l)
        },
        n = (self["webpackChunkto_do_app"] =
          self["webpackChunkto_do_app"] || [])
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)))
    })()
  var n = e.O(void 0, [998], function () {
    return e(4602)
  })
  n = e.O(n)
})()
//# sourceMappingURL=app.333b8a5e.js.map
