(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4899],
  {
    3439: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => x, a: () => C });
      var a = r(3576),
        l = r(37876),
        n = r(75570),
        s = r(41622),
        d = r(1800),
        i = r(30334),
        o = r(73208),
        c = r(32038),
        u = r(77119),
        p = r(29011),
        m = r.n(p);
      let C = { isAnimated: !0, height: "100%", className: m().placeholder },
        x = (e) => {
          let t,
            r = (0, i.k)(),
            p = (0, d.D4)((0, o.EJ)(c.A5));
          t = e.variant === u.dj.Extended ? u.kE : u.EA;
          let x = p
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("img", { alt: p }),
                  (0, l.jsx)("span", { children: p }),
                ],
              })
            : "Loading...";
          return (0, l.jsxs)("div", {
            className: m().placeholderWrapper,
            "data-test": "@web/site-top-of-funnel/ProductCardPlaceholder",
            style: { minHeight: t },
            children: [
              (0, l.jsx)("h3", {
                className: "h-sr-only",
                children: r ? (0, l.jsx)(n.N, { href: r, children: x }) : x,
              }),
              (0, l.jsx)(s.O, (0, a._)({}, C)),
            ],
          });
        };
      x.displayName = "ProductCardPlaceholder";
    },
    9176: (e) => {
      e.exports = {
        productCardExtendedRatingStarsContainer:
          "styles_productCardExtendedRatingStarsContainer__Uaibl",
      };
    },
    9592: (e) => {
      e.exports = {
        reviewSummarizationOverallSummary:
          "styles_reviewSummarizationOverallSummary__yoPcC",
        reviewSummarizationWrapper: "styles_reviewSummarizationWrapper__oIf5m",
        arrowIconUp: "styles_arrowIconUp__LFTu9",
      };
    },
    10336: (e) => {
      e.exports = {
        productCardExtendedNumbers: "styles_productCardExtendedNumbers__Sr7fN",
      };
    },
    12077: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => n, x: () => s });
      var a = r(55472),
        l = r(77119);
      let n = (e, t) => {
          switch (e) {
            case l.dj.Extended:
              return 1;
            case l.dj.Aesthetic:
              if (null == t ? void 0 : t.screenLg) return 4;
              if (null == t ? void 0 : t.screenMd) return 3;
              if (null == t ? void 0 : t.screenSm);
              else if (null == t ? void 0 : t.screenXxsMax) return 1;
              return 2;
            default:
              if (null == t ? void 0 : t.screenLg) return 4;
              if (null == t ? void 0 : t.screenMd);
              else if (null == t ? void 0 : t.screenSm) return 2;
              else if (null == t ? void 0 : t.screenSmMax) return 1;
              return 3;
          }
        },
        s = function () {
          let { productCardVariant: e = l.dj.Default } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return n(e, (0, a.e)());
        };
    },
    16809: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => a, t: () => l });
      let a = "@web/site-top-of-funnel/ProductCardWrapper",
        l = "ProductListCards";
    },
    18581: (e) => {
      e.exports = {
        secondaryRating: "styles_secondaryRating__dJmY_",
        secondaryRatingLabel: "styles_secondaryRatingLabel__k3LwO",
        secondaryRatingItem: "styles_secondaryRatingItem__WXSkB",
      };
    },
    27604: (e) => {
      e.exports = {
        extendedContainer: "styles_extendedContainer__tzgvW",
        sponsoredItem: "styles_sponsoredItem__RI8bw",
        productImageContainer: "styles_productImageContainer__vWABa",
        productDetailContainer: "styles_productDetailContainer__IqDTQ",
        productExtendedDetailsContainer:
          "styles_productExtendedDetailsContainer__ey8Xr",
        productCardExtendedTitle: "styles_productCardExtendedTitle__f6bbU",
        starsAndSwatchesContainer: "styles_starsAndSwatchesContainer__y1Cvb",
        productCardBrandAndRibbonMessage:
          "styles_productCardBrandAndRibbonMessage__Xb82A",
        ratingStarsSwatches: "styles_ratingStarsSwatches__kBYHk",
        productCardExtendedNumbersItem:
          "styles_productCardExtendedNumbersItem__Xekbt",
        scrollCue: "styles_scrollCue__jBqNN",
        hideScrollCue: "styles_hideScrollCue__LCazC",
        storyWrapper: "styles_storyWrapper__sNLzj",
      };
    },
    29011: (e) => {
      e.exports = {
        placeholderWrapper: "styles_placeholderWrapper__Bqn3l",
        placeholder: "styles_placeholder__bY0Yp",
      };
    },
    40630: (e) => {
      e.exports = {
        productCardExtendedButtonsSection:
          "styles_productCardExtendedButtonsSection__FXDDZ",
        addToCartButtonContainer: "styles_addToCartButtonContainer__r8V_1",
      };
    },
    42172: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => d });
      var a = r(12245),
        l = r(14232),
        n = r(16809),
        s = r(56005);
      let d = () => {
        let [e] = (0, a.Ct)(n.t),
          t = (0, s.$)(),
          r = (0, a.Ss)(),
          d = (0, l.useRef)((null == r ? void 0 : r.priorPageType) === "pdp"),
          i = (0, l.useRef)(
            !!r && r.initialScrollPosition[1] > r.initialViewportHeight
          );
        (0, l.useEffect)(() => {
          if (t && e && i.current && d.current) {
            let t = document.querySelectorAll('[data-test="'.concat(n.T, '"]'))[
              e.previouslyClickedProductCardIndex
            ];
            t && t.scrollIntoView(!0);
          }
        }, [e, i, d, t]);
      };
    },
    52952: (e) => {
      e.exports = {
        grid: "styles_grid__mPwUS",
        rowWrapper: "styles_rowWrapper__RbCVt",
        loadingRowWrapper: "styles_loadingRowWrapper__fAyK8",
        cardWrapper: "styles_cardWrapper__Lo85r",
        withBorderBottom: "styles_withBorderBottom__BurfZ",
        withBorderRight: "styles_withBorderRight__qNG5V",
        withFullHeight: "styles_withFullHeight__CMUNP",
        fullWidthSeparator: "styles_fullWidthSeparator__zqbVZ",
      };
    },
    54547: (e) => {
      e.exports = {
        productCardExtendedContentContainer:
          "styles_productCardExtendedContentContainer__bVhjn",
        summaryHeading: "styles_summaryHeading__kq3fI",
        summaryHeadingBreak: "styles_summaryHeadingBreak__7gUDT",
        emptyContentFallbackContainer:
          "styles_emptyContentFallbackContainer__Tqhpu",
      };
    },
    56005: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => c, t: () => o });
      var a = r(26989),
        l = r(36810),
        n = r(68979),
        s = r(87125),
        d = r(12245),
        i = r(68690);
      let o = (e) => "".concat((0, a.Gs)(e), "-").concat((0, l.oc)(e)),
        c = () => {
          let e = (0, d.Ss)(),
            t = (0, n.w)(s.YH),
            r = (0, i.M)();
          return !!(e && !r && t);
        };
    },
    67382: (e) => {
      e.exports = {
        bulletedList: "styles_bulletedList__BMfKK",
        bulletedListItem: "styles_bulletedListItem__TCUEL",
      };
    },
    69530: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => eu });
      var a = r(37876),
        l = r(95408),
        n = r(31294),
        s = r(44145),
        d = r(32038),
        i = r(36810),
        o = r(68979),
        c = r(87125),
        u = r(33232),
        p = r(93967),
        m = r(42252),
        C = r(55472),
        x = r(34013),
        h = r(40196),
        _ = r(14232),
        y = r(15039),
        v = r.n(y),
        g = r(1022),
        j = r(12245),
        f = r(29199),
        S = r(16631),
        k = r(6245),
        E = r(60823),
        N = r(36093),
        b = r(55035),
        T = r(73208),
        R = r(26989),
        P = r(72396),
        w = r(3422),
        I = r(13967);
      r(19653);
      var D = r(15003);
      let A = () => {
        let { asPath: e } = (0, m.rd)(),
          t = (0, T.EJ)(d.CN),
          { checkIsExperimentEnabledAndTrackFireflyEvent: r } = (0, P.G)(
            "SLP_VIEW_SIMILAR_ENABLED"
          );
        if (!1 === (0, l.Mv)("VIEW_SIMILAR_VISUAL_DISCOVERY_ENABLED") || t)
          return !1;
        if ((0, I._j)(e)) return r();
        if ((0, I.UD)(e)) {
          var a;
          return D.On.includes(null != (a = (0, w.$x)(e)) ? a : "");
        }
        return !1;
      };
      var B = r(3576),
        L = r(91907),
        V = r(94590);
      let W = () =>
          Promise.all([r.e(735), r.e(540)])
            .then(r.bind(r, 67855))
            .then((e) => e.ViewSimilarDefaultCardButton),
        O = (e) =>
          (0, a.jsx)(V.n, {
            children: (0, a.jsx)(L.I, (0, B._)({ loader: W }, e)),
          });
      O.displayName = "ViewSimilarDefaultCardButtonLoader";
      let M = (e) => (A() ? (0, a.jsx)(O, (0, B._)({}, e)) : null);
      M.displayName = "ViewSimilarDefaultCardButton";
      var H = r(85647),
        z = r(77119);
      r(6357);
      var G = r(18847),
        F = r.n(G),
        U = r(20772),
        q = r.n(U),
        J = r(8532),
        K = r.n(J),
        Y = r(36442),
        Q = r(19581);
      r(83760);
      var X = r(3439);
      r(83140);
      let $ = {
          [z.dj.Extended]: () =>
            r
              .e(367)
              .then(r.bind(r, 67529))
              .then((e) => e.ProductCardVariantExtended),
          [z.dj.Default]: () =>
            r
              .e(733)
              .then(r.bind(r, 13397))
              .then((e) => e.ProductCardVariantDefault),
          [z.dj.Aesthetic]: () =>
            Promise.resolve()
              .then(r.bind(r, 83140))
              .then((e) => e.ProductCardVariantAesthetic),
        },
        Z = (0, _.memo)((e) => {
          let {
              index: t,
              onViewDetailClick: r,
              loadingExperience: l,
              productCardVariant: d,
              queryIntent: u,
              showReviewPros: p,
            } = e,
            C = u === z.xQ.TopRated,
            { isInRegistryMode: x } = (0, N.Tl)(),
            y = A(),
            v = (0, _.useCallback)(() => {
              null == r || r({ index: t });
            }, [t, r]),
            g = ((e, t) => {
              let r = (0, o.w)(c.Ol),
                l = !!(null == r ? void 0 : r.isFetching);
              return (0, _.useMemo)(() => {
                var r;
                let n = K()(q()("".concat(e, "_").concat(t))),
                  s = (0, a.jsx)(X.P, { variant: t });
                if (l) {
                  let e = () => s;
                  return (e.displayName = "".concat(n, "_placeholder")), e;
                }
                let d = null != (r = $[t]) ? r : $[z.dj.Default];
                if ("lazy-hydration" === e) {
                  let e = (e) =>
                    (0, a.jsx)(Y.N, {
                      debugName: "ProductListGrid-ProductCardLoader",
                      loadedProps: e,
                      loader: d,
                      placeholderWhenNested: s,
                      strategy: Q.k.suppress,
                      children: void 0,
                    });
                  return (e.displayName = n), e;
                }
                let i =
                  "lazy" === e
                    ? F()(d, { loading: () => s })
                    : (e) =>
                        (0, a.jsx)(
                          L.I,
                          (0, B._)({ loader: d, placeholder: s }, e)
                        );
                return (i.displayName = n), i;
              }, [e, t, l]);
            })(l, d),
            j = (() => {
              let { asPath: e } = (0, m.rd)(),
                t = (0, h.Hq)(e),
                r = (0, n.W)()(s.$$);
              return "category" === t
                ? "PLP: ".concat(r)
                : "".concat(t, ": ").concat(r);
            })(),
            P = (0, T.bZ)(),
            { trackClick: w } = (0, E.f)(),
            I = (0, T.K1)(R.Gs),
            D = (0, T.K1)(i.oc),
            V = (0, _.useCallback)(() => {
              w.track({
                featureType: "GRID_CARD",
                clickType: "TRY_IT_ON",
                element: I
                  ? { type: "TCIN", id: I, position: t, sponsored: D }
                  : void 0,
              });
            }, [w, I, t, D]);
          return ((0, H.L)({
            tcins: [P],
            _debugSource: "ProductListGrid_ProductCardLoader_Variation",
          }),
          d === z.dj.Extended)
            ? (0, a.jsx)(g, {
                addToCartClickTrackingPlacementType: j,
                index: t,
                isTopRatedQueryIntent: C,
                onViewDetailClick: v,
              })
            : (0, a.jsx)(g, {
                addToCartButtonOverride: x
                  ? (0, a.jsx)(b.Q, {
                      buttonSize: "sm",
                      className: "h-margin-v-tiny",
                      showPlpVersionButton: !0,
                    })
                  : void 0,
                addToCartClickTrackingPlacementType: j,
                cgiButtonSeeItOnYouIos:
                  !y && (0, a.jsx)(f.u, { placement: S.h.PLP }),
                cgiButtonTryItOnBeauty: (0, a.jsx)(k.T, {
                  onClick: V,
                  placement: S.h.PLP_PRODUCT_CARD,
                }),
                featureType: "GRID_CARD",
                index: t,
                onViewDetailClick: v,
                shouldHideDesirabilityCue: C,
                shouldShowReviewPros: p,
                viewSimilarButton: (0, a.jsx)(M, {
                  "data-test": "viewSimilar-productGridButton",
                  isWithinGrid: !0,
                  placement: "Grid",
                }),
              });
        });
      Z.displayName = "ProductCardLoader";
      var ee = r(42401),
        et = r(30820);
      let er = (e) => {
        let { index: t, pageType: r, numberOfColumns: l, suppressAds: n } = e,
          { screenLgMax: s } = (0, C.e)(),
          d = "",
          { flagValue: i = !1 } = (0, P.G)("SHOW_BTS_AND_MOVE_SLPESPOT"),
          [o, c, u] = ((e) => {
            switch (e) {
              case 1:
                return [2, 6, 15];
              case 2:
                return [1, 3, 8];
              default:
                return [1, 2, 5];
            }
          })(l),
          p = t === l * o,
          m = t === l * c,
          x = t === l * u;
        return (p
          ? (d = "slpespot")
          : m
          ? (d = "category" === r ? "block2" : "block1")
          : x && (d = "category" === r ? "block3" : "block2"),
        (p && i) || m || x)
          ? n
            ? null
            : (0, a.jsx)(et.f, {
                xs: 12,
                children: (0, a.jsx)("div", {
                  className: "h-padding-t-tight h-padding-b-tight ".concat(
                    s ? "h-padding-h-default" : ""
                  ),
                  children: (0, a.jsx)(ee.f, { adName: d, showSponsored: !0 }),
                }),
              })
          : null;
      };
      er.displayName = "ProductListGridAd";
      var ea = r(69843),
        el = r(68189),
        en = r(19351),
        es = r(61870),
        ed = r(16809),
        ei = r(52952),
        eo = r.n(ei);
      let ec = { "5ouvj": "Plus Size", "55tyq": "Big & Tall" },
        eu = (0, _.memo)((e) => {
          var t, r, y;
          let {
              product: f = {},
              index: S = 0,
              cardColumnCount: k = 1,
              canShowAds: E = !1,
              loadingExperience: N = "lazy",
              onViewDetailClick: b,
              queryResultFulfillment: T,
              productCardVariant: R = z.dj.Default,
              queryIntent: P,
              showReviewPros: w,
            } = e,
            [I, D] = (0, _.useState)(!1),
            { asPath: A } = (0, m.rd)(),
            B = (0, h.Hq)(A),
            L =
              null !=
              (r = null == f || null == (t = f.parent) ? void 0 : t.tcin)
                ? r
                : f.tcin,
            V = (0, l.Mv)("PRODUCT_LIST_CLIENT_PDP_QUERY_ENABLED"),
            { listType: W } = (0, x.I)(),
            O = (0, d.JJ)(f),
            M = O ? (0, h.x6)(O) : void 0,
            { screenXsMax: H } = (0, C.e)();
          (0, el.xs)({
            parentOrStandaloneTcinElseChildTcin: null != L ? L : "",
            enabled: I && V,
            channel: "WEB",
            page: M,
            tcin: L,
          });
          let G = (0, _.useCallback)(
              (e) => {
                D(!0);
                let { index: t } = e,
                  r = (0, i.oc)(f);
                void 0 !== t &&
                  ((0, en.cW)({
                    listClick: {
                      position: t.toString(),
                      listType: W,
                      listSubType: r ? "sponsored" : "",
                    },
                  }),
                  null == b || b(e));
              },
              [W, b, f]
            ),
            [, F] = (0, j.Ct)(ed.t),
            [, U] = (0, j.Ct)(ea.a),
            q = "".concat(
              null != (y = null == f ? void 0 : f.tcin) ? y : "",
              "_product_card"
            ),
            J = '[data-focusid="'.concat(q, '"]'),
            K = (0, _.useCallback)(() => {
              F({ previouslyClickedProductCardIndex: S }),
                U({ querySelector: J });
            }, [F, S, U, J]),
            Y = (0, n.W)(),
            Q = Y((0, s.Uw)(Object.keys(ec))),
            X = Y(s.Pb),
            $ =
              !(0, g.GV)(A) &&
              !(0, g._j)(A) &&
              !(0, g.B5)(A) &&
              !(0, g.bS)(A) &&
              !Q,
            ee = (0, g.GV)(A),
            et = (0, o.w)(c.Ol),
            ei = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: v()(
                    eo().cardWrapper,
                    R === z.dj.Extended
                      ? "h-padding-v-tight"
                      : "h-padding-a-tight",
                    { [eo().withBorderBottom]: R !== z.dj.Aesthetic && !H }
                  ),
                  "data-focusid": q,
                  "data-test": ed.T,
                  onClickCapture: K,
                  tabIndex: -1,
                  children: (0, a.jsx)(p.H, {
                    action: es.MS.ERROR_BOUNDARY_PRODUCT_CARD_CRITICAL_ERROR,
                    children: (0, a.jsx)(Z, {
                      index: S,
                      loadingExperience: N,
                      onViewDetailClick: G,
                      productCardVariant: R,
                      queryIntent: P,
                      showReviewPros: w,
                    }),
                  }),
                }),
                H &&
                  R !== z.dj.Aesthetic &&
                  (0, a.jsx)("div", { className: eo().fullWidthSeparator }),
              ],
            });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              E &&
                (0, a.jsx)(er, {
                  index: S,
                  numberOfColumns: k,
                  pageType: B,
                  suppressAds: X,
                }),
              (0, a.jsx)(u.M, {
                debugName: "ProductListGrid",
                position: S,
                queryResult: et,
                queryResultFulfillment: T,
                shouldShowChildProducts: ee,
                shouldShowParentImages: $,
                value: f,
                children: ei,
              }),
            ],
          });
        });
      eu.displayName = "ProductListCard";
    },
    69843: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => a });
      let a = "product-list-grid";
    },
    77119: (e, t, r) => {
      "use strict";
      r.d(t, { EA: () => a, dj: () => n, kE: () => l, xQ: () => s });
      let a = "500px",
        l = "450px";
      var n = (function (e) {
          return (
            (e.Aesthetic = "aesthetic"),
            (e.Default = "default"),
            (e.Extended = "extended"),
            e
          );
        })({}),
        s = (function (e) {
          return (e.TopRated = "top_rated"), e;
        })({});
    },
    83140: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { ProductCardVariantAesthetic: () => m });
      var a = r(3576),
        l = r(62701),
        n = r(65699),
        s = r(37876),
        d = r(61595),
        i = r(73208),
        o = r(26989),
        c = r(36810),
        u = r(60823),
        p = r(14232);
      let m = (e) => {
        var { onClickCheckStoreLink: t, onViewDetailClick: r, index: m } = e,
          C = (0, n._)(e, [
            "onClickCheckStoreLink",
            "onViewDetailClick",
            "index",
          ]);
        let { trackClick: x } = (0, u.f)(),
          h = (0, i.K1)(o.Gs),
          _ = (0, i.K1)(c.oc),
          y = (0, p.useMemo)(
            () =>
              h ? { type: "TCIN", id: h, position: m, sponsored: _ } : void 0,
            [h, m, _]
          ),
          v = (0, p.useCallback)(() => {
            x.track({
              featureType: "GRID_CARD",
              clickType: "CHECK_STORES",
              element: y,
            }),
              null == t || t();
          }, [t, x, y]),
          g = (0, p.useCallback)(
            (e) => {
              x.track({
                featureType: "GRID_CARD",
                clickType: "PRODUCT",
                element: y,
              }),
                null == r || r(e);
            },
            [r, x, y]
          ),
          j = (0, p.useCallback)(
            (e) => {
              e.favorited &&
                x.track({
                  featureType: "GRID_CARD",
                  clickType: "FAVORITE",
                  element: y,
                });
            },
            [x, y]
          );
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(
            d.t,
            (0, l._)((0, a._)({}, C), {
              onChangeFavoritesButton: j,
              onClickCheckStoreLink: v,
              onViewDetailClick: g,
            })
          ),
        });
      };
      m.displayName = "ProductCardVariantAestheticTrackingWrapper";
    },
    83760: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => e_ });
      var a = r(37876),
        l = r(14232),
        n = r(15039),
        s = r.n(n),
        d = r(55472),
        i = r(71334),
        o = r(60669),
        c = r(40591),
        u = r(2178),
        p = r(18325),
        m = r(57360),
        C = r(6347),
        x = r(73208),
        h = r(26989),
        _ = r(36810),
        y = r(30997),
        v = r(30334),
        g = r(28391),
        j = r(56947),
        f = r(90214),
        S = r(60823),
        k = r(94170),
        E = r(75570),
        N = r(38858),
        b = r(36093),
        T = r(23021),
        R = r(78994),
        P = r(40696),
        w = r(40630),
        I = r.n(w);
      let D = (e) => {
        let {
            isInRegistryMode: t,
            addToCartClickTrackingPlacementType: r,
            featureType: l,
          } = e,
          { AddToRegistryButton: n } = (0, T.F)();
        return (0, a.jsxs)("div", {
          className: I().productCardExtendedButtonsSection,
          children: [
            (0, a.jsx)("div", {
              className: I().addToCartButtonContainer,
              children:
                t && n
                  ? (0, a.jsx)(n, {
                      buttonSize: "sm",
                      showPlpVersionButton: !0,
                    })
                  : (0, a.jsx)(R.E, {
                      featureType: l,
                      isFullWidth: !0,
                      placementType: r,
                      size: "sm",
                      willHaveProductContextFulfillmentDataForAddToCart: !0,
                    }),
            }),
            (0, a.jsx)(P.r, { featureType: l }),
          ],
        });
      };
      D.displayName = "ProductCardExtendedButtonsSection";
      var A = r(32038),
        B = r(91253),
        L = r(94259),
        V = r(42773),
        W = r(20172),
        O = r(67382),
        M = r.n(O);
      let H = "@web/site-top-of-funnel/ProductCardExtendedContent",
        z = (e) =>
          null == e
            ? void 0
            : e
                .filter((e) => (0, W.v)(e))
                .map((e) => e.replaceAll(/<\/?[^>]+(>|$)|·/g, "").trim()),
        G = (e) => {
          let { productHighlights: t, productSpecifications: r } = e,
            l = z(t),
            n = z(r);
          return (null == l ? void 0 : l.length) === 0 &&
            (null == n ? void 0 : n.length) === 0
            ? null
            : (0, a.jsxs)("ul", {
                className: M().bulletedList,
                "data-test":
                  "@web/site-top-of-funnel/ExtendedProductCardHighlightsAndSpecsList",
                role: "presentation",
                children: [
                  null == l
                    ? void 0
                    : l
                        .slice(0, 6)
                        .map((e) =>
                          (0, a.jsx)(
                            "li",
                            { className: M().bulletedListItem, children: e },
                            "li-".concat(e)
                          )
                        ),
                  null == n
                    ? void 0
                    : n
                        .slice(0, 6)
                        .map((e) =>
                          (0, a.jsx)(
                            "li",
                            { className: M().bulletedListItem, children: e },
                            "li-".concat(e)
                          )
                        ),
                ],
              });
        };
      G.displayName = "ProductCardExtendedList";
      var F = r(18673),
        U = r(30514),
        q = r(9592),
        J = r.n(q);
      let K = (e) => {
        var t;
        let { reviewSummarization: r, isExpandable: n } = e,
          s = null == r || null == (t = r.overall_summary) ? void 0 : t[0],
          [d, i] = (0, l.useState)(!1),
          o = (0, l.useCallback)(() => {
            i(!d);
          }, [d]);
        if (!(null == s ? void 0 : s.value)) return;
        let c = n && s.value.length > 150,
          u = (0, a.jsx)(U.R, {
            className: d ? J().arrowIconUp : "",
            width: 12,
          });
        return (0, a.jsxs)("div", {
          className: J().reviewSummarizationWrapper,
          children: [
            (0, a.jsxs)("div", {
              className: J().reviewSummarizationOverallSummary,
              "data-test":
                "@web/site-top-of-funnel/ExtendedProductCardReviewSummarizationOverallSummary",
              children: [
                (0, a.jsx)(N.P, {
                  lines: c && !d ? 3 : 0,
                  children: null == s ? void 0 : s.value,
                }),
                c &&
                  (0, a.jsx)(F.$, {
                    "aria-expanded": d,
                    "aria-label": d ? "See less" : "See more",
                    className: "h-padding-h-none",
                    onClick: o,
                    renderTrailing: u,
                    size: "sm",
                    type: "button",
                    variant: "bare",
                    children: d ? "See less" : "See more",
                  }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "h-text-sm h-text-grayDark ",
              "data-test":
                "@web/site-top-of-funnel/ExtendedProductCardReviewSummaryDisclaimer",
              children:
                "Generated by AI from recent guest reviews (includes incentivized reviews)",
            }),
          ],
        });
      };
      K.displayName = "ProductCardExtendedAiReviewSummary";
      var Y = r(18581),
        Q = r.n(Y);
      let X = (e) => {
        let { secondaryRatings: t } = e;
        return (0, a.jsx)("ul", {
          className: Q().secondaryRating,
          "data-test":
            "@web/site-top-of-funnel/ExtendedProductCardSecondaryRatings",
          children: t.map((e) => {
            let { id: t, label: r, value: l } = e;
            return l && r
              ? (0, a.jsxs)(
                  "li",
                  {
                    className: Q().secondaryRatingItem,
                    children: [
                      (0, a.jsx)("div", {
                        className: Q().secondaryRatingLabel,
                        children: r,
                      }),
                      (0, a.jsxs)("span", {
                        className: "h-text-md h-text-grayDark",
                        children: [Math.round(10 * l) / 10, " out of 5"],
                      }),
                    ],
                  },
                  t
                )
              : null;
          }),
        });
      };
      X.displayName = "ProductCardExtendedSecondaryRating";
      let $ = (e) => {
        let { secondaryRatings: t, min: r, max: a } = e,
          l = t
            .filter(
              (e) =>
                (null == e ? void 0 : e.value) !== void 0 &&
                e.value >= 3 &&
                e.value <= 5
            )
            .sort((e, t) => (e.value && t.value ? t.value - e.value : 0))
            .slice(0, a);
        return l.length <= r ? [] : l;
      };
      var Z = r(54547),
        ee = r.n(Z);
      let et = (e) => {
        var t, r, n, s, i;
        let { includeAiSummary: o, setShowScrollCue: c } = e,
          { screenMd: u } = (0, d.e)(),
          p = null != (r = (0, x.EJ)(j.j)) ? r : {},
          { bullets: m } = null != (n = (0, x.EJ)(A.hf)) ? n : {},
          C = (0, x.EJ)(A.N),
          h = null != (s = (0, x.EJ)(g.Qc)) ? s : [],
          _ =
            (null != (i = null == (t = p.overall_summary) ? void 0 : t.length)
              ? i
              : 0) > 0,
          y = !!o && _,
          v = (0, l.useRef)(null),
          { isBot: f } = (0, l.useContext)(L.B.Context);
        if (
          ((0, l.useEffect)(() => {
            let e = v.current;
            if (!e || !(e.scrollHeight > e.clientHeight)) return;
            c(!0);
            let t = () => {
              c(!(e.scrollTop + e.clientHeight >= 0.75 * e.scrollHeight));
            };
            return (
              e.addEventListener("scroll", t),
              () => e.removeEventListener("scroll", t)
            );
          }, [c]),
          !u)
        ) {
          if (y && p)
            return (0, a.jsx)(K, { isExpandable: !f, reviewSummarization: p });
          let e = $({ secondaryRatings: h, min: 1, max: 3 });
          return e.length
            ? (0, a.jsx)("div", {
                className: ee().productCardExtendedContentContainer,
                "data-test": H,
                children: (0, a.jsx)(X, { secondaryRatings: e }),
              })
            : null;
        }
        let S = $({ secondaryRatings: h, min: 0, max: 4 }),
          k = !!S.length,
          E =
            !!(null == m ? void 0 : m.length) ||
            !!(null == C ? void 0 : C.length);
        return (0, a.jsxs)("div", {
          className: ee().productCardExtendedContentContainer,
          "data-test": H,
          ref: v,
          children: [
            (0, a.jsx)(V.D, {
              className: ee().summaryHeading,
              "data-test":
                "@web/site-top-of-funnel/ExtendedProductCardReviewSummaryTitle",
              level: 4,
              size: 4,
              children: "Rating details & item highlights",
            }),
            (0, a.jsx)("div", { className: ee().summaryHeadingBreak }),
            y || k || E
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    y &&
                      (0, a.jsx)(K, {
                        isExpandable: !1,
                        reviewSummarization: p,
                      }),
                    k && (0, a.jsx)(X, { secondaryRatings: S }),
                    E &&
                      (0, a.jsx)(G, {
                        productHighlights: m,
                        productSpecifications: C,
                      }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: ee().emptyContentFallbackContainer,
                  children: [
                    (0, a.jsx)(B.a, {
                      className: "h-text-grayMedium",
                      width: 32,
                    }),
                    "No ratings yet. Be the first!",
                  ],
                }),
          ],
        });
      };
      et.displayName = "ProductCardExtendedContent";
      var er = r(32903),
        ea = r(21254),
        el = r(84685);
      let en = () => {
        let e = (0, x.EJ)(A.Bo);
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(er.m, {}),
            e &&
              (0, a.jsx)("p", {
                className: "h-text-md h-text-grayDark",
                children: e,
              }),
            (0, a.jsx)(ea.S, {}),
            (0, a.jsx)(el.M, {}),
          ],
        });
      };
      en.displayName = "ProductCardExtendedDetailMessaging";
      var es = r(10336),
        ed = r.n(es);
      let ei = (e) => {
        let { text: t } = e;
        return (0, a.jsx)("div", {
          "aria-label": "Best of Product ranking ".concat(t),
          className: ed().productCardExtendedNumbers,
          children: t,
        });
      };
      ei.displayName = "ProductCardExtendedNumbers";
      var eo = r(54693),
        ec = r(70418),
        eu = r(9176),
        ep = r.n(eu);
      let em = (e) => {
        let { rating: t, ratingCount: r, url: l, onClick: n } = e,
          { screenMd: s } = (0, d.e)();
        if (!l) return;
        let i = ec.o.buildURLWithParams(l, {
          type: "scroll_to_review_section",
        });
        return (0, a.jsxs)(E.N, {
          className: ep().productCardExtendedRatingStarsContainer,
          "data-test": "@web/site-top-of-funnel/ExtendedProductCardRatingStars",
          href: i,
          onClick: n,
          underline: "invert",
          children: [
            (0, a.jsx)(eo.z, {
              rating: t,
              ratingCount: r,
              showRatingCount: !1,
              size: s ? "sm" : "xs",
            }),
            (0, a.jsx)("p", {
              "aria-label": "Product Rating Count",
              children: r,
            }),
          ],
        });
      };
      em.displayName = "ProductCardExtendedRatingStars";
      var eC = r(27604),
        ex = r.n(eC);
      let eh = (e) => {
        var t, r, n;
        let {
            addToCartClickTrackingPlacementType: k,
            onViewDetailClick: T,
            index: R,
            isTopRatedQueryIntent: P,
          } = e,
          w = (0, x.K1)(h.Gs),
          I = (0, x.K1)(_.y4),
          A = (0, y.T)(),
          B = (0, v.k)(),
          L = (0, x.EJ)(g.u6),
          V = (0, x.EJ)(g.wk),
          W = (0, x.K1)(_.oc),
          O =
            (null !=
            (n =
              null ==
              (t = (null != (r = (0, x.EJ)(j.j)) ? r : {}).overall_summary)
                ? void 0
                : t.length)
              ? n
              : 0) > 0,
          { isInRegistryMode: M } = (0, b.Tl)(),
          { screenMd: H, screenLg: z } = (0, d.e)(),
          [G, F] = (0, l.useState)(!1),
          U = P && void 0 !== R && R >= 0 && R < 5,
          q = (0, f.hE)(null == I ? void 0 : I.ad_source),
          { trackClick: J } = (0, S.f)(),
          K = P
            ? "TOP_RATED_CARD"
            : O
            ? "GRID_CARD_AI_SUMMARY"
            : "EXTENDED_CARD",
          Y = (0, l.useMemo)(
            () =>
              w ? { type: "TCIN", id: w, position: R, sponsored: W } : void 0,
            [w, W, R]
          ),
          Q = (0, l.useCallback)(() => {
            J.track({ featureType: K, clickType: "BRAND", element: Y });
          }, [K, J, Y]),
          X = (0, l.useCallback)(() => {
            J.track({
              featureType: K,
              clickType: "SWATCH_SELECTION",
              element: Y,
            });
          }, [K, J, Y]),
          $ = (0, l.useCallback)(() => {
            J.track({ featureType: K, clickType: "OFFER_DETAILS", element: Y });
          }, [K, J, Y]),
          Z = (0, l.useCallback)(() => {
            null == T || T(),
              q(),
              J.track({
                featureType: K,
                clickType: "PRODUCT",
                element: w
                  ? { type: "TCIN", id: w, position: R, sponsored: W }
                  : void 0,
              });
          }, [T, q, J, K, w, R, W]),
          ee = (0, l.useCallback)(() => {
            J.track({
              featureType: K,
              clickType: "RATINGS_AND_REVIEWS",
              element: Y,
            });
          }, [K, J, Y]);
        return (0, a.jsxs)("div", {
          className: ex().extendedContainer,
          "data-test": "@web/site-top-of-funnel/ProductCardVariantExtended",
          children: [
            (0, a.jsxs)("div", {
              className: ex().productImageContainer,
              "data-test": "productCardImageItem",
              children: [
                U &&
                  (0, a.jsx)("div", {
                    className: ex().productCardExtendedNumbersItem,
                    children: (0, a.jsx)(ei, { text: "#".concat(R + 1) }),
                  }),
                (0, a.jsx)(i.D, {
                  altTextPrefix: U
                    ? "Best of Product ranking #".concat(R + 1, " - ")
                    : "",
                  objectFit: "contain",
                  onClick: Z,
                  resolutionsByBreakpoint: { 0: 350, md: 500 },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: ex().productDetailContainer,
              "data-test":
                "@web/site-top-of-funnel/ProductCardExtendedPriceAndDetailSection",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    W &&
                      (0, a.jsx)("p", {
                        className: ex().sponsoredItem,
                        children: "Sponsored",
                      }),
                    (0, a.jsx)(o.T, {}),
                    (0, a.jsx)(E.N, {
                      "aria-label": A,
                      color: "onLightSecondary",
                      "data-test": "product-title",
                      href: B,
                      onClick: Z,
                      underline: "never",
                      children: (0, a.jsx)(N.P, {
                        className: ex().productCardExtendedTitle,
                        lines: 2,
                        children: A,
                      }),
                    }),
                    H &&
                      (0, a.jsx)("div", {
                        className: ex().productCardBrandAndRibbonMessage,
                        children: (0, a.jsx)(c.v, { onClickBrandLink: Q }),
                      }),
                    H && (0, a.jsx)(u.Z, {}),
                    (0, a.jsxs)("div", {
                      className: ex().ratingStarsSwatches,
                      children: [
                        (0, a.jsx)(em, {
                          onClick: ee,
                          rating: L,
                          ratingCount: V,
                          url: B,
                        }),
                        (0, a.jsx)(p.q, {
                          max: z ? 5 : H ? 1 : 3,
                          onChange: X,
                          shape: "circle",
                        }),
                      ],
                    }),
                    H
                      ? (0, a.jsx)(m.Ce, { onClickExclusionsApplyLink: $ })
                      : (0, a.jsx)(C.l, {}),
                    H && (0, a.jsx)("div", { children: (0, a.jsx)(en, {}) }),
                  ],
                }),
                (0, a.jsx)(D, {
                  addToCartClickTrackingPlacementType: k,
                  featureType: K,
                  isInRegistryMode: M,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: ex().productExtendedDetailsContainer,
              children: [
                (0, a.jsx)(et, { includeAiSummary: !P, setShowScrollCue: F }),
                (0, a.jsx)("div", {
                  className: s()(ex().scrollCue, { [ex().hideScrollCue]: !G }),
                }),
              ],
            }),
          ],
        });
      };
      eh.displayName = "ProductCardVariantExtendedWithoutTrackingProvider";
      let e_ = (e) => {
        let {
            addToCartClickTrackingPlacementType: t,
            onViewDetailClick: r,
            index: l,
            isTopRatedQueryIntent: n,
          } = e,
          s = (0, x.K1)(_.y4),
          d = (0, x.K1)(h.Gs),
          i = (0, f.I3)(null == s ? void 0 : s.ad_source);
        return (0, a.jsx)(k.F, {
          clickId: null == s ? void 0 : s.click_id,
          creativeId: null == s ? void 0 : s.impression_id,
          tcin: d,
          token: null == s ? void 0 : s.click_token,
          useTrackers: i,
          children: (0, a.jsx)(eh, {
            addToCartClickTrackingPlacementType: t,
            index: l,
            isTopRatedQueryIntent: n,
            onViewDetailClick: r,
          }),
        });
      };
      e_.displayName = "ProductCardVariantExtended";
    },
  },
]);
