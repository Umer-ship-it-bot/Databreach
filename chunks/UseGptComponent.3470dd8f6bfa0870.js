"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2120],
  {
    15046: (t, e, n) => {
      n.d(e, { O: () => m, $: () => S });
      var l = n(3576),
        r = n(14232),
        a = n(42252),
        i = n(53724),
        o = n(68979),
        s = n(56606),
        c = n(87125),
        u = n(89514),
        d = n(40196),
        _ = n(3422),
        g = n(70418),
        v = n(36093),
        p = n(4594),
        A = n(62207),
        E = n(74583),
        I = n(18652);
      let h = function () {
        var t, e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          l = n.find((t) => {
            var e;
            return (
              (null == (e = t.display_name) ? void 0 : e.toLowerCase()) ===
              "category"
            );
          }),
          r = null == l || null == (t = l.options) ? void 0 : t.slice(0, 3),
          a =
            null == r ||
            null ==
              (e = r.map((t) => {
                var e;
                return null == (e = t.display_name)
                  ? void 0
                  : e.toLowerCase().replaceAll(/[^\da-z]/g, "");
              }))
              ? void 0
              : e.filter((t) => "Target" !== t);
        return null != a ? a : [];
      };
      function m() {
        var t;
        let e,
          n,
          m =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          { asPath: D, query: C } = (0, a.rd)(),
          S = (0, d.Hq)(D),
          R = null == m ? void 0 : m(I.e),
          k = (0, o.w)(s.lP),
          T = (0, o.w)(c.A7),
          f = (0, o.w)(c.gY),
          L = (0, o.w)(c.YH),
          P = (0, _.Rj)(C),
          N = k ? h(k).join(",") : "",
          [M] = (0, A.A)(),
          b = M(p.K8),
          { merchlvls: w, itemtype: G } = ((t) => {
            var e, n, l, r, a, i, o, s;
            let c =
              null == t || null == (e = t.search_categories)
                ? void 0
                : e
                    .split("|")
                    .map((t) => t.toLowerCase().replaceAll(/[^\da-z]/g, ""));
            return {
              merchlvls: {
                merchlvl1: null != (l = null == c ? void 0 : c[0]) ? l : "",
                merchlvl2: null != (r = null == c ? void 0 : c[1]) ? r : "",
                merchlvl3: null != (a = null == c ? void 0 : c[2]) ? a : "",
                merchlvl4: null != (i = null == c ? void 0 : c[3]) ? i : "",
                merchlvl5: null != (o = null == c ? void 0 : c[4]) ? o : "",
              },
              itemtype:
                null !=
                (s =
                  null == t || null == (n = t.search_item_types)
                    ? void 0
                    : n.toLowerCase().replaceAll(/[^\da-z]/g, ""))
                  ? s
                  : "",
            };
          })((0, E.kV)(b)),
          { isInRegistryMode: O } = (0, v.Tl)(),
          B = O && S === i.XJ,
          { pathname: y } = new g.o(D),
          V = "/" === y ? "homepage" : (0, d.rv)(D);
        S === i.Dn || S === i.De
          ? ((V = ""), (e = null != P ? P : ""), (n = N.length > 0 ? N : ""))
          : ((e = ""), (n = ""));
        let H = S;
        S === i.De && (H = "search"),
          "pdp" === S && (H = "productdetails"),
          B && (H = "registry");
        let X = (0, u.j)() || "0",
          x = null != (t = (0, _.aZ)(D)) ? t : "",
          J = (S === i.XJ && R) || S === i.Dn || S === i.De,
          K = !0;
        return (
          J && (K = !f && !T && L),
          (0, r.useMemo)(
            () => ({
              isPageLevelTargetingReady: K,
              targeting: (0, l._)(
                {
                  n_cat: V,
                  s_t: e,
                  cat: n,
                  fly: X,
                  item: x,
                  pt: H,
                  itemtype: G,
                },
                w
              ),
            }),
            [K, V, e, n, X, x, H, w, G]
          )
        );
      }
      var D = n(4042),
        C = n(95636);
      function S() {
        var t;
        let { asPath: e } = (0, a.rd)(),
          n = (0, d.Hq)(e),
          { isInRegistryMode: l, registryModeStatusFromCookie: o } = (0,
          v.Tl)(),
          s = l && n === i.XJ && null != o ? o : "",
          c = null == (t = (0, C._f)()) ? void 0 : t.preferredStoreId,
          u = null != c ? c : D.Vz;
        return (0, r.useMemo)(() => ({ registrytype: s, storeId: u }), [s, u]);
      }
    },
    18652: (t, e, n) => {
      n.d(e, { e: () => r });
      var l = n(45354);
      let r = (t) => {
        var e;
        return Object.values(
          null != (e = null == t ? void 0 : t.slots) ? e : {}
        ).some((t) => {
          var e;
          return l.d.has(null != (e = t.presentation) ? e : "");
        });
      };
    },
    45354: (t, e, n) => {
      n.d(e, { d: () => l });
      let l = new Set([
        "/adaptive/placeholders/productgrid/v01/mobile",
        "/adaptive/c_web_a_0045/v01/mobile",
        "/adaptive/seller-productgrid",
      ]);
    },
    51894: (t, e, n) => {
      n.d(e, { E: () => T });
      var l = n(42252),
        r = n(14232),
        a = n(37294),
        i = n(55873),
        o = n(91996),
        s = n(4063),
        c = n(53724),
        u = n(31294),
        d = n(44145),
        _ = n(40196),
        g = n(36093),
        v = n(69507),
        p = n(15046),
        A = n(45123),
        E = n(40152),
        I = n(13967),
        h = n(74583),
        m = n(62207),
        D = n(60780),
        C = n(88044),
        S = n(40123),
        R = n.n(S);
      let k = (t) => {
        var e, n;
        let {
            adUnitPath: v,
            getAdSlots: S,
            shouldUseRedoakAdSlots: k = !0,
            initialRedOakPage: T,
          } = t,
          f = (0, l.rd)(),
          L = (0, a.Y)(),
          P = (0, i.b)(),
          [N] = (0, m.A)(),
          M = N(h.$M),
          b = (0, _.Hq)(f.asPath),
          w = (0, _.rv)(f.asPath),
          G = (0, C.d)(),
          O = (0, u.W)(),
          B = (0, r.useMemo)(() => (T ? (t) => T : O), [T, O]),
          y = B(d.pQ),
          { isPageLevelTargetingReady: V, targeting: H } = (0, p.O)(B),
          X = (0, I.UD)(f.asPath),
          x = (0, D.t)("DLP_SIMPLIFIED_MWEB_ENABLED"),
          J = (0, I.tJ)(f.asPath) || (0, I.mf)(f.asPath),
          K = B(d.Pb),
          { isInRegistryMode: j } = (0, g.Tl)(),
          z = j && b === c.XJ,
          Y = (0, A.qf)(f.asPath, w),
          q = (0, p.$)();
        (0, r.useEffect)(() => {
          (0, E.Q3)(), (0, E.h6)();
        }, []),
          (0, r.useEffect)(() => {
            V && (0, E.DV)();
          }, [V]);
        let U = (0, r.useMemo)(() => {
            let t = null != y ? y : {};
            z && (q.pt = "registry");
            let e = (0, o.CC)({
                pageContent: B,
                adUnitPath: v,
                targeting: q,
                pageKey: b,
                isRegistryPageType: z,
                isTopDealsPage: Y,
                experimentFlags: L,
              }),
              n = x
                ? e.filter((t) => {
                    var e, n, l, r, a, i;
                    return (
                      (null == (l = t.targeting) ||
                      null == (n = l.pos) ||
                      null == (e = n.toString())
                        ? void 0
                        : e.toLowerCase()) !== "slpespot" &&
                      (null == (i = t.targeting) ||
                      null == (a = i.pos) ||
                      null == (r = a.toString())
                        ? void 0
                        : r.toLowerCase()) !== "block0"
                    );
                  })
                : e,
              l = ((t, e, n, l) => {
                var r, a, i;
                if (R()(t) || !(0, I.UD)(l)) return n;
                let o = () =>
                  n.filter((t) => {
                    var e, n, l;
                    return (
                      (null == (l = t.targeting) ||
                      null == (n = l.pos) ||
                      null == (e = n.toString())
                        ? void 0
                        : e.toLowerCase()) !== "block0"
                    );
                  });
                if (
                  !(
                    (null == e || null == (r = e.metadata)
                      ? void 0
                      : r.breadcrumbs) &&
                    (null == e ||
                    null == (i = e.metadata) ||
                    null == (a = i.breadcrumbs)
                      ? void 0
                      : a.length) === 1
                  )
                )
                  return o();
                let s = Object.values(t)
                  .filter((t) => {
                    var e, n, l, r, a, i, o, s;
                    return (
                      (null == (n = t.content) || null == (e = n.pos)
                        ? void 0
                        : e.toLowerCase()) === "block0" ||
                      (null == (r = t.content) || null == (l = r.pos)
                        ? void 0
                        : l.toLowerCase()) === "block1" ||
                      (null == (i = t.content) || null == (a = i.position)
                        ? void 0
                        : a.toLowerCase()) === "block0" ||
                      (null == (s = t.content) || null == (o = s.position)
                        ? void 0
                        : o.toLowerCase()) === "block1"
                    );
                  })
                  .map((t) => {
                    var e;
                    return null != (e = t.order) ? e : 0;
                  })
                  .sort((t, e) => (t && e ? t - e : 0));
                return !Object.values(t).some((t) => {
                  let e = t.order;
                  return s[0] && s[1] && e && e > s[0] && e < s[1];
                }) &&
                  s[0] &&
                  s[1]
                  ? o()
                  : n;
              })(t, B(), n, f.asPath);
            return k ? l : [];
          }, [v, L, z, x, Y, y, b, f.asPath, B, k, q]),
          W = [];
        k && W.push(...U), S && W.push(...S());
        let $ =
          null == M || null == (n = M[0]) || null == (e = n.split("-"))
            ? void 0
            : e.at(-1);
        $ &&
          W.forEach((t) => {
            var e;
            (null == (e = t.targeting) ? void 0 : e.as) &&
              !t.targeting.as.includes($) &&
              (t.targeting.as = ""
                .concat(t.targeting.as.toString(), "_")
                .concat($));
          });
        let F = "15826";
        void 0 !== P.EXP_BASEBOARD_AD_VARIANT &&
          W.forEach((t) => {
            var e, n;
            (null == (e = t.targeting) ? void 0 : e.pos) === "ss" &&
              (null == (n = t.targeting) ? void 0 : n.as) &&
              !t.targeting.as.includes(F) &&
              ((null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) ===
                "control" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_c")),
              (null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) === "v1_15_4" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_v1")),
              (null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) === "v2_30_6" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_v2")),
              (null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) === "v3_30_4" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_v3")),
              (null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) === "v4_10_6" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_v4")),
              (null == P ? void 0 : P.EXP_BASEBOARD_AD_VARIANT) === "v5_5_6" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(F, "_v5")));
          });
        let Q = "16374";
        void 0 !== L.EXPERIMENT_AESTHETIC_CARD_ENABLED &&
          W.forEach((t) => {
            var e, n;
            (null == (e = t.targeting) ? void 0 : e.pos) === "slpespot" &&
              (null == (n = t.targeting) ? void 0 : n.as) &&
              !t.targeting.as.includes(Q) &&
              (L.EXPERIMENT_AESTHETIC_CARD_ENABLED
                ? ((t.targeting.as = ""
                    .concat(t.targeting.as.toString(), "_")
                    .concat(Q, "_v1")),
                  (t.targeting.experiment =
                    "EXPERIMENT_AESTHETIC_CARD_ENABLED true"))
                : ((t.targeting.as = ""
                    .concat(t.targeting.as.toString(), "_")
                    .concat(Q, "_c")),
                  (t.targeting.experiment =
                    "EXPERIMENT_AESTHETIC_CARD_ENABLED false")));
          });
        let Z = "21715";
        void 0 === P.PDP_HIGHLIGHT_AD_VARIANT ||
          "pdp" !== b ||
          G ||
          W.forEach((t) => {
            var e, n;
            (null == (e = t.targeting) ? void 0 : e.pos) === "sskinny" &&
              (null == (n = t.targeting) ? void 0 : n.as) &&
              !t.targeting.as.includes(Z) &&
              ((null == P ? void 0 : P.PDP_HIGHLIGHT_AD_VARIANT) ===
                "control" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(Z, "_c")),
              (null == P ? void 0 : P.PDP_HIGHLIGHT_AD_VARIANT) ===
                "v1_below_atc" &&
                (t.targeting.as = ""
                  .concat(t.targeting.as.toString(), "_")
                  .concat(Z, "_v1")));
          });
        let tt = (0, r.useCallback)(() => {
          (0, E.YR)();
        }, []);
        return (
          (0, s.x)({
            deferAdLoading: !V,
            enableSingleRequest: !0,
            slots: (X || J) && K ? [] : W,
            slotRequested: tt,
            targeting: H,
          }),
          null
        );
      };
      k.displayName = "UseGptComponentInnerBase";
      let T = (0, v.h)({ action: "error_boundary_usegpt_component_inner" })(k);
      T.displayName = "UseGptComponentInner";
    },
    56606: (t, e, n) => {
      n.d(e, { X6: () => d, _2: () => u, lP: () => c });
      var l = n(3576),
        r = n(62701),
        a = n(35881),
        i = n(5323),
        o = n(43580),
        s = n(8036);
      let c = (0, a.Mz)(o.MH, (t) => (null == t ? void 0 : t.facet_list)),
        u = (0, a.Mz)([c], (t) =>
          null == t
            ? void 0
            : t.filter((t) => (null == t ? void 0 : t.facet_id) !== s.hv)
        ),
        d = (t) =>
          (0, a.Mz)([c], (e) => {
            let n =
              null == e
                ? void 0
                : e.find((e) => (null == e ? void 0 : e.facet_id) === t);
            if ((null == n ? void 0 : n.facet_id) === s.iE) {
              var a;
              return (0, r._)((0, l._)({}, n), {
                options: i(
                  null != (a = n.options) ? a : [],
                  (t) => +(t.id !== s.hO)
                ),
              });
            }
            return n;
          });
    },
    60780: (t, e, n) => {
      n.d(e, { t: () => u });
      var l = n(95408),
        r = n(42252),
        a = n(81994),
        i = n(94259),
        o = n(72396),
        s = n(14232),
        c = n(1022);
      let u = (t) => {
        let { formFactor: e } = (0, s.useContext)(i.B.Context),
          { asPath: n } = (0, r.rd)(),
          u = (0, c.B5)(n),
          { sendSpeedCurveABTestData: d } = (0, a.Z)({ forceSample: !0 }),
          _ = (0, s.useCallback)(
            (n) => (null != n ? n : (0, l.Mv)(t)) && "phone" === e && u,
            [t, e, u]
          );
        d(t);
        let { checkIsExperimentEnabledAndTrackFireflyEvent: g } = (0, o.G)(t, {
          checkIsExperimentEnabledWithCustomConditions: _,
        });
        return g();
      };
    },
    90214: (t, e, n) => {
      n.d(e, {
        I3: () => D,
        Eh: () => S,
        fe: () => R,
        Ro: () => k,
        hE: () => C,
      });
      var l = n(14232),
        r = n(19165),
        a = n(9503),
        i = n(68156),
        o = n(26738);
      class s extends o.r {
        processMetadata(t) {
          return t;
        }
        createDataPayload(t) {
          return t;
        }
      }
      var c = n(91797);
      class u extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_CRITEO_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_click");
        }
      }
      class d extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_impression");
        }
      }
      class _ extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class g extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_GOOGLE_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_click");
        }
      }
      class v extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_impression");
        }
      }
      class p extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class A extends s {
        constructor(...t) {
          super(...t),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_RATP_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      let E = (t) =>
        (0, l.useMemo)(
          () => ({
            trackGoogleAdClick: new g(t),
            trackGoogleAdImpression: new v(t),
            trackGoogleAdServedDisplayImpression: new p(t),
            trackCriteoAdClick: new u(t),
            trackCriteoAdImpression: new d(t),
            trackCriteoAdServedDisplayImpression: new _(t),
            trackRatpAdServedDisplayImpression: new A(t),
          }),
          [t]
        );
      var I = n(27763);
      let h = () => {
          let t = (0, l.useRef)(null),
            { data: e } = (0, I.M)(),
            { fetchClientContextMetadata: n } = (0, i.p)();
          return { refToTrack: t, data: e, trackers: E(n) };
        },
        m = () => {},
        D = (t) => {
          let e;
          switch (t) {
            case "criteo":
              e = S;
              break;
            case "google":
              e = R;
              break;
            case "ratp":
              e = k;
              break;
            default:
              e = m;
          }
          return (0, l.useMemo)(() => e, [e]);
        },
        C = (t) => {
          let { fetchClientContextMetadata: e } = (0, i.p)(),
            {
              data: { clickId: n, token: r, tcin: o },
            } = h(),
            { trackCriteoAdClick: s } = E(e),
            c = (0, a.n)()(s);
          return (0, l.useCallback)(() => {
            switch (t) {
              case "criteo":
                c.track({ clickId: n, token: r, tcin: o });
                break;
              case "ratp":
              case void 0:
                break;
              default:
                throw Error(
                  'No adTrackClick case for "'.concat(
                    t,
                    '" sponsored ad source'
                  )
                );
            }
          }, [t, n, c, o, r]);
        },
        S = () => {
          let { refToTrack: t, data: e, trackers: n } = h(),
            { creativeId: i, tcin: o } = e,
            {
              trackCriteoAdClick: s,
              trackCriteoAdImpression: c,
              trackCriteoAdServedDisplayImpression: u,
            } = n,
            d = (0, a.n)()(s),
            _ = (0, a.n)()(u),
            g = (0, r.WS)({
              refToTrack: t,
              trackViewableImpression: () =>
                c.track({ creativeId: i, tcin: o }),
            });
          return (0, l.useMemo)(
            () => ({
              criteoAdTrackClick: d,
              criteoAdTrackServedDisplayImpression: _,
              criteoAdViewableImpressionTracker: g,
            }),
            [d, g, _]
          );
        },
        R = () => {
          let { refToTrack: t, data: e, trackers: n } = h(),
            { adPos: i, adSlot: o, creativeId: s } = e,
            {
              trackGoogleAdClick: c,
              trackGoogleAdImpression: u,
              trackGoogleAdServedDisplayImpression: d,
            } = n,
            _ = (0, a.n)()(c),
            g = (0, a.n)()(d),
            v = (0, r.WS)({
              refToTrack: t,
              trackViewableImpression: () =>
                u.track({ adPos: i, adSlot: o, creativeId: s }),
            });
          return (0, l.useMemo)(
            () => ({
              googleAdTrackClick: _,
              googleAdTrackServedDisplayImpression: g,
              googleAdViewableImpressionTracker: v,
            }),
            [_, g, v]
          );
        },
        k = () => {
          let { trackers: t } = h(),
            { trackRatpAdServedDisplayImpression: e } = t,
            n = (0, a.n)()(e);
          return (0, l.useMemo)(
            () => ({ ratpAdTrackServedDisplayImpression: n }),
            [n]
          );
        };
    },
    94570: (t, e, n) => {
      n.r(e), n.d(e, { UseGptComponent: () => o });
      var l = n(3576),
        r = n(37876),
        a = n(42252),
        i = n(51894);
      let o = (t) => {
        let { asPath: e } = (0, a.rd)();
        return (0, r.jsx)(i.E, (0, l._)({}, t), e);
      };
      o.displayName = "UseGptComponent";
    },
  },
]);
