(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6974],
  {
    13367: (e) => {
      e.exports = { article: "KnowledgeDrawerContent_article__m1Kjz" };
    },
    36218: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => a });
      var l = t(90506);
      function a(e) {
        return (0, l.w)(e, Date.now());
      }
    },
    58275: (e) => {
      e.exports = { modal: "styles_modal__VOw0j" };
    },
    68243: (e, n, t) => {
      "use strict";
      t.d(n, {
        GO: () => o,
        PD: () => i,
        Pz: () => s,
        Qu: () => l,
        Sx: () => r,
        f4: () => a,
      });
      let l = "IN_STORES_ONLY",
        a = "ONLINE_ONLY",
        i = "IN_STORES_AND_ONLINE",
        r = "DATE",
        s = "DATETIME",
        o = "NONE";
    },
    77359: (e, n, t) => {
      "use strict";
      t.d(n, { Y: () => p });
      var l = t(3576),
        a = t(62701),
        i = t(37876),
        r = t(48847),
        s = t(55777),
        o = t(14232),
        c = t(19427),
        g = t(17379),
        u = t(20881),
        d = t(70418);
      let m = "@web/domain-knowledge/get-knowledge-article",
        { useQuery: v } = (0, g.T)({
          name: m,
          keyFn: (e) => {
            let { id: n } = e;
            if (!n) throw Error("Requires an article id");
            return [m, { id: n }];
          },
          queryFn: async (e, n) => {
            let {
                apiKey: t,
                apis: { knowledgeArticlesV1: l },
              } = (0, c.$)().services.apiPlatform,
              a = t || (null == n ? void 0 : n.apiKey),
              { id: i } = null != e ? e : {};
            if (!a) throw Error("Missing knowledge_article V1 apiKey.");
            let r = d.o.buildURLWithParams(
                "".concat(l.endpointPaths.knowledgeArticles, "/").concat(i),
                {},
                l.baseUrl
              ),
              {
                data: s,
                ok: o,
                statusText: g,
              } = await (0, u.Jt)(r, { headers: { "x-api-key": a } });
            if (o) return null != s ? s : null;
            throw Error("".concat(g));
          },
        }),
        h = (e) => {
          var n;
          return (null != (n = null == e ? void 0 : e.contents) ? n : [])[0];
        },
        w = (e) => (null == e ? void 0 : e.title);
      var I = t(42773),
        T = t(75570),
        f = t(88686),
        D = t(13367);
      let _ = (e) => {
        var n;
        let {
            articleId: t,
            headingText: l,
            setArticleTitle: a,
            shouldUseArticleTitleAsHeadingText: r,
          } = e,
          s = "https://www.target.com/help/article/".concat(t),
          [c, { isError: g }] = v({ id: t }),
          u = c(w),
          d = null == (n = c(h)) ? void 0 : n.content;
        return ((0, o.useEffect)(() => {
          u && a(u);
        }, [u, a]),
        g)
          ? (0, i.jsxs)("div", {
              children: [
                (0, i.jsx)(I.D, { level: 3, children: "Something went wrong" }),
                (0, i.jsxs)("p", {
                  children: [
                    "Please visit our help center for",
                    " ",
                    (0, i.jsxs)(T.N, {
                      href: s,
                      rel: "noopener noreferrer",
                      target: "_blank",
                      children: [
                        (null == u ? void 0 : u.toLowerCase()) ||
                          (null == l ? void 0 : l.toLowerCase()),
                        ".",
                      ],
                    }),
                    " ",
                  ],
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                u && !r ? (0, i.jsx)(I.D, { level: 3, children: u }) : null,
                (0, i.jsx)("div", {
                  className: D.article,
                  children: d ? (0, f.V)(d) : null,
                }),
              ],
            });
      };
      _.displayName = "KnowledgeDrawerContent";
      var O = t(58275);
      let p = (e) => {
        let {
            articleId: n,
            dataTestId: t,
            handleOpenChange: c,
            headingText: g,
            isOpen: u,
            pageIdKey: d,
            shouldUseArticleTitleAsHeadingText: m,
          } = e,
          [v, h] = (0, o.useState)(g),
          w = (0, o.useCallback)(
            (e) =>
              (0, i.jsx)(
                r.E,
                (0, a._)((0, l._)({}, e), { children: m ? v : g })
              ),
            [g, v, m]
          );
        return (0, i.jsx)(s.a, {
          className: O.modal,
          "data-test": t,
          isOpen: u,
          onOpenChange: c,
          pageIdKey: d,
          renderHeading: w,
          type: "drawer-right",
          children: (0, i.jsx)(_, {
            articleId: n,
            headingText: g,
            setArticleTitle: h,
            shouldUseArticleTitleAsHeadingText: m,
          }),
        });
      };
      p.displayName = "KnowledgeDrawer";
    },
    88686: (e, n, t) => {
      "use strict";
      t.d(n, { V: () => i });
      var l = t(3576),
        a = t(37876);
      let i = function (e) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "div",
          t = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0;
        return (0, a.jsx)(
          n,
          (0, l._)({ className: t, dangerouslySetInnerHTML: { __html: e } }, i)
        );
      };
    },
    93460: (e, n, t) => {
      "use strict";
      t.d(n, { v: () => D, d: () => K });
      var l = t(3576),
        a = t(26728),
        i = t(90506),
        r = t(36218),
        s = t(51246),
        o = t(73208),
        c = t(951),
        g = t(46355),
        u = t(32038),
        d = t(18551),
        m = t(50301),
        v = t(95408),
        h = t(68243),
        w = t(71178),
        I = t(13393);
      let T = (e, n, t, l) => {
          var a;
          let {
            day: i,
            longMonth: r,
            shortMonth: s,
            time: o,
            timezone: c,
            year: g,
          } = null != (a = (0, w.N3)(e)) ? a : {};
          return n === h.Sx
            ? "starting "
                .concat(s, " ")
                .concat(i)
                .concat(t ? ", ".concat(g) : "")
            : n === h.Pz
            ? "starting "
                .concat(s, " ")
                .concat(i)
                .concat(t ? ", ".concat(g) : "", " at ")
                .concat(o, " ")
                .concat(c)
            : "";
        },
        f = (e) => {
          if (!e) return !1;
          let n = "string" == typeof e ? new Date(e) : e;
          return (
            +(0, a.a)(n) > Date.now() &&
            !(function (e, n) {
              return (function (e, n, t) {
                let [l, a] = (0, s.x)(void 0, e, n);
                return l.getFullYear() === a.getFullYear();
              })((0, i.w)(e, e), (0, r.A)(e));
            })(n)
          );
        },
        D = (e) => {
          let {
            eventSellingIntent: n,
            inStoreStartDateTime: t,
            inStoreStartDateTimeFormat: l,
            onlineStartDateTime: a,
            onlineStartDateTimeFormat: i,
          } = e;
          switch (n) {
            case h.Qu:
              return _(t, l);
            case h.f4:
              return O(a, i);
            case h.PD:
              return p(t, l, a, i);
            default:
              return {};
          }
        },
        _ = (e, n) =>
          n === h.GO
            ? {
                sellingIntentFulfillmentMessaging: "Coming soon in stores",
                sellingIntentDateTimeMessaging: "",
              }
            : {
                sellingIntentFulfillmentMessaging: "In stores only",
                sellingIntentDateTimeMessaging: T(e, n, f(e)),
              },
        O = (e, n) =>
          n === h.GO
            ? {
                sellingIntentFulfillmentMessaging: "Coming soon online",
                sellingIntentDateTimeMessaging: "",
              }
            : {
                sellingIntentFulfillmentMessaging: "Online only",
                sellingIntentDateTimeMessaging: T(e, n, f(e)),
              },
        p = (e, n, t, l) =>
          n === h.GO && l === h.GO
            ? {
                sellingIntentFulfillmentMessaging:
                  "Coming soon online and in stores",
                sellingIntentDateTimeMessaging: "",
              }
            : {
                sellingIntentOnlineAndInStores: {
                  isOnlineAndInStores: !0,
                  fulfillmentInStoresMessaging: "In stores",
                  fulfillmentOnlineMessaging: "Online",
                  dateTimeInStoresMessaging:
                    n === h.GO ? "coming soon" : T(e, n, f(e)),
                  dateTimeOnlineMessaging:
                    l === h.GO ? "coming soon" : T(t, l, f(t)),
                },
              },
        K = () => {
          var e, n;
          let [t] = (0, d.RJ)(),
            a = t(m.Cv),
            i = (0, o.K1)(c.f2),
            r = (0, o.K1)(c.aR),
            s = (0, o.K1)(c.fW),
            h = (0, o.K1)(c.J9),
            T = (0, o.K1)(c._8),
            _ = (0, o.K1)(g.Cr),
            O = (0, o.K1)(g.FK),
            p = (0, o.K1)(g.YM),
            K = (0, o.K1)(g.ev),
            N = (0, o.K1)(g.H1),
            S = (0, o.K1)(u.iz),
            M = (0, v.Mv)("GLOBAL_DIGITAL_ACTIVATION_ENABLED") && S,
            x = (0, o.K1)(u.iW),
            E = (0, I.eU)().availableToPurchaseDate
              ? new Date(
                  "".concat((0, I.eU)().availableToPurchaseDate, "T00:00:00")
                )
              : x,
            y = (0, o.K1)(u.Id),
            A = (0, I.eU)().availableToPurchaseDate
              ? new Date(
                  "".concat((0, I.eU)().availableToPurchaseDate, "T00:00:00")
                )
              : y,
            C = a && (0, w.P9)(A),
            P = (0, o.K1)(u.TI),
            j = (0, o.K1)(u.gI),
            F = C ? A : E,
            {
              day: k,
              longMonth: L,
              time: b,
              timezone: G,
              year: U,
            } = null != (e = (0, w.N3)(F)) ? e : {},
            R =
              j && (0, w.P9)(F)
                ? ": "
                    .concat(L, " ")
                    .concat(k)
                    .concat(f(F) ? ", ".concat(U) : "")
                    .trim()
                : "",
            Y =
              R && !M && P
                ? "Starting online at ".concat(b, " ").concat(G)
                : "";
          return i || _ || O
            ? (0, l._)(
                {},
                D({
                  eventSellingIntent:
                    null != (n = null == i ? void 0 : i.event_selling_intent)
                      ? n
                      : p,
                  inStoreStartDateTime: null != r ? r : K,
                  inStoreStartDateTimeFormat: null != s ? s : N,
                  onlineStartDateTime: null != h ? h : K,
                  onlineStartDateTimeFormat: null != T ? T : N,
                })
              )
            : {
                comingSoonDateMessaging: "Coming soon".concat(R),
                comingSoonTimeMessaging: Y,
              };
        };
    },
  },
]);
