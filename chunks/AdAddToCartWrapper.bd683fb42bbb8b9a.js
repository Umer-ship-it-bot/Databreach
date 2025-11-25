"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7045],
  {
    48847: (e, l, a) => {
      a.d(l, { E: () => c });
      var n = a(3576),
        d = a(62701),
        r = a(65699),
        t = a(37876),
        i = a(15039),
        s = a(44877),
        u = a(42773),
        o = a(43713);
      let c = (e) => {
        var {
            children: l,
            className: a,
            handleClose: c,
            id: v,
            headingRef: p,
            renderLeading: m,
            renderSubheading: g,
          } = e,
          h = (0, r._)(e, [
            "children",
            "className",
            "handleClose",
            "id",
            "headingRef",
            "renderLeading",
            "renderSubheading",
          ]);
        return (0, t.jsxs)(
          "div",
          (0, d._)((0, n._)({ className: i(o.heading, a) }, h), {
            children: [
              null == m ? void 0 : m(c),
              (0, t.jsxs)("div", {
                className: o.innerDiv,
                children: [
                  (0, t.jsx)(u.D, {
                    id: v,
                    level: 2,
                    ref: p,
                    stackSpacing: "0",
                    tabIndex: -1,
                    children: l,
                  }),
                  null == g ? void 0 : g(),
                ],
              }),
              (0, t.jsx)(s.w, { className: o.closeButton, onClick: c }),
            ],
          })
        );
      };
      c.displayName = "ModalHeading";
    },
    99576: (e, l, a) => {
      a.r(l), a.d(l, { AdAddToCartWrapper: () => s });
      var n = a(37876),
        d = a(14232),
        r = a(64271),
        t = a(4130),
        i = a(60816);
      let s = () => {
        let [e, l] = (0, d.useState)(),
          [a, s] = (0, d.useState)(),
          [u, o] = (0, d.useState)(null),
          c = (e) => {
            var a, n, d;
            if (
              (null == e || null == (a = e.data) ? void 0 : a.partnumber) &&
              (null == (n = e.origin)
                ? void 0
                : n.includes("googlesyndication.com"))
            ) {
              let a = Date.now();
              e.stopImmediatePropagation(),
                e.preventDefault(),
                l(null == (d = e.data) ? void 0 : d.partnumber),
                s(a);
            }
          },
          v = (0, d.useCallback)(
            (l) => {
              var a;
              if ((null == (a = l.products) ? void 0 : a.length) !== 1)
                return l;
              let n = l.products[0];
              return (
                n &&
                  n.tcin === e &&
                  (n.placementType = r.my.RoundelAddToCartTemplate),
                l
              );
            },
            [e]
          ),
          p = (0, d.useCallback)((e) => {
            var l;
            o(
              null != (l = null == e ? void 0 : e.querySelector("button"))
                ? l
                : null
            );
          }, []);
        return (
          (0, d.useEffect)(() => {
            e && u && u.click();
          }, [a, u, e]),
          (0, d.useEffect)(
            () => (
              window.addEventListener("message", c, !1),
              () => {
                window.removeEventListener("message", c, !1);
              }
            ),
            []
          ),
          e
            ? (0, n.jsx)("div", {
                ref: p,
                style: { display: "none" },
                children: (0, n.jsx)(t.h, {
                  handleOverridingOrAddingTrackingFieldsToAddToCartSuccess: v,
                  overrideBehavior: i.Fz.ENABLE_CHOOSE_OPTIONS_ONLY_MODE,
                  placementType: r.my.RoundelAddToCartTemplate,
                  tcin: e,
                }),
              })
            : null
        );
      };
      s.displayName = "AdAddToCartWrapper";
    },
  },
]);
