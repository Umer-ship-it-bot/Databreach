"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3875],
  {
    37744: (e, t, l) => {
      l.r(t), l.d(t, { default: () => c });
      var n = l(37876),
        u = l(14232),
        s = l(15039),
        a = l(55472),
        r = l(4917),
        i = l(40123),
        d = l(67253),
        o = l(92073);
      let c = (e) => {
        let {
            children: t,
            className: l,
            onPlayReset: c,
            onSetIsReplayButtonVisible: f,
            shouldPlayVideo: p,
            videoSourcesMd: h,
            videoSourcesSm: v,
          } = e,
          [y, C] = (0, u.useState)(!1),
          { screenMd: E } = (0, a.e)(),
          [k, m] = (0, u.useState)(!1),
          [b, w] = (0, u.useState)(!1),
          g = (0, u.useRef)(null),
          N = (0, u.useCallback)(() => {
            k && b && x();
          }, [k, b]),
          S = (0, u.useCallback)(() => {
            let { current: e } = g;
            e &&
              (e.setAttribute("muted", ""),
              "function" == typeof (null == e ? void 0 : e.load) && e.load());
          }, []);
        (0, u.useEffect)(() => {
          S(), w(!0), N();
        }, [S, b, N]),
          (0, u.useEffect)(() => {
            E || i(v) || S();
          }, [S, E, v]),
          (0, u.useEffect)(() => {
            p && (x(), c && c());
          }, [c, p]),
          (0, u.useEffect)(() => {
            let e = r(() => {
              !E && v && v.length > 0 && (m(!1), C(!1));
            }, d.u);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          }, [E, v]);
        let _ = (0, u.useCallback)(() => {
            C(!1), f && f(!0);
          }, [f]),
          j = (0, u.useCallback)(() => {
            C(!0), f && f(!1);
          }, [f]),
          x = () => {
            let { current: e } = g;
            e && ((e.currentTime = 0), e.play());
          },
          z = E || i(v) ? h : v;
        return i(z)
          ? null
          : (0, n.jsxs)("div", {
              className: s({ "video-playing": y }, l),
              children: [
                t,
                (0, n.jsx)(
                  o.Ce,
                  {
                    "aria-hidden": "true",
                    crossOrigin: "anonymous",
                    "data-test": "superhero--video",
                    muted: !0,
                    onCanPlayThrough: () => {
                      k || (m(!0), N());
                    },
                    onEnded: _,
                    onPlay: j,
                    playsInline: !0,
                    ref: g,
                    children:
                      null == z
                        ? void 0
                        : z.map((e) => {
                            let { path: t, type: l } = e;
                            return (0, n.jsx)("source", { src: t, type: l }, l);
                          }),
                  },
                  (!E).toString()
                ),
              ],
            });
      };
      c.displayName = "MotionCard";
    },
  },
]);
