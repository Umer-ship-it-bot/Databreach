(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4028],
  {
    939: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => u });
      var r = n(3576),
        a = n(62701),
        i = n(14232),
        l = n(78502),
        o = n(26989),
        s = n(32038),
        c = n(33985),
        d = n(23021);
      let u = (e, t) => {
        let n =
            null == e
              ? void 0
              : e
                  .filter((e) => !(0, s.cL)(e) && !(0, s.CN)(e))
                  .map((e) => (0, o.Gs)(e)),
          { fulfillmentVariables: u, isFulfillmentQueryEnabled: m } = (0,
          d.F)(),
          [p, h] = (0, c.t)(
            (0, r._)(
              (0, a._)((0, r._)({}, u), {
                tcins: null == n ? void 0 : n.join(","),
              }),
              t
            ),
            { enabled: !!(null == n ? void 0 : n.length) && m }
          ),
          v = p();
        return [
          (0, i.useMemo)(
            () =>
              ((e, t) =>
                null == e
                  ? void 0
                  : e.map((e) => {
                      var n, i, l;
                      let s =
                        null == t
                          ? void 0
                          : t.find((t) => {
                              var n, r;
                              return (
                                (0, o.Gs)(e) ===
                                (null != (r = (0, o.Gs)(t))
                                  ? r
                                  : null == t || null == (n = t.fulfillment)
                                  ? void 0
                                  : n.product_id)
                              );
                            });
                      return (0, a._)((0, r._)({}, e), {
                        free_shipping:
                          null != (n = null == s ? void 0 : s.free_shipping)
                            ? n
                            : e.free_shipping,
                        fulfillment:
                          null != (i = null == s ? void 0 : s.fulfillment)
                            ? i
                            : e.fulfillment,
                        store_positions:
                          null != (l = null == s ? void 0 : s.store_positions)
                            ? l
                            : e.store_positions,
                      });
                    }))(e, null == v ? void 0 : v.product_summaries),
            [e, v]
          ),
          (0, l.NO)(h),
        ];
      };
    },
    8036: (e, t, n) => {
      "use strict";
      n.d(t, {
        $O: () => o,
        K0: () => r,
        KQ: () => c,
        Pr: () => l,
        RC: () => p,
        SG: () => h,
        ZH: () => s,
        b5: () => a,
        hO: () => m,
        hv: () => d,
        iE: () => u,
        vU: () => i,
      });
      let r = "d_channel",
        a = "5zkty",
        i = "5zktx",
        l = "cl92v",
        o = "5zl7w",
        s = "fwtfr",
        c = ["dbps1", i, "lx9a7"];
      [...c];
      let d = r,
        u = "d_brand_all",
        m = "xmf9o",
        p = "uj3xg",
        h = "d_deals";
    },
    10244: (e, t, n) => {
      "use strict";
      n.d(t, {
        $P: () => d,
        NJ: () => o,
        W1: () => l,
        aC: () => i,
        yM: () => c,
      });
      var r = n(85167),
        a = n(951);
      let i = (e, t) => (null == t ? void 0 : t.queryResult),
        l = (e, t) =>
          ((e, t) => {
            var n;
            return (
              (null == t || null == (n = t.queryResult) ? void 0 : n.status) ===
              r.RE.Success
            );
          })(0, t) ||
          ((e, t) => {
            var n;
            return (
              (null == t || null == (n = t.queryResult) ? void 0 : n.status) ===
              r.RE.Error
            );
          })(0, t),
        o = (e, t) => {
          var n;
          return (
            (null == t || null == (n = t.queryResultFulfillment)
              ? void 0
              : n.status) === r.RE.Success
          );
        },
        s = (e, t) => {
          var n;
          return (
            (null == t || null == (n = t.queryResultFulfillment)
              ? void 0
              : n.status) === r.RE.Error
          );
        },
        c = (e, t) => o(e, t) || s(e, t),
        d = (e, t) => {
          var n;
          return (
            !!s(e, t) ||
            (!!c(e, t) &&
              (!(0, a.uo)(e) ||
                !!(null == e || null == (n = e.fulfillment)
                  ? void 0
                  : n.error_message)))
          );
        };
    },
    17769: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => a });
      var r = n(14232);
      function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          [t, n] = (0, r.useState)(e);
        return [
          t,
          (0, r.useCallback)(
            (e) => n((t) => ("boolean" == typeof e ? e : !t)),
            []
          ),
        ];
      }
    },
    18666: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => c });
      var r = n(19427),
        a = n(17379),
        i = n(70418),
        l = n(20881),
        o = n(94175);
      let s = "@web/domain-locations/get-first-available-window",
        { useQuery: c } = (0, a.T)({
          name: s,
          keyFn: (e) => {
            let { location_id: t } = e;
            if (!t) throw TypeError("location_id is required");
            return [s, { location_id: "".concat(t) }];
          },
          queryFn: async (e) => {
            let { location_id: t = "" } = e,
              {
                apis: { locationFulfillmentAggregations: n },
                baseUrl: a,
                apiKey: o,
              } = (0, r.$)().services.apiPlatform,
              s = i.o.buildURLWithParams(
                new URL("".concat(n.endpointPaths.path, "/").concat(t), a),
                { field_groups: "shipt_windows", key: o }
              ),
              { data: c = null, ok: d, statusText: u } = await (0, l.Jt)(s, {});
            if (d) return c;
            throw Error("".concat(u));
          },
          defaultOptions: { staleTime: o.L },
        });
    },
    21554: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => h, u: () => p });
      var r = n(14232),
        a = n(78502),
        i = n(987),
        l = n(87347),
        o = n(18666),
        s = n(98308),
        c = n(28324),
        d = n(73208),
        u = n(32038),
        m = n(23021);
      let p = () => {
          let { fulfillmentVariables: e, cartResponse: t } = (0, m.F)(),
            { scheduled_delivery_store_id: n } = null != e ? e : {},
            [p] = (0, i.sQ)({ store_id: null != n ? n : "" }, { enabled: !!n }),
            h = p(l.RI),
            [v, x] = (0, o.B)({ location_id: n }, { enabled: !!n && h }),
            g = v((0, s.wb)({ isAdultBeverage: !1 })),
            f = v((0, s.wb)({ isAdultBeverage: !0 })),
            y = (0, c.qt)(t),
            b = (0, d.K1)(u.ve) || y ? f : g,
            w = (0, a.NO)(x);
          return (0, r.useMemo)(
            () => ({ earliestDeliveryWindowStartTime: b, queryState: w }),
            [b, w]
          );
        },
        h = () => p().earliestDeliveryWindowStartTime;
    },
    22903: (e) => {
      e.exports = {
        ndsButtonGroup: "styles_ndsButtonGroup__Qf1z5",
        stacked: "styles_stacked__Y6hZn",
      };
    },
    25017: (e, t, n) => {
      "use strict";
      n.d(t, {
        Cv: () => k,
        F1: () => l,
        GL: () => x,
        Nx: () => f,
        W$: () => o,
        WF: () => u,
        W_: () => g,
        XN: () => b,
        c8: () => _,
        dw: () => j,
        e0: () => h,
        mQ: () => c,
        o5: () => w,
        ox: () => y,
        qy: () => C,
        rI: () => s,
        vF: () => v,
      });
      var r = n(35881),
        a = n(8036),
        i = n(43580);
      let l = (e) => {
          var t;
          return null == (t = (0, i.MH)(e)) ? void 0 : t.bread_box_list;
        },
        o = (0, r.Mz)(l, (e) =>
          null == e ? void 0 : e.map((e) => e.facet_id)
        ),
        s = (0, r.Mz)(l, (e) =>
          null == e ? void 0 : e.map((e) => e.values).flat()
        ),
        c = (0, r.Mz)(s, (e) =>
          null == e ? void 0 : e.map((e) => (null == e ? void 0 : e.id))
        ),
        d = (e) => (t) => {
          let n = l(t);
          return !!(null == n
            ? void 0
            : n.some((t) => {
                var n;
                return null == (n = t.values)
                  ? void 0
                  : n.some((t) => t.id && e.includes(t.id));
              }));
        },
        u = (e) => {
          var t;
          let n = l(e),
            r = null == n ? void 0 : n.find((e) => e.facet_id === a.K0),
            i =
              null == r || null == (t = r.values)
                ? void 0
                : t.filter((e) => e.id !== a.ZH);
          return !!(null == i ? void 0 : i.length);
        },
        m = (e) => (t) => {
          var n;
          let r = l(t),
            i = null == r ? void 0 : r.find((e) => e.facet_id === a.K0),
            o =
              null == i || null == (n = i.values)
                ? void 0
                : n.filter((e) => e.id !== a.ZH);
          return (
            !!o &&
            !(o.length > 1) &&
            (null == o
              ? void 0
              : o.some((t) => e === (null == t ? void 0 : t.id)))
          );
        },
        p = (e) => (t) => m(e)(t),
        h = (e) => d(a.KQ)(e),
        v = (e) => {
          let t;
          return ((t = a.Pr), (e) => d([t])(e))(e);
        },
        x = (e) => m(a.vU)(e),
        g = (e) => p(a.$O)(e),
        f = (e) => p(a.Pr)(e),
        y = (e) => p(a.b5)(e),
        b = (e) => {
          var t;
          return !!(null == (t = s(e)) ? void 0 : t.length);
        },
        w = (e) =>
          (0, r.Mz)(s, (t) => {
            var n;
            return (
              null !=
                (n =
                  null == t
                    ? void 0
                    : t.some(
                        (t) => (null == t ? void 0 : t.id) && t.id === e
                      )) && n
            );
          }),
        _ = (e) =>
          (0, r.Mz)(l, (t) => {
            var n;
            return null == t ||
              null ==
                (n = t.find((t) => (null == t ? void 0 : t.facet_id) === e))
              ? void 0
              : n.values;
          }),
        k = (e) =>
          (0, r.Mz)(l, (t) => {
            var n;
            return null == t || null == (n = t.find((t) => t.facet_id === e))
              ? void 0
              : n.values;
          }),
        j = (e) =>
          (0, r.Mz)(k(e), (e) =>
            null == e
              ? void 0
              : e.reduce(
                  (e, t) => [
                    ...e,
                    ...((null == t ? void 0 : t.id) ? [t.id] : []),
                  ],
                  []
                )
          ),
        C = (e) => {
          var t, n, r, l;
          return null == (l = (0, i.MH)(e)) ||
            null == (r = l.bread_box_list) ||
            null == (n = r.find((e) => e.facet_id === a.SG)) ||
            null == (t = n.values)
            ? void 0
            : t.find((e) => e.id === a.RC);
        };
    },
    27333: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => u });
      var r = n(70418),
        a = n(53842),
        i = n(54687),
        l = n(17379),
        o = n(4042),
        s = n(19427),
        c = n(30864);
      let d = "@web/domain-product/get-product-summary-for-drawer",
        { useQuery: u } = (0, l.T)({
          name: d,
          keyFn: (e) => {
            if (!e.tcins)
              throw Error("TCINS not defined for product summary drawer query");
            return [d, e];
          },
          queryFn: async (e) => {
            let {
                apiKey: t,
                baseUrl: n,
                apis: { product: l },
              } = (0, s.$)().services.redskyAggregations,
              { tcins: d, pricing_store_id: u = o.Vz } = null != e ? e : {},
              m = await (0, i.E)(),
              {
                data: p,
                ok: h,
                statusText: v,
              } = await (0, c.T)(null == d ? void 0 : d.split(","), (e) => {
                let i = {
                  key: t,
                  effective_date: m,
                  tcins: e.join(","),
                  pricing_store_id: u,
                };
                if (!i.tcins)
                  throw Error(
                    "TCINS not defined for product summary drawer query"
                  );
                let o = r.o.buildURLWithParams(
                  new URL(l.endpointPaths.productSummaryForDrawer, n),
                  i
                );
                return (0, a.n)(o, {
                  partialErrorTag:
                    "get_product_summary_for_drawer_v1_partial_api_error",
                });
              });
            if (h) {
              var x;
              return null != (x = null == p ? void 0 : p.data) ? x : null;
            }
            throw Error("".concat(v));
          },
        });
    },
    41034: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => o });
      var r = n(37876),
        a = n(27333),
        i = n(75570),
        l = n(1800);
      let o = (e) => {
        var t, n;
        let { shoppableDrawerData: o } = e,
          s =
            null !=
            (n =
              null == o || null == (t = o.tcins)
                ? void 0
                : t.replace(/\s+/g, ""))
              ? n
              : "",
          [c] = (0, a.t)({ tcins: s, pricing_store_id: "3991" }),
          d = c((e) => (null == e ? void 0 : e.product_summaries));
        return (0, r.jsx)("div", {
          children:
            d &&
            (0, r.jsx)("ul", {
              "data-test": "shoppableDrawer-seo-list",
              children:
                null == d
                  ? void 0
                  : d.map((e) => {
                      var t, n, a, o, s, c;
                      return (0, r.jsx)(
                        "li",
                        {
                          children: (0, r.jsx)(i.N, {
                            "data-test": "shoppableDrawer-seo-link",
                            href:
                              null == (n = e.item) || null == (t = n.enrichment)
                                ? void 0
                                : t.buy_url,
                            children: (0, l.D4)(
                              null == (o = e.item) ||
                                null == (a = o.product_description)
                                ? void 0
                                : a.title
                            ),
                          }),
                        },
                        ""
                          .concat(e.tcin, " - ")
                          .concat(
                            null == (c = e.item) ||
                              null == (s = c.product_description)
                              ? void 0
                              : s.title
                          )
                      );
                    }),
            }),
        });
      };
      o.displayName = "ShoppableDrawerSeoLinks";
    },
    48279: (e) => {
      e.exports = {
        ndsButtonTertiary: "styles_ndsButtonTertiary__9oxcn",
        sm: "styles_sm__rBhwR",
        md: "styles_md__2mIUb",
        lg: "styles_lg__O6eow",
      };
    },
    50848: (e, t, n) => {
      "use strict";
      n.d(t, { X1: () => l, pk: () => i, sv: () => s, zg: () => o });
      var r = n(77232),
        a = n(98601);
      let i = r.I4.div
          .attrs({ "data-test": "storycard--action" })
          .withConfig({ componentId: "sc-8718109-0" })(
          [
            "padding:",
            ";background-color:",
            ";display:flex;place-content:center center;border-radius:50%;overflow:hidden;height:32px;width:32px;border:1px solid transparent;button:hover &,a:hover &,button:focus &,a:focus &{border:1px dashed ",
            ";box-shadow:0 0 0 1px ",
            ";}button:active &,a:active &{border:1px solid ",
            ";background-color:",
            ";}svg{max-width:100%;}",
          ],
          a.xe.generic.x1,
          a.Tj.palette.white,
          a.Tj.palette.gray.darkest,
          a.Tj.palette.white,
          a.Tj.palette.white,
          a.Tj.palette.gray.darkest
        ),
        l = (0, r.I4)(i).withConfig({ componentId: "sc-8718109-1" })(
          [
            "display:flex;button:active &,a:active &{svg{path{&.fill1{fill:",
            ";}&.fill2{fill:",
            ";}}}}",
          ],
          a.Tj.palette.gray.darkest,
          a.Tj.palette.white
        ),
        o = r.I4.div.withConfig({ componentId: "sc-8718109-2" })([
          "margin:1px;",
        ]),
        s = r.I4.div.withConfig({ componentId: "sc-8718109-3" })(
          [
            "display:flex;z-index:1;position:absolute;align-items:center;justify-content:center;padding:6px;left:auto;right:",
            ";bottom:",
            ";transform:translate(",
            ");",
          ],
          (e) => ((null == e ? void 0 : e.isMotionVideo) ? "44px" : "0"),
          (e) =>
            (null == e ? void 0 : e.isHero) ? "".concat(a.xe.generic.x11) : "0",
          (e) => ((null == e ? void 0 : e.ribbonShift) ? "-6px, -6px" : "0, 0")
        );
    },
    51670: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => d });
      var r = n(3576),
        a = n(62701),
        i = n(65699),
        l = n(37876),
        o = n(98601),
        s = n(50848);
      let c = (e) => {
        var { height: t = "18", viewBox: n = "0 0 33 33", width: c = "18" } = e,
          d = (0, i._)(e, ["height", "viewBox", "width"]);
        return (0, l.jsx)(s.zg, {
          children: (0, l.jsxs)(
            "svg",
            (0, a._)(
              (0, r._)(
                {
                  height: t,
                  preserveAspectRatio: "xMaxYMax",
                  viewBox: n,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                },
                d
              ),
              {
                children: [
                  (0, l.jsx)("path", {
                    className: "fill1",
                    d: "M28.562 31.8h-24l2-23h20l2 23z",
                    fill: o.Tj.palette.white,
                  }),
                  (0, l.jsx)("path", {
                    className: "fill1",
                    d: "M20.762 15.2v-10a4.012 4.012 0 00-4-4h-.4a4.012 4.012 0 00-4 4v10.1",
                    fill: o.Tj.palette.white,
                  }),
                  (0, l.jsx)("path", {
                    className: "fill1",
                    d: "M26.87 9.013a.967.967 0 00-.958-.878h-4.616v-2.5A4.813 4.813 0 0016.488.827h-.384a4.813 4.813 0 00-4.807 4.808v2.5H6.68a.967.967 0 00-.957.878L3.8 31.127a.961.961 0 00.957 1.046h23.077a.961.961 0 00.958-1.045z",
                    fill: o.Tj.palette.white,
                  }),
                  (0, l.jsx)("path", {
                    className: "fill1",
                    d: "M27.05 9a.751.751 0 00-.7-.7h-5V5.4a4.827 4.827 0 00-4.7-4.7h-.4a4.827 4.827 0 00-4.7 4.7v2.8h-4.9a.684.684 0 00-.7.7l-2 22.5a.773.773 0 00.7.8h23.6a.713.713 0 00.7-.8v-.1z",
                    fill: o.Tj.palette.white,
                  }),
                  (0, l.jsx)("path", {
                    className: "fill2",
                    d: "M27.293 8.714a1.006 1.006 0 00-.996-.914h-4.8V5.2a5.006 5.006 0 00-5-5h-.4a5.006 5.006 0 00-5 5v2.6h-4.8a1.006 1.006 0 00-.996.914l-2 22.998a1 1 0 00.996 1.088h24a1 1 0 00.996-1.087zM12.097 16.3a1.001 1.001 0 001-1V9.8h6.4v5.4a1 1 0 102 0V9.8h3.883l1.826 21H5.388l1.826-21h3.883v5.5a1.001 1.001 0 001 1zm1-8.5V5.2a3.003 3.003 0 013-3h.4a3.003 3.003 0 013 3v2.6z",
                    fill: o.Tj.palette.gray.dark,
                  }),
                ],
              }
            )
          ),
        });
      };
      c.displayName = "BagIcon";
      let d = (e) => {
        var {
            height: t,
            isHero: n,
            onClick: o,
            viewBox: d,
            width: u,
            isMotionVideo: m,
            ribbonShift: p = !0,
          } = e,
          h = (0, i._)(e, [
            "height",
            "isHero",
            "onClick",
            "viewBox",
            "width",
            "isMotionVideo",
            "ribbonShift",
          ]);
        return (0, l.jsxs)(
          s.sv,
          (0, a._)(
            (0, r._)({ isHero: n, isMotionVideo: m, ribbonShift: p }, h),
            {
              children: [
                (0, l.jsx)("span", {
                  className: "h-sr-only",
                  children: "shop",
                }),
                (0, l.jsx)(s.X1, {
                  children: (0, l.jsx)(c, {
                    height: t,
                    onClick: o,
                    viewBox: d,
                    width: u,
                  }),
                }),
              ],
            }
          )
        );
      };
      d.displayName = "BagActionIcon";
    },
    53293: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => r });
      let r = (e) => {
        let { link_url: t = "" } = e;
        return (
          "https://www.target.com/l/target-circle/-/N-pzno9?action=base-enroll-flyout" ===
            t ||
          (null == t
            ? void 0
            : t.includes(
                "/l/target-circle/-/N-pzno9?action=base-enroll-flyout"
              ))
        );
      };
    },
    54432: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => i });
      var r = n(14232),
        a = n(22600);
      let i = () => {
        let {
          openJoinCircleModal: e,
          closeJoinCircleModal: t,
          isCircleEnrolled: n,
          isGuestLoggedIn: i,
          slot: l,
        } = (0, r.useContext)(a.x);
        return {
          closeJoinCircleModal: t,
          openJoinCircleModal: e,
          isCircleEnrolled: n,
          isGuestLoggedIn: i,
          slot: l,
        };
      };
    },
    56240: (e, t, n) => {
      "use strict";
      n.d(t, { Xx: () => a, w2: () => l });
      var r = n(98601);
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [
            { media: r.fi.xl, imageUrl: e.image_path_xl },
            { media: r.fi.lg, imageUrl: e.image_path_lg },
            { media: r.fi.md, imageUrl: e.image_path_md },
            { media: "0px", imageUrl: e.image_path },
          ];
        },
        i = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            { type: n, version: r, id: a } = e;
          return [n, r, a, ...t].join("|");
        },
        l = (e, t, n) =>
          i(
            ((e, t) => {
              var n, r, a, i;
              return {
                id: null != e ? e : "",
                type:
                  null !=
                  (a = null == (n = t.metadata) ? void 0 : n.component_type)
                    ? a
                    : "",
                version:
                  null !=
                  (i = null == (r = t.metadata) ? void 0 : r.component_version)
                    ? i
                    : "",
              };
            })(e, t),
            n
          );
    },
    58096: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => c });
      var r = n(3576),
        a = n(65699),
        i = n(37876),
        l = n(15039),
        o = n(18027),
        s = n(48279);
      let c = (e) => {
        var { className: t, size: n = "md" } = e,
          c = (0, a._)(e, ["className", "size"]);
        return (0, i.jsx)(
          o.S,
          (0, r._)({ className: l(s.ndsButtonTertiary, t, s[n]) }, c)
        );
      };
      c.displayName = "ButtonTertiary";
    },
    61281: (e, t, n) => {
      "use strict";
      n.d(t, { $3: () => i, Bi: () => l, xO: () => o });
      var r = n(98601);
      let a = "320px",
        i = {
          xxs: "12",
          xs: "15",
          sm: "18.75",
          md: "23.4375",
          lg: "29.296875",
          xl: "36.62109375",
          xxl: "45.7763671875",
          xxxl: "57.220458984375",
        },
        l = (e, t) => {
          let n = Number(
            ((e) => (null == e ? void 0 : e.replace("px", "")))(e)
          );
          return "".concat((Number(t) / n) * 100, "vw");
        },
        o =
          "\n  @media (min-width: 0) {\n    .storycard--headline {\n      font-size: "
            .concat(
              l(a, i.md),
              ";\n    }\n\n    .storycard--detail {\n      font-size: "
            )
            .concat(l(a, i.xs), ";\n    }\n  }\n\n  @media (min-width: ")
            .concat(
              r.fi.md,
              ") {\n    .storycard--headline {\n      font-size: "
            )
            .concat(
              l(r.fi.md, i.lg),
              ";\n    }\n\n    .storycard--detail {\n      font-size: "
            )
            .concat(l(r.fi.md, i.sm), ";\n    }\n  }\n\n  @media (min-width: ")
            .concat(
              r.fi.lg,
              ") {\n    .storycard--headline {\n      font-size: "
            )
            .concat(
              l(r.fi.lg, i.lg),
              ";\n    }\n\n    .storycard--detail {\n      font-size: "
            )
            .concat(l(r.fi.lg, i.sm), ";\n    }\n  }\n\n  @media (min-width: ")
            .concat(
              r.fi.xl,
              ") {\n    .storycard--headline {\n      font-size: "
            )
            .concat(
              +i.xl,
              "px;\n    }\n\n    .storycard--detail {\n      font-size: "
            )
            .concat(+i.md, "px;\n    }\n  }\n");
      "\n  @media (min-width: 0) {\n    .storycard--headline {\n      font-size: "
        .concat(
          l(a, i.xxs),
          ";\n    }\n\n    .storycard--detail {\n      font-size: "
        )
        .concat(l(a, i.xxs), ";\n    }\n  }\n\n  @media (min-width: ")
        .concat(r.fi.md, ") {\n    .storycard--headline {\n      font-size: ")
        .concat(
          l(r.fi.md, i.xs),
          ";\n    }\n\n    .storycard--detail {\n      font-size: "
        )
        .concat(l(r.fi.md, i.xxs), ";\n    }\n  }\n\n  @media (min-width: ")
        .concat(r.fi.lg, ") {\n    .storycard--headline {\n      font-size: ")
        .concat(
          l(r.fi.lg, i.xs),
          ";\n    }\n\n    .storycard--detail {\n      font-size: "
        )
        .concat(l(r.fi.lg, i.xxs), ";\n    }\n  }\n\n  @media (min-width: ")
        .concat(r.fi.xl, ") {\n    .storycard--headline {\n      font-size: ")
        .concat(
          +i.sm,
          "px;\n    }\n\n    .storycard--detail {\n      font-size: "
        )
        .concat(+i.xs, "px;\n    }\n  }\n");
    },
    67253: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => r });
      let r = 300;
    },
    69241: (e, t, n) => {
      "use strict";
      function r() {
        for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                a = "";
              if ("string" == typeof t || "number" == typeof t) a += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (n = 0; n < i; n++)
                    t[n] && (r = e(t[n])) && (a && (a += " "), (a += r));
                } else for (r in t) t[r] && (a && (a += " "), (a += r));
              return a;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, { $: () => r, A: () => a });
      let a = r;
    },
    74770: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => l });
      var r = n(77232),
        a = n(18027),
        i = n(98601);
      let l = (0, r.I4)(a.S).withConfig({ componentId: "sc-e285c12f-0" })(
        ["", " border-radius:", ";"],
        (e) => {
          let { variant: t } = e;
          return "dark" === t
            ? "\n      --nds-button-bg: "
                .concat(
                  i.Tj.background.darkest,
                  ";\n      --nds-button-color: "
                )
                .concat(
                  i.Tj.text.onDark.primary,
                  ";\n      --nds-button-hover-bg: "
                )
                .concat(
                  i.Tj.palette.black,
                  ";\n      --nds-button-hover-color: "
                )
                .concat(
                  i.Tj.text.onDark.primary,
                  ";\n      --nds-button-active-bg: "
                )
                .concat(
                  i.Tj.interactive.secondary.active,
                  ";\n      --nds-button-active-color: "
                )
                .concat(i.Tj.text.onDark.primary, ";\n\n      border-color: ")
                .concat(
                  i.Tj.background.darkest,
                  ";\n\n      &:hover {\n        border-color: "
                )
                .concat(
                  i.Tj.palette.gray.darkest,
                  ";\n      }\n    \n      &:active {\n        border-color: "
                )
                .concat(i.Tj.interactive.secondary.active, ";\n      }\n")
            : "\n       --nds-button-bg: "
                .concat(i.Tj.palette.red.dark, ";\n      --nds-button-color: ")
                .concat(
                  i.Tj.text.onDark.primary,
                  ";\n      --nds-button-hover-bg: "
                )
                .concat(
                  i.Tj.palette.red.red24,
                  ";\n      --nds-button-hover-color: "
                )
                .concat(
                  i.Tj.text.onDark.primary,
                  ";\n      --nds-button-active-bg: "
                )
                .concat(
                  i.Tj.interactive.secondary.active,
                  ";\n      --nds-button-active-color: "
                )
                .concat(i.Tj.text.onDark.primary, ";\n      border-color: ")
                .concat(
                  i.Tj.palette.red.dark,
                  ";\n\n      &:hover {\n        border-color: "
                )
                .concat(
                  i.Tj.palette.red.red24,
                  ";\n      }\n    \n      &:active {\n        border-color: "
                )
                .concat(i.Tj.interactive.secondary.active, ";\n      }");
        },
        i.PQ.radius.transitionToRounded.x1
      );
    },
    75416: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => s });
      var r = n(37876),
        a = n(14232),
        i = n(16403),
        l = n(74492),
        o = n(19351);
      let s = (e) => {
        let { children: t, trackingPrefix: n } = e,
          s = (0, a.useRef)({}),
          c = (0, o.z1)(),
          d = (0, a.useCallback)(() => {
            s.current[i.o.initialize] ||
              c.trackEvent({
                guest: { eventType: "customInteraction" },
                customInteraction: { value: "".concat(n, "|video") },
              });
          }, [c, n]),
          u = (0, a.useCallback)(() => {
            s.current[i.o.play] ||
              c.trackEvent({
                guest: { eventType: "customInteraction" },
                customInteraction: { value: "".concat(n, "|video_play") },
              });
          }, [c, n]),
          m = (0, a.useCallback)(() => {
            s.current[i.o.captions] ||
              c.trackEvent({
                guest: { eventType: "customInteraction" },
                customInteraction: { value: "".concat(n, "|captions_click") },
              });
          }, [c, n]),
          p = (0, a.useCallback)(() => {
            s.current[i.o.transcript] ||
              c.trackEvent({
                guest: { eventType: "customInteraction" },
                customInteraction: { value: "".concat(n, "|transcript_click") },
              });
          }, [c, n]),
          h = (0, a.useCallback)(() => {
            s.current[i.o.percentComplete] ||
              c.trackEvent({
                guest: { eventType: "customInteraction" },
                customInteraction: { value: "".concat(n, "|video_complete") },
              });
          }, [c, n]),
          v = (0, a.useCallback)(
            (e) => {
              switch (e) {
                case i.o.initialize:
                  d();
                  break;
                case i.o.play:
                  u();
                  break;
                case i.o.captions:
                  m();
                  break;
                case i.o.transcript:
                  p();
                  break;
                case i.o.percentComplete:
                  h();
              }
              s.current[e] = !0;
            },
            [m, d, h, u, p]
          );
        return (0, r.jsx)(l.x.Provider, {
          value: { handleVideoEvent: v },
          children: t,
        });
      };
      s.displayName = "VideoEventsTracking";
    },
    77486: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => ep });
      var r = n(3576),
        a = n(62701),
        i = n(65699),
        l = n(37876),
        o = n(14232),
        s = n(15039),
        c = n(40123),
        d = n(57410),
        u = n(75570),
        m = n(42773),
        p = n(73880),
        h = n(1800),
        v = n(23945),
        x = n(48603),
        g = n(2503),
        f = n(54432),
        y = n(98601),
        b = n(1331),
        w = n(55777),
        _ = n(48847),
        k = n(10939);
      let j = { "min-width": "auto", width: "100%" };
      var C = n(77232),
        T = n(18027),
        z = n(6908),
        N = n(61281);
      let I = (0, C.I4)(T.S).withConfig({ componentId: "sc-4e0d0130-0" })(
          ["border-color:transparent;border-radius:", ";"],
          y.PQ.radius.transitionToRounded.x1
        ),
        S = C.I4.div.withConfig({ componentId: "sc-4e0d0130-1" })(
          [
            "position:absolute;bottom:0;left:50%;transform:translateX(-50%);@media (min-width:",
            "){bottom:10px;}",
            ";button{@media (min-width:0){font-size:",
            ";}@media (min-width:",
            "){font-size:",
            ";}@media (min-width:",
            "){font-size:",
            ";}@media (min-width:",
            "){font-size:",
            "px;}}",
          ],
          y.fi.xl,
          (e) =>
            e.staticPosition &&
            "\n    @media (min-width: 0) {\n      position: static;\n      bottom: auto;\n      left: auto;\n      transform: none;\n    }\n  ",
          (0, N.Bi)("320", N.$3.xxs),
          y.fi.md,
          (0, N.Bi)("668", N.$3.xxs),
          y.fi.lg,
          (0, N.Bi)("992", N.$3.sm),
          y.fi.xl,
          +N.$3.sm
        ),
        P = (0, C.I4)(z.V).withConfig({ componentId: "sc-4e0d0130-2" })([
          "width:100%;opacity:1;transition:opacity 350ms ease-in-out;min-height:1px;",
        ]),
        E = (0, C.I4)(z.V).withConfig({ componentId: "sc-4e0d0130-3" })([
          "width:100%;transition:opacity 350ms ease-in-out;position:absolute !important;inset:0;min-height:1px;",
        ]),
        M = C.I4.div.withConfig({ componentId: "sc-4e0d0130-4" })([
          "width:90vw;max-width:900px;",
        ]),
        B = C.I4.div.withConfig({ componentId: "sc-4e0d0130-5" })(
          ["margin-left:", ";"],
          y.xe.generic.x2
        ),
        R = (e) => {
          var t, n;
          let {
              captions: r,
              handleClose: a,
              isOpen: i,
              onOpenChange: s,
              placeholder: c,
              playNow: d,
              source: u,
              transcript: m,
              title: p = "",
            } = e,
            h = (0, o.useRef)(null),
            v = (0, b.X)({
              key: "managedContentVideo",
              param1:
                null != (n = null == u || null == (t = u[0]) ? void 0 : t.path)
                  ? n
                  : "",
            });
          return (0, l.jsx)(w.a, {
            isOpen: i,
            onOpenChange: s,
            pageIdKey: v,
            renderHeading: () =>
              (0, l.jsx)(B, {
                children: (0, l.jsx)(_.E, {
                  handleClose: a,
                  headingRef: h,
                  id: "video-modal-heading",
                  children: p,
                }),
              }),
            type: "dialog",
            children: (0, l.jsx)(M, {
              children: (0, l.jsx)(k.L, {
                captionSource: r,
                placeholder: c,
                playNow: d,
                style: j,
                transcriptUrl: m,
                videoSource: u,
              }),
            }),
          });
        };
      R.displayName = "StorycardVideoModal";
      var L = n(87068),
        D = n(19968),
        F = n(55472),
        O = n(74770),
        H = n(88686);
      let A = {
          topleft: "justify-content: flex-start; text-align: left;",
          topright: "justify-content: flex-start; text-align: right;",
          topcenter: "justify-content: flex-start; text-align: center;",
          middle: "justify-content: center; text-align: center;",
          middleright: "justify-content: center; text-align: right;",
          middleleft: "justify-content: center; text-align: left;",
          bottomcenter: "justify-content: flex-end; text-align: center;",
          bottomright: "justify-content: flex-end; text-align: right;",
          bottomleft: "justify-content: flex-end; text-align: left;",
        },
        V = {
          decreaseOnce: 80,
          decreaseTwice: 60,
          increaseOnce: 125,
          increaseTwice: 156.25,
        },
        q = (e) => (/\D/.test(e) ? e : "".concat(e, "%")),
        U = (e) => {
          let { width: t, left: n, top: r } = e;
          return (0, C.AH)(
            [
              "top:",
              ";right:initial;bottom:initial;left:",
              ";width:",
              ";padding:0 !important;",
            ],
            q(r),
            q(n),
            q(t)
          );
        },
        Q = (e) => {
          let t = A[e];
          return t ? (0, C.AH)([".storycard--text{", ";}"], t) : "";
        },
        W = (e) => {
          let t;
          var {
              buttonColor: n,
              children: s,
              className: c,
              staticPosition: d,
            } = e,
            u = (0, i._)(e, [
              "buttonColor",
              "children",
              "className",
              "staticPosition",
            ]);
          let [m, p] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            p(!0);
          }, []);
          let h = (0, F.e)().screenLg ? "md" : "sm";
          if (!s) return null;
          let v = {};
          switch (n) {
            case "primary":
            default:
              t = L.$;
              break;
            case "secondary":
              t = D.n;
              break;
            case "darkRed":
              (v.variant = "red"), (t = O.F);
              break;
            case "darkGray":
              (v.variant = "dark"), (t = O.F);
              break;
            case "blank":
              t = I;
          }
          return m
            ? (0, l.jsx)(S, {
                className: c,
                staticPosition: d,
                children: (0, l.jsx)(
                  t,
                  (0, a._)(
                    (0, r._)(
                      {
                        className: "h-margin-v-default storycard--button",
                        role: "link",
                        size: h,
                        style: {
                          padding: ((e) => {
                            switch (e) {
                              case "lg":
                                return ""
                                  .concat(y.xe.generic.x3, " ")
                                  .concat(y.xe.generic.x5, " !important");
                              case "lgShort":
                                return "6px ".concat(
                                  y.xe.generic.x5,
                                  " !important"
                                );
                              case "md":
                              default:
                                return ""
                                  .concat(y.xe.generic.x3, " ")
                                  .concat(y.xe.generic.x4, " !important");
                              case "mdShort":
                                return "3px ".concat(
                                  y.xe.generic.x4,
                                  " !important"
                                );
                              case "sm":
                                return "6px ".concat(
                                  y.xe.generic.x3,
                                  " !important"
                                );
                              case "smShort":
                                return "1px ".concat(
                                  y.xe.generic.x3,
                                  " !important"
                                );
                            }
                          })(h),
                          fontSize: ((e) => {
                            switch (e) {
                              case "lg":
                              case "lgShort":
                                return "".concat(
                                  y.gx.size.text.large,
                                  " !important"
                                );
                              case "md":
                              case "mdShort":
                              default:
                                return "".concat(
                                  y.gx.size.text.base,
                                  " !important"
                                );
                              case "sm":
                              case "smShort":
                                return "".concat(
                                  y.gx.size.text.small,
                                  " !important"
                                );
                            }
                          })(h),
                        },
                      },
                      u,
                      v
                    ),
                    { children: (0, H.V)(s, "span") }
                  )
                ),
              })
            : null;
        };
      W.displayName = "StorycardButton";
      let $ = (e) => {
        let { alt: t, hasSecondaryImage: n, images: r, secondaryImage: a } = e,
          [i, s] = (0, o.useState)(!1),
          [c, d] = (0, o.useState)(!1),
          u = (0, o.useCallback)(() => {
            s(!0);
          }, []),
          m = (0, o.useCallback)(() => {
            d(!0);
          }, []);
        return (null == r ? void 0 : r.length)
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (i || c) && n
                  ? (0, l.jsx)(E, {
                      alt: t,
                      "aria-hidden": !c || void 0,
                      className: "storycard--pictureSecondary",
                      images: a,
                      noAnimation: !0,
                    })
                  : null,
                (0, l.jsx)(P, {
                  alt: t,
                  className: "storycard--picturePrimary",
                  images: r,
                  noAnimation: !0,
                  onError: m,
                  onLoad: u,
                }),
              ],
            })
          : null;
      };
      $.displayName = "StorycardImage";
      let G = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0;
          return (0, C.AH)(
            [
              "position:relative;&::before{content:'';display:block;width:100%;padding-top:calc(",
              "% + ",
              "px);}> *{position:absolute !important;inset:",
              ";}",
            ],
            (t / e) * 100,
            n,
            r
          );
        },
        K = (e) => {
          if (!e) return "";
          let { height: t, width: n } = ((e) => {
            var t, n;
            let r = e.split("x");
            return {
              width: Number.parseFloat(null != (t = r[0]) ? t : ""),
              height: Number.parseFloat(null != (n = r[1]) ? n : ""),
            };
          })(e);
          return G(n, t);
        };
      var X =
          "\n  & > a::after,\n  & > button::after {\n    content: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' focusable='false'%3E%3Cpath fill='%23333' d='M6.5 3.5v20l17-10z' %3E%3C/path%3E%3C/svg%3E\");\n    display: flex;\n    width: 48px;\n    height: 48px;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: none;\n    border-radius: 50%;\n    right: calc(50% - 24px);\n    top: calc(50% - 24px);\n    position: absolute;\n    text-align: center;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    pointer-events: none;\n\n    @media (min-width: "
            .concat(
              y.fi.lg,
              ") {\n      content: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' focusable='false'%3E%3Cpath fill='%23333' d='M6 2.6v20l17-10z' %3E%3C/path%3E%3C/svg%3E\");\n      width: 64px;\n      height: 64px;\n      top: calc(50% - 32px);\n      right: calc(50% - 32px);\n    }\n  }\n\n  & > a:hover::after,\n  & > button:hover::after {\n    background-color: rgba(255, 255, 255, 1);\n    border: 1px dashed "
            )
            .concat(
              y.Tj.palette.gray.darkest,
              ";\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);\n  }\n\n  & > a:focus::after,\n  & > button:focus::after {\n    background-color: rgba(255, 255, 255, 1);\n    border: 1px dashed "
            )
            .concat(
              y.Tj.palette.gray.darkest,
              ";\n    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);\n  }\n\n  & > a:active::after,\n  & > button:active::after {\n    background-color: "
            )
            .concat(y.Tj.palette.gray.lightest, ";\n  }\n"),
        Z = (0, C.AH)(
          ["", ";@media (min-width:", "){", ";}@media (min-width:", "){", ";}"],
          (e) => {
            let { textPosition: t } = e;
            return Q(t);
          },
          y.fi.md,
          (e) => {
            let { textPositionMd: t } = e;
            return Q(t);
          },
          y.fi.lg,
          (e) => {
            let { textPositionLg: t } = e;
            return Q(t);
          }
        );
      let J = (0, C.AH)(["", ";"], (e) => {
          let { resizeFactor: t } = e,
            n = V[t];
          return n ? "font-size: ".concat(n, "% !important;") : null;
        }),
        Y = C.I4.div.withConfig({ componentId: "sc-448837bd-0" })(
          [
            "position:relative;z-index:0;display:block;overflow:hidden;max-width:1200px;margin:0 auto ",
            " auto;background-color:",
            ";line-height:1;color:",
            ";text-decoration:none;border-radius:",
            " ",
            " ",
            " ",
            ";",
            ";@media (max-width:",
            "){margin-left:",
            ";margin-right:",
            ";}.storycard--headline{font-weight:bold;color:",
            ";margin-bottom:0.3em;line-height:1;}.storycard--detail{font-weight:normal;line-height:1.15;color:",
            ";ul{margin:",
            " 0 ",
            " ",
            ";}ul > *{list-style-type:disc;}}.storycard--link{display:block;height:100%;width:100%;&:focus,&:hover,&:active{color:inherit !important;text-decoration:none !important;background:none !important;}&:hover,&:focus{.storycard--button,.storycard--headline,.storycard--headline span,.storycard--detail,.storycard--detail span{text-decoration:underline;}}}",
            ";",
            ";",
            ";",
          ],
          (e) => {
            let { marginBottom: t } = e;
            return null != t ? t : "0";
          },
          (e) => {
            let { backgroundColor: t } = e;
            return t;
          },
          (e) => {
            let { fontColor: t } = e;
            return t;
          },
          (e) => {
            let { top_corners_rounded: t, image_corners_rounded: n } = e;
            return t || n ? y.PQ.radius.x3 : 0;
          },
          (e) => {
            let { top_corners_rounded: t, image_corners_rounded: n } = e;
            return t || n ? y.PQ.radius.x3 : 0;
          },
          (e) => {
            let { bottom_corners_rounded: t, image_corners_rounded: n } = e;
            return t || n ? y.PQ.radius.x3 : 0;
          },
          (e) => {
            let { bottom_corners_rounded: t, image_corners_rounded: n } = e;
            return t || n ? y.PQ.radius.x3 : 0;
          },
          (e) =>
            e.hasSecondaryImage
              ? "\n    &:hover {\n      .storycard--picturePrimary {\n        opacity: 0;\n      }\n    }\n  "
              : null,
          y.fi.xl,
          (e) => {
            let { top_corners_rounded: t, bottom_corners_rounded: n } = e;
            return t || n ? y.xe.generic.x4 : "0";
          },
          (e) => {
            let { top_corners_rounded: t, bottom_corners_rounded: n } = e;
            return t || n ? y.xe.generic.x4 : "0";
          },
          (e) => {
            let { fontColor: t } = e;
            return t;
          },
          (e) => {
            let { fontColor: t } = e;
            return t;
          },
          y.xe.generic.x1,
          y.xe.generic.x3,
          y.xe.generic.x8,
          (e) => {
            let { cardSizes: t } = e;
            return t
              ? ((e) =>
                  (0, C.AH)(
                    ["", ";", ";", ";"],
                    K(e.base || "2x1"),
                    e.mediumUp
                      ? (0, C.AH)(
                          ["@media (min-width:", "){", ";}"],
                          y.fi.md,
                          K(e.mediumUp)
                        )
                      : "",
                    e.largeUp
                      ? (0, C.AH)(
                          ["@media (min-width:", "){", ";}"],
                          y.fi.lg,
                          K(e.largeUp)
                        )
                      : ""
                  ))(t)
              : "";
          },
          (e) => {
            let { hasVideoStyles: t } = e;
            return t && X;
          },
          Z
        ),
        ee = C.I4.div.withConfig({ componentId: "sc-448837bd-1" })(
          [
            "inset:0;display:flex;flex-direction:column;padding:1.76vw 2.64vw;position:absolute;",
            ";@media (min-width:",
            "){padding:1.5em 2.3em;}",
            ";@media (min-width:",
            "){",
            ";}@media (min-width:",
            "){",
            ";}",
          ],
          N.xO,
          y.fi.xl,
          (e) => e.customTextPosition && U(e.customTextPosition),
          y.fi.md,
          (e) => e.customTextPositionMd && U(e.customTextPositionMd),
          y.fi.lg,
          (e) => e.customTextPositionLg && U(e.customTextPositionLg)
        ),
        et = C.I4.span.withConfig({ componentId: "sc-448837bd-2" })(
          ["", ";"],
          J
        );
      var en = n(58096),
        er = n(66318),
        ea = n(78456),
        ei = n(69241),
        el = n(4917),
        eo = n(20258),
        es = n(67253),
        ec = n(77694);
      let ed = (e, t, n) => {
          var r, a;
          let i =
              null == (r = e.current)
                ? void 0
                : r.getBoundingClientRect().height,
            l =
              null == (a = e.current)
                ? void 0
                : a.querySelector(".overlayItem"),
            o = null == l ? void 0 : l.getBoundingClientRect().height;
          return !!e.current && !t && !!n && !!o && !!i && n.length * o > i;
        },
        eu = (e) => {
          let {
              shouldForceVertical: t = !1,
              hasOneColumn: n = !1,
              isOpen: r = !1,
              links: a,
              toggleOverlay: i = d,
              willFillParent: s = !1,
            } = e,
            c = (0, o.useRef)(null),
            m = (0, o.useRef)(null),
            v = (0, p.Z)(r),
            [x, g] = (0, o.useState)(!1),
            { screenSmMax: f } = (0, F.e)(),
            b = (0, o.useCallback)(() => {
              m.current && m.current.focus();
            }, []),
            w = (0, o.useCallback)(() => {
              r && g(ed(c, n, a));
            }, [n, r, a]);
          (0, o.useEffect)(() => {
            let e = el(w, es.u);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, [w]),
            (0, o.useEffect)(() => {
              r &&
                (v || g(ed(c, n, a)),
                setTimeout(() => {
                  b();
                }, 400));
            }, [b, n, r, a, v]);
          let _ = (0, o.useCallback)(
              (e) => {
                27 === e.keyCode && i(e);
              },
              [i]
            ),
            k = () =>
              (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)("ul", {
                    className: (0, ei.A)(ec.overlayList, {
                      [ec.twoColumns]: x,
                    }),
                    "data-test": "linksOverlay--list",
                    style: { visibility: r ? "visible" : "hidden" },
                    children: a.map((e, t) => {
                      var n;
                      return (0, l.jsx)(
                        "li",
                        {
                          className: "overlayItem",
                          children: (0, l.jsx)(u.N, {
                            "aria-label": e.link_label
                              ? (0, h.D4)(e.link_label)
                              : (0, h.D4)(e.link_name),
                            color: f ? "defaultColor" : "onDark",
                            dangerouslySetInnerHTML: {
                              __html: null != (n = e.link_name) ? n : "",
                            },
                            "data-index": e.index,
                            "data-lnk": e.link_tag,
                            href: e.link_url,
                            onClick: e.handler,
                            ref: 0 === t ? m : null,
                            underline: "invert",
                          }),
                        },
                        e.link_name
                      );
                    }),
                  }),
                  f
                    ? null
                    : (0, l.jsx)("div", {
                        className: ec.buttonWrapper,
                        children: (0, l.jsxs)(en.H, {
                          "aria-hidden": r ? void 0 : "true",
                          "data-test": "linksOverlay--closeButton",
                          onClick: i,
                          tabIndex: r ? void 0 : -1,
                          children: [
                            (0, l.jsx)("span", {
                              className: "h-sr-only",
                              children: "close",
                            }),
                            (0, l.jsx)(eo.l, {
                              color: y.Tj.palette.white,
                              width: 22,
                            }),
                          ],
                        }),
                      }),
                ],
              });
          return (0, l.jsx)("div", {
            "data-test": "@web/SlingshotComponents/common/LinksOverlay",
            children: f
              ? (0, l.jsx)(ea.$, {
                  headingText: "",
                  isOpen: r,
                  onCloseClick: i,
                  onRequestClose: i,
                  children: (0, l.jsx)(er.f, {
                    center: "xs",
                    className: ec.modalRow,
                    fill: !0,
                    children: k(),
                  }),
                })
              : (0, l.jsx)("div", {
                  className: (0, ei.A)(ec.overlayContainer, {
                    [ec.horizontal]:
                      (!t && !s) || (r && !t && !s && ec.horizontal),
                    [ec.open]: r,
                  }),
                  "data-test":
                    "@web/SlingshotComponents/common/LinksOverlay/OverlayContainer",
                  onKeyDown: _,
                  ref: c,
                  children: k(),
                }),
          });
        };
      eu.displayName = "LinksOverlay";
      var em = n(53293);
      let ep = (e) => {
        var t,
          {
            altText: n,
            backgroundColor: b = y.Tj.palette.white,
            buttonColor: w,
            buttonStatic: _,
            buttonText: k,
            cardSizes: j,
            className: C,
            index: T,
            dataLnk: z,
            fontColor: N = y.Tj.palette.gray.darkest,
            fontResizeHeadline: I,
            fontResizeSubhead: S,
            headline: P,
            images: E,
            hasLinksOverlay: M = !1,
            links: B = [],
            marginBottom: L,
            secondary_image: D,
            subhead: F,
            textPosition: O = "topleft",
            textPositionMd: H,
            textPositionLg: A,
            customTextPosition: V,
            customTextPositionMd: q,
            customTextPositionLg: U,
            url: Q,
            video: G,
            tagName: K,
            backgroundChildren: X,
            containerChildren: Z,
            children: J,
            onClick: en = d,
            link_type: er,
            videoElement: ea,
            id: ei,
            top_corners_rounded: el,
            bottom_corners_rounded: eo,
            image_corners_rounded: es,
          } = e,
          ec = (0, i._)(e, [
            "altText",
            "backgroundColor",
            "buttonColor",
            "buttonStatic",
            "buttonText",
            "cardSizes",
            "className",
            "index",
            "dataLnk",
            "fontColor",
            "fontResizeHeadline",
            "fontResizeSubhead",
            "headline",
            "images",
            "hasLinksOverlay",
            "links",
            "marginBottom",
            "secondary_image",
            "subhead",
            "textPosition",
            "textPositionMd",
            "textPositionLg",
            "customTextPosition",
            "customTextPositionMd",
            "customTextPositionLg",
            "url",
            "video",
            "tagName",
            "backgroundChildren",
            "containerChildren",
            "children",
            "onClick",
            "link_type",
            "videoElement",
            "id",
            "top_corners_rounded",
            "bottom_corners_rounded",
            "image_corners_rounded",
          ]);
        let [ed, ep] = (0, o.useState)(!1),
          [eh, ev] = (0, o.useState)(!1),
          ex = (0, p.Z)(eh),
          eg = (0, p.Z)(ed),
          ef = (0, v.V)(),
          ey = (0, x.qf)(),
          eb = ef && ey,
          { openJoinCircleModal: ew } = (0, f.Q)(),
          e_ = (0, em.X)({ link_url: Q }),
          ek = "video" === er,
          ej = (0, o.useRef)(void 0),
          eC = (0, o.useCallback)(
            () => "div" !== K && (!!Q || M || ek),
            [Q, M, ek, K]
          ),
          eT = ek ? "button" : K || (eC() ? u.N : "div");
        (0, o.useEffect)(() => {
          !eh && ex && eC() && ej.current && ej.current.focus();
        }, [eC, eh, ex]),
          (0, o.useEffect)(() => {
            ek && !ed && eg && ej.current && ej.current.focus();
          }, [ek, ed, eg]);
        let ez = (0, o.useCallback)(
            (e) => {
              e.preventDefault(), ev(!eh);
            },
            [eh, ev]
          ),
          eN = (0, o.useCallback)(() => {
            ep(!1);
          }, []),
          eI = (0, o.useCallback)(
            (e) => {
              en(e),
                M && (e.preventDefault(), e.stopPropagation(), ez(e)),
                ek && (e.preventDefault(), e.stopPropagation(), ep(!0)),
                e_ &&
                  (null == e || e.preventDefault(),
                  null == e || e.stopPropagation(),
                  eb ? null == ew || ew() : (0, g.Jv)());
            },
            [en, M, ek, e_, ez, eb, ew]
          ),
          eS = s({ storycard: !0 }, C),
          eP = !c(D),
          eE = (0, h.D4)(n),
          eM = eC()
            ? (0, r._)(
                {
                  "aria-label": ek
                    ? "Play video ".concat(
                        null != (t = null == G ? void 0 : G.title) ? t : ""
                      )
                    : void 0,
                  className: "storycard--link",
                  href: ek ? void 0 : c(Q) ? "#" : Q,
                  ref: ej,
                  "data-index": T,
                  "data-lnk": z,
                },
                ec
              )
            : {};
        return (0, l.jsxs)(
          Y,
          (0, a._)((0, r._)({}, ec), {
            backgroundColor: b,
            bottom_corners_rounded: eo,
            cardSizes: j,
            className: eS,
            "data-test": "@web/SlingshotComponents/common/Storycard",
            fontColor: N,
            hasSecondaryImage: eP,
            hasVideoStyles: ek,
            id: ei,
            image_corners_rounded: es,
            marginBottom: L,
            textPosition: O,
            textPositionLg: A,
            textPositionMd: H,
            top_corners_rounded: el,
            children: [
              (0, o.createElement)(
                eT,
                (0, a._)((0, r._)({}, eM), {
                  videoelement: ea,
                  onClick: eI,
                  "data-test": K
                    ? "storycardWrapperElement-".concat(K)
                    : "storycardWrapperElement",
                }),
                (0, l.jsxs)(l.Fragment, {
                  children: [
                    J,
                    null != X
                      ? X
                      : (0, l.jsx)($, {
                          alt: ek ? void 0 : eE,
                          hasSecondaryImage: eP,
                          images: E,
                          secondaryImage: D,
                        }),
                    (0, l.jsxs)(ee, {
                      className: "storycard--text",
                      customTextPosition: V,
                      customTextPositionLg: U,
                      customTextPositionMd: q,
                      children: [
                        P &&
                          (0, l.jsx)(m.D, {
                            className: "storycard--headline",
                            level: 2,
                            children: (0, l.jsx)(et, {
                              dangerouslySetInnerHTML: {
                                __html: null != P ? P : "",
                              },
                              resizeFactor: null != I ? I : "",
                            }),
                          }),
                        F &&
                          (0, l.jsx)("div", {
                            className: "storycard--detail",
                            children: (0, l.jsx)(et, {
                              dangerouslySetInnerHTML: {
                                __html: null != F ? F : "",
                              },
                              resizeFactor: null != S ? S : "",
                            }),
                          }),
                        _ &&
                          (0, l.jsx)(W, {
                            buttonColor: w,
                            "data-test": "storycard--staticButton",
                            staticPosition: !0,
                            children: k,
                          }),
                      ],
                    }),
                    !_ && (0, l.jsx)(W, { buttonColor: w, children: k }),
                  ],
                })
              ),
              Z,
              ek &&
                G &&
                (0, l.jsx)(R, {
                  captions: G.captions,
                  handleClose: eN,
                  isOpen: ed,
                  onOpenChange: ep,
                  placeholder: G.placeholder,
                  playNow: !G.transcript,
                  source: G.source,
                  title: G.title,
                  transcript: G.transcript,
                }),
              M && (0, l.jsx)(eu, { isOpen: eh, links: B, toggleOverlay: ez }),
            ],
          })
        );
      };
      ep.displayName = "Storycard";
    },
    77694: (e) => {
      e.exports = {
        overlayContainer: "styles_overlayContainer__ydJef",
        horizontal: "styles_horizontal__PU3Ek",
        open: "styles_open__5q2q9",
        overlayList: "styles_overlayList__TztK_",
        twoColumns: "styles_twoColumns__3E_YK",
        buttonWrapper: "styles_buttonWrapper__OSvpN",
        modalRow: "styles_modalRow__L5srb",
      };
    },
    82631: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var r = n(14232);
      let a = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          [t, n] = (0, r.useState)(e);
        return {
          value: t,
          ref: (0, r.useCallback)((e) => {
            n(e);
          }, []),
        };
      };
    },
    90750: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => d });
      var r = n(3576),
        a = n(62701),
        i = n(65699),
        l = n(37876),
        o = n(15039),
        s = n(36730),
        c = n(22903);
      let d = (e) => {
        var { className: t, isStacked: n } = e,
          d = (0, i._)(e, ["className", "isStacked"]);
        return (0, l.jsx)(
          s.g,
          (0, a._)(
            (0, r._)({ className: o(c.ndsButtonGroup, n && c.stacked, t) }, d),
            { divider: "topOnlySmallScreen" }
          )
        );
      };
      d.displayName = "ButtonGroup";
    },
    94520: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => j });
      var r = n(37876),
        a = n(14232),
        i = n(19351),
        l = n(939),
        o = n(77071),
        s = n(78994),
        c = n(93864),
        d = n(56562),
        u = n(9901),
        m = n(95636),
        p = n(27333),
        h = n(33232),
        v = n(55035),
        x = n(42252),
        g = n(70418),
        f = n(1800),
        y = n(77232),
        b = n(75570);
      let w = (0, y.I4)(b.N)
          .attrs({
            className:
              "h-text-xl h-display-flex h-flex-justify-center h-text-center h-text-bold",
          })
          .withConfig({ componentId: "sc-9d0012a4-0" })([
          "padding-top:60px;padding-bottom:60px;",
        ]),
        _ = (e) => {
          var t, n;
          let {
              shoppableDrawerData: a,
              showAddToRegistryButton: i,
              handleViewMoreClick: l,
            } = e,
            o = g.o.buildURLWithParams(
              null != (t = a.global_link_url) ? t : "",
              { regMode: "REGST" }
            ),
            s = i ? o : a.global_link_url;
          return (0, r.jsx)(
            w,
            {
              "data-test": "shoppableDrawer-viewMoreLink",
              href: s,
              onClick: l,
              underline: "invert",
              children: (0, f.D4)(
                null != (n = a.global_link_text) ? n : "View more"
              ),
            },
            "global-lnk"
          );
        };
      _.displayName = "GlobalLinkComponent";
      let k = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("span", {
              className: "h-text-bold",
              children: "Sorry, no items for this yet",
            }),
            (0, r.jsx)("span", { children: "Please try again later." }),
          ],
        });
      k.displayName = "NoItemsMessage";
      let j = (e) => {
        var t, n;
        let {
            addToCartTrackingPlacementType: g,
            componentId: f = "UNKNOWN",
            shoppableDrawerData: y,
          } = e,
          b = (0, i.z1)(),
          w = (0, m.JB)(),
          { asPath: j } = (0, x.rd)(),
          C = (0, a.useMemo)(
            () =>
              (null == j ? void 0 : j.includes("/gift-registry/dashboard")) ||
              (null == j
                ? void 0
                : j.includes("/gift-registry/browse-and-add-items")),
            [j]
          ),
          T =
            null != (n = null == (t = y.tcins) ? void 0 : t.replace(/\s+/g, ""))
              ? n
              : "",
          [z, N] = (0, p.t)({ tcins: T, pricing_store_id: w }),
          I = z((e) => (null == e ? void 0 : e.product_summaries)),
          [S, P] = (0, l.B)(I),
          E = (0, a.useCallback)(
            (e) => {
              let { tcin: t } = e;
              return () => {
                b.trackEvent({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    type: "click",
                    value: "".concat(f, "_ViewDetails_").concat(t),
                  },
                });
              };
            },
            [f, b]
          ),
          M = (0, a.useCallback)(() => {
            b.trackEvent({
              guest: { eventType: "customInteraction" },
              customInteraction: {
                value: "".concat(f, "_ShoppableDrawer_ViewMore"),
                type: "click",
              },
            });
          }, [f, b]);
        if (N.isFetching) return (0, r.jsx)(c.b, {});
        if (N.isError) return (0, r.jsx)(d.j, {});
        if (!I || !S) return null;
        if (0 === I.length) return (0, r.jsx)(d.j, { Message: k });
        let B = !!y.global_link_url;
        return (0, r.jsxs)(u.c, {
          children: [
            null == S
              ? void 0
              : S.map((e, t) =>
                  (0, r.jsx)(
                    h.M,
                    {
                      debugName: "shoppable_drawer_with_atc",
                      queryResult: N,
                      queryResultFulfillment: P,
                      value: e,
                      children: (0, r.jsx)(o.i, {
                        actionButton: C
                          ? (0, r.jsx)(v.Q, {
                              buttonSize: "sm",
                              showPlpVersionButton: !0,
                              showPlpVersionButtonForBabyChecklistPage: !0,
                              slingshotComponentId: f,
                            })
                          : (0, r.jsx)(s.E, {
                              isIntentAware: !0,
                              placementType: g,
                              size: "sm",
                              willHaveProductContextFulfillmentDataForAddToCart:
                                !0,
                            }),
                        onViewDetailClick: E({
                          tcin: null == e ? void 0 : e.tcin,
                        }),
                        placementType: g,
                        willHaveProductContextFulfillmentDataForAddToCart: !0,
                      }),
                    },
                    "shoppable_drawer_with_atc_"
                      .concat(null == e ? void 0 : e.tcin, "_")
                      .concat(t)
                  )
                ),
            B
              ? (0, r.jsx)(_, {
                  handleViewMoreClick: M,
                  shoppableDrawerData: y,
                  showAddToRegistryButton: C,
                })
              : null,
          ],
        });
      };
      j.displayName = "ShoppableDrawerContent";
    },
  },
]);
