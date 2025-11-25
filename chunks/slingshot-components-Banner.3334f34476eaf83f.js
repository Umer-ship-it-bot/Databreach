(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [562],
  {
    10046: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { BANNER_TEST_ID: () => k, Banner: () => y });
      var a = r(3576),
        l = r(37876),
        n = r(88686),
        i = r(69241),
        s = r(26245),
        d = r(75570),
        u = r(94170),
        g = r(38810);
      let o = (e) => {
        var t;
        let {
          children: r,
          className: a,
          links: n = [],
          linkType: i = "none",
        } = e;
        if ("url" !== i || !(null == (t = n[0]) ? void 0 : t.link_url))
          return (0, l.jsx)(l.Fragment, { children: r });
        let s = n[0];
        return (0, l.jsx)(u.F, {
          clickType: "CONTENT",
          element: (null == s ? void 0 : s.link_url)
            ? { type: "LINK", id: s.link_url }
            : void 0,
          featureType: "CONTENT_TILE",
          linkTag: s.link_tag,
          sourceId: s.link_url,
          useTrackers: g.k,
          children: (0, l.jsx)(d.N, {
            className: a,
            "data-lnk": s.link_tag,
            "data-test": "banner-link",
            href: s.link_url,
            underline: "invert",
            children: r,
          }),
        });
      };
      o.displayName = "BannerLink";
      var c = r(86268),
        x = r(98601);
      let p = {
          gray: x.Tj.palette.gray.medium,
          grayDark: x.Tj.palette.gray.dark,
          grayDarkest: x.Tj.palette.gray.darkest,
          grayLight: x.Tj.palette.gray.light,
          grayLightest: x.Tj.palette.gray.lightest,
          green: x.Tj.palette.green.default,
          greenDark: x.Tj.palette.green.dark,
          orange: x.Tj.palette.orange.default,
          orangeDark: x.Tj.palette.orange.dark,
          orangeLight: x.Tj.palette.orange.light,
          blue: x.Tj.palette.blue.default,
          red: x.Tj.palette.red.default,
          redDark: x.Tj.palette.red.dark,
          redDarkest: x.Tj.interactive.primary.active,
          transparent: "transparent",
          white: x.Tj.palette.white,
          yellow: x.Tj.palette.yellow.default,
          darkRed: x.Tj.palette.red.dark,
          black: x.Tj.palette.gray.darkest,
        },
        T = { dark: x.Tj.palette.gray.darkest, light: x.Tj.palette.white },
        _ = (e) => {
          let t = x.xe.generic;
          if ((null == e ? void 0 : e.search("px")) !== -1) return e;
          switch (e) {
            case "tiny":
              return t.x1;
            case "tight":
              return t.x3;
            case "standard":
            case "default":
              return t.x4;
            case "wide":
              return t.x5;
            case "jumbo":
              return t.x8;
            default:
              return "0";
          }
        },
        k = "@web/SlingshotComponents/Banner",
        y = (e) => {
          var t;
          let r = (0, i.A)(c.flexTextBigHeadline, s.bannerHeadline),
            d = c.flexTextBigDetail,
            u = ((e) => {
              let {
                background_color: t,
                corners_rounded: r,
                margin_bottom: a,
                padding_bottom: l,
                text_color: n,
              } = e.content || {};
              return {
                "--margin-bottom": _(a),
                "--bg-color": ((e) =>
                  e && Object.keys(p).includes(e) ? p[e] : e)(t),
                "--corners-rounded-border-radius": r ? x.PQ.radius.x3 : "0",
                "--corners-rounded-margin-left": r ? x.xe.generic.x4 : "0",
                "--corners-rounded-margin-right": r ? x.xe.generic.x4 : "0",
                "--padding-bottom": l ? _(l) : x.xe.generic.x3,
                "--text-color": ((e, t) => {
                  var r;
                  let { white: a, gray: l } = x.Tj.palette;
                  return e
                    ? null != (r = T[e])
                      ? r
                      : a
                    : "white" === t
                    ? l.darkest
                    : a;
                })(n, t),
              };
            })(e),
            {
              headline: g,
              subhead: y,
              links: f,
              link_type: h,
            } = null != (t = null == e ? void 0 : e.content) ? t : {};
          return (0, l.jsx)("div", {
            className: s.bannerWrapper,
            "data-test": k,
            style: (0, a._)({}, u),
            children: (0, l.jsx)(o, {
              className: s.bannerLink,
              links: f,
              linkType: h,
              children: (0, l.jsxs)("div", {
                className: s.bannerText,
                children: [
                  g && (0, n.V)(g, "h2", r),
                  y && (0, n.V)(y, "div", d),
                ],
              }),
            }),
          });
        };
      y.displayName = "Banner";
    },
    26245: (e) => {
      e.exports = {
        bannerWrapper: "styles_bannerWrapper__LojX3",
        bannerText: "styles_bannerText__smva9",
        bannerHeadline: "styles_bannerHeadline__W1yMx",
        bannerLink: "styles_bannerLink__sLQLu",
      };
    },
    69241: (e, t, r) => {
      "use strict";
      function a() {
        for (var e, t, r = 0, a = "", l = arguments.length; r < l; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                a,
                l = "";
              if ("string" == typeof t || "number" == typeof t) l += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var n = t.length;
                  for (r = 0; r < n; r++)
                    t[r] && (a = e(t[r])) && (l && (l += " "), (l += a));
                } else for (a in t) t[a] && (l && (l += " "), (l += a));
              return l;
            })(e)) &&
            (a && (a += " "), (a += t));
        return a;
      }
      r.d(t, { $: () => a, A: () => l });
      let l = a;
    },
    86268: (e) => {
      e.exports = {
        flexTextBigHeadline: "styles_flexTextBigHeadline__zGp_M",
        flexTextBigDetail: "styles_flexTextBigDetail__2RwdP",
        flexTextSmallHeadline: "styles_flexTextSmallHeadline__tYIAv",
        flexTextSmallDetail: "styles_flexTextSmallDetail__WG5QH",
      };
    },
    88686: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => n });
      var a = r(3576),
        l = r(37876);
      let n = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "div",
          r = arguments.length > 2 ? arguments[2] : void 0,
          n = arguments.length > 3 ? arguments[3] : void 0;
        return (0, l.jsx)(
          t,
          (0, a._)({ className: r, dangerouslySetInnerHTML: { __html: e } }, n)
        );
      };
    },
  },
]);
