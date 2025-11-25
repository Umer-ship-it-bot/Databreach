"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [37],
  {
    37: (e, l, t) => {
      t.d(l, { n: () => n, u: () => ep });
      var n,
        i = t(3576),
        a = t(37876),
        o = t(14232),
        s = t(41860),
        r = t(95408),
        d = t(66667),
        c = t(91110),
        u = t(24570),
        p = t(55472),
        m = t(31696),
        h = t(52651),
        f = t(60823),
        v = t(52128),
        g = t(62701),
        x = t(40196),
        _ = t(45799),
        E = t(19351),
        y = t(78533);
      let O = function () {
        let {
            trackingDetails: e,
            metadata: l,
            order: t,
            saveOfferDealType: a,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          { trackEvent: o } = (0, E.z1)(),
          s = (0, _.UF)(),
          r = (0, x.x6)(s),
          d = null == e ? void 0 : e.strategyId,
          c = ((e, l) => {
            var t, n, i;
            let a =
              null !=
              (n = null == e || null == (t = e.components) ? void 0 : t[0])
                ? n
                : {};
            return {
              name:
                null != (i = null == a ? void 0 : a.title)
                  ? i
                  : null == a
                  ? void 0
                  : a.id,
              position: String(l),
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
          })(l, t),
          { trackSaveOfferEvent: u } = (0, y.s)();
        return (l) => {
          let t,
            p,
            { offerId: m, action: h, offerAriaLabel: f } = null != l ? l : {};
          m &&
            (h === n.ADDED_OFFER
              ? (t = !0)
              : h === n.ADD_OFFER_ERROR && (t = !1),
            h === n.REMOVED_OFFER
              ? (p = !0)
              : h === n.REMOVE_OFFER_ERROR && (p = !1),
            t && u.track({ deal: { id: m, type: a } }),
            o({
              appState: (0, i._)(
                { url: s, cmsPageId: r },
                r.startsWith("/s/") ? { cmsPageType: "s" } : {},
                r.startsWith("/b/") ? { cmsPageType: "b" } : {},
                r.startsWith("/c/") ? { cmsPageType: "c" } : {}
              ),
              guest: { eventType: "click" },
              offerInfo: (0, g._)(
                (0, i._)(
                  {},
                  t ? { addOffer: t } : {},
                  p ? { removeOffer: p } : {}
                ),
                {
                  offers: [
                    {
                      offerId: m,
                      offerSelected: void 0 !== t || void 0 !== p,
                      offerType: "cartwheel",
                    },
                  ],
                }
              ),
              promotionInfo: {
                promos: [
                  {
                    name: null == e ? void 0 : e.promoName,
                    type: null == e ? void 0 : e.promoType,
                    ivyPromoId: m,
                    id: m,
                    omtOfferId: m,
                    added: t,
                    removed: p,
                    longTagSpecialOffer: f,
                  },
                ],
              },
            }),
            d &&
              (0, E.cW)({
                recClick: {
                  type: "promo",
                  offerId: m,
                  position: null == e ? void 0 : e.position,
                  strategyId: null == e ? void 0 : e.strategyId,
                  strategyName: null == e ? void 0 : e.strategyName,
                },
                contentClick: c,
              }));
        };
      };
      var k = t(54432),
        C = t(63492),
        R = t(75570),
        b = t(2503);
      let D = (e) => {
        let {
            isPopoverOpen: l,
            offerButtonRef: t,
            setIsPopoverOpenToggle: n,
            isErrorState: i,
            errorMessage: s = v.z$,
            isIconOnly: c,
          } = e,
          u = (0, o.useRef)(null),
          p = (0, r.Mv)("GLOBAL_CIRCLE_OFFERS_CTA_LANGUAGE_CHANGE_ENABLED"),
          m = (0, o.useCallback)(() => {
            var e;
            null == (e = u.current) || e.focus();
          }, []),
          h = (0, o.useCallback)((e) => {
            null == e || e.preventDefault(), (0, b.Jv)(window.location.href);
          }, []);
        return (0, a.jsx)(d.A, {
          hasClicksDismiss: !0,
          isOpen: l,
          onOpen: m,
          onOpenChange: n,
          renderInline: !0,
          role: i ? "alert" : "tooltip",
          tailAlignment: c ? { origin: "end", offset: 0 } : void 0,
          target: t,
          variant: i ? "warning" : "primary",
          zIndex: 1100,
          children: i
            ? (0, a.jsx)("span", {
                "data-test": "save-offer-popover-error",
                ref: u,
                tabIndex: -1,
                children: s,
              })
            : (0, a.jsx)(R.N, {
                className: "h-margin-a-tiny",
                color: "onDark",
                "data-test": "save-offer-popover-sign-in-link",
                onClick: h,
                ref: u,
                underline: "always",
                children: p ? v.rh : v.AQ,
              }),
        });
      };
      D.displayName = "SaveCircleOfferPopover";
      var F = t(98601),
        I = t(77232);
      let j = I.I4.svg.withConfig({ componentId: "sc-58fc203b-0" })(
          [
            ".plus{clip-path:",
            ";transition:clip-path 300ms;transition-delay:100ms;",
            ";}.checkmark{clip-path:inset(0 100% 0 0);transition:clip-path 100ms;transition-delay:0;",
            "}@media (prefers-reduced-motion){.plus,.checkmark{transition:none;transition-delay:0;}}",
          ],
          "polygon(0% 0%, 0% 100%, 50% 100%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 100%, 100% 100%, 100% 0%)",
          (e) =>
            e.isOfferAdded
              ? "\n    clip-path: ".concat(
                  "polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)",
                  ";\n    transition: clip-path 100ms;\n    /* stylelint-disable-next-line declaration-property-value-no-unknown -- TODO: fix */\n    transition-delay: 0;\n    "
                )
              : "",
          (e) =>
            e.isOfferAdded
              ? "\n    clip-path: inset(0);\n    transition: clip-path 300ms;\n    transition-delay: 100ms;\n    "
              : ""
        ),
        N = (e) => {
          let { isOfferAdded: l = !1, size: t = 24 } = e;
          return (0, a.jsxs)(j, {
            focusable: "false",
            height: t,
            isOfferAdded: l,
            role: "presentation",
            viewBox: "0 0 24 24",
            width: t,
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            children: [
              (0, a.jsx)("path", {
                className: "plus",
                d: "M12.75 3.25v8h8v1.5h-8v8h-1.5v-8h-8v-1.5h8v-8z",
                fill: F.Tj.palette.red.default,
              }),
              (0, a.jsx)("path", {
                className: "checkmark",
                d: "M8.923 16.443l-4.395-4.364-1.056 1.064 5.451 5.414L20.528 7.032l-1.056-1.064z",
                fill: F.Tj.palette.green.light,
              }),
            ],
          });
        };
      N.displayName = "AnimatedIcon";
      let w = I.I4.a.withConfig({ componentId: "sc-dbd89a75-0" })([
        "white-space:pre-line;",
      ]);
      var A = t(66781),
        T = t(79777),
        M = t(58096),
        S = t(94742),
        L = t(6908),
        P = t(74820),
        z = t(64219),
        G = t(14875),
        W = t(55873),
        B = t(72396),
        V = t(29464),
        H = t(70418);
      let X = I.I4.label.withConfig({ componentId: "sc-82d49e1-0" })([
          "font-weight:bold;line-height:1.2em;cursor:pointer;",
        ]),
        U = (0, I.I4)(R.N).withConfig({ componentId: "sc-82d49e1-1" })([
          "font-weight:bold;line-height:1.2em;",
        ]),
        q = I.I4.div.withConfig({ componentId: "sc-82d49e1-2" })([
          "margin-left:40px;",
        ]),
        Y = I.I4.span.withConfig({ componentId: "sc-82d49e1-3" })(
          ["color:", ";"],
          F.Tj.loyalty.background.purple.base
        );
      I.I4.sub.withConfig({ componentId: "sc-82d49e1-4" })(
        ["font-size:4px !important;color:", ";vertical-align:bottom;"],
        F.Tj.loyalty.background.purple.base
      );
      let K = I.I4.span.withConfig({ componentId: "sc-82d49e1-5" })(
        ["color:", ";"],
        F.Tj.circle.brand.primary
      );
      var Q = t(52956);
      let J = (e, l) => {
          let {
              isPromotionCircleOffer: t,
              circleOfferDetailsForCheckbox: n,
              promotionCircleOfferDetailsForCheckbox: i,
            } = null != e ? e : {},
            a = null == i ? void 0 : i.mass_offer,
            o = null == n ? void 0 : n.personalized;
          return (null == l ? void 0 : l.length) &&
            (null == l ? void 0 : l.length) >= 7 &&
            (null == l ? void 0 : l.length) < 9 &&
            (null == l ? void 0 : l.startsWith("888"))
            ? "DMC"
            : (null == l ? void 0 : l.length) &&
              (null == l ? void 0 : l.length) >= 7 &&
              (null == l ? void 0 : l.length) < 9 &&
              (null == l ? void 0 : l.startsWith("777"))
            ? "DMR"
            : t
            ? a
              ? Q.g.MASS
              : Q.g.CIRCLE_SEGMENTED
            : o
            ? Q.g.CIRCLE_SEGMENTED
            : Q.g.CIRCLE_MASS;
        },
        Z = (e) => {
          var l, t, n, s, r, d;
          let {
              offerId: c,
              handleSaveCircleOfferClick: u,
              added: p = !1,
              checkboxRef: m,
              getOfferCheckboxProps: h,
              isLoadingState: v,
            } = e,
            x = h(),
            {
              circleOfferDetailsForCheckbox: _,
              promotionCircleOfferDetailsForCheckbox: y,
              isPromotionCircleOffer: O,
              pdpMessage: C,
              isDPLPLinkingEnabled: b,
              relativeUrl: D,
              openFlyout: F,
              pdpPromoBlockPosition: I,
              membershipOfferType: j,
            } = x,
            { trackClick: N } = (0, f.f)(),
            w =
              null !=
                (s =
                  null === T.ag || void 0 === T.ag
                    ? void 0
                    : T.ag.isSocialLogin) && s,
            Q = J(x, c),
            Z =
              "DMC" === Q || "DMR" === Q
                ? new H.o("/pl/".concat(c)).makeRelative().toString()
                : D,
            $ = null != C ? C : "",
            ee = ((e) => {
              let {
                isPromotionCircleOffer: l,
                pdp_message: t,
                title: n,
                subtitle: i,
              } = e;
              return l ? "".concat(n ? n + ": " : "").concat(t) : "".concat(i);
            })({
              isPromotionCircleOffer: !!O,
              pdp_message: $,
              title:
                null != (r = null == y ? void 0 : y.pdp_message_prefix)
                  ? r
                  : "",
              subtitle:
                null !=
                (d = null == _ || null == (l = _.message) ? void 0 : l.subtitle)
                  ? d
                  : "",
            }),
            { isGuestLoggedIn: el, isCircleEnrolled: et } = (0, k.Q)(),
            en = (0, o.useMemo)(() => {
              var e;
              return O
                ? null == y
                  ? void 0
                  : y.redemption_text
                : null == _ || null == (e = _.message)
                ? void 0
                : e.redemption_text;
            }, [
              null == _ || null == (t = _.message) ? void 0 : t.redemption_text,
              O,
              null == y ? void 0 : y.redemption_text,
            ]),
            ei = (0, o.useMemo)(
              () => (el && et ? en : "Eligible with Target Circle membership"),
              [et, el, en]
            ),
            ea = (0, o.useMemo)(() => {
              var e, l;
              return O
                ? null == y || null == (e = y.offer_expiry_date)
                  ? void 0
                  : e.split("T")[0]
                : null == _ || null == (l = _.expiration_date)
                ? void 0
                : l.split("T")[0];
            }, [
              null == _ ? void 0 : _.expiration_date,
              O,
              null == y ? void 0 : y.offer_expiry_date,
            ]),
            eo = (0, o.useMemo)(() => {
              if (ea)
                try {
                  return (0, G.pW)(ea);
                } catch (e) {
                  return;
                }
            }, [ea]),
            es = (0, o.useMemo)(
              () => (eo ? "Expires ".concat((0, A.GP)(eo, "MMM d")) : ""),
              [eo]
            ),
            er = (0, o.useMemo)(() => {
              var e;
              return O
                ? null == y
                  ? void 0
                  : y.applied_action_title
                : null == _ || null == (e = _.message)
                ? void 0
                : e.applied_action_title;
            }, [
              O,
              null == _ || null == (n = _.message)
                ? void 0
                : n.applied_action_title,
              null == y ? void 0 : y.applied_action_title,
            ]),
            ed = (0, o.useMemo)(
              () =>
                O
                  ? null == y
                    ? void 0
                    : y.auto_applied
                  : null == _
                  ? void 0
                  : _.auto_applied,
              [
                null == _ ? void 0 : _.auto_applied,
                O,
                null == y ? void 0 : y.auto_applied,
              ]
            ),
            ec = (0, o.useCallback)(() => {
              N.track({
                featureType: "DEAL_BLOCK",
                clickType: "OFFER_DETAILS",
                element: { id: c, type: "OFFER" },
              }),
                (0, E.cW)({
                  contentClick: { component: "PDP Promo Block", position: I },
                });
            }, [c, I, N]),
            eu = (0, o.useCallback)(() => {
              ec(), null == F || F();
            }, [F, ec]),
            ep = (0, W.b)().EXP_PDP_DEALS_LINK_TEXT,
            { checkIsExperimentEnabledAndTrackFireflyEvent: em } = (0, B.G)(
              "TARGET_FREEBIES_ENABLED"
            ),
            eh = em(),
            ef = (0, o.useMemo)(
              () => eh && "Circle_360_Freebies" === j,
              [eh, j]
            ),
            ev = (0, o.useCallback)(
              () =>
                ("DPLP_SHOW_ITEMS_AND_DETAILS" === ep && b && Z) ||
                "ALL_DEALS_SHOW_ITEMS_AND_DEATILS" === ep
                  ? "Show items and details"
                  : "Details",
              [b, ep, Z]
            ),
            eg = (0, o.useMemo)(
              () =>
                (0, a.jsx)(M.H, {
                  "aria-label": "Details for ".concat(ee),
                  "data-test": "promotion-button-".concat(c),
                  onClick: eu,
                  children: ev(),
                }),
              [ev, c, ee, eu]
            ),
            ex = (0, o.useCallback)(() => {
              ec();
            }, [ec]),
            e_ = (0, o.useMemo)(
              () =>
                w
                  ? null
                  : (0, a.jsx)(R.N, {
                      "aria-label": "Details for ".concat(ee),
                      "data-test": "promotion-link-".concat(c),
                      href: null == Z ? void 0 : Z.toString(),
                      onClick: ex,
                      children: ev(),
                    }),
              [ee, c, Z, ex, ev, w]
            );
          return !ed && el && et
            ? (0, a.jsxs)("div", {
                className: "h-padding-v-tight",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "h-display-flex h-flex-direction-row h-flex-align-center",
                    children: [
                      v
                        ? (0, a.jsx)("span", {
                            className: "h-margin-r-tight",
                            children: (0, a.jsx)(P.y, { size: "xsmall" }),
                          })
                        : (0, a.jsx)(z.S, {
                            "aria-describedby": ei + es,
                            ariaLabel: ef ? $ : ee,
                            checked: p,
                            id: "pdp-promo-block-checkbox-".concat(c),
                            onClick: u,
                            ref: m,
                          }),
                      (0, a.jsxs)("div", {
                        className: "h-margin-l-tight",
                        children: [
                          (0, a.jsx)(X, {
                            "data-test": "promotion-text-".concat(c),
                            htmlFor: "pdp-promo-block-checkbox-".concat(c),
                            onClick: u,
                            children: ef
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(K, { children: "◎circle " }),
                                    (0, a.jsxs)(Y, {
                                      children: ["360™ freebie: ", $],
                                    }),
                                  ],
                                })
                              : (0, a.jsx)(a.Fragment, { children: ee }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "h-text-grayDark h-text-md",
                            children: [
                              ei &&
                                (0, a.jsxs)("span", {
                                  className: "h-text-md",
                                  children: [ei, " ∙\xa0"],
                                }),
                              eo &&
                                (0, a.jsxs)("span", {
                                  children: [es, " ∙\xa0"],
                                }),
                              b && Z ? e_ : eg,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  p &&
                    (0, a.jsx)(q, {
                      className: "h-text-md h-text-green",
                      children: er,
                    }),
                ],
              })
            : (0, a.jsx)(S.o, {
                headingComponent: w
                  ? null
                  : (0, a.jsx)(
                      U,
                      (0, g._)(
                        (0, i._)(
                          {
                            "aria-label": "Details for ".concat(ef ? $ : ee),
                            color: "onLightSecondary",
                            "data-test": "promotion-text-".concat(c),
                            underline: "invert",
                          },
                          w
                            ? {}
                            : b && Z && !w
                            ? { href: Z, role: "link", onClick: ec }
                            : { onClick: F, role: "button" }
                        ),
                        {
                          children: ef
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(K, { children: "◎circle " }),
                                  (0, a.jsxs)(Y, {
                                    children: ["360™ freebie: ", $],
                                  }),
                                ],
                              })
                            : (0, a.jsx)(a.Fragment, { children: ee }),
                        }
                      )
                    ),
                headingText: w ? ee : "",
                noPaddingLeft: !0,
                noPaddingRight: !0,
                renderLeading: ef
                  ? (0, a.jsx)(L.V, {
                      alt: "",
                      aspectRatio: "32x32",
                      className: "h-margin-b-tight",
                      src: "https://target.scene7.com/is/image/Target/GUEST_ce40e356-23bf-4c5f-b7d7-1ea053d1aefd",
                    })
                  : (0, a.jsx)(V.d, { width: 24 }),
                subheadingComponent: (0, a.jsxs)("div", {
                  className: "h-text-grayDark h-text-md",
                  children: [
                    ei &&
                      (0, a.jsxs)("span", {
                        className: "h-text-md",
                        children: [ei, " ∙\xa0"],
                      }),
                    eo && (0, a.jsxs)("span", { children: [es, " ∙\xa0"] }),
                    b && Z ? e_ : eg,
                  ],
                }),
                textComponentName: "BaseMd",
              });
        };
      Z.displayName = "SaveCircleOfferCheckbox";
      var $ = t(44046),
        ee = t(51705),
        el = t(16321),
        et = t(13505);
      let { generic: en } = F.xe,
        { x2: ei } = en,
        ea = I.I4.span.withConfig({ componentId: "sc-32c1c286-0" })(
          ["max-width:150px;@media (min-width:", "){max-width:210px;}"],
          F.fi.sm
        ),
        eo = (0, I.I4)(R.N).withConfig({ componentId: "sc-32c1c286-1" })([
          "position:relative;min-height:80px;min-width:80px;",
        ]),
        es = I.I4.img.withConfig({ componentId: "sc-32c1c286-2" })([
          "max-height:80px;max-width:80px;",
        ]),
        er = I.I4.div.withConfig({ componentId: "sc-32c1c286-3" })(
          [
            "display:flex;justify-content:space-between;align-items:center;padding:",
            " 0 ",
            " ",
            ";width:100%;& > button:first-child{width:80%;}",
          ],
          ei,
          ei,
          ei
        );
      (0, I.I4)(et.f).withConfig({ componentId: "sc-32c1c286-4" })([
        "position:absolute;z-index:1;font-size:8px;bottom:2px;",
      ]);
      let ed = (0, I.I4)(P.y).withConfig({ componentId: "sc-32c1c286-5" })([
          "margin-right:18px;",
        ]),
        ec = I.I4.div.withConfig({ componentId: "sc-32c1c286-6" })([
          "margin-right:8.5px;",
        ]),
        eu = (e) => {
          var l, t, n, s, r, d, c, u, p, m, h, f;
          let {
              handleSaveCircleOfferClick: v,
              added: x,
              isLoadingState: _,
              offerDetailsForMagicWand: E,
              checkboxRef: y,
            } = e,
            O = (0, o.useContext)(ee.O),
            k = null != (f = null == E ? void 0 : E.offer_url) ? f : void 0,
            C =
              (null == E ? void 0 : E.channel) === "DMC" ||
              (null == E ? void 0 : E.channel) === "DMR",
            R = k
              ? new H.o(k).makeRelative().toString()
              : C
              ? new H.o("/pl/".concat(E.id)).makeRelative().toString()
              : "",
            b = !!R,
            D = (0, o.useMemo)(
              () =>
                (null == E ? void 0 : E.expiration_date)
                  ? null == E
                    ? void 0
                    : E.expiration_date.split("T")[0]
                  : void 0,
              [null == E ? void 0 : E.expiration_date]
            ),
            I = (0, o.useMemo)(() => {
              if (D)
                try {
                  return (0, G.pW)(D);
                } catch (e) {
                  return;
                }
            }, [D]),
            j = (0, o.useMemo)(
              () => (I ? "Expires ".concat((0, A.GP)(I, "MMM d")) : ""),
              [I]
            ),
            N = (0, o.useMemo)(() => {
              var e, l, t;
              return ""
                .concat(
                  null == E || null == (e = E.message)
                    ? void 0
                    : e.short_description,
                  " "
                )
                .concat(
                  null == E || null == (l = E.message)
                    ? void 0
                    : l.long_description,
                  " "
                )
                .concat(
                  null == E || null == (t = E.message)
                    ? void 0
                    : t.redemption_text,
                  " Expires "
                )
                .concat(D);
            }, [
              D,
              null == E || null == (l = E.message)
                ? void 0
                : l.long_description,
              null == E || null == (t = E.message) ? void 0 : t.redemption_text,
              null == E || null == (n = E.message)
                ? void 0
                : n.short_description,
            ]),
            w = (0, o.useMemo)(() => {
              var e, l;
              return ""
                .concat(
                  null == E || null == (e = E.message)
                    ? void 0
                    : e.short_description,
                  " "
                )
                .concat(
                  null == E || null == (l = E.message)
                    ? void 0
                    : l.long_description,
                  " details"
                );
            }, [
              null == E || null == (s = E.message)
                ? void 0
                : s.long_description,
              null == E || null == (r = E.message)
                ? void 0
                : r.short_description,
            ]),
            T = (0, o.useCallback)(
              (e) => {
                e.preventDefault(),
                  O &&
                    O({
                      type: el.uh.PUSH_OVERLAY,
                      value: {
                        offerId: null == E ? void 0 : E.id,
                        isCircleOffer: !0,
                      },
                    });
              },
              [O, null == E ? void 0 : E.id]
            );
          return (null == E ? void 0 : E.id) &&
            (null == E || null == (d = E.message)
              ? void 0
              : d.short_description)
            ? (0, a.jsxs)(
                "div",
                {
                  className:
                    "h-display-flex h-flex-justify-center h-flex-align-center h-border-b",
                  "data-test": "saved-offer-tile",
                  children: [
                    _
                      ? (0, a.jsx)(ed, { size: "xsmall" })
                      : (0, a.jsx)(a.Fragment, {
                          children: (null == E ? void 0 : E.auto_applied)
                            ? (0, a.jsx)(ec, {
                                "data-test": "saved-offer-checkmark-icon",
                                children: (0, a.jsx)($.V, {
                                  color: F.Tj.palette.green.default,
                                  width: 24,
                                }),
                              })
                            : (0, a.jsx)(z.S, {
                                "aria-label": N,
                                checked: x,
                                className: "h-margin-r-x2",
                                id: "offer-checkbox-".concat(
                                  null == E ? void 0 : E.id
                                ),
                                onClick: v,
                                ref: y,
                              }),
                        }),
                    (0, a.jsxs)(er, {
                      children: [
                        (0, a.jsxs)("label", {
                          className:
                            "h-display-flex h-flex-direction-col h-text-left",
                          "data-test": "saved-offer-link",
                          htmlFor: "offer-checkboxx-".concat(
                            null == E ? void 0 : E.id
                          ),
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "h-text-bs h-text-bold h-text-red h-margin-b-tiny",
                              "data-test": "saved-offer-short-description",
                              children:
                                null == E || null == (c = E.message)
                                  ? void 0
                                  : c.short_description,
                            }),
                            (null == E || null == (u = E.message)
                              ? void 0
                              : u.long_description) &&
                              (0, a.jsx)(ea, {
                                className:
                                  "h-text-md h-text-grayDarkest h-margin-b-tiny",
                                "data-test": "saved-offer-long-description",
                                children:
                                  null == E || null == (p = E.message)
                                    ? void 0
                                    : p.long_description,
                              }),
                            (0, a.jsx)("span", {
                              className: "h-text-sm h-text-grayDark",
                              "data-test": "saved-offer-redemption-text",
                              children:
                                null == E || null == (m = E.message)
                                  ? void 0
                                  : m.redemption_text,
                            }),
                            (null == E ? void 0 : E.expiration_date) &&
                              (0, a.jsx)("span", {
                                className: "h-text-sm h-text-grayDark ",
                                "data-test": "saved-offer-expire-date",
                                children: j,
                              }),
                            x &&
                              (0, a.jsx)("div", {
                                className: "h-text-sm h-text-green",
                                children:
                                  null == E || null == (h = E.message)
                                    ? void 0
                                    : h.applied_action_title,
                              }),
                            !x &&
                              !(null == E ? void 0 : E.auto_applied) &&
                              (0, a.jsx)("div", {
                                "aria-hidden": !0,
                                className: "h-text-sm",
                              }),
                          ],
                        }),
                        (0, a.jsx)(
                          eo,
                          (0, g._)(
                            (0, i._)(
                              {
                                className: "h-display-flex h-flex-align-center",
                              },
                              b ? { href: R } : { onClick: T }
                            ),
                            {
                              children: (0, a.jsx)(es, {
                                alt: w,
                                src: null == E ? void 0 : E.image_url,
                              }),
                            }
                          )
                        ),
                      ],
                    }),
                  ],
                },
                null == E ? void 0 : E.id
              )
            : null;
        };
      (eu.displayName = "SaveCircleOfferMagicWand"),
        (function (e) {
          (e.ADDED_OFFER = "ADDED_OFFER"),
            (e.ADD_OFFER_ERROR = "ADD_OFFER_ERROR"),
            (e.REMOVED_OFFER = "REMOVED_OFFER"),
            (e.REMOVE_OFFER_ERROR = "REMOVE_OFFER_ERROR");
        })(n || (n = {}));
      let ep = (e) => {
        var l;
        let {
            buttonSize: t,
            confirmedText: g,
            initialText: x,
            isOfferAddedDefault: _,
            offerId: E,
            offerAriaLabel: y,
            onAddOffer: R,
            onRemoveOffer: b,
            variation: F,
            trackingDetails: I,
            shouldTrack: j = !0,
            metadata: A,
            order: T,
            getOfferCheckboxProps: M,
            offerDetailsForMagicWand: S,
          } = e,
          [L, P] = (0, C.w)(),
          {
            openJoinCircleModal: z,
            isGuestLoggedIn: G,
            isCircleEnrolled: W,
          } = (0, k.Q)(),
          { pricingStoreId: B } = (0, s.x)(),
          { screenSmMax: V } = (0, p.e)(),
          [H, X] = (0, o.useState)(void 0),
          U = "iconOnly" === F,
          q = "checkbox" === F,
          Y = (0, o.useRef)(null),
          [K, Q] = (0, o.useState)(!1),
          [$, ee] = (0, o.useState)(!1),
          el = O({
            trackingDetails: I,
            metadata: A,
            order: T,
            saveOfferDealType: J(null == M ? void 0 : M(), E),
          }),
          { trackClick: et } = (0, f.f)(),
          en = _ ? v.ys : v.Ib,
          [ei, ea] = (0, o.useState)(en),
          [eo, es] = (0, o.useState)(!1),
          er = E
            ? null == L || null == (l = L[E])
              ? void 0
              : l.added
            : void 0,
          [ed, ec] = (0, o.useState)(""),
          ep = (0, r.Mv)("GLOBAL_CIRCLE_OFFERS_CTA_LANGUAGE_CHANGE_ENABLED");
        (0, o.useEffect)(() => {
          if (ei !== v.w0) {
            if (!0 === er) {
              if (ei === v.ys) return;
              return ea(v.ys);
            }
            if (!1 === er) {
              if (ei === v.qX) return;
              return ea(v.qX);
            }
            ea(en);
          }
        }, [er, en, ei, E]);
        let em = (0, o.useMemo)(() => {
            let e;
            return (
              (null == I ? void 0 : I.placementId) &&
                I.strategyId &&
                I.strategyName &&
                (e = {
                  placementId: null == I ? void 0 : I.placementId,
                  strategyDescription:
                    null == I ? void 0 : I.strategyDescription,
                  strategyId: null == I ? void 0 : I.strategyId,
                  strategyName: null == I ? void 0 : I.strategyName,
                }),
              e
            );
          }, [I]),
          eh = (0, o.useCallback)(
            (e) => {
              let l = { action: e, offerId: E, offerAriaLabel: y };
              null == R || R(l),
                j &&
                  !q &&
                  (el(l),
                  et.track({
                    featureType: (null == I ? void 0 : I.isDPLP)
                      ? "DPLP_HEADER"
                      : "RECOMMENDATION",
                    clickType: "APPLY_OFFER",
                    prz: em,
                    element: { id: null != E ? E : "", type: "OFFER" },
                  }));
            },
            [E, y, R, em, j, q, el, I, et]
          ),
          ef = (0, o.useCallback)(
            (e) => {
              let l = { action: e, offerId: E, offerAriaLabel: y };
              null == b || b(l),
                j &&
                  !q &&
                  (el(l),
                  et.track({
                    featureType: (null == I ? void 0 : I.isDPLP)
                      ? "DPLP_HEADER"
                      : "RECOMMENDATION",
                    clickType: "REMOVE_OFFER",
                    prz: em,
                    element: { id: null != E ? E : "", type: "OFFER" },
                  }));
            },
            [E, y, b, em, j, q, el, et, I]
          ),
          ev = (0, o.useCallback)(
            (e) => {
              if ((null == e ? void 0 : e.status) === 409) {
                var l, t, i;
                X(
                  null == e ||
                    null == (i = e.response) ||
                    null == (t = i.data) ||
                    null == (l = t.errors)
                    ? void 0
                    : l.NOT_ENOUGH_SLOTS
                );
              }
              es(!0), eh(n.ADD_OFFER_ERROR), ea(v.qX);
            },
            [eh]
          ),
          eg = (0, o.useCallback)(() => {
            eo && es(!1);
            let e = { action: n.ADDED_OFFER, offerId: E, offerAriaLabel: y };
            eh(n.ADDED_OFFER),
              ea(v.ys),
              ec("Offer saved"),
              q &&
                E &&
                (el(e),
                et.track({
                  featureType: "DEAL_BLOCK",
                  clickType: "APPLY_OFFER",
                  element: { id: E, type: "OFFER" },
                })),
              P && P({ type: v.Yu.ADD_OFFER, value: { offerId: E } });
          }, [eo, eh, q, P, et, E, y, el]),
          [ex] = (0, m.zw)({ onError: ev, onSuccess: eg }),
          e_ = (0, o.useCallback)(() => {
            var e;
            null == (e = eC.current) || e.focus();
          }, []),
          eE = (0, o.useCallback)(() => {
            eo && es(!1),
              q &&
                E &&
                et.track({
                  featureType: "DEAL_BLOCK",
                  clickType: "REMOVE_OFFER",
                  element: { id: E, type: "OFFER" },
                }),
              ef(n.REMOVED_OFFER),
              ea(v.qX),
              ec("Offer removed"),
              P && P({ type: v.Yu.REMOVE_OFFER, value: { offerId: E } });
          }, [eo, q, ef, P, et, E]),
          ey = (0, o.useCallback)(() => {
            es(!0), ef(n.REMOVE_OFFER_ERROR), ea(v.ys);
          }, [ef]),
          [eO] = (0, h.cz)({ onError: ey, onSuccess: eE });
        (0, o.useEffect)(() => {
          eo && Q((e) => !e || e);
        }, [eo]);
        let ek = (0, o.useCallback)(async () => {
            if (!eo) {
              if (!G) return Q(!0);
              if (G && !W) return z();
              switch ((ea(v.w0), ei)) {
                case v.Ib:
                case v.qX:
                  if (E) return ee(!0), ex({ offerId: E, storeId: B });
                  break;
                case v.ys:
                  if (E) return eO({ offerId: E });
              }
            }
          }, [eo, G, W, ei, z, E, ex, B, eO, Q, ee]),
          eC = (0, o.useRef)(null),
          eR = (0, o.useCallback)(() => {
            Q((e) => (e && (X(void 0), es(!1)), !e));
          }, []),
          eb = (0, o.useCallback)(() => {
            var e;
            null == (e = Y.current) || e.focus();
          }, []);
        return E
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(D, {
                  errorMessage:
                    null != H
                      ? H
                      : ((e, l) =>
                          e === v.qX
                            ? l
                              ? v.ZR
                              : v.A5
                            : e === v.ys
                            ? v.dm
                            : void 0)(ei, ep),
                  isErrorState: eo,
                  isIconOnly: U,
                  isPopoverOpen: K,
                  offerButtonRef: eC,
                  setIsPopoverOpenToggle: eR,
                }),
                E === v.cJ &&
                  (0, a.jsx)(d.A, {
                    hasClicksDismiss: !0,
                    isDismissible: !0,
                    isOpen: $,
                    onClose: e_,
                    onOpen: eb,
                    onOpenChange: ee,
                    renderInline: !0,
                    role: "tooltip",
                    target: eC,
                    variant: "primary",
                    children: (0, a.jsx)(w, {
                      ref: Y,
                      tabIndex: -1,
                      children: v.Hi,
                    }),
                  }),
                q && M
                  ? (0, a.jsx)(Z, {
                      added: ei === v.ys,
                      checkboxRef: eC,
                      getOfferCheckboxProps: M,
                      handleSaveCircleOfferClick: ek,
                      offerId: E,
                    })
                  : "magicWand" === F && S
                  ? (0, a.jsx)(eu, {
                      added: ei === v.ys,
                      checkboxRef: eC,
                      handleSaveCircleOfferClick: ek,
                      isLoadingState: ei === v.w0,
                      offerDetailsForMagicWand: S,
                    })
                  : U
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("span", {
                          className: "h-sr-only",
                          role: "alert",
                          children: ed,
                        }),
                        (0, a.jsx)(c.T, {
                          "aria-label":
                            ei === v.ys
                              ? "Remove offer: ".concat(y)
                              : "Save offer: ".concat(y),
                          className: "h-padding-a-tiny",
                          onClick: ek,
                          ref: eC,
                          renderIcon: (0, a.jsx)(N, {
                            isOfferAdded: ei === v.ys,
                            size: 36,
                          }),
                          type: "button",
                        }),
                      ],
                    })
                  : (0, a.jsx)(
                      u.B,
                      (0, i._)(
                        {
                          "aria-label":
                            ei === v.ys
                              ? "Applied in cart ".concat(y)
                              : "".concat(ep ? "Apply" : "Save", " ").concat(y),
                          "data-test": "save-circle-offer-button",
                          isConfirmed: ei === v.ys,
                          isFullWidth: !0,
                          isPending: ei === v.w0,
                          onClick: ek,
                          ref: eC,
                          size: null != t ? t : V ? "sm" : "lg",
                          variant: "secondary" === F ? "secondary" : void 0,
                          warningText: ep
                            ? "Offer not applied. Try again"
                            : "Offer not saved. Try again",
                        },
                        g
                          ? { confirmedText: g }
                          : ep
                          ? { confirmedText: "Applied" }
                          : g
                          ? { confirmedText: g }
                          : {},
                        x
                          ? { initialText: x }
                          : ep
                          ? { initialText: "Apply" }
                          : x
                          ? { initialText: x }
                          : {}
                      )
                    ),
              ],
            })
          : null;
      };
      ep.displayName = "SaveCircleOfferButton";
    },
  },
]);
