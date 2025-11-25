(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7259],
  {
    17769: (e, s, t) => {
      "use strict";
      t.d(s, { e: () => l });
      var n = t(14232);
      function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          [s, t] = (0, n.useState)(e);
        return [
          s,
          (0, n.useCallback)(
            (e) => t((s) => ("boolean" == typeof e ? e : !s)),
            []
          ),
        ];
      }
    },
    56397: (e) => {
      e.exports = { circleLogoContainer: "styles_circleLogoContainer__eJzPz" };
    },
    65549: (e) => {
      e.exports = {
        ndsCellStandard: "styles_ndsCellStandard__GqM9J",
        isTwoLines: "styles_isTwoLines__zpYgw",
        noPaddingRight: "styles_noPaddingRight__8OKRE",
        noPaddingLeft: "styles_noPaddingLeft__TcRET",
        leadingSpan: "styles_leadingSpan__0CsGz",
        trailingSpan: "styles_trailingSpan__Uz3Ut",
        twoLinesSpan: "styles_twoLinesSpan__G7SJH",
        textSpan: "styles_textSpan__9GiHt",
        ellipseLineSpan: "styles_ellipseLineSpan__Vff75",
        singleLineP: "styles_singleLineP__jsh_u",
        mediumFont: "styles_mediumFont__d_28A",
        baseFont: "styles_baseFont__wpYcq",
        smallFont: "styles_smallFont__CGhz0",
        highlight: "styles_highlight__p2add",
        grayDark: "styles_grayDark__DtkcY",
        ellipseLine: "styles_ellipseLine__HY_hn",
      };
    },
    69241: (e, s, t) => {
      "use strict";
      function n() {
        for (var e, s, t = 0, n = "", l = arguments.length; t < l; t++)
          (e = arguments[t]) &&
            (s = (function e(s) {
              var t,
                n,
                l = "";
              if ("string" == typeof s || "number" == typeof s) l += s;
              else if ("object" == typeof s)
                if (Array.isArray(s)) {
                  var r = s.length;
                  for (t = 0; t < r; t++)
                    s[t] && (n = e(s[t])) && (l && (l += " "), (l += n));
                } else for (n in s) s[n] && (l && (l += " "), (l += n));
              return l;
            })(e)) &&
            (n && (n += " "), (n += s));
        return n;
      }
      t.d(s, { $: () => n, A: () => l });
      let l = n;
    },
    79046: (e, s, t) => {
      "use strict";
      t.d(s, { S: () => g });
      var n = t(37876),
        l = t(98601),
        r = t(56397);
      let a = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "currentColor";
          return (0, n.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Target circle™",
            viewBox: "0 0 122 33",
            children: (0, n.jsxs)("g", {
              fill: e,
              children: [
                (0, n.jsx)("path", {
                  d: "M0,16.912C0,8.58,6.762,1.796,15.115,1.796s15.115,6.757,15.115,15.115-6.757,15.088-15.115,15.088c-8.353.022-15.115-6.714-15.115-15.088M15.088,27.028c5.567,0,10.068-4.523,10.068-10.068s-4.523-10.068-10.068-10.068-10.09,4.496-10.09,10.068,4.523,10.068,10.09,10.068",
                }),
                (0, n.jsx)("path", {
                  d: "M15.088,11.886c2.786,0,5.047,2.261,5.047,5.047s-2.261,5.047-5.047,5.047-5.047-2.256-5.047-5.047,2.256-5.047,5.047-5.047",
                }),
                (0, n.jsx)("path", {
                  d: "M32.465,17.193c0-5.908,3.581-10.025,9.457-10.025,4.728,0,8.45,2.581,8.705,7.017h-4.977c-.319-2.115-1.574-3.186-3.76-3.186-3.078,0-4.333,3.008-4.333,6.016s1.255,5.837,4.225,5.837c2.256,0,3.69-1.288,4.047-3.76h4.907c-.682,4.869-3.976,7.59-8.916,7.59-5.767,0-9.348-4.117-9.348-9.489",
                }),
                (0, n.jsx)("path", {
                  d: "M52.304,2.867C52.304,1.293,53.591,0,55.171,0s2.867,1.288,2.867,2.867-1.288,2.862-2.867,2.862-2.867-1.288-2.867-2.862M52.628,7.666h5.085v18.513h-5.085V7.666Z",
                }),
                (0, n.jsx)("path", {
                  d: "M60.04,7.666h4.837v3.435h.07c.968-2.326,3.365-3.938,5.908-3.938.503,0,.86.108,1.109.179v4.728c-.503-.108-1.109-.179-1.829-.179-3.69,0-5.015,2.543-5.015,5.946v8.342h-5.085V7.666h.005Z",
                }),
                (0, n.jsx)("path", {
                  d: "M72.212,17.193c0-5.908,3.581-10.025,9.457-10.025,4.728,0,8.45,2.581,8.705,7.017h-4.977c-.319-2.115-1.574-3.186-3.76-3.186-3.078,0-4.333,3.008-4.333,6.016s1.255,5.837,4.225,5.837c2.256,0,3.69-1.288,4.047-3.76h4.907c-.682,4.869-3.976,7.59-8.916,7.59-5.767,0-9.348-4.117-9.348-9.489",
                }),
                (0, n.jsx)("rect", {
                  x: "92.337",
                  y: ".611",
                  width: "5.085",
                  height: "25.573",
                }),
                (0, n.jsx)("path", {
                  d: "M99.251,16.939c0-5.588,3.868-9.776,9.457-9.776s9.024,4.582,9.024,10.063l-.038.931h-13.357c.146,3.186,1.612,4.69,4.512,4.69,1.937,0,3.652-1.109,4.047-2.397h4.474c-1.363,4.187-4.225,6.232-8.667,6.232-5.875,0-9.457-4.047-9.457-9.743M112.603,14.932c-.503-2.792-1.72-3.938-4.085-3.938s-3.976,1.504-4.193,3.938h8.277Z",
                }),
                (0, n.jsx)("polygon", {
                  points:
                    "119.241 23.917 119.241 24.258 118.522 24.258 118.522 26.179 118.121 26.179 118.121 24.258 117.407 24.258 117.407 23.917 119.241 23.917",
                }),
                (0, n.jsx)("polygon", {
                  points:
                    "120.101 23.917 120.723 25.687 120.729 25.687 121.34 23.917 121.892 23.917 121.892 26.179 121.513 26.179 121.513 24.431 121.508 24.431 120.88 26.179 120.55 26.179 119.923 24.431 119.917 24.431 119.917 26.179 119.539 26.179 119.539 23.917 120.101 23.917",
                }),
              ],
            }),
          });
        },
        i = (e) => {
          let { color: s } = e;
          return (0, n.jsx)("span", {
            className: r.circleLogoContainer,
            style: { color: s },
            children: a(s),
          });
        };
      i.displayName = "CircleLogo";
      let c = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "currentColor",
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "currentcolor";
          return (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Target circle 360™",
            viewBox: "0 0 186 33",
            children: [
              (0, n.jsxs)("g", {
                fill: e,
                children: [
                  (0, n.jsx)("path", {
                    d: "M0,16.909C0,8.576,6.764,1.791,15.118,1.791s15.118,6.758,15.118,15.118-6.758,15.091-15.118,15.091c-8.354.022-15.118-6.715-15.118-15.091M15.091,27.027c5.568,0,10.07-4.523,10.07-10.07s-4.524-10.07-10.07-10.07-10.091,4.496-10.091,10.07,4.524,10.07,10.091,10.07",
                  }),
                  (0, n.jsx)("path", {
                    d: "M15.091,11.888c2.787,0,5.048,2.262,5.048,5.048s-2.262,5.048-5.048,5.048-5.048-2.262-5.048-5.048,2.256-5.048,5.048-5.048",
                  }),
                  (0, n.jsx)("path", {
                    d: "M32.471,17.19c0-5.909,3.582-10.032,9.458-10.032,4.729,0,8.452,2.581,8.706,7.023h-4.978c-.319-2.116-1.575-3.187-3.761-3.187-3.079,0-4.334,3.008-4.334,6.017s1.255,5.838,4.226,5.838c2.256,0,3.69-1.288,4.047-3.761h4.908c-.682,4.87-3.977,7.591-8.917,7.591-5.768,0-9.35-4.118-9.35-9.491",
                  }),
                  (0, n.jsx)("path", {
                    d: "M52.312,2.862c0-1.575,1.288-2.862,2.868-2.862s2.868,1.288,2.868,2.862-1.288,2.868-2.868,2.868-2.868-1.288-2.868-2.868M52.637,7.662h5.086v18.516h-5.086V7.662Z",
                  }),
                  (0, n.jsx)("path", {
                    d: "M60.05,7.662h4.837v3.436h.07c.969-2.327,3.366-3.939,5.909-3.939.503,0,.86.108,1.109.179v4.729c-.503-.108-1.109-.179-1.829-.179-3.69,0-5.016,2.543-5.016,5.947v8.344h-5.086V7.662h.005Z",
                  }),
                  (0, n.jsx)("path", {
                    d: "M72.224,17.19c0-5.909,3.582-10.032,9.458-10.032,4.729,0,8.452,2.581,8.706,7.023h-4.978c-.319-2.116-1.575-3.187-3.761-3.187-3.079,0-4.334,3.008-4.334,6.017s1.255,5.838,4.226,5.838c2.256,0,3.69-1.288,4.047-3.761h4.908c-.682,4.87-3.977,7.591-8.917,7.591-5.768,0-9.35-4.118-9.35-9.491",
                  }),
                  (0, n.jsx)("rect", {
                    x: "92.353",
                    y: ".606",
                    width: "5.086",
                    height: "25.572",
                  }),
                  (0, n.jsx)("path", {
                    d: "M99.268,16.936c0-5.589,3.869-9.777,9.458-9.777s9.025,4.583,9.025,10.064l-.038.931h-13.359c.146,3.187,1.612,4.691,4.513,4.691,1.937,0,3.652-1.109,4.047-2.397h4.475c-1.364,4.188-4.226,6.233-8.668,6.233-5.876,0-9.458-4.047-9.458-9.745M112.622,14.929c-.503-2.792-1.721-3.939-4.085-3.939s-3.977,1.504-4.193,3.939h8.279Z",
                  }),
                ],
              }),
              (0, n.jsxs)("g", {
                fill: s,
                children: [
                  (0, n.jsx)("path", {
                    d: "M130.938,25.837c-1.32-.595-2.343-1.45-3.068-2.576-.725-1.125-1.088-2.44-1.088-3.955v-.611h4.908v.184c0,2.413,1.277,3.62,3.836,3.62,1.023,0,1.856-.233,2.5-.703s.969-1.115.969-1.932c0-1.001-.314-1.737-.936-2.208-.622-.471-1.591-.703-2.9-.703-.53,0-.979.022-1.347.06v-3.62c.265.022.714.032,1.347.032,1.125,0,1.986-.189,2.592-.568.601-.379.904-.936.904-1.672,0-.633-.287-1.153-.86-1.548-.574-.4-1.32-.595-2.24-.595-1.044,0-1.851.26-2.424.785-.574.519-.86,1.272-.86,2.256h-4.875c.081-2.289.855-4.074,2.316-5.351s3.398-1.915,5.811-1.915,4.302.519,5.784,1.564,2.224,2.494,2.224,4.356c0,1.001-.26,1.899-.785,2.7-.519.795-1.255,1.288-2.191,1.472v.06c1.207.33,2.116.909,2.732,1.748.611.839.92,1.894.92,3.16,0,1.412-.368,2.635-1.104,3.663-.736,1.033-1.759,1.823-3.068,2.375s-2.814.828-4.507.828-3.268-.298-4.588-.893",
                  }),
                  (0, n.jsx)("path", {
                    d: "M149.097,25.404c-1.277-.877-2.251-2.132-2.916-3.761-.666-1.623-.996-3.544-.996-5.752s.368-4.183,1.104-5.86c.736-1.677,1.807-2.971,3.209-3.88s3.084-1.364,5.048-1.364,3.674.514,5.016,1.537c1.336,1.023,2.154,2.457,2.44,4.296h-4.881c-.287-1.331-1.147-1.991-2.576-1.991-1.228,0-2.224.503-2.992,1.504-.768,1.001-1.19,2.31-1.272,3.928h.06c.898-1.515,2.565-2.267,5-2.267,1.347,0,2.554.33,3.62.996,1.066.666,1.883,1.542,2.457,2.624s.86,2.229.86,3.436c0,1.553-.363,2.927-1.088,4.129-.725,1.196-1.737,2.121-3.035,2.776s-2.776.979-4.432.979c-1.802,0-3.339-.438-4.615-1.32M156.38,21.552c.687-.633,1.028-1.412,1.028-2.332,0-1.061-.335-1.926-.996-2.592-.666-.666-1.558-.996-2.684-.996-.941,0-1.726.346-2.359,1.044-.633.698-.952,1.537-.952,2.516s.325,1.753.969,2.381c.644.622,1.445.936,2.408.936,1.044,0,1.905-.319,2.592-.952",
                  }),
                  (0, n.jsx)("path", {
                    d: "M167.245,25.372c-1.25-.898-2.197-2.175-2.852-3.836-.655-1.656-.979-3.587-.979-5.8s.325-4.166.979-5.811,1.612-2.916,2.868-3.804c1.255-.887,2.765-1.336,4.523-1.336,1.943,0,3.566.482,4.859,1.439,1.299.963,2.262,2.273,2.9,3.928.633,1.656.952,3.517.952,5.584s-.298,3.804-.887,5.46c-.595,1.656-1.542,2.992-2.852,4.004-1.309,1.012-2.965,1.52-4.967,1.52-1.78,0-3.295-.449-4.54-1.347M174.274,21.508c.509-.655.839-1.45.979-2.392s.216-2.067.216-3.376-.065-2.332-.2-3.252-.46-1.726-.979-2.424c-.519-.693-1.315-1.044-2.375-1.044-1.45,0-2.392.638-2.824,1.915-.427,1.277-.644,2.879-.644,4.799,0,2.494.287,4.242.86,5.249.574,1.001,1.45,1.504,2.641,1.504,1.044,0,1.823-.325,2.332-.985",
                  }),
                  (0, n.jsx)("polygon", {
                    points:
                      "181.784 23.916 181.784 24.257 181.064 24.257 181.064 26.178 180.669 26.178 180.669 24.257 179.955 24.257 179.955 23.916 181.784 23.916",
                  }),
                  (0, n.jsx)("polygon", {
                    points:
                      "182.65 23.916 183.272 25.691 183.277 25.691 183.889 23.916 184.441 23.916 184.441 26.178 184.062 26.178 184.062 24.436 184.057 24.436 183.429 26.178 183.099 26.178 182.471 24.436 182.466 24.436 182.466 26.178 182.087 26.178 182.087 23.916 182.65 23.916",
                  }),
                ],
              }),
            ],
          });
        },
        d = (e) => {
          let { color: s, altColor: t } = e;
          return (0, n.jsx)("span", {
            className: r.circleLogoContainer,
            style: { color: s },
            children: c(s, t),
          });
        };
      d.displayName = "Circle360Logo";
      let h = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "currentColor";
          return (0, n.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Target circle™ card",
            viewBox: "0 0 188 33",
            children: [
              (0, n.jsxs)("g", {
                fill: e,
                children: [
                  (0, n.jsx)("path", {
                    d: "M0,16.908C0,8.612,6.734,1.856,15.051,1.856s15.051,6.728,15.051,15.051-6.728,15.024-15.051,15.024C6.734,31.953,0,25.247,0,16.908M15.024,26.981c5.543,0,10.025-4.503,10.025-10.025s-4.504-10.025-10.025-10.025-10.047,4.477-10.047,10.025,4.504,10.025,10.047,10.025",
                  }),
                  (0, n.jsx)("path", {
                    d: "M15.024,11.909c2.774,0,5.026,2.252,5.026,5.026s-2.252,5.026-5.026,5.026-5.026-2.252-5.026-5.026,2.246-5.026,5.026-5.026",
                  }),
                  (0, n.jsx)("path", {
                    d: "M32.327,17.188c0-5.883,3.566-9.987,9.416-9.987,4.708,0,8.414,2.57,8.668,6.992h-4.956c-.318-2.106-1.568-3.173-3.744-3.173-3.065,0-4.315,2.995-4.315,5.99s1.25,5.813,4.207,5.813c2.246,0,3.674-1.282,4.029-3.744h4.886c-.679,4.848-3.959,7.558-8.878,7.558-5.743,0-9.309-4.099-9.309-9.449",
                  }),
                  (0, n.jsx)("path", {
                    d: "M52.081,2.923c0-1.568,1.282-2.855,2.855-2.855s2.855,1.282,2.855,2.855-1.282,2.855-2.855,2.855-2.855-1.282-2.855-2.855M52.404,7.701h5.064v18.434h-5.064V7.701s0,0,0,0Z",
                  }),
                  (0, n.jsx)("path", {
                    d: "M59.785,7.701h4.816v3.426s.07,0,.07,0c.964-2.316,3.351-3.922,5.883-3.922.501,0,.857.108,1.104.178v4.708c-.501-.108-1.104-.178-1.821-.178-3.674,0-4.994,2.532-4.994,5.92v8.307h-5.064V7.707s.005-.005.005-.005Z",
                  }),
                  (0, n.jsx)("path", {
                    d: "M71.905,17.188c0-5.883,3.566-9.987,9.416-9.987,4.708,0,8.414,2.57,8.668,6.992h-4.956c-.318-2.106-1.568-3.173-3.744-3.173-3.065,0-4.315,2.995-4.315,5.99s1.25,5.813,4.207,5.813c2.246,0,3.674-1.282,4.029-3.744h4.886c-.679,4.848-3.959,7.558-8.878,7.558-5.743,0-9.309-4.099-9.309-9.449",
                  }),
                  (0, n.jsx)("rect", {
                    x: "91.945",
                    y: ".677",
                    width: "5.064",
                    height: "25.464",
                  }),
                  (0, n.jsx)("path", {
                    d: "M98.829,16.94c0-5.565,3.852-9.734,9.416-9.734s8.985,4.563,8.985,10.02l-.038.927h-13.3c.145,3.173,1.605,4.67,4.493,4.67,1.929,0,3.636-1.104,4.029-2.386h4.455c-1.358,4.17-4.207,6.206-8.63,6.206-5.85,0-9.416-4.029-9.416-9.702M112.124,14.941c-.501-2.78-1.713-3.922-4.067-3.922s-3.959,1.498-4.175,3.922h8.237s.005,0,.005,0Z",
                  }),
                  (0, n.jsx)("polygon", {
                    points:
                      "118.734 23.884 118.734 24.229 118.018 24.229 118.018 26.141 117.619 26.141 117.619 24.229 116.908 24.229 116.908 23.884 118.734 23.884",
                  }),
                  (0, n.jsx)("polygon", {
                    points:
                      "119.591 23.884 120.21 25.651 120.216 25.651 120.824 23.884 121.374 23.884 121.374 26.141 120.997 26.141 120.997 24.401 120.991 24.401 120.367 26.141 120.038 26.141 119.413 24.401 119.408 24.401 119.408 26.141 119.031 26.141 119.031 23.884 119.591 23.884",
                  }),
                ],
              }),
              (0, n.jsxs)("g", {
                fill: e,
                children: [
                  (0, n.jsx)("path", {
                    d: "M130.306,25.371c-1.331-.873-2.343-2.058-3.038-3.545s-1.045-3.141-1.045-4.967.361-3.55,1.077-5.037c.722-1.487,1.745-2.656,3.076-3.507s2.871-1.277,4.622-1.277c2.16,0,3.884.566,5.182,1.692,1.293,1.126,2.074,2.688,2.338,4.676h-2.268c-.312-1.465-.91-2.575-1.799-3.329-.889-.754-2.036-1.131-3.453-1.131s-2.543.377-3.523,1.131c-.986.754-1.724,1.735-2.23,2.931-.501,1.201-.754,2.483-.754,3.852s.253,2.656.754,3.868c.506,1.212,1.25,2.187,2.23,2.931.986.743,2.16,1.115,3.523,1.115s2.564-.49,3.598-1.476c1.029-.986,1.632-2.252,1.799-3.814h2.268c-.312,2.252-1.147,4.019-2.5,5.29-1.358,1.271-3.076,1.907-5.161,1.907-1.799,0-3.361-.436-4.692-1.314",
                  }),
                  (0, n.jsx)("path", {
                    d: "M145.551,25.263c-1.126-.948-1.692-2.284-1.692-4.013s.614-3.108,1.837-3.992c.646-.458,1.481-.83,2.5-1.115,1.018-.291,2.586-.539,4.692-.754,1.077-.118,1.859-.242,2.338-.361.479-.118.851-.345,1.115-.684.264-.334.393-.862.393-1.584,0-1.341-.409-2.316-1.223-2.914-.813-.598-2.026-.9-3.631-.9s-2.737.366-3.598,1.099-1.32,1.805-1.368,3.221h-2.268c.119-2.036.83-3.588,2.122-4.638,1.293-1.056,3.108-1.584,5.43-1.584,4.53,0,6.798,1.993,6.798,5.974v9.858c0,.91.442,1.368,1.331,1.368.242,0,.479-.048.722-.145v1.907c-.479.097-.959.145-1.438.145-.986,0-1.681-.242-2.085-.722-.409-.479-.609-1.282-.609-2.408v-.108s-.07,0-.07,0c-.91,1.417-1.88,2.397-2.914,2.952-1.029.549-2.316.83-3.852.83-1.896,0-3.405-.474-4.53-1.422M153.426,24.051c1.007-.49,1.81-1.18,2.408-2.069.598-.889.9-1.88.9-2.984v-2.984s-.07,0-.07,0c-.145.237-.404.426-.776.555-.372.135-.894.248-1.568.339l-1.115.178c-1.557.194-2.699.382-3.415.576-1.126.286-2.02.684-2.677,1.185-.663.501-.991,1.261-.991,2.268,0,1.104.361,1.993,1.077,2.661.716.673,1.681,1.007,2.877,1.007s2.338-.248,3.345-.738",
                  }),
                  (0, n.jsx)("path", {
                    d: "M162.283,7.583h2.085v4.353s.07,0,.07,0c.549-1.46,1.401-2.597,2.553-3.399,1.153-.803,2.483-1.207,3.992-1.207h.469v2.268h-.361c-1.293,0-2.44.296-3.437.883s-1.762,1.39-2.306,2.408c-.539,1.018-.808,2.155-.808,3.399v9.858h-2.268V7.583h.011Z",
                  }),
                  (0, n.jsx)("path", {
                    d: "M174.673,25.408c-1.261-.851-2.209-2.02-2.844-3.507s-.953-3.168-.953-5.037.312-3.475.937-4.967c.625-1.487,1.568-2.667,2.823-3.545,1.261-.873,2.79-1.314,4.59-1.314,1.46,0,2.796.366,3.992,1.099,1.201.733,2.015,1.724,2.446,2.968h.07s0-10.65,0-10.65h2.268v25.685h-2.085v-3.523s-.07,0-.07,0c-.506,1.223-1.39,2.209-2.661,2.952-1.271.743-2.591,1.115-3.959,1.115-1.778,0-3.291-.426-4.552-1.277M184.078,22.532c1.104-1.498,1.654-3.388,1.654-5.667s-.539-4.105-1.621-5.629c-1.077-1.525-2.71-2.284-4.891-2.284-1.368,0-2.505.372-3.415,1.115s-1.584,1.713-2.015,2.914-.646,2.494-.646,3.884.221,2.72.663,3.922c.442,1.201,1.12,2.166,2.031,2.898s2.036,1.099,3.383,1.099c2.133,0,3.755-.749,4.859-2.246",
                  }),
                ],
              }),
            ],
          });
        },
        o = (e) => {
          let { color: s } = e;
          return (0, n.jsx)("span", {
            className: r.circleLogoContainer,
            style: { color: s },
            children: h(s),
          });
        };
      o.displayName = "CircleCardLogo";
      let g = function (e) {
        let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          { brand: r } = l.Tj.circle;
        switch (e) {
          case "bullseye-normal":
            return {
              textArrayItem: String.fromCodePoint(172),
              helperClass: s ? "h-text-white" : "h-text-red",
              screenReaderTextValue: "Target",
              screenReaderHidden: !0,
            };
          case "bullseye-normal-white":
            return {
              textArrayItem: String.fromCodePoint(172),
              helperClass: "h-text-white",
              screenReaderTextValue: "Target",
              screenReaderHidden: !0,
            };
          case "bullseye-large":
            return {
              textArrayItem: String.fromCodePoint(9678),
              helperClass: s ? "h-text-white" : "h-text-red",
              screenReaderTextValue: "Target",
              screenReaderHidden: !0,
            };
          case "bullseye-large-white":
            return {
              textArrayItem: String.fromCodePoint(9678),
              helperClass: "h-text-white",
              screenReaderTextValue: "Target",
              screenReaderHidden: !0,
            };
          case "bullseye-circle":
            return {
              textArrayItem: (0, n.jsx)(i, {
                color: s ? r.secondary : r.primary,
              }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "bullseye-circle-white":
            return {
              textArrayItem: (0, n.jsx)(i, { color: r.secondary }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "percent-off":
            return {
              textArrayItem: t ? String.fromCodePoint(57367) : "% off",
              screenReaderTextValue: t ? "percent off" : "",
              screenReaderHidden: t,
            };
          case "logo-target-circle-360":
            return {
              textArrayItem: (0, n.jsx)(d, {
                color: r.primary,
                altColor: r.primary,
              }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "logo-target-circle-360-monotone-alt":
            return {
              textArrayItem: (0, n.jsx)(d, {
                color: r.secondary,
                altColor: r.secondary,
              }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "logo-target-circle-360-monotone":
            return {
              textArrayItem: (0, n.jsx)(d, { color: r.secondary }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "logo-target-circle-card":
            return {
              textArrayItem: (0, n.jsx)(o, {
                color: s ? r.secondary : r.primary,
              }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          case "logo-target-circle-card-monotone":
            return {
              textArrayItem: (0, n.jsx)(o, { color: r.secondary }),
              screenReaderTextValue: "",
              screenReaderHidden: !1,
            };
          default:
            return { textArrayItem: "" };
        }
      };
    },
    82631: (e, s, t) => {
      "use strict";
      t.d(s, { l: () => l });
      var n = t(14232);
      let l = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          [s, t] = (0, n.useState)(e);
        return {
          value: s,
          ref: (0, n.useCallback)((e) => {
            t(e);
          }, []),
        };
      };
    },
    94742: (e, s, t) => {
      "use strict";
      t.d(s, { o: () => _ });
      var n = t(37876),
        l = t(15039),
        r = t(36730),
        a = t(65549),
        i = t(3576),
        c = t(65699),
        d = t(42773);
      let h = (e) => {
        var {
            $fontSize: s = "medium",
            $isHighlight: t,
            $isGrayDark: r,
            $ellipseLine: d,
            className: h,
          } = e,
          o = (0, c._)(e, [
            "$fontSize",
            "$isHighlight",
            "$isGrayDark",
            "$ellipseLine",
            "className",
          ]);
        return (0, n.jsx)(
          "p",
          (0, i._)(
            {
              className: l(
                a.singleLineP,
                a["".concat(s, "Font")],
                t && a.highlight,
                r && a.grayDark,
                d && a.ellipseLine,
                h
              ),
            },
            o
          )
        );
      };
      h.displayName = "SingleLineP";
      let o = (e) => {
        let { ellipseLine: s, headingComponent: t, headingText: l } = e;
        return (0, n.jsx)(h, { $ellipseLine: s, children: null != t ? t : l });
      };
      o.displayName = "Md";
      let g = (e) => {
        let { ellipseLine: s, headingComponent: t, headingText: l } = e;
        return (0, n.jsx)(h, {
          $ellipseLine: s,
          $fontSize: "base",
          children: null != t ? t : l,
        });
      };
      g.displayName = "Base";
      let x = (e) => {
        let { headingComponent: s, headingLevel: t, headingText: l } = e;
        return (0, n.jsx)(d.D, {
          level: t,
          size: 3,
          stackSpacing: "0",
          children: null != s ? s : l,
        });
      };
      x.displayName = "lg";
      let p = (e) => {
        let { headingComponent: s, headingLevel: t, headingText: l } = e;
        return (0, n.jsx)(d.D, {
          level: t,
          size: 2,
          stackSpacing: "0",
          children: null != s ? s : l,
        });
      };
      p.displayName = "Xlg";
      let u = (e) => {
        let {
          ellipseLine: s,
          headingComponent: t,
          headingText: l,
          subheadingText: r,
          subheadingComponent: a,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.D, {
              level: 5,
              stackSpacing: "0",
              children: null != t ? t : l,
            }),
            null != a
              ? a
              : (0, n.jsx)(h, {
                  $ellipseLine: s,
                  $fontSize: "small",
                  children: r,
                }),
          ],
        });
      };
      u.displayName = "SmSm";
      let j = (e) => {
        let {
          ellipseLine: s,
          headingComponent: t,
          headingLevel: l,
          headingText: r,
          subheadingText: a,
          subheadingComponent: i,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.D, {
              level: l,
              size: 4,
              stackSpacing: "0",
              children: null != t ? t : r,
            }),
            null != i ? i : (0, n.jsx)(h, { $ellipseLine: s, children: a }),
          ],
        });
      };
      j.displayName = "BaseMd";
      let m = (e) => {
        let {
          ellipseLine: s,
          headingComponent: t,
          headingLevel: l,
          headingText: r,
          subheadingText: a,
          subheadingComponent: i,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.D, {
              level: l,
              size: 3,
              stackSpacing: "0",
              children: null != t ? t : r,
            }),
            null != i ? i : (0, n.jsx)(h, { $ellipseLine: s, children: a }),
          ],
        });
      };
      m.displayName = "LgMd";
      let y = (e) => {
        let {
          ellipseLine: s,
          headingComponent: t,
          headingLevel: l,
          headingText: r,
          subheadingText: a,
          subheadingComponent: i,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.D, {
              level: l,
              size: 3,
              stackSpacing: "0",
              children: null != t ? t : r,
            }),
            null != i
              ? i
              : (0, n.jsx)(h, {
                  $ellipseLine: s,
                  $isHighlight: !0,
                  children: a,
                }),
          ],
        });
      };
      y.displayName = "LgMdPostive";
      let v = (e) => {
        let {
          ellipseLine: s,
          headingComponent: t,
          headingLevel: l,
          headingText: r,
          subheadingText: a,
          subheadingComponent: i,
        } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(d.D, {
              level: l,
              size: 3,
              stackSpacing: "0",
              children: null != t ? t : r,
            }),
            null != i
              ? i
              : (0, n.jsx)(h, {
                  $ellipseLine: s,
                  $isGrayDark: !0,
                  children: a,
                }),
          ],
        });
      };
      v.displayName = "LgMdGrayDark";
      let _ = (e) => {
        let {
            className: s,
            "data-test": t,
            divider: i,
            ellipseLine: c,
            headingComponent: d,
            headingLevel: h,
            headingText: _,
            noPaddingLeft: L,
            noPaddingRight: M,
            renderLeading: C,
            renderTrailing: f,
            subheadingComponent: S,
            subheadingText: T,
            textComponentName: w,
          } = e,
          b = ((e, s, t, l, r, a, i) => {
            switch (e) {
              case "Md":
                return (0, n.jsx)(o, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                });
              case "Base":
                return (0, n.jsx)(g, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                });
              case "Xlg":
                return (0, n.jsx)(p, {
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                });
              case "SmSm":
                return (0, n.jsx)(u, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingText: r,
                  subheadingComponent: a,
                  subheadingText: i,
                });
              case "BaseMd":
                return (0, n.jsx)(j, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                  subheadingComponent: a,
                  subheadingText: i,
                });
              case "LgMd":
                return (0, n.jsx)(m, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                  subheadingComponent: a,
                  subheadingText: i,
                });
              case "LgMdPositive":
                return (0, n.jsx)(y, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                  subheadingComponent: a,
                  subheadingText: i,
                });
              case "LgMdGrayDark":
                return (0, n.jsx)(v, {
                  ellipseLine: s,
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                  subheadingComponent: a,
                  subheadingText: i,
                });
              default:
                return (0, n.jsx)(x, {
                  headingComponent: t,
                  headingLevel: l,
                  headingText: r,
                });
            }
          })(w, c, d, h, _, S, T),
          R = ((e) =>
            ["SmSm", "BaseMd", "LgMd", "LgMdPositive", "LgMdGrayDark"].includes(
              null != e ? e : ""
            ))(w);
        return (0, n.jsxs)(r.g, {
          className: l(
            a.ndsCellStandard,
            R && a.isTwoLines,
            L && a.noPaddingLeft,
            M && a.noPaddingRight,
            s
          ),
          "data-test": t,
          divider: i,
          children: [
            C &&
              (0, n.jsx)("span", { className: l(a.leadingSpan), children: C }),
            (0, n.jsx)("span", {
              className: l(a.textSpan, c && a.ellipseLineSpan),
              children: b,
            }),
            f &&
              (0, n.jsx)("span", {
                className: l(a.trailingSpan, R && a.twoLinesSpan),
                children: f,
              }),
          ],
        });
      };
      _.displayName = "CellStandard";
    },
  },
]);
