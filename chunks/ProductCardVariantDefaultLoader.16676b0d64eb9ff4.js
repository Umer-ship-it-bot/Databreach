"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [733],
  {
    13397: (e, i, a) => {
      a.r(i), a.d(i, { ProductCardVariantDefault: () => d });
      var t = a(3576),
        l = a(62701),
        n = a(65699),
        r = a(37876),
        o = a(6357),
        c = a(73208),
        k = a(26989),
        p = a(36810),
        s = a(60823),
        u = a(14232);
      let d = (e) => {
        var { onViewDetailClick: i, index: a } = e,
          d = (0, n._)(e, ["onViewDetailClick", "index"]);
        let { trackClick: C } = (0, s.f)(),
          _ = (0, c.K1)(k.Gs),
          D = (0, c.K1)(p.oc),
          R = (0, c.K1)(p.y4),
          T = (0, u.useMemo)(
            () =>
              _ ? { type: "TCIN", id: _, position: a, sponsored: D } : void 0,
            [_, a, D]
          ),
          y = (0, u.useMemo)(() => {
            if ((null == R ? void 0 : R.ad_source) === "ratp") {
              var e;
              return {
                ad_token:
                  null != (e = null == R ? void 0 : R.click_token) ? e : "",
                position: a,
                server_impression_id: null == R ? void 0 : R.impression_id,
              };
            }
          }, [R, a]),
          m = (0, u.useCallback)(
            (e) => {
              C.track(
                (0, t._)(
                  {
                    featureType: "GRID_CARD",
                    clickType: "PRODUCT",
                    element: T,
                  },
                  y && { ratp: y }
                )
              ),
                null == i || i(e);
            },
            [i, C, T, y]
          ),
          f = (0, u.useCallback)(() => {
            C.track({
              featureType: "GRID_CARD",
              clickType: "RATINGS_AND_REVIEWS",
              element: T,
            });
          }, [C, T]),
          v = (0, u.useCallback)(
            (e) => {
              e.favorited &&
                C.track({
                  featureType: "GRID_CARD",
                  clickType: "FAVORITE",
                  element: T,
                });
            },
            [C, T]
          ),
          A = (0, u.useCallback)(() => {
            C.track({
              featureType: "GRID_CARD",
              clickType: "SWATCH_SELECTION",
              element: T,
            });
          }, [C, T]),
          I = (0, u.useCallback)(() => {
            C.track({
              featureType: "GRID_CARD",
              clickType: "BRAND",
              element: T,
            });
          }, [C, T]),
          E = (0, u.useCallback)(
            (e) => {
              let i = e
                ? "promotion_id" in e
                  ? e.promotion_id
                  : "id" in e
                  ? e.id
                  : void 0
                : void 0;
              C.track({
                featureType: "GRID_CARD",
                clickType: "OFFER_DETAILS",
                element: i
                  ? { type: "OFFER", id: i, position: a, sponsored: D }
                  : void 0,
              });
            },
            [C, a, D]
          );
        return (0, r.jsx)(
          o.e,
          (0, l._)((0, t._)({}, d), {
            onChangeFavoritesButton: v,
            onChangeSwatch: A,
            onClickBrandLink: I,
            onClickPromoLink: E,
            onClickRatingStars: f,
            onViewDetailClick: m,
          })
        );
      };
      d.displayName = "ProductCardVariantDefaultTrackingWrapper";
    },
  },
]);
