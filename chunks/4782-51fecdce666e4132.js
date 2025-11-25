(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4782],
  {
    2919: (e) => {
      e.exports = {
        trackingOverlayWrapper: "styles_trackingOverlayWrapper__McUKU",
        trackingOverlay: "styles_trackingOverlay__923MF",
      };
    },
    30305: (e) => {
      e.exports = {
        sponsoredLogo: "styles_sponsoredLogo__KXhVW",
        visible: "styles_visible__aMaga",
        skinnyAdSponsoredLogo: "styles_skinnyAdSponsoredLogo__JfeXT",
        pdp: "styles_pdp__Be0f_",
        topBorder: "styles_topBorder__BaqfB",
        belowAddToCart: "styles_belowAddToCart__Mbxp3",
        adPlaceholder: "styles_adPlaceholder__eShfO",
        filled: "styles_filled__or_ES",
        rightcol: "styles_rightcol___tsci",
        sskinny: "styles_sskinny__J1eDB",
        sskinnyPdp: "styles_sskinnyPdp__O_DEY",
        ss: "styles_ss__r1XvO",
        horizontalMargin: "styles_horizontalMargin__vQNtn",
        pubAdWrapper: "styles_pubAdWrapper__3dKoX",
        noCollapse: "styles_noCollapse__CRUd6",
        block0: "styles_block0__c2hZ_",
        slpespot: "styles_slpespot__Btkjq",
        btf: "styles_btf__zxe4Y",
        marginTop: "styles_marginTop__46DEO",
        "pubad-animate-in": "styles_pubad-animate-in__L2rfI",
        suppress: "styles_suppress__9bpN0",
      };
    },
    35244: (e, t, l) => {
      "use strict";
      l.d(t, { q: () => s });
      var n = l(57410),
        o = l(91996);
      class s {
        static createNewInstance() {
          let e = new s();
          return s.instances.push(e), e;
        }
        static isSlotReady(e) {
          return s.instances.some((t) => t.isSlotReady(e));
        }
        addEventListener(e, t) {
          (this.listeners[e] = t),
            s.registeredEvents.includes(e) ||
              (s.registeredEvents.push(e),
              (0, o.oV)("addEventListener", e, s.createGptEventHandler(e)));
        }
        addEventListeners(e) {
          Object.entries(e).forEach((e) => {
            let [t, l] = e;
            t && l && this.addEventListener(t, l);
          });
        }
        addSlot(e, t) {
          this.slots[e] = t;
        }
        isSlotReady(e) {
          return Object.keys(this.slots).includes(e);
        }
        clearListeners() {
          this.listeners = {};
        }
        clearSlots() {
          var e, t;
          null == (t = window.googletag) ||
            null == (e = t.cmd) ||
            e.push(() => {
              var e;
              null == (e = window.googletag) ||
                e.destroySlots(Object.values(this.slots));
            }),
            (this.slots = {});
        }
        unregister() {
          let e = s.instances.indexOf(this);
          -1 !== e && s.instances.splice(e, 1);
        }
        cleanup() {
          this.clearListeners(), this.clearSlots(), this.unregister();
        }
        constructor() {
          (this.listeners = {}), (this.slots = {});
        }
      }
      (s.instances = []),
        (s.registeredEvents = []),
        (s.createGptEventHandler = (e) => (t) => {
          s.instances.forEach((l) => {
            var o;
            (null != (o = l.listeners[e]) ? o : n)(t);
          });
        });
    },
    35886: (e, t, l) => {
      "use strict";
      l.d(t, {
        $2: () => y,
        Cc: () => _,
        H5: () => F,
        MH: () => G,
        PQ: () => D,
        Q8: () => b,
        Q9: () => R,
        RI: () => M,
        US: () => U,
        VB: () => f,
        W2: () => m,
        YN: () => x,
        ZE: () => w,
        ai: () => A,
        bL: () => C,
        c9: () => O,
        dl: () => u,
        du: () => p,
        gL: () => T,
        m1: () => k,
        qq: () => P,
        vl: () => v,
        wD: () => N,
        xp: () => E,
        y: () => H,
      });
      var n = l(95408),
        o = l(35501),
        s = l(14901);
      let a = "ADS_PERF_INSTRUMENTATION_ENABLED",
        i = "ADS_PERF_SOFT_ROUTE_INSTRUMENTATION_ENABLED",
        r = (e) => {
          var t, l, n, o;
          return null !=
            (o =
              null == e ||
              null == (n = e.slot) ||
              null == (l = n.getResponseInformation()) ||
              null == (t = l.creativeTemplateId)
                ? void 0
                : t.toString())
            ? o
            : "unknown";
        },
        d = (e) => {
          var t, l, n, o, s, a;
          return null !=
            (a =
              null !=
              (s =
                null == e ||
                null == (l = e.slot) ||
                null == (t = l.getTargeting("pos"))
                  ? void 0
                  : t.find((t) => t.includes(e.slot.getSlotElementId())))
                ? s
                : null == e ||
                  null == (o = e.slot) ||
                  null == (n = o.getTargeting("pos"))
                ? void 0
                : n[0])
            ? a
            : "unknown";
        },
        _ = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(i)) &&
            o.r.stop("ADS_PAGE_SOFT_ROUTE_TO_GAM_REQUEST");
        },
        v = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(i)) &&
            o.r.stop("ADS_PAGE_SOFT_ROUTE_TO_AD_DISPLAYED");
        },
        c = "ADS_GAM_RESPONSE_TIME",
        u = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start("".concat(c, ".").concat(d(e)));
        },
        E = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop("".concat(c, ".").concat(d(e)));
        },
        g = "ADS_GAM_RESPONSE_TO_AD_RENDERED",
        p = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start("".concat(g, ".").concat(d(e), ".").concat(r(e)));
        },
        M = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop("".concat(g, ".").concat(d(e), ".").concat(r(e)));
        },
        S = "ADS_GAM_RENDER_TIME",
        T = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start("".concat(S, ".").concat(d(e), ".").concat(r(e)));
        },
        A = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop("".concat(S, ".").concat(d(e), ".").concat(r(e)));
        },
        I = "ADS_GAM_RESPONSE_TO_AD_DISPLAYED",
        O = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start("".concat(I, ".").concat(d(e), ".").concat(r(e)));
        },
        m = (e) => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop("".concat(I, ".").concat(d(e), ".").concat(r(e)));
        },
        L = "USE_GPT_HOOK_TIME_TAKEN_FOR_DOUBLE_VERIFY_TO_LOAD_SIGNALS",
        y = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start(L);
        },
        D = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop(L);
        },
        h = "USE_GPT_HOOK_TIME_TAKEN_FOR_GPT_SCRIPT_READY_SINCE_USE_EFFECT",
        N = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start(h);
        },
        P = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop(h);
        },
        R = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "ADS_PAGE_START_TO_AD_DISPLAYED",
              "histogram_large"
            );
        },
        f = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "ADS_PAGE_START_TO_GAM_REQUEST",
              "histogram_large"
            );
        },
        w = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "USE_GPT_HOOK_DEFINE_SLOTS_TIME_SINCE_PAGE_LOAD",
              "histogram_large"
            );
        },
        k = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "USE_GPT_HOOK_DOUBLE_VERIFY_LOAD_TIME_TIME_SINCE_PAGE_LOAD",
              "histogram_large"
            );
        },
        b = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "USE_GPT_HOOK_GPT_SCRIPT_CMD_QUEUE_CALLBACK_READY_TIME_SINCE_PAGE_LOAD",
              "histogram_large"
            );
        },
        G = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "USE_GPT_HOOK_LOAD_TIME_SINCE_PAGE_LOAD",
              "histogram_large"
            );
        },
        C = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "USE_GPT_HOOK_AD_REFRESH_TIME_SINCE_PAGE_LOAD",
              "histogram_large"
            );
        },
        U = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            s.L.recordTimeSincePageLoad(
              "PUB_AD_COMPONENT_LOAD_TIME_SINCE_PAGELOAD",
              "histogram_large"
            );
        },
        B = "ADS_RADEUS_RESPONSE_TIME",
        x = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.start(B);
        },
        H = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.stop(B);
        },
        F = () => {
          (null === n.Mv || void 0 === n.Mv ? void 0 : (0, n.Mv)(a)) &&
            o.r.remove(B);
        };
    },
    42401: (e, t, l) => {
      "use strict";
      l.d(t, { f: () => k });
      var n = l(3576),
        o = l(65699),
        s = l(37876),
        a = l(42252),
        i = l(14232),
        r = l(57410),
        d = l(98601),
        _ = l(57684),
        v = l(35501),
        c = l(69507),
        u = l(19351),
        E = l(60823),
        g = l(90214),
        p = l(62701),
        M = l(94170),
        S = l(2919);
      function T(e) {
        var { children: t, waitFor: l } = e,
          a = (0, o._)(e, ["children", "waitFor"]);
        return (0, s.jsxs)("div", {
          className: S.trackingOverlayWrapper,
          children: [
            l &&
              (0, s.jsx)(
                M.F,
                (0, p._)((0, n._)({}, a), {
                  children: (0, s.jsx)("div", { className: S.trackingOverlay }),
                })
              ),
            (0, s.jsx)(s.Fragment, { children: t }),
          ],
        });
      }
      T.displayName = "TrackInteractionsWithOverlay";
      var A = l(38810),
        I = l(55873),
        O = l(72396),
        m = l(40196),
        L = l(95408),
        y = l(94259),
        D = l(15039),
        h = l(41622),
        N = l(68444),
        P = l(35244),
        R = l(35886),
        f = l(91996),
        w = l(30305);
      let k = (0, c.h)({ action: N.P })((e) => {
        var {
            adName: t,
            assumeAdFilled: l = !0,
            componentId: c,
            isSkinny: p = !1,
            isTrafficAwareEnabled: M,
            noCollapse: S = !1,
            showSponsored: N = !1,
            showSponsoredBorder: k = !1,
            onSlotRenderEnded: b,
            onReady: G = r,
            onBaseboardAdReady: C = r,
          } = e,
          U = (0, o._)(e, [
            "adName",
            "assumeAdFilled",
            "componentId",
            "isSkinny",
            "isTrafficAwareEnabled",
            "noCollapse",
            "showSponsored",
            "showSponsoredBorder",
            "onSlotRenderEnded",
            "onReady",
            "onBaseboardAdReady",
          ]);
        let { isBot: B } = (0, i.useContext)(y.B.Context),
          [x, H] = (0, i.useState)(!1),
          [F, j] = (0, i.useState)(!1),
          [Y, K] = (0, i.useState)(l),
          [V, W] = (0, i.useState)(!1),
          [q, Q] = (0, i.useState)(!1),
          [z, X] = (0, i.useState)(),
          [$, J] = (0, i.useState)(),
          [Z, ee] = (0, i.useState)(),
          [et, el] = (0, i.useState)(),
          [en, eo] = (0, i.useState)(),
          [es, ea] = (0, i.useState)(!B && ["rightcol"].includes(t)),
          [ei, er] = (0, i.useState)(!1),
          ed = !ei && N && (Y || S),
          { trackEvent: e_ } = (0, u.z1)(),
          { trackClick: ev } = (0, E.f)(),
          { asPath: ec } = (0, a.rd)(),
          eu = (0, m.Hq)(ec),
          eE = ["block0", "slpespot", "ss"].includes(t),
          eg = (0, I.b)(),
          ep = "pdp" === eu && "sskinny" === t && !M,
          eM = (0, i.useCallback)(
            (e) =>
              (null != e ? e : (0, L.Mv)("PDP_HIGHLIGHT_AD_VARIANT_ENABLED")) &&
              ep,
            [ep]
          ),
          { checkIsExperimentEnabledAndTrackFireflyEvent: eS } = (0, O.G)(
            "PDP_HIGHLIGHT_AD_VARIANT_ENABLED",
            {
              checkIsExperimentEnabledWithCustomConditions: eM,
              variantFactor: "PDP_HIGHLIGHT_AD_VARIANT",
            }
          );
        eS();
        let eT = (0, i.useCallback)(
            (e) => {
              var l, n, o;
              if (
                (null == e || null == (l = e.slot)
                  ? void 0
                  : l.getSlotElementId()) === t
              ) {
                K(!e.isEmpty),
                  null == b || b(!e.isEmpty),
                  X(
                    null !=
                      (o = e.slot
                        .getTargeting("as")
                        .find((t) => t.includes(e.slot.getSlotElementId())))
                      ? o
                      : null == (n = e.slot.getTargeting("as"))
                      ? void 0
                      : n[0]
                  ),
                  ee(e.creativeId),
                  J(e.lineItemId),
                  j(!0),
                  el(e.campaignId),
                  eo((0, f.mT)(e.size));
                let l = "loaded";
                e.isEmpty
                  ? (l = "empty")
                  : e.isBackfill
                  ? (l = "backfill")
                  : 0x1731d2e === e.advertiserId && (l = "house"),
                  v.r.info("", {
                    action: "adslotrenderended_".concat(l),
                    attributes: {
                      "tgt.custom.text.1": t,
                      "tgt.custom.text.2": eu,
                    },
                    module: "DISPLAY_AD_LOADING",
                  });
              }
            },
            [t, b, eu]
          ),
          eA = (0, i.useCallback)(
            (e) => {
              var l;
              (null == e || null == (l = e.slot)
                ? void 0
                : l.getSlotElementId()) === t && (Q(!0), "ss" === t && C(!0));
            },
            [t, C]
          ),
          { googleAdTrackServedDisplayImpression: eI } = (0, g.fe)(),
          eO = (0, i.useCallback)(
            function () {
              var e, l, o, s, a;
              let i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "CONTENT",
                r = arguments.length > 1 ? arguments[1] : void 0;
              ev.track(
                (0, n._)(
                  {
                    featureType: "GAM",
                    gam: (0, n._)(
                      {
                        ad_pos: t,
                        ad_slot: null != z ? z : "",
                        creative_id:
                          null != (s = null == Z ? void 0 : Z.toString())
                            ? s
                            : "",
                        line_item_id:
                          null != (a = null == $ ? void 0 : $.toString())
                            ? a
                            : "",
                      },
                      c && { component_id: c }
                    ),
                    clickType: i,
                  },
                  "PRODUCT" === i &&
                    (null == r || null == (e = r.data) ? void 0 : e.index) !==
                      void 0 && {
                      element: {
                        id:
                          String(
                            null == r || null == (l = r.data) ? void 0 : l.tcin
                          ) || "",
                        position: Number(
                          null == r || null == (o = r.data) ? void 0 : o.index
                        ),
                        type: "TCIN",
                        sponsored: !0,
                      },
                    }
                )
              );
            },
            [ev, t, c, Z, $, z]
          ),
          em = (0, i.useCallback)(
            (e) => {
              eO("PRODUCT", e);
            },
            [eO]
          ),
          eL = (0, i.useCallback)(() => {
            eO();
          }, [eO]),
          ey = (0, i.useCallback)(function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "default";
            "premiumCarousel" === e && er(!0);
          }, []),
          eD = (0, i.useCallback)(
            (e) => {
              let { origin: t, data: l } = e,
                { lineItemID: n, type: o, template: s } = l;
              if (
                ((null == t
                  ? void 0
                  : t.endsWith("safeframe.googlesyndication.com")) ||
                  (null == t ? void 0 : t.endsWith("target.com"))) &&
                (null == n
                  ? void 0
                  : n
                      .toString()
                      .endsWith(
                        "l"
                          .concat(null == $ ? void 0 : $.toString(), "c")
                          .concat(null == Z ? void 0 : Z.toString())
                      ))
              )
                switch (o) {
                  case "load":
                    ey(s);
                    break;
                  case "productTileClick":
                    em(e);
                    break;
                  case "mainContentClick":
                    eL();
                    break;
                  default:
                    eO();
                }
            },
            [Z, $, ey, eL, em, eO]
          );
        (0, i.useEffect)(
          () => (
            F && window.addEventListener("message", eD),
            () => {
              window.removeEventListener("message", eD);
            }
          ),
          [F, eD]
        ),
          (0, i.useEffect)(() => {
            if (x) {
              var e, l, n;
              (window.googletag =
                null != (n = window.googletag) ? n : { cmd: [] }),
                null == (l = window.googletag) ||
                  null == (e = l.cmd) ||
                  e.push(() => {
                    var e, l, n, o, s, a, i, r;
                    null == (l = window.googletag) ||
                      null == (e = l.pubads) ||
                      e.call(l).addEventListener("slotOnload", eA),
                      null == (o = window.googletag) ||
                        null == (n = o.pubads) ||
                        n.call(o).addEventListener("slotRenderEnded", eT),
                      (0, L.Mv)(
                        "GLOBAL_DOUBLE_VERIFY_UNITY_INTEGRATION_ENABLED"
                      )
                        ? ((window.onDvtagReady =
                            window.onDvtagReady || void 0),
                          null == (s = (a = window).onDvtagReady) ||
                            s.call(a, () => {
                              var e, l;
                              null == (l = window.googletag) ||
                                null == (e = l.display) ||
                                e.call(l, t);
                            }))
                        : null == (r = window.googletag) ||
                          null == (i = r.display) ||
                          i.call(r, t);
                  });
            }
          }, [t, eA, eT, x]),
          (0, i.useEffect)(() => {
            (0, R.US)();
          }, []),
          (0, i.useEffect)(() => {
            (null === L.Mv || void 0 === L.Mv
              ? void 0
              : (0, L.Mv)("GLOBAL_DOUBLE_VERIFY_UNITY_INTEGRATION_ENABLED")) &&
              "function" == typeof window.onDvtagReady &&
              window.onDvtagReady(() => {
                W(!0);
              });
          }, []),
          (0, _.$)(
            () => {
              var e, l, n, o;
              (null == (e = window.googletag) ? void 0 : e.apiReady) &&
                (null == (l = window.googletag) ? void 0 : l.pubadsReady) &&
                P.q.isSlotReady(t) &&
                ((((null === L.Mv || void 0 === L.Mv
                  ? void 0
                  : (0, L.Mv)("GLOBAL_DOUBLE_VERIFY_INTEGRATION_ENABLED")) &&
                  !(null == (o = window) || null == (n = o.PQ)
                    ? void 0
                    : n.loaded)) ||
                  ((null === L.Mv || void 0 === L.Mv
                    ? void 0
                    : (0, L.Mv)(
                        "GLOBAL_DOUBLE_VERIFY_UNITY_INTEGRATION_ENABLED"
                      )) &&
                    V &&
                    !Y)) &&
                  K(!1),
                H(!0),
                G(!0));
            },
            x ? null : 10
          ),
          (0, i.useEffect)(() => {
            Z &&
              $ &&
              et &&
              en &&
              (eI.track({
                gam: [
                  {
                    ad_pos: t,
                    ad_slot: z,
                    component_id: c,
                    creative_id: null == Z ? void 0 : Z.toString(),
                    line_item_id: null == $ ? void 0 : $.toString(),
                  },
                ],
              }),
              e_({
                adImpressions: [
                  {
                    creativeId: null == Z ? void 0 : Z.toString(),
                    lineItemId: null == $ ? void 0 : $.toString(),
                    orderId: null == et ? void 0 : et.toString(),
                    slotSize: en,
                    sponsor: { name: "google" },
                  },
                ],
                guest: { eventType: "adimp" },
              }));
          }, [t, c, Z, eI, $, et, z, en, e_]),
          (0, i.useEffect)(() => {
            let e = setInterval(() => {
              !q && es && ea(!1);
            }, 15e3);
            return () => {
              clearInterval(e);
            };
          }, [q, es]);
        let eh = ((e, t) => {
            switch (e) {
              case "block0":
                return "block0";
              case "rightcol":
                return "rightcol";
              case "slpespot":
                return "slpespot";
              case "sskinny":
                return "pdp" === t ? "sskinnyPdp" : "sskinny";
              case "ss":
                return "ss";
              default:
                if (/^btf(-\d+)?$/.test(e) && "storeDetails" === t)
                  return "btf";
                return null;
            }
          })(t, eu),
          eN = ((e, t) => {
            switch (e) {
              case "rightcol":
                return "rightcol";
              case "sskinny":
                return "pdp" === t ? "sskinnyPdp" : "sskinny";
              case "ss":
                return "ss";
              default:
                return null;
            }
          })(t, eu);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: D(
                w.pubAdWrapper,
                Y && w.filled,
                "pdp" === eu && p && w.marginTop,
                S && w.noCollapse,
                eE && "pubad-animate-in",
                eh && w[eh]
              ),
              children: [
                (0, s.jsx)(T, {
                  creativeId: Z,
                  index: void 0,
                  sourceId: t,
                  sponsorName: "google",
                  useTrackers: A.k,
                  waitFor: F,
                  children: (0, s.jsx)(
                    "div",
                    (0, n._)({ "data-test": t, id: t }, U)
                  ),
                }),
                !q && es
                  ? (0, s.jsx)(h.O, {
                      className: D(
                        w.adPlaceholder,
                        Y && w.filled,
                        "pdp" === eu && p && w.horizontalMargin,
                        eN && w[eN]
                      ),
                      fillColor: d.Tj.palette.gray.light,
                      isAnimated: !0,
                    })
                  : null,
              ],
            }),
            ed &&
              p &&
              (0, s.jsx)("p", {
                className: D(
                  w.skinnyAdSponsoredLogo,
                  ep &&
                    "sskinny" === t &&
                    (null == eg ? void 0 : eg.PDP_HIGHLIGHT_AD_VARIANT) ===
                      "v1_below_atc" &&
                    w.belowAddToCart,
                  Y && x && q && w.visible,
                  "pdp" === eu && w.pdp,
                  k && w.topBorder
                ),
                "data-test": "sponsored-text",
                children: "Sponsored",
              }),
            ed &&
              !p &&
              (0, s.jsx)("p", {
                className: D(w.sponsoredLogo, Y && x && q && w.visible),
                "data-test": "sponsored-text",
                children: "Sponsored",
              }),
          ],
        });
      });
      k.displayName = "PubAd";
    },
    55873: (e, t, l) => {
      "use strict";
      l.d(t, { b: () => s });
      var n = l(14232),
        o = l(29072);
      let s = () => {
        var e;
        let t = (0, n.useContext)(o.q);
        return null != (e = null == t ? void 0 : t.variants) ? e : {};
      };
    },
    68444: (e, t, l) => {
      "use strict";
      l.d(t, { P: () => n });
      let n = "error_boundary_ad_critical_error";
    },
    69507: (e, t, l) => {
      "use strict";
      l.d(t, { h: () => i });
      var n = l(3576),
        o = l(37876),
        s = l(29953),
        a = l(93967);
      function i(e) {
        let { action: t, module: l, fallback: i, logLevel: r = "error" } = e;
        return (e) => {
          let d = (s) =>
            (0, o.jsx)(a.H, {
              action: t,
              fallback: i,
              logLevel: r,
              module: l,
              children: (0, o.jsx)(e, (0, n._)({}, s)),
            });
          return (
            (d.displayName = (0, s.M)(e, "withMonitoringErrorBoundary")), d
          );
        };
      }
    },
  },
]);
