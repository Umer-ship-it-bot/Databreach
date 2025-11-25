(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2305],
  {
    7415: (e, a, r) => {
      "use strict";
      r.d(a, { w4: () => d });
      var t = r(14232),
        n = r(58117),
        s = r(94682),
        i = r(6464);
      let l = "SDRAT_SUPRESS",
        o = "SDRAT_SUPRESS_COUNT",
        d = () => {
          let [e, a] = (0, t.useState)(!1),
            r = (0, t.useCallback)(() => n.Ay.remove(l), []),
            d = (0, t.useCallback)(() => n.Ay.remove(o), []),
            p = (0, t.useCallback)(async () => {
              var e;
              return null != (e = await n.Ay.get(o)) ? e : 0;
            }, []),
            c = (0, t.useCallback)(async () => {
              var e, a;
              let r = null != (e = await n.Ay.get(l)) && e,
                t = null == (a = await n.Ay.isExpired(l)) || a;
              return !!(r && !t);
            }, []),
            u = (0, t.useCallback)(
              (e) => {
                d(), r();
                let a = (function (e, a, r) {
                  let t = (0, i.a)(e, void 0);
                  return t.setTime(t.getTime() + 30 * s.Cg), t;
                })(new Date(), 0);
                return n.Ay.set(l, e, { expiry: a.getTime() });
              },
              [d, r]
            );
          (0, t.useEffect)(() => {
            (async () => {
              e || a(await c());
            })();
          }, [c, a, e]);
          let h = (0, t.useCallback)(() => {
              (async () => {
                if (e) return;
                let a = await p();
                a < 1 ? n.Ay.set(o, a + 1) : await u(!0);
              })();
            }, [e, p, u]),
            m = (0, t.useCallback)(() => {
              e || a(!0);
            }, [e]);
          return (0, t.useMemo)(
            () => [
              e,
              {
                suppressDrawer: h,
                suppressDrawerTemporarily: m,
                clearDrawerSuppressionCount: d,
                clearShouldSuppress: r,
              },
            ],
            [e, h, m, d, r]
          );
        };
    },
    13110: (e, a, r) => {
      "use strict";
      r.d(a, { G: () => em });
      var t = r(3576),
        n = r(62701),
        s = r(37876),
        i = r(14232),
        l = r(91049),
        o = r(48603),
        d = r(93967),
        p = r(85167),
        c = r(18551),
        u = r(50301),
        h = r(90210),
        m = r(95408),
        g = r(38146);
      let y = r(18847)(
        async () =>
          (
            await Promise.all([
              r.e(4755),
              r.e(6397),
              r.e(6097),
              r.e(2394),
              r.e(338),
              r.e(4534),
            ]).then(r.bind(r, 63664))
          ).LandingScreen
      );
      var f = r(18673),
        x = r(42773),
        k = r(43610),
        T = r(77232),
        v = r(98601);
      let b = T.I4.div.withConfig({ componentId: "sc-d4b6ecca-0" })(
        ["margin-top:-", ";"],
        v.xe.generic.x4
      );
      var P = r(57086),
        S = r(70418),
        _ = r(20881),
        C = r(19427);
      let { useMutation: w } = (0, P.k)({
        name: "@web/domain-guest/profile-same-day-memberships/post-shoppers",
        mutationFn: async (e) => {
          let { shopper_id: a } = e,
            {
              baseUrl: r,
              apiKey: t,
              apis: { guestProfileShiptMembershipsV1: n },
            } = (0, C.$)().services.apiPlatform,
            s = S.o.buildURLWithParams(
              "".concat(r, "/").concat(n.endpointPaths.shoppers),
              {}
            ),
            {
              data: i,
              ok: l,
              statusText: o,
            } = await (0, _.bE)(s, {
              body: JSON.stringify({ shopper_id: a }),
              credentials: "include",
              headers: { Accept: "application/json", "x-api-key": t },
            });
          if (l) return i;
          throw Error("".concat(o));
        },
      });
      var E = r(95500),
        D = r(91342),
        N = r(30134);
      T.I4.p.withConfig({ componentId: "sc-978a9d57-0" })(
        [
          "border-radius:",
          ";background-color:",
          ";font-size:",
          ";color:",
          ";padding:",
          ";margin-bottom:",
          ";text-align:left;vertical-align:middle;",
        ],
        v.PQ.radius.x1,
        v.Tj.background.lightest,
        v.gx.size.text.medium,
        v.Tj.text.onLight.secondary,
        v.xe.generic.x4,
        v.xe.generic.x4
      ),
        T.I4.div.withConfig({ componentId: "sc-978a9d57-1" })([
          "width:215px;height:215px;margin:0 auto;position:relative;",
        ]),
        T.I4.img.withConfig({ componentId: "sc-978a9d57-2" })([
          "position:absolute;top:85%;left:69%;",
        ]);
      let j = T.I4.div.withConfig({ componentId: "sc-978a9d57-3" })([
          "display:flex;flex-direction:column;height:100%;text-align:center;",
        ]),
        R = T.I4.div.withConfig({ componentId: "sc-978a9d57-4" })([
          "display:flex;flex-direction:column;flex-grow:1;justify-content:space-evenly;",
        ]),
        A = T.I4.div.withConfig({ componentId: "sc-978a9d57-5" })(
          [
            "display:flex;align-items:center;justify-content:center;width:62px;height:62px;border-radius:50%;background-color:",
            ";",
          ],
          v.Tj.loyalty.background.khaki.base
        ),
        I = T.I4.div.withConfig({ componentId: "sc-978a9d57-6" })([
          "margin-top:auto;",
        ]);
      var O = r(22033),
        L = r(15806);
      let M = (e) => {
        let {
            shopperId: a,
            shopperName: r,
            shopperPhoto: t,
            tipAmount: n,
            rating: l,
            headingText: o,
            isPreferredShopper: d,
            openManagePreferredShoppersDrawer: p,
            handleClose: c,
            postPreferredShoppersMutationIsLoading: u,
            orderId: h,
            addToPreferredShoppers: m,
            showManagePreferredShipper: y,
            showAddPreferredShopper: f,
          } = e,
          {
            trackDoNotSeePreferredShoppersClick: T,
            trackPreferredShopperAdditionClick: v,
            trackPreferredShopperDoNotAddClick: b,
            trackSeeYourPreferredShoppersClick: P,
          } = (0, O.y)(),
          S = d
            ? "".concat(r, " is currently one of your Preferred Shoppers")
            : "Would you like to add ".concat(
                r,
                " to your Preferred Shoppers?"
              ),
          _ = n
            ? (0, s.jsxs)("span", {
                className: "h-text-bs h-text-grayDark",
                children: [(0, D.P3)(n), " has been charged to your card"],
              })
            : null,
          C = (0, i.useCallback)(() => {
            v({ shopperId: a, orderId: h }), m();
          }, [m, h, a, v]),
          w = (0, i.useCallback)(() => {
            P(), p();
          }, [p, P]),
          E = (0, i.useCallback)(() => {
            T(), c();
          }, [c, T]),
          M = (0, i.useCallback)(() => {
            b(), c();
          }, [c, b]),
          F = (0, i.useMemo)(
            () =>
              (0, s.jsx)(L.R, {
                buttonPrimaryProps: {
                  onClick: u ? void 0 : w,
                  displayText: "See Your Preferred Shoppers",
                  showSpinner: !1,
                  spinnerDataTest: "manage-preferred-shoppers-spinner",
                },
                buttonSecondaryProps: {
                  onClick: E,
                  displayText: "Not right now",
                },
              }),
            [u, w, E]
          ),
          H = (0, i.useMemo)(
            () =>
              (0, s.jsx)(L.R, {
                buttonPrimaryProps: {
                  onClick: u ? void 0 : C,
                  displayText: "Add to Preferred Shoppers",
                  showSpinner: !1,
                  spinnerDataTest: "add-to-preferred-shoppers-spinner",
                },
                buttonSecondaryProps: {
                  onClick: M,
                  displayText: "Not this time",
                },
              }),
            [u, C, M]
          ),
          G = (0, i.useMemo)(
            () =>
              (0, s.jsx)(L.R, {
                buttonPrimaryProps: {
                  onClick: c,
                  displayText: "Done",
                  showSpinner: !1,
                },
              }),
            [c]
          ),
          B = (0, i.useCallback)(() => (y ? F : f ? H : G), [y, F, f, H, G]);
        return (0, s.jsxs)(j, {
          children: [
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(g.k3, { showSmallProfileImage: !0 }),
                (0, s.jsx)("div", {
                  className: "h-text-center h-margin-b-default h-margin-t-x6",
                  children: (0, s.jsx)(k.n, {
                    shopperName: r,
                    shopperPicture: t,
                    showDefaultImage: !1,
                    size: "small",
                  }),
                }),
              ],
            }),
            (0, s.jsx)(x.D, { level: 2, stackSpacing: "x2", children: o }),
            _,
            d || 5 === l
              ? (0, s.jsx)(R, {
                  children: (0, s.jsxs)("div", {
                    className:
                      "h-display-flex h-flex-direction-col h-flex-align-center ",
                    children: [
                      (0, s.jsx)(A, {
                        children: (0, s.jsx)(N.n, { width: 40 }),
                      }),
                      (0, s.jsx)(x.D, {
                        className: "h-margin-t-default",
                        level: 3,
                        stackSpacing: "x1",
                        children: S,
                      }),
                      (0, s.jsx)("span", {
                        className: "h-text-bs h-text-grayDark",
                        children: d
                          ? ""
                          : "We’ll match you with them again based on availability.",
                      }),
                    ],
                  }),
                })
              : null,
            (0, s.jsx)(I, { children: B() }),
          ],
        });
      };
      M.displayName = "PreferredShopperAddScreen";
      var F = r(83070);
      let H = T.I4.div.withConfig({ componentId: "sc-bfea15dd-0" })(
          [
            "display:flex;flex-direction:column;height:100%;padding:",
            ";text-align:center;",
          ],
          F.UTA
        ),
        G = (e) => {
          let { shopperName: a, shopperPhoto: r, tipAmount: t } = e,
            n = t && t > 0,
            i = t
              ? (0, s.jsxs)("span", {
                  className: "h-text-bs h-text-grayDark",
                  children: [(0, D.P3)(t), " has been charged to your card"],
                })
              : null;
          return (0, s.jsxs)(H, {
            children: [
              (0, s.jsxs)("div", {
                children: [
                  (0, s.jsxs)("div", {
                    className: "h-margin-b-default h-margin-t-x6",
                    children: [
                      (0, s.jsx)(g.k3, { showSmallProfileImage: !0 }),
                      (0, s.jsx)("div", {
                        className:
                          "h-text-center h-margin-b-default h-margin-t-x6",
                        children: (0, s.jsx)(k.n, {
                          shopperName: a,
                          shopperPicture: r,
                          showDefaultImage: !1,
                          size: "small",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)(x.D, {
                    level: 2,
                    stackSpacing: "x2",
                    children: "Thanks for ".concat(
                      n ? "tipping" : "rating",
                      " your shopper!"
                    ),
                  }),
                  i,
                ],
              }),
              (0, s.jsx)(R, {
                children: (0, s.jsxs)("div", {
                  className:
                    "h-display-flex h-flex-direction-col h-flex-align-center ",
                  children: [
                    (0, s.jsx)(A, { children: (0, s.jsx)(N.n, { width: 40 }) }),
                    (0, s.jsxs)(x.D, {
                      className: "h-margin-t-default",
                      level: 3,
                      stackSpacing: "x1",
                      children: [
                        "Great! ",
                        a,
                        " has been added to your preferred shoppers.",
                      ],
                    }),
                    (0, s.jsx)("span", {
                      className: "h-text-bs h-text-grayDark",
                      children:
                        "Manage your Preferred Shoppers in My Target under your Target Circle 360™ membership.",
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      G.displayName = "PreferredShopperSuccessScreen";
      let B = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            [, a] = (0, l.e)(
              (0, n._)((0, t._)({ shouldStack: !1 }, e), { type: "drawer" })
            ),
            r = (e) => {
              let {
                  shopper: r,
                  onAfterClose: t,
                  tipAmount: n,
                  onViewPreferredShoppers: l,
                } = e,
                o = null == r ? void 0 : r.name,
                d = null == r ? void 0 : r.photo,
                p = (0, i.useCallback)(() => {
                  l();
                }, [l]),
                c = (0, i.useCallback)(() => {
                  a.close(), t();
                }, [t]),
                u = (0, i.useMemo)(
                  () =>
                    (0, s.jsx)(L.R, {
                      buttonPrimaryProps: {
                        className: "h-padding-h-default",
                        onClick: p,
                        displayText: "View Preferred Shoppers",
                      },
                      buttonSecondaryProps: {
                        onClick: c,
                        className: "h-margin-v-none h-padding-h-default",
                        displayText: "Not right now",
                      },
                    }),
                  [c, p]
                ),
                h = (0, i.useCallback)(() => (0, s.jsx)(s.Fragment, {}), []),
                m = (0, i.useCallback)(() => u, [u]);
              return (0, s.jsx)(g.vq, {
                isOpen: a.isShown,
                onOpenChange: c,
                removeContentPadding: !0,
                renderFooter: m,
                renderHeading: h,
                type: "drawer-right",
                children: (0, s.jsx)(G, {
                  shopperName: null != o ? o : "Your shopper",
                  shopperPhoto: d,
                  tipAmount: n,
                }),
              });
            };
          return (
            (r.displayName = "PreferredShopperSuccessDrawer"),
            [(0, i.useCallback)(r, [a]), a]
          );
        },
        U = (e) => {
          let { shopperName: a, shopperPhoto: r } = e,
            t = (0, i.useCallback)(
              () =>
                (0, s.jsxs)(x.D, {
                  className: "h-margin-t-default",
                  level: 3,
                  stackSpacing: "x1",
                  children: ["Sorry, we couldn't add ", a, "."],
                }),
              [a]
            ),
            n = (0, i.useCallback)(
              () =>
                (0, s.jsx)("span", {
                  className: "h-text-bs h-text-grayDark",
                  children:
                    "Please try again. You can also add this shopper the next time you're matched.",
                }),
              []
            );
          return (0, s.jsxs)(g.B0, {
            children: [
              (0, s.jsx)(g.k3, { disabled: !0, showSmallProfileImage: !0 }),
              (0, s.jsx)(k.n, {
                isGrayscale: !0,
                isPreferredShopper: !0,
                shopperName: a,
                shopperPicture: r,
                size: "small",
              }),
              (0, s.jsx)(t, {}),
              (0, s.jsx)(n, {}),
            ],
          });
        };
      U.displayName = "PreferredShopperErrorScreen";
      let W = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [, a] = (0, l.e)(
            (0, n._)((0, t._)({ shouldStack: !1 }, e), { type: "drawer" })
          ),
          r = (e) => {
            let { shopper: r, onAfterClose: l, openSuccessDrawer: o } = e,
              { id: d, name: p, photo: c } = null != r ? r : {},
              [u, h] = (0, i.useState)(!1),
              [m, { isLoading: y }] = w(),
              f = (0, i.useCallback)(async () => {
                await m(
                  { shopper_id: d },
                  {
                    onSuccess: () => {
                      h(!0), o();
                    },
                  }
                );
              }, [m, d, o]),
              x = (0, i.useMemo)(
                () =>
                  (0, s.jsx)(L.R, {
                    buttonPrimaryProps: {
                      onClick: y ? void 0 : f,
                      displayText: "Try again",
                      showSpinner: y,
                      spinnerDataTest: "add-to-preferred-shoppers-spinner",
                    },
                    buttonSecondaryProps: {
                      onClick: a.close,
                      displayText: "Not this time",
                    },
                  }),
                [f, y]
              ),
              k = (0, i.useCallback)(
                (e) =>
                  (0, s.jsx)(
                    g.Vh,
                    (0, n._)((0, t._)({ disabled: !0 }, e), {
                      children: "Shopper not added",
                    })
                  ),
                []
              ),
              T = (0, i.useCallback)(() => x, [x]);
            return (0, s.jsx)(g.vq, {
              isOpen: a.isShown,
              onOpenChange: u ? void 0 : l,
              removeContentPadding: !0,
              renderFooter: T,
              renderHeading: k,
              type: "drawer-right",
              children: (0, s.jsx)(U, {
                shopperName: p || "your shopper",
                shopperPhoto: c,
              }),
            });
          };
        return (
          (r.displayName = "PreferredShoppeErrorDrawer"),
          [(0, i.useCallback)(r, [a]), a]
        );
      };
      var Y = r(38992);
      let q = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          [, a] = (0, l.e)(
            (0, n._)((0, t._)({ shouldStack: !1 }, e), { type: "drawer" })
          ),
          [r, { open: o }] = B(),
          [d, { open: p }] = W(),
          [c, { open: u }] = (0, Y.l)(),
          { trackPreferredShopperPageload: m } = (0, O.y)(),
          y = (e) => {
            let {
                isPreferredShopper: t,
                onAfterClose: n = () => {},
                orderId: l,
                shopper: y,
                tipAmount: f,
                rating: x,
              } = e,
              [k, { isLoading: T }] = w(),
              { id: v, name: b, photo: P } = null != y ? y : {};
            (0, i.useEffect)(() => {
              l && a.isShown && m({ orderId: l });
            }, [l]);
            let S = (0, i.useCallback)(async () => {
                await k(
                  { shopper_id: v },
                  {
                    onSuccess: () => {
                      (0, E.WG)(h.u), o();
                    },
                    onError: () => {
                      p();
                    },
                  }
                );
              }, [k, v]),
              _ = f && f > 0,
              C = (0, i.useCallback)(() => {
                a.close(), n();
              }, [n]);
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(g.vq, {
                  isOpen: a.isShown,
                  onOpenChange: C,
                  pageIdKey: "/sdd/rateAndTip/thankYou",
                  renderHeading: () => (0, s.jsx)(s.Fragment, {}),
                  type: "drawer-right",
                  children: (0, s.jsx)(M, {
                    addToPreferredShoppers: S,
                    handleClose: C,
                    headingText: "Thanks for ".concat(
                      _ ? "tipping" : "rating",
                      " your shopper!"
                    ),
                    isPreferredShopper: t,
                    openManagePreferredShoppersDrawer: u,
                    orderId: l,
                    postPreferredShoppersMutationIsLoading: T,
                    rating: x,
                    shopperId: v,
                    shopperName: b || "your shopper",
                    shopperPhoto: P,
                    showAddPreferredShopper: 5 === x,
                    showManagePreferredShipper: t,
                    tipAmount: f,
                  }),
                }),
                (0, s.jsx)(r, {
                  onAfterClose: n,
                  onViewPreferredShoppers: u,
                  shopper: y,
                  tipAmount: f,
                }),
                (0, s.jsx)(d, {
                  onAfterClose: n,
                  openSuccessDrawer: o,
                  shopper: y,
                }),
                (0, s.jsx)(c, { onAfterClose: n }),
              ],
            });
          };
        return (
          (y.displayName = "PreferredShopperDrawer"),
          [(0, i.useCallback)(y, [a, c, u, p, o, d, r, m]), a]
        );
      };
      var z = r(55777),
        V = r(87068);
      let $ = (0, T.I4)(z.a).withConfig({ componentId: "sc-2dfb231b-0" })([
        "max-width:375px;word-break:break-word;",
      ]);
      (0, T.I4)(V.$).withConfig({ componentId: "sc-2dfb231b-1" })(
        ["width:auto;margin-left:", ";margin-right:", ";margin-top:", ";"],
        F.oud,
        F.oud,
        F.Wto
      );
      let J = T.I4.div.withConfig({ componentId: "sc-2dfb231b-2" })([
          "height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;& img{height:148px;width:148px;}",
        ]),
        Q = () =>
          (0, s.jsxs)(J, {
            "data-test": "tip-drawer-error",
            children: [
              (0, s.jsx)(k.n, {
                showDefaultImage: !0,
                showThankYouDefault: !0,
                size: "medium",
              }),
              (0, s.jsx)(x.D, {
                className: "h-margin-a-default",
                level: 2,
                size: 3,
                children: "Thanks for the feedback",
              }),
              (0, s.jsx)("span", {
                className: "h-text-grayDark ",
                children:
                  "Your feedback helps us improve our Same Day Delivery service.",
              }),
            ],
          });
      Q.displayName = "ThankYouScreen";
      var K = r(7415),
        X = r(40123),
        Z = r(17379),
        ee = r(88137),
        ea = r(17800),
        er = r(19668);
      let { useQuery: et } = (0, Z.T)({
          name: er.lN,
          disableOnServer: !0,
          defaultOptions: { staleTime: er.DN },
          queryFn: async () => {
            let {
                apiKey: e,
                apis: {
                  orders: {
                    endpointPaths: { shiptPendingOrders: a },
                  },
                },
                baseUrl: r,
              } = (0, C.$)().services.apiPlatform,
              t = S.o.buildURLWithParams(new URL(a, r), {}),
              {
                data: n,
                ok: s,
                statusText: i,
              } = await (0, _.Jt)(t, {
                headers: { "x-api-key": e },
                credentials: "include",
              });
            if (s) return null != n ? n : null;
            throw Error("".concat(i));
          },
        }),
        en = (0, ea.L)(et, { minimumAssuranceLevel: ee.Bd }),
        { useQuery: es } = (0, Z.T)({
          name: "@web/domain-orders/post_order_tip_ratings/get-orders",
          disableOnServer: !0,
          queryFn: async (e) => {
            let {
                apiKey: a,
                apis: {
                  postOrderTipRatings: {
                    endpointPaths: { getOrdersV1: r },
                  },
                },
                baseUrl: n,
              } = (0, C.$)().services.apiPlatform,
              s = S.o.buildURLWithParams(r, (0, t._)({}, e), n),
              {
                data: i,
                ok: l,
                statusText: o,
              } = await (0, _.Jt)(s, {
                credentials: "include",
                headers: { "x-api-key": a },
              });
            if (l) return null != i ? i : null;
            throw Error("".concat(o));
          },
        }),
        ei = (0, ea.L)(es);
      var el = r(35881);
      let eo = (e) => (null == e ? void 0 : e.orders),
        ed = (e) => (null == e ? void 0 : e.tags),
        ep = (0, el.Mz)(eo, (e) => {
          var a;
          return null == e ||
            null ==
              (a = e.find(
                (e) => !e.feedback || X(null == e ? void 0 : e.feedback)
              ))
            ? void 0
            : a.id;
        }),
        { useQuery: ec } = (0, Z.T)({
          name: er.qL,
          disableOnServer: !0,
          defaultOptions: { staleTime: er.DN },
          queryFn: async (e) => {
            let { orderNumber: a } = e,
              {
                apiKey: r,
                apis: {
                  orders: {
                    endpointPaths: { shiptOrder: t },
                  },
                },
                baseUrl: n,
              } = (0, C.$)().services.apiPlatform,
              s = S.o.buildURLWithParams(new URL(t, n), {}),
              {
                data: i,
                ok: l,
                statusText: o,
              } = await (0, _.Jt)("".concat(s, "/").concat(a), {
                headers: { "x-api-key": r },
                credentials: "include",
              });
            if (l) return null != i ? i : null;
            throw Error("".concat(o));
          },
        }),
        eu = (0, ea.L)(ec, { minimumAssuranceLevel: ee.ov }),
        eh = function () {
          var e;
          let a,
            {
              carrier: r = "SHIPT",
              enabled: s = !0,
              orderNumber: l,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            [o] = (0, c.RJ)(void 0, { enabled: s }),
            d = !!o(u.UA),
            p = (0, m.Mv)("GLOBAL_POST_ORDER_TIP_RATINGS_ENABLED"),
            [h] = en(void 0, { enabled: !p && d && s }),
            g = h(
              l
                ? (e) => {
                    var a;
                    return null == e || null == (a = e.orders)
                      ? void 0
                      : a.find((e) => (null == e ? void 0 : e.id) === l);
                  }
                : (e) => {
                    var a;
                    return null == e || null == (a = e.orders) ? void 0 : a[0];
                  }
            ),
            [y] = ei({ carrier: r }, { enabled: p && d && s }),
            f = y(ed),
            x = null != (e = y(ep)) ? e : void 0,
            k = y(
              ((a = null != l ? l : x),
              (0, el.Mz)(eo, function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                return e.find((e) => e.id === a);
              }))
            ),
            T = k ? (0, n._)((0, t._)({}, k), { tags: f }) : void 0,
            v = p ? T : g;
          return {
            order:
              v && (!v.feedback || X(null == v ? void 0 : v.feedback))
                ? v
                : void 0,
            invalidateQueries: (0, i.useCallback)(() => {
              (0, E.gp)(en.queryName),
                (0, E.gp)(eu.queryName),
                (0, E.gp)(ei.queryName),
                (0, E.WG)(en),
                (0, E.WG)(eu),
                (0, E.WG)(ei);
            }, []),
          };
        },
        em = () => {
          let [, e] = (0, l.e)({ type: "drawer", shouldStack: !1 }),
            { trackRateAndTipPageload: a } = (0, O.y)(),
            [r, { open: T }] = q(),
            [v, { open: P }] = (() => {
              let [, e] = (0, l.e)({ type: "drawer", shouldStack: !1 }),
                a = (a) => {
                  var r, l, o;
                  let { order: d, onAfterClose: p } = a,
                    c = (0, i.useCallback)(() => {
                      e.close(), p();
                    }, [p]),
                    u = (0, i.useCallback)(
                      (e) =>
                        (0, s.jsx)(
                          g.Vh,
                          (0, n._)((0, t._)({}, e), {
                            children: "You're all set",
                          })
                        ),
                      []
                    ),
                    h = (0, i.useCallback)(
                      () =>
                        (0, s.jsx)(f.$, {
                          isFullWidth: !0,
                          onClick: c,
                          variant: "outlined",
                          children: "Close",
                        }),
                      [c]
                    );
                  return (0, s.jsxs)(g.vq, {
                    isOpen: e.isShown,
                    onOpenChange: c,
                    renderFooter: h,
                    renderHeading: u,
                    type: "drawer-right",
                    children: [
                      (0, s.jsx)(g.k3, { showSmallProfileImage: !0 }),
                      (0, s.jsx)(b, {}),
                      (0, s.jsxs)("div", {
                        className: "h-text-center h-margin-b-default",
                        children: [
                          (0, s.jsx)(k.n, {
                            shopperName:
                              null !=
                              (o =
                                null == d || null == (r = d.shopper)
                                  ? void 0
                                  : r.name)
                                ? o
                                : "your shopper",
                            shopperPicture:
                              null == d || null == (l = d.shopper)
                                ? void 0
                                : l.photo,
                            showDefaultImage: !1,
                            size: "small",
                          }),
                          (0, s.jsx)(x.D, {
                            className: "h-margin-t-default",
                            level: 3,
                            children: "This shopper has already been tipped",
                          }),
                          (0, s.jsx)("div", {
                            children: "Only one tip is allowed per order.",
                          }),
                        ],
                      }),
                    ],
                  });
                };
              return (
                (a.displayName = "DuplicateTipDrawer"),
                [(0, i.useCallback)(a, [e]), e]
              );
            })(),
            [S, { open: _ }] = (() => {
              let [, e] = (0, l.e)({ type: "drawer", shouldStack: !1 }),
                a = (a) => {
                  let { onAfterClose: r } = a,
                    t = (0, i.useCallback)(() => {
                      e.close(), r();
                    }, [r]);
                  return (0, s.jsx)($, {
                    isOpen: e.isShown,
                    onOpenChange: t,
                    renderFooter: () =>
                      (0, s.jsx)(f.$, {
                        isFullWidth: !0,
                        onClick: t,
                        variant: "filled",
                        children: "Done",
                      }),
                    renderHeading: () => (0, s.jsx)(s.Fragment, {}),
                    type: "drawer-right",
                    children: (0, s.jsx)(Q, {}),
                  });
                };
              return (
                (a.displayName = "ThankYouDrawer"),
                [(0, i.useCallback)(a, [e]), e]
              );
            })(),
            [C, w] = (0, i.useState)(),
            [E, D] = (0, i.useState)(null),
            [N, j] = (0, i.useState)(),
            R = (0, o.qf)(),
            A = (0, m.Mv)("GLOBAL_TRBUY_PREFERRED_SHOPPER_ENABLED"),
            [I, { suppressDrawerTemporarily: L }] = (0, K.w4)(),
            M = (0, i.useCallback)(() => {
              I || L();
            }, [I, L]),
            F = function () {
              var l;
              let { orderNumber: o } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                { order: m, invalidateQueries: f } = eh({ orderNumber: o });
              (0, i.useEffect)(() => {
                !m ||
                  C ||
                  I ||
                  (e.open(), w(!0), a({ orderId: null == m ? void 0 : m.id }));
              }, [m]),
                (0, i.useEffect)(() => {
                  I && C && (e.close(), w(!1));
                }, []);
              let x = (0, i.useCallback)(() => {
                  R ? f() : L(), w(!1);
                }, [f]),
                [k] = (0, c.RJ)(
                  { fields: ["paid", "shipt"] },
                  { enabled: e.isShown && A }
                ),
                b = k(u.LQ),
                [O, { status: F }] = (0, h.u)(void 0, {
                  enabled: e.isShown && b && A && R,
                  refetchOnMount: "always",
                }),
                H = null == m || null == (l = m.shopper) ? void 0 : l.id,
                G = O(),
                B =
                  !!G &&
                  G.some((e) => {
                    var a;
                    return (
                      (null == e || null == (a = e.shopper) ? void 0 : a.id) ===
                      H
                    );
                  }),
                U =
                  F !== p.RE.Error &&
                  (null == m ? void 0 : m.shopper) &&
                  A &&
                  b,
                W = (0, i.useCallback)(
                  (e, a) => {
                    U ? (D(e), j(a), T()) : _();
                  },
                  [U]
                ),
                Y = (0, i.useCallback)(() => P(), []),
                q = (0, i.useCallback)(
                  (e) =>
                    (0, s.jsx)(
                      g.iN,
                      (0, n._)((0, t._)({}, e), {
                        hasCloseButton: !R,
                        children: "Your order was delivered!",
                      })
                    ),
                  []
                );
              return (0, s.jsx)(d.H, {
                action: "error_boundary_shipt_tip_drawer",
                children: (0, s.jsxs)(g.uE, {
                  getOnClickCloseTrackingData: () => ({
                    featureType: "RATE_TIP_SHOPPER",
                    clickType: "CLOSE",
                  }),
                  hasDisabledCloseOptions: R,
                  hasHiddenCloseButton: !R,
                  isOpen: C,
                  onOpenChange: x,
                  pageIdKey: "SDD_RATEANDTIP",
                  removeContentPadding: !0,
                  renderHeading: q,
                  type: "drawer-right",
                  children: [
                    (0, s.jsx)(y, {
                      closeAndSuppressDrawer: M,
                      handleDuplicateTip: Y,
                      onTipFormSuccess: W,
                      order: m,
                    }),
                    (0, s.jsx)(S, { onAfterClose: x }),
                    (0, s.jsx)(r, {
                      isPreferredShopper: B,
                      onAfterClose: x,
                      orderId: null == m ? void 0 : m.id,
                      rating: N,
                      shopper: null == m ? void 0 : m.shopper,
                      tipAmount: E,
                    }),
                    (0, s.jsx)(v, { onAfterClose: x, order: m }),
                  ],
                }),
              });
            };
          return (
            (F.displayName = "RateAndTipDrawer"),
            [
              (0, i.useCallback)(F, [
                M,
                v,
                R,
                I,
                C,
                A,
                P,
                T,
                _,
                e,
                r,
                N,
                L,
                S,
                E,
                a,
              ]),
              e,
            ]
          );
        };
    },
    19668: (e, a, r) => {
      "use strict";
      r.d(a, {
        DN: () => t,
        Vv: () => i,
        gf: () => o,
        lN: () => n,
        m: () => l,
        qL: () => s,
      });
      let t = 3e5,
        n = "@web/domain-orders/get-pending-shipt-orders",
        s = "@web/domain-orders/get-shipt-order",
        i = "@web/domain-orders/post-shopper-rating-and-tip",
        l = { pending_order: !0, shipt_status: !0 },
        o = "/orders";
    },
    22033: (e, a, r) => {
      "use strict";
      r.d(a, { y: () => l });
      var t = r(14232),
        n = r(19351),
        s = r(60823),
        i = r(48680);
      let l = () => {
        let e = (0, n.z1)(),
          { trackClick: a } = (0, s.f)(),
          r = (0, t.useCallback)((e) => {
            if (!e) return;
            let a = Number(e.replace("%", ""));
            return Number.isNaN(a) ? void 0 : a;
          }, []),
          l = (0, t.useCallback)(
            (t) => {
              let {
                feedback: n,
                orderId: s,
                rating: l,
                tip: o,
                tipPercentage: d,
                tipType: p,
              } = t;
              e.trackEvent({
                guest: { eventType: "click" },
                appState: {
                  pageName: "rate and tip",
                  pageType: "rate and tip",
                  cmsPageId: "/rateAndTip/",
                  cmsPageType: "/rateAndTip/",
                },
                lnk: {
                  contentClick: {
                    componentType: "rate and tip: star rating : ".concat(l),
                    contentType: s,
                    componentSubType: o,
                    linkName: d,
                  },
                },
              });
              let c = d === i.AD ? void 0 : r(d);
              a.track({
                featureType: "RATE_TIP_SHOPPER",
                clickType: "SEND_FEEDBACK_TIP",
                sameDayDelivery: {
                  rate_and_tip: {
                    feedback: n,
                    star_rating: l,
                    tip_amount: Number(o),
                    tip_percentage: c,
                    tip_type: p,
                  },
                },
              });
            },
            [r, a, e]
          ),
          o = (0, t.useCallback)(() => {
            a.track({ featureType: "RATE_TIP_SHOPPER", clickType: "CLOSE" });
          }, [a]),
          d = (0, t.useCallback)(
            (a) => {
              let { orderId: r } = a;
              e.trackEvent({
                guest: { eventType: "pageload" },
                appState: {
                  pageName: "rate and tip: order details",
                  pageType: "rate and tip: order details",
                  cmsPageId: "/rateAndTip/orderDetails/",
                  cmsPageType: "/rateAndTip/orderDetails/",
                  previousPageName: "rate and tip",
                },
                components: [{ componentType: "rate and tip", contentType: r }],
              });
            },
            [e]
          ),
          p = (0, t.useCallback)(() => {
            a.track({
              featureType: "RATE_TIP_SHOPPER",
              clickType: "OPEN_ORDER_DETAILS",
            });
          }, [a]),
          c = (0, t.useCallback)(() => {
            a.track({ featureType: "VIEW_ORDER_SUMMARY", clickType: "BACK" });
          }, [a]),
          u = (0, t.useCallback)(
            (a) => {
              let { orderId: r } = a;
              e.trackEvent({
                guest: { eventType: "pageload" },
                appState: {
                  pageName: "rate and tip/favoriteshopper",
                  pageType: "rate and tip",
                  cmsPageId: "/rateAndTip/favoriteshopper",
                  cmsPageType: "/rateAndTip",
                },
                components: [
                  {
                    componentType: "rate and tip: Favorite shopper",
                    contentType: r,
                  },
                ],
              });
            },
            [e]
          ),
          h = (0, t.useCallback)(
            (r) => {
              let { shopperId: t, orderId: n } = r;
              e.trackEvent({
                guest: { eventType: "click" },
                appState: {
                  pageName: "rate and tip/favoriteshopper",
                  pageType: "rate and tip",
                  cmsPageId: "/rateAndTip/favoriteshopper",
                  cmsPageType: "/rateAndTip",
                },
                lnk: {
                  contentClick: {
                    component: "Shopper id: ".concat(t),
                    contentType: n,
                    componentType: "rate and tip: Favorite shopper added",
                  },
                },
              }),
                a.track({
                  featureType: "ADD_PREFERRED_SHOPPER",
                  clickType: "ADD_TO_PREFERRED_SHOPPERS",
                });
            },
            [a, e]
          ),
          m = (0, t.useCallback)(() => {
            a.track({
              featureType: "PREFERRED_SHOPPER_ADDED",
              clickType: "MANAGE_PREFERRED_SHOPPERS",
            });
          }, [a]),
          g = (0, t.useCallback)(() => {
            a.track({
              featureType: "PREFERRED_SHOPPER_ADDED",
              clickType: "NOT_NOW",
            });
          }, [a]),
          y = (0, t.useCallback)(() => {
            a.track({
              featureType: "ADD_PREFERRED_SHOPPER",
              clickType: "DO_NOT_ADD_PREFERRED_SHOPPER",
            });
          }, [a]),
          f = (0, t.useCallback)(
            (a) => {
              let { orderId: r } = a;
              e.trackEvent({
                guest: { eventType: "pageload" },
                appState: {
                  pageName: "rate and tip",
                  pageType: "rate and tip",
                  cmsPageId: "/rateAndTip/",
                  cmsPageType: "/rateAndTip/",
                },
                components: [{ componentType: "rate and tip", contentType: r }],
              });
            },
            [e]
          ),
          x = (0, t.useCallback)(() => {
            a.track({
              featureType: "RATE_TIP_SHOPPER",
              clickType: "RATE_AND_REVIEW",
            });
          }, [a]);
        return {
          trackCloseConfirmationContinueToTargetClick: (0,
          t.useCallback)(() => {
            a.track({
              featureType: "RATE_TIP_SHOPPER",
              clickType: "CONTINUE_TO_TARGET",
            });
          }, [a]),
          trackCloseConfirmationReviewShopperClick: x,
          trackCloseModalClick: o,
          trackDoNotSeePreferredShoppersClick: g,
          trackOrderDetailsLiteBackClick: c,
          trackOrderDetailsLiteOpenClick: p,
          trackOrderDetailsLitePageload: d,
          trackPreferredShopperAdditionClick: h,
          trackPreferredShopperDoNotAddClick: y,
          trackPreferredShopperPageload: u,
          trackRateAndTipPageload: f,
          trackRatingAndTipSubmissionClick: l,
          trackSeeYourPreferredShoppersClick: m,
        };
      };
    },
    22903: (e) => {
      e.exports = {
        ndsButtonGroup: "styles_ndsButtonGroup__Qf1z5",
        stacked: "styles_stacked__Y6hZn",
      };
    },
    30134: (e, a, r) => {
      "use strict";
      r.d(a, { n: () => i });
      var t = r(3576),
        n = r(37876),
        s = r(92388);
      let i = (e) =>
        (0, n.jsx)(
          s.k,
          (0, t._)(
            {
              _name: "Memberships",
              _src: "light/Memberships.svg",
              _viewBox: "0 0 32 32",
            },
            e
          )
        );
      i.displayName = "IconMemberships";
    },
    48680: (e, a, r) => {
      "use strict";
      r.d(a, {
        AD: () => t,
        Nd: () => s,
        Xj: () => l,
        _D: () => i,
        aP: () => o,
        mx: () => n,
      });
      let t = "custom",
        n = 422,
        s = 409,
        i = 402,
        l = {
          POOR_SUBSTITUTIONS: "poor_replacements",
          LATE_DELIVERY: "late_delivery",
          UNFRIENDLY_SHOPPER: "unfriendly_driver",
          WRONG_ITEMS: "wrong_items",
          DAMAGED_ITEMS: "damaged_items",
          MISSING_ITEMS: "missing_items",
          WENT_ABOVE_AND_BEYOND: "went_above_and_beyond",
          FRIENDLY: "friendly_driver",
          GOOD_COMMUNICATOR: "good_communication",
        },
        o = "Please review your Shipt shopper before continuing to Target.com.";
    },
    90750: (e, a, r) => {
      "use strict";
      r.d(a, { e: () => p });
      var t = r(3576),
        n = r(62701),
        s = r(65699),
        i = r(37876),
        l = r(15039),
        o = r(36730),
        d = r(22903);
      let p = (e) => {
        var { className: a, isStacked: r } = e,
          p = (0, s._)(e, ["className", "isStacked"]);
        return (0, i.jsx)(
          o.g,
          (0, n._)(
            (0, t._)({ className: l(d.ndsButtonGroup, r && d.stacked, a) }, p),
            { divider: "topOnlySmallScreen" }
          )
        );
      };
      p.displayName = "ButtonGroup";
    },
  },
]);
