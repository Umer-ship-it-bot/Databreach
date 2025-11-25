(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [696],
  {
    7352: (e, s, r) => {
      "use strict";
      r.d(s, { J: () => o });
      var t = r(3576),
        a = r(65699),
        i = r(37876),
        l = r(15039),
        n = r(15153);
      let o = (e) => {
        var { $valid: s, className: r, ref: o } = e,
          c = (0, a._)(e, ["$valid", "className", "ref"]);
        return (0, i.jsx)(
          "input",
          (0, t._)(
            {
              className: l(n.ndsBaseCheckbox, !1 === s && n.invalid, r),
              ref: o,
              type: "checkbox",
            },
            c
          )
        );
      };
      o.displayName = "BaseCheckbox";
    },
    15153: (e) => {
      e.exports = {
        ndsBaseCheckbox: "styles_ndsBaseCheckbox__JqdNw",
        "checkbox-expand": "styles_checkbox-expand__9HoH_",
        invalid: "styles_invalid__6VtRp",
      };
    },
    27333: (e, s, r) => {
      "use strict";
      r.d(s, { t: () => _ });
      var t = r(70418),
        a = r(53842),
        i = r(54687),
        l = r(17379),
        n = r(4042),
        o = r(19427),
        c = r(30864);
      let d = "@web/domain-product/get-product-summary-for-drawer",
        { useQuery: _ } = (0, l.T)({
          name: d,
          keyFn: (e) => {
            if (!e.tcins)
              throw Error("TCINS not defined for product summary drawer query");
            return [d, e];
          },
          queryFn: async (e) => {
            let {
                apiKey: s,
                baseUrl: r,
                apis: { product: l },
              } = (0, o.$)().services.redskyAggregations,
              { tcins: d, pricing_store_id: _ = n.Vz } = null != e ? e : {},
              u = await (0, i.E)(),
              {
                data: p,
                ok: h,
                statusText: k,
              } = await (0, c.T)(null == d ? void 0 : d.split(","), (e) => {
                let i = {
                  key: s,
                  effective_date: u,
                  tcins: e.join(","),
                  pricing_store_id: _,
                };
                if (!i.tcins)
                  throw Error(
                    "TCINS not defined for product summary drawer query"
                  );
                let n = t.o.buildURLWithParams(
                  new URL(l.endpointPaths.productSummaryForDrawer, r),
                  i
                );
                return (0, a.n)(n, {
                  partialErrorTag:
                    "get_product_summary_for_drawer_v1_partial_api_error",
                });
              });
            if (h) {
              var m;
              return null != (m = null == p ? void 0 : p.data) ? m : null;
            }
            throw Error("".concat(k));
          },
        });
    },
    44481: (e, s, r) => {
      "use strict";
      r.d(s, { p: () => t });
      let t = (e) => {
        let s = [],
          r = "shoppable_drawer";
        return (
          e.forEach((e) => {
            var t, a, i, l, n, o, c, d, _, u, p, h;
            if (
              (null == e ||
              null == (i = e.content) ||
              null == (a = i.items) ||
              null == (t = a[0])
                ? void 0
                : t.link_type) === r
            )
              for (let r of null != (d = e.content.items) ? d : [])
                (null == r || null == (_ = r.shoppable_drawer)
                  ? void 0
                  : _.tcins) && s.push(r.shoppable_drawer.tcins);
            for (let t of ((null == e || null == (l = e.content)
              ? void 0
              : l.link_type) === r &&
              (null == e ||
              null == (o = e.content) ||
              null == (n = o.shoppable_drawer)
                ? void 0
                : n.tcins) &&
              s.push(e.content.shoppable_drawer.tcins),
            null !=
            (u = null == e || null == (c = e.content) ? void 0 : c.stories)
              ? u
              : []))
              (null == t || null == (h = t.link) || null == (p = h.detail)
                ? void 0
                : p.id) === r &&
                t.link.detail.multi_tcins &&
                s.push(t.link.detail.multi_tcins);
          }),
          s
        );
      };
    },
    64219: (e, s, r) => {
      "use strict";
      r.d(s, { S: () => u });
      var t = r(3576),
        a = r(65699),
        i = r(37876),
        l = r(15039),
        n = r(7352),
        o = r(29359),
        c = r(86528),
        d = r(84456),
        _ = r(89970);
      let u = (e) => {
        var {
            ariaLabel: s,
            children: r,
            className: u,
            disabled: p,
            disableLiveRegion: h,
            errorText: k,
            hideLabel: m,
            id: b,
            isValid: v,
            label: y,
            microcopy: I,
            name: C,
            screenReader: g,
          } = e,
          x = (0, a._)(e, [
            "ariaLabel",
            "children",
            "className",
            "disabled",
            "disableLiveRegion",
            "errorText",
            "hideLabel",
            "id",
            "isValid",
            "label",
            "microcopy",
            "name",
            "screenReader",
          ]);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsxs)("div", {
              className: l(_.ndsCheckbox, u),
              children: [
                (0, i.jsx)(
                  n.J,
                  (0, t._)(
                    {
                      $valid: v,
                      "aria-label": s,
                      className: _.input,
                      disabled: p,
                      id: b,
                      name: null != C ? C : b,
                    },
                    x
                  )
                ),
                (0, i.jsxs)(c.J, {
                  className: _.checkboxLabel,
                  disabled: p,
                  disableLiveRegion: h,
                  errorText: k,
                  hidden: m,
                  htmlFor: b,
                  microcopy: I,
                  screenReader: g,
                  valid: v,
                  children: [
                    null != y ? y : r,
                    I &&
                      (0, i.jsx)(d.G, {
                        "aria-hidden": "true",
                        className: _.microcopy,
                        children: I,
                      }),
                  ],
                }),
              ],
            }),
            !1 === v &&
              k &&
              (0, i.jsx)(o.K, {
                "aria-hidden": "true",
                className: _.errorMessage,
                children: k,
              }),
          ],
        });
      };
      u.displayName = "Checkbox";
    },
    89970: (e) => {
      e.exports = {
        ndsCheckbox: "styles_ndsCheckbox__Bx0oT",
        label: "styles_label__R51fS",
        checkboxLabel: "styles_checkboxLabel__DyEu0",
        input: "styles_input__MQHkx",
        microcopy: "styles_microcopy__2P_cr",
        errorMessage: "styles_errorMessage__9zh_5",
        ndsCheckboxGroup: "styles_ndsCheckboxGroup__C_cO4",
        fieldset: "styles_fieldset__TONkS",
        horizontal: "styles_horizontal__g9GMf",
        legend: "styles_legend__JdC_N",
      };
    },
    90214: (e, s, r) => {
      "use strict";
      r.d(s, {
        I3: () => C,
        Eh: () => x,
        fe: () => A,
        Ro: () => f,
        hE: () => g,
      });
      var t = r(14232),
        a = r(19165),
        i = r(9503),
        l = r(68156),
        n = r(26738);
      class o extends n.r {
        processMetadata(e) {
          return e;
        }
        createDataPayload(e) {
          return e;
        }
      }
      var c = r(91797);
      class d extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_CRITEO_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_click");
        }
      }
      class _ extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "criteo_impression");
        }
      }
      class u extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_CRITEO_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class p extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Click),
            (this.tag = "GLOBAL_GOOGLE_AD_CLICK_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_click");
        }
      }
      class h extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "gam_impression");
        }
      }
      class k extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_GOOGLE_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      class m extends o {
        constructor(...e) {
          super(...e),
            (this.intent = c.J.Impression),
            (this.tag = "GLOBAL_RATP_AD_SERVED_DISPLAY_IMPRESSION_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "served_display_ads_impression");
        }
      }
      let b = (e) =>
        (0, t.useMemo)(
          () => ({
            trackGoogleAdClick: new p(e),
            trackGoogleAdImpression: new h(e),
            trackGoogleAdServedDisplayImpression: new k(e),
            trackCriteoAdClick: new d(e),
            trackCriteoAdImpression: new _(e),
            trackCriteoAdServedDisplayImpression: new u(e),
            trackRatpAdServedDisplayImpression: new m(e),
          }),
          [e]
        );
      var v = r(27763);
      let y = () => {
          let e = (0, t.useRef)(null),
            { data: s } = (0, v.M)(),
            { fetchClientContextMetadata: r } = (0, l.p)();
          return { refToTrack: e, data: s, trackers: b(r) };
        },
        I = () => {},
        C = (e) => {
          let s;
          switch (e) {
            case "criteo":
              s = x;
              break;
            case "google":
              s = A;
              break;
            case "ratp":
              s = f;
              break;
            default:
              s = I;
          }
          return (0, t.useMemo)(() => s, [s]);
        },
        g = (e) => {
          let { fetchClientContextMetadata: s } = (0, l.p)(),
            {
              data: { clickId: r, token: a, tcin: n },
            } = y(),
            { trackCriteoAdClick: o } = b(s),
            c = (0, i.n)()(o);
          return (0, t.useCallback)(() => {
            switch (e) {
              case "criteo":
                c.track({ clickId: r, token: a, tcin: n });
                break;
              case "ratp":
              case void 0:
                break;
              default:
                throw Error(
                  'No adTrackClick case for "'.concat(
                    e,
                    '" sponsored ad source'
                  )
                );
            }
          }, [e, r, c, n, a]);
        },
        x = () => {
          let { refToTrack: e, data: s, trackers: r } = y(),
            { creativeId: l, tcin: n } = s,
            {
              trackCriteoAdClick: o,
              trackCriteoAdImpression: c,
              trackCriteoAdServedDisplayImpression: d,
            } = r,
            _ = (0, i.n)()(o),
            u = (0, i.n)()(d),
            p = (0, a.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                c.track({ creativeId: l, tcin: n }),
            });
          return (0, t.useMemo)(
            () => ({
              criteoAdTrackClick: _,
              criteoAdTrackServedDisplayImpression: u,
              criteoAdViewableImpressionTracker: p,
            }),
            [_, p, u]
          );
        },
        A = () => {
          let { refToTrack: e, data: s, trackers: r } = y(),
            { adPos: l, adSlot: n, creativeId: o } = s,
            {
              trackGoogleAdClick: c,
              trackGoogleAdImpression: d,
              trackGoogleAdServedDisplayImpression: _,
            } = r,
            u = (0, i.n)()(c),
            p = (0, i.n)()(_),
            h = (0, a.WS)({
              refToTrack: e,
              trackViewableImpression: () =>
                d.track({ adPos: l, adSlot: n, creativeId: o }),
            });
          return (0, t.useMemo)(
            () => ({
              googleAdTrackClick: u,
              googleAdTrackServedDisplayImpression: p,
              googleAdViewableImpressionTracker: h,
            }),
            [u, p, h]
          );
        },
        f = () => {
          let { trackers: e } = y(),
            { trackRatpAdServedDisplayImpression: s } = e,
            r = (0, i.n)()(s);
          return (0, t.useMemo)(
            () => ({ ratpAdTrackServedDisplayImpression: r }),
            [r]
          );
        };
    },
  },
]);
