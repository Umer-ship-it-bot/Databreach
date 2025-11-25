(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4281],
  {
    30226: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { BaseboardAdWrapper: () => l });
      var a = t(37876),
        r = t(99397),
        i = t(42252),
        n = t(31294),
        o = t(44145),
        c = t(1022),
        d = t(59614);
      let l = () => {
        let { asPath: e } = (0, i.rd)(),
          s = (0, n.W)(),
          t = (0, c.UD)(e),
          l = (0, c.KM)(e),
          p = (0, c.Wu)(e),
          u = s(o.Pb);
        return (t || l || p) && !u
          ? (0, a.jsx)(d.O, { children: (0, a.jsx)(r.ZE, {}, e) })
          : null;
      };
      l.displayName = "BaseboardAdWrapper";
    },
    35461: (e) => {
      e.exports = {
        pubAdDivContainer: "styles_pubAdDivContainer__cjcx8",
        "baseboard-fade": "styles_baseboard-fade__DpIEn",
        transition: "styles_transition__q0Oeq",
      };
    },
    90214: (e, s, t) => {
      "use strict";
      t.d(s, {
        I3: () => b,
        Eh: () => g,
        fe: () => E,
        Ro: () => f,
        hE: () => C,
      });
      var a = t(14232),
        r = t(19165),
        i = t(9503),
        n = t(68156),
        o = t(26738);
      class c extends o.r {
        processMetadata(e) {
          return e;
        }
        createDataPayload(e) {
          return e;
        }
      }
      var d = t(91797);
      class l extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Click),
            (this.tag = "GLOBAL_CRITEO_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_click");
        }
      }
      class p extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_impression");
        }
      }
      class u extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class _ extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Click),
            (this.tag = "GLOBAL_GOOGLE_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_click");
        }
      }
      class h extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_impression");
        }
      }
      class A extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class I extends c {
        constructor(...e) {
          super(...e),
            (this.intent = d.J.Impression),
            (this.tag = "GLOBAL_RATP_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      let k = (e) =>
        (0, a.useMemo)(
          () => ({
            trackGoogleAdClick: new _(e),
            trackGoogleAdImpression: new h(e),
            trackGoogleAdServedDisplayImpression: new A(e),
            trackCriteoAdClick: new l(e),
            trackCriteoAdImpression: new p(e),
            trackCriteoAdServedDisplayImpression: new u(e),
            trackRatpAdServedDisplayImpression: new I(e),
          }),
          [e]
        );
      var m = t(27763);
      let v = () => {
          let e = (0, a.useRef)(null),
            { data: s } = (0, m.M)(),
            { fetchClientContextMetadata: t } = (0, n.p)();
          return { refToTrack: e, data: s, trackers: k(t) };
        },
        S = () => {},
        b = (e) => {
          let s;
          switch (e) {
            case "criteo":
              s = g;
              break;
            case "google":
              s = E;
              break;
            case "ratp":
              s = f;
              break;
            default:
              s = S;
          }
          return (0, a.useMemo)(() => s, [s]);
        },
        C = (e) => {
          let { fetchClientContextMetadata: s } = (0, n.p)(),
            {
              data: { clickId: t, token: r, tcin: o },
            } = v(),
            { trackCriteoAdClick: c } = k(s),
            d = (0, i.n)()(c);
          return (0, a.useCallback)(() => {
            switch (e) {
              case "criteo":
                d.track({ clickId: t, token: r, tcin: o });
                break;
              case "ratp":
              case void 0:
                break;
              default:
                throw Error(
                  'No adTrackClick case for "'.concat(
                    e,
                    '" sponsored ad source'
                  )
                );
            }
          }, [e, t, d, o, r]);
        },
        g = () => {
          let { refToTrack: e, data: s, trackers: t } = v(),
            { creativeId: n, tcin: o } = s,
            {
              trackCriteoAdClick: c,
              trackCriteoAdImpression: d,
              trackCriteoAdServedDisplayImpression: l,
            } = t,
            p = (0, i.n)()(c),
            u = (0, i.n)()(l),
            _ = (0, r.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                d.track({ creativeId: n, tcin: o }),
            });
          return (0, a.useMemo)(
            () => ({
              criteoAdTrackClick: p,
              criteoAdTrackServedDisplayImpression: u,
              criteoAdViewableImpressionTracker: _,
            }),
            [p, _, u]
          );
        },
        E = () => {
          let { refToTrack: e, data: s, trackers: t } = v(),
            { adPos: n, adSlot: o, creativeId: c } = s,
            {
              trackGoogleAdClick: d,
              trackGoogleAdImpression: l,
              trackGoogleAdServedDisplayImpression: p,
            } = t,
            u = (0, i.n)()(d),
            _ = (0, i.n)()(p),
            h = (0, r.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                l.track({ adPos: n, adSlot: o, creativeId: c }),
            });
          return (0, a.useMemo)(
            () => ({
              googleAdTrackClick: u,
              googleAdTrackServedDisplayImpression: _,
              googleAdViewableImpressionTracker: h,
            }),
            [u, _, h]
          );
        },
        f = () => {
          let { trackers: e } = v(),
            { trackRatpAdServedDisplayImpression: s } = e,
            t = (0, i.n)()(s);
          return (0, a.useMemo)(
            () => ({ ratpAdTrackServedDisplayImpression: t }),
            [t]
          );
        };
    },
    99397: (e, s, t) => {
      "use strict";
      t.d(s, { Mf: () => u, ZE: () => _ });
      var a = t(37876),
        r = t(14232),
        i = t(58117),
        n = t(69507),
        o = t(55873),
        c = t(15039),
        d = t(35461),
        l = t(42401),
        p = t(68444);
      let u = "baseBoardShown",
        _ = (0, n.h)({ action: p.P })(() => {
          let [e, s] = (0, r.useState)(!1),
            [t, n] = (0, r.useState)(!0),
            [p, _] = (0, r.useState)(!1),
            [h, A] = (0, r.useState)(!0),
            { EXP_BASEBOARD_AD_VARIANT: I } = (0, o.b)(),
            k = (0, r.useCallback)(() => {
              switch (I) {
                case "control":
                case "v2_30_6":
                case "v4_10_6":
                case "v5_5_6":
                default:
                  return 6e3;
                case "v1_15_4":
                case "v3_30_4":
                  return 4e3;
              }
            }, [I]);
          return ((0, r.useEffect)(() => {
            let e = i.Lr.getSync(u);
            (i.Lr.isExpiredSync(u) || !e) && n(!1);
          }, []),
          (0, r.useEffect)(() => {
            if (!e) return;
            let s = k(),
              t = setTimeout(() => {
                _(!0);
              }, s),
              a = setTimeout(() => {
                A(!1), _(!1);
              }, s + 2e3);
            return () => {
              clearTimeout(t), clearTimeout(a);
            };
          }, [e, k]),
          t)
            ? null
            : (0, a.jsx)("div", {
                className: c(
                  "h-bg-white",
                  "h-padding-h-default",
                  d.pubAdDivContainer,
                  p && d.transition,
                  h && "h-position-fixed-bottom",
                  !e && "h-display-none"
                ),
                "data-test": "@web/baseboardAd",
                children: (0, a.jsx)("div", {
                  className: "l-container l-container-fixed",
                  children: (0, a.jsx)(l.f, {
                    adName: "ss",
                    onBaseboardAdReady: s,
                    showSponsored: !0,
                  }),
                }),
              });
        });
      _.displayName = "BaseboardAd";
    },
  },
]);
