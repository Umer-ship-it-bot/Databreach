(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8649],
  {
    16451: (e, n, t) => {
      "use strict";
      t.d(n, { E: () => u });
      var i = t(37876),
        s = t(73880),
        r = t(65473),
        o = t(15039),
        a = t(14232),
        l = t(49494),
        c = t(72631);
      let u = (e) => {
        let {
            children: n,
            className: t,
            "data-test": u,
            deferContentRendering: d,
            isOpen: _,
            noAnimation: m = !1,
            onClose: h,
            onOpen: p,
            variant: b,
          } = e,
          [f, y] = (0, a.useState)(!1),
          v = (0, a.useRef)(null),
          g = (0, a.useRef)(null),
          [k, C] = (0, a.useState)(_),
          D = (0, s.Z)(k),
          x = (0, a.useCallback)(() => {
            (0, c.nk)({
              skipAnimation: m,
              setup: [
                [
                  null == g ? void 0 : g.current,
                  {
                    transitionProperty: "height opacity",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease",
                  },
                ],
                [
                  null == v ? void 0 : v.current,
                  {
                    transitionProperty: "transform",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease",
                  },
                ],
              ],
              from: [
                [g.current, { overflow: "hidden", height: "0", opacity: "0" }],
                [v.current, { transform: "translateY(-15px)" }],
              ],
              to: [
                [
                  g.current,
                  {
                    opacity: "1",
                    height: () => {
                      var e;
                      return "".concat(
                        null == v || null == (e = v.current)
                          ? void 0
                          : e.clientHeight,
                        "px"
                      );
                    },
                  },
                ],
                [v.current, { transform: "translateY(0)" }],
              ],
            })
              .then(() => {
                g.current && (g.current.style.height = "auto"),
                  g.current && (g.current.style.overflow = "visible"),
                  null == p || p();
              })
              .catch(() => {});
          }, [m, p]),
          N = (0, a.useCallback)(() => {
            (0, c.nk)({
              skipAnimation: m,
              setup: [
                [
                  null == g ? void 0 : g.current,
                  {
                    transitionProperty: "height opacity",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease",
                  },
                ],
                [
                  null == v ? void 0 : v.current,
                  {
                    transitionProperty: "transform",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease",
                  },
                ],
              ],
              from: [
                [
                  g.current,
                  {
                    overflow: "hidden",
                    opacity: "1",
                    height: () => {
                      var e;
                      return "".concat(
                        null == v || null == (e = v.current)
                          ? void 0
                          : e.clientHeight,
                        "px"
                      );
                    },
                  },
                ],
                [v.current, { transform: "translateY(0)" }],
              ],
              to: [
                [g.current, { opacity: "0", height: "0" }],
                [v.current, { transform: "translateY(-15px)" }],
              ],
            })
              .then(() => {
                y(!1), null == h || h();
              })
              .catch(() => {});
          }, [m, h]);
        (0, a.useEffect)(() => {
          C(_);
        }, [_]),
          (0, r.U)(() => {
            void 0 !== D && D !== k && (y(!0), k ? x() : N());
          }, [N, x, k, D]);
        let j = (0, a.useMemo)(() => k || f, [k, f]),
          M = (0, a.useCallback)(
            () =>
              d && !j
                ? null
                : "bare" === b
                ? n
                : (0, i.jsx)("div", { className: o(l.content), children: n }),
            [n, d, j, b]
          );
        return (0, i.jsx)("div", {
          "aria-hidden": !_,
          className: l.ndsDisclosure,
          "data-test": null != u ? u : "collapsibleClippingDiv",
          ref: g,
          children: (0, i.jsx)("div", {
            className: o(
              l.disclosureWrapper,
              "menu" === b && l.disclosureMenu,
              !j && l.hidden,
              t
            ),
            "data-test": "collapsibleContentDiv",
            ref: v,
            children: M(),
          }),
        });
      };
      u.displayName = "Disclosure";
    },
    48649: (e, n, t) => {
      "use strict";
      t.d(n, { n: () => p });
      var i = t(3576),
        s = t(62701),
        r = t(65699),
        o = t(37876),
        a = t(87993),
        l = t(15039),
        c = t(14232),
        u = t(40123),
        d = t(42773),
        _ = t(16451),
        m = t(49494),
        h = t(72631);
      let p = (e) => {
        var {
            controlled: n = !1,
            disabled: t = !1,
            onClick: p,
            open: b = !1,
            children: f,
            className: y,
            contentLabel: v,
            deferContentRendering: g,
            noAnimation: k = !1,
            onOpen: C,
            onClose: D,
            headingProps: x,
            renderLeading: N,
            size: j,
            subhead: M,
            title: A,
            titleStyle: w,
            id: S = encodeURI("string" == typeof A ? A : null != v ? v : ""),
            variant: P,
          } = e,
          E = (0, r._)(e, [
            "controlled",
            "disabled",
            "onClick",
            "open",
            "children",
            "className",
            "contentLabel",
            "deferContentRendering",
            "noAnimation",
            "onOpen",
            "onClose",
            "headingProps",
            "renderLeading",
            "size",
            "subhead",
            "title",
            "titleStyle",
            "id",
            "variant",
          ]);
        let [F, R] = (0, c.useState)(b),
          T = (0, c.useCallback)(
            (e) => {
              e.persist(),
                e.preventDefault(),
                null == p || p(e),
                n || R((e) => !e);
            },
            [n, p]
          ),
          L = n ? b : F,
          O = t ? {} : { href: "#".concat(S), onClick: T, "aria-expanded": L },
          H = (0, h.Am)(A, null != v ? v : ""),
          I = "bare" === P,
          Y = "menu" === P,
          z = (0, o.jsx)(a.I, {
            className: l(m.icon, L && m.iconDown),
            name: "chevron-down",
          }),
          W = (0, o.jsx)(_.E, {
            className: l(Y && m.menuDisclosure),
            deferContentRendering: g,
            id: S,
            isOpen: L,
            noAnimation: k,
            onClose: D,
            onOpen: C,
            variant: P,
            children: f,
          });
        if (I)
          return (0, o.jsx)(
            "div",
            (0, s._)((0, i._)({ className: y, "data-test": H }, E), {
              children: W,
            })
          );
        let X = (0, o.jsxs)(
          "button",
          (0, s._)(
            (0, i._)(
              {
                className: l(
                  m.button,
                  "md" === j && m.buttonMd,
                  Y && m.buttonMenu
                ),
                disabled: t,
              },
              O
            ),
            {
              "aria-label": v,
              type: "button",
              children: [
                !Y && z,
                Y &&
                  N &&
                  (0, o.jsx)("div", {
                    className: m.buttonLeading,
                    children: N,
                  }),
                (0, h.X5)(A, P, M),
                Y && z,
              ],
            }
          )
        );
        return (0, o.jsxs)(
          "div",
          (0, s._)(
            (0, i._)(
              {
                className: l(
                  m.ndsAccordion,
                  "menu" === P && m[P],
                  t && m.disabled,
                  y
                ),
                "data-test": H,
              },
              E
            ),
            {
              children: [
                u(x)
                  ? (0, o.jsx)(o.Fragment, { children: X })
                  : (0, o.jsx)(
                      d.D,
                      (0, s._)((0, i._)({ className: l(m.heading) }, x), {
                        children: X,
                      })
                    ),
                W,
              ],
            }
          )
        );
      };
      p.displayName = "Accordion";
    },
    49494: (e) => {
      e.exports = {
        ndsDisclosure: "styles_ndsDisclosure__mmbM3",
        content: "styles_content__VCiRM",
        disclosureWrapper: "styles_disclosureWrapper__JDSgi",
        disclosureMenu: "styles_disclosureMenu__esCko",
        hidden: "styles_hidden__87xTM",
        ndsAccordion: "styles_ndsAccordion__miRJm",
        buttonHead: "styles_buttonHead__NF8dz",
        icon: "styles_icon__GARzg",
        iconDown: "styles_iconDown__knIxn",
        heading: "styles_heading__woIf6",
        button: "styles_button__D8Xvn",
        buttonMd: "styles_buttonMd__0_xYe",
        buttonLeading: "styles_buttonLeading__pXen5",
        buttonContent: "styles_buttonContent__kCkI2",
        buttonSubhead: "styles_buttonSubhead__YcUs3",
        buttonMenu: "styles_buttonMenu__5W4fI",
        menu: "styles_menu__FfRvL",
        menuDisclosure: "styles_menuDisclosure__5ZPMz",
        disabled: "styles_disabled__k6478",
      };
    },
    72631: (e, n, t) => {
      "use strict";
      t.d(n, { Am: () => c, X5: () => m, nk: () => _ });
      var i = t(3576),
        s = t(62701),
        r = t(37876),
        o = t(91342),
        a = t(15039),
        l = t(49494);
      let c = (e, n) =>
        "string" == typeof e
          ? "".concat((0, o.eh)((0, o.Fh)((0, o.SS)(e))), "-accordion")
          : "string" == typeof n
          ? "".concat((0, o.eh)((0, o.Fh)((0, o.SS)(n))), "-accordion")
          : void 0;
      function u(e, n) {
        Object.entries(n).forEach((n) => {
          let [t, i] = n;
          e.style[t] = "function" == typeof i ? i() : i;
        });
      }
      function d(e) {
        return Object.prototype.hasOwnProperty.call(e, "current")
          ? e.current
          : e;
      }
      function _(e) {
        let n = (0, i._)(
            {},
            {
              skipAnimation: !1,
              setup: [[null, {}]],
              from: [[null, {}]],
              to: [[null, {}]],
            },
            e
          ),
          t = new Map();
        return (
          n.setup.forEach((e) => {
            let [n, i] = e;
            if (!n) return;
            let s = d(n);
            t.set(s, i.transitionDuration),
              u(s, Object.assign(i, { transitionDuration: "0ms" }));
          }),
          n.from.forEach((e) => {
            let [n, t] = e;
            if (!n) return;
            let s = d(n),
              r = (0, i._)({}, t);
            delete r.transitionDuration, u(s, r);
          }),
          document.body.clientHeight,
          Promise.all(
            n.to.map((e) => {
              let [r, o] = e;
              if (!r) return Promise.reject();
              let a = d(r),
                l = n.skipAnimation
                  ? Promise.resolve()
                  : new Promise((e, n) => {
                      "function" == typeof a.cancelTransitionCallback &&
                        a.cancelTransitionCallback(),
                        (a.cancelTransitionCallback = () => {
                          n(Error("transition interrupted!"));
                        }),
                        a.addEventListener(
                          "transitionend",
                          (n) => {
                            delete a.cancelTransitionCallback, e(n);
                          },
                          { once: !0 }
                        );
                    }),
                c = n.skipAnimation
                  ? o
                  : (0, s._)((0, i._)({}, o), { transitionDuration: t.get(a) });
              return u(a, c), l;
            })
          )
        );
      }
      let m = (e, n, t) =>
        "string" != typeof e
          ? e
          : (0, r.jsxs)("div", {
              className: a(l.buttonContent),
              children: [
                (0, r.jsx)("div", { className: l.buttonHead, children: e }),
                ((e, n) => {
                  if ("menu" === e && n)
                    return (0, r.jsx)("div", {
                      className: l.buttonSubhead,
                      children: n,
                    });
                })(n, t),
              ],
            });
    },
  },
]);
