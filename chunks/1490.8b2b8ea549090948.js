(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1490, 9195],
  {
    3093: (e, t, n) => {
      "use strict";
      n.d(t, {
        CP: () => a,
        Cf: () => u,
        MT: () => o,
        Sh: () => d,
        Tl: () => i,
        Y: () => l,
        Z5: () => r,
        kr: () => c,
        pN: () => s,
      });
      let l = (e) => (null == e ? void 0 : e.recommended_products),
        i = (e) => (null == e ? void 0 : e.recommended_products),
        a = (e) => (null == e ? void 0 : e.products),
        r = (e) => (null == e ? void 0 : e.strategy_description),
        o = (e) => (null == e ? void 0 : e.strategy_name),
        d = (e) => (null == e ? void 0 : e.strategy_id),
        s = (e) => (null == e ? void 0 : e.category_id),
        c = (e) => (null == e ? void 0 : e.doctype),
        u = (e) => {
          var t, n;
          let l = null != (t = null == e ? void 0 : e.products) ? t : [];
          return {
            guest: { eventType: "recommendations" },
            products:
              null == l
                ? void 0
                : l.map((e) => {
                    var t;
                    return {
                      placementType: "recommendations",
                      tcin: null != (t = null == e ? void 0 : e.tcin) ? t : "",
                    };
                  }),
            recommendations: {
              categoryId: null == e ? void 0 : e.category_id,
              docType: null != (n = null == e ? void 0 : e.doctype) ? n : "",
              placementId: null == e ? void 0 : e.strategy_id,
              strategyDescription: null == e ? void 0 : e.strategy_description,
              strategyId: null == e ? void 0 : e.strategy_id,
              strategyName: null == e ? void 0 : e.strategy_name,
              type: "product",
            },
          };
        };
    },
    3111: (e, t, n) => {
      "use strict";
      n.d(t, {
        Dt: () => u,
        Eq: () => i,
        Ui: () => d,
        Xp: () => r,
        Zn: () => a,
        ih: () => o,
        n2: () => s,
        uL: () => p,
        y: () => c,
      });
      var l = n(91342);
      let i = (e) => void 0 !== e.channel,
        a = (e) => {
          var t;
          return (null == (t = e.discount) ? void 0 : t.channel) !== void 0;
        },
        r = (e) => {
          let t = ((e) => {
            var t;
            return a(e)
              ? null == e || null == (t = e.discount)
                ? void 0
                : t.channel
              : i(e)
              ? null == e
                ? void 0
                : e.channel
              : void 0;
          })(e);
          return "CWL" === t || "DMC" === t || "DMR" === t;
        },
        o = (e) => {
          var t, n;
          return null == e ||
            null == (n = e.message) ||
            null == (t = n.short_description)
            ? void 0
            : t.replace("Deal: ", "").trim();
        },
        d = (e, t) => "promotion" === t && void 0 !== e.promotion_id,
        s = (e, t) => "circle" === t && (null == e ? void 0 : e.id) !== void 0,
        c = (e) => {
          let {
              sortBy: t,
              isUnifiedOffersEnabled: n,
              shouldShowAllOffers: l,
              shouldShowCategoryOffersOrSubCategoryOffers: i,
              shouldShowRecommendedOffers: a,
            } = e,
            r = "";
          if (n)
            switch (t) {
              case "tap_to_apply":
                r = "deals_offer_grid_tap";
                break;
              case "newest_desc":
                r = "deals_offer_grid_newest";
                break;
              case "popular_desc":
                r = "deals_offer_grid_foryou_top";
                break;
              case "expiration_date_asc":
                r = "deals_offer_grid_expiring";
                break;
              case "percent_off_desc":
                r = "deals_offer_grid_discount";
                break;
              case "circle_deals":
                r = "deals_offer_grid_circle";
                break;
              default:
                l || i
                  ? (r = "deals_offer_grid_foryou_top")
                  : a && (r = "deals_offer_grid_foryou_only");
            }
          else
            switch (t) {
              case "tap_to_apply":
                r = "deals_offer_grid_tap";
                break;
              case "newest_desc":
                r = "circle_grid_newest";
                break;
              case "popular_desc":
                r = "circle_grid_top_offers";
                break;
              case "expiration_date_asc":
                r = "circle_grid_expiring";
                break;
              case "percent_off_desc":
                r = "circle_grid_deep_discount";
                break;
              case "circle_deals":
                r = "deals_offer_grid_circle";
                break;
              default:
                l || i
                  ? (r = "circle_grid_top_offers")
                  : a && (r = "circle_grid_foryou_only");
            }
          return r;
        },
        u = async function (e, t, n) {
          n.trackEvent({
            customInteraction: { location: e, type: "click", value: t },
            guest: { eventType: "customInteraction" },
            appState: { pageType: e },
          });
        },
        p = (e) => {
          let t = Math.floor((e - Date.now()) / 864e5);
          return 0 === t
            ? "Expires today!"
            : "".concat(t, " ").concat((0, l.td)("day", t), " left");
        };
    },
    3658: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => T });
      var l = n(37876),
        i = n(15039),
        a = n(83070),
        r = n(14232),
        o = n(3576),
        d = n(65699),
        s = n(4917),
        c = n(79052),
        u = n(91342),
        p = n(62701);
      let m = (e) => {
        var { id: t, children: n, isVisible: i } = e,
          a = (0, d._)(e, ["id", "children", "isVisible"]);
        return i
          ? (0, l.jsx)(
              "div",
              (0, p._)(
                (0, o._)(
                  { "data-test": "tab-".concat(t), id: t, role: "tabpanel" },
                  a
                ),
                { children: n }
              )
            )
          : null;
      };
      m.displayName = "TabContent";
      let h = (e, t) => {
          if ("string" == typeof e) return "tabContent-".concat(e);
        },
        g = (e, t) =>
          "string" == typeof e
            ? "tab-".concat((0, u.eh)((0, u.SS)(e)))
            : "string" == typeof t
            ? "tab-".concat((0, u.eh)((0, u.SS)(t)))
            : void 0,
        _ = (e) => {
          try {
            let t = e.closest(".nds-TabBar"),
              n = null == t ? void 0 : t.getBoundingClientRect(),
              l = e.getBoundingClientRect(),
              i = n && l.left - n.left,
              a = n && n.right - l.right,
              { outlineWidth: r, outlineOffset: o } = getComputedStyle(e),
              d = Number.parseInt(r, 10) + Number.parseInt(o, 10);
            i && t && i < 0 + d
              ? (t.scrollLeft += Math.ceil(i - d))
              : a && t && a < 0 + d && (t.scrollLeft -= Math.floor(a - d));
          } catch (e) {}
        },
        v = (e) => {
          let t = e.currentTarget;
          t && _(t);
        },
        x = (e) => {
          let t = e.target,
            { key: n } = e;
          return "ArrowUp" === n || "ArrowLeft" === n
            ? (e.preventDefault(),
              ((e, t) => {
                let n,
                  l = null == e ? void 0 : e.previousElementSibling;
                if (null === l) {
                  let l = e.closest(t);
                  n = null == l ? void 0 : l.lastElementChild;
                } else n = l;
                null == n || n.focus();
              })(t, "div"))
            : "ArrowDown" === n || "ArrowRight" === n
            ? (e.preventDefault(),
              ((e, t) => {
                let n,
                  l = null == e ? void 0 : e.nextElementSibling;
                if (null === l) {
                  let l = e.closest(t);
                  n = null == l ? void 0 : l.firstElementChild;
                } else n = l;
                null == n || n.focus();
              })(t, "div"))
            : null;
        },
        f = (e) => {
          var {
              $smScreenJustifyCenter: t,
              $tabAlign: n = "center",
              $tabSpacing: a,
              className: u,
            } = e,
            p = (0, d._)(e, [
              "$smScreenJustifyCenter",
              "$tabAlign",
              "$tabSpacing",
              "className",
            ]);
          let [m, h] = (0, r.useState)(!1),
            [g, _] = (0, r.useState)(!1),
            [v, x] = (0, r.useState)(!1),
            f = (0, r.useRef)(null);
          (0, r.useEffect)(() => {
            let e = f.current;
            e && x(e.scrollWidth > e.clientWidth);
          }, [f]);
          let b = (0, r.useCallback)((e) => {
            if (!e) return;
            let { overflowLeft: t, overflowRight: n } = ((e, t) => {
              let { scrollWidth: n, clientWidth: l, scrollLeft: i } = e;
              return {
                overflowLeft: i > t,
                overflowRight: n - (i + l) + 1 > t,
              };
            })(e, 20);
            h(t), _(n);
          }, []);
          (0, r.useEffect)(() => {
            b(f.current);
          }, [b]);
          let y = (0, r.useCallback)((e) => b(e.currentTarget), [b]),
            T = s(() => b(f.current), 300);
          return (0, l.jsxs)("div", {
            className: c.tabBar,
            children: [
              (0, l.jsx)("div", {
                className: i(c.fadeDiv, c.fadeDivLeft, m && c.fadeLeftGradient),
              }),
              (0, l.jsx)("div", {
                className: c.tabBarDiv,
                onScroll: T,
                onTouchEnd: y,
                ref: f,
                children: (0, l.jsx)(
                  "div",
                  (0, o._)(
                    {
                      className: i(
                        u,
                        c.tabList,
                        t && c.smScreenJustifyCenter,
                        n && c[n],
                        "spread" === a && c.spreadBorderSpacing,
                        v && c.hasScrollbar
                      ),
                    },
                    p
                  )
                ),
              }),
              (0, l.jsx)("div", {
                className: i(
                  c.fadeDiv,
                  c.fadeDivRight,
                  g && c.fadeRightGradient
                ),
              }),
            ],
          });
        };
      f.displayName = "TabBar";
      let b = (e) => {
        var { active: t, linkRef: n } = e,
          i = (0, d._)(e, ["active", "linkRef"]);
        return (0, l.jsx)(
          "button",
          (0, o._)({ ref: n, role: "tab", type: "button" }, i)
        );
      };
      b.displayName = "TabsButton";
      let y = (0, r.memo)((e) => {
        var {
            active: t,
            activeTabColor: n,
            children: a,
            label: s,
            onClick: u,
            size: m = "md",
          } = e,
          h = (0, d._)(e, [
            "active",
            "activeTabColor",
            "children",
            "label",
            "onClick",
            "size",
          ]);
        let g = (0, r.useCallback)(
          (e) => {
            _(e.currentTarget), null == u || u(e);
          },
          [u]
        );
        return (0, l.jsx)(
          b,
          (0, p._)(
            (0, o._)(
              {
                active: t,
                "aria-selected": t,
                className: i(
                  c.tabsButton,
                  t && c.active,
                  !t && c.inactive,
                  m && c[m]
                ),
                onClick: g,
                onFocus: v,
                style: { "--tabs-border-bottom-color": t ? n : "transparent" },
              },
              h
            ),
            { children: a }
          )
        );
      });
      y.displayName = "TabHeader";
      let T = (e) => {
        let {
            activeTabColor: t = a.D_c,
            children: n,
            className: o,
            "data-test": d,
            defaultSelectedIndex: s = 0,
            disableContent: p = !1,
            id: _,
            onChange: v,
            selectedIndex: b,
            size: T = "md",
            smScreenJustifyCenter: k,
            tabAlign: C = "center",
            tabData: I = [],
            tabSpacing: j = "default",
            tabTitleClassName: N,
          } = e,
          [w, P] = (0, r.useState)(null != s ? s : 0);
        (0, r.useEffect)(() => {
          void 0 !== b && P(b);
        }, [b]);
        let E = n || I,
          D = (Array.isArray(E) ? E : [E]).length;
        if (!E || !D) return null;
        let A = ((e, t) =>
          e
            ? r.Children.map(e, function () {
                let { props: e } =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  {
                    children: t,
                    contentLabel: n,
                    id: l,
                    linkRef: i,
                    onClick: a,
                    title: r,
                  } = null != e ? e : {};
                return {
                  children: t,
                  contentLabel: n,
                  id: l,
                  linkRef: i,
                  onClick: a,
                  title: r,
                };
              })
            : t)(n, I);
        return (0, l.jsxs)("div", {
          className: i(c.ndsTabs, o),
          "data-test": d,
          id: _,
          children: [
            (0, l.jsx)(f, {
              $smScreenJustifyCenter: k,
              $tabAlign: C,
              $tabSpacing: j,
              className: N,
              onKeyDown: x,
              role: "tablist",
              children: ((e) => {
                let {
                  activeColor: t,
                  childrenProperties: n,
                  count: i,
                  handleClick: a,
                  selectedIndex: r,
                  size: o,
                } = e;
                return null == n
                  ? void 0
                  : n.map(function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        {
                          contentLabel: d,
                          id: s,
                          linkRef: c,
                          onClick: p,
                          title: m,
                        } = e,
                        _ = s || g(m, d),
                        v =
                          "string" == typeof m
                            ? "tab".concat((0, u.eh)((0, u.Fh)((0, u.SS)(m))))
                            : "string" == typeof d
                            ? "tab".concat((0, u.eh)((0, u.Fh)((0, u.SS)(d))))
                            : void 0,
                        x = r === n,
                        f = "object" == typeof m ? d : m,
                        b = ""
                          .concat(f, " - ")
                          .concat(n + 1, " of ")
                          .concat(i),
                        T = s || h(s || g(m, d));
                      return (0,
                      l.jsx)(y, { active: x, activeTabColor: t, "aria-controls": T, "data-test": v, id: _, label: b, linkRef: c, onClick: a(n, !!c, v, p), size: o, children: m }, _ || n);
                    });
              })({
                activeColor: t,
                childrenProperties: A,
                count: D,
                handleClick: function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "",
                    l = arguments.length > 3 ? arguments[3] : void 0;
                  return (i) => {
                    let a = w === e;
                    t || i.preventDefault(),
                      void 0 === b && P(e),
                      l && l(i, n, e),
                      a || null == v || v(i, n, e);
                  };
                },
                selectedIndex: w,
                size: T,
              }),
            }),
            ((e) => {
              let {
                childrenProperties: t,
                disableContent: n,
                selectedIndex: i,
              } = e;
              return n
                ? null
                : null == t
                ? void 0
                : t.map((e, t) => {
                    let { children: n, contentLabel: a, id: r, title: o } = e,
                      d = h(r || g(o, a)),
                      s = r || g(o, a);
                    return (0, l.jsx)(
                      m,
                      {
                        "aria-labelledby": s,
                        id: d,
                        isVisible: i === t,
                        children: n,
                      },
                      null != d ? d : t
                    );
                  });
            })({ childrenProperties: A, disableContent: p, selectedIndex: w }),
          ],
        });
      };
      T.displayName = "Tabs";
    },
    4264: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var l = n(73208),
        i = n(26989);
      let a = () => {
        var e;
        let t = (0, l.K1)(i.Gs),
          n = (0, l.EJ)(i.Gs),
          a = (0, l.bZ)();
        return {
          childTcin: t,
          parentTcin: n,
          selectedTcin: a,
          tcin: null != (e = null != a ? a : t) ? e : n,
        };
      };
    },
    6245: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => g });
      var l = n(3576),
        i = n(37876),
        a = n(14232),
        r = n(16960),
        o = n(93967),
        d = n(73208),
        s = n(30997),
        c = n(42252),
        u = n(26835),
        p = n(93609);
      let m = (e) => {
        let { featureType: t, onClick: n, placement: l } = e,
          { push: m } = (0, c.rd)(),
          h = (0, p.b)(),
          g = (0, a.useCallback)(() => {
            null == n || n(), m(h);
          }, [h, n, m]);
        return (0, i.jsx)(o.H, {
          action: "error_boundary_cgi_button_tio",
          children: (0, i.jsx)(u.R, {
            "aria-label": "try on ".concat((0, d.EJ)(s.T)),
            clickType: "TRY_IT_ON",
            displayText: "Try it on",
            featureType: t,
            Icon: r.R,
            onClick: g,
            placement: l,
          }),
        });
      };
      m.displayName = "CgiButtonTryItOnBeauty";
      var h = n(8801);
      let g = (e) => ((0, h.I)() ? (0, i.jsx)(m, (0, l._)({}, e)) : null);
      g.displayName = "ConditionalCgiButtonTryItOnBeauty";
    },
    6708: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var l = n(52956),
        i = n(3111);
      let a = (e) => {
        var t, n;
        if (!e) return;
        let a = (0, i.Eq)(e),
          r = (0, i.Zn)(e),
          o = a
            ? null == e
              ? void 0
              : e.channel
            : r
            ? null == e || null == (t = e.discount)
              ? void 0
              : t.channel
            : void 0,
          d = a ? e.id : r ? e.offer_id : void 0;
        if (!o || !d) return;
        let s = "";
        switch (o) {
          case "DMR":
            s = "dmr";
            break;
          case "DMC":
            s = "dmc";
            break;
          case "CWL":
          case "CIR":
            s =
              (null == e ? void 0 : e.personalized) ||
              (null == e ? void 0 : e.tactic) !== "Mass"
                ? "circle_segmented"
                : "circle_mass";
            break;
          default:
            s = "mass";
        }
        return {
          deal: {
            id: d,
            type:
              null != (n = null == s ? void 0 : s.toUpperCase())
                ? n
                : l.g.PLACEHOLDER_TYPE,
          },
        };
      };
    },
    7241: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { AddToCartButtonForProductContext: () => u });
      var l = n(3576),
        i = n(62701),
        a = n(37876),
        r = n(14232),
        o = n(73208),
        d = n(60816),
        s = n(4130),
        c = n(15847);
      let u = (e) => {
        let t = (0, o.K1)((e) => e),
          n = (0, o.EJ)((e) => e),
          { customGiftCardAmount: u } = (0, c.U)(),
          p =
            "Custom value" === u
              ? d.Fz.DISABLE_WITH_CORRECT_BUTTON_TYPE
              : e.overrideBehavior,
          m = (0, o.bZ)(),
          h = null != m ? m : null == t ? void 0 : t.tcin,
          g = (0, r.useMemo)(
            () =>
              (0, i._)((0, l._)({}, n), { children: void 0, parent: void 0 }),
            [n]
          ),
          _ = (0, r.useMemo)(
            () => (0, i._)((0, l._)({}, t), { parent: g, tcin: h }),
            [t, g, h]
          );
        return h
          ? (0, a.jsx)(
              s.h,
              (0, i._)((0, l._)({ childOrStandaloneProduct: _, tcin: h }, e), {
                overrideBehavior: p,
              })
            )
          : null;
      };
      u.displayName = "AddToCartButtonForProductContext";
    },
    8801: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => a });
      var l = n(73208);
      let i = (e) => !!(null == e ? void 0 : e.makeup_try_it_on),
        a = () => !!(0, l.K1)(i);
    },
    11671: (e, t, n) => {
      "use strict";
      n.d(t, {
        Qm: () => s,
        US: () => d,
        WS: () => i,
        a3: () => a,
        cq: () => o,
        fD: () => r,
        iO: () => l,
      });
      let l = (e) => (null == e ? void 0 : e.recommended_circle_offers),
        i = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.strategy_id;
        },
        a = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.strategy_name;
        },
        r = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.strategy_description;
        },
        o = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.circle_offers;
        },
        d = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.placement_id;
        },
        s = (e) => {
          var t;
          return null == e || null == (t = e.recommended_circle_offers)
            ? void 0
            : t.doctype;
        };
    },
    14549: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => o });
      var l = n(3576),
        i = n(53842),
        a = n(70418),
        r = n(19427);
      let o = (e) => {
        let { fetchOptions: t, requestParams: n } = null != e ? e : {},
          {
            channel: o,
            placement_id: d,
            page: s,
            visitor_id: c,
            pricing_store_id: u,
            member_id: p,
            category_id: m,
            tcins: h,
            purchasable_store_ids: g,
            exclusions: _,
            offer_id: v,
            keyword: x,
            include_sponsored_recommendations: f,
            effective_date: b,
            fulfillment_types: y,
            brand_ids: T,
            resolve_to_first_variation_child: k,
            slingshot_component_id: C,
            platform: I,
            facet_ids: j,
            exclude_category_ids: N,
            include_dmc_dmr: w,
            marketing_group_ids: P,
          } = null != n ? n : {},
          {
            apiKey: E,
            baseUrl: D,
            apis: { product: A },
          } = (0, r.$)().services.redskyAggregations;
        if (!o || !d || !s || !c)
          throw Error(
            "Required parameters not defined for general recommendations placement query"
          );
        let O = a.o.buildURLWithParams(
          new URL(A.endpointPaths.generalRecommendationsPlacementV1, D),
          {
            category_id: m,
            channel: o,
            effective_date: b,
            include_sponsored_recommendations: f,
            key: E,
            keyword: x,
            member_id: p,
            offer_id: v,
            page: s,
            placement_id: d,
            pricing_store_id: u,
            purchasable_store_ids: g,
            exclusions: _,
            tcins: h,
            visitor_id: c,
            fulfillment_types: y,
            brand_ids: T,
            resolve_to_first_variation_child: k,
            slingshot_component_id: C,
            platform: I,
            facet_ids: j,
            exclude_category_ids: N,
            include_dmc_dmr: w,
            marketing_group_ids: P,
          }
        );
        return (0, i.n)(
          O,
          (0, l._)(
            {
              partialErrorTag:
                "get_general_recommendations_placement_partial_api_error",
            },
            t
          )
        );
      };
    },
    16631: (e, t, n) => {
      "use strict";
      var l;
      n.d(t, { h: () => l }),
        (function (e) {
          (e.FINDS_DETAIL_PAGE = "finds-detail-page"),
            (e.PLP = "plp"),
            (e.PLP_PRODUCT_CARD = "plp-product-card"),
            (e.PLP_VIZ_PRODUCT_CARD = "plp-viz-product-card"),
            (e.PLP_DRAWER = "plp-ugc"),
            (e.PLP_PRZ = "plp-prz"),
            (e.PDP_COLUMN = "pdp-column"),
            (e.PDP_TOP_OF_FOLD = "pdp-top-of-fold"),
            (e.PDP_TOP_OF_FOLD_IMAGE = "pdp-top-of-fold-image"),
            (e.PDP_NOW_TEMPLATE_GALLERY = "pdp-now-template-gallery"),
            (e.PLP_VIZ_SHOPPABLE_DRAWER = "viz-shoppable-drawer"),
            (e.SII3D = "see-it-in-3d");
        })(l || (l = {}));
    },
    16960: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => r });
      var l = n(3576),
        i = n(37876),
        a = n(9394);
      let r = (e) =>
        (0, i.jsx)(
          a.I,
          (0, l._)(
            { _name: "ArWeb", _src: "ArWeb.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      r.displayName = "IconArWeb";
    },
    20213: (e, t, n) => {
      "use strict";
      n.d(t, { Ri: () => u, Rt: () => c });
      var l = n(3576),
        i = n(17379),
        a = n(54687),
        r = n(92684),
        o = n(14549);
      let d =
          "@web/domain-product/get-guest-specific-recommendations-placement",
        { useQuery: s } = (0, i.T)({
          name: d,
          keyFn: (e) =>
            (void 0 !== e.channel ||
              void 0 !== e.placement_id ||
              void 0 !== e.page ||
              void 0 !== e.visitor_id ||
              void 0 !== e.member_id) && [d, e],
          queryFn: async (e) => {
            let t = await (0, a.E)(),
              {
                data: n,
                ok: i,
                statusText: r,
              } = await (0, o.V)({
                requestParams: (0, l._)({ effective_date: t }, e),
              });
            if (i) {
              var d;
              return null != (d = null == n ? void 0 : n.data) ? d : null;
            }
            throw Error("".concat(r));
          },
        }),
        c = s,
        u = (0, r.K)(s);
    },
    26835: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => C });
      var l = n(37876),
        i = n(14232),
        a = n(73208),
        r = n(26989),
        o = n(60823),
        d = n(16631),
        s = n(77232),
        c = n(18027),
        u = n(19968),
        p = n(87068),
        m = n(98601);
      let h = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-0" })(
          [
            "display:flex;text-align:center;font-size:",
            ";border-radius:24px;max-width:90px;padding:",
            " ",
            ";margin:",
            ";@media (min-width:",
            "){position:absolute;left:40%;transform:translateX(-50%);margin:0;}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          m.gx.size.text.small,
          m.xe.generic.x1,
          m.xe.generic.x3,
          m.xe.generic.x1,
          m.fi.sm,
          m.Tj.interactive.secondary.hover,
          m.Tj.border.interactive.secondary.hover,
          m.Tj.text.onLight.primary,
          m.Tj.interactive.secondary.active,
          m.Tj.interactive.secondary.active,
          m.Tj.text.onDark.primary
        ),
        g = s.I4.span.withConfig({ componentId: "sc-8759a6b7-1" })(
          ["display:flex;margin-right:", ";margin-bottom:", ";"],
          (e) => {
            let { marginRight: t } = e;
            return t ? m.xe.generic.x2 : 0;
          },
          (e) => {
            let { marginBottom: t } = e;
            return t ? m.xe.generic.x1 : 0;
          }
        ),
        _ = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-2" })(
          [
            "display:flex;justify-content:flex-start;margin-top:",
            ";min-width:125px;padding:0 ",
            ";&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          m.xe.generic.x3,
          m.xe.generic.x3,
          m.Tj.palette.white,
          m.Tj.interactive.secondary.hover,
          m.Tj.border.interactive.secondary.hover,
          m.Tj.text.onLight.primary,
          m.Tj.interactive.secondary.active,
          m.Tj.interactive.secondary.active,
          m.Tj.text.onDark.primary
        ),
        v = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-3" })(
          [
            "display:flex;margin-top:",
            ";padding:0 ",
            ";justify-content:center;font-size:",
            ";height:",
            ";width:50%;min-width:180px;@media (min-width:",
            "){font-size:",
            ";min-width:210px;}@media (min-width:",
            "){height:",
            ";font-size:",
            ";}&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          m.xe.generic.x3,
          m.xe.generic.x3,
          m.gx.size.text.small,
          m.uJ.button.sm,
          m.fi.lg,
          m.gx.size.text.medium,
          m.fi.xl,
          m.uJ.button.md,
          m.gx.size.text.base,
          m.Tj.palette.white,
          m.Tj.interactive.secondary.hover,
          m.Tj.border.interactive.secondary.hover,
          m.Tj.text.onLight.primary,
          m.Tj.interactive.secondary.active,
          m.Tj.interactive.secondary.active,
          m.Tj.text.onDark.primary
        ),
        x = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-4" })(
          [
            "border:",
            " solid 1px;border-radius:",
            ";display:flex;flex-direction:column;font-size:",
            ";height:auto;min-width:80px;padding:",
            " ",
            ";white-space:initial;justify-content:flex-start;span{line-height:1.4;}&:hover{background-color:",
            ";}",
          ],
          m.Tj.palette.gray.medium,
          m.xe.generic.x2,
          m.gx.size.text.medium,
          m.xe.generic.x4,
          m.xe.generic.x4,
          m.Tj.palette.gray.lightest
        ),
        f = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-5" })(
          [
            "border-radius:",
            ";display:flex;text-align:center;font-size:",
            ";padding:",
            " ",
            ";max-width:170px;position:relative;span{line-height:16px;}",
          ],
          m.PQ.radius.x6,
          m.gx.size.text.small,
          m.xe.generic.x1,
          m.xe.generic.x2
        ),
        b = (0, s.I4)(u.n).withConfig({ componentId: "sc-8759a6b7-6" })(
          [
            "display:flex;margin-top:",
            ";max-width:90px;&.NoWrapButton{text-align:center;justify-content:center;min-width:auto;}&:active svg{fill:",
            ";}&:hover{background-color:",
            ";border-color:",
            ";color:",
            ";}&:active{background-color:",
            ";border-color:",
            ";color:",
            ";}",
          ],
          m.xe.generic.x3,
          m.Tj.palette.white,
          m.Tj.interactive.secondary.hover,
          m.Tj.border.interactive.secondary.hover,
          m.Tj.text.onLight.primary,
          m.Tj.interactive.secondary.active,
          m.Tj.interactive.secondary.active,
          m.Tj.text.onDark.primary
        ),
        y = (0, s.I4)(p.$).withConfig({ componentId: "sc-8759a6b7-7" })(
          ["height:32px;path{fill:", ";}"],
          m.Tj.interactive.secondary.default
        ),
        T = (0, s.I4)(p.$).withConfig({ componentId: "sc-8759a6b7-8" })(
          ["height:", ";width:100%;font-size:", ";path{fill:", ";}"],
          m.uJ.button.md,
          m.gx.size.text.base,
          m.Tj.interactive.secondary.default
        ),
        k = (0, s.I4)(c.S).withConfig({ componentId: "sc-8759a6b7-9" })(
          [
            "display:flex;text-align:center;border-radius:",
            ";background-color:white;",
          ],
          m.PQ.radius.x4
        ),
        C = (e) => {
          var t;
          let n,
            {
              clickType: s,
              displayText: c = "See this item in 3D",
              featureType: u,
              id: p,
              onClick: m,
              placement: C = d.h.PDP_COLUMN,
              ref: I,
              Icon: j,
              ugc: N,
            } = e,
            { trackClick: w } = (0, o.f)(),
            P = (0, a.K1)(r.Gs),
            E = (0, a.EJ)(r.Gs),
            D = (0, a.bZ)(),
            A = null != (t = null != D ? D : P) ? t : E;
          switch (C) {
            case d.h.PLP:
              n = h;
              break;
            case d.h.PLP_PRODUCT_CARD:
            case d.h.PLP_PRZ:
              n = f;
              break;
            case d.h.PDP_COLUMN:
              n = _;
              break;
            case d.h.PLP_DRAWER:
            case d.h.PDP_TOP_OF_FOLD_IMAGE:
              n = b;
              break;
            case d.h.PDP_NOW_TEMPLATE_GALLERY:
              n = x;
              break;
            case d.h.PLP_VIZ_PRODUCT_CARD:
              n = y;
              break;
            case d.h.PLP_VIZ_SHOPPABLE_DRAWER:
              n = T;
              break;
            case d.h.FINDS_DETAIL_PAGE:
            case d.h.SII3D:
              n = k;
              break;
            default:
              n = v;
          }
          let O = (0, i.useCallback)(() => {
            let e;
            if ("TRY_IT_ON" === s || !u)
              switch (C) {
                case d.h.PDP_NOW_TEMPLATE_GALLERY:
                case d.h.PDP_TOP_OF_FOLD:
                case d.h.PDP_TOP_OF_FOLD_IMAGE:
                  e = "IMAGE_GALLERY";
                  break;
                case d.h.PLP:
                case d.h.PLP_PRODUCT_CARD:
                  e = "GRID_CARD";
                  break;
                case d.h.PLP_DRAWER:
                  e = "UGC_PRODUCT";
                  break;
                case d.h.PLP_PRZ:
                  e = "TRENDING_TRY_IT_ON";
                  break;
                case d.h.SII3D:
                  e = "VIRTUAL_PRODUCT_TOOLS";
              }
            "TRY_IT_ON" === s && C === d.h.PLP_PRODUCT_CARD && (e = void 0),
              u && (e = u),
              e &&
                w.track({
                  clickType: s,
                  element: A ? { id: A, type: "TCIN" } : void 0,
                  featureType: e,
                  UGC: null != N ? N : void 0,
                }),
              m();
          }, [s, u, m, C, A, w, N]);
          return m
            ? (0, l.jsxs)(n, {
                "aria-label": c,
                "data-test": "cgi-button-default",
                id: p,
                onClick: O,
                ref: I,
                size: "sm",
                children: [
                  j &&
                    (0, l.jsx)(g, {
                      marginBottom: C === d.h.PDP_NOW_TEMPLATE_GALLERY,
                      marginRight: !1,
                      children: (0, l.jsx)(j, {
                        width: C === d.h.PDP_NOW_TEMPLATE_GALLERY ? "24" : "20",
                      }),
                    }),
                  (0, l.jsx)("span", {
                    "data-test": "cgi-button-display-text",
                    children: c,
                  }),
                ],
              })
            : null;
        };
      C.displayName = "CgiButtonDefault";
    },
    33909: (e, t, n) => {
      "use strict";
      n.d(t, { rj: () => m });
      var l = n(3576),
        i = n(19427),
        a = n(17379),
        r = n(53842),
        o = n(70418),
        d = n(92684),
        s = n(25640);
      let c = "@web/domain-promotions/get-recommended-circle-offers-v1",
        u = ["page", "placement_id", "visitor_id"],
        { useQuery: p } = (0, a.T)({
          name: c,
          keyFn: (e) => (
            u.forEach((t) => {
              if (!e[t])
                throw Error(
                  "Required `"
                    .concat(t, "` was missing from query: `")
                    .concat(c, "`")
                );
            }),
            [c, e]
          ),
          queryFn: async (e, t) => {
            var n;
            let {
                apiKey: a,
                apis: { promotions: d },
                baseUrl: s,
              } = (0, i.$)().services.redskyAggregations,
              {
                category_id: c,
                channel: u = "WEB",
                fulfillment_types: p,
                member_id: m,
                offer_id: h,
                page: g,
                placement_id: _,
                purchasable_store_ids: v,
                slingshot_component_id: x,
                tcins: f,
                visitor_id: b,
              } = null != e ? e : {},
              y = o.o.buildURLWithParams(
                new URL(d.endpointPaths.getRecommendedCircleOffersV1, s),
                {
                  category_id: c,
                  channel: u,
                  fulfillment_types: p,
                  member_id: m,
                  offer_id: h,
                  page: g,
                  placement_id: _,
                  purchasable_store_ids: v,
                  slingshot_component_id: x,
                  tcins: f,
                  visitor_id: b,
                  key: a,
                }
              ),
              {
                data: T,
                ok: k,
                statusText: C,
              } = await (0, r.n)(
                y,
                (0, l._)(
                  {
                    partialErrorTag:
                      "get_recommended_circle_offers_error_partial",
                  },
                  t
                )
              );
            if (k) return null != (n = null == T ? void 0 : T.data) ? n : null;
            throw Error("".concat(C));
          },
          defaultOptions: { staleTime: s.Ls },
        }),
        m = (0, d.K)(p);
    },
    41516: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => i });
      var l = n(40123);
      let i = (e) => {
        if (!l(e) && e)
          return Object.fromEntries(
            e.split(";").map((e) => {
              var t;
              let [n, ...l] = null != (t = e.split(",")) ? t : [];
              return [n, null == l ? void 0 : l.join(",")];
            })
          );
      };
    },
    42480: (e) => {
      e.exports = {
        CarouselContainer: "styles_CarouselContainer__BONi1",
        HeadlineContainer: "styles_HeadlineContainer__Wv8iH",
        TabOverrides: "styles_TabOverrides__nApoj",
      };
    },
    48279: (e) => {
      e.exports = {
        ndsButtonTertiary: "styles_ndsButtonTertiary__9oxcn",
        sm: "styles_sm__rBhwR",
        md: "styles_md__2mIUb",
        lg: "styles_lg__O6eow",
      };
    },
    54432: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => a });
      var l = n(14232),
        i = n(22600);
      let a = () => {
        let {
          openJoinCircleModal: e,
          closeJoinCircleModal: t,
          isCircleEnrolled: n,
          isGuestLoggedIn: a,
          slot: r,
        } = (0, l.useContext)(i.x);
        return {
          closeJoinCircleModal: t,
          openJoinCircleModal: e,
          isCircleEnrolled: n,
          isGuestLoggedIn: a,
          slot: r,
        };
      };
    },
    55873: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => a });
      var l = n(14232),
        i = n(29072);
      let a = () => {
        var e;
        let t = (0, l.useContext)(i.q);
        return null != (e = null == t ? void 0 : t.variants) ? e : {};
      };
    },
    58096: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => s });
      var l = n(3576),
        i = n(65699),
        a = n(37876),
        r = n(15039),
        o = n(18027),
        d = n(48279);
      let s = (e) => {
        var { className: t, size: n = "md" } = e,
          s = (0, i._)(e, ["className", "size"]);
        return (0, a.jsx)(
          o.S,
          (0, l._)({ className: r(d.ndsButtonTertiary, t, d[n]) }, s)
        );
      };
      s.displayName = "ButtonTertiary";
    },
    58111: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => s });
      var l = n(3576),
        i = n(62701),
        a = n(14232),
        r = n(40123),
        o = n(19351),
        d = n(29072);
      let s = () => {
        var e;
        let t = (0, a.useContext)(d.q),
          n = (0, o.z1)(),
          s = null == t ? void 0 : t.instance,
          c =
            null !=
              (e = null == t ? void 0 : t.hasBeenCalledAtLeastOnceOnClient) &&
            e;
        return (0, a.useCallback)(
          (e) => {
            let t = null == s ? void 0 : s.getExperimentByFlag(e);
            if (!r(t)) {
              let e = t.map((e) => {
                var t;
                return {
                  contextQualified: "1",
                  treatmentDelivered: (null != (t = e.pl) ? t : []).map((e) =>
                    Object.keys(e).reduce(
                      (t, n) =>
                        (0, i._)((0, l._)({}, t), { key: n, value: e[n] }),
                      {}
                    )
                  ),
                  treatmentId: e.tid,
                };
              });
              n.trackEvent({
                guest: { eventType: "experiment" },
                experimentsViewed: e,
              });
            }
          },
          [c, s, n]
        );
      };
    },
    63492: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => a });
      var l = n(14232),
        i = n(22600);
      let a = () => {
        let { dispatch: e, circleOffersReducerState: t } = (0, l.useContext)(
          i.x
        );
        return [t, e];
      };
    },
    65343: (e) => {
      e.exports = { carouselTileImage: "styles_carouselTileImage__z66sw" };
    },
    73919: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => l });
      let l = (0, n(14232).createContext)({
        hasSlingshotComponentIdToGuestSpecificRecommendationsVariablesMap: !1,
        slingshotComponentIdToGuestSpecificRecommendationsVariablesMap: void 0,
      });
      l.displayName = "HomePageSSRContext";
    },
    79052: (e) => {
      e.exports = {
        ndsTabs: "styles_ndsTabs__te4fL",
        tabList: "styles_tabList__IDz4p",
        smScreenJustifyCenter: "styles_smScreenJustifyCenter__8Sk_d",
        spreadBorderSpacing: "styles_spreadBorderSpacing__a0r8O",
        tabBar: "styles_tabBar__fi4lu",
        tabBarDiv: "styles_tabBarDiv__YTkGF",
        tabsButton: "styles_tabsButton__lh_Sh",
        active: "styles_active__TjDoO",
        inactive: "styles_inactive__K_cwN",
        listItem: "styles_listItem__PR0Lx",
        fadeDiv: "styles_fadeDiv__d_AvN",
        fadeDivLeft: "styles_fadeDivLeft__dxqxM",
        fadeDivRight: "styles_fadeDivRight__uDd6g",
        fadeLeftGradient: "styles_fadeLeftGradient__K1nur",
        fadeRightGradient: "styles_fadeRightGradient__QQeHV",
        left: "styles_left__Qi4yi",
        right: "styles_right__nh1Z3",
        center: "styles_center__uyjqd",
        hasScrollbar: "styles_hasScrollbar___UTWt",
        sm: "styles_sm__Msen8",
        md: "styles_md__NZIqo",
        lg: "styles_lg__Ssgtx",
      };
    },
    80459: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => _ });
      var l = n(3576),
        i = n(62701),
        a = n(14232),
        r = n(68156),
        o = n(19165),
        d = n(27763),
        s = n(65699),
        c = n(91797),
        u = n(26738);
      class p extends u.r {
        processMetadata(e) {
          return e;
        }
        createDataPayload(e) {
          if (e && "cdui" in e) {
            let { cdui: t } = e;
            return (0, s._)(e, ["cdui"]);
          }
          return e;
        }
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CAROUSEL_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "carousel_impression");
        }
      }
      var m = n(99733),
        h = n(72586),
        g = n(71072);
      let _ = () => {
        let e = (0, a.useRef)(null),
          { data: t } = (0, d.M)(),
          { fetchClientContextMetadata: n } = (0, r.p)(),
          { trackViewableImpression: s } = ((e) => {
            let t = (0, a.useMemo)(() => new p(e), [e]);
            return (0, a.useMemo)(() => ({ trackViewableImpression: t }), [t]);
          })(n),
          { carouselData: c } = t,
          u = (0, h.c)(),
          _ = (0, g.e)(),
          v = (0, a.useCallback)(
            () =>
              (0, l._)(
                (0, i._)((0, l._)({}, c), { impressionId: (0, m.B)() }),
                u ? { module: { module_type: u.module_type } } : void 0,
                _ ? { layout: _ } : void 0,
                (null == _ ? void 0 : _.id) && u
                  ? {
                      cdui: {
                        layout_id: null == _ ? void 0 : _.id,
                        module_type: u.module_type,
                        module_experience_id: u.module_exp_id,
                        module_group_id: u.module_group_id,
                      },
                    }
                  : void 0
              ),
            [c, u, _]
          ),
          x = (0, o.WS)({
            refToTrack: e,
            trackViewableImpression: () => {
              s.track(v());
            },
          });
        return (0, a.useMemo)(() => ({ viewableImpressionTracker: x }), [x]);
      };
    },
    93609: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => l, b: () => o });
      var l,
        i = n(14232),
        a = n(70418),
        r = n(4264);
      !(function (e) {
        (e.FoundationFinder = "/virtual-try-on/foundation-finder"),
          (e.HairQuiz = "/experiences/hair-quiz"),
          (e.NowWearing = "/virtual-try-on/now-wearing"),
          (e.SkinQuiz = "/experiences/skin-quiz");
      })(l || (l = {}));
      let o = function () {
        var e, t, n;
        let o =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l.NowWearing,
          { tcin: d } = (0, r.A)(),
          s = (0, i.useMemo)(
            () => [encodeURIComponent(null != d ? d : "")],
            [d]
          ),
          c = "";
        switch (
          ((c =
            null !=
            (n =
              null == (t = window) || null == (e = t.location)
                ? void 0
                : e.origin)
              ? n
              : ""),
          o)
        ) {
          case l.FoundationFinder:
            return new a.o(c + l.FoundationFinder);
          case l.HairQuiz:
            return new a.o(c + l.HairQuiz + "?studio=true");
          case l.SkinQuiz:
            return new a.o(c + l.SkinQuiz + "?studio=true");
          default:
            return new a.o(c + l.NowWearing + "?tcins=".concat(s.join(",")));
        }
      };
    },
    97099: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { PersonalizationCarousel: () => tH });
      var l = n(3576),
        i = n(65699),
        a = n(37876),
        r = n(62701),
        o = n(41516),
        d = n(14232),
        s = n(52319),
        c = n(42773),
        u = n(40788),
        p = n(94259),
        m = n(55472),
        h = n(19351),
        g = n(90214),
        _ = n(94170),
        v = n(80459),
        x = n(48603),
        f = n(20213),
        b = n(3093),
        y = n(33232),
        T = n(95408),
        k = n(40196),
        C = n(3422),
        I = n(42252),
        j = n(40123),
        N = n(63415),
        w = n(49516);
      let P = (e) => (0, w.M)() && e.includes("/preview");
      var E = n(95636),
        D = n(69507),
        A = n(87068),
        O = n(38858),
        R = n(95035),
        S = n(22492),
        L = n(73208),
        F = n(32038),
        z = n(36810),
        M = n(30997),
        B = n(7241),
        U = n(64271),
        G = n(8801),
        W = n(6245),
        H = n(16631),
        V = n(25546),
        Z = n(94072),
        q = n(50525),
        K = n(55035),
        Y = n(4042),
        Q = n(15246),
        $ = n(38810),
        J = n(15550),
        X = n(65343);
      let ee = (e) => {
        var { src: t } = e,
          n = (0, i._)(e, ["src"]);
        return (0, a.jsx)(
          J._,
          (0, l._)(
            {
              className: X.carouselTileImage,
              "data-test": "carousel-tile-image",
              height: 101,
              resolutionsByBreakpoint: { 0: 101, md: 160 },
              src: null != t ? t : "",
              width: 101,
            },
            n
          )
        );
      };
      ee.displayName = "CarouselTileImage";
      var et = n(77232),
        en = n(98601),
        el = n(60263);
      let ei = (0, et.I4)(el.Z).withConfig({ componentId: "sc-2a6468fb-0" })(
          [
            "position:relative;background-color:",
            ";padding:",
            ";height:100%;width:184px;border:",
            ";border-radius:",
            ";display:flex;flex-direction:column;font-size:",
            ";line-height:",
            ";align-items:start;&.extension-tile{margin:0 0 ",
            ";}@media (max-width:",
            "){width:125px;}",
          ],
          en.Tj.palette.white,
          en.xe.generic.x3,
          (e) =>
            e.useBorder
              ? "1px solid ".concat(en.Tj.palette.gray.light)
              : "none",
          en.PQ.radius.x2,
          en.gx.size.text.medium,
          en.gx.lineHeight.heading,
          en.xe.generic.x2,
          en.fi.smMax
        ),
        ea = et.I4.div.withConfig({ componentId: "sc-2a6468fb-1" })(
          [
            "font-size:",
            ";padding:10px 0;line-height:",
            ";text-align:left;min-height:66px;max-height:8em;",
          ],
          en.gx.size.text.medium,
          en.gx.lineHeight.heading
        ),
        er = et.I4.div.withConfig({ componentId: "sc-2a6468fb-2" })(
          ["font-size:13px;margin-top:", ";color:", ";"],
          en.xe.generic.x1,
          en.Tj.palette.gray.dark
        ),
        eo = et.I4.div.withConfig({ componentId: "sc-2a6468fb-3" })(
          ["margin:", " 0;", ";& > button{max-width:unset;width:100%;}"],
          en.xe.generic.x1,
          (e) => {
            let { $isNewPrzOffers: t } = e;
            return t
              ? ""
              : "width: calc(100% - ".concat(en.xe.generic.x2, ");");
          }
        ),
        ed = et.I4.div.withConfig({ componentId: "sc-2a6468fb-4" })(
          [
            "height:322px;width:185px;display:flex;align-self:center;flex-direction:column;align-items:center;justify-content:space-between;margin:",
            " ",
            ";padding:",
            " ",
            " ",
            ";background-color:",
            ";border-radius:",
            ";border:solid 1px ",
            ";@media (min-width:",
            "){margin-left:",
            ";}@media (max-width:",
            "){width:125px;padding:",
            ";}",
          ],
          en.xe.generic.x2,
          en.xe.generic.x4,
          en.xe.generic.x4,
          en.xe.generic.x4,
          en.xe.generic.x2,
          en.Tj.background.default,
          en.PQ.radius.x1,
          en.Tj.palette.gray.lightest,
          en.fi.md,
          en.xe.generic.x1,
          en.fi.smMax,
          en.xe.generic.x1
        ),
        es = et.I4.div.withConfig({ componentId: "sc-2a6468fb-5" })([
          "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;",
        ]),
        ec = et.I4.div.withConfig({ componentId: "sc-2a6468fb-6" })([
          "display:inline;",
        ]),
        eu = et.I4.span.withConfig({ componentId: "sc-2a6468fb-7" })(
          ["color:", ";"],
          en.Tj.loyalty.background.purple.base
        );
      var ep = n(75570);
      let em = et.I4.div.withConfig({ componentId: "sc-8b7ba9b9-0" })(
          ["margin:", " 0 -6px 0;"],
          en.xe.generic.x2
        ),
        eh = (0, et.I4)(ep.N).withConfig({ componentId: "sc-8b7ba9b9-1" })(
          ["border-radius:", ";color:", ";"],
          en.PQ.radius.x1,
          en.Tj.text.onLight.primary
        ),
        eg = (e) => {
          var t, n, i;
          let {
              callToAction: o,
              handleAddToCartClick: s,
              handleAddToRegistryClick: c,
              handleItemClick: u,
              linkTag: p,
              index: m,
              extensionTile: v,
              placementId: x,
              product: f,
              trackingPayload: b,
              useBorder: y,
              slingshotComponentId: k,
            } = e,
            { item: C, sponsored_ad: I, tcin: j } = f,
            N = (0, R.D)(f),
            w = (0, S.V)(f),
            P = (0, L.K1)(F.fJ),
            E = null == N ? void 0 : N[0],
            D =
              (0, V.K)(null == b ? void 0 : b.strategyName) &&
              ((!!E &&
                !!(null == E ? void 0 : E.display) &&
                !!(null == E ? void 0 : E.long_description) &&
                !!(null == P ? void 0 : P.name)) ||
                !!w),
            J = (0, T.Mv)("GLOBAL_PRICE_STRIKETHROUGH_ENABLED"),
            X =
              "add_to_cart" === o &&
              (0, T.Mv)("PRZ_ITEM_CAROUSEL_ADD_TO_CART_ENABLED"),
            et = (0, L.K1)(z.oc),
            en = (0, L.K1)(F.Zd),
            el = (0, L.K1)(F.U6),
            er = (0, M.T)(),
            ed = (0, G.I)(),
            es =
              (null == C ? void 0 : C.relationship_type_code) ===
              Y.o6.collectionParent,
            eu = (0, g.I3)(null == I ? void 0 : I.ad_source),
            ep = (0, g.hE)(null == I ? void 0 : I.ad_source),
            eg = (0, h.z1)(),
            { trackClick: e_ } = (0, Q.M)(),
            ev = (0, d.useMemo)(
              () => ({
                recClick: (0, l._)(
                  { position: m, productId: j, type: "product" },
                  b
                ),
              }),
              [m, j, b]
            ),
            ex = (0, d.useMemo)(() => {
              if (j) return { id: j, position: m, type: "TCIN", sponsored: et };
            }, [j, m, et]),
            ef = (0, d.useMemo)(
              () =>
                x &&
                (null == b ? void 0 : b.strategyDescription) &&
                (null == b ? void 0 : b.strategyId) &&
                (null == b ? void 0 : b.strategyName)
                  ? {
                      placementId: x,
                      strategyDescription:
                        null == b ? void 0 : b.strategyDescription,
                      strategyId: null == b ? void 0 : b.strategyId,
                      strategyName: null == b ? void 0 : b.strategyName,
                    }
                  : void 0,
              [x, b]
            ),
            eb = (0, d.useMemo)(() => ({ element: ex, prz: ef }), [ex, ef]),
            ey = (0, d.useCallback)(
              (e, t) => {
                let n = e.target === e.currentTarget,
                  l = e.currentTarget.contains(e.target);
                (n || l) &&
                  e_.track({
                    clickType: t,
                    featureType: "RECOMMENDATION",
                    element: ex,
                    prz: ef,
                  });
              },
              [ex, ef, e_]
            ),
            eT = (0, d.useCallback)(
              (e) => {
                ey(e, "ADD_TO_CART"), null == s || s(e);
              },
              [s, ey]
            ),
            ek = (0, d.useCallback)(
              (e) => {
                null == c || c(e);
              },
              [c]
            ),
            eC = (0, d.useCallback)(() => {
              et &&
                (ep(),
                eg.trackEvent(
                  ((e) => {
                    let t = null == e ? void 0 : e.sponsored_ad;
                    if (t) {
                      let { ad_source: n, click_id: l, click_token: i } = t;
                      return {
                        customInteraction: {
                          value: "".concat(l, "|").concat(i),
                          type: "click",
                        },
                        products: [{ tcin: e.tcin, sponsor: { name: n } }],
                        guest: { eventType: "customInteraction" },
                        webClientLocalMetadata: {
                          targetSponsoredProductTcin: e.tcin,
                        },
                      };
                    }
                    return {};
                  })(f)
                ),
                eg.trackEvent({
                  event: {
                    name: "openNewPage",
                    source: "product ad | ".concat(x, " | ").concat(m),
                    type: "click",
                  },
                  guest: { eventType: "click" },
                  products: [{ tcin: j }],
                })),
                null == u || u();
            }, [u, m, et, x, f, j, eg, ep]),
            eI = (0, d.useCallback)(
              (e) =>
                (0, r._)((0, l._)({}, e), {
                  lnk: (0, r._)((0, l._)({}, e.lnk), {
                    recClick: (0, r._)((0, l._)({}, b), {
                      position: m,
                      productId: j,
                    }),
                  }),
                }),
              [m, j, b]
            );
          return (0, a.jsx)(ec, {
            children: (0, a.jsx)(_.F, {
              clickId: null == I ? void 0 : I.click_id,
              creativeId: null == I ? void 0 : I.impression_id,
              tcin: j,
              token: null == I ? void 0 : I.click_token,
              useTrackers: eu,
              children: (0, a.jsxs)(ei, {
                className: v ? "extension-tile" : "",
                "data-test": "item-card-".concat(j),
                useBorder: y,
                children: [
                  (0, a.jsxs)("div", {
                    style: { flex: "1 0 auto", width: "100%" },
                    children: [
                      (0, a.jsx)(_.F, {
                        clickType: "PRODUCT",
                        element: ex,
                        featureType: "RECOMMENDATION",
                        id: j,
                        position: m,
                        prz: ef,
                        sourceId: void 0,
                        type: "TCIN",
                        useTrackers: $.k,
                        children: (0, a.jsx)(eh, {
                          "data-index": j,
                          "data-lnk": p
                            ? "".concat(p, " || ").concat(j, " PDP")
                            : null,
                          "data-test": "item-link",
                          href: en,
                          onClick: eC,
                          underline: "invert",
                          children: (0, a.jsx)(ee, { alt: er, src: el }),
                        }),
                      }),
                      D &&
                        (0, a.jsx)(em, {
                          "data-test": "product-tile-desirability-cue-badge",
                          children: (0, a.jsx)(Z.p, {
                            "data-position": m,
                            "data-strategy-description":
                              null == b ? void 0 : b.strategyDescription,
                            "data-strategy-id":
                              null == b ? void 0 : b.strategyId,
                            "data-strategy-name":
                              null == b ? void 0 : b.strategyName,
                            description:
                              null !=
                              (t = null == E ? void 0 : E.long_description)
                                ? t
                                : "",
                            display:
                              null != (n = null == E ? void 0 : E.display)
                                ? n
                                : "",
                            itemType:
                              null != (i = null == P ? void 0 : P.name)
                                ? i
                                : "",
                            ornaments: w,
                            ornamentType: "guest",
                            placement: "CAROUSEL",
                            "placement-id": x,
                          }),
                        }),
                      (0, a.jsx)(ea, {
                        children: (0, a.jsx)(_.F, {
                          clickType: "PRODUCT",
                          element: ex,
                          featureType: "RECOMMENDATION",
                          id: j,
                          position: m,
                          prz: ef,
                          sourceId: void 0,
                          type: "TCIN",
                          useTrackers: $.k,
                          children: (0, a.jsxs)(eh, {
                            "data-index": j,
                            "data-lnk": p
                              ? "".concat(p, " || ").concat(j, " PDP")
                              : null,
                            "data-test": "item-link",
                            href: en,
                            onClick: eC,
                            underline: "invert",
                            children: [
                              (0, a.jsx)(q.x, {
                                isStrikethroughPriceEnabled: J,
                                showPdpPromoMessage: !0,
                                textAlignment: "left",
                              }),
                              (0, a.jsx)(O.P, {
                                className:
                                  "h-text-md h-hidden-md-up h-margin-t-tiny",
                                "data-test": "product-title-sm",
                                lines: 3,
                                children: er,
                              }),
                              (0, a.jsx)(O.P, {
                                className:
                                  "h-text-md h-hidden-sm-down h-margin-t-tiny",
                                "data-test": "product-title-md-lg",
                                lines: 2,
                                children: er,
                              }),
                              et &&
                                (0, a.jsx)("p", {
                                  className: "h-text-sm h-margin-t-tiny",
                                  children: "Sponsored",
                                }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  es
                    ? (0, a.jsx)(eo, {
                        onClick: eC,
                        children: (0, a.jsx)(A.$, {
                          "aria-label": "Shop collection",
                          href: en,
                          isFullWidth: !0,
                          size: "sm",
                          children: "Shop collection",
                        }),
                      })
                    : "add_to_registry" === o
                    ? (0, a.jsx)(eo, {
                        onClick: ek,
                        children: (0, a.jsx)(K.Q, {
                          buttonSize: "sm",
                          featureType: "RECOMMENDATION",
                          isInPrzCarousel: !0,
                          lnkData: ev,
                          placementId: x,
                          showPlpVersionButton: !0,
                          slingshotComponentId: k,
                          trackingData: eb,
                        }),
                      })
                    : X
                    ? (0, a.jsx)(eo, {
                        onClick: eT,
                        children: (0, a.jsx)(
                          B.AddToCartButtonForProductContext,
                          {
                            "aria-label": "Add to cart - ".concat(er),
                            handleOverridingOrAddingTrackingFieldsToAddToCartSuccess:
                              eI,
                            isFullWidth: !0,
                            isIntentAware: !0,
                            placementType: U.my.SlingshotCarousel,
                            size: "sm",
                          }
                        ),
                      })
                    : ed
                    ? (0, a.jsx)(eo, {
                        children: (0, a.jsx)(W.T, { placement: H.h.PLP_PRZ }),
                      })
                    : null,
                ],
              }),
            }),
          });
        };
      eg.displayName = "ProductsTileContent";
      var e_ = (0, D.h)({
        action: "error_boundary_prz_carousel_products_tile",
      })(eg);
      let ev = (e) => {
        let { product: t } = e,
          { tcin: n, sponsored_ad: i } = t,
          r = (0, g.I3)(null == i ? void 0 : i.ad_source);
        return (0, a.jsx)(_.F, {
          clickId: null == i ? void 0 : i.click_id,
          creativeId: null == i ? void 0 : i.impression_id,
          tcin: n,
          token: null == i ? void 0 : i.click_token,
          useTrackers: r,
          children: (0, a.jsx)(e_, (0, l._)({}, e)),
        });
      };
      ev.displayName = "ProductsTile";
      var ex = (0, D.h)({
          action: "error_boundary_prz_carousel_products_tile",
        })(ev),
        ef = n(71341);
      let eb = "@web/SlingshotComponents/ProductsCarousel";
      en.Tj.palette.gray.darkest, en.Tj.palette.white;
      let ey = new Set(["r7ogo", "t29ms"]);
      var eT = n(40175);
      let ek = et.I4.div.withConfig({ componentId: "sc-28112cdc-0" })(
          ["margin:", ";width:calc(100% - ", ");min-width:110px;"],
          en.xe.generic.x1,
          en.xe.generic.x2
        ),
        eC = et.I4.div.withConfig({ componentId: "sc-28112cdc-1" })([
          "width:100%;min-width:117px;",
        ]),
        eI = et.I4.div.withConfig({ componentId: "sc-28112cdc-2" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;padding-bottom:100%;background:#c4c4c4;}",
        ]),
        ej = et.I4.div.withConfig({ componentId: "sc-28112cdc-3" })(
          [
            "position:relative;font-size:14px;&::before{content:' ';display:block;width:50%;height:1em;background:",
            ";margin-top:0.25em;margin-bottom:0.4em;}",
          ],
          en.Tj.palette.gray.darkest
        ),
        eN = et.I4.div.withConfig({ componentId: "sc-28112cdc-4" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:90%;height:1em;background:#c4c4c4;margin-bottom:0.25em;}&::after{content:' ';display:block;width:80%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}",
        ]),
        ew = et.I4.div.withConfig({ componentId: "sc-28112cdc-5" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:70%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}",
        ]);
      function eP(e) {
        let { useBorder: t } = e;
        return (0, a.jsxs)(ei, {
          "data-test": "@web/SiteTopOfFunnel/ProductsTilePlaceholder",
          useBorder: t,
          children: [
            (0, a.jsx)(eC, { children: (0, a.jsx)(eI, {}) }),
            (0, a.jsxs)(ek, {
              children: [
                (0, a.jsx)(ej, {}),
                (0, a.jsx)(eN, {}),
                (0, a.jsx)(ew, {}),
              ],
            }),
          ],
        });
      }
      eP.displayName = "ProductsTilePlaceholder";
      var eE = n(4990),
        eD = n(41622);
      let eA = et.I4.div.withConfig({ componentId: "sc-58d48edd-0" })(
          ["height:284px;@media (max-width:", "){height:227px;}"],
          en.fi.smMax
        ),
        eO = () => {
          let { screenMd: e } = (0, m.e)();
          return (0, a.jsxs)(eA, {
            className: "h-margin-b-default h-padding-h-tiny h-margin-t-x2",
            "data-test": "@web/slingshot-components/TilePlaceholder",
            children: [
              (0, a.jsx)("h3", {
                className: "h-sr-only",
                children: "Loading...",
              }),
              (0, a.jsx)(
                eD.O,
                (0, l._)(
                  {},
                  {
                    isAnimated: !0,
                    height: "100%",
                    width: e ? "185px" : "125px",
                  }
                )
              ),
            ],
          });
        };
      eO.displayName = "TilePlaceholder";
      var eR = n(2503),
        eS = n(6908);
      let eL = () => {
        let { trackSignInClick: e } = (() => {
            let { trackEvent: e } = (0, h.z1)();
            return {
              trackSignInClick: () =>
                e({
                  guest: { eventType: "click" },
                  lnk: {
                    contentClick: {
                      component: "DPLP SignInButton",
                      componentType: "Button",
                      linkName: "SignInButton",
                    },
                  },
                }),
              trackCircleOptinClick: () =>
                e({
                  guest: { eventType: "click" },
                  lnk: {
                    contentClick: {
                      component: "DPLP CircleOptinButton",
                      componentType: "Button",
                      linkName: "CircleOptinButton",
                    },
                  },
                }),
            };
          })(),
          t = (0, d.useCallback)(
            (t) => {
              null == t || t.preventDefault(), e(), (0, eR.Jv)();
            },
            [e]
          ),
          { screenMd: n } = (0, m.e)(),
          l = !n;
        return (0, a.jsxs)(ed, {
          "data-test": "deals-top-items-sign-in",
          children: [
            (0, a.jsxs)(es, {
              children: [
                (0, a.jsx)(eS.V, {
                  alt: "",
                  className: l ? "" : "h-margin-h-x2",
                  height: "118px",
                  src: "https://target.scene7.com/is/content/Target/GUEST_b35e1251-ed27-4fdb-b18b-66cef3463e86",
                }),
                (0, a.jsxs)("span", {
                  className: l
                    ? "h-text-bold h-text-md"
                    : "h-text-bold h-text-md h-margin-t-tight",
                  children: [
                    "Save on your popular items",
                    (0, a.jsx)("span", {
                      className: "h-display-block",
                      children: " from this deal",
                    }),
                  ],
                }),
                (0, a.jsx)("span", {
                  className: "h-text-sm h-padding-v-tiny",
                  children:
                    "Add items to cart with a tap. Plus discover even more items we think you’ll love!",
                }),
              ],
            }),
            (0, a.jsx)(A.$, {
              isFullWidth: !0,
              onClick: t,
              size: "sm",
              type: "button",
              children: "Sign in",
            }),
          ],
        });
      };
      eL.displayName = "SignInTile";
      let eF = (0, D.h)({
        action: "error_boundary_deals_hub_top_items_sign_in",
      })(eL);
      var ez = n(99572);
      let eM = (e) => {
        let { linkUrl: t, trackingData: n, variation: i = "LINK" } = e,
          { trackClick: r } = (0, Q.M)(),
          o = "Shop all ".concat("young adult clothing"),
          s = (0, d.useCallback)(() => {
            r.track(
              (0, l._)(
                {
                  clickType: "SHOP_ALL",
                  featureType: "RECOMMENDATION",
                  prz: null == n ? void 0 : n.prz,
                },
                t ? { element: { type: "LINK", id: t } } : void 0
              )
            );
          }, [t, r, null == n ? void 0 : n.prz]);
        return "TILE" === i
          ? (0, a.jsx)("div", {
              className: "".concat(ez.ShopAllTile),
              children: (0, a.jsx)("div", {
                className: "h-margin-b-default h-padding-h-tiny h-margin-t-x2",
                "data-test": "@web/slingshot-components/ShopAllTile",
                children: (0, a.jsx)("div", {
                  children: (0, a.jsx)(ep.N, {
                    "aria-label": o,
                    href: t,
                    onClick: s,
                    underline: "invert",
                    children: "Shop all",
                  }),
                }),
              }),
            })
          : (0, a.jsx)(ep.N, {
              "aria-label": o,
              href: t,
              onClick: s,
              children: "Shop all",
            });
      };
      eM.displayName = "ShopAllExperimentLinkORTile";
      var eB = n(73919);
      let eU = (e) => ("standard" === e ? "default" : e);
      function eG(e) {
        var t, n, i, o, D, A, O, R, S, L, F, z;
        let { content: M, metadata: B, options: U, order: G } = e,
          W = (0, x.$7)(),
          { isBot: H } = (0, d.useContext)(p.B.Context),
          {
            hasSlingshotComponentIdToGuestSpecificRecommendationsVariablesMap:
              V,
            slingshotComponentIdToGuestSpecificRecommendationsVariablesMap: Z,
          } = (0, d.useContext)(eB.u),
          q =
            null == B || null == (n = B.components) || null == (t = n[0])
              ? void 0
              : t.id,
          K = (null == M ? void 0 : M.id) || q || "",
          Y = Z ? Z[K] : void 0,
          Q = V && !!Y,
          {
            background_color: $,
            endcap: J,
            link_tag: X,
            margin_bottom: ee,
            text_color: et,
            custom_headline: en,
            placement_id: el,
          } = null != M ? M : {},
          {
            fullWidth: ei = !1,
            isDPLPCarousel: ea = !1,
            isExtension: er = !1,
            suppressHeadline: eo = !1,
            shopAllExperiment: {
              showShopAllLink: ed,
              shopAllLinkUrl: es,
              shopAllVariation: ec,
              shopAllHeadline: eu,
            } = { showShopAllLink: !1 },
          } = null != U ? U : {},
          ep = !!J && !j(J),
          em =
            null !=
            (R = null != (O = null == J ? void 0 : J.background_color) ? O : $)
              ? R
              : "",
          eh = null != et ? et : "",
          eg = (0, h.z1)(),
          { criteoAdTrackServedDisplayImpression: e_ } = (0, g.Eh)(),
          { ratpAdTrackServedDisplayImpression: ev } = (0, g.Ro)(),
          { asPath: ek, query: eC } = (0, I.rd)(),
          eI = (0, k.x6)(ek),
          ej = (0, k.rv)(ek),
          eN = !$ || "white" === $ || "#FFFFFF" === $.toUpperCase(),
          { screenMd: ew } = (0, m.e)(),
          eD = (0, w.M)(),
          eA = P(ek),
          eR =
            null == B || null == (o = B.components) || null == (i = o[0])
              ? void 0
              : i.placement_id,
          eS = (0, C.xs)(eC, "facetedValue"),
          eL = null != eS ? eS : null == M ? void 0 : M.facet_ids,
          ez =
            (null == M ? void 0 : M.placement_id) ===
            "adapt_primary_top_sellers"
              ? eL
              : null == M
              ? void 0
              : M.facet_ids,
          eG =
            (null == M ? void 0 : M.placement_id) ===
              "adapt_primary_top_sellers" && ey.has(ej)
              ? ej
              : void 0,
          eW = (0, x.x7)(),
          { preferredStoreId: eH } = (0, E._f)(),
          [eV, eZ] = (0, f.Rt)(Y, { enabled: Q }),
          [eq, eK] = (0, f.Ri)(
            {
              placement_id: null == M ? void 0 : M.placement_id,
              category_id: null == M ? void 0 : M.category_id,
              brand_ids: null == M ? void 0 : M.brand_ids,
              offer_id: null == M ? void 0 : M.offer_id,
              fulfillment_types: null == M ? void 0 : M.fulfillment_types,
              slingshot_component_id: q,
              resolve_to_first_variation_child: "/c/0cb2f" === eI,
              facet_ids: ez,
              exclude_category_ids: eG,
              include_dmc_dmr: !!eH && !!eW,
              member_id: eW,
              pricing_store_id: eH,
              marketing_group_ids: null == M ? void 0 : M.marketing_group_ids,
            },
            { enabled: !Q }
          ),
          eY = Q ? eV : eq,
          eQ = Q ? eZ : eK,
          e$ = eQ.isIdle || eQ.isFetching || eQ.isLoading,
          eJ = eY(b.Tl);
        (0, d.useEffect)(() => {
          if (
            eJ &&
            eg &&
            (eg.trackEvent(
              (0, l._)(
                { guest: { eventType: "recommendations" } },
                ((e, t) => {
                  if (!e) return {};
                  let {
                    category_id: n,
                    doctype: l,
                    placement_id: i,
                    strategy_description: a,
                    strategy_id: r,
                    strategy_name: o,
                    products: d = [],
                  } = e;
                  return {
                    recommendations: {
                      categoryId: n,
                      docType: l,
                      placementId: i,
                      strategyDescription: a,
                      strategyId: r,
                      strategyName: o,
                      type: "product",
                    },
                    components: [{ component: t, type: "components" }],
                    products: d.map((e) => {
                      let { tcin: t } = e;
                      return { placementType: "recommendations", tcin: t };
                    }),
                  };
                })(eJ, q)
              )
            ),
            (0, T.Mv)("TPA_FIREFLY_VNEXT_IMPRESSIONS_ENABLED"))
          ) {
            var e, t;
            let n = ((e) => {
                var t;
                let n =
                  null == e || null == (t = e.products)
                    ? void 0
                    : t
                        .filter((e) => "sponsored_ad" in e)
                        .filter((e) => {
                          var t;
                          return (
                            (null == (t = e.sponsored_ad)
                              ? void 0
                              : t.ad_source) === "criteo"
                          );
                        });
                return !n || n.length <= 0
                  ? {}
                  : {
                      criteo:
                        null == n
                          ? void 0
                          : n.map((e) => ({
                              creative_id: e.sponsored_ad
                                ? e.sponsored_ad.impression_id
                                : "",
                              tcin: e.tcin,
                            })),
                    };
              })(eJ),
              l = ((e) => {
                var t;
                let n =
                  null == e || null == (t = e.products)
                    ? void 0
                    : t
                        .filter((e) => "sponsored_ad" in e)
                        .filter((e) => {
                          var t;
                          return (
                            (null == (t = e.sponsored_ad)
                              ? void 0
                              : t.ad_source) === "ratp"
                          );
                        });
                return !n || n.length <= 0
                  ? {}
                  : {
                      ratp:
                        null == n
                          ? void 0
                          : n.map((e, t) => {
                              var n, l;
                              return {
                                ad_token:
                                  (null == (n = e.sponsored_ad)
                                    ? void 0
                                    : n.click_token) || "",
                                position: t,
                                server_impression_id:
                                  (null == (l = e.sponsored_ad)
                                    ? void 0
                                    : l.impression_id) || "",
                              };
                            }),
                    };
              })(eJ),
              i =
                (null != (e = null == n ? void 0 : n.criteo) ? e : []).length >
                0,
              a =
                (null != (t = null == l ? void 0 : l.ratp) ? t : []).length > 0;
            i && a
              ? e_.track({ criteo: n.criteo, ratp: l.ratp })
              : i
              ? e_.track({ criteo: n.criteo })
              : a && ev.track({ ratp: l.ratp });
          }
        }, [eJ, eg, q, e_, ev]);
        let eX = (0, b.CP)(eJ),
          e0 = null != eu ? eu : (0, b.Z5)(eJ),
          e1 =
            null !=
            (S =
              null == (A = eY()) || null == (D = A.recommended_products)
                ? void 0
                : D.placement_id)
              ? S
              : "",
          e2 = null != (L = (0, b.Sh)(eJ)) ? L : "",
          e4 = (0, b.MT)(eJ),
          e3 = null != (F = (0, b.Z5)(eJ)) ? F : "",
          e6 = { strategyId: e2, strategyName: e4, strategyDescription: e0 },
          e7 = (0, d.useCallback)(
            (e, t) => () => {
              let n = ((e, t) => {
                var n, l, i;
                let a =
                  null !=
                  (l = null == e || null == (n = e.components) ? void 0 : n[0])
                    ? l
                    : {};
                return {
                  name:
                    null != (i = null == a ? void 0 : a.title)
                      ? i
                      : null == a
                      ? void 0
                      : a.id,
                  position: String(t),
                  component: (null == a ? void 0 : a.title)
                    ? ""
                        .concat(null == a ? void 0 : a.id, " || ")
                        .concat(null == a ? void 0 : a.title)
                    : null == a
                    ? void 0
                    : a.id,
                  componentType: null == a ? void 0 : a.type_name,
                  contentType: null == a ? void 0 : a.content_type,
                };
              })(B, G);
              (0, h.cW)({
                recClick: {
                  position: e,
                  productId: t,
                  strategyId: e2,
                  strategyName: e4,
                  type: "product",
                },
                contentClick: n,
              });
            },
            [e2, e4, B, G]
          ),
          e8 = (0, d.useCallback)(
            (e) => {
              var t, n;
              let l = e.target === e.currentTarget,
                i = e.currentTarget.contains(e.target);
              (l || i) &&
                eg.trackEvent({
                  event: {
                    name: "addToRegistry",
                    source:
                      null == B ||
                      null == (n = B.components) ||
                      null == (t = n[0])
                        ? void 0
                        : t.id,
                    type: "click",
                  },
                  guest: { eventType: "click" },
                });
            },
            [B, eg]
          ),
          e5 = (0, d.useCallback)(
            (e) => {
              let t = e.target === e.currentTarget,
                n = e.currentTarget.contains(e.target);
              (t || n) &&
                eg.trackEvent({
                  event: { name: "addToCart", source: q, type: "click" },
                  guest: { eventType: "click" },
                });
            },
            [eg, q]
          ),
          e9 =
            !!(null == M ? void 0 : M.placement_id) &&
            !!(null == eX ? void 0 : eX.length),
          te = ep
            ? (0, a.jsx)(
                eT.o,
                (0, r._)((0, l._)({}, J), {
                  background_color: em,
                  headline: (() => {
                    if (!e$)
                      return eD
                        ? e0 || en || "Headline placeholder"
                        : e0 && e9
                        ? e0
                        : "";
                  })(),
                  placementId: el,
                  text_color: eh,
                })
              )
            : null,
          tt = ew ? te : null,
          tn = ew ? null : te,
          tl = N(10).map((e) =>
            (0, a.jsx)(
              s.A,
              {
                className: "h-margin-b-tight",
                iterator: e,
                children: (0, a.jsx)(eO, {}),
              },
              e
            )
          ),
          ti = N(10).map((e) =>
            0 === e && tt
              ? (0, a.jsx)(
                  s.A,
                  { className: "h-margin-b-tight", iterator: e, children: tt },
                  "prz-placeholder-endcap"
                )
              : (0, a.jsx)(
                  s.A,
                  {
                    className: "h-margin-b-tight",
                    iterator: e,
                    children: (0, a.jsx)(eP, { useBorder: eN }),
                  },
                  e
                )
          ),
          ta = eo
            ? null
            : (0, a.jsxs)(ef.Qb, {
                background_color: em || $,
                className:
                  "l-container l-container-standard h-padding-a-x2 ".concat(
                    ep ? "h-sr-only" : ""
                  ),
                text_color: eh,
                children: [
                  (0, a.jsx)(c.D, {
                    className: "h-margin-b-none h-margin-t-x2",
                    level: 2,
                    size: 1,
                    style: { color: "inherit" },
                    children: e$
                      ? (0, a.jsx)("span", { children: "\xa0" })
                      : eD
                      ? e0 || en || "Headline placeholder"
                      : e0 && e9
                      ? e0
                      : "",
                  }),
                  ed && "LINK" === ec
                    ? (0, a.jsx)(eM, {
                        linkUrl: es,
                        trackingData: {
                          prz: {
                            placementId: e1,
                            strategyId: e2,
                            strategyName: e4,
                            strategyDescription: e3,
                          },
                        },
                        variation: ec,
                      })
                    : void 0,
                ],
              });
        if (H && !e9) return null;
        let tr =
          null !=
          (z =
            null == eX
              ? void 0
              : eX.map((e, t) => {
                  var n;
                  return (0, a.jsx)(
                    y.M,
                    {
                      debugName: "PersonalizationCarouselWithProducts",
                      queryResult: eQ,
                      value: (0, l._)({}, e),
                      children: (0, a.jsx)(
                        _.F,
                        {
                          carouselData: (0, l._)(
                            {
                              prz: {
                                placementId: e1,
                                strategyId: e2,
                                strategyName: e4,
                                strategyDescription: e3,
                              },
                              element: {
                                id: e.tcin,
                                sponsored: !1,
                                type: "TCIN",
                                position: t,
                              },
                            },
                            q && eR
                              ? {
                                  slingshot: {
                                    componentId: q,
                                    placementId: eR,
                                  },
                                }
                              : {}
                          ),
                          tracking: ["impression"],
                          useTrackers: v.F,
                          children: (0, a.jsx)(ef.Ay, {
                            children: (0, a.jsx)(ex, {
                              callToAction:
                                null == M || null == (n = M.container)
                                  ? void 0
                                  : n.callToAction,
                              extensionTile: er,
                              handleAddToCartClick: e5,
                              handleAddToRegistryClick: e8,
                              handleItemClick: e7(
                                t,
                                null == e ? void 0 : e.tcin
                              ),
                              index: t,
                              linkTag: X,
                              placementId: null == M ? void 0 : M.placement_id,
                              product: e,
                              slingshotComponentId: q,
                              trackingPayload: e6,
                              useBorder: eN,
                            }),
                          }),
                        },
                        null == e ? void 0 : e.tcin
                      ),
                    },
                    e.tcin
                  );
                }))
            ? z
            : [];
        !ea || W || e$ || tr.unshift((0, a.jsx)(eF, {})), tt && tr.unshift(tt);
        let to = ew && !!$ && !er && !tt,
          td = !ew || ep;
        if (
          (ed &&
            "TILE" === ec &&
            !j(eX) &&
            tr.push(
              (0, a.jsx)(
                eM,
                {
                  linkUrl: es,
                  trackingData: {
                    prz: {
                      placementId: e1,
                      strategyId: e2,
                      strategyName: e4,
                      strategyDescription: e3,
                    },
                  },
                  variation: ec,
                },
                "shop-all-link"
              )
            ),
          eD)
        ) {
          let e = e$ ? (eA ? ti : tl) : ti;
          return (0, a.jsxs)("div", {
            "aria-label": "Carousel",
            className: "l-container ".concat(ei ? "" : "l-container-standard"),
            "data-test": eb,
            role: "region",
            children: [
              ta,
              (0, a.jsxs)(ef.wq, {
                backgroundColor: null == M ? void 0 : M.background_color,
                className: "".concat(ee ? "h-margin-b-".concat(eU(ee)) : ""),
                "data-test": "filmstrip-products-carousel",
                extraPadding: to,
                children: [
                  tn,
                  (0, a.jsx)(u.F, {
                    buttonBehavior: ew ? "alwaysAppear" : "tabAppear",
                    className: "h-padding-t-tight",
                    itemGap: ew ? "16px" : "8px",
                    shouldScrollEnd: !0,
                    children:
                      tr.length > 0
                        ? null == tr
                          ? void 0
                          : tr.map((e, t, n) =>
                              (0, a.jsx)(
                                s.A,
                                {
                                  className: ""
                                    .concat(
                                      0 === t && (to || td)
                                        ? "h-padding-l-tight"
                                        : "",
                                      "\n                  "
                                    )
                                    .concat(
                                      t === n.length - 1
                                        ? "h-padding-r-tight"
                                        : "",
                                      " h-margin-b-tight"
                                    ),
                                  iterator: t,
                                  children: e,
                                },
                                "product-carousel-".concat(t)
                              )
                            )
                        : e$ || j(eX)
                        ? e
                        : [],
                  }),
                ],
              }),
            ],
          });
        }
        return (0, a.jsx)(eE._, {
          controlled: !0,
          noAnimation: e$ || e9,
          open: e$ || e9,
          variant: "bare",
          children: (0, a.jsxs)("div", {
            "aria-label": "Carousel",
            className: "l-container ".concat(ei ? "" : "l-container-standard"),
            "data-test": eb,
            role: "region",
            children: [
              ta,
              (0, a.jsxs)(ef.wq, {
                backgroundColor: null == M ? void 0 : M.background_color,
                className: "".concat(ee ? "h-margin-b-".concat(eU(ee)) : ""),
                "data-test": "filmstrip-products-carousel",
                extraPadding: to,
                children: [
                  tn,
                  (0, a.jsx)(u.F, {
                    buttonBehavior: ew ? "alwaysAppear" : "tabAppear",
                    className: "h-padding-t-tight",
                    itemGap: ew ? "16px" : "8px",
                    shouldScrollEnd: !0,
                    children:
                      tr.length > 0
                        ? tr.map((e, t, n) =>
                            (0, a.jsx)(
                              s.A,
                              {
                                className: ""
                                  .concat(
                                    0 === t && (to || td)
                                      ? "h-padding-l-tight"
                                      : "",
                                    "\n                    "
                                  )
                                  .concat(
                                    t === n.length - 1
                                      ? "h-padding-r-tight"
                                      : "",
                                    " h-margin-b-tight"
                                  ),
                                iterator: t,
                                children: e,
                              },
                              "product-carousel-".concat(t)
                            )
                          )
                        : e$
                        ? tl
                        : [],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      eG.displayName = "ProductsCarousel";
      var eW = n(33909),
        eH = n(11671),
        eV = n(35806);
      let eZ = (e, t) => {
        var n, l, i;
        let a =
          null != (l = null == e || null == (n = e.components) ? void 0 : n[0])
            ? l
            : {};
        return {
          name:
            null != (i = null == a ? void 0 : a.title)
              ? i
              : null == a
              ? void 0
              : a.id,
          position: String(t),
          component: (null == a ? void 0 : a.title)
            ? ""
                .concat(null == a ? void 0 : a.id, " || ")
                .concat(null == a ? void 0 : a.title)
            : null == a
            ? void 0
            : a.id,
          componentType: null == a ? void 0 : a.type_name,
          contentType: null == a ? void 0 : a.content_type,
        };
      };
      var eq = n(18673),
        eK = n(51705),
        eY = n(6708),
        eQ = n(16321),
        e$ = n(37),
        eJ = n(34593),
        eX = n(70418),
        e0 = n(18551),
        e1 = n(50301),
        e2 = n(58111),
        e4 = n(72396),
        e3 = n(37294),
        e6 = n(68465),
        e7 = n(29267),
        e8 = n(3651),
        e5 = n(61379);
      let e9 = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        te = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        tt =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        tn = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function tl(e) {
        return e ? parseInt(e) : 1;
      }
      function ti(e) {
        return (e && parseFloat(e.replace(",", "."))) || 0;
      }
      let ta = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function tr(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
      let to = "@web/SiteTopOfFunnel/CircleOfferTile",
        td = {
          OFFER_TILE: "".concat(to, "/OfferTile"),
          OFFER_DETAILS_LINK: "".concat(to, "/OfferDetailsLink"),
        };
      function ts(e) {
        var t, n, i, o, s, c, u, p, g, v, x, f, b;
        let {
            index: y,
            extensionTile: T,
            linkTag: k,
            metadata: C,
            offer: I,
            order: j,
            strategyId: N,
            strategyName: w,
            strategyDescription: P,
            placementId: E,
            useBorder: D,
          } = e,
          A = ""
            .concat(null == I ? void 0 : I.value, " ")
            .concat(null == I ? void 0 : I.title),
          R =
            (null == I ? void 0 : I.channel) &&
            ["DMC", "DMR"].includes(null == I ? void 0 : I.channel),
          S = (null == I ? void 0 : I.eligible_items_url)
            ? new eX.o(null == I ? void 0 : I.eligible_items_url)
                .makeRelative()
                .toString()
            : R
            ? new eX.o("/pl/".concat(null == I ? void 0 : I.id))
                .makeRelative()
                .toString()
            : "",
          L = !!S,
          { screenMd: F } = (0, m.e)(),
          z = ((e) => {
            switch (null == e ? void 0 : e.channel) {
              case "DMR":
                return "dmr";
              case "DMC":
                return "dmc";
              case "CWL":
              case "CIR":
                return (null == e ? void 0 : e.personalized) ||
                  (null == e ? void 0 : e.tactic) !== "Mass"
                  ? "circle_segmented"
                  : "circle_mass";
              default:
                return "mass";
            }
          })(I),
          M = ""
            .concat(
              null == I || null == (t = I.message)
                ? void 0
                : t.short_description,
              " "
            )
            .concat(
              null == I || null == (n = I.message) ? void 0 : n.long_description
            ),
          [B] = (0, e0.RJ)(),
          U = B(e1.UK),
          G = (0, e2.p)(),
          W = (0, d.useContext)(eK.O),
          { trackEvent: H } = (0, h.z1)(),
          { trackClick: V } = (0, Q.M)(),
          Z = I ? (0, eY.l)(I) : void 0,
          { checkIsExperimentEnabledAndTrackFireflyEvent: q } = (0, e4.G)(
            "PROMO_LIST_SAVE_ENABLED"
          );
        (0, d.useEffect)(() => {
          q();
        }, [q]);
        let K = (0, d.useMemo)(
            () =>
              E && P && N && w
                ? {
                    placementId: E,
                    strategyDescription: P,
                    strategyId: N,
                    strategyName: w,
                  }
                : void 0,
            [E, P, N, w]
          ),
          Y = (0, d.useMemo)(
            () =>
              (null == I ? void 0 : I.id)
                ? { id: I.id, position: y, type: "OFFER" }
                : void 0,
            [null == I ? void 0 : I.id, y]
          ),
          J = (0, d.useCallback)(() => {
            V.track({
              clickType: "OFFER_DETAILS",
              featureType: "RECOMMENDATION",
              element: Y,
              prz: K,
            });
          }, [Y, K, V]),
          X = (0, d.useCallback)(() => {
            H({
              guest: { eventType: "click" },
              promotionInfo: {
                promos: [
                  { type: z, name: M, ivyPromoId: null == I ? void 0 : I.id },
                ],
              },
            });
            let e = eZ(C, j);
            S && G("EXP_CIRCLE_OFFERS_DPLP_LINKING_ENABLED"),
              (0, h.cW)({
                recClick: {
                  type: "promo",
                  offerId: null == I ? void 0 : I.id,
                  position: y,
                  strategyId: N,
                  strategyName: w,
                },
                contentClick: e,
              });
          }, [H, C, j, S, null == I ? void 0 : I.id, y, M, z, N, w, G]),
          et = (0, d.useCallback)(
            (e) => {
              V.track({
                clickType: e,
                featureType: "RECOMMENDATION",
                element: Y,
                prz: K,
              });
            },
            [Y, K, V]
          ),
          en = (0, d.useCallback)(
            (e) => {
              if (L) {
                X(), e || J();
                return;
              }
              W &&
                W({
                  type: eQ.uh.PUSH_OVERLAY,
                  value: {
                    offerId: null == I ? void 0 : I.id,
                    isCircleOffer: !0,
                  },
                }),
                X(),
                e || J();
            },
            [L, W, J, null == I ? void 0 : I.id, X]
          ),
          el = (0, d.useCallback)(() => {
            et("SHOW_ITEMS"), en(!0);
          }, [en, et]),
          ed = (0, d.useCallback)(() => {
            et("APPLY_OFFER");
          }, [et]),
          es = (0, d.useCallback)(() => {
            et("REMOVE_OFFER");
          }, [et]),
          ec = (0, d.useMemo)(() => {
            var e, t, n, l;
            return (null !=
            (n = null == I || null == (e = I.value) ? void 0 : e.length)
              ? n
              : 0) > 20 &&
              (null !=
              (l = null == I || null == (t = I.title) ? void 0 : t.length)
                ? l
                : 0) > 20
              ? 1
              : 2;
          }, [
            null == I || null == (i = I.title) ? void 0 : i.length,
            null == I || null == (o = I.value) ? void 0 : o.length,
          ]),
          ep = new eX.o(null != (f = null == I ? void 0 : I.image_url) ? f : "")
            .setQuery({ wid: 320, hei: 320 })
            .toString(),
          em = (0, d.useMemo)(() => {
            var e;
            if (!(null == I ? void 0 : I.expiration_date)) return;
            let t = null != (e = I.expiration_date.split("-")[2]) ? e : "",
              n = "".concat(Number.parseInt(t, 10)),
              l = (0, e6.GP)(
                (function (e, t) {
                  var n;
                  let l,
                    i,
                    a = () => (0, e8.w)(void 0, NaN),
                    r = ((n = void 0), 2),
                    o = (function (e) {
                      let t,
                        n = {},
                        l = e.split(e9.dateTimeDelimiter);
                      if (l.length > 2) return n;
                      if (
                        (/:/.test(l[0])
                          ? (t = l[0])
                          : ((n.date = l[0]),
                            (t = l[1]),
                            e9.timeZoneDelimiter.test(n.date) &&
                              ((n.date = e.split(e9.timeZoneDelimiter)[0]),
                              (t = e.substr(n.date.length, e.length)))),
                        t)
                      ) {
                        let e = e9.timezone.exec(t);
                        e
                          ? ((n.time = t.replace(e[1], "")),
                            (n.timezone = e[1]))
                          : (n.time = t);
                      }
                      return n;
                    })(e);
                  if (o.date) {
                    let e = (function (e, t) {
                      let n = RegExp(
                          "^(?:(\\d{4}|[+-]\\d{" +
                            (4 + t) +
                            "})|(\\d{2}|[+-]\\d{" +
                            (2 + t) +
                            "})$)"
                        ),
                        l = e.match(n);
                      if (!l) return { year: NaN, restDateString: "" };
                      let i = l[1] ? parseInt(l[1]) : null,
                        a = l[2] ? parseInt(l[2]) : null;
                      return {
                        year: null === a ? i : 100 * a,
                        restDateString: e.slice((l[1] || l[2]).length),
                      };
                    })(o.date, r);
                    l = (function (e, t) {
                      var n, l, i, a, r, o, d;
                      if (null === t) return new Date(NaN);
                      let s = e.match(te);
                      if (!s) return new Date(NaN);
                      let c = !!s[4],
                        u = tl(s[1]),
                        p = tl(s[2]) - 1,
                        m = tl(s[3]),
                        h = tl(s[4]),
                        g = tl(s[5]) - 1;
                      if (c) {
                        return ((n = h),
                        (l = g),
                        n >= 1 && n <= 53 && l >= 0 && l <= 6)
                          ? (function (e, t, n) {
                              let l = new Date(0);
                              l.setUTCFullYear(e, 0, 4);
                              let i = l.getUTCDay() || 7;
                              return (
                                l.setUTCDate(
                                  l.getUTCDate() + ((t - 1) * 7 + n + 1 - i)
                                ),
                                l
                              );
                            })(t, h, g)
                          : new Date(NaN);
                      }
                      {
                        let e = new Date(0);
                        return ((i = t),
                        (a = p),
                        (r = m),
                        a >= 0 &&
                          a <= 11 &&
                          r >= 1 &&
                          r <= (ta[a] || (tr(i) ? 29 : 28)) &&
                          ((o = t), (d = u) >= 1 && d <= (tr(o) ? 366 : 365)))
                          ? (e.setUTCFullYear(t, p, Math.max(u, m)), e)
                          : new Date(NaN);
                      }
                    })(e.restDateString, e.year);
                  }
                  if (!l || isNaN(+l)) return a();
                  let d = +l,
                    s = 0;
                  if (
                    o.time &&
                    isNaN(
                      (s = (function (e) {
                        var t, n, l;
                        let i = e.match(tt);
                        if (!i) return NaN;
                        let a = ti(i[1]),
                          r = ti(i[2]),
                          o = ti(i[3]);
                        return ((t = a),
                        (n = r),
                        (l = o),
                        24 === t
                          ? 0 === n && 0 === l
                          : l >= 0 &&
                            l < 60 &&
                            n >= 0 &&
                            n < 60 &&
                            t >= 0 &&
                            t < 25)
                          ? a * e7.s0 + r * e7.Cg + 1e3 * o
                          : NaN;
                      })(o.time))
                    )
                  )
                    return a();
                  if (o.timezone) {
                    if (
                      isNaN(
                        (i = (function (e) {
                          var t;
                          if ("Z" === e) return 0;
                          let n = e.match(tn);
                          if (!n) return 0;
                          let l = "+" === n[1] ? -1 : 1,
                            i = parseInt(n[2]),
                            a = (n[3] && parseInt(n[3])) || 0;
                          return (t = a) >= 0 && t <= 59
                            ? l * (i * e7.s0 + a * e7.Cg)
                            : NaN;
                        })(o.timezone))
                      )
                    )
                      return a();
                  } else {
                    let e = new Date(d + s),
                      n = (0, e5.a)(0, null == t ? void 0 : t.in);
                    return (
                      n.setFullYear(
                        e.getUTCFullYear(),
                        e.getUTCMonth(),
                        e.getUTCDate()
                      ),
                      n.setHours(
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                        e.getUTCSeconds(),
                        e.getUTCMilliseconds()
                      ),
                      n
                    );
                  }
                  return (0, e5.a)(d + s + i, null == t ? void 0 : t.in);
                })(null == I ? void 0 : I.expiration_date),
                "LLL"
              );
            return "".concat(l, " ").concat(n);
          }, [null == I ? void 0 : I.expiration_date]),
          eh = (0, d.useMemo)(() => {
            var e;
            return (0, a.jsxs)(er, {
              children: [
                (0, a.jsxs)("span", {
                  children: [
                    null == I || null == (e = I.message)
                      ? void 0
                      : e.redemption_text,
                    " \xb7 ",
                  ],
                }),
                em && (0, a.jsxs)("span", { children: ["Expires ", em] }),
              ],
            });
          }, [
            em,
            null == I || null == (s = I.message) ? void 0 : s.redemption_text,
          ]),
          eg = (0, d.useMemo)(() => {
            var e, t;
            let n =
                null == I || null == (e = I.message)
                  ? void 0
                  : e.applied_action_title,
              l =
                null == I || null == (t = I.message)
                  ? void 0
                  : t.apply_action_title;
            return F
              ? { confirmedText: n || "", initialText: l || "" }
              : l && l.length <= 15
              ? { initialText: l }
              : {};
          }, [
            null == I || null == (c = I.message)
              ? void 0
              : c.applied_action_title,
            null == I || null == (u = I.message)
              ? void 0
              : u.apply_action_title,
            F,
          ]),
          e_ = (0, d.useMemo)(
            () =>
              (0, a.jsx)(
                e$.u,
                (0, l._)(
                  {
                    buttonSize: "sm",
                    isOfferAddedDefault: null == I ? void 0 : I.added,
                    metadata: C,
                    offerAriaLabel: A,
                    offerId: String(null == I ? void 0 : I.id),
                    onAddOffer: ed,
                    onRemoveOffer: es,
                    order: j,
                    trackingDetails: {
                      position: y,
                      promoName: M,
                      promoType: z,
                      strategyId: N,
                      strategyName: w,
                    },
                  },
                  eg
                )
              ),
            [
              A,
              y,
              C,
              null == I ? void 0 : I.added,
              null == I ? void 0 : I.id,
              ed,
              es,
              j,
              M,
              z,
              N,
              w,
              eg,
            ]
          ),
          ev = (0, d.useMemo)(
            () =>
              (null == I ? void 0 : I.auto_applied)
                ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                      eq.$,
                      (0, r._)(
                        (0, l._)(
                          {
                            "aria-label": "Show items for ".concat(
                              null == I ? void 0 : I.title
                            ),
                            href: L
                              ? null == I
                                ? void 0
                                : I.eligible_items_url
                              : void 0,
                            onClick: el,
                            size: "sm",
                          },
                          L && { role: "link" }
                        ),
                        {
                          type: "button",
                          variant: "outlined",
                          children: "Show items",
                        }
                      )
                    ),
                  })
                : e_,
            [
              el,
              null == I ? void 0 : I.auto_applied,
              null == I ? void 0 : I.eligible_items_url,
              null == I ? void 0 : I.title,
              e_,
              L,
            ]
          ),
          ex =
            (null == (p = (0, e3.Y)()) ? void 0 : p.PROMO_LIST_SAVE_ENABLED) &&
            U;
        return (0, a.jsxs)(ei, {
          className: T ? "extension-tile" : "",
          "data-test": td.OFFER_TILE,
          useBorder: D,
          children: [
            (0, a.jsxs)(_.F, {
              clickType: "OFFER_DETAILS",
              element: Y,
              featureType: "RECOMMENDATION",
              id: null == I ? void 0 : I.id,
              index: y,
              linkTag: k,
              position: y,
              prz: K,
              sourceId: null == I ? void 0 : I.id,
              type: "OFFER",
              useTrackers: $.k,
              children: [
                ex &&
                  (0, a.jsx)(eJ.I, {
                    ariaOfferLabel: ""
                      .concat(null == I ? void 0 : I.value, " ")
                      .concat(null == I ? void 0 : I.title),
                    componentType: "RECOMMENDATION",
                    isAutoApplied: !!(null == I ? void 0 : I.auto_applied),
                    offerId: null != (b = null == I ? void 0 : I.id) ? b : "",
                    przTracking: K,
                    saveOfferTrackingEventPayload: Z,
                  }),
                (0, a.jsxs)(ef.ah, {
                  "data-lnk": k,
                  "data-test": td.OFFER_DETAILS_LINK,
                  href: L ? S : void 0,
                  onClick: () => en(!1),
                  style: { color: "#333", flex: "1 0 auto" },
                  underline: "invert",
                  children: [
                    (0, a.jsx)(ee, { alt: "", src: ep }),
                    (0, a.jsxs)(ea, {
                      title: ""
                        .concat(null == I ? void 0 : I.value, " ")
                        .concat(null == I ? void 0 : I.title),
                      children: [
                        (null == I ? void 0 : I.membership_offer_type) ===
                        "Circle_360_Freebies"
                          ? (0, a.jsx)(eu, {
                              className: "h-text-bold",
                              children:
                                null == I || null == (g = I.message)
                                  ? void 0
                                  : g.short_description,
                            })
                          : (0, a.jsx)("div", {
                              className: "h-text-red h-text-bold",
                              children:
                                null == I || null == (v = I.message)
                                  ? void 0
                                  : v.short_description,
                            }),
                        (0, a.jsx)(O.P, {
                          className: "h-text-bold",
                          lines: ec,
                          children:
                            null == I || null == (x = I.message)
                              ? void 0
                              : x.long_description,
                        }),
                        eh,
                      ],
                    }),
                  ],
                }),
              ],
            }),
            !ex && (0, a.jsx)(eo, { $isNewPrzOffers: !0, children: ev }),
          ],
        });
      }
      ts.displayName = "OfferTile";
      let tc = et.I4.div.withConfig({ componentId: "sc-8416a7a7-0" })(
          ["margin:", ";width:calc(100% - ", ");min-width:110px;"],
          en.xe.generic.x1,
          en.xe.generic.x2
        ),
        tu = et.I4.div.withConfig({ componentId: "sc-8416a7a7-1" })([
          "width:100%;min-width:117px;",
        ]),
        tp = et.I4.div.withConfig({ componentId: "sc-8416a7a7-2" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;padding-bottom:100%;background:#c4c4c4;}",
        ]),
        tm = et.I4.div.withConfig({ componentId: "sc-8416a7a7-3" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;height:1em;background:#c00;margin-top:0.25em;margin-bottom:0.4em;}",
        ]),
        th = et.I4.div.withConfig({ componentId: "sc-8416a7a7-4" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:90%;height:1em;background:#c4c4c4;margin-bottom:0.25em;}&::after{content:' ';display:block;width:80%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}",
        ]),
        tg = et.I4.div.withConfig({ componentId: "sc-8416a7a7-5" })([
          "position:relative;font-size:clamp(14px,calc(2vw - 2px),20px);&::after{content:' ';display:block;width:100%;height:32px;background:#c00;border-radius:4px;}",
        ]);
      function t_(e) {
        let { useBorder: t } = e;
        return (0, a.jsxs)(ei, {
          "data-test": "@web/SiteTopOfFunnel/CircleOfferTilePlaceholder",
          useBorder: t,
          children: [
            (0, a.jsx)(tu, { children: (0, a.jsx)(tp, {}) }),
            (0, a.jsxs)(tc, {
              children: [(0, a.jsx)(tm, {}), (0, a.jsx)(th, {})],
            }),
            (0, a.jsx)(eo, { children: (0, a.jsx)(tg, {}) }),
          ],
        });
      }
      t_.displayName = "OfferTile";
      let tv = (e) => ("standard" === e ? "default" : e);
      function tx(e) {
        var t, n, i, o, g, x, f, b, y, T, k, C, E;
        let { content: D, options: A, metadata: O, order: R } = e,
          {
            background_color: S,
            link_tag: L,
            margin_bottom: F,
            placement_id: z,
            category_id: M,
            endcap: B,
            text_color: U,
            custom_headline: G,
            offer_id: W,
          } = null != D ? D : {},
          {
            fullWidth: H = !1,
            isExtension: V = !1,
            suppressHeadline: Z = !1,
          } = null != A ? A : {},
          { background_color: q } = null != B ? B : {},
          K = !S || "white" === S || "#FFFFFF" === S.toUpperCase(),
          { isBot: Y } = (0, d.useContext)(p.B.Context),
          [$, J] = (0, eW.rj)({
            placement_id: null != z ? z : "circle_offer_component_tester",
            category_id: M,
            offer_id: W,
            fulfillment_types: null == D ? void 0 : D.fulfillment_types,
            slingshot_component_id:
              null == O || null == (n = O.components) || null == (t = n[0])
                ? void 0
                : t.id,
          }),
          { trackClick: X } = (0, Q.M)(),
          ee = J.isIdle || J.isFetching || J.isLoading,
          et = !!B && !j(B),
          en = $(eH.cq),
          el = null != (y = $(eH.WS)) ? y : "",
          ei = $(eH.a3),
          ea =
            null != (T = null == (i = $(eH.iO)) ? void 0 : i.placement_id)
              ? T
              : "",
          er = null != (k = $(eH.fD)) ? k : "",
          eo = null == (o = $(eH.iO)) ? void 0 : o.doctype,
          { screenMd: ed } = (0, m.e)(),
          es = (0, h.z1)(),
          ec = (0, w.M)(),
          { asPath: eu } = (0, I.rd)(),
          ep = P(eu),
          em =
            null == O || null == (x = O.components) || null == (g = x[0])
              ? void 0
              : g.id,
          eh =
            null == O || null == (b = O.components) || null == (f = b[0])
              ? void 0
              : f.placement_id;
        (0, d.useEffect)(() => {
          es.trackEvent({
            guest: { eventType: "recommendations" },
            recommendations: {
              strategyId: el,
              strategyName: ei,
              placementId: ea,
              strategyDescription: er,
              docType: eo,
              type: "promo",
            },
            components: [{ component: em, type: "components" }],
          });
        }, [es, $, em, el, ei, ea, er, eo]);
        let eg = (0, d.useCallback)(() => {
            ea && el
              ? X.track({
                  featureType: "RECOMMENDATION",
                  clickType: "SHOP_ALL",
                  prz: {
                    placementId: ea,
                    strategyId: el,
                    strategyName: ei,
                    strategyDescription: er,
                  },
                })
              : X.track({
                  featureType: "RECOMMENDATION",
                  clickType: "SHOP_ALL",
                });
            let e = eZ(O, R);
            (0, h.cW)({
              contentClick: (0, r._)((0, l._)({}, e), {
                linkName: "View all Target Circle offers",
              }),
            });
          }, [O, R, ea, el, ei, er, X]),
          e_ = et
            ? (0, a.jsx)(
                eT.o,
                (0, r._)((0, l._)({}, B), {
                  background_color: null != (C = null != q ? q : S) ? C : "",
                  headline: (() => {
                    if (!ee)
                      return ec
                        ? er || G || "Headline placeholder"
                        : en
                        ? er
                        : "";
                  })(),
                  placementId: z,
                  text_color: U,
                  track_click: eg,
                })
              )
            : null,
          ev = ed ? e_ : null,
          ex = ed ? null : e_,
          eb = Z
            ? null
            : (0, a.jsxs)(ef.Qb, {
                background_color: S,
                className:
                  "l-container l-container-standard h-padding-a-x2 ".concat(
                    et ? "h-sr-only" : ""
                  ),
                text_color: U,
                children: [
                  (0, a.jsx)(c.D, {
                    className: "h-margin-b-none",
                    level: 2,
                    size: 1,
                    style: { color: "inherit" },
                    children: ee
                      ? (0, a.jsx)("span", { children: "\xa0" })
                      : ec
                      ? er || G || "Headline placeholder"
                      : en
                      ? er
                      : "",
                  }),
                  (0, a.jsx)(eV.H, { placementId: eh, trackClick: eg }),
                ],
              }),
          ey = N(10).map((e) =>
            (0, a.jsx)(
              s.A,
              {
                className: "h-margin-b-tight",
                iterator: e,
                children: (0, a.jsx)(eO, {}),
              },
              e
            )
          ),
          ek = N(10).map((e) =>
            0 === e && ev
              ? (0, a.jsx)(
                  s.A,
                  { className: "h-margin-b-tight", iterator: e, children: ev },
                  "prz-placeholder-endcap"
                )
              : (0, a.jsx)(
                  s.A,
                  {
                    className: "h-margin-b-tight",
                    iterator: e,
                    children: (0, a.jsx)(t_, { useBorder: K }),
                  },
                  e
                )
          );
        if (Y && !(null == en ? void 0 : en.length)) return null;
        let eC =
          null !=
          (E =
            null == en
              ? void 0
              : en.map((e, t) =>
                  (0, a.jsx)(
                    _.F,
                    {
                      carouselData: (0, l._)(
                        {
                          prz: {
                            placementId: ea,
                            strategyId: el,
                            strategyName: ei,
                            strategyDescription: er,
                          },
                          element: {
                            id: e.id,
                            sponsored: !1,
                            type: "OFFER",
                            position: t,
                          },
                        },
                        em && eh
                          ? { slingshot: { componentId: em, placementId: eh } }
                          : {}
                      ),
                      tracking: ["impression"],
                      useTrackers: v.F,
                      children: (0, a.jsx)(ef.Ay, {
                        children: (0, a.jsx)(ts, {
                          extensionTile: V,
                          index: t,
                          linkTag: L,
                          metadata: O,
                          offer: e,
                          order: R,
                          placementId: ea,
                          strategyDescription: er,
                          strategyId: el,
                          strategyName: ei,
                          useBorder: K,
                        }),
                      }),
                    },
                    null == e ? void 0 : e.id
                  )
                ))
            ? E
            : [];
        ev && !j(en) && eC.unshift(ev);
        let eI = ed && !!S && !V && !ev,
          ej = !ed || et;
        if (ec) {
          let e = ee ? (ep ? ek : ey) : ek;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              eb,
              (0, a.jsxs)(ef.wq, {
                backgroundColor: S,
                className: ""
                  .concat(
                    F ? "h-margin-b-".concat(tv(F)) : "",
                    "\n        l-container "
                  )
                  .concat(H ? "" : "l-container-standard"),
                "data-test": "filmstrip-wrapper",
                extraPadding: eI,
                children: [
                  ex,
                  (0, a.jsx)(u.F, {
                    buttonBehavior: ed ? "alwaysAppear" : "tabAppear",
                    className: "h-padding-t-tight",
                    itemGap: ed ? "16px" : "8px",
                    shouldScrollEnd: !0,
                    children: j(en)
                      ? e
                      : null == eC
                      ? void 0
                      : eC.map((e, t, n) =>
                          (0, a.jsx)(
                            s.A,
                            {
                              className: ""
                                .concat(
                                  0 === t && (eI || ej)
                                    ? "h-padding-l-tight"
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  t === n.length - 1 ? "h-padding-r-tight" : "",
                                  " h-margin-b-tight"
                                ),
                              iterator: t,
                              children: e,
                            },
                            "offer-carousel-".concat(t)
                          )
                        ),
                  }),
                ],
              }),
            ],
          });
        }
        return (0, a.jsx)(eE._, {
          controlled: !0,
          noAnimation: ee || !!(null == en ? void 0 : en.length),
          open: ee || !!(null == en ? void 0 : en.length),
          variant: "bare",
          children: (0, a.jsxs)(a.Fragment, {
            children: [
              eb,
              (0, a.jsxs)(ef.wq, {
                backgroundColor: S,
                className: ""
                  .concat(
                    F ? "h-margin-b-".concat(tv(F)) : "",
                    "\n        l-container "
                  )
                  .concat(H ? "" : "l-container-standard"),
                "data-test": "filmstrip-wrapper",
                extraPadding: eI,
                children: [
                  ex,
                  (0, a.jsx)(u.F, {
                    buttonBehavior: ed ? "alwaysAppear" : "tabAppear",
                    className: "h-padding-t-tight",
                    itemGap: ed ? "16px" : "8px",
                    shouldScrollEnd: !0,
                    children: (null == en ? void 0 : en.length)
                      ? null == eC
                        ? void 0
                        : eC.map((e, t, n) =>
                            (0, a.jsx)(
                              s.A,
                              {
                                className: ""
                                  .concat(
                                    0 === t && (eI || ej)
                                      ? "h-padding-l-tight"
                                      : "",
                                    "\n                  "
                                  )
                                  .concat(
                                    t === n.length - 1
                                      ? "h-padding-r-tight"
                                      : "",
                                    " h-margin-b-tight"
                                  ),
                                iterator: t,
                                children: e,
                              },
                              "offer-carousel-".concat(t)
                            )
                          )
                      : ey,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      tx.displayName = "OffersCarousel";
      var tf = n(60823),
        tb = n(62021),
        ty = n(19364),
        tT = n(15903);
      let tk = "@web/SlingshotComponents/PromotionsCarousel";
      var tC = n(19968);
      let tI = (e) => {
        let {
            item: t,
            index: n,
            extensionTile: l,
            handleRecButtonClick: i,
            handleRecImageClick: r,
            linkTag: o,
            useBorder: d,
          } = e,
          { pdp_message: s, messaging: c } = null != t ? t : {},
          { short_description: u, title: p, subtitle: m } = null != c ? c : {},
          h = (0, tT.GF)(t),
          g =
            null != s
              ? s
              : ""
                  .concat(null != u ? u : "", " ")
                  .concat(null != p ? p : "", " ")
                  .concat(null != m ? m : "");
        return (0, a.jsx)(_.F, {
          id: h,
          index: n,
          linkTag: o,
          position: n,
          sourceId: h,
          type: "OFFER",
          useTrackers: $.k,
          children: (0, a.jsxs)(ei, {
            className: l ? "extension-tile" : "",
            "data-test": "item-card-".concat(n),
            useBorder: d,
            children: [
              (0, a.jsxs)(ef.ah, {
                "aria-label": g,
                "data-index": n,
                "data-lnk": o,
                "data-test": "deal-link",
                href: "/pl/".concat(h, "?link=prz_top_deals_"),
                onClick: r,
                style: { flex: "1 0 auto", color: "#333" },
                underline: "invert",
                children: [
                  (0, a.jsx)(ee, { alt: "", src: (0, tT.HF)(t) }),
                  (0, a.jsxs)(ea, {
                    children: [
                      !!c &&
                        (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(O.P, {
                              className: "h-text-red h-text-bold h-text-md",
                              "data-test": "pbo-short-desc",
                              lines: 1,
                              children: u,
                            }),
                            (0, a.jsx)(O.P, {
                              className: "h-text-bold h-text-md",
                              "data-test": "pbo-title",
                              lines: 2,
                              children: p,
                            }),
                            (0, a.jsx)(O.P, {
                              className: "h-text-md h-hidden-md-up",
                              "data-test": "pbo-sub-sm",
                              lines: 3,
                              children: m,
                            }),
                            (0, a.jsx)(O.P, {
                              className: "h-text-md h-hidden-sm-down",
                              "data-test": "pbo-sub-md-lg",
                              lines: 2,
                              children: m,
                            }),
                          ],
                        }),
                      !!s &&
                        (0, a.jsx)(O.P, {
                          className: "h-text-red h-text-bold h-text-md",
                          "data-test": "basket-offers-message",
                          lines: 3,
                          children: s,
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(eo, {
                children: (0, a.jsx)(tC.n, {
                  "aria-label": "Shop offer ".concat(g),
                  "data-index": n,
                  "data-test": "deals-item-link",
                  href: "/pl/".concat(h, "?link=prz_top_deals_"),
                  isFullWidth: !0,
                  onClick: i,
                  role: "button",
                  size: "sm",
                  children: "Shop offer",
                }),
              }),
            ],
          }),
        });
      };
      tI.displayName = "PromotionTile";
      var tj = (0, D.h)({
        action: "error_boundary_prz_carousel_promotion_tile",
      })(tI);
      let tN = et.I4.div
          .attrs({ className: "h-padding-h-tight" })
          .withConfig({ componentId: "sc-7440cdb5-0" })(
          [
            "width:100%;h3{line-height:",
            ";font-size:15px;@media (min-width:",
            "){font-size:13px;}@media (min-width:",
            "){font-size:15px;}}",
          ],
          en.gx.lineHeight.heading,
          en.fi.lg,
          en.fi.xl
        ),
        tw = et.I4.div.withConfig({ componentId: "sc-7440cdb5-1" })(
          [
            "display:flex;position:relative;background:",
            ";max-width:175px;padding:",
            ";margin:",
            ";text-align:center;width:100%;align-items:center;&::before{content:'';display:block;}",
          ],
          en.Tj.palette.white,
          en.xe.generic.x3,
          en.xe.generic.x2
        ),
        tP = (0, et.I4)(ep.N).withConfig({ componentId: "sc-7440cdb5-2" })([
          "width:100%;display:flex;align-items:center;min-height:66px;",
        ]),
        tE = (e) => {
          let { global_link: t } = e;
          if (!t) return null;
          let { link_name: n = "", link_tag: l, link_url: i } = t;
          return (0, a.jsx)(tw, {
            children: (0, a.jsx)(tP, {
              "data-lnk": l,
              href: i,
              children: (0, a.jsx)(tN, {
                children: (0, a.jsx)(c.D, {
                  className: "h-margin-b-none",
                  dangerouslySetInnerHTML: { __html: n },
                  level: 3,
                  size: 3,
                }),
              }),
            }),
          });
        };
      tE.displayName = "GlobalLink";
      let tD = et.I4.div.withConfig({ componentId: "sc-abe0be89-0" })(
          ["margin:", ";width:calc(100% - ", ");min-width:110px;"],
          en.xe.generic.x1,
          en.xe.generic.x2
        ),
        tA = et.I4.div.withConfig({ componentId: "sc-abe0be89-1" })([
          "width:100%;min-width:117px;",
        ]),
        tO = et.I4.div.withConfig({ componentId: "sc-abe0be89-2" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:100%;padding-bottom:100%;background:#c4c4c4;}",
        ]),
        tR = et.I4.div.withConfig({ componentId: "sc-abe0be89-3" })(
          [
            "position:relative;font-size:14px;&::before{content:' ';display:block;width:50%;height:1em;background:",
            ";margin-top:0.25em;margin-bottom:0.4em;}",
          ],
          en.Tj.palette.red.default
        ),
        tS = et.I4.div.withConfig({ componentId: "sc-abe0be89-4" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:90%;height:1em;background:#c4c4c4;margin-bottom:0.25em;}&::after{content:' ';display:block;width:80%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}",
        ]),
        tL = et.I4.div.withConfig({ componentId: "sc-abe0be89-5" })([
          "position:relative;font-size:14px;&::before{content:' ';display:block;width:70%;height:1em;background:#c4c4c4;margin-bottom:0.4em;}",
        ]);
      function tF(e) {
        let { useBorder: t } = e;
        return (0, a.jsxs)(ei, {
          "data-test": "@web/SiteTopOfFunnel/PromotionTilePlaceholder",
          useBorder: t,
          children: [
            (0, a.jsx)(tA, { children: (0, a.jsx)(tO, {}) }),
            (0, a.jsxs)(tD, {
              children: [
                (0, a.jsx)(tR, {}),
                (0, a.jsx)(tS, {}),
                (0, a.jsx)(tL, {}),
              ],
            }),
          ],
        });
      }
      tF.displayName = "PromotionTilePlaceholder";
      let tz = (e) => ("standard" === e ? "default" : e),
        tM = (e) => {
          var t, n, i, o, g, x, f, b, y;
          let { content: T, options: k, order: C, metadata: E } = e,
            {
              placement_id: D,
              offer_id: A,
              endcap: O,
              link_tag: R,
              global_link: S,
              background_color: L,
              margin_bottom: F,
              category_id: z,
              text_color: M,
              fulfillment_types: B,
              slingshot_component_id: U,
              custom_headline: G,
            } = null != T ? T : {},
            {
              fullWidth: W = !1,
              isExtension: H = !1,
              suppressHeadline: V = !1,
            } = null != k ? k : {},
            { background_color: Z } = null != O ? O : {},
            q = !!O && !j(O),
            K = !L || "white" === L || "#FFFFFF" === L.toUpperCase(),
            { trackEvent: Y } = (0, h.z1)(),
            { screenMd: Q } = (0, m.e)(),
            { isBot: $ } = (0, d.useContext)(p.B.Context),
            [J, X] = (0, tb.e)({
              category_id: z,
              offer_id: A,
              placement_id: null != D ? D : "promotions_component_tester",
              fulfillment_types: B,
              slingshot_component_id: U,
            }),
            ee = X.isIdle || X.isFetching || X.isLoading,
            et = J(ty.sn),
            en = (0, d.useMemo)(() => {
              var e;
              return null != (e = J(ty.CD)) ? e : [];
            }, [J]),
            el = null != (g = J(ty.vc)) ? g : "",
            ei = J(ty.hK),
            ea = null != (x = J(ty.P7)) ? x : "",
            er =
              null !=
              (f =
                null == (n = J()) || null == (t = n.recommended_promotions)
                  ? void 0
                  : t.placement_id)
                ? f
                : "",
            eo = (null != (b = null == en ? void 0 : en.length) ? b : 0) > 0,
            ed = (0, w.M)(),
            { asPath: es } = (0, I.rd)(),
            ec = P(es),
            eu =
              null == E || null == (o = E.components) || null == (i = o[0])
                ? void 0
                : i.placement_id;
          (0, d.useEffect)(() => {
            eo &&
              Y(
                ((e, t) => {
                  if (!e) return {};
                  let {
                    doctype: n,
                    placement_id: l,
                    strategy_description: i,
                    strategy_id: a,
                    strategy_name: r,
                    promotions: o = [],
                  } = e;
                  return {
                    guest: { eventType: "recommendations" },
                    recommendations: {
                      docType: n,
                      placementId: l,
                      strategyDescription: i,
                      strategyId: a,
                      strategyName: r,
                      type: "promo",
                    },
                    components: [{ component: t, type: "components" }],
                    products: o.map((e) => {
                      let { promotion_id: t } = e;
                      return { placementType: "recommendations", tcin: t };
                    }),
                    offerInfo: ((e, t, n) =>
                      e.length
                        ? {
                            offers: e.map((e, t) => ({
                              offerId: e.promotion_id,
                              offerPosition: String(t),
                              offerType: "promo",
                            })),
                            strategyId: t,
                            strategyName: n,
                          }
                        : {})(o, a, r),
                  };
                })(et, U)
              );
          }, [Y, eo, et, U]);
          let { trackClick: ep } = (0, tf.f)(),
            em = (0, d.useCallback)(
              (e) => (t) => {
                var n;
                let i =
                    null == t || null == (n = t.currentTarget)
                      ? void 0
                      : n.getAttribute("data-index"),
                  a = ((e, t) => {
                    var n, l, i;
                    let a =
                      null !=
                      (l =
                        null == e || null == (n = e.components) ? void 0 : n[0])
                        ? l
                        : {};
                    return {
                      name:
                        null != (i = null == a ? void 0 : a.title)
                          ? i
                          : null == a
                          ? void 0
                          : a.id,
                      position: String(t),
                      component: (null == a ? void 0 : a.title)
                        ? ""
                            .concat(null == a ? void 0 : a.id, " || ")
                            .concat(null == a ? void 0 : a.title)
                        : null == a
                        ? void 0
                        : a.id,
                      componentType: null == a ? void 0 : a.type_name,
                      contentType: null == a ? void 0 : a.content_type,
                    };
                  })(E, C),
                  r = i ? (0, tT.GF)(en[Number.parseInt(i, 10)]) : void 0;
                en &&
                  i &&
                  r &&
                  (Y(
                    ((e, t) => ({
                      guest: { eventType: "click" },
                      offerInfo: {
                        offers: [
                          {
                            offerId: (0, tT.GF)(t[Number.parseInt(e, 10)]),
                            offerPosition: e,
                            offerSelected: !0,
                            offerType: "promo",
                          },
                        ],
                      },
                    }))(i, en)
                  ),
                  (0, h.cW)({
                    recClick: {
                      position: +i,
                      offerId: (0, tT.GF)(en[Number.parseInt(i, 10)]),
                      strategyId: el,
                      strategyName: ei,
                      type: "promo",
                    },
                    contentClick: a,
                  }),
                  ep.track(
                    (0, l._)(
                      {
                        featureType: "RECOMMENDATION",
                        clickType: e,
                        prz: {
                          strategyId: el,
                          strategyDescription: ea,
                          strategyName: ei,
                          placementId: er,
                        },
                        element: { type: "OFFER", id: r, position: +i },
                      },
                      U && eu
                        ? { slingshot: { componentId: U, placementId: eu } }
                        : {}
                    )
                  ));
              },
              [E, C, en, Y, el, ei, ep, U, eu, ea, er]
            ),
            eh = q
              ? (0, a.jsx)(
                  eT.o,
                  (0, r._)((0, l._)({}, O), {
                    background_color: null != (y = null != Z ? Z : L) ? y : "",
                    headline: (() => {
                      if (!ee)
                        return ed
                          ? ea || G || "Headline placeholder"
                          : eo
                          ? ea
                          : "";
                    })(),
                    placementId: D,
                    text_color: M,
                  })
                )
              : null,
            eg = Q ? eh : null,
            e_ = Q ? null : eh,
            ev = V
              ? null
              : (0, a.jsx)(ef.Qb, {
                  background_color: L,
                  className:
                    "l-container l-container-standard h-padding-a-x2 ".concat(
                      q ? "h-sr-only" : ""
                    ),
                  text_color: M,
                  children: (0, a.jsx)(c.D, {
                    className: "h-margin-b-none",
                    level: 2,
                    size: 1,
                    style: { color: "inherit" },
                    children: ee
                      ? (0, a.jsx)("span", { children: "\xa0" })
                      : ed
                      ? ea || G || "Headline placeholder"
                      : eo
                      ? ea
                      : "",
                  }),
                }),
            ex = N(10).map((e) =>
              (0, a.jsx)(
                s.A,
                {
                  className: "h-margin-b-tight",
                  iterator: e,
                  children: (0, a.jsx)(eO, {}),
                },
                e
              )
            ),
            eb = N(10).map((e) =>
              0 === e && eg
                ? (0, a.jsx)(
                    s.A,
                    {
                      className: "h-margin-b-tight",
                      iterator: e,
                      children: eg,
                    },
                    "prz-placeholder-endcap"
                  )
                : (0, a.jsx)(
                    s.A,
                    {
                      className: "h-margin-b-tight",
                      iterator: e,
                      children: (0, a.jsx)(tF, { useBorder: K }),
                    },
                    e
                  )
            );
          if ($ && !eo) return null;
          let ey =
            null == en
              ? void 0
              : en.map((e, t) =>
                  (0, a.jsx)(
                    _.F,
                    {
                      carouselData: (0, l._)(
                        {
                          prz: {
                            placementId: er,
                            strategyId: el,
                            strategyName: ei,
                            strategyDescription: ea,
                          },
                          element: {
                            id: e.promotion_id,
                            sponsored: !1,
                            type: "OFFER",
                            position: t,
                          },
                        },
                        U && eu
                          ? { slingshot: { componentId: U, placementId: eu } }
                          : {}
                      ),
                      tracking: ["impression"],
                      useTrackers: v.F,
                      children: (0, a.jsx)(ef.Ay, {
                        children: (0, a.jsx)(
                          tj,
                          {
                            extensionTile: H,
                            handleRecButtonClick: em("SHOW_ITEMS"),
                            handleRecImageClick: em("OFFER_DETAILS"),
                            index: t,
                            item: e,
                            linkTag: R,
                            useBorder: K,
                          },
                          e.promotion_id
                        ),
                      }),
                    },
                    e.promotion_id
                  )
                );
          eg && eo && ey.unshift(eg);
          let ek = Q && !!L && !H && !eg,
            eC = !Q || q;
          if (ed) {
            let e = ee ? (ec ? eb : ex) : eb;
            return (0, a.jsxs)("div", {
              "aria-label": "Carousel",
              className: "l-container ".concat(W ? "" : "l-container-standard"),
              "data-test": tk,
              role: "region",
              children: [
                ev,
                (0, a.jsxs)(ef.wq, {
                  backgroundColor: L,
                  className: "".concat(F ? "h-margin-b-".concat(tz(F)) : ""),
                  "data-test": "filmstrip-deals-carousel",
                  extraPadding: ek,
                  children: [
                    e_,
                    (0, a.jsx)(u.F, {
                      buttonBehavior: Q ? "alwaysAppear" : "tabAppear",
                      className: "h-padding-t-tight",
                      itemGap: Q ? "16px" : "8px",
                      shouldScrollEnd: !0,
                      children: eo
                        ? ey.map((e, t, n) =>
                            (0, a.jsx)(
                              s.A,
                              {
                                className: ""
                                  .concat(
                                    0 === t && (ek || eC)
                                      ? "h-padding-l-tight"
                                      : "",
                                    "\n                  "
                                  )
                                  .concat(
                                    t === n.length - 1
                                      ? "h-padding-r-tight"
                                      : "",
                                    " h-margin-b-tight"
                                  ),
                                iterator: t,
                                children: e,
                              },
                              "promotions-carousel-".concat(t)
                            )
                          )
                        : e,
                    }),
                    (0, a.jsx)(tE, { global_link: S }),
                  ],
                }),
              ],
            });
          }
          return (0, a.jsx)(eE._, {
            controlled: !0,
            noAnimation: ee || eo,
            open: ee || eo,
            variant: "bare",
            children: (0, a.jsxs)("div", {
              "aria-label": "Carousel",
              className: "l-container ".concat(W ? "" : "l-container-standard"),
              "data-test": tk,
              role: "region",
              children: [
                ev,
                (0, a.jsxs)(ef.wq, {
                  backgroundColor: L,
                  className: "".concat(F ? "h-margin-b-".concat(tz(F)) : ""),
                  "data-test": "filmstrip-deals-carousel",
                  extraPadding: ek,
                  children: [
                    e_,
                    (0, a.jsx)(u.F, {
                      buttonBehavior: Q ? "alwaysAppear" : "tabAppear",
                      className: "h-padding-t-tight",
                      itemGap: Q ? "16px" : "8px",
                      shouldScrollEnd: !0,
                      children: eo
                        ? ey.map((e, t, n) =>
                            (0, a.jsx)(
                              s.A,
                              {
                                className: ""
                                  .concat(
                                    0 === t && (ek || eC)
                                      ? "h-padding-l-tight"
                                      : "",
                                    "\n                  "
                                  )
                                  .concat(
                                    t === n.length - 1
                                      ? "h-padding-r-tight"
                                      : "",
                                    " h-margin-b-tight"
                                  ),
                                iterator: t,
                                children: e,
                              },
                              "promotions-carousel-".concat(t)
                            )
                          )
                        : ex,
                    }),
                    (0, a.jsx)(tE, { global_link: S }),
                  ],
                }),
              ],
            }),
          });
        };
      tM.displayName = "PromotionsCarousel";
      let tB = (e) => {
        var t, n, i, d, s;
        let {
            content: c,
            options: u,
            metadata: p,
            order: m,
            componentId: h,
          } = e,
          g = (0, o.d)(
            null == c ||
              null == (n = c.container) ||
              null == (t = n.keyValuePairs)
              ? void 0
              : t.context
          ),
          _ = (0, r._)((0, l._)({}, c), {
            brand_ids: null == g ? void 0 : g.brandId,
            category_id: null == g ? void 0 : g.categoryId,
            fulfillment_types: null == g ? void 0 : g.fulfillmentId,
            offer_id: null == g ? void 0 : g.promoId,
            placement_id: null == g ? void 0 : g.placementId,
            slingshot_component_id: h,
            facet_ids: null == g ? void 0 : g.facetId,
            marketing_group_ids: null == g ? void 0 : g.marketingGroup,
          });
        return (null == c || null == (i = c.container) ? void 0 : i.type) ===
          "personalizedProducts"
          ? (0, a.jsx)(eG, { content: _, metadata: p, options: u, order: m })
          : (null == c || null == (d = c.container) ? void 0 : d.type) ===
            "personalizedPromotions"
          ? (0, a.jsx)(tM, { content: _, metadata: p, options: u, order: m })
          : (null == c || null == (s = c.container) ? void 0 : s.type) ===
            "personalizedOffers"
          ? (0, a.jsx)(tx, { content: _, metadata: p, options: u, order: m })
          : null;
      };
      tB.displayName = "PersonalizationCarouselCore";
      var tU = n(3658),
        tG = n(42480);
      let tW = (e) => {
        var t, n, l, i;
        let { metadata: r, content: o, order: s } = e,
          { trackClick: u } = (0, tf.f)(),
          p = null == r || null == (t = r.components) ? void 0 : t[0],
          m = (0, d.useCallback)(
            (e, t, n) => {
              u.track({
                clickType: "CATEGORY",
                featureType: "CAROUSEL_NAVIGATION",
                element: t ? { id: t, type: "FACET", position: n } : void 0,
                slingshot: (null == p ? void 0 : p.id)
                  ? {
                      componentId: null == p ? void 0 : p.id,
                      placementId: null == p ? void 0 : p.placement_id,
                    }
                  : void 0,
              });
            },
            [null == p ? void 0 : p.id, null == p ? void 0 : p.placement_id, u]
          );
        if (
          (null == o || null == (n = o.container_design) ? void 0 : n.type) !==
            "tabbed" ||
          !o.tabbed_containers
        )
          return null;
        let h =
          null == o
            ? void 0
            : o.tabbed_containers.map((e) => {
                var t, n, l, i, d, c;
                let u = {
                  container: {
                    type:
                      null == e || null == (t = e.container) ? void 0 : t.type,
                    keyValuePairs: {
                      context:
                        null !=
                        (c =
                          null == e ||
                          null == (l = e.container) ||
                          null == (n = l.keyValuePairs)
                            ? void 0
                            : n.context)
                          ? c
                          : "",
                    },
                    callToAction:
                      null == e || null == (i = e.container)
                        ? void 0
                        : i.callToAction,
                  },
                  background_color:
                    null == o || null == (d = o.container_design)
                      ? void 0
                      : d.background_color,
                };
                return {
                  children: (0, a.jsx)(tB, {
                    componentId:
                      (null == p ? void 0 : p.id) || "tabbed-carousel",
                    content: u,
                    metadata: r,
                    options: { suppressHeadline: !0 },
                    order: s,
                  }),
                  title: null == e ? void 0 : e.tab_title,
                };
              });
        return (0, a.jsxs)("div", {
          className: "".concat(tG.CarouselContainer),
          style: {
            "--background-color":
              null == o ? void 0 : o.container_design.background_color,
            "--tab-title-color":
              null == o ? void 0 : o.container_design.text_color,
            "--color-text-subdued":
              null == o ? void 0 : o.container_design.text_color,
            marginBottom: null == o ? void 0 : o.container_design.margin_bottom,
          },
          children: [
            (0, a.jsx)("div", {
              className: "".concat(
                tG.HeadlineContainer,
                " l-container l-container-standard h-padding-a-x2"
              ),
              children: (0, a.jsx)(c.D, {
                className: "h-margin-b-none h-margin-t-x2",
                level: 2,
                size: 1,
                style: {
                  color:
                    null == o || null == (l = o.container_design)
                      ? void 0
                      : l.text_color,
                },
                children: null == o ? void 0 : o.custom_headline,
              }),
            }),
            (0, a.jsx)("div", {
              children: (0, a.jsx)(tU.t, {
                activeTabColor:
                  null == o || null == (i = o.container_design)
                    ? void 0
                    : i.text_color,
                className: tG.TabOverrides,
                onChange: m,
                tabData: h,
              }),
            }),
          ],
        });
      };
      tW.displayName = "TabbedCarousel";
      let tH = (e) => {
        let { content: t } = e,
          n = (0, i._)(e, ["content"]);
        return ((e) => {
          var t;
          return !!(
            e &&
            "container_design" in e &&
            (null == (t = e.container_design) ? void 0 : t.type) === "tabbed"
          );
        })(t)
          ? (0, a.jsx)(tW, (0, l._)({ content: t }, n))
          : (0, a.jsx)(tB, (0, l._)({ content: t }, n));
      };
      tH.displayName = "PersonalizationCarousel";
    },
    99572: (e) => {
      e.exports = { ShopAllTile: "styles_ShopAllTile__6UQLh" };
    },
  },
]);
