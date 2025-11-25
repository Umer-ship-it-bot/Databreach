(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6279],
  {
    1152: (e, l, n) => {
      "use strict";
      n.d(l, { O: () => i, P: () => o });
      var t = n(14232);
      let i = (e, l) => {
          let { condition_id: n, value: t } = l;
          return (
            !(n && Object.prototype.hasOwnProperty.call(e, n)) || !!e[n] == !!t
          );
        },
        o = (e, l) =>
          (0, t.useMemo)(() => !e || e.every((e) => i(l, e)), [e, l]);
    },
    23540: (e, l, n) => {
      "use strict";
      n.d(l, { r: () => h });
      var t = n(37876),
        i = n(14232),
        o = n(3576),
        a = n(62701),
        d = n(42252),
        s = n(40196),
        r = n(4594),
        u = n(67684),
        c = n(85684),
        m = n(74682);
      let p = (e) => {
        let {
            conditionMap: l,
            layout: n,
            zoneId: p,
            moduleGroupId: h = p,
            modulesToComponentsMap: _,
            pageContext: g,
            pageType: v,
            Wrapper: x = i.Fragment,
            ModuleWrapper: y = i.Fragment,
          } = e,
          { asPath: f } = (0, d.rd)(),
          b = (0, s.x6)(f),
          j = (0, r.Hy)({ zoneId: p, moduleGroupId: h })({
            data: { layout: n },
          }),
          D = (0, a._)((0, o._)({}, n), { zones: void 0 }),
          C = (0, u.t)();
        return j || C
          ? (0, t.jsx)(m.a, {
              isModule: !1,
              layoutMetadata: D,
              moduleGroupId: h,
              zoneId: p,
              children: (0, t.jsx)(x, {
                children:
                  null == j
                    ? void 0
                    : j.map((e) =>
                        (0, t.jsx)(
                          y,
                          {
                            children: (0, t.jsx)(c.n, {
                              conditionMap: l,
                              module: e,
                              moduleGroupId: h,
                              modulesToComponentsMap: _,
                              pageContext: g,
                              pageType: v,
                              zoneId: p,
                            }),
                          },
                          "".concat(b, "-").concat(e.key)
                        )
                      ),
              }),
            })
          : null;
      };
      p.displayName = "ConfigDrivenUiModuleGroup";
      let h = (e) => {
        var l, n;
        let { layout: o, zoneId: a, ModuleGroupWrapper: d } = e,
          s =
            null == o || null == (l = o.zones)
              ? void 0
              : l.find((e) => e.zone_id === a);
        return (null == s || null == (n = s.module_groups) ? void 0 : n.length)
          ? (0, t.jsx)("div", {
              children: s.module_groups.map((l) => {
                var n, s, r;
                let { module_group_id: u } = l;
                if (!u) return null;
                let c =
                  null == (n = e.getModuleGroupOptions) ? void 0 : n.call(e, u);
                if (null == c ? void 0 : c.shouldHide) return null;
                let m =
                  null !=
                  (r = null != (s = null == c ? void 0 : c.Wrapper) ? s : d)
                    ? r
                    : i.Fragment;
                return (0, t.jsx)(
                  p,
                  {
                    conditionMap: e.conditionMap,
                    layout: o,
                    moduleGroupId: u,
                    modulesToComponentsMap: e.modulesToComponentsMap,
                    ModuleWrapper: e.ModuleWrapper,
                    pageContext: e.pageContext,
                    pageType: e.pageType,
                    Wrapper: m,
                    zoneId: a,
                  },
                  "".concat(a, "-").concat(u)
                );
              }),
            })
          : null;
      };
      h.displayName = "ConfigDrivenUiZone";
    },
    34994: (e, l, n) => {
      "use strict";
      n.d(l, { t: () => d });
      var t = n(37876),
        i = n(82631),
        o = n(14232),
        a = n(25989);
      let d = (e) => {
        let {
            onIntersectedOnce: l,
            rootMargin: n,
            threshold: d,
            children: s,
          } = e,
          { value: r, ref: u } = (0, i.l)(),
          c = (0, a.l)({
            element: r,
            options: { rootMargin: n, threshold: d },
          });
        return (
          (0, o.useEffect)(() => {
            c && l();
          }, [c, l]),
          (0, t.jsx)("div", { ref: u, children: s })
        );
      };
      d.displayName = "IntersectionObserverComponent";
    },
    48847: (e, l, n) => {
      "use strict";
      n.d(l, { E: () => c });
      var t = n(3576),
        i = n(62701),
        o = n(65699),
        a = n(37876),
        d = n(15039),
        s = n(44877),
        r = n(42773),
        u = n(43713);
      let c = (e) => {
        var {
            children: l,
            className: n,
            handleClose: c,
            id: m,
            headingRef: p,
            renderLeading: h,
            renderSubheading: _,
          } = e,
          g = (0, o._)(e, [
            "children",
            "className",
            "handleClose",
            "id",
            "headingRef",
            "renderLeading",
            "renderSubheading",
          ]);
        return (0, a.jsxs)(
          "div",
          (0, i._)((0, t._)({ className: d(u.heading, n) }, g), {
            children: [
              null == h ? void 0 : h(c),
              (0, a.jsxs)("div", {
                className: u.innerDiv,
                children: [
                  (0, a.jsx)(r.D, {
                    id: m,
                    level: 2,
                    ref: p,
                    stackSpacing: "0",
                    tabIndex: -1,
                    children: l,
                  }),
                  null == _ ? void 0 : _(),
                ],
              }),
              (0, a.jsx)(s.w, { className: u.closeButton, onClick: c }),
            ],
          })
        );
      };
      c.displayName = "ModalHeading";
    },
    56606: (e, l, n) => {
      "use strict";
      n.d(l, { X6: () => c, _2: () => u, lP: () => r });
      var t = n(3576),
        i = n(62701),
        o = n(35881),
        a = n(5323),
        d = n(43580),
        s = n(8036);
      let r = (0, o.Mz)(d.MH, (e) => (null == e ? void 0 : e.facet_list)),
        u = (0, o.Mz)([r], (e) =>
          null == e
            ? void 0
            : e.filter((e) => (null == e ? void 0 : e.facet_id) !== s.hv)
        ),
        c = (e) =>
          (0, o.Mz)([r], (l) => {
            let n =
              null == l
                ? void 0
                : l.find((l) => (null == l ? void 0 : l.facet_id) === e);
            if ((null == n ? void 0 : n.facet_id) === s.iE) {
              var o;
              return (0, i._)((0, t._)({}, n), {
                options: a(
                  null != (o = n.options) ? o : [],
                  (e) => +(e.id !== s.hO)
                ),
              });
            }
            return n;
          });
    },
    59871: (e) => {
      e.exports = {
        ModuleGapDebugBorder: "styles_ModuleGapDebugBorder__kg989",
        GapValueContainer: "styles_GapValueContainer__iu8B1",
        left: "styles_left__rUwFM",
        right: "styles_right__gPd6V",
        top: "styles_top__ziLs6",
        bottom: "styles_bottom__MfH7e",
      };
    },
    72987: (e) => {
      e.exports = {
        ConfigDrivenUiDebugIconButton:
          "styles_ConfigDrivenUiDebugIconButton__U_caa",
        ConfigDrivenUiDebugToggleButton:
          "styles_ConfigDrivenUiDebugToggleButton__0DW7T",
        isOpen: "styles_isOpen__1jf1_",
        ConfigDrivenUiDebugHiddenIcon:
          "styles_ConfigDrivenUiDebugHiddenIcon__POZk_",
        ConfigDrivenUiDebugBorder: "styles_ConfigDrivenUiDebugBorder___qFbu",
        isModule: "styles_isModule__kGCyq",
        isDatasourceModule: "styles_isDatasourceModule__Yuprn",
        ConfigDrivenUiModuleLabel: "styles_ConfigDrivenUiModuleLabel__9Cp0w",
        isCollapsed: "styles_isCollapsed___K8OF",
        ConfigDrivenUiEmptyWarning: "styles_ConfigDrivenUiEmptyWarning__pxexm",
      };
    },
    74682: (e, l, n) => {
      "use strict";
      n.d(l, { a: () => M });
      var t = n(37876),
        i = n(69241),
        o = n(17769),
        a = n(91110),
        d = n(87993),
        s = n(30514),
        r = n(81506),
        u = n(9117),
        c = n(67684),
        m = n(72987),
        p = n(1152);
      let h = (e) => {
        let {
            className: l,
            moduleType: n,
            moduleGroupId: i,
            zoneId: o,
            isModule: a,
            isDatasourceModule: d,
          } = e,
          s = d
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("span", {
                    className: "h-text-bold",
                    children: "Datasource Module: ",
                  }),
                  (0, t.jsx)("code", { children: n }),
                ],
              })
            : a
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("span", {
                    className: "h-text-bold",
                    children: "Module: ",
                  }),
                  (0, t.jsx)("code", { children: n }),
                ],
              })
            : i === o
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("span", {
                    className: "h-text-bold",
                    children: "Zone & Module Group: ",
                  }),
                  (0, t.jsx)("code", { children: i }),
                ],
              })
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("span", {
                    className: "h-text-bold",
                    children: "Zone: ",
                  }),
                  (0, t.jsx)("code", { children: o }),
                  ", ",
                  (0, t.jsx)("span", {
                    className: "h-text-bold",
                    children: "Module Group: ",
                  }),
                  (0, t.jsx)("code", { children: i }),
                ],
              }),
          r = a
            ? "module: ".concat(n)
            : "zone: ".concat(o, ", module group: ").concat(i);
        return (0, t.jsx)("span", {
          className: l,
          "data-label": r,
          "data-test": "cdui-module-label",
          children: s,
        });
      };
      h.displayName = "ConfigDrivenUiDebugLabel";
      var _ = n(3576),
        g = n(62701),
        v = n(14232),
        x = n(48847),
        y = n(75570),
        f = n(18673),
        b = n(55777);
      let j = (e, l) => {
        let { stringOnError: n, shouldSkip: t } = null != l ? l : {};
        return (0, v.useMemo)(() => {
          if (!t && e)
            try {
              return JSON.stringify(e, void 0, 2);
            } catch (e) {
              return n;
            }
        }, [n, e, t]);
      };
      var D = n(96662);
      let C = (e) => {
        var l;
        let {
            conditionMap: n,
            isDebugging: i,
            isInfoOpen: a,
            isModule: d,
            layoutMetadata: s,
            deferredExtensions: r,
            moduleData: u,
            moduleType: c,
            setDebugModuleData: m,
            toggleIsInfoOpen: p,
          } = e,
          h = null == u ? void 0 : u.conditions,
          C = (null != (l = null == h ? void 0 : h.length) ? l : 0) > 0,
          M = "Sorry, error showing data.",
          N = j(u, { shouldSkip: !i, stringOnError: M }),
          k = j(
            (0, v.useMemo)(() => {
              if (i)
                return null == h
                  ? void 0
                  : h.map((e) => {
                      let { condition_id: l, value: t } = e,
                        i = null == n ? void 0 : n[null != l ? l : ""],
                        o =
                          t === i
                            ? "✅ condition met"
                            : "❌ condition not met, hiding module (expected: "
                                .concat(t, ", actual: ")
                                .concat(i, ")");
                      return { condition_id: l, value: t, _debug: o };
                    });
            }, [i, h, n]),
            { shouldSkip: !i, stringOnError: M }
          ),
          E = j(s, { shouldSkip: !i, stringOnError: M }),
          U = j(null == r ? void 0 : r.backend_details, {
            shouldSkip: !i,
            stringOnError: M,
          }),
          I = (0, v.useCallback)(
            (e) =>
              (0, t.jsx)(
                x.E,
                (0, g._)((0, _._)({}, e), { children: "Module Info" })
              ),
            []
          ),
          [S, B] = (0, o.e)(!1),
          O = (0, v.useRef)(null),
          T = (0, v.useCallback)(() => {
            B(),
              setTimeout(() => {
                var e;
                return null == (e = O.current) ? void 0 : e.focus();
              }, 0);
          }, [B]),
          w = (0, v.useCallback)(
            (e) => {
              var l;
              e.preventDefault();
              let n =
                null == (l = new FormData(e.target).get("moduleData"))
                  ? void 0
                  : l.toString();
              if (n)
                try {
                  null == m || m(JSON.parse(n));
                } catch (e) {
                  alert("Could not parse JSON - try again.");
                  return;
                }
              B();
            },
            [m, B]
          );
        return (0, t.jsxs)(b.a, {
          className: D.modal,
          isOpen: a,
          onOpenChange: p,
          renderHeading: I,
          shouldNotTrack: !0,
          type: "drawer-right",
          children: [
            d
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: "h-margin-b-default",
                      children: [
                        (0, t.jsx)("div", {
                          className: "h-text-bold h-margin-b-tiny",
                          children: "Module Type",
                        }),
                        (0, t.jsx)(y.N, {
                          href: "https://go/cdui-modules/".concat(c),
                          children: (0, t.jsx)("code", { children: c }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "h-margin-b-default",
                      children: [
                        (0, t.jsx)("div", {
                          className: "h-text-bold h-margin-b-tiny",
                          children: "Module Documentation",
                        }),
                        (0, t.jsxs)(y.N, {
                          className: "h-text-normal h-margin-l-tiny h-text-md",
                          href: "https://go/cdui-modules/".concat(c),
                          children: ["https://go/cdui-modules/", c],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "h-margin-b-default",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "h-text-bold h-margin-b-default",
                          children: [
                            "Module Data",
                            " ",
                            S
                              ? null
                              : (0, t.jsx)(y.N, {
                                  className:
                                    "h-text-normal h-margin-l-tiny h-text-md",
                                  onClick: T,
                                  children: "Edit",
                                }),
                          ],
                        }),
                        S
                          ? (0, t.jsxs)("form", {
                              onSubmit: w,
                              children: [
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("textarea", {
                                    className: D.codeBlock,
                                    defaultValue: N,
                                    name: "moduleData",
                                    ref: O,
                                    rows: 10,
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: D.buttonGroup,
                                  children: [
                                    (0, t.jsx)(f.$, {
                                      type: "submit",
                                      children: "Save",
                                    }),
                                    (0, t.jsx)(f.$, {
                                      onClick: B,
                                      variant: "outlined",
                                      children: "Cancel",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, t.jsx)("button", {
                              "aria-label": "Edit module data",
                              className: D.codeBlock,
                              onClick: T,
                              type: "button",
                              children: (0, t.jsx)("pre", {
                                children: (0, t.jsx)("code", { children: N }),
                              }),
                            }),
                      ],
                    }),
                    C && !S
                      ? (0, t.jsxs)("div", {
                          className: "h-margin-b-default",
                          children: [
                            (0, t.jsx)("div", {
                              className: "h-text-bold h-margin-b-tiny",
                              children: "Conditions",
                            }),
                            (0, t.jsx)("div", {
                              className: D.codeBlock,
                              children: (0, t.jsx)("pre", {
                                children: (0, t.jsx)("code", { children: k }),
                              }),
                            }),
                          ],
                        })
                      : null,
                    U
                      ? (0, t.jsxs)("div", {
                          className: "h-margin-b-default",
                          children: [
                            (0, t.jsx)("div", {
                              className: "h-text-bold h-margin-b-tiny",
                              children: "Services called (deferred)",
                            }),
                            (0, t.jsx)("div", {
                              className: D.codeBlock,
                              children: (0, t.jsx)("pre", {
                                children: (0, t.jsx)("code", { children: U }),
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : null,
            E
              ? (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: "h-text-bold h-margin-b-tiny",
                      children: "Layout Metadata",
                    }),
                    (0, t.jsx)("pre", {
                      children: (0, t.jsx)("code", { children: E }),
                    }),
                  ],
                })
              : null,
          ],
        });
      };
      C.displayName = "ConfigDrivenUiDebugModuleModal";
      let M = (e) => {
        var l, n, _, g;
        let {
            zoneId: v,
            moduleGroupId: x,
            moduleType: y,
            moduleData: f,
            isDatasourceModule: b,
            isModule: j,
            conditionMap: D,
            children: M,
            layoutMetadata: N,
            deferredExtensions: k,
            setDebugModuleData: E,
            wasEnrichmentDeferred: U,
          } = e,
          I = null == f ? void 0 : f.conditions,
          S = (0, p.P)(I, null != D ? D : {}),
          B = !j || S,
          [O, T] = (0, o.e)(!b),
          [w, G] = (0, o.e)(!1),
          L = (0, c.t)() && (j ? !!y : !!(v && x));
        return L && (!j || y) && (j || v || x)
          ? (0, t.jsx)("div", {
              style: { padding: 4 },
              children: (0, t.jsxs)("div", {
                className: (0, i.A)(m.ConfigDrivenUiDebugBorder, {
                  [null != (l = m.isCollapsed) ? l : ""]: !O || !S,
                  [null != (n = m.isModule) ? n : ""]: j,
                  [null != (_ = m.isDatasourceModule) ? _ : ""]: b,
                }),
                children: [
                  (0, t.jsxs)("div", {
                    className: m.ConfigDrivenUiModuleLabel,
                    children: [
                      b
                        ? null
                        : B
                        ? (0, t.jsx)(a.T, {
                            "aria-label": O ? "Collapse" : "Expand",
                            className: (0, i.A)(
                              m.ConfigDrivenUiDebugIconButton,
                              m.ConfigDrivenUiDebugToggleButton,
                              { [null != (g = m.isOpen) ? g : ""]: O }
                            ),
                            onClick: T,
                            children: (0, t.jsx)(s.R, {}),
                          })
                        : (0, t.jsx)("div", {
                            className: m.ConfigDrivenUiDebugHiddenIcon,
                            title:
                              "This module is hidden because one or more of its conditions weren't met.",
                            children: (0, t.jsx)(r.t, {}),
                          }),
                      (0, t.jsx)(h, {
                        isDatasourceModule: b,
                        isModule: j,
                        moduleGroupId: x,
                        moduleType: y,
                        zoneId: v,
                      }),
                      U
                        ? (0, t.jsx)(a.T, {
                            "aria-label": "Enrichment deferred",
                            className: m.ConfigDrivenUiDebugIconButton,
                            onClick: G,
                            title: "Enrichment deferred",
                            children: (0, t.jsx)(d.I, { name: "time-clock" }),
                          })
                        : null,
                      (0, t.jsx)(a.T, {
                        "aria-label": j
                          ? "View module data"
                          : "View layout metadata",
                        className: m.ConfigDrivenUiDebugIconButton,
                        onClick: G,
                        title: j ? "View module data" : "View layout metadata",
                        children: (0, t.jsx)(u.G, {}),
                      }),
                      (0, t.jsx)(C, {
                        conditionMap: D,
                        deferredExtensions: k,
                        isDebugging: L,
                        isInfoOpen: w,
                        isModule: j,
                        layoutMetadata: N,
                        moduleData: f,
                        moduleType: y,
                        setDebugModuleData: E,
                        toggleIsInfoOpen: G,
                      }),
                    ],
                  }),
                  O
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          M,
                          j && S && !b
                            ? (0, t.jsxs)("div", {
                                className: m.ConfigDrivenUiEmptyWarning,
                                children: [
                                  "This module met all its conditions, but chose not to display anything. This often means the module is irrelevant to the current experience. (For example,",
                                  " ",
                                  (0, t.jsx)("code", {
                                    children:
                                      "ProductDetailFeaturedInCollections",
                                  }),
                                  " only appears on products that are part of a collection.)",
                                ],
                              })
                            : null,
                        ],
                      })
                    : null,
                ],
              }),
            })
          : M;
      };
      M.displayName = "ConfigDrivenUiDebugBorder";
    },
    81506: (e, l, n) => {
      "use strict";
      n.d(l, { t: () => a });
      var t = n(3576),
        i = n(37876),
        o = n(9394);
      let a = (e) =>
        (0, i.jsx)(
          o.I,
          (0, t._)(
            {
              _name: "VisibilityOff",
              _src: "VisibilityOff.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      a.displayName = "IconVisibilityOff";
    },
    85684: (e, l, n) => {
      "use strict";
      n.d(l, { n: () => R });
      var t = n(3576),
        i = n(62701),
        o = n(37876),
        a = n(14232),
        d = n(19427),
        s = n(57086),
        r = n(20881),
        u = n(70418);
      let { useMutation: c } = (0, s.k)({
          name: "@web/domain-cdui-orchestrations/mutations/post-update-deferred-enrichment",
          mutationFn: async (e) => {
            var l;
            let {
                enrichmentQueryParameters: n,
                moduleEnrichmentContext: o,
                modulePlacementId: a,
                moduleType: s,
                pageContext: c,
                pageType: m,
                isDebugModuleLabelsEnabled: p,
                cduiOrchestrationsBaseUrlOverride: h,
                cduiOrchestrationsApiKeyOverride: _,
                cduiOrchestrationsMockId: g,
              } = e,
              { apis: v, apiKey: x } = (0, d.$)().services.apiPlatform,
              { cduiOrchestrations: y } = v,
              {
                baseUrl: f,
                endpointPaths: b,
                apiKeyStage: j,
                apiKeyProduction: D,
              } = y,
              C = ""
                .concat(b.pagesV1, "/")
                .concat(m, "/deferred_enrichment/modules"),
              M = "stage" === _ && j ? j : "production" === _ && D ? D : void 0,
              N = null != (l = null != M ? M : y.apiKey) ? l : x,
              k = u.o.buildURLWithParams(
                C,
                (0, i._)((0, t._)({}, n), { key: N }),
                null != h ? h : f
              ),
              {
                data: E,
                ok: U,
                status: I,
                statusText: S,
              } = await (0, r.bE)(k, {
                credentials: "include",
                headers: (0, t._)(
                  {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  p ? { "x-cdui-debug": "true" } : void 0,
                  g ? { "x-cdui-mock-id": g } : void 0
                ),
                body: JSON.stringify({
                  page_context: c,
                  modules: [
                    {
                      module_placement_id: a,
                      module_type: s,
                      enrichment_context: o,
                    },
                  ],
                }),
              });
            if (U) return E;
            throw Error("".concat(I, "-").concat(S));
          },
        }),
        { useMutation: m } = (0, s.k)({
          name: "@web/domain-cdui-orchestrations/mutations/post-update-variation-child-tcin",
          mutationFn: async (e) => {
            var l;
            let {
                variationChildSwitchQueryParameters: n,
                moduleEnrichmentContext: o,
                modulePlacementId: a,
                moduleType: s,
                pageContext: c,
                pageType: m,
                isDebugModuleLabelsEnabled: p,
                cduiOrchestrationsBaseUrlOverride: h,
                cduiOrchestrationsApiKeyOverride: _,
                cduiOrchestrationsMockId: g,
              } = e,
              { apis: v, apiKey: x } = (0, d.$)().services.apiPlatform,
              { cduiOrchestrations: y } = v,
              {
                baseUrl: f,
                endpointPaths: b,
                apiKeyStage: j,
                apiKeyProduction: D,
              } = y,
              C = ""
                .concat(b.pagesV1, "/")
                .concat(m, "/variation_child_switch"),
              M = "stage" === _ && j ? j : "production" === _ && D ? D : void 0,
              N = null != (l = null != M ? M : y.apiKey) ? l : x,
              k = u.o.buildURLWithParams(
                C,
                (0, i._)((0, t._)({}, n), { key: N }),
                null != h ? h : f
              ),
              {
                data: E,
                ok: U,
                status: I,
                statusText: S,
              } = await (0, r.bE)(k, {
                credentials: "include",
                headers: (0, t._)(
                  {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  p ? { "x-cdui-debug": "true" } : void 0,
                  g ? { "x-cdui-mock-id": g } : void 0
                ),
                body: JSON.stringify({
                  page_context: c,
                  modules: [
                    {
                      module_placement_id: a,
                      module_type: s,
                      enrichment_context: o,
                    },
                  ],
                }),
              });
            if (U) return E;
            throw Error("".concat(I, "-").concat(S));
          },
        });
      var p = n(67684),
        h = n(81931),
        _ = n(73208),
        g = n(26989),
        v = n(68099),
        x = n(93967),
        y = n(42252),
        f = n(73880),
        b = n(94259),
        j = n(40196),
        D = n(1152);
      let C = (0, a.memo)((e) => {
        let { ModuleComponent: l, module_data: n, moduleMetadata: a } = e;
        return (0, o.jsx)(l, (0, i._)((0, t._)({}, n), { moduleMetadata: a }));
      });
      C.displayName = "ModuleComponentMemo";
      var M = n(59871),
        N = n(69241);
      let k = (e) => {
        let { side: l } = e,
          n = (0, a.useRef)(null),
          t = ((e, l) => {
            if (e.current)
              return getComputedStyle(e.current).getPropertyValue(
                "--module-gap-".concat(l)
              );
          })(n, l);
        return (0, o.jsx)("div", {
          className: (0, N.A)(M.GapValueContainer, M[l]),
          ref: n,
          children: t,
        });
      };
      k.displayName = "GapValue";
      let E = () =>
        (0, p.t)()
          ? (0, o.jsxs)("div", {
              className: M.ModuleGapDebugBorder,
              "data-gap-visualizer": !0,
              children: [
                (0, o.jsx)(k, { side: "top" }),
                (0, o.jsx)(k, { side: "bottom" }),
                (0, o.jsx)(k, { side: "left" }),
                (0, o.jsx)(k, { side: "right" }),
              ],
            })
          : null;
      E.displayName = "ConfigDrivenUiDebugGapVisualizer";
      var U = n(31252);
      let I = (e) => {
        var l;
        let {
            modulesToComponentsMap: n,
            conditionMap: t,
            module: i,
            moduleMetadata: a,
          } = e,
          { module_type: d, module_data: s } = null != i ? i : {},
          r = d ? n[d] : void 0,
          u = r && "component" in r ? r.component : r,
          c = null == s ? void 0 : s.conditions;
        return (0, D.P)(c, t)
          ? (null == s || null == (l = s.component) ? void 0 : l.__typename)
            ? (0, o.jsx)(U.R, { component: null == s ? void 0 : s.component })
            : u
            ? (0, o.jsxs)("div", {
                "data-module-type": d,
                children: [
                  (0, o.jsx)(C, {
                    module_data: s,
                    ModuleComponent: u,
                    moduleMetadata: a,
                  }),
                  (0, o.jsx)(E, {}),
                ],
              })
            : null
          : null;
      };
      I.displayName = "ConfigDrivenUiModuleInternal";
      var S = n(74682),
        B = n(34994);
      let O = (e) => {
        let {
          children: l,
          handleIntersectedOnce: n,
          isEnrichmentDeferred: t,
          isDatasourceModule: i,
        } = e;
        return !t || i
          ? l
          : (0, o.jsx)(B.t, { onIntersectedOnce: n, children: l });
      };
      O.displayName = "ConfigDrivenUiDeferredEnrichmentWrapper";
      var T = n(95408),
        w = n(95636),
        G = n(12430),
        L = n(18551),
        z = n(3560),
        V = n(88316),
        F = n(78502),
        P = n(46242),
        W = n(48603);
      let R = (e) => {
        var l;
        let {
            conditionMap: n,
            module: d,
            moduleGroupId: s,
            modulesToComponentsMap: r,
            pageContext: u,
            pageType: D,
            zoneId: C,
            onModuleDataChange: M,
            onModuleMetadataChange: N,
            isDatasourceModule: k = !1,
          } = e,
          { asPath: E } = (0, y.rd)(),
          U = (0, j.x6)(E),
          { formFactor: B } = (0, a.useContext)(b.B.Context),
          { is_enrichment_deferred: R = !1 } = d,
          [A, H] = (0, a.useState)(),
          {
            is_enrichment_deferred: q = !1,
            module_type: $,
            module_data: K,
            variation_child_switchable: Z = !1,
          } = null != A ? A : d,
          J = $ ? r[$] : void 0,
          Y = J && "component" in J ? J.requiredInputs : void 0,
          [Q, X] = (0, a.useState)(),
          ee = (0, a.useMemo)(
            () => (0, i._)((0, t._)({}, d), { module_data: null != Q ? Q : K }),
            [d, K, Q]
          ),
          [el, en] = (0, a.useState)(),
          [et, ei] = (0, a.useState)({ isLoading: q });
        (0, a.useEffect)(() => {
          (null == A ? void 0 : A.module_data) &&
            (null == M || M(A.module_data));
        }, [A, M]),
          (0, a.useEffect)(() => {
            null == N || N(et);
          }, [et, N]);
        let [eo, ea] = (0, a.useState)(k),
          [ed, es] = (0, a.useState)(!1),
          [er] = c(),
          [eu] = m(),
          ec = (0, p.t)(),
          em = (0, _.K1)(g.Gs),
          ep = (0, f.Z)(em),
          {
            potentiallyRequiredInputs: eh,
            areRequiredInputsResolved: e_,
            hasRequiredInputsChanged: eg,
          } = ((e) => {
            let { requiredInputs: l, pageType: n } = e,
              { preferredStoreId: t, queryState: i } = (0, w._f)(),
              o = (0, F.$6)(i),
              {
                guestLocation: {
                  zipCode: d,
                  state: s,
                  latitude: r,
                  longitude: u,
                } = {},
                queryState: c,
              } = (0, G.oK)(),
              m = (0, F.$6)(c),
              [p, h] = (0, L.RJ)(),
              _ = (0, F.$6)(h),
              { scheduledDeliveryStoreId: g, queryState: v } = (0, P.Y)(),
              x = (0, F.$6)(v),
              { storeIds: y, enabled: b } = (0, z.wm)(),
              j = [...new Set(y)].join(","),
              D = p(V.uA),
              C = p(V.N1),
              M = p(V.bc),
              N = (0, W.Rn)(),
              k = (0, W.Ry)(),
              E =
                _ ||
                k ||
                ((0, T.Mv)("GLOBAL_GUEST_ANONYMOUS_ESTIMATE_ENABLED") && N),
              U = (0, a.useMemo)(
                () => ({
                  base_membership: D,
                  card_membership: C,
                  paid_membership: M,
                  purchasable_store_ids: "pdp" === n ? t : j,
                  latitude: r,
                  longitude: u,
                  scheduled_delivery_store_id: g,
                  state: s,
                  zip: d,
                  store_id: t,
                }),
                [D, C, j, n, M, t, r, u, s, d, g]
              ),
              I = (0, f.Z)(U),
              S = (0, a.useMemo)(
                () =>
                  !!I &&
                  !!l &&
                  0 !== l.length &&
                  l.some((e) =>
                    "guest_location" === e
                      ? I.latitude !== U.latitude ||
                        I.longitude !== U.longitude ||
                        I.state !== U.state ||
                        I.zip !== U.zip
                      : "circle_membership" === e
                      ? I.base_membership !== U.base_membership ||
                        I.card_membership !== U.card_membership ||
                        I.paid_membership !== U.paid_membership
                      : I[e] !== U[e]
                  ),
                [I, U, l]
              );
            return {
              potentiallyRequiredInputs: U,
              areRequiredInputsResolved: (0, a.useCallback)(() => {
                if (!l || 0 === l.length) return !0;
                let e = {
                  circle_membership: E,
                  guest_location: m,
                  purchasable_store_ids: "pdp" === n ? o : b,
                  store_id: o,
                  scheduled_delivery_store_id: x,
                };
                return l.every((l) => e[l]);
              }, [m, b, E, x, o, n, l]),
              hasRequiredInputsChanged: S,
            };
          })({ requiredInputs: Y, pageType: D });
        (0, a.useEffect)(() => {
          eg && q && es(!1);
        }, [eg, q]);
        let ev = (0, h.Vx)(),
          ex = (0, h.m)(),
          ey = (0, h.yk)();
        (0, a.useEffect)(() => {
          let e = async () => {
            es(!0);
            let e = Object.fromEntries(
              Object.entries(eh).filter((e) => {
                let [l, n] = e;
                return null != n;
              })
            );
            await er(
              {
                enrichmentQueryParameters: (0, i._)((0, t._)({}, e), {
                  page: U,
                  channel: "phone" === B ? "MWEB" : "WEB",
                  tcin: em,
                }),
                moduleEnrichmentContext: ee.enrichment_context,
                modulePlacementId: ee.module_placement_id,
                moduleType: ee.module_type,
                pageContext: u,
                pageType: D,
                isDebugModuleLabelsEnabled: ec,
                cduiOrchestrationsBaseUrlOverride: ev,
                cduiOrchestrationsApiKeyOverride: ex,
                cduiOrchestrationsMockId: ey,
              },
              {
                onSuccess: (e) => {
                  var l;
                  (null == e || null == (l = e.modules) ? void 0 : l[0]) &&
                    H(
                      (0, i._)((0, t._)({}, e.modules[0]), {
                        module_data: e.modules[0].module_data,
                        key: e.modules[0].key || ee.key,
                      })
                    ),
                    (null == e ? void 0 : e.extensions) && en(e.extensions),
                    ei({ isLoading: !1 });
                },
                onError: () => {
                  ei({ isLoading: !1 });
                },
              }
            );
          };
          q &&
            !ed &&
            e_() &&
            eo &&
            (!1 === et.isLoading && ei({ isLoading: !0 }), e());
        }, [
          e_,
          ex,
          ev,
          ey,
          B,
          eo,
          eg,
          ed,
          ec,
          q,
          ee.enrichment_context,
          ee.key,
          ee.module_placement_id,
          ee.module_type,
          et.isLoading,
          u,
          U,
          D,
          eh,
          em,
          er,
        ]),
          (0, a.useEffect)(() => {
            let e = async () => {
              await eu(
                {
                  moduleEnrichmentContext: ee.enrichment_context,
                  modulePlacementId: ee.module_placement_id,
                  moduleType: ee.module_type,
                  pageContext: u,
                  pageType: D,
                  cduiOrchestrationsBaseUrlOverride: ev,
                  cduiOrchestrationsApiKeyOverride: ex,
                  cduiOrchestrationsMockId: ey,
                  variationChildSwitchQueryParameters: {
                    page: U,
                    channel: "phone" === B ? "MWEB" : "WEB",
                    tcin: em,
                  },
                },
                {
                  onSuccess: (e) => {
                    var l;
                    (null == e || null == (l = e.modules) ? void 0 : l[0]) &&
                      (H(
                        (0, i._)((0, t._)({}, e.modules[0]), {
                          module_data: e.modules[0].module_data,
                          key: e.modules[0].key || ee.key,
                        })
                      ),
                      ei({ isLoading: !1 }));
                  },
                  onError: () => {
                    ei({ isLoading: !1 });
                  },
                }
              );
            };
            !q &&
              Z &&
              em &&
              ep &&
              em !== ep &&
              (!1 === et.isLoading && ei({ isLoading: !0 }), e());
          }, [
            ex,
            ev,
            ey,
            B,
            q,
            ee.enrichment_context,
            ee.key,
            ee.module_placement_id,
            ee.module_type,
            et.isLoading,
            u,
            U,
            D,
            ep,
            em,
            eu,
            Z,
          ]);
        let ef = (0, a.useCallback)(async () => {
            ea(!0);
          }, []),
          eb = null != A ? A : ee;
        return (0, o.jsx)(S.a, {
          conditionMap: n,
          deferredExtensions: el,
          isDatasourceModule: k,
          isModule: !0,
          moduleData: eb.module_data,
          moduleType: $,
          setDebugModuleData: X,
          wasEnrichmentDeferred: R,
          children: (0, o.jsx)(x.H, {
            action: "error_boundary_zone_"
              .concat(C, "_module_group_")
              .concat(s, "_module_")
              .concat($, "_non_critical_error"),
            children: (0, o.jsx)(O, {
              handleIntersectedOnce: ef,
              isDatasourceModule: k,
              isEnrichmentDeferred: q,
              children: (0, o.jsx)(v.e, {
                module_exp_id:
                  null == (l = eb.module_data) ? void 0 : l.module_exp_id,
                module_group_id: s,
                module_type: $,
                children: (0, o.jsx)(I, {
                  conditionMap: n,
                  module: eb,
                  moduleMetadata: et,
                  modulesToComponentsMap: r,
                }),
              }),
            }),
          }),
        });
      };
      R.displayName = "ConfigDrivenUiModule";
    },
    96662: (e) => {
      e.exports = {
        modal: "styles_modal__qDuZz",
        codeBlock: "styles_codeBlock__6Rgf3",
        buttonGroup: "styles_buttonGroup__4e0_f",
      };
    },
  },
]);
