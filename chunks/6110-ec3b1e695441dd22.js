(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6110],
  {
    40788: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => x });
      var l = r(3576),
        a = r(62701),
        n = r(65699),
        s = r(37876),
        o = r(15039),
        i = r(4917),
        u = r(14232),
        c = r(50046),
        d = r(55677);
      let v = [0, 0.4, 0.8],
        f = function () {
          let {
              options: e = {},
              disabled: t,
              onEnterView: r,
              onLeaveView: l,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            [a, n] = (0, u.useState)(void 0),
            s = (0, u.useRef)(new Set()),
            o = c({ rootMargin: "9999px 0% 9999px 0%", threshold: v }, e),
            i = (0, u.useCallback)(
              (e) => {
                e.forEach((e) => {
                  let t = e.target;
                  e.intersectionRatio > o.threshold[0] &&
                    (s.current.add(e.target), null == r || r(e)),
                    e.intersectionRatio >= o.threshold[2]
                      ? ((t.dataset.ioV = "full"), (t.inert = !1))
                      : e.intersectionRatio >= o.threshold[1]
                      ? ((t.dataset.ioV = "partial"), (t.inert = !1))
                      : e.intersectionRatio > o.threshold[0]
                      ? ((t.dataset.ioV = "peek"), (t.inert = !0))
                      : ((t.dataset.ioV = "none"),
                        s.current.delete(e.target),
                        null == l || l(e));
                });
              },
              [o.threshold, r, l]
            ),
            f = (0, d.B)({ callback: i, options: o, disabled: t });
          return (
            (0, u.useEffect)(() => {
              n(f);
            }, [f]),
            [a, s]
          );
        };
      var _ = r(42322),
        p = r(37732),
        g = r(81091),
        h = r(87993),
        m = r(19130),
        S = r(44558);
      let b = (e) => {
        var {
            className: t,
            direction: r = "next",
            carouselRef: i,
            onClick: c,
          } = e,
          d = (0, n._)(e, ["className", "direction", "carouselRef", "onClick"]);
        let v = "previous" === r ? "pagination-back" : "pagination-forward",
          f = (0, u.useCallback)(
            (e) => {
              ((e) => {
                var t, r, l, a;
                let { ref: n, direction: s } = e,
                  o = null == (t = n.current) ? void 0 : t.children;
                if (o) {
                  let e,
                    t = Array.from(o),
                    i = 0;
                  if ("left" === s) {
                    let r = t.find((e) => "full" === e.dataset.ioV);
                    if (!r) return;
                    (e = i = t.length - 1),
                      r &&
                        0 !== t.indexOf(r) &&
                        (e = Number(r.dataset.ioI) - 1);
                  } else {
                    let r = t.findLast((e) => "full" === e.dataset.ioV);
                    if (!r) return;
                    (e = 0),
                      t.indexOf(r) !== t.length - 1 &&
                        (e = Number(r.dataset.ioI) + 1);
                  }
                  let u = e === i ? "auto" : "smooth",
                    c = e === i ? 100 : 250;
                  null == n ||
                    null == (a = n.current) ||
                    null == (l = a.querySelector) ||
                    null == (r = l.call(a, '[data-io-i="'.concat(e, '"]'))) ||
                    r.scrollIntoView({
                      inline: "left" === s ? "end" : "start",
                      behavior: u,
                      block: "nearest",
                    }),
                    setTimeout(() => {
                      let t = o.item(e);
                      if (t) {
                        var r;
                        (null != (r = (0, m.nq)(t)[0]) ? r : t).focus({
                          preventScroll: !0,
                        });
                      }
                    }, c);
                }
              })({ ref: i, direction: "previous" === r ? "left" : "right" }),
                null == c || c(e, r);
            },
            [i, r, c]
          );
        return (0, s.jsx)(
          "button",
          (0, a._)(
            (0, l._)(
              {
                className: o(S.paginationButton, S[r], t),
                onClick: f,
                type: "button",
              },
              d
            ),
            { children: (0, s.jsx)(h.I, { name: v }) }
          )
        );
      };
      b.displayName = "CarouselPaginationButton";
      var P = r(98983);
      let x = (e) => {
        var {
            buttonBehavior: t,
            buttonProps: r = {},
            children: c,
            goToItem: d,
            className: v,
            hasPaginationDots: h,
            isGallery: m,
            itemGap: x = "4px",
            nextButtonLabel: y,
            observerConfig: N,
            onScroll: C,
            previousButtonLabel: k,
            preventScrollSkip: I,
            ref: E,
            scrollbarGap: M,
            shouldScrollEnd: w,
          } = e,
          B = (0, n._)(e, [
            "buttonBehavior",
            "buttonProps",
            "children",
            "goToItem",
            "className",
            "hasPaginationDots",
            "isGallery",
            "itemGap",
            "nextButtonLabel",
            "observerConfig",
            "onScroll",
            "previousButtonLabel",
            "preventScrollSkip",
            "ref",
            "scrollbarGap",
            "shouldScrollEnd",
          ]);
        let R = (0, u.useRef)(null),
          j = (0, p.N)(R, E),
          [L, G] = (0, u.useState)({
            currentPage: 1,
            totalPages: 1,
            visibleItems: [1],
            canStillScroll: !0,
          }),
          [V, T] = f(N),
          O = u.Children.count(c),
          Y = (0, u.useMemo)(
            () =>
              i((e) => {
                if (R.current) {
                  let t = (0, P.SR)(T.current, R.current, m);
                  G(t), null == C || C(e, t);
                }
              }, 200),
            [m, C]
          );
        (0, u.useEffect)(() => {
          R.current && G((0, P.E)(R.current, m));
        }, [m]),
          (0, u.useEffect)(() => {
            R.current && T.current && G((0, P.SR)(T.current, R.current, m));
          }, [O, m]);
        let q = (0, u.useMemo)(
          () =>
            i(() => {
              R.current && G((0, P.SR)(T.current, R.current, m));
            }, 250),
          [m]
        );
        (0, u.useEffect)(() => {
          var e;
          return (
            null == (e = window) || e.addEventListener("resize", q),
            () => {
              var e;
              null == q || q.cancel(),
                null == (e = window) || e.removeEventListener("resize", q);
            }
          );
        }, [q]),
          (0, P.QO)({ iterable: d, ref: R });
        let [A, D] = (0, u.useMemo)(
            () =>
              (0, P.uM)(
                !!w,
                (L.totalPages || 1) > 1,
                1 !== (L.currentPage || 1),
                L.canStillScroll
              ),
            [L.canStillScroll, L.currentPage, L.totalPages, w]
          ),
          Q = (0, l._)({ carouselRef: R }, r),
          z = (0, u.useMemo)(
            () => (0, P.cp)(k, "previous", 1 === L.currentPage),
            [L.currentPage, k]
          ),
          F = (0, u.useMemo)(
            () => (0, P.cp)(y, "next", !L.canStillScroll),
            [y, L.canStillScroll]
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(
              "div",
              (0, a._)(
                (0, l._)(
                  {
                    "aria-label": L.totalPages > 1 ? "Carousel" : void 0,
                    className: o(S.ndsCarousel, v),
                    role: L.totalPages > 1 ? "region" : void 0,
                  },
                  B
                ),
                {
                  children: [
                    (0, s.jsx)(
                      b,
                      (0, a._)(
                        (0, l._)(
                          {
                            className: o("tabAppear" === t && S.hideButton),
                            disabled: !A || void 0,
                          },
                          Q
                        ),
                        { "aria-label": z, direction: "previous" }
                      )
                    ),
                    (0, s.jsx)(g.Y.Provider, {
                      value: { intersectionObserver: V },
                      children: (0, s.jsx)("ul", {
                        className: o(
                          S.unorderedList,
                          m && S.isGallery,
                          I && S.preventScrollSkip,
                          h && S.hasPaginationDots
                        ),
                        onScroll: Y,
                        ref: j,
                        style: {
                          "--item-gap": m ? 0 : x,
                          "--scrollbar-gap": M,
                        },
                        children: c,
                      }),
                    }),
                    (0, s.jsx)(
                      b,
                      (0, a._)(
                        (0, l._)(
                          {
                            className: o("tabAppear" === t && S.hideButton),
                            disabled: !D || void 0,
                          },
                          Q
                        ),
                        { "aria-label": F }
                      )
                    ),
                  ],
                }
              )
            ),
            h &&
              (0, s.jsx)(_.X, {
                currentPageIndex: L.currentPage - 1,
                totalPages: L.totalPages,
              }),
          ],
        });
      };
      x.displayName = "Carousel";
    },
    44558: (e) => {
      e.exports = {
        ndsCarousel: "styles_ndsCarousel__yMTV9",
        paginationButton: "styles_paginationButton__vMqww",
        next: "styles_next__rUa5_",
        previous: "styles_previous__Yfb9_",
        hideButton: "styles_hideButton__tgrvp",
        unorderedList: "styles_unorderedList__Q95jr",
        hasPaginationDots: "styles_hasPaginationDots__9O5Ta",
        preventScrollSkip: "styles_preventScrollSkip__1WJ3t",
        ndsCarouselItem: "styles_ndsCarouselItem__dnUkr",
        isGallery: "styles_isGallery__Nnw_Q",
      };
    },
    52319: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => v });
      var l = r(3576),
        a = r(65699),
        n = r(37876),
        s = r(82631),
        o = r(15039),
        i = r(14232),
        u = r(61114);
      r(50046);
      var c = r(81091),
        d = r(44558);
      let v = (e) => {
        var { className: t, iterator: r } = e,
          v = (0, a._)(e, ["className", "iterator"]);
        let { value: f, ref: _ } = (0, s.l)(),
          { intersectionObserver: p } = (0, i.useContext)(c.Y);
        return (
          (0, u.Y)({ element: f, observer: null == p ? void 0 : p.current }),
          (0, n.jsx)(
            "li",
            (0, l._)(
              { className: o(d.ndsCarouselItem, t), "data-io-i": r, ref: _ },
              v
            )
          )
        );
      };
      v.displayName = "CarouselItem";
    },
    81091: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => l });
      let l = (0, r(14232).createContext)({});
    },
    98983: (e, t, r) => {
      "use strict";
      r.d(t, {
        uM: () => v,
        cp: () => f,
        E: () => i,
        SR: () => c,
        QO: () => o,
      });
      var l = r(3576),
        a = r(73880),
        n = r(50046),
        s = r(14232);
      let o = (e) => {
          let { iterable: t, ref: r, scrollOptions: o } = e,
            i = (0, a.Z)(t);
          (0, s.useEffect)(() => {
            if (void 0 !== t && t !== i) {
              var e, a, s;
              if (void 0 === i && 0 === t) return;
              let u = t && i ? "smooth" : void 0,
                c =
                  null == r ||
                  null == (a = r.current) ||
                  null == (e = a.querySelector)
                    ? void 0
                    : e.call(a, '[data-io-i="'.concat(t, '"]')),
                d = null == c ? void 0 : c.offsetLeft;
              null == r ||
                null == (s = r.current) ||
                s.scrollTo(n((0, l._)({ left: d, behavior: u }, o)));
            }
          }, [t, i, o]);
        },
        i = (e, t) => {
          let { scrollWidth: r, clientWidth: l } = e,
            a = (t ? Math.floor : Math.ceil)(r / l) || 1;
          return {
            currentPage: 1,
            totalPages: Number.isInteger(a) ? a : 1,
            visibleItems: [1],
            canStillScroll: r > l,
          };
        },
        u = (e, t) => e - t,
        c = (e, t, r) => {
          let l = ((e) => {
              let t = [];
              return (
                e.forEach((e) => {
                  t.push(Number(e.dataset.ioI));
                }),
                t.sort(u)
              );
            })(e),
            { scrollLeft: a, scrollWidth: n, clientWidth: s } = t,
            o = r ? Math.floor : Math.ceil,
            i = o((a + s) / s) || 1,
            c = o(n / s) || 1;
          return {
            canStillScroll: n - s - a > 5,
            currentPage: Number.isInteger(i) ? i : 1,
            totalPages: Number.isInteger(c) ? c : 1,
            visibleItems: l,
          };
        },
        d = (e, t, r) => (!e && !!t) || (!!e && !!r),
        v = (e, t, r, l) => [d(e, t, r), d(e, t, l)],
        f = (e, t, r) =>
          e
            ? e
            : "previous" === t
            ? r
              ? "Go To End"
              : "Previous Page"
            : r
            ? "Go To Start"
            : "Next Page";
    },
  },
]);
