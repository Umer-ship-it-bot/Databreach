(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9003],
  {
    939: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => u });
      var r = a(3576),
        i = a(62701),
        s = a(14232),
        l = a(78502),
        n = a(26989),
        o = a(32038),
        d = a(33985),
        c = a(23021);
      let u = (e, t) => {
        let a =
            null == e
              ? void 0
              : e
                  .filter((e) => !(0, o.cL)(e) && !(0, o.CN)(e))
                  .map((e) => (0, n.Gs)(e)),
          { fulfillmentVariables: u, isFulfillmentQueryEnabled: p } = (0,
          c.F)(),
          [h, m] = (0, d.t)(
            (0, r._)(
              (0, i._)((0, r._)({}, u), {
                tcins: null == a ? void 0 : a.join(","),
              }),
              t
            ),
            { enabled: !!(null == a ? void 0 : a.length) && p }
          ),
          x = h();
        return [
          (0, s.useMemo)(
            () =>
              ((e, t) =>
                null == e
                  ? void 0
                  : e.map((e) => {
                      var a, s, l;
                      let o =
                        null == t
                          ? void 0
                          : t.find((t) => {
                              var a, r;
                              return (
                                (0, n.Gs)(e) ===
                                (null != (r = (0, n.Gs)(t))
                                  ? r
                                  : null == t || null == (a = t.fulfillment)
                                  ? void 0
                                  : a.product_id)
                              );
                            });
                      return (0, i._)((0, r._)({}, e), {
                        free_shipping:
                          null != (a = null == o ? void 0 : o.free_shipping)
                            ? a
                            : e.free_shipping,
                        fulfillment:
                          null != (s = null == o ? void 0 : o.fulfillment)
                            ? s
                            : e.fulfillment,
                        store_positions:
                          null != (l = null == o ? void 0 : o.store_positions)
                            ? l
                            : e.store_positions,
                      });
                    }))(e, null == x ? void 0 : x.product_summaries),
            [e, x]
          ),
          (0, l.NO)(m),
        ];
      };
    },
    2178: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => _ });
      var r = a(37876),
        i = a(14232),
        s = a(66667),
        l = a(90671),
        n = a(73208),
        o = a(32038),
        d = a(31294),
        c = a(44145),
        u = a(1800),
        p = a(97496);
      let h = {
          "5xsz1": "Household Essentials",
          "5xu1n": "Health",
          "5xt44": "Pets",
          "5xtzq": "Personal Care",
          "5xsyz": "Batteries",
          "55r1x": "Beauty",
          "5xtlp": "Diapering",
          "5xtl0": "Nursing & Feeding",
          "5xtjj": "Bath & Potty",
          "5xthj": "Health & Safety",
          "1i2d4": "Toddler",
        },
        m = RegExp(
          "^(".concat(
            "Boots & Barkley|Boots&Barkley|Defy & Inspire|Defy&Inspire|Made By Design|Simply Balanced|Smartly|Sonia Kashuk|Wondershop|up & up|up&up|Cloud Island",
            ")™?$"
          ),
          "i"
        ),
        x = "Target brand",
        _ = (e) => {
          let { className: t } = e,
            a = (0, n.EJ)(o.Au),
            _ = (0, d.W)()((0, c.Uw)(Object.keys(h))),
            g = (0, i.useRef)(null),
            [v, y] = (0, i.useState)(!1),
            j = (0, i.useCallback)((e) => {
              e && e.preventDefault(), y(!0);
            }, []),
            f = (0, i.useCallback)((e) => {
              e && e.preventDefault(), y(!1);
            }, []);
          if (!_) return null;
          let C = (0, u.D4)(a);
          return m.test(C)
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(s.A, {
                    hasClicksDismiss: !0,
                    isOpen: v,
                    onOpenChange: y,
                    target: g,
                    variant: "secondary",
                    children: x,
                  }),
                  (0, r.jsxs)("div", {
                    "aria-hidden": "true",
                    className: ""
                      .concat(p.ownedBrandBannerWrapper, " ")
                      .concat(t),
                    "data-test": "banner",
                    onMouseEnter: j,
                    onMouseLeave: f,
                    ref: g,
                    children: [
                      (0, r.jsx)("div", { className: p.triangle }),
                      (0, r.jsx)(l.c, {}),
                    ],
                  }),
                  (0, r.jsx)("span", { className: "h-sr-only", children: x }),
                ],
              })
            : null;
        };
      _.displayName = "ProductCardOwnedBrandEarmark";
    },
    3194: (e, t, a) => {
      "use strict";
      a.d(t, { W: () => o });
      var r = a(3576),
        i = a(65699),
        s = a(37876),
        l = a(75570),
        n = a(43371);
      let o = (e) => {
        var { isCirclePromo: t } = e,
          a = (0, i._)(e, ["isCirclePromo"]);
        return t
          ? (0, s.jsx)(n.Jv, (0, r._)({}, a))
          : (0, s.jsx)(l.N, (0, r._)({}, a));
      };
      o.displayName = "PromoLink";
    },
    4264: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var r = a(73208),
        i = a(26989);
      let s = () => {
        var e;
        let t = (0, r.K1)(i.Gs),
          a = (0, r.EJ)(i.Gs),
          s = (0, r.bZ)();
        return {
          childTcin: t,
          parentTcin: a,
          selectedTcin: s,
          tcin: null != (e = null != s ? s : t) ? e : a,
        };
      };
    },
    6245: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => x });
      var r = a(3576),
        i = a(37876),
        s = a(14232),
        l = a(16960),
        n = a(93967),
        o = a(73208),
        d = a(30997),
        c = a(42252),
        u = a(26835),
        p = a(93609);
      let h = (e) => {
        let { featureType: t, onClick: a, placement: r } = e,
          { push: h } = (0, c.rd)(),
          m = (0, p.b)(),
          x = (0, s.useCallback)(() => {
            null == a || a(), h(m);
          }, [m, a, h]);
        return (0, i.jsx)(n.H, {
          action: "error_boundary_cgi_button_tio",
          children: (0, i.jsx)(u.R, {
            "aria-label": "try on ".concat((0, o.EJ)(d.T)),
            clickType: "TRY_IT_ON",
            displayText: "Try it on",
            featureType: t,
            Icon: l.R,
            onClick: x,
            placement: r,
          }),
        });
      };
      h.displayName = "CgiButtonTryItOnBeauty";
      var m = a(8801);
      let x = (e) => ((0, m.I)() ? (0, i.jsx)(h, (0, r._)({}, e)) : null);
      x.displayName = "ConditionalCgiButtonTryItOnBeauty";
    },
    6357: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => em });
      var r = a(3576),
        i = a(37876),
        s = a(14232),
        l = a(15039),
        n = a(73208),
        o = a(36810),
        d = a(26989),
        c = a(90214),
        u = a(94170),
        p = a(80459),
        h = a(65469),
        m = a(40696),
        x = a(95408),
        _ = a(55472),
        g = a(78994),
        v = a(20319),
        y = a(71334),
        j = a(32038),
        f = a(94072),
        C = a(66318),
        b = a(72396),
        P = a(75570),
        N = a(38858),
        w = a(30334),
        T = a(28391),
        I = a(56947),
        k = a(30997),
        E = a(32837),
        A = a(46355),
        D = a(42252),
        L = a(37294),
        R = a(58111),
        S = a(40196),
        O = a(1800),
        B = a(42335),
        W = a(40591),
        M = a(18325),
        z = a(90554),
        K = a(92630);
      let F = (e) => {
        let { reviewPros: t } = e;
        return t && (null == t ? void 0 : t.length) !== 0
          ? (0, i.jsxs)(N.P, {
              className: "h-margin-b-tight h-text-md",
              lines: 2,
              children: [
                "Loved for: ",
                (0, i.jsx)("span", {
                  className: "h-text-bold",
                  children: null == t ? void 0 : t[0],
                }),
              ],
            })
          : null;
      };
      F.displayName = "ProductCardReviewProSummary";
      var G = a(21014),
        J = a(71084),
        V = a(70418),
        U = a(41435);
      let Y = (e) => {
        var t;
        let { onClick: a } = e,
          r = null != (t = (0, w.k)()) ? t : "",
          s = (0, n.EJ)(T.u6),
          l = (0, n.EJ)(T.wk),
          o = V.o.buildURLWithParams(r, { type: "scroll_to_review_section" });
        return !s || s <= 0
          ? null
          : (0, i.jsxs)(P.N, {
              className: U.ratingsAndReviews,
              href: o,
              onClick: a,
              underline: "invert",
              children: [
                (0, i.jsx)("span", { "aria-hidden": "true", children: s }),
                (0, i.jsx)(J.T, { width: 14 }),
                (0, i.jsxs)("span", {
                  "aria-label": "".concat(l, " ratings"),
                  className: U.ratingCount,
                  children: ["(", l, ")"],
                }),
              ],
            });
      };
      Y.displayName = "ProductCardRatingsAndReviews";
      var H = a(956),
        q = a(19554);
      let Z = () =>
        (0, i.jsxs)("div", {
          className: q.rowStyle,
          children: [
            (0, i.jsx)(H.v, {
              "aria-label": "circle 360",
              "data-test": "circle360-illustration",
              height: 16,
              name: "circle360-tm",
              role: "img",
            }),
            (0, i.jsx)("span", {
              className: "h-text-bold ".concat(q.membersOnly),
              children: "members only",
            }),
          ],
        });
      Z.displayName = "ProductCardLoyaltyEventBadge";
      var Q = a(16534);
      let X = (e) => {
        var t, a, r, o;
        let {
            onChangeSwatch: d,
            onClickBrandLink: c,
            onClickRatingStars: u,
            onViewDetailClick: p,
            shouldShowReviewPros: h = !1,
          } = e,
          { push: m, asPath: g } = (0, D.rd)(),
          v = null != (r = (0, w.k)()) ? r : "",
          y = (0, n.EJ)(T.u6),
          j = (0, n.EJ)(I.j),
          f =
            h &&
            (null == j ? void 0 : j.pros) &&
            (null == j ? void 0 : j.pros.length) > 0 &&
            y &&
            y >= 4,
          C = (0, k.T)(),
          b = !!(0, n.EJ)(E.G),
          J = l("h-display-flex", { "h-padding-t-tiny": !y && b }),
          V = "DLP" === (0, S.Hq)(g),
          U =
            (null == (t = (0, L.Y)())
              ? void 0
              : t.EXPERIMENT_SERVERSIDE_RENDER_DLP_ENABLED) && V
              ? (0, G.D)(v)
              : v,
          H = b
            ? (0, i.jsx)("div", {
                className: J,
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(M.q, {
                    onChange: d,
                    shouldDisplaySwatchInfoText: !0,
                  }),
                }),
              })
            : null,
          { screenSmMax: q = !1, screenXsMax: X } = (0, _.e)(),
          $ =
            null !=
            (o =
              null == (a = (0, L.Y)())
                ? void 0
                : a.EXP_PLP_PDP_VIEW_TRANSITION_ENABLED)
              ? o
              : (0, x.Mv)("GLOBAL_PLP_PDP_VIEW_TRANSITION_ENABLED"),
          ee = (0, R.p)(),
          et = (0, s.useCallback)(
            (e) => {
              null == p || p(e),
                !v ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  (e.preventDefault(),
                  ee("EXP_PLP_PDP_VIEW_TRANSITION_ENABLED"),
                  $ ? (0, B.s)(() => m(v)) : m(v));
            },
            [p, m, v, $, ee]
          ),
          ea = (0, x.Mv)("PARTNER_TAG_ENABLED"),
          er = (0, n.K1)(A.Cr);
        return (0, i.jsxs)("div", {
          className: Q.productCardItemInfo,
          children: [
            er && (0, i.jsx)(Z, {}),
            ea && (0, i.jsx)(K.u, {}),
            (0, i.jsxs)("span", {
              className: l(
                { "h-margin-b-tiny": !f },
                { "h-margin-b-tight": f }
              ),
              children: [
                (0, i.jsx)("div", {
                  className: "h-display-flex h-flex-justify-space-between",
                  children: (0, i.jsx)(P.N, {
                    "aria-label": (0, O.D4)(C),
                    className: l(Q.styledTitleLink, "h-display-block"),
                    color: "onLightSecondary",
                    "data-test": "product-title",
                    href: U,
                    onClick: et,
                    underline: "never",
                    children: (0, i.jsx)(N.P, {
                      lines: 2,
                      title: (0, O.D4)(C),
                      children: C,
                    }),
                  }),
                }),
                !X && (0, i.jsx)(W.v, { onClickBrandLink: c }),
              ],
            }),
            (0, i.jsx)(Y, { onClick: u }),
            f && (0, i.jsx)(F, { reviewPros: null == j ? void 0 : j.pros }),
            H,
            (0, i.jsx)(z.r, {
              className: l("h-text-md h-text-left", {
                "h-margin-v-tiny": q,
                "h-margin-v-tight": !q,
              }),
            }),
          ],
        });
      };
      X.displayName = "ProductCardItemInfo";
      var $ = a(60669),
        ee = a(57360),
        et = a(10244),
        ea = a(68979),
        er = a(25017),
        ei = a(21254),
        es = a(84685);
      let el = () => {
        let e = (0, n.EJ)(j.Bo),
          t = (0, n.K1)(et.W1),
          a = (0, n.K1)(et.yM),
          r = (0, ea.w)(er.WF),
          s = (0, ea.w)(er.e0);
        return (0, i.jsxs)("div", {
          "data-test": "detail-messaging",
          children: [
            e &&
              (0, i.jsx)("p", {
                className: "h-text-md h-text-grayDark",
                children: e,
              }),
            (0, i.jsx)(ei.S, { hideAddOnMessage: !0 }),
            t &&
              a &&
              (0, i.jsx)(i.Fragment, {
                children: (s || !r) && (0, i.jsx)(es.M, {}),
              }),
          ],
        });
      };
      el.displayName = "ProductCardDefaultDetailMessaging";
      let en = () =>
        (0, i.jsx)("p", {
          className: "h-text-sm h-padding-t-tiny",
          "data-test": "sponsoredText",
          children: "Sponsored",
        });
      en.displayName = "SponsoredTag";
      var eo = a(19421);
      let ed = () =>
        (0, i.jsxs)("div", {
          className: eo.sustainabilityOrnamentation,
          "data-test": "sustainabilityOrnamentation",
          children: [
            (0, i.jsx)("svg", {
              "aria-label": "target clean badge",
              className: eo.sustainabilityOrnamentationImage,
              fill: "none",
              height: "16",
              viewBox: "0 0 16 16",
              width: "16",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, i.jsxs)("g", {
                transform: "translate(1 0)",
                children: [
                  (0, i.jsx)("path", {
                    d: "M6.16662 0.981119C6.68229 0.683397 7.31762 0.683397 7.83328 0.981119L12.6618 3.76887C13.1775 4.06659 13.4951 4.6168 13.4951 5.21224V10.7877C13.4951 11.3832 13.1775 11.9334 12.6618 12.2311L7.83328 15.0189C7.31762 15.3166 6.68229 15.3166 6.16662 15.0189L1.33809 12.2311C0.822426 11.9334 0.504761 11.3832 0.504761 10.7877V5.21224C0.504761 4.6168 0.822426 4.06659 1.33809 3.76887L6.16662 0.981119Z",
                    fill: "#1F7F32",
                  }),
                  (0, i.jsxs)("g", {
                    transform: "translate(2 3)",
                    children: [
                      (0, i.jsx)("path", {
                        d: "M5 6.37494C5.75939 6.37494 6.375 5.75933 6.375 4.99994C6.375 4.24055 5.75939 3.62494 5 3.62494C4.24061 3.62494 3.625 4.24055 3.625 4.99994C3.625 5.75933 4.24061 6.37494 5 6.37494Z",
                        fill: "white",
                      }),
                      (0, i.jsx)("path", {
                        d: "M9.125 4.99994C9.125 7.27811 7.27817 9.12494 5 9.12494C2.72183 9.12494 0.875 7.27811 0.875 4.99994C0.875 2.72176 2.72183 0.874939 5 0.874939C7.27817 0.874939 9.125 2.72176 9.125 4.99994ZM2.25 4.99994C2.25 6.51872 3.48122 7.74994 5 7.74994C6.51878 7.74994 7.75 6.51872 7.75 4.99994C7.75 3.48116 6.51878 2.24994 5 2.24994C3.48122 2.24994 2.25 3.48116 2.25 4.99994Z",
                        fill: "white",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)("span", {
              className: eo.targetCleanLabel,
              children: "Target Clean",
            }),
            (0, i.jsx)("span", {
              className: eo.ingredientsText,
              children: "Made without 168 chemicals",
            }),
          ],
        });
      ed.displayName = "ProductCardSustainabilityOrnamentation";
      var ec = a(20193);
      let eu = (e) => {
        var t;
        let {
            auxRibbonMessage: a,
            className: r,
            onChangeSwatch: d,
            onClickBrandLink: c,
            onClickExclusionsApplyLink: u,
            onClickPromoLink: p,
            onClickRatingStars: h,
            onViewDetailClick: m,
            shouldHideDesirabilityCue: _ = !1,
            shouldShowReviewPros: g,
          } = e,
          v = (0, n.K1)(j.iz),
          y = (0, n.t_)(),
          P = !_,
          N = (0, n.K1)(o.oc),
          w = (0, n.K1)(j.qO),
          T =
            null !=
              (t =
                null == w ? void 0 : w.some((e) => "836281" === e.value_id)) &&
            t,
          I = (0, n.K1)(j.AG),
          k = !!I && [3, 37, 49, 52, 54, 63, 94].includes(I),
          E = (0, s.useCallback)(
            (e) =>
              (null != e
                ? e
                : (0, x.Mv)("SUSTAINABILITY_ORNAMENTATION_ENABLED")) &&
              T &&
              k,
            [T, k]
          ),
          { checkIsExperimentEnabledAndTrackFireflyEvent: A } = (0, b.G)(
            "SUSTAINABILITY_ORNAMENTATION_ENABLED",
            { checkIsExperimentEnabledWithCustomConditions: E }
          ),
          D = A();
        return (0, i.jsxs)(C.f, {
          className: l(ec.productDetailsRow, r),
          "data-test": "product-details",
          start: "xs",
          children: [
            P && (0, i.jsx)(f.p, { "data-position": y, ornamentType: "guest" }),
            (0, i.jsxs)("div", {
              className: ec.detailsWrapper,
              children: [
                (0, i.jsx)($.T, { auxRibbonMessage: a, onClickPromoLink: p }),
                P &&
                  (0, i.jsx)(f.p, {
                    className: "h-margin-b-tiny",
                    "data-position": y,
                    ornamentType: "enterprise",
                  }),
                (0, i.jsx)(X, {
                  onChangeSwatch: d,
                  onClickBrandLink: c,
                  onClickRatingStars: h,
                  onViewDetailClick: m,
                  shouldShowReviewPros: g,
                }),
                D ? (0, i.jsx)(ed, {}) : null,
                !v &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(el, {}),
                      (0, i.jsx)(ee.Ce, { onClickExclusionsApplyLink: u }),
                    ],
                  }),
                N && (0, i.jsx)(en, {}),
              ],
            }),
          ],
        });
      };
      eu.displayName = "ProductCardDefaultBody";
      var ep = a(25565);
      let eh = (e) => {
        let {
            addToCartButtonOverride: t,
            addToCartClickTrackingPlacementType: a,
            auxRibbonMessage: r,
            cgiButtonSeeItOnYouIos: l,
            cgiIconTryItOnBeauty: d,
            cgiButtonTryItOnBeauty: u,
            crushButton: p,
            featureType: j,
            onChangeFavoritesButton: f,
            onChangeSwatch: C,
            onClickBrandLink: b,
            onClickExclusionsApplyLink: P,
            onClickPromoLink: N,
            onClickRatingStars: w,
            onViewDetailClick: T,
            viewSimilarButton: I,
            shouldHideDesirabilityCue: k,
            shouldShowReviewPros: E,
          } = e,
          { screenXsMax: A } = (0, _.e)(),
          D = (0, n.K1)(o.oc),
          L = (0, n.K1)(o.y4),
          R = (0, c.hE)(null == L ? void 0 : L.ad_source),
          S = (0, s.useCallback)(
            (e) => {
              T && (R(), T(e));
            },
            [T, R]
          );
        return (0, i.jsx)(v.U, {
          children: (0, i.jsxs)("div", {
            className: ep.productCardVariantDefault,
            children: [
              (0, i.jsxs)("div", {
                className: ep.productCardImageWrapper,
                children: [
                  (0, i.jsx)(y.D, {
                    featureType: j,
                    isSwipeableProductCardImageEnabled: !0,
                    onClick: S,
                    resolutionsByBreakpoint: { 0: 350, sm: 500 },
                  }),
                  D ? null : I,
                  D ? null : l,
                  (0, i.jsx)("div", { className: ep.iconWrapper, children: d }),
                ],
              }),
              (0, i.jsx)("div", {
                className: ep.productCardBody,
                "data-test": h.v2,
                children: (0, i.jsx)(eu, {
                  auxRibbonMessage: r,
                  onChangeSwatch: C,
                  onClickBrandLink: b,
                  onClickExclusionsApplyLink: P,
                  onClickPromoLink: N,
                  onClickRatingStars: w,
                  onViewDetailClick: S,
                  shouldHideDesirabilityCue: k,
                  shouldShowReviewPros: E,
                }),
              }),
              (0, i.jsxs)("div", {
                className: ep.addToCartButtonWrapper,
                children: [
                  (0, i.jsxs)("div", {
                    className: ep.styledCartAndTryOnButtons,
                    children: [
                      null != t
                        ? t
                        : (0, i.jsx)(g.E, {
                            featureType: null != j ? j : "GRID_CARD",
                            placementType: a,
                            size: A ? "md" : "sm",
                            willHaveProductContextFulfillmentDataForAddToCart:
                              !0,
                          }),
                      u,
                    ],
                  }),
                  (0, x.Mv)("PLP_AND_PDP_CRUSH_BUTTON_ENABLED")
                    ? (0, i.jsx)("div", {
                        className: ep.favoritesButton,
                        children:
                          null != p
                            ? p
                            : (0, i.jsx)(m.r, { hasNoCircle: A, onChange: f }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      };
      eh.displayName = "ProductCardVariantDefaultWithoutTrackingProvider";
      let em = (e) => {
        var t;
        let a = (0, n.K1)(o.y4),
          m = (0, n.K1)(d.Gs),
          x = (0, n.t_)(),
          _ = (0, n.K1)(d.Gs),
          g = null == (t = (0, n.K1)(o.y4)) ? void 0 : t.impression_id,
          v = (0, c.I3)(null == a ? void 0 : a.ad_source),
          y = (0, s.useMemo)(() => {
            if ((null == a ? void 0 : a.ad_source) === "ratp") {
              var e;
              return {
                ad_token: null != (e = a.click_token) ? e : "",
                position: x,
                server_impression_id: g,
              };
            }
          }, [a, g, x]),
          j = (0, i.jsx)("div", {
            className: l(e.className, ep.productCardVariantDefaultWrapper),
            "data-test": h.IL,
            style: {
              viewTransitionName: "product-info-".concat(null != m ? m : ""),
            },
            children: (0, i.jsx)(eh, (0, r._)({}, e)),
          });
        return (0, i.jsx)(u.F, {
          clickId: null == a ? void 0 : a.click_id,
          creativeId: null == a ? void 0 : a.impression_id,
          tcin: m,
          token: null == a ? void 0 : a.click_token,
          useTrackers: v,
          children: y
            ? (0, i.jsx)("div", {
                className: "h-display-flex",
                children: (0, i.jsx)(u.F, {
                  carouselData: {
                    element: {
                      id: _,
                      sponsored: !0,
                      type: "TCIN",
                      position: x,
                    },
                    impressionId: g,
                    ratp: y,
                  },
                  tracking: ["impression"],
                  useTrackers: p.F,
                  children: j,
                }),
              })
            : j,
        });
      };
      em.displayName = "ProductCardVariantDefault";
    },
    8801: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => s });
      var r = a(73208);
      let i = (e) => !!(null == e ? void 0 : e.makeup_try_it_on),
        s = () => !!(0, r.K1)(i);
    },
    12383: (e, t, a) => {
      "use strict";
      a.d(t, { L_: () => i, UU: () => l, v4: () => s });
      let r = () => {
          var e, t, a;
          return null !=
            (a =
              null == (t = window) || null == (e = t.navigator)
                ? void 0
                : e.userAgent)
            ? a
            : "";
        },
        i = () =>
          !(() => {
            let e = r();
            return (
              (() => {
                let e = r();
                return /iPad|iPhone|iPod/.test(e) && !("MSStream" in window);
              })() && /CriOS\//.test(e)
            );
          })() &&
          (() => {
            let e = window.document.createElement("a");
            try {
              var t, a;
              return !!(null == e ||
              null == (a = e.relList) ||
              null == (t = a.supports)
                ? void 0
                : t.call(a, "ar"));
            } catch (e) {
              return !1;
            }
          })(),
        s = () =>
          (() => {
            let e = r(),
              t = !1;
            return (
              (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                e
              ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[23]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                  e.slice(0, 4)
                )) &&
                (t = !0),
              t
            );
          })() &&
          (() => {
            let e = r();
            return /android/i.test(e);
          })(),
        l = () => !i() && !s();
    },
    14239: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(9394);
      let l = (e) =>
        (0, i.jsx)(
          s.I,
          (0, r._)(
            { _name: "ArIos", _src: "ArIos.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      l.displayName = "IconArIos";
    },
    15264: (e, t, a) => {
      "use strict";
      a.d(t, { Z: () => T });
      var r = a(37876),
        i = a(14232),
        s = a(42252),
        l = a(38858),
        n = a(54432),
        o = a(29464),
        d = a(18170),
        c = a(23945),
        u = a(48603),
        p = a(2503),
        h = a(18551),
        m = a(50301),
        x = a(73208),
        _ = a(36810),
        g = a(25012),
        v = a(19351),
        y = a(72396),
        j = a(69107),
        f = a(14960),
        C = a(65596);
      let b = function () {
          var e, t;
          let { includeParent: a = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = null != (e = (0, x.EJ)(g.TC)) ? e : [],
            i = [...(a ? r : []), ...(null != (t = (0, x.K1)(g.TC)) ? t : [])];
          return i.filter(
            (e, t) =>
              i.findIndex((t) => {
                let { promotion_id: a } = t;
                return e.promotion_id === a;
              }) === t
          );
        },
        P = function () {
          var e, t, a;
          let { includeParent: r = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            i = b({ includeParent: r }),
            s = null != (e = (0, x.EJ)(j.KK)) ? e : [],
            l = [
              ...(r ? s : []),
              ...(null != (t = (0, x.K1)(j.KK)) ? t : []),
            ].filter(
              (e, t, a) =>
                t === a.findIndex((t) => e.promotion_id === t.promotion_id)
            ),
            n = null != (a = (0, x.K1)(j.Wq)) ? a : [],
            o = l.filter((e) => !(0, f.j9)(e)),
            d = l.filter((e) => (0, f.j9)(e));
          if (0 === n.length && 0 === o.length && d.length > 0) return d;
          let c = new Set(
              i.map((e) => {
                let { promotion_id: t } = e;
                return null != t ? t : "";
              })
            ),
            u = new Set([...o, ...n].map((e) => (0, C.h5)(e))),
            p = [...o, ...n].sort((e, t) => {
              var a, r;
              let i = 100 * !!c.has(null != (a = (0, C.h5)(e)) ? a : ""),
                s = 100 * !!c.has(null != (r = (0, C.h5)(t)) ? r : ""),
                l = 10 * !!(0, C.kI)(e),
                n = 10 * !!(0, C.kI)(t),
                o = +!!(0, C.ny)(e);
              return s + n + +!!(0, C.ny)(t) - (i + l + o);
            });
          return [...i.filter((e) => !u.has(e.promotion_id)), ...p];
        };
      var N = a(3194),
        w = a(43371);
      let T = (e) => {
        var t, a, j;
        let { onClickPromoLink: f, showStaticCircleDealsText: T = !1 } = e,
          [I] = (0, h.RJ)(),
          { push: k } = (0, s.rd)(),
          E = (0, x.K1)(_.oc),
          A = P(),
          D = b(),
          L = (0, c.V)(),
          R = (0, u.$7)(),
          S = (0, x.EJ)(g.Z1),
          { openJoinCircleModal: O } = (0, n.Q)(),
          B = (0, i.useCallback)(() => {
            null == f || f(void 0), L && (R ? O() : (0, p.Jv)());
          }, [O, R, L, f]),
          W = (() => {
            let e = (0, x.Cf)(),
              t = (0, x.EJ)((e) => (null == e ? void 0 : e.price)),
              a = (0, x.K1)((e) => (null == e ? void 0 : e.price));
            return e ? a : t;
          })(),
          M =
            S || null == W || null == (t = W.discount_price_circle_base)
              ? void 0
              : t.formatted_price,
          z =
            (null == W || null == (a = W.discount_price_circle_base)
              ? void 0
              : a.hide_price) ||
            (null == W || null == (j = W.discount_price_all_guests)
              ? void 0
              : j.hide_price) ||
            (null == W ? void 0 : W.hide_price),
          K = new Set(D.map((e) => e.promotion_id)),
          F = A.find((e) => (0, C.JK)(e)),
          G = (0, C.ny)(F),
          J = (0, C.kI)(F),
          V = I(m.UK),
          U = A.some((e) => {
            var t;
            return M && K.has(null != (t = (0, C.h5)(e)) ? t : "");
          }),
          Y = (0, C.$I)(F),
          H = (0, C.JK)(F, { type: "long" }),
          q = (V || !G) && U && !z ? "with " : "",
          Z = (0, i.useCallback)(() => {
            Y &&
              ((0, v.cW)({
                listClick: {
                  listType: "search",
                  listSubType: E ? "sponsored" : "",
                },
              }),
              k(Y, void 0, { scroll: !1 }));
          }, [E, Y, k]),
          Q = (0, i.useCallback)(() => {
            null == f || f(F), Z();
          }, [Z, f, F]),
          { checkIsExperimentEnabledAndTrackFireflyEvent: X } = (0, y.G)(
            "TARGET_FREEBIES_ENABLED",
            {}
          );
        return "" === H || 0 === A.length
          ? null
          : !M || V || z
          ? T && G
            ? (0, r.jsxs)("div", {
                children: [
                  (0, r.jsx)(l.P, {
                    "data-test": "first-regular-promo",
                    lines: 1,
                    children: (0, r.jsxs)(w.Wq, {
                      children: [
                        !G || q ? null : (0, r.jsx)(w.Of, { width: 14 }),
                        q || null,
                        H,
                      ],
                    }),
                  }),
                  A.length > 1 &&
                    (0, r.jsx)(w.Wq, {
                      children: " + "
                        .concat(A.length - 1, " deal")
                        .concat(2 === A.length ? "" : "s"),
                    }),
                ],
              })
            : (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(N.W, {
                    className:
                      "h-text-left h-text-md h-position-relative h-display-flex",
                    color: "promotion",
                    "data-test": "multiple-promos-sub-promo",
                    href: null == Y ? void 0 : Y.toString(),
                    isCirclePromo: G,
                    noHoverColor: !Y,
                    onClick: Q,
                    underline: Y ? "always" : "never",
                    children: (0, r.jsxs)(l.P, {
                      "data-test": "first-regular-promo",
                      lines: A.length > 1 ? 1 : 2,
                      children: [
                        !G || q
                          ? null
                          : X() && J
                          ? (0, r.jsx)(d.P, {
                              className: "h-margin-r-tiny",
                              style: { transform: "translateY(1px)" },
                              width: 12,
                            })
                          : (0, r.jsx)(o.d, {
                              className: "h-margin-r-tiny",
                              style: { transform: "translateY(1px)" },
                              width: 12,
                            }),
                        q,
                        H,
                      ],
                    }),
                  }),
                  A.length > 1 &&
                    (0, r.jsxs)(w.xk, {
                      className: "".concat(
                        !G && "h-text-red",
                        " h-text-md h-display-flex"
                      ),
                      children: [
                        "+ ",
                        A.length - 1,
                        " deal",
                        2 === A.length ? "" : "s",
                      ],
                    }),
                ],
              })
          : (0, r.jsxs)(N.W, {
              className:
                "h-text-left h-text-md h-position-relative h-display-block",
              color: "promotion",
              isCirclePromo: !0,
              onClick: B,
              underline: "never",
              children: [
                (0, r.jsx)(o.d, {
                  style: { transform: "translateY(1px)" },
                  width: 12,
                }),
                " ",
                (0, r.jsx)("span", { className: "h-text-nowrap", children: M }),
                " ",
                (0, r.jsx)("span", {
                  className: "h-text-underline h-text-nowrap",
                  children: "Get this deal",
                }),
              ],
            });
      };
      T.displayName = "PriceStandardPromoMessage";
    },
    16534: (e) => {
      e.exports = {
        productCardItemInfo: "styles_productCardItemInfo__VqJrZ",
        styledTitleLink: "styles_styledTitleLink__hB78E",
      };
    },
    16631: (e, t, a) => {
      "use strict";
      var r;
      a.d(t, { h: () => r }),
        (function (e) {
          (e.FINDS_DETAIL_PAGE = "finds-detail-page"),
            (e.PLP = "plp"),
            (e.PLP_PRODUCT_CARD = "plp-product-card"),
            (e.PLP_VIZ_PRODUCT_CARD = "plp-viz-product-card"),
            (e.PLP_DRAWER = "plp-ugc"),
            (e.PLP_PRZ = "plp-prz"),
            (e.PDP_COLUMN = "pdp-column"),
            (e.PDP_TOP_OF_FOLD = "pdp-top-of-fold"),
            (e.PDP_TOP_OF_FOLD_IMAGE = "pdp-top-of-fold-image"),
            (e.PDP_NOW_TEMPLATE_GALLERY = "pdp-now-template-gallery"),
            (e.PLP_VIZ_SHOPPABLE_DRAWER = "viz-shoppable-drawer"),
            (e.SII3D = "see-it-in-3d");
        })(r || (r = {}));
    },
    16960: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(9394);
      let l = (e) =>
        (0, i.jsx)(
          s.I,
          (0, r._)(
            { _name: "ArWeb", _src: "ArWeb.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      l.displayName = "IconArWeb";
    },
    17654: (e) => {
      e.exports = {
        addToCartButtonWrapper: "styles_addToCartButtonWrapper__DSvDm",
        bodyLink: "styles_bodyLink__SKuFd",
        cartAndTryOnWrapper: "styles_cartAndTryOnWrapper__gqBJU",
        favoritesButtonWrapper: "styles_favoritesButtonWrapper__aFhfi",
        iconWrapper: "styles_iconWrapper__pcUCv",
        productCardBody: "styles_productCardBody__DuXOH",
        productCardVariantAesthetic:
          "styles_productCardVariantAesthetic__S_loZ",
        productCardVariantAestheticWrapper:
          "styles_productCardVariantAestheticWrapper__HlN6D",
        productCardVariantAestheticImageWrapper:
          "styles_productCardVariantAestheticImageWrapper__MVFtx",
      };
    },
    17679: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => n });
      var r = a(37876),
        i = a(73208),
        s = a(25012),
        l = a(83070);
      let n = () => {
        let e = (0, i.K1)(s.ph),
          t = (0, i.K1)(s.em);
        return e && "value bundle" === t
          ? (0, r.jsx)("div", {
              style: { fontSize: l.eD8 },
              children: "".concat(e, " when purchased separately"),
            })
          : null;
      };
      n.displayName = "PriceBundleTotalRetailMessage";
    },
    17961: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(92388);
      let l = (e) =>
        (0, i.jsx)(
          s.k,
          (0, r._)(
            {
              _name: "TargetPlusMark",
              _src: "light/TargetPlusMark.svg",
              _viewBox: "0 0 32 32",
            },
            e
          )
        );
      l.displayName = "IconTargetPlusMark";
    },
    19421: (e) => {
      e.exports = {
        sustainabilityOrnamentation:
          "styles_sustainabilityOrnamentation__Aj2CK",
        sustainabilityOrnamentationImage:
          "styles_sustainabilityOrnamentationImage__NQp7O",
        targetCleanLabel: "styles_targetCleanLabel__VfXwI",
        ingredientsText: "styles_ingredientsText__k9L1j",
      };
    },
    19554: (e) => {
      e.exports = {
        rowStyle: "styles_rowStyle__xTPfH",
        membersOnly: "styles_membersOnly__ZjVf8",
      };
    },
    20193: (e) => {
      e.exports = {
        productDetailsRow: "styles_productDetailsRow___vaOV",
        detailsWrapper: "styles_detailsWrapper__cC4Wx",
      };
    },
    20319: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => l });
      var r = a(37876),
        i = a(38747),
        s = a(42499);
      let l = (e) => {
        let { children: t } = e,
          a = (0, s.H)();
        return (0, r.jsx)(i.p.Provider, { value: a, children: t });
      };
      l.displayName = "ProductCardContextProvider";
    },
    24245: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(92388);
      let l = (e) =>
        (0, i.jsx)(
          s.k,
          (0, r._)(
            {
              _name: "CircleOffer",
              _src: "light/CircleOffer.svg",
              _viewBox: "0 0 32 32",
            },
            e
          )
        );
      l.displayName = "IconCircleOffer";
    },
    25565: (e) => {
      e.exports = {
        productCardVariantDefault: "styles_productCardVariantDefault__CggK9",
        favoritesButton: "styles_favoritesButton__Lw_KX",
        styledCartAndTryOnButtons: "styles_styledCartAndTryOnButtons__YWWii",
        productCardBody: "styles_productCardBody__BhYI8",
        productCardImageWrapper: "styles_productCardImageWrapper__8lrgw",
        productCardVariantDefaultWrapper:
          "styles_productCardVariantDefaultWrapper__rgyHP",
        iconWrapper: "styles_iconWrapper__5V1iR",
        addToCartButtonWrapper: "styles_addToCartButtonWrapper__ea2pH",
        productDetailsRow: "styles_productDetailsRow__I87_g",
        detailsWrapper: "styles_detailsWrapper__Ntqlg",
      };
    },
    26835: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => P });
      var r = a(37876),
        i = a(14232),
        s = a(73208),
        l = a(26989),
        n = a(60823),
        o = a(16631),
        d = a(77232),
        c = a(18027),
        u = a(19968),
        p = a(87068),
        h = a(98601);
      let m = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-0" })(
          [
            "display:flex;text-align:center;font-size:",
            ";border-radius:24px;max-width:90px;padding:",
            " ",
            ";margin:",
            ";@media (min-width:",
            "){position:absolute;left:40%;transform:translateX(-50%);margin:0;}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          h.gx.size.text.small,
          h.xe.generic.x1,
          h.xe.generic.x3,
          h.xe.generic.x1,
          h.fi.sm,
          h.Tj.interactive.secondary.hover,
          h.Tj.border.interactive.secondary.hover,
          h.Tj.text.onLight.primary,
          h.Tj.interactive.secondary.active,
          h.Tj.interactive.secondary.active,
          h.Tj.text.onDark.primary
        ),
        x = d.I4.span.withConfig({ componentId: "sc-8759a6b7-1" })(
          ["display:flex;margin-right:", ";margin-bottom:", ";"],
          (e) => {
            let { marginRight: t } = e;
            return t ? h.xe.generic.x2 : 0;
          },
          (e) => {
            let { marginBottom: t } = e;
            return t ? h.xe.generic.x1 : 0;
          }
        ),
        _ = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-2" })(
          [
            "display:flex;justify-content:flex-start;margin-top:",
            ";min-width:125px;padding:0 ",
            ";&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          h.xe.generic.x3,
          h.xe.generic.x3,
          h.Tj.palette.white,
          h.Tj.interactive.secondary.hover,
          h.Tj.border.interactive.secondary.hover,
          h.Tj.text.onLight.primary,
          h.Tj.interactive.secondary.active,
          h.Tj.interactive.secondary.active,
          h.Tj.text.onDark.primary
        ),
        g = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-3" })(
          [
            "display:flex;margin-top:",
            ";padding:0 ",
            ";justify-content:center;font-size:",
            ";height:",
            ";width:50%;min-width:180px;@media (min-width:",
            "){font-size:",
            ";min-width:210px;}@media (min-width:",
            "){height:",
            ";font-size:",
            ";}&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          h.xe.generic.x3,
          h.xe.generic.x3,
          h.gx.size.text.small,
          h.uJ.button.sm,
          h.fi.lg,
          h.gx.size.text.medium,
          h.fi.xl,
          h.uJ.button.md,
          h.gx.size.text.base,
          h.Tj.palette.white,
          h.Tj.interactive.secondary.hover,
          h.Tj.border.interactive.secondary.hover,
          h.Tj.text.onLight.primary,
          h.Tj.interactive.secondary.active,
          h.Tj.interactive.secondary.active,
          h.Tj.text.onDark.primary
        ),
        v = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-4" })(
          [
            "border:",
            " solid 1px;border-radius:",
            ";display:flex;flex-direction:column;font-size:",
            ";height:auto;min-width:80px;padding:",
            " ",
            ";white-space:initial;justify-content:flex-start;span{line-height:1.4;}&:hover{background-color:",
            ";}",
          ],
          h.Tj.palette.gray.medium,
          h.xe.generic.x2,
          h.gx.size.text.medium,
          h.xe.generic.x4,
          h.xe.generic.x4,
          h.Tj.palette.gray.lightest
        ),
        y = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-5" })(
          [
            "border-radius:",
            ";display:flex;text-align:center;font-size:",
            ";padding:",
            " ",
            ";max-width:170px;position:relative;span{line-height:16px;}",
          ],
          h.PQ.radius.x6,
          h.gx.size.text.small,
          h.xe.generic.x1,
          h.xe.generic.x2
        ),
        j = (0, d.I4)(u.n).withConfig({ componentId: "sc-8759a6b7-6" })(
          [
            "display:flex;margin-top:",
            ";max-width:90px;&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          h.xe.generic.x3,
          h.Tj.palette.white,
          h.Tj.interactive.secondary.hover,
          h.Tj.border.interactive.secondary.hover,
          h.Tj.text.onLight.primary,
          h.Tj.interactive.secondary.active,
          h.Tj.interactive.secondary.active,
          h.Tj.text.onDark.primary
        ),
        f = (0, d.I4)(p.$).withConfig({ componentId: "sc-8759a6b7-7" })(
          ["height:32px;path{fill:", ";}"],
          h.Tj.interactive.secondary.default
        ),
        C = (0, d.I4)(p.$).withConfig({ componentId: "sc-8759a6b7-8" })(
          ["height:", ";width:100%;font-size:", ";path{fill:", ";}"],
          h.uJ.button.md,
          h.gx.size.text.base,
          h.Tj.interactive.secondary.default
        ),
        b = (0, d.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-9" })(
          [
            "display:flex;text-align:center;border-radius:",
            ";background-color:white;",
          ],
          h.PQ.radius.x4
        ),
        P = (e) => {
          var t;
          let a,
            {
              clickType: d,
              displayText: c = "See this item in 3D",
              featureType: u,
              id: p,
              onClick: h,
              placement: P = o.h.PDP_COLUMN,
              ref: N,
              Icon: w,
              ugc: T,
            } = e,
            { trackClick: I } = (0, n.f)(),
            k = (0, s.K1)(l.Gs),
            E = (0, s.EJ)(l.Gs),
            A = (0, s.bZ)(),
            D = null != (t = null != A ? A : k) ? t : E;
          switch (P) {
            case o.h.PLP:
              a = m;
              break;
            case o.h.PLP_PRODUCT_CARD:
            case o.h.PLP_PRZ:
              a = y;
              break;
            case o.h.PDP_COLUMN:
              a = _;
              break;
            case o.h.PLP_DRAWER:
            case o.h.PDP_TOP_OF_FOLD_IMAGE:
              a = j;
              break;
            case o.h.PDP_NOW_TEMPLATE_GALLERY:
              a = v;
              break;
            case o.h.PLP_VIZ_PRODUCT_CARD:
              a = f;
              break;
            case o.h.PLP_VIZ_SHOPPABLE_DRAWER:
              a = C;
              break;
            case o.h.FINDS_DETAIL_PAGE:
            case o.h.SII3D:
              a = b;
              break;
            default:
              a = g;
          }
          let L = (0, i.useCallback)(() => {
            let e;
            if ("TRY_IT_ON" === d || !u)
              switch (P) {
                case o.h.PDP_NOW_TEMPLATE_GALLERY:
                case o.h.PDP_TOP_OF_FOLD:
                case o.h.PDP_TOP_OF_FOLD_IMAGE:
                  e = "IMAGE_GALLERY";
                  break;
                case o.h.PLP:
                case o.h.PLP_PRODUCT_CARD:
                  e = "GRID_CARD";
                  break;
                case o.h.PLP_DRAWER:
                  e = "UGC_PRODUCT";
                  break;
                case o.h.PLP_PRZ:
                  e = "TRENDING_TRY_IT_ON";
                  break;
                case o.h.SII3D:
                  e = "VIRTUAL_PRODUCT_TOOLS";
              }
            "TRY_IT_ON" === d && P === o.h.PLP_PRODUCT_CARD && (e = void 0),
              u && (e = u),
              e &&
                I.track({
                  clickType: d,
                  element: D ? { id: D, type: "TCIN" } : void 0,
                  featureType: e,
                  UGC: null != T ? T : void 0,
                }),
              h();
          }, [d, u, h, P, D, I, T]);
          return h
            ? (0, r.jsxs)(a, {
                "aria-label": c,
                "data-test": "cgi-button-default",
                id: p,
                onClick: L,
                ref: N,
                size: "sm",
                children: [
                  w &&
                    (0, r.jsx)(x, {
                      marginBottom: P === o.h.PDP_NOW_TEMPLATE_GALLERY,
                      marginRight: !1,
                      children: (0, r.jsx)(w, {
                        width: P === o.h.PDP_NOW_TEMPLATE_GALLERY ? "24" : "20",
                      }),
                    }),
                  (0, r.jsx)("span", {
                    "data-test": "cgi-button-display-text",
                    children: c,
                  }),
                ],
              })
            : null;
        };
      P.displayName = "CgiButtonDefault";
    },
    29199: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => L });
      var r = a(3576),
        i = a(37876),
        s = a(14232),
        l = a(93967),
        n = a(14239),
        o = a(73208),
        d = a(97003),
        c = a(26989),
        u = a(26835),
        p = a(62701),
        h = a(48847),
        m = a(90750),
        x = a(18673),
        _ = a(55777),
        g = a(55472),
        v = a(58117),
        y = a(77232),
        j = a(98601),
        f = a(30820);
      let C = (0, y.I4)(f.f).withConfig({ componentId: "sc-5b7d798b-0" })(
          [
            "display:flex;flex-direction:column;max-width:",
            ";padding:",
            ";position:relative;overflow-y:scroll;word-break:normal;",
          ],
          j.fi.sm,
          j.xe.generic.x4
        ),
        b = y.I4.span.withConfig({ componentId: "sc-5b7d798b-1" })(
          ["font-size:", ";"],
          j.gx.size.text.base
        ),
        P = y.I4.p.withConfig({ componentId: "sc-5b7d798b-2" })(
          ["font-size:", ";font-weight:", ";"],
          j.gx.size.text.base,
          j.gx.weight.light
        ),
        N = y.I4.div.withConfig({ componentId: "sc-5b7d798b-3" })(
          ["padding:0 30px;& > *{margin-bottom:", ";}"],
          j.xe.generic.x2
        );
      y.I4.div.withConfig({ componentId: "sc-5b7d798b-4" })(
        ["padding:0 20px;& > *{margin-bottom:", ";}"],
        j.xe.generic.x2
      );
      let w = y.I4.div.withConfig({ componentId: "sc-5b7d798b-5" })(
          ["font-size:", ";font-weight:", ";"],
          j.gx.size.text.large,
          j.gx.weight.bold
        ),
        T = y.I4.li.withConfig({ componentId: "sc-5b7d798b-6" })(
          ["font-size:", ";padding-left:", ";"],
          j.gx.size.text.base,
          j.xe.inset.x2
        ),
        I = (e) => {
          let {
              children: t,
              isModalOpen: a,
              onAcceptance: l = () => {},
              storageKey: n,
            } = e,
            { screenMd: o } = (0, g.e)();
          (0, s.useEffect)(() => {
            a &&
              v.Ay.isExpired(n).then((e) =>
                !1 === e ? l(!0) : v.Ay.remove(n)
              );
          }, [a, l, n]);
          let d = (0, s.useCallback)(() => {
              l(!1);
            }, [l]),
            c = (0, s.useCallback)(() => {
              v.Ay.set(n, !0, { expiry: Date.now() + 864e5 }).then(() => l(!0));
            }, [l, n]),
            u = (0, s.useCallback)(
              (e) =>
                (0, i.jsx)(
                  h.E,
                  (0, p._)((0, r._)({}, e), {
                    children: (0, i.jsx)("div", {
                      style: { paddingLeft: "0.5rem" },
                      children: "Privacy",
                    }),
                  })
                ),
              []
            );
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(_.a, {
              "data-test": "privacyModal",
              isOpen: a,
              onOpenChange: d,
              renderHeading: u,
              type: o ? "dialog" : "drawer-bottom",
              children: [
                (0, i.jsx)(C, { children: t }),
                (0, i.jsxs)(m.e, {
                  isStacked: !0,
                  children: [
                    (0, i.jsx)(x.$, {
                      onClick: c,
                      size: "lg",
                      variant: "filled",
                      children: "Agree",
                    }),
                    (0, i.jsx)(x.$, {
                      href: "#",
                      onClick: d,
                      size: "lg",
                      variant: "outlined",
                      children: "Disagree",
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      I.displayName = "PrivacyPolicyModal";
      let k = () => {
        var e, t;
        let a;
        a =
          null == (t = window) || null == (e = t.navigator)
            ? void 0
            : e.userAgent;
        let r = /android/i.test(null != a ? a : "");
        return (0, i.jsxs)(N, {
          children: [
            (0, i.jsx)(w, { children: "By clicking Agree, I agree to:" }),
            (0, i.jsxs)("ul", {
              children: [
                (0, i.jsx)(T, {
                  children:
                    "• Use of Target's See It On You technology (*see details below)",
                }),
                (0, i.jsx)(T, {
                  children:
                    "• Only use my image or an image I have consent to use",
                }),
                (0, i.jsx)(T, {
                  children:
                    "• Target's Privacy Policy: Target.com/Privacy and Terms & Conditions: Target.com/Terms",
                }),
                r &&
                  (0, i.jsx)(T, {
                    children: "• Use of Google Play Services for AR (ARCore)**",
                  }),
              ],
            }),
            (0, i.jsxs)(P, {
              children: [
                (0, i.jsx)(b, { children: "*" }),
                "Target's See It On You technology uses my image to virtually apply accessories. I understand Target does not receive, store, or save the image or any components thereof, or use the image for any other purpose. Because the See It On You experience operates solely within my own device browser, the data is deleted after the experience ends according to my browser settings.",
              ],
            }),
            r &&
              (0, i.jsxs)(P, {
                children: [
                  (0, i.jsx)(b, { children: "**" }),
                  "This application runs on Google Play Services for AR (ARCore), which is provided by Google LLC and governed by the Google Privacy Policy.",
                  (0, i.jsx)("br", {}),
                  "Google Privacy Policy: policies.google.com/privacy",
                  (0, i.jsx)("br", {}),
                  "Google Play Services for AR: play.google.com/store/apps/details?id=com.google.ar.core",
                ],
              }),
          ],
        });
      };
      k.displayName = "SioyDisclosureText";
      var E = a(74415);
      let A = (e) => {
        let { featureType: t, placement: a } = e,
          r = (0, o.K1)(d.w4),
          p = (0, o.K1)(c.Gs),
          h = (0, o.bZ)(),
          [m, x] = (0, s.useState)(!1),
          _ = (0, s.useMemo)(() => !h || p === h, [h, p]),
          g = (0, s.useCallback)(
            (e) => {
              if ((x(!1), !e)) return;
              let t = document.createElement("a");
              t.setAttribute("rel", "ar"),
                t.setAttribute("href", null != r ? r : ""),
                t.click();
            },
            [r]
          ),
          v = (0, s.useCallback)(() => {
            x(!0);
          }, [x]);
        return r && _
          ? (0, i.jsxs)(l.H, {
              action: "error_boundary_cgi_button_sioy_ios",
              children: [
                (0, i.jsx)(u.R, {
                  clickType: "SEE_IT_ON_YOU",
                  displayText: "See it on you",
                  featureType: t,
                  Icon: n.e,
                  onClick: v,
                  placement: a,
                }),
                (0, i.jsx)(I, {
                  isModalOpen: m,
                  onAcceptance: g,
                  storageKey: E.C4,
                  children: (0, i.jsx)(k, {}),
                }),
              ],
            })
          : null;
      };
      A.displayName = "CgiButtonSeeItOnYouIos";
      var D = a(74127);
      let L = (e) => ((0, D.Q)() ? (0, i.jsx)(A, (0, r._)({}, e)) : null);
      L.displayName = "ConditionalCgiButtonSeeItOnYou";
    },
    29376: (e) => {
      e.exports = {
        productCardItemInfoDiv: "styles_productCardItemInfoDiv__bpWhY",
        ratingsAndReviewsWrapper: "styles_ratingsAndReviewsWrapper__3p8hn",
        ratingsAndReviewsBody: "styles_ratingsAndReviewsBody__8tBd4",
        titleWrapper: "styles_titleWrapper__2mYZi",
        styledTruncate: "styles_styledTruncate__dopaL",
        ratingsAndReviewsCaption: "styles_ratingsAndReviewsCaption__jhYWR",
        styledIconStarFilled: "styles_styledIconStarFilled__iCdD_",
      };
    },
    32565: (e) => {
      e.exports = {
        productDetailsRow: "styles_productDetailsRow__JOlKA",
        detailsWrapper: "styles_detailsWrapper__X6PWL",
      };
    },
    32903: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => o });
      var r = a(37876),
        i = a(73208),
        s = a(32038),
        l = a(17961),
        n = a(78975);
      let o = () => {
        var e;
        let t = (0, i.EJ)(s.V8),
          [a] = null != (e = (0, i.EJ)(s.bf)) ? e : [];
        return t && a
          ? (0, r.jsxs)("div", {
              className: "h-text-sm h-text-grayDark",
              children: [
                (0, r.jsxs)("div", {
                  className: "h-margin-t-tiny ".concat(n.sellerLinkWrapper),
                  "data-test": "marketplaceSoldBy",
                  children: [
                    "Sold & shipped by",
                    " ",
                    (0, r.jsx)("span", {
                      className: "h-text-bold",
                      "data-test": "marketplaceSellerName",
                      children: a.vendor_name,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "h-display-flex h-flex-align-center ",
                  children: [
                    "a Target Plus™ partner ",
                    (0, r.jsx)(l.I, {
                      className: "h-margin-l-tiny",
                      width: 26,
                    }),
                  ],
                }),
              ],
            })
          : null;
      };
      o.displayName = "ProductCardMarketplaceMessage";
    },
    36709: (e) => {
      e.exports = { partnershipTag: "styles_partnershipTag__rFEax" };
    },
    41435: (e) => {
      e.exports = {
        ratingsAndReviews: "styles_ratingsAndReviews__uhFdQ",
        ratingCount: "styles_ratingCount__QYPw_",
      };
    },
    42335: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => i });
      var r = a(98477);
      function i(e) {
        return document.startViewTransition
          ? document.startViewTransition(() => (0, r.flushSync)(e))
          : e();
      }
    },
    42499: (e, t, a) => {
      "use strict";
      a.d(t, { H: () => p });
      var r = a(14232),
        i = a(73208),
        s = a(10244),
        l = a(68979),
        n = a(25017),
        o = a(32038),
        d = a(95408),
        c = a(40196),
        u = a(42252);
      let p = () => {
        let e = (0, u.rd)(),
          t = (0, c.rv)(e.asPath),
          a = (0, i.K1)(s.yM),
          p = (0, i.K1)(s.$P),
          h = (0, l.w)(n.GL),
          m = (0, l.w)(n.W_) || "ng0a0" === t,
          x = (0, l.w)(n.ox),
          _ = (0, l.w)(n.Nx) || "bswkz" === t,
          g = (0, l.w)(n.WF),
          v = (0, l.w)(n.e0),
          y = (0, l.w)(n.vF),
          j = !a,
          f = p || (g && !v),
          C = p || (g && !y),
          b = p || (g && !m),
          P = (0, d.Mv)("INTENT_AWARE_PLP_ADD_TO_CART_ENABLED"),
          N = x || P,
          w = (0, i.EJ)(o.FU),
          T = (0, i.EJ)(o.cL),
          I = !(N && !g) && !a && !w && !T;
        return (0, r.useMemo)(
          () => ({
            isOnlyFulfillmentPickupFacetApplied: m,
            isOnlyFulfillmentShippingFacetApplied: h,
            isOnlyFulfillmentScheduledDeliveryFacetApplied: _,
            isOnlyFulfillmentInStoreFacetApplied: x,
            isIntentAware: N,
            shouldHideShippingMessaging: f,
            shouldHideStoreMessaging: p,
            shouldHideScheduledDeliveryMessaging: C,
            shouldHidePickupMessaging: b,
            shouldShowPlaceholderFulfillmentMessaging: j,
            shouldDisableAddToCart: I,
          }),
          [m, h, _, x, N, f, p, C, b, j, I]
        );
      };
    },
    43371: (e, t, a) => {
      "use strict";
      a.d(t, { Jv: () => d, Of: () => u, Wq: () => p, xk: () => c });
      var r = a(77232),
        i = a(75570),
        s = a(24245),
        l = a(29464),
        n = a(98601),
        o = a(83070);
      (0, r.I4)(s.s).withConfig({ componentId: "sc-b4f1249d-0" })([
        "height:16px;flex-shrink:0;flex-grow:0;align-self:flex-start;",
      ]);
      let d = (0, r.I4)(i.N).withConfig({ componentId: "sc-b4f1249d-1" })(
          ["color:", ";&:hover,&:visited{color:", ";}&:active{color:", ";}"],
          n.Tj.loyalty.text.base,
          n.Tj.loyalty.text.baseHover,
          n.Tj.loyalty.text.baseActive
        ),
        c = r.I4.div.withConfig({ componentId: "sc-b4f1249d-2" })(
          ["color:", ";font-size:", ";"],
          n.Tj.loyalty.text.base,
          o.fFv
        ),
        u = (0, r.I4)(l.d).withConfig({ componentId: "sc-b4f1249d-3" })(
          ["vertical-align:bottom;margin-right:", ";"],
          n.xe.generic.x1
        ),
        p = r.I4.div.withConfig({ componentId: "sc-b4f1249d-4" })(
          ["color:", ";font-size:", ";"],
          n.Tj.loyalty.text.base,
          o.E7T
        );
    },
    52409: (e) => {
      e.exports = { sponsoredTag: "styles_sponsoredTag__EduEt" };
    },
    53189: (e, t, a) => {
      "use strict";
      a.d(t, { k: () => u });
      var r = a(37876),
        i = a(73208),
        s = a(25012),
        l = a(7323),
        n = a(91110),
        o = a(83070),
        d = a(77232);
      (0, d.I4)(n.T).withConfig({ componentId: "sc-d507e8ee-0" })([
        "border-radius:50%;",
      ]);
      let c = d.I4.span.withConfig({ componentId: "sc-d507e8ee-1" })(
          ["font-size:", ";"],
          o.eD8
        ),
        u = (e) => {
          let { className: t = "", shouldUseParentPrice: a } = e,
            n = (0, i.K1)(s.n9),
            o = (0, i.EJ)(s.n9),
            d = a ? o : n;
          return d
            ? (0, r.jsx)("div", {
                className: "h-flex-align-center ".concat(t),
                "data-test": l._B,
                children: (0, r.jsx)(c, { children: d }),
              })
            : null;
        };
      u.displayName = "PriceHandle";
    },
    54432: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => s });
      var r = a(14232),
        i = a(22600);
      let s = () => {
        let {
          openJoinCircleModal: e,
          closeJoinCircleModal: t,
          isCircleEnrolled: a,
          isGuestLoggedIn: s,
          slot: l,
        } = (0, r.useContext)(i.x);
        return {
          closeJoinCircleModal: t,
          openJoinCircleModal: e,
          isCircleEnrolled: a,
          isGuestLoggedIn: s,
          slot: l,
        };
      };
    },
    56947: (e, t, a) => {
      "use strict";
      a.d(t, { j: () => r });
      let r = (0, a(14649).sq)((e) =>
        null == e ? void 0 : e.review_summarization
      );
    },
    60669: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => I });
      var r = a(37876),
        i = a(14232),
        s = a(73208),
        l = a(25012),
        n = a(32038),
        o = a(7323),
        d = a(93291),
        c = a(53189),
        u = a(6318),
        p = a(51968);
      let h = (e) => {
        let { className: t } = e,
          a = (0, u.u_)(),
          i = (0, u.cq)((e) =>
            null == e ? void 0 : e.formatted_comparison_price
          ),
          n = (0, u.cq)((e) =>
            null == e ? void 0 : e.formatted_comparison_price_type
          ),
          o = (0, s.EJ)(l.em),
          d = (0, s.EJ)(l.IT),
          c = (0, u.cq)((e) => (0, u.Rl)(e) && !1 === e.all_children_on_promo),
          h = (0, s.EJ)(l.Qc),
          m = (0, s.EJ)(l.Od) || h,
          x = (0, s.K1)(l.j9);
        if (
          !i ||
          (a && c) ||
          (!a &&
            ("mixed_sale" === o ||
              "mixed_clearance" === o ||
              "mixed_sale" === d ||
              "mixed_clearance" === d))
        )
          return null;
        let _ = t ? "span" : p.iw;
        return (0, r.jsxs)("div", {
          className: null != t ? t : "h-text-grayDark h-display-inline-block",
          "data-test": "comparison-price",
          children: [
            m ? "was" : "value bundle reg" === n ? "Value Bundle reg" : n,
            " ",
            (0, r.jsxs)(_, {
              className: "h-text-line-through",
              children: [i, x],
            }),
          ],
        });
      };
      h.displayName = "PriceStandardComparisonPrice";
      var m = a(15039),
        x = a(29464);
      let _ = (e) => {
        var t, a;
        let { className: i = "", "data-test": o } = e,
          d = (0, u.yE)(),
          c = (0, u.cq)((e) => (null == e ? void 0 : e.hide_price)),
          h = (0, s.EJ)(n.cL),
          _ = null != (t = (0, u.u_)()) ? t : "",
          g = null != (a = (0, s.EJ)(l.em)) ? a : "reg",
          v = (0, s.K1)(l.IA),
          y = "discount_circle_base" === _,
          j = !h && v;
        return (0, r.jsxs)(p.iw, {
          className: m(
            i,
            { "h-text-red": !c && (!!(_ || "reg" !== g) || y) },
            "h-margin-r-tiny h-text-nowrap"
          ),
          "data-test": m(
            o,
            {
              "circle-price": "discount_circle_base" === _,
              "discount-price": "discount_all_guests" === _,
            },
            "current-price"
          ),
          children: [
            !c &&
              y &&
              (0, r.jsx)(x.d, {
                className: "h-margin-r-tiny",
                style: { transform: "translateY(2px)" },
                width: 16,
              }),
            (0, r.jsx)("span", { children: d }),
            j && (0, r.jsx)("span", { children: v }),
          ],
        });
      };
      _.displayName = "PriceStandardCurrentPrice";
      let g = (e) => {
        var t, a;
        let { className: i = "" } = e,
          n = (0, s.EJ)(l.IT),
          d = (0, s.EJ)(l.gM),
          c = (0, s.EJ)(l.em),
          u = null != (t = null != n ? n : c) ? t : "",
          h = (d && o.zk[d]) || (null != (a = o.zk[u]) ? a : ""),
          x = (0, s.EJ)(l.iD);
        return h
          ? (0, r.jsxs)(p.jB, {
              className: m(i, "h-text-red"),
              "data-test": "urgency-message",
              children: [
                x ? "".concat(h, " ") : h,
                " ",
                (0, r.jsx)(p.aJ, { children: x }),
              ],
            })
          : null;
      };
      g.displayName = "PriceStandardPriceAndUrgencyMessage";
      var v = a(35223),
        y = a(15264),
        j = a(17679);
      let f = (e) => {
        let {
            className: t,
            comparisonPriceClassName: a,
            currentPriceClassName: i,
            onClickPromoLink: m,
            priceAndUrgencyMessageClassName: x,
            showStaticCircleDealsText: f,
            unitPriceClassName: C,
          } = e,
          b = (0, u.yE)(),
          P = (0, s.K1)(l.OM),
          N = (0, s.EJ)(n.cL),
          w =
            "value bundle reg" ===
            (0, u.cq)((e) =>
              null == e ? void 0 : e.formatted_comparison_price_type
            );
        return b
          ? (0, r.jsxs)(p.en, {
              className: t,
              "data-test": o.dQ,
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)(_, { className: i }),
                    w ? null : (0, r.jsx)(v.O, { className: C }),
                    (0, r.jsx)(h, { className: a }),
                  ],
                }),
                w ? (0, r.jsx)(v.O, { className: C }) : null,
                (0, r.jsx)(g, { className: x }),
                (0, r.jsx)(j.S, {}),
                (0, r.jsx)(y.Z, {
                  onClickPromoLink: m,
                  showStaticCircleDealsText: f,
                }),
                P && !N && (0, r.jsx)(d.R, {}),
                (0, r.jsx)(c.k, {}),
              ],
            })
          : null;
      };
      f.displayName = "PriceStandard";
      var C = a(41622),
        b = a(98601),
        P = a(26989),
        N = a(72454),
        w = a(38747),
        T = a(34977);
      let I = (e) => {
        let {
            auxRibbonMessage: t,
            isAestheticProductCard: a,
            onClickPromoLink: l,
          } = e,
          { shouldShowPlaceholderPrice: n } = (0, i.useContext)(w.p),
          o = (0, s.K1)(P.Gs),
          d = (0, T.t)(o);
        return (0, r.jsx)("div", {
          className: N.productCardPriceAndPromoWrapper,
          children: n
            ? (0, r.jsx)(C.O, {
                animationDuration: "3s",
                fillColor: b.Tj.palette.gray.light,
                height: "22px",
                isAnimated: !0,
                width: "100px",
              })
            : (0, r.jsxs)("div", {
                id: d.PRICE_ID,
                children: [
                  a
                    ? (0, r.jsx)(f, {
                        comparisonPriceClassName:
                          "h-text-grayDark h-display-inline-block aesthetic-card-font-size",
                        currentPriceClassName:
                          "h-text-bold aesthetic-card-font-size",
                        onClickPromoLink: l,
                        priceAndUrgencyMessageClassName:
                          "h-text-bold aesthetic-card-font-size",
                        unitPriceClassName:
                          "h-margin-r-tiny aesthetic-card-font-size",
                      })
                    : (0, r.jsx)(f, {
                        currentPriceClassName: "h-text-bold h-text-lg",
                        onClickPromoLink: l,
                        priceAndUrgencyMessageClassName: "h-text-bold",
                      }),
                  t,
                ],
              }),
        });
      };
      I.displayName = "ProductCardPriceAndPromo";
    },
    61595: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => ee });
      var r = a(3576),
        i = a(37876),
        s = a(14232),
        l = a(73208),
        n = a(36810),
        o = a(26989),
        d = a(90214),
        c = a(94170),
        u = a(15039),
        p = a(65469),
        h = a(40696),
        m = a(95408),
        x = a(30334),
        _ = a(42252),
        g = a(40196),
        v = a(37294),
        y = a(58111),
        j = a(94072),
        f = a(75570),
        C = a(78994),
        b = a(20319),
        P = a(71334),
        N = a(32038),
        w = a(28391),
        T = a(30997),
        I = a(32837),
        k = a(1800),
        E = a(38858),
        A = a(71084),
        D = a(18325),
        L = a(90554),
        R = a(92630),
        S = a(34977),
        O = a(29376);
      let B = () => {
        let e = (0, l.EJ)(w.u6),
          t = null == e ? void 0 : e.toFixed(1),
          a = (0, l.EJ)(w.wk),
          r = (0, T.T)(),
          s = !!(0, l.EJ)(I.G),
          n = (0, l.EJ)(N.Au),
          d = s
            ? (0, i.jsx)(D.q, {
                isAestheticProductCard: !0,
                shape: "circle",
                shouldDisableSwatchSelection: !0,
                shouldDisplaySwatchInfoText: !0,
              })
            : null,
          c = (0, m.Mv)("PARTNER_TAG_ENABLED"),
          u = (0, l.K1)(o.Gs),
          p = (0, S.t)(u);
        return (0, i.jsxs)("div", {
          className: O.productCardItemInfoDiv,
          children: [
            c && (0, i.jsx)(R.u, {}),
            (0, i.jsx)("div", {
              className: "h-display-flex h-flex-justify-space-between",
              id: p.TITLE_ID,
              children: (0, i.jsx)("div", {
                className: O.titleWrapper,
                "data-test": "product-title",
                children: (0, i.jsxs)(E.P, {
                  className: O.styledTruncate,
                  lines: 2,
                  title: (0, k.D4)(r),
                  children: [
                    (0, i.jsx)("span", {
                      className: "h-text-bold",
                      children: n,
                    }),
                    " ",
                    r,
                  ],
                }),
              }),
            }),
            (0, i.jsxs)("span", {
              className: "h-flex-align-center h-display-flex h-margin-t-tiny",
              children: [
                e && e > 0
                  ? (0, i.jsxs)("span", {
                      "aria-label": ""
                        .concat(t, " stars with ")
                        .concat(a, " reviews"),
                      className: O.ratingsAndReviewsWrapper,
                      id: p.RATING_ID,
                      children: [
                        (0, i.jsx)("span", {
                          className: O.ratingsAndReviewsBody,
                          children: t,
                        }),
                        (0, i.jsx)(A.T, {
                          className: O.styledIconStarFilled,
                          width: 14,
                        }),
                        (0, i.jsx)("span", {
                          className: O.ratingsAndReviewsCaption,
                          children: "(".concat(a, ")"),
                        }),
                      ],
                    })
                  : null,
                d,
              ],
            }),
            (0, i.jsx)(L.r, {
              className: "h-text-md h-text-left h-margin-v-tiny",
            }),
          ],
        });
      };
      B.displayName = "ProductCardItemInfoAesthetic";
      var W = a(60669),
        M = a(10244),
        z = a(68979),
        K = a(25017),
        F = a(21254),
        G = a(84685);
      let J = () => {
        let e = (0, l.EJ)(N.Bo),
          t = (0, l.K1)(M.W1),
          a = (0, l.K1)(M.yM),
          r = (0, z.w)(K.WF),
          s = (0, z.w)(K.e0);
        return (0, i.jsxs)("div", {
          "data-test": "detail-messaging",
          children: [
            e &&
              (0, i.jsx)("p", {
                className: "h-text-md h-text-grayDark",
                children: e,
              }),
            (0, i.jsx)(F.S, { hideAddOnMessage: !0 }),
            t &&
              a &&
              (0, i.jsx)(i.Fragment, {
                children: (s || !r) && (0, i.jsx)(G.M, {}),
              }),
          ],
        });
      };
      J.displayName = "ProductCardAestheticDetailMessaging";
      var V = a(57360),
        U = a(32565);
      let Y = (e) => {
        let {
            auxRibbonMessage: t,
            className: a,
            onClickExclusionsApplyLink: r,
          } = e,
          s = (0, l.K1)(N.iz);
        return (0, i.jsx)("div", {
          className: u(U.productDetailsRow, a),
          "data-test": "product-details",
          children: (0, i.jsxs)("div", {
            className: U.detailsWrapper,
            children: [
              (0, i.jsx)(W.T, {
                auxRibbonMessage: t,
                isAestheticProductCard: !0,
              }),
              (0, i.jsx)(B, {}),
              !s &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(J, {}),
                    (0, i.jsx)(V.Ce, {
                      className: "h-text-md h-margin-t-tiny",
                      fulfillmentClassName: "h-text-md",
                      isAestheticCard: !0,
                      onClickExclusionsApplyLink: r,
                    }),
                  ],
                }),
            ],
          }),
        });
      };
      Y.displayName = "ProductCardAestheticBody";
      var H = a(52409);
      let q = () => {
        let e = (0, l.K1)(o.Gs),
          t = (0, S.t)(e);
        return (0, i.jsx)("p", {
          className: H.sponsoredTag,
          "data-test": "sponsoredText",
          id: t.SPONSORED_ID,
          children: "Sponsored",
        });
      };
      q.displayName = "SponsoredTag";
      var Z = a(42335),
        Q = a(21014),
        X = a(17654);
      let $ = (e) => {
        var t, a, r, c;
        let {
            addToCartButtonOverride: u,
            addToCartClickTrackingPlacementType: N,
            auxRibbonMessage: w,
            cgiButtonSeeItOnYouIos: T,
            cgiIconTryItOnBeauty: I,
            cgiButtonTryItOnBeauty: k,
            crushButton: E,
            onChangeFavoritesButton: A,
            onClickExclusionsApplyLink: D,
            onViewDetailClick: L,
            viewSimilarButton: R,
          } = e,
          { asPath: O, push: B } = (0, _.rd)(),
          W = null != (r = (0, x.k)()) ? r : "",
          M = (0, l.K1)(n.oc),
          z = (0, l.K1)(n.y4),
          K = "DLP" === (0, g.Hq)(O),
          F =
            (null == (t = (0, v.Y)())
              ? void 0
              : t.EXPERIMENT_SERVERSIDE_RENDER_DLP_ENABLED) && K
              ? (0, Q.D)(W)
              : W,
          G = (0, d.hE)(null == z ? void 0 : z.ad_source),
          J = (0, s.useCallback)(
            (e) => {
              L && (G(), L(e));
            },
            [L, G]
          ),
          V =
            null !=
            (c =
              null == (a = (0, v.Y)())
                ? void 0
                : a.EXP_PLP_PDP_VIEW_TRANSITION_ENABLED)
              ? c
              : (0, m.Mv)("GLOBAL_PLP_PDP_VIEW_TRANSITION_ENABLED"),
          U = (0, y.p)(),
          H = (0, s.useCallback)(
            (e) => {
              null == L || L(e),
                G(),
                !W ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  (e.preventDefault(),
                  U("EXP_PLP_PDP_VIEW_TRANSITION_ENABLED"),
                  V ? (0, Z.s)(() => B(W)) : B(W));
            },
            [L, G, W, U, V, B]
          ),
          $ = (0, l.K1)(o.Gs),
          ee = (0, S.t)($);
        return (0, i.jsx)(b.U, {
          children: (0, i.jsxs)("div", {
            className: X.productCardVariantAesthetic,
            children: [
              (0, i.jsxs)("div", {
                className: X.productCardVariantAestheticImageWrapper,
                children: [
                  (0, i.jsx)(P.D, {
                    isSwipeableProductCardImageEnabled: !0,
                    onClick: J,
                    resolutionsByBreakpoint: { 0: 350, sm: 500 },
                  }),
                  M ? null : R,
                  M ? null : T,
                  (0, i.jsx)("div", { className: X.iconWrapper, children: I }),
                ],
              }),
              (0, i.jsx)(j.p, {
                className: "h-margin-t-tiny",
                ornamentType: "guest",
              }),
              (0, i.jsxs)(f.N, {
                "aria-labelledby": ""
                  .concat(ee.PRICE_ID, " ")
                  .concat(ee.TITLE_ID, " ")
                  .concat(ee.RATING_ID, " ")
                  .concat(ee.SWATCHES_ID, " ")
                  .concat(ee.SNAP_ID, " ")
                  .concat(ee.SPONSORED_ID),
                className: X.bodyLink,
                color: "onLightSecondary",
                "data-test": "product-body",
                href: F,
                onClick: H,
                underline: "never",
                children: [
                  (0, i.jsx)("div", {
                    className: X.productCardBody,
                    "data-test": p.v2,
                    children: (0, i.jsx)(Y, {
                      auxRibbonMessage: w,
                      onClickExclusionsApplyLink: D,
                    }),
                  }),
                  M ? (0, i.jsx)(q, {}) : null,
                ],
              }),
              (0, i.jsxs)("div", {
                className: X.addToCartButtonWrapper,
                children: [
                  (0, i.jsxs)("div", {
                    className: X.cartAndTryOnWrapper,
                    children: [
                      null != u
                        ? u
                        : (0, i.jsx)(C.E, {
                            featureType: "GRID_CARD",
                            placementType: N,
                            size: "sm",
                            willHaveProductContextFulfillmentDataForAddToCart:
                              !0,
                          }),
                      k,
                    ],
                  }),
                  (0, m.Mv)("PLP_AND_PDP_CRUSH_BUTTON_ENABLED")
                    ? (0, i.jsx)("div", {
                        className: X.favoritesButtonWrapper,
                        children:
                          null != E
                            ? E
                            : (0, i.jsx)(h.r, { hasNoCircle: !0, onChange: A }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      };
      $.displayName = "ProductCardVariantAestheticWithoutTrackingProvider";
      let ee = (e) => {
        let t = (0, l.K1)(n.y4),
          a = (0, l.K1)(o.Gs),
          h = (0, d.I3)(null == t ? void 0 : t.ad_source),
          m = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            m.current &&
              (m.current.style.viewTransitionName = "product-info-".concat(
                null != a ? a : ""
              ));
          }, [a]),
          (0, i.jsx)(c.F, {
            clickId: null == t ? void 0 : t.click_id,
            creativeId: null == t ? void 0 : t.impression_id,
            tcin: a,
            token: null == t ? void 0 : t.click_token,
            useTrackers: h,
            children: (0, i.jsx)("div", {
              className: u(X.productCardVariantAestheticWrapper, e.className),
              "data-test": p.JZ,
              children: (0, i.jsx)($, (0, r._)({}, e)),
            }),
          })
        );
      };
      ee.displayName = "ProductCardVariantAesthetic";
    },
    71084: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(9394);
      let l = (e) =>
        (0, i.jsx)(
          s.I,
          (0, r._)(
            { _name: "StarFill", _src: "StarFill.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      l.displayName = "IconStarFill";
    },
    72454: (e) => {
      e.exports = {
        productCardPriceAndPromoWrapper:
          "styles_productCardPriceAndPromoWrapper__38_J0",
        "aesthetic-card-font-size": "styles_aesthetic-card-font-size__jUwse",
      };
    },
    74127: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => l });
      var r = a(73208),
        i = a(97003),
        s = a(12383);
      let l = () => {
        let e = (0, r.K1)(i.EU),
          t = (0, r.K1)(i.w4);
        return (0, s.L_)() && !!e && !!t;
      };
    },
    74415: (e, t, a) => {
      "use strict";
      a.d(t, {
        C4: () => c,
        FI: () => l,
        SF: () => s,
        To: () => d,
        W_: () => o,
        oA: () => n,
      });
      var r,
        i = a(98601);
      let s = "BEAUTY_CHAT_IS_OPEN",
        l = "Chat with a Beauty Consultant",
        n = "ze-snippet",
        o = {
          webWidget: {
            chat: {
              connectOnPageLoad: !1,
              menuOptions: { emailTranscript: !1 },
              offlineForm: {
                greeting: {
                  "*": "Thank you for chatting in! Our Beauty Chat service is available 8AM - 11PM CST. We are not online right now, but we would love to help you tomorrow when we’re back. Please chat back in during our beauty chat service hours to speak to a live Beauty Consultant.",
                },
              },
            },
            color: {
              launcher: i.Tj.palette.gray.darkest,
              theme: i.Tj.palette.gray.darkest,
            },
            launcher: { chatLabel: { "*": l }, mobile: { labelVisible: !1 } },
            navigation: { popoutButton: { enabled: !1 } },
          },
        },
        d = 3e5,
        c = "POLICY_SIOY_ACCEPTED";
      (r || (r = {})).HOME = "home-planner";
    },
    78975: (e) => {
      e.exports = { sellerLinkWrapper: "styles_sellerLinkWrapper___CRUX" };
    },
    84685: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => o });
      var r = a(37876),
        i = a(18551),
        s = a(50301),
        l = a(73208),
        n = a(40897);
      let o = () => {
        let [e] = (0, i.RJ)(),
          t = { isCircle360ActivePaidMember: e(s.xF) },
          a = (0, l.K1)((0, n.lt)(t)),
          o = (0, l.K1)((0, n.OK)(t)),
          d = a ? "Limited stock" : void 0;
        return (0, r.jsxs)("div", {
          "data-test": "ProductCardInventoryMessages",
          children: [
            d &&
              (0, r.jsx)("p", {
                className: "h-text-sm h-text-orangeDark h-margin-t-tiny",
                "data-test": "specialMessage",
                children: d,
              }),
            o &&
              (0, r.jsx)("p", {
                className: "h-text-sm h-text-orangeDark h-margin-t-tiny",
                children: "On backorder",
              }),
          ],
        });
      };
      o.displayName = "ProductCardInventoryMessages";
    },
    90554: (e, t, a) => {
      "use strict";
      a.d(t, { r: () => d });
      var r = a(37876),
        i = a(73208),
        s = a(32038),
        l = a(26989),
        n = a(95408),
        o = a(34977);
      let d = (e) => {
        let { className: t } = e,
          a = (0, i.EJ)(s.H),
          d = (0, i.EJ)(l.Gs),
          c = (0, o.t)(d);
        return (0, n.Mv)("GLOBAL_SNAP_PRODUCT_CARD_MESSAGE_ENABLED") && a
          ? (0, r.jsx)("div", {
              className: t,
              id: c.SNAP_ID,
              children: "SNAP EBT eligible",
            })
          : null;
      };
      d.displayName = "ProductCardSnapMessage";
    },
    91253: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => l });
      var r = a(3576),
        i = a(37876),
        s = a(9394);
      let l = (e) =>
        (0, i.jsx)(
          s.I,
          (0, r._)(
            { _name: "Star", _src: "Star.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      l.displayName = "IconStar";
    },
    92630: (e, t, a) => {
      "use strict";
      a.d(t, { u: () => d });
      var r = a(37876),
        i = a(73208),
        s = a(32038),
        l = a(36709),
        n = a(65469);
      let o = {
          src: "https://target.scene7.com/is/image/Target/GUEST_335adecc-26f6-4b18-831e-a0d92d58104a",
          tagline: "Ulta Beauty at Target",
        },
        d = () => {
          let e = (0, i.EJ)(s.AG);
          if (e === n.jG)
            return (0, r.jsx)("div", {
              children:
                e === n.jG &&
                (0, r.jsxs)("div", {
                  className: l.partnershipTag,
                  children: [
                    (0, r.jsx)("img", {
                      alt: "",
                      height: 16,
                      src: "".concat(o.src, "?qlt=60&wid=32&hei=32"),
                      width: 16,
                    }),
                    (0, r.jsx)("div", { children: o.tagline }),
                  ],
                }),
            });
        };
      d.displayName = "ProductCardPartnershipTag";
    },
    93291: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => i });
      var r = a(37876);
      let i = (e) => {
        let { className: t } = e;
        return (0, r.jsx)("div", {
          className: "h-text-grayDark h-text-sm ".concat(null != t ? t : ""),
          children: "Final price will be based on weight.",
        });
      };
      i.displayName = "MaxPriceDisclaimer";
    },
    93609: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => r, b: () => n });
      var r,
        i = a(14232),
        s = a(70418),
        l = a(4264);
      !(function (e) {
        (e.FoundationFinder = "/virtual-try-on/foundation-finder"),
          (e.HairQuiz = "/experiences/hair-quiz"),
          (e.NowWearing = "/virtual-try-on/now-wearing"),
          (e.SkinQuiz = "/experiences/skin-quiz");
      })(r || (r = {}));
      let n = function () {
        var e, t, a;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : r.NowWearing,
          { tcin: o } = (0, l.A)(),
          d = (0, i.useMemo)(
            () => [encodeURIComponent(null != o ? o : "")],
            [o]
          ),
          c = "";
        switch (
          ((c =
            null !=
            (a =
              null == (t = window) || null == (e = t.location)
                ? void 0
                : e.origin)
              ? a
              : ""),
          n)
        ) {
          case r.FoundationFinder:
            return new s.o(c + r.FoundationFinder);
          case r.HairQuiz:
            return new s.o(c + r.HairQuiz + "?studio=true");
          case r.SkinQuiz:
            return new s.o(c + r.SkinQuiz + "?studio=true");
          default:
            return new s.o(c + r.NowWearing + "?tcins=".concat(d.join(",")));
        }
      };
    },
    94590: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => l, s: () => s });
      var r = a(37876),
        i = a(14232);
      let s = (0, i.createContext)({
        currentModal: null,
        isModalOpen: !1,
        modalContent: [],
        modalHeadingRef: null,
        setIsModalOpen: () => !1,
        setModalContent: () => [],
      });
      s.displayName = "NestedModalContext";
      let l = (e) => {
        var t;
        let { children: a } = e,
          [l, n] = (0, i.useState)([]),
          o = (0, i.useRef)(null),
          [d, c] = (0, i.useState)(!1),
          u = null != (t = null == l ? void 0 : l[l.length - 1]) ? t : null,
          p = (0, i.useMemo)(
            () => ({
              currentModal: u,
              isModalOpen: d,
              modalContent: l,
              modalHeadingRef: o,
              setIsModalOpen: c,
              setModalContent: n,
            }),
            [u, d, l]
          );
        return (0, r.jsx)(s.Provider, { value: p, children: a });
      };
      l.displayName = "NestedModalWithContextProvider";
    },
    97496: (e) => {
      e.exports = {
        ownedBrandBannerWrapper: "styles_ownedBrandBannerWrapper__Fb9DW",
        triangle: "styles_triangle__jBj7v",
      };
    },
  },
]);
