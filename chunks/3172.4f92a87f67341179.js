(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3172],
  {
    9208: (e, t, i) => {
      "use strict";
      i.d(t, {
        Xx: () => u,
        _q: () => d,
        ah: () => s,
        eM: () => p,
        iW: () => o,
        vC: () => m,
        vD: () => c,
      });
      var a = i(77232),
        n = i(75570),
        l = i(6908),
        r = i(98601);
      let c = a.I4.div.withConfig({ componentId: "sc-d56f6f84-0" })(
          [
            "display:flex;flex-direction:column;align-items:center;flex:0 0 50%;padding:",
            " ",
            ";text-align:center;",
          ],
          r.xe.generic.x4,
          r.xe.generic.x2
        ),
        o = a.I4.div.withConfig({ componentId: "sc-d56f6f84-1" })(
          ["padding:", ";width:133px;line-height:", ";"],
          r.xe.generic.x1,
          r.gx.lineHeight.heading
        ),
        s = (0, a.I4)(n.N).withConfig({ componentId: "sc-d56f6f84-2" })(
          ["display:block;flex-grow:1;margin-bottom:", ";font-size:", ";"],
          r.xe.generic.x2,
          r.gx.size.text.medium
        ),
        d = a.I4.div.withConfig({ componentId: "sc-d56f6f84-3" })([
          "display:inline-flex;flex-direction:column;flex:1;",
        ]),
        u = a.I4.div.withConfig({ componentId: "sc-d56f6f84-4" })(
          ["padding:", ";min-height:85px;", ";"],
          r.xe.generic.x2,
          (e) => {
            let { $isRegPrice: t } = e;
            return t ? "10.5px" : r.xe.generic.x2;
          }
        ),
        m = (0, a.I4)(l.V).withConfig({ componentId: "sc-d56f6f84-5" })(
          ["img{border-radius:", ";}"],
          r.PQ.radius.x1
        ),
        p = a.I4.div.withConfig({ componentId: "sc-d56f6f84-6" })(
          [
            "margin:",
            ";width:calc(100% - ",
            ");min-width:110px;& > button{max-width:unset;width:100%;}",
          ],
          r.xe.generic.x1,
          r.xe.generic.x2
        );
    },
    25679: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => s });
      var a = i(37876),
        n = i(14232),
        l = i(66318),
        r = i(75570),
        c = i(19968),
        o = i(51342);
      let s = (e) => {
        let {
            itemsPerClick: t = 6,
            maxClickCount: i = 2,
            tagName: s = "ul",
            hasFlexColumn: d,
            children: u,
            justifyContentCenter: m,
            shouldScrollIntoView: p,
            alternateButton: g,
            onClick: h,
            onShowMoreClick: v,
            buttonSize: f,
            "data-test": y,
          } = e,
          [k, C] = (0, n.useState)(0);
        (0, n.useEffect)(() => {
          C(0);
        }, [u]);
        let x = (0, n.useRef)(null),
          _ = (0, n.useCallback)(() => {
            var e;
            if (!x.current || 0 === k) return;
            let i =
              null == (e = x.current)
                ? void 0
                : e.querySelector(".item-".concat(k * t));
            i && i.focus();
          }, [x, t, k]);
        (0, n.useEffect)(() => {
          _();
        }, [_]);
        let T = (0, n.useCallback)(
            (e) => {
              null == v || v(e), null == h || h(e), C(k + 1);
            },
            [v, h, k]
          ),
          S = (0, n.useCallback)(
            (e) => {
              if ((null == h || h(e), C(0), p && window.scrollY >= 215)) {
                var t;
                null == (t = x.current) || t.scrollIntoView();
              }
            },
            [p, h]
          ),
          I = (0, n.useCallback)(
            () => (k === i ? n.Children.toArray(u).length : t * (k + 1)),
            [k, i, u, t]
          ),
          N = (0, n.useCallback)(() => {
            if (k === i) return 0;
            let e = n.Children.toArray(u).length - I();
            return k === i - 1 ? e : Math.min(e, t);
          }, [k, i, t, u, I]),
          b = (0, n.useCallback)(
            (e) => {
              if (N() > 0) return void T(e);
              S(e);
            },
            [T, N, S]
          ),
          E = n.Children.toArray(u),
          O = N(),
          R = I(),
          j =
            0 === O
              ? "Show less"
              : O + R < E.length
              ? "Show ".concat(O, " more")
              : "Show all ".concat(R + O);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(s, {
              className: ""
                .concat(
                  d
                    ? "h-flex-direction-col h-flex-align-center"
                    : "h-flex-direction-row",
                  " h-display-flex h-flex-wrap "
                )
                .concat(m ? "h-flex-justify-center" : ""),
              "data-test": y,
              ref: x,
              children: E.slice(0, R),
            }),
            E.length > t &&
              (g
                ? (0, a.jsx)(l.f, {
                    children: (0, a.jsxs)(r.N, {
                      "aria-label": "".concat(j),
                      className: "h-text-grayDarkest h-margin-t-tiny",
                      "data-test": "loadMoreRecommendations",
                      onClick: b,
                      underline: "invert",
                      children: [
                        j,
                        " ",
                        (0, a.jsx)("div", {
                          className:
                            "styles.iconNavigationArrowDownFill ".concat(
                              "Show less" === j ? o.isActive : ""
                            ),
                        }),
                      ],
                    }),
                  })
                : (0, a.jsx)(l.f, {
                    className: "h-flex-justify-center h-margin-v-tight",
                    children: (0, a.jsx)(c.n, {
                      "aria-label": "".concat(j),
                      className: "h-margin-h-default h-align-center",
                      "data-test": "loadMoreRecommendations",
                      onClick: b,
                      size: f,
                      children: j,
                    }),
                  })),
          ],
        });
      };
      s.displayName = "ShowMoreItemsWrapper";
    },
    31902: (e, t, i) => {
      "use strict";
      i.d(t, { v: () => u });
      var a = i(3576),
        n = i(62701),
        l = i(17379),
        r = i(54687),
        c = i(92684),
        o = i(14549);
      let s = "@web/domain-product/get-general-recommendations-placement",
        { useQuery: d } = (0, l.T)({
          name: s,
          keyFn: (e) =>
            (void 0 !== e.channel ||
              void 0 !== e.placement_id ||
              void 0 !== e.page ||
              void 0 !== e.visitor_id) && [s, e],
          queryFn: async function (e) {
            let { requestMetricsOptions: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = await (0, r.E)(),
              {
                data: l,
                ok: c,
                statusText: s,
              } = await (0, o.V)({
                requestParams: (0, a._)({ effective_date: i }, e),
                fetchOptions: (0, a._)({}, t),
              });
            if (c) {
              var d;
              if (null == l ? void 0 : l.data) {
                let e = Date.now();
                return (0, n._)((0, a._)({}, l.data), { timeStamp: e });
              }
              return null != (d = null == l ? void 0 : l.data) ? d : null;
            }
            throw Error("".concat(s));
          },
        }),
        u = (0, c.K)(d);
    },
    46733: (e, t, i) => {
      "use strict";
      i.d(t, { C: () => s, L: () => d });
      var a = i(3576),
        n = i(62701),
        l = i(14232),
        r = i(19351),
        c = i(63492),
        o = i(37);
      let s = (e) => {
          let { isMagicWandShown: t, appState: i, circleOffers: n } = e,
            { trackEvent: o } = (0, r.z1)(),
            [s] = (0, c.w)(),
            d = n.some((e) => {
              var t, i;
              return null == s || null == (t = s[null != (i = e.id) ? i : ""])
                ? void 0
                : t.added;
            }),
            u = (0, l.useMemo)(
              () =>
                n.filter((e) => {
                  var t, i;
                  return null == s ||
                    null == (t = s[null != (i = e.id) ? i : ""])
                    ? void 0
                    : t.added;
                }),
              [n, s]
            ),
            m = (0, l.useRef)(!1),
            p = (0, l.useRef)(!1);
          (0, l.useEffect)(
            () => (
              (p.current = !1),
              (m.current = !1),
              () => {
                p.current = !0;
              }
            ),
            []
          ),
            (0, l.useEffect)(() => {
              t && o({ appState: i, guest: { eventType: "pageload" } });
            }, [t, o, i]);
          let g = (0, l.useCallback)(
            function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "button";
              if (!t || m.current) return;
              let n =
                null == u
                  ? void 0
                  : u.map((e) => ({
                      offerId: e.id,
                      offerSelected: !0,
                      offerType: "cartwheel",
                    }));
              o(
                (0, a._)(
                  {
                    appState: i,
                    guest: { eventType: "click" },
                    lnk: {
                      contentClick: {
                        componentType: "action",
                        contentType: "bulk offers: offer: ".concat(
                          d ? "added" : "".concat(e, ": no action")
                        ),
                      },
                    },
                  },
                  d ? { offerInfo: { addOffer: !0, offers: n } } : {}
                )
              ),
                (m.current = !0);
            },
            [t, o, d, u, i]
          );
          return (
            (0, l.useEffect)(
              () => () => {
                p.current && g("dismiss");
              },
              [g]
            ),
            g
          );
        },
        d = (e, t) => {
          let { trackEvent: i } = (0, r.z1)(),
            l = null == t ? void 0 : t.name,
            c = ((e) => {
              let { channel: t, personalized: i, isPromotion: a } = e;
              return ["DMC", "DMR"].includes(null != t ? t : "")
                ? null == t
                  ? void 0
                  : t.toLowerCase()
                : i
                ? "circle_segmented"
                : a
                ? "mass"
                : "circle_mass";
            })(t);
          return (t) => {
            let r,
              s,
              { offerId: d, action: u, offerAriaLabel: m } = null != t ? t : {};
            d &&
              (u === o.n.ADDED_OFFER
                ? (r = !0)
                : u === o.n.ADD_OFFER_ERROR && (r = !1),
              u === o.n.REMOVED_OFFER
                ? (s = !0)
                : u === o.n.REMOVE_OFFER_ERROR && (s = !1),
              i({
                appState: e,
                guest: { eventType: "click" },
                offerInfo: (0, n._)(
                  (0, a._)(
                    {},
                    r ? { addOffer: r } : {},
                    s ? { removeOffer: s } : {}
                  ),
                  {
                    offers: [
                      {
                        offerId: d,
                        offerSelected: void 0 !== r || void 0 !== s,
                        offerType: "cartwheel",
                      },
                    ],
                  }
                ),
                promotionInfo: {
                  promos: [
                    {
                      name: l,
                      type: c,
                      ivyPromoId: d,
                      id: d,
                      omtOfferId: d,
                      added: r,
                      removed: s,
                      longTagSpecialOffer: m,
                    },
                  ],
                },
              }));
          };
        };
    },
    51342: (e) => {
      e.exports = {
        iconNavigationArrowDownFill:
          "styles_iconNavigationArrowDownFill__eNbMv",
        isActive: "styles_isActive__6R4Ob",
        demoRow: "styles_demoRow__sVLh0",
      };
    },
    52606: (e, t, i) => {
      "use strict";
      i.d(t, { F: () => M });
      var a = i(3576),
        n = i(62701),
        l = i(37876),
        r = i(14232),
        c = i(73208),
        o = i(26989),
        s = i(30997),
        d = i(30334),
        u = i(32038),
        m = i(92875),
        p = i(36810),
        g = i(1800),
        h = i(38858),
        v = i(75570),
        f = i(9068),
        y = i(50525),
        k = i(90214),
        C = i(94170),
        x = i(29333),
        _ = i(80459),
        T = i(95408),
        S = i(7241),
        I = i(9208),
        N = i(60816),
        b = i(64271),
        E = i(86686),
        O = i(6908),
        R = i(19351),
        j = i(36414);
      let A = (e) => {
        var t;
        let {
            buyUrl: i,
            handleRecommendationsClick: o,
            imageSrc: d,
            index: u,
            tcin: m,
          } = e,
          g = (0, c.K1)(p.oc),
          { cartRequestParams: v } =
            null != (t = (0, r.useContext)(j.CE)) ? t : {},
          x = (0, f.d)(),
          { trackEvent: _ } = (0, R.z1)(),
          T = (0, s.T)(),
          E = (0, c.K1)(p.y4),
          A = (0, k.hE)(null == E ? void 0 : E.ad_source),
          w = (0, k.I3)(null == E ? void 0 : E.ad_source),
          M = (0, c.aB)(),
          F = (0, c.Gy)(),
          P = (0, c.s9)(),
          D = (0, r.useCallback)(
            (e) =>
              (0, n._)((0, a._)({}, e), {
                lnk: (0, n._)((0, a._)({}, e.lnk), {
                  recClick: {
                    position: u,
                    productId: m,
                    strategyId: M,
                    strategyName: F,
                  },
                }),
              }),
            [u, m, M, F]
          ),
          L = (0, r.useCallback)(() => {
            _({
              event: {
                name: "addToCart",
                source: "product ad | ".concat(P, " | ").concat(u),
                type: "click",
              },
              guest: { eventType: "click" },
              products: [{ tcin: m }],
            });
          }, [u, P, m, _]),
          z = (0, r.useCallback)(
            (e) => {
              o(e), g && A();
            },
            [o, g, A]
          );
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)(C.F, {
            clickId: null == E ? void 0 : E.click_id,
            creativeId: null == E ? void 0 : E.impression_id,
            tcin: m,
            token: null == E ? void 0 : E.click_token,
            useTrackers: w,
            children: (0, l.jsxs)(I._q, {
              children: [
                (0, l.jsxs)(I.ah, {
                  className: "item-".concat(u),
                  color: "onLightSecondary",
                  "data-position": u,
                  "data-product-id": m,
                  href: i,
                  onClick: z,
                  underline: "invert",
                  children: [
                    (0, l.jsx)("div", {
                      className: "h-margin-b-tiny",
                      children: (0, l.jsx)(O.V, {
                        alt: T,
                        aspectRatio: "1x1",
                        src: d,
                        width: "100px",
                      }),
                    }),
                    (0, l.jsx)(y.x, {}),
                    (0, l.jsx)(h.P, { lines: 4 - x, children: T }),
                    g
                      ? (0, l.jsx)("p", {
                          className: "h-text-xs",
                          children: "Sponsored",
                        })
                      : null,
                  ],
                }),
                (0, l.jsx)(I.eM, {
                  onClick: g ? L : D,
                  children: (0, l.jsx)(S.AddToCartButtonForProductContext, {
                    cartRequestParams: (0, n._)((0, a._)({}, v), {
                      registry_information: void 0,
                    }),
                    featureType: "RECOMMENDATION",
                    handleOverridingOrAddingTrackingFieldsToAddToCartSuccess: D,
                    overrideBehavior: N.Fz.ENABLE_CHOOSE_OPTIONS_ONLY_MODE,
                    placementType: b.my.AddToCartSuccessModalRecommendation,
                    size: "sm",
                  }),
                }),
              ],
            }),
          }),
        });
      };
      A.displayName = "GeneralRecommendationsTileContent";
      let w = "addToCartSuccessModalRecommendationsTile",
        M = (e) => {
          let {
              index: t,
              handleRecommendationsClick: i,
              location: O,
              addToCartOptions: R,
            } = e,
            j = (0, c.EJ)(o.Gs),
            M = (0, s.T)(),
            F = (0, d.k)(),
            [P] = (() => {
              var e, t, i, a, n, l, o, s, d, p;
              let g = (0, c.kK)(),
                h = (0, c.K1)(u.U6),
                v = (0, c.K1)(u.Gp),
                f = (0, c.K1)(u.SL),
                y = (0, c.K1)(u.UI),
                k = (0, c.EJ)(u.U6),
                C = (0, c.EJ)(u.Gp),
                x = (0, c.EJ)(u.SL),
                _ = (0, c.EJ)(u.UI),
                T = (0, m.c)(),
                S =
                  null == T ||
                  null == (i = T.first_child) ||
                  null == (t = i.image_info) ||
                  null == (e = t.primary_image)
                    ? void 0
                    : e.url,
                I =
                  null == T || null == (a = T.first_child)
                    ? void 0
                    : a.primary_image_url,
                N = null != S ? S : I,
                b =
                  null == T ||
                  null == (s = T.first_child) ||
                  null == (o = s.image_info) ||
                  null == (l = o.alternate_images) ||
                  null == (n = l[0])
                    ? void 0
                    : n.url,
                E =
                  null == T ||
                  null == (p = T.first_child) ||
                  null == (d = p.alternate_image_urls)
                    ? void 0
                    : d[0],
                O = null != b ? b : E,
                R =
                  N && O
                    ? [N, O]
                    : g
                    ? [null != C ? C : k, null != _ ? _ : x]
                    : [null != v ? v : h, null != y ? y : f];
              return (0, r.useDebugValue)(R), R;
            })(),
            D = (0, f.d)(),
            L = 4 - D,
            { shopSimilarAddToCartClickTrackingPayload: z } = (0, E.u)("SFL"),
            B = (0, T.Mv)("GLOBAL_PRICE_STRIKETHROUGH_ENABLED"),
            K = (0, c.aB)(),
            q = (0, c.Gy)(),
            G = (0, c.rs)(),
            H = (0, c.s9)(),
            U = (0, c.K1)(p.y4),
            V = (0, k.I3)(null == U ? void 0 : U.ad_source),
            W = (0, r.useCallback)(
              (e) =>
                (0, n._)((0, a._)({}, e), {
                  appState: (0, n._)((0, a._)({}, e.appState), {
                    pageName: "shopping cart: migrate SSL to Cart",
                  }),
                  lnk: (0, n._)((0, a._)({}, e.lnk), {
                    contentClick: {
                      contentType: "Shop similar items",
                      linkName: "Shop similar items ATC success",
                    },
                    recClick: {
                      position: t,
                      productId: j,
                      strategyId: K,
                      strategyName: q,
                    },
                  }),
                  products: [{ placementType: "cart:SSI" }],
                }),
              [t, K, q, j]
            ),
            Y = (0, r.useCallback)(
              (e) => {
                let { children: i } = e;
                return j && K && G && H
                  ? (0, l.jsx)(C.F, {
                      tracking: ["impression"],
                      useTrackers: x.K,
                      viewedImpressionData: {
                        prz: {
                          placementId: H,
                          strategyId: K,
                          strategyName: q,
                          strategyDescription: G,
                        },
                        element: {
                          id: j,
                          sponsored: !1,
                          type: "TCIN",
                          position: t,
                        },
                      },
                      children: i,
                    })
                  : (0, l.jsx)(l.Fragment, { children: i });
              },
              [t, H, G, K, q, j]
            ),
            J = (0, r.useMemo)(
              () =>
                (0, l.jsx)(l.Fragment, {
                  children:
                    K && G && H
                      ? (0, l.jsx)(C.F, {
                          carouselData: {
                            prz: {
                              placementId: H,
                              strategyId: K,
                              strategyName: q,
                              strategyDescription: G,
                            },
                            element: {
                              id: j,
                              sponsored: !1,
                              type: "TCIN",
                              position: t,
                            },
                          },
                          tracking: ["impression"],
                          useTrackers: _.F,
                          children: (0, l.jsx)(I.vD, {
                            "data-test": w,
                            children: (0, l.jsx)(C.F, {
                              clickId: null == U ? void 0 : U.click_id,
                              creativeId: null == U ? void 0 : U.impression_id,
                              tcin: j,
                              token: null == U ? void 0 : U.click_token,
                              useTrackers: V,
                              children: (0, l.jsx)(A, {
                                buyUrl: F,
                                handleRecommendationsClick: i,
                                imageSrc: P,
                                index: t,
                                tcin: j,
                              }),
                            }),
                          }),
                        })
                      : (0, l.jsx)(I.vD, {
                          "data-test": w,
                          children: (0, l.jsx)(A, {
                            buyUrl: F,
                            handleRecommendationsClick: i,
                            imageSrc: P,
                            index: t,
                            tcin: j,
                          }),
                        }),
                }),
              [F, i, P, t, H, U, G, K, q, j, V]
            ),
            X = (0, r.useMemo)(
              () =>
                (0, l.jsxs)(I.iW, {
                  "data-test": "item-card-".concat(j),
                  children: [
                    (0, l.jsx)(Y, {
                      children: (0, l.jsxs)(I.ah, {
                        color: "onLightSecondary",
                        "data-position": t,
                        "data-product-id": j,
                        href: F,
                        onClick: i,
                        underline: "invert",
                        children: [
                          (0, l.jsx)("div", {
                            className: "h-margin-b-tiny",
                            children: (0, l.jsx)(I.vC, {
                              alt: M,
                              aspectRatio: "1x1",
                              src: P,
                              width: "100%",
                            }),
                          }),
                          (0, l.jsxs)(I.Xx, {
                            $isRegPrice: 1 === D,
                            children: [
                              (0, l.jsx)(y.x, { textAlignment: "left" }),
                              (0, l.jsx)(h.P, {
                                className: "h-text-sm h-margin-t-tiny",
                                lines: L,
                                children: M,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(S.AddToCartButtonForProductContext, {
                      "aria-label": "add to cart for ".concat(M),
                      featureType: "RECOMMENDATION",
                      handleOverridingOrAddingTrackingFieldsToAddToCartClick: z,
                      handleOverridingOrAddingTrackingFieldsToAddToCartSuccess:
                        W,
                      isFullWidth: !0,
                      overrideBehavior: N.Fz.ENABLE_CHOOSE_OPTIONS_ONLY_MODE,
                      placementType: b.my.similarItems,
                      size: "sm",
                    }),
                  ],
                }),
              [Y, F, i, W, P, t, D, z, j, M, L]
            ),
            Q = (0, r.useMemo)(
              () =>
                (0, l.jsxs)("div", {
                  className: "h-display-flex h-margin-b-default",
                  "data-test": "drawer-item-card-".concat(j),
                  children: [
                    (0, l.jsx)(Y, {
                      children: (0, l.jsx)(v.N, {
                        "data-position": t,
                        "data-product-id": j,
                        href: F,
                        onClick: i,
                        children: (0, l.jsx)(I.vC, {
                          alt: M,
                          aspectRatio: "1x1",
                          src: P,
                          width: "160px",
                        }),
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "h-margin-l-default",
                      children: [
                        (0, l.jsx)(v.N, {
                          "data-position": t,
                          "data-product-id": j,
                          href: F,
                          onClick: i,
                          underline: "invert",
                          children: (0, l.jsx)(h.P, {
                            className: "h-text-bold h-text-grayDarkest",
                            lines: 3,
                            children: (0, g.D4)(M),
                          }),
                        }),
                        (0, l.jsx)("div", { className: "h-padding-t-tight" }),
                        (0, l.jsx)(y.x, {
                          className:
                            "h-text-normal h-text-bs h-padding-b-tight",
                          isStrikethroughPriceEnabled: B,
                          textAlignment: "left",
                        }),
                        (0, l.jsx)(S.AddToCartButtonForProductContext, {
                          "aria-label": "add to cart for ".concat(M),
                          cartRequestParams:
                            null == R ? void 0 : R.cartRequestParams,
                          featureType: "SHOP_SIMILAR_ITEMS",
                          handleOverridingOrAddingTrackingFieldsToAddToCartClick:
                            z,
                          handleOverridingOrAddingTrackingFieldsToAddToCartSuccess:
                            W,
                          onCartAddSuccess:
                            null == R ? void 0 : R.onCartAddSuccess,
                          overrideBehavior:
                            N.Fz.ENABLE_CHOOSE_OPTIONS_ONLY_MODE,
                          placementType: b.my.similarItems,
                          size: "sm",
                        }),
                      ],
                    }),
                  ],
                }),
              [
                j,
                Y,
                t,
                F,
                i,
                M,
                P,
                B,
                null == R ? void 0 : R.cartRequestParams,
                null == R ? void 0 : R.onCartAddSuccess,
                z,
                W,
              ]
            );
          switch (O) {
            case b.O0.RECOMMENDATIONS:
              return J;
            case b.O0.SHOP_SIMILAR_CAROUSEL:
              return X;
            case b.O0.SHOP_SIMILAR_DRAWER:
              return Q;
            default:
              return null;
          }
        };
      M.displayName = "RecommendationsTile";
    },
    86686: (e, t, i) => {
      "use strict";
      i.d(t, { u: () => c });
      var a = i(3576),
        n = i(62701),
        l = i(19351),
        r = i(14232);
      let c = (e) => {
        let t = (() => {
            let { trackEvent: e } = (0, l.z1)(),
              t = (0, r.useCallback)(() => {
                e({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    location: "Shopping cart: cart triage: shop similar item",
                    type: "click",
                    value: "Choose option click",
                  },
                });
              }, [e]),
              i = (0, r.useCallback)(
                (t) => {
                  e({
                    guest: { eventType: "customInteraction" },
                    customInteraction: {
                      location: "shopping cart: cart triage",
                      type: "click",
                      value: "Choose options click:".concat(t),
                    },
                  });
                },
                [e]
              ),
              c = (0, r.useCallback)(() => {
                e({
                  guest: { eventType: "click" },
                  appState: {
                    cmsPageId: "/co-cart",
                    cmsPageType: "co-cart",
                    pageName: "Shop similar item",
                    pageType: "Shopping cart",
                  },
                  event: {
                    name: "Shop similar item button: SSI",
                    source: "Cart:Cart triage:Shop similar item",
                    type: "click",
                  },
                });
              }, [e]),
              o = (0, r.useCallback)(
                (t) => {
                  e({
                    guest: { eventType: "recommendations" },
                    recommendations: {
                      categoryId: null == t ? void 0 : t.category_id,
                      docType: null == t ? void 0 : t.doctype,
                      placementId: null == t ? void 0 : t.placement_id,
                      strategyDescription:
                        null == t ? void 0 : t.strategy_description,
                      strategyId: null == t ? void 0 : t.strategy_id,
                      strategyName: null == t ? void 0 : t.strategy_name,
                      type: "product",
                    },
                  });
                },
                [e]
              );
            return {
              shopSimilarAddToCartClickTrackEvent: t,
              shopSimilarCarouselLoadTrackEvent: i,
              shopSimilarShowAllClickTrackEvent: c,
              shopSimilarRecommendationsLoadTrackEvent: o,
              shopSimilarRecItemClickTrackEvent: (0, r.useCallback)(
                (t, i, a, n) => {
                  e({
                    guest: { eventType: "pageload" },
                    lnk: {
                      recClick: {
                        position: Number(t),
                        productId: i,
                        strategyId: a,
                        strategyName: n,
                        type: "product",
                      },
                    },
                  });
                },
                [e]
              ),
              shopSimilarAddToCartClickTrackingPayload: (0, r.useCallback)(
                (e) =>
                  (0, n._)((0, a._)({}, e), {
                    appState: (0, n._)((0, a._)({}, e.appState), {
                      pageName:
                        "shopping cart:Cart triage: migrate SSL to Cart",
                    }),
                    lnk: (0, n._)((0, a._)({}, e.lnk), {
                      contentClick: {
                        contentType: "Shop similar items",
                        linkName: "Shop similar items ATC",
                      },
                    }),
                    products: [{ placementType: "cart:SSI" }],
                  }),
                []
              ),
            };
          })(),
          i = (() => {
            let { trackEvent: e } = (0, l.z1)(),
              t = (0, r.useCallback)(() => {
                e({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    location: "Shopping cart: shop similar item",
                    type: "click",
                    value: "Choose option click",
                  },
                });
              }, [e]),
              i = (0, r.useCallback)(
                (t) => {
                  e({
                    guest: { eventType: "customInteraction" },
                    customInteraction: {
                      location: "shopping cart",
                      type: "click",
                      value: "Choose options click:".concat(t),
                    },
                  });
                },
                [e]
              ),
              c = (0, r.useCallback)(() => {
                e({
                  guest: { eventType: "click" },
                  appState: {
                    cmsPageId: "/co-cart",
                    cmsPageType: "co-cart",
                    pageName: "Shop similar item",
                    pageType: "Shopping cart",
                  },
                  event: {
                    name: "Shop similar item button: SSI",
                    source: "Cart:Shop similar item",
                    type: "click",
                  },
                });
              }, [e]),
              o = (0, r.useCallback)(
                (t) => {
                  e({
                    guest: { eventType: "recommendations" },
                    recommendations: {
                      categoryId: null == t ? void 0 : t.category_id,
                      docType: null == t ? void 0 : t.doctype,
                      placementId: null == t ? void 0 : t.placement_id,
                      strategyDescription:
                        null == t ? void 0 : t.strategy_description,
                      strategyId: null == t ? void 0 : t.strategy_id,
                      strategyName: null == t ? void 0 : t.strategy_name,
                      type: "product",
                    },
                  });
                },
                [e]
              );
            return {
              shopSimilarAddToCartClickTrackEvent: t,
              shopSimilarCarouselLoadTrackEvent: i,
              shopSimilarShowAllClickTrackEvent: c,
              shopSimilarRecommendationsLoadTrackEvent: o,
              shopSimilarRecItemClickTrackEvent: (0, r.useCallback)(
                (t, i, a, n) => {
                  e({
                    guest: { eventType: "pageload" },
                    lnk: {
                      recClick: {
                        position: Number(t),
                        productId: i,
                        strategyId: a,
                        strategyName: n,
                        type: "product",
                      },
                    },
                  });
                },
                [e]
              ),
              shopSimilarAddToCartClickTrackingPayload: (0, r.useCallback)(
                (e) =>
                  (0, n._)((0, a._)({}, e), {
                    appState: (0, n._)((0, a._)({}, e.appState), {
                      pageName: "shopping cart: migrate SSL to Cart",
                    }),
                    lnk: (0, n._)((0, a._)({}, e.lnk), {
                      contentClick: {
                        contentType: "Shop similar items",
                        linkName: "Shop similar items ATC",
                      },
                    }),
                    products: [{ placementType: "cart:SSI" }],
                  }),
                []
              ),
            };
          })();
        return "Regular" === e ? t : i;
      };
    },
    91025: (e, t, i) => {
      "use strict";
      i.d(t, { h: () => n, n: () => a });
      let a = {
          cmsPageId: "/bulkoffers",
          cmsPageType: "/bulkoffers/",
          pageName: "bulk offers",
          pageType: "bulk offers",
        },
        n = {
          cmsPageId: "/ATCofferssheet",
          cmsPageType: "/ATCofferssheet/",
          pageName: "ATC: offers sheet",
          pageType: "ATC offers sheet",
        };
    },
    94536: (e, t, i) => {
      "use strict";
      i.d(t, { b: () => T });
      var a = i(37876),
        n = i(14232),
        l = i(19351),
        r = i(90214),
        c = i(60823),
        o = i(41622),
        s = i(42773),
        d = i(31902),
        u = i(3093),
        m = i(36810),
        p = i(26989),
        g = i(33232),
        h = i(78502),
        v = i(25679),
        f = i(95408),
        y = i(98601),
        k = i(52606);
      let C = (e) => {
        let { recommendedProducts: t } = e,
          { trackEvent: i } = (0, l.z1)();
        return (
          (0, n.useEffect)(() => {
            var e;
            i({
              guest: { eventType: "recommendations" },
              recommendations: {
                categoryId: t.category_id,
                docType: t.doctype,
                placementId: t.placement_id,
                strategyDescription: t.strategy_description,
                strategyId: t.strategy_id,
                strategyName: t.strategy_name,
                type: "product",
              },
              products: (null != (e = t.products) ? e : []).map((e) => ({
                placementType: "recommendations",
                tcin: (0, p.Gs)(e),
              })),
            });
          }, [t, i]),
          (0, a.jsx)("div", { "data-test": "recommendations-tracking" })
        );
      };
      C.displayName = "RecommendationsTracking";
      var x = i(67544),
        _ = i(64271);
      let T = (e) => {
        var t;
        let { tcins: i } = e,
          { trackEvent: T } = (0, l.z1)(),
          { criteoAdTrackServedDisplayImpression: S } = (0, r.Eh)(),
          { ratpAdTrackServedDisplayImpression: I } = (0, r.Ro)(),
          { trackClick: N } = (0, c.f)(),
          b = "mweba2ch1",
          [E, O] = (0, d.v)({ placement_id: b, tcins: i }),
          R = E(u.Y),
          j = (0, u.CP)(R),
          A = (0, u.Sh)(R),
          w = (0, u.MT)(R),
          M = null != (t = (0, u.Z5)(R)) ? t : "More to consider",
          F = (0, x.ec)(j),
          P = (0, x.jb)(j);
        (0, n.useEffect)(() => {
          if ((0, f.Mv)("TPA_FIREFLY_VNEXT_IMPRESSIONS_ENABLED")) {
            let e = (null != F ? F : []).length > 0,
              t = (null != P ? P : []).length > 0;
            e && t
              ? S.track({ criteo: F, ratp: P })
              : e
              ? S.track({ criteo: F })
              : t && I.track({ ratp: P });
          }
        }, [F, S, P, I]);
        let D = (0, n.useCallback)(
            (e) => {
              var t, i, a, n, r, c;
              let o =
                  null !=
                  (a =
                    null == (t = e.currentTarget)
                      ? void 0
                      : t.getAttribute("data-position"))
                    ? a
                    : -1,
                s =
                  null !=
                  (n =
                    null == (i = e.currentTarget)
                      ? void 0
                      : i.getAttribute("data-product-id"))
                    ? n
                    : void 0,
                d = null != (r = null == j ? void 0 : j[o]) ? r : {},
                u = (0, m.oc)(d),
                g = (0, p.Gs)(d);
              if (u) {
                let {
                  ad_source: e,
                  click_id: t,
                  click_token: i,
                } = null != (c = (0, m.y4)(d)) ? c : {};
                T({
                  event: {
                    name: "openNewPage",
                    source: "product ad | ".concat(b, " | ").concat(o),
                    type: "click",
                  },
                  guest: { eventType: "click" },
                  products: [{ tcin: s }],
                }),
                  T({
                    customInteraction: {
                      type: "click",
                      value: "".concat(t, "|").concat(i),
                    },
                    guest: { eventType: "customInteraction" },
                    products: [{ tcin: s, sponsor: { name: e } }],
                  });
              } else
                (0, l.cW)({
                  recClick: {
                    position: Number(o),
                    productId: s,
                    strategyId: A,
                    strategyName: w,
                    type: "product",
                  },
                });
              N.track({
                featureType: "RECOMMENDATION",
                clickType: "PRODUCT",
                element: g
                  ? { type: "TCIN", id: g, position: Number(o), sponsored: !!u }
                  : void 0,
                prz:
                  A && w && M
                    ? {
                        placementId: b,
                        strategyDescription: M,
                        strategyId: A,
                        strategyName: w,
                      }
                    : void 0,
              });
            },
            [j, M, A, w, T, N]
          ),
          L = (0, h.NO)(O),
          z = (0, n.useMemo)(() => {
            var e;
            return null == R || null == (e = R.products)
              ? void 0
              : e.map((e, t) =>
                  (0, a.jsx)(
                    g.M,
                    {
                      debugName: "RecommendationsCarousel",
                      position: t,
                      prz:
                        A && M && w
                          ? {
                              strategyId: A,
                              strategyName: w,
                              strategyDescription: M,
                              placementId: b,
                            }
                          : void 0,
                      queryResult: L,
                      value: e,
                      children: (0, a.jsx)(k.F, {
                        handleRecommendationsClick: D,
                        index: t,
                        location: _.O0.RECOMMENDATIONS,
                      }),
                    },
                    (0, p.t2)(e)
                  )
                );
          }, [null == R ? void 0 : R.products, D, M, A, w, L]);
        return R || O.isSuccess || O.isError
          ? (null == R ? void 0 : R.products) && !(R.products.length <= 0)
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(C, { recommendedProducts: R }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(s.D, {
                        className: "h-margin-t-x2",
                        size: 3,
                        children: M,
                      }),
                      (0, a.jsx)(v.K, {
                        buttonSize: "sm",
                        "data-test": "addToCartSuccessModalRecommendations",
                        itemsPerClick: 4,
                        maxClickCount: 1,
                        tabTitle: M,
                        tagName: "div",
                        children: z,
                      }),
                    ],
                  }),
                ],
              })
            : null
          : (0, a.jsx)(o.O, {
              animationDuration: "500ms",
              height: "120px",
              isAnimated: !0,
              stroke: y.Tj.palette.gray.light,
              width: "100%",
            });
      };
      T.displayName = "Recommendations";
    },
  },
]);
