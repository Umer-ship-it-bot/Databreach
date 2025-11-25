(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [525],
  {
    50525: (e, l, s) => {
      "use strict";
      s.d(l, { x: () => C });
      var t = s(37876),
        i = s(14232),
        a = s(15039),
        n = s(18551),
        r = s(88316),
        d = s(73208),
        c = s(25012),
        o = s(38858),
        m = s(29464),
        u = s(7323),
        h = s(69107),
        x = s(14960),
        g = s(91342),
        p = s(72396),
        P = s(18170),
        E = s(6318);
      let v = (e) => {
        let l = (0, E.gK)(),
          s = (0, d.EJ)(c.m0),
          [t] = (0, n.RJ)(),
          i = t(r.uA),
          {
            formattedPrice: a,
            isCalculatedPrice: o,
            isLoyaltyPromo: m,
          } = null != s ? s : {};
        return o ? ((m && !i) || e ? l : a) : l;
      };
      var j = s(76234);
      let _ = (e) => {
        var l;
        let {
            showPdpPromoMessage: s,
            isSeePriceInCart: E,
            hasPriceMessage: _,
            selectChildrenOnPromo: N,
          } = e,
          y = v(!1),
          [M] = (0, n.RJ)(),
          J = M(r.uA),
          {
            isCalculatedPrice: f,
            isLoyaltyPromo: R,
            formattedPrice: k,
            promotionsCount: w,
            promotion: A,
          } = null != (l = (0, d.EJ)(c.m0)) ? l : {},
          C = (0, d.EJ)(h.qe),
          F = null == y ? void 0 : y.includes("-"),
          L = (0, i.useMemo)(
            () => !(E || F || (R && f && !J)),
            [F, E, f, J, R]
          ),
          T = (0, x.ri)(A),
          { checkIsExperimentEnabledAndTrackFireflyEvent: I } = (0, p.G)(
            "TARGET_FREEBIES_ENABLED"
          ),
          b = (0, i.useMemo)(() => {
            if ((0, x.i3)(A)) {
              var e, l;
              return null !=
                (l =
                  null == A || null == (e = A.message)
                    ? void 0
                    : e.short_description)
                ? l
                : null == A
                ? void 0
                : A.value;
            }
            return s
              ? null == A
                ? void 0
                : A.pdp_message
              : null == A
              ? void 0
              : A.plp_message;
          }, [A, s]),
          S = (0, i.useMemo)(
            () =>
              R && f && !E && !N
                ? (0, t.jsx)(o.P, {
                    className: j.caption,
                    lines: J ? 1 : 2,
                    children: J
                      ? "with ".concat(b)
                      : (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(m.d, { className: j.icon, width: 14 }),
                            k,
                            " with Target Circle",
                          ],
                        }),
                  })
                : R || !f || E || N
                ? (0, t.jsxs)(o.P, {
                    className: j.caption,
                    lines: 1,
                    children: [
                      R
                        ? I() && T
                          ? (0, t.jsx)(P.P, { width: 14 })
                          : (0, t.jsx)(m.d, { className: j.icon, width: 14 })
                        : null,
                      b,
                    ],
                  })
                : (0, t.jsxs)(o.P, {
                    className: j.caption,
                    lines: 1,
                    children: ["with ", b],
                  }),
            [R, f, E, N, I, T, b, J, k]
          );
        return A
          ? (0, t.jsx)(t.Fragment, {
              children: A
                ? (0, t.jsxs)("div", {
                    className: R ? j.tealText : j.redText,
                    "data-test": u.Y8,
                    children: [
                      S,
                      L &&
                        w &&
                        w > 1 &&
                        (0, t.jsxs)(o.P, {
                          className: j.caption,
                          lines: 1,
                          children: [
                            "+ ",
                            w - 1,
                            " ",
                            (0, g.td)("deal", w - 1),
                          ],
                        }),
                    ],
                  })
                : null,
            })
          : (null == C ? void 0 : C.plp_message)
          ? (0, t.jsx)(o.P, {
              className: a(j.caption, "h-text-grayDark"),
              "data-test": u.Y8,
              lines: _ ? 1 : 2,
              children: C.plp_message,
            })
          : null;
      };
      _.displayName = "LoyaltyPromoDetails";
      var N = s(32038),
        y = s(36633);
      let M = { AFTER: "after", BEFORE: "before" },
        J = (e) => {
          let {
              priceMessage: l,
              hasItemMixedOffer: s,
              isNonLoyaltyPromoView: n,
              isLoyaltyPromoMemberView: r,
            } = e,
            o = (() => {
              let e = (0, d.EJ)(c.Id),
                l = (0, d.EJ)(c.m0);
              return (null == l ? void 0 : l.formattedComparisonPrice)
                ? null == l
                  ? void 0
                  : l.formattedComparisonPrice
                : e;
            })(),
            m = (() => {
              let e = (0, d.EJ)(c.YN),
                l = (0, d.EJ)(c.m0),
                { formattedComparisonPriceType: s } = null != l ? l : {};
              return null != s ? s : e;
            })(),
            h = (0, d.EJ)(c.Od),
            x = null == o ? void 0 : o.includes("-"),
            g = (0, i.useMemo)(() => o || (o && !x), [x, o]),
            P = (0, d.K1)(c.iZ),
            E = (0, d.EJ)(N.RL),
            { activeVariant: v, checkIsVariantActiveAndTrackFireflyEvent: j } =
              (0, p.G)("PRZ_CAROUSEL_PRICE_ENABLED", {
                variantFactor: "sale_variant",
              }),
            _ = (0, i.useMemo)(
              () =>
                h
                  ? "was"
                  : "MSRP" === m
                  ? "MSRP"
                  : "value bundle reg" === m
                  ? "Value Bundle reg"
                  : "reg",
              [m, h]
            );
          return n || r || l || "MSRP" === _
            ? (0, t.jsxs)("div", {
                className: "h-text-grayDark h-text-normal h-text-sm",
                "data-test": u.Qf,
                children: [
                  g && _
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          v ? null : _,
                          " ",
                          !E && j(M.BEFORE)
                            ? (0, t.jsxs)("span", {
                                className: "h-text-red",
                                children: [P, " off "],
                              })
                            : null,
                          v && (0, t.jsx)(y.E, { children: "reg " }),
                          (0, t.jsx)("span", {
                            className: "h-text-line-through",
                            "data-test": "strikethroughFormattedRegPrice",
                            children: o,
                          }),
                          " ",
                          !E && j(M.AFTER)
                            ? (0, t.jsxs)("span", {
                                className: "h-text-red",
                                children: [P, " off "],
                              })
                            : null,
                        ],
                      })
                    : null,
                  !v &&
                    (0, t.jsx)("span", {
                      className: a("h-text-red", { "h-display-block": s }),
                      "data-test": "strikethroughPriceMessage",
                      children: l,
                    }),
                ],
              })
            : null;
        };
      J.displayName = "StrikethroughRegPrice";
      var f = s(83070),
        R = s(77232),
        k = s(98601),
        w = s(35223);
      let A = (0, R.I4)(w.O).withConfig({ componentId: "sc-a31a6dac-0" })(
          [
            "font-size:",
            ";font-weight:normal;margin-left:",
            ";margin-right:",
            ";",
          ],
          f.eD8,
          k.xe.generic.x1,
          k.xe.generic.x1
        ),
        C = (e) => {
          let {
              className: l = "",
              textAlignment: s = "center",
              shouldResizeLargeTextToFit: h = !1,
              showPdpPromoMessage: x = !1,
              isStrikethroughPriceEnabled: g = !1,
            } = e,
            p = (0, d.EJ)(c.Z1),
            P = v(p),
            [E] = (0, n.RJ)(),
            N = E(r.uA),
            y = (0, d.EJ)(c.m0),
            M = (0, d.EJ)(c.iC),
            f = (0, i.useMemo)(() => {
              var e;
              return !!(null != (e = null == y ? void 0 : y.hidePrice) ? e : M);
            }, [null == y ? void 0 : y.hidePrice, M]),
            R = (0, d.EJ)(c.IA),
            k = (0, d.EJ)(c.em),
            w = (0, d.EJ)(c.IT),
            C = (0, d.EJ)(c.gM),
            F = !!(k && "reg" !== k),
            L = (0, i.useMemo)(() => {
              var e;
              return C
                ? u.zk[C]
                : u.zk[null != (e = null != w ? w : k) ? e : ""];
            }, [w, k, C]),
            T = !!(L && L.length > 15),
            I = (0, i.useMemo)(
              () =>
                N &&
                (null == y ? void 0 : y.isLoyaltyPromo) &&
                (null == y ? void 0 : y.isCalculatedPrice) &&
                !f &&
                !p,
              [
                N,
                null == y ? void 0 : y.isLoyaltyPromo,
                null == y ? void 0 : y.isCalculatedPrice,
                f,
                p,
              ]
            ),
            b = (0, i.useMemo)(
              () =>
                !(null == y ? void 0 : y.isLoyaltyPromo) &&
                (null == y ? void 0 : y.isCalculatedPrice) &&
                !f,
              [
                null == y ? void 0 : y.isLoyaltyPromo,
                null == y ? void 0 : y.isCalculatedPrice,
                f,
              ]
            );
          return P
            ? (0, t.jsxs)("div", {
                className: a(
                  j.priceAndPromoMinimalLineHeight,
                  "h-text-bold h-text-md",
                  "h-text-".concat(s),
                  l
                ),
                "data-test": u.V3,
                children: [
                  (0, t.jsx)(t.Fragment, {
                    children: f
                      ? (0, t.jsx)("div", {
                          className: "h-text-md",
                          children: "See price in cart",
                        })
                      : (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsxs)(o.P, {
                              lines: 1,
                              children: [
                                I &&
                                  (0, t.jsx)(m.d, {
                                    className: j.icon,
                                    width: 16,
                                  }),
                                (0, t.jsxs)("span", {
                                  className: a({
                                    "h-text-red": F || I || b,
                                    "h-text-bs": f && h,
                                  }),
                                  children: [
                                    P,
                                    R
                                      ? (0, t.jsx)("span", {
                                          className: "h-text-sm",
                                          children: R,
                                        })
                                      : null,
                                  ],
                                }),
                                (0, t.jsx)(A, {}),
                              ],
                            }),
                            g
                              ? (0, t.jsx)(t.Fragment, {
                                  children: (0, t.jsx)(J, {
                                    hasItemMixedOffer: T,
                                    isLoyaltyPromoMemberView: I,
                                    isNonLoyaltyPromoView: b,
                                    priceMessage: L,
                                  }),
                                })
                              : (0, t.jsx)(t.Fragment, {
                                  children: L
                                    ? (0, t.jsx)(o.P, {
                                        className: a("h-text-red", {
                                          "h-text-md": T,
                                        }),
                                        lines: 1,
                                        children: L,
                                      })
                                    : null,
                                }),
                          ],
                        }),
                  }),
                  (0, t.jsx)(_, {
                    hasPriceMessage: !!L,
                    isSeePriceInCart: f,
                    selectChildrenOnPromo: p,
                    showPdpPromoMessage: x,
                  }),
                ],
              })
            : null;
        };
      C.displayName = "PriceAndPromoMinimal";
    },
    76234: (e) => {
      e.exports = {
        priceAndPromoMinimalLineHeight:
          "styles_priceAndPromoMinimalLineHeight__tDaSQ",
        icon: "styles_icon__OkwlD",
        tealText: "styles_tealText__pIbuM",
        redText: "styles_redText__X47Jn",
        caption: "styles_caption__8k0z7",
      };
    },
  },
]);
