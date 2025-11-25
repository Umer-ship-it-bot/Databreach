"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2207],
  {
    36324: (e, a, d) => {
      d.d(a, { X: () => c, J: () => P });
      var t = d(3576),
        l = d(62701),
        n = d(14232),
        i = d(78502),
        o = d(85167),
        _ = d(53663),
        u = d(4594),
        r = d(74583),
        s = d(11976);
      let m = [],
        g = (e) => {
          let { trackExperimentExposedEvent: a } = (0, s.t)();
          (0, n.useEffect)(() => {
            let d = e.filter((e) => e && !m.includes(e));
            d.length > 0 && a.track({ treatments: d.map((e) => ({ id: e })) }),
              m.push(...d);
          }, [a, e]);
        },
        p = (e, a) => {
          var d, n;
          return e
            ? (0, l._)((0, t._)({}, e), {
                layout: (0, l._)((0, t._)({}, e.layout), {
                  name: ""
                    .concat(
                      null != (n = null == (d = e.layout) ? void 0 : d.name)
                        ? n
                        : "",
                      " ("
                    )
                    .concat(a, ")"),
                }),
              })
            : void 0;
        },
        c = (e, a, d) => {
          let {
              fallbackLayoutResponse: s,
              loadingLayoutResponse: m,
              overrideLayoutResponse: c,
            } = e,
            {
              fallbackLayoutResponse: P,
              loadingLayoutResponse: y,
              overrideLayoutResponse: L,
            } = (0, n.useMemo)(
              () => ({
                fallbackLayoutResponse: p(s, "fallback"),
                loadingLayoutResponse: p(m, "loading"),
                overrideLayoutResponse: p(c, "override"),
              }),
              [s, m, c]
            ),
            [f, v] = (0, _.v)(a, d),
            x = (0, i.$6)(v);
          g(f(r.$M));
          let b = f((e) => e),
            w = (0, n.useMemo)(
              () =>
                function () {
                  var e, a;
                  let d =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : (e) => e,
                    n = (null == b || null == (e = b.data) ? void 0 : e.layout)
                      ? null == b
                        ? void 0
                        : b.data
                      : void 0,
                    i = null != (a = null != L ? L : n) ? a : x ? P : y;
                  return d((0, l._)((0, t._)({}, b), { data: i }));
                },
              [x, b, P, y, L]
            ),
            k = !!f(u.K8),
            h = !!L,
            F =
              ((0, i.$6)(v) && !k) || h
                ? {
                    isSuccess: !0,
                    isError: !1,
                    isIdle: !1,
                    isLoading: !1,
                    status: o.RE.Success,
                  }
                : v;
          return [h ? w : k ? f : w, F];
        },
        P = (e, a) => {
          let [d, t] = (0, _.v)(e, a);
          return g(d(r.$M)), [d, t];
        };
    },
    45161: (e, a, d) => {
      d.d(a, { u: () => t });
      let t = "adapt_search_01";
    },
    62207: (e, a, d) => {
      d.d(a, { A: () => z });
      var t = d(3576),
        l = d(42252),
        n = d(40196),
        i = d(78502),
        o = d(36324),
        _ = d(61400),
        u = d(14232),
        r = d(68979),
        s = d(87125),
        m = d(1022),
        g = d(70395),
        p = d(42523),
        c = d(23945);
      let P = () => {
          let e = (0, l.rd)(),
            { asPath: a } = e,
            { keyword: d } = (0, _.MG)(e),
            t = (0, r.w)(s.IQ);
          return (0, u.useMemo)(
            () => ((0, m._j)(a) || (0, m.B5)(a)) && !!d && !t,
            [a, d, t]
          );
        },
        y = () => {
          let e = (0, l.rd)(),
            { asPath: a } = e,
            { keyword: d } = (0, _.MG)(e),
            t = (0, r.w)(s.IQ),
            { enabled: n } = (0, p.L)(),
            { enabled: i } = (0, g.pk)(),
            o = (0, _.li)(),
            P = (0, m._j)(a) || (0, m.B5)(a),
            y = (0, c.V)(),
            L = (0, u.useMemo)(() => P && !!d && !t, [P, d, t]);
          return {
            enabled: (0, u.useMemo)(
              () => L && i && n && o && y,
              [o, L, i, n, y]
            ),
            isPending: (0, u.useMemo)(
              () => P && !!d && (t || !i || !n || !y),
              [P, d, t, i, n, y]
            ),
          };
        };
      var L = d(31294),
        f = d(44145),
        v = d(94295),
        x = d(53724),
        b = d(29718);
      let w = (0, b.w)({
          layout: {
            id: "web_dplp_default",
            name: "web dplp default fallback",
            description: "web DPLP Default Layout Fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPagePopularFilters" },
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_search_01",
                          enrichment_variant: "leaf-category",
                        },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageEligibleItemsCarousel",
                        module_data: { row_index: 2 },
                      },
                      {
                        module_type: "ListingPageEligibleItemsMoreResults",
                        module_data: { row_index: 3 },
                      },
                      { module_type: "ListingPageRecoveryBuckets" },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        k = (0, b.w)({
          layout: {
            id: "web_slp_with_ugc_and_deals_fallback",
            name: "web SLP with UGC and deals fallback",
            description: "web SLP layout with UGC and deals fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: { placement_id: "adapt_search_01" },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          row_index_1_column: 6,
                          row_index_2_column: 3,
                          row_index_3_column: 2,
                          ad_name: "block2",
                        },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          row_index_1_column: 17,
                          row_index_2_column: 10,
                          row_index_3_column: 7,
                          ad_name: "block3",
                        },
                      },
                      {
                        module_type: "ListingPageInGridDeals",
                        module_data: { row_index: 4 },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 0,
                          card_index: 3,
                          card_index_4_column: 0,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 1,
                          card_index: 8,
                          card_index_4_column: 7,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 2,
                          card_index: 12,
                          card_index_4_column: 8,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 3,
                          card_index: 17,
                          card_index_4_column: 15,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 4,
                          card_index: 21,
                          card_index_4_column: 16,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 5,
                          card_index: 26,
                          card_index_4_column: 23,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 6,
                          card_index: 30,
                          card_index_4_column: 24,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 7,
                          card_index: 35,
                          card_index_4_column: 31,
                        },
                      },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        h = (0, b.w)({
          layout: {
            id: "web_slp_with_ugc_fallback",
            name: "web SLP with UGC fallback",
            description: "web SLP layout with UGC fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: { placement_id: "adapt_search_01" },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          row_index_1_column: 6,
                          row_index_2_column: 3,
                          row_index_3_column: 2,
                          ad_name: "block2",
                        },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          row_index_1_column: 16,
                          row_index_2_column: 9,
                          row_index_3_column: 6,
                          ad_name: "block3",
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 0,
                          card_index: 3,
                          card_index_4_column: 0,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 1,
                          card_index: 8,
                          card_index_4_column: 7,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 2,
                          card_index: 12,
                          card_index_4_column: 8,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 3,
                          card_index: 17,
                          card_index_4_column: 15,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 4,
                          card_index: 21,
                          card_index_4_column: 16,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 5,
                          card_index: 26,
                          card_index_4_column: 23,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 6,
                          card_index: 30,
                          card_index_4_column: 24,
                        },
                      },
                      {
                        module_type: "ListingPageFindsPostCard",
                        module_data: {
                          finds_post_index: 7,
                          card_index: 35,
                          card_index_4_column: 31,
                        },
                      },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        F = (0, b.w)({
          layout: {
            id: "web_category_leaf_node",
            name: "web cateogry leaf node fallback",
            description: "web Category Page Leaf Node Fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPagePopularFilters" },
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: { placement_id: "adapt_search_01" },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          gam_parameters: {
                            search_categories:
                              "furniture|livingroomfurniture|endsidetables",
                            search_item_types: "diningtables",
                          },
                          row_index: 1,
                          ad_name: "block2",
                        },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          gam_parameters: {
                            search_categories:
                              "furniture|livingroomfurniture|endsidetables",
                            search_item_types: "diningtables",
                          },
                          row_index: 5,
                          ad_name: "block2.5",
                        },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: {
                          gam_parameters: {
                            search_categories:
                              "furniture|livingroomfurniture|endsidetables",
                            search_item_types: "diningtables",
                          },
                          row_index: 8,
                          ad_name: "block3",
                        },
                      },
                      {
                        module_type: "ListingPageInGridDeals",
                        module_data: {
                          row_index: 4,
                          row_index_2_column: 3,
                          row_index_3_column: 4,
                        },
                      },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        C = (0, b.w)({
          layout: {
            id: "web_items_page_fallback",
            name: "web items page fallback",
            description: "Web Items Page Fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [{ module_type: "ListingPageProductListCards" }],
                  },
                ],
              },
            ],
          },
        }),
        R = (0, b.w)({
          layout: {
            id: "web_browse_default",
            name: "web slp default browse fallback",
            description: "web SLP Default Browse Layout Fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPagePopularFilters" },
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_search_01",
                          enrichment_variant: "leaf-category",
                        },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: { row_index: 1, ad_name: "block2" },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: { row_index: 4, ad_name: "block2.5" },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: { row_index: 7, ad_name: "block3" },
                      },
                      { module_type: "ListingPageRecoveryBuckets" },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        B = (0, b.w)({
          layout: {
            id: "web_slp_default",
            name: "web slp default fallback",
            description: "web SLP Default Layout Fallback",
            zones: [
              {
                zone_id: "main",
                module_groups: [
                  {
                    module_group_id: "ListingPage",
                    modules: [
                      { module_type: "ListingPagePopularFilters" },
                      { module_type: "ListingPageFilterBar" },
                      { module_type: "ListingPageResultsCount" },
                      { module_type: "ListingPageFulfillmentFilterBar" },
                      {
                        module_type: "ListingPageRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_search_01",
                          enrichment_variant: "leaf-category",
                        },
                      },
                      { module_type: "ListingPageProductListCards" },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: { row_index: 2, ad_name: "block1" },
                      },
                      {
                        module_type: "ListingPageBannerAd",
                        module_data: { row_index: 5, ad_name: "block2" },
                      },
                      { module_type: "ListingPageRecoveryBuckets" },
                      { module_type: "ListingPagePagination" },
                      { module_type: "ListingPageRelatedSearches" },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        z = () => {
          var e;
          let a = (0, l.rd)(),
            d = P(),
            { enabled: r, isPending: s } = y(),
            g = (0, n.x6)(a.asPath),
            p = (0, _.MG)(a),
            c = (0, _.WA)(),
            b = (() => {
              let e = P(),
                { enabled: a, isPending: d } = y(),
                t = (0, l.rd)(),
                i = (0, v.p)(),
                o = (0, n.Hq)(t.asPath) === x.iC,
                _ = (0, m.UD)(t.asPath),
                r = (0, m._j)(t.asPath) || (0, m.B5)(t.asPath),
                s = (0, m.GV)(t.asPath),
                g = (0, L.W)()(f.K9),
                p = _ && !g;
              return (0, u.useMemo)(
                () =>
                  ((e) => {
                    let {
                      isProductListingPageLayoutQueryEnabled: a,
                      isProductListingPageLayoutQueryPending: d,
                      isFindsPostPlpQueryEnabled: t,
                      isCategoryLeafNode: l,
                      isItemsPage: n,
                      isSearchOrDLP: i,
                      isPromoListingPage: o,
                    } = e;
                    if (!a && !d) {
                      if (o) return w;
                      if (t && l) return k;
                      if (t) return h;
                      if (l) return F;
                      if (n) return C;
                      if (!i) return R;
                    }
                  })({
                    isProductListingPageLayoutQueryEnabled: !!(e && a),
                    isProductListingPageLayoutQueryPending: d,
                    isFindsPostPlpQueryEnabled: i,
                    isCategoryLeafNode: p,
                    isItemsPage: s,
                    isSearchOrDLP: r,
                    isPromoListingPage: o,
                  }),
                [e, a, d, i, p, s, r, o]
              );
            })(),
            z = r && !s,
            M = !r && !s,
            [A, S] = (0, o.X)(
              {
                loadingLayoutResponse: B,
                fallbackLayoutResponse: null != b ? b : B,
                overrideLayoutResponse: d && M ? void 0 : b,
              },
              (0, t._)({}, p),
              {
                enabled: d && M,
                keepPreviousData: !0,
                pageId: g,
                shouldFetchBeforePendingInputsResolved: !0,
              }
            ),
            [I, G] = (0, o.J)((0, t._)({}, c), {
              enabled: z,
              keepPreviousData: !0,
              pageId: g,
              shouldFetchBeforePendingInputsResolved: !0,
            }),
            D =
              z &&
              (0, i.$6)(G) &&
              (null == (e = I()) ? void 0 : e.data) !== void 0,
            E = D ? G : S;
          return [D ? I : A, E, G];
        };
    },
    68690: (e, a, d) => {
      d.d(a, { M: () => n });
      var t = d(68979),
        l = d(87125);
      let n = () => {
        let e = (0, t.w)(l.A7),
          a = (0, t.w)(l.gY);
        return e || a;
      };
    },
    71193: (e, a, d) => {
      d.d(a, { H: () => l, I: () => t });
      let t = 8,
        l = "/adaptive/c_web_a_0045/v01/mobile";
    },
    74583: (e, a, d) => {
      d.d(a, {
        Vz: () => o,
        Y0: () => m,
        sp: () => s,
        kV: () => _,
        $M: () => r,
        Sl: () => u,
        ol: () => g,
      });
      var t = d(3576),
        l = d(62701),
        n = d(20172),
        i = d(45161);
      let o = (e) => {
          var a, d, i;
          return null !=
            (i =
              null ==
                (d = ((e) => {
                  var a, d, i;
                  return null !=
                    (i =
                      null == e ||
                      null == (d = e.zones) ||
                      null ==
                        (a = d.flatMap((e) => {
                          var a;
                          return null == e || null == (a = e.module_groups)
                            ? void 0
                            : a.map((a) =>
                                (0, l._)((0, t._)({}, a), {
                                  zone_id: e.zone_id,
                                })
                              );
                        }))
                        ? void 0
                        : a.filter(n.v))
                    ? i
                    : [];
                })(e)) ||
              null ==
                (a = d.flatMap((e) => {
                  var a;
                  return null == e || null == (a = e.modules)
                    ? void 0
                    : a.map((a) =>
                        (0, l._)((0, t._)({}, a), {
                          module_group_id: e.module_group_id,
                          zone_id: e.zone_id,
                        })
                      );
                }))
                ? void 0
                : a.filter(n.v))
            ? i
            : [];
        },
        _ = (e) => {
          var a, d, t;
          let l =
            null == (t = o(e)) ||
            null ==
              (d = t.filter(
                (e) =>
                  (null == e ? void 0 : e.module_type) === "ListingPageBannerAd"
              )) ||
            null ==
              (a = d.flatMap((e) => {
                var a;
                return null == e || null == (a = e.module_data)
                  ? void 0
                  : a.gam_parameters;
              }))
              ? void 0
              : a[0];
          if (l) return l;
        },
        u = (e) => {
          var a, d;
          return ((e) => {
            if (e)
              return e.map((e) => {
                var a;
                return (0, l._)((0, t._)({}, e), {
                  xv:
                    null == (a = e.xv)
                      ? void 0
                      : a.map((e) => {
                          var a;
                          return (0, l._)((0, t._)({}, e), {
                            xc: null != (a = e.xc) ? a : void 0,
                          });
                        }),
                });
              });
          })(
            null == e || null == (d = e.data) || null == (a = d.extensions)
              ? void 0
              : a.experiments_viewed
          );
        },
        r = (e) => {
          var a, d, t, l;
          return null !=
            (l =
              null == (t = u(e)) ||
              null ==
                (d = t.flatMap((e) => {
                  let { xv: a } = e;
                  return a;
                })) ||
              null ==
                (a = d.map(function () {
                  let { xt: e = "" } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return e;
                }))
                ? void 0
                : a.filter((e) => !!e))
            ? l
            : [];
        },
        s = (e) => {
          var a, d, t, l, n;
          return null !=
            (n =
              null ==
                (t = o(
                  null == e || null == (l = e.data) ? void 0 : l.layout
                )) ||
              null ==
                (d = t.find((e) => {
                  var a, d;
                  return (
                    "ListingPageRecommendedProducts" === e.module_type &&
                    (null == (a = e.module_data) ? void 0 : a.placement_id) ===
                      i.u &&
                    (null == (d = e.module_data) ? void 0 : d.category_id)
                  );
                })) ||
              null == (a = d.module_data)
                ? void 0
                : a.category_id)
            ? n
            : void 0;
        },
        m = (e) => {
          var a, d, t;
          let l =
            null ==
            (a = o(null == e || null == (d = e.data) ? void 0 : d.layout))
              ? void 0
              : a.filter(
                  (e) => "ListingPageRecommendedProducts" === e.module_type
                );
          return null !=
            (t =
              null == l
                ? void 0
                : l
                    .map((e) => {
                      var a, d, t;
                      return {
                        category_id:
                          null == (a = e.module_data) ? void 0 : a.category_id,
                        placement_id:
                          null == (d = e.module_data) ? void 0 : d.placement_id,
                        suppress_sponsored_ads:
                          null == e || null == (t = e.module_data)
                            ? void 0
                            : t.suppress_sponsored_ads,
                      };
                    })
                    .filter((e) => {
                      let { category_id: a, placement_id: d } = e;
                      return a && d;
                    }))
            ? t
            : [];
        },
        g = (e) => {
          var a, d, t, l, n;
          return null !=
            (n =
              null ==
                (t = o(
                  null == e || null == (l = e.data) ? void 0 : l.layout
                )) ||
              null ==
                (d = t.find((e) => {
                  var a;
                  return (
                    "ListingPageTitle" === e.module_type &&
                    (null == (a = e.module_data) ? void 0 : a.query_intent)
                  );
                })) ||
              null == (a = d.module_data)
                ? void 0
                : a.query_intent)
            ? n
            : void 0;
        };
    },
    94295: (e, a, d) => {
      d.d(a, { p: () => _ });
      var t = d(68979),
        l = d(25017),
        n = d(83966),
        i = d(71193),
        o = d(68690);
      let _ = () => {
        let e = (0, o.M)(),
          a = Object.values((0, n.n)()).some((e) => e.presentation === i.H),
          d = (0, t.w)(l.F1);
        return !!(a && !(null == d ? void 0 : d.length) && !e);
      };
    },
  },
]);
