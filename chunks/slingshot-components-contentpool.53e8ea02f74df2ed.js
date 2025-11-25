"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3601],
  {
    48847: (e, n, i) => {
      i.d(n, { E: () => p });
      var o = i(3576),
        t = i(62701),
        l = i(65699),
        r = i(37876),
        c = i(15039),
        a = i(44877),
        d = i(42773),
        s = i(43713);
      let p = (e) => {
        var {
            children: n,
            className: i,
            handleClose: p,
            id: h,
            headingRef: g,
            renderLeading: u,
            renderSubheading: x,
          } = e,
          b = (0, l._)(e, [
            "children",
            "className",
            "handleClose",
            "id",
            "headingRef",
            "renderLeading",
            "renderSubheading",
          ]);
        return (0, r.jsxs)(
          "div",
          (0, t._)((0, o._)({ className: c(s.heading, i) }, b), {
            children: [
              null == u ? void 0 : u(p),
              (0, r.jsxs)("div", {
                className: s.innerDiv,
                children: [
                  (0, r.jsx)(d.D, {
                    id: h,
                    level: 2,
                    ref: g,
                    stackSpacing: "0",
                    tabIndex: -1,
                    children: n,
                  }),
                  null == x ? void 0 : x(),
                ],
              }),
              (0, r.jsx)(a.w, { className: s.closeButton, onClick: p }),
            ],
          })
        );
      };
      p.displayName = "ModalHeading";
    },
    65110: (e, n, i) => {
      i.r(n), i.d(n, { AppPanelPreview: () => Q });
      var o = i(37876),
        t = i(77232),
        l = i(18673),
        r = i(42773),
        c = i(98601);
      let a = c.xe.generic,
        { gray: d, white: s } = c.Tj.palette,
        p = t.I4.div.withConfig({ componentId: "sc-159cca8b-0" })(
          [
            "position:relative;padding:",
            " 0;width:",
            "px;height:",
            "px;margin:0 auto;overflow:hidden;background-color:",
            ";",
          ],
          a.x4,
          390,
          550,
          (e) => e.backgroundColor
        ),
        h = t.I4.div.withConfig({ componentId: "sc-159cca8b-1" })(
          ["position:relative;overflow:hidden;width:", "px;height:", "px;"],
          390,
          518
        ),
        g = t.I4.div.withConfig({ componentId: "sc-159cca8b-2" })(
          [
            "position:relative;overflow:hidden;margin:0 auto;width:",
            "px;height:",
            "px;",
          ],
          324,
          518
        ),
        u = t.I4.div.withConfig({ componentId: "sc-159cca8b-3" })(
          [
            "position:relative;left:-",
            "px;width:calc(",
            "px * ",
            ");height:",
            "px;margin:0 ",
            ";display:grid;grid-template-columns:repeat(",
            ",",
            "px);grid-auto-rows:100%;gap:",
            ";transition:left 250ms ease-out;",
          ],
          (e) => 332 * e.displayStory,
          332,
          (e) => e.storyCount,
          518,
          a.x4,
          (e) => e.storyCount,
          324,
          a.x2
        ),
        x = t.I4.div.withConfig({ componentId: "sc-159cca8b-4" })(
          [
            "width:",
            "px;height:100%;border-radius:",
            ";background-color:",
            ";background-image:url(",
            ");background-position:center center;background-size:cover;background-repeat:no-repeat;color:",
            ";position:relative;overflow:hidden;",
          ],
          324,
          a.x4,
          (e) => {
            var n;
            return null != (n = e.backgroundColor) ? n : s;
          },
          (e) => {
            var n;
            return null != (n = e.backgroundImage) ? n : null;
          },
          (e) => {
            var n;
            return null != (n = e.color) ? n : d.darkest;
          }
        ),
        b = t.I4.div.withConfig({ componentId: "sc-159cca8b-5" })(
          [
            "padding:",
            " ",
            " 0;position:absolute;top:0;left:0;right:0;z-index:2;",
          ],
          a.x4,
          a.x4
        ),
        m = t.I4.div.withConfig({ componentId: "sc-159cca8b-6" })([
          "max-height:132px;flex-grow:0;overflow:hidden;mask:linear-gradient(rgb(0 0 0 / 100%) 0,rgb(0 0 0 / 100%) 100px,rgb(0 0 0 / 0%) 132px);",
        ]),
        v = t.I4.div.withConfig({ componentId: "sc-159cca8b-7" })(
          [
            "padding:",
            " ",
            " 0;position:absolute;z-index:",
            ";display:block;transition:opacity 500ms;top:0;left:0;width:100%;height:100%;overflow:hidden;background-color:rgb(0 0 0 / 50%);backdrop-filter:blur(12px);color:white;",
          ],
          a.x4,
          a.x4,
          (e) => (e.active ? "5" : "-5")
        ),
        f = t.I4.div.withConfig({ componentId: "sc-159cca8b-8" })(
          [
            "display:flex;flex-direction:row;align-items:center;justify-content:right;padding:",
            " 0 0;",
          ],
          a.x3
        ),
        w = (0, t.I4)(l.$).withConfig({ componentId: "sc-159cca8b-9" })([
          "background-color:transparent !important;color:inherit !important;font-weight:normal;text-align:right;",
        ]),
        I = (0, t.I4)(r.D).withConfig({ componentId: "sc-159cca8b-10" })(
          [
            "font-size:",
            "px;line-height:1.1;color:inherit;margin-bottom:",
            ";&.is-amplified{font-size:",
            ";}",
          ],
          28,
          a.x2,
          c.gx.size.heading.level3
        ),
        k = t.I4.p.withConfig({ componentId: "sc-159cca8b-11" })(
          [
            "margin-bottom:",
            ";font-size:",
            "px;line-height:1.3;color:inherit;",
          ],
          a.x2,
          14
        ),
        C = t.I4.p.withConfig({ componentId: "sc-159cca8b-12" })(
          ["margin:0;font-size:", "px;line-height:1.3;color:inherit;"],
          13
        ),
        j = t.I4.img.withConfig({ componentId: "sc-159cca8b-13" })([
          "position:absolute;bottom:0;display:block;width:100%;min-height:10px;min-width:10px;",
        ]),
        y = t.I4.div.withConfig({ componentId: "sc-159cca8b-14" })([
          "z-index:1;flex-grow:1;",
        ]),
        _ = (0, t.I4)(l.$).withConfig({ componentId: "sc-159cca8b-15" })(
          [
            "border-radius:50px;background-color:",
            ";border-color:",
            ";color:",
            ";",
          ],
          (e) => {
            var n;
            return null != (n = e.backgroundColor) ? n : c.Tj.palette.red;
          },
          (e) => {
            var n;
            return null != (n = e.backgroundColor) ? n : c.Tj.palette.red;
          },
          (e) => {
            var n;
            return null != (n = e.color) ? n : s;
          }
        );
      t.I4.div.withConfig({ componentId: "sc-159cca8b-16" })(
        [
          "position:absolute;bottom:0;left:0;background:white;margin:",
          ";padding:",
          ";width:calc(100% - ",
          ");height:40px;border-radius:50px;box-shadow:0 1px 4px rgb(0 0 0 / 25%);svg{height:23px;width:auto;opacity:0.5;}",
        ],
        a.x4,
        a.x2,
        a.x8
      ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-17" })([
          "position:absolute;width:100%;height:14px;bottom:90px;text-align:center;",
        ]),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-18" })(
          [
            "display:inline-block;line-height:0;background-color:",
            ";border-radius:7px;padding:4px 2px;",
          ],
          s
        ),
        t.I4.span.withConfig({ componentId: "sc-159cca8b-19" })(
          [
            "display:inline-block;height:6px;width:6px;border-radius:3px;margin:0 2px;background-color:",
            ";transition:width 250ms ease-out,background-color 250ms ease-out;&.current{width:24px;background-color:",
            ";}",
          ],
          d.light,
          d.medium
        );
      let N = t.I4.button.withConfig({ componentId: "sc-159cca8b-20" })(
        [
          "display:block;width:40px;height:",
          "px;position:absolute;z-index:8;top:0;background:transparent;&.panel-right{right:0;}&.panel-left{left:0;}",
        ],
        550
      );
      t.I4.div.withConfig({ componentId: "sc-159cca8b-21" })(
        [
          "position:absolute;top:",
          ";right:",
          ";width:74px;height:12px;svg{width:100%;}",
        ],
        a.x4,
        a.x5
      ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-22" })(
          [
            "position:absolute;top:",
            ";left:",
            ";height:12px;color:black;font-weight:bold;",
          ],
          a.x4,
          a.x6
        ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-23" })(
          [
            "position:absolute;top:44px;left:0;width:532px;padding:0 ",
            ";overflow:hidden;display:flex;flex-direction:row;",
          ],
          a.x4
        ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-24" })(
          [
            "display:inline-flex;flex-direction:row;align-items:center;width:250px;height:50px;padding:10px;margin-right:",
            ";border-radius:50px;background:rgb(255 255 255 / 66%);&::before{content:'';display:inline-block;width:30px;height:30px;background:#999;border-radius:50%;}&::after{content:'';display:inline-block;flex-grow:1;height:20px;margin:0 15px;background:#ccc;}",
          ],
          a.x4
        ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-25" })(
          [
            "position:relative;width:calc(100% - ",
            ");height:42px;margin:",
            " ",
            " ",
            ";display:grid;grid-template-columns:repeat(5,1fr);column-gap:",
            ";",
          ],
          a.x6,
          a.x2,
          a.x3,
          a.x6,
          a.x2
        ),
        t.I4.div.withConfig({ componentId: "sc-159cca8b-26" })(
          [
            "display:flex;flex-direction:column;align-items:center;&::before{content:'';display:inline-block;width:24px;height:24px;background-color:",
            ";border-radius:50%;margin-bottom:6px;}&::after{content:'';display:inline-block;width:80%;height:11px;background-color:",
            ";}",
          ],
          d.light,
          d.light
        );
      var z = i(14232),
        S = i(93286),
        P = i(37753),
        T = i(75227),
        R = i(32892),
        E = i(34832),
        M = i(54429),
        B = i(6663),
        D = i(33255);
      let L = (e) => {
        let { content: n } = e,
          [i, t] = (0, z.useState)(!1),
          [r, c] = (0, z.useState)(!1),
          a = (0, z.useRef)(null);
        if (
          ((0, z.useEffect)(() => {
            if (null !== a.current) {
              let { height: e } = a.current.getBoundingClientRect();
              e > 125 && c(!0);
            }
          }, []),
          !n)
        )
          return null;
        let {
            amplified_headline: d,
            headline: s,
            subhead: p,
            fine_print: h,
            image_1x1: g = "",
            image_7x12: u,
            accessibility_text: N = "",
            background_color: L,
            alternate_text_color: A,
            call_to_action_button_style: Q,
            enhancement: $,
            motion_video: q,
          } = n,
          X =
            (null == q ? void 0 : q.aspect_ratio_7x12) &&
            (null == q ? void 0 : q.alt_text)
              ? q.alt_text
              : N,
          F = null == Q ? void 0 : Q.button_copy,
          H = null == Q ? void 0 : Q.text_color,
          W = null == Q ? void 0 : Q.background_color,
          Y = null == Q ? void 0 : Q.button_type,
          G = (null == $ ? void 0 : $.type) === "ribbon",
          J = (null == $ ? void 0 : $.type) === "ribbon_border",
          K = () => {
            t(!i);
          },
          O = () =>
            Y
              ? (0, o.jsx)(y, {
                  children: (0, o.jsx)(l.$, {
                    variant: Y,
                    size: "sm",
                    children: F,
                  }),
                })
              : (0, o.jsx)(y, {
                  children: (0, o.jsx)(_, {
                    backgroundColor: W,
                    color: H,
                    size: "sm",
                    children: F,
                  }),
                }),
          U = (e) =>
            (0, o.jsxs)(o.Fragment, {
              children: [
                d
                  ? (0, o.jsx)(I, {
                      className: "is-amplified",
                      level: 1,
                      children: (0, o.jsx)(T.P, {
                        alt_color: e ? "white" : A,
                        content: null != d ? d : {},
                        specialChars: !0,
                      }),
                    })
                  : (null == s ? void 0 : s.content)
                  ? (0, o.jsx)(I, {
                      level: 1,
                      children: (0, o.jsx)(S.Q4, {
                        operation: s.content,
                        container: "span",
                        suppressRed: !!e || ee,
                      }),
                    })
                  : null,
                (null == p ? void 0 : p.content)
                  ? (0, o.jsx)(k, {
                      children: (0, o.jsx)(S.Q4, {
                        operation: p.content,
                        container: "span",
                        suppressRed: !!e || ee,
                      }),
                    })
                  : null,
                (null == h ? void 0 : h.content)
                  ? (0, o.jsx)(C, {
                      children: (0, o.jsx)(S.Q4, {
                        operation: h.content,
                        container: "span",
                        suppressRed: !!e || ee,
                      }),
                    })
                  : null,
              ],
            }),
          V = (0, P.Lq)(g, "720"),
          Z = u ? (0, P.Lq)(u, "934") : "",
          ee = "white" === A && !!L;
        return (0, o.jsxs)("div", {
          style: { position: "relative", width: "100%", height: "100%" },
          children: [
            J ? (0, o.jsx)(B.e, { content: $, size: "sm" }) : null,
            (0, o.jsxs)(x, {
              backgroundColor: L,
              backgroundImage: Z,
              className: J ? D.ribbonBorderClippedContent : "",
              color: i ? "white" : A,
              children: [
                G ? (0, o.jsx)(M.W, { content: $, size: "sm" }) : null,
                (0, o.jsx)(R.p, {
                  alt_text: X,
                  contentPoolMotionData:
                    null == q ? void 0 : q.aspect_ratio_7x12,
                  imageSrc: null != Z ? Z : "",
                  options: { showMediaButton: !0 },
                  className: "app-panel-preview",
                  shouldAutoPlay: !0,
                  children: (0, o.jsxs)(E.Y, {
                    children: [
                      (0, o.jsxs)(b, {
                        className: "h-margin-t-tight",
                        children: [
                          (0, o.jsx)(m, { children: U(!1) }),
                          (0, o.jsxs)(f, {
                            children: [
                              F && !i ? O() : null,
                              r
                                ? (0, o.jsx)(w, {
                                    "aria-hidden": !0,
                                    variant: "bare",
                                    size: "sm",
                                    onClick: K,
                                    children: "...More",
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      u ? null : (0, o.jsx)(j, { src: V, alt: N }),
                    ],
                  }),
                }),
              ],
            }),
            (0, o.jsxs)(v, {
              active: i,
              children: [
                (0, o.jsx)("div", { ref: a, children: U(i) }),
                (0, o.jsxs)(f, {
                  className: "h-padding-h-none",
                  children: [
                    F ? O() : null,
                    (0, o.jsx)(w, {
                      "aria-hidden": !0,
                      variant: "bare",
                      size: "sm",
                      treatment: "inverse",
                      onClick: K,
                      children: "...Less",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      L.displayName = "SinglePanel";
      let A = (e) => {
        var n;
        let { content: i } = e,
          t = null != (n = null == i ? void 0 : i.stories) ? n : [],
          [l, r] = (0, z.useState)(0),
          [c, a] = (0, z.useState)({}),
          d = () => {
            l !== t.length - 1 && r(l + 1);
          },
          s = () => {
            0 !== l && r(l - 1);
          };
        return (0, o.jsxs)("div", {
          onTouchStart: (e) => {
            a(e);
          },
          onTouchEnd: (e) => {
            var n, i, o, t;
            if (!c.changedTouches || !e.changedTouches) return;
            let l =
              (null !=
              (o = null == (n = c.changedTouches[0]) ? void 0 : n.screenX)
                ? o
                : 0) -
              (null !=
              (t = null == (i = e.changedTouches[0]) ? void 0 : i.screenX)
                ? t
                : 0);
            l > 50 && d(), l < 50 && s();
          },
          children: [
            (0, o.jsx)(u, {
              storyCount: t.length,
              displayStory: l,
              children: t.map((e, n) =>
                (0, o.jsx)(
                  L,
                  { content: e },
                  "panel_".concat(e.componentId, "_").concat(n)
                )
              ),
            }),
            (0, o.jsx)(N, {
              className: "panel-left",
              onClick: s,
              "aria-label": "previous panel",
            }),
            (0, o.jsx)(N, {
              className: "panel-right",
              onClick: d,
              "aria-label": "next panel",
            }),
          ],
        });
      };
      A.displayName = "MultiStoryPanel";
      let Q = (e) => {
        var n, i;
        let { componentId: t, content: l, metadata: r, styles: c } = e;
        if (!(null == l || null == (n = l.stories) ? void 0 : n.length))
          return null;
        let a = l.stories,
          d =
            null != (i = null == c ? void 0 : c.background_color) ? i : "white";
        return 1 === a.length
          ? (0, o.jsx)(p, {
              backgroundColor: d,
              children: (0, o.jsx)(g, {
                children: (0, o.jsx)(L, {
                  componentId: t,
                  content: a[0],
                  metadata: r,
                }),
              }),
            })
          : (0, o.jsx)(p, {
              backgroundColor: d,
              children: (0, o.jsx)(h, {
                children: (0, o.jsx)(A, {
                  componentId: t,
                  content: l,
                  metadata: r,
                }),
              }),
            });
      };
      Q.displayName = "AppPanelPreview";
    },
  },
]);
