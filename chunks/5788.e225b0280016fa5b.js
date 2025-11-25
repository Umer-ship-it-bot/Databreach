(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5788],
  {
    939: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => u });
      var l = n(3576),
        i = n(62701),
        o = n(14232),
        a = n(78502),
        r = n(26989),
        s = n(32038),
        d = n(33985),
        c = n(23021);
      let u = (e, t) => {
        let n =
            null == e
              ? void 0
              : e
                  .filter((e) => !(0, s.cL)(e) && !(0, s.CN)(e))
                  .map((e) => (0, r.Gs)(e)),
          { fulfillmentVariables: u, isFulfillmentQueryEnabled: p } = (0,
          c.F)(),
          [h, m] = (0, d.t)(
            (0, l._)(
              (0, i._)((0, l._)({}, u), {
                tcins: null == n ? void 0 : n.join(","),
              }),
              t
            ),
            { enabled: !!(null == n ? void 0 : n.length) && p }
          ),
          g = h();
        return [
          (0, o.useMemo)(
            () =>
              ((e, t) =>
                null == e
                  ? void 0
                  : e.map((e) => {
                      var n, o, a;
                      let s =
                        null == t
                          ? void 0
                          : t.find((t) => {
                              var n, l;
                              return (
                                (0, r.Gs)(e) ===
                                (null != (l = (0, r.Gs)(t))
                                  ? l
                                  : null == t || null == (n = t.fulfillment)
                                  ? void 0
                                  : n.product_id)
                              );
                            });
                      return (0, i._)((0, l._)({}, e), {
                        free_shipping:
                          null != (n = null == s ? void 0 : s.free_shipping)
                            ? n
                            : e.free_shipping,
                        fulfillment:
                          null != (o = null == s ? void 0 : s.fulfillment)
                            ? o
                            : e.fulfillment,
                        store_positions:
                          null != (a = null == s ? void 0 : s.store_positions)
                            ? a
                            : e.store_positions,
                      });
                    }))(e, null == g ? void 0 : g.product_summaries),
            [e, g]
          ),
          (0, a.NO)(m),
        ];
      };
    },
    2285: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => b, W: () => j });
      var l = n(37876),
        i = n(14010),
        o = n(55472),
        a = n(94170),
        r = n(38810),
        s = n(15039),
        d = n(19084),
        c = n(51670),
        u = n(93286),
        p = n(37753),
        h = n(74090),
        m = n(82154),
        g = n(18022),
        x = n(75227),
        v = n(54429),
        y = n(6663),
        f = n(33255);
      let b = (e) => {
        var t, n;
        let b = !(0, i.V)(),
          { screenLg: j, screenSmMax: w } = (0, o.e)(),
          {
            accessibility_text: _ = "",
            allStoriesAmplified: C,
            alternate_image_1x1: k,
            alternate_text_color: I,
            amplified_headline: N,
            background_color: T,
            background_color_behavior: S,
            className: F = "",
            colorFlood: M = !1,
            contentType: z,
            enhancement: E,
            fine_print: L,
            image_1x1: R = "",
            link: P,
            metadata: A,
            position: O,
            sponsored: B,
            sponsoredContainer: D,
            storyId: q,
            subhead: V,
          } = e,
          U = k && (M || w),
          W = (0, p.Lq)(U ? k : R, j ? "600" : "400"),
          H = !T || "#FFFFFF" === T.toUpperCase(),
          G = "simplified" === S || (M && !H),
          Y =
            "white" === I ||
            (null == I ? void 0 : I.toUpperCase()) === "#FFFFFF",
          K = (C || w) && !V && !L,
          Q = N ? (0, p.j1)(N.lockup, C) : "",
          Z = !!(null == P ||
          null == (n = P.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          $ = A && q ? (0, p.ug)(A, q) : void 0,
          J = (0, p.ES)(P).toString(),
          X = (null == E ? void 0 : E.type) === "ribbon",
          ee = (null == E ? void 0 : E.type) === "ribbon_border";
        return (0, l.jsx)(a.F, {
          clickType: "CONTENT",
          element: J ? { type: "LINK", id: J } : void 0,
          featureType: "CONTENT_POOL",
          index: O,
          linkTag: null == P ? void 0 : P.link_tag,
          position: O,
          prz: $,
          sourceId: q,
          useTrackers: r.k,
          children: (0, l.jsxs)("div", {
            className: "h-position-relative "
              .concat(F, " ")
              .concat(D ? "h-padding-b-default" : ""),
            children: [
              ee ? (0, l.jsx)(y.e, { content: E }) : null,
              (0, l.jsxs)(m.NO, {
                className: s(
                  H || !K ? "show-border" : "",
                  ee ? f.ribbonBorderClippedContent : ""
                ),
                backgroundColor: T,
                color: Y && H ? "dark" : I,
                "data-component-id": q,
                "data-content-type": z,
                children: [
                  X ? (0, l.jsx)(v.W, { content: E }) : null,
                  (0, l.jsxs)(d.k, {
                    link: P,
                    linkInfo: h.Nz,
                    style: { display: "block", position: "relative" },
                    dataPosition: O,
                    underline: "never",
                    storyId: q,
                    metadata: A,
                    children: [
                      (0, l.jsxs)(g.Ye, {
                        children: [
                          (0, l.jsx)(m.Sw, {
                            backgroundColor: T,
                            className: C || w ? "" : "small-container",
                            children: (0, l.jsx)(m.bC, {
                              level: 3,
                              className: "h-padding-h-default ".concat(Q),
                              children: (0, l.jsx)(x.P, {
                                alt_color: Y && !T ? "dark" : I,
                                content: null != N ? N : {},
                                specialChars: !0,
                              }),
                            }),
                          }),
                          (0, l.jsxs)(m.Sw, {
                            children: [
                              (0, l.jsx)(m.MQ, {
                                src: W,
                                alt: _,
                                loading: b ? "lazy" : "eager",
                              }),
                              Z ? (0, l.jsx)(c.k, {}) : null,
                            ],
                          }),
                        ],
                      }),
                      K
                        ? null
                        : (0, l.jsxs)(m.IO, {
                            className: G ? "" : "fill-white",
                            color: M ? I : "dark",
                            children: [
                              (0, l.jsx)(m.bY, {
                                className: (null == L ? void 0 : L.content)
                                  ? "h-margin-b-tight"
                                  : "",
                                children: (null == V ? void 0 : V.content)
                                  ? (0, l.jsx)(u.Q4, {
                                      operation: V.content,
                                      container: "span",
                                      suppressRed: G && Y,
                                    })
                                  : (0, l.jsx)(l.Fragment, { children: " " }),
                              }),
                              (null == L ? void 0 : L.content)
                                ? (0, l.jsx)(m.s4, {
                                    children: (0, l.jsx)(u.Q4, {
                                      operation: L.content,
                                      container: "span",
                                      suppressRed: G && Y,
                                    }),
                                  })
                                : null,
                              B
                                ? (0, l.jsx)("span", {
                                    className: "h-sr-only",
                                    children: "(Sponsored)",
                                  })
                                : null,
                            ],
                          }),
                    ],
                  }),
                ],
              }),
              B
                ? (0, l.jsx)(g.gp, {
                    className: "multi-story",
                    "aria-hidden": !0,
                  })
                : null,
            ],
          }),
        });
      };
      b.displayName = "MultiStoryLargeAmplified";
      let j = (e) => {
        let { showCopyBlock: t = !0 } = e;
        return (0, l.jsxs)(m.UK, {
          className: "pad-lockup",
          children: [
            (0, l.jsx)(m.EM, {}),
            t
              ? (0, l.jsxs)(m.IO, {
                  className: "fill-white",
                  children: [(0, l.jsx)("p", {}), (0, l.jsx)("p", {})],
                })
              : null,
          ],
        });
      };
      j.displayName = "MultiStoryLargeAmplifiedPlaceholder";
    },
    6663: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => s });
      var l = n(3576),
        i = n(37876),
        o = n(95408),
        a = n(98601),
        r = n(46044);
      let s = (e) => {
        let { content: t, size: n = "lg", ribbonStyle: s = {} } = e,
          {
            background_color: d = a.Tj.background.darkest,
            text: c,
            text_color: u = a.Tj.text.onDark.primary,
          } = t,
          p = (0, o.Mv)("GLOBAL_NEWNESS_RIBBON_ENABLED"),
          h = {
            "--ribbon-background-color": d,
            "--ribbon-background-image":
              "url(https://target.scene7.com/is/image/Target/GUEST_a8f73016-73a7-4db7-aa94-dd3cde03c4ae?fmt=webp&qlt=40&wid=1200)",
            "--ribbon-font-color": u,
            "--ribbon-font-size": "sm" === n ? "13px" : "15px",
            "--ribbon-padding": "sm" === n ? "5px 16px" : "10px 16px",
          };
        return p
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: r.ribbon,
                  style: h,
                  children: c,
                }),
                (0, i.jsx)("div", {
                  className: r.ribbonBorder,
                  style: (0, l._)({}, h, s),
                }),
              ],
            })
          : null;
      };
      s.displayName = "NewnessRibbonBorder";
    },
    9068: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => r });
      var l = n(73208),
        i = n(69107),
        o = n(25012),
        a = n(7323);
      let r = () => {
        var e;
        let t = (0, l.EJ)(i.KK),
          n = t && t.length > 0,
          r = (0, l.EJ)(o.em),
          s = (0, l.EJ)(o.IT),
          d = !!a.zk[null != (e = null != s ? s : r) ? e : ""];
        return n ? (1 !== t.length || d ? 3 : 2) : d ? 2 : 1;
      };
    },
    14017: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => p });
      var l = n(3576),
        i = n(62701),
        o = n(65699),
        a = n(37876),
        r = n(15039),
        s = n(29359),
        d = n(86528),
        c = n(84456),
        u = n(44670);
      let p = (e) => {
        var {
            children: t,
            className: n,
            errorText: p,
            hideLabel: h,
            horizontalLayout: m,
            isValid: g,
            label: x = "Select option to apply",
            microcopy: v,
            screenReader: y,
          } = e,
          f = (0, o._)(e, [
            "children",
            "className",
            "errorText",
            "hideLabel",
            "horizontalLayout",
            "isValid",
            "label",
            "microcopy",
            "screenReader",
          ]);
        return (0, a.jsxs)("div", {
          className: r(u.radioGroup, n),
          children: [
            (0, a.jsxs)(
              "fieldset",
              (0, i._)(
                (0, l._)(
                  { className: r(u.fieldSet, m && u.horizontalLayout) },
                  f
                ),
                {
                  children: [
                    (0, a.jsx)(d.J, {
                      as: "legend",
                      className: u.label,
                      errorText: p,
                      hidden: h,
                      label: x,
                      microcopy: v,
                      screenReader: y,
                      valid: g,
                    }),
                    t,
                  ],
                }
              )
            ),
            !1 === g &&
              p &&
              (0, a.jsx)(s.K, { "aria-hidden": "true", children: p }),
            v && (0, a.jsx)(c.G, { "aria-hidden": "true", children: v }),
          ],
        });
      };
      p.displayName = "RadioGroup";
    },
    18022: (e, t, n) => {
      "use strict";
      n.d(t, {
        F0: () => g,
        HK: () => E,
        HU: () => O,
        JK: () => h,
        Jt: () => u,
        Le: () => A,
        M4: () => S,
        OM: () => P,
        O_: () => y,
        P4: () => k,
        VK: () => I,
        Ye: () => v,
        Yn: () => M,
        Zo: () => j,
        aR: () => B,
        bJ: () => _,
        bc: () => m,
        gY: () => z,
        gp: () => N,
        jH: () => T,
        ku: () => F,
        lu: () => R,
        og: () => C,
        q1: () => w,
        qu: () => L,
        t6: () => b,
        vR: () => D,
        vW: () => p,
        x4: () => x,
      });
      var l = n(77232),
        i = n(42773),
        o = n(98601);
      let { gray: a, white: r } = o.Tj.palette,
        s = o.gx.size,
        d = o.xe.generic,
        c = o.gx.lineHeight,
        u = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-0" })(
          [
            "margin:0 auto ",
            ";padding:",
            " ",
            ";background-color:",
            ";max-width:",
            ";&.top{padding-bottom:",
            ";margin-bottom:0;}&.middle{padding:",
            " ",
            ";margin-bottom:0;}&.bottom{padding-top:",
            ";}&.extended{max-width:1200px;padding:0;}",
          ],
          (e) => {
            var t;
            return null != (t = e.bottomMargin) ? t : d.x4;
          },
          (e) => (e.backgroundColor ? d.x4 : "0"),
          d.x4,
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : "unset";
          },
          (e) => (e.backgroundColor ? "1200px" : "1232px"),
          d.x2,
          d.x2,
          d.x4,
          d.x2
        ),
        p = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-1" })(
          [
            "background-color:",
            ";padding:",
            " ",
            " 0;@media (max-width:",
            "){padding:",
            " ",
            " 0;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : "transparent";
          },
          (e) => (e.backgroundWhite ? "0" : d.x6),
          (e) => (e.backgroundWhite ? "0" : d.x6),
          o.fi.md,
          (e) => (e.backgroundWhite ? "0" : d.x4),
          d.x4
        ),
        h = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-2" })(
          [
            "background-color:",
            ";padding:",
            " ",
            " ",
            ";@media (max-width:",
            "){padding:",
            " 0 ",
            ";}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : "transparent";
          },
          d.x4,
          (e) => (e.backgroundWhite ? "0" : d.x6),
          d.x4,
          o.fi.md,
          d.x2,
          d.x4
        ),
        m = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-3" })([
          "position:relative;a:focus{outline:none;}a:focus h2,a:focus h3,a:focus p > span{text-decoration:underline !important;}",
        ]);
      l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-4" })(
        [
          "display:grid;grid-template-columns:100%;grid-auto-rows:auto;gap:",
          ";",
        ],
        d.x4
      ),
        l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-5" })(
          [
            "display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:auto;gap:",
            ";",
          ],
          d.x5
        ),
        l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-6" })(
          [
            "display:grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:auto;gap:",
            ";",
          ],
          d.x5
        ),
        l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-7" })(
          [
            "display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-auto-rows:auto;gap:",
            ";",
          ],
          d.x5
        );
      let g = l.I4.span.withConfig({ componentId: "sc-1ef1c1d0-8" })(
          [
            "display:inline-flex;background:",
            ";align-items:center;justify-content:center;font-size:",
            ";color:",
            ";line-height:1.2em;border:1px solid ",
            ";border-radius:",
            ";padding:",
            ";@media (max-width:",
            "){font-size:",
            ";padding:",
            ";}",
          ],
          r,
          s.text.base,
          a.darkest,
          a.dark,
          o.PQ.radius.default,
          d.x3,
          o.fi.lg,
          s.text.small,
          d.x2
        ),
        x = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-9" })(
          [
            "position:relative;display:flex;flex-direction:column;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;height:100%;padding-top:56.25%;&.pad-square{padding-top:100%;}&.pad-none{padding-top:0;}&.show-border{box-shadow:0 0 0 1px ",
            ";}&.multi-story-mobile{display:block;flex-direction:unset;padding-top:0;}& > .main-link{display:block;height:100%;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? r
              : a.darkest;
          },
          a.light
        ),
        v = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-10" })([
          "display:flex;flex-direction:row;",
        ]);
      l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-11" })(
        [
          "position:relative;flex:1 1 50%;display:flex;align-items:center;justify-content:start;background-color:",
          ";color:",
          ";&.small-container{flex:1 1 37.5%;}",
        ],
        (e) => {
          var t;
          return null != (t = e.backgroundColor) ? t : r;
        },
        (e) => {
          var t;
          return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
            ? e.color
            : "white" === e.color
            ? r
            : a.darkest;
        }
      );
      let y = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-12" })(
        [
          "position:relative;display:flex;background:#b3b3b3;box-shadow:0 0 0 1px ",
          ";overflow:hidden;border-radius:12px;width:100%;padding-top:56.25%;svg{flex:0 1 142px;width:100%;height:100%;}h3{background:#b3b3b3;height:1.2em;width:66%;margin-bottom:6px;}p{background:#eee;height:1em;width:95%;margin-top:3px;}p:last-child{width:88%;}&.pad-square{padding-top:100%;}&.pad-square-bottom{padding-top:0;padding-bottom:100%;}&.pad-hd-bottom{padding-top:0;padding-bottom:56.25%;}&.pad-2square{padding-top:50%;}&.multi-story-mobile{display:block;padding-top:0;border:0 none;div{width:100%;}}",
        ],
        a.light
      );
      l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-13" })([
        "position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;top:0;left:0;width:50%;aspect-ratio:1;background:#ccc;&::before{content:' ';display:block;width:45%;height:1.25em;background-color:#b3b3b3;margin-right:15%;margin-bottom:0.4em;}&::after{content:' ';display:block;width:60%;height:3.5em;background-color:#b3b3b3;}",
      ]);
      let f = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-14" })([
          "position:relative;&::before,&::after{content:' ';display:block;background:#c4c4c4;}&::before{width:5em;height:1em;margin-bottom:0.25em;}&::after{width:6.8em;height:2.6em;margin-bottom:0.4em;}",
        ]),
        b = (0, l.I4)(f).withConfig({ componentId: "sc-1ef1c1d0-15" })([
          "font-size:clamp(14px,calc(2vw - 2px),20px);",
        ]),
        j = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-16" })([
          "display:block;position:absolute;top:0;left:0;width:auto;height:100%;min-height:10px;min-width:10px;",
        ]),
        w = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-17" })([
          "display:block;position:absolute;top:0;right:0;width:auto;height:100%;min-height:10px;min-width:10px;",
        ]),
        _ = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-18" })([
          "display:block;position:relative;width:100%;height:auto;border-radius:12px 12px 0 0;min-height:10px;min-width:10px;",
        ]),
        C = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-19" })([
          "display:block;position:absolute;top:0;left:0;width:100%;height:auto;border-radius:0;min-height:10px;min-width:10px;",
        ]),
        k = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-20" })([
          "width:142px;height:142px;min-height:10px;min-width:10px;",
        ]),
        I = l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-21" })([
          "display:block;position:absolute;bottom:0;left:0;width:100%;height:auto;border-radius:0 0 12px 12px;min-height:10px;min-width:10px;",
        ]);
      l.I4.img.withConfig({ componentId: "sc-1ef1c1d0-22" })([
        "display:block;width:100%;height:auto;border-radius:0 12px 0 0;min-height:10px;min-width:10px;",
      ]);
      let N = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-23" })(
          [
            "width:100%;font-size:",
            ";line-height:1em;text-align:right;padding:3px 2px;color:",
            ";&.left-align{text-align:left;}&.multi-story{position:absolute;left:0;bottom:-2px;}&::after{content:'Sponsored';display:inline-block;}",
          ],
          s.text.small,
          (e) => {
            var t;
            return "dark" === e.alternateTextColor
              ? a.dark
              : null != (t = e.alternateTextColor)
              ? t
              : "inherit";
          }
        ),
        T = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-24" })(
          [
            "position:absolute;width:100%;height:100%;grid-auto-columns:",
            ";grid-template-rows:",
            ";padding:clamp(",
            ",1vw + ",
            ",27px) clamp(",
            ",1.5vw + ",
            ",34px) ",
            " clamp(",
            ",1.5vw + ",
            ",34px);top:0;left:0;display:grid;place-content:",
            ";text-align:",
            ";z-index:1;",
          ],
          (e) =>
            e.widthPercent
              ? "calc(".concat(e.widthPercent, "% - ").concat(d.x11, ")")
              : "100%",
          (e) =>
            e.finePrintAdded ? (e.raiseFinePrint ? "1fr 48px" : "1fr") : "auto",
          d.x4,
          d.x4,
          d.x4,
          d.x4,
          (e) => (e.finePrintAdded ? d.x2 : d.x4),
          d.x4,
          d.x4,
          (e) => {
            var t;
            return null != (t = e.position.grid) ? t : "start left";
          },
          (e) => {
            var t;
            return null != (t = e.position.align) ? t : "left";
          }
        ),
        S = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-25" })(
          ["display:grid;place-content:", ";"],
          (e) => {
            var t;
            return null != (t = e.position.grid) ? t : "start left";
          }
        ),
        F = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-26" })(
          [
            "display:flex;background:",
            ";color:",
            ";flex-direction:column;padding:",
            ";width:100%;flex-grow:1;@media (max-width:",
            "){padding:",
            ";}&.transparent{background:none;}&.pad-16x9{padding:",
            " ",
            " 56.25% ",
            ";}&.pad-1x1{padding:",
            " ",
            " 100% ",
            ";}&.height-auto{height:auto;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? r
              : a.darkest;
          },
          d.x4,
          o.fi.xsMax,
          d.x3,
          d.x4,
          d.x4,
          d.x4,
          d.x4,
          d.x4,
          d.x4
        ),
        M = l.I4.div.withConfig({ componentId: "sc-1ef1c1d0-27" })(
          [
            "padding:",
            " ",
            ";flex:1 0 auto;display:flex;flex-direction:row;align-items:center;max-width:calc(100% - 142px);&.fill-white{background:",
            ";}@media (max-width:",
            "){padding:",
            " ",
            ";}@media (max-width:",
            "){padding:",
            " ",
            ";}",
          ],
          d.x3,
          d.x4,
          r,
          o.fi.xsMax,
          d.x2,
          d.x3,
          o.fi.xxsMax,
          d.x1,
          d.x2
        ),
        z = (0, l.I4)(i.D).withConfig({ componentId: "sc-1ef1c1d0-28" })(
          [
            "line-height:1.05;margin-bottom:",
            ";color:inherit;span.legal-symbol{font-size:75%;vertical-align:text-top;}&.extralarge{font-size:clamp(24px,calc(5vw - 3.4px),58px);span.legal-symbol{font-size:50%;}}&.large{font-size:clamp(21px,calc(4vw - 2.4px),47px);span.legal-symbol{font-size:60%;}}&.medium{font-size:clamp(19px,calc(3.25vw - 2px),38px);}&.small{font-size:clamp(16px,calc(2.5vw - 1px),30px);}",
          ],
          d.x2
        ),
        E = (0, l.I4)(i.D).withConfig({ componentId: "sc-1ef1c1d0-29" })(
          [
            "color:inherit;line-height:1.2em;margin-bottom:",
            ";&.hero-tile{font-size:29px;line-height:32px;margin-bottom:0;}&.amplified-poly{font-size:clamp(15px,calc(2vw - 1px),21px);}&.amplified{font-size:clamp(12px,calc(2.6vw - 1px),27px);@media (max-width:",
            "){font-size:clamp(12px,calc(5vw - 1px),29px);}@media (max-width:",
            "){font-size:clamp(12px,calc(4.9vw - 1px),25px);}}&.giftcard-lockup{font-size:clamp(12px,calc(3.2vw - 5px),35px);@media (max-width:",
            "){font-size:clamp(12px,calc(5vw - 1px),37px);}@media (max-width:",
            "){font-size:clamp(12px,calc(4.8vw - 1px),29px);}}&.unit-per-lockup{font-size:clamp(12px,calc(2.4vw - 1px),27px);@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),35px);}@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),31px);}}&.whole-number-lockup{font-size:clamp(20px,calc(3.8vw - 1px),46px);@media (max-width:",
            "){font-size:clamp(20px,calc(7vw - 1px),48px);}@media (max-width:",
            "){font-size:clamp(18px,calc(7vw - 1px),42px);}}&.small-amplified{font-size:clamp(15px,-6.2953px + 3.1879vw,33px);@media (max-width:",
            "){font-size:clamp(12px,calc(5vw - 1px),35px);}@media (max-width:",
            "){font-size:clamp(12px,calc(4.9vw - 1px),25px);}}&.small-giftcard-lockup{font-size:clamp(13px,-6.0537px + 2.8523vw,29px);@media (max-width:",
            "){font-size:clamp(12px,calc(5vw - 1px),37px);}@media (max-width:",
            "){font-size:clamp(12px,calc(4.8vw - 1px),29px);}}&.small-unit-per-lockup{font-size:clamp(10.2px,-5.2671px + 2.3154vw,24px);@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),39px);}@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),31px);}}&.small-whole-number-lockup{font-size:clamp(20px,-4.6577px + 3.6913vw,41px);@media (max-width:",
            "){font-size:clamp(20px,calc(7vw - 1px),48px);}@media (max-width:",
            "){font-size:clamp(18px,calc(7vw - 1px),42px);}}",
          ],
          d.x2,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax
        );
      (0, l.I4)(E).withConfig({ componentId: "sc-1ef1c1d0-30" })([
        "font-size:29px;line-height:32px;span.legal-symbol{font-size:85%;vertical-align:text-top;}",
      ]);
      let L = (0, l.I4)(i.D).withConfig({ componentId: "sc-1ef1c1d0-31" })([
          "margin:0;display:block;width:100%;color:inherit;line-height:1.2em;font-size:clamp(12px,calc(4.5vw - 2px),24px);&.five-line{font-size:clamp(12px,calc(4.3vw - 2px),24px);}",
        ]),
        R = (0, l.I4)(i.D).withConfig({ componentId: "sc-1ef1c1d0-32" })(
          [
            "color:",
            ";line-height:1.2em;font-size:",
            ";margin-bottom:0;span.legal-symbol{font-size:85%;vertical-align:text-top;}@media (max-width:",
            "){font-size:",
            ";span.legal-symbol{font-size:inherit;}}",
          ],
          a.darkest,
          s.text.xlarge,
          o.fi.smMax,
          s.text.base
        ),
        P = l.I4.p.withConfig({ componentId: "sc-1ef1c1d0-33" })(
          [
            "line-height:1.2em;&.extralarge,&.large{font-size:clamp(",
            ",calc(2vw - 2px),",
            ");}&.medium,&.small{font-size:clamp(",
            ",calc(1.6vw - 1px),",
            ");}",
          ],
          s.text.medium,
          s.text.xlarge,
          s.text.small,
          s.text.large
        ),
        A = l.I4.p.withConfig({ componentId: "sc-1ef1c1d0-34" })(
          [
            "margin-bottom:",
            ";font-size:",
            ";line-height:",
            ";@media (max-width:",
            "){font-size:",
            ";}",
          ],
          d.x3,
          s.text.base,
          c.heading,
          o.fi.smMax,
          s.text.medium
        );
      (0, l.I4)(A).withConfig({ componentId: "sc-1ef1c1d0-35" })([
        "font-size:18px;line-height:21px;",
      ]),
        (0, l.I4)(A).withConfig({ componentId: "sc-1ef1c1d0-36" })(
          ["font-size:", ";line-height:19px;"],
          s.text.base
        );
      let O = l.I4.p.withConfig({ componentId: "sc-1ef1c1d0-37" })(
          ["font-size:", ";line-height:1.1em;"],
          s.text.small
        ),
        B = l.I4.p.withConfig({ componentId: "sc-1ef1c1d0-38" })(
          [
            "flex:0 0 ",
            "em;margin:0;font-size:",
            ";line-height:",
            ";&.amplified-fine-print{margin:0 0 ",
            " 0;}",
          ],
          c.heading,
          s.text.small,
          c.heading,
          d.x2
        ),
        D = l.I4.span.withConfig({ componentId: "sc-1ef1c1d0-39" })(
          [
            "display:flex;padding:",
            ";border-top:1px solid ",
            ";background-color:",
            ";color:",
            ";&:focus{text-decoration:underline;outline:none;}& > .link-text{flex-grow:1;}",
          ],
          d.x4,
          a.light,
          r,
          a.darkest
        );
    },
    19084: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => eE });
      var l = n(3576),
        i = n(62701),
        o = n(37876),
        a = n(14232),
        r = n(75570),
        s = n(729),
        d = n(91049),
        c = n(58421),
        u = n(57076),
        p = n(19351),
        h = n(93967),
        m = n(40123),
        g = n(17379),
        x = n(70418),
        v = n(53842),
        y = n(19427),
        f = n(54687),
        b = n(49516),
        j = n(30864);
      let w = "@web/domain-bulk-add-to-registry/bulk-add-to-registry",
        { useQuery: _ } = (0, g.T)({
          name: w,
          keyFn: (e) => {
            let { tcins: t } = e;
            if (!t)
              throw Error("TCINS not defined for bulk add to registry query");
            return [w, e];
          },
          queryFn: async function (e) {
            let { requestMetricsOptions: t } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                apiKey: n,
                baseUrl: i,
                apis: { product: o },
              } = (0, y.$)().services.redskyAggregations,
              {
                is_price_enabled: a,
                latitude: r,
                longitude: s,
                pricing_store_id: d,
                scheduled_delivery_store_id: c,
                state: u,
                store_id: p,
                tcins: h,
                zip: m,
              } = null != e ? e : {};
            if (!h)
              throw Error("TCINS not defined for bulk add to registry query");
            let g = null == h ? void 0 : h.split(","),
              {
                data: w,
                ok: _,
                statusText: C,
              } = await (0, j.T)(g, async (e) => {
                let h = await (0, f.E)(),
                  g = (0, l._)(
                    {
                      key: n,
                      tcins: e.join(","),
                      store_id: p,
                      zip: m,
                      state: u,
                      is_price_enabled: a,
                      latitude: r,
                      longitude: s,
                      pricing_store_id: d,
                      scheduled_delivery_store_id: c,
                    },
                    (0, b.M)() ? { effective_date: h } : {}
                  ),
                  y = x.o.buildURLWithParams(
                    o.endpointPaths.bulkAddToRegistryV1,
                    g,
                    i
                  );
                return (0, v.n)(
                  y,
                  (0, l._)(
                    {
                      credentials: "include",
                      partialErrorTag:
                        "redsky_aggregations_bulk_add_to_registry_api_error_partial",
                    },
                    t
                  )
                );
              });
            if (_) return null != w ? w : null;
            throw Error("".concat(C));
          },
        });
      var C = n(33232),
        k = n(26989),
        I = n(95636),
        N = n(41860),
        T = n(12430),
        S = n(46242),
        F = n(87068),
        M = n(66667),
        z = n(48603),
        E = n(2503),
        L = n(3422),
        R = n(42252),
        P = n(68112),
        A = n(57086),
        O = n(88137),
        B = n(45983),
        D = n(24955),
        q = n(20881),
        V = n(92410);
      let { useMutation: U } = (0, A.k)({
          name: "@site-registry/domains/registry/bulk-add-items/mutations/bulk-add-items",
          mutationFn: async (e) => {
            let t = ((e) => {
                var t, n, o;
                let { fetchOptions: a, requestParams: r } = null != e ? e : {},
                  {
                    apiKey: s,
                    apis: { registriesV2: d },
                    baseUrl: c,
                  } = (0, y.$)().services.apiPlatform,
                  u = null == r || null == (t = r[0]) ? void 0 : t.registry_id,
                  p = ""
                    .concat(
                      null !=
                        (o = null == (n = d.endpointPaths) ? void 0 : n.v2)
                        ? o
                        : "",
                      "/"
                    )
                    .concat(u, "/registry_items"),
                  h = x.o.buildURLWithParams(new URL(p, c), {
                    channel: V.A.CHANNEL_WEB,
                    sub_channel: V.A.SUBCHANNEL_DESKTOP,
                    location_id: "3991",
                    key: s,
                    registry_id: u,
                  }),
                  m =
                    null == r
                      ? void 0
                      : r.map((e) => ({
                          tcin: null == e ? void 0 : e.tcin,
                          requested_quantity:
                            null == e ? void 0 : e.requested_quantity,
                          purchased_quantity:
                            null == e ? void 0 : e.purchased_quantity,
                          registry_item_type: "TCIN",
                          item_note: "",
                          added_by_recipient:
                            null == e ? void 0 : e.added_by_recipient,
                          most_wanted_flag: !1,
                        }));
                return {
                  fetch: () =>
                    (0, q.bE)(
                      h,
                      (0, i._)((0, l._)({ credentials: "include" }, a), {
                        headers: { Accept: "application/json" },
                        body: JSON.stringify({ items: m }),
                      })
                    ),
                  url: h,
                  options: e,
                };
              })({ requestParams: e, fetchOptions: {} }),
              {
                data: n,
                ok: o,
                statusText: a,
              } = await t.fetch().catch((e) => {
                (0, D.s)(e.status);
              });
            if (o) return n;
            throw Error("".concat(a));
          },
        }),
        W = (0, B.U)(U, { minimumAssuranceLevel: O.ov });
      var H = n(60823),
        G = n(32038),
        Y = n(28391),
        K = n(64219),
        Q = n(6908),
        Z = n(42773),
        $ = n(38858),
        J = n(54693),
        X = n(12206),
        ee = n(1800),
        et = n(50525),
        en = n(95408),
        el = n(77232),
        ei = n(98601);
      let eo = el.I4.div.withConfig({ componentId: "sc-ee758d51-0" })(
          [
            "display:flex;align-items:center;border-bottom:solid 1px ",
            ";&:last-of-type{border-bottom:0;}",
          ],
          ei.Tj.palette.gray.light
        ),
        ea = el.I4.div.withConfig({ componentId: "sc-ee758d51-1" })(
          ["margin:", ";vertical-align:middle;width:100%;"],
          ei.xe.generic.x4
        ),
        er = el.I4.div.withConfig({ componentId: "sc-ee758d51-2" })(
          ["margin-left:", ";vertical-align:middle;"],
          ei.xe.generic.x4
        ),
        es = el.I4.div.withConfig({ componentId: "sc-ee758d51-3" })(
          ["margin-top:", ";display:flex;justify-content:space-between;"],
          ei.xe.generic.x2
        ),
        ed = el.I4.div.withConfig({ componentId: "sc-ee758d51-4" })(
          [
            "display:inline-block;vertical-align:middle;width:60px;height:60px;margin-right:",
            ";picture{width:100%;height:100%;}picture::after{",
            "}",
          ],
          ei.xe.generic.x1,
          (e) =>
            e.quantity && e.quantity > 1
              ? (0, el.AH)(
                  [
                    "content:'",
                    "';position:absolute;top:100%;transform:translateY(-100%);right:-3px;font-size:0.7em;background:",
                    ";color:white;width:18px;height:18px;text-align:center;line-height:18px;border-radius:50%;box-shadow:0 0 1px ",
                    ";",
                  ],
                  e.quantity,
                  ei.Tj.palette.gray.dark,
                  ei.Tj.palette.gray.light
                )
              : "content: none;"
        ),
        ec = el.I4.div.withConfig({ componentId: "sc-ee758d51-5" })(
          ["color:", ";"],
          ei.Tj.palette.gray.darkest
        ),
        eu = (e) => {
          var t, n;
          let {
              isSelected: l,
              updateQuantity: i,
              quantity: s,
              toggleSelect: d,
              productSummary: c,
              isParentAvailable: u = !1,
            } = e,
            p = (0, R.rd)(),
            h = (0, G.A5)(c),
            m = (0, G.JJ)(c),
            g = (0, G.U6)(c),
            x = null != (n = (0, k.Gs)(c)) ? n : "",
            v = (0, Y.u6)(c),
            y = (0, Y.wk)(c),
            f =
              null == c || null == (t = c.price)
                ? void 0
                : t.formatted_current_price,
            { trackClick: b } = (0, H.f)(),
            j = (0, en.Mv)("GLOBAL_PRICE_STRIKETHROUGH_ENABLED"),
            w = (0, a.useMemo)(
              () =>
                [...Array.from({ length: 10 }).fill(void 0)].map((e, t) => ({
                  value: "".concat(t + 1),
                  label: "".concat(t + 1),
                })),
              []
            ),
            _ = (0, a.useCallback)(
              (e) => {
                var t;
                i(
                  x,
                  Number(
                    null == e || null == (t = e.target) ? void 0 : t.textContent
                  )
                );
              },
              [x, i]
            ),
            C = (0, a.useCallback)(() => {
              b.track({
                clickType: l ? "REMOVE_ITEM" : "ADD_ITEMS",
                featureType: "BULK_ADD",
              }),
                d(x);
            }, [l, x, d, b]),
            I = (0, a.useCallback)(
              () => (
                b.track({ clickType: "PRODUCT", featureType: "BULK_ADD" }),
                m && p.push(m),
                !1
              ),
              [m, p, b]
            );
          return (0, o.jsxs)(eo, {
            children: [
              (0, o.jsx)(K.S, {
                checked: l,
                "data-test": "@web/BulkAddToRegistryDrawerItemCheckbox",
                hideLabel: !0,
                id: x,
                label: (0, ee.D4)(h),
                onChange: C,
              }),
              (0, o.jsx)(er, {
                children: (0, o.jsx)(
                  ed,
                  {
                    children: (0, o.jsx)(Q.V, {
                      alt: h,
                      isFallbackImageDisabled: !1,
                      src: g,
                    }),
                  },
                  x
                ),
              }),
              (0, o.jsxs)(ea, {
                children: [
                  (0, o.jsx)(r.N, {
                    href: m,
                    onClick: I,
                    underline: "invert",
                    children: (0, o.jsx)(Z.D, {
                      className: "h-margin-b-tiny",
                      level: 3,
                      size: 4,
                      children: (0, o.jsx)($.P, {
                        lines: 3,
                        children: (0, ee.D4)(h),
                      }),
                    }),
                  }),
                  (0, o.jsx)(J.z, {
                    hideReviewsText: !0,
                    rating: v,
                    ratingCount: y,
                    showRatingCount: !!y,
                  }),
                  u
                    ? (0, o.jsx)(et.x, {
                        className: "h-text-normal",
                        isStrikethroughPriceEnabled: j,
                        shouldResizeLargeTextToFit: !0,
                        textAlignment: "left",
                      })
                    : (0, o.jsx)(ec, { className: "h-text-md", children: f }),
                  (0, o.jsx)(es, {
                    children: (0, o.jsx)(X.s, {
                      "aria-label": "Qty "
                        .concat(s, " for ")
                        .concat((0, ee.D4)(h)),
                      className: "h-display-flex",
                      "data-test": "@web/BulkAddToCartSelectCustom",
                      flip: !0,
                      label: "Qty",
                      onChange: _,
                      options: w,
                      size: "sm",
                      value: null == s ? void 0 : s.toString(),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      eu.displayName = "BulkAddToRegistryDrawerItem";
      let ep = el.I4.div.withConfig({ componentId: "sc-9b36d847-0" })(
          ["height:", ";overflow-y:auto;padding:0px 4px;"],
          (e) => {
            let { $hideButton: t } = e;
            return t ? "100%" : "92%";
          }
        ),
        eh = el.I4.div.withConfig({ componentId: "sc-9b36d847-1" })([
          "position:absolute;bottom:0px;background:white;width:340px;",
        ]);
      var em = n(14017),
        eg = n(30820),
        ex = n(79055);
      let ev = el.I4.div.withConfig({ componentId: "sc-c682b90a-0" })(
          ["margin-bottom:", ";display:flex;"],
          ei.xe.generic.x5
        ),
        ey = el.I4.div.withConfig({ componentId: "sc-c682b90a-1" })(
          ["color:", ";font:", ";margin-left:", ";"],
          ei.Tj.text.formLabel,
          ei.gx.size.text.medium,
          ei.xe.generic.x2
        ),
        ef = (0, el.I4)(eg.f).withConfig({ componentId: "sc-c682b90a-2" })([
          "padding-top:14px;",
        ]),
        eb = (0, el.I4)(ex.s).withConfig({ componentId: "sc-c682b90a-3" })(
          ["div[for$='Registry']{top:", ";}border-bottom:1px solid gray;"],
          ei.xe.generic.x9
        );
      var ej = n(50725),
        ew = n(92543),
        e_ = n(28204);
      let eC = {
          purchased_quantity: 0,
          registry_item_type: "TCIN",
          added_by_recipient: !0,
        },
        ek = (e) => {
          let {
              closeDrawer: t,
              selectedProducts: n,
              selectedRegistry: i,
              registriesList: s,
              setSelectedRegistry: d,
            } = e,
            c = (0, z.qf)(),
            u = (0, z.$7)(),
            { trackClick: p } = (0, H.f)(),
            [h, m] = (0, a.useState)(!1),
            [g, x] = (0, a.useState)(!1),
            v = (null == i ? void 0 : i.list_type) === "REGISTRY",
            [y, { isSuccess: f, isError: b }] = W();
          (0, a.useEffect)(() => {
            f &&
              (x(!0),
              m(!1),
              setTimeout(() => {
                t();
              }, 1e3)),
              b && (x(!1), m(!0));
          }, [f, b, t]);
          let j = (0, a.useCallback)(() => {
            var e, t, o;
            let a =
              null == n
                ? void 0
                : n.map((e) =>
                    (0, l._)(
                      {
                        tcin: null == e ? void 0 : e.tcin,
                        requested_quantity: null == e ? void 0 : e.quantity,
                        registry_id: null == i ? void 0 : i.registry_id,
                      },
                      eC
                    )
                  );
            y(a);
            let {
              registry_id: r,
              registry_type: s,
              registry_title: d,
              event: c,
              registry_status: u,
            } = null != i ? i : {};
            p.track({
              clickType: "ADD_TO_REGISTRY",
              featureType: "BULK_ADD",
              element: {
                type: "TCIN",
                id: null != (t = null == (e = a[0]) ? void 0 : e.tcin) ? t : "",
              },
              registry: {
                id: null != r ? r : "",
                type: null != s ? s : "",
                title: null != d ? d : "",
                event_date:
                  null != (o = null == c ? void 0 : c.event_date) ? o : "",
                status: null != u ? u : "",
              },
            });
          }, [y, n, i, p]);
          (0, a.useEffect)(() => {
            g &&
              setTimeout(() => {
                x(!1);
              }, 5e3),
              h &&
                setTimeout(() => {
                  m(!1);
                }, 3e3);
          }, [g, h]);
          let w = "Import "
              .concat(null == n ? void 0 : n.length, "\n  ")
              .concat(
                (null == n ? void 0 : n.length) > 1 ? "items" : "item",
                " to "
              )
              .concat(v ? "registry" : "wish list"),
            _ = ""
              .concat(null == n ? void 0 : n.length, " ")
              .concat((null == n ? void 0 : n.length) > 1 ? "items" : "item");
          return (0, o.jsxs)(o.Fragment, {
            children: [
              u && c
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      (null == s ? void 0 : s.length) > 0
                        ? (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(em.z, {
                                children:
                                  null == s
                                    ? void 0
                                    : s.map((e, t) => {
                                        var n, l, a, r;
                                        let {
                                            event: c,
                                            registry_type: u,
                                            profile_image: p,
                                            registry_title: h,
                                            registry_id: m,
                                            recipients: g,
                                            organization_name: x,
                                          } = e,
                                          v =
                                            null !=
                                            (a =
                                              null == p ||
                                              null == (n = p.dimension)
                                                ? void 0
                                                : n.split("|")[0])
                                              ? a
                                              : "",
                                          y =
                                            null !=
                                            (r =
                                              null == p ||
                                              null == (l = p.dimension)
                                                ? void 0
                                                : l.split("|")[1])
                                              ? r
                                              : "",
                                          f =
                                            null == g
                                              ? void 0
                                              : g.find(
                                                  (e) =>
                                                    "REGISTRANT" ===
                                                    e.recipient_type
                                                ),
                                          b =
                                            null == g
                                              ? void 0
                                              : g.find(
                                                  (e) =>
                                                    "COREGISTRANT" ===
                                                    e.recipient_type
                                                ),
                                          j =
                                            x ||
                                            ""
                                              .concat(
                                                null == f
                                                  ? void 0
                                                  : f.first_name,
                                                " "
                                              )
                                              .concat(
                                                null == f ? void 0 : f.last_name
                                              ) ||
                                            void 0,
                                          w = (
                                            null == p
                                              ? void 0
                                              : p.image_url_params
                                          )
                                            ? ""
                                                .concat(
                                                  null == p
                                                    ? void 0
                                                    : p.image_url,
                                                  "/"
                                                )
                                                .concat(
                                                  null == p
                                                    ? void 0
                                                    : p.image_url_params,
                                                  "?\n                "
                                                )
                                                .concat(
                                                  v
                                                    ? "cropN=".concat(
                                                        null == v
                                                          ? void 0
                                                          : v.replace(/X/g, ",")
                                                      )
                                                    : "",
                                                  "\n                "
                                                )
                                                .concat(
                                                  y ? "&rotate=".concat(y) : ""
                                                )
                                            : "",
                                          _ = (0, o.jsxs)(ev, {
                                            children: [
                                              (0, o.jsx)(ef, {
                                                children: (0, o.jsx)(ej.r, {
                                                  coRegistrant:
                                                    (null == b
                                                      ? void 0
                                                      : b.first_name) &&
                                                    b.last_name
                                                      ? ""
                                                          .concat(
                                                            b.first_name,
                                                            " "
                                                          )
                                                          .concat(b.last_name)
                                                      : void 0,
                                                  eventType: u,
                                                  primaryRegistrant: j,
                                                  registrantPhoto: w,
                                                }),
                                              }),
                                              (0, o.jsxs)(ey, {
                                                children: [
                                                  (0, o.jsx)(Z.D, {
                                                    level: 3,
                                                    size: 4,
                                                    children: (0, ee.D4)(
                                                      null != h ? h : ""
                                                    ),
                                                  }),
                                                  (0, o.jsx)("p", {
                                                    children:
                                                      null == c
                                                        ? void 0
                                                        : c.event_date,
                                                  }),
                                                  (0, o.jsxs)("p", {
                                                    children: [
                                                      null == c
                                                        ? void 0
                                                        : c.city,
                                                      ", ",
                                                      null == c
                                                        ? void 0
                                                        : c.state,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          });
                                        return (0, o.jsx)(
                                          eb,
                                          {
                                            checked:
                                              m ===
                                              (null == i
                                                ? void 0
                                                : i.registry_id),
                                            id: "".concat(t).concat(h),
                                            label: _,
                                            name: "registry",
                                            onChange: () =>
                                              d(
                                                (null == s
                                                  ? void 0
                                                  : s.find(
                                                      (e) =>
                                                        (null == e
                                                          ? void 0
                                                          : e.registry_id) === m
                                                    )) || null
                                              ),
                                            value: m,
                                          },
                                          t
                                        );
                                      }),
                              }),
                              (0, o.jsx)("div", {
                                className: "h-margin-t-jumbo",
                                children: (0, o.jsx)(F.$, {
                                  className: "h-margin-t-jumbo",
                                  disabled: !i,
                                  isFullWidth: !0,
                                  onClick: j,
                                  children: w,
                                }),
                              }),
                            ],
                          })
                        : (0, o.jsx)(F.$, {
                            className: "h-margin-t-jumbo",
                            href: "https://www.target.com/gift-registry",
                            isFullWidth: !0,
                            children: "Create a registry",
                          }),
                      h &&
                        (0, o.jsx)("div", {
                          className: "h-margin-t-default",
                          children: v
                            ? ew.n.errorMessageRegistry
                            : ew.n.errorMessageWishList,
                        }),
                    ],
                  })
                : (0, o.jsxs)("span", {
                    children: [
                      (0, o.jsx)(r.N, {
                        onClick: () => (0, E.Jv)(),
                        children: ew.n.signIn,
                      }),
                      ew.n.logInMessagePart2,
                    ],
                  }),
              (0, o.jsx)(e_.C, {
                hasAddedItemToRegistry: g,
                isMultipleItems: !0,
                isRegistry: v,
                productTitle: _,
              }),
            ],
          });
        };
      ek.displayName = "ChooseRegistryDrawerContent";
      let eI = {
          purchased_quantity: 0,
          registry_item_type: "TCIN",
          added_by_recipient: !0,
        },
        eN = (e) => {
          var t, n;
          let {
              tcins: r,
              isBulkAddToWishlist: s,
              closeBulkAddToRegistryDrawer: c,
            } = e,
            [u, p] = (0, a.useState)([]),
            [h, g] = (0, a.useState)([]),
            [x, v] = (0, a.useState)(!1),
            [y, f] = (0, a.useState)(null),
            { preferredStoreId: b } = (0, I._f)(),
            { scheduledDeliveryStoreId: j } = (0, S.Y)(),
            { pricingStoreId: w } = (0, N.x)(),
            { guestLocation: A } = (0, T.oK)(),
            {
              zipCode: O,
              latitude: B,
              longitude: D,
              state: q,
            } = null != A ? A : {},
            { query: V } = (0, R.rd)(),
            { trackClick: U } = (0, H.f)(),
            G = null != (n = (0, L.xs)(V, "registryId")) ? n : "",
            Y = (null == y ? void 0 : y.list_type) === "REGISTRY",
            [K, Q] = (0, a.useState)(!1),
            Z = (0, z.qf)(),
            $ = (0, z.$7)() && Z,
            [J, { isSuccess: X }] = (0, P.v)(),
            ee = (0, a.useMemo)(() => {
              var e;
              return null != (e = J()) ? e : [];
            }, [J]).filter((e) =>
              s ? "WISHLIST" === e.list_type : "REGISTRY" === e.list_type
            ),
            et = ""
              .concat(null == h ? void 0 : h.length, " ")
              .concat((null == h ? void 0 : h.length) > 1 ? "items" : "item");
          (0, a.useEffect)(() => {
            if (X) {
              var e;
              f(
                null !=
                  (e =
                    (null != ee ? ee : []).find(
                      (e) => "BABY" === e.registry_type
                    ) || (null == ee ? void 0 : ee[0]))
                  ? e
                  : null
              );
            }
          }, [X, ee]);
          let [en, { isSuccess: el, isError: ei }] = W(),
            [eo, { open: ea, close: er }] = (0, d.e)({
              type: "drawer",
              shouldStack: !0,
              shouldCloseAll: !0,
            }),
            es = (0, a.useMemo)(
              () => ({
                latitude: B,
                longitude: D,
                pricing_store_id: w,
                scheduled_delivery_store_id: j,
                state: q,
                store_id: b,
                zip: O,
              }),
              [B, D, j, q, O, b, w]
            ),
            [ed, ec] = _(
              (0, i._)((0, l._)({}, es), { tcins: r, is_price_enabled: !0 }),
              { enabled: !!r }
            ),
            em = null == (t = ed()) ? void 0 : t.data,
            eg = (0, a.useMemo)(() => {
              var e;
              return null != (e = null == em ? void 0 : em.product_summaries)
                ? e
                : [];
            }, [null == em ? void 0 : em.product_summaries]),
            ex = (0, a.useCallback)((e) => {
              p((t) =>
                null == t
                  ? void 0
                  : t.map((t) => {
                      var n;
                      return (null == t || null == (n = t.productSummary)
                        ? void 0
                        : n.tcin) === e
                        ? (0, i._)((0, l._)({}, t), {
                            isSelected: !t.isSelected,
                          })
                        : t;
                    })
              );
            }, []),
            ev = (0, a.useCallback)((e, t) => {
              p((n) =>
                null == n
                  ? void 0
                  : n.map((n) => {
                      var o;
                      return (null == n || null == (o = n.productSummary)
                        ? void 0
                        : o.tcin) === e
                        ? (0, i._)((0, l._)({}, n), { quantity: t })
                        : n;
                    })
              );
            }, []),
            ey = (0, a.useCallback)(() => {
              if ($)
                if (G || (null == ee ? void 0 : ee.length) === 1) {
                  var e, t, n;
                  let i,
                    o =
                      ((i =
                        G ||
                        (null == ee || null == (e = ee[0])
                          ? void 0
                          : e.registry_id) ||
                        ""),
                      null == h
                        ? void 0
                        : h.map((e) =>
                            (0, l._)(
                              {
                                tcin: null == e ? void 0 : e.tcin,
                                requested_quantity:
                                  null == e ? void 0 : e.quantity,
                                registry_id: i,
                              },
                              eI
                            )
                          ));
                  en(o);
                  let {
                      registry_id: a,
                      registry_type: r,
                      registry_title: s,
                      event: d,
                      registry_status: c,
                    } = null != (t = null == ee ? void 0 : ee[0]) ? t : {},
                    u = o
                      .map((e) => ({ type: "TCIN", id: e.tcin }))
                      .filter((e) => e.id);
                  U.track({
                    clickType: "ADD_TO_REGISTRY",
                    featureType: "BULK_ADD",
                    elements: u,
                    registry: {
                      id: null != a ? a : "",
                      type: null != r ? r : "",
                      title: null != s ? s : "",
                      event_date:
                        null != (n = null == d ? void 0 : d.event_date)
                          ? n
                          : "",
                      status: null != c ? c : "",
                    },
                  });
                } else ea();
              else Q(!0), setTimeout(() => Q(!1), 3e3);
            }, [$, h, G, ee, en, U, ea]),
            ef = (0, a.useCallback)(() => {
              er(), c();
            }, [c, er]);
          return ((0, a.useEffect)(() => {
            el &&
              (v(!0),
              setTimeout(() => {
                c();
              }, 1e3)),
              ei && v(!1);
          }, [el, ei, c]),
          (0, a.useEffect)(() => {
            x &&
              setTimeout(() => {
                v(!1);
              }, 5e3);
          }, [x]),
          (0, a.useEffect)(() => {
            (null == ec ? void 0 : ec.isSuccess) &&
              p(
                null == eg
                  ? void 0
                  : eg.map((e) => ({
                      productSummary: e,
                      isSelected: !0,
                      quantity: 1,
                    }))
              );
          }, [eg, null == ec ? void 0 : ec.isSuccess]),
          (0, a.useEffect)(() => {
            let e =
              null == u
                ? void 0
                : u.filter((e) => (null == e ? void 0 : e.isSelected));
            g(
              null == e
                ? void 0
                : e.map((e) => {
                    var t;
                    return {
                      tcin:
                        null == e || null == (t = e.productSummary)
                          ? void 0
                          : t.tcin,
                      isSelected: null == e ? void 0 : e.isSelected,
                      quantity: null == e ? void 0 : e.quantity,
                    };
                  })
            );
          }, [u]),
          u)
            ? (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(ep, {
                    $hideButton: (null == h ? void 0 : h.length) === 0,
                    children:
                      null == u
                        ? void 0
                        : u.map((e) => {
                            var t, n;
                            let {
                              productSummary: l,
                              isSelected: i,
                              quantity: a,
                            } = e;
                            return (0, o.jsx)(
                              C.M,
                              {
                                debugName:
                                  "bulk add to registry drawer item description",
                                queryResult: ec,
                                shouldShowChildProducts: !0,
                                value: m(l) ? void 0 : l,
                                children: (0, o.jsx)(eu, {
                                  isParentAvailable: !!(
                                    (null == l || null == (t = l.parent)
                                      ? void 0
                                      : t.__typename) &&
                                    (null == l || null == (n = l.parent)
                                      ? void 0
                                      : n.tcin)
                                  ),
                                  isSelected: i,
                                  productSummary: l,
                                  quantity: a,
                                  toggleSelect: ex,
                                  updateQuantity: ev,
                                }),
                              },
                              (0, k.t2)(l)
                            );
                          }),
                  }),
                  (null == h ? void 0 : h.length) > 0 &&
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(eh, {
                          className:
                            "h-display-flex h-flex-align-center h-border-t h-padding-v-default",
                          id: "bulk-add-to-registry-button",
                          children: (0, o.jsxs)(F.$, {
                            isFullWidth: !0,
                            onClickCapture: ey,
                            children: [
                              "Import ",
                              null == h ? void 0 : h.length,
                              " ",
                              (null == h ? void 0 : h.length) > 1
                                ? "items"
                                : "item",
                              " to",
                              " ",
                              s ? "wish list" : "registry",
                            ],
                          }),
                        }),
                        K &&
                          (0, o.jsx)(M.A, {
                            isOpen: !0,
                            placement: "top",
                            role: "tooltip",
                            target: "bulk-add-to-registry-button",
                            variant: "primary",
                            children: (0, o.jsx)("button", {
                              onClick: () => (0, E.Jv)(),
                              type: "button",
                              children: "Sign in",
                            }),
                          }),
                      ],
                    }),
                  (0, o.jsx)(eo, {
                    headingText: "Choose a ".concat(
                      s ? "wish list" : "registry"
                    ),
                    children: (0, o.jsx)(ek, {
                      closeDrawer: ef,
                      registriesList: ee,
                      selectedProducts: h,
                      selectedRegistry: y,
                      setSelectedRegistry: f,
                    }),
                  }),
                  (0, o.jsx)(e_.C, {
                    hasAddedItemToRegistry: x,
                    isMultipleItems: !0,
                    isRegistry: Y,
                    productTitle: et,
                  }),
                ],
              })
            : null;
        };
      eN.displayName = "BulkAddToRegistryDrawerContent";
      var eT = n(37294),
        eS = n(94259),
        eF = n(37753),
        eM = n(94520),
        ez = n(41034);
      let eE = (e) => {
        var t, n, m, g, x, v, y, f, b, j, w, _, C, k, I, N;
        let {
            children: T,
            className: S,
            dataPosition: F = 0,
            link: M,
            linkInfo: z,
            metadata: E,
            storyId: L = "",
            style: R,
            underline: P,
          } = e,
          { isBot: A } = (0, a.useContext)(eS.B.Context),
          { trackEvent: O } = (0, p.z1)(),
          B = (0, eF.ES)(M),
          D = {
            color: "inherit",
            position: "static",
            pointerEvents: (null == M ? void 0 : M.disabled) ? "none" : "auto",
          },
          q =
            (null == M || null == (t = M.detail) ? void 0 : t.id) ===
              "shoppable_drawer" &&
            !!(null == M ||
            null == (m = M.detail) ||
            null == (n = m.multi_tcins)
              ? void 0
              : n.length),
          V =
            (null == M || null == (g = M.detail) ? void 0 : g.id) ===
              "tcin_add_to_cart" &&
            !!(null == M ||
            null == (v = M.detail) ||
            null == (x = v.multi_tcins)
              ? void 0
              : x.length),
          U =
            (null == M || null == (y = M.detail) ? void 0 : y.id) ===
              "multi_tcin_add_to_registry" &&
            !!(null == M ||
            null == (b = M.detail) ||
            null == (f = b.multi_tcins)
              ? void 0
              : f.length),
          W =
            (null == M || null == (j = M.detail) ? void 0 : j.id) ===
              "multi_tcin_add_to_wishlist" &&
            !!(null == M ||
            null == (_ = M.detail) ||
            null == (w = _.multi_tcins)
              ? void 0
              : w.length),
          H = (
            null !=
            (I = null == M || null == (C = M.detail) ? void 0 : C.multi_tcins)
              ? I
              : []
          ).join(","),
          G = c._2.PICKUP,
          Y = null == E || null == (k = E.components) ? void 0 : k[F],
          K = (0, a.useMemo)(() => {
            var e, t, n;
            return null !=
              (n =
                null == M ||
                null == (t = M.detail) ||
                null == (e = t.multi_tcins)
                  ? void 0
                  : e.map((e) => ({ tcin: e, quantity: 1, title: " " })))
              ? n
              : [];
          }, [M]),
          Q = { card_action_type: "cart", tcins: H },
          Z = (0, a.useCallback)(() => {
            var e, t;
            let n = ((e) =>
              (null == e ? void 0 : e.prz_placement_id)
                ? {
                    placementId: null == e ? void 0 : e.prz_placement_id,
                    strategyDescription:
                      null == e ? void 0 : e.prz_strategy_description,
                    strategyId: null == e ? void 0 : e.prz_strategy_id,
                    strategyName: null == e ? void 0 : e.prz_strategy_name,
                    type: null == e ? void 0 : e.type_name,
                  }
                : void 0)(Y);
            O(
              (0, l._)(
                {
                  event: {
                    name: "openFlyout",
                    source: ""
                      .concat(L, " || ")
                      .concat(null == M ? void 0 : M.link_tag),
                    type: "click",
                  },
                  guest: { eventType: "click" },
                  lnk: { contentClick: void 0, recClick: n },
                },
                V && {
                  products: K.map((e) =>
                    (0, i._)((0, l._)({}, e), {
                      placementType: "bulk cart add",
                    })
                  ),
                },
                (U || W) && {
                  products:
                    null == M ||
                    null == (t = M.detail) ||
                    null == (e = t.multi_tcins)
                      ? void 0
                      : e.map((e) => ({
                          tcin: e,
                          placementType: "bulk registry add",
                        })),
                }
              )
            );
          }, [Y, V, M, K, L, O, U, W]),
          [$, { open: J, isShown: X }] = ((e) => {
            let { tcins: t, shouldStack: n, isBulkAddToWishlist: r } = e,
              [s, c] = (0, d.e)({ type: "drawer", shouldStack: n });
            return [
              (0, a.useCallback)(
                (e) =>
                  (0, o.jsx)(h.H, {
                    action:
                      "error_boundary_registry_bulk_add_to_registry_drawer",
                    children: (0, o.jsx)(
                      s,
                      (0, i._)(
                        (0, l._)(
                          {
                            "data-test":
                              "@web/registry-components/BulkAddToRegistryDrawer",
                            headingText: "Add to your ".concat(
                              r ? "wish list " : "registry"
                            ),
                            onAfterClose: null == c ? void 0 : c.close,
                            pageIdKey: "REGISTRY_BULKIMPORT",
                            scroll: "content",
                          },
                          e
                        ),
                        {
                          children: (0, o.jsx)(eN, {
                            closeBulkAddToRegistryDrawer:
                              null == c ? void 0 : c.close,
                            isBulkAddToWishlist: r,
                            tcins: t,
                          }),
                        }
                      )
                    ),
                  }),
                [s, null == c ? void 0 : c.close, t, r]
              ),
              c,
            ];
          })({ tcins: H, isBulkAddToWishlist: W }),
          ee = (0, a.useCallback)(
            (e) => {
              null == e || e.preventDefault(), J(), Z();
            },
            [J, Z]
          ),
          et = null != (N = (0, eT.Y)().ENABLE_LINK_PRICE_RATING_SHIPPING) && N,
          [en, el] = (0, a.useState)(!1),
          ei = (0, a.useCallback)(
            (e) => {
              null == e || e.preventDefault(), el(!0), Z();
            },
            [el, Z]
          ),
          [eo, { open: ea, close: er, isShown: es }] = (0, d.e)({
            type: "drawer",
            shouldStack: !0,
          }),
          ed = (0, a.useCallback)(() => {
            er();
          }, [er]),
          ec = (0, a.useCallback)(
            (e) => {
              null == e || e.preventDefault(), ea(), Z();
            },
            [ea, Z]
          );
        return B
          ? U || W
            ? (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(r.N, {
                    href: B,
                    "data-test": z,
                    "data-lnk": null == M ? void 0 : M.link_tag,
                    "data-position": F,
                    className: S,
                    style: (0, l._)({}, D, R),
                    underline: P,
                    onClick: ee,
                    "aria-expanded": X,
                    children: T,
                  }),
                  (0, o.jsx)($, {}),
                ],
              })
            : q
            ? (0, o.jsx)(o.Fragment, {
                children: A
                  ? (0, o.jsx)(ez.E, { shoppableDrawerData: Q })
                  : (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(r.N, {
                          href: B,
                          "data-test": z,
                          "data-lnk": null == M ? void 0 : M.link_tag,
                          "data-position": F,
                          className: S,
                          style: (0, l._)({}, D, R),
                          underline: P,
                          onClick: ec,
                          "aria-expanded": es,
                          children: T,
                        }),
                        (0, o.jsx)(s.s, {
                          defaultOptions: {
                            type: "drawer",
                            shouldStack: !0,
                            ModalProps: { onCloseClick: ed },
                          },
                          children: (0, o.jsx)(eo, {
                            headingText: "Explore items",
                            children: (0, o.jsx)(eM.p, {
                              shoppableDrawerData: Q,
                              componentId: L,
                            }),
                          }),
                        }),
                      ],
                    }),
              })
            : V
            ? (0, o.jsxs)(o.Fragment, {
                children: [
                  (0, o.jsx)(r.N, {
                    href: B,
                    "data-test": z,
                    "data-lnk": null == M ? void 0 : M.link_tag,
                    "data-position": F,
                    className: S,
                    style: (0, l._)({}, D, R),
                    underline: P,
                    onClick: ei,
                    "aria-expanded": en,
                    children: T,
                  }),
                  K.length > 0 &&
                    (0, o.jsx)(u.I, {
                      isOpen: en,
                      fulfillmentType: G,
                      products: K,
                      setIsOpen: el,
                      showPrice: et,
                      shouldShowRatings: et,
                      shouldEnableProductTitleLinks: et,
                      showShippingFulfillment: et,
                    }),
                ],
              })
            : (0, o.jsx)(r.N, {
                href: B,
                "data-test": z,
                "data-lnk": null == M ? void 0 : M.link_tag,
                "data-position": F,
                className: S,
                style: (0, l._)({}, D, R),
                underline: P,
                children: T,
              })
          : (0, o.jsx)("div", {
              "data-test": z,
              "data-lnk": null == M ? void 0 : M.link_tag,
              "data-position": F,
              className: S,
              style: (0, l._)({}, D, R),
              children: T,
            });
      };
      eE.displayName = "ContentPoolLink";
    },
    22071: (e) => {
      e.exports = {
        ndsBaseRadio: "styles_ndsBaseRadio__JGTvz",
        "border-animation": "styles_border-animation__pmjKt",
        invalid: "styles_invalid__F96fY",
      };
    },
    24955: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => i });
      var l = n(2503);
      let i = (e) => {
        401 === e && (0, l.Jv)();
      };
    },
    27333: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => u });
      var l = n(70418),
        i = n(53842),
        o = n(54687),
        a = n(17379),
        r = n(4042),
        s = n(19427),
        d = n(30864);
      let c = "@web/domain-product/get-product-summary-for-drawer",
        { useQuery: u } = (0, a.T)({
          name: c,
          keyFn: (e) => {
            if (!e.tcins)
              throw Error("TCINS not defined for product summary drawer query");
            return [c, e];
          },
          queryFn: async (e) => {
            let {
                apiKey: t,
                baseUrl: n,
                apis: { product: a },
              } = (0, s.$)().services.redskyAggregations,
              { tcins: c, pricing_store_id: u = r.Vz } = null != e ? e : {},
              p = await (0, o.E)(),
              {
                data: h,
                ok: m,
                statusText: g,
              } = await (0, d.T)(null == c ? void 0 : c.split(","), (e) => {
                let o = {
                  key: t,
                  effective_date: p,
                  tcins: e.join(","),
                  pricing_store_id: u,
                };
                if (!o.tcins)
                  throw Error(
                    "TCINS not defined for product summary drawer query"
                  );
                let r = l.o.buildURLWithParams(
                  new URL(a.endpointPaths.productSummaryForDrawer, n),
                  o
                );
                return (0, i.n)(r, {
                  partialErrorTag:
                    "get_product_summary_for_drawer_v1_partial_api_error",
                });
              });
            if (m) {
              var x;
              return null != (x = null == h ? void 0 : h.data) ? x : null;
            }
            throw Error("".concat(g));
          },
        });
    },
    28204: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => s });
      var l = n(37876),
        i = n(26408),
        o = n(88686),
        a = n(14232),
        r = n(92543);
      let s = (e) => {
        let {
            hasAddedItemToRegistry: t,
            productTitle: n,
            isMultipleItems: s,
            isRegistry: d,
          } = e,
          c = (0, a.useMemo)(
            () =>
              s
                ? d
                  ? r.n.areAddedToYourRegistry
                  : r.n.areAddedToYourWishList
                : d
                ? r.n.isAddedToYourRegistry
                : r.n.isAddedToYourWishList,
            [s, d]
          );
        return t
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(i.y, {
                  heading: n,
                  isOpen: t,
                  message: c,
                  variant: "timed",
                  zIndex: 1100,
                }),
                (0, l.jsx)("span", {
                  "aria-live": "polite",
                  className: "h-sr-only",
                  children: "Added "
                    .concat(n && (0, o.V)(n, "span"), " to my ")
                    .concat(
                      d
                        ? (0, o.V)("registry", "span")
                        : (0, o.V)("wish list", "span")
                    ),
                }),
              ],
            })
          : null;
      };
      s.displayName = "AddedToRegistryCopy";
    },
    28391: (e, t, n) => {
      "use strict";
      n.d(t, {
        F1: () => d,
        FD: () => u,
        PP: () => m,
        Qc: () => c,
        RE: () => h,
        V9: () => y,
        X2: () => o,
        Z0: () => g,
        aw: () => i,
        mv: () => f,
        sp: () => p,
        tA: () => s,
        u6: () => a,
        wk: () => r,
      });
      var l = n(14649);
      let i = (0, l.sq)((e) => {
          var t, n;
          return null == e ||
            null == (n = e.ratings_and_reviews) ||
            null == (t = n.statistics)
            ? void 0
            : t.question_count;
        }),
        o = (0, l.sq)((e) => {
          var t, n, l;
          return null == e ||
            null == (l = e.ratings_and_reviews) ||
            null == (n = l.statistics) ||
            null == (t = n.rating)
            ? void 0
            : t.average;
        }),
        a = (0, l.sq)((e) => {
          let t = o(e);
          return t ? Math.round(10 * t) / 10 : void 0;
        }),
        r = (0, l.sq)((e) => {
          var t, n, l;
          return null == e ||
            null == (l = e.ratings_and_reviews) ||
            null == (n = l.statistics) ||
            null == (t = n.rating)
            ? void 0
            : t.count;
        }),
        s = (0, l.sq)((e) => {
          var t, n;
          return null == e ||
            null == (n = e.ratings_and_reviews) ||
            null == (t = n.statistics)
            ? void 0
            : t.review_count;
        }),
        d = (0, l.sq)((e) => {
          var t;
          return null == e || null == (t = e.ratings_and_reviews)
            ? void 0
            : t.secondary_config;
        }),
        c = (0, l.sq)((e) => {
          var t, n, l;
          return null == e ||
            null == (l = e.ratings_and_reviews) ||
            null == (n = l.statistics) ||
            null == (t = n.rating)
            ? void 0
            : t.secondary_averages;
        }),
        u = (0, l.sq)((e) => {
          var t;
          return null == e || null == (t = e.ratings_and_reviews)
            ? void 0
            : t.most_recent;
        }),
        p = (0, l.sq)((e) => {
          var t, n;
          return null == e ||
            null == (n = e.ratings_and_reviews) ||
            null == (t = n.statistics)
            ? void 0
            : t.recommended_count;
        }),
        h = (0, l.sq)((e) => {
          var t, n;
          return null == e ||
            null == (n = e.ratings_and_reviews) ||
            null == (t = n.statistics)
            ? void 0
            : t.not_recommended_count;
        }),
        m = (0, l.sq)((e) => {
          var t, n;
          return null == e ||
            null == (n = e.ratings_and_reviews) ||
            null == (t = n.statistics)
            ? void 0
            : t.recommended_percentage;
        }),
        g = (0, l.sq)((e) => {
          var t, n, l;
          return null == e ||
            null == (l = e.ratings_and_reviews) ||
            null == (n = l.statistics) ||
            null == (t = n.rating)
            ? void 0
            : t.distribution;
        }),
        x = (0, l.sq)((e) => {
          var t;
          return null == e || null == (t = e.ratings_and_reviews)
            ? void 0
            : t.photos;
        }),
        v = (0, l.sq)((e) => {
          var t;
          return null == (t = x(e)) ? void 0 : t.length;
        }),
        y = (0, l.sq)((e) => !!v(e)),
        f = (0, l.sq)((e) => {
          var t;
          return null == e || null == (t = e.ratings_and_reviews)
            ? void 0
            : t.has_verified;
        });
      (0, l.sq)((e) => {
        var t;
        return null == e || null == (t = e.ratings_and_reviews)
          ? void 0
          : t.positive_helpful;
      }),
        (0, l.sq)((e) => {
          var t;
          return null == e || null == (t = e.ratings_and_reviews)
            ? void 0
            : t.negative_helpful;
        });
    },
    30058: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => f });
      var l = n(37876),
        i = n(14010),
        o = n(55472),
        a = n(94170),
        r = n(38810),
        s = n(15039),
        d = n(19084),
        c = n(93286),
        u = n(37753),
        p = n(51670),
        h = n(74090),
        m = n(18022),
        g = n(75227),
        x = n(54429),
        v = n(6663),
        y = n(33255);
      let f = (e) => {
        var t, n;
        let f = !(0, i.V)(),
          { screenLg: b } = (0, o.e)(),
          {
            accessibility_text: j = "",
            alternate_text_color: w,
            amplified_headline: _,
            background_color: C,
            background_color_behavior: k,
            className: I = "",
            contentType: N,
            enhancement: T,
            fine_print: S,
            headline: F,
            image_1x1: M = "",
            isAmplified: z,
            link: E,
            metadata: L,
            position: R,
            sponsored: P,
            sponsoredContainer: A,
            storyId: O,
            subhead: B,
          } = e,
          D = (0, u.Lq)(M, b ? "600" : "400"),
          q = "white" === w,
          V = q && !!C,
          U = !!(null == E ||
          null == (n = E.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          W = "simplified" === k,
          H = L && O ? (0, u.ug)(L, O) : void 0,
          G = (0, u.ES)(E).toString(),
          Y = (null == T ? void 0 : T.type) === "ribbon",
          K = (null == T ? void 0 : T.type) === "ribbon_border";
        return z
          ? (0, l.jsx)(a.F, {
              clickType: "CONTENT",
              element: G ? { type: "LINK", id: G } : void 0,
              featureType: "CONTENT_POOL",
              index: R,
              linkTag: null == E ? void 0 : E.link_tag,
              position: R,
              prz: H,
              sourceId: O,
              useTrackers: r.k,
              children: (0, l.jsxs)("div", {
                className: "h-position-relative "
                  .concat(I, " ")
                  .concat(A ? "h-padding-b-default" : ""),
                children: [
                  K ? (0, l.jsx)(v.e, { content: T, size: "sm" }) : null,
                  (0, l.jsxs)(m.x4, {
                    className: s(
                      "pad-none",
                      "show-border",
                      K ? y.ribbonBorderClippedContent : ""
                    ),
                    "data-component-id": O,
                    "data-content-type": N,
                    backgroundColor: C,
                    children: [
                      Y ? (0, l.jsx)(x.W, { content: T, size: "sm" }) : null,
                      (0, l.jsxs)(d.k, {
                        link: E,
                        linkInfo: h.Nz,
                        className: "main-link",
                        style: {
                          display: "flex",
                          position: "relative",
                          flexDirection: "column",
                          height: "100%",
                        },
                        dataPosition: R,
                        underline: "never",
                        storyId: O,
                        metadata: L,
                        children: [
                          (0, l.jsxs)(m.ku, {
                            className: "pad-1x1 h-margin-t-tight",
                            backgroundColor: C,
                            color: q && !C ? "dark" : w,
                            children: [
                              (0, l.jsx)("div", {
                                className: "h-margin-b-tight",
                                children: _
                                  ? (0, l.jsx)(m.HK, {
                                      level: 3,
                                      className:
                                        "amplified-poly h-margin-b-none",
                                      children: (0, l.jsx)(g.P, {
                                        alt_color: q && !C ? "dark" : w,
                                        content: _,
                                        specialChars: !0,
                                      }),
                                    })
                                  : (null == F ? void 0 : F.content)
                                  ? (0, l.jsx)(m.HK, {
                                      level: 3,
                                      className: "h-margin-b-none",
                                      children: (0, l.jsx)(c.Q4, {
                                        operation: F.content,
                                        container: "span",
                                        suppressRed: V,
                                      }),
                                    })
                                  : null,
                              }),
                              (0, l.jsx)(m.Le, {
                                children: (null == B ? void 0 : B.content)
                                  ? (0, l.jsx)(c.Q4, {
                                      operation: B.content,
                                      container: "span",
                                      suppressRed: V,
                                    })
                                  : (0, l.jsx)(l.Fragment, { children: " " }),
                              }),
                              (null == S ? void 0 : S.content)
                                ? (0, l.jsx)(m.aR, {
                                    className: "amplified-fine-print",
                                    children: (0, l.jsx)(c.Q4, {
                                      operation: S.content,
                                      container: "span",
                                      suppressRed: V,
                                    }),
                                  })
                                : null,
                              P
                                ? (0, l.jsx)("span", {
                                    className: "h-sr-only",
                                    children: "(Sponsored)",
                                  })
                                : null,
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "h-position-relative",
                            children: [
                              (0, l.jsx)(m.VK, {
                                src: D,
                                alt: j,
                                loading: f ? "lazy" : "eager",
                              }),
                              U ? (0, l.jsx)(p.k, {}) : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  P
                    ? (0, l.jsx)(m.gp, {
                        className: "multi-story",
                        "aria-hidden": !0,
                      })
                    : null,
                ],
              }),
            })
          : (0, l.jsx)(a.F, {
              useTrackers: r.k,
              position: R,
              linkTag: null == E ? void 0 : E.link_tag,
              sourceId: O,
              index: R,
              featureType: "CONTENT_POOL",
              clickType: "CONTENT",
              prz: H,
              children: (0, l.jsxs)("div", {
                className: "h-position-relative "
                  .concat(I, " ")
                  .concat(A ? "h-padding-b-default" : ""),
                children: [
                  K ? (0, l.jsx)(v.e, { content: T }) : null,
                  (0, l.jsxs)(m.x4, {
                    backgroundColor: W ? C : "",
                    className: s(
                      "pad-none",
                      "show-border",
                      K ? y.ribbonBorderClippedContent : ""
                    ),
                    "data-component-id": O,
                    "data-content-type": N,
                    children: [
                      Y ? (0, l.jsx)(x.W, { content: T }) : null,
                      (0, l.jsxs)(d.k, {
                        link: E,
                        linkInfo: h.Nz,
                        style: {
                          display: "flex",
                          position: "relative",
                          flexDirection: "column",
                          height: "100%",
                        },
                        dataPosition: R,
                        underline: "never",
                        storyId: O,
                        metadata: L,
                        children: [
                          (0, l.jsxs)("div", {
                            className: "h-position-relative",
                            children: [
                              (0, l.jsx)(m.bJ, {
                                src: D,
                                alt: j,
                                loading: f ? "lazy" : "eager",
                              }),
                              U ? (0, l.jsx)(p.k, {}) : null,
                            ],
                          }),
                          (0, l.jsxs)(m.ku, {
                            className: W ? "transparent" : "",
                            children: [
                              (null == F ? void 0 : F.content)
                                ? (0, l.jsx)(m.HK, {
                                    level: 3,
                                    children: (0, l.jsx)(c.Q4, {
                                      operation: F.content,
                                      container: "span",
                                    }),
                                  })
                                : null,
                              (0, l.jsx)(m.Le, {
                                className: (null == S ? void 0 : S.content)
                                  ? "h-margin-b-tight"
                                  : "",
                                children: (null == B ? void 0 : B.content)
                                  ? (0, l.jsx)(c.Q4, {
                                      operation: B.content,
                                      container: "span",
                                    })
                                  : " ",
                              }),
                              (null == S ? void 0 : S.content)
                                ? (0, l.jsx)(m.aR, {
                                    children: (0, l.jsx)(c.Q4, {
                                      operation: S.content,
                                      container: "span",
                                    }),
                                  })
                                : null,
                              P
                                ? (0, l.jsx)("span", {
                                    className: "h-sr-only",
                                    children: "(Sponsored)",
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  P
                    ? (0, l.jsx)(m.gp, {
                        className: "multi-story",
                        "aria-hidden": !0,
                      })
                    : null,
                ],
              }),
            });
      };
      f.displayName = "MultiStoryPolyComponent";
    },
    32892: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => j });
      var l = n(3576),
        i = n(62701),
        o = n(65699),
        a = n(37876),
        r = n(14232),
        s = n(58079),
        d = n(19351),
        c = n(56240),
        u = n(98601),
        p = n(91907),
        h = n(99933);
      let m = () => n.e(5638).then(n.bind(n, 31842)),
        g = (e) => {
          var t, n;
          return (0, a.jsx)(
            p.I,
            (0, i._)((0, l._)({ loader: m }, e), {
              placeholder: (0, a.jsx)(h.k5, {
                alt: null == (t = e.placeholder) ? void 0 : t.alt,
                images: null == (n = e.placeholder) ? void 0 : n.images,
                noAnimation: !0,
              }),
            })
          );
        };
      g.displayName = "ContentPoolMotionLoader";
      var x = n(15039),
        v = n(89528),
        y = n(88905),
        f = n(92067);
      let b = (e) => {
        let {
          isPlayVisible: t,
          isReplayVisible: n,
          onClick: l,
          options: i,
          showMediaButton: o = !0,
        } = e;
        return (0, a.jsx)(h.CB, {
          className: x({ "is-visible": o }),
          "data-test": "content-pool--mediaButton",
          onClick: l,
          options: i,
          children: (0, a.jsxs)(h.M0, {
            children: [
              (0, a.jsx)("span", {
                className: "h-sr-only",
                children: n ? "replay" : t ? "play" : "pause",
              }),
              n
                ? (0, a.jsx)(v.j, { color: u.Tj.palette.gray.dark, width: 18 })
                : t
                ? (0, a.jsx)(y.W, {
                    color: u.Tj.palette.gray.dark,
                    viewBox: "-2 0 24 24",
                    width: 18,
                  })
                : (0, a.jsx)(f.q, { color: u.Tj.palette.gray.dark, width: 18 }),
            ],
          }),
        });
      };
      b.displayName = "MediaButton";
      let j = (e) => {
        var {
            alt_text: t = "",
            contentPoolMotionData: n,
            children: p,
            className: h,
            image_1x1: m,
            image_4x1: x,
            image_5x2: v,
            image_16x9: y,
            imageSrc: f,
            options: j,
            shouldAutoPlay: w,
            storyId: _,
          } = e,
          C = (0, o._)(e, [
            "alt_text",
            "contentPoolMotionData",
            "children",
            "className",
            "image_1x1",
            "image_4x1",
            "image_5x2",
            "image_16x9",
            "imageSrc",
            "options",
            "shouldAutoPlay",
            "storyId",
          ]);
        let k = (0, s.G3)(),
          [I, N] = (0, r.useState)(!0),
          [T, S] = (0, r.useState)(!1),
          [F, M] = (0, r.useState)(!1),
          { trackEvent: z } = (0, d.z1)(),
          E = (0, r.useCallback)(() => {
            M(!1);
          }, []),
          L = (0, l._)({ ribbonShift: !0 }, j),
          R = (0, r.useCallback)(() => {
            z({
              event: {
                type: "click",
                name: T
                  ? "replayShortVideo"
                  : I
                  ? "playShortVideo"
                  : "pauseShortVideo",
                source: _,
              },
              guest: { eventType: "click" },
            }),
              M((e) => !e);
          }, [I, T, _, z]);
        return n
          ? k
            ? (0, r.cloneElement)(
                p,
                (0, i._)((0, l._)({}, C), {
                  images: (0, c.Xx)({
                    image_path: f,
                    image_path_md: f,
                    image_path_lg: f,
                    image_path_xl: f,
                  }),
                })
              )
            : (0, r.cloneElement)(
                p,
                (0, i._)((0, l._)({}, C), {
                  backgroundChildren: (0, a.jsx)(g, {
                    className: h,
                    onPlayReset: E,
                    onSetIsPlayButtonVisible: N,
                    onSetIsReplayButtonVisible: S,
                    onSetShouldPlayVideo: M,
                    options: j,
                    placeholder: {
                      alt: t,
                      images: ((e, t) => [
                        { media: u.fi.xl, imageUrl: e },
                        { media: u.fi.lg, imageUrl: e },
                        { media: u.fi.md, imageUrl: e },
                        { media: "0px", imageUrl: t },
                      ])(f, f),
                    },
                    shouldAutoPlay: w,
                    shouldPlayVideo: F,
                    videoSourcesMd: n,
                    videoSourcesSm: n,
                  }),
                  containerChildren: (0, a.jsx)(b, {
                    isPlayVisible: I,
                    isReplayVisible: T,
                    onClick: R,
                    options: L,
                    showMediaButton: null == j ? void 0 : j.showMediaButton,
                  }),
                })
              )
          : (0, r.cloneElement)(p, C);
      };
      j.displayName = "ContentPoolMotionWrapper";
    },
    33255: (e) => {
      e.exports = {
        ribbonBorderClippedContent:
          "external_ribbonBorderClippedContent__wVcMD",
      };
    },
    34832: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => i });
      var l = n(37876);
      let i = (e) => {
        let { backgroundChildren: t, containerChildren: n, children: i } = e;
        return (0, l.jsxs)(l.Fragment, { children: [i, t, n] });
      };
      i.displayName = "ContentPoolVideoWrapper";
    },
    35321: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { MultiStory: () => S });
      var l = n(3576),
        i = n(62701),
        o = n(14232),
        a = n(37876),
        r = n(55472),
        s = n(62444),
        d = n(2285),
        c = n(30058),
        u = n(18022);
      let p = (e) => {
        let { amplifiedLayout: t = !1, className: n = "" } = e;
        return (0, a.jsx)(u.O_, {
          className: ""
            .concat(t ? "pad-square-bottom" : "pad-square", " ")
            .concat(n),
          children: (0, a.jsxs)(u.ku, {
            children: [
              t
                ? (0, a.jsx)(u.t6, {})
                : (0, a.jsx)(u.HK, { level: 3, children: " " }),
              (0, a.jsx)("p", { children: " " }),
              (0, a.jsx)("p", { children: " " }),
            ],
          }),
        });
      };
      p.displayName = "MultiStoryPolyPlaceholder";
      var h = n(94616),
        m = n(37753),
        g = n(14010),
        x = n(94170),
        v = n(38810),
        y = n(15039),
        f = n(93286),
        b = n(19084),
        j = n(51670),
        w = n(74090),
        _ = n(54429),
        C = n(6663),
        k = n(33255);
      let I = (e) => {
        var t, n;
        let l = !(0, g.V)(),
          { screenLg: i } = (0, r.e)(),
          {
            accessibility_text: o = "",
            alternate_image_1x1: s,
            background_color: d,
            background_color_behavior: c,
            contentType: p,
            enhancement: h,
            fine_print: I,
            headline: N,
            image_1x1: T = "",
            link: S,
            metadata: F,
            position: M,
            sponsored: z,
            storyId: E,
            subhead: L,
          } = e,
          R = (0, m.Lq)(null != s ? s : T, i ? "600" : "300"),
          P = !!(null == S ||
          null == (n = S.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          A = "simplified" === c,
          O = F && E ? (0, m.ug)(F, E) : void 0,
          B = (0, m.ES)(S).toString(),
          D = (null == h ? void 0 : h.type) === "ribbon",
          q = (null == h ? void 0 : h.type) === "ribbon_border";
        return (0, a.jsx)(x.F, {
          clickType: "CONTENT",
          element: B ? { type: "LINK", id: B } : void 0,
          featureType: "CONTENT_POOL",
          index: M,
          linkTag: null == S ? void 0 : S.link_tag,
          position: M,
          prz: O,
          sourceId: E,
          useTrackers: v.k,
          children: (0, a.jsxs)("div", {
            className: "h-position-relative ".concat(
              z ? "h-padding-b-tight" : ""
            ),
            children: [
              q ? (0, a.jsx)(C.e, { content: h, size: "sm" }) : null,
              (0, a.jsxs)(u.x4, {
                backgroundColor: A ? d : "",
                className: y(
                  q ? k.ribbonBorderClippedContent : "",
                  "multi-story-mobile",
                  "show-border"
                ),
                "data-component-id": E,
                "data-content-type": p,
                children: [
                  D ? (0, a.jsx)(_.W, { content: h, size: "sm" }) : null,
                  (0, a.jsx)(b.k, {
                    link: S,
                    linkInfo: w.Nz,
                    style: { display: "block", position: "relative" },
                    dataPosition: M,
                    underline: "never",
                    storyId: E,
                    metadata: F,
                    children: (0, a.jsxs)(u.Ye, {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "h-position-relative",
                          children: [
                            (0, a.jsx)(u.P4, {
                              src: R,
                              alt: o,
                              loading: l ? "lazy" : "eager",
                            }),
                            P ? (0, a.jsx)(j.k, {}) : null,
                          ],
                        }),
                        (0, a.jsx)(u.Yn, {
                          className: A ? "" : "fill-white",
                          children: (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)(u.lu, {
                                level: 3,
                                children: (null == N ? void 0 : N.content)
                                  ? (0, a.jsx)(f.Q4, {
                                      operation: N.content,
                                      container: "span",
                                    })
                                  : null,
                              }),
                              (0, a.jsx)(u.Le, {
                                children: (null == L ? void 0 : L.content)
                                  ? (0, a.jsx)(f.Q4, {
                                      operation: L.content,
                                      container: "span",
                                    })
                                  : (0, a.jsx)(a.Fragment, { children: " " }),
                              }),
                              (null == I ? void 0 : I.content)
                                ? (0, a.jsx)(u.aR, {
                                    children: (0, a.jsx)(f.Q4, {
                                      operation: I.content,
                                      container: "span",
                                    }),
                                  })
                                : null,
                              z
                                ? (0, a.jsx)("span", {
                                    className: "h-sr-only",
                                    children: "(Sponsored)",
                                  })
                                : null,
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              z
                ? (0, a.jsx)(u.gp, {
                    className: "multi-story",
                    "aria-hidden": !0,
                  })
                : null,
            ],
          }),
        });
      };
      I.displayName = "MultiStoryMobileComponent";
      let N = () =>
        (0, a.jsx)(u.O_, {
          className: "multi-story-mobile",
          children: (0, a.jsxs)(u.Ye, {
            children: [
              (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000",
                viewBox: "0 0 24 24",
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "#B3B3B3",
                }),
              }),
              (0, a.jsx)(u.Yn, {
                className: "fill-white",
                children: (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(u.lu, { level: 3, children: " " }),
                    (0, a.jsx)("p", { children: " " }),
                    (0, a.jsx)("p", { children: " " }),
                  ],
                }),
              }),
            ],
          }),
        });
      N.displayName = "MultiStoryMobilePlaceholder";
      var T = n(82154);
      let S = (e) => {
        var t, n, g, x, v;
        let {
            componentId: y,
            content: f,
            metadata: b,
            presentation: j,
            styles: w,
          } = e,
          { screenSmMax: _ } = (0, r.e)(),
          C = (0, o.useRef)(null),
          [k, S] = (0, o.useState)(!1);
        if (
          ((0, o.useEffect)(() => {
            if (null == C ? void 0 : C.current) {
              var e;
              S(
                !!(null == C || null == (e = C.current)
                  ? void 0
                  : e.closest('[aria-modal="true"]'))
              );
            }
          }, []),
          !(null == f || null == (t = f.stories) ? void 0 : t.length))
        )
          return null;
        let F = f.stories,
          M =
            null !=
            (x =
              null == b || null == (n = b.components)
                ? void 0
                : n.map((e) => e.id))
              ? x
              : [],
          z =
            null !=
            (v =
              null == b || null == (g = b.components)
                ? void 0
                : g.map((e) => e.content_type))
              ? v
              : [],
          E = (0, m.g2)(j, F.length),
          L = null == j ? void 0 : j.includes("large"),
          R = Array.from({ length: E - F.length }),
          P = F.some((e) => !!(null == e ? void 0 : e.amplified_headline)),
          A = F.every((e) => !!(null == e ? void 0 : e.amplified_headline)),
          O = F.some((e) => !!(null == e ? void 0 : e.sponsored)),
          B = null == w ? void 0 : w.background_color,
          D = null == w ? void 0 : w.bottom_margin,
          q = null == w ? void 0 : w.position,
          V = {
            allStoriesAmplified: A,
            componentId: y,
            metadata: b,
            sponsoredContainer: O,
          };
        return 1 === E
          ? (0, a.jsx)(h.StandardComponent, {
              content: null == F ? void 0 : F[0],
              componentId: y,
              metadata: b,
              styles: w,
            })
          : (_ && !L) || k
          ? (0, a.jsx)(u.Jt, {
              ref: C,
              backgroundColor: null != B ? B : "",
              bottomMargin: D,
              className: q,
              children: (0, a.jsx)(u.bc, {
                children: (0, a.jsxs)(T.hh, {
                  children: [
                    F.map((e, t) =>
                      (0, o.createElement)(
                        I,
                        (0, i._)((0, l._)({}, e, V), {
                          contentType: z[t],
                          storyId: M[t],
                          key: "multi-".concat(t),
                          position: t,
                        })
                      )
                    ),
                    R.map((e, t) =>
                      (0, a.jsx)(N, {}, "placeholder-".concat(t))
                    ),
                  ],
                }),
              }),
            })
          : (_ && L) || 2 === E
          ? (0, a.jsx)(u.Jt, {
              ref: C,
              backgroundColor: null != B ? B : "",
              bottomMargin: D,
              className: q,
              children: (0, a.jsx)(u.bc, {
                children: (0, a.jsxs)(T.hh, {
                  className: _ ? "" : "grid-2-up",
                  children: [
                    F.map((e, t) =>
                      (null == e ? void 0 : e.amplified_headline)
                        ? (0, o.createElement)(
                            d.R,
                            (0, i._)((0, l._)({}, e, V), {
                              colorFlood:
                                "deals" ===
                                (0, m.Xd)(e.amplified_headline.lockup),
                              contentType: z[t],
                              storyId: M[t],
                              key: "multi-".concat(t),
                              position: t,
                            })
                          )
                        : (0, o.createElement)(
                            s.i,
                            (0, i._)((0, l._)({}, e, V), {
                              contentType: z[t],
                              storyId: M[t],
                              key: "multi-".concat(t),
                              position: t,
                            })
                          )
                    ),
                    R.map((e, t) =>
                      P
                        ? (0, a.jsx)(
                            d.W,
                            { showCopyBlock: !A },
                            "placeholder-".concat(t)
                          )
                        : (0, a.jsx)(s.T, {}, "placeholder-".concat(t))
                    ),
                  ],
                }),
              }),
            })
          : 3 === E
          ? (0, a.jsx)(u.Jt, {
              ref: C,
              backgroundColor: null != B ? B : "",
              bottomMargin: D,
              className: q,
              children: (0, a.jsx)(u.bc, {
                children: (0, a.jsxs)(T.hh, {
                  className: "grid-3-up",
                  children: [
                    F.map((e, t) =>
                      (0, o.createElement)(
                        c.a,
                        (0, i._)((0, l._)({}, e, V), {
                          contentType: z[t],
                          storyId: M[t],
                          key: "multi-".concat(t),
                          position: t,
                          storyCount: E,
                          isAmplified: P,
                        })
                      )
                    ),
                    R.map((e, t) =>
                      (0, a.jsx)(
                        p,
                        { amplifiedLayout: P },
                        "placeholder-".concat(t)
                      )
                    ),
                  ],
                }),
              }),
            })
          : (0, a.jsx)(u.Jt, {
              ref: C,
              backgroundColor: null != B ? B : "",
              bottomMargin: D,
              className: q,
              children: (0, a.jsx)(u.bc, {
                children: (0, a.jsxs)(T.hh, {
                  className: "grid-4-up",
                  children: [
                    F.map((e, t) =>
                      (0, o.createElement)(
                        c.a,
                        (0, i._)((0, l._)({}, e, V), {
                          contentType: z[t],
                          storyId: M[t],
                          key: "multi-".concat(t),
                          position: t,
                          storyCount: E,
                          isAmplified: P,
                        })
                      )
                    ),
                    R.map((e, t) =>
                      (0, a.jsx)(
                        p,
                        { amplifiedLayout: P },
                        "placeholder-".concat(t)
                      )
                    ),
                  ],
                }),
              }),
            });
      };
      S.displayName = "MultiStory";
    },
    37753: (e, t, n) => {
      "use strict";
      n.d(t, {
        ES: () => i,
        Lq: () => a,
        Xd: () => d,
        g2: () => r,
        j1: () => o,
        ms: () => s,
        ug: () => c,
      });
      var l = n(74090);
      let i = (e) => {
          var t, n, i, o, a, r, s, d, c, u, p, h;
          let m =
              null !=
              (d = null == e || null == (t = e.detail) ? void 0 : t.seo_url)
                ? d
                : "",
            g = null == e || null == (n = e.detail) ? void 0 : n.type,
            x =
              l.N3[null != (c = null == e ? void 0 : e.target) ? c : "default"],
            v = [],
            y =
              null != (u = null == e || null == (i = e.detail) ? void 0 : i.id)
                ? u
                : "",
            f =
              null !=
              (p =
                null == e || null == (o = e.facets)
                  ? void 0
                  : o.map((e) => e.id))
                ? p
                : [],
            b =
              null !=
              (h =
                null == e || null == (a = e.marketing_groups)
                  ? void 0
                  : a.map((e) => e.id))
                ? h
                : [],
            j =
              null == e || null == (s = e.detail) || null == (r = s.url_options)
                ? void 0
                : r.web_url,
            w = "",
            _ = "";
          switch (
            ((null == e ? void 0 : e.destination_content) === "GRID" &&
              (null == e ? void 0 : e.target) !== "OFFER_LISTING" &&
              ("BRAND" === g || 1 !== f.length) &&
              v.push("type=products"),
            (null == e ? void 0 : e.sort_by) &&
              v.push("sortBy=".concat(e.sort_by)),
            (null == e ? void 0 : e.min_price) &&
              v.push("minPrice=".concat(null == e ? void 0 : e.min_price)),
            (null == e ? void 0 : e.max_price) &&
              v.push("maxPrice=".concat(null == e ? void 0 : e.max_price)),
            null == e ? void 0 : e.target)
          ) {
            case "NO_LINK":
              return !1;
            case "CIRCLE_LANDING":
            case "OFFER_DETAILS":
            case "OFFER_LISTING":
              return (
                (null == e ? void 0 : e.destination_content) === "GRID" &&
                  v.push("src=deals"),
                (_ = "".concat(v.length ? "?" : "").concat(v.join("&"))),
                "".concat(x).concat(y).concat(_)
              );
            case "PARTNER_CODE":
              return "".concat(x).concat(y);
            case "CIRCLE_GAME":
              return (
                y && v.push("game=".concat(y)),
                (_ = "".concat(v.length ? "?" : "").concat(v.join("&"))),
                "".concat(x).concat(_)
              );
            case "GROUPED_OFFER":
              return (
                v.push(
                  "marketing_id=".concat(y),
                  ...(f.length ? ["facetedValue=".concat(f.join("Z"))] : [])
                ),
                (_ = "".concat(v.length ? "?" : "").concat(v.join("&"))),
                "".concat(x).concat(y).concat(_)
              );
            case "MULTI_TCIN":
              return "#";
            case "PROMO":
              return (
                v.push(
                  ...(f.length ? ["facetedValue=".concat(f.join("Z"))] : [])
                ),
                (_ = "".concat(v.length ? "?" : "").concat(v.join("&"))),
                "".concat(x).concat(y).concat(_)
              );
            case "TARGET_FINDS":
              return "".concat(j);
            case "TAXONOMY":
              return (
                v.push(
                  ...(b.length
                    ? [
                        "marketing_group_id=".concat(
                          null == b ? void 0 : b.join("Z")
                        ),
                      ]
                    : [])
                ),
                (_ = "".concat(v.length ? "?" : "").concat(v.join("&"))),
                (w = "".concat(f.length ? "Z" : "").concat(f.join("Z"))),
                "".concat(x).concat(m).concat(w).concat(_)
              );
            case "CUSTOM_LINK":
              return j ? "".concat(j) : "https://www.target.com";
            default:
              return "".concat(x).concat(m);
          }
        },
        o = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = t ? "" : " small-lockup";
          switch (e) {
            case "giftcard":
            case "giftcard-versioned":
              return "giftcard-lockup" + n;
            case "unit-per-dollar":
            case "multiple-units-versioned":
              return "unit-per-lockup" + n;
            case "whole-number-even-line-size":
            case "equal-weight-versioned":
              return "whole-number-lockup" + n;
            default:
              return "amplified" + n;
          }
        },
        a = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "webp",
            l =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "80";
          return ""
            .concat(e, "?fmt=")
            .concat(n, "&qlt=")
            .concat(l)
            .concat(t ? "&wid=" : "")
            .concat(null != t ? t : "");
        },
        r = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = Number.parseInt(null == e ? void 0 : e.slice(-1), 10);
          return Number.isNaN(n) ? t : n;
        },
        s = function (e) {
          var t, n, l, i, o;
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return {
            background_color: a,
            link_tag: r,
            container: {
              callToAction:
                null !=
                (i = null == (t = e.context) ? void 0 : t.call_to_action)
                  ? i
                  : "",
              keyValuePairs: {
                context:
                  null !=
                  (o =
                    null == (l = e.context) || null == (n = l.prz)
                      ? void 0
                      : n.config)
                    ? o
                    : "",
              },
              type: e.context.type,
            },
          };
        },
        d = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          if (!e) return !1;
          switch (e) {
            case "single-line":
            case "double-line":
            case "value-price-emphasis-versioned":
            case "value-suggested-multiple-versioned":
              return "values";
            default:
              return "deals";
          }
        },
        c = (e, t) => {
          var n;
          let l =
            null == e || null == (n = e.components)
              ? void 0
              : n.find((e) => e.id === t);
          if (
            (null == l ? void 0 : l.prz_placement_id) &&
            (null == l ? void 0 : l.prz_strategy_id) &&
            (null == l ? void 0 : l.prz_strategy_name)
          )
            return {
              placementId: l.prz_placement_id,
              strategyDescription: l.prz_strategy_description,
              strategyId: l.prz_strategy_id,
              strategyName: l.prz_strategy_name,
            };
        };
    },
    41034: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => r });
      var l = n(37876),
        i = n(27333),
        o = n(75570),
        a = n(1800);
      let r = (e) => {
        var t, n;
        let { shoppableDrawerData: r } = e,
          s =
            null !=
            (n =
              null == r || null == (t = r.tcins)
                ? void 0
                : t.replace(/\s+/g, ""))
              ? n
              : "",
          [d] = (0, i.t)({ tcins: s, pricing_store_id: "3991" }),
          c = d((e) => (null == e ? void 0 : e.product_summaries));
        return (0, l.jsx)("div", {
          children:
            c &&
            (0, l.jsx)("ul", {
              "data-test": "shoppableDrawer-seo-list",
              children:
                null == c
                  ? void 0
                  : c.map((e) => {
                      var t, n, i, r, s, d;
                      return (0, l.jsx)(
                        "li",
                        {
                          children: (0, l.jsx)(o.N, {
                            "data-test": "shoppableDrawer-seo-link",
                            href:
                              null == (n = e.item) || null == (t = n.enrichment)
                                ? void 0
                                : t.buy_url,
                            children: (0, a.D4)(
                              null == (r = e.item) ||
                                null == (i = r.product_description)
                                ? void 0
                                : i.title
                            ),
                          }),
                        },
                        ""
                          .concat(e.tcin, " - ")
                          .concat(
                            null == (d = e.item) ||
                              null == (s = d.product_description)
                              ? void 0
                              : s.title
                          )
                      );
                    }),
            }),
        });
      };
      r.displayName = "ShoppableDrawerSeoLinks";
    },
    42341: (e, t, n) => {
      "use strict";
      n.d(t, {
        RR: () => c,
        c5: () => p,
        k1: () => g,
        tm: () => h,
        vz: () => m,
        zu: () => u,
      });
      var l = n(77232),
        i = n(42773),
        o = n(98601);
      let { gray: a, white: r } = o.Tj.palette,
        s = o.gx.size,
        d = o.xe.generic,
        c = l.I4.div.withConfig({ componentId: "sc-5852d530-0" })(
          [
            "position:relative;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;padding-top:40%;&.show-border{box-shadow:0 0 0 1px rgb(0 0 0 / 20%);background-clip:padding-box;}&.hero-bg{border-radius:12px 12px 0 0;}&.show-border.hero-bg{box-shadow:none;border:1px solid rgb(0 0 0 / 20%);border-bottom:0 none;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? r
              : a.darkest;
          }
        ),
        u = l.I4.div.withConfig({ componentId: "sc-5852d530-1" })(
          [
            "position:relative;display:flex;flex-direction:column;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;height:100%;&.show-border{box-shadow:0 0 0 1px ",
            ";}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? r
              : a.darkest;
          },
          a.light
        ),
        p = l.I4.div.withConfig({ componentId: "sc-5852d530-2" })(
          [
            "color:inherit;display:flex;flex-direction:column;padding:",
            ";width:100%;flex-grow:1;&.on-white{background-color:",
            ";color:",
            ";}@media (max-width:",
            "){padding:",
            ";}",
          ],
          d.x4,
          r,
          a.darkest,
          o.fi.xsMax,
          d.x3
        ),
        h = (0, l.I4)(i.D).withConfig({ componentId: "sc-5852d530-3" })(
          [
            "font-size:29px;line-height:32px;color:inherit;margin-bottom:",
            ";span.legal-symbol{font-size:85%;vertical-align:text-top;}",
          ],
          d.x2
        ),
        m = l.I4.p.withConfig({ componentId: "sc-5852d530-4" })(
          [
            "font-size:18px;line-height:21px;margin-bottom:",
            ";@media (max-width:",
            "){font-size:",
            ";}",
          ],
          d.x1,
          o.fi.xsMax,
          s.text.medium
        ),
        g = l.I4.img.withConfig({ componentId: "sc-5852d530-5" })([
          "display:block;position:relative;width:100%;height:auto;min-height:10px;min-width:10px;border-radius:0;&.amplified-lockup{border-radius:0 12px 0 0;}",
        ]);
    },
    43912: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { CarouselComponent: () => _ });
      var l = n(3576),
        i = n(62701),
        o = n(14232),
        a = n(37876),
        r = n(40788),
        s = n(52319),
        d = n(55472),
        c = n(19351),
        u = n(35321),
        p = n(62444),
        h = n(2285),
        m = n(30058),
        g = n(72588),
        x = n(74294),
        v = n(37753),
        y = n(18022),
        f = n(77232);
      let b = n(98601).xe.generic,
        j = f.I4.div.withConfig({ componentId: "sc-48a4341-0" })(
          [
            "margin:0 auto ",
            ";background-color:",
            ";padding:",
            " 0;&.top{padding-bottom:",
            ";margin-bottom:0;}&.middle{padding:",
            " 0;margin-bottom:0;}&.bottom{padding-top:",
            ";}",
          ],
          (e) => {
            var t;
            return null != (t = e.bottomMargin) ? t : b.x4;
          },
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : "unset";
          },
          (e) => (e.backgroundColor ? b.x4 : "0"),
          b.x2,
          b.x2,
          b.x2
        ),
        w = f.I4.div.withConfig({ componentId: "sc-48a4341-1" })(
          [
            "display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:auto;gap:",
            ";&.squeeze{gap:",
            ";}&.grid-5-up{grid-template-areas:'story1 story1 story1 story1 story1 story1 story2 story2 story2 story2 story2 story2' 'story3 story3 story3 story3 story4 story4 story4 story4 story5 story5 story5 story5';}&.grid-6-up{grid-template-areas:'story1 story1 story1 story1 story2 story2 story2 story2 story3 story3 story3 story3' 'story4 story4 story4 story4 story5 story5 story5 story5 story6 story6 story6 story6';}&.grid-7-up{grid-template-areas:'story1 story1 story1 story1 story2 story2 story2 story2 story3 story3 story3 story3' 'story4 story4 story4 story5 story5 story5 story6 story6 story6 story7 story7 story7';}&.grid-8-up{grid-template-areas:'story1 story1 story1 story2 story2 story2 story3 story3 story3 story4 story4 story4' 'story5 story5 story5 story6 story6 story6 story7 story7 story7 story8 story8 story8';}.story-0{grid-area:story1;}.story-1{grid-area:story2;}.story-2{grid-area:story3;}.story-3{grid-area:story4;}.story-4{grid-area:story5;}.story-5{grid-area:story6;}.story-6{grid-area:story7;}.story-7{grid-area:story8;}",
          ],
          b.x5,
          b.x4
        ),
        _ = (e) => {
          var t, n, f, b, _;
          let {
              componentId: C,
              content: k,
              metadata: I,
              order: N,
              presentation: T = "",
              styles: S,
            } = e,
            { screenSmMax: F, screenLgMax: M } = (0, d.e)(),
            { trackEvent: z } = (0, c.z1)(),
            E = (0, o.useRef)(!1),
            L = (0, o.useRef)(null),
            [R, P] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            if (null == L ? void 0 : L.current) {
              var e;
              P(
                !!(null == L || null == (e = L.current)
                  ? void 0
                  : e.closest('[aria-modal="true"]'))
              );
            }
          }, []);
          let A = (0, o.useCallback)(() => {
            E.current ||
              (z({
                event: {
                  name: "carouselScroll",
                  source: "".concat(N, ": ").concat(T),
                  type: "click",
                },
                guest: { eventType: "click" },
              }),
              (E.current = !0));
          }, [N, T, z]);
          if (!(null == k || null == (t = k.stories) ? void 0 : t.length))
            return null;
          let O = k.stories,
            B =
              null !=
              (b =
                null == I || null == (n = I.components)
                  ? void 0
                  : n.map((e) => e.id))
                ? b
                : [],
            D =
              null !=
              (_ =
                null == I || null == (f = I.components)
                  ? void 0
                  : f.map((e) => e.content_type))
                ? _
                : [],
            q = T.includes("large"),
            V = (0, v.g2)(T, O.length),
            U = Array.from({ length: V - O.length }),
            W = O.some((e) => !!(null == e ? void 0 : e.amplified_headline)),
            H = O.some((e) => !!(null == e ? void 0 : e.sponsored)),
            G = O.some((e) => {
              var t, n;
              return [
                "single-line",
                "double-line",
                "value-price-emphasis-versioned",
                "value-suggested-multiple-versioned",
              ].includes(
                null !=
                  (n =
                    null == e || null == (t = e.amplified_headline)
                      ? void 0
                      : t.lockup)
                  ? n
                  : ""
              );
            }),
            Y = null == S ? void 0 : S.background_color,
            K = null == S ? void 0 : S.bottom_margin,
            Q = null == S ? void 0 : S.position;
          if (F && V < 3)
            return (0, a.jsx)("div", {
              ref: L,
              children: (0, a.jsx)(u.MultiStory, {
                componentId: C,
                content: k,
                metadata: I,
                presentation: V
                  ? "multi-story-blocks-".concat(q ? "large-" : "").concat(V)
                  : "multi-story-blocks".concat(q ? "-large" : ""),
                styles: S,
              }),
            });
          if (F || R)
            return (0, a.jsx)(j, {
              backgroundColor: null != Y ? Y : "",
              bottomMargin: K,
              className: Q,
              ref: L,
              children: (0, a.jsxs)(r.F, {
                buttonBehavior: "tabAppear",
                itemGap: "12px",
                onScroll: A,
                shouldScrollEnd: !0,
                children: [
                  O.map((e, t, n) =>
                    (0, a.jsx)(
                      s.A,
                      {
                        iterator: t,
                        className: ""
                          .concat(0 === t ? "h-margin-l-tight" : "", " ")
                          .concat(
                            t === n.length - 1 ? "h-margin-r-tight" : "",
                            " h-margin-b-tight"
                          ),
                        children: (0, a.jsx)(
                          g.O,
                          (0, i._)((0, l._)({}, e), {
                            contentType: D[t],
                            storyId: B[t],
                            largeFormat: q,
                            isHero: 3 === V && !q,
                            imgBottom: G,
                            position: t,
                            componentId: C,
                            sponsoredContainer: H,
                            metadata: I,
                          })
                        ),
                      },
                      "pool-carousel-".concat(t)
                    )
                  ),
                  U.map((e, t) =>
                    (0, a.jsx)(
                      s.A,
                      {
                        iterator: t + O.length,
                        children: (0, a.jsx)(x.O, {
                          isAmplified: W,
                          largeFormat: q,
                          isHero: 3 === V && !q,
                          valuesLayout: G,
                        }),
                      },
                      "placeholder-".concat(t)
                    )
                  ),
                ],
              }),
            });
          if (V < 5)
            return (0, a.jsx)("div", {
              ref: L,
              children: (0, a.jsx)(u.MultiStory, {
                componentId: C,
                content: k,
                metadata: I,
                presentation: V
                  ? "multi-story-blocks-".concat(V)
                  : "multi-story-blocks",
                styles: S,
              }),
            });
          if (5 === V) {
            let e = O.slice(0, 2),
              t = O.slice(2),
              n = e.every((e) => !!e.amplified_headline);
            return (0, a.jsx)(y.Jt, {
              backgroundColor: null != Y ? Y : "",
              bottomMargin: K,
              className: Q,
              ref: L,
              children: (0, a.jsx)(y.bc, {
                children: (0, a.jsxs)(w, {
                  className: "grid-5-up".concat(M ? " squeeze" : ""),
                  children: [
                    e.map((e, t) => {
                      var a;
                      return n
                        ? (0, o.createElement)(
                            h.R,
                            (0, i._)((0, l._)({}, e), {
                              allStoriesAmplified: !0,
                              className: "story-".concat(t),
                              colorFlood:
                                "deals" ===
                                (0, v.Xd)(
                                  null == (a = e.amplified_headline)
                                    ? void 0
                                    : a.lockup
                                ),
                              key: "pool-carousel-".concat(t),
                              contentType: D[t],
                              storyId: B[t],
                              position: t,
                              sponsoredContainer: H,
                              componentId: C,
                              metadata: I,
                            })
                          )
                        : (0, o.createElement)(
                            p.i,
                            (0, i._)((0, l._)({}, e), {
                              className: "story-".concat(t),
                              key: "pool-carousel-".concat(t),
                              contentType: D[t],
                              storyId: B[t],
                              position: t,
                              sponsoredContainer: H,
                              componentId: C,
                              metadata: I,
                            })
                          );
                    }),
                    t.map((e, t) =>
                      (0, o.createElement)(
                        m.a,
                        (0, i._)((0, l._)({}, e), {
                          className: "story-".concat(t + 2),
                          key: "pool-carousel-".concat(t + 2),
                          contentType: D[t + 2],
                          storyId: B[t + 2],
                          position: t + 2,
                          isAmplified: W,
                          sponsoredContainer: H,
                          componentId: C,
                          metadata: I,
                        })
                      )
                    ),
                  ],
                }),
              }),
            });
          }
          return (0, a.jsx)(y.Jt, {
            backgroundColor: null != Y ? Y : "",
            bottomMargin: K,
            className: Q,
            ref: L,
            children: (0, a.jsx)(y.bc, {
              children: (0, a.jsx)(w, {
                className: "grid-".concat(V, "-up").concat(M ? " squeeze" : ""),
                children: O.map((e, t) =>
                  (0, o.createElement)(
                    m.a,
                    (0, i._)((0, l._)({}, e), {
                      className: "story-".concat(t),
                      key: "pool-carousel-".concat(t),
                      contentType: D[t],
                      storyId: B[t],
                      position: t,
                      isAmplified: W,
                      sponsoredContainer: H,
                      componentId: C,
                      metadata: I,
                    })
                  )
                ),
              }),
            }),
          });
        };
      _.displayName = "CarouselComponent";
    },
    44670: (e) => {
      e.exports = {
        ndsRadio: "styles_ndsRadio__qFHm_",
        microcopy: "styles_microcopy__BjV5h",
        microcopyRight: "styles_microcopyRight__Sol8z",
        errorMessage: "styles_errorMessage__LgjBQ",
        radioGroup: "styles_radioGroup__MR2Nq",
        fieldSet: "styles_fieldSet__b_eeD",
        radio: "styles_radio__84kWL",
        horizontalLayout: "styles_horizontalLayout__4EcAA",
        label: "styles_label__zIndC",
      };
    },
    46044: (e) => {
      e.exports = {
        ribbon: "styles_ribbon__TMU9W",
        ribbonBorder: "styles_ribbonBorder__5_dTE",
      };
    },
    50725: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => g });
      var l = n(37876),
        i = n(14232),
        o = n(98601),
        a = n(86506);
      let r = {
        [a.rF.toString()]: {
          colorPrimary: o.Tj.registry.background.baby.primary,
          colorSecondary: o.Tj.registry.background.baby.secondary,
        },
        [a.$O.toString()]: {
          colorPrimary: o.Tj.registry.background.wedding.primary,
          colorSecondary: o.Tj.registry.background.wedding.secondary,
        },
        [a.$g.toString()]: {
          colorPrimary: "#a4dff0",
          colorSecondary: "#e0f2f6",
        },
        [a.Q4.toString()]: {
          colorPrimary: o.Tj.registry.background.custom.primary,
          colorSecondary: o.Tj.registry.background.custom.secondary,
        },
        [a.VJ.toString()]: {
          colorPrimary: o.Tj.registry.background.custom.primary,
          colorSecondary: "#cce5fb",
        },
      };
      var s = n(77232),
        d = n(41622);
      let c = s.I4.img.withConfig({ componentId: "sc-e8102cc3-0" })([
          "border-radius:50%;height:64px;object-fit:cover;width:64px;",
        ]),
        u = s.I4.div.withConfig({ componentId: "sc-e8102cc3-1" })(
          [
            "background-color:",
            ";align-items:center;border-radius:50%;display:flex;height:64px;justify-content:center;width:64px;",
          ],
          (e) => e.theme.colorSecondary
        ),
        p = (0, s.I4)(d.O).withConfig({ componentId: "sc-e8102cc3-2" })([
          "border-radius:50%;",
        ]),
        h = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            n = t.split(" "),
            l = [];
          if (e) {
            var i, o;
            let t = null != (i = n[0]) ? i : "",
              a = null != (o = e.split(" ")[0]) ? o : "";
            if (t && a)
              return (
                l.push(t.charAt(0).toUpperCase(), a.charAt(0).toUpperCase()),
                l.join("+")
              );
          }
          for (let e of n) l.push(e.charAt(0).toUpperCase());
          return l.join("");
        },
        m = (0, l.jsx)("img", {
          alt: "gift icon",
          height: o.xe.generic.x6,
          src: "".concat(
            "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Eregistry%20button%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22registry-button%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5.87946918%2C4.13377015%20C5.6175445%2C3.98859104%205.3544401%2C3.80378016%205.10524989%2C3.5686422%20C4.35049675%2C2.85531566%204.20858339%2C1.87265836%204.78329719%2C1.32999686%20C5.01134702%2C1.11399891%205.32129709%2C1%205.67925765%2C1%20C6.18901609%2C1%206.72630995%2C1.23133113%207.1534621%2C1.63466062%20C7.56392543%2C2.02200258%207.82900631%2C2.45523428%208.0000706%2C2.85945628%20C8.1711349%2C2.45523428%208.43621578%2C2.02200258%208.84667911%2C1.63466062%20C9.27383126%2C1.23133113%209.81112512%2C1%2010.3208836%2C1%20C10.6788441%2C1%2010.9887942%2C1.11399891%2011.216844%2C1.32999686%20C11.7915578%2C1.87265836%2011.6496445%2C2.85531566%2010.8948913%2C3.5686422%20C10.6457011%2C3.80378016%2010.3825967%2C3.98859104%2010.120672%2C4.13377015%20L14.0645015%2C4.13377015%20C14.5799082%2C4.13377015%2015%2C4.52976638%2015%2C5.01709508%20L15%2C7.0344092%20C15%2C7.4232749%2014.7317816%2C7.75425269%2014.3610369%2C7.87157158%20L14.3610369%2C14.1173417%20C14.3610369%2C14.6040038%2013.9416511%2C15%2013.4255384%2C15%20L2.57446165%2C15%20C2.05905492%2C15%201.63896313%2C14.6040038%201.63896313%2C14.1173417%20L1.63896313%2C7.87157158%20C1.26821838%2C7.75425269%201%2C7.4232749%201%2C7.0344092%20L1%2C5.01709508%20C1%2C4.52976638%201.42009178%2C4.13377015%201.93549851%2C4.13377015%20L5.87946918%2C4.13377015%20Z%20M8.721287%2C14.3333397%20L8.721287%2C7.91706746%20L7.2788542%2C7.91706746%20L7.2788542%2C14.3333397%20L8.721287%2C14.3333397%20Z%20M9.42732362%2C14.3333397%20L13.4255384%2C14.3333397%20C13.5519189%2C14.3333397%2013.6550003%2C14.2360073%2013.6550003%2C14.1173417%20L13.6550003%2C7.91706746%20L9.42732362%2C7.91706746%20L9.42732362%2C14.3333397%20Z%20M8.721287%2C7.25040714%20L8.721287%2C4.80043047%20L7.2788542%2C4.80043047%20L7.2788542%2C7.25040714%20L8.721287%2C7.25040714%20Z%20M9.42732362%2C7.25040714%20L13.4255384%2C7.25040714%20C13.7102017%2C7.25040714%2013.9654397%2C7.20152064%2014.1371141%2C7.23933064%20C14.2280968%2C7.21070474%2014.2939634%2C7.12979864%2014.2939634%2C7.0344092%20L14.2939634%2C5.01709508%20C14.2939634%2C4.89776288%2014.190882%2C4.80043047%2014.0645015%2C4.80043047%20L9.42732362%2C4.80043047%20L9.42732362%2C7.25040714%20Z%20M6.57281759%2C14.3333397%20L6.57281759%2C7.91706746%20L2.34499975%2C7.91706746%20L2.34499975%2C14.1173417%20C2.34499975%2C14.2360073%202.44808109%2C14.3333397%202.57446165%2C14.3333397%20L6.57281759%2C14.3333397%20Z%20M6.57281759%2C7.25040714%20L6.57281759%2C4.80043047%20L1.93549851%2C4.80043047%20C1.81123607%2C4.80043047%201.70603661%2C4.89976286%201.70603661%2C5.01709508%20L1.70603661%2C7.0344092%20C1.70603661%2C7.12774976%201.77337598%2C7.20999517%201.86394133%2C7.23915086%20C2.03572183%2C7.20167605%202.29063993%2C7.25040714%202.57446165%2C7.25040714%20L6.57281759%2C7.25040714%20Z%20M10.3208836%2C1.66666032%20C10.001755%2C1.66666032%209.63673408%2C1.83132542%209.34584699%2C2.10598947%20C8.68217258%2C2.73265017%208.48236421%2C3.52864258%208.4223511%2C3.97463834%20C8.88409905%2C3.92397215%209.71298603%2C3.74130723%2010.3957234%2C3.09731336%20C10.8546472%2C2.66331749%2011.0022089%2C2.06998981%2010.7176761%2C1.8013257%20C10.599768%2C1.68999343%2010.4366736%2C1.66666032%2010.3208836%2C1.66666032%20Z%20M5.67925765%2C1.66666032%20C5.56346765%2C1.66666032%205.40037319%2C1.68999343%205.28246508%2C1.8013257%20C4.99793232%2C2.06998981%205.14549397%2C2.66331749%205.60441777%2C3.09731336%20C6.28715518%2C3.74130723%207.11604216%2C3.92397215%207.57779011%2C3.97463834%20C7.51777699%2C3.52930924%207.31796863%2C2.73265017%206.65429422%2C2.10598947%20C6.36340713%2C1.83132542%205.9983862%2C1.66666032%205.67925765%2C1.66666032%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%23666666%22%3E%3C%2Fpath%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
          ),
          width: o.xe.generic.x6,
        }),
        g = (e) => {
          let t,
            {
              coRegistrant: n = "",
              eventType: o = "",
              isLoading: s = !1,
              primaryRegistrant: d = "",
              registrantPhoto: g = "",
            } = e,
            x = d.split(" "),
            [v, y] = (0, i.useState)(!1),
            f = (0, i.useRef)(null),
            b = (0, i.useCallback)(() => {
              var e;
              null == (e = f.current) || e.removeEventListener("error", b),
                y(!0);
            }, []);
          (0, i.useEffect)(() => {
            var e;
            null == (e = f.current) || e.addEventListener("error", b);
          }, [b]);
          let j = ((e) => (r[e] ? r[e] : r[a.Q4.toString()]))(o);
          if (s) t = (0, l.jsx)(p, { height: "64px", width: "64px" });
          else if (!v && g)
            t = (0, l.jsx)(c, {
              alt: "",
              "aria-hidden": "true",
              "data-test": "photoIcon-".concat(x[0], "-").concat(x[1]),
              ref: f,
              src: g,
            });
          else {
            let e = "genericIcon-".concat(x[0], "-").concat(x[1]);
            (!g || v) &&
              (o === a.rF || o === a.$O) &&
              (e = ""
                .concat(o.toLowerCase(), "Icon-")
                .concat(x[0], "-")
                .concat(x[1])),
              (t = (0, l.jsx)(u, {
                "aria-hidden": "true",
                "data-test": e,
                theme: j,
                children: h(n, d) || m,
              }));
          }
          return t;
        };
      g.displayName = "RegistryProfilePic";
    },
    50848: (e, t, n) => {
      "use strict";
      n.d(t, { X1: () => a, pk: () => o, sv: () => s, zg: () => r });
      var l = n(77232),
        i = n(98601);
      let o = l.I4.div
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
          i.xe.generic.x1,
          i.Tj.palette.white,
          i.Tj.palette.gray.darkest,
          i.Tj.palette.white,
          i.Tj.palette.white,
          i.Tj.palette.gray.darkest
        ),
        a = (0, l.I4)(o).withConfig({ componentId: "sc-8718109-1" })(
          [
            "display:flex;button:active &,a:active &{svg{path{&.fill1{fill:",
            ";}&.fill2{fill:",
            ";}}}}",
          ],
          i.Tj.palette.gray.darkest,
          i.Tj.palette.white
        ),
        r = l.I4.div.withConfig({ componentId: "sc-8718109-2" })([
          "margin:1px;",
        ]),
        s = l.I4.div.withConfig({ componentId: "sc-8718109-3" })(
          [
            "display:flex;z-index:1;position:absolute;align-items:center;justify-content:center;padding:6px;left:auto;right:",
            ";bottom:",
            ";transform:translate(",
            ");",
          ],
          (e) => ((null == e ? void 0 : e.isMotionVideo) ? "44px" : "0"),
          (e) =>
            (null == e ? void 0 : e.isHero) ? "".concat(i.xe.generic.x11) : "0",
          (e) => ((null == e ? void 0 : e.ribbonShift) ? "-6px, -6px" : "0, 0")
        );
    },
    51670: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => c });
      var l = n(3576),
        i = n(62701),
        o = n(65699),
        a = n(37876),
        r = n(98601),
        s = n(50848);
      let d = (e) => {
        var { height: t = "18", viewBox: n = "0 0 33 33", width: d = "18" } = e,
          c = (0, o._)(e, ["height", "viewBox", "width"]);
        return (0, a.jsx)(s.zg, {
          children: (0, a.jsxs)(
            "svg",
            (0, i._)(
              (0, l._)(
                {
                  height: t,
                  preserveAspectRatio: "xMaxYMax",
                  viewBox: n,
                  width: d,
                  xmlns: "http://www.w3.org/2000/svg",
                },
                c
              ),
              {
                children: [
                  (0, a.jsx)("path", {
                    className: "fill1",
                    d: "M28.562 31.8h-24l2-23h20l2 23z",
                    fill: r.Tj.palette.white,
                  }),
                  (0, a.jsx)("path", {
                    className: "fill1",
                    d: "M20.762 15.2v-10a4.012 4.012 0 00-4-4h-.4a4.012 4.012 0 00-4 4v10.1",
                    fill: r.Tj.palette.white,
                  }),
                  (0, a.jsx)("path", {
                    className: "fill1",
                    d: "M26.87 9.013a.967.967 0 00-.958-.878h-4.616v-2.5A4.813 4.813 0 0016.488.827h-.384a4.813 4.813 0 00-4.807 4.808v2.5H6.68a.967.967 0 00-.957.878L3.8 31.127a.961.961 0 00.957 1.046h23.077a.961.961 0 00.958-1.045z",
                    fill: r.Tj.palette.white,
                  }),
                  (0, a.jsx)("path", {
                    className: "fill1",
                    d: "M27.05 9a.751.751 0 00-.7-.7h-5V5.4a4.827 4.827 0 00-4.7-4.7h-.4a4.827 4.827 0 00-4.7 4.7v2.8h-4.9a.684.684 0 00-.7.7l-2 22.5a.773.773 0 00.7.8h23.6a.713.713 0 00.7-.8v-.1z",
                    fill: r.Tj.palette.white,
                  }),
                  (0, a.jsx)("path", {
                    className: "fill2",
                    d: "M27.293 8.714a1.006 1.006 0 00-.996-.914h-4.8V5.2a5.006 5.006 0 00-5-5h-.4a5.006 5.006 0 00-5 5v2.6h-4.8a1.006 1.006 0 00-.996.914l-2 22.998a1 1 0 00.996 1.088h24a1 1 0 00.996-1.087zM12.097 16.3a1.001 1.001 0 001-1V9.8h6.4v5.4a1 1 0 102 0V9.8h3.883l1.826 21H5.388l1.826-21h3.883v5.5a1.001 1.001 0 001 1zm1-8.5V5.2a3.003 3.003 0 013-3h.4a3.003 3.003 0 013 3v2.6z",
                    fill: r.Tj.palette.gray.dark,
                  }),
                ],
              }
            )
          ),
        });
      };
      d.displayName = "BagIcon";
      let c = (e) => {
        var {
            height: t,
            isHero: n,
            onClick: r,
            viewBox: c,
            width: u,
            isMotionVideo: p,
            ribbonShift: h = !0,
          } = e,
          m = (0, o._)(e, [
            "height",
            "isHero",
            "onClick",
            "viewBox",
            "width",
            "isMotionVideo",
            "ribbonShift",
          ]);
        return (0, a.jsxs)(
          s.sv,
          (0, i._)(
            (0, l._)({ isHero: n, isMotionVideo: p, ribbonShift: h }, m),
            {
              children: [
                (0, a.jsx)("span", {
                  className: "h-sr-only",
                  children: "shop",
                }),
                (0, a.jsx)(s.X1, {
                  children: (0, a.jsx)(d, {
                    height: t,
                    onClick: r,
                    viewBox: c,
                    width: u,
                  }),
                }),
              ],
            }
          )
        );
      };
      c.displayName = "BagActionIcon";
    },
    53258: (e) => {
      e.exports = { circleLogoContainer: "styles_circleLogoContainer__dUMw4" };
    },
    54429: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => r });
      var l = n(37876),
        i = n(95408),
        o = n(98601),
        a = n(46044);
      let r = (e) => {
        let { content: t, size: n = "lg" } = e,
          {
            background_color: r = o.Tj.background.darkest,
            text: s,
            text_color: d = o.Tj.text.onDark.primary,
          } = t;
        return (0, i.Mv)("GLOBAL_NEWNESS_RIBBON_ENABLED")
          ? (0, l.jsx)("div", {
              className: a.ribbon,
              style: {
                "--ribbon-background-color": r,
                "--ribbon-background-image": "none",
                "--ribbon-font-color": d,
                "--ribbon-font-size": "sm" === n ? "13px" : "15px",
                "--ribbon-padding": "sm" === n ? "5px 16px" : "10px 16px",
              },
              children: s,
            })
          : null;
      };
      r.displayName = "NewnessRibbon";
    },
    54693: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => y });
      var l = n(37876),
        i = n(15039),
        o = n(14232),
        a = n(91342);
      let r = { xs: 12, sm: 16, md: 24, lg: 32 },
        s = { xs: 4, sm: 4, md: 4, lg: 5 },
        d = { xs: 62, sm: 60, md: 60, lg: 60 },
        c = (e) => {
          let { pos: t, isFilled: n, size: o } = e,
            a = t
              ? "translate(".concat(t * d[null != o ? o : "sm"], ", 0)")
              : void 0;
          return (0, l.jsxs)("g", {
            children: [
              (0, l.jsx)("polygon", {
                className: i("starFill", !n && "emptyStar"),
                fill: n ? "#ffd700" : "#fff",
                points:
                  "18.3804527 17.5538712 3.57341884 17.5538227 15.5524968 26.0839651 10.9490362 39.9740092 22.9998469 31.3908403 35.0505989 39.9718199 30.4479632 26.0860159 42.4267599 17.5548252 27.6195159 17.5548252 22.9999796 3.61638342",
                transform: a,
              }),
              (0, l.jsx)("path", {
                className: i("starStroke", !n && "emptyStar"),
                d: "M23,0.125 C23.548595,0.125 24.0427295,0.43633439 24.2838822,0.916322114 L24.3620682,1.10394446 L29.1238205,15.4714919 L44.4834654,15.4714919 C45.1040547,15.4669374 45.6559866,15.865131 45.847289,16.4554281 C46.0385914,17.0457252 45.8251153,17.6918966 45.3197896,18.0521171 L32.9094637,26.8906392 L37.659289,41.2205029 C37.8492978,41.8088537 37.6399199,42.4526832 37.1401666,42.8167858 C36.6404132,43.1808884 35.963305,43.1829213 35.4613737,42.8218261 L23,33.9484823 L10.5391034,42.8237342 C10.0368835,43.1855662 9.35893267,43.1835738 8.85884877,42.8187963 C8.35876487,42.4540187 8.14989861,41.8091377 8.34118809,41.2205029 L13.0910134,26.8887312 L0.680210361,18.0511631 C0.174884727,17.6909426 -0.0385914063,17.0447712 0.152710977,16.4544741 C0.34401336,15.864177 0.89594535,15.4659834 1.51653456,15.4705379 L16.8761795,15.4705379 L21.6379318,1.10394446 C21.8345878,0.519032587 22.3828306,0.125 23,0.125 Z M22.9999796,3.61638342 L18.3804527,17.5538712 L3.57341884,17.5538227 L15.5524968,26.0839651 L10.9490362,39.9740092 L22.9998469,31.3908403 L35.0505989,39.9718199 L30.4479632,26.0860159 L42.4267599,17.5548252 L27.6195159,17.5548252 L22.9999796,3.61638342 Z",
                fill: n ? "#ca8600" : "#888",
                transform: a,
              }),
            ],
          });
        };
      c.displayName = "Star";
      var u = n(93739);
      let p = (e) => {
        let {
            className: t = "",
            position: n,
            id: o,
            isFilled: a,
            name: r,
            isSelected: s,
            size: d,
            totalStars: p,
            onChange: h,
            label: m,
          } = e,
          g = n + 1;
        return (0, l.jsxs)("label", {
          className: i(u.ratingStar, t, u["".concat(d, "RatingStar")]),
          htmlFor: o,
          children: [
            (0, l.jsx)("span", {
              className: u.srOnly,
              children: m
                ? "".concat(g, " out of ").concat(p, " stars for ").concat(m)
                : "".concat(g, " out of ").concat(p, " stars"),
            }),
            (0, l.jsx)("input", {
              "aria-checked": s,
              checked: s,
              className: u.srOnly,
              id: o,
              name: r,
              onChange: function (e) {
                null == h || h(e, g);
              },
              type: "radio",
            }),
            (0, l.jsx)("svg", {
              "aria-hidden": "true",
              className: u.interactiveStar,
              preserveAspectRatio: "xMinYMin meet",
              version: "1.1",
              viewBox: "0 0 1 46",
              xmlnsXlink: "http://www.w3.org/2000/svg",
              children: (0, l.jsx)(c, { isFilled: a }),
            }),
          ],
        });
      };
      p.displayName = "RatingStar";
      let h = (e) => {
        let {
            onChange: t,
            rating: n,
            totalStars: i,
            className: a,
            idPrefix: r,
            inputGroupName: s,
            size: d,
            label: c,
          } = e,
          u = (0, o.useCallback)(
            (e, n) => {
              t(e, n);
            },
            [t]
          ),
          h = (0, o.useMemo)(
            () =>
              [...Array.from({ length: i }).fill(void 0)].map((e, t) => {
                let o = !1;
                return (
                  t + 1 === i && n > i && (o = !0),
                  o || t + 1 !== Math.floor(n) || (o = !0),
                  (0, l.jsx)(
                    p,
                    {
                      id: "".concat(r).concat(t + 1),
                      isFilled: t < n,
                      isSelected: o,
                      label: c,
                      name: s,
                      onChange: u,
                      position: t,
                      size: d,
                      totalStars: i,
                    },
                    "".concat(r, "-").concat(t)
                  )
                );
              }),
            [u, r, s, n, d, c, i]
          );
        return (0, l.jsx)("div", { className: a, children: h });
      };
      h.displayName = "InteractiveRatingStars";
      var m = n(3576),
        g = n(62701),
        x = n(36633);
      let v = (e) => {
        let {
            size: t,
            rating: n,
            ratingCount: i,
            showRatingCount: a,
            srOnlyText: d,
            totalStars: p,
          } = e,
          { filledStars: h, emptyStars: v } = (0, o.useMemo)(() => {
            let e = [...Array.from({ length: p }).fill(void 0)].map(
              (e, t) => t
            );
            return {
              filledStars: e.map((e) =>
                e > n
                  ? null
                  : (0, l.jsx)(c, { isFilled: !0, pos: e, size: t }, e)
              ),
              emptyStars: e.map((e) =>
                e + 1 < n
                  ? null
                  : (0, l.jsx)(c, { isFilled: !1, pos: e, size: t }, e)
              ),
            };
          }, [n, t, p]),
          y = (0, o.useMemo)(() => {
            let e = Math.min((n / p) * 100, 100);
            return { width: "".concat(e, "%") };
          }, [n, p]),
          f = d;
        if (void 0 === f) {
          let e = Number.isInteger(n) ? n : n.toPrecision(2);
          f =
            0 === e
              ? "no ratings yet"
              : ""
                  .concat(e, " out of ")
                  .concat(p, " stars")
                  .concat(a && i ? " with ".concat(i, " ratings") : "");
        }
        let b = r[t],
          j = {
            "aria-hidden": !0,
            preserveAspectRatio: "xMinYMin meet",
            version: "1.1",
            viewBox: "0 0 ".concat(p + 10 * (p - 1), " 50"),
            xmlnsXlink: "http://www.w3.org/2000/svg",
          },
          w = p * b + s[t] * (p - 1) + 4 * !!["md", "lg"].includes(t);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(x.E, { children: f }),
            (0, l.jsx)(
              "svg",
              (0, g._)((0, m._)({ className: u.starSVG }, j), {
                style: {
                  "--star-height": "".concat(b, "px"),
                  "--star-width": "".concat(w, "px"),
                },
                children: v,
              })
            ),
            (0, l.jsx)("div", {
              className: u.ratingMask,
              "data-ref": "rating-mask",
              style: y,
              children: (0, l.jsx)(
                "svg",
                (0, g._)((0, m._)({ className: u.starSVG }, j), {
                  style: {
                    "--star-height": "".concat(b, "px"),
                    "--star-width": "".concat(w, "px"),
                  },
                  children: h,
                })
              ),
            }),
          ],
        });
      };
      v.displayName = "StaticRatingStars";
      let y = (e) => {
        let {
            className: t,
            "data-test": n,
            editable: r = !1,
            idPrefix: s,
            inputGroupName: d,
            hideReviewsText: c,
            onChange: p,
            rating: m = 0,
            ratingCount: g = 0,
            ratingCountTextSize: x,
            showRatingCount: y = !1,
            size: f = "xs",
            srOnlyText: b,
            label: j,
            totalStars: w = 5,
          } = e,
          _ = (0, o.useId)(),
          C = (0, o.useRef)(null != d ? d : "rating-star-group-".concat(_));
        return (0, l.jsxs)("div", {
          className: u.ndsRatingStars,
          children: [
            (0, l.jsx)("span", {
              className: i(u.stars, t, u[f]),
              "data-test": null != n ? n : "ratings",
              children: r
                ? (0, l.jsx)(h, {
                    className: u.interactiveRatingStars,
                    idPrefix: null != s ? s : "".concat(C.current, "-star-"),
                    inputGroupName: C.current,
                    label: j,
                    onChange: p,
                    rating: m,
                    size: f,
                    totalStars: w,
                  })
                : (0, l.jsx)(v, {
                    rating: m,
                    ratingCount: g,
                    showRatingCount: y,
                    size: f,
                    srOnlyText: b,
                    totalStars: w,
                  }),
            }),
            y &&
              (0, l.jsx)("span", {
                "aria-hidden": "true",
                className: i(u.count, u["".concat(null != x ? x : f, "Count")]),
                "data-test": "rating-count",
                children: c
                  ? g
                  : "".concat(g, " ").concat((0, a.td)("review", Number(g))),
              }),
          ],
        });
      };
      y.displayName = "RatingStars";
    },
    56240: (e, t, n) => {
      "use strict";
      n.d(t, { Xx: () => i, w2: () => a });
      var l = n(98601);
      let i = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return [
            { media: l.fi.xl, imageUrl: e.image_path_xl },
            { media: l.fi.lg, imageUrl: e.image_path_lg },
            { media: l.fi.md, imageUrl: e.image_path_md },
            { media: "0px", imageUrl: e.image_path },
          ];
        },
        o = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            { type: n, version: l, id: i } = e;
          return [n, l, i, ...t].join("|");
        },
        a = (e, t, n) =>
          o(
            ((e, t) => {
              var n, l, i, o;
              return {
                id: null != e ? e : "",
                type:
                  null !=
                  (i = null == (n = t.metadata) ? void 0 : n.component_type)
                    ? i
                    : "",
                version:
                  null !=
                  (o = null == (l = t.metadata) ? void 0 : l.component_version)
                    ? o
                    : "",
              };
            })(e, t),
            n
          );
    },
    60246: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { HeroMultiStory: () => G });
      var l = n(3576),
        i = n(62701),
        o = n(14232),
        a = n(37876),
        r = n(40788),
        s = n(52319),
        d = n(55472),
        c = n(19351),
        u = n(15039),
        p = n(37753),
        h = n(81063),
        m = n(93760),
        g = n(14010),
        x = n(94170),
        v = n(38810),
        y = n(93286),
        f = n(19084),
        b = n(51670),
        j = n(74090),
        w = n(18022),
        _ = n(77232),
        C = n(42773),
        k = n(98601);
      let I = k.xe.generic,
        { gray: N, white: T } = k.Tj.palette,
        S = k.gx.size,
        F = k.gx.lineHeight,
        M = _.I4.div.withConfig({ componentId: "sc-c5b15c3e-0" })(
          ["border-radius:12px;background-color:", ";"],
          (e) => {
            var t;
            return null != (t = e.heroBackgroundColor) ? t : "transparent";
          }
        ),
        z = _.I4.div.withConfig({ componentId: "sc-c5b15c3e-1" })(
          [
            "display:grid;margin:",
            ";position:relative;z-index:1;grid-template-columns:repeat(6,1fr);grid-auto-rows:auto;gap:",
            ";&.squeeze{margin:",
            ";gap:",
            ";}&.full-width{margin-left:1px;margin-right:1px;}&.grid-pairs{grid-template-columns:repeat(4,1fr);}&.grid-1-up{grid-template-areas:'empty1 empty1 story1 story1 empty2 empty2';}&.grid-2-up{grid-template-areas:'empty1 story1 story1 story2 story2 empty2';}&.grid-3-up{grid-template-areas:'story1 story1 story2 story2 story3 story3';}&.grid-4-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'empty1 empty1 story4 story4 empty2 empty2';}&.grid-5-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'empty1 story4 story4 story5 story5 empty2';}&.grid-6-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'story4 story4 story5 story5 story6 story6';}&.grid-7-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'story4 story4 story5 story5 story6 story6' 'empty1 empty1 story7 story7 empty2 empty2';}&.grid-8-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'story4 story4 story5 story5 story6 story6' 'empty1 story7 story7 story8 story8 empty2';}&.grid-9-up{grid-template-areas:'story1 story1 story2 story2 story3 story3' 'story4 story4 story5 story5 story6 story6' 'story7 story7 story8 story8 story9 story9';}.story-pair{grid-column:span 2;}.story-solo{grid-column:2 / span 2;}.story-1{grid-area:story1;}.story-2{grid-area:story2;}.story-3{grid-area:story3;}.story-4{grid-area:story4;}.story-5{grid-area:story5;}.story-6{grid-area:story6;}.story-7{grid-area:story7;}.story-8{grid-area:story8;}.story-9{grid-area:story9;}",
          ],
          I.x4,
          I.x4,
          I.x3,
          I.x3
        ),
        E = _.I4.div.withConfig({ componentId: "sc-c5b15c3e-2" })(
          [
            "position:relative;display:grid;grid-template-columns:1fr 164px;grid-template-rows:auto;background:",
            ";color:",
            ";overflow:hidden;border-radius:8px;box-shadow:",
            ";width:100%;height:100%;",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : T;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? T
              : N.darkest;
          },
          (e) => (e.showBorder ? "0 0 0 1px rgba(0, 0, 0, 20%)" : "none")
        ),
        L = _.I4.div.withConfig({ componentId: "sc-c5b15c3e-3" })(
          [
            "color:inherit;padding:",
            " ",
            " ",
            ";flex:1 0 auto;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;@media (max-width:",
            "){padding:",
            " ",
            " ",
            ";}@media (max-width:",
            "){padding:",
            ";}",
          ],
          I.x4,
          I.x4,
          I.x3,
          k.fi.mdMax,
          I.x4,
          I.x3,
          I.x2,
          k.fi.smMax,
          I.x2
        ),
        R = (0, _.I4)(C.D).withConfig({ componentId: "sc-c5b15c3e-4" })(
          [
            "color:inherit;line-height:",
            ";font-size:",
            ";margin-bottom:0;span.legal-symbol{font-size:85%;vertical-align:text-top;}@media (max-width:",
            "){font-size:calc(",
            " - 2px);}@media (max-width:",
            "){font-size:",
            ";span.legal-symbol{font-size:inherit;}}",
          ],
          F.heading,
          S.text.large,
          k.fi.mdMax,
          S.text.large,
          k.fi.smMax,
          S.text.base
        ),
        P = _.I4.img.withConfig({ componentId: "sc-c5b15c3e-5" })([
          "width:164px;height:auto;min-height:10px;min-width:10px;",
        ]),
        A = _.I4.div.withConfig({ componentId: "sc-c5b15c3e-6" })(
          [
            "position:relative;display:grid;grid-template-columns:1fr 164px;grid-template-rows:164px;background:#fff;overflow:hidden;border-radius:8px;border:1px solid ",
            ";width:100%;svg{width:100%;height:100%;}h3{background:#b3b3b3;height:1.2em;width:66%;margin-bottom:6px;}p{background:#eee;height:1em;width:95%;margin-top:3px;}p:last-child{width:88%;}",
          ],
          N.light
        );
      var O = n(75227),
        B = n(54429),
        D = n(6663),
        q = n(33255);
      let V = (e) => {
        var t, n;
        let l = !(0, g.V)(),
          { screenLg: i } = (0, d.e)(),
          {
            accessibility_text: o = "",
            alternate_image_1x1: r,
            alternate_text_color: s,
            amplified_headline: c,
            background_color: u,
            className: h,
            contentType: m,
            enhancement: _,
            fine_print: C,
            headline: k,
            image_1x1: I = "",
            link: N,
            metadata: T,
            onWhite: S,
            position: F,
            sponsored: M,
            sponsoredContainer: z,
            sponsoredTagColor: A,
            storyId: V,
            subhead: U,
          } = e,
          W = (0, p.Lq)(null != r ? r : I, i ? "400" : "300"),
          H = !u || "#FFFFFF" === u.toUpperCase(),
          G = "white" === s,
          Y = G && !H,
          K = !!(null == N ||
          null == (n = N.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          Q = (0, p.ES)(N).toString(),
          Z = (null == _ ? void 0 : _.type) === "ribbon",
          $ = (null == _ ? void 0 : _.type) === "ribbon_border";
        return (0, a.jsx)(x.F, {
          useTrackers: v.k,
          position: F,
          linkTag: null == N ? void 0 : N.link_tag,
          index: F,
          sourceId: V,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: Q ? { type: "LINK", id: Q } : void 0,
          children: (0, a.jsxs)("div", {
            className: "h-position-relative "
              .concat(h, " ")
              .concat(z ? "h-margin-b-default" : ""),
            "data-component-id": V,
            "data-content-type": m,
            children: [
              (0, a.jsxs)(f.k, {
                link: N,
                linkInfo: j.Nz,
                style: {
                  display: "block",
                  position: "relative",
                  height: "100%",
                },
                dataPosition: F,
                underline: "never",
                storyId: V,
                metadata: T,
                children: [
                  $ ? (0, a.jsx)(D.e, { content: _, size: "sm" }) : null,
                  (0, a.jsxs)(E, {
                    className: $ ? q.ribbonBorderClippedContent : "",
                    backgroundColor: u,
                    color: H ? "dark" : s,
                    showBorder: H && S,
                    children: [
                      Z ? (0, a.jsx)(B.W, { content: _, size: "sm" }) : null,
                      (0, a.jsxs)(L, {
                        className: "h-margin-t-tight",
                        children: [
                          (0, a.jsx)(R, {
                            level: 3,
                            children: c
                              ? (0, a.jsx)(O.P, {
                                  alt_color: G && !u ? "dark" : s,
                                  content: c,
                                  specialChars: !0,
                                })
                              : (null == k ? void 0 : k.content)
                              ? (0, a.jsx)(y.Q4, {
                                  operation: k.content,
                                  container: "span",
                                  suppressRed: Y,
                                })
                              : null,
                          }),
                          (0, a.jsx)(w.Le, {
                            children: (null == U ? void 0 : U.content)
                              ? (0, a.jsx)(y.Q4, {
                                  operation: U.content,
                                  container: "span",
                                  suppressRed: Y,
                                })
                              : (0, a.jsx)(a.Fragment, { children: " " }),
                          }),
                          (null == C ? void 0 : C.content)
                            ? (0, a.jsx)(w.aR, {
                                children: (0, a.jsx)(y.Q4, {
                                  operation: C.content,
                                  container: "span",
                                  suppressRed: Y,
                                }),
                              })
                            : null,
                          M
                            ? (0, a.jsx)("span", {
                                className: "h-sr-only",
                                children: "(Sponsored)",
                              })
                            : null,
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "h-position-relative",
                        children: [
                          (0, a.jsx)(P, {
                            src: W,
                            alt: o,
                            loading: l ? "lazy" : "eager",
                          }),
                          K ? (0, a.jsx)(b.k, {}) : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              M
                ? (0, a.jsx)(w.gp, {
                    className: "multi-story",
                    alternateTextColor: A,
                    "aria-hidden": !0,
                  })
                : null,
            ],
          }),
        });
      };
      V.displayName = "HeroSubsequentComponent";
      let U = (e) => {
        let {
          className: t = "",
          showSponsoredTag: n = !1,
          sponsoredContainer: l,
          sponsoredTagColor: i,
        } = e;
        return (0, a.jsxs)("div", {
          className: "h-position-relative "
            .concat(t, " ")
            .concat(l ? "h-padding-b-tight" : ""),
          children: [
            (0, a.jsxs)(A, {
              children: [
                (0, a.jsxs)(L, {
                  children: [
                    (0, a.jsx)(R, { level: 3, children: " " }),
                    (0, a.jsx)("p", { children: " " }),
                    (0, a.jsx)("p", { children: " " }),
                  ],
                }),
                (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000",
                  viewBox: "0 0 24 24",
                  children: (0, a.jsx)("rect", {
                    width: "164",
                    height: "164",
                    fill: "#B3B3B3",
                  }),
                }),
              ],
            }),
            n
              ? (0, a.jsx)(w.gp, {
                  className: "multi-story",
                  alternateTextColor: i,
                  "aria-hidden": !0,
                })
              : null,
          ],
        });
      };
      U.displayName = "HeroSubsequentPlaceholder";
      var W = n(72588),
        H = n(74294);
      let G = (e) => {
        var t, n, g, x, v, y, f;
        let {
            componentId: b,
            content: j,
            metadata: _,
            order: C,
            presentation: k = "",
            shouldAutoPlayMotion: I,
          } = e,
          { screenSmMax: N, screenMdMax: T, screenLgMax: S } = (0, d.e)(),
          { trackEvent: F } = (0, c.z1)(),
          E = (0, o.useRef)(!1),
          L = (0, o.useCallback)(() => {
            E.current ||
              (F({
                event: {
                  name: "carouselScroll",
                  source: "".concat(C, ": ").concat(k),
                  type: "click",
                },
                guest: { eventType: "click" },
              }),
              (E.current = !0));
          }, [C, k, F]);
        if (!(null == j || null == (t = j.stories) ? void 0 : t.length))
          return null;
        let R = j.stories,
          P = R[0],
          A = R.slice(1),
          O =
            null !=
            (y =
              null == _ || null == (n = _.components)
                ? void 0
                : n.map((e) => e.id))
              ? y
              : [],
          B =
            null !=
            (f =
              null == _ || null == (g = _.components)
                ? void 0
                : g.map((e) => e.content_type))
              ? f
              : [],
          D = (0, p.g2)(k, R.length) - 1,
          q = Array.from({ length: D - A.length }),
          G = R.some((e) => !!(null == e ? void 0 : e.sponsored)),
          Y = null == (x = R[0]) ? void 0 : x.alternate_text_color,
          K = null == (v = R[0]) ? void 0 : v.hero_background_color,
          Q = !K || "#FFFFFF" === K.toUpperCase(),
          Z =
            null == R
              ? void 0
              : R.findIndex((e) => (null == e ? void 0 : e.motion_video));
        return 0 === D
          ? (0, a.jsx)(h.LeadComponent, {
              componentId: b,
              content: P,
              shouldAutoPlayMotion: I,
            })
          : N
          ? (0, a.jsxs)(r.F, {
              buttonBehavior: "tabAppear",
              className: "h-margin-b-tight",
              itemGap: "12px",
              onScroll: L,
              shouldScrollEnd: !0,
              children: [
                R.map((e, t, n) =>
                  (0, a.jsx)(
                    s.A,
                    {
                      iterator: t,
                      className: u(
                        0 === t ? "h-margin-l-tight" : "",
                        t === n.length - 1 ? "h-margin-r-tight" : "",
                        "h-margin-b-default"
                      ),
                      children: (0, a.jsx)(
                        W.O,
                        (0, i._)((0, l._)({}, e), {
                          contentType: B[t],
                          storyId: O[t],
                          imgBottom: !0,
                          isHero: !0,
                          isPrimary: 0 === t,
                          position: t,
                          componentId: b,
                          sponsoredContainer: G,
                          metadata: _,
                          motion_video: e.motion_video,
                          shouldAutoPlayMotion: I && Z === t,
                        })
                      ),
                    },
                    "pool-carousel-".concat(t)
                  )
                ),
                q.map((e, t) =>
                  (0, a.jsx)(
                    s.A,
                    {
                      iterator: t + R.length,
                      children: (0, a.jsx)(H.O, {
                        hasSponsoredContent: G,
                        isHero: !0,
                        valuesLayout: !0,
                      }),
                    },
                    "placeholder-".concat(t)
                  )
                ),
              ],
            })
          : (0, a.jsx)(w.Jt, {
              children: (0, a.jsx)(w.bc, {
                children: (0, a.jsxs)(M, {
                  heroBackgroundColor: K,
                  children: [
                    (0, a.jsx)(m.Z, {
                      componentId: b,
                      content: P,
                      hasExtension: !0,
                      hasExtensionBackground: !Q,
                      isHero: !0,
                      shouldAutoPlayMotion: I,
                    }),
                    (0, a.jsxs)(z, {
                      className: ""
                        .concat(
                          T ? "grid-pairs" : "grid-".concat(D, "-up"),
                          " "
                        )
                        .concat(S ? "squeeze" : "", " ")
                        .concat(Q ? "full-width" : ""),
                      children: [
                        A.map((e, t) => {
                          let n = t + 1 === D && (t + 1) % 2 != 0;
                          return (0, o.createElement)(
                            V,
                            (0, i._)((0, l._)({}, e), {
                              className: T
                                ? "story-".concat(n ? "solo" : "pair")
                                : "story-".concat(t + 1),
                              key: "hero-carousel-".concat(t + 1),
                              contentType: B[t],
                              sponsoredContainer: G,
                              sponsoredTagColor: Q ? "dark" : Y,
                              storyId: O[t],
                              position: t,
                              componentId: b,
                              metadata: _,
                              onWhite: Q,
                            })
                          );
                        }),
                        q.map((e, t) => {
                          let n = t + A.length + 1;
                          return (0, a.jsx)(
                            U,
                            {
                              className: T
                                ? "story-".concat(
                                    n === D && n % 2 != 0 ? "solo" : "pair"
                                  )
                                : "story-".concat(n),
                              showSponsoredTag: 0 === t,
                              sponsoredContainer: G || 0 === t,
                              sponsoredTagColor: Y,
                            },
                            "placeholder-".concat(t + A.length + 1)
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
      };
      G.displayName = "HeroMultiStory";
    },
    62444: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => b, i: () => f });
      var l = n(37876),
        i = n(14010),
        o = n(55472),
        a = n(15039),
        r = n(94170),
        s = n(38810),
        d = n(19084),
        c = n(51670),
        u = n(93286),
        p = n(37753),
        h = n(74090),
        m = n(82154),
        g = n(18022),
        x = n(54429),
        v = n(6663),
        y = n(33255);
      let f = (e) => {
        var t, n;
        let f = !(0, i.V)(),
          { screenSmMax: b, screenLg: j } = (0, o.e)(),
          {
            accessibility_text: w = "",
            alternate_text_color: _,
            background_color: C,
            background_color_behavior: k,
            className: I = "",
            contentType: N,
            enhancement: T,
            fine_print: S,
            headline: F,
            image_16x9: M = "",
            link: z,
            metadata: E,
            position: L,
            sponsored: R,
            sponsoredContainer: P,
            storyId: A,
            subhead: O,
          } = e,
          B = (0, p.Lq)(M, j ? "1200" : "600"),
          D = !C || "#FFFFFF" === C.toUpperCase(),
          q = "white" === _,
          V = q && !D && b,
          U = !!(null == z ||
          null == (n = z.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          W = E && A ? (0, p.ug)(E, A) : void 0,
          H = (0, p.ES)(z).toString(),
          G = (null == T ? void 0 : T.type) === "ribbon",
          Y = (null == T ? void 0 : T.type) === "ribbon_border";
        return (0, l.jsx)(r.F, {
          clickType: "CONTENT",
          element: H ? { type: "LINK", id: H } : void 0,
          featureType: "CONTENT_POOL",
          index: L,
          linkTag: null == z ? void 0 : z.link_tag,
          position: L,
          prz: W,
          sourceId: A,
          useTrackers: s.k,
          children: (0, l.jsxs)("div", {
            className: "h-position-relative "
              .concat(I, " ")
              .concat(P ? "h-padding-b-default" : ""),
            children: [
              Y ? (0, l.jsx)(v.e, { content: T }) : null,
              (0, l.jsxs)(m.NO, {
                backgroundColor: C,
                className: a(
                  D || !b ? "show-border" : "",
                  Y ? y.ribbonBorderClippedContent : ""
                ),
                color: D && q ? "dark" : _,
                "data-component-id": A,
                "data-content-type": N,
                children: [
                  G ? (0, l.jsx)(x.W, { content: T }) : null,
                  (0, l.jsxs)(d.k, {
                    link: z,
                    linkInfo: h.Nz,
                    style: { display: "block", position: "relative" },
                    dataPosition: L,
                    underline: "never",
                    storyId: A,
                    metadata: E,
                    children: [
                      (0, l.jsxs)("div", {
                        className: "h-position-relative",
                        children: [
                          (0, l.jsx)(m.MQ, {
                            src: B,
                            alt: w,
                            loading: f ? "lazy" : "eager",
                          }),
                          U ? (0, l.jsx)(c.k, {}) : null,
                        ],
                      }),
                      (0, l.jsxs)(m.IO, {
                        className: b || "simplified" === k ? "" : "fill-white",
                        color: b ? _ : "dark",
                        children: [
                          (null == F ? void 0 : F.content)
                            ? (0, l.jsx)(m.bC, {
                                level: 3,
                                children: (0, l.jsx)(u.Q4, {
                                  operation: F.content,
                                  container: "span",
                                  suppressRed: V,
                                }),
                              })
                            : (0, l.jsx)(l.Fragment, { children: " " }),
                          (0, l.jsx)(m.bY, {
                            className: (null == S ? void 0 : S.content)
                              ? "h-margin-b-tight"
                              : "",
                            children: (null == O ? void 0 : O.content)
                              ? (0, l.jsx)(u.Q4, {
                                  operation: O.content,
                                  container: "span",
                                  suppressRed: V,
                                })
                              : (0, l.jsx)(l.Fragment, { children: " " }),
                          }),
                          (null == S ? void 0 : S.content)
                            ? (0, l.jsx)(m.s4, {
                                children: (0, l.jsx)(u.Q4, {
                                  operation: S.content,
                                  container: "span",
                                  suppressRed: V,
                                }),
                              })
                            : null,
                          R
                            ? (0, l.jsx)("span", {
                                className: "h-sr-only",
                                children: "(Sponsored)",
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              R
                ? (0, l.jsx)(g.gp, {
                    className: "multi-story",
                    "aria-hidden": !0,
                  })
                : null,
            ],
          }),
        });
      };
      f.displayName = "MultiStoryLarge";
      let b = (e) => {
        let { className: t = "" } = e;
        return (0, l.jsx)(m.UK, {
          className: t,
          children: (0, l.jsxs)(m.IO, {
            className: "fill-white",
            children: [
              (0, l.jsx)(m.bC, { level: 3, children: " " }),
              (0, l.jsx)("p", {}),
              (0, l.jsx)("p", {}),
            ],
          }),
        });
      };
      b.displayName = "MultiStoryLargePlaceholder";
    },
    65793: (e) => {
      var t = Math.floor,
        n = Math.random;
      e.exports = function (e, l) {
        return e + t(n() * (l - e + 1));
      };
    },
    68112: (e, t, n) => {
      "use strict";
      n.d(t, { v: () => h });
      var l = n(17379),
        i = n(19427),
        o = n(88137),
        a = n(17800),
        r = n(3576),
        s = n(20881),
        d = n(70418),
        c = n(96377);
      let u = "@web/domain-registry/registries/queries/get-registries",
        { useQuery: p } = (0, l.T)({
          name: u,
          keyFn: (e) => {
            let { apiKey: t } = (0, i.$)().services.apiPlatform;
            if (!t) throw Error("API key required for ".concat(u));
            return [u, e];
          },
          queryFn: async (e) => {
            let { data: t } = await ((e) => {
              var t, n;
              let {
                  apiKey: l,
                  apis: { registriesV2: o },
                  baseUrl: a,
                } = (0, i.$)().services.apiPlatform,
                { fetchOptions: u, requestParams: p } = null != e ? e : {},
                { profile_id: h } = null != p ? p : {},
                m = d.o.buildURLWithParams(
                  new URL(
                    null != (n = null == (t = o.endpointPaths) ? void 0 : t.v2)
                      ? n
                      : "",
                    a
                  ),
                  {
                    profile_id: h,
                    channel: "WEB",
                    sub_channel: "TGTWEB",
                    sn_id: c(1, 0x5f5e0ff, !1),
                    key: l,
                  }
                );
              return (0, s.Jt)(m, (0, r._)({}, u));
            })({ requestParams: e, fetchOptions: { credentials: "include" } });
            return t;
          },
          defaultOptions: { staleTime: 3e4 },
        }),
        h = (0, a.L)(p, {
          blockCallOnAuthFail: !0,
          minimumAssuranceLevel: o.ov,
        });
    },
    72588: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => b });
      var l = n(37876),
        i = n(14010),
        o = n(40123),
        a = n(60823),
        r = n(93286),
        s = n(37753),
        d = n(19084),
        c = n(51670),
        u = n(74090),
        p = n(18022),
        h = n(82154),
        m = n(75227),
        g = n(32892),
        x = n(34832),
        v = n(54429),
        y = n(6663),
        f = n(33255);
      let b = (e) => {
        var t, n, b, j;
        let w = !(0, i.V)(),
          {
            accessibility_text: _ = "",
            alternate_text_color: C,
            amplified_headline: k,
            background_color: I,
            className: N = "",
            componentId: T,
            contentType: S,
            enhancement: F,
            fine_print: M,
            headline: z,
            image_1x1: E = "",
            alternate_image_1x1: L = E,
            imgBottom: R,
            isHero: P,
            isPrimary: A,
            largeFormat: O,
            link: B,
            metadata: D,
            motion_video: q,
            position: V,
            shouldAutoPlayMotion: U,
            sponsored: W,
            sponsoredContainer: H,
            storyId: G,
            subhead: Y,
          } = e,
          K = (0, s.Lq)(O || P ? E : L, "600"),
          Q = "white" === C,
          Z = Q && !!I,
          $ = k ? (0, s.j1)(k.lockup) : "",
          J = (null == k || null == (t = k.line_five) ? void 0 : t.length)
            ? "five-line"
            : "",
          X = !!(null == B ||
          null == (b = B.detail) ||
          null == (n = b.multi_tcins)
            ? void 0
            : n.length),
          ee =
            P &&
            (null == q ? void 0 : q.aspect_ratio_1x1) &&
            (null == q ? void 0 : q.alt_text)
              ? q.alt_text
              : _,
          et = !!P && !o(q),
          en = (0, s.ES)(B).toString(),
          el = (null == F ? void 0 : F.type) === "ribbon",
          ei = (null == F ? void 0 : F.type) === "ribbon_border",
          { trackClick: eo } = (0, a.f)(),
          ea = {
            clickType: "CONTENT",
            element: en ? { type: "LINK", id: en } : void 0,
            featureType: "CONTENT_POOL",
          },
          er =
            (null == D ? void 0 : D.components) &&
            null != V &&
            (null == (j = D.components[V]) ? void 0 : j.placement_id);
        return (
          T && er && (ea.slingshot = { componentId: T, placementId: er }),
          (0, l.jsxs)(h.Li, {
            className: N,
            largeFormat: O,
            isHero: P,
            isPrimary: A,
            hasSponsoredContent: H,
            "data-component-id": G,
            "data-content-type": S,
            onClick: () => eo.track(ea),
            children: [
              ei ? (0, l.jsx)(y.e, { content: F }) : null,
              (0, l.jsx)(h._H, {
                backgroundColor: I,
                className: ei ? f.ribbonBorderClippedContent : "",
                children: (0, l.jsxs)("div", {
                  style: {
                    display: "block",
                    position: "relative",
                    height: "100%",
                  },
                  children: [
                    el ? (0, l.jsx)(v.W, { content: F }) : null,
                    (0, l.jsx)(g.p, {
                      alt_text: ee,
                      contentPoolMotionData: P
                        ? null == q
                          ? void 0
                          : q.aspect_ratio_1x1
                        : void 0,
                      imageSrc: K,
                      options: { mediaButtonLeft: X },
                      shouldAutoPlay: U,
                      storyId: G,
                      children: (0, l.jsx)(x.Y, {
                        children: (0, l.jsx)(d.k, {
                          link: B,
                          linkInfo: u._d,
                          dataPosition: V,
                          style: {
                            display: "block",
                            position: "relative",
                            height: "100%",
                          },
                          underline: "never",
                          storyId: G,
                          metadata: D,
                          children: (0, l.jsxs)(h.Ze, {
                            children: [
                              !R &&
                                (0, l.jsxs)(h._C, {
                                  children: [
                                    (0, l.jsx)(p.og, {
                                      src: K,
                                      alt: ee,
                                      loading: w ? "lazy" : "eager",
                                    }),
                                    X
                                      ? (0, l.jsx)(c.k, { isMotionVideo: et })
                                      : null,
                                  ],
                                }),
                              (0, l.jsxs)(p.ku, {
                                backgroundColor: I,
                                color: Q && !I ? "dark" : C,
                                className: R ? "h-margin-t-tight" : "",
                                children: [
                                  (0, l.jsx)(h.IH, {
                                    children: k
                                      ? (0, l.jsx)(p.qu, {
                                          level: A ? 2 : 3,
                                          className: "".concat(J || $),
                                          children: (0, l.jsx)(m.P, {
                                            alt_color: Q && !I ? "dark" : C,
                                            content: k,
                                            specialChars: !0,
                                          }),
                                        })
                                      : (null == z ? void 0 : z.content)
                                      ? (0, l.jsx)(p.HK, {
                                          level: A ? 2 : 3,
                                          className: P
                                            ? "hero-tile"
                                            : "h-margin-b-none",
                                          children: (0, l.jsx)(r.Q4, {
                                            operation: z.content,
                                            container: "span",
                                            suppressRed: Z,
                                          }),
                                        })
                                      : null,
                                  }),
                                  (null == Y ? void 0 : Y.content)
                                    ? (0, l.jsx)(p.Le, {
                                        className: M ? "" : "h-margin-b-tiny",
                                        children: (0, l.jsx)(r.Q4, {
                                          operation: Y.content,
                                          container: "span",
                                          suppressRed: Z,
                                        }),
                                      })
                                    : null,
                                  (null == M ? void 0 : M.content)
                                    ? (0, l.jsx)(p.aR, {
                                        children: (0, l.jsx)(r.Q4, {
                                          operation: M.content,
                                          container: "span",
                                          suppressRed: Z,
                                        }),
                                      })
                                    : null,
                                  W
                                    ? (0, l.jsx)("span", {
                                        className: "h-sr-only",
                                        children: "(Sponsored)",
                                      })
                                    : null,
                                ],
                              }),
                              R &&
                                (0, l.jsxs)(h._C, {
                                  children: [
                                    (0, l.jsx)(p.og, {
                                      src: K,
                                      alt: ee,
                                      loading: w ? "lazy" : "eager",
                                    }),
                                    X
                                      ? (0, l.jsx)(c.k, { isMotionVideo: et })
                                      : null,
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              W
                ? (0, l.jsx)(p.gp, {
                    className: "left-align",
                    "aria-hidden": !0,
                  })
                : null,
            ],
          })
        );
      };
      b.displayName = "MultiStoryMobileCarouselComponent";
    },
    74090: (e, t, n) => {
      "use strict";
      n.d(t, {
        N3: () => l,
        Nz: () => o,
        _d: () => a,
        aZ: () => r,
        iA: () => s,
        lP: () => i,
      });
      let l = {
          CIRCLE_LANDING: "https://www.target.com/circle/",
          CIRCLE_GAME: "https://www.target.com/l/target-circle-deals/-/N-j1p80",
          CUSTOM_LINK: "",
          PARTNER_CODE: "https://www.target.com/circle/partners/",
          OFFER_DETAILS: "https://www.target.com/circle/o/target-circle/-/",
          OFFER_LISTING: "https://www.target.com/circle/deals/",
          GROUPED_OFFER: "/pl/",
          NO_LINK: "",
          MULTI_TCIN: "",
          PROMO: "/pl/",
          PDP: "",
          TARGET_FINDS: "",
          TAXONOMY: "",
          default: "",
        },
        i = "@web/slingshot-components/StandardComponent/Link",
        o = "@web/slingshot-components/MultiStory/Link",
        a = "@web/slingshot-components/CarouselComponent/Link",
        r = "@web/slingshot-components/LeadComponent/Link",
        s = {
          "1/4": 188,
          "1/2": 189,
          "3/4": 190,
          "1/8": 8539,
          "3/8": 8540,
          "5/8": 8541,
          "7/8": 8542,
          "1/16": 57368,
          "3/16": 57369,
          "5/16": 57370,
          "7/16": 57371,
          "9/16": 57372,
          "11/16": 57373,
          "13/16": 57374,
          "15/16": 57375,
        };
    },
    74294: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var l = n(37876),
        i = n(18022),
        o = n(82154);
      let a = (e) => {
        let {
          valuesLayout: t = !1,
          largeFormat: n = !1,
          className: a = "",
          isAmplified: r = !1,
          isHero: s = !1,
          hasSponsoredContent: d = !1,
        } = e;
        return (0, l.jsx)(o._9, {
          className: a,
          hasSponsoredContent: d,
          isHero: s,
          largeFormat: n,
          children: (0, l.jsx)(o._H, {
            children: (0, l.jsxs)(o.Ze, {
              children: [
                t ? null : (0, l.jsx)(o.bP, { isHero: s, largeFormat: n }),
                (0, l.jsx)(i.ku, {
                  children: r
                    ? (0, l.jsxs)(o.bx, {
                        children: [
                          (0, l.jsx)("p", { children: " " }),
                          (0, l.jsx)("p", { children: " " }),
                          (0, l.jsx)("p", {
                            className: "large-line",
                            children: " ",
                          }),
                        ],
                      })
                    : (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("p", {
                            className: "headline",
                            children: " ",
                          }),
                          (0, l.jsx)("p", { children: " " }),
                          (0, l.jsx)("p", { children: " " }),
                        ],
                      }),
                }),
                t ? (0, l.jsx)(o.bP, { isHero: s, largeFormat: n }) : null,
              ],
            }),
          }),
        });
      };
      a.displayName = "MultiStoryPolyPlaceholder";
    },
    75227: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => T });
      var l = n(37876),
        i = n(98601),
        o = n(40123);
      let a = function (e) {
        var t;
        let n =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          i = e.replace("$", "").split(".")[0] || "0",
          o = null != (t = e.split(".")[1]) ? t : "00",
          a = !o || 0 === Number.parseInt(o, 10),
          r = 0 === Number.parseInt(i, 10);
        return a
          ? (0, l.jsx)("span", {
              style: n ? { fontFeatureSettings: '"ss01", "pnum"' } : {},
              children: "$".concat(Number.parseInt(i, 10)),
            })
          : r && n
          ? (0, l.jsx)("span", {
              style: { fontFeatureSettings: '"ss01", "pnum"' },
              children: "".concat(Number.parseInt(o, 10), "\xa2"),
            })
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("span", {
                  style: n ? { fontFeatureSettings: '"ss01", "pnum"' } : {},
                  children: ""
                    .concat(n ? "" : "$")
                    .concat(i)
                    .concat(n ? "" : "."),
                }),
                (0, l.jsx)("span", {
                  style: n ? { fontFeatureSettings: '"sups", "pnum"' } : {},
                  children: "".concat(o),
                }),
              ],
            });
      };
      var r = n(77232);
      let s = r.I4.div.withConfig({ componentId: "sc-df9ca2a9-0" })(
          ["color:", ";line-height:1.1;"],
          (e) => e.color
        ),
        d = r.I4.span.withConfig({ componentId: "sc-df9ca2a9-1" })(
          [
            "font-size:1.75em;font-weight:",
            ";line-height:0.9;&.reduce-size{font-size:1.5em;}",
          ],
          i.gx.weight.bold
        ),
        c = r.I4.span.withConfig({ componentId: "sc-df9ca2a9-2" })(
          [
            "display:block;font-size:1em;font-weight:",
            ";line-height:1.05;&.double-line{font-size:0.88em;display:block;}",
          ],
          (e) => ("normal" === e.weight ? i.gx.weight.normal : i.gx.weight.bold)
        ),
        u = r.I4.span.withConfig({ componentId: "sc-df9ca2a9-3" })(
          ["display:block;font-size:2.65em;font-weight:", ";line-height:0.88;"],
          i.gx.weight.bold
        ),
        p = (e) => {
          let { lineOneElements: t, lineTwoElements: n, reduceSize: i } = e;
          return (0, l.jsxs)("div", {
            "aria-hidden": !0,
            children: [
              (0, l.jsx)(d, { className: i ? "reduce-size" : "", children: t }),
              (0, l.jsx)("br", {}),
              (0, l.jsx)(d, { className: i ? "reduce-size" : "", children: n }),
            ],
          });
        };
      p.displayName = "EqualWeightTemplate";
      let h = (e) => {
        let { lineOneElements: t, lineTwoElements: n } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(u, { children: t }) : null,
            (0, l.jsx)(c, { children: n }),
          ],
        });
      };
      h.displayName = "GiftCardTemplate";
      let m = (e) => {
        let { lineOneElements: t, lineTwoElements: n } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(c, { children: t }) : null,
            (0, l.jsx)(u, { children: n }),
          ],
        });
      };
      m.displayName = "SplitWeightTemplate";
      let g = (e) => {
        let {
          lineOneElements: t,
          lineTwoElements: n,
          lineThreeElements: i,
          lineFourElements: o,
        } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(c, { weight: "normal", children: t }) : null,
            n ? (0, l.jsx)(c, { weight: "normal", children: n }) : null,
            i ? (0, l.jsx)(c, { children: i }) : null,
            o ? (0, l.jsx)(u, { children: o }) : null,
          ],
        });
      };
      g.displayName = "ValueDoubleLineTemplate";
      let x = (e) => {
        let {
          lineOneElements: t,
          lineTwoElements: n,
          lineThreeElements: i,
        } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(c, { weight: "normal", children: t }) : null,
            n ? (0, l.jsx)(c, { children: n }) : null,
            i ? (0, l.jsx)(u, { children: i }) : null,
          ],
        });
      };
      x.displayName = "ValueSingleLineTemplate";
      let v = (e) => {
        var t, n, i, r, s, d;
        let { content: c, specialChars: u = !1 } = e,
          {
            line_one: v,
            line_two: y,
            line_three: f,
            line_four: b,
            lockup: j,
          } = c,
          w = ((e) => {
            switch (e) {
              case "single-line":
                return x;
              case "double-line":
                return g;
              case "percent-off":
              case "free":
              case "dollars-and-cents":
              case "unit-per-dollar":
              case "whole-number-small-line-one":
                return m;
              case "giftcard":
                return h;
              default:
                return p;
            }
          })(j),
          _ = null != (t = null == v ? void 0 : v[0]) ? t : "",
          C = null != (n = null == y ? void 0 : y[0]) ? n : "",
          k = null != (i = null == f ? void 0 : f[0]) ? i : "",
          I = null != (r = null == b ? void 0 : b[0]) ? r : "",
          N = o(_) ? null : (0, l.jsx)("span", { children: _ }),
          T = o(C) ? null : (0, l.jsx)("span", { children: C }),
          S = o(k) ? null : (0, l.jsx)("span", { children: k }),
          F = o(I) ? null : (0, l.jsx)("span", { children: I }),
          M = "".concat(_, " ").concat(C, " ").concat(k, " ").concat(I);
        switch (j) {
          case "percent-off":
            (T = (0, l.jsx)("span", {
              children: ""
                .concat(C)
                .concat(u ? String.fromCodePoint(57367) : "% off"),
            })),
              (M = "".concat(_, " ").concat(C, "% off"));
            break;
          case "free":
            (T = (0, l.jsx)("span", { children: "Free" })),
              (M = "".concat(_, " Free"));
            break;
          case "dollars-and-cents":
            (T = a(C, u)), (M = "".concat(_, " $").concat(C));
            break;
          case "unit-per-dollar":
            (T = (0, l.jsx)("span", {
              style: u ? { fontFeatureSettings: '"ss01", "pnum"' } : {},
              children: ""
                .concat(C, "/$")
                .concat(null != (s = null == y ? void 0 : y[1]) ? s : ""),
            })),
              (M = ""
                .concat(_, " ")
                .concat(C, "/$")
                .concat(null != (d = null == y ? void 0 : y[1]) ? d : ""));
            break;
          case "giftcard":
            (N = (0, l.jsx)("span", {
              style: u ? { fontFeatureSettings: '"ss01", "pnum"' } : {},
              children: "$".concat(_),
            })),
              (T = (0, l.jsx)("span", {
                children: "".concat(String.fromCodePoint(172), "GiftCard"),
              })),
              (M = "$".concat(_, " Target gift card"));
            break;
          case "whole-number-even-line-size":
          case "whole-number-small-line-one":
            (T = (0, l.jsx)("span", {
              style: u ? { fontFeatureSettings: '"ss01", "pnum"' } : {},
              children: "$".concat(C),
            })),
              (M = "".concat(_, " $").concat(C));
            break;
          case "single-line":
            (S = a(k, u)), (M = "".concat(_, " ").concat(C, " $").concat(k));
            break;
          case "double-line":
            (F = a(I, u)),
              (M = "".concat(_, " ").concat(C, " ").concat(k, " $").concat(I));
        }
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(w, {
              lineOneElements: N,
              lineTwoElements: T,
              lineThreeElements: S,
              lineFourElements: F,
              reduceSize: !1,
            }),
            (0, l.jsx)("span", { className: "h-sr-only", children: M }),
          ],
        });
      };
      v.displayName = "AmplifiedTextLayoutV1";
      var y = n(53258);
      let f = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "currentColor";
          return (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Target circle™",
            viewBox: "0 0 122 33",
            children: (0, l.jsxs)("g", {
              fill: e,
              children: [
                (0, l.jsx)("path", {
                  d: "M0,16.912C0,8.58,6.762,1.796,15.115,1.796s15.115,6.757,15.115,15.115-6.757,15.088-15.115,15.088c-8.353.022-15.115-6.714-15.115-15.088M15.088,27.028c5.567,0,10.068-4.523,10.068-10.068s-4.523-10.068-10.068-10.068-10.09,4.496-10.09,10.068,4.523,10.068,10.09,10.068",
                }),
                (0, l.jsx)("path", {
                  d: "M15.088,11.886c2.786,0,5.047,2.261,5.047,5.047s-2.261,5.047-5.047,5.047-5.047-2.256-5.047-5.047,2.256-5.047,5.047-5.047",
                }),
                (0, l.jsx)("path", {
                  d: "M32.465,17.193c0-5.908,3.581-10.025,9.457-10.025,4.728,0,8.45,2.581,8.705,7.017h-4.977c-.319-2.115-1.574-3.186-3.76-3.186-3.078,0-4.333,3.008-4.333,6.016s1.255,5.837,4.225,5.837c2.256,0,3.69-1.288,4.047-3.76h4.907c-.682,4.869-3.976,7.59-8.916,7.59-5.767,0-9.348-4.117-9.348-9.489",
                }),
                (0, l.jsx)("path", {
                  d: "M52.304,2.867C52.304,1.293,53.591,0,55.171,0s2.867,1.288,2.867,2.867-1.288,2.862-2.867,2.862-2.867-1.288-2.867-2.862M52.628,7.666h5.085v18.513h-5.085V7.666Z",
                }),
                (0, l.jsx)("path", {
                  d: "M60.04,7.666h4.837v3.435h.07c.968-2.326,3.365-3.938,5.908-3.938.503,0,.86.108,1.109.179v4.728c-.503-.108-1.109-.179-1.829-.179-3.69,0-5.015,2.543-5.015,5.946v8.342h-5.085V7.666h.005Z",
                }),
                (0, l.jsx)("path", {
                  d: "M72.212,17.193c0-5.908,3.581-10.025,9.457-10.025,4.728,0,8.45,2.581,8.705,7.017h-4.977c-.319-2.115-1.574-3.186-3.76-3.186-3.078,0-4.333,3.008-4.333,6.016s1.255,5.837,4.225,5.837c2.256,0,3.69-1.288,4.047-3.76h4.907c-.682,4.869-3.976,7.59-8.916,7.59-5.767,0-9.348-4.117-9.348-9.489",
                }),
                (0, l.jsx)("rect", {
                  x: "92.337",
                  y: ".611",
                  width: "5.085",
                  height: "25.573",
                }),
                (0, l.jsx)("path", {
                  d: "M99.251,16.939c0-5.588,3.868-9.776,9.457-9.776s9.024,4.582,9.024,10.063l-.038.931h-13.357c.146,3.186,1.612,4.69,4.512,4.69,1.937,0,3.652-1.109,4.047-2.397h4.474c-1.363,4.187-4.225,6.232-8.667,6.232-5.875,0-9.457-4.047-9.457-9.743M112.603,14.932c-.503-2.792-1.72-3.938-4.085-3.938s-3.976,1.504-4.193,3.938h8.277Z",
                }),
                (0, l.jsx)("polygon", {
                  points:
                    "119.241 23.917 119.241 24.258 118.522 24.258 118.522 26.179 118.121 26.179 118.121 24.258 117.407 24.258 117.407 23.917 119.241 23.917",
                }),
                (0, l.jsx)("polygon", {
                  points:
                    "120.101 23.917 120.723 25.687 120.729 25.687 121.34 23.917 121.892 23.917 121.892 26.179 121.513 26.179 121.513 24.431 121.508 24.431 120.88 26.179 120.55 26.179 119.923 24.431 119.917 24.431 119.917 26.179 119.539 26.179 119.539 23.917 120.101 23.917",
                }),
              ],
            }),
          });
        },
        b = (e) => {
          let { color: t } = e;
          return (0, l.jsx)("span", {
            className: y.circleLogoContainer,
            style: { color: t },
            children: f(t),
          });
        };
      b.displayName = "CircleLogo";
      let j = (e) => {
        let {
          lineOneElements: t,
          lineOneDoubleElements: n,
          lineTwoElements: i,
          lineThreeElements: o,
          lineFourElements: a,
        } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t
              ? (0, l.jsx)(c, {
                  className: n ? "double-line" : "",
                  children: t,
                })
              : null,
            n ? (0, l.jsx)(c, { className: "double-line", children: n }) : null,
            (0, l.jsx)(u, {
              style: { fontFeatureSettings: '"pnum"' },
              children: i,
            }),
            o
              ? (0, l.jsx)(c, {
                  className: a ? "double-line" : "",
                  children: o,
                })
              : null,
            a ? (0, l.jsx)(c, { className: "double-line", children: a }) : null,
          ],
        });
      };
      j.displayName = "SplitWeightTemplateV2";
      let w = (e) => {
        let {
          lineOneElements: t,
          lineTwoElements: n,
          lineThreeElements: i,
          lineFourElements: o,
        } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(c, { weight: "normal", children: t }) : null,
            n ? (0, l.jsx)(c, { weight: "bold", children: n }) : null,
            i
              ? (0, l.jsx)(u, {
                  style: { fontFeatureSettings: '"pnum"' },
                  children: i,
                })
              : null,
            o ? (0, l.jsx)(c, { weight: "bold", children: o }) : null,
          ],
        });
      };
      w.displayName = "ValuePriceEmphasisTemplate";
      let _ = (e) => {
        let {
          lineOneElements: t,
          lineTwoElements: n,
          lineThreeElements: i,
          lineFourElements: o,
          lineFiveElements: a,
        } = e;
        return (0, l.jsxs)("div", {
          "aria-hidden": !0,
          children: [
            t ? (0, l.jsx)(c, { weight: "normal", children: t }) : null,
            n ? (0, l.jsx)(c, { weight: "normal", children: n }) : null,
            i ? (0, l.jsx)(c, { weight: "bold", children: i }) : null,
            o
              ? (0, l.jsx)(u, {
                  style: { fontFeatureSettings: '"pnum"' },
                  children: o,
                })
              : null,
            a ? (0, l.jsx)(c, { weight: "bold", children: a }) : null,
          ],
        });
      };
      _.displayName = "ValuePriceEmphasisDoubleTemplate";
      let C = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          switch (e) {
            case "value-price-emphasis-versioned":
            case "value-suggested-multiple-versioned":
              if ("double-line" === t) return _;
              return w;
            case "multiple-units-versioned":
            case "percent-off-versioned":
            case "price-emphasis-versioned":
            case "save-with-versioned":
            case "statement-versioned":
              return j;
            case "giftcard-versioned":
              return h;
            default:
              return p;
          }
        },
        k = (e) => {
          var t,
            n,
            r,
            s,
            d,
            c,
            u,
            p,
            h,
            m,
            g,
            x,
            v,
            y,
            f,
            j,
            w,
            _,
            k,
            I,
            N,
            T,
            S,
            F,
            M;
          let {
              color: z,
              content: E,
              showTrademarks: L,
              specialChars: R = !1,
            } = e,
            {
              line_one: P,
              line_two: A,
              line_three: O,
              line_four: B,
              line_five: D,
              lockup: q,
              lockup_disposition: V,
            } = E,
            U = C(q, V),
            W = null != (t = null == P ? void 0 : P[0]) ? t : "",
            H = null != (n = null == A ? void 0 : A[0]) ? n : "",
            G = null != (r = null == O ? void 0 : O[0]) ? r : "",
            Y = null != (s = null == B ? void 0 : B[0]) ? s : "",
            K = null != (d = null == D ? void 0 : D[0]) ? d : "",
            Q = o(W) ? null : (0, l.jsx)("span", { children: W }),
            Z = null,
            $ = o(H) ? null : (0, l.jsx)("span", { children: H }),
            J = o(G) ? null : (0, l.jsx)("span", { children: G }),
            X = o(Y) ? null : (0, l.jsx)("span", { children: Y }),
            ee = o(K) ? null : (0, l.jsx)("span", { children: K }),
            et = "".concat(W, " ").concat(H, " ").concat(G, " ").concat(Y);
          switch (q) {
            case "equal-weight-versioned":
              ($ = a(H, R)), (et = "".concat(W, " $").concat(H));
              break;
            case "giftcard-versioned":
              (Q = (0, l.jsx)("span", { children: a(W, R) })),
                ($ = (0, l.jsx)("span", {
                  children: "".concat(String.fromCodePoint(172), "GiftCard"),
                })),
                (et = "$".concat(W, " Target gift card"));
              break;
            case "multiple-units-versioned":
              "suggested" === V &&
                (($ = (0, l.jsxs)("span", {
                  children: [
                    "".concat(
                      null != (c = null == A ? void 0 : A[0]) ? c : "",
                      "/"
                    ),
                    a(null != (u = null == A ? void 0 : A[1]) ? u : "", R),
                  ],
                })),
                (et = ""
                  .concat(W, " ")
                  .concat(
                    null != (p = null == A ? void 0 : A[0]) ? p : "",
                    "/$"
                  )
                  .concat(null != (h = null == A ? void 0 : A[1]) ? h : ""))),
                "mandated" === V &&
                  ((Z = (0, l.jsx)("span", { children: H })),
                  ($ = (0, l.jsxs)("span", {
                    children: [
                      "".concat(
                        null != (m = null == O ? void 0 : O[0]) ? m : "",
                        "/"
                      ),
                      a(null != (g = null == O ? void 0 : O[1]) ? g : "", R),
                    ],
                  })),
                  (J = null),
                  (et = "\n          "
                    .concat(W, " ")
                    .concat(H, "\n          ")
                    .concat(
                      null != (x = null == O ? void 0 : O[0]) ? x : "",
                      "/$"
                    )
                    .concat(
                      null != (v = null == O ? void 0 : O[1]) ? v : "",
                      "\n        "
                    )));
              break;
            case "percent-off-versioned":
              ($ = (0, l.jsx)("span", {
                children: ""
                  .concat(H)
                  .concat(R ? String.fromCodePoint(57367) : "% off"),
              })),
                (X = (null == B ? void 0 : B.length)
                  ? (0, l.jsxs)("span", {
                      children: [B[0], " ", a(null != (y = B[1]) ? y : "", !1)],
                    })
                  : null),
                (et = ""
                  .concat(W, " ")
                  .concat(H, "% off ")
                  .concat(G, "\n       ")
                  .concat(null != (f = null == B ? void 0 : B[0]) ? f : "", " ")
                  .concat((null == B ? void 0 : B[1]) ? "$" : "")
                  .concat(null != (j = null == B ? void 0 : B[1]) ? j : ""));
              break;
            case "price-emphasis-versioned":
              ($ = a(H, R)),
                (X = (null == B ? void 0 : B.length)
                  ? (0, l.jsxs)("span", {
                      children: [B[0], " ", a(null != (w = B[1]) ? w : "", !1)],
                    })
                  : null),
                (et = ""
                  .concat(W, " $")
                  .concat(H, " ")
                  .concat(G, "\n       ")
                  .concat(null != (_ = null == B ? void 0 : B[0]) ? _ : "", " ")
                  .concat((null == B ? void 0 : B[1]) ? "$" : "")
                  .concat(null != (k = null == B ? void 0 : B[1]) ? k : ""));
              break;
            case "save-with-versioned":
              (Q = null),
                ($ = (0, l.jsx)("span", { children: W })),
                "same-day" === V &&
                  ((J = (0, l.jsx)("span", { children: "with same-day" })),
                  (X = (0, l.jsx)("span", { children: "delivery or pickup" })),
                  (et = "".concat(W, " with same day delivery or pickup"))),
                "circle" === V &&
                  ((J = (0, l.jsxs)("span", {
                    children: [
                      "with",
                      " ",
                      (0, l.jsx)(b, {
                        color:
                          z === i.Tj.palette.white
                            ? i.Tj.palette.white
                            : i.Tj.palette.red.default,
                      }),
                    ],
                  })),
                  (X = null),
                  (et = ""
                    .concat(W, " with Target Circle")
                    .concat(L ? "™" : "")));
              break;
            case "statement-versioned":
              G &&
                ((Z = (0, l.jsx)("span", { children: H })),
                ($ = (0, l.jsx)("span", { children: G })),
                (J = null));
              break;
            case "value-price-emphasis-versioned":
              "single-line" === V &&
                ((J = a(G, R)),
                (et = ""
                  .concat(W, " ")
                  .concat(H, " $")
                  .concat(G, " ")
                  .concat(Y))),
                "double-line" === V &&
                  ((X = a(Y, R)),
                  (et = ""
                    .concat(W, " ")
                    .concat(H, " ")
                    .concat(G, " $")
                    .concat(Y, " ")
                    .concat(K)));
              break;
            case "value-suggested-multiple-versioned": {
              let e = a(
                null !=
                  (N =
                    null != (I = null == O ? void 0 : O[1])
                      ? I
                      : null == A
                      ? void 0
                      : A[1])
                  ? N
                  : "",
                R
              );
              "single-line" === V &&
                (($ = null),
                (J = (0, l.jsxs)("span", {
                  children: [
                    null != (T = null == A ? void 0 : A[0]) ? T : "",
                    "/",
                    e,
                  ],
                })),
                (et = ""
                  .concat(W, " ")
                  .concat(
                    null != (S = null == A ? void 0 : A[0]) ? S : "",
                    "/$"
                  )
                  .concat(null != (F = null == A ? void 0 : A[1]) ? F : ""))),
                "double-line" === V &&
                  ((J = null),
                  (X = (0, l.jsxs)("span", { children: [G, "/", e] })),
                  (et = ""
                    .concat(W, " ")
                    .concat(H, " ")
                    .concat(G, "/$")
                    .concat(null != (M = null == O ? void 0 : O[1]) ? M : "")));
            }
          }
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(U, {
                lineOneElements: Q,
                lineOneDoubleElements: Z,
                lineTwoElements: $,
                lineThreeElements: J,
                lineFourElements: X,
                lineFiveElements: ee,
                reduceSize: !1,
              }),
              (0, l.jsx)("span", { className: "h-sr-only", children: et }),
            ],
          });
        };
      k.displayName = "AmplifiedTextV1";
      let I = (e) => {
        let {
          lineOneString: t = "",
          lineTwoString: n = "",
          lineThreeString: i = "",
          lineFourString: o = "",
        } = e;
        return (0, l.jsx)("span", {
          children: "".concat(t, " ").concat(n, " ").concat(i, " ").concat(o),
        });
      };
      I.displayName = "TextOnlyTemplate";
      let N = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          switch (e.toLowerCase()) {
            case "#cc0000":
            case "red":
              return i.Tj.palette.red.default;
            case "dark":
              return i.Tj.palette.gray.darkest;
            case "light":
            case "white":
            case "#ffffff":
              return i.Tj.palette.white;
            default:
              return e;
          }
        },
        T = (e) => {
          let {
              alt_color: t,
              content: n,
              textOnly: i = !1,
              showTrademarks: o = !0,
              specialChars: a = !1,
            } = e,
            {
              line_one: r,
              line_two: d,
              line_three: c,
              line_four: u,
              color: p,
              version: h,
            } = n,
            m = N(p) || N(t) || "inherit";
          if (i) {
            var g, x, y, f;
            return (0, l.jsx)(I, {
              lineOneString: null != (g = null == r ? void 0 : r[0]) ? g : "",
              lineTwoString: null != (x = null == d ? void 0 : d[0]) ? x : "",
              lineThreeString: null != (y = null == c ? void 0 : c[0]) ? y : "",
              lineFourString: null != (f = null == u ? void 0 : u[0]) ? f : "",
            });
          }
          return "v2" === h
            ? (0, l.jsx)(s, {
                color: m,
                "data-version": "v2",
                children: (0, l.jsx)(k, {
                  color: m,
                  content: n,
                  showTrademarks: o,
                  specialChars: a,
                }),
              })
            : (0, l.jsx)(s, {
                color: m,
                "data-version": "v1",
                style: { fontFeatureSettings: '"pnum"' },
                children: (0, l.jsx)(v, { content: n, specialChars: a }),
              });
        };
      T.displayName = "AmplifiedText";
    },
    79055: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => m });
      var l = n(3576),
        i = n(65699),
        o = n(37876),
        a = n(15039),
        r = n(62701),
        s = n(22071);
      let d = (e) => {
        var { className: t, isValid: n, ref: d } = e,
          c = (0, i._)(e, ["className", "isValid", "ref"]);
        return (0, o.jsx)(
          "input",
          (0, r._)(
            (0, l._)(
              { className: a(s.ndsBaseRadio, t, !1 === n && s.invalid) },
              c
            ),
            { ref: d, type: "radio" }
          )
        );
      };
      d.displayName = "BaseRadio";
      var c = n(29359),
        u = n(86528),
        p = n(84456),
        h = n(44670);
      let m = (e) => {
        var {
            children: t,
            className: n,
            disableLiveRegion: r,
            disabled: s,
            errorText: m,
            hideLabel: g,
            id: x,
            isValid: v,
            label: y,
            microcopyPlacement: f = "bottom",
            microcopy: b,
            screenReader: j,
            "data-test": w,
          } = e,
          _ = (0, i._)(e, [
            "children",
            "className",
            "disableLiveRegion",
            "disabled",
            "errorText",
            "hideLabel",
            "id",
            "isValid",
            "label",
            "microcopyPlacement",
            "microcopy",
            "screenReader",
            "data-test",
          ]);
        return (0, o.jsxs)("div", {
          className: a(h.ndsRadio, n),
          "data-test": w,
          children: [
            (0, o.jsx)(d, (0, l._)({ disabled: s, id: x, isValid: v }, _)),
            (0, o.jsxs)(u.J, {
              disableLiveRegion: r,
              errorText: m,
              hidden: g,
              htmlFor: x,
              microcopy: b,
              screenReader: j,
              valid: v,
              children: [
                null != y ? y : t,
                b &&
                  (0, o.jsx)(p.G, {
                    "aria-hidden": "true",
                    className: a(
                      h.microcopy,
                      "right" === f && h.microcopyRight
                    ),
                    children: b,
                  }),
              ],
            }),
            !1 === v &&
              m &&
              (0, o.jsx)(c.K, {
                "aria-hidden": "true",
                className: h.errorMessage,
                children: m,
              }),
          ],
        });
      };
      m.displayName = "Radio";
    },
    81063: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { LeadComponent: () => S });
      var l = n(37876),
        i = n(55472),
        o = n(18022),
        a = n(37753),
        r = n(93760),
        s = n(3576),
        d = n(62701),
        c = n(14010),
        u = n(7312),
        p = n(94170),
        h = n(38810),
        m = n(15039),
        g = n(93286),
        x = n(19084),
        v = n(51670),
        y = n(74090),
        f = n(42341),
        b = n(32892),
        j = n(34832),
        w = n(54429),
        _ = n(6663),
        C = n(33255);
      let k = (e) => {
        var t, n, i, r;
        let {
            content: k,
            componentId: I,
            hasExtension: N = !1,
            hasExtensionBackground: T = !1,
            metadata: S,
            shouldAutoPlayMotion: F,
          } = e,
          M = !(0, c.V)();
        if (!k) return null;
        let {
            headline: z,
            subhead: E,
            sponsored: L = !1,
            fine_print: R,
            image_1x1: P = "",
            accessibility_text: A = "",
            background_color: O,
            alternate_text_color: B,
            link: D,
            motion_video: q,
            enhancement: V,
          } = k,
          U = (0, a.Lq)(P, "800"),
          W = null != (i = null == D ? void 0 : D.button_text) ? i : "",
          H = "white" === B,
          G = !O || (null == O ? void 0 : O.toUpperCase()) === "#FFFFFF",
          Y = (G || W) && !T,
          K = H && G,
          Q = (0, d._)((0, s._)({}, D), {
            link_tag: ""
              .concat(null != (r = null == D ? void 0 : D.link_tag) ? r : "")
              .concat(N ? " || story tile" : ""),
          }),
          Z = (0, a.ES)(D).toString(),
          $ = H && !!O,
          J = !!(null == D ||
          null == (n = D.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          X =
            (null == q ? void 0 : q.aspect_ratio_1x1) &&
            (null == q ? void 0 : q.alt_text)
              ? q.alt_text
              : A,
          ee = !!(null == q ? void 0 : q.aspect_ratio_1x1),
          et = (null == V ? void 0 : V.type) === "ribbon",
          en = (null == V ? void 0 : V.type) === "ribbon_border";
        return (0, l.jsx)(p.F, {
          useTrackers: h.k,
          linkTag: null == D ? void 0 : D.link_tag,
          sourceId: I,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: Z ? { type: "LINK", id: Z } : void 0,
          children: (0, l.jsxs)("div", {
            children: [
              en ? (0, l.jsx)(_.e, { content: V }) : null,
              (0, l.jsxs)(f.zu, {
                backgroundColor: O,
                className: m(
                  Y ? "show-border" : "",
                  en ? C.ribbonBorderClippedContent : ""
                ),
                color: K ? "dark" : B,
                children: [
                  et ? (0, l.jsx)(w.W, { content: V }) : null,
                  (0, l.jsx)(b.p, {
                    alt_text: X,
                    contentPoolMotionData:
                      null == q ? void 0 : q.aspect_ratio_1x1,
                    imageSrc: U,
                    options: { mediaButtonLeft: J },
                    shouldAutoPlay: F,
                    storyId: I,
                    children: (0, l.jsxs)(j.Y, {
                      children: [
                        (0, l.jsxs)(x.k, {
                          link: Q,
                          linkInfo: y.aZ,
                          style: { position: "relative" },
                          underline: "never",
                          storyId: I,
                          metadata: S,
                          children: [
                            (0, l.jsxs)(f.c5, {
                              className: "h-margin-t-tight",
                              children: [
                                (null == z ? void 0 : z.content)
                                  ? (0, l.jsx)(f.tm, {
                                      level: 2,
                                      children: (0, l.jsx)(g.Q4, {
                                        operation: z.content,
                                        suppressRed: $,
                                        container: "span",
                                      }),
                                    })
                                  : null,
                                (null == E ? void 0 : E.content)
                                  ? (0, l.jsx)(f.vz, {
                                      className: (
                                        null == R ? void 0 : R.content
                                      )
                                        ? "h-margin-b-tight"
                                        : "",
                                      children: (0, l.jsx)(g.Q4, {
                                        operation: E.content,
                                        container: "span",
                                        suppressRed: $,
                                        props: {
                                          className: "h-margin-b-tight",
                                        },
                                      }),
                                    })
                                  : null,
                                (null == R ? void 0 : R.content)
                                  ? (0, l.jsx)(o.aR, {
                                      children: (0, l.jsx)(g.Q4, {
                                        operation: R.content,
                                        container: "span",
                                        suppressRed: $,
                                        props: { className: "h-text-sm" },
                                      }),
                                    })
                                  : null,
                                L
                                  ? (0, l.jsx)("span", {
                                      className: "h-sr-only",
                                      children: "(Sponsored)",
                                    })
                                  : null,
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "h-position-relative",
                              children: [
                                (0, l.jsx)(f.k1, {
                                  src: U,
                                  alt: X,
                                  loading: M ? "lazy" : "eager",
                                }),
                                J
                                  ? (0, l.jsx)(v.k, { isMotionVideo: ee })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        W
                          ? (0, l.jsx)(x.k, {
                              link: Q,
                              linkInfo: y.aZ,
                              underline: "never",
                              storyId: I,
                              metadata: S,
                              children: (0, l.jsxs)(o.vR, {
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "link-text",
                                    children: W,
                                  }),
                                  (0, l.jsx)(u.h, { width: "24" }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      k.displayName = "LeadMobile";
      var I = n(75227);
      let N = (e) => {
        var t, n, i, r;
        let {
            content: k,
            componentId: N,
            hasExtension: T = !1,
            hasExtensionBackground: S = !1,
            metadata: F,
            shouldAutoPlayMotion: M,
          } = e,
          z = !(0, c.V)();
        if (!k) return null;
        let {
            amplified_headline: E,
            subhead: L,
            sponsored: R = !1,
            fine_print: P,
            image_1x1: A = "",
            accessibility_text: O = "",
            background_color: B,
            alternate_text_color: D,
            link: q,
            motion_video: V,
            enhancement: U,
          } = k,
          W = (0, a.Lq)(A, "800"),
          H = null != (i = null == q ? void 0 : q.button_text) ? i : "",
          G = "white" === D,
          Y = !B || (null == B ? void 0 : B.toUpperCase()) === "#FFFFFF",
          K = (Y || H) && !S,
          Q = G && Y,
          Z = (0, d._)((0, s._)({}, q), {
            link_tag: ""
              .concat(null != (r = null == q ? void 0 : q.link_tag) ? r : "")
              .concat(T ? " || story tile" : ""),
          }),
          $ = (0, a.ES)(q).toString(),
          J = G && !!B,
          X = !!(null == q ||
          null == (n = q.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          ee =
            (null == V ? void 0 : V.aspect_ratio_1x1) &&
            (null == V ? void 0 : V.alt_text)
              ? V.alt_text
              : O,
          et = !!(null == V ? void 0 : V.aspect_ratio_1x1),
          en = (null == U ? void 0 : U.type) === "ribbon",
          el = (null == U ? void 0 : U.type) === "ribbon_border";
        return (0, l.jsx)(p.F, {
          useTrackers: h.k,
          linkTag: null == q ? void 0 : q.link_tag,
          sourceId: N,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: $ ? { type: "LINK", id: $ } : void 0,
          children: (0, l.jsxs)("div", {
            children: [
              el ? (0, l.jsx)(_.e, { content: U }) : null,
              (0, l.jsxs)(f.zu, {
                backgroundColor: B,
                className: m(
                  K ? "show-border" : "",
                  el ? C.ribbonBorderClippedContent : ""
                ),
                color: Q ? "dark" : D,
                children: [
                  en ? (0, l.jsx)(w.W, { content: U }) : null,
                  (0, l.jsx)(b.p, {
                    alt_text: ee,
                    contentPoolMotionData:
                      null == V ? void 0 : V.aspect_ratio_1x1,
                    imageSrc: W,
                    options: { mediaButtonLeft: X },
                    shouldAutoPlay: M,
                    storyId: N,
                    children: (0, l.jsxs)(j.Y, {
                      children: [
                        (0, l.jsxs)(x.k, {
                          link: Z,
                          linkInfo: y.aZ,
                          style: { position: "relative" },
                          underline: "never",
                          storyId: N,
                          metadata: F,
                          children: [
                            (0, l.jsxs)(f.c5, {
                              children: [
                                (0, l.jsx)(f.tm, {
                                  level: 2,
                                  className: "h-margin-t-tight",
                                  children: (0, l.jsx)(I.P, {
                                    alt_color: Q ? "dark" : D,
                                    content: null != E ? E : {},
                                    specialChars: !0,
                                  }),
                                }),
                                (null == L ? void 0 : L.content)
                                  ? (0, l.jsx)(f.vz, {
                                      className: (
                                        null == P ? void 0 : P.content
                                      )
                                        ? "h-margin-b-default"
                                        : "",
                                      children: (0, l.jsx)(g.Q4, {
                                        operation: L.content,
                                        container: "span",
                                        suppressRed: J,
                                        props: {
                                          className: "h-margin-b-tight",
                                        },
                                      }),
                                    })
                                  : null,
                                (null == P ? void 0 : P.content)
                                  ? (0, l.jsx)(o.aR, {
                                      children: (0, l.jsx)(g.Q4, {
                                        operation: P.content,
                                        container: "span",
                                        suppressRed: J,
                                        props: { className: "h-text-sm" },
                                      }),
                                    })
                                  : null,
                                R
                                  ? (0, l.jsx)("span", {
                                      className: "h-sr-only",
                                      children: "(Sponsored)",
                                    })
                                  : null,
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "h-position-relative",
                              children: [
                                (0, l.jsx)(f.k1, {
                                  src: W,
                                  alt: ee,
                                  loading: z ? "lazy" : "eager",
                                }),
                                X
                                  ? (0, l.jsx)(v.k, { isMotionVideo: et })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        H
                          ? (0, l.jsx)(x.k, {
                              link: Z,
                              linkInfo: y.aZ,
                              underline: "never",
                              storyId: N,
                              metadata: F,
                              children: (0, l.jsxs)(o.vR, {
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "link-text",
                                    children: H,
                                  }),
                                  (0, l.jsx)(u.h, { width: "24" }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      N.displayName = "LeadMobileAmplified";
      var T = n(97099);
      let S = (e) => {
        var t, n, s, d;
        let {
            content: c,
            componentId: u,
            extensions: p = [],
            metadata: h,
            shouldAutoPlayMotion: m,
            styles: g,
          } = e,
          { screenSmMax: x } = (0, i.e)();
        if (!c) return null;
        let v = !!c.sponsored,
          y = !!c.amplified_headline,
          f = p.find((e) => "shoppable_carousel" === e),
          b = null == (t = c.extensions) ? void 0 : t.shoppable_carousel,
          j = !!(f && b),
          w = c.hero_background_color,
          _ = !w || "#FFFFFF" === w.toUpperCase(),
          C = null == g ? void 0 : g.background_color,
          I = null == g ? void 0 : g.bottom_margin,
          S = null != (n = null == g ? void 0 : g.position) ? n : "";
        if (j) {
          let e =
              null != (d = null == (s = c.link) ? void 0 : s.link_tag) ? d : "",
            t = (0, a.ms)(b, null != C ? C : w, e);
          return (0, l.jsxs)(o.Jt, {
            className: "extended ".concat(S),
            children: [
              (0, l.jsx)(o.vW, {
                backgroundColor: C || w,
                backgroundWhite: !C && _,
                children: (0, l.jsx)(o.bc, {
                  children: x
                    ? y
                      ? (0, l.jsx)(N, {
                          content: c,
                          componentId: u,
                          hasExtension: j,
                          hasExtensionBackground: j && !_,
                          metadata: h,
                          shouldAutoPlayMotion: m,
                        })
                      : (0, l.jsx)(k, {
                          content: c,
                          componentId: u,
                          hasExtension: j,
                          hasExtensionBackground: j && !_,
                          metadata: h,
                          shouldAutoPlayMotion: m,
                        })
                    : (0, l.jsx)(r.Z, {
                        content: c,
                        componentId: u,
                        hasExtension: j,
                        hasExtensionBackground: j && !_,
                        metadata: h,
                        shouldAutoPlayMotion: m,
                      }),
                }),
              }),
              (0, l.jsx)(o.JK, {
                backgroundColor: C || w,
                backgroundWhite: !C && _,
                children: (0, l.jsx)(T.PersonalizationCarousel, {
                  componentId: u,
                  content: t,
                  metadata: h,
                  options: { suppressHeadline: !0, isExtension: !0 },
                }),
              }),
              v ? (0, l.jsx)(o.gp, { "aria-hidden": !0 }) : null,
            ],
          });
        }
        return (0, l.jsxs)(o.Jt, {
          backgroundColor: null != C ? C : "",
          bottomMargin: I,
          className: S,
          children: [
            (0, l.jsx)(o.bc, {
              children: x
                ? y
                  ? (0, l.jsx)(N, {
                      content: c,
                      componentId: u,
                      metadata: h,
                      shouldAutoPlayMotion: m,
                    })
                  : (0, l.jsx)(k, {
                      content: c,
                      componentId: u,
                      metadata: h,
                      shouldAutoPlayMotion: m,
                    })
                : (0, l.jsx)(r.Z, {
                    content: c,
                    componentId: u,
                    metadata: h,
                    shouldAutoPlayMotion: m,
                  }),
            }),
            v ? (0, l.jsx)(o.gp, { "aria-hidden": !0 }) : null,
          ],
        });
      };
      S.displayName = "LeadComponent";
    },
    82154: (e, t, n) => {
      "use strict";
      n.d(t, {
        EM: () => _,
        IH: () => T,
        IO: () => y,
        Li: () => C,
        MQ: () => v,
        NO: () => g,
        Sw: () => x,
        UK: () => w,
        Ze: () => I,
        _9: () => S,
        _C: () => N,
        _H: () => k,
        bC: () => f,
        bP: () => F,
        bY: () => b,
        bx: () => M,
        hh: () => m,
        s4: () => j,
      });
      var l = n(77232),
        i = n(42773),
        o = n(98601);
      let { gray: a, white: r } = o.Tj.palette,
        s = o.gx.size,
        d = o.xe.generic,
        c = o.gx.lineHeight,
        u = "180px",
        p = "320px",
        h = "220px",
        m = l.I4.div.withConfig({ componentId: "sc-29c5b21c-0" })(
          [
            "display:grid;grid-template-columns:100%;grid-auto-rows:auto;gap:",
            ";&.grid-2-up{grid-template-columns:1fr 1fr;gap:",
            ";}&.grid-3-up{grid-template-columns:1fr 1fr 1fr;gap:",
            ";}&.grid-4-up{grid-template-columns:1fr 1fr 1fr 1fr;gap:",
            ";}",
          ],
          d.x4,
          d.x5,
          d.x5,
          d.x5
        ),
        g = l.I4.div.withConfig({ componentId: "sc-29c5b21c-1" })(
          [
            "position:relative;display:flex;flex-direction:column;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;height:100%;&.show-border{box-shadow:0 0 0 1px ",
            ";}&.multi-story-mobile{display:block;flex-direction:unset;padding-top:0;}& > .main-link{display:block;height:100%;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? r
              : a.darkest;
          },
          a.light
        ),
        x = l.I4.div.withConfig({ componentId: "sc-29c5b21c-2" })(
          [
            "position:relative;flex:1 1 50%;display:flex;align-items:center;justify-content:start;background-color:",
            ";&.small-container{flex:1 1 37.5%;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          }
        ),
        v = l.I4.img.withConfig({ componentId: "sc-29c5b21c-3" })([
          "display:block;position:relative;width:100%;height:auto;min-height:10px;min-width:10px;",
        ]),
        y = l.I4.div.withConfig({ componentId: "sc-29c5b21c-4" })(
          [
            "display:flex;color:inherit;flex-direction:column;padding:",
            ";width:100%;flex-grow:1;&.fill-white{background:white;color:",
            ";height:100%;}",
          ],
          d.x4,
          (e) => {
            var t;
            return "dark" === e.color ||
              "white" === e.color ||
              (null == (t = e.color) ? void 0 : t.toUpperCase()) === "#FFFFFF"
              ? a.darkest
              : e.color;
          }
        ),
        f = (0, l.I4)(i.D).withConfig({ componentId: "sc-29c5b21c-5" })(
          [
            "color:inherit;line-height:1.2em;margin-bottom:",
            ";&.amplified-poly{font-size:clamp(15px,calc(2vw - 1px),21px);}&.amplified{font-size:clamp(12px,calc(2.6vw - 1px),27px);&.small-lockup{font-size:clamp(15px,3.1879vw - 6.2953px,33px);}@media (max-width:",
            "){font-size:clamp(12px,calc(5vw - 1px),29px);&.small-lockup{font-size:clamp(12px,calc(5vw - 1px),35px);}}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(12px,calc(4.9vw - 1px),25px);}}}&.giftcard-lockup{font-size:clamp(12px,calc(3.2vw - 5px),27px);&.small-lockup{font-size:clamp(13px,2.8523vw - 6.0537px,29px);}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(12px,calc(5vw - 1px),37px);}}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(12px,calc(4.8vw - 1px),29px);}}}&.unit-per-lockup{font-size:clamp(12px,calc(2.4vw - 1px),27px);&.small-lockup{font-size:clamp(10.2px,2.3154vw - 5.2671px,24px);}@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),35px);&.small-lockup{font-size:clamp(14px,calc(4.7vw - 1px),39px);}}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(14px,calc(4.7vw - 1px),31px);}}}&.whole-number-lockup{font-size:clamp(20px,calc(3.8vw - 1px),46px);&.small-lockup{font-size:clamp(20px,-4.6577px + 3.6913vw,41px);}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(20px,calc(7vw - 1px),48px);}}@media (max-width:",
            "){&,&.small-lockup{font-size:clamp(18px,calc(7vw - 1px),42px);}}}",
          ],
          d.x1,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax,
          o.fi.smMax,
          o.fi.xsMax
        ),
        b = l.I4.p.withConfig({ componentId: "sc-29c5b21c-6" })(
          ["margin-bottom:", ";font-size:", ";line-height:19px;"],
          d.x1,
          s.text.base
        ),
        j = l.I4.p.withConfig({ componentId: "sc-29c5b21c-7" })(
          ["flex:0 0 ", "em;margin:0;font-size:", ";line-height:", ";"],
          c.heading,
          s.text.small,
          c.heading
        ),
        w = l.I4.div.withConfig({ componentId: "sc-29c5b21c-8" })(
          [
            "position:relative;background:#b3b3b3;box-shadow:0 0 0 1px ",
            ";overflow:hidden;border-radius:12px;width:100%;padding-top:56.25%;h3{background:#b3b3b3;height:1.2em;width:66%;margin-bottom:6px;}p{background:#eee;height:1em;width:95%;margin-top:3px;}p:last-child{width:88%;}&.pad-lockup{padding-top:50%;}",
          ],
          a.light
        ),
        _ = l.I4.div.withConfig({ componentId: "sc-29c5b21c-9" })([
          "position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;top:0;left:0;width:50%;aspect-ratio:1;background:#ccc;&::before{content:' ';display:block;width:45%;height:1.25em;background-color:#b3b3b3;margin-right:15%;margin-bottom:0.4em;}&::after{content:' ';display:block;width:60%;height:3.5em;background-color:#b3b3b3;}",
        ]),
        C = l.I4.div.withConfig({ componentId: "sc-29c5b21c-10" })(
          ["position:relative;width:", ";height:100%;margin-left:", ";"],
          (e) => (e.largeFormat ? p : e.isHero ? h : u),
          (e) => (e.isPrimary ? d.x3 : 0)
        ),
        k = l.I4.div.withConfig({ componentId: "sc-29c5b21c-11" })(
          [
            "color:inherit;background:",
            ";overflow:hidden;border-radius:12px;border:",
            ";height:100%;&:focus-within{border:dashed 1px ",
            ";}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : r;
          },
          (e) => {
            var t;
            return e.backgroundColor &&
              (null == (t = e.backgroundColor) ? void 0 : t.toUpperCase()) !==
                "#FFFFFF"
              ? "none"
              : "solid 1px rgba(0, 0, 0, 25%)";
          },
          a.darkest
        ),
        I = l.I4.div.withConfig({ componentId: "sc-29c5b21c-12" })([
          "position:relative;display:flex;flex-direction:column;height:100%;color:inherit;",
        ]),
        N = l.I4.div.withConfig({ componentId: "sc-29c5b21c-13" })([
          "position:relative;width:100%;padding-top:100%;",
        ]),
        T = l.I4.div.withConfig({ componentId: "sc-29c5b21c-14" })(
          ["position:relative;margin-bottom:", ";width:100%;"],
          d.x2
        ),
        S = l.I4.div.withConfig({ componentId: "sc-29c5b21c-15" })(
          [
            "position:relative;width:",
            ";height:100%;margin-bottom:",
            ";padding-bottom:",
            ";p{background:#eee;height:1em;width:100%;margin-bottom:4px;}p.headline{background:#c4c4c4;height:",
            ";width:90%;}p.fine-print{width:90%;margin-top:16px;}",
          ],
          (e) => (e.largeFormat ? p : e.isHero ? h : u),
          d.x4,
          (e) => (e.hasSponsoredContent ? d.x2 : 0),
          (e) => (e.isHero ? "35px" : "1.25em")
        ),
        F = l.I4.div.withConfig({ componentId: "sc-29c5b21c-16" })([
          "background:#b3b3b3;width:100%;height:auto;aspect-ratio:1;",
        ]),
        M = l.I4.div.withConfig({ componentId: "sc-29c5b21c-17" })([
          "font-size:clamp(12px,calc(4.5vw - 1px),26px);p{display:block;background:#c4c4c4;height:1em;width:4.5em;margin-top:0;margin-bottom:0.15em;}p.large-line{display:block;height:2.5em;width:6em;margin-top:0.25em;}",
        ]);
    },
    86506: (e, t, n) => {
      "use strict";
      n.d(t, {
        $O: () => h,
        $g: () => g,
        IK: () => d,
        JS: () => r,
        KY: () => f,
        L0: () => j,
        Q4: () => p,
        U_: () => b,
        VJ: () => x,
        YX: () => o,
        hJ: () => u,
        jQ: () => a,
        jr: () => y,
        o7: () => c,
        oY: () => s,
        rF: () => m,
        tg: () => l,
        xH: () => v,
        xx: () => i,
      });
      let l = "https://www.target.com/gift-registry",
        i = "regModeLP",
        o = "Add to registry",
        a = "Add to wish list",
        r = "Registry",
        s = "Wish list",
        d = "GG",
        c = "REGST",
        u = "REG",
        p = "CUSTOM",
        h = "WEDDING",
        m = "BABY",
        g = "CHARITY",
        x = "HOLIDAY",
        v = "RECOMMENDATION",
        y = "BUY_BOX",
        f = "GRID_CARD",
        b = "ADD_TO_REGISTRY",
        j = "TCIN";
    },
    88905: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var l = n(3576),
        i = n(37876),
        o = n(9394);
      let a = (e) =>
        (0, i.jsx)(
          o.I,
          (0, l._)(
            {
              _name: "MediaPlay",
              _src: "MediaPlay.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      a.displayName = "IconMediaPlay";
    },
    89528: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => a });
      var l = n(3576),
        i = n(37876),
        o = n(9394);
      let a = (e) =>
        (0, i.jsx)(
          o.I,
          (0, l._)(
            {
              _name: "MediaReplay",
              _src: "MediaReplay.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      a.displayName = "IconMediaReplay";
    },
    92067: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => a });
      var l = n(3576),
        i = n(37876),
        o = n(9394);
      let a = (e) =>
        (0, i.jsx)(
          o.I,
          (0, l._)(
            {
              _name: "MediaPause",
              _src: "MediaPause.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      a.displayName = "IconMediaPause";
    },
    92410: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      let l = {
        CUSTOM: "CUSTOM",
        WEDDING: "WEDDING",
        BABY: "BABY",
        CHARITY: "CHARITY",
        CHANNEL_WEB: "WEB",
        SUBCHANNEL_DESKTOP: "TGTWEB",
        SUBCHANNEL_TABLET: "TABLET",
        SUBCHANNEL_MOBILE: "MWEB",
      };
    },
    92543: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => l });
      let l = {
        errorMessageHeading: "Sorry, the item wasn’t added",
        errorMessage:
          "Sorry, this item can‘t be added to your registry right now. We can help if you keep getting this message.",
        errorMessageRegistry:
          "Sorry, this item can‘t be added to your registry right now. We can help if you keep getting this message.",
        errorMessageWishList:
          "Sorry, this item can‘t be added to your wish list right now. We can help if you keep getting this message.",
        targetPluseItemCanNotBeAddedToRegistry:
          "Target Plus™ items can’t be added to Target registries or wish lists. You can add this item to your cart and check out now, or add a similar item to your registry or wish list.",
        eligibleForRegistries: "Eligible for registries and wish lists",
        notEligibleForRegistriesAriaLabel:
          "why can’t I add this to registries?",
        buttonText: "Add item",
        buttonTextAriaLabel: "+ add item to registry and wish list",
        signIn: "Sign in",
        signInAriaLabel: "sign in to add item to registry and wish list",
        viewMyRegistry: "View my registry",
        viewMyWishlist: "View my wish list",
        isAddedToYourRegistry: "Is added to your registry",
        isAddedToYourWishList: "Is added to your wish list",
        areAddedToYourRegistry: "are added to your registry",
        areAddedToYourWishList: "are added to your wish list",
        chooseARegistry: "Choose a registry or wish list",
        registryAlert: "Registry and Wish list alert",
        createARegistry: "Create",
        cancel: "Cancel",
        findARegistry:
          "We didn’t find a registry or wish list for this account",
        or: "or",
        logInMessagePart2: " to add items to your registry or wish list",
      };
    },
    93286: (e, t, n) => {
      "use strict";
      n.d(t, { Q4: () => h });
      var l = n(37876),
        i = n(14232),
        o = n(79046),
        a = n(98601),
        r = n(77232);
      let { red: s } = a.Tj.palette,
        d = r.I4.span.withConfig({ componentId: "sc-84a07d6f-0" })(
          ["font-weight:", ";font-style:", ";text-decoration:", ";color:", ";"],
          (e) => {
            let { attributes: t } = e;
            return t.bold ? "bold" : "inherit";
          },
          (e) => {
            let { attributes: t } = e;
            return t.italic ? "italic" : "normal";
          },
          (e) => {
            let { attributes: t } = e;
            return t.underline ? "underline" : "none";
          },
          (e) => {
            let { textColor: t } = e;
            return "red" === t ? s.default : null != t ? t : "inherit";
          }
        ),
        c = r.I4.sup.withConfig({ componentId: "sc-84a07d6f-1" })(
          ["font-weight:", ";font-style:", ";text-decoration:", ";color:", ";"],
          (e) => {
            let { attributes: t } = e;
            return t.bold ? "bold" : "inherit";
          },
          (e) => {
            let { attributes: t } = e;
            return t.italic ? "italic" : "normal";
          },
          (e) => {
            let { attributes: t } = e;
            return t.underline ? "underline" : "none";
          },
          (e) => {
            let { textColor: t } = e;
            return "red" === t ? s.default : null != t ? t : "inherit";
          }
        ),
        u = r.I4.sub.withConfig({ componentId: "sc-84a07d6f-2" })(
          ["font-weight:", ";font-style:", ";text-decoration:", ";color:", ";"],
          (e) => {
            let { attributes: t } = e;
            return t.bold ? "bold" : "inherit";
          },
          (e) => {
            let { attributes: t } = e;
            return t.italic ? "italic" : "normal";
          },
          (e) => {
            let { attributes: t } = e;
            return t.underline ? "underline" : "none";
          },
          (e) => {
            let { textColor: t } = e;
            return "red" === t ? s.default : null != t ? t : "inherit";
          }
        );
      var p = n(74090);
      let h = (e) => {
        let {
            operation: t,
            specialChars: n = !1,
            simpleText: a = !1,
            container: r = "div",
            suppressRed: s = !1,
            props: h = {},
          } = e,
          m = a
            ? t
                .map((e) => {
                  let { attributes: t = {}, insert: n } = e,
                    l = (null == n ? void 0 : n.text)
                      ? n.text.replaceAll("\n", " ")
                      : "";
                  if (null == n ? void 0 : n.targetspecific)
                    switch (n.targetspecific.variant) {
                      case "bullseye-normal":
                      case "bullseye-large":
                        l = "Target ";
                        break;
                      case "bullseye-circle":
                        l = "Target Circle ";
                        break;
                      case "percent-off":
                        l = " percent off ";
                        break;
                      default:
                        l = "";
                    }
                  return (null == t ? void 0 : t.pricestylecents)
                    ? ".".concat(l)
                    : l;
                })
                .join("")
            : ((e, t, n) =>
                e.map((e, a) => {
                  var r, s, h;
                  let m,
                    g,
                    { attributes: x = {}, insert: v } = e,
                    y = n ? "inherit" : x.color,
                    f = "span",
                    b = null != (r = null == v ? void 0 : v.text) ? r : "",
                    j = [],
                    w = "",
                    _ = "",
                    C = {};
                  if (null == v ? void 0 : v.targetspecific) {
                    let e = (0, o.S)(v.targetspecific.variant, n, t);
                    j.push(e.textArrayItem),
                      (_ = null != (s = e.helperClass) ? s : ""),
                      (w = null != (h = e.screenReaderTextValue) ? h : ""),
                      (g = e.screenReaderHidden);
                  } else
                    j = b
                      .split(/([\n®℠™])/g)
                      .map((e, t) =>
                        /[®℠™]/.test(e)
                          ? (0, l.jsx)(
                              "span",
                              { className: "legal-symbol", children: e },
                              t
                            )
                          : /\n/.test(e)
                          ? (0, l.jsx)("br", {}, t)
                          : e
                      );
                  t
                    ? (((null == x ? void 0 : x.pricestylealt) ||
                        (null == x ? void 0 : x.pricestyleprice)) &&
                        (C = { fontFeatureSettings: '"ss01", "pnum"' }),
                      (null == x ? void 0 : x.pricestylecents) &&
                        ((C = { fontFeatureSettings: '"sups" on' }), (w = ".")),
                      (null == x ? void 0 : x.pricestyleproportionalnumbers) &&
                        (C = { fontFeatureSettings: '"pnum" on' }),
                      (null == x ? void 0 : x.pricestylefraction) &&
                        (null == v ? void 0 : v.text) &&
                        ((w = v.text),
                        (g = !0),
                        (j = [
                          b.replaceAll(/\d?\d\/\d?\d/g, (e) => {
                            let t = p.iA[e];
                            return t ? String.fromCodePoint(t) : e;
                          }),
                        ])))
                    : (null == x ? void 0 : x.pricestylecents) &&
                      (j = [".".concat(b)]),
                    (null == x ? void 0 : x.script) &&
                      (f = "super" === x.script ? "sup" : "sub");
                  let k = i.Children.map(j, (e, t) =>
                    (0, l.jsx)(i.Fragment, { children: e }, t)
                  );
                  switch (f) {
                    case "span":
                      m = (0, l.jsx)(d, {
                        "aria-hidden": g,
                        attributes: x,
                        textColor: y,
                        className: _,
                        style: C,
                        children: k,
                      });
                      break;
                    case "sup":
                      m = (0, l.jsx)(c, {
                        "aria-hidden": g,
                        attributes: x,
                        textColor: y,
                        className: _,
                        children: k,
                      });
                      break;
                    case "sub":
                      m = (0, l.jsx)(u, {
                        "aria-hidden": g,
                        attributes: x,
                        textColor: y,
                        className: _,
                        children: k,
                      });
                      break;
                    default:
                      m = (0, l.jsx)(d, {
                        "aria-hidden": g,
                        attributes: x,
                        textColor: y,
                        className: _,
                        children: k,
                      });
                  }
                  return (0, l.jsxs)(
                    i.Fragment,
                    {
                      children: [
                        w
                          ? (0, l.jsx)("span", {
                              className: "h-sr-only",
                              children: w,
                            })
                          : null,
                        m,
                      ],
                    },
                    "spanId-".concat(a)
                  );
                }))(t, n, s);
        return (0, i.createElement)(r, h, m);
      };
      h.displayName = "RenderDeltas";
    },
    93739: (e) => {
      e.exports = {
        ndsRatingStars: "styles_ndsRatingStars__uEZcs",
        stars: "styles_stars__qSyw1",
        count: "styles_count__GMzds",
        xsCount: "styles_xsCount__gSFoZ",
        smCount: "styles_smCount__4qur2",
        mdCount: "styles_mdCount__KSJUe",
        lgCount: "styles_lgCount__f8rKx",
        ratingMask: "styles_ratingMask__EcZBM",
        starSVG: "styles_starSVG__XPPkC",
        interactiveRatingStars: "styles_interactiveRatingStars__4_2Cc",
        interactiveStar: "styles_interactiveStar__oBSVN",
        srOnly: "styles_srOnly__F4Op5",
        ratingStar: "styles_ratingStar__Nn6eD",
        xs: "styles_xs__eguB9",
        sm: "styles_sm__nr2sL",
        md: "styles_md__zr2KZ",
        lg: "styles_lg__ua9F3",
        xsRatingStar: "styles_xsRatingStar__2DY9B",
        smRatingStar: "styles_smRatingStar__IPSmC",
        mdRatingStar: "styles_mdRatingStar__sXGTj",
        lgRatingStar: "styles_lgRatingStar__MzeQT",
      };
    },
    93760: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => C });
      var l = n(3576),
        i = n(62701),
        o = n(37876),
        a = n(55472),
        r = n(14010),
        s = n(94170),
        d = n(38810),
        c = n(15039),
        u = n(93286),
        p = n(19084),
        h = n(51670),
        m = n(37753),
        g = n(75227),
        x = n(74090),
        v = n(18022),
        y = n(42341),
        f = n(32892),
        b = n(34832),
        j = n(54429),
        w = n(6663),
        _ = n(33255);
      let C = (e) => {
        var t, n, C, k;
        let {
            componentId: I,
            content: N,
            hasExtension: T = !1,
            hasExtensionBackground: S = !1,
            isHero: F = !1,
            metadata: M,
            shouldAutoPlayMotion: z,
          } = e,
          { screenLg: E } = (0, a.e)(),
          L = !(0, r.V)();
        if (!N) return null;
        let {
            accessibility_text: R = "",
            alternate_text_color: P,
            amplified_headline: A,
            background_color: O,
            enhancement: B,
            fine_print: D,
            headline: q,
            hero_background_color: V,
            image_16x9: U = "",
            image_5x2: W = "",
            link: H,
            motion_video: G,
            sponsored: Y = !1,
            subhead: K,
            text_position: Q = "middleleft",
            type_stack: Z = "extralarge",
            width: $ = "100",
          } = N,
          J = W ? (0, m.Lq)(W, E ? "2400" : "1200") : null,
          X = (0, m.Lq)(U, E ? "1200" : "800"),
          ee = null != (C = null == H ? void 0 : H.button_text) ? C : "",
          et = "white" === P,
          en = !O || (null == O ? void 0 : O.toUpperCase()) === "#FFFFFF",
          el = !V || (null == V ? void 0 : V.toUpperCase()) === "#FFFFFF",
          ei = et && (!!O || !!J),
          eo = !!(null == H ||
          null == (n = H.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          ea = (0, i._)((0, l._)({}, H), {
            link_tag: ""
              .concat(null != (k = null == H ? void 0 : H.link_tag) ? k : "")
              .concat(T ? " || story tile" : ""),
          }),
          er = (0, m.ES)(H).toString(),
          es =
            (null == G ? void 0 : G.aspect_ratio_5x2) &&
            (null == G ? void 0 : G.alt_text)
              ? G.alt_text
              : R,
          ed = {
            topleft: { grid: "start left", align: "left" },
            topcenter: { grid: "start center", align: "center" },
            topright: { grid: "start right", align: "right" },
            middleleft: { grid: "center left", align: "left" },
            middle: { grid: "center center", align: "center" },
            middleright: { grid: "center right", align: "right" },
            bottomleft: { grid: "end left", align: "left" },
            bottomcenter: { grid: "end center", align: "center" },
            bottomright: { grid: "end right", align: "right" },
          },
          ec = !!(null == G ? void 0 : G.aspect_ratio_5x2),
          eu = (null == B ? void 0 : B.type) === "ribbon",
          ep = (null == B ? void 0 : B.type) === "ribbon_border";
        return (0, o.jsx)(s.F, {
          useTrackers: d.k,
          linkTag: null == H ? void 0 : H.link_tag,
          sourceId: I,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: er ? { type: "LINK", id: er } : void 0,
          children: (0, o.jsxs)("div", {
            children: [
              ep
                ? (0, o.jsx)(w.e, {
                    content: B,
                    ribbonStyle: F
                      ? { aspectRatio: "5 / 2", height: "auto" }
                      : {},
                  })
                : null,
              (0, o.jsxs)(y.RR, {
                backgroundColor: O,
                color: et && en && !J ? "dark" : P,
                className: c(
                  S ? "" : "show-border",
                  F && !el ? "hero-bg" : "",
                  ep ? _.ribbonBorderClippedContent : ""
                ),
                children: [
                  eu ? (0, o.jsx)(j.W, { content: B }) : null,
                  (0, o.jsx)(f.p, {
                    alt_text: es,
                    contentPoolMotionData:
                      null == G ? void 0 : G.aspect_ratio_5x2,
                    imageSrc: null != J ? J : "",
                    options: { videoTop: F, mediaButtonLeft: eo },
                    shouldAutoPlay: z,
                    storyId: I,
                    children: (0, o.jsxs)(b.Y, {
                      children: [
                        (0, o.jsxs)(p.k, {
                          link: ea,
                          linkInfo: x.aZ,
                          className: "h-display-block",
                          underline: "never",
                          storyId: I,
                          metadata: M,
                          children: [
                            (0, o.jsxs)(v.jH, {
                              widthPercent: J ? $ : "28",
                              position: ed[J ? Q : "middleleft"],
                              finePrintAdded: !!(null == D
                                ? void 0
                                : D.content),
                              className: Z,
                              children: [
                                (0, o.jsxs)(v.M4, {
                                  className:
                                    (eu || ep) && "topleft" === Q
                                      ? "h-margin-t-tight"
                                      : "",
                                  position: ed[J ? Q : "middleleft"],
                                  children: [
                                    (0, o.jsxs)(v.gY, {
                                      level: 2,
                                      className: Z,
                                      children: [
                                        (null == q ? void 0 : q.content) && !A
                                          ? (0, o.jsx)(u.Q4, {
                                              operation: q.content,
                                              suppressRed: ei,
                                              container: "span",
                                              specialChars: !0,
                                            })
                                          : null,
                                        A
                                          ? (0, o.jsx)(g.P, {
                                              alt_color:
                                                !et || O || J ? P : "dark",
                                              content: A,
                                              showTrademarks: E,
                                              specialChars: !0,
                                            })
                                          : null,
                                      ],
                                    }),
                                    (null == K ? void 0 : K.content)
                                      ? (0, o.jsx)(v.OM, {
                                          className: ""
                                            .concat(Z, " ")
                                            .concat(
                                              ee ? "h-margin-b-tight" : ""
                                            ),
                                          children: (0, o.jsx)(u.Q4, {
                                            operation: K.content,
                                            suppressRed: ei,
                                            container: "span",
                                            specialChars: !0,
                                          }),
                                        })
                                      : null,
                                    ee
                                      ? (0, o.jsx)("p", {
                                          children: (0, o.jsx)(v.F0, {
                                            children: ee,
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                                (null == D ? void 0 : D.content)
                                  ? (0, o.jsx)(v.HU, {
                                      widthPercent: J ? $ : "28",
                                      children: (0, o.jsx)(u.Q4, {
                                        operation: D.content,
                                        suppressRed: ei,
                                        container: "span",
                                      }),
                                    })
                                  : null,
                                Y
                                  ? (0, o.jsx)("span", {
                                      className: "h-sr-only",
                                      children: "(Sponsored)",
                                    })
                                  : null,
                              ],
                            }),
                            eo ? (0, o.jsx)(h.k, { isMotionVideo: ec }) : null,
                          ],
                        }),
                        J
                          ? (0, o.jsx)(v.Zo, {
                              src: J,
                              alt: es,
                              loading: L ? "lazy" : "eager",
                            })
                          : (0, o.jsx)(v.q1, {
                              src: X,
                              alt: R,
                              loading: L ? "lazy" : "eager",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      C.displayName = "LeadDesktop";
    },
    94520: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => C });
      var l = n(37876),
        i = n(14232),
        o = n(19351),
        a = n(939),
        r = n(77071),
        s = n(78994),
        d = n(93864),
        c = n(56562),
        u = n(9901),
        p = n(95636),
        h = n(27333),
        m = n(33232),
        g = n(55035),
        x = n(42252),
        v = n(70418),
        y = n(1800),
        f = n(77232),
        b = n(75570);
      let j = (0, f.I4)(b.N)
          .attrs({
            className:
              "h-text-xl h-display-flex h-flex-justify-center h-text-center h-text-bold",
          })
          .withConfig({ componentId: "sc-9d0012a4-0" })([
          "padding-top:60px;padding-bottom:60px;",
        ]),
        w = (e) => {
          var t, n;
          let {
              shoppableDrawerData: i,
              showAddToRegistryButton: o,
              handleViewMoreClick: a,
            } = e,
            r = v.o.buildURLWithParams(
              null != (t = i.global_link_url) ? t : "",
              { regMode: "REGST" }
            ),
            s = o ? r : i.global_link_url;
          return (0, l.jsx)(
            j,
            {
              "data-test": "shoppableDrawer-viewMoreLink",
              href: s,
              onClick: a,
              underline: "invert",
              children: (0, y.D4)(
                null != (n = i.global_link_text) ? n : "View more"
              ),
            },
            "global-lnk"
          );
        };
      w.displayName = "GlobalLinkComponent";
      let _ = () =>
        (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("span", {
              className: "h-text-bold",
              children: "Sorry, no items for this yet",
            }),
            (0, l.jsx)("span", { children: "Please try again later." }),
          ],
        });
      _.displayName = "NoItemsMessage";
      let C = (e) => {
        var t, n;
        let {
            addToCartTrackingPlacementType: v,
            componentId: y = "UNKNOWN",
            shoppableDrawerData: f,
          } = e,
          b = (0, o.z1)(),
          j = (0, p.JB)(),
          { asPath: C } = (0, x.rd)(),
          k = (0, i.useMemo)(
            () =>
              (null == C ? void 0 : C.includes("/gift-registry/dashboard")) ||
              (null == C
                ? void 0
                : C.includes("/gift-registry/browse-and-add-items")),
            [C]
          ),
          I =
            null != (n = null == (t = f.tcins) ? void 0 : t.replace(/\s+/g, ""))
              ? n
              : "",
          [N, T] = (0, h.t)({ tcins: I, pricing_store_id: j }),
          S = N((e) => (null == e ? void 0 : e.product_summaries)),
          [F, M] = (0, a.B)(S),
          z = (0, i.useCallback)(
            (e) => {
              let { tcin: t } = e;
              return () => {
                b.trackEvent({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    type: "click",
                    value: "".concat(y, "_ViewDetails_").concat(t),
                  },
                });
              };
            },
            [y, b]
          ),
          E = (0, i.useCallback)(() => {
            b.trackEvent({
              guest: { eventType: "customInteraction" },
              customInteraction: {
                value: "".concat(y, "_ShoppableDrawer_ViewMore"),
                type: "click",
              },
            });
          }, [y, b]);
        if (T.isFetching) return (0, l.jsx)(d.b, {});
        if (T.isError) return (0, l.jsx)(c.j, {});
        if (!S || !F) return null;
        if (0 === S.length) return (0, l.jsx)(c.j, { Message: _ });
        let L = !!f.global_link_url;
        return (0, l.jsxs)(u.c, {
          children: [
            null == F
              ? void 0
              : F.map((e, t) =>
                  (0, l.jsx)(
                    m.M,
                    {
                      debugName: "shoppable_drawer_with_atc",
                      queryResult: T,
                      queryResultFulfillment: M,
                      value: e,
                      children: (0, l.jsx)(r.i, {
                        actionButton: k
                          ? (0, l.jsx)(g.Q, {
                              buttonSize: "sm",
                              showPlpVersionButton: !0,
                              showPlpVersionButtonForBabyChecklistPage: !0,
                              slingshotComponentId: y,
                            })
                          : (0, l.jsx)(s.E, {
                              isIntentAware: !0,
                              placementType: v,
                              size: "sm",
                              willHaveProductContextFulfillmentDataForAddToCart:
                                !0,
                            }),
                        onViewDetailClick: z({
                          tcin: null == e ? void 0 : e.tcin,
                        }),
                        placementType: v,
                        willHaveProductContextFulfillmentDataForAddToCart: !0,
                      }),
                    },
                    "shoppable_drawer_with_atc_"
                      .concat(null == e ? void 0 : e.tcin, "_")
                      .concat(t)
                  )
                ),
            L
              ? (0, l.jsx)(w, {
                  handleViewMoreClick: E,
                  shoppableDrawerData: f,
                  showAddToRegistryButton: k,
                })
              : null,
          ],
        });
      };
      C.displayName = "ShoppableDrawerContent";
    },
    94616: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { StandardComponent: () => U });
      var l = n(37876),
        i = n(55472),
        o = n(18022),
        a = n(37753),
        r = n(3576),
        s = n(62701),
        d = n(14010),
        c = n(94170),
        u = n(38810),
        p = n(15039),
        h = n(19084),
        m = n(93286),
        g = n(75227),
        x = n(51670),
        v = n(74090),
        y = n(77232),
        f = n(42773),
        b = n(98601);
      let { gray: j, white: w } = b.Tj.palette,
        _ = b.gx.size,
        C = b.xe.generic,
        k = y.I4.div.withConfig({ componentId: "sc-6acc83d8-0" })(
          [
            "position:relative;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;padding-top:25%;&.show-border{box-shadow:0 0 0 1px rgb(0 0 0 / 20%);background-clip:padding-box;}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : w;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? w
              : j.darkest;
          }
        ),
        I = y.I4.div.withConfig({ componentId: "sc-6acc83d8-1" })(
          [
            "position:relative;display:flex;flex-direction:column;background:",
            ";color:",
            ";overflow:hidden;border-radius:12px;width:100%;height:100%;&.show-border{border:1px solid rgb(0 0 0 / 20%);}",
          ],
          (e) => {
            var t;
            return null != (t = e.backgroundColor) ? t : w;
          },
          (e) => {
            var t;
            return (null == (t = e.color) ? void 0 : t.indexOf("#")) === 0
              ? e.color
              : "white" === e.color
              ? w
              : j.darkest;
          }
        ),
        N = y.I4.div.withConfig({ componentId: "sc-6acc83d8-2" })(
          [
            "color:inherit;display:flex;flex-direction:column;padding:",
            ";width:100%;flex-grow:1;&.fill-white{background:white;color:",
            ";}@media (max-width:",
            "){padding:",
            ";}",
          ],
          C.x4,
          (e) => {
            var t;
            return "dark" === e.color ||
              "white" === e.color ||
              (null == (t = e.color) ? void 0 : t.toUpperCase()) === "#FFFFFF"
              ? j.darkest
              : e.color;
          },
          b.fi.xsMax,
          C.x3
        ),
        T = (0, y.I4)(f.D).withConfig({ componentId: "sc-6acc83d8-3" })(
          [
            "font-size:24px;line-height:27px;color:inherit;margin-bottom:",
            ";&.amplified{font-size:clamp(12px,calc(5vw - 1px),29px);@media (max-width:",
            "){font-size:clamp(12px,calc(4.9vw - 1px),25px);}}&.giftcard-lockup{font-size:clamp(12px,calc(5vw - 1px),37px);@media (max-width:",
            "){font-size:clamp(12px,calc(4.8vw - 1px),29px);}}&.unit-per-lockup{font-size:clamp(14px,calc(4.7vw - 1px),35px);@media (max-width:",
            "){font-size:clamp(14px,calc(4.7vw - 1px),31px);}}&.whole-number-lockup{font-size:clamp(20px,calc(7vw - 1px),48px);@media (max-width:",
            "){font-size:clamp(18px,calc(7vw - 1px),42px);}}",
          ],
          C.x2,
          b.fi.xsMax,
          b.fi.xsMax,
          b.fi.xsMax,
          b.fi.xsMax
        ),
        S = y.I4.p.withConfig({ componentId: "sc-6acc83d8-4" })(
          [
            "margin-bottom:",
            ";font-size:",
            ";line-height:19px;@media (max-width:",
            "){font-size:",
            ";}",
          ],
          C.x1,
          _.text.base,
          b.fi.xsMax,
          _.text.medium
        ),
        F = y.I4.div.withConfig({ componentId: "sc-6acc83d8-5" })([
          "position:relative;flex:1 1 50%;display:flex;align-items:center;justify-content:start;",
        ]),
        M = y.I4.img.withConfig({ componentId: "sc-6acc83d8-6" })([
          "display:block;position:relative;width:100%;height:auto;min-height:10px;min-width:10px;border-radius:12px 12px 0 0;&.amplified-lockup{border-radius:0 12px 0 0;}",
        ]);
      var z = n(34832),
        E = n(32892),
        L = n(54429),
        R = n(6663),
        P = n(33255);
      let A = (e) => {
        var t, n, y, f;
        let {
            content: b,
            componentId: j,
            hasExtension: w = !1,
            hasExtensionBackground: _ = !1,
            metadata: C,
            shouldAutoPlayMotion: I,
          } = e,
          { screenLg: N } = (0, i.e)(),
          T = !(0, d.V)();
        if (!b) return null;
        let {
            headline: S,
            amplified_headline: F,
            subhead: M,
            sponsored: A = !1,
            fine_print: O,
            image_4x1: B = "",
            image_16x9: D = "",
            accessibility_text: q = "",
            background_color: V,
            width: U = "100",
            alternate_text_color: W,
            text_position: H = "middleleft",
            type_stack: G = "extralarge",
            link: Y,
            motion_video: K,
            enhancement: Q,
          } = b,
          Z = B ? (0, a.Lq)(B, N ? "2400" : "1200") : null,
          $ = (0, a.Lq)(D, "800"),
          J = null != (y = null == Y ? void 0 : Y.button_text) ? y : "",
          X = "white" === W,
          ee = X && (!!V || !!Z),
          et = !!(null == Y ||
          null == (n = Y.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          en = (0, s._)((0, r._)({}, Y), {
            link_tag: ""
              .concat(null != (f = null == Y ? void 0 : Y.link_tag) ? f : "")
              .concat(w ? " || story tile" : ""),
          }),
          el = (0, a.ES)(Y).toString(),
          ei =
            (null == K ? void 0 : K.aspect_ratio_4x1) &&
            (null == K ? void 0 : K.alt_text)
              ? K.alt_text
              : q,
          eo = {
            topleft: { grid: "start left", align: "left" },
            topcenter: { grid: "start center", align: "center" },
            topright: { grid: "start right", align: "right" },
            middleleft: { grid: "center left", align: "left" },
            middle: { grid: "center center", align: "center" },
            middleright: { grid: "center right", align: "right" },
            bottomleft: { grid: "end left", align: "left" },
            bottomcenter: { grid: "end center", align: "center" },
            bottomright: { grid: "end right", align: "right" },
          },
          ea = !!(null == K ? void 0 : K.aspect_ratio_4x1),
          er = (null == Q ? void 0 : Q.type) === "ribbon",
          es = (null == Q ? void 0 : Q.type) === "ribbon_border";
        return (0, l.jsx)(c.F, {
          useTrackers: u.k,
          linkTag: null == Y ? void 0 : Y.link_tag,
          sourceId: j,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: el ? { type: "LINK", id: el } : void 0,
          children: (0, l.jsxs)("div", {
            children: [
              es ? (0, l.jsx)(R.e, { content: Q }) : null,
              (0, l.jsxs)(k, {
                backgroundColor: V,
                color: !X || V || Z ? W : "dark",
                className: p(
                  _ ? "" : "show-border",
                  es ? P.ribbonBorderClippedContent : ""
                ),
                children: [
                  er ? (0, l.jsx)(L.W, { content: Q }) : null,
                  (0, l.jsx)(E.p, {
                    alt_text: ei,
                    contentPoolMotionData:
                      null == K ? void 0 : K.aspect_ratio_4x1,
                    image_4x1: B,
                    options: { mediaButtonLeft: et },
                    shouldAutoPlay: I,
                    storyId: j,
                    children: (0, l.jsxs)(z.Y, {
                      children: [
                        (0, l.jsxs)(h.k, {
                          link: en,
                          linkInfo: v.lP,
                          underline: "never",
                          storyId: j,
                          metadata: C,
                          children: [
                            (0, l.jsxs)(o.jH, {
                              widthPercent: Z ? U : "50",
                              position: eo[Z ? H : "middleleft"],
                              finePrintAdded: !!(null == O
                                ? void 0
                                : O.content),
                              className: G,
                              children: [
                                (0, l.jsxs)(o.M4, {
                                  className:
                                    (er || es) && "topleft" === H
                                      ? "h-margin-t-tight"
                                      : "",
                                  position: eo[Z ? H : "middleleft"],
                                  children: [
                                    (0, l.jsxs)(o.gY, {
                                      level: 2,
                                      className: G,
                                      children: [
                                        (null == S ? void 0 : S.content) && !F
                                          ? (0, l.jsx)(m.Q4, {
                                              operation: S.content,
                                              suppressRed: ee,
                                              container: "span",
                                              specialChars: !0,
                                            })
                                          : null,
                                        F
                                          ? (0, l.jsx)(g.P, {
                                              alt_color:
                                                !X || V || Z ? W : "dark",
                                              content: F,
                                              showTrademarks: N,
                                              specialChars: !0,
                                            })
                                          : null,
                                      ],
                                    }),
                                    (null == M ? void 0 : M.content)
                                      ? (0, l.jsx)(o.OM, {
                                          className: ""
                                            .concat(G, " ")
                                            .concat(
                                              J ? "h-margin-b-tight" : ""
                                            ),
                                          children: (0, l.jsx)(m.Q4, {
                                            operation: M.content,
                                            suppressRed: ee,
                                            container: "span",
                                            specialChars: !0,
                                          }),
                                        })
                                      : null,
                                    J
                                      ? (0, l.jsx)("p", {
                                          children: (0, l.jsx)(o.F0, {
                                            children: J,
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                                (null == O ? void 0 : O.content)
                                  ? (0, l.jsx)(o.HU, {
                                      widthPercent: Z ? U : "50",
                                      children: (0, l.jsx)(m.Q4, {
                                        operation: O.content,
                                        suppressRed: ee,
                                        container: "span",
                                      }),
                                    })
                                  : null,
                                A
                                  ? (0, l.jsx)("span", {
                                      className: "h-sr-only",
                                      children: "(Sponsored)",
                                    })
                                  : null,
                              ],
                            }),
                            et ? (0, l.jsx)(x.k, { isMotionVideo: ea }) : null,
                          ],
                        }),
                        Z
                          ? (0, l.jsx)(o.Zo, {
                              src: Z,
                              alt: ei,
                              loading: T ? "lazy" : "eager",
                            })
                          : (0, l.jsx)(o.q1, {
                              src: $,
                              alt: q,
                              loading: T ? "lazy" : "eager",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      A.displayName = "StandardDesktop";
      var O = n(14232),
        B = n(7312);
      let D = (e) => {
        var t, n, i, g;
        let {
            content: y,
            componentId: f,
            hasExtension: b = !1,
            hasExtensionBackground: j = !1,
            metadata: w,
            shouldAutoPlayMotion: _,
          } = e,
          C = !(0, d.V)(),
          [k, F] = (0, O.useState)(0),
          [A, D] = (0, O.useState)(!1),
          q = (0, O.useRef)(null),
          V = (0, O.useCallback)(() => {
            A || D((e) => !e);
            let e = () => {
              var e;
              (null == q ? void 0 : q.current) &&
                F(
                  null == q || null == (e = q.current) ? void 0 : e.offsetHeight
                );
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [A]);
        if (!y) return null;
        let {
            headline: U,
            subhead: W,
            sponsored: H = !1,
            fine_print: G,
            image_16x9: Y = "",
            accessibility_text: K = "",
            background_color: Q,
            alternate_text_color: Z,
            link: $,
            motion_video: J,
            enhancement: X,
          } = y,
          ee = (0, a.Lq)(Y, "800"),
          et = null != (i = null == $ ? void 0 : $.button_text) ? i : "",
          en = "white" === Z,
          el = en && !!Q,
          ei = !Q || (null == Q ? void 0 : Q.toUpperCase()) === "#FFFFFF",
          eo = (0, s._)((0, r._)({}, $), {
            link_tag: ""
              .concat(null != (g = null == $ ? void 0 : $.link_tag) ? g : "")
              .concat(b ? " || story tile" : ""),
          }),
          ea = (0, a.ES)($).toString(),
          er = !!(null == $ ||
          null == (n = $.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          es =
            (null == J ? void 0 : J.aspect_ratio_16x9) &&
            (null == J ? void 0 : J.alt_text)
              ? J.alt_text
              : K,
          ed = !!(null == J ? void 0 : J.aspect_ratio_16x9),
          ec = (null == X ? void 0 : X.type) === "ribbon",
          eu = (null == X ? void 0 : X.type) === "ribbon_border";
        return (0, l.jsx)(c.F, {
          useTrackers: u.k,
          linkTag: null == $ ? void 0 : $.link_tag,
          sourceId: f,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: ea ? { type: "LINK", id: ea } : void 0,
          children: (0, l.jsxs)("div", {
            children: [
              eu ? (0, l.jsx)(R.e, { content: X }) : null,
              (0, l.jsxs)(I, {
                className: p(
                  ei && !j ? "show-border" : "",
                  eu ? P.ribbonBorderClippedContent : ""
                ),
                backgroundColor: Q,
                color: ei && en ? "dark" : Z,
                children: [
                  ec ? (0, l.jsx)(L.W, { content: X }) : null,
                  (0, l.jsx)(E.p, {
                    alt_text: es,
                    contentPoolMotionData:
                      null == J ? void 0 : J.aspect_ratio_16x9,
                    imageSrc: ee,
                    options: {
                      videoTop: !0,
                      mediaButtonLeft: er,
                      imgHeight: k.toString(),
                      showMediaButton: A,
                    },
                    shouldAutoPlay: _,
                    storyId: f,
                    children: (0, l.jsxs)(z.Y, {
                      children: [
                        (0, l.jsxs)(h.k, {
                          link: eo,
                          linkInfo: v.lP,
                          underline: "never",
                          storyId: f,
                          style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                          },
                          metadata: w,
                          children: [
                            (0, l.jsxs)("div", {
                              className: "h-position-relative",
                              children: [
                                (0, l.jsx)(M, {
                                  alt: es,
                                  loading: C ? "lazy" : "eager",
                                  onLoad: V,
                                  ref: q,
                                  src: ee,
                                }),
                                er
                                  ? (0, l.jsx)(x.k, { isMotionVideo: ed })
                                  : null,
                              ],
                            }),
                            (0, l.jsxs)(N, {
                              children: [
                                (null == U ? void 0 : U.content)
                                  ? (0, l.jsx)(T, {
                                      level: 2,
                                      children: (0, l.jsx)(m.Q4, {
                                        operation: U.content,
                                        container: "span",
                                        suppressRed: el,
                                      }),
                                    })
                                  : null,
                                (null == W ? void 0 : W.content)
                                  ? (0, l.jsx)(S, {
                                      className: (
                                        null == G ? void 0 : G.content
                                      )
                                        ? "h-margin-b-tight"
                                        : "",
                                      children: (0, l.jsx)(m.Q4, {
                                        operation: W.content,
                                        container: "span",
                                        props: (null == G ? void 0 : G.content)
                                          ? { className: "h-margin-b-tight" }
                                          : {},
                                        suppressRed: el,
                                      }),
                                    })
                                  : null,
                                (null == G ? void 0 : G.content)
                                  ? (0, l.jsx)(o.aR, {
                                      children: (0, l.jsx)(m.Q4, {
                                        operation: G.content,
                                        container: "span",
                                        props: { className: "h-text-sm" },
                                        suppressRed: el,
                                      }),
                                    })
                                  : null,
                                H
                                  ? (0, l.jsx)("span", {
                                      className: "h-sr-only",
                                      children: "(Sponsored)",
                                    })
                                  : null,
                              ],
                            }),
                          ],
                        }),
                        et
                          ? (0, l.jsx)(h.k, {
                              link: eo,
                              linkInfo: v.lP,
                              className: "h-display-block",
                              underline: "never",
                              storyId: f,
                              metadata: w,
                              children: (0, l.jsxs)(o.vR, {
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "link-text",
                                    children: et,
                                  }),
                                  (0, l.jsx)(B.h, { width: "24" }),
                                ],
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      D.displayName = "StandardMobile";
      let q = (e) => {
        var t, n, i, y;
        let {
            colorFlood: f = !1,
            componentId: b,
            content: j,
            hasExtension: w = !1,
            hasExtensionBackground: _ = !1,
            metadata: C,
          } = e,
          k = !(0, d.V)();
        if (!j) return null;
        let {
            amplified_headline: z,
            alternate_image_1x1: E,
            subhead: A,
            sponsored: O = !1,
            fine_print: D,
            image_1x1: q = "",
            accessibility_text: V = "",
            background_color: U,
            background_color_behavior: W,
            alternate_text_color: H,
            link: G,
            enhancement: Y,
          } = j,
          K = (0, a.Lq)(null != E ? E : q, "400"),
          Q = null != (i = null == G ? void 0 : G.button_text) ? i : "",
          Z = !!A || !!D,
          $ =
            "white" === H ||
            (null == H ? void 0 : H.toUpperCase()) === "#FFFFFF",
          J = !U || (null == U ? void 0 : U.toUpperCase()) === "#FFFFFF",
          X = (f && !J) || "simplified" === W,
          ee = (0, s._)((0, r._)({}, G), {
            link_tag: ""
              .concat(null != (y = null == G ? void 0 : G.link_tag) ? y : "")
              .concat(w ? " || story tile" : ""),
          }),
          et = (0, a.ES)(G).toString(),
          en = !!(null == G ||
          null == (n = G.detail) ||
          null == (t = n.multi_tcins)
            ? void 0
            : t.length),
          el = z ? (0, a.j1)(z.lockup) : "",
          ei = (null == Y ? void 0 : Y.type) === "ribbon",
          eo = (null == Y ? void 0 : Y.type) === "ribbon_border";
        return (0, l.jsx)(c.F, {
          useTrackers: u.k,
          linkTag: null == G ? void 0 : G.link_tag,
          sourceId: b,
          featureType: "CONTENT_POOL",
          clickType: "CONTENT",
          element: et ? { type: "LINK", id: et } : void 0,
          children: (0, l.jsxs)("div", {
            children: [
              eo ? (0, l.jsx)(R.e, { content: Y }) : null,
              (0, l.jsxs)(I, {
                className: p(
                  (J || Z) && !_ ? "show-border" : "",
                  eo ? P.ribbonBorderClippedContent : ""
                ),
                backgroundColor: U,
                color: J && $ ? "dark" : H,
                children: [
                  ei ? (0, l.jsx)(L.W, { content: Y }) : null,
                  (0, l.jsxs)(h.k, {
                    link: ee,
                    linkInfo: v.lP,
                    underline: "never",
                    storyId: b,
                    style: { display: "block", position: "relative" },
                    metadata: C,
                    children: [
                      (0, l.jsxs)(o.Ye, {
                        children: [
                          (0, l.jsx)(F, {
                            children: (0, l.jsx)(T, {
                              level: 2,
                              className: p(el, "h-margin-h-default"),
                              children: (0, l.jsx)(g.P, {
                                alt_color: $ && J ? "dark" : H,
                                content: null != z ? z : {},
                                specialChars: !0,
                              }),
                            }),
                          }),
                          (0, l.jsxs)(F, {
                            children: [
                              (0, l.jsx)(M, {
                                src: K,
                                alt: V,
                                className: "amplified-lockup",
                                loading: k ? "lazy" : "eager",
                              }),
                              en ? (0, l.jsx)(x.k, {}) : null,
                            ],
                          }),
                        ],
                      }),
                      A || D
                        ? (0, l.jsxs)(N, {
                            className: X ? "" : "fill-white",
                            color: f ? H : "dark",
                            children: [
                              (null == A ? void 0 : A.content)
                                ? (0, l.jsx)(S, {
                                    className: (null == D ? void 0 : D.content)
                                      ? "h-margin-b-default"
                                      : "",
                                    children: (0, l.jsx)(m.Q4, {
                                      operation: A.content,
                                      container: "span",
                                      props: (null == D ? void 0 : D.content)
                                        ? { className: "h-margin-b-tight" }
                                        : {},
                                      suppressRed: X && $,
                                    }),
                                  })
                                : null,
                              (null == D ? void 0 : D.content)
                                ? (0, l.jsx)(o.aR, {
                                    children: (0, l.jsx)(m.Q4, {
                                      operation: D.content,
                                      container: "span",
                                      props: { className: "h-text-sm" },
                                      suppressRed: X && $,
                                    }),
                                  })
                                : null,
                              O
                                ? (0, l.jsx)("span", {
                                    className: "h-sr-only",
                                    children: "(Sponsored)",
                                  })
                                : null,
                            ],
                          })
                        : null,
                    ],
                  }),
                  Q
                    ? (0, l.jsx)(h.k, {
                        link: ee,
                        linkInfo: v.lP,
                        className: "h-display-block",
                        underline: "never",
                        storyId: b,
                        metadata: C,
                        children: (0, l.jsxs)(o.vR, {
                          children: [
                            (0, l.jsx)("span", {
                              className: "link-text",
                              children: Q,
                            }),
                            (0, l.jsx)(B.h, { width: "24" }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
            ],
          }),
        });
      };
      q.displayName = "StandardMobileAmplified";
      var V = n(97099);
      let U = (e) => {
        var t, n, r, s, d;
        let {
            content: c,
            componentId: u,
            extensions: p = [],
            metadata: h,
            shouldAutoPlayMotion: m,
            styles: g,
          } = e,
          { screenSmMax: x } = (0, i.e)();
        if (!c) return null;
        let v = !!c.sponsored,
          y = !!c.amplified_headline,
          f = y
            ? (0, a.Xd)(null == (t = c.amplified_headline) ? void 0 : t.lockup)
            : null,
          b = p.find((e) => "shoppable_carousel" === e),
          j = null == (n = c.extensions) ? void 0 : n.shoppable_carousel,
          w = !!(b && j),
          _ = c.hero_background_color,
          C = !_ || "#FFFFFF" === _.toUpperCase(),
          k = null == g ? void 0 : g.background_color,
          I = null == g ? void 0 : g.bottom_margin,
          N = null != (r = null == g ? void 0 : g.position) ? r : "";
        if (w) {
          let e =
              null != (d = null == (s = c.link) ? void 0 : s.link_tag) ? d : "",
            t = (0, a.ms)(j, k || _, e);
          return (0, l.jsxs)(o.Jt, {
            className: "extended ".concat(N),
            children: [
              (0, l.jsx)(o.vW, {
                backgroundColor: k || _,
                backgroundWhite: !k && C,
                children: (0, l.jsx)(o.bc, {
                  children: x
                    ? y
                      ? (0, l.jsx)(q, {
                          colorFlood: "deals" === f,
                          componentId: u,
                          content: c,
                          hasExtension: w,
                          hasExtensionBackground: w && !C,
                          metadata: h,
                        })
                      : (0, l.jsx)(D, {
                          content: c,
                          componentId: u,
                          hasExtension: w,
                          hasExtensionBackground: w && !C,
                          metadata: h,
                          shouldAutoPlayMotion: m,
                        })
                    : (0, l.jsx)(A, {
                        content: c,
                        componentId: u,
                        hasExtension: w,
                        hasExtensionBackground: w && !C,
                        metadata: h,
                        shouldAutoPlayMotion: m,
                      }),
                }),
              }),
              (0, l.jsx)(o.JK, {
                backgroundColor: k || _,
                backgroundWhite: !k && C,
                children: (0, l.jsx)(V.PersonalizationCarousel, {
                  componentId: u,
                  content: t,
                  metadata: h,
                  options: { suppressHeadline: !0, isExtension: !0 },
                }),
              }),
              v ? (0, l.jsx)(o.gp, { "aria-hidden": !0 }) : null,
            ],
          });
        }
        return (0, l.jsxs)(o.Jt, {
          backgroundColor: null != k ? k : "",
          bottomMargin: I,
          className: null != N ? N : "",
          children: [
            (0, l.jsx)(o.bc, {
              children: x
                ? y
                  ? (0, l.jsx)(q, {
                      colorFlood: "deals" === f,
                      componentId: u,
                      content: c,
                      metadata: h,
                      shouldAutoPlayMotion: m,
                    })
                  : (0, l.jsx)(D, {
                      content: c,
                      componentId: u,
                      metadata: h,
                      shouldAutoPlayMotion: m,
                    })
                : (0, l.jsx)(A, {
                    content: c,
                    componentId: u,
                    hasExtensionBackground: !!k,
                    metadata: h,
                    shouldAutoPlayMotion: m,
                  }),
            }),
            v ? (0, l.jsx)(o.gp, { "aria-hidden": !0 }) : null,
          ],
        });
      };
      U.displayName = "StandardComponent";
    },
    96377: (e, t, n) => {
      var l = n(65793),
        i = n(65930),
        o = n(60524),
        a = parseFloat,
        r = Math.min,
        s = Math.random;
      e.exports = function (e, t, n) {
        if (
          (n && "boolean" != typeof n && i(e, t, n) && (t = n = void 0),
          void 0 === n &&
            ("boolean" == typeof t
              ? ((n = t), (t = void 0))
              : "boolean" == typeof e && ((n = e), (e = void 0))),
          void 0 === e && void 0 === t
            ? ((e = 0), (t = 1))
            : ((e = o(e)), void 0 === t ? ((t = e), (e = 0)) : (t = o(t))),
          e > t)
        ) {
          var d = e;
          (e = t), (t = d);
        }
        if (n || e % 1 || t % 1) {
          var c = s();
          return r(e + c * (t - e + a("1e-" + ((c + "").length - 1))), t);
        }
        return l(e, t);
      };
    },
    99933: (e, t, n) => {
      "use strict";
      n.d(t, { CB: () => c, Ce: () => s, M0: () => d, k5: () => r });
      var l = n(77232),
        i = n(6908),
        o = n(98601),
        a = n(50848);
      let r = (0, l.I4)(i.V).withConfig({ componentId: "sc-34b4e79f-0" })(
          [
            "height:auto;position:absolute;left:0;bottom:",
            ";top:",
            ";width:100%;img{border-radius:12px;height:auto;width:100%;}",
          ],
          (e) => {
            var t;
            return (null == e || null == (t = e.options) ? void 0 : t.videoTop)
              ? "auto"
              : "0";
          },
          (e) => {
            var t;
            return (null == e || null == (t = e.options) ? void 0 : t.videoTop)
              ? "0"
              : "auto";
          }
        ),
        s = l.I4.video.withConfig({ componentId: "sc-34b4e79f-1" })(
          [
            "position:absolute;left:0;bottom:",
            ";top:",
            ";width:100%;height:auto;opacity:0;z-index:-1;transition:opacity 500ms ease,z-index 0s step-end 1s;.app-panel-preview &{top:-19px;bottom:auto;}.video-playing &{transition:opacity 200ms ease 50ms,z-index 0s step-end 0s;z-index:0;opacity:1;overflow:hidden;}",
          ],
          (e) => {
            var t;
            return (null == e || null == (t = e.options) ? void 0 : t.videoTop)
              ? "auto"
              : "0";
          },
          (e) => {
            var t;
            return (null == e || null == (t = e.options) ? void 0 : t.videoTop)
              ? "0"
              : "auto";
          }
        ),
        d = (0, l.I4)(a.pk).withConfig({ componentId: "sc-34b4e79f-2" })(
          [
            "border:1px solid ",
            ";position:relative;button:active &,a:active &{svg{fill:",
            ";}}",
          ],
          o.Tj.palette.gray.light,
          o.Tj.palette.white
        ),
        c = l.I4.button.withConfig({ componentId: "sc-34b4e79f-3" })(
          [
            "position:absolute;padding:",
            ";inset:",
            " 0 ",
            " auto;opacity:0;pointer-events:auto;z-index:10;transform:translate(",
            ");&.is-visible{opacity:1;pointer-events:auto;}&:active,&:focus{outline:none;}",
          ],
          (e) => {
            var t;
            return (
              null == e || null == (t = e.options) ? void 0 : t.mediaButtonPanel
            )
              ? "16px"
              : "6px";
          },
          (e) => {
            var t;
            return (null == e || null == (t = e.options) ? void 0 : t.imgHeight)
              ? "calc("
                  .concat(e.options.imgHeight, "px - ")
                  .concat(o.xe.generic.x11, ")")
              : "auto";
          },
          (e) => {
            var t, n, l;
            return (null == e || null == (t = e.options) ? void 0 : t.imgHeight)
              ? "auto"
              : (
                  null == e || null == (n = e.options)
                    ? void 0
                    : n.mediaButtonHero
                )
              ? o.xe.generic.x11
              : (
                  null == e || null == (l = e.options)
                    ? void 0
                    : l.mediaButtonPanel
                )
              ? "52px"
              : "0";
          },
          (e) => {
            var t;
            return (
              null == e || null == (t = e.options) ? void 0 : t.ribbonShift
            )
              ? "-6px, -6px"
              : "0, 0";
          }
        );
    },
  },
]);
