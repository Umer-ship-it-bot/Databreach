"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    6438: (e, t, n) => {
      n.d(t, { B: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaScreenFull",
              _src: "MediaScreenFull.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaScreenFull";
    },
    10495: (e, t, n) => {
      n.d(t, { A: () => s });
      var l = n(37876),
        r = n(15076),
        a = n(6438),
        i = n(89322),
        o = n(50005);
      let s = () => {
        let { isFullscreen: e, toggleFullscreenState: t } = (0, o.Z)();
        return (0, l.jsxs)(i.a, {
          "data-test": e ? "zoomOut" : "zoomIn",
          onClick: t,
          children: [
            e
              ? (0, l.jsx)(r.L, { width: "23px" })
              : (0, l.jsx)(a.B, { width: "23px" }),
            (0, l.jsx)("span", {
              className: "h-sr-only",
              children: "Toggle full screen",
            }),
          ],
        });
      };
      s.displayName = "FullscreenButton";
    },
    10939: (e, t, n) => {
      n.d(t, { L: () => L });
      var l,
        r = n(37876),
        a = n(55472),
        i = n(14232),
        o = n(69200),
        s = n(3576),
        d = n(62701),
        c = n(97711);
      let u = (e) => {
        let t = (t) => {
          let n = (0, c.t)();
          return (0, r.jsx)(
            e,
            (0, d._)((0, s._)({}, t), { onVideoEvent: n.handleVideoEvent })
          );
        };
        return (
          (t.displayName = "withVideoEventsContext(".concat(
            e.displayName || e.name,
            ")"
          )),
          t
        );
      };
      var p = n(98601),
        m = n(77232);
      let h = m.I4.div.withConfig({ componentId: "sc-ebc1c1a-0" })(
          [
            ".transcript--play{position:relative;width:100%;height:35vh;background:#000;&::before{display:block;width:100%;height:100%;content:' ';background-image:",
            ";background-size:contain;background-position:center;background-repeat:no-repeat;}&::after{content:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQXJ0d29yayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIzMS45cHgiIGhlaWdodD0iMzMuNnB4IiB2aWV3Qm94PSItMS41IC0wLjUgMjIuOSAyMy42IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMi45IDIzLjYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IndoaXRlIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMTkuNiwxMC45YzEsMC42LDEsMS41LDAsMkw1LjgsMjFjLTEsMC42LTEuNywwLjEtMS43LTFWMy45YzAtMS4xLDAuOC0xLjUsMS43LTFMMTkuNiwxMC45eiIvPjwvc3ZnPg==');display:flex;width:70px;height:70px;background-color:white;border:1px solid #e8e8e8;border-radius:50%;right:calc(50% - 35px);top:calc(50% - 35px);position:absolute;text-align:center;justify-content:center;align-items:center;cursor:pointer;pointer-events:none;@media (min-width:",
            "){width:90px;height:90px;top:calc(50% - 45px);right:calc(50% - 45px);}}}.transcript--url{&:hover{color:inherit;text-decoration:underline;}}",
          ],
          (e) => {
            let { $placeholder: t } = e;
            return t ? 'url("'.concat(t, '")') : "none";
          },
          p.fi.lg
        ),
        x = m.I4.div.withConfig({ componentId: "sc-ebc1c1a-1" })([
          "display:flex;height:100%;width:100%;overflow:hidden;justify-content:center;video{width:100%;}",
        ]),
        v = (e) => {
          let {
              className: t,
              onPlayClick: n,
              placeholder: l,
              transcriptUrl: a,
            } = e,
            o = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              if (null == o ? void 0 : o.current) {
                var e;
                null == (e = o.current) || e.focus();
              }
            }, []),
            (0, r.jsxs)(h, {
              $placeholder: l,
              className: t,
              "data-test": "videoPlayer--transcriptInterstitial",
              children: [
                (0, r.jsx)("button", {
                  className: "transcript--play",
                  onClick: n,
                  ref: o,
                  type: "button",
                  children: (0, r.jsx)("span", {
                    className: "h-sr-only",
                    children: "View video",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "h-bg-black h-display-block h-padding-v-default h-padding-h-default h-text-right h-text-white",
                  children: (0, r.jsx)("a", {
                    className: "transcript--url",
                    href: a,
                    rel: "noopener noreferrer",
                    target: "_blank",
                    title: "Download the transcript for the video",
                    children: "transcript",
                  }),
                }),
              ],
            })
          );
        };
      (v.displayName = "VideoTranscriptInterstitial"),
        (function (e) {
          (e.Transcript = "transcript"), (e.Video = "video");
        })(l || (l = {}));
      let g = (e) => {
        let {
            captionSource: t,
            placeholder: n,
            playNow: a,
            transcriptUrl: s,
            videoRef: d,
            videoSource: c,
            videoStyle: u,
          } = e,
          [p, m] = (0, i.useState)(l.Transcript),
          h = (0, i.useCallback)((e) => {
            e.preventDefault(), m(l.Video);
          }, []);
        return p === l.Transcript && s
          ? (0, r.jsx)(v, { onPlayClick: h, placeholder: n, transcriptUrl: s })
          : (0, r.jsx)(x, {
              "data-test": "videoPlayer--native",
              children: (0, r.jsx)(o.K, {
                videoRef: d,
                children: (e) =>
                  (0, i.cloneElement)(
                    e,
                    {
                      crossOrigin: "anonymous",
                      style: u,
                      poster: n,
                      controls: !0,
                      autoPlay: a || p === l.Video,
                    },
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        c.map((e) => {
                          var t;
                          return (0, r.jsx)(
                            "source",
                            { src: e.path, type: e.type },
                            "native-video-".concat(
                              null != (t = e.path) ? t : ""
                            )
                          );
                        }),
                        t &&
                          (0, r.jsx)("track", {
                            kind: "captions",
                            label: "English",
                            src: t,
                            srcLang: "en",
                          }),
                      ],
                    })
                  ),
              }),
            });
      };
      var f = u(g);
      g.displayName = "NativeVideoPlayer";
      var y = n(66318),
        j = n(65067),
        w = n(51133),
        b = n(87868),
        C = n(35727),
        k = n(76112),
        M = n(50005),
        N = n(10495),
        I = n(20828),
        V = n(68594),
        _ = n(15978),
        S = n(40937),
        F = n(27462);
      let P = (e) => {
        let { transcriptUrl: t } = e,
          { isFullscreen: n } = (0, M.Z)();
        return (0, r.jsxs)(F.jx, {
          isFullscreen: n,
          isVertical: !0,
          children: [
            (0, r.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, r.jsx)("div", {
                  className: "videoControlsLeft",
                  children: (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(I.x, {}),
                      (0, r.jsx)(F.Ys, {}),
                      (0, r.jsx)(S.v, {}),
                      (0, r.jsx)(F.l6, { isVertical: !0 }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "videoControlsRight",
                  children: (0, r.jsxs)("div", {
                    children: [
                      t && (0, r.jsx)(_.L, { transcriptUrl: t }),
                      (0, r.jsx)(F.PT, {}),
                      (0, r.jsx)(N.A, {}),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)(V.z, {}),
          ],
        });
      };
      P.displayName = "VerticalVideoControls";
      let T = m.I4.div.withConfig({ componentId: "sc-e1ae74d2-0" })(
        [
          "position:absolute;top:0;left:0;width:100%;padding:0.5em;min-height:2.5em;background-color:#000;color:#fff;font-size:1.1em;text-align:center;opacity:0.75;",
          ";",
        ],
        (e) =>
          e.isFullscreen &&
          "\n      min-height: 3.5em;\n      font-size: 2.5em;\n      padding: 1em;\n    "
      );
      T.displayName = "VideoCaptions";
      let E = m.I4.div.withConfig({ componentId: "sc-2902a986-0" })(
        [
          "background:#000;height:auto;@media (min-width:",
          "){min-width:",
          ";}video{width:100%;height:",
          ";display:block;}",
          ";",
        ],
        p.fi.md,
        (e) => (e.isVertical ? null : "500px"),
        (e) => {
          let { isVertical: t } = e;
          return t ? "100%" : "auto";
        },
        (e) =>
          e.isFullscreen &&
          "\n      position: fixed;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      -webkit-cursor-visibility: auto-hide;\n    "
      );
      E.displayName = "VideoContainer";
      let z = (e) => {
        let {
          alwaysShowVideoControls: t,
          videoSource: n,
          captionSource: l,
          placeholder: a,
          transcriptUrl: s,
          hideVideoControls: d,
          playNow: c,
          focusConditions: u,
          style: p,
          isVertical: m,
          videoStyle: h,
          videoRef: x,
        } = e;
        return (0, r.jsx)(o.K, {
          focusConditions: u,
          videoRef: x,
          children: (e) =>
            (0, r.jsx)(C.M.Consumer, {
              children: (o) => {
                let u,
                  { isPlaying: x, isFullscreen: v } = o,
                  g = t || x || !d,
                  { height: f } = h;
                return (
                  (f || m) &&
                    (u = {
                      height: g
                        ? "calc("
                            .concat(null != f ? f : "100%", " - ")
                            .concat("72px", ") ")
                        : null != f
                        ? f
                        : "100%",
                    }),
                  (0, r.jsxs)(E, {
                    "data-test": "videoPlayer--skinned",
                    isFullscreen: v,
                    isVertical: m,
                    style: p,
                    children: [
                      c && (0, r.jsx)(j.w, {}),
                      (0, r.jsxs)(y.f, {
                        className: "h-position-relative",
                        style: u,
                        children: [
                          (0, r.jsx)(b.a, {
                            captionSource: l,
                            children: (e) =>
                              e &&
                              (0, r.jsx)(T, {
                                id: "display",
                                isFullscreen: v,
                                children: e,
                              }),
                          }),
                          (0, i.cloneElement)(
                            e,
                            { poster: a, style: h, autoPlay: c },
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                n.map((e) =>
                                  (0, r.jsx)(
                                    "source",
                                    { src: e.path, type: e.type },
                                    "skinned-video-".concat(e.path)
                                  )
                                ),
                                (0, r.jsx)("track", {
                                  kind: "captions",
                                  label: "English",
                                  src: l,
                                  srcLang: "en",
                                }),
                              ],
                            })
                          ),
                          (0, r.jsx)(w.w, {}),
                        ],
                      }),
                      g && m && (0, r.jsx)(P, { transcriptUrl: s }),
                      g && !m && (0, r.jsx)(k.J, { transcriptUrl: s }),
                    ],
                  })
                );
              },
            }),
        });
      };
      var B = u(z);
      z.displayName = "SkinnedVideoPlayer";
      let L = (e) => {
        let {
            alwaysShowVideoControls: t = !1,
            captionSource: n,
            hideVideoControls: l = !1,
            isNativePlayer: i = !1,
            isVertical: o,
            placeholder: s = "",
            playNow: d = !1,
            style: c = {},
            focusConditions: u,
            transcriptUrl: p,
            videoRef: m,
            videoSource: h = [],
            videoStyle: x = {},
          } = e,
          { screenMd: v } = (0, a.e)();
        return !i && v
          ? (0, r.jsx)(B, {
              alwaysShowVideoControls: t,
              captionSource: n,
              focusConditions: u,
              hideVideoControls: l,
              isVertical: o,
              placeholder: s,
              playNow: d,
              style: c,
              transcriptUrl: p,
              videoRef: m,
              videoSource: h,
              videoStyle: x,
            })
          : (0, r.jsx)(f, {
              captionSource: n,
              placeholder: s,
              playNow: d,
              transcriptUrl: p,
              videoRef: m,
              videoSource: h,
              videoStyle: x,
            });
      };
      L.displayName = "VideoPlayer";
    },
    15076: (e, t, n) => {
      n.d(t, { L: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaScreenNormal",
              _src: "MediaScreenNormal.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaScreenNormal";
    },
    15978: (e, t, n) => {
      n.d(t, { L: () => p });
      var l = n(37876),
        r = n(14232),
        a = n(35361),
        i = n(98601),
        o = n(97711),
        s = n(16403),
        d = n(77232),
        c = n(75570);
      let u = (0, d.I4)(c.N).withConfig({ componentId: "sc-240b76d-0" })(
          [
            "display:inline-block;width:25px;height:21px;overflow:hidden;&:hover,&:focus{outline:none;transform:scale(1.25,1.25);svg{color:white;}}&:focus{outline:",
            " dashed 1px;outline-offset:2px;-moz-outline-radius:4px;text-decoration:underline;}",
          ],
          i.Tj.border.focusOutline
        ),
        p = (e) => {
          let { transcriptUrl: t, className: n } = e,
            d = (0, o.t)(),
            c = (0, r.useCallback)(
              () => d.handleVideoEvent(s.o.transcript),
              [d]
            );
          return (0, l.jsxs)(u, {
            className: n,
            href: t,
            onClick: c,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              (0, l.jsx)(a.Y, { color: i.Tj.palette.gray.medium }),
              (0, l.jsx)("span", {
                className: "h-sr-only",
                children: "Transcript",
              }),
            ],
          });
        };
      p.displayName = "TranscriptLink";
    },
    16403: (e, t, n) => {
      var l;
      n.d(t, { o: () => l }),
        (function (e) {
          (e.captions = "captions"),
            (e.initialize = "initialize"),
            (e.loadedMetadata = "loadedMetadata"),
            (e.percentComplete = "percentComplete"),
            (e.play = "play"),
            (e.transcript = "transcript");
        })(l || (l = {}));
    },
    20828: (e, t, n) => {
      n.d(t, { x: () => d });
      var l = n(37876),
        r = n(71527),
        a = n(92067),
        i = n(88905),
        o = n(50005),
        s = n(89322);
      let d = () => {
        let {
            isPlaying: e,
            togglePlayState: t,
            focusConditions: n,
          } = (0, o.Z)(),
          d = (0, r.i)(null, n);
        return (0, l.jsx)(s.a, {
          "data-test": e ? "pauseButton" : "playButton",
          onClick: t,
          ref: d,
          children: e
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(a.q, { width: "23px" }),
                  (0, l.jsx)("span", {
                    className: "h-sr-only",
                    children: "Pause",
                  }),
                ],
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsx)(i.W, { width: "23px" }),
                  (0, l.jsx)("span", {
                    className: "h-sr-only",
                    children: "Play",
                  }),
                ],
              }),
        });
      };
      d.displayName = "PlayPauseButton";
    },
    27462: (e, t, n) => {
      n.d(t, { PT: () => p, Ys: () => c, jx: () => d, l6: () => u });
      var l = n(77232),
        r = n(98601),
        a = n(45605),
        i = n(30286),
        o = n(69510);
      let s =
          "\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 940;\n  padding: "
            .concat(r.xe.generic.x4, " ")
            .concat(r.xe.generic.x3, ";\n  background: #000;\n"),
        d = l.I4.div.withConfig({ componentId: "sc-5210bd4f-0" })(
          [
            "background-color:#000;padding:",
            ";",
            ";.videoControls{display:flex;flex-wrap:nowrap;}.videoControlsLeft{flex:0 0 auto;flex-direction:row;flex-basis:75%;max-width:75%;> div{display:flex;flex-wrap:nowrap;justify-content:flex-start;text-align:start;}}.videoControlsRight{flex:0 0 auto;flex-direction:row;flex-basis:25%;max-width:25%;> div{display:flex;flex-wrap:nowrap;justify-content:flex-end;text-align:end;}}",
          ],
          r.xe.generic.x3,
          (e) => {
            let { isFullscreen: t } = e;
            return t && s;
          }
        ),
        c = (0, l.I4)(i.d).withConfig({ componentId: "sc-5210bd4f-1" })(
          [
            "width:",
            ";display:inline-block;margin:2px 0 0;font-size:",
            ";color:",
            ";",
          ],
          (e) => {
            let { isVertical: t } = e;
            return t ? "70px" : "100%";
          },
          r.gx.size.text.medium,
          r.Tj.palette.white
        ),
        u = (0, l.I4)(o.S).withConfig({ componentId: "sc-5210bd4f-2" })(
          ["padding:0 ", ";font-size:", ";"],
          (e) => (e.isVertical ? "0" : "".concat(r.xe.generic.x3)),
          r.gx.size.text.small
        ),
        p = (0, l.I4)(a.K).withConfig({ componentId: "sc-5210bd4f-3" })(
          ["width:28px;margin:0 ", ";"],
          r.xe.generic.x5
        );
    },
    30286: (e, t, n) => {
      n.d(t, { d: () => i });
      var l = n(37876),
        r = n(50005);
      let a = (e) => {
          let t = Math.floor((e / 60) % 60),
            n = Math.floor(e % 60);
          return n < 10 && (n = "0".concat(n)), "".concat(t, ":").concat(n);
        },
        i = (e) => {
          let { className: t, tagName: n = "div" } = e,
            { currentTime: i, totalTime: o } = (0, r.Z)();
          return (0, l.jsx)(n, {
            children: (0, l.jsxs)("div", {
              className: t,
              children: [
                (0, l.jsx)("span", {
                  className: "h-sr-only",
                  children: "time",
                }),
                (0, l.jsx)("span", {
                  children: "".concat(a(i), " ∕ ").concat(a(o)),
                }),
              ],
            }),
          });
        };
      i.displayName = "Duration";
    },
    33680: (e, t, n) => {
      n.d(t, { j: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaForward",
              _src: "MediaForward.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaForward";
    },
    35361: (e, t, n) => {
      n.d(t, { Y: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaTranscript",
              _src: "MediaTranscript.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaTranscript";
    },
    35727: (e, t, n) => {
      n.d(t, { M: () => a });
      var l = n(14232),
        r = n(57410);
      let a = (0, l.createContext)({
        volume: 10,
        isBuffering: !1,
        areCaptionsVisible: !1,
        isPlaying: !1,
        isMuted: !1,
        isFullscreen: !1,
        focusConditions: [],
        currentTime: 0,
        totalTime: 0,
        toggleCaptionsState: r,
        togglePlayState: r,
        toggleMuteState: r,
        toggleFullscreenState: r,
        fastForward: r,
        rewind: r,
        seekTo: r,
        setVolume: r,
        getVideoPlayerRef: () => void 0,
      });
      a.displayName = "VideoPlayerComponentsContext";
    },
    37913: (e, t, n) => {
      n.d(t, { i: () => o });
      var l = n(37876),
        r = n(53867),
        a = n(89322),
        i = n(50005);
      let o = () => {
        let { rewind: e } = (0, i.Z)();
        return (0, l.jsxs)(a.a, {
          onClick: e,
          children: [
            (0, l.jsx)(r.k, { width: "23px" }),
            (0, l.jsx)("span", {
              className: "h-sr-only",
              children: "rewind 10 seconds",
            }),
          ],
        });
      };
      o.displayName = "RewindButton";
    },
    40937: (e, t, n) => {
      n.d(t, { v: () => p });
      var l = n(37876),
        r = n(89372),
        a = n(89322),
        i = n(50005),
        o = n(78057),
        s = n(69086),
        d = n(61109),
        c = n(65045);
      let u = { hi: o.U, md: s.b, lo: d.Y, zero: c.e },
        p = () => {
          let { isMuted: e, toggleMuteState: t, volume: n } = (0, i.Z)(),
            o = e
              ? r.F
              : u[
                  ((e) =>
                    e >= 8 ? "hi" : e >= 4 ? "md" : e >= 1 ? "lo" : "zero")(
                    null != n ? n : 0
                  )
                ];
          return (0, l.jsxs)(a.a, {
            "data-test": e ? "unmuteButton" : "muteButton",
            onClick: t,
            children: [
              (0, l.jsx)(o, { width: "23px" }),
              (0, l.jsx)("span", {
                className: "h-sr-only",
                children: e ? "Unmute" : "Mute",
              }),
            ],
          });
        };
      p.displayName = "VolumeButton";
    },
    45605: (e, t, n) => {
      n.d(t, { K: () => u });
      var l = n(37876),
        r = n(14232),
        a = n(15039),
        i = n(53718),
        o = n(97711),
        s = n(16403),
        d = n(50005),
        c = n(89322);
      let u = (e) => {
        let { className: t } = e,
          { areCaptionsVisible: n, toggleCaptionsState: u } = (0, d.Z)(),
          p = (0, o.t)(),
          m = (0, r.useCallback)(() => {
            p.handleVideoEvent(s.o.captions), u();
          }, [p, u]);
        return (0, l.jsxs)(c.a, {
          className: a({ active: n, className: t }),
          "data-test": n ? "closedCaptionsOffButton" : "closedCaptionsOnButton",
          onClick: m,
          children: [
            (0, l.jsx)(i.w, { width: "23px" }),
            (0, l.jsx)("span", {
              className: "h-sr-only",
              children: n
                ? "Turn off closed captions"
                : "Turn on closed captions",
            }),
          ],
        });
      };
      u.displayName = "ClosedCaptionsButton";
    },
    50005: (e, t, n) => {
      n.d(t, { Z: () => a });
      var l = n(14232),
        r = n(35727);
      let a = () => {
        let e = (0, l.useContext)(r.M);
        if (!e)
          throw Error(
            "Components that use this hook must be rendered as children of VideoPlayerComponent's context Provider"
          );
        return e;
      };
    },
    51133: (e, t, n) => {
      n.d(t, { w: () => d });
      var l = n(37876),
        r = n(74820),
        a = n(55472);
      let i = () => {
        let { screenMd: e } = (0, a.e)();
        return (0, l.jsx)(r.y, {
          size: e ? "large" : "medium",
          spinnerColor: "inverse",
        });
      };
      i.displayName = "Spinner";
      var o = n(50005);
      let s = n(77232).I4.div.withConfig({ componentId: "sc-8f4a39e-0" })([
          "position:absolute;inset:0;display:flex;justify-content:center;align-items:center;background:rgb(0 0 0 / 70%);",
        ]),
        d = () => {
          let { isBuffering: e, isPlaying: t } = (0, o.Z)();
          return (0, l.jsx)(l.Fragment, {
            children: e && t && (0, l.jsx)(s, { children: (0, l.jsx)(i, {}) }),
          });
        };
      d.displayName = "VideoPlayerBufferingIcon";
    },
    53718: (e, t, n) => {
      n.d(t, { w: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            { _name: "MediaCc", _src: "MediaCc.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      i.displayName = "IconMediaCc";
    },
    53867: (e, t, n) => {
      n.d(t, { k: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaReverse",
              _src: "MediaReverse.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaReverse";
    },
    61109: (e, t, n) => {
      n.d(t, { Y: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaVolumeLow",
              _src: "MediaVolumeLow.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaVolumeLow";
    },
    65045: (e, t, n) => {
      n.d(t, { e: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaVolume",
              _src: "MediaVolume.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaVolume";
    },
    65067: (e, t, n) => {
      n.d(t, { w: () => a });
      var l = n(14232),
        r = n(50005);
      let a = () => {
        let e = (0, l.useRef)(!1),
          { totalTime: t, getVideoPlayerRef: n } = (0, r.Z)();
        return (
          (0, l.useEffect)(() => {
            if (!t || e.current) return;
            e.current = !0;
            let l = n();
            l && ((l.currentTime = 0), l.play());
          }, [t, n, e]),
          null
        );
      };
      a.displayName = "VideoPlayerAutoPlay";
    },
    68594: (e, t, n) => {
      n.d(t, { z: () => d });
      var l = n(37876),
        r = n(14232),
        a = n(50005),
        i = n(77232),
        o = n(98601);
      let s = i.I4.progress.withConfig({ componentId: "sc-da643fa0-0" })(
          [
            "width:100%;height:5px;border-top:3px solid ",
            ";cursor:pointer;color:",
            ";&::-moz-progress-bar{background:",
            ";}&[value]::-webkit-progress-bar{background-color:",
            ";}&[value]::-webkit-progress-value{background-color:",
            ";}",
          ],
          o.Tj.palette.gray.darkest,
          o.Tj.palette.red.default,
          o.Tj.palette.red.default,
          o.Tj.palette.white,
          o.Tj.palette.red.default
        ),
        d = () => {
          let { currentTime: e, totalTime: t, seekTo: n } = (0, a.Z)(),
            i = (e / t) * 100,
            o = (0, r.useCallback)(
              (e) => {
                let { left: t } = e.currentTarget.getBoundingClientRect();
                n((e.pageX - t) / e.currentTarget.offsetWidth);
              },
              [n]
            );
          return t
            ? (0, l.jsxs)(s, {
                max: "100",
                onClick: o,
                value: i,
                children: [(0, l.jsx)("span", { children: i }), "% played"],
              })
            : null;
        };
      d.displayName = "ProgressBar";
    },
    69086: (e, t, n) => {
      n.d(t, { b: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaVolumeMedium",
              _src: "MediaVolumeMedium.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaVolumeMedium";
    },
    69200: (e, t, n) => {
      n.d(t, { K: () => f });
      var l = n(3576),
        r = n(62701),
        a = n(65699),
        i = n(37876),
        o = n(14232);
      let s = [
          [
            "requestFullscreen",
            "exitFullscreen",
            "fullscreenElement",
            "fullscreenEnabled",
            "fullscreenchange",
            "fullscreenerror",
          ],
          [
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitFullscreenElement",
            "webkitFullscreenEnabled",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "webkitRequestFullScreen",
            "webkitCancelFullScreen",
            "webkitCurrentFullScreenElement",
            "webkitCancelFullScreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
          ],
          [
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozFullScreenElement",
            "mozFullScreenEnabled",
            "mozfullscreenchange",
            "mozfullscreenerror",
          ],
          [
            "msRequestFullscreen",
            "msExitFullscreen",
            "msFullscreenElement",
            "msFullscreenEnabled",
            "MSFullscreenChange",
            "MSFullscreenError",
          ],
        ],
        d = (() => {
          if ("undefined" == typeof document) return !1;
          let e = s[0],
            t = {};
          for (let n of s)
            if (n?.[1] in document) {
              for (let [l, r] of n.entries()) t[e[l]] = r;
              return t;
            }
          return !1;
        })(),
        c = { change: d.fullscreenchange, error: d.fullscreenerror },
        u = {
          request: (e = document.documentElement, t) =>
            new Promise((n, l) => {
              let r = () => {
                u.off("change", r), n();
              };
              u.on("change", r);
              let a = e[d.requestFullscreen](t);
              a instanceof Promise && a.then(r).catch(l);
            }),
          exit: () =>
            new Promise((e, t) => {
              if (!u.isFullscreen) return void e();
              let n = () => {
                u.off("change", n), e();
              };
              u.on("change", n);
              let l = document[d.exitFullscreen]();
              l instanceof Promise && l.then(n).catch(t);
            }),
          toggle: (e, t) => (u.isFullscreen ? u.exit() : u.request(e, t)),
          onchange(e) {
            u.on("change", e);
          },
          onerror(e) {
            u.on("error", e);
          },
          on(e, t) {
            let n = c[e];
            n && document.addEventListener(n, t, !1);
          },
          off(e, t) {
            let n = c[e];
            n && document.removeEventListener(n, t, !1);
          },
          raw: d,
        };
      Object.defineProperties(u, {
        isFullscreen: { get: () => !!document[d.fullscreenElement] },
        element: {
          enumerable: !0,
          get: () => document[d.fullscreenElement] ?? void 0,
        },
        isEnabled: {
          enumerable: !0,
          get: () => !!document[d.fullscreenEnabled],
        },
      }),
        d || (u = { isEnabled: !1 });
      let p = u;
      var m = n(37732),
        h = n(97711),
        x = n(16403),
        v = n(35727);
      let g = (e) => {
        var { onUnmount: t, ref: n } = e,
          s = (0, a._)(e, ["onUnmount", "ref"]);
        return (
          (0, o.useEffect)(() => t(), [t]),
          (0, i.jsx)(
            "video",
            (0, r._)(
              (0, l._)({ "data-test": "video-player-video-element" }, s),
              { ref: n }
            )
          )
        );
      };
      g.displayName = "Video";
      let f = (e) => {
        let { children: t, videoRef: n, focusConditions: l } = e,
          [r, a] = (0, o.useState)(10),
          [s, d] = (0, o.useState)(!1),
          [c, u] = (0, o.useState)(!1),
          [f, y] = (0, o.useState)(!1),
          [j, w] = (0, o.useState)(!1),
          [b, C] = (0, o.useState)(!1),
          [k, M] = (0, o.useState)(0),
          [N, I] = (0, o.useState)(0),
          V = (0, o.useRef)(null),
          _ = (0, m.N)(V, n),
          S = (0, h.t)(),
          F = () => {
            C(p.isFullscreen);
          };
        (0, o.useEffect)(
          () => (
            p.isEnabled && p.on("change", F),
            () => {
              p.isEnabled && p.off("change", F);
            }
          ),
          []
        ),
          (0, o.useEffect)(() => {
            S.handleVideoEvent(x.o.initialize);
          }, [S]),
          (0, o.useEffect)(() => {
            (null == V ? void 0 : V.current) && (V.current.volume = 0.1 * r);
          }, [r]);
        let P = (0, o.useCallback)(() => {
            y(!0), S.handleVideoEvent(x.o.play);
          }, [S]),
          T = (0, o.useCallback)(() => {
            y(!1);
          }, []),
          E = (0, o.useCallback)(() => {
            var e, t;
            f
              ? null == V || null == (e = V.current) || e.pause()
              : null == V || null == (t = V.current) || t.play(),
              y(!f);
          }, [f, y]),
          z = (0, o.useCallback)(() => {
            var e, t;
            M(
              null !=
                (t =
                  null == V || null == (e = V.current) ? void 0 : e.currentTime)
                ? t
                : 0
            ),
              (k / N) * 100 >= 90 && S.handleVideoEvent(x.o.percentComplete);
          }, [k, N, S]),
          B = (0, o.useCallback)(() => {
            var e, t;
            I(
              null !=
                (t = null == V || null == (e = V.current) ? void 0 : e.duration)
                ? t
                : 0
            );
          }, []),
          L = (0, o.useCallback)(() => {
            a(10), u(!1), d(!1), y(!1), w(!1), C(!1), M(0), I(0);
          }, []),
          R = (0, o.useCallback)(() => {
            d(!1);
          }, []),
          Z = (0, o.useCallback)(() => {
            d(!0);
          }, []);
        return (0, i.jsx)(v.M.Provider, {
          value: {
            volume: r,
            areCaptionsVisible: c,
            isBuffering: s,
            isPlaying: f,
            isMuted: j,
            isFullscreen: b,
            currentTime: k,
            totalTime: N,
            setVolume: a,
            focusConditions: l,
            toggleCaptionsState: () => u(!c),
            togglePlayState: E,
            toggleMuteState: () => {
              var e;
              (null == V || null == (e = V.current) ? void 0 : e.currentTime) &&
                ((V.current.muted = !j), w(!j));
            },
            toggleFullscreenState: () => {
              (null == V ? void 0 : V.current) && p.toggle(V.current);
            },
            fastForward: () => {
              var e;
              (null == V || null == (e = V.current) ? void 0 : e.currentTime) &&
                (V.current.currentTime = k + 10);
            },
            rewind: () => {
              var e;
              (null == V || null == (e = V.current) ? void 0 : e.currentTime) &&
                (V.current.currentTime = k - 10);
            },
            getVideoPlayerRef: () => V.current,
            seekTo: (e) => {
              var t;
              (null == V || null == (t = V.current) ? void 0 : t.currentTime) &&
                (V.current.currentTime = N * e);
            },
          },
          children: t(
            (0, i.jsx)(g, {
              crossOrigin: "anonymous",
              onLoadedMetadata: B,
              onPause: T,
              onPlay: P,
              onPlaying: R,
              onTimeUpdate: z,
              onUnmount: L,
              onWaiting: Z,
              preload: "metadata",
              ref: _,
            })
          ),
        });
      };
      f.displayName = "VideoPlayerWrapper";
    },
    69510: (e, t, n) => {
      n.d(t, { S: () => p });
      var l = n(3576),
        r = n(62701),
        a = n(65699),
        i = n(37876),
        o = n(14232),
        s = n(50005),
        d = n(77232),
        c = n(98601);
      let u = d.I4.input.withConfig({ componentId: "sc-ba54276d-0" })(
          [
            "-webkit-appearance:none;height:3px;width:",
            ";transform:",
            ";margin-top:",
            ";background-color:",
            ";outline:none;&::-moz-range-track{-moz-appearance:none;height:3px;background-color:",
            ";outline:none;border:0;}&:focus::-webkit-slider-thumb{outline:1px ",
            " dotted;}&:focus::-moz-range-thumb{outline:1px ",
            " dotted;}&::-webkit-slider-thumb{-webkit-appearance:none !important;height:14px;width:14px;border-radius:50%;background-color:",
            ";cursor:pointer;}&::-moz-range-thumb{height:14px;width:14px;border-radius:50%;outline:none;border:0;background-color:",
            ";cursor:pointer;}",
          ],
          (e) => (e.isVertical ? "100%" : "100px"),
          (e) => (e.isVertical ? "translateX(-5px)" : null),
          c.xe.generic.x3,
          c.Tj.palette.white,
          c.Tj.palette.white,
          c.Tj.palette.white,
          c.Tj.palette.white,
          c.Tj.palette.red.default,
          c.Tj.palette.red.default
        ),
        p = (e) => {
          var {
              tagName: t = "div",
              isRenderedOnMute: n = !1,
              isVertical: d = !1,
            } = e,
            c = (0, a._)(e, ["tagName", "isRenderedOnMute", "isVertical"]);
          let { isMuted: p, volume: m, setVolume: h } = (0, s.Z)(),
            x = (0, o.useCallback)(
              (e) => {
                h && h(Number.parseInt(e.target.value, 10));
              },
              [h]
            );
          return p && !n
            ? null
            : (0, i.jsx)(
                t,
                (0, r._)((0, l._)({}, c), {
                  children: (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)("label", {
                        className: "h-sr-only",
                        htmlFor: "volumeSlider",
                        children: "Volume:",
                      }),
                      (0, i.jsx)(u, {
                        id: "volumeSlider",
                        isVertical: d,
                        max: "10",
                        min: "0",
                        onChange: x,
                        type: "range",
                        value: m,
                      }),
                    ],
                  }),
                })
              );
        };
      p.displayName = "VolumeSlider";
    },
    71527: (e, t, n) => {
      n.d(t, { i: () => r });
      var l = n(14232);
      function r() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, l.useRef)(e);
        return (
          (0, l.useEffect)(() => {
            var e;
            (null == (e = n.current) ? void 0 : e.focus) &&
              t.every(Boolean) &&
              n.current.focus();
          }, t),
          n
        );
      }
    },
    74492: (e, t, n) => {
      n.d(t, { x: () => r });
      var l = n(57410);
      let r = (0, n(14232).createContext)({ handleVideoEvent: l });
      r.displayName = "VideoPlayerEventsContext";
    },
    76112: (e, t, n) => {
      n.d(t, { J: () => m });
      var l = n(37876),
        r = n(37913),
        a = n(20828),
        i = n(82617),
        o = n(40937),
        s = n(50005),
        d = n(10495),
        c = n(68594),
        u = n(15978),
        p = n(27462);
      let m = (e) => {
        let { transcriptUrl: t } = e,
          { isFullscreen: n } = (0, s.Z)();
        return (0, l.jsxs)(p.jx, {
          isFullscreen: n,
          children: [
            (0, l.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, l.jsx)("div", {
                  className: "videoControlsLeft",
                  children: (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)(r.i, {}),
                      (0, l.jsx)(a.x, {}),
                      (0, l.jsx)(i.a, {}),
                      (0, l.jsx)(o.v, {}),
                      (0, l.jsx)(p.l6, {}),
                      (0, l.jsx)(p.Ys, {}),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "videoControlsRight",
                  children: (0, l.jsxs)("div", {
                    children: [
                      t && (0, l.jsx)(u.L, { transcriptUrl: t }),
                      (0, l.jsx)(p.PT, {}),
                      (0, l.jsx)(d.A, {}),
                    ],
                  }),
                }),
              ],
            }),
            (0, l.jsx)(c.z, {}),
          ],
        });
      };
      m.displayName = "VideoPlayerControls";
    },
    78057: (e, t, n) => {
      n.d(t, { U: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaVolumeHigh",
              _src: "MediaVolumeHigh.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaVolumeHigh";
    },
    82617: (e, t, n) => {
      n.d(t, { a: () => o });
      var l = n(37876),
        r = n(33680),
        a = n(89322),
        i = n(50005);
      let o = () => {
        let { fastForward: e } = (0, i.Z)();
        return (0, l.jsxs)(a.a, {
          onClick: e,
          children: [
            (0, l.jsx)(r.j, { width: "23px" }),
            (0, l.jsx)("span", {
              className: "h-sr-only",
              children: "forward 10 seconds",
            }),
          ],
        });
      };
      o.displayName = "ForwardButton";
    },
    87868: (e, t, n) => {
      n.d(t, { a: () => c });
      var l = n(37876),
        r = n(14232),
        a = n(3576),
        i = n(62701),
        o = n(50005);
      let s = (e) => {
        let { onCaptionUpdate: t, videoPlayerContext: n } = e,
          l = (0, r.useCallback)(
            () => (e) => {
              var n;
              let l = e.currentTarget,
                r =
                  null == (n = (null == l ? void 0 : l.activeCues)[0])
                    ? void 0
                    : n.text;
              r && "" !== r && t(r);
            },
            [t]
          ),
          a = (0, r.useCallback)(() => {
            var e;
            let t = n.getVideoPlayerRef(),
              r = null != (e = null == t ? void 0 : t.textTracks) ? e : [];
            for (let e = 0; e < r.length; e += 1) {
              let n = null == t ? void 0 : t.textTracks[e];
              if (n && ((n.mode = "hidden"), "captions" === n.kind)) {
                let e = l();
                n.addEventListener("cuechange", e, !1);
              }
            }
          }, [l, n]);
        return (
          (0, r.useEffect)(() => {
            a();
          }, []),
          null
        );
      };
      s.displayName = "DefaultCaption";
      var d = ((e) => {
        let t = (t) => {
          let n = (0, o.Z)();
          return (0, l.jsx)(
            e,
            (0, i._)((0, a._)({}, t), { videoPlayerContext: n })
          );
        };
        return (
          (t.displayName = "withVideoPlayerComponentsContext(".concat(
            e.displayName || e.name,
            ")"
          )),
          t
        );
      })(s);
      let c = (e) => {
        let { children: t, captionSource: n } = e,
          [a, i] = (0, r.useState)(""),
          { areCaptionsVisible: s, totalTime: c } = (0, o.Z)();
        return n && s && c
          ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(d, { onCaptionUpdate: i }), t(a)],
            })
          : null;
      };
      c.displayName = "VideoPlayerCaptions";
    },
    88905: (e, t, n) => {
      n.d(t, { W: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaPlay",
              _src: "MediaPlay.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaPlay";
    },
    89322: (e, t, n) => {
      n.d(t, { a: () => r });
      var l = n(98601);
      let r = n(77232).I4.button.withConfig({ componentId: "sc-acea1ca5-0" })(
        [
          "display:inline-block;padding:0;margin-right:16px;width:25px;height:25px;overflow:hidden;cursor:pointer;vertical-align:top;transform:scale(1,1);svg{color:#888;}&.active,&:focus,&:hover{svg{color:white;}}&:hover{transform:scale(1.25,1.25);outline:none;}&:focus{transform:scale(1.25,1.25);outline:",
          " dashed 1px;outline-offset:2px;-moz-outline-radius:4px;text-decoration:underline;}&:last-child{margin-right:0;}",
        ],
        l.Tj.border.focusOutline
      );
      r.displayName = "ControlButton";
    },
    89372: (e, t, n) => {
      n.d(t, { F: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaVolumeMute",
              _src: "MediaVolumeMute.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaVolumeMute";
    },
    92067: (e, t, n) => {
      n.d(t, { q: () => i });
      var l = n(3576),
        r = n(37876),
        a = n(9394);
      let i = (e) =>
        (0, r.jsx)(
          a.I,
          (0, l._)(
            {
              _name: "MediaPause",
              _src: "MediaPause.svg",
              _viewBox: "0 0 24 24",
            },
            e
          )
        );
      i.displayName = "IconMediaPause";
    },
    97711: (e, t, n) => {
      n.d(t, { t: () => a });
      var l = n(14232),
        r = n(74492);
      let a = () => (0, l.useContext)(r.x);
    },
  },
]);
