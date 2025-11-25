(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6274],
  {
    22214: (e, a, t) => {
      "use strict";
      t.d(a, { l: () => i });
      var r = t(14232),
        l = t(35501),
        n = t(41099);
      function i() {
        return {
          detect: (0, r.useCallback)(async (e, a) => {
            if (!(0, n.v_)())
              return (
                l.r.info("web ai detect language unsupported", {
                  module: "ai_language_detector",
                  category: "experience_tracing",
                  action: "window_ai_not_supported",
                }),
                null
              );
            try {
              var t;
              let r = null == (t = (0, n.lS)()) ? void 0 : t.languageDetector;
              if (!r)
                return (
                  l.r.info("web ai detect language no detector", {
                    module: "ai_language_detector",
                    category: "experience_tracing",
                    action: "no_language_detector_available",
                  }),
                  null
                );
              let i = await c(r, a);
              if (!i)
                return (
                  l.r.info("web ai detect language detector creation failed", {
                    module: "ai_language_detector",
                    category: "experience_tracing",
                    action: "detector_creation_failed",
                    attributes: { expected_languages: a.join(",") },
                  }),
                  null
                );
              let o = i ? await i.detect(e) : null,
                u = (null == o ? void 0 : o[0]) || null;
              return (
                l.r.info("web ai detect language complete", {
                  module: "ai_language_detector",
                  category: "experience_tracing",
                  action: "language_detection_complete",
                  attributes: {
                    detection_success: !!u,
                    detected_language: null == u ? void 0 : u.detectedLanguage,
                    confidence: null == u ? void 0 : u.confidence,
                  },
                }),
                u
              );
            } catch (e) {
              return (
                l.r.error("web ai detect language", {
                  module: "ai_language_detector",
                  category: "api_error",
                  action: "language_detection_error",
                  error: e,
                }),
                null
              );
            }
          }, []),
        };
      }
      async function o(e, a) {
        var t, r, i, o;
        let c = null == (t = (0, n.lS)()) ? void 0 : t.isNewAPI,
          u = null == (r = (0, n.lS)()) ? void 0 : r.isLegacy;
        if (!e)
          return (
            l.r.info("web ai detect language check capability", {
              module: "ai_language_detector",
              category: "experience_tracing",
              action: "no_language_detector_for_capability_check",
            }),
            "not-supported"
          );
        try {
          if (u) {
            let t = await (null == (i = e.capabilities) ? void 0 : i.call(e)),
              r = await (null == t || null == (o = t.languageAvailable)
                ? void 0
                : o.call(t, a));
            if (r)
              return (
                l.r.info("web ai detect language legacy capability", {
                  module: "ai_language_detector",
                  category: "experience_tracing",
                  action: "legacy_language_detector_available",
                  attributes: { availability: r },
                }),
                r
              );
          }
          if (c) {
            let a = (null == e ? void 0 : e.availability)
              ? await e.availability()
              : "not-supported";
            return (
              l.r.info("web ai detect language new api capability", {
                module: "ai_language_detector",
                category: "experience_tracing",
                action: "new_language_detector_available",
                attributes: { availability: a },
              }),
              a
            );
          }
        } catch (e) {
          l.r.error("web ai detect language", {
            module: "ai_language_detector",
            category: "api_error",
            action: "capability_check_error",
            error: e,
          });
        }
        return "not-supported";
      }
      async function c(e, a) {
        let t = await o(e, a);
        if (!t || "no" === t || "unavailable" === t || "not-supported" === t)
          return null;
        try {
          if ("after-download" === t || "downloadable" === t)
            return (
              l.r.info("web ai detect language downloading", {
                module: "ai_language_detector",
                category: "experience_tracing",
                action: "downloading_detector",
                attributes: { availability: t },
              }),
              await new Promise((t) => {
                (async () => {
                  var r;
                  let n = await (null == e || null == (r = e.create)
                    ? void 0
                    : r.call(e, { expectedInputLanguages: a }));
                  l.r.info("web ai detect language download complete", {
                    module: "ai_language_detector",
                    category: "experience_tracing",
                    action: "detector_download_complete",
                    attributes: { success: !!n },
                  }),
                    t(null != n ? n : null);
                })();
              })
            );
          if ("readily" === t || "available" === t) {
            var r;
            let t = await (null == e || null == (r = e.create)
              ? void 0
              : r.call(e, { expectedInputLanguages: a }));
            return (
              l.r.info("web ai detect language creation complete", {
                module: "ai_language_detector",
                category: "experience_tracing",
                action: "detector_creation_complete",
                attributes: { success: !!t },
              }),
              null != t ? t : null
            );
          }
        } catch (e) {
          l.r.error("web ai_detect language creation error", {
            module: "ai_language_detector",
            category: "api_error",
            action: "detector_creation_error",
            error: e,
            attributes: { expected_languages: a.join(",") },
          });
        }
        return null;
      }
    },
    22903: (e) => {
      e.exports = {
        ndsButtonGroup: "styles_ndsButtonGroup__Qf1z5",
        stacked: "styles_stacked__Y6hZn",
      };
    },
    44494: (e, a, t) => {
      "use strict";
      t.d(a, { R: () => i });
      var r = t(3576),
        l = t(37876),
        n = t(9394);
      let i = (e) =>
        (0, l.jsx)(
          n.I,
          (0, r._)(
            { _name: "FlagFill", _src: "FlagFill.svg", _viewBox: "0 0 24 24" },
            e
          )
        );
      i.displayName = "IconFlagFill";
    },
    67065: (e, a, t) => {
      "use strict";
      t.d(a, { t: () => u });
      var r,
        l = t(14232),
        n = t(26738);
      (r || (r = {})).results_grid = "results grid";
      class i extends n.r {
        processMetadata(e) {
          return e;
        }
        createDataPayload(e) {
          return e;
        }
        constructor(...e) {
          super(...e),
            (this.intent = r.results_grid),
            (this.tag = "GLOBAL_RESULTS_GRID_EVENT_TRACKING"),
            (this.flag = void 0),
            (this.apiMutation = "results_grid");
        }
      }
      var o = t(68156),
        c = t(9503);
      let u = () => {
        let { fetchClientContextMetadata: e } = (0, o.p)(),
          { trackResultsGridEvent: a } = ((e) =>
            (0, l.useMemo)(() => ({ trackResultsGridEvent: new i(e) }), [e]))(
            e
          ),
          t = (0, c.n)()(a);
        return (0, l.useMemo)(() => ({ trackResultsGridEvent: t }), [t]);
      };
    },
    78429: (e, a, t) => {
      "use strict";
      t.d(a, { B: () => i });
      var r = t(14232),
        l = t(35501),
        n = t(41099);
      function i() {
        return {
          translate: (0, r.useCallback)(async (e, a, t) => {
            if (!(0, n.v_)())
              return (
                l.r.info("web ai translate text unsupported", {
                  module: "ai_translator",
                  category: "experience_tracing",
                  action: "window_ai_not_supported",
                }),
                e
              );
            try {
              var r;
              let i = null == (r = (0, n.lS)()) ? void 0 : r.translator;
              if (!i)
                return (
                  l.r.info("web ai translate text no translator", {
                    module: "ai_translator",
                    category: "experience_tracing",
                    action: "no_translator_available",
                  }),
                  e
                );
              l.r.info("web ai translate text translator available", {
                module: "ai_translator",
                category: "experience_tracing",
                action: "translator_available",
                attributes: { source_language: a, target_language: t },
              });
              let o = await c(i, a, t);
              if (!o)
                return (
                  l.r.info("web ai translate text creation failed", {
                    module: "ai_translator",
                    category: "experience_tracing",
                    action: "translator_creation_failed",
                    attributes: { source_language: a, target_language: t },
                  }),
                  e
                );
              let u = await o.translate(e);
              return (
                l.r.info("web ai translate text complete", {
                  module: "ai translator",
                  category: "experience_tracing",
                  action: "translation complete",
                  attributes: {
                    source_language: a,
                    target_language: t,
                    translation_success: !!(u && u !== e),
                    result_length: u.length,
                  },
                }),
                u
              );
            } catch (r) {
              return (
                l.r.error("web_ai_translate_text_error", {
                  module: "ai translator",
                  category: "api_error",
                  action: "translation error",
                  error: r,
                  attributes: { source_language: a, target_language: t },
                }),
                e
              );
            }
          }, []),
        };
      }
      async function o(e, a, t) {
        var r, i, o, c;
        let u = null == (r = (0, n.lS)()) ? void 0 : r.isNewAPI,
          g = null == (i = (0, n.lS)()) ? void 0 : i.isLegacy;
        if (!e) return "not-supported";
        try {
          if (g) {
            let r = await (null == (o = e.capabilities) ? void 0 : o.call(e)),
              l = r
                ? await (null == r || null == (c = r.languagePairAvailable)
                    ? void 0
                    : c.call(r, a, t))
                : "not-supported";
            if (l) return l;
          }
          if (u)
            return e.availability
              ? await e.availability({ sourceLanguage: a, targetLanguage: t })
              : "not-supported";
        } catch (e) {
          l.r.error("web ai translate text capability error", {
            module: "ai_translator",
            category: "api_error",
            action: "capability_check_error",
            error: e,
            attributes: { source_language: a, target_language: t },
          });
        }
        return "not-supported";
      }
      async function c(e, a, t) {
        let r = await o(e, a, t);
        if (!r || "no" === r || "unavailable" === r || "not-supported" === r)
          return (
            l.r.info("web ai translate text unavailable", {
              module: "ai_translator",
              category: "experience_tracing",
              action: "translator_unavailable",
              attributes: {
                availability: r,
                source_language: a,
                target_language: t,
              },
            }),
            null
          );
        try {
          if ("after-download" === r || "downloadable" === r)
            return (
              l.r.info("web ai translate text downloading", {
                module: "ai_translator",
                category: "experience_tracing",
                action: "downloading_translator",
                attributes: {
                  availability: r,
                  source_language: a,
                  target_language: t,
                },
              }),
              await new Promise((r) => {
                (async () => {
                  var l;
                  let n = await (null == e || null == (l = e.create)
                    ? void 0
                    : l.call(e, { sourceLanguage: a, targetLanguage: t }));
                  r(null != n ? n : null);
                })();
              })
            );
          if ("readily" === r || "available" === r) {
            var n;
            let r = await (null == e || null == (n = e.create)
              ? void 0
              : n.call(e, { sourceLanguage: a, targetLanguage: t }));
            return (
              l.r.info("web ai translate text creation complete", {
                module: "ai_translator",
                category: "experience_tracing",
                action: "translator_creation_complete",
                attributes: {
                  success: !!r,
                  source_language: a,
                  target_language: t,
                },
              }),
              null != r ? r : null
            );
          }
        } catch (e) {
          l.r.error("web ai translate text creation error", {
            module: "ai_translator",
            category: "api_error",
            action: "translator_creation_error",
            error: e,
            attributes: { source_language: a, target_language: t },
          });
        }
        return null;
      }
    },
    90750: (e, a, t) => {
      "use strict";
      t.d(a, { e: () => g });
      var r = t(3576),
        l = t(62701),
        n = t(65699),
        i = t(37876),
        o = t(15039),
        c = t(36730),
        u = t(22903);
      let g = (e) => {
        var { className: a, isStacked: t } = e,
          g = (0, n._)(e, ["className", "isStacked"]);
        return (0, i.jsx)(
          c.g,
          (0, l._)(
            (0, r._)({ className: o(u.ndsButtonGroup, t && u.stacked, a) }, g),
            { divider: "topOnlySmallScreen" }
          )
        );
      };
      g.displayName = "ButtonGroup";
    },
  },
]);
