"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7020],
  {
    2053: (e, t, a) => {
      a.d(t, { HX: () => n, ex: () => r, vZ: () => i });
      let i = (e) => (null == e ? void 0 : e.partner),
        r = (e) => {
          var t;
          return null == e || null == (t = e.partner) ? void 0 : t.content;
        },
        n = (e) => {
          var t;
          return null == (t = i(e)) ? void 0 : t.facet_id;
        };
    },
    8007: (e, t, a) => {
      a.d(t, {
        Wz: () => d,
        hV: () => o,
        qf: () => n,
        qx: () => s,
        zs: () => l,
      });
      var i = a(1881),
        r = a(1022);
      let n = (e, t) => {
          var a;
          return (
            !!(0, r.UD)(e) &&
            (t === i.zI ||
              (null == (a = null != e ? e : "") ? void 0 : a.indexOf(i.Iu)) >=
                0)
          );
        },
        o = (e) => {
          var t, a;
          return ["DMC", "DMR"].includes(
            null != (t = null == e ? void 0 : e.channel) ? t : ""
          )
            ? null == e || null == (a = e.channel)
              ? void 0
              : a.toLowerCase()
            : (null == e ? void 0 : e.personalized)
            ? "circle_segmented"
            : "circle_mass";
        },
        l = (e) =>
          (null == e ? void 0 : e.circle_offer)
            ? (null == e ? void 0 : e.mass_offer)
              ? "circle_mass"
              : "circle_segmented"
            : "mass",
        s = (e) => {
          var t;
          return null == e || null == (t = e.message) ? void 0 : t.subtitle;
        },
        d = (e) =>
          ""
            .concat(
              (null == e ? void 0 : e.pdp_message_prefix)
                ? "".concat(null == e ? void 0 : e.pdp_message_prefix, ": ")
                : ""
            )
            .concat(null == e ? void 0 : e.pdp_message);
    },
    16839: (e, t, a) => {
      a.d(t, { a: () => d });
      var i = a(17379),
        r = a(53842),
        n = a(70418),
        o = a(19427),
        l = a(61870);
      let s = "@web/domain/partner-content-v1",
        { useQuery: d } = (0, i.T)({
          name: s,
          keyFn: (e) => {
            if (void 0 === e.partner_id)
              throw TypeError("partner_id is required");
            return [s, e];
          },
          queryFn: async (e) => {
            var t, a;
            let { partner_id: i } = null != e ? e : "",
              {
                apiKey: s,
                baseUrl: d,
                apis: { product: c },
              } = (0, o.$)().services.redskyAggregations;
            if (!(null == (t = c.endpointPaths) ? void 0 : t.partnerContentV1))
              throw Error("path not defined for partner_content_v1 query");
            let m = n.o.buildURLWithParams(
                c.endpointPaths.partnerContentV1,
                { key: s, partner_id: i },
                d
              ),
              {
                data: g,
                ok: p,
                statusText: _,
              } = await (0, r.n)(m, {
                partialErrorTag:
                  l.O0.REDSKY_AGGREGATIONS_PARTNER_CONTENT_PARTIAL_API_ERROR,
              });
            if (p) return null != (a = null == g ? void 0 : g.data) ? a : null;
            throw Error("".concat(_));
          },
        });
    },
    20859: (e, t, a) => {
      a.d(t, { e: () => y });
      var i = a(37876),
        r = a(77328),
        n = a.n(r),
        o = a(14232),
        l = a(95408),
        s = a(31294),
        d = a(44145),
        c = a(58886),
        m = a(73208),
        g = a(29733),
        p = a(42252),
        _ = a(40196),
        u = a(3422),
        h = a(1800),
        f = a(72396),
        w = a(70418),
        b = a(80663),
        v = a(13967),
        T = a(1022);
      let S = ": Target",
        E = (e, t) =>
          t && e
            ? e.includes(S)
              ? e.replace(S, ": Page ".concat(t, " : Target"))
              : "".concat(e, " : Page ").concat(t)
            : null;
      function y(e) {
        var t, a;
        let { paginationParamValue: r, pageSize: S, getPageNodePath: y } = e,
          { asPath: k, query: G } = (0, p.rd)(),
          A = (0, T.B5)(k),
          x = (0, T.mf)(k),
          q = "pdp" === (0, _.Hq)(k),
          j = (0, s.W)(y),
          P = (0, c.K)(),
          U = j(d.SB),
          R = (0, l.Mv)("IMAGE_FROM_PRISM_RELAY_ENABLED") && q,
          [C] = (0, b.RN)({ path: k }, { enabled: R }),
          N = C((e) => e),
          D = null != N ? N : null == U ? void 0 : U.image,
          I = j(d.vx),
          O = j(d.T2),
          L = "rdihz",
          B = (0, m.EJ)((0, g.oF)([L])),
          M = q ? B : j((0, d.Uw)([L])),
          z = (0, l.Mv)("DLP_METADATA_FROM_PRISM_RELAY_ENABLED") && A,
          F = (0, u.Rj)(G),
          [V] = (0, b.dx)({ keyword: F }, { enabled: z }),
          W = V(b.wg),
          H = V(b.SV),
          K = z && W ? W : null == I ? void 0 : I.seo_title,
          Y = z && H ? H : null == I ? void 0 : I.seo_description,
          Z = "https://www.target.com".concat(
            (null == I ? void 0 : I.canonical_url)
              ? I.canonical_url + (r && "0" !== r && !A ? "?Nao=" + r : "")
              : "/"
          ),
          $ = r ? Number.parseInt(r, 10) : null,
          Q =
            $ && !Number.isNaN($) && $ >= 0 && S ? Math.floor($ / S + 1) : null,
          X = E(K, Q),
          J = E(null == U ? void 0 : U.title, Q),
          ee = E(null == O ? void 0 : O.title, Q),
          et =
            (0, l.Mv)("NO_INDEX_RULE_ON_ADDITIONAL_PAGES_ENABLED") &&
            (M || A || x) &&
            "number" == typeof Q &&
            Q > 1,
          ea = (0, o.useMemo)(
            () =>
              (0, v.ls)(k)
                ? "noindex, nofollow"
                : P || et
                ? "noindex, follow"
                : (null == I ? void 0 : I.robots)
                ? I.robots
                : "noindex",
            [P, k, null == I ? void 0 : I.robots, et]
          ),
          { checkIsExperimentEnabledAndTrackFireflyEvent: ei } = (0, f.G)(
            "TAGGING_ON_STOF_SAFARI_BANNER_ENABLED"
          ),
          er =
            null != (t = ei())
              ? t
              : (0, l.Mv)("TAGGING_ON_STOF_SAFARI_BANNER_ENABLED"),
          { checkIsExperimentEnabledAndTrackFireflyEvent: en } = (0, f.G)(
            "SIMPLE_TAGGING_ON_STOF_SAFARI_BANNER_ENABLED"
          ),
          eo =
            null != (a = en())
              ? a
              : (0, l.Mv)("SIMPLE_TAGGING_ON_STOF_SAFARI_BANNER_ENABLED"),
          el = (0, o.useMemo)(() => {
            let e = "297430070";
            if (eo)
              return "app-id=297430070, affiliate-data=pt=126136&ct=stof_banner_2509&mt=8";
            if (er) {
              let t = new w.o(k);
              return (
                t.setQuery({ source: "stof_banner" }),
                [
                  "app-id=".concat(e),
                  "affiliate-data=".concat("pt=126136&ct=stof_banner&mt=8"),
                  "app-argument=".concat(t.makeAbsolute().toString()),
                ].join(", ")
              );
            }
            return "app-id=".concat(e);
          }, [eo, er, k]);
        return (0, i.jsxs)(n(), {
          children: [
            (0, i.jsx)("title", {
              children: K
                ? (0, h.D4)(null != X ? X : K)
                : "Target : Expect More. Pay Less.",
            }),
            (0, i.jsx)("link", { href: Z, rel: "canonical" }),
            (0, i.jsx)("meta", { content: (0, h.D4)(Y), name: "description" }),
            (0, i.jsx)("meta", {
              content: (0, h.D4)(null == I ? void 0 : I.seo_keywords),
              name: "keywords",
            }),
            (0, i.jsx)("meta", { content: ea, name: "robots" }),
            (null == U ? void 0 : U.title) &&
              (0, i.jsx)("meta", {
                content: (0, h.D4)(null != J ? J : U.title),
                property: "og:title",
              }),
            (null == U ? void 0 : U.description) &&
              (0, i.jsx)("meta", {
                content: (0, h.D4)(U.description),
                property: "og:description",
              }),
            D && (0, i.jsx)("meta", { content: D, property: "og:image" }),
            (null == U ? void 0 : U.type) &&
              (0, i.jsx)("meta", { content: U.type, property: "og:type" }),
            (null == U ? void 0 : U.url) &&
              (0, i.jsx)("meta", { content: Z, property: "og:url" }),
            (null == O ? void 0 : O.title) &&
              (0, i.jsx)("meta", {
                content: (0, h.D4)(null != ee ? ee : O.title),
                property: "twitter:title",
              }),
            (null == O ? void 0 : O.description) &&
              (0, i.jsx)("meta", {
                content: (0, h.D4)(null == O ? void 0 : O.description),
                property: "twitter:description",
              }),
            (null == O ? void 0 : O.imageUrl) &&
              (0, i.jsx)("meta", {
                content: O.imageUrl,
                property: "twitter:image",
              }),
            (null == O ? void 0 : O.card) &&
              (0, i.jsx)("meta", { content: O.card, property: "twitter:card" }),
            (null == O ? void 0 : O.url) &&
              (0, i.jsx)("meta", { content: Z, property: "twitter:url" }),
            (0, i.jsx)("meta", { content: el, name: "apple-itunes-app" }),
          ],
        });
      }
      y.displayName = "ContentMetaTags";
    },
    37357: (e, t, a) => {
      a.d(t, {
        Cm: () => _,
        Do: () => g,
        Dz: () => u,
        H5: () => d,
        Hr: () => m,
        IN: () => o,
        KU: () => h,
        ZH: () => l,
        ZM: () => r,
        cn: () => i,
        hO: () => s,
        hv: () => n,
        i2: () => w,
        kw: () => b,
        rh: () => c,
        vy: () => p,
        xq: () => f,
      });
      let i = {
          d_rating: {
            1: "1 star and up",
            2: "2 stars and up",
            3: "3 stars and up",
            4: "4 stars and up",
            5: "5 stars",
          },
        },
        r = "d_categorytaxonomy",
        n = "d_channel",
        o = "d_sellers_all",
        l = "fwtfr",
        s = "xmf9o";
      var d = (function (e) {
        return (
          (e.CHECKBOX = "checkbox"),
          (e.IMAGE = "image"),
          (e.PRICE = "price"),
          (e.RADIO = "radio"),
          (e.RATING = "rating"),
          (e.URL = "url"),
          e
        );
      })({});
      let c = ["checkbox", "image", "price"],
        m = ["radio", "rating"],
        g = "SORT_BY",
        p = { display_name: "Sort", facet_id: g },
        _ = [r, "d_producttaxonomy"],
        u = {
          d_brand_all: {
            [s]: '<span class="h-sr-only">Target</span><span style="white-space:nowrap"><span aria-hidden="true" style="display: inline-block; transform: translateY(0.07em);">\xac</span> brands</span>',
          },
        },
        h = "seo-facet-link",
        f = new Set(["r7ogo", "t29ms", "vsoc7"]),
        w = 1e6,
        b = 0;
    },
    42523: (e, t, a) => {
      a.d(t, { L: () => g });
      var i = a(14232),
        r = a(44239),
        n = a.n(r),
        o = a(42252),
        l = a(20172),
        s = a(3422),
        d = a(3560),
        c = a(54315),
        m = a(1022);
      let g = () => {
        let e = (0, o.rd)(),
          { query: t } = e,
          a = (0, s.xs)(t, "storeIdList"),
          r = (0, m.ol)(e),
          g = null == r ? void 0 : r.some((e) => c.GC.includes(e)),
          { store_ids: p, enabled: _ } = (0, d.qU)({
            shouldSkipNearbyStores: g,
            shouldSkipStoreTrips: g,
          }),
          u = n()(a ? a.split(",") : p)
            .filter((e) => (0, l.v)(e))
            .join(",");
        return (0, i.useMemo)(() => ({ store_ids: u, enabled: _ }), [u, _]);
      };
    },
    45123: (e, t, a) => {
      a.d(t, {
        Wz: () => i.Wz,
        hV: () => i.hV,
        qf: () => i.qf,
        qx: () => i.qx,
        zs: () => i.zs,
      });
      var i = a(8007);
    },
    52276: (e, t, a) => {
      a.d(t, { y: () => c });
      var i = a(70418),
        r = a(42252),
        n = a(31294),
        o = a(44145),
        l = a(16839),
        s = a(2053),
        d = a(1022);
      let c = () => {
        let { asPath: e } = (0, r.rd)(),
          t = (0, d.N1)(e),
          a = (0, n.W)((e) => {
            var t;
            return new i.o(null != (t = e.asPath) ? t : "")
              .removeQuery("searchTerm")
              .toString();
          }),
          [c] = (0, l.a)({ partner_id: a(o.I8) }, { enabled: !!t });
        return c(s.HX);
      };
    },
    61400: (e, t, a) => {
      a.d(t, { MG: () => u, WA: () => f, li: () => _ });
      var i = a(3576),
        r = a(62701),
        n = a(65699),
        o = a(14232),
        l = a(95408),
        s = a(42252),
        d = a(3422),
        c = a(1022),
        m = a(72396),
        g = a(70395);
      let p = "CDUI_INCLUDE_DATA_SOURCE_MODULES_IN_PLP_ENABLED",
        _ = () => {
          let { asPath: e } = (0, s.rd)(),
            t = (0, c._j)(e),
            a = (0, o.useCallback)((e) => !!(e && (0, l.Mv)(p) && t), [t]),
            { checkIsExperimentEnabledAndTrackFireflyEvent: i } = (0, m.G)(
              "EXPERIMENT_".concat(p),
              { checkIsExperimentEnabledWithCustomConditions: a }
            );
          return !!i();
        },
        u = (e) => {
          let { query: t, asPath: a } = e,
            r = (0, d.Rj)(t),
            n = h(a),
            o = (0, c.Pw)(e),
            l = (0, d.xs)(t, "sortBy");
          return "slp" === n
            ? (0, i._)(
                { keyword: r, page_type: n },
                o
                  ? { faceted_value: o, applied_facets: o.split("Z").join(",") }
                  : {},
                l ? { sort_by: l, sort_by_option: l } : {}
              )
            : { keyword: r, page_type: n };
        },
        h = (e) => ((0, c.B5)(e) ? "dlp" : "slp"),
        f = () => {
          let e = (0, s.rd)(),
            t = u(e),
            a = (0, c.B5)(e.asPath),
            l = _(),
            { variables: d, enabled: m } = (0, g.pk)(),
            p = null != d ? d : {},
            { platform: h, pageType: f } = p,
            w = (0, n._)(p, ["platform", "pageType"]),
            b = (0, o.useMemo)(
              () =>
                l && m
                  ? (0, r._)((0, i._)({}, w), {
                      include_data_source_modules: l,
                    })
                  : void 0,
              [l, m, w]
            );
          return a
            ? (0, r._)((0, i._)({}, t), { page_type: "dlp" })
            : (0, r._)((0, i._)({}, t, b), { page_type: "slp" });
        };
    },
    61717: (e, t, a) => {
      a.d(t, { O: () => n });
      var i = a(95408),
        r = a(1022);
      let n = (e, t) => {
        var a, n, o, l, s;
        let { maxAgeSeconds: d = 900, maxAgeSecondsBots: c = 86400 } =
            null != t ? t : {},
          m =
            null == (n = e.res) || null == (a = n.cdnMetadata)
              ? void 0
              : a.isBot;
        !m && (0, i.Mv)("FASTLY_CACHE_CONTROL_DISABLED")
          ? null == (l = e.res) ||
            l.setHeader("Cache-Control", "private, no-cache")
          : null == (s = e.res) ||
            s.setHeader("Surrogate-Control", "max-age=".concat(m ? c : d)),
          (0, r.B5)(null == e ? void 0 : e.asPath) &&
            !m &&
            (null == (o = e.res) ||
              o.setHeader("Cache-Control", "private, no-cache"));
      };
    },
    70395: (e, t, a) => {
      a.d(t, { ZO: () => H, GX: () => $, pk: () => K, v1: () => Z });
      var i = a(3576),
        r = a(62701),
        n = a(19427),
        o = a(14901),
        l = a(92013),
        s = a(54687),
        d = a(53842),
        c = a(70418),
        m = a(78502),
        g = a(17379),
        p = a(14232),
        _ = a(42252),
        u = a(48603),
        h = a(74463),
        f = a(95636),
        w = a(12430),
        b = a(46242),
        v = a(61870),
        T = a(40196),
        S = a(3422),
        E = a(4042),
        y = a(1022),
        k = a(95408),
        G = a(15650),
        A = a(72396),
        x = a(54315);
      let q = (e) => {
        let t = (0, y.o5)(e.asPath),
          a = (0, S.xs)(e.query, "marketing_id"),
          i = (0, S.xs)(e.query, "marketing_group_id"),
          r = (0, y.Pw)(e),
          n = (0, k.Mv)("DPLP_SPONSORED_ITEMS_ENABLED");
        return t
          ? !a && n
          : !((0, y.Ko)(e.asPath) || (null == r ? void 0 : r.includes(x.BE))) &&
              !i &&
              void 0;
      };
      var j = a(52276);
      let P = (e) => {
        if (!e.asPath) return;
        let t = (0, S.xs)(e.query, "category"),
          a = (0, S.$x)(e.asPath),
          i = (0, y.UD)(e.asPath),
          r = t;
        return i && (r = null != a ? a : t), r && !r.includes("|") ? r : void 0;
      };
      var U = a(42523),
        R = a(13051),
        C = a.n(R);
      let N = (e) => {
          let t = e.trim().length;
          return C()(e) > 0 && t > 4 && t < 11;
        },
        D = /^\d{3}[ -]\d{2}[ -]\d{4}$/,
        I = (e) => D.test(e),
        O = (e) => {
          let { asPath: t, query: a } = e;
          return (0, y._j)(t) || (0, y.B5)(t) ? (0, S.Rj)(a) : void 0;
        },
        L = () => {
          let e = (0, _.rd)(),
            { store_ids: t, enabled: a } = (0, U.L)(),
            i = O(e);
          return i && (N(i) || I(i))
            ? { store_ids: void 0, enabled: a }
            : { store_ids: t, enabled: a };
        };
      var B = a(94259),
        M = a(89514),
        z = a(37357);
      let F = (e) => {
        let { asPath: t, query: a } = e;
        if (t)
          return {
            auto_recover: (0, S.xs)(a, "auto_recover"),
            brand: (0, y.Dx)(t),
            brand_id: (0, y.EV)(t),
            category: P(e),
            count: 24,
            default_purchasability_filter: ((e) => {
              let t = (0, S.xs)(e.query, "storeIdList"),
                a = O(e);
              if (!(a && (N(a) || I(a)))) return t;
            })(e)
              ? "true"
              : "false",
            faceted_value: (0, y.Pw)(e),
            include_sponsored: q(e),
            include_review_summarization: !0,
            keyword: O(e),
            keyword_search_type: (0, y.Ko)(t) ? "RERANK_WITH_LEXICAL" : void 0,
            redirect: "true" === (0, S.xs)(a, "redirect") || void 0,
            marketing_id: (0, S.xs)(a, "marketing_id"),
            marketing_group_id: (0, S.xs)(a, "marketing_group_id"),
            max_price: ((e) => {
              let t = (0, S.xs)(e.query, "maxPrice"),
                a = (0, S.xs)(e.query, "minPrice");
              return null != t ? t : a ? String(z.i2) : void 0;
            })(e),
            min_price: ((e) => {
              let t = (0, S.xs)(e.query, "maxPrice"),
                a = (0, S.xs)(e.query, "minPrice");
              return null != a ? a : t ? String(z.kw) : void 0;
            })(e),
            new_search: ((e) => {
              if ((0, S.Rj)(e.query))
                return "false" !== (0, S.xs)(e.query, "newSearch");
            })(e),
            offset: ((e) => {
              let t = (0, S.xs)(e.query, "Nao");
              return Math.max(Number.parseInt(null != t ? t : "", 10) || 0, 0);
            })(e),
            page: (0, T.x6)(t),
            platform: ((e) => {
              var t, a;
              return "res" in e &&
                (null == (a = e.res) || null == (t = a.cdnMetadata)
                  ? void 0
                  : t.formFactor) === "desktop"
                ? "desktop"
                : "mobile";
            })(e),
            pricing_store_id: E.Vz,
            promo_id: (0, y.oq)(t),
            sort_by: (0, S.xs)(a, "sortBy"),
            spellcheck: "false" !== (0, S.xs)(a, "spellcheck"),
            store_ids: (0, S.xs)(a, "storeIdList"),
            visitor_id: ((e) => {
              var t;
              return "res" in e && (null == (t = e.res) ? void 0 : t.visitorId)
                ? e.res.visitorId
                : "0";
            })(e),
            page_type: (0, y.bk)(t),
          };
      };
      var V = a(23945);
      let W = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          return (
            Array.from(
              new Set(
                t.flatMap((e) => (null == e ? void 0 : e.split("Z")) || [])
              )
            ).join("Z") || void 0
          );
        },
        H = "@web/domain-product/get-plp-search-v2",
        K = () => {
          let e = (0, _.rd)(),
            t = (() => {
              let { formFactor: e } = (0, p.useContext)(B.B.Context);
              return "desktop" === e ? "desktop" : "mobile";
            })(),
            a = (() => {
              let { visitorId: e } = (0, p.useContext)(B.B.Context);
              return null != e ? e : (0, M.j)() || "0";
            })(),
            r = (() => {
              let { store_ids: e } = L();
              return e ? "true" : "false";
            })(),
            n = (() => {
              let e = (0, _.rd)(),
                t = (0, j.y)(),
                a = P(e);
              return null != t ? t : a;
            })(),
            o = F(e),
            l = (0, u.x7)(),
            { preferredStoreId: s, queryState: d } = (0, f._f)(),
            { scheduledDeliveryStoreId: c, queryState: g } = (0, b.Y)(),
            { store_ids: h, enabled: v } = L(),
            { guestLocation: { zipCode: T } = {}, queryState: S } = (0, w.oK)(),
            { include_sponsored: E, enabled: x } = (() => {
              let e = q((0, _.rd)()),
                t = (() => {
                  let { asPath: e } = (0, _.rd)(),
                    t = (0, y.B5)(e),
                    a = (0, p.useCallback)(
                      (e) =>
                        (null != e
                          ? e
                          : (0, k.Mv)(
                              "DLP_REMOVE_SPONSORED_PRODUCTS_ENABLED"
                            )) && t,
                      [t]
                    ),
                    { checkIsExperimentEnabledAndTrackFireflyEvent: i } = (0,
                    A.G)("DLP_REMOVE_SPONSORED_PRODUCTS_ENABLED", {
                      checkIsExperimentEnabledWithCustomConditions: a,
                    });
                  return i();
                })(),
                { include_sponsored: a, enabled: i } = (0, G.j)({
                  shouldCheckRedOakPageSuppressSponsoredAds: !0,
                });
              return void 0 !== e
                ? { include_sponsored: e, enabled: !0 }
                : t
                ? { include_sponsored: !1, enabled: !0 }
                : { include_sponsored: a, enabled: i };
            })(),
            U = (() => {
              var e;
              let t = (0, V.V)(),
                a = (0, u.Rn)(),
                { checkIsExperimentEnabledAndTrackFireflyEvent: i } = (0, A.G)(
                  "GLOBAL_GUEST_ANONYMOUS_ESTIMATE_ENABLED"
                );
              return (
                (!!(null != (e = i())
                  ? e
                  : (0, k.Mv)("GLOBAL_GUEST_ANONYMOUS_ESTIMATE_ENABLED")) &&
                  !!a) ||
                t
              );
            })(),
            R = (0, m.$6)(d),
            C = (0, m.$6)(g),
            N = (0, m.$6)(S);
          return (0, p.useMemo)(() => {
            let e = Object.fromEntries(
              Object.entries({
                category: n,
                pricing_store_id: s,
                visitor_id: a,
                platform: t,
                default_purchasability_filter: r,
                include_sponsored: E,
                member_id: l,
                scheduled_delivery_store_id: c,
                store_ids: h || void 0,
                zip: T,
              }).filter((e) => {
                let [, t] = e;
                return void 0 !== t;
              })
            );
            return {
              enabled: x && U && R && C && v && N,
              variables: (0, i._)({}, o, e),
            };
          }, [n, r, E, U, x, R, C, !1, v, N, l, t, s, o, c, h, a, T]);
        },
        { useQuery: Y } = (0, g.T)({
          name: H,
          defaultOptions: { staleTime: 9e5, gcTime: 9e5, keepPreviousData: !0 },
          keyFn: (e) => [H, e],
          queryFn: async (e) => {
            let {
                apiKey: t,
                baseUrl: o,
                apis: {
                  product: { endpointPaths: l },
                },
              } = (0, n.$)().services.redskyAggregations,
              m = null == l ? void 0 : l.plpSearchV2;
            if (!m) throw Error("path not defined for plpSearchV2 query");
            if (e.offset && e.offset >= 1200)
              throw Error("Offset too high for plpSearchV2 query");
            let g = (0, r._)((0, i._)({}, e), {
                key: t,
                channel: "mobile" === e.platform ? "MWEB" : "WEB",
                include_dmc_dmr: !!(
                  e.pricing_store_id && "3991" !== e.pricing_store_id
                ),
                useragent: (0, h.N1)(),
                effective_date: await (0, s.E)(),
              }),
              p = c.o.buildURLWithParams(m, g, o),
              {
                data: _,
                ok: u,
                statusText: f,
              } = await (0, d.n)(p, {
                partialErrorTag:
                  v.O0.REDSKY_AGGREGATIONS_PLP_SEARCH_PARTIAL_API_ERROR,
                debugImportQueryForGraphQLSourceMode: () =>
                  a.e(9616).then(a.t.bind(a, 4220, 17)),
              });
            if (u)
              return (0, i._)(
                {},
                null == _ ? void 0 : _.data,
                null == _ ? void 0 : _.extensions
              );
            throw Error("".concat(f));
          },
        }),
        Z = function (e) {
          var t;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { variables: n, enabled: l } = K(),
            s = a.shouldCombineFacetedOverrideValues
              ? W(
                  null == n ? void 0 : n.faceted_value,
                  null == e ? void 0 : e.faceted_value
                )
              : null != (t = null == e ? void 0 : e.faceted_value)
              ? t
              : null == n
              ? void 0
              : n.faceted_value,
            [d, c] = Y((0, r._)((0, i._)({}, n, e), { faceted_value: s }), {
              enabled: !1 !== a.enabled && l,
            });
          return (
            (0, p.useEffect)(() => {
              c.isSuccess &&
                o.L.recordTimeSincePageLoad(
                  "plp_search_time_since_page_load",
                  "histogram_large"
                );
            }, [c.isSuccess]),
            [d, c]
          );
        },
        $ = async (e) => {
          let t = F(e);
          try {
            var a, i, r, n, o, s, d;
            let c = await e.preloadInitialQuery(Y, t),
              m = null == c || null == (a = c.data) ? void 0 : a.search,
              g = (0, l.x8)(m),
              p =
                null == m || null == (i = m.search_response)
                  ? void 0
                  : i.metadata;
            if (
              (null == (n = e.res) ||
                null == (r = n.injectedVariables) ||
                r.set("plpPageSearchResponse", {
                  offset: null == p ? void 0 : p.offset,
                  totalResults: null == p ? void 0 : p.total_results,
                }),
              g &&
                (null == (o = e.res) || o.writeHead(302, { Location: g }),
                null == (s = e.res) || s.end()),
              null == c ? void 0 : c.error)
            )
              throw Error(
                null == c || null == (d = c.error) ? void 0 : d.message
              );
            return t;
          } catch (e) {
            return;
          }
        };
    },
    80663: (e, t, a) => {
      a.d(t, {
        SV: () => c,
        wg: () => d,
        bD: () => g,
        dx: () => s,
        RN: () => u,
      });
      var i = a(19427),
        r = a(17379),
        n = a(53842),
        o = a(70418);
      let { useQuery: l } = (0, r.T)({
          name: "site-top-of-funnel/domains/seo/fetch-dlp-metadata-v1",
          queryFn: async (e) => {
            let { keyword: t } = e,
              {
                baseUrl: a,
                apiKey: r,
                apis: l,
              } = (0, i.$)().services.redskyAggregations;
            try {
              let e = o.o.buildURLWithParams(
                  l.seo.endpointPaths.seoMetadata,
                  { keyword: t, key: r },
                  a
                ),
                {
                  data: i,
                  ok: d,
                  statusText: c,
                } = await (0, n.n)(e, {
                  partialErrorTag:
                    "redsky_aggregations_seo_metadata_error_partial",
                });
              if (d) {
                var s;
                return null != (s = null == i ? void 0 : i.data) ? s : null;
              }
              throw Error("".concat(c));
            } catch (e) {
              throw Error("".concat(e));
            }
          },
        }),
        s = l,
        d = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.seo_metadata) ||
            null == (t = a.seo_data)
            ? void 0
            : t.title;
        },
        c = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.seo_metadata) ||
            null == (t = a.seo_data)
            ? void 0
            : t.description;
        };
      var m = a(61400);
      let g = async (e) => {
          let { keyword: t } = (0, m.MG)(e);
          if (t)
            try {
              let i = await e.preloadInitialQuery(s, { keyword: t });
              if (null == i ? void 0 : i.error) {
                var a;
                throw Error(
                  null == i || null == (a = i.error) ? void 0 : a.message
                );
              }
              return i;
            } catch (e) {
              return null;
            }
        },
        p = [
          {
            keyword: "dawn of war onslaught",
            main_url:
              "https://www.target.com/p/games-workshop-dawn-of-war-onslaught-board-game/-/A-94739548",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_bfeaffd5-38a4-4ca0-afc1-8d2ea3784070?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Games Workshop Dawn of War: Onslaught Board Game, 1 of 8",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_efd4a69d-97d2-42ee-92f6-0e2c47a1673f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "hammond collection spinosaurus",
            main_url:
              "https://www.target.com/p/jurassic-world-hammond-collection-jurassic-park-3-spinosaurus-action-figure-xl-dinosaur-toy/-/A-93709442",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_50731533-d2b3-417b-8d2e-953e397bdbcc?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Jurassic World Hammond Collection Jurassic Park 3 Spinosaurus Action Figure - XL Dinosaur Toy, 1 of 14",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_e57513f7-c3be-4d77-aec0-c91989e33c06?wid=475&hei=475&qlt=80&fmt=webp",
          },
          {
            keyword: "squishmallow pillow",
            main_url:
              "https://www.target.com/p/squish-pillow-standard-firm-density-bed-pillow/-/A-94243405",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_a5c603c5-c195-469f-ad2d-e73e5b496a45?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "SquishPillow by Original Squishmallows Firm Bed Pillow and Ultra Soft Pillowcase Cover, 1 of 16",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_320a6354-2c8f-442d-8fdd-bc1816d046c7?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "mini brands fridge",
            main_url:
              "https://www.target.com/p/mini-brands-fill-the-fridge-playset/-/A-93707453",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_dca7606a-3e32-49f8-904d-9f9357b2582a?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Mini Brands Fill the Fridge Playset, 1 of 14",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_2185d590-4171-4357-8864-6f90a2276512?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "bloom crisp apple",
            main_url:
              "https://www.target.com/p/bloom-crisp-apple-energy-drink-12-fl-oz-can/-/A-94725040",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_7cca2c0e-071b-4684-84fc-ac96d8f757d3?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Bloom Crisp Apple Energy Drink - 12 fl oz Can, 1 of 15",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_97f5979c-06b6-40bb-b034-b34d35bfc388?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "the sims board game",
            main_url:
              "https://www.target.com/p/goliath-the-sims-board-game/-/A-94246260",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_d1c42803-bcec-4719-b8ad-8c921340f906?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Goliath The Sims Board Game, 1 of 10",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_cb148176-2eb2-4735-87ee-25fe34db0ab1?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "dawn of war board game",
            main_url:
              "https://www.target.com/p/games-workshop-dawn-of-war-onslaught-board-game/-/A-94739548",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_bfeaffd5-38a4-4ca0-afc1-8d2ea3784070?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Games Workshop Dawn of War: Onslaught Board Game, 1 of 8",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_59ffce09-e61e-4219-9df8-2ae62a7b457c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "spinosaurus hammond collection",
            main_url:
              "https://www.target.com/p/jurassic-world-hammond-collection-jurassic-park-3-spinosaurus-action-figure-xl-dinosaur-toy/-/A-93709442",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_50731533-d2b3-417b-8d2e-953e397bdbcc?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Jurassic World Hammond Collection Jurassic Park 3 Spinosaurus Action Figure - XL Dinosaur Toy, 1 of 14",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_456a0a14-1979-4e3e-8a02-5025bbf3e3e8?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "target switch 2",
            main_url:
              "https://www.target.com/p/nintendo-switch-2-console/-/A-94693225",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_16ab4c0b-af09-4d3e-b1db-5822164fe385?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Nintendo Switch 2 Console, 1 of 20",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_53c50433-3425-456a-8445-5bc54989af54?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "bobbie gentle formula",
            main_url:
              "https://www.target.com/p/bobbie-gentle-powder-infant-formula-14-1oz/-/A-88558512",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_3f8d808d-0737-4635-86d1-e49a27035d0c?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Bobbie Organic Gentle Infant Formula - 14.1oz, 1 of 13",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_55def3c1-1843-40bb-bcf4-f0c0f0b22e17?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "strawberry sunrise alani",
            main_url:
              "https://www.target.com/p/alani-strawberry-sunrise-energy-drink-12-fl-oz-can/-/A-94052261",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_6333679c-33a1-42aa-96ee-7ce220d212ce?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Alani strawberry Sunrise Energy Drink - 12 fl oz Can, 1 of 6",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_774d3351-153d-44f1-8ddd-6c7d7773dda4?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "cutwater popsicles",
            main_url:
              "https://www.target.com/p/cutwater-spirits-frozen-margaritas-variety-pack-12pk-100ml-pops/-/A-82481306",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_5ff3d8d1-6f50-4381-a0ea-bb3e652cb9a3?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Cutwater Spirits Frozen Margaritas Variety Pack - 12pk/100ml Pops, 1 of 7",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_86549e31-5366-44b0-b3ce-c269b4bdc42c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "mini brands fill the fridge",
            main_url:
              "https://www.target.com/p/mini-brands-fill-the-fridge-playset/-/A-93707453",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_dca7606a-3e32-49f8-904d-9f9357b2582a?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Mini Brands Fill the Fridge Playset, 1 of 14",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_ee1a085b-bd34-41e8-931a-180ffccec9b4?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "cotton candy alani",
            main_url:
              "https://www.target.com/p/alani-nu-cotton-candy-energy-drink-12-fl-oz-can/-/A-94607786",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_5274c2df-b75f-4be8-8548-7806a026619f?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Alani Nu Cotton Candy Energy Drink - 12 fl oz Can, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_a30104f8-7854-40db-bd24-4bff3e2b5cfb?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "diabetic barbie",
            main_url:
              "https://www.target.com/p/barbie-fashionistas-doll-242-barbie-doll-with-type-1-diabetes-in-polka-dot-outfit-with-accessories/-/A-93873096",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_8251addf-0567-4823-819e-6513a69639fd?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Barbie Fashionistas Doll#242 Barbie Doll with Type 1 Diabetes in Polka Dot Outfit with Accessories, 2 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_3d3b7711-4e65-4545-afd5-8df67342abfa?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "target blooming waters",
            main_url:
              "https://www.target.com/p/pok-233-mon-trading-card-game-blooming-waters-premium-collection/-/A-94724987",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_8aa97206-d787-4ca5-bdd1-06775db271e6?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Blooming Waters Premium Collection, 1 of 7",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_227f0455-e99d-4ee0-995f-5983bf79bd28?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "bobbie formula",
            main_url:
              "https://www.target.com/p/bobbie-baby-organic-powder-infant-formula-14-1oz/-/A-85776110",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_c287da1f-3734-416a-807d-0363965c0013?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Bobbie Organic Original Infant Formula, 1 of 13",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_432823e4-2dcc-4a79-b5a4-c20208448b4f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "magnatiles advent calendar",
            main_url:
              "https://www.target.com/p/magna-tiles-advent-calendar-magnetic-building-set/-/A-94304736",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_ae5b7e60-8c3b-4b5f-8e4f-384904de3c30?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "MAGNA-TILES Advent Calendar Magnetic Building Set, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_c6733668-6524-4a4e-8a12-1b99baee923c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "lego daily bugle",
            main_url:
              "https://www.target.com/p/lego-marvel-spider-man-daily-bugle-set-76178/-/A-83345718",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_7d4bec8d-a189-42f0-8a26-dac18deeb372?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "LEGO Marvel Spider-Man Daily Bugle Set 76178, 1 of 8",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_ea98cad8-f47f-4df1-b54b-14cdbc59c007?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "magna tiles advent calendar",
            main_url:
              "https://www.target.com/p/magna-tiles-advent-calendar-magnetic-building-set/-/A-94304736",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_ae5b7e60-8c3b-4b5f-8e4f-384904de3c30?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "MAGNA-TILES Advent Calendar Magnetic Building Set, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_c6733668-6524-4a4e-8a12-1b99baee923c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "destined rivals etb",
            main_url:
              "https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-destined-rivals-elite-trainer-box/-/A-94300069",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_ec4e65a6-3467-49bf-9529-af1f07539cb1?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Scarlet & Violet— Destined Rivals Elite Trainer Box, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_4b0fb12d-4fac-40f9-bbd8-dc17301f15d7?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "chobani s'mores creamer",
            main_url:
              "https://www.target.com/p/chobani-s-39-mores-coffee-creamer-24-fl-oz/-/A-94599572",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_1ac177f1-8575-4f42-b99d-9a6925048d66?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Chobani Dairy Creamer, 1 of 17",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_b1f71c12-ea09-490f-9be7-4ceda88850fc?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "marvel legends psylocke thanos",
            main_url:
              "https://www.target.com/p/marvel-legends-series-gamerverse-psylocke-vs-thanos/-/A-93566562",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_aea0ff27-9111-4559-adbf-dd1b5bc60a6f?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Marvel Legends Series Gamerverse Psylocke vs. Thanos, 1 of 14",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_c4e06e84-d477-481b-be13-af85c7d37ca5?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "sola bagels",
            main_url:
              "https://www.target.com/p/sola-original-plain-bagel-12oz/-/A-89918952",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_15ef9498-6eb0-4cf9-9226-eca21dbf2d1a?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Sola Original Plain Bagel - 12oz, 1 of 11",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_ada1b23a-ba4e-400a-b5d7-382a14fe5a7e?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "percy pigs",
            main_url:
              "https://www.target.com/p/m-38-s-percy-pig-8482-gummy-candy-6-064oz/-/A-94241372",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_3920ca8c-45fa-46d2-aa74-31377675077b?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "M&S Percy Pig™ Gummy Candy - 6.064oz, 1 of 8",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_555e676f-09eb-456d-bc6d-0d82aa39f167?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "destined rivals booster bundle",
            main_url:
              "https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-destined-rivals-booster-bundle/-/A-94300067",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_3a795297-b431-4aeb-80fb-327192381e7f?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Scarlet & Violet— Destined Rivals Booster Bundle, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_63574076-ae0d-4677-a060-2645ff496794?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "autumn apple owala",
            main_url:
              "https://www.target.com/p/owala-24oz-freesip-autumn-apple-hearth-38-hand-8482-with-magnolia-insulated-stainless-steel-water-bottle/-/A-94505015",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_15894a76-fcba-4bab-8398-f228cffde060?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Owala Special Edition 24oz Stainless Steel Insulated FreeSip Water Bottle - Hearth & Hand™ with Magnolia, 1 of 13",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_f9db177e-952a-40d0-a278-b6d33cf35a5f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "helium tank",
            main_url:
              "https://www.target.com/p/9-5-34-medium-helium-balloon-kit/-/A-13567277",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_f5969d14-7153-4650-a5d0-3d285124d7a4?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              '9.5" Medium Helium Balloon Kit: Balloon Time Multicolor Steel Tank for All Occasions, 1 of 9',
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_c2570c3c-4fb7-42d8-8789-7014296bda26?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "black bolt binder collection",
            main_url:
              "https://www.target.com/p/pok-233-mon-scarlet-violet-s10-5-binder-collection-1-trading-cards/-/A-94636856?gQT=1",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_bdd3a76e-7db7-4cf7-8420-6ee8a62d98b8?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Scarlet & Violet—Black Bolt Binder Collection, 1 of 6",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_1fb934ec-95ea-41ef-b506-2880ea1fb389?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "millie moon diapers",
            main_url:
              "https://www.target.com/p/millie-moon-luxury-diapers-select-size-and-count/-/A-82102549",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_7ebfbd59-b305-4547-a1ac-5a84d43da549?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Millie Moon Luxury Disposable Diapers - (Select Size and Count), 1 of 19",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_2e933648-dee2-4850-a8e8-76c3ef046c0f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "fruit riot sour grapes",
            main_url:
              "https://www.target.com/p/fruit-riot-frozen-sour-candy-grapes-8oz/-/A-91637788",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_cefa65e0-4ccf-458d-8420-457e75743d85?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Fruit Riot Frozen Sour Mixed Candy Grapes - 8oz, 1 of 13",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_4fee94c7-c30f-416f-9195-a33e108c007a?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "sandy snacks a lot",
            main_url:
              "https://www.target.com/p/vtech-share-38-snack-munching-chameleon/-/A-89959899",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_b056fa79-7fa4-44d4-b653-5676cb2c79b0?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "VTech Sandy Snacks-a-Lot, 1 of 11",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_3dcf30b1-b66f-4f6c-b585-7af7f1eefe7f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "topps chrome marvel",
            main_url:
              "https://www.target.com/p/2025-topps-chrome-marvel-trading-card-value-box/-/A-94766969",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_616dbfd1-fc3b-43e3-bc79-09362b79e4c5?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "2025 Topps Chrome Marvel Trading Card Value Box, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_cea74fa9-17f9-41fb-937f-ae0e7480e3d4?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "monster jam smash and bash",
            main_url:
              "https://www.target.com/p/monster-jam-smash-38-bash-megalodon-toy-vehicle-playset-1-64-scale/-/A-94399546",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_89f94969-0a3f-4919-b2a8-0ec6f4c6428b?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Monster Jam Smash & Bash Megalodon Toy Vehicle Playset - 1:64 Scale, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_4fee94c7-c30f-416f-9195-a33e108c007a?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "cutwater variety pack",
            main_url:
              "https://www.target.com/p/cutwater-margarita-variety-pack-12pk-200ml-cans/-/A-87925255",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_60f35008-4e35-479f-ae9c-3303c349115d?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Cutwater Margarita Variety Pack - 12pk/200ml Cans, 1 of 19",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_95900ee3-df8b-4b83-ae45-903c2da67481?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "dress to impress lana doll",
            main_url:
              "https://www.target.com/p/dress-to-impress-fashion-dall-lana/-/A-94301897",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_c33ebd80-b159-4189-aad8-7272d09a1111?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Dress To Impress Fashion Dall Lana, 1 of 7",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_be27008c-8eef-4815-b9e3-69b4730e673c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "fisher price dj table",
            main_url:
              "https://www.target.com/p/fisher-price-laugh-38-learn-mix-38-learn-dj-table/-/A-87822486",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_5d14d4a9-de62-4c6e-9049-5b60ef5db49b?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Fisher-Price Laugh &#38; Learn Mix &#38; Learn DJ Table, 1 of 12",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_83cd2612-b365-4c92-a5d3-ea0be963655e?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "white flare binder collection",
            main_url:
              "https://www.target.com/p/pok-233-mon-scarlet-violet-s10-5-binder-collection-2-trading-cards/-/A-94636851",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_a20d2578-1dfc-4b97-b5cf-2bcb0c409306?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok&#233;mon Trading Card Game: Scarlet &#38; Violet&#8212;White Flare Binder Collection, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_44a3f225-9bbc-4536-9591-a24d86b1cbbc?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "brown butter pumpkin heavy whipping cream",
            main_url:
              "https://www.target.com/p/brown-butter-pumpkin-flavored-heavy-whipping-cream-16-fl-oz-good-38-gather-8482/-/A-94168397",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_3ea6f369-e30b-4f00-9bcf-1e75903dcf9a?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Heavy Whipping Cream - Good & Gather™, 1 of 6",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_b51485e6-9991-44dc-acc1-aeb72d41d9d6?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "paldean fates etb",
            main_url:
              "https://www.target.com/p/pok-233-mon-trading-card-game-scarlet-38-violet-8212-paldean-fates-elite-trainer-box/-/A-89432659",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_503dce9c-0b2c-4967-bef7-d5b180692348?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Scarlet & Violet— Paldean Fates Elite Trainer Box, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_503dce9c-0b2c-4967-bef7-d5b180692348?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "squish pillow",
            main_url:
              "https://www.target.com/p/squish-pillow-standard-firm-density-bed-pillow/-/A-94243405",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_a5c603c5-c195-469f-ad2d-e73e5b496a45?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "SquishPillow by Original Squishmallows Firm Bed Pillow and Ultra Soft Pillowcase Cover, 1 of 16",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_320a6354-2c8f-442d-8fdd-bc1816d046c7?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "marvel topps chrome 2025",
            main_url:
              "https://www.target.com/p/2025-topps-chrome-marvel-trading-card-value-box/-/A-94766969",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_616dbfd1-fc3b-43e3-bc79-09362b79e4c5?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "2025 Topps Chrome Marvel Trading Card Value Box, 1 of 4",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_cea74fa9-17f9-41fb-937f-ae0e7480e3d4?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "obsidian flames etb",
            main_url:
              "https://www.target.com/p/pokemon-trading-card-game-scarlet-38-violet-obsidian-flames-elite-trainer-box/-/A-89315228",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_14a7ab70-c0df-45ac-a117-f17fcfc42f43?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Pok\xe9mon Trading Card Game: Scarlet & Violet Obsidian Flames Elite Trainer Box, 1 of 3",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_14a7ab70-c0df-45ac-a117-f17fcfc42f43?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "liquid death cereal criminal",
            main_url:
              "https://www.target.com/p/liquid-death-cereal-criminal-sparkling-water-6pk-12-fl-oz/-/A-94638331",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_2c2fa1ae-24c4-40e9-b14b-eac489d58a7c?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Liquid Death Cereal Criminal Sparkling Water - 6pk/12 fl oz, 1 of 8",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_2c2fa1ae-24c4-40e9-b14b-eac489d58a7c?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "canon powershot g7x",
            main_url:
              "https://www.target.com/p/canon-powershot-g7-x-mark-iii-20-1-megapixel-digital-camera-black/-/A-91467769",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_d1b28464-ad77-4252-9e3d-9d9b8b9f6846?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Canon PowerShot G7 X Mark III 20.1 Megapixel Digital Camera - Black: Wi-Fi, Self-Timer, 4K Video, 1 of 10",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_d1b28464-ad77-4252-9e3d-9d9b8b9f6846?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "ice cream sundae a&w",
            main_url:
              "https://www.target.com/p/a-38-w-ice-cream-sundae-soda-12pk-12-fl-oz-cans/-/A-94022860",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_e3093f80-13b2-4888-967c-0986f39f29f1?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "A&W Ice Cream Sundae Soda - 12pk/12 fl oz Cans, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_4fee94c7-c30f-416f-9195-a33e108c007a?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "sam and colby board game",
            main_url:
              "https://www.target.com/p/hunt-a-killer-the-haunting-of-wicker-ridge-board-game/-/A-94246229",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_547db658-94f9-45bc-a78f-580f629af380?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "Hunt A Killer x Sam and Colby: The Haunting at Wicker Ridge Board Game, 1 of 10",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_3dcf30b1-b66f-4f6c-b585-7af7f1eefe7f?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "nightmare before christmas tonie",
            main_url:
              "https://www.target.com/p/tonies-disney-the-nightmare-before-christmas-electronic-storybooks/-/A-93619315",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_6890d2b8-e86c-41be-9e00-1ab5bf757ef3?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text:
              "tonies Disney The Nightmare Before Christmas Electronic Storybooks, 1 of 5",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_6890d2b8-e86c-41be-9e00-1ab5bf757ef3?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
          {
            keyword: "flamingo hair removal cream",
            main_url:
              "https://www.target.com/p/flamingo-body-hair-removal-cream-6-76-fl-oz/-/A-87351646",
            image_shown_as_SERP_image:
              "https://target.scene7.com/is/image/Target/GUEST_21edc153-cf78-4b6f-bdea-1e47e518591a?wid=800&hei=800&qlt=80&fmt=pjpeg",
            alt_text: "Flamingo Body Hair Removal Cream - 6.76 fl oz, 1 of 9",
            test_image:
              "https://target.scene7.com/is/image/Target/GUEST_b7c7f334-d50e-407b-bbce-327ecaf0d2df?wid=800&hei=800&qlt=80&fmt=pjpeg",
          },
        ],
        { useQuery: _ } = (0, r.T)({
          name: "site-top-of-funnel/domains/seo/fetch-pdp-og-image-v1",
          queryFn: async (e) => {
            var t;
            let { path: a } = e;
            return null ==
              (t = p.find((e) => {
                var t;
                return a === (null == (t = e.main_url) ? void 0 : t.slice(22));
              }))
              ? void 0
              : t.test_image;
          },
        }),
        u = _;
    },
    83966: (e, t, a) => {
      a.d(t, { n: () => $ });
      var i = a(40123),
        r = a.n(i),
        n = a(14232),
        o = a(42252),
        l = a(31294),
        s = a(27581),
        d = a(59931),
        c = a(44145),
        m = a(26264),
        g = a(72396),
        p = a(95408),
        _ = a(28888),
        u = a(69750),
        h = a.n(u),
        f = a(70670),
        w = a.n(f),
        b = a(20624),
        v = a.n(b),
        T = a(7906),
        S = a.n(T),
        E = a(3422);
      function y() {
        let e = (0, _._)(
          ["/c/[a-z-d]+/[a-z-d]+/-/N-[a-zA-Yd]+Z[a-zA-Yd]+$"],
          ["\\/c\\/[a-z-\\d]+\\/[a-z-\\d]+\\/-\\/N-[a-zA-Y\\d]+Z[a-zA-Y\\d]+$"]
        );
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      let k = String.raw(y());
      var G = a(3576),
        A = a(1881),
        x = a(1022);
      let q = new Set([A.vG, A.WU]),
        j = (e, t) => {
          let a = q.has(null != t ? t : "");
          return (0, x.UD)(e.path) && a;
        },
        P = {
          component_path: "/slingshot/pagetitle_hidden",
          metadata: { component: { id: "pagetitlehidden" } },
          order: 0,
          presentation: "/adaptive/placeholders/pagetitle_hidden/v01/mobile",
        };
      var U = a(62701),
        R = a(15574),
        C = a.n(R),
        N = a(54315);
      let D = new Set(["oetcy", "el6de", "q8v16", "4utaz"]),
        I = new Set([
          "/adaptive/placeholders/productgrid/v01/mobile",
          "/adaptive/placeholders/pagetitle/v01/mobile",
          "slingshot/dvm",
        ]),
        O = new Set([
          "/adaptive/placeholders/pagetitle/v01/mobile",
          "slingshot/dvm",
        ]),
        L = new Set([
          "/adaptive/c_web_m_0003/v02/mobile",
          "/adaptive/c_web_a_0003/v02/mobile",
          "/adaptive/c_web_a_0003/v03/mobile",
          "/adaptive/c_web_a_0003/v04/mobile",
          "/adaptive/c_web_a_0015/v01/mobile",
          "/adaptive/c_web_a_0015/v02/mobile",
          "/adaptive/c_web_a_0015/v03/mobile",
          "/adaptive/c_web_a_0030/v01/mobile",
          "/adaptive/c_web_a_0004/v03/mobile",
          "/adaptive/c_web_a_0004/v02/mobile",
          "/adaptive/placeholders/pagetitle/v01/mobile",
          "slingshot/dvm",
        ]);
      var B = a(27776),
        M = a.n(B),
        z = a(13967);
      let F = {
        metadata: {
          components: [{ id: "search_intents" }],
          component: { id: "search_intents" },
        },
        presentation: "/transform/search_intents",
      };
      a(45123);
      let V = { cvaas: "/gift-finder" },
        W = Object.keys(V),
        H = (e) => {
          var t;
          let a =
              null != (t = null == e ? void 0 : e.match(/N-([\dA-Za-z]+)/))
                ? t
                : [],
            i =
              (null == a ? void 0 : a.length) > 1
                ? null == a
                  ? void 0
                  : a[1]
                : "";
          return W.includes(i) ? V[i] : "";
        },
        K = new Set(["slingshot/dvm", "c_web_dvm3_v01"]),
        Y = new Set(["/adaptive/placeholders/pagetitle/v01/mobile"]),
        Z = new Set(["r7ogo", "t29ms", "vsoc7"]),
        $ = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { fallbackContentMap: t } = e,
            { flagValue: a = !1 } = (0, g.G)("SHOW_BTS_AND_MOVE_SLPESPOT"),
            { checkIsExperimentEnabledAndTrackFireflyEvent: i } = (0, g.G)(
              "MARKETING_CHANNEL_TRAFFIC_WITH_REDUCED_CONTENT"
            ),
            _ = i(),
            u = (0, o.rd)(),
            f = (0, l.W)(),
            b = (0, s.L)()(d.Te),
            T = f(c.Pb),
            y = f(),
            q = (0, s.L)()(d.Te),
            R =
              r()(y) ||
              (!(0, p.Mv)(
                "PAGE_CONTENT_STATUS_CODE_FALLBACK_CONDITION_KILL_SWITCH"
              ) &&
                (null != b ? b : 0) >= 400),
            B = (0, m.C)(),
            V = f(c.ig),
            W = f(c.pQ);
          return (0, n.useMemo)(() => {
            let e = {};
            if (R)
              e = (function (e) {
                var t;
                let a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  i =
                    null != e
                      ? e
                      : {
                          default: {
                            100: {
                              component_path: "",
                              order: 100,
                              presentation: "/fallbacks/page-not-found",
                            },
                          },
                        };
                return null != (t = i[a]) ? t : i.default;
              })(t, q);
            else {
              var i, n, o, l;
              let t = { query: u.query, path: u.asPath },
                s = ((e) => {
                  if (r()(e)) return !1;
                  let t = !1;
                  return (
                    C()(e, (e) => {
                      "web_deals_taxo_widget" === e.presentation && (t = !0);
                    }),
                    t
                  );
                })((e = null != W ? W : {}));
              (i = e =
                ((e, t, a) => {
                  if (
                    r()(e) ||
                    !(0, x.UD)(t.path) ||
                    !D.has(null != a ? a : "")
                  )
                    return e;
                  let i = new Set([
                    "/adaptive/placeholders/pagetitle/v01/mobile",
                  ]);
                  return S()(e, (e) => {
                    var t;
                    return !i.has(null != (t = e.presentation) ? t : "");
                  });
                })(
                  (e = ((e, t, a) => {
                    let i = a === A.Sj;
                    return !r()(e) && (0, x.UD)(t.path) && i
                      ? S()(e, (e) => {
                          var t;
                          return !I.has(null != (t = e.presentation) ? t : "");
                        })
                      : e;
                  })(
                    (e = ((e, t, a) => {
                      let i = a === A.WU;
                      if (r()(e) || !j(t, a) || !i) return e;
                      let n = S()(e, (e) => {
                        var t;
                        return !L.has(null != (t = e.presentation) ? t : "");
                      });
                      return C()(n, (e) =>
                        "/adaptive/placeholders/productgrid/v01/mobile" ===
                        e.presentation
                          ? (0, U._)((0, G._)({}, e), {
                              component_path: "/transform/hub_content",
                              metadata: {
                                component: { id: "hub_content" },
                                components: [{ id: "hub_content" }],
                              },
                              presentation: "/transform/hub_content",
                            })
                          : e
                      );
                    })(
                      (e = ((e, t, a) => {
                        let i = a === A.vG;
                        if (r()(e) || !j(t, a) || !i) return e;
                        let n = S()(e, (e) => {
                          var t;
                          return !O.has(null != (t = e.presentation) ? t : "");
                        });
                        return C()(n, (e) =>
                          "/adaptive/placeholders/productgrid/v01/mobile" ===
                          e.presentation
                            ? (0, U._)((0, G._)({}, e), {
                                component_path: "/transform/hub_content",
                                metadata: {
                                  component: { id: "hub_content" },
                                  components: [{ id: "hub_content" }],
                                },
                                presentation: "/transform/hub_content",
                              })
                            : e
                        );
                      })(
                        (e = ((e, t, a) => {
                          let i = [
                              A.Zi.AISLES_WITH_NAV,
                              A.Zi.GROCERY_AISLES_WITH_NAV,
                            ],
                            n = (0, x.bS)(t.path),
                            o = [N.$O, N.vU, N.NB],
                            l = n && !o.includes(n),
                            s = i.some((e) => a.includes(e));
                          if (r()(e) || !(0, x.UD)(t.path) || l || !s) return e;
                          let d = S()(e, (e) => {
                            var t;
                            return !A.V6.has(
                              null != (t = e.presentation) ? t : ""
                            );
                          });
                          return C()(d, (e) =>
                            "/adaptive/placeholders/productgrid/v01/mobile" ===
                            e.presentation
                              ? (0, U._)((0, G._)({}, e), {
                                  component_path:
                                    "/slingshot/productaisleswithnav",
                                  metadata: {
                                    component: { id: "productaisleswithnav" },
                                    components: [
                                      { id: "productaisleswithnav" },
                                    ],
                                  },
                                  presentation:
                                    "/adaptive/placeholders/productaisleswithnav/v01/mobile",
                                })
                              : e
                          );
                        })(
                          (e = ((e, t, a) => {
                            let i = [A.Zi.AISLES, A.Zi.GROCERY_AISLES],
                              n = (0, x.bS)(t.path),
                              o = [N.$O, N.vU, N.PI, N.NB],
                              l = n && !o.includes(n),
                              s = i.some((e) => a.includes(e));
                            if (r()(e) || !(0, x.UD)(t.path) || l || !s)
                              return e;
                            let d = S()(e, (e) => {
                              var t;
                              return !A.V6.has(
                                null != (t = e.presentation) ? t : ""
                              );
                            });
                            return C()(d, (e) =>
                              "/adaptive/placeholders/productgrid/v01/mobile" ===
                              e.presentation
                                ? (0, U._)((0, G._)({}, e), {
                                    component_path: "/slingshot/productaisles",
                                    metadata: {
                                      component: { id: "productaisles" },
                                      components: [{ id: "productaisles" }],
                                    },
                                    presentation:
                                      "/adaptive/placeholders/ocbproductaisles/v01/mobile",
                                  })
                                : e
                            );
                          })(
                            (e = ((e, t) => {
                              if (r()(e) || !(0, z.KM)(t.path)) return e;
                              let a = 1;
                              return M()(
                                e,
                                (e, t) => (
                                  (e[a] = t),
                                  a++,
                                  "/adaptive/placeholders/pagetitle/v01/mobile" ===
                                    t.presentation && ((e[a] = F), a++),
                                  e
                                ),
                                {}
                              );
                            })(
                              (e = ((e, t, a) => {
                                let { path: i, query: r } = t,
                                  n =
                                    null == i ? void 0 : i.replace(/\?.*/, ""),
                                  o = new RegExp(k).test(null != n ? n : "");
                                if (
                                  ("products" !==
                                    (r ? (0, E.xs)(r, "type") : void 0) &&
                                    !o) ||
                                  !e ||
                                  a
                                )
                                  return e;
                                let l = [
                                    "/adaptive/placeholders/pagetitle/v01/mobile",
                                    "/adaptive/placeholders/productgrid/v01/mobile",
                                    "/adaptive/seller-productgrid",
                                    "/c_web_a_0045/v01/",
                                  ],
                                  s = h()(
                                    S()(e, (e) => {
                                      let { presentation: t } = e;
                                      return l.find((e) =>
                                        null == t ? void 0 : t.includes(e)
                                      );
                                    })
                                  ).map((e) => Number.parseInt(e, 10));
                                return 2 !== s.length
                                  ? e
                                  : S()(e, (e, t) => {
                                      let { presentation: a } = e,
                                        i = Number.parseInt(t, 10);
                                      return !!(
                                        i <= (w()(s) || 0) ||
                                        i >= (v()(s) || 0) ||
                                        (null == a
                                          ? void 0
                                          : a.includes("/dvm"))
                                      );
                                    });
                              })(e, t, s)),
                              t
                            )),
                            t,
                            B
                          )),
                          t,
                          B
                        )),
                        t,
                        V
                      )),
                      t,
                      V
                    )),
                    t,
                    V
                  )),
                  t,
                  V
                )),
                (n = e =
                  !r()(i) && V && Z.has(V)
                    ? S()(i, (e) => {
                        var t;
                        return !Y.has(null != (t = e.presentation) ? t : "");
                      })
                    : i),
                (e = ((e, t, a) => {
                  if (r()(e) || !((0, z._j)(t.path) || (0, z.B5)(t.path)) || !a)
                    return e;
                  let i = Object.entries(e).find((e) => {
                    var t;
                    let [, a] = e;
                    return (
                      (null == a || null == (t = a.content)
                        ? void 0
                        : t.pos) === "slpespot"
                    );
                  });
                  if (i) {
                    let [t, a] = i;
                    e[t] = (0, U._)((0, G._)({}, a), {
                      content: (0, U._)((0, G._)({}, a.content), {
                        pos: "block0",
                      }),
                    });
                  }
                  return e;
                })(
                  (e =
                    r()(n) || !V
                      ? n
                      : C()(n, (e) => {
                          var t, a, i, r, n, o, l;
                          if (
                            (null == e ? void 0 : e.presentation) === "standard"
                          ) {
                            let l = H(
                              null == e ||
                                null == (i = e.content) ||
                                null == (a = i.link) ||
                                null == (t = a.detail)
                                ? void 0
                                : t.seo_url
                            );
                            if (l)
                              return (0, U._)((0, G._)({}, e), {
                                content: (0, U._)(
                                  (0, G._)({}, null == e ? void 0 : e.content),
                                  {
                                    link: (0, U._)(
                                      (0, G._)(
                                        {},
                                        null == e || null == (r = e.content)
                                          ? void 0
                                          : r.link
                                      ),
                                      {
                                        detail: (0, U._)(
                                          (0, G._)(
                                            {},
                                            null == e ||
                                              null == (o = e.content) ||
                                              null == (n = o.link)
                                              ? void 0
                                              : n.detail
                                          ),
                                          { seo_url: l }
                                        ),
                                      }
                                    ),
                                  }
                                ),
                              });
                          } else if (
                            (null == e ? void 0 : e.presentation) ===
                            "/adaptive/c_web_a_0027/v03/mobile"
                          ) {
                            let t =
                                null == e || null == (l = e.content)
                                  ? void 0
                                  : l.items,
                              a =
                                null == t
                                  ? void 0
                                  : t.map((e) => {
                                      let t = (0, G._)({}, e),
                                        { button_url: a, link_url: i } = t,
                                        r = H(a);
                                      return (
                                        r && (t.button_url = r),
                                        (r = H(i)) && (t.link_url = r),
                                        t
                                      );
                                    });
                            return (null == a ? void 0 : a.length)
                              ? (0, U._)((0, G._)({}, e), {
                                  content: (0, U._)(
                                    (0, G._)(
                                      {},
                                      null == e ? void 0 : e.content
                                    ),
                                    { items: [...a] }
                                  ),
                                })
                              : e;
                          }
                          return e;
                        })),
                  t,
                  a
                )),
                T &&
                  ((o = e),
                  (e = S()(o, (e) => {
                    var t;
                    return !K.has(null != (t = e.presentation) ? t : "");
                  }))),
                (l = e),
                (e = j(t, V)
                  ? l
                  : Object.values(l).find(
                      (e) =>
                        "/adaptive/placeholders/pagetitle/v01/mobile" ===
                        e.presentation
                    )
                  ? l
                  : (0, G._)({ 0: P }, l)),
                _ &&
                  (e = ((e) => {
                    let t = new Set([100, 200, 300, 2300, 2400, 2500, 2600]);
                    return S()(e, (e) => e.order && t.has(e.order));
                  })(e));
            }
            return e;
          }, [R, t, q, W, B, V, T, a, u, _]);
        };
    },
  },
]);
