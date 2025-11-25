(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5793],
  {
    13505: (e, a, t) => {
      "use strict";
      t.d(a, { f: () => c });
      var i = t(3576),
        s = t(62701),
        n = t(65699),
        r = t(37876),
        o = t(15039),
        l = t(36633),
        d = t(37312);
      let c = (e) => {
        var {
            "aria-hidden": a,
            ariaHidden: t = !1,
            children: c,
            className: u,
            "data-test": p = "ribbon",
            hasBullseye: m = !1,
            renderLeading: h,
            renderTrailing: y,
            variant: v = "white",
          } = e,
          _ = (0, n._)(e, [
            "aria-hidden",
            "ariaHidden",
            "children",
            "className",
            "data-test",
            "hasBullseye",
            "renderLeading",
            "renderTrailing",
            "variant",
          ]);
        return ["neutral", "inverse"].includes(v)
          ? (0, r.jsxs)(
              "div",
              (0, s._)(
                (0, i._)(
                  {
                    "aria-hidden": a,
                    className: o(
                      d.ndsRibbonNew,
                      (h || y) && d.renderIcon,
                      d[v],
                      u
                    ),
                  },
                  _
                ),
                {
                  children: [
                    h,
                    (0, r.jsx)("div", { className: d.children, children: c }),
                    y,
                  ],
                }
              )
            )
          : (0, r.jsxs)(
              "span",
              (0, s._)(
                (0, i._)(
                  {
                    "aria-hidden": a || t,
                    className: o(d.ndsRibbon, d[v], u),
                    "data-test": p,
                  },
                  _
                ),
                {
                  children: [
                    c,
                    m &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(l.E, { children: " target" }),
                          (0, r.jsx)("span", {
                            "aria-hidden": !0,
                            className: o(
                              d.bullseye,
                              "black" === v && d.bullseyeBlack
                            ),
                            "data-test": "ribbon-bullseye-glyph",
                            children: "\xac",
                          }),
                        ],
                      }),
                  ],
                }
              )
            );
      };
      c.displayName = "Ribbon";
    },
    17165: (e) => {
      e.exports = {
        iconTransitioner: "IconTransitioner_iconTransitioner__ogqoA",
      };
    },
    31337: (e, a, t) => {
      "use strict";
      t.d(a, { u: () => r });
      var i = t(3576),
        s = t(37876),
        n = t(9394);
      let r = (e) =>
        (0, s.jsx)(
          n.I,
          (0, i._)(
            { _name: "SaveFill", _src: "SaveFill.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      r.displayName = "IconSaveFill";
    },
    34593: (e, a, t) => {
      "use strict";
      t.d(a, { I: () => z });
      var i = t(37876),
        s = t(14232),
        n = t(97529),
        r = t(57086),
        o = t(20881),
        l = t(19427);
      let d = async (e) => {
          let {
              apis: { loyaltyGuestOfferLists: a },
              baseUrl: t,
              circleOfferLoyaltyKeys: i,
            } = (0, l.$)().services.apiPlatform,
            s = {
              bookmarked: null == e ? void 0 : e.bookmarked,
              offer_type: null == e ? void 0 : e.offer_type,
              event_date_time: null == e ? void 0 : e.event_date_time,
            },
            n = ""
              .concat(t, "/")
              .concat(a.endpointPaths.putOfferV1, "/")
              .concat(null == e ? void 0 : e.offerId),
            {
              data: r,
              ok: d,
              statusText: c,
            } = await (0, o.yJ)(n, {
              headers: {
                Authorization: i.loyaltyClientKey,
                "x-api-key": i.loyaltyApiKey,
              },
              credentials: "include",
              body: JSON.stringify(s),
            });
          if (d) return null != r ? r : null;
          throw Error("".concat(c));
        },
        { useMutation: c } = (0, r.k)({
          name: "@web/domain-circle-offers/put-offer-v1",
          mutationFn: (e) => d(e),
        });
      var u = t(31696),
        p = t(52651),
        m = t(78533),
        h = t(60823),
        y = t(26408),
        v = t(96756),
        _ = t(31337),
        b = t(51086),
        f = t(44046),
        k = t(55472),
        w = t(98601),
        g = t(3576),
        x = t(62701),
        j = t(17165),
        T = t(73880);
      let I = {
          a: { "--_a-visibility": "visible", "--_b-visibility": "hidden" },
          b: { "--_a-visibility": "hidden", "--_b-visibility": "visible" },
        },
        S = (e, a) => {
          if (CSS.supports("(transition-behavior: allow-discrete)"))
            return null;
          let t = (0, T.Z)(e),
            i = (0, s.useRef)(void 0),
            [n, r] = (0, s.useState)(I[e]);
          return (
            (0, s.useEffect)(() => {
              e !== t &&
                (window.clearTimeout(i.current),
                (i.current = window.setTimeout(() => {
                  r(I[e]);
                }, a)));
            }, [a, t, e, i]),
            n
          );
        };
      S.displayName = "useA11yVisibility";
      let A = (e) => {
        let {
            children: a,
            className: t,
            durationMs: n = 300,
            shown: r,
            style: o,
            transitionTheme: l = "crossfade",
          } = e,
          d = S(r, n),
          c =
            300 *
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
          u = (0, s.useMemo)(
            () =>
              (0, x._)((0, g._)({}, o, d), {
                "--icon-transitioner-duration": "".concat(c, "ms"),
              }),
            [d, c, o]
          );
        return (0, i.jsx)("div", {
          "aria-live": "polite",
          className: [
            j.iconTransitioner,
            "".concat(r, "-shown"),
            t,
            "transition-".concat(l),
          ].join(" "),
          style: u,
          children: a,
        });
      };
      A.displayName = "IconTransitioner";
      var F = t(77232);
      let N = F.I4.button.withConfig({ componentId: "sc-a2266238-0" })([
          "touch-action:manipulation;cursor:pointer;position:absolute;z-index:1;font-size:0;border-radius:50%;",
        ]),
        O = F.I4.div.withConfig({ componentId: "sc-a2266238-1" })(
          [
            "border:",
            ";border-radius:50%;padding:",
            ";background-color:rgb(255 255 255 / 90%);width:max-content;",
          ],
          (e) =>
            e.hasOutline
              ? "1px solid ".concat(w.Tj.palette.gray.medium, ";")
              : "",
          (e) => e.iconPadding
        ),
        R = F.I4.div.withConfig({ componentId: "sc-a2266238-2" })([
          "position:relative;margin-left:auto;",
        ]),
        C = F.I4.div.withConfig({ componentId: "sc-a2266238-3" })(
          [
            "border:1px solid ",
            ";border-radius:50%;padding:3px;background-color:",
            ";",
          ],
          w.Tj.palette.green.default,
          w.Tj.palette.white
        ),
        E = F.I4.div.withConfig({ componentId: "sc-a2266238-4" })(
          ["border-radius:50%;padding:4px;background-color:", ";"],
          w.Tj.palette.red.default
        ),
        B = (e) => {
          let {
              adjustSize: a = !1,
              hasOutline: t = !1,
              isAdded: s = !1,
              isAutoApplied: n = !0,
              isSaved: r = !1,
            } = e,
            { screenMdMax: o } = (0, k.e)();
          return (0, i.jsx)(i.Fragment, {
            children: n
              ? (0, i.jsx)(O, {
                  hasOutline: t,
                  iconPadding: t ? (a && !o ? "11px" : "7px") : "4px",
                  children: (0, i.jsxs)(A, {
                    shown: r ? "b" : "a",
                    transitionTheme: "circle-mask",
                    children: [
                      (0, i.jsx)(v.F, { height: 24 }),
                      (0, i.jsx)(_.u, {
                        color: w.Tj.palette.gray.dark,
                        "data-test": "DealBookmarkSaved",
                        height: 24,
                      }),
                    ],
                  }),
                })
              : (0, i.jsxs)(A, {
                  shown: s ? "b" : "a",
                  transitionTheme: "circle-mask-rotate",
                  children: [
                    (0, i.jsx)(E, {
                      children: (0, i.jsx)(b.t, {
                        color: w.Tj.palette.white,
                        width: 24,
                      }),
                    }),
                    (0, i.jsx)(C, {
                      children: (0, i.jsx)(f.V, {
                        color: w.Tj.palette.green.default,
                        width: 24,
                      }),
                    }),
                  ],
                }),
          });
        };
      B.displayName = "BookmarkIcon";
      let z = (0, s.memo)((e) => {
        var a, t;
        let {
            adjustSize: r = !1,
            ariaOfferLabel: o = "",
            componentType: l,
            hasOutline: d = !1,
            isAutoApplied: v = !0,
            offerId: _,
            przTracking: b,
            saveOfferTrackingEventPayload: f,
          } = e,
          k = (0, s.useRef)(null),
          [w, { refetch: g }] = (0, n.ei)(),
          x = null == (t = w()) || null == (a = t[0]) ? void 0 : a.offers,
          j = (0, s.useMemo)(
            () =>
              null == x
                ? void 0
                : x.some(
                    (e) =>
                      e.offer_id === _ && (null == e ? void 0 : e.bookmarked)
                  ),
            [_, x]
          ),
          [T, I] = (0, s.useState)(j),
          S = (0, s.useMemo)(
            () =>
              null == x
                ? void 0
                : x.some(
                    (e) => e.offer_id === _ && (null == e ? void 0 : e.added)
                  ),
            [_, x]
          ),
          [A, F] = (0, s.useState)(S);
        (0, s.useEffect)(() => {
          F(S), I(j);
        }, [S, j]);
        let [O] = c({}),
          [C] = (0, u.zw)(),
          [E] = (0, p.cz)(),
          [z, M] = (0, s.useState)(!1),
          K = (0, s.useCallback)(() => M(!0), [M]),
          P = (0, s.useCallback)(() => M(!1), [M]),
          L = (0, s.useCallback)(() => {
            O({
              offerId: _,
              bookmarked: !T,
              offer_type: "CWL",
              event_date_time: new Date().toISOString(),
            }).then(() => {
              g(), I(!T), K();
            });
          }, [T, _, O, g, I, K]),
          { trackSaveOfferEvent: V } = (0, m.s)(),
          D = (0, s.useCallback)(() => {
            A
              ? E({ offerId: _ }).then(() => {
                  g(), F(!1), K();
                })
              : C({ offerId: _ }).then(() => {
                  g(), F(!0), K();
                });
          }, [A, E, _, C, g, F, K]),
          { trackClick: J } = (0, h.f)(),
          q = (0, s.useCallback)(() => {
            J.track(
              ((e) => {
                let a = e.isBookmarked
                    ? "REMOVE_BOOKMARKED_OFFER"
                    : "BOOKMARK_OFFER",
                  t = e.isAdded ? "REMOVE_OFFER" : "APPLY_OFFER";
                return e.przTracking
                  ? {
                      clickType: e.isAutoApplied ? a : t,
                      element: { id: e.offerId, type: "OFFER" },
                      featureType: e.componentType,
                      prz: e.przTracking,
                    }
                  : {
                      clickType: e.isAutoApplied ? a : t,
                      element: { id: e.offerId, type: "OFFER" },
                      featureType: e.componentType,
                    };
              })({
                componentType: l,
                isAdded: A,
                isAutoApplied: v,
                isBookmarked: T,
                offerId: _,
                przTracking: b,
              })
            ),
              A || v || !f || V.track(f),
              v ? L() : D();
          }, [l, D, L, A, v, T, _, b, f, J, V]),
          H = ((e) => {
            let {
              ariaOfferLabel: a = "this deal",
              isAdded: t,
              isAutoApplied: i,
              isBookmarked: s,
            } = e;
            return i
              ? s
                ? "remove ".concat(a, " from your saved deals")
                : "add ".concat(a, " to your saved deals")
              : t
              ? "unapply ".concat(a, " and remove from your saved deals")
              : "apply ".concat(a, " and add to your saved deals");
          })({
            ariaOfferLabel: o,
            isAdded: A,
            isAutoApplied: v,
            isBookmarked: T,
          });
        return (0, i.jsxs)(R, {
          className: "h-margin-r-jumbo",
          children: [
            (0, i.jsx)(N, {
              "aria-label": H,
              "data-test": "BookmarkButton",
              id: "bookmark-button-".concat(_),
              onClick: q,
              ref: k,
              type: "button",
              children: (0, i.jsx)(B, {
                adjustSize: r,
                hasOutline: d,
                isAdded: A,
                isAutoApplied: v,
                isSaved: T,
              }),
            }),
            (0, i.jsx)(y.y, {
              isOpen: z,
              message: "This deal was ".concat(
                T || A ? "added to" : "removed from",
                " your saved deals."
              ),
              onClose: P,
              returnFocusEl: k.current,
              role: "dialog",
              variant: "timed",
            }),
          ],
        });
      });
      z.displayName = "DealsBookmark";
    },
    37312: (e) => {
      e.exports = {
        ndsRibbon: "styles_ndsRibbon__IXA_M",
        white: "styles_white__HAjCJ",
        black: "styles_black__Rmtff",
        bullseye: "styles_bullseye__eaUZt",
        bullseyeBlack: "styles_bullseyeBlack__AwvzR",
        ndsRibbonNew: "styles_ndsRibbonNew__LLCfK",
        children: "styles_children__xDpGm",
        inverse: "styles_inverse__g4Avd",
        renderIcon: "styles_renderIcon__SnmMT",
      };
    },
    51086: (e, a, t) => {
      "use strict";
      t.d(a, { t: () => r });
      var i = t(3576),
        s = t(37876),
        n = t(9394);
      let r = (e) =>
        (0, s.jsx)(
          n.I,
          (0, i._)(
            { _name: "Scissors", _src: "Scissors.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      r.displayName = "IconScissors";
    },
    96756: (e, a, t) => {
      "use strict";
      t.d(a, { F: () => r });
      var i = t(3576),
        s = t(37876),
        n = t(9394);
      let r = (e) =>
        (0, s.jsx)(
          n.I,
          (0, i._)(
            { _name: "Save", _src: "Save.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      r.displayName = "IconSave";
    },
    97529: (e, a, t) => {
      "use strict";
      t.d(a, { ei: () => d });
      var i = t(17379),
        s = t(17800),
        n = t(20881),
        r = t(19427),
        o = t(10291);
      let { useQuery: l } = (0, i.T)({
          name: "@web/domain-circle-offers/get-saved-offers-v1",
          defaultOptions: { staleTime: o.L },
          queryFn: async () => {
            let {
              data: e,
              ok: a,
              statusText: t,
            } = await (() => {
              let {
                  apis: { loyaltyGuestOfferLists: e },
                  baseUrl: a,
                  circleOfferLoyaltyKeys: t,
                } = (0, r.$)().services.apiPlatform,
                i = "".concat(a, "/").concat(e.endpointPaths.getSavedOffersV1);
              return {
                fetch: () =>
                  (0, n.Jt)(i, {
                    headers: {
                      Authorization: t.loyaltyClientKey,
                      "x-api-key": t.loyaltyApiKey,
                    },
                    credentials: "include",
                  }),
              };
            })().fetch();
            if (a) return null != e ? e : null;
            throw Error("".concat(t));
          },
        }),
        d = (0, s.L)(l, { allowAnonymous: !0 });
    },
  },
]);
