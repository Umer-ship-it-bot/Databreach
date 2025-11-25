"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8639],
  {
    19434: (e, l, t) => {
      t.d(l, { _: () => u });
      var n = t(14232),
        r = t(29072),
        i = t(95408),
        o = t(22928),
        a = t(67396);
      function u(e, l) {
        var t, u;
        let d,
          s = (0, i.Mv)(o.MN),
          { checkIsExperimentEnabledWithCustomConditions: c } = l || {},
          v = (0, n.useContext)(r.q),
          _ = (null != (u = null == v ? void 0 : v.flags) ? u : {})[e],
          E =
            null == v || null == (t = v.instance)
              ? void 0
              : t.getExperimentByFlag(e),
          f = null == c ? void 0 : c(_);
        c && (d = !!f != !!c(!_)),
          (0, n.useEffect)(() => {
            if (s || !E || void 0 === _) return;
            let e = _;
            c && (e = c(_));
            let l = _ && e,
              t = !1 === _ && d;
            (!c || l || t) &&
              E.forEach((e) => {
                let l = e.tid;
                l &&
                  (function (e) {
                    var l;
                    if ((0, i.Mv)(o.MN) || (0, i.Mv)(o.Dm) || !e) return;
                    let t =
                      (null == (l = window.tgt) ? void 0 : l.bt) || (0, a.EP)();
                    if (!t) return;
                    let n = t.exposedExperiments || [];
                    n.includes(e) ||
                      (0, a.R_)({ exposedExperiments: [...n, e] });
                  })(l);
              });
          }, [v, e, c, E, _, d, s]);
      }
    },
    21249: (e, l, t) => {
      t.d(l, { J: () => r });
      var n = t(95408);
      let r = (e) => {
        var l, t;
        if (!(0, n.Mv)("FASTLY_CACHE_CONTROL_DISABLED")) return;
        let { idToken: r } =
          null != (t = null == (l = e.req) ? void 0 : l.cookies) ? t : {};
        return !r;
      };
    },
    36290: (e, l, t) => {
      t.d(l, { b: () => r });
      var n = t(95408);
      let r = (e) => {
        var l, t, r;
        if (
          !(0, n.Mv)("FASTLY_CACHE_CONTROL_DISABLED") ||
          !(null == e || null == (l = e.req)
            ? void 0
            : l.headers["x-tgt-edge-auth"])
        )
          return;
        let { idToken: i } =
            null != (r = null == (t = e.req) ? void 0 : t.cookies) ? r : {},
          o = ((e) => {
            if (!e) return;
            let l = ((e) => {
              let l =
                null == e ? void 0 : e.replace(/-/g, "+").replace("_", "/");
              switch (l && l.length % 4) {
                case 0:
                  break;
                case 2:
                  l += "==";
                  break;
                case 3:
                  l += "=";
                  break;
                default:
                  return;
              }
              return ((e) => {
                if (e)
                  return decodeURIComponent(
                    atob(e).replace(/(.)/g, (e, l) => {
                      let t = l.charCodeAt(0).toString(16).toUpperCase();
                      return t.length < 2 && (t = "0" + t), "%" + t;
                    })
                  );
              })(l);
            })(e.split(".")[1]);
            if (l) {
              var t;
              return null != (t = JSON.parse(l)) ? t : void 0;
            }
          })(i);
        return (null == o ? void 0 : o.sut) === "G";
      };
    },
    41112: (e, l, t) => {
      t.d(l, { s: () => a });
      var n = t(35501),
        r = t(47158),
        i = t(72396),
        o = t(14232);
      let a = (e) => {
        let { pageKey: l, type: t } = e,
          { flagValue: a } = (0, i.G)(
            "SET_LOCATION_COOKIES_FOR_ANONYMOUS_ESTIMATE_GUESTS_ENABLED"
          ),
          { flagValue: u } = (0, i.G)(
            "SET_LOCATION_COOKIES_FOR_ANONYMOUS_ESTIMATE_GUESTS_PHASE_3_ENABLED"
          ),
          d = a || u;
        return (0, o.useCallback)(() => {
          if (performance.getEntriesByName("start-soft-route", "mark").length) {
            var e, i, o;
            performance.mark("end-".concat(l, ".").concat(t));
            let a =
              null == (o = performance) ||
              null == (i = o.measure) ||
              null ==
                (e = i.call(
                  o,
                  "".concat(l, ".").concat(t),
                  "start-soft-route",
                  "end-".concat(l, ".").concat(t)
                ))
                ? void 0
                : e.duration;
            void 0 !== a && n.r.recordMetrics(new r.A("soft.".concat(t), a)),
              void 0 !== d &&
                n.r.recordMetrics(
                  new r.A(
                    "soft"
                      .concat(
                        d
                          ? "-refresh-in-server-set-cookie-variation"
                          : "-refresh-in-server-set-cookie-control",
                        "."
                      )
                      .concat(t),
                    a
                  )
                );
          } else {
            let e = performance.now();
            n.r.recordMetrics(new r.A("hard.".concat(t), e)),
              void 0 !== d &&
                n.r.recordMetrics(
                  new r.A(
                    "hard"
                      .concat(
                        d
                          ? "-refresh-in-server-set-cookie-variation"
                          : "-refresh-in-server-set-cookie-control",
                        "."
                      )
                      .concat(t),
                    e
                  )
                );
          }
        }, [d, l, t]);
      };
    },
    62737: (e, l, t) => {
      t.d(l, { Y: () => u });
      var n = t(14232),
        r = t(95408),
        i = t(42252),
        o = t(73880),
        a = t(40196);
      let u = (e) => {
        let l = (0, r.Mv)(
            "TRACKING_PERFORMANCE_SLI_AND_LOCAL_USE_PREVIOUS_ENABLED"
          ),
          { asPath: t } = (0, i.rd)(),
          u = (0, o.Z)(t),
          d = ((e) => {
            let l = (0, n.useRef)(e);
            return (
              (0, n.useEffect)(() => {
                l.current = e;
              }, [e]),
              l.current
            );
          })(t),
          s = l ? d : u;
        (0, n.useEffect)(() => {
          let l = (0, a.Hq)(t),
            n = s ? (0, a.Hq)(s) : void 0;
          (n && l !== n) || e();
        }, [e, t, s]);
      };
    },
    79462: (e, l, t) => {
      t.d(l, { Y: () => u, j: () => d });
      var n = t(32381),
        r = t(72396),
        i = t(9894),
        o = t(14232),
        a = t(19434);
      let u =
          "SET_LOCATION_COOKIES_FOR_ANONYMOUS_ESTIMATE_GUESTS_PHASE_3_ENABLED",
        d = () => {
          var e;
          let l = !(0, n.Y)(),
            { onboardingGuest: t } = null != (e = (0, i.OR)()) ? e : {},
            d = !!t,
            s = (0, o.useCallback)((e) => !!(l && d && e), [l, d]),
            { checkIsExperimentEnabledAndTrackFireflyEvent: c } = (0, r.G)(u, {
              checkIsExperimentEnabledWithCustomConditions: s,
            });
          return (
            (0, a._)(u, { checkIsExperimentEnabledWithCustomConditions: s }),
            (0, o.useEffect)(() => {
              c();
            }, [c]),
            null
          );
        };
      d.displayName = "TrackSetLocationCookiesForAnonymousGuestExperiment";
    },
    81147: (e, l, t) => {
      t.d(l, { M: () => L });
      var n = t(95408),
        r = t(3422),
        i = t(97239),
        o = t(3576),
        a = t(18293),
        u = t(27123),
        d = t(4042),
        s = t(20172),
        c = t(99107),
        v = t(46196),
        _ = t(44239),
        E = t.n(_),
        f = t(35501),
        p = t(78737);
      let C = async (e) => {
        var l, t, r, i, _, C, m, A, O, S, N, g, h, I, L, y, T, M, R;
        let D,
          k,
          {
            GuestLocation: b,
            UserLocation: B,
            fiatsCookie: w,
          } = null != (h = null == (l = e.req) ? void 0 : l.cookies) ? h : {},
          { "x-tgt-req-charcs": z } =
            null != (I = null == (t = e.req) ? void 0 : t.headers) ? I : {},
          x =
            null ==
            (r = (function (e) {
              let l = Array.isArray(e) ? e.join(";") : e,
                t = {};
              return (
                l &&
                  l.split(";").reduce((e, l) => {
                    let [t = "", n = ""] = l.split("=");
                    return (e[t.trim()] = n.trim()), e;
                  }, t),
                t
              );
            })(null != z ? z : null))
              ? void 0
              : r["client-location"],
          F = (0, n.Mv)(
            "SERVER_LOCATION_FOR_ANONYMOUS_ESTIMATE_USE_FIATS_COOKIE_ENABLED"
          ),
          q = !!w,
          G = !!(null == (i = e.res) ? void 0 : i.visitorId),
          U = !!(null == (_ = e.res) ? void 0 : _.memberId),
          V = F ? (0, a.u3)(w) : void 0,
          Y = (0, a.CE)(B),
          j = (0, a.CE)(b),
          H = (0, a.CE)(x),
          {
            zipCode: K,
            latitude: Q,
            longitude: W,
            state: P,
            country: J,
          } = null != (y = null != (L = null != Y ? Y : j) ? L : H) ? y : {};
        for (let [e, l] of Object.entries({
          hasGuestLocationCookie: !!b,
          hasUserLocationCookie: !!B,
          hasFiatsCookie: q,
          hasVisitorId: G,
          hasMemberId: U,
        }))
          f.r.recordMetrics(
            new p.j("server-anonymous-estimate.".concat(e, ".").concat(l))
          );
        let $ = null != (T = null == V ? void 0 : V.zipCode) ? T : K;
        if ($)
          try {
            let l = await e.preloadInitialQuery(c.j6, { limit: 5, place: $ });
            (D = (0, v.Ot)(null == l ? void 0 : l.data)),
              (k =
                null != (M = (0, v.ym)(null == l ? void 0 : l.data)) ? M : []);
          } catch (e) {}
        let Z = E()([
            null == V ? void 0 : V.id,
            ...(null != k ? k : []),
          ]).filter((e) => (0, s.v)(e)),
          X = V
            ? (0, o._)({}, V)
            : {
                id:
                  null == D || null == (m = D[0]) || null == (C = m.store_id)
                    ? void 0
                    : C.toString(),
                storeName:
                  null == D || null == (A = D[0]) ? void 0 : A.location_name,
                zipCode:
                  null == D ||
                  null == (g = D[0]) ||
                  null == (N = g.mailing_address) ||
                  null == (S = N.postal_code) ||
                  null == (O = S.match(/\d{5}/))
                    ? void 0
                    : O[0],
              },
          ee = {
            zipCode: null != K ? K : u.Di.zipCode,
            latitude: null != Q ? Q : u.Di.latitude,
            longitude: null != W ? W : u.Di.longitude,
            state: null != P ? P : u.Di.state,
            country: null != J ? J : u.Di.country,
          },
          el = Z.length > 0 ? Z.join(",") : void 0;
        return {
          zipCode: ee.zipCode,
          store_id: null != (R = null == Z ? void 0 : Z[0]) ? R : d.Vz,
          store_ids: Z.join(",") || d.Vz,
          primaryStore: X,
          backupStoreIds: el,
          location: ee,
        };
      };
      var m = t(21249),
        A = t(41371),
        O = t(987),
        S = t(87347),
        N = t(34627),
        g = t(80558);
      let h = async (e) => {
        var l, t, i, o, a, u, d, _, f, p, m, h, I, L;
        let y,
          T,
          M,
          R,
          D =
            null == (l = (0, r.xs)(null == e ? void 0 : e.query, "sid"))
              ? void 0
              : l.replace(/s/gi, ""),
          k =
            null == (t = (0, r.xs)(null == e ? void 0 : e.query, "gStoreCode"))
              ? void 0
              : t.replace(/s/gi, ""),
          b =
            null == (i = (0, r.xs)(null == e ? void 0 : e.query, "region_id"))
              ? void 0
              : i.slice(0, 6);
        if (b)
          try {
            let l = await e.preloadInitialQuery(A.z, { region_id: b }),
              t =
                null == l || null == (a = l.data) || null == (o = a.ope_region)
                  ? void 0
                  : o.store;
            t &&
              (y = {
                id: null == t ? void 0 : t.store_id,
                storeName: null == t ? void 0 : t.location_name,
                zipCode:
                  null == l ||
                  null == (d = l.data) ||
                  null == (u = d.ope_region)
                    ? void 0
                    : u.zip_code,
              });
          } catch (e) {}
        let B =
          null != (f = null != (_ = null == y ? void 0 : y.id) ? _ : D)
            ? f
            : (0, n.Mv)("GSTORECODE_ENABLED")
            ? k
            : void 0;
        if (B)
          try {
            let l = await e.preloadInitialQuery(O.sQ, { store_id: B });
            T = {
              id: (0, S.Cd)(null == l ? void 0 : l.data),
              storeName: (0, S.QJ)(null == l ? void 0 : l.data),
              zipCode: (0, S.L_)(null == l ? void 0 : l.data),
            };
          } catch (e) {}
        if (null == T ? void 0 : T.zipCode)
          try {
            let l = await e.preloadInitialQuery(N.f, {
              place: null == T ? void 0 : T.zipCode,
            });
            M = {
              zipCode:
                null == (p = (0, g.bo)(null == l ? void 0 : l.data))
                  ? void 0
                  : p.slice(0, 5),
              latitude:
                null == (m = (0, g.N$)(null == l ? void 0 : l.data))
                  ? void 0
                  : m.toString(),
              longitude:
                null == (h = (0, g.u4)(null == l ? void 0 : l.data))
                  ? void 0
                  : h.toString(),
              state: (0, g.gf)(null == l ? void 0 : l.data),
              country: (0, g.cs)(null == l ? void 0 : l.data),
            };
          } catch (e) {}
        if (null == M ? void 0 : M.zipCode)
          try {
            let l = await e.preloadInitialQuery(c.j6, {
              limit: 5,
              place: null == M ? void 0 : M.zipCode,
            });
            R = null != (I = (0, v.ym)(null == l ? void 0 : l.data)) ? I : [];
          } catch (e) {}
        if (
          ((e) =>
            !!(
              (null == e ? void 0 : e.zipCode) &&
              (null == e ? void 0 : e.latitude) &&
              (null == e ? void 0 : e.longitude) &&
              (null == e ? void 0 : e.state) &&
              (null == e ? void 0 : e.country)
            ))(M) &&
          ((e) =>
            !!(
              (null == e ? void 0 : e.id) &&
              (null == e ? void 0 : e.storeName) &&
              (null == e ? void 0 : e.zipCode)
            ))(T)
        ) {
          let e = E()([
              null == T ? void 0 : T.id,
              ...(null != R ? R : []),
            ]).filter((e) => (0, s.v)(e)),
            l = e.length > 0 ? e.join(",") : void 0;
          return {
            zipCode: M.zipCode,
            store_id: null != (L = T.id) ? L : "",
            store_ids: null != l ? l : "",
            primaryStore: T,
            backupStoreIds: l,
            location: M,
          };
        }
        return C(e);
      };
      var I = t(36290);
      let L = async (e) => {
        var l, t, o, a, u, d, s;
        let c;
        if (
          !(0, n.Mv)("FASTLY_CACHE_CONTROL_DISABLED") ||
          (0, n.Mv)("SERVER_LOCATION_VARIABLES_KILLSWITCH")
        )
          return;
        let v =
          null == e || null == (t = e.res) || null == (l = t.injectedVariables)
            ? void 0
            : l.get("serverLocationVariables");
        if (v) return v;
        let _ = (0, m.J)(e),
          E = (0, I.b)(e) || _,
          f = (0, i.qe)(null == (o = e.res) ? void 0 : o.sapphire, {
            experimentFlag: "SERVER_LOCATION_FROM_QUERY_STRING_ENABLED",
            featureFlag: "SERVER_LOCATION_FROM_QUERY_STRING_ENABLED",
          }),
          p = !!(0, r.xs)(null == e ? void 0 : e.query, "sid"),
          A =
            (0, n.Mv)("GSTORECODE_ENABLED") &&
            !!(0, r.xs)(null == e ? void 0 : e.query, "gStoreCode"),
          O = !!(0, r.xs)(null == e ? void 0 : e.query, "region_id");
        return E && f && (p || A || O)
          ? ((c = await h(e)) &&
              (null == e ||
                null == (u = e.res) ||
                null == (a = u.injectedVariables) ||
                a.set("serverLocationVariables", c)),
            c)
          : E
          ? ((c = await C(e)) &&
              (null == e ||
                null == (s = e.res) ||
                null == (d = s.injectedVariables) ||
                d.set("serverLocationVariables", c)),
            c)
          : void 0;
      };
    },
    88368: (e, l, t) => {
      t.d(l, { q: () => o });
      var n = t(95408),
        r = t(22928),
        i = t(67396);
      function o(e) {
        if ((0, n.Mv)(r.Ss) || (0, n.Mv)(r.Dm) || !e) return;
        let l = (() => {
          if (
            "undefined" == typeof performance ||
            "function" != typeof performance.getEntriesByName
          )
            return;
          let e = performance.getEntriesByName("start-soft-route", "mark");
          if (e.length) {
            var l, t;
            let n =
              null != (t = null == (l = e.at(-1)) ? void 0 : l.startTime)
                ? t
                : 0;
            return { type: "soft", ms: Math.round(performance.now() - n) };
          }
          return { type: "hard", ms: Math.round(performance.now()) };
        })();
        if (l) {
          if ("hard" === l.type) {
            let t = "hard_".concat(e);
            (0, i.K_)(t, l.ms);
          } else {
            let t = "soft_".concat(e);
            (0, i.K_)(t, l.ms);
          }
          (0, i.K_)(e, l.ms);
        }
      }
    },
    98697: (e, l, t) => {
      t.d(l, { F: () => p });
      var n = t(53441),
        r = t(95408),
        i = t(18293),
        o = t(27602),
        a = t(97239),
        u = t(79462),
        d = t(81147);
      let s = (e) =>
          encodeURIComponent(e).replaceAll(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          ),
        c = (e, l) => {
          var t, n;
          if (0 === l.length) return;
          let r =
              null == e || null == (t = e.res)
                ? void 0
                : t.getHeader("Set-Cookie"),
            i = [];
          Array.isArray(r) ? (i = r) : r && i.push("".concat(r));
          let o = [...i, ...l];
          null == e || null == (n = e.res) || n.setHeader("Set-Cookie", o);
        };
      var v = t(3576),
        _ = t(35501),
        E = t(78737);
      let f = {
          domain: ".target.com",
          path: "/",
          sameSite: "lax",
          secure: !0,
          encode: s,
        },
        p = async (e) => {
          var l, t, p, C, m;
          let A =
              null == (t = e.res) || null == (l = t.cdnMetadata)
                ? void 0
                : l.isBot,
            O = (0, r.Mv)("FASTLY_CACHE_CONTROL_DISABLED"),
            S = (0, r.Mv)(
              "SERVER_LOCATION_VARIABLES_AND_SET_LOCATION_COOKIES_KILLSWITCH"
            );
          if (!O || S || A) return;
          let { fiatsCookie: N, sddStore: g } =
              null != (m = null == (p = e.req) ? void 0 : p.cookies) ? m : {},
            h = [],
            I = (0, a.qe)(null == (C = e.res) ? void 0 : C.sapphire, {
              experimentFlag: u.Y,
              featureFlag: u.Y,
            });
          ((e) => {
            var l, t;
            let i = (0, r.Mv)("SET_ONBOARDING_GUEST_COOKIE_ENABLED"),
              {
                fiatsCookie: o,
                sddStore: a,
                onboardingGuest: u,
              } = null != (t = null == (l = e.req) ? void 0 : l.cookies)
                ? t
                : {};
            if (i && !o && !a && !u) {
              let l = Date.now(),
                t = (0, v._)({}, f);
              return (
                c(e, [
                  (0, n.serialize)(
                    "onboardingGuest",
                    "timestamp=".concat(l),
                    t
                  ),
                ]),
                _.r.recordMetrics(
                  new E.j("server-anonymous-estimate.onboardingGuest.true")
                )
              );
            }
            return _.r.recordMetrics(
              new E.j("server-anonymous-estimate.onboardingGuest.false")
            );
          })(e);
          let L = await (0, d.M)(e),
            { primaryStore: y } = null != L ? L : {};
          if (!y) return L;
          if (I && !N) {
            let { id: e, storeName: l, zipCode: t } = null != y ? y : {},
              r = !e || !l || !t,
              a = (0, i.$7)({ id: e, storeName: l, zipCode: t }),
              u = "".concat(a, "|server");
            if (u && !r) {
              let e = (0, n.serialize)(o.NU, u, {
                domain: ".target.com",
                path: "/",
                sameSite: "lax",
                secure: !0,
                encode: s,
              });
              h.push(e);
            }
          }
          if (I && !g) {
            let { id: e, storeName: l, zipCode: t } = null != y ? y : {},
              r = !e || !l || !t,
              a = (0, i.$7)({ id: e, storeName: l, zipCode: t }),
              u = "".concat(a, "|server");
            if (u && !r) {
              let e = (0, n.serialize)(o.WW, u, {
                domain: ".target.com",
                path: "/",
                encode: s,
              });
              h.push(e);
            }
          }
          return c(e, h), L;
        };
    },
  },
]);
