"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8235],
  {
    85226: (e, s, t) => {
      t.r(s), t.d(s, { default: () => d });
      var a = t(37876),
        i = t(14232),
        r = t(42252),
        n = t(91996),
        o = t(42401),
        l = t(40196),
        c = t(55472);
      let d = (e) => {
        var s, t, d, p;
        let { componentId: u, content: _, formFactor: I } = e,
          { asPath: k } = (0, r.rd)(),
          h = (0, l.Hq)(k),
          A = null != (t = null == _ ? void 0 : _.pos) ? t : "",
          { screenLgMax: m } = (0, c.e)(),
          C = (0, n.cR)(h, A, I),
          S =
            null !=
            (p = null != (d = C.pos) ? d : null == A ? void 0 : A.toLowerCase())
              ? p
              : "",
          [g, v] = (0, i.useState)("slpespot" !== S),
          L =
            (null == C || null == (s = C.pos) ? void 0 : s.includes("btf")) ||
            (null == A ? void 0 : A.toLowerCase().includes("btf")),
          R = (0, i.useCallback)((e) => {
            v(e);
          }, []),
          E = S.includes("sskinny");
        return L
          ? null
          : (0, a.jsx)("div", {
              className: "l-container l-container-standard "
                .concat(g ? "h-padding-t-default" : "", " ")
                .concat(m ? "h-padding-h-default" : ""),
              children: (0, a.jsx)(o.f, {
                adName: S,
                assumeAdFilled: "slpespot" !== S,
                componentId: u,
                isSkinny: E,
                onSlotRenderEnded: R,
                showSponsored: !0,
              }),
            });
      };
      d.displayName = "PubAdContainer";
    },
    90214: (e, s, t) => {
      t.d(s, {
        I3: () => g,
        Eh: () => L,
        fe: () => R,
        Ro: () => E,
        hE: () => v,
      });
      var a = t(14232),
        i = t(19165),
        r = t(9503),
        n = t(68156),
        o = t(26738);
      class l extends o.r {
        processMetadata(e) {
          return e;
        }
        createDataPayload(e) {
          return e;
        }
      }
      var c = t(91797);
      class d extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_CRITEO_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_click");
        }
      }
      class p extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_impression");
        }
      }
      class u extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class _ extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_GOOGLE_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_click");
        }
      }
      class I extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_impression");
        }
      }
      class k extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class h extends l {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_RATP_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      let A = (e) =>
        (0, a.useMemo)(
          () => ({
            trackGoogleAdClick: new _(e),
            trackGoogleAdImpression: new I(e),
            trackGoogleAdServedDisplayImpression: new k(e),
            trackCriteoAdClick: new d(e),
            trackCriteoAdImpression: new p(e),
            trackCriteoAdServedDisplayImpression: new u(e),
            trackRatpAdServedDisplayImpression: new h(e),
          }),
          [e]
        );
      var m = t(27763);
      let C = () => {
          let e = (0, a.useRef)(null),
            { data: s } = (0, m.M)(),
            { fetchClientContextMetadata: t } = (0, n.p)();
          return { refToTrack: e, data: s, trackers: A(t) };
        },
        S = () => {},
        g = (e) => {
          let s;
          switch (e) {
            case "criteo":
              s = L;
              break;
            case "google":
              s = R;
              break;
            case "ratp":
              s = E;
              break;
            default:
              s = S;
          }
          return (0, a.useMemo)(() => s, [s]);
        },
        v = (e) => {
          let { fetchClientContextMetadata: s } = (0, n.p)(),
            {
              data: { clickId: t, token: i, tcin: o },
            } = C(),
            { trackCriteoAdClick: l } = A(s),
            c = (0, r.n)()(l);
          return (0, a.useCallback)(() => {
            switch (e) {
              case "criteo":
                c.track({ clickId: t, token: i, tcin: o });
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
          }, [e, t, c, o, i]);
        },
        L = () => {
          let { refToTrack: e, data: s, trackers: t } = C(),
            { creativeId: n, tcin: o } = s,
            {
              trackCriteoAdClick: l,
              trackCriteoAdImpression: c,
              trackCriteoAdServedDisplayImpression: d,
            } = t,
            p = (0, r.n)()(l),
            u = (0, r.n)()(d),
            _ = (0, i.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                c.track({ creativeId: n, tcin: o }),
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
        R = () => {
          let { refToTrack: e, data: s, trackers: t } = C(),
            { adPos: n, adSlot: o, creativeId: l } = s,
            {
              trackGoogleAdClick: c,
              trackGoogleAdImpression: d,
              trackGoogleAdServedDisplayImpression: p,
            } = t,
            u = (0, r.n)()(c),
            _ = (0, r.n)()(p),
            I = (0, i.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                d.track({ adPos: n, adSlot: o, creativeId: l }),
            });
          return (0, a.useMemo)(
            () => ({
              googleAdTrackClick: u,
              googleAdTrackServedDisplayImpression: _,
              googleAdViewableImpressionTracker: I,
            }),
            [u, _, I]
          );
        },
        E = () => {
          let { trackers: e } = C(),
            { trackRatpAdServedDisplayImpression: s } = e,
            t = (0, r.n)()(s);
          return (0, a.useMemo)(
            () => ({ ratpAdTrackServedDisplayImpression: t }),
            [t]
          );
        };
    },
  },
]);
