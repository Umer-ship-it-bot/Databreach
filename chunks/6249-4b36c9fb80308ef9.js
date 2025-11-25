(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6249],
  {
    7323: (e, t, l) => {
      "use strict";
      l.d(t, {
        F4: () => o,
        Nk: () => d,
        Qf: () => n,
        V3: () => i,
        Y8: () => m,
        _B: () => _,
        dQ: () => s,
        ke: () => r,
        zk: () => a,
      });
      let a = {
          sale: "Sale",
          clearance: "Clearance",
          mixed_sale: "Select items on sale",
          mixed_clearance: "Select items on clearance",
          was_now: "New lower price",
          was_now_select_items: "Lower price on select items",
          "value bundle": "Value Bundle",
        },
        r = "000194850",
        i = "@web/Price/PriceAndPromoMinimal",
        n = "@web/Price/PriceAndPromoMinimal/StrikethroughRegPrice",
        s = "@web/Price/PriceStandard",
        d = "@web/Price/PriceFull",
        o = "@web/price-legal-text-drawer",
        m = "@web/Price/PriceAndPromoMinimal/PromoDetails",
        _ = "@web/Price/PriceHandle";
    },
    22492: (e, t, l) => {
      "use strict";
      l.d(t, { V: () => a });
      let a = (e) => {
        if (e && "ornaments" in e) {
          var t;
          return null != (t = null == e ? void 0 : e.ornaments) ? t : [];
        }
        return [];
      };
    },
    25546: (e, t, l) => {
      "use strict";
      l.d(t, { K: () => a });
      let a = (e) => !e || !/(bia|buyitagain)/i.test(e);
    },
    29464: (e, t, l) => {
      "use strict";
      l.d(t, { d: () => n });
      var a = l(3576),
        r = l(37876),
        i = l(92388);
      let n = (e) =>
        (0, r.jsx)(
          i.k,
          (0, a._)(
            {
              _name: "CircleDeals",
              _src: "light/CircleDeals.svg",
              _viewBox: "0 0 32 32",
            },
            e
          )
        );
      n.displayName = "IconCircleDeals";
    },
    64504: (e) => {
      e.exports = {
        markerWrapper: "styles_markerWrapper__eDi91",
        modal: "styles_modal__CKwJW",
        modalHeading: "styles_modalHeading__RTr1g",
        light_marker_info: "styles_light_marker_info___aRIX",
        light_marker_warning: "styles_light_marker_warning__c6dMe",
        light_marker_pumpkin: "styles_light_marker_pumpkin__ckjvj",
        light_marker_holiday_tree: "styles_light_marker_holiday_tree__7RZxw",
        light_marker_holiday_bow: "styles_light_marker_holiday_bow__xaSyg",
        dark_marker_inverse: "styles_dark_marker_inverse__IM1sH",
      };
    },
    94072: (e, t, l) => {
      "use strict";
      l.d(t, { p: () => A });
      var a = l(37876),
        r = l(14232),
        i = l(72396),
        n = l(73208),
        s = l(95035),
        d = l(22492),
        o = l(32038),
        m = l(26989),
        _ = l(78654),
        c = l(29072),
        u = l(11976);
      let p = {
          highly_rated: "light_marker_with_star",
          bestseller: "dark_marker_with_trophy",
          social_proofing: "bold_prefix_with_text",
          trending: "light_marker_with_fire",
          bestseller_halloween: "light_marker_with_pumpkin",
          new_at_target: "text_with_red_bullseye",
          sustainability: "green_bullseye_with_text",
        },
        h = "guest",
        g = {},
        y = {
          ornamentText: "",
          displayText: "",
          descriptionText: "",
          templateTypeFinal: "",
          metadataFinal: "",
        },
        x = (e) => {
          let { text: t, className: l } = e,
            [r, ...i] = t.split(" ");
          return (0, a.jsxs)("section", {
            className: l ? "".concat(l, " h-text-md") : "h-text-md",
            children: [
              (0, a.jsx)("span", { className: "h-text-bold", children: r }),
              (0, a.jsxs)("span", { children: [" ", i.join(" ")] }),
            ],
          });
        };
      x.displayName = "BoldPrefixWithText";
      var f = l(3576),
        k = l(62701),
        v = l(87993),
        w = l(956),
        C = l(48847),
        b = l(42847),
        N = l(60823),
        T = l(55472),
        j = l(55777),
        E = l(64504);
      let I = () =>
        (0, a.jsxs)("svg", {
          fill: "none",
          height: "16",
          viewBox: "0 0 16 16",
          width: "16",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("path", {
              d: "M9.27796 9.28133C10.1634 8.74467 10.8007 8.01682 11.2368 7.15481C11.6493 6.97705 12.8601 6.71878 13.1821 6.39343C13.6147 5.95404 14.1313 5.38719 14.3862 4.70295C14.8122 3.55249 15 1.99953 15 1.99953L11.9747 1.96934C11.9478 1.6507 11.9109 1.32535 11.8673 1H4.1428C4.0992 1.32535 4.0623 1.6507 4.03882 1.96934H1C1 1.96934 1.07714 3.53907 1.50312 4.68953C1.75803 5.37378 2.34165 6.03118 2.86825 6.39008C3.19024 6.71543 4.36083 6.97369 4.77003 7.15146C5.196 7.9967 5.81316 8.70777 6.66511 9.24108C7.06425 9.48928 7.36612 10.0763 7.33593 10.5425V10.6096C7.28897 11.1831 7.13803 11.7466 6.88983 12.2631H5.48781V13.5243H3.67323V14.4131H12.3537V13.5243H10.5156V12.2631H9.11361C8.86541 11.7433 8.71783 11.1831 8.67422 10.6096C8.63397 10.0897 8.84193 9.54966 9.28468 9.27797M14.1044 2.68377C14.0709 3.08291 13.977 3.76045 13.7221 4.45139C13.4705 5.12893 12.5112 6.0446 11.6762 6.0446C11.9747 5.03165 12.072 3.89461 12.0216 2.68712L14.1044 2.68377ZM2.34165 4.35412C2.08674 3.66317 2.03978 3.08626 2.00624 2.68712H3.99187C3.94491 3.89796 4.03883 5.03501 4.33399 6.0446C3.851 5.86348 2.80074 5.5985 2.34165 4.35412Z",
              fill: "#FFAB00",
            }),
            (0, a.jsx)("path", {
              clipRule: "evenodd",
              d: "M4.1428 1C4.0992 1.32535 4.0623 1.6507 4.03882 1.96934H1C1 1.96934 1.07714 3.53907 1.50312 4.68953C1.75803 5.37378 2.34165 6.03118 2.86825 6.39008C3.19024 6.71543 4.36083 6.97369 4.77003 7.15146C5.196 7.9967 5.81316 8.70777 6.66511 9.24108C7.06425 9.48928 7.36612 10.0763 7.33593 10.5425V10.6096C7.28897 11.1831 7.13803 11.7466 6.88983 12.2631H5.48781V13.5243H3.67323V14.4131H8.01346V1H4.1428ZM2.007 2.69624C2.0405 3.09503 2.08867 3.66842 2.34165 4.35412C2.80074 5.5985 3.851 5.86348 4.33399 6.0446C4.03883 5.03501 3.94491 3.89796 3.99187 2.68712H2.00624L2.007 2.69624Z",
              fill: "#FFAB00",
              fillRule: "evenodd",
            }),
          ],
        });
      I.displayName = "IconTrophy";
      let H = {
          dark_marker_with_trophy: {
            template: "dark_marker_inverse",
            icon: (0, a.jsx)(I, {}),
          },
          light_marker_with_star: {
            template: "light_marker_info",
            icon: (0, a.jsx)(v.I, { name: "star-fill" }),
          },
          light_marker_with_fire: {
            template: "light_marker_warning",
            icon: (0, a.jsx)(w.v, { name: "trending-sm" }),
          },
          light_marker_with_pumpkin: {
            template: "light_marker_pumpkin",
            icon: (0, a.jsx)(w.v, { name: "pumpkin-sm" }),
          },
          light_marker_with_holiday_tree: {
            template: "light_marker_holiday_tree",
            icon: (0, a.jsx)(w.v, { name: "holiday-tree-sm" }),
          },
          light_marker_with_holiday_bow: {
            template: "light_marker_holiday_bow",
            icon: (0, a.jsx)(w.v, { name: "holiday-bow-sm" }),
          },
        },
        M = (e) => {
          let {
              dataPosition: t,
              dataStrategyDescription: l,
              dataStrategyId: i,
              dataStrategyName: n,
              placementId: s,
              className: d,
              modalHeading: o,
              ornamentText: m,
              displayText: _,
              templateType: c,
              descriptionText: u,
              tcin: p,
            } = e,
            { screenSm: h } = (0, T.e)(),
            { trackClick: g } = (0, N.f)(),
            [y, x] = (0, r.useState)(!1),
            v = (0, r.useCallback)(() => x((e) => !e), []),
            w = (0, r.useCallback)((e) => e.stopPropagation(), []),
            I = (0, r.useMemo)(() => {
              let e = (e) =>
                (0, a.jsx)(
                  C.E,
                  (0, k._)((0, f._)({ className: E.modalHeading }, e), {
                    children: o,
                  })
                );
              return (e.displayName = "ModalHeadingComponent"), e;
            }, [o]),
            M = (0, r.useMemo)(() => {
              let e = m
                ? m.toUpperCase()
                : null == _
                ? void 0
                : _.toUpperCase().replaceAll(" ", "_");
              return (
                (null == e ? void 0 : e.includes("BESTSELLER")) &&
                  (e = "BESTSELLER"),
                {
                  clickType: e,
                  featureType: "DESIRABILITY_CUES",
                  element: p ? { type: "TCIN", id: p, position: t } : void 0,
                  prz:
                    s && i && n && l
                      ? {
                          placementId: s,
                          strategyDescription: l,
                          strategyId: i,
                          strategyName: n,
                        }
                      : void 0,
                }
              );
            }, [m, _, p, t, s, i, n, l]),
            S = (0, r.useCallback)(
              (e) => {
                ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), v(), g.track(M));
              },
              [v, g, M]
            ),
            L = (0, r.useCallback)((e) => {
              e.stopPropagation();
            }, []),
            P = (0, r.useCallback)(() => {
              v(), g.track(M);
            }, [v, g, M]),
            { template: A, icon: D } = (0, r.useMemo)(
              () => H[c] || { template: "", icon: "" },
              [c]
            );
          if (!_) return null;
          let B =
              "h-display-flex h-flex-justify-space-between h-flex-align-center",
            F = d ? "".concat(d, " ").concat(B) : B;
          return (0, a.jsxs)("div", {
            className: F,
            onClick: w,
            onKeyDown: L,
            role: "presentation",
            children: [
              (0, a.jsx)("div", {
                "aria-label": "Open ".concat(o, " modal"),
                className: E.markerWrapper,
                onClick: P,
                onKeyDown: S,
                role: "button",
                tabIndex: 0,
                children: (0, a.jsx)(b.pH, {
                  className: E[A],
                  renderLeading: D || void 0,
                  children: _,
                }),
              }),
              (0, a.jsx)(j.a, {
                className: E.modal,
                isOpen: y,
                onOpenChange: v,
                pageIdKey: "DESIRABILITY_CUE_MODAL",
                renderHeading: I,
                type: h ? "dialog" : "drawer-bottom",
                children: u,
              }),
            ],
          });
        };
      M.displayName = "MarkerWithIcon";
      let S = {
          green_bullseye_with_text: {
            icon: (0, a.jsx)(v.I, { name: "star-fill" }),
            className: "h-text-green",
            renderLeading: !0,
            renderTrailing: !1,
            srOnly: "",
          },
          gift_with_text: {
            icon: (0, a.jsx)(w.v, { name: "gifting-sm", width: "16" }),
            className: "h-text-bold",
            renderLeading: !0,
            renderTrailing: !1,
            srOnly: "",
          },
          text_with_red_bullseye: {
            icon: (0, a.jsx)(w.v, { name: "bullseye-tm", width: "16" }),
            className: "h-text-bold",
            renderLeading: !1,
            renderTrailing: !0,
            srOnly: "New at Target",
          },
          red_bullseye_with_text: {
            icon: (0, a.jsx)(w.v, { name: "bullseye-tm", width: "16" }),
            className: "h-text-bold h-text-red",
            renderLeading: !0,
            renderTrailing: !1,
            srOnly: "Target New",
          },
        },
        L = (e) => {
          let { text: t, templateType: l, className: r } = e,
            {
              icon: i,
              renderLeading: n,
              renderTrailing: s,
              className: d,
              srOnly: o,
            } = S[l] || {
              renderLeading: !1,
              renderTrailing: !1,
              className: "",
              srOnly: "",
              icon: null,
            },
            m = [d, "h-text-md h-display-flex", r].filter(Boolean).join(" ");
          return (0, a.jsxs)("section", {
            className: m,
            children: [
              n &&
                (0, a.jsx)("span", {
                  className: "h-display-flex h-flex-align-center",
                  children: i,
                }),
              (0, a.jsx)("span", {
                "aria-hidden": !!o,
                className: n ? "h-margin-l-tiny" : "",
                children: t,
              }),
              o &&
                (0, a.jsx)("span", {
                  className: "h-text-md h-sr-only",
                  children: o,
                }),
              s &&
                i &&
                (0, a.jsx)("span", {
                  className:
                    "h-display-flex h-flex-align-center h-margin-l-tiny",
                  children: i,
                }),
            ],
          });
        };
      L.displayName = "TextWithIcon";
      var P = l(25546);
      let A = (e) => {
        let {
            "data-position": t,
            "data-strategy-description": l,
            "data-strategy-id": f,
            "data-strategy-name": k,
            "placement-id": v,
            code: w,
            className: C,
            display: b,
            description: N,
            itemType: T,
            placement: j,
            ornaments: E,
            ornamentType: I,
          } = e,
          { checkIsExperimentEnabledAndTrackFireflyEvent: H } = (0, i.G)(
            "HIDE_ORNAMENTS"
          ),
          {
            tcin: S,
            ornamentText: A,
            displayText: D,
            descriptionText: B,
            modalHeading: F,
            templateTypeFinal: R,
          } = ((e) => {
            let {
                code: t,
                display: l,
                description: a,
                itemType: x,
                ornamentType: f,
                ornaments: k,
              } = e,
              v = (0, n.K1)(s.D),
              w = (0, n.K1)(d.V),
              C = (0, n.EJ)(o.fJ),
              b = (0, n.K1)(m.Gs),
              N = (0, n.EJ)(_.J4),
              { desirabilityCues: T, ornamentsList: j } = (0, r.useMemo)(() => {
                if (
                  (null == v ? void 0 : v.length) ||
                  (null == w ? void 0 : w.length)
                )
                  return { desirabilityCues: v, ornamentsList: w };
                if ((null == N ? void 0 : N.length) && b) {
                  let e = N.find((e) => (0, m.Gs)(e) === b);
                  if (e)
                    return {
                      desirabilityCues: (0, s.D)(e),
                      ornamentsList: (0, d.V)(e),
                    };
                }
                return { desirabilityCues: [], ornamentsList: [] };
              }, [v, w, N, b]),
              E = (0, r.useContext)(c.q),
              { checkIsExperimentEnabledAndTrackFireflyEvent: I } = (0, i.G)(
                "SWITCH_DESIRABILITY_CUES_WITH_ORNAMENTS"
              ),
              { trackExperimentExposedEvent: H } = (0, u.t)(),
              M = (0, r.useCallback)((e) => {
                try {
                  return JSON.parse(e);
                } catch (e) {
                  return null;
                }
              }, []),
              S = (0, r.useCallback)(
                (e) => {
                  if (!e.metadata) return !1;
                  let t = M(e.metadata);
                  return (
                    !!t &&
                    !!(t.experiments && Array.isArray(t.experiments)) &&
                    t.experiments.some(
                      (e) =>
                        e &&
                        (void 0 !== e.factor ||
                          void 0 !== e.value ||
                          void 0 !== e.default)
                    )
                  );
                },
                [M]
              ),
              L = (0, r.useCallback)(
                (e) => {
                  if (!e.metadata) return !1;
                  let t = M(e.metadata);
                  return (
                    !!t &&
                    !!(t.experiments && Array.isArray(t.experiments)) &&
                    t.experiments.some((e) => !0 === e.default)
                  );
                },
                [M]
              ),
              P = (0, r.useMemo)(() => f || h, [f]),
              A = (0, r.useCallback)(
                function (e) {
                  var t;
                  let l =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!e.metadata) return !1;
                  let a = M(e.metadata);
                  if (
                    !(null == a || null == (t = a.experiments)
                      ? void 0
                      : t.length)
                  )
                    return !1;
                  let r = (null == E ? void 0 : E.variants) || {},
                    i = null == E ? void 0 : E.instance,
                    n = !1,
                    s = !1;
                  return (
                    a.experiments.forEach((e) => {
                      if (
                        (null == e ? void 0 : e.factor) &&
                        (null == e ? void 0 : e.value) !== void 0
                      )
                        if (r[e.factor] === e.value) {
                          if (((n = !0), i && 1)) {
                            var t;
                            let l = i.getExperimentByFlag(e.factor),
                              a =
                                null == l || null == (t = l[0])
                                  ? void 0
                                  : t.tid;
                            a && H.track({ treatments: [{ id: a }] });
                          }
                        } else e.factor in r && l && i && (s = !0);
                    }),
                    s &&
                      !n &&
                      a.experiments.forEach((e) => {
                        var t;
                        if (!(null == e ? void 0 : e.factor)) return;
                        let l =
                            null == i
                              ? void 0
                              : i.getExperimentByFlag(e.factor),
                          a = null == l || null == (t = l[0]) ? void 0 : t.tid;
                        a && H.track({ treatments: [{ id: a }] });
                      }),
                    n
                  );
                },
                [
                  M,
                  null == E ? void 0 : E.variants,
                  null == E ? void 0 : E.instance,
                  H,
                ]
              ),
              D = (0, r.useCallback)(() => {
                let e,
                  t,
                  l = k || j;
                if (!Array.isArray(l)) return g;
                let a = l.filter((e) => e.ornament_type === P);
                if (0 === a.length) return g;
                let r = a.find((e) => A(e));
                if (r) return r;
                let i = a.find((e) => A(e, !0));
                if (i) return i;
                let n = [];
                for (let l of a)
                  S(l) ? (n.push(l), !t && L(l) && (t = l)) : e || (e = l);
                let s = n.length > 0 && n.every((e) => !L(e));
                return t || (s && e ? e : e || g);
              }, [j, k, P, A, L, S]),
              B = (0, r.useCallback)((e) => p[e] || "", []),
              F = I(),
              {
                ornamentText: R,
                displayText: V,
                descriptionText: O,
                templateTypeFinal: K,
                metadataFinal: W,
              } = (0, r.useMemo)(() => {
                let e = function (e, t) {
                  var l;
                  let a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "";
                  return null != (l = null != e ? e : t) ? l : a;
                };
                if (F) {
                  var r, i, n, s;
                  let l = D(),
                    a = e(t, l.ornament);
                  return {
                    ornamentText: a,
                    displayText: null != (r = l.display) ? r : "",
                    descriptionText: null != (i = l.long_description) ? i : "",
                    templateTypeFinal: null != (n = l.template_type) ? n : B(a),
                    metadataFinal: null != (s = l.metadata) ? s : "",
                  };
                }
                if (P !== h) return y;
                let d = null == T ? void 0 : T[0],
                  o = e(t, null == d ? void 0 : d.code);
                return {
                  ornamentText: o,
                  displayText: e(l, null == d ? void 0 : d.display),
                  descriptionText: e(
                    a,
                    null == d ? void 0 : d.long_description
                  ),
                  templateTypeFinal: B(o),
                  metadataFinal: "",
                };
              }, [P, F, D, t, l, a, T, B]),
              J = (0, r.useMemo)(() => {
                var e;
                let t =
                  null != (e = null != x ? x : null == C ? void 0 : C.name)
                    ? e
                    : "";
                return "".concat(V).concat(t ? " in ".concat(t) : "");
              }, [V, x, null == C ? void 0 : C.name]);
            return {
              tcin: b,
              ornamentText: R,
              displayText: V,
              descriptionText: O,
              modalHeading: J,
              templateTypeFinal: K,
              metadataFinal: W,
            };
          })({
            code: w,
            display: b,
            description: N,
            itemType: T,
            ornaments: E,
            ornamentType: I,
          }),
          V = (0, r.useMemo)(() => (0, P.K)(k), [k]),
          O = (0, r.useMemo)(
            () =>
              "bold_prefix_with_text" === R
                ? "social_proofing" !== A || "CAROUSEL" !== j
                  ? (0, a.jsx)(x, { className: C, text: D })
                  : null
                : "text_with_red_bullseye" === R ||
                  "green_bullseye_with_text" === R ||
                  "red_bullseye_with_text" === R ||
                  "gift_with_text" === R
                ? (0, a.jsx)(L, { className: C, templateType: R, text: D })
                : (null == R ? void 0 : R.includes("marker"))
                ? (0, a.jsx)(M, {
                    className: C,
                    dataPosition: t,
                    dataStrategyDescription: l,
                    dataStrategyId: f,
                    dataStrategyName: k,
                    descriptionText: B,
                    displayText: D,
                    modalHeading: F,
                    ornamentText: A,
                    placementId: v,
                    tcin: S,
                    templateType: R,
                  })
                : null,
            [R, A, j, C, D, t, l, f, k, B, F, v, S]
          );
        return !H() && D && V ? O : null;
      };
      A.displayName = "DesirabilityCue";
    },
    95035: (e, t, l) => {
      "use strict";
      l.d(t, { D: () => a });
      let a = (e) => {
        if (e && "desirability_cues" in e) {
          var t;
          return null != (t = null == e ? void 0 : e.desirability_cues)
            ? t
            : [];
        }
        return [];
      };
    },
  },
]);
