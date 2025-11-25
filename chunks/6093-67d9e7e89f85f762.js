(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6093],
  {
    24955: (e, t, i) => {
      "use strict";
      i.d(t, { s: () => n });
      var r = i(2503);
      let n = (e) => {
        401 === e && (0, r.Jv)();
      };
    },
    36093: (e, t, i) => {
      "use strict";
      i.d(t, { I7: () => E, Tl: () => h, lM: () => C });
      var r = i(3576),
        n = i(14232),
        l = i(83923),
        o = i(12438),
        s = i(71002),
        a = i(42252),
        d = i(9894),
        u = i(3422),
        _ = i(48603),
        c = i(23945),
        y = i(2503),
        v = i(68112),
        g = i(99786),
        m = i(75800),
        p = i(86506);
      let f = (0, d.Ri)(p.xx);
      function h() {
        let { query: e } = (0, a.rd)(),
          t = (0, u.xs)(e, "regMode"),
          i = (0, u.xs)(e, "registryId"),
          l = (0, u.xs)(e, "itemLineNum"),
          d = (0, u.xs)(e, "registryType"),
          c = (0, u.xs)(e, "type"),
          y = o(t),
          v = (0, _.$7)(),
          g = (0, n.useMemo)(() => y === p.IK || y === p.o7, [y]),
          m = (0, n.useCallback)(() => y === p.IK, [y]),
          h = (0, n.useCallback)(() => {
            if (i) {
              var e;
              let t = l ? { registry_line_id: l } : {};
              return {
                registry_information: (0, r._)(
                  {
                    registry_id: i,
                    registry_subtype: s(
                      null != (e = null != d ? d : c) ? e : ""
                    ),
                    registry_type: "Registry",
                  },
                  t
                ),
              };
            }
          }, [l, i, d, c]),
          C = (0, n.useMemo)(() => !!f || y === p.o7, [y]),
          E = (0, n.useMemo)(() => y === p.IK, [y]),
          T = (0, n.useMemo)(() => y === p.hJ || (!g && !!f), [g, y]),
          I = (0, n.useMemo)(() => !!v && (!!T || !!g), [T, g, v]);
        return {
          isCookieSetFromRegistry: (0, n.useMemo)(
            () => "baby" === f || "wedding" === f,
            []
          ),
          isGiftGiverOrRegistrantFromMyItems: g,
          registryModeStatusFromCookie: f,
          getRegistryInformationForAddToCart: h,
          hasRegistryModeStatus: T,
          isInRegistrantMode: C,
          isInGiftGiverMode: E,
          isInRegistryMode: I,
          getRegistryGiftGiverStatus: m,
        };
      }
      function C(e) {
        var t, i;
        let {
            registryId: r,
            tcin: o,
            parentTcin: s,
            isStandaloneOrChildItem: d = !0,
            forceOpenMultipleRegistryDrawer: f = !1,
            addItemToRegistryOnSuccessCallback: h,
            addItemToRegistryOnErrorCallback: C,
            openCreateARegistryModal: E,
            openMultipleRegistryDrawer: T,
            isInPrzCarousel: I,
            lnkData: b,
            slingshotComponentId: x,
            placementId: k,
            featureType: A,
            trackingData: N,
          } = e,
          { query: w, asPath: L } = (0, a.rd)(),
          M = (0, _.qf)(),
          B = (0, c.V)(),
          R = (0, n.useMemo)(
            () =>
              null == L
                ? void 0
                : L.includes("/gift-registry/browse-and-add-items"),
            [L]
          ),
          q = (0, n.useMemo)(() => R || I, [I, R]),
          [O, { isSuccess: D }] = (0, v.v)(),
          U = O(),
          S = (0, _.$7)(),
          Y = (0, u.xs)(w, "registryId"),
          H =
            (null == U ? void 0 : U.length) === 1
              ? null == (t = U[0])
                ? void 0
                : t.registry_id
              : null,
          P = !!(r || Y || H),
          {
            ffCustomInteraction: W,
            ffComponentload: G,
            trackAddToRegistry: J,
          } = (0, m.y)(),
          F = null != (i = null != r ? r : Y) ? i : H,
          K = (0, n.useMemo)(
            () =>
              null == U
                ? void 0
                : U.find((e) => (null == e ? void 0 : e.registry_id) === F),
            [U, F]
          ),
          $ = (0, n.useCallback)(
            (e) => {
              var t, i, r, n, l, s, a, d;
              J({
                featureType: e,
                element: (null == N ? void 0 : N.element) || {
                  type: p.L0,
                  id: o,
                },
                slingshot:
                  (null == N ? void 0 : N.slingshot) ||
                  (x ? { componentId: x, placementId: k } : void 0),
                prz:
                  (null == N ? void 0 : N.prz) ||
                  (I
                    ? {
                        strategyId:
                          (null == b || null == (t = b.recClick)
                            ? void 0
                            : t.strategyId) || "",
                        placementId: k || "",
                        strategyName:
                          (null == b || null == (i = b.recClick)
                            ? void 0
                            : i.strategyName) || "",
                        strategyDescription:
                          (null == b || null == (r = b.recClick)
                            ? void 0
                            : r.strategyDescription) || "",
                      }
                    : void 0),
                registry: F
                  ? {
                      title:
                        null != (l = null == K ? void 0 : K.registry_title)
                          ? l
                          : "",
                      event_date:
                        null !=
                        (s =
                          null == K || null == (n = K.event)
                            ? void 0
                            : n.event_date)
                          ? s
                          : "",
                      id: F,
                      type:
                        null != (a = null == K ? void 0 : K.registry_type)
                          ? a
                          : "",
                      status:
                        null != (d = null == K ? void 0 : K.registry_status)
                          ? d
                          : "",
                    }
                  : void 0,
              });
            },
            [J, F, K, I, b, k, x, o, N]
          ),
          [j] = (0, g.L)({
            onSuccess: async () => {
              W(
                "registry_tcin_".concat(o, "_added_to_registry"),
                {},
                q ? [{ tcin: s, childTCIN: o }] : []
              ),
                G(
                  {
                    addToRegistry: !0,
                    registries: [
                      {
                        hasItems: !1,
                        id: F,
                        type: "".concat(
                          l(null == K ? void 0 : K.registry_type),
                          " registry"
                        ),
                      },
                    ],
                  },
                  q ? b : {},
                  q ? [{ tcin: s, childTCIN: o }] : []
                ),
                h(),
                $(x ? p.xH : A || p.KY);
            },
            onError: async () => {
              W("registry_tcin_".concat(o, "_add_to_registry_failed")), C();
            },
          }),
          z = (0, n.useCallback)(async () => {
            W("registry_add_to_registry_button_clicked"),
              S
                ? D &&
                  ((null == U ? void 0 : U.length) || !E
                    ? P && d && !f
                      ? j({
                          tcin: o,
                          requested_quantity: 1,
                          purchased_quantity: 0,
                          registry_item_type: "TCIN",
                          added_by_recipient: !0,
                          registry_id: r || Y || H || "",
                        })
                      : T()
                    : E())
                : (0, y.Jv)();
          }, [
            W,
            S,
            D,
            null == U ? void 0 : U.length,
            E,
            P,
            d,
            f,
            j,
            o,
            r,
            Y,
            H,
            T,
          ]);
        return {
          handleRegistryButtonClick: (0, n.useCallback)(
            async (e) => {
              B && (M ? z() : (0, y.Jv)());
            },
            [z, B, M]
          ),
        };
      }
      function E() {
        let { query: e } = (0, a.rd)(),
          t = (0, u.xs)(e, "registryType"),
          i = (0, u.xs)(e, "type"),
          { isCookieSetFromRegistry: r } = h(),
          l = (0, n.useMemo)(
            () =>
              (null == t ? void 0 : t.toLowerCase()) === "baby" ||
              (null == i ? void 0 : i.toLowerCase()) === "baby",
            [t, i]
          ),
          o = (0, n.useMemo)(
            () =>
              (null == t ? void 0 : t.toLowerCase()) === "wedding" ||
              (null == i ? void 0 : i.toLowerCase()) === "wedding",
            [t, i]
          );
        return {
          isRegistry: (0, n.useMemo)(() => l || o || r, [l, o, r]),
          isBabyRegistry: l,
          isWeddingRegistry: o,
        };
      }
    },
    65793: (e) => {
      var t = Math.floor,
        i = Math.random;
      e.exports = function (e, r) {
        return e + t(i() * (r - e + 1));
      };
    },
    68112: (e, t, i) => {
      "use strict";
      i.d(t, { v: () => y });
      var r = i(17379),
        n = i(19427),
        l = i(88137),
        o = i(17800),
        s = i(3576),
        a = i(20881),
        d = i(70418),
        u = i(96377);
      let _ = "@web/domain-registry/registries/queries/get-registries",
        { useQuery: c } = (0, r.T)({
          name: _,
          keyFn: (e) => {
            let { apiKey: t } = (0, n.$)().services.apiPlatform;
            if (!t) throw Error("API key required for ".concat(_));
            return [_, e];
          },
          queryFn: async (e) => {
            let { data: t } = await ((e) => {
              var t, i;
              let {
                  apiKey: r,
                  apis: { registriesV2: l },
                  baseUrl: o,
                } = (0, n.$)().services.apiPlatform,
                { fetchOptions: _, requestParams: c } = null != e ? e : {},
                { profile_id: y } = null != c ? c : {},
                v = d.o.buildURLWithParams(
                  new URL(
                    null != (i = null == (t = l.endpointPaths) ? void 0 : t.v2)
                      ? i
                      : "",
                    o
                  ),
                  {
                    profile_id: y,
                    channel: "WEB",
                    sub_channel: "TGTWEB",
                    sn_id: u(1, 0x5f5e0ff, !1),
                    key: r,
                  }
                );
              return (0, a.Jt)(v, (0, s._)({}, _));
            })({ requestParams: e, fetchOptions: { credentials: "include" } });
            return t;
          },
          defaultOptions: { staleTime: 3e4 },
        }),
        y = (0, o.L)(c, {
          blockCallOnAuthFail: !0,
          minimumAssuranceLevel: l.ov,
        });
    },
    71002: (e, t, i) => {
      e.exports = i(46013)(function (e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      });
    },
    75800: (e, t, i) => {
      "use strict";
      i.d(t, { y: () => c });
      var r = i(3576),
        n = i(14232),
        l = i(42252),
        o = i(83923),
        s = i(19351),
        a = i(60823),
        d = i(3422),
        u = i(86506);
      function _(e) {
        return e && "object" == typeof e && Object.keys(e).length > 0;
      }
      function c() {
        let e = (0, s.z1)(),
          { trackClick: t } = (0, a.f)(),
          { query: i } = (0, l.rd)(),
          c = (0, d.xs)(i, "type"),
          y = (0, d.xs)(i, "registryId"),
          v = (0, n.useMemo)(
            () =>
              y && c
                ? {
                    registries: [
                      {
                        hasItems: !1,
                        id: y,
                        type: "".concat(o(c), " registry"),
                      },
                    ],
                  }
                : {},
            [y, c]
          );
        return {
          ffCustomInteraction: function (t, i, n) {
            t &&
              e.trackEvent(
                (0, r._)(
                  {
                    guest: { eventType: "customInteraction" },
                    customInteraction: (0, r._)({ value: t }, i),
                  },
                  n && { products: n }
                )
              );
          },
          ffAdImpressionsInteraction: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : void 0;
            t &&
              e.trackEvent({ guest: { eventType: "adimp" }, adImpressions: t });
          },
          ffComponentload: function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0;
            e.trackEvent(
              (0, r._)(
                {
                  guest: { eventType: "componentload" },
                  registry: (0, r._)({}, v, t),
                },
                i && { lnk: (0, r._)({}, i) },
                n && { products: n }
              )
            );
          },
          trackAddToRegistry: function (e) {
            let {
              featureType: i,
              element: n,
              slingshot: l,
              prz: o,
              radeus: s,
              registry: a,
            } = e;
            t.track(
              (0, r._)(
                { featureType: i, clickType: u.U_ },
                _(n) && { element: n },
                _(l) && { slingshot: l },
                _(o) && { prz: o },
                _(s) && { radeus: s },
                _(a) && { registry: a }
              )
            );
          },
        };
      }
    },
    83923: (e, t, i) => {
      e.exports = i(46013)(function (e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      });
    },
    86506: (e, t, i) => {
      "use strict";
      i.d(t, {
        $O: () => y,
        $g: () => g,
        IK: () => d,
        JS: () => s,
        KY: () => h,
        L0: () => E,
        Q4: () => c,
        U_: () => C,
        VJ: () => m,
        YX: () => l,
        hJ: () => _,
        jQ: () => o,
        jr: () => f,
        o7: () => u,
        oY: () => a,
        rF: () => v,
        tg: () => r,
        xH: () => p,
        xx: () => n,
      });
      let r = "https://www.target.com/gift-registry",
        n = "regModeLP",
        l = "Add to registry",
        o = "Add to wish list",
        s = "Registry",
        a = "Wish list",
        d = "GG",
        u = "REGST",
        _ = "REG",
        c = "CUSTOM",
        y = "WEDDING",
        v = "BABY",
        g = "CHARITY",
        m = "HOLIDAY",
        p = "RECOMMENDATION",
        f = "BUY_BOX",
        h = "GRID_CARD",
        C = "ADD_TO_REGISTRY",
        E = "TCIN";
    },
    92410: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => r });
      let r = {
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
    96377: (e, t, i) => {
      var r = i(65793),
        n = i(65930),
        l = i(60524),
        o = parseFloat,
        s = Math.min,
        a = Math.random;
      e.exports = function (e, t, i) {
        if (
          (i && "boolean" != typeof i && n(e, t, i) && (t = i = void 0),
          void 0 === i &&
            ("boolean" == typeof t
              ? ((i = t), (t = void 0))
              : "boolean" == typeof e && ((i = e), (e = void 0))),
          void 0 === e && void 0 === t
            ? ((e = 0), (t = 1))
            : ((e = l(e)), void 0 === t ? ((t = e), (e = 0)) : (t = l(t))),
          e > t)
        ) {
          var d = e;
          (e = t), (t = d);
        }
        if (i || e % 1 || t % 1) {
          var u = a();
          return s(e + u * (t - e + o("1e-" + ((u + "").length - 1))), t);
        }
        return r(e, t);
      };
    },
    99786: (e, t, i) => {
      "use strict";
      i.d(t, { L: () => v });
      var r = i(57086),
        n = i(88137),
        l = i(45983),
        o = i(24955),
        s = i(3576),
        a = i(62701),
        d = i(19427),
        u = i(20881),
        _ = i(70418),
        c = i(92410);
      let { useMutation: y } = (0, r.k)({
          name: "@site-registry/domains/registry/add-item/mutations/add-item",
          mutationFn: async (e) => {
            let t = ((e) => {
                var t, i;
                let { fetchOptions: r, requestParams: n } = null != e ? e : {},
                  {
                    apiKey: l,
                    apis: { registriesV2: o },
                    baseUrl: y,
                  } = (0, d.$)().services.apiPlatform,
                  v = ""
                    .concat(
                      null !=
                        (i = null == (t = o.endpointPaths) ? void 0 : t.v2)
                        ? i
                        : "",
                      "/"
                    )
                    .concat(
                      null == n ? void 0 : n.registry_id,
                      "/registry_items"
                    ),
                  g = _.o.buildURLWithParams(new URL(v, y), {
                    channel: c.A.CHANNEL_WEB,
                    sub_channel: c.A.SUBCHANNEL_DESKTOP,
                    location_id: "3991",
                    key: l,
                    registry_id: null == n ? void 0 : n.registry_id,
                  }),
                  m = {};
                switch (null == n ? void 0 : n.registry_item_type) {
                  case "TCIN":
                    m = {
                      tcin: null == n ? void 0 : n.tcin,
                      requested_quantity:
                        null == n ? void 0 : n.requested_quantity,
                      purchased_quantity:
                        null == n ? void 0 : n.purchased_quantity,
                      registry_item_type:
                        null == n ? void 0 : n.registry_item_type,
                      item_note: null == n ? void 0 : n.item_note,
                      added_by_recipient:
                        null == n ? void 0 : n.added_by_recipient,
                      most_wanted_flag: null == n ? void 0 : n.most_wanted_flag,
                    };
                    break;
                  case "EXTERNAL_ITEM":
                    m = {
                      registry_item_type:
                        null == n ? void 0 : n.registry_item_type,
                      external_product_url:
                        null == n ? void 0 : n.external_product_url,
                      external_retailer:
                        null == n ? void 0 : n.external_retailer,
                      external_product_price:
                        null == n ? void 0 : n.external_product_price,
                      external_product_size:
                        null == n ? void 0 : n.external_product_size,
                      external_product_color:
                        null == n ? void 0 : n.external_product_color,
                      external_product_image_url:
                        null == n ? void 0 : n.external_product_image_url,
                      requested_quantity:
                        null == n ? void 0 : n.requested_quantity,
                      purchased_quantity:
                        null == n ? void 0 : n.purchased_quantity,
                      item_title: null == n ? void 0 : n.item_title,
                      item_note: null == n ? void 0 : n.item_note,
                      most_wanted_flag: null == n ? void 0 : n.most_wanted_flag,
                      visibility_indicator:
                        null == n ? void 0 : n.visibility_indicator,
                    };
                    break;
                  case "HONEYFUND_ITEM":
                    m = {
                      registry_item_type:
                        null == n ? void 0 : n.registry_item_type,
                      item_note: null == n ? void 0 : n.item_note,
                      most_wanted_flag: null == n ? void 0 : n.most_wanted_flag,
                      visibility_indicator:
                        null == n ? void 0 : n.visibility_indicator,
                      honeyfund_item_experience_id:
                        null == n ? void 0 : n.honeyfund_item_experience_id,
                    };
                }
                return {
                  fetch: () =>
                    (0, u.bE)(
                      g,
                      (0, a._)((0, s._)({ credentials: "include" }, r), {
                        headers: { Accept: "application/json" },
                        body: JSON.stringify({ items: [m] }),
                      })
                    ),
                  url: g,
                  options: e,
                };
              })({ requestParams: e, fetchOptions: {} }),
              {
                data: i,
                ok: r,
                statusText: n,
              } = await t.fetch().catch((e) => {
                (0, o.s)(e.status);
              });
            if (r) return i;
            throw Error("".concat(n));
          },
        }),
        v = (0, l.U)(y, { minimumAssuranceLevel: n.ov });
    },
  },
]);
