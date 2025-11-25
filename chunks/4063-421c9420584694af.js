(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4063],
  {
    4063: (e, t, n) => {
      "use strict";
      let l;
      n.d(t, { x: () => H });
      var r = n(3576),
        o = n(62701),
        a = n(14232),
        i = n(35419),
        s = n(5623),
        u = n(2795),
        d = n(57684),
        c = n(65473),
        _ = n(90214),
        g = n(89514),
        v = n(95408),
        p = n(58117),
        f = n(42252),
        E = n(22602),
        y = n(72396),
        h = n(55873),
        m = n(57086),
        w = n(19427),
        b = n(70418),
        S = n(20881),
        A = n(45983);
      let { useMutation: R } = (0, m.k)({
          name: "@web/domain-radeus/radeus-ads",
          mutationFn: async (e) => {
            let {
                apis: {
                  radeus_ads: {
                    endpointPaths: { radeusDisplayBannerV2: t },
                  },
                },
                apiKey: n,
                baseUrl: l,
              } = (0, w.$)().services.apiPlatform,
              r = b.o.buildURLWithParams("".concat(l).concat(t), { key: n }),
              {
                data: o,
                ok: a,
                status: i,
                statusText: s,
              } = await (0, S.bE)(r, {
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: null == e ? void 0 : e.body,
              });
            if (a) return o;
            throw Error("".concat(i, "-").concat(s));
          },
        }),
        D = (0, A.U)(R, { allowAnonymous: !0 });
      var L = n(36093),
        I = n(40196),
        N = n(35501),
        T = n(35244),
        O = n(91996);
      let U = {
          randomUUID:
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        P = new Uint8Array(16),
        B = [];
      for (let e = 0; e < 256; ++e) B.push((e + 256).toString(16).slice(1));
      var M = n(9301),
        k = n(53724),
        C = n(12430),
        V = n(99397);
      let x = function () {
        var e;
        let {
            slotName: t,
            slots: n,
            targeting: r,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          { registryModeStatusFromCookie: o, isInRegistryMode: i } = (0,
          L.Tl)(),
          {
            country: d,
            state: c,
            zipCode: _,
          } = null != (e = (0, C.bq)()) ? e : {},
          { asPath: v } = (0, f.rd)(),
          E = (0, I.Hq)(v),
          { pathname: y } = new b.o(v),
          h = (0, a.useMemo)(() => window.location.href, [v]),
          m = (0, a.useMemo)(
            () =>
              (null == r ? void 0 : r.n_cat)
                ? r.n_cat.toString()
                : "/" === y
                ? "homepage"
                : E === k.Dn || E === k.De
                ? ""
                : (0, I.rv)(v),
            [v, E, y, null == r ? void 0 : r.n_cat]
          ),
          w =
            (i && "category" === E) ||
            (null == m ? void 0 : m.startsWith("registry")),
          S = !!p.Lr.getSync(V.Mf),
          A = !!p.Lr.isExpiredSync(V.Mf),
          R = (0, a.useMemo)(() => {
            let e = (e) => ({
                pos: e,
                sizes: ["fluid"],
                templates: (0, O.gY)(e),
                as: w
                  ? "registry".concat(e)
                  : "pdp" === E
                  ? "productdetails".concat(e)
                  : "".concat(E).concat(e),
              }),
              l = (e) =>
                w
                  ? !(S && "ss" === e && !A)
                  : "sskinny" === e || "rightcol" === e;
            return n
              ? n.filter((e) => l(e.adName)).map((t) => e(t.adName))
              : t && l(t)
              ? [e(t)]
              : [];
          }, [n, t, E, w, S, A]),
          D = (0, a.useMemo)(() => {
            var e;
            let t = null == n || null == (e = n[0]) ? void 0 : e.adUnitPath;
            if (t) return t.slice(t.indexOf("tgt"));
          }, [n]);
        return (0, a.useMemo)(() => {
          var e, t, n, a, i;
          return {
            au: D,
            device_type: (0, M.RX)(),
            n_cat: m,
            platform: "web",
            pt: (null == r ? void 0 : r.pt) || E,
            registry_type:
              null != (n = null == r ? void 0 : r.registrytype) ? n : o,
            request_id: U.randomUUID
              ? U.randomUUID()
              : (function (e, t, n) {
                  var r, o, a;
                  let i =
                    null !=
                    (a =
                      null != (o = (e = e || {}).random)
                        ? o
                        : null == (r = e.rng)
                        ? void 0
                        : r.call(e))
                      ? a
                      : (function () {
                          if (!l) {
                            if (
                              "undefined" == typeof crypto ||
                              !crypto.getRandomValues
                            )
                              throw Error(
                                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                              );
                            l = crypto.getRandomValues.bind(crypto);
                          }
                          return l(P);
                        })();
                  if (i.length < 16)
                    throw Error("Random bytes length must be >= 16");
                  if (
                    ((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)
                  ) {
                    if ((n = n || 0) < 0 || n + 16 > t.length)
                      throw RangeError(
                        "UUID byte range "
                          .concat(n, ":")
                          .concat(n + 15, " is out of buffer bounds")
                      );
                    for (let e = 0; e < 16; ++e) t[n + e] = i[e];
                    return t;
                  }
                  return (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    return (
                      B[e[t + 0]] +
                      B[e[t + 1]] +
                      B[e[t + 2]] +
                      B[e[t + 3]] +
                      "-" +
                      B[e[t + 4]] +
                      B[e[t + 5]] +
                      "-" +
                      B[e[t + 6]] +
                      B[e[t + 7]] +
                      "-" +
                      B[e[t + 8]] +
                      B[e[t + 9]] +
                      "-" +
                      B[e[t + 10]] +
                      B[e[t + 11]] +
                      B[e[t + 12]] +
                      B[e[t + 13]] +
                      B[e[t + 14]] +
                      B[e[t + 15]]
                    ).toLowerCase();
                  })(i);
                })(a, i, void 0),
            slots: R,
            privacy_controls: {
              do_not_sell: null == (e = (0, s.km)()) ? void 0 : e.optOutSale,
              targeted_advertising_opt_out:
                null == (t = (0, u.lt)())
                  ? void 0
                  : t.optOutTargetedAdvertising,
            },
            url: h,
            user_country: d,
            user_state: c,
            user_zipcode: _,
            visitor_id: (null == r ? void 0 : r.fly) || (0, g.j)(),
          };
        }, [
          D,
          m,
          E,
          null == r ? void 0 : r.pt,
          null == r ? void 0 : r.registrytype,
          null == r ? void 0 : r.fly,
          o,
          R,
          d,
          c,
          _,
          h,
        ]);
      };
      var G = n(35886);
      let q = !1,
        F = () => {
          q = !1;
        },
        H = (e) => {
          var t, n, l;
          let {
              deferAdLoading: m,
              onScriptLoaded: w,
              slotOnload: b,
              slotRenderEnded: S,
              slotRequested: A,
              slotResponseReceived: R,
              slotVisibilityChanged: U,
              impressionViewable: P,
              collapseEmptyDivs: B = !0,
              collapseBeforeAdFetch: M = !1,
              enableSingleRequest: k = !1,
              enableVideoAds: C = !1,
              enableLazyLoad: H = !1,
              lazyLoadConfig: j = {
                fetchMarginPercent: 500,
                renderMarginPercent: 200,
                mobileScaling: 2,
              },
              disableInitialLoad: Y = !1,
              setRequestNonPersonalizedAds: Q = !1,
              privacySettings: z = { restrictDataProcessing: !1 },
              location: W,
              slots: $ = [],
              targeting: X,
            } = null != e ? e : {},
            Z = (0, a.useRef)(!1),
            J = (0, a.useRef)([""]),
            K = (0, f.rd)(),
            ee = (0, I.Hq)(K.asPath),
            { isInRegistryMode: et } = (0, L.Tl)(),
            en =
              null !=
              (l = null == X || null == (t = X.n_cat) ? void 0 : t.toString())
                ? l
                : "",
            el = (et && "category" === ee) || en.startsWith("registry"),
            er = "pdp" === ee,
            { googleAdTrackServedDisplayImpression: eo } = (0, _.fe)(),
            ea = (0, a.useCallback)(
              (e) => (null != e ? e : (0, v.Mv)("RADEUS_ADS_ENABLED")) && el,
              [el]
            ),
            ei = (0, a.useCallback)(
              (e) =>
                (null != e
                  ? e
                  : (0, v.Mv)("RADEUS_M1_5_PDP_HIGHLIGHT_SLOTS_ENABLED")) && er,
              [er]
            ),
            { checkIsExperimentEnabledAndTrackFireflyEvent: es } = (0, y.G)(
              "RADEUS_M1_REGISTRY_SLOTS_ENABLED",
              { checkIsExperimentEnabledWithCustomConditions: ea }
            ),
            { checkIsExperimentEnabledAndTrackFireflyEvent: eu } = (0, y.G)(
              "RADEUS_M1_5_PDP_HIGHLIGHT_SLOTS_ENABLED",
              { checkIsExperimentEnabledWithCustomConditions: ei }
            ),
            [ed, { data: ec, isError: e_, isSuccess: eg, error: ev }] = D(),
            ep = x({ slots: $, targeting: X }),
            { EXP_BASEBOARD_AD_VARIANT: ef } = (0, h.b)(),
            { checkIsVariantActiveAndTrackFireflyEvent: eE } = (0, y.G)(
              "EXP_BASEBOARD_AD_VARIANT_ENABLED",
              { variantFactor: "EXP_BASEBOARD_AD_VARIANT" }
            ),
            ey = (0, a.useCallback)(() => {
              switch (ef) {
                case "control":
                case "v1_15_4":
                  return 9e5;
                case "v2_30_6":
                case "v3_30_4":
                  return 18e5;
                case "v4_10_6":
                default:
                  return 6e5;
                case "v5_5_6":
                  return 3e5;
              }
            }, [ef]),
            [eh, em] = (0, a.useState)(
              null == (n = window.googletag) ? void 0 : n.apiReady
            );
          (0, d.$)(
            () => {
              var e;
              (null == (e = window.googletag) ? void 0 : e.apiReady) && em(!0);
            },
            eh ? null : 10
          );
          let ew = (0, a.useRef)(void 0),
            eb = i(() => {
              (0, O.oV)("refresh");
            }),
            eS = i(() => {
              var e;
              (es() || eu()) &&
                (null == ep || null == (e = ep.slots) ? void 0 : e.length) >
                  0 &&
                ((0, G.YN)(), ed({ body: JSON.stringify(ep) }));
            }),
            eA = (0, a.useCallback)(
              (e) => {
                (0, G.RI)(e), (0, G.ai)(e), null == S || S(e);
                let { slot: t } = e;
                if ("ss" === t.getSlotElementId()) {
                  let e = ey();
                  p.Lr.set(V.Mf, "true", { expiry: Date.now() + e }),
                    ef && eE(ef.toString());
                }
              },
              [S, ey, eE, ef]
            ),
            eR = (0, a.useCallback)(
              (e) => {
                (0, G.VB)(),
                  (0, G.Cc)(),
                  (0, G.dl)(e),
                  (0, G.gL)(e),
                  null == A || A(e);
              },
              [A]
            ),
            eD = (0, a.useCallback)(
              (e) => {
                (0, G.xp)(e), (0, G.c9)(e), (0, G.du)(e), null == R || R(e);
              },
              [R]
            ),
            eL = (0, a.useCallback)(
              (e) => {
                (0, G.Q9)(), (0, G.vl)(), (0, G.W2)(e), null == b || b(e);
              },
              [b]
            );
          return (
            (0, a.useEffect)(() => {
              (window.googletag = window.googletag || { cmd: [] }),
                (0, G.wD)(),
                window.googletag.cmd.push(() => {
                  (0, G.Q8)();
                });
            }, []),
            (0, E.h)(() => {
              K.isAppRouter &&
                eh &&
                !m &&
                $.length > 0 &&
                (F(), (Z.current = !1));
            }, [eh, m, $.length]),
            (0, a.useEffect)(() => {
              if (
                (es() || eu()) &&
                (e_ &&
                  ev &&
                  ((0, G.H5)(),
                  N.r.error("RADEUS_ADS_FETCH_ERROR", {
                    action: "radeus_ads_fetch_error",
                    error: ev,
                  })),
                eg && ec) &&
                ((0, G.y)(), !Z.current)
              ) {
                var e, t;
                Z.current = !0;
                let n =
                  null == ec || null == (e = ec.slots)
                    ? void 0
                    : e.filter((e) => {
                        var t;
                        return !J.current.includes(
                          null != (t = null == e ? void 0 : e.slot_response_id)
                            ? t
                            : ""
                        );
                      });
                null == (t = ec.slots) ||
                  t.forEach((e) => {
                    var t, n;
                    J.current.includes(
                      null != (t = null == e ? void 0 : e.slot_response_id)
                        ? t
                        : ""
                    ) ||
                      J.current.push(
                        null != (n = null == e ? void 0 : e.slot_response_id)
                          ? n
                          : ""
                      );
                  }),
                  n &&
                    (null == n ? void 0 : n.length) > 0 &&
                    eo.track({
                      radeus:
                        null == n
                          ? void 0
                          : n.map((e) => {
                              var t, n, l, r;
                              return {
                                adgroup_id:
                                  null == e || null == (t = e.adgroup_id)
                                    ? void 0
                                    : t.toString(),
                                campaign_id:
                                  null == e || null == (n = e.campaign_id)
                                    ? void 0
                                    : n.toString(),
                                creative_id:
                                  null == e || null == (l = e.creative_id)
                                    ? void 0
                                    : l.toString(),
                                environment_type: "OFFLINE_EVAL",
                                slot_response_id:
                                  null == e || null == (r = e.slot_response_id)
                                    ? void 0
                                    : r.toString(),
                              };
                            }),
                    });
              }
            }, [ec, e_, ev, eg, es, eu, eo]),
            (0, c.U)(() => {
              if (((0, G.MH)(), eh && !m && $.length > 0)) {
                var e, t, n, l, a, i, d, c, _, f, E, y;
                (0, G.qq)(),
                  K.isAppRouter ||
                    (K.events.on("routeChangeStart", F),
                    K.events.on("routeChangeStart", () => {
                      Z.current = !1;
                    })),
                  (ew.current = T.q.createNewInstance());
                let h = p.Lr.getSync(V.Mf),
                  m = p.Lr.isExpiredSync(V.Mf);
                w && w(),
                  k && (0, O.oV)("enableSingleRequest"),
                  (Y ||
                    (0, v.Mv)("GLOBAL_DOUBLE_VERIFY_INTEGRATION_ENABLED") ||
                    (0, v.Mv)(
                      "GLOBAL_DOUBLE_VERIFY_UNITY_INTEGRATION_ENABLED"
                    )) &&
                    (0, O.oV)("disableInitialLoad"),
                  B && (0, O.oV)("collapseEmptyDivs", M),
                  H && !B && (0, O.oV)("enableLazyLoad", j);
                let b = (0, o._)((0, r._)({}, z), {
                  restrictDataProcessing:
                    (null == (e = (0, s.km)()) ? void 0 : e.optOutSale) ||
                    (0, u.lt)().optOutTargetedAdvertising,
                });
                (0, O.oV)("setPrivacySettings", b),
                  b.restrictDataProcessing || Q
                    ? (0, O.oV)("setRequestNonPersonalizedAds", 1)
                    : W && (0, O.oV)("setLocation", W),
                  X &&
                    Object.entries(X).forEach((e) => {
                      let [t, n] = e;
                      (0, O.oV)("setTargeting", t, n);
                    }),
                  C && (0, O.oV)("enableVideoAds"),
                  null == (t = ew.current) ||
                    t.addEventListeners({
                      slotOnload: eL,
                      slotRenderEnded: eA,
                      slotRequested: eR,
                      slotResponseReceived: eD,
                      slotVisibilityChanged: U,
                      impressionViewable: P,
                    }),
                  $.filter((e) => !(h && "ss" === e.adName && !m)).forEach(
                    (e) => {
                      var t, n;
                      let {
                          adUnitPath: l,
                          sizeMapping: r,
                          adName: o,
                          targeting: a,
                        } = e,
                        { slotSizeArray: i, sizeMappingArray: s } = (0, O.YE)(
                          r
                        );
                      null == (n = window.googletag) ||
                        null == (t = n.cmd) ||
                        t.push(() => {
                          var e, t, n, r;
                          let u =
                            null == (e = window.googletag)
                              ? void 0
                              : e.defineSlot(l, i, o);
                          null == (t = ew.current) || t.addSlot(o, u),
                            u
                              .defineSizeMapping(s)
                              .addService(
                                null == (r = window.googletag) ||
                                  null == (n = r.pubads)
                                  ? void 0
                                  : n.call(r)
                              ),
                            a && u.updateTargetingFromMap(a);
                        });
                    }
                  ),
                  null == (d = window) ||
                    null == (i = d.googletag) ||
                    null == (a = i.pubads) ||
                    null == (l = a.call(i)) ||
                    null == (n = l.setPublisherProvidedId) ||
                    n.call(l, (0, g.j)()),
                  null == (f = window.googletag) ||
                    null == (_ = f.cmd) ||
                    _.push(null == (c = googletag) ? void 0 : c.enableServices),
                  (0, G.ZE)(),
                  (0, v.Mv)("GLOBAL_DOUBLE_VERIFY_UNITY_INTEGRATION_ENABLED")
                    ? ((0, G.m1)(),
                      (0, G.$2)(),
                      q || ((0, G.PQ)(), (0, G.bL)(), (q = !0)),
                      (window.onDvtagReady = window.onDvtagReady || void 0),
                      null == (E = (y = window).onDvtagReady) ||
                        E.call(y, () => {
                          eb(), eS();
                        }))
                    : (0, v.Mv)("GLOBAL_DOUBLE_VERIFY_INTEGRATION_ENABLED")
                    ? ((window.PQ = window.PQ || { cmd: [] }),
                      (0, G.m1)(),
                      (0, G.$2)(),
                      window.PQ.cmd.push(function () {
                        window.PQ.loadSignals(
                          ["ids", "bsc", "vlp", "tvp"],
                          function () {
                            q || ((0, G.PQ)(), (0, G.bL)(), (q = !0)),
                              eb(),
                              eS();
                          }
                        );
                      }))
                    : eS();
              }
              return () => {
                var e;
                null == (e = ew.current) || e.cleanup(),
                  (ew.current = void 0),
                  K.isAppRouter ||
                    (K.events.off("routeChangeStart", F),
                    K.events.off("routeChangeStart", () => {
                      Z.current = !1;
                    }));
              };
            }, [m, eh]),
            [window.googletag, ew]
          );
        };
    },
    35419: (e, t, n) => {
      var l = n(72093);
      e.exports = function (e) {
        return l(2, e);
      };
    },
    35461: (e) => {
      e.exports = {
        pubAdDivContainer: "styles_pubAdDivContainer__cjcx8",
        "baseboard-fade": "styles_baseboard-fade__DpIEn",
        transition: "styles_transition__q0Oeq",
      };
    },
    72093: (e, t, n) => {
      var l = n(13051);
      e.exports = function (e, t) {
        var n;
        if ("function" != typeof t) throw TypeError("Expected a function");
        return (
          (e = l(e)),
          function () {
            return (
              --e > 0 && (n = t.apply(this, arguments)),
              e <= 1 && (t = void 0),
              n
            );
          }
        );
      };
    },
    99397: (e, t, n) => {
      "use strict";
      n.d(t, { Mf: () => _, ZE: () => g });
      var l = n(37876),
        r = n(14232),
        o = n(58117),
        a = n(69507),
        i = n(55873),
        s = n(15039),
        u = n(35461),
        d = n(42401),
        c = n(68444);
      let _ = "baseBoardShown",
        g = (0, a.h)({ action: c.P })(() => {
          let [e, t] = (0, r.useState)(!1),
            [n, a] = (0, r.useState)(!0),
            [c, g] = (0, r.useState)(!1),
            [v, p] = (0, r.useState)(!0),
            { EXP_BASEBOARD_AD_VARIANT: f } = (0, i.b)(),
            E = (0, r.useCallback)(() => {
              switch (f) {
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
            }, [f]);
          return ((0, r.useEffect)(() => {
            let e = o.Lr.getSync(_);
            (o.Lr.isExpiredSync(_) || !e) && a(!1);
          }, []),
          (0, r.useEffect)(() => {
            if (!e) return;
            let t = E(),
              n = setTimeout(() => {
                g(!0);
              }, t),
              l = setTimeout(() => {
                p(!1), g(!1);
              }, t + 2e3);
            return () => {
              clearTimeout(n), clearTimeout(l);
            };
          }, [e, E]),
          n)
            ? null
            : (0, l.jsx)("div", {
                className: s(
                  "h-bg-white",
                  "h-padding-h-default",
                  u.pubAdDivContainer,
                  c && u.transition,
                  v && "h-position-fixed-bottom",
                  !e && "h-display-none"
                ),
                "data-test": "@web/baseboardAd",
                children: (0, l.jsx)("div", {
                  className: "l-container l-container-fixed",
                  children: (0, l.jsx)(d.f, {
                    adName: "ss",
                    onBaseboardAdReady: t,
                    showSponsored: !0,
                  }),
                }),
              });
        });
      g.displayName = "BaseboardAd";
    },
  },
]);
