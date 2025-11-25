(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [85, 3141],
  {
    26: (e, t, a) => {
      "use strict";
      a.d(t, { X: () => _ });
      var l = a(14232),
        i = a(59010),
        o = a(18551),
        d = a(50301),
        r = a(73208),
        n = a(10244),
        s = a(46143),
        u = a(40897),
        c = a(951),
        p = a(32038),
        m = a(32381);
      let _ = () => {
        var e, t;
        let a = (0, r.K1)(n.yM),
          [_] = (0, o.RJ)(),
          h = _(d.xF),
          g =
            null !=
              (e = (0, r.K1)((0, s.fn)({ isCircle360ActivePaidMember: h }))) &&
            e,
          y = (0, r.K1)((0, u.iK)({ isCircle360ActivePaidMember: h })),
          v = (0, r.K1)((0, c._K)({ isCircle360ActivePaidMember: h })),
          P = (0, r.K1)(p.iz),
          { hasPdpFindAlternativePreloadVariablesFromSSR: f } = (0,
          l.useContext)(i.e),
          x = (0, m.Y)(),
          b = null != (t = (0, r.K1)(c.xB)) && t;
        return !y && !g && !P && !b && ((!x && !!f && !v) || (!!a && !v));
      };
    },
    1814: (e, t, a) => {
      "use strict";
      a.d(t, { z: () => x });
      var l = a(14232),
        i = a(94259),
        o = a(42252),
        d = a(40196),
        r = a(59010),
        n = a(36324),
        s = a(29443),
        u = a(1022),
        c = a(28260),
        p = a(96457),
        m = a(84231),
        _ = a(88044),
        h = a(29718);
      let g = (0, h.w)({
          layout: {
            id: "web_pdp_default_fallback",
            name: "Fallback Core Response",
            description:
              "This is hard-coded in site-top-of-funnel and returned if redoak call fails",
            zones: [
              {
                zone_id: "ProductDetailTop",
                module_groups: [
                  {
                    module_group_id: "ProductDetailTop",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldLeft",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldLeft",
                    modules: [{ module_type: "ProductDetailImageGallery" }],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldRight",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldRight",
                    modules: [
                      {
                        module_type: "ProductDetailSeasonalAssortmentDriver",
                        module_data: { has_max_width: !0 },
                      },
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailAtAGlance" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldMobile",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldMobile",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailAvailabilitySneakPeek" },
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      {
                        module_type: "ProductDetailImageGallery",
                        module_data: { mobile_gallery_image_width: 100 },
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailAtAGlance" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailBelowTheFold",
                module_groups: [
                  {
                    module_group_id: "ProductDetailBelowTheFoldProductDetails",
                    modules: [
                      {
                        module_type: "ProductDetailAccordion",
                        module_data: {
                          sections: [
                            {
                              section_type: "VirtualBundleComponentCarousel",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "ProductDetailsAndHighlights",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "Specifications",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "EnergyGuide",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "AppleTerms",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "DrugFacts",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "LabelInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "SizeChart",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ShippingAndReturns",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ParentalInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ChemicalData",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "QuestionsAndAnswers",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "WarningsAndDisclosureData",
                              is_open_by_default: !1,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationFull",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !1 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph3",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsDealsEvent",
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_complimentary_visual",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_bundle1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsOutfitting",
                      },
                      { module_type: "ProductDetailVirtualTryOnVisualizer" },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsShopTheCollection",
                      },
                      { module_type: "ProductDetailFeaturedInCollections" },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !0 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph2",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      { module_type: "ProductDetailManufacturerNotes" },
                      { module_type: "ProductDetailTargetFindsStories" },
                      { module_type: "ProductDetailTargetStyle" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_sponsored_items",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 2 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationCriticalOnly",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 2 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        y = (0, h.w)({
          layout: {
            id: "web_pdp_discretionary_fallback",
            name: "Fallback Discretionary Response",
            description:
              "This is hard-coded in site-top-of-funnel and returned if redoak call fails",
            zones: [
              {
                zone_id: "ProductDetailTop",
                module_groups: [
                  {
                    module_group_id: "ProductDetailTop",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldLeft",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldLeft",
                    modules: [{ module_type: "ProductDetailImageGallery" }],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldRight",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldRight",
                    modules: [
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailHighlights" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldMobile",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldMobile",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailAvailabilitySneakPeek" },
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      {
                        module_type: "ProductDetailImageGallery",
                        module_data: { mobile_gallery_image_width: 100 },
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailHighlights" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailBelowTheFold",
                module_groups: [
                  {
                    module_group_id: "ProductDetailBelowTheFoldProductDetails",
                    modules: [
                      {
                        module_type: "ProductDetailAccordion",
                        module_data: {
                          sections: [
                            {
                              section_type: "VirtualBundleComponentCarousel",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "ProductDetails",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "SizeChart",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "Specifications",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "AtAGlance",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "ShippingAndReturns",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "QuestionsAndAnswers",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "EnergyGuide",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "AppleTerms",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "DrugFacts",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "LabelInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ParentalInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ChemicalData",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "WarningsAndDisclosureData",
                              is_open_by_default: !1,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationFull",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !1 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph3",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsDealsEvent",
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_complimentary_visual",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_bundle1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsOutfitting",
                      },
                      { module_type: "ProductDetailVirtualTryOnVisualizer" },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsShopTheCollection",
                      },
                      { module_type: "ProductDetailFeaturedInCollections" },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !0 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph2",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      { module_type: "ProductDetailManufacturerNotes" },
                      { module_type: "ProductDetailTargetFindsStories" },
                      { module_type: "ProductDetailTargetStyle" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_sponsored_items",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 2 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationCriticalOnly",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 2 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        v = (0, h.w)({
          layout: {
            id: "web_pdp_frequency_fallback",
            name: "Fallback Frequency Response",
            description:
              "This is hard-coded in site-top-of-funnel and returned if redoak call fails",
            zones: [
              {
                zone_id: "ProductDetailTop",
                module_groups: [
                  {
                    module_group_id: "ProductDetailTop",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldLeft",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldLeft",
                    modules: [{ module_type: "ProductDetailImageGallery" }],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldRight",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldRight",
                    modules: [
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailAtAGlance" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldMobile",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldMobile",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailBreadcrumbs" },
                      { module_type: "ProductDetailRelatedLinks" },
                      { module_type: "ProductDetailTitle" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                      },
                      { module_type: "ProductDetailAvailabilitySneakPeek" },
                      { module_type: "ProductDetailLastPurchasedInfo" },
                      {
                        module_type: "ProductDetailImageGallery",
                        module_data: { mobile_gallery_image_width: 100 },
                      },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailFulfillmentMessaging" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adapt_pdp_oos_01",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id:
                                "should_show_find_alternative_carousel",
                              value: !0,
                            },
                          ],
                        },
                      },
                      { module_type: "ProductDetailAddToRegistry" },
                      { module_type: "ProductDetailAddToList" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailFinance" },
                      { module_type: "ProductDetailAtAGlance" },
                      {
                        module_type: "ProductDetailManufacturerNotesJumpLinks",
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "rightcol", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailBelowTheFold",
                module_groups: [
                  {
                    module_group_id: "ProductDetailBelowTheFoldProductDetails",
                    modules: [
                      {
                        module_type: "ProductDetailAccordion",
                        module_data: {
                          sections: [
                            {
                              section_type: "VirtualBundleComponentCarousel",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "ProductDetailsAndHighlights",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "LabelInfo",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "DrugFacts",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "Specifications",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ShippingAndReturns",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "QuestionsAndAnswers",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "EnergyGuide",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "AppleTerms",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "SizeChart",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ParentalInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ChemicalData",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "WarningsAndDisclosureData",
                              is_open_by_default: !1,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationFull",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !1 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph3",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type:
                          "ProductDetailRecommendedProductsDealsEvent",
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "web_pdp_bia",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_bundle1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      { module_type: "ProductDetailFeaturedInCollections" },
                      { module_type: "ProductDetailVirtualTryOnVisualizer" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph1",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailCategoryBrowse",
                        module_data: {
                          conditions: [
                            { condition_id: "is_product_buyable", value: !0 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdph2",
                          has_add_to_cart_button: !0,
                        },
                      },
                      { module_type: "ProductDetailManufacturerNotes" },
                      { module_type: "ProductDetailTargetFindsStories" },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_sponsored_items",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 0 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationCriticalOnly",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { review_card_count: 0 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        P = (0, h.w)({
          layout: {
            id: "web_pdp_traffic_aware_fallback",
            name: "Traffic-aware Response",
            description:
              "Fallback traffic-aware layout for external traffic (Google PLA)",
            zones: [
              {
                zone_id: "ProductDetailTop",
                module_groups: [
                  {
                    module_group_id: "ProductDetailTop",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailMiniBuyBox" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldMobile",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldMobile",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "sskinny", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailMiniBuyBox" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailBelowTheFold",
                module_groups: [
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationFull",
                    modules: [
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_product_alternatives",
                          has_add_to_cart_button: !0,
                          product_card_variant: "default",
                        },
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: {
                          pos: "rightcol",
                          show_sponsored: !0,
                          conditions: [
                            { condition_id: "is_mobile", value: !0 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_rediscovery_purchased",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id: "is_auth_ready_and_guest_logged_in",
                              value: !0,
                            },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_rediscovery_views",
                          has_add_to_cart_button: !0,
                          conditions: [
                            {
                              condition_id: "is_auth_ready_and_guest_logged_in",
                              value: !0,
                            },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: {
                          pos: "block1",
                          show_sponsored: !0,
                          conditions: [
                            {
                              condition_id: "is_auth_ready_and_guest_logged_in",
                              value: !0,
                            },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_discovery_top_performing",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_discovery_newness",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: {
                          pos: "block1",
                          show_sponsored: !0,
                          conditions: [
                            {
                              condition_id: "is_auth_ready_and_guest_logged_in",
                              value: !1,
                            },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "pdp_discovery_deals",
                          has_add_to_cart_button: !0,
                        },
                      },
                      {
                        module_type: "ProductDetailRecommendedProducts",
                        module_data: {
                          placement_id: "adaptpdp_sponsored_items",
                          has_add_to_cart_button: !1,
                        },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationCriticalOnly",
                    modules: [
                      {
                        module_type: "ProductDetailAd",
                        module_data: {
                          pos: "rightcol",
                          show_sponsored: !0,
                          conditions: [
                            { condition_id: "is_mobile", value: !0 },
                          ],
                        },
                      },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "block1", show_sponsored: !0 },
                      },
                      { module_type: "ProductDetailPriceMatchAndStoreInfo" },
                      {
                        module_type: "ProductDetailAd",
                        module_data: { pos: "btf", show_sponsored: !0 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        f = (0, h.w)({
          layout: {
            id: "web_pdp_pinterest",
            name: "Pinterest",
            description: "DEMO: not final",
            zones: [
              {
                zone_id: "ProductDetailTop",
                module_groups: [
                  {
                    module_group_id: "ProductDetailTop",
                    modules: [
                      { module_type: "ProductDetailTitle" },
                      { module_type: "ProductDetailImageGallery" },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailAddByParam" },
                      { module_type: "ProductDetailAtAGlance" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailAboveTheFoldMobile",
                module_groups: [
                  {
                    module_group_id: "ProductDetailAboveTheFoldMobile",
                    modules: [
                      { module_type: "ProductDetailTitle" },
                      { module_type: "ProductDetailAddByParam" },
                      {
                        module_type:
                          "ProductDetailReviewsAndQuestionsJumpLinks",
                        module_data: { hide_feedback_msg: !0 },
                      },
                      { module_type: "ProductDetailAvailabilitySneakPeek" },
                      { module_type: "ProductDetailImageGallery" },
                      { module_type: "ProductDetailPrice" },
                      { module_type: "ProductDetailVariationSelector" },
                      { module_type: "ProductDetailFulfillment" },
                      { module_type: "ProductDetailDeals" },
                      { module_type: "ProductDetailAtAGlance" },
                    ],
                  },
                ],
              },
              {
                zone_id: "ProductDetailBelowTheFold",
                module_groups: [
                  {
                    module_group_id: "ProductDetailBelowTheFoldProductDetails",
                    modules: [
                      {
                        module_type: "ProductDetailAccordion",
                        module_data: {
                          hide_ask_a_question_button: !0,
                          sections: [
                            {
                              section_type: "ProductDetailsAndHighlights",
                              is_open_by_default: !0,
                            },
                            {
                              section_type: "Specifications",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "EnergyGuide",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "AppleTerms",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "DrugFacts",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "LabelInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "SizeChart",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ShippingAndReturns",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ParentalInfo",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "ChemicalData",
                              is_open_by_default: !1,
                            },
                            {
                              section_type: "QuestionsAndAnswers",
                              is_open_by_default: !1,
                            },
                          ],
                        },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationFull",
                    modules: [
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { hide_write_a_review_button: !0 },
                      },
                    ],
                  },
                  {
                    module_group_id:
                      "ProductDetailBelowTheFoldAdditionalInformationCriticalOnly",
                    modules: [
                      {
                        module_type: "ProductDetailRatingsAndReviews",
                        module_data: { hide_write_a_review_button: !0 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        }),
        x = () => {
          let e = (0, o.rd)(),
            { query: t, asPath: a } = e,
            h = (0, u.pH)(e),
            { isBot: x } = (0, l.useContext)(i.B.Context),
            { isSocialPage: b, marketplaceType: D } = (0, s.u8)(),
            { storeIdFromParam: A, storeIdFromServer: E } = (0, l.useContext)(
              r.e
            ),
            C = (() => {
              let e = (0, m.n)(),
                t = (0, m.x)();
              return (0, _.d)() ? P : e ? y : t ? v : g;
            })(),
            w = (0, c.t)(t),
            T = (0, d.x6)(a),
            I = (0, p.K)().checkIsExperimentEnabledAndTrackFireflyEvent();
          return (0, n.X)(
            {
              loadingLayoutResponse: C,
              fallbackLayoutResponse: C,
              overrideLayoutResponse: b && "pin" === D ? f : void 0,
            },
            {
              store_id: null != E ? E : A,
              traffic_source: w,
              tcin: h,
              page_type: "pdp",
              include_data_source_modules: I,
            },
            {
              enabled: !x && !!h,
              shouldFetchBeforePendingInputsResolved: !0,
              pageId: T,
            }
          );
        };
    },
    1905: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => c });
      var l = a(37876),
        i = a(14232),
        o = a(19968),
        d = a(91342),
        r = a(98601),
        n = a(77232);
      let s = n.Ay.div.withConfig({ componentId: "sc-8b8b69ad-0" })(
          [
            "position:relative;overflow:hidden;padding:",
            ";margin:-",
            ";box-shadow:0 30px 40px rgb(255,255,255,50%);max-height:",
            ";",
          ],
          r.xe.generic.x1,
          r.xe.generic.x1,
          (e) => {
            let { isExpanded: t, collapsedHeight: a } = e;
            return t ? "none" : "".concat(a, "px");
          }
        ),
        u = n.Ay.div.withConfig({ componentId: "sc-8b8b69ad-1" })(
          [
            "background-image:linear-gradient(to bottom,rgb(255,255,255,20%) 0%,#fff 100%);bottom:0;content:' ';height:",
            ";margin-top:-",
            ";opacity:0.9;outline-width:0;position:absolute;width:100%;z-index:1;",
          ],
          r.xe.generic.x5,
          r.xe.generic.x4
        ),
        c = (e) => {
          let {
              collapsedHeight: t,
              isExpandButtonEnabled: a = !0,
              isExpandableContent: r,
              isExpanded: n,
              onClick: c,
              showHideMessage: p = {
                showMessage: "show more",
                hideMessage: "show less",
              },
              children: m,
              buttonDataTest: _,
            } = e,
            { showMessage: h, hideMessage: g } = p,
            y = n ? g : h,
            v = (0, i.useCallback)(() => {
              c(y);
            }, [c, y]);
          return r
            ? (0, l.jsxs)(l.Fragment, {
                children: [
                  (0, l.jsxs)(s, {
                    collapsedHeight: t,
                    isExpanded: n,
                    children: [m, n ? null : (0, l.jsx)(u, {})],
                  }),
                  a
                    ? (0, l.jsx)(o.n, {
                        className:
                          "h-margin-h-auto h-margin-t-default h-margin-b-tight",
                        "data-test": _,
                        onClick: v,
                        size: "sm",
                        children: (0, d.Xo)(y),
                      })
                    : null,
                ],
              })
            : m;
        };
      c.displayName = "ContentExpansionWrapper";
    },
    4588: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => p });
      var l = a(37876),
        i = a(7337),
        o = a(41622),
        d = a(94039);
      let r = () =>
        (0, l.jsxs)("div", {
          className: "h-display-flex h-position-relative",
          children: [
            (0, l.jsx)(o.O, { className: "h-margin-a-tiny", height: "200px" }),
            (0, l.jsx)(o.O, { className: "h-margin-a-tiny", height: "200px" }),
            (0, l.jsx)(o.O, { className: "h-margin-a-tiny", height: "200px" }),
            (0, l.jsx)(o.O, {
              className: "h-margin-a-tiny h-hidden-sm-down",
              height: "200px",
            }),
            (0, l.jsx)(o.O, {
              className: "h-margin-a-tiny h-hidden-md-down",
              height: "200px",
            }),
            (0, l.jsx)(o.O, {
              className: "h-margin-a-tiny h-hidden-lg-down",
              height: "200px",
            }),
            (0, l.jsx)(d.x, { layout: "selfCentering" }),
          ],
        });
      r.displayName = "FilmstripPlaceholder";
      var n = a(97091),
        s = a(64103);
      let u = (0, l.jsx)(r, {}),
        c = () =>
          Promise.resolve()
            .then(a.bind(a, 46846))
            .then((e) => e.RecommendationCarousel),
        p = (e) => {
          var t;
          let {
              "data-test": a,
              hasAddToCartButton: o,
              placementId: d,
              headingProps: r,
              facetId: p,
              categoryNodeId: m,
              customCarouselHeading: _,
              productCardVariant: h = n.E.DEFAULT,
              category_id: g,
              doctype: y,
              moduleMetadata: v,
              recommended_products: P,
              should_skip_client_side_recommendations_request: f,
              strategy_description: x,
              strategy_id: b,
              strategy_name: D,
            } = e,
            A = null != (t = (0, s.D)({ placementId: d })) ? t : "",
            E = null != x ? x : A;
          return (0, l.jsx)("div", {
            "data-test": a,
            children: (0, l.jsx)(i.p, {
              headingDataTest: "recsHeading",
              headingProps: r,
              loadedProps: {
                hasAddToCartButton: o,
                placementId: d,
                facetId: p,
                categoryNodeId: m,
                customCarouselHeading: _,
                dataTest: a,
                productCardVariant: h,
                category_id: g,
                doctype: y,
                moduleMetadata: v,
                recommended_products: P,
                should_skip_client_side_recommendations_request: f,
                strategy_description: x,
                strategy_id: b,
                strategy_name: D,
              },
              loader: c,
              placeholder: u,
              placeholderHeading: E,
              shouldDeferOverride: null == v ? void 0 : v.isLoading,
            }),
          });
        };
      p.displayName = "LazyRecommendationCarousel";
    },
    7337: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => s });
      var l = a(3576),
        i = a(62701),
        o = a(65699),
        d = a(37876),
        r = a(33508),
        n = a(49315);
      let s = (e) => {
        let {
            haveProductDetailCoreCallsCompleted: t,
            shouldLoadProductDetailBelowTheFoldContentImmediately: a,
          } = (0, r.A)(),
          { shouldDeferOverride: s } = e,
          u = (0, o._)(e, ["shouldDeferOverride"]);
        return (0, d.jsx)(
          n.S,
          (0, i._)((0, l._)({}, u), {
            isImmediate: a,
            shouldDefer: null != s ? s : !t,
          })
        );
      };
      s.displayName = "ProductDetailBelowTheFoldComponent";
    },
    7407: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => h });
      var l = a(14232),
        i = a(42252),
        o = a(40196),
        d = a(53724),
        r = a(73208),
        n = a(26989),
        s = a(32038),
        u = a(28391),
        c = a(68979),
        p = a(52492),
        m = a(36810),
        _ = a(34781);
      let h = () => {
        let { asPath: e } = (0, i.rd)(),
          t = (0, o.Hq)(e),
          a = (0, r.K1)(n.Gs),
          h = (0, r.EJ)(n.Gs),
          g = (0, r.K1)(s.Sd),
          y = (0, r.K1)(s.wK),
          v = (0, r.EJ)(s.RR),
          P = (0, r.K1)(s.V8),
          f = (0, r.K1)(s.sd),
          x = (0, r.EJ)(u.u6),
          b = (0, r.EJ)(u.tA),
          D = (0, c.w)(p.ae);
        return (0, l.useMemo)(
          () =>
            t !== d.fE
              ? null == D
                ? void 0
                : D.map((e) => {
                    var a;
                    return {
                      tcin: null != (a = (0, n.s6)(e)) ? a : "",
                      placementType: (0, _.q8)(t),
                      webClass: (0, s.Sd)(e),
                      webSubClass: (0, s.wK)(e),
                      seller: (0, s.V8)(e) ? { id: (0, s.RR)(e) } : void 0,
                      sponsor: (0, m.oc)(e) ? { name: (0, m.$Z)(e) } : void 0,
                    };
                  })
              : [
                  {
                    addOnItem: f,
                    averageRating: x,
                    childTCIN: a,
                    numberOfReviews: b,
                    placementType: "pdp",
                    productViews: !0,
                    tcin: null != h ? h : "",
                    webClass: g,
                    webSubClass: y,
                    seller: P ? { id: v } : void 0,
                  },
                ],
          [f, x, a, b, h, g, y, v, D, t, P]
        );
      };
    },
    7493: (e, t, a) => {
      "use strict";
      a.d(t, { Lz: () => u, m3: () => s, sO: () => n });
      var l = a(3576),
        i = a(62701),
        o = a(7669),
        d = a(70418),
        r = a(91342);
      let n = (e, t) => {
          let { channel: a } = (0, o.v)() || {},
            {
              queryParamAdgroup: r,
              queryParamAfid: n,
              queryParamClkid: s,
              queryParamCpng: u,
              queryParamDfa: c,
              queryParamELink: p,
              queryParamEmseq: m,
              queryParamFfid: _,
              queryParamFndsrc: h,
              queryParamGclid: g,
              queryParamGclsrc: y,
              queryParamIntc: v,
              queryParamJiraComp: P,
              queryParamLid: f,
              queryParamLnk: x,
              queryParamRecStrategy: b,
              queryParamLnm: D,
              queryParamRef: A,
            } = a || {};
          return d.o.buildURLWithParams(
            "/cart",
            (0, i._)(
              (0, l._)(
                {},
                {
                  adgroup: r,
                  afid: n,
                  socialex: n,
                  clkid: s,
                  cpng: u,
                  dfa: c,
                  elnk: p,
                  emseq: m,
                  ffid: _,
                  fndsrc: h,
                  gclid: g,
                  gclsrc: y,
                  intc: v,
                  jira: P,
                  lid: f,
                  lnk: x,
                  lnm: D,
                  recstrategy: b,
                  ref: A,
                }
              ),
              { tcin: e, qty: t || "1" }
            )
          );
        },
        s = (e) => {
          let t = {};
          for (let a in e) {
            let l = (0, r.Bb)(a),
              i = e[a];
            "string" == typeof i
              ? (t[l] = (0, r.Bb)(i))
              : Array.isArray(i)
              ? (t[l] = (0, r.Bb)(i.join(",")))
              : (t[l] = "");
          }
          return t;
        },
        u = (e) => {
          let t = "shippingCartItems";
          if (!e) return t;
          switch (e.trim().toUpperCase()) {
            case "PICKUP":
              return "pickupCartItems";
            case "SHIP":
              return "shippingCartItems";
            case "SCHEDULED_DELIVERY":
              return "scheduledDeliveryCartItems";
            case "SHIP_TO_STORE":
              return "shipToStoreCartItems";
            case "DIGITAL_DOWNLOAD":
              return "digitalDownloadCartItems";
            case "EMAIL":
              return "emailCartItems";
            case "MOBILE":
              return "mobileCartItems";
            default:
              return t;
          }
        };
    },
    9248: (e, t, a) => {
      "use strict";
      a.d(t, { UH: () => A, cD: () => C, sy: () => E });
      var l = a(3576),
        i = a(62701),
        o = a(17379),
        d = a(54687),
        r = a(53842),
        n = a(70418),
        s = a(92684),
        u = a(40196),
        c = a(9301),
        p = a(14232),
        m = a(94259),
        _ = a(42252),
        h = a(53724),
        g = a(4042),
        y = a(19427),
        v = a(10754),
        P = a(61870);
      let f = new Set([
          v.CH.ADAPTPDPH1,
          v.CH.ADAPTPDPH3,
          v.CH.ADAPTPDBUNDLE1,
          v.CH.ADAPTPDPOOS01,
        ]),
        x =
          "@web/target-com/recommendations/get-pdp-recommendations-placement-v1",
        { useQuery: b } = (0, o.T)({
          name: x,
          defaultOptions: { staleTime: 1e3 },
          keyFn: (e) => {
            let {
              tcins: t,
              isPDP: a,
              isServersideRendered: l,
              placement_id: i,
              page: o,
            } = e;
            if (void 0 === i || void 0 === o || (a && !t)) return !1;
            let d =
              f.has(null == i ? void 0 : i.toLowerCase()) ||
              v.Mv.includes(i) ||
              i.includes("aiui");
            return (!l || !!d) && [x, e];
          },
          queryFn: async (e) => {
            let {
                apiKey: t,
                baseUrl: a,
                apis: {
                  product: { endpointPaths: o },
                },
              } = (0, y.$)().services.redskyAggregations,
              s = {
                key: t,
                effective_date: await (0, d.E)(),
                tcins: e.tcins,
                placement_id: e.placement_id,
                purchasable_store_ids: e.purchasable_store_ids,
                pricing_store_id: e.pricing_store_id,
                visitor_id: e.visitor_id,
                isServersideRendered: e.isServersideRendered,
                channel: "WEB",
                include_sponsored_recommendations:
                  e.include_sponsored_recommendations,
                platform: e.platform,
                category_id: e.category_id,
                member_id: e.member_id,
                page: e.page,
                keyword: e.keyword,
                facet_id: e.facet_id,
              },
              u = n.o.buildURLWithParams(o.pdpSpecificRecsV1, s, a),
              {
                data: c,
                ok: p,
                statusText: m,
              } = await (0, r.n)(u, {
                partialErrorTag:
                  P.O0
                    .REDSKY_AGGREGATIONS_PDP_RECOMMENDATIONS_PLACEMENT_PARTIAL_API_ERROR,
              });
            if (p && c) {
              let e = Date.now();
              return (0, i._)((0, l._)({}, c), { timeStamp: e });
            }
            throw Error("".concat(m));
          },
        }),
        D = (0, s.K)(b),
        A = (e) => {
          var t;
          let { variables: a, isEnabled: o = !0 } = e,
            { asPath: d } = (0, _.rd)(),
            { isBot: r } = (0, p.useContext)(m.B.Context),
            n = (0, u.Hq)(d) === h.fE;
          return D(
            (0, i._)((0, l._)({}, a), {
              placement_id:
                null != (t = null == a ? void 0 : a.placement_id) ? t : "",
              isServersideRendered: r,
              tcins: null == a ? void 0 : a.tcins,
              isPDP: n,
            }),
            { enabled: n && o }
          );
        },
        E = (e) => ({
          visitor_id: "0",
          include_sponsored_recommendations: !1,
          channel: "WEB",
          page: e.asPath ? (0, u.x6)(e.asPath) : "",
          pricing_store_id: g.Vz,
          platform: (0, c.S5)(),
        }),
        C = b;
    },
    9623: (e, t, a) => {
      "use strict";
      a.d(t, { G: () => g });
      var l = a(95408),
        i = a(18293),
        o = a(89514),
        d = a(4042),
        r = a(9301),
        n = a(13967),
        s = a(44239);
      a(20172), a(99107), a(46196);
      let u = async (e) => {},
        c = async (e) => {
          var t, a, l, s, c, p, m;
          let {
              UserLocation: _,
              fiatsCookie: h,
              accessToken: g,
            } = null != (s = null == (t = e.req) ? void 0 : t.cookies) ? s : {},
            y = null == _ ? void 0 : _.split("|")[0],
            v = (0, i.u3)(h),
            P =
              null != (c = null == (a = e.res) ? void 0 : a.memberId) ? c : "0",
            f = await u({
              ctx: e,
              zipCode: y,
              hasStoreFacet: !1,
              preferredStoreId: null == v ? void 0 : v.id,
            });
          return {
            tcins: (0, n.pH)(e),
            visitor_id: e.res
              ? null == (l = e.res)
                ? void 0
                : l.visitorId
              : (0, o.j)(),
            include_sponsored_recommendations: !0,
            pricing_store_id:
              null !=
              (m =
                null != (p = null == v ? void 0 : v.id)
                  ? p
                  : null == f
                  ? void 0
                  : f[0])
                ? m
                : d.Vz,
            purchasable_store_ids: f,
            skip_price_promo: !0,
            member_id: P,
            isBot: !0,
            isPDP: !0,
            page: null == e ? void 0 : e.asPath,
            channel: "WEB",
            platform: (0, r.S5)(),
          };
        };
      var p = a(81147);
      let m = async (e) => {
        var t, a, l, i;
        let { store_id: d, store_ids: r } =
          null != (i = await (0, p.M)(e)) ? i : {};
        return {
          visitor_id: e.res
            ? null == (t = e.res)
              ? void 0
              : t.visitorId
            : (0, o.j)(),
          include_sponsored_recommendations: !0,
          pricing_store_id: d,
          purchasable_store_ids: r,
          isServersideRendered: !0,
          page: e.asPath,
          channel: "WEB",
          platform: ((e) =>
            "phone" === e || "tablet" === e
              ? "mobile"
              : "desktop" === e
              ? "desktop"
              : void 0)(
            null == (l = e.res) || null == (a = l.cdnMetadata)
              ? void 0
              : a.formFactor
          ),
        };
      };
      var _ = a(21249),
        h = a(36290);
      let g = async (e) => {
        if (!(0, l.Mv)("FASTLY_CACHE_CONTROL_DISABLED")) return;
        let t = (0, l.Mv)(
            "PRODUCT_DETAIL_PAGE_TRAFFIC_AWARE_WITH_SERVERSIDE_RENDERING_LAYOUT_FULL_LOCATION_ENABLED"
          ),
          a = (0, _.J)(e);
        return (0, h.b)(e) || a ? m(e) : t ? c(e) : void 0;
      };
    },
    9864: (e, t, a) => {
      "use strict";
      a.d(t, {
        $G: () => r,
        Fk: () => c,
        J1: () => u,
        Lv: () => d,
        S: () => i,
        by: () => s,
        k0: () => n,
        wn: () => o,
      });
      let l = (e) => {
          var t;
          return null == e || null == (t = e.data)
            ? void 0
            : t.recommended_products;
        },
        i = (e) => {
          var t;
          return null == (t = l(e)) ? void 0 : t.products;
        },
        o = (e) => {
          var t, a;
          return null !=
            (a = null == (t = l(e)) ? void 0 : t.strategy_description)
            ? a
            : "";
        },
        d = (e) => {
          var t, a;
          return null != (a = null == (t = l(e)) ? void 0 : t.strategy_name)
            ? a
            : "";
        },
        r = (e) => {
          var t, a;
          return null != (a = null == (t = l(e)) ? void 0 : t.strategy_id)
            ? a
            : "";
        },
        n = (e) => {
          var t, a;
          return null != (a = null == (t = l(e)) ? void 0 : t.category_id)
            ? a
            : "";
        },
        s = (e) => {
          var t, a;
          return null != (a = null == (t = l(e)) ? void 0 : t.doctype) ? a : "";
        },
        u = (e) => {
          var t, a;
          return null != (a = null == (t = l(e)) ? void 0 : t.placement_id)
            ? a
            : "";
        },
        c = (e) => {
          var t;
          return null == e || null == (t = e.extensions)
            ? void 0
            : t.experiments_viewed;
        };
    },
    10294: (e, t, a) => {
      "use strict";
      a.d(t, { Fc: () => _, Oh: () => v });
      var l = a(3576),
        i = a(19427),
        o = a(17379),
        d = a(53842),
        r = a(70418),
        n = a(42252),
        s = a(3422),
        u = a(17800),
        c = a(48603),
        p = a(95636),
        m = a(61870);
      let _ = "@web/domain-product/get-pdp-personalized-v1",
        h = ["tcin", "pricing_store_id"],
        { useQuery: g } = (0, o.T)({
          name: _,
          keyFn: (e) => (
            h.forEach((t) => {
              if (!e[t])
                throw Error(
                  "Required `"
                    .concat(t, "` was missing from query: `")
                    .concat(_, "`")
                );
            }),
            [_, e]
          ),
          queryFn: async (e, t) => {
            var o, n;
            let {
                apiKey: s,
                baseUrl: u,
                apis: { product: c },
              } = (0, i.$)().services.redskyAggregations,
              { pdpPersonalizedV1: p } = null != (o = c.endpointPaths) ? o : {},
              {
                member_id: _,
                pricing_store_id: h,
                tcin: g,
              } = null != e ? e : {},
              y = r.o.buildURLWithParams(
                p,
                { member_id: _, pricing_store_id: h, tcin: g, key: s },
                u
              ),
              {
                data: v,
                ok: P,
                statusText: f,
              } = await (0, d.n)(
                y,
                (0, l._)(
                  {
                    partialErrorTag:
                      m.O0
                        .REDSKY_AGGREGATIONS_PDP_PERSONALIZED_API_ERROR_PARTIAL,
                    debugImportQueryForGraphQLSourceMode: () =>
                      a.e(9393).then(a.t.bind(a, 44426, 17)),
                  },
                  t
                )
              );
            if (P) return null != (n = null == v ? void 0 : v.data) ? n : null;
            throw Error("".concat(f));
          },
        }),
        y = (0, u.L)(g, { allowAnonymous: !0, shouldEstimateAnonymous: !0 }),
        v = (e) => {
          let { enabled: t = !0 } = e,
            a = (0, n.rd)(),
            l = (0, s.aZ)(a.asPath),
            { preferredStoreId: i, enabled: o } = (0, p._f)();
          return y(
            { tcin: l, member_id: (0, c.x7)(), pricing_store_id: i },
            { enabled: t && o }
          );
        };
    },
    10426: (e, t, a) => {
      "use strict";
      a.d(t, {
        _K: () => b,
        k0: () => A,
        xJ: () => E,
        Mx: () => D,
        TM: () => S,
        J1: () => T,
        vs: () => j,
        Ik: () => C,
        rg: () => w,
        wn: () => I,
        $G: () => R,
        Lv: () => N,
        PQ: () => k,
        Kk: () => x,
        pA: () => n,
        iD: () => f,
        P_: () => g,
      });
      var l = a(14232),
        i = a(42252),
        o = a(40196),
        d = a(48603),
        r = a(89514);
      let n = () => {
        let { asPath: e } = (0, i.rd)(),
          t = (0, o.x6)(e),
          a = (0, r.j)() || "0",
          n = (0, d.x7)(),
          s = !!n,
          u = (0, l.useMemo)(
            () => ({ channel: "WEB", member_id: n, page: t, visitor_id: a }),
            [n, t, a]
          );
        return (0, l.useMemo)(() => ({ variables: u, enabled: s }), [u, s]);
      };
      var s = a(3576),
        u = a(17379),
        c = a(70418),
        p = a(53842),
        m = a(19427),
        _ = a(61870);
      let h = "@web/redsky-aggregations/taxonomy-subcategories-v1",
        { useQuery: g } = (0, u.T)({
          name: h,
          keyFn: (e) => {
            if (!(null == e ? void 0 : e.category_id))
              throw Error(
                "Required `category_id` was not passed to query: `".concat(
                  h,
                  "`"
                )
              );
            return [h, e];
          },
          queryFn: async (e, t) => {
            let {
                apiKey: a,
                baseUrl: l,
                apis: {
                  domainTaxonomyConfig: { endpointPaths: i },
                },
              } = (0, m.$)().services.redskyAggregations,
              { category_id: o } = null != e ? e : {},
              d = c.o.buildURLWithParams(
                i.taxonomySubcategoriesV1,
                { category_id: o, key: a },
                l
              ),
              {
                data: r,
                ok: n,
                statusText: u,
              } = await (0, p.n)(
                d,
                (0, s._)(
                  {
                    partialErrorTag:
                      _.O0.TAXONOMY_SUBCATEGORIES_V1_ERROR_PARTIAL,
                  },
                  t
                )
              );
            if (n) return null != r ? r : null;
            throw Error("".concat(u));
          },
        });
      var y = a(62701),
        v = a(17800);
      let P = "@web/redsky-aggregations/recommended-taxonomy-v1",
        { useQuery: f } = (0, u.T)({
          name: P,
          keyFn: (e) => {
            let { placement_id: t } = e;
            if (!t)
              throw Error(
                "Required `placement_id` was not passed to query: `".concat(
                  P,
                  "`"
                )
              );
            return [P, e];
          },
          queryFn: async (e) => {
            let {
                apiKey: t,
                baseUrl: a,
                apis: {
                  domainTaxonomyConfig: { endpointPaths: l },
                },
              } = (0, m.$)().services.redskyAggregations,
              { category_level: i } = e,
              o = (0, y._)((0, s._)({}, e), {
                category_level: null != i ? i : "L1",
                key: t,
              }),
              d = c.o.buildURLWithParams(l.recommendedTaxonomyV1, o, a),
              {
                data: r,
                ok: n,
                statusText: u,
              } = await (0, p.n)(d, {
                credentials: "include",
                partialErrorTag: _.O0.GET_RECOMMENDED_TAXONOMY_ERROR_PARTIAL,
              });
            if (n) return null != r ? r : null;
            throw Error("".concat(u));
          },
        }),
        x = (0, v.L)(f),
        b = (e) => (null == e ? void 0 : e.canonical_url),
        D = (e) => (null == e ? void 0 : e.name),
        A = (e) => {
          var t;
          return null != (t = null == e ? void 0 : e.category_id)
            ? t
            : null == e
            ? void 0
            : e.node_id;
        },
        E = (e) =>
          null != e &&
          !!e.visibility &&
          (null == e ? void 0 : e.visibility.includes("WEB")),
        C = (e) => {
          var t, a, l;
          return null !=
            (l =
              null == e ||
              null == (a = e.data) ||
              null == (t = a.recommended_categories)
                ? void 0
                : t.categories)
            ? l
            : [];
        },
        w = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.category_id;
        },
        T = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.placement_id;
        },
        I = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.strategy_description;
        },
        S = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.doctype;
        },
        R = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.strategy_id;
        },
        N = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.recommended_categories)
            ? void 0
            : t.strategy_name;
        },
        j = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.related_categories)
            ? void 0
            : t.category;
        },
        k = (e) => {
          var t, a;
          return null == e ||
            null == (a = e.data) ||
            null == (t = a.related_categories)
            ? void 0
            : t.children;
        };
    },
    10557: (e, t, a) => {
      "use strict";
      a.d(t, {
        GX: () => l.GX,
        ZO: () => l.ZO,
        pk: () => l.pk,
        v1: () => l.v1,
      });
      var l = a(70395);
    },
    10754: (e, t, a) => {
      "use strict";
      a.d(t, { CH: () => l, Mv: () => o, ut: () => i });
      var l = (function (e) {
        return (
          (e.ADAPTPDPH1 = "adaptpdph1"),
          (e.ADAPTPDPH2 = "adaptpdph2"),
          (e.ADAPTPDPH3 = "adaptpdph3"),
          (e.ADAPTPDP_SPONSORED_ITEMS = "adaptpdp_sponsored_items"),
          (e.ADAPTPDPOOS01 = "adapt_pdp_oos_01"),
          (e.ADAPTPDBUNDLE1 = "adaptpdp_bundle1"),
          (e.ADAPTPDPNOTFOUND01 = "adapt_pdp_not_found_01"),
          (e.WEBPDPBIA = "web_pdp_bia"),
          (e.FACETED_ITEMS_WITH_DEALS = "faceted_items_with_deals"),
          (e.COLLECTION = "collection"),
          (e.PDP_PRODUCT_ALTERNATIVES = "pdp_product_alternatives"),
          (e.PDP_REDISCOVERY_PURCHASED = "pdp_rediscovery_purchased"),
          (e.PDP_REDISCOVERY_VIEWS = "pdp_rediscovery_views"),
          (e.PDP_DISCOVERY_TOP_PERFORMING = "pdp_discovery_top_performing"),
          (e.PDP_DISCOVERY_NEWNESS = "pdp_discovery_newness"),
          (e.PDP_DISCOVERY_DEALS = "pdp_discovery_deals"),
          (e.PDP_COMPLIMENTARY_VISUAL = "pdp_complimentary_visual"),
          (e.REVIEW_SUBMIT = "adaptive_postreviewsubmit_01"),
          e
        );
      })({});
      let i = {
          adaptpdph1: "Guests also viewed",
          adaptpdph2: "Your views",
          adaptpdph3: "Discover more options",
          adaptpdp_sponsored_items: "Featured products",
          adapt_pdp_oos_01: "Find alternative",
          adaptpdp_bundle1: "Frequently bought together",
          adapt_pdp_not_found_01: "Discover more options",
          web_pdp_bia: "Buy it again",
          faceted_items_with_deals: "Seasonal Deals",
          collection: "Discover more options",
          pdp_product_alternatives: "Discover more options",
          pdp_rediscovery_purchased: "Buy it again",
          pdp_rediscovery_views: "Your views",
          pdp_discovery_top_performing: "Top-rated products",
          pdp_discovery_newness: "Best-selling new arrivals",
          pdp_discovery_deals: "Deals on trending products",
          adaptive_postreviewsubmit_01: "Your views",
        },
        o = [
          "pdp_product_alternatives",
          "pdp_discovery_top_performing",
          "pdp_discovery_newness",
          "pdp_discovery_deals",
        ];
    },
    13141: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => ae });
      var l = a(37876),
        i = a(14232),
        o = a(40123),
        d = a.n(o),
        r = a(32381),
        n = a(53915),
        s = a(59010),
        u = a(3576),
        c = a(62701),
        p = a(95408),
        m = a(4042),
        _ = a(3422),
        h = a(32038),
        g = a(42923);
      a(41371), a(49516), a(20172), a(40196), a(97239);
      var y = a(68189);
      a(9248), a(32293), a(35840), a(70798), a(73473), a(80663);
      var v = a(10754);
      a(61717);
      var P = a(1022);
      a(85647), a(65205), a(82266), a(9623);
      var f = a(98650),
        x = a(38457),
        b = a(53663),
        D = a(3347),
        A = a(96457);
      a(93132), a(98697), a(10426);
      var E = a(13967);
      a(23146);
      var C = a(4594);
      let w = async (e) => ({});
      var T = a(70578),
        I = a(99893),
        S = a(75661),
        R = a(27581),
        N = a(59931),
        j = a(29733),
        k = a(33232),
        L = a(20859),
        O = a(60263),
        F = a(6908),
        M = a(42773),
        B = a(53004),
        G = a(30997),
        V = a(73208),
        z = a(46846),
        H = a(30114),
        U = a.n(H);
      let W = () => {
        var e;
        let t = (0, G.T)(),
          a = null != (e = (0, V.EJ)(h.Gp)) ? e : "";
        return (0, l.jsxs)("div", {
          "data-test": "productNotFound",
          children: [
            (0, l.jsx)("div", {
              className: "h-margin-a-default h-margin-b-jumbo h-text-grayDark",
              children:
                t && a
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsxs)(O.Z, {
                          className: U().productNotFoundCard,
                          children: [
                            (0, l.jsx)(F.V, {
                              alt: t,
                              aspectRatio: "1x1",
                              className: U().productNotFoundImage,
                              "data-test": "productNotFoundImage",
                              height: "80px",
                              src: a,
                            }),
                            (0, l.jsxs)(M.D, {
                              className: "h-margin-l-x2",
                              level: 1,
                              size: 4,
                              children: [
                                t,
                                (0, l.jsx)("div", {
                                  className: U().productWarningWrapper,
                                  children: "This item is not available",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("hr", { className: U().divider }),
                      ],
                    })
                  : (0, l.jsx)(B.j, {
                      headingLevel: 1,
                      title: "Item not available",
                      children:
                        "We’re sorry, but the item you’re looking for is not available at Target",
                    }),
            }),
            (0, l.jsx)("div", {
              children: (0, l.jsx)(z.RecommendationCarousel, {
                placementId: v.CH.ADAPTPDPNOTFOUND01,
                shouldUseTcinFromUrl: !0,
              }),
            }),
          ],
        });
      };
      W.displayName = "ProductNotFound";
      var K = a(42252),
        q = a(91996),
        J = a(51894),
        Y = a(15046);
      let Q = (e) => {
        let { asPath: t } = (0, K.rd)(),
          a = (0, V.EJ)(h.CN),
          o = e.adUnitPath,
          d = (0, Y.$)(),
          r = (0, i.useCallback)(() => {
            let e = [
              (0, q.Uc)({
                pos: "ss",
                pageType: "productdetails",
                adUnitPath: o,
                sizeMapping: q.Vh,
                targeting: d,
              }),
              (0, E.gv)(o, "productdetails", d),
            ];
            return (
              a ||
                e.push(
                  (0, q.Uc)({
                    pos: "block1",
                    pageType: "productdetails",
                    adUnitPath: o,
                    sizeMapping: q.h3,
                    targeting: d,
                  }),
                  (0, q.Uc)({
                    as: "productdetailssskinny",
                    pos: "sskinny",
                    pageType: "productdetails",
                    adUnitPath: o,
                    sizeMapping: q.h3,
                    targeting: d,
                  }),
                  (0, q.Uc)({
                    pos: "rightcol",
                    pageType: "productdetails",
                    adUnitPath: o,
                    sizeMapping: q.h3,
                    targeting: d,
                  })
                ),
              e
            );
          }, [o, a, d]);
        return (0, l.jsx)(J.E, (0, u._)({ getAdSlots: r }, e), t);
      };
      Q.displayName = "UseGptComponentForPdp";
      var $ = a(91038),
        X = a(10244),
        Z = a(61793),
        ee = a(16468);
      let et = () => {
        var e;
        let {
            setHealthPrivacyStatus: t,
            healthPrivacyStatus: a,
            stateOfResidence: l,
          } = (0, ee.qf)(),
          o = (0, V.EJ)((0, $.Dy)(null != l ? l : "")),
          d = (0, V.EJ)(Z.t1),
          { isSuccess: r, isError: n } = null != (e = (0, V.EJ)(X.aC)) ? e : {},
          s = r || n;
        return (
          (0, i.useEffect)(() => {
            a !== ee.lz.NotRequired && s && (d || (l && !o))
              ? t(ee.lz.NotRequired)
              : a !== ee.lz.Required && s && o && t(ee.lz.Required);
          }, [a, s, d, o, t, l]),
          null
        );
      };
      et.displayName = "HealthPrivacyCheckProductDetailPage";
      var ea = a(72720),
        el = a(66363),
        ei = a(72396),
        eo = a(36637),
        ed = a(79462),
        er = a(90522),
        en = a(33508),
        es = a(94259),
        eu = a(14010),
        ec = a(58111),
        ep = a(18673),
        em = a(74820),
        e_ = a(98601),
        eh = a(77232);
      (0, eh.Ay)(em.y).withConfig({ componentId: "sc-ca68fdc0-0" })(
        [
          "padding-top:410px;height:fit-content;@media (min-width:",
          "){padding-top:385px;}",
        ],
        e_.fi.md
      );
      let eg = eh.Ay.div.withConfig({ componentId: "sc-ca68fdc0-1" })(
          [
            "display:flex;flex-direction:column;align-items:center;margin:",
            " ",
            ";",
          ],
          e_.xe.generic.x10,
          e_.xe.generic.x4
        ),
        ey = eh.Ay.div.withConfig({ componentId: "sc-ca68fdc0-2" })(
          ["color:", ";margin-top:", ";"],
          e_.Tj.palette.gray.dark,
          e_.xe.generic.x4
        ),
        ev = () => {
          let e = (0, p.Mv)("IS_BACK_TO_PINTEREST_BUTTON_ENABLED"),
            t = (0, i.useCallback)(() => {
              {
                var e, t, a, l, i, o, d, r;
                let n =
                    null == (t = window) || null == (e = t.navigator)
                      ? void 0
                      : e.userAgent,
                  s = /android/i.test(n);
                /iphone|ipad|ipod/i.test(n) &&
                  (null == (o = window) ||
                    null == (i = o.webkit) ||
                    null == (l = i.messageHandlers) ||
                    null == (a = l.TargetAccountLinkingInterfaceHandler) ||
                    a.postMessage(
                      JSON.stringify({
                        messageCode: "CLOSE_VIEW",
                        messageDetails:
                          "Sending close webView message for iOS, User-Agent: ".concat(
                            n
                          ),
                        url: "",
                      })
                    ),
                  console.log("send close to ios")),
                  s &&
                    (null == (r = window) ||
                      null == (d = r.TargetAccountLinkingInterfaceHandler) ||
                      d.postMessage(
                        JSON.stringify({
                          messageCode: "CLOSE_VIEW",
                          messageDetails:
                            "Sending close webView message for Android, User-Agent: ".concat(
                              n
                            ),
                          url: "",
                        })
                      ),
                    console.log("send close to ios"));
              }
            }, []);
          return (0, l.jsx)(eo.m, {
            children: (0, l.jsxs)(eg, {
              children: [
                (0, l.jsx)(F.V, {
                  alt: "",
                  className: "h-margin-b-default",
                  height: "232px",
                  src: "https://target.scene7.com/is/content/Target/GUEST_b4717f60-75f6-4a99-bedd-70599dfe8b07",
                }),
                (0, l.jsxs)("div", {
                  className: "h-text-center",
                  children: [
                    (0, l.jsx)("h1", {
                      children: "Something went wrong on our end.",
                    }),
                    (0, l.jsx)(ey, {
                      className: "h-flex-align-center",
                      children: "Close the browser to return to Pinterest",
                    }),
                  ],
                }),
                e &&
                  (0, l.jsx)(ep.$, {
                    className: "h-margin-t-default",
                    "data-test": "closeView",
                    onClick: t,
                    variant: "outlined",
                    children: "Close this window",
                  }),
              ],
            }),
          });
        };
      ev.displayName = "SocialError";
      var eP = a(57787),
        ef = a(29072),
        ex = a(34097),
        eb = a(64834),
        eD = a(19434),
        eA = a(35914),
        eE = a(18847),
        eC = a.n(eE);
      let ew = eC()(
        () =>
          Promise.all([a.e(2394), a.e(338), a.e(989), a.e(1358), a.e(3139)])
            .then(a.bind(a, 11560))
            .then((e) => e.AllQuestions),
        { loadableGenerated: { webpack: () => [11560] } }
      );
      ew.displayName = "AllQuestions";
      var eT = a(93967);
      let eI = eC()(
          () =>
            Promise.all([a.e(2500), a.e(316)])
              .then(a.bind(a, 13406))
              .then((e) => e.JsonLd),
          { loadableGenerated: { webpack: () => [13406] } }
        ),
        eS = (e) => {
          let { regionId: t, storeId: a } = e;
          return (0, l.jsx)(eT.H, {
            action: "error_boundary_load_json_ld",
            children: (0, l.jsx)(eI, { regionId: t, storeId: a }),
          });
        };
      eS.displayName = "JsonLD";
      var eR = a(235),
        eN = a(78654),
        ej = a(47125),
        ek = a(1800),
        eL = a(51622),
        eO = a(56788),
        eF = a(25222),
        eM = a(47641),
        eB = a(85055);
      let eG = "@web/pdp/SeoProductGroupSelect",
        eV = (e) => {
          let { storeId: t, regionId: a } = e,
            { asPath: i } = (0, K.rd)(),
            o = (0, V.K1)(h.hw),
            d = (0, V.EJ)(h.hw),
            r = (0, V.K1)(eR.Fl),
            n = (0, V.K1)(eR.CJ),
            s = (0, V.EJ)(eN.J4),
            u = (0, eO.e)({ storeId: t, regionId: a }),
            {
              selectedCurrentPrice: c,
              selectedHidePrice: _,
              selectedComparisonPrice: g,
            } = (0, eF.B)(),
            { currentPrice: y, comparisonPrice: v } = (0, eF.P)({
              selectedCurrentPrice: c,
              selectedHidePrice: _,
              selectedComparisonPrice: g,
            }),
            { availability: P } = u,
            f = (0, eM.v)();
          return (0, l.jsxs)("div", {
            className: "h-margin-a-default",
            "data-child-type-code": o,
            "data-is-on-parent-or-standalone-tcin": (0, eM.v)(),
            "data-parent-type-code": d,
            "data-test": "@web/pdp/SeoPriceAndFulfillmentContent",
            children: [
              (0, p.Mv)("SEO_PRODUCT_GROUP_ENABLED") &&
              (0, eL.Od)(i, eL.a4) &&
              f &&
              s &&
              (!t || t === m.Vz) &&
              !a
                ? (0, l.jsx)(ej.l, {
                    "data-test": eG,
                    id: eG,
                    label: "Select Product Variation",
                    options: (() => {
                      let e = [];
                      return (
                        null == s ||
                          s.forEach((t) => {
                            var a, l, i, o;
                            let d =
                                null == t ||
                                null == (l = t.item) ||
                                null == (a = l.product_description)
                                  ? void 0
                                  : a.title,
                              r =
                                null == t ||
                                null == (o = t.item) ||
                                null == (i = o.enrichment)
                                  ? void 0
                                  : i.buy_url;
                            d &&
                              r &&
                              e.push({ label: (0, ek.D4)(d), value: r });
                          }),
                        e
                      );
                    })(),
                  })
                : (0, l.jsxs)(l.Fragment, {
                    children: [
                      y &&
                        (0, l.jsx)("div", {
                          "data-test": "@web/pdp/SeoProductPriceId",
                          children: (() =>
                            _
                              ? y
                              : v
                              ? "$".concat(
                                  y,
                                  " sale price when purchased online"
                                )
                              : "$".concat(y, " when purchased online"))(),
                        }),
                      v &&
                        (0, l.jsxs)("div", {
                          "data-test": "@web/pdp/SeoProductComparisonPriceId",
                          children: [
                            (0, l.jsxs)("span", {
                              className: "h-text-line-through",
                              children: ["$", v],
                            }),
                            " list price",
                          ],
                        }),
                      P &&
                        (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)("button", {
                              "data-test":
                                "@web/pdp/SeoProductFulfillmentButtonId",
                              type: "button",
                              children: (0, l.jsx)("p", {
                                children: (() => {
                                  switch (P) {
                                    case eB.h.InStock:
                                      return "In Stock";
                                    case eB.h.OutOfStock:
                                      return "Out of Stock";
                                    case eB.h.PreOrder:
                                      return "Pre-order";
                                    default:
                                      return "";
                                  }
                                })(),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              "data-test": "@web/pdp/StoreLocationData",
                              children: [
                                a && "Region #".concat(a, " near "),
                                "Target",
                                " ",
                                t === m.Vz && "Online",
                                " store #",
                                t,
                              ],
                            }),
                            (0, l.jsx)("br", {}),
                            (P === eB.h.InStock || P === eB.h.PreOrder) &&
                              (0, l.jsx)("button", {
                                className:
                                  "h-border-a h-padding-a-x2 h-margin-t-tight",
                                "data-test":
                                  "@web/pdp/SeoProductAddToCartButtonId",
                                type: "button",
                                children:
                                  P === eB.h.PreOrder
                                    ? "Preorder now"
                                    : "Add to cart",
                              }),
                          ],
                        }),
                    ],
                  }),
              r &&
                n &&
                (0, l.jsxs)("address", {
                  className: "h-margin-t-tight",
                  children: [
                    (0, l.jsx)("div", {
                      "data-test": "@web/pdp/SeoStoreNameId",
                      children: r,
                    }),
                    (0, l.jsxs)("div", {
                      "data-test": "@web/pdp/SeoStoreAddressId",
                      children: [
                        (0, l.jsxs)("div", {
                          children: [n.address_line1, " "],
                        }),
                        (0, l.jsxs)("div", {
                          children: [n.city, ", ", n.state, " ", n.postal_code],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
      eV.displayName = "SeoPriceAndFulfillmentContent";
      var ez = a(55472),
        eH = a(26989),
        eU = a(13650);
      let eW = eC()(
        () =>
          Promise.all([
            a.e(2394),
            a.e(338),
            a.e(939),
            a.e(8002),
            a.e(7218),
            a.e(3117),
            a.e(3742),
            a.e(7150),
          ])
            .then(a.bind(a, 52614))
            .then((e) => e.ProductDetailPageAboveTheFoldSeoInner),
        { loadableGenerated: { webpack: () => [52614] } }
      );
      eW.displayName = "ProductDetailPageAboveTheFoldSeo";
      var eK = a(77658);
      let eq = () => {
        let { screenSmMax: e } = (0, ez.e)(),
          { isBot: t } = (0, i.useContext)(es.B.Context),
          a = (0, V.K1)(eH.Gs);
        return t && !(0, p.Mv)(f.bt)
          ? (0, l.jsx)(eW, {})
          : e
          ? (0, l.jsx)(eU.N7, {
              children: (0, l.jsx)(eK.Q, {
                zoneId: "ProductDetailAboveTheFoldMobile",
              }),
            })
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(eU.he, {
                  children: (0, l.jsx)(eK.Q, { zoneId: "ProductDetailTop" }),
                }),
                (0, l.jsxs)(eU.h8, {
                  childOrStandaloneTcin: a,
                  children: [
                    (0, l.jsx)(eU.Zu, {
                      children: (0, l.jsx)(eK.Q, {
                        zoneId: "ProductDetailAboveTheFoldLeft",
                      }),
                    }),
                    (0, l.jsx)(eU.w2, {
                      children: (0, l.jsx)(eU.jk, {
                        id: "above-the-fold-information",
                        tabIndex: -1,
                        children: (0, l.jsx)(eK.Q, {
                          zoneId: "ProductDetailAboveTheFoldRight",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            });
      };
      eq.displayName = "ProductDetailPageAboveTheFold";
      let eJ = eC()(
        () =>
          Promise.all([
            a.e(3103),
            a.e(6397),
            a.e(6097),
            a.e(5023),
            a.e(6143),
            a.e(8764),
            a.e(2994),
            a.e(3738),
          ])
            .then(a.bind(a, 50169))
            .then((e) => e.ProductDetailPageBelowTheFoldSeo),
        { loadableGenerated: { webpack: () => [50169] } }
      );
      eJ.displayName = "ProductDetailPageBelowTheFoldSeo";
      let eY = eC()(
        () =>
          Promise.all([
            a.e(6397),
            a.e(6097),
            a.e(579),
            a.e(6738),
            a.e(4755),
            a.e(2365),
            a.e(1331),
            a.e(2394),
            a.e(338),
            a.e(1178),
            a.e(9232),
            a.e(6974),
            a.e(8562),
            a.e(9003),
            a.e(4899),
            a.e(9949),
          ])
            .then(a.bind(a, 15060))
            .then((e) => e.ProductDetailPageCollections),
        { loadableGenerated: { webpack: () => [15060] } }
      );
      eY.displayName = "ProductDetailPageCollections";
      let eQ = eC()(
        () =>
          a
            .e(9503)
            .then(a.bind(a, 30048))
            .then((e) => e.ProductDetailPageBelowTheFold),
        { loadableGenerated: { webpack: () => [30048] } }
      );
      eQ.displayName = "ProductDetailPageBelowTheFold";
      var e$ = a(99105),
        eX = a(58206),
        eZ = a(36414),
        e0 = a(74463),
        e1 = a(18551),
        e2 = a(50301),
        e3 = a(92642);
      let e4 = (e) => {
        let {
            queryResultPdpPersonalized: t,
            queryResultCircleOffers: a,
            children: o,
          } = e,
          d = (0, V.K1)(e$.rW),
          [r, n] = (0, i.useState)(),
          [s, u] = (0, i.useState)(!1),
          [c, p] = (0, i.useState)(),
          [m] = (0, e1.RJ)(),
          _ = m(e2.xF),
          [h, g] = (0, i.useState)(""),
          y = (0, eX._)(c),
          v = (0, i.useMemo)(
            () => ({
              childPartNumber: s ? d : void 0,
              isExtendedServicePlanCheckboxChecked: s,
              setIsExtendedServicePlanCheckboxChecked: u,
              quantityOverride: r,
              setQuantityOverride: n,
              isQuantityDropdownBesideAddToCartButtonEnabled: !0,
              selectedFulfillmentMethod: c,
              setSelectedFulfillmentMethod: p,
              customGiftCardAmount: h,
              setCustomGiftCardAmount: g,
              addToCartButtonOverrideForSocialSandbox: e0.y
                ? (0, l.jsx)(e3.SocialBuyNowButton, {
                    fulfillmentIntent: y,
                    isCircle360ActivePaidMember: _,
                  })
                : null,
              isPromotionDataSuccessOrError:
                ((null == a ? void 0 : a.isSuccess) ||
                  (null == a ? void 0 : a.isError)) &&
                ((null == t ? void 0 : t.isSuccess) ||
                  (null == t ? void 0 : t.isError)),
              shouldProductDetailViewTrackingWaitForPromotionData: !0,
            }),
            [
              s,
              d,
              r,
              c,
              h,
              y,
              _,
              null == a ? void 0 : a.isError,
              null == a ? void 0 : a.isSuccess,
              null == t ? void 0 : t.isError,
              null == t ? void 0 : t.isSuccess,
            ]
          ),
          P = (0, V.nR)(),
          f = (0, V.K1)(eH.Gs);
        return (
          (0, i.useEffect)(() => {
            f && P(f);
          }, [f, P]),
          (0, l.jsx)(eZ.dn.Provider, { value: v, children: o })
        );
      };
      e4.displayName = "AddToCartPurchaseContextProvider";
      let e5 = (0, i.memo)((e) => {
        let {
            queryResultPdpPersonalized: t,
            queryResultCircleOffers: a,
            storeIdFromParam: o,
            regionId: d,
          } = e,
          { isBot: n } = (0, i.useContext)(es.B.Context),
          s = (0, K.rd)(),
          { postSocialAddToCartResult: u } = (0, eo.E)(),
          c = (0, E.k$)(null == s ? void 0 : s.query),
          m = (0, V.EJ)(h.CN),
          g = (0, V.EJ)(h.Zr),
          y = (0, V.EJ)(j.gt),
          v = (0, eb.a)(y),
          P = (0, ec.p)();
        (() => {
          var e;
          let t = (0, ec.p)(),
            a = (0, ex.B)(),
            l =
              null == (e = (0, i.useContext)(ef.q))
                ? void 0
                : e.hasBeenCalledAtLeastOnceOnClient,
            { query: o } = (0, K.rd)();
          (0, i.useEffect)(() => {
            if (!l) return;
            let e = (0, _.xs)(o, "prehydrateClick");
            (a || e) &&
              (t("PRODUCT_DETAIL_PAGE_TRAFFIC_AWARE_LAYOUT_ENABLED"),
              t(
                "PRODUCT_DETAIL_PAGE_TRAFFIC_AWARE_WITH_SERVERSIDE_RENDERING_LAYOUT_ENABLED"
              ));
          }, [t, o, a, l]);
        })();
        let { checkIsExperimentEnabledAndTrackFireflyEvent: x } = (0, ei.G)(
          "PRODUCT_DETAIL_PAGE_TRAFFIC_AWARE_WITH_SERVERSIDE_RENDERING_LAYOUT_ENABLED"
        );
        (0, eD._)(
          "PRODUCT_DETAIL_PAGE_TRAFFIC_AWARE_WITH_SERVERSIDE_RENDERING_LAYOUT_ENABLED"
        );
        let b = !(0, r.Y)(),
          D = (0, i.useCallback)((e) => !!(b && e), [b]),
          { checkIsExperimentEnabledAndTrackFireflyEvent: A } = (0, ei.G)(
            "SET_LOCATION_COOKIES_FOR_ANONYMOUS_ESTIMATE_GUESTS_ENABLED",
            { checkIsExperimentEnabledWithCustomConditions: D }
          );
        (0, eD._)(
          "SET_LOCATION_COOKIES_FOR_ANONYMOUS_ESTIMATE_GUESTS_ENABLED",
          { checkIsExperimentEnabledWithCustomConditions: D }
        );
        let { checkIsExperimentEnabledAndTrackFireflyEvent: C } = (0, ei.G)(
          "PRODUCT_DETAIL_SERVER_SIDE_RENDER_PRICE_ENABLED",
          { checkIsExperimentEnabledWithCustomConditions: D }
        );
        (0, eD._)("PRODUCT_DETAIL_SERVER_SIDE_RENDER_PRICE_ENABLED", {
          checkIsExperimentEnabledWithCustomConditions: D,
        });
        let { checkIsExperimentEnabledAndTrackFireflyEvent: w } = (0, ei.G)(
          "EXPERIMENT_PRODUCT_DETAIL_SERVER_SIDE_RENDER_FULFILLMENT_ENABLED",
          { checkIsExperimentEnabledWithCustomConditions: D }
        );
        return ((0, eD._)(
          "EXPERIMENT_PRODUCT_DETAIL_SERVER_SIDE_RENDER_FULFILLMENT_ENABLED",
          { checkIsExperimentEnabledWithCustomConditions: D }
        ),
        (0, i.useEffect)(() => {
          A(), x(), C(), w();
        }, [x, A, C, w]),
        !1 === u)
          ? (0, l.jsx)(ev, {})
          : m
          ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(eY, {}), (0, l.jsx)(eA.l, {})],
            })
          : c
          ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(ew, {}), (0, l.jsx)(eA.l, {})],
            })
          : ("TOYS" === g && P("PRODUCT_DETAIL_PAGE_TOY_LAYOUT_ENABLED"),
            (0, l.jsxs)(l.Fragment, {
              children: [
                n &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(eP.M, { breadcrumbs: v || [] }),
                      (0, l.jsx)(eS, { regionId: d, storeId: o }),
                    ],
                  }),
                (0, l.jsx)("div", {
                  children: (0, l.jsx)(eu.v, {
                    children: (0, l.jsx)(e4, {
                      queryResultCircleOffers: a,
                      queryResultPdpPersonalized: t,
                      children: (0, l.jsx)(eq, {}),
                    }),
                  }),
                }),
                n
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        !(0, p.Mv)(f.bt) &&
                          (0, l.jsx)(eV, { regionId: d, storeId: o }),
                        (0, l.jsx)(eJ, {}),
                      ],
                    })
                  : (0, l.jsx)(eQ, {}),
              ],
            }));
      });
      e5.displayName = "ProductDetailPageLayout";
      var e7 = a(31294),
        e6 = a(14901),
        e9 = a(62737),
        e8 = a(88368);
      let te = () => {
        let e = !!(0, e7.W)()(),
          t = (0, V.K1)(X.W1),
          a = (0, i.useCallback)(() => {
            e && t && (e6.L.recordPageRefreshTime(), (0, e8.q)("page_refresh"));
          }, [e, t]);
        return (0, e9.Y)(a), null;
      };
      te.displayName = "ProductDetailPageMetrics";
      var tt = a(25012),
        ta = a(951),
        tl = a(41112);
      let ti = () => {
        let e = !!(0, V.K1)(tt.X_),
          t = (0, V.K1)(ta.uo),
          a = (0, V.EJ)(eH.Gs),
          l = (0, tl.s)({ pageKey: "pdp", type: "primary-content" }),
          o = (0, tl.s)({ pageKey: "pdp", type: "call-to-action" }),
          d = (0, i.useRef)(void 0),
          r = (0, i.useCallback)(() => {
            e && (l(), (0, e8.q)("primary_content"));
          }, [l, e]),
          n = (0, i.useCallback)(() => {
            t &&
              a !== d.current &&
              ((d.current = a), o(), (0, e8.q)("call_to_action"));
          }, [o, t, a]);
        return (0, e9.Y)(r), (0, e9.Y)(n), null;
      };
      ti.displayName = "ProductDetailPagePerformanceMetrics";
      var to = a(19351),
        td = a(73880);
      let tr = () => {
        let { trackEvent: e } = (0, to.z1)(),
          [t, a] = (0, i.useState)(!1),
          l = (0, V.K1)(eH.Gs),
          o = (0, td.Z)(l),
          d = (0, V.K1)(ta.y5),
          r = (0, V.EJ)(h.CN),
          n = l === d;
        return (
          (0, i.useEffect)(() => {
            o && !r && l !== o && a(!0);
          }, [l, r, o]),
          (0, i.useEffect)(() => {
            t &&
              n &&
              setTimeout(() => {
                e({ guest: { eventType: "childtcin" } });
              });
          }, [e, t, n]),
          null
        );
      };
      tr.displayName = "ProductDetailPageTrackChildTcin";
      var tn = a(7690),
        ts = a.n(tn),
        tu = a(59095),
        tc = a.n(tu),
        tp = a(69107),
        tm = a(5990),
        t_ = a(53210),
        th = a(50085),
        tg = a(45123);
      let ty = (0, i.createContext)({ hasTrackedPageLoad: !1 });
      ty.displayName = "TrackPageLoadContext";
      var tv = a(59614),
        tP = a(73232),
        tf = a(12111);
      let tx = (e) => {
          var t;
          return null == e || null == (t = e.data) ? void 0 : t.product;
        },
        tb = (e) => {
          var t;
          return null == e || null == (t = e.metadata) ? void 0 : t.isError;
        },
        tD = (e) =>
          (0, tf.DL)(e) ? (null == e ? void 0 : e.experiments_viewed) : void 0,
        tA = (e) => {
          var t;
          return (0, tf.DL)(e)
            ? null == e || null == (t = e.predictive_search)
              ? void 0
              : t.search_term
            : void 0;
        };
      var tE = a(68126);
      let tC = (e) => {
        let {
            isEnhancedPayloadReady: t,
            isPageContentError: a,
            setHasTrackedPageLoad: l,
          } = e,
          { trackEvent: o } = (0, to.z1)(),
          d = !!(0, e7.W)()(),
          [r, n] = (0, i.useState)(!1),
          s = (0, V.EJ)(eH.Gs),
          u = (0, V.K1)(eH.Gs),
          c = (0, td.Z)(s),
          p = (0, V.K1)(ta.y5),
          m = (0, V.EJ)(h.CN),
          _ = u === p;
        (0, i.useEffect)(() => {
          (s && s === c) || (n(!0), l(!1));
        }, [s, c, l]);
        let g = (0, tE.p)(),
          y = (0, i.useCallback)(() => {
            if (a || (t && d && g))
              r &&
                (_ || m) &&
                setTimeout(() => {
                  n(!1),
                    o({ guest: { eventType: "pageload" }, experience: g }),
                    l(!0);
                });
          }, [g, d, r, m, t, _, a, l, o]);
        return (0, e9.Y)(y), null;
      };
      tC.displayName = "ProductDetailPageTrackPageLoad";
      let tw = (e) => {
        var t, a, o;
        let {
            isPageContentError: r,
            children: n,
            queryResultCircleOffers: s,
          } = e,
          p = (0, V.EJ)(h.CN),
          m = (0, V.K1)(X.W1),
          _ = (0, V.K1)(X.yM),
          g =
            (null == s ? void 0 : s.isSuccess) ||
            (null == s ? void 0 : s.isError),
          y = (0, th.v_)(),
          v = (0, th.Ny)(),
          {
            productFulfillmentForTracking: P,
            isTrackingNodeProductFulfillmentReady: f,
          } = (0, th.W$)(),
          x = (0, V.K1)(tt.xA),
          b = null != (t = (0, V.K1)(t_.hA)) ? t : [],
          D = null == b ? void 0 : b.map((e) => (null == e ? void 0 : e.id)),
          A = null != (a = (0, V.K1)(tp.pj)) ? a : [],
          E =
            null == A
              ? void 0
              : A.map((e) => (null == e ? void 0 : e.promotion_id)),
          C = null != (o = (0, V.K1)(tp.pU)) ? o : [],
          w = (0, V.K1)(tp.pD),
          T =
            null == C
              ? void 0
              : C.map((e) => (null == e ? void 0 : e.promotion_id)),
          I = tc()(ts()(x, D, T, E)).map((e) => ({ id: e }));
        w &&
          I.push(
            ...w.map((e) => {
              var t;
              return { id: null != (t = e.id) ? t : "", name: e.description };
            })
          );
        let S =
            null == b
              ? void 0
              : b.map((e) => ({
                  name: (0, tg.qx)(e),
                  type: (0, tg.hV)(e),
                  ivyPromoId: null == e ? void 0 : e.id,
                })),
          R = [...A, ...C].map((e) => ({
            name: (0, tg.Wz)(e),
            type: (0, tg.zs)(e),
            ivyPromoId: null == e ? void 0 : e.promotion_id,
          })),
          N =
            null == w
              ? void 0
              : w.map((e) => ({
                  name: e.description,
                  type: "mass",
                  ivyPromoId: e.id,
                })),
          j = tc()(ts()(S, R, N)),
          k = (0, V.EJ)(tD),
          L = (0, tP.h)(k ? [k] : void 0),
          O = (0, V.EJ)(tA),
          { setPredictiveSearchTerm: F } = (0, tm.u)();
        (0, i.useEffect)(() => {
          F(O);
        }, [O, F]);
        let M = (0, i.useCallback)(
            (e) => {
              var t;
              return (0, c._)((0, u._)({}, e), {
                appState: (0, c._)((0, u._)({}, e.appState), {
                  pageSubType: p ? "PDP Collection" : void 0,
                }),
                experimentsViewed: L,
                pdp: y,
                productFulfillment: p ? void 0 : P,
                products: [
                  ...(null != v ? v : []),
                  ...(null != (t = e.products) ? t : []),
                ],
                promotionInfo: p || d()(I) ? void 0 : { promos: j },
              });
            },
            [p, L, y, P, v, I, j]
          ),
          B = !!(m && g && (p || _) && f),
          [G, z] = (0, i.useState)(B);
        (0, i.useEffect)(() => {
          B && z(!0);
        }, [B]);
        let [H, U] = (0, i.useState)(!1),
          W = (0, i.useMemo)(() => ({ hasTrackedPageLoad: H }), [H]);
        return (0, l.jsxs)(tv.O, {
          makeEnhancedPayload: M,
          children: [
            G || r
              ? (0, l.jsx)(tC, {
                  isEnhancedPayloadReady: B,
                  isPageContentError: r,
                  setHasTrackedPageLoad: U,
                })
              : null,
            (0, l.jsx)(ty.Provider, { value: W, children: n }),
          ],
        });
      };
      tw.displayName = "ProductDetailPageWithTrackingPayload";
      var tT = a(78502),
        tI = a(10294);
      let tS = (e) => (null == e ? void 0 : e.product);
      var tR = a(1814),
        tN = a(88044),
        tj = a(37294),
        tk = a(81994),
        tL = a(48603),
        tO = a(95636),
        tF = a(87323);
      let tM = function () {
          let { enabled: e = !0 } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = (0, K.rd)(),
            a = (0, _.aZ)(t.asPath),
            { preferredStoreId: l, enabled: i } = (0, tO._f)(),
            o = (0, tL.x7)();
          return (0, tF.C)(
            { tcin: a, member_id: o, store_id: l },
            { enabled: e && i }
          );
        },
        tB = (0, a(38333).A)((e) => {
          var t, a, l, i, o, d, r, n, s;
          let u =
            null ==
              (o = (
                null !=
                (s =
                  null == (l = window) ||
                  null == (a = l.__TGT_DATA__) ||
                  null == (t = a.__PRELOADED_QUERIES__)
                    ? void 0
                    : t.queries)
                  ? s
                  : []
              ).find((e) => {
                var t;
                return (null == (t = e[0]) ? void 0 : t[0]) === y.lY;
              })) || null == (i = o[1])
              ? void 0
              : i.data;
          if (
            (null == u || null == (d = u.product) ? void 0 : d.tcin) === e ||
            (null == u || null == (n = u.product) || null == (r = n.children)
              ? void 0
              : r.find((t) => t.tcin === e))
          )
            return null == u ? void 0 : u.product;
        });
      var tG = a(95500),
        tV = a(10557),
        tz = a(75986),
        tH = a(85167);
      let tU = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
          return null == e
            ? void 0
            : e
                .filter((e) => e.state.status === tH.RE.Success)
                .reverse()
                .slice(0, t);
        },
        tW = (e) =>
          e.parent
            ? (0, c._)((0, u._)({ __PRELOADED_FROM_PLP__: !0 }, e.parent), {
                __typename: "Product",
                children: [
                  (0, c._)((0, u._)({}, e), { __typename: "Product" }),
                ],
              })
            : (0, c._)((0, u._)({ __PRELOADED_FROM_PLP__: !0 }, e), {
                __typename: "Product",
              }),
        tK = (e, t) => {
          var a, l;
          if (!e && !t) return;
          if (e && !t) return e;
          if (!e && t) return t;
          if (
            !(null == e ? void 0 : e.children) ||
            !(null == t ? void 0 : t.children)
          )
            return (0, u._)({}, e, t);
          let i = [
              ...(null != (a = null == e ? void 0 : e.children) ? a : []),
              ...(null != (l = null == t ? void 0 : t.children) ? l : []),
            ],
            o = new Map();
          for (let e of i) {
            if (!e.tcin) continue;
            let t = o.get(e.tcin);
            o.set(e.tcin, t ? (0, u._)({}, t, e) : e);
          }
          return (0, c._)((0, u._)({}, e, t), {
            children: Array.from(o.values()),
          });
        };
      var tq = a(17379),
        tJ = a(19427),
        tY = a(70418),
        tQ = a(53842),
        t$ = a(23021),
        tX = a(61870);
      let { useQuery: tZ } = (0, tq.T)({
          name: "site-top-of-funnel/domains/product/get-product-fulfillment-and-variation-hierarchy-v1",
          queryFn: async (e, t) => {
            var l;
            let {
                apiKey: i,
                baseUrl: o,
                apis: { product: d },
              } = (0, tJ.$)().services.redskyAggregations,
              { productFulfillmentAndVariationHierarchyV1: r } =
                null != (l = d.endpointPaths) ? l : {},
              n = (0, u._)({ key: i, required_store_id: e.store_id }, e),
              s = tY.o.buildURLWithParams(r, n, o),
              {
                data: c,
                ok: p,
                statusText: m,
              } = await (0, tQ.n)(
                s,
                (0, u._)(
                  {
                    partialErrorTag:
                      tX.O0
                        .REDSKY_AGGREGATIONS_PRODUCT_FULFILLMENT_AND_VARIATION_HIERARCHY_PARTIAL_API_ERROR,
                    debugImportQueryForGraphQLSourceMode: () =>
                      a.e(7156).then(a.t.bind(a, 37093, 17)),
                  },
                  t
                )
              );
            if (p) return (0, u._)({}, null == c ? void 0 : c.data);
            throw Error("".concat(m));
          },
        }),
        t0 = (e, t) => {
          var a;
          let [l, o] = (0, i.useState)(),
            [d, r] = (0, i.useState)({ isLoading: !1 }),
            { data: n, data_when_deferred: s } =
              null != (a = null != l ? l : null == e ? void 0 : e.module_data)
                ? a
                : {},
            u = null != n ? n : s,
            c = (0, i.useMemo)(() => {
              if (!(null == e ? void 0 : e.is_enrichment_deferred)) return t;
              let a = !d.isLoading && !!u,
                l = !d.isLoading && !u,
                i = a ? tH.RE.Success : l ? tH.RE.Error : tH.RE.Loading;
              return {
                isSuccess: a,
                isError: l,
                isLoading: d.isLoading,
                isIdle: !1,
                isFetching: d.isLoading,
                status: i,
              };
            }, [
              u,
              d.isLoading,
              null == e ? void 0 : e.is_enrichment_deferred,
              t,
            ]);
          return (0, i.useMemo)(
            () => ({
              product: null == u ? void 0 : u.product,
              queryResult: c,
              setModuleData: o,
              setModuleMetadata: r,
            }),
            [null == u ? void 0 : u.product, c]
          );
        },
        t1 = (e) => {
          let {
            isFetched: t,
            isFetching: a,
            isIdle: l,
            isSuccess: o,
            isError: d,
            status: r,
          } = e;
          return (0, i.useMemo)(
            () => ({
              isFetched: t,
              isFetching: a,
              isIdle: l,
              isSuccess: o,
              isError: d,
              status: r,
            }),
            [t, a, l, o, d, r]
          );
        };
      var t2 = a(65699),
        t3 = a(85684);
      let t4 = {},
        t5 = {
          ProductDetailWebDatasourceCore: {
            component: () => null,
            requiredInputs: ["store_id"],
          },
          ProductDetailWebDatasourcePersonalized: {
            component: () => null,
            requiredInputs: ["store_id"],
          },
          ProductDetailWebDatasourceCircleOffers: {
            component: () => null,
            requiredInputs: ["store_id"],
          },
          ProductDetailWebDatasourceFulfillmentAndVariations: {
            component: () => null,
            requiredInputs: [
              "circle_membership",
              "guest_location",
              "store_id",
              "scheduled_delivery_store_id",
            ],
          },
        },
        t7 = (e) => {
          var { moduleType: t, layoutResponse: a } = e,
            o = (0, t2._)(e, ["moduleType", "layoutResponse"]);
          let d = (0, C.hV)(t)(a),
            r = (0, C.IH)(a),
            n = (0, C.bF)(a),
            s = (0, i.useMemo)(
              () => (0, c._)((0, u._)({}, d), { key: "datasource-".concat(t) }),
              [d, t]
            );
          return d
            ? (0, l.jsx)(
                t3.n,
                (0, u._)(
                  {
                    conditionMap: t4,
                    isDatasourceModule: !0,
                    module: s,
                    moduleGroupId: "ProductDetailDatasource",
                    modulesToComponentsMap: t5,
                    pageContext: r,
                    pageType: n,
                    zoneId: "ProductDetailDatasource",
                  },
                  o
                )
              )
            : null;
        };
      t7.displayName = "ProductDetailDatasourceModule";
      let t6 = { minHeight: "100vh" },
        t9 = (e) => {
          let {
              storeIdFromParam: t,
              regionId: a,
              locationVariablesFromServer: o,
            } = e,
            [n, s] = (0, i.useState)(),
            { checkIsExperimentEnabledAndTrackFireflyEvent: v } = (0, ei.G)(
              "META_SHOPPING_EXPERIENCE_CONTROL"
            );
          (0, i.useEffect)(() => {
            v();
          }, [v]);
          let {
              childOrStandaloneTcin: f,
              doesCachedTcinMatchPathTcin: x,
              productDataWithFulfillmentAndFallbacks: b,
              isProductError: D,
              isProductFetching: w,
              isProductFulfillmentDataFromServer: O,
              wasProductFulfillmentDataEverFromServer: F,
              haveProductDetailCoreCallsCompleted: M,
              queryResultFulfillment: B,
              queryResultPdp: G,
              queryResultPdpPersonalized: V,
              queryResultCircleOffers: z,
              setDatasourceCoreModuleData: H,
              setDatasourceCoreModuleMetadata: U,
              setDatasourcePersonalizedModuleData: q,
              setDatasourcePersonalizedModuleMetadata: J,
              setDatasourceCircleOffersModuleData: Y,
              setDatasourceCircleOffersModuleMetadata: $,
              setDatasourceFulfillmentAndVariationHierarchyModuleData: X,
              setDatasourceFulfillmentAndVariationHierarchyModuleMetadata: Z,
            } = ((e) => {
              var t, a, l, o, n;
              let {
                  storeIdFromParam: s,
                  selectedTcinLocal: v,
                  locationVariablesFromServer: f,
                } = e,
                x = (0, K.rd)(),
                b = (0, _.aZ)(x.asPath),
                D = (0, P.pH)(x),
                { storeIdFromServer: E, zipCodeFromServer: w } =
                  null != f ? f : {},
                T = (0, A.K)().checkIsExperimentEnabledAndTrackFireflyEvent(),
                [I, S] = (0, y.uk)({
                  storeIdFromParam: s,
                  storeIdFromServer: E,
                  enabled: !T,
                }),
                R = I(tx),
                [N, j] = (0, tR.z)(),
                k = t1(j),
                {
                  product: L,
                  queryResult: O,
                  setModuleData: F,
                  setModuleMetadata: M,
                } = t0(N((0, C.hV)("ProductDetailWebDatasourceCore")), k),
                B = T ? O : S,
                { luxMark: G } = (0, tk.Z)();
              (0, i.useEffect)(() => {
                if (B.isSuccess) {
                  let e = "pdp_client_time_since_page_load";
                  e6.L.recordTimeSincePageLoad(e, "histogram_large"), G(e);
                }
              }, [B.isSuccess, G]);
              let V = T ? L : R,
                z =
                  null !=
                  (o =
                    null != v
                      ? v
                      : null == (t = (0, eN.X8)(D)(V))
                      ? void 0
                      : t.tcin)
                    ? o
                    : D,
                [H, U] = tM({ enabled: !T }),
                {
                  product: W,
                  queryResult: q,
                  setModuleData: J,
                  setModuleMetadata: Y,
                } = t0(
                  N((0, C.hV)("ProductDetailWebDatasourceCircleOffers")),
                  k
                ),
                Q = T ? q : U;
              (0, i.useEffect)(() => {
                if (Q.isSuccess) {
                  let e = "pdp_circle_offers_time_since_page_load";
                  e6.L.recordTimeSincePageLoad(e, "histogram_large"), G(e);
                }
              }, [G, Q.isSuccess]);
              let $ = T ? W : null == (a = H()) ? void 0 : a.product,
                X = (0, t_.R1)(z)($),
                Z = (0, i.useMemo)(() => tB(b), [b]),
                ee = (0, i.useMemo)(
                  () =>
                    ((e) => {
                      var t, a, l, i, o;
                      if (!e) return;
                      let d = (
                          (e) => (t) =>
                            e && (null == t ? void 0 : t.tcin) === e
                        )(e),
                        r = (0, tG.Db)(tz.X),
                        n = (0, tG.Db)(tV.ZO),
                        s = tU(r),
                        u = tU(n);
                      if (s || u) {
                        if (s)
                          for (let e of s) {
                            let l =
                                null == e || null == (t = e.state)
                                  ? void 0
                                  : t.data,
                              i =
                                null == l || null == (a = l.product_summaries)
                                  ? void 0
                                  : a.find(d);
                            if (i) return tW(i);
                          }
                        if (u)
                          for (let e of u) {
                            let t =
                                null == e || null == (l = e.state)
                                  ? void 0
                                  : l.data,
                              a =
                                null == t ||
                                null == (o = t.search) ||
                                null == (i = o.products)
                                  ? void 0
                                  : i.find(d);
                            if (a) return tW(a);
                          }
                      }
                    })(z),
                  [z]
                ),
                et = (0, i.useMemo)(() => tK(Z, V), [Z, V]),
                ea = null != et ? et : ee,
                ei = (0, h.CN)(ea),
                eo = null == ea ? void 0 : ea.tcin,
                {
                  productFulfillmentAndVariationHierarchy: ed,
                  queryResultFulfillmentAndVariationHierarchy: er,
                } = (() => {
                  let { luxMark: e } = (0, tk.Z)(),
                    [t, a] = ((e) => {
                      var t;
                      let a = (0, K.rd)(),
                        { isBot: l } = (0, i.useContext)(es.B.Context),
                        o = (0, _.aZ)(a.asPath),
                        {
                          fulfillmentVariablesForRedskyResolveStoreId: d,
                          isFulfillmentQueryEnabledForRedskyResolveStoreId: r,
                        } = (0, t$.F)(),
                        n =
                          (null == (t = null == e ? void 0 : e.enabled) || t) &&
                          r &&
                          !!o;
                      return tZ(
                        (0, c._)((0, u._)({}, d), {
                          is_bot: l,
                          tcin: null != o ? o : "",
                        }),
                        { enabled: n }
                      );
                    })({
                      enabled: !(0,
                      A.K)().checkIsExperimentEnabledAndTrackFireflyEvent(),
                    }),
                    l = a.isSuccess;
                  (0, i.useEffect)(() => {
                    let t = (0, el.Y)();
                    if (l && !t) {
                      let t =
                        "product_fulfillment_and_variation_hierarchy_time_since_page_load";
                      e6.L.recordTimeSincePageLoad(t, "histogram_large"), e(t);
                    }
                  }, [e, l]);
                  let o = t((e) => (null == e ? void 0 : e.product));
                  return (0, i.useMemo)(
                    () => ({
                      productFulfillmentAndVariationHierarchy: o,
                      queryResultFulfillmentAndVariationHierarchy: a,
                    }),
                    [o, a]
                  );
                })(),
                {
                  product: en,
                  queryResult: eu,
                  setModuleData: ec,
                  setModuleMetadata: ep,
                } = t0(
                  N(
                    (0, C.hV)(
                      "ProductDetailWebDatasourceFulfillmentAndVariations"
                    )
                  ),
                  k
                ),
                em = T ? eu : er,
                e_ = T ? en : ed,
                { isBot: eh } = (0, i.useContext)(es.B.Context),
                eg =
                  null !=
                  (n = (0, tj.Y)()
                    .EXPERIMENT_PRODUCT_DETAIL_SERVER_SIDE_RENDER_FULFILLMENT_ENABLED)
                    ? n
                    : null === p.Mv || void 0 === p.Mv
                    ? void 0
                    : (0, p.Mv)(
                        "PRODUCT_DETAIL_SERVER_SIDE_RENDER_FULFILLMENT_ENABLED"
                      ),
                ey = (0, P.pH)(x),
                ev = eg || eh ? ey : void 0,
                eP = s === m.Vz ? void 0 : s,
                [ef, ex] = (0, g.j)(
                  { is_bot: !0, tcin: ev, store_id: eh ? eP : E, zip: w },
                  { enabled: !1 }
                ),
                eb = null == (l = ef()) ? void 0 : l.product,
                eD = (0, i.useMemo)(
                  () =>
                    ((e, t) => {
                      var a;
                      if (!e) return;
                      let l = t
                          ? {
                              fulfillment: null == t ? void 0 : t.fulfillment,
                              store_positions:
                                null == t ? void 0 : t.store_positions,
                              notify_me_enabled:
                                null == t ? void 0 : t.notify_me_enabled,
                              tcin: null == t ? void 0 : t.tcin,
                              pay_per_order_charges:
                                null == t ? void 0 : t.pay_per_order_charges,
                            }
                          : void 0,
                        i = (null != (a = e.children) ? a : []).findIndex(
                          (e) => (0, eH.Gs)(e) === (0, eH.Gs)(t)
                        );
                      if (-1 === i)
                        return (0, eH.Gs)(e) !== (0, eH.Gs)(l)
                          ? e
                          : (0, u._)({}, e, l);
                      let o = e.children ? [...e.children] : [];
                      return (
                        e.children && o.splice(i, 1, (0, u._)({}, o[i], l)),
                        (0, u._)({}, e, e.children ? { children: o } : l)
                      );
                    })(ea, eb),
                  [ea, eb]
                ),
                eA = (0, i.useMemo)(() => tK(eD, e_), [e_, eD]),
                [eE, eC] = (0, tI.Oh)({ enabled: !T }),
                {
                  product: ew,
                  queryResult: eT,
                  setModuleData: eI,
                  setModuleMetadata: eS,
                } = t0(
                  N((0, C.hV)("ProductDetailWebDatasourcePersonalized")),
                  k
                ),
                eR = T ? eT : eC;
              (0, i.useEffect)(() => {
                if (eR.isSuccess) {
                  let e = "pdp_personalized_time_since_page_load";
                  e6.L.recordTimeSincePageLoad(e, "histogram_large"), G(e);
                }
              }, [G, eR.isSuccess]);
              let ej = T ? ew : eE(tS),
                ek = (0, i.useMemo)(() => tK(eA, ej), [ej, eA]),
                eL = (0, i.useMemo)(() => (X ? tK(ek, $) : ek), [X, $, ek]),
                eO = t1(eR),
                eF = t1(Q),
                eM = t1(B),
                eB = (0, r.Y)(),
                eG = t1(em),
                eV = !eB && eg && !!eb && !(0, tT.$6)(eG),
                ez = !eB && !!eb && eg,
                eU = I(tb),
                eW = eM.isError || eU,
                eK = (0, tN.d)(),
                eq = ei || eK,
                eJ = eV ? ex : em;
              return (0, i.useMemo)(
                () => ({
                  isProductFulfillmentDataFromServer: eV,
                  wasProductFulfillmentDataEverFromServer: ez,
                  parentOrStandaloneTcin: eo,
                  childOrStandaloneTcin: z,
                  productDataWithFulfillmentAndFallbacks: eL,
                  queryResultFulfillment: eJ,
                  queryResultPdp: eM,
                  queryResultPdpPersonalized: eO,
                  queryResultCircleOffers: eF,
                  setDatasourceCoreModuleData: F,
                  setDatasourceCoreModuleMetadata: M,
                  setDatasourcePersonalizedModuleData: eI,
                  setDatasourcePersonalizedModuleMetadata: eS,
                  setDatasourceCircleOffersModuleData: J,
                  setDatasourceCircleOffersModuleMetadata: Y,
                  setDatasourceFulfillmentAndVariationHierarchyModuleData: ec,
                  setDatasourceFulfillmentAndVariationHierarchyModuleMetadata:
                    ep,
                  isProductError: (eM.isSuccess || eW) && (eW || d()(V)),
                  isProductFetching: eM.isFetching,
                  doesCachedTcinMatchPathTcin: z === D,
                  haveProductDetailCoreCallsCompleted:
                    (eM.isSuccess || eW) && (eq || (0, tT.$6)(eG)),
                }),
                [
                  eV,
                  ez,
                  eo,
                  z,
                  eL,
                  V,
                  eG,
                  eM,
                  eO,
                  eF,
                  eJ,
                  F,
                  M,
                  eI,
                  eS,
                  J,
                  Y,
                  ec,
                  ep,
                  eW,
                  D,
                  eq,
                ]
              );
            })({
              selectedTcinLocal: n,
              storeIdFromParam: t,
              locationVariablesFromServer: o,
            }),
            ee = (0, R.L)()(N.Te),
            eu = (0, j.gt)(b),
            ec = (0, E.XO)(eu),
            ep = M || void 0 !== ec;
          (0, i.useEffect)(() => {
            (0, el.Y)() && window.scrollTo(0, 0);
          }, []);
          let [em] = (0, tR.z)(),
            e_ = em(C.K8),
            eh = em(C.ae);
          (0, er.T)({ layout: e_, extensions: eh });
          let eg = em((e) => e),
            ey = (0, p.Mv)(
              "TRACKING_PERFORMANCE_SLI_AND_LOCAL_USE_PREVIOUS_ENABLED"
            ),
            ev = (0, i.useMemo)(
              () =>
                (0, l.jsxs)(en.q, {
                  haveProductDetailCoreCallsCompleted: M,
                  children: [
                    (0, l.jsx)(t7, {
                      layoutResponse: eg,
                      moduleType: "ProductDetailWebDatasourceCore",
                      onModuleDataChange: H,
                      onModuleMetadataChange: U,
                    }),
                    (0, l.jsx)(t7, {
                      layoutResponse: eg,
                      moduleType: "ProductDetailWebDatasourcePersonalized",
                      onModuleDataChange: q,
                      onModuleMetadataChange: J,
                    }),
                    (0, l.jsx)(t7, {
                      layoutResponse: eg,
                      moduleType: "ProductDetailWebDatasourceCircleOffers",
                      onModuleDataChange: Y,
                      onModuleMetadataChange: $,
                    }),
                    (0, l.jsx)(t7, {
                      layoutResponse: eg,
                      moduleType:
                        "ProductDetailWebDatasourceFulfillmentAndVariations",
                      onModuleDataChange: X,
                      onModuleMetadataChange: Z,
                    }),
                    (0, l.jsx)(te, {}),
                    ey ? (0, l.jsx)(ti, {}) : null,
                    (0, l.jsxs)(tw, {
                      queryResultCircleOffers: z,
                      children: [
                        (0, l.jsx)(tr, {}),
                        (0, l.jsx)(S.I, { extensions: eh, layout: e_ }),
                        (0, l.jsx)(e5, {
                          queryResultCircleOffers: z,
                          queryResultPdpPersonalized: V,
                          regionId: a,
                          storeIdFromParam: t,
                        }),
                      ],
                    }),
                  ],
                }),
              [M, ey, e_, eg, H, U, q, J, eh, z, V, Y, $, X, Z, a, t]
            ),
            eP = (0, T.m)(),
            ef = (0, el.Y)() && w && !x;
          return ((0, i.useEffect)(() => {
            ef && s(void 0);
          }, [ef]),
          ef)
            ? (0, l.jsx)("div", { style: t6 })
            : ((D || 404 === ee) && (d()(b) || x)) ||
              (null == b ? void 0 : b.is_obsolete)
            ? (0, l.jsxs)(I.s, {
                layout_id: null == e_ ? void 0 : e_.id,
                children: [
                  (0, l.jsx)(L.e, {}),
                  (0, l.jsx)(tw, {
                    isPageContentError: !0,
                    queryResultCircleOffers: z,
                    children: (0, l.jsxs)(k.M, {
                      childTcin: f,
                      debugName: "pdp-product-not-found",
                      queryResult: G,
                      queryResultFulfillment: B,
                      setSelectedTcin: s,
                      value: b,
                      children: [(0, l.jsx)(ea.m, {}), (0, l.jsx)(W, {})],
                    }),
                  }),
                ],
              })
            : eP && d()(b)
            ? (0, l.jsx)("div", { style: t6 })
            : (0, l.jsxs)(I.s, {
                layout_id: null == e_ ? void 0 : e_.id,
                children: [
                  (0, l.jsx)(L.e, {}),
                  (0, l.jsxs)(k.M, {
                    childTcin: f,
                    debugName: "pdp",
                    isProductFulfillmentDataFromServer: O,
                    queryResult: G,
                    queryResultFulfillment: B,
                    setSelectedTcin: s,
                    value: b,
                    wasProductFulfillmentDataEverFromServer: F,
                    children: [
                      (0, l.jsx)(ed.j, {}),
                      (0, l.jsx)(et, {}),
                      (0, l.jsx)(eo.m, { children: ev }),
                      ep &&
                        (0, l.jsx)(Q, {
                          adUnitPath: "/7079046/tgt/".concat(ec),
                          shouldUseRedoakAdSlots: !1,
                        }),
                    ],
                  }),
                ],
              });
        };
      t9.displayName = "ProductDetailPageInner";
      let t8 = (e) => {
        let {
            findAlternativeVariables: t,
            storeIdFromParam: a,
            regionId: o,
            ssrPdpRecommendationsPreloadSharedVariables: n,
            locationVariablesFromServer: u,
            isProductDetailServerSideRenderPriceEnabled: c,
          } = e,
          p = !(0, r.Y)(),
          m = null == u ? void 0 : u.storeIdFromServer,
          _ = (0, i.useMemo)(
            () => ({
              findAlternativePreloadVariables: t,
              hasPdpFindAlternativePreloadVariablesFromSSR: !d()(t),
              hasPdpRecommendationsPreloadVariablesFromSSR: !d()(n),
              pdpRecommendationsPreloadVariables: n,
              isProductDetailPriceFromSSR: !!(c && m && p),
              storeIdFromServer: m,
              storeIdFromParam: a,
            }),
            [t, p, c, n, m, a]
          );
        return (0, l.jsx)(s.e.Provider, {
          value: _,
          children: (0, l.jsx)(t9, {
            locationVariablesFromServer: u,
            regionId: o,
            storeIdFromParam: a,
          }),
        });
      };
      (t8.displayName = "ProductDetailPageWithoutRedOak"),
        (t8.getInitialProps = w);
      let ae = (0, n.$p)({ shouldDetermineStatusCode: !0 })(t8);
    },
    13650: (e, t, a) => {
      "use strict";
      a.d(t, {
        Md: () => o,
        N7: () => n,
        Zu: () => p,
        h8: () => s,
        he: () => d,
        jk: () => c,
        w2: () => u,
      });
      var l = a(77232),
        i = a(98601);
      let o = l.Ay.ul.withConfig({ componentId: "sc-757a5327-0" })(
          [
            "display:flex;align-items:center;flex-wrap:wrap;font-size:",
            ";> li{margin-right:",
            ";&:last-child{margin-right:0;}&:not(:last-child)::after{content:'\xb7';margin-left:",
            ";}}",
          ],
          i.gx.size.text.medium,
          i.xe.generic.x1,
          i.xe.generic.x1
        ),
        d = l.Ay.div.withConfig({ componentId: "sc-757a5327-1" })(
          [
            "--module-gap-top:",
            ";--module-gap-bottom:",
            ";--module-gap-left:",
            ";--module-gap-right:",
            ";[data-module-type='ProductDetailBreadcrumbs']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";}",
          ],
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x5,
          i.xe.generic.x5
        ),
        r = (0, l.AH)(
          [
            "[data-module-type='ProductDetailAddToRegistry']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";}[data-module-type='ProductDetailAddToList']{--module-gap-bottom:",
            ";}[data-module-type='ProductDetailFinance']{--module-gap-bottom:0;}[data-module-type='ProductDetailLastPurchasedInfo'],[data-module-type='ProductDetailManufacturerNotesJumpLinks'],[data-module-type='ProductDetailPrice']{--module-gap-bottom:",
            ";}[data-module-type='ProductDetailAvailabilitySneakPeek']{--module-gap-bottom:",
            ";}[data-module-type='ProductDetailDeals']{--module-gap-top:0;--module-gap-bottom:0;}[data-module-type='ProductDetailFulfillment'],[data-module-type='ProductDetailRecommendedProducts']{--module-gap-top:",
            ";}[data-module-type='ProductDetailFulfillmentMessaging'],[data-module-type='ProductDetailSeasonalAssortmentDriver']{--module-gap-bottom:",
            ";}[data-module-type='ProductDetailAtAGlance'],[data-module-type='ProductDetailAd'],[data-module-type='ProductDetailHighlights']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";}@media (min-width:",
            "){[data-module-type='ProductDetailVariationSelector']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";}}",
          ],
          i.xe.generic.x2,
          i.xe.generic.x2,
          i.xe.generic.x2,
          i.xe.generic.x4,
          i.xe.generic.x3,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.fi.md,
          i.xe.generic.x4,
          i.xe.generic.x4
        ),
        n = l.Ay.div.withConfig({ componentId: "sc-757a5327-2" })(
          [
            "--module-gap-top:0;--module-gap-bottom:",
            ";--module-gap-left:",
            ";--module-gap-right:",
            ";[data-module-type='ProductDetailBreadcrumbs']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";@media (min-width:",
            "){--module-gap-top:",
            ";--module-gap-bottom:",
            ";}}[data-module-type='MiniBuyBox']{--module-gap-top:",
            ";--module-gap-bottom:",
            ";}",
            ";[data-module-type='ProductDetailImageGallery']{--module-gap-bottom:",
            ";}",
          ],
          i.xe.generic.x1,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x2,
          i.xe.generic.x2,
          i.fi.sm,
          i.xe.generic.x3,
          i.xe.generic.x3,
          i.xe.generic.x4,
          i.xe.generic.x4,
          r,
          i.xe.generic.x8
        ),
        s = l.Ay.div.withConfig({ componentId: "sc-757a5327-3" })(
          ["display:flex;flex-direction:row;", ";"],
          (e) => {
            let { childOrStandaloneTcin: t } = e;
            return t ? "view-transition-name: product-info-".concat(t) : "";
          }
        ),
        u = l.Ay.div.withConfig({ componentId: "sc-757a5327-4" })(
          [
            "--module-gap-top:0;--module-gap-bottom:",
            ";--module-gap-left:",
            ";--module-gap-right:",
            ";width:50%;margin-top:-",
            ";@media (min-width:",
            "){--module-gap-left:",
            ";}",
            ";",
          ],
          i.xe.generic.x1,
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.xe.generic.x5,
          i.fi.lg,
          i.xe.generic.x6,
          r
        ),
        c = l.Ay.div.withConfig({ componentId: "sc-757a5327-5" })(
          [
            "padding-top:",
            ";top:125px;position:sticky;@media (min-width:768px){top:80px;}",
          ],
          i.xe.generic.x5
        ),
        p = l.Ay.div.withConfig({ componentId: "sc-757a5327-6" })(
          [
            "--module-gap-top:0;--module-gap-bottom:0;--module-gap-left:",
            ";--module-gap-right:",
            ";flex-grow:1;max-width:none;width:50%;@media (min-width:",
            "){--module-gap-right:",
            ";}",
          ],
          i.xe.generic.x4,
          i.xe.generic.x4,
          i.fi.lg,
          i.xe.generic.x6
        );
    },
    14398: (e, t, a) => {
      "use strict";
      a.d(t, { L: () => s });
      var l = a(37876),
        i = a(91342),
        o = a(73208),
        d = a(32038),
        r = a(1800),
        n = a(34078);
      let s = (e) => {
        let { titleOverride: t } = e,
          a = (0, o.EJ)(d.A5),
          s = (0, i.Xo)((0, r.D4)(null != t ? t : a));
        return (0, l.jsx)(n.oO, {
          className: "h-margin-v-default h-text-thin",
          level: 4,
          size: 3,
          children: s,
        });
      };
      s.displayName = "CardHeading";
    },
    15003: (e, t, a) => {
      "use strict";
      a.d(t, { On: () => i, Rl: () => o, lC: () => l });
      var l = (function (e) {
        return (e.VisualDiscovery = "web_view_similar"), e;
      })({});
      let i = [
          "5xttg",
          "56duf",
          "56dud",
          "56dug",
          "56drv",
          "4y6n7",
          "56due",
          "5xtou",
          "5xtlz",
          "5xtm2",
          "5xtm7",
          "5xtm1",
          "5xtm0",
          "5xtnd",
          "5xtna",
          "4ym22",
          "5xtne",
          "5xtnf",
          "5xtmr",
          "5xtmo",
          "5xtmj",
          "5xtml",
          "5xtmk",
          "5xtmm",
          "5xtmh",
          "4skdt",
          "5xtm6",
          "5xtn4",
          "5xttp",
          "4ynw0",
          "5xtmc",
          "5xtm5",
          "5xtma",
          "56d55",
          "5xtn7",
          "5xtmi",
          "5xtmv",
          "5xtmy",
          "5xtmt",
          "5xttm",
          "56d7u",
          "56d7t",
          "56duu",
          "54ub8",
          "4yq0g",
          "4yq0c",
          "4yq0f",
          "4yq0d",
          "4yq0e",
          "5xttl",
          "4yp2z",
          "4yp2y",
          "56dut",
          "557vx",
          "5xtcg",
          "4y52e",
          "5xtbx",
          "5xtzj",
          "5xu0k",
          "5xu1e",
          "5xtzq",
        ],
        o = [
          "066-00",
          "066-01",
          "066-02",
          "066-04",
          "066-05",
          "066-06",
          "066-07",
          "066-08",
          "066-09",
          "066-10",
          "066-11",
          "066-12",
          "066-13",
          "066-14",
          "066-15",
          "066-16",
          "066-17",
          "066-94",
          "067-08",
          "067-09",
          "074-00",
          "074-02",
          "074-06",
          "074-07",
          "074-08",
          "074-14",
          "074-16",
          "074-17",
          "051-04",
          "053-21",
          "324-00",
          "009-11",
          "240-20",
        ];
    },
    15046: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => f, $: () => D });
      var l = a(3576),
        i = a(14232),
        o = a(42252),
        d = a(53724),
        r = a(68979),
        n = a(56606),
        s = a(87125),
        u = a(89514),
        c = a(40196),
        p = a(3422),
        m = a(70418),
        _ = a(36093),
        h = a(4594),
        g = a(62207),
        y = a(74583),
        v = a(18652);
      let P = function () {
        var e, t;
        let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          l = a.find((e) => {
            var t;
            return (
              (null == (t = e.display_name) ? void 0 : t.toLowerCase()) ===
              "category"
            );
          }),
          i = null == l || null == (e = l.options) ? void 0 : e.slice(0, 3),
          o =
            null == i ||
            null ==
              (t = i.map((e) => {
                var t;
                return null == (t = e.display_name)
                  ? void 0
                  : t.toLowerCase().replaceAll(/[^\da-z]/g, "");
              }))
              ? void 0
              : t.filter((e) => "Target" !== e);
        return null != o ? o : [];
      };
      function f() {
        var e;
        let t,
          a,
          f =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          { asPath: x, query: b } = (0, o.rd)(),
          D = (0, c.Hq)(x),
          A = null == f ? void 0 : f(v.e),
          E = (0, r.w)(n.lP),
          C = (0, r.w)(s.A7),
          w = (0, r.w)(s.gY),
          T = (0, r.w)(s.YH),
          I = (0, p.Rj)(b),
          S = E ? P(E).join(",") : "",
          [R] = (0, g.A)(),
          N = R(h.K8),
          { merchlvls: j, itemtype: k } = ((e) => {
            var t, a, l, i, o, d, r, n;
            let s =
              null == e || null == (t = e.search_categories)
                ? void 0
                : t
                    .split("|")
                    .map((e) => e.toLowerCase().replaceAll(/[^\da-z]/g, ""));
            return {
              merchlvls: {
                merchlvl1: null != (l = null == s ? void 0 : s[0]) ? l : "",
                merchlvl2: null != (i = null == s ? void 0 : s[1]) ? i : "",
                merchlvl3: null != (o = null == s ? void 0 : s[2]) ? o : "",
                merchlvl4: null != (d = null == s ? void 0 : s[3]) ? d : "",
                merchlvl5: null != (r = null == s ? void 0 : s[4]) ? r : "",
              },
              itemtype:
                null !=
                (n =
                  null == e || null == (a = e.search_item_types)
                    ? void 0
                    : a.toLowerCase().replaceAll(/[^\da-z]/g, ""))
                  ? n
                  : "",
            };
          })((0, y.kV)(N)),
          { isInRegistryMode: L } = (0, _.Tl)(),
          O = L && D === d.XJ,
          { pathname: F } = new m.o(x),
          M = "/" === F ? "homepage" : (0, c.rv)(x);
        D === d.Dn || D === d.De
          ? ((M = ""), (t = null != I ? I : ""), (a = S.length > 0 ? S : ""))
          : ((t = ""), (a = ""));
        let B = D;
        D === d.De && (B = "search"),
          "pdp" === D && (B = "productdetails"),
          O && (B = "registry");
        let G = (0, u.j)() || "0",
          V = null != (e = (0, p.aZ)(x)) ? e : "",
          z = (D === d.XJ && A) || D === d.Dn || D === d.De,
          H = !0;
        return (
          z && (H = !w && !C && T),
          (0, i.useMemo)(
            () => ({
              isPageLevelTargetingReady: H,
              targeting: (0, l._)(
                {
                  n_cat: M,
                  s_t: t,
                  cat: a,
                  fly: G,
                  item: V,
                  pt: B,
                  itemtype: k,
                },
                j
              ),
            }),
            [H, M, t, a, G, V, B, j, k]
          )
        );
      }
      var x = a(4042),
        b = a(95636);
      function D() {
        var e;
        let { asPath: t } = (0, o.rd)(),
          a = (0, c.Hq)(t),
          { isInRegistryMode: l, registryModeStatusFromCookie: r } = (0,
          _.Tl)(),
          n = l && a === d.XJ && null != r ? r : "",
          s = null == (e = (0, b._f)()) ? void 0 : e.preferredStoreId,
          u = null != s ? s : x.Vz;
        return (0, i.useMemo)(() => ({ registrytype: n, storeId: u }), [n, u]);
      }
    },
    18652: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => i });
      var l = a(45354);
      let i = (e) => {
        var t;
        return Object.values(
          null != (t = null == e ? void 0 : e.slots) ? t : {}
        ).some((e) => {
          var t;
          return l.d.has(null != (t = e.presentation) ? t : "");
        });
      };
    },
    19653: (e, t, a) => {
      "use strict";
      var l = a(14649),
        i = a(32038),
        o = a(15003);
      (0, l.oz)((e) => {
        let t = (0, i.Sd)(e),
          a = (0, i.wK)(e);
        return o.Rl.includes("".concat(t, "-").concat(a));
      });
    },
    23146: (e, t, a) => {
      "use strict";
      a.d(t, { s: () => o });
      var l = a(17379),
        i = a(20881);
      let { useQuery: o } = (0, l.T)({
        name: "size-chart-html",
        keyFn: (e) => {
          if (!e.sizeChartFragmentUrl) throw Error("no vars");
          return ["size-chart-html", e];
        },
        queryFn: async (e) => {
          let {
            data: t,
            ok: a,
            statusText: l,
          } = await (0, i.Jt)(e.sizeChartFragmentUrl);
          if (a) return null != t ? t : null;
          throw Error("".concat(l));
        },
      });
    },
    25222: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => d, P: () => r });
      var l = a(73208),
        i = a(25012),
        o = a(97115);
      let d = () => {
          let e = (0, l.K1)(i.B2),
            t = (0, l.K1)(i.Mj),
            a = (0, l.K1)(i.$A),
            o = (0, l.K1)(i.sk),
            d = (0, l.K1)(i.BU),
            r = (0, l.K1)(i.ZW),
            n = (0, l.K1)(i.Cl),
            s = (0, l.K1)(i.FO),
            u = (0, l.K1)(i.E5),
            c = (0, l.K1)(i.Id),
            p = (0, l.K1)(i.iC);
          return d
            ? {
                selectedCurrentPrice: r,
                selectedComparisonPrice: n,
                selectedHidePrice: s,
              }
            : e
            ? {
                selectedCurrentPrice: t,
                selectedComparisonPrice: a,
                selectedHidePrice: o,
              }
            : {
                selectedCurrentPrice: u,
                selectedComparisonPrice: c,
                selectedHidePrice: p,
              };
        },
        r = (e) => {
          let t,
            {
              selectedHidePrice: a,
              selectedCurrentPrice: l,
              selectedComparisonPrice: i,
            } = e,
            d = (0, o.o)({ formattedPrice: l, hidePrice: a }),
            r = (0, o.o)({ formattedPrice: i, hidePrice: a }),
            n = (r && Number.parseFloat(r)) || null,
            s = (d && Number.parseFloat(d)) || null;
          return (
            !a &&
              null !== n &&
              null !== s &&
              s < n &&
              (t = [
                {
                  "@type": "UnitPriceSpecification",
                  price: r,
                  priceCurrency: "USD",
                  priceType: "https://schema.org/StrikethroughPrice",
                },
              ]),
            {
              priceObject: {
                price: d,
                priceCurrency: "USD",
                priceSpecification: t,
              },
              currentPrice: d,
              comparisonPrice: r,
            }
          );
        };
    },
    26426: (e) => {
      e.exports = {
        productCardAddToCartWrapper:
          "styles_productCardAddToCartWrapper__T0x7a",
        productCardVariantMiniOrMicroImageWrapper:
          "styles_productCardVariantMiniOrMicroImageWrapper__9v6p_",
        productCardLink: "styles_productCardLink__kjxhh",
      };
    },
    27902: (e, t, a) => {
      "use strict";
      a.d(t, {
        U$: () => T,
        JY: () => b,
        nB: () => _,
        dy: () => D,
        gX: () => I,
        Bj: () => S,
        Of: () => y,
        Xq: () => h,
        vq: () => A,
        yB: () => C,
        ML: () => g,
        XI: () => v,
        nA: () => P,
        K3: () => E,
        MX: () => x,
        AC: () => f,
        vL: () => w,
      });
      var l = a(77232),
        i = a(6908),
        o = a(38858),
        d = a(18673),
        r = a(29464),
        n = a(94072),
        s = a(55777),
        u = a(98601);
      let c = {
          nicollet_text_primary: u.Tj.text.primary,
          nicollet_text_secondary: u.Tj.text.secondary,
          nicollet_text_promo: u.Tj.messaging.promotion,
          text_loyalty_base: u.Tj.loyalty.text.base,
          loyaltyTextBase: u.Tj.loyalty.text.base,
        },
        p = {
          caption1: "font-weight: normal;",
          caption2: "font-weight: bold;",
          microcopy: "font-size: 12px;",
          primary: "font-size: 16px;",
          secondary: "font-size: 14px;",
        },
        m = { strikethrough: "line-through", none: "none" },
        _ = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-0" })(
          [
            "color:",
            ";display:flex;flex-direction:column;height:100%;text-align:left;& div{box-sizing:border-box;border:solid 1px transparent !important;}& img{margin-bottom:12px;width:158px;aspect-ratio:1/1;}& button{width:95px;margin-top:10px;}@media (max-width:",
            "){& button{width:104px;}& img{width:120px;}}",
          ],
          u.Tj.text.primary,
          u.fi.smMax
        ),
        h = (0, l.Ay)(i.V).withConfig({ componentId: "sc-3c5d6a3b-1" })(
          ["& img{border-radius:", ";}"],
          u.PQ.radius.x2
        ),
        g = (0, l.Ay)(o.P).withConfig({ componentId: "sc-3c5d6a3b-2" })(
          ["", ""],
          (e) =>
            ((e) => {
              let {
                  color: t,
                  text_decoration: a,
                  typography: l,
                } = null != e ? e : {},
                i = "";
              return (
                t && c[t] && (i += "color: ".concat(c[t], ";")),
                a &&
                  (null == m ? void 0 : m[a]) &&
                  (i += "text-decoration: ".concat(
                    null == m ? void 0 : m[a],
                    ";"
                  )),
                l && (null == p ? void 0 : p[l]) && (i += p[l]),
                i
              );
            })(e)
        ),
        y = (0, l.Ay)(r.d).withConfig({ componentId: "sc-3c5d6a3b-3" })(
          ["margin-right:", ";vertical-align:bottom;"],
          u.xe.generic.x1
        ),
        v = l.Ay.table.withConfig({ componentId: "sc-3c5d6a3b-4" })(
          [
            "background-color:",
            ";th,td{text-align:left;font-weight:normal;display:flex;flex-direction:column;line-height:1.25;}",
          ],
          u.Tj.background.default
        ),
        P = l.Ay.span.withConfig({ componentId: "sc-3c5d6a3b-5" })(
          ["height:100%;padding:12px;box-shadow:", ";"],
          u.r7.low.onDark
        ),
        f = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-6" })(
          [
            "max-width:1400px;overflow-x:auto;box-shadow:",
            ";border-radius:12px;position:relative;& table.compare-chart{border-collapse:collapse;border-radius:",
            ";box-shadow:",
            ";th,td{min-width:228px;max-width:228px;min-height:55px;margin-top:0;@media (max-width:",
            "){min-width:203px;max-width:203px;}}tr:first-child{th,td{min-height:270px;}}th:first-child,td:first-child{position:sticky;left:0;background:#fff;z-index:1;}th:not(:first-child),td:not(:first-child){padding:12px;box-shadow:",
            ";background:",
            ";}tr:not(:first-child){td:not(:first-child),th:not(:first-child){& div.label{visibility:hidden;height:21.5px;}}}}",
          ],
          u.r7.low.onLight,
          u.PQ.radius.x2,
          u.r7.low.onLight,
          u.fi.smMax,
          u.r7.low.onLight,
          u.Tj.palette.gray.lightest
        ),
        x = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-7" })(
          [
            "overflow:hidden;margin-top:16px;@media (min-width:",
            "){margin-top:6px;}",
          ],
          u.fi.smMax
        ),
        b = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-8" })(
          [
            "color:",
            ";margin-top:6px;@media (min-width:",
            "){margin-top:16px;margin-left:16px;}",
          ],
          u.Tj.text.secondary,
          u.fi.smMax
        ),
        D = (0, l.Ay)(d.$).withConfig({ componentId: "sc-3c5d6a3b-9" })(
          ["@media (min-width:", "){width:464px;}"],
          u.fi.smMax
        ),
        A = (0, l.Ay)(s.a).withConfig({ componentId: "sc-3c5d6a3b-10" })([
          "max-width:375px;word-break:normal;overflow-wrap:anywhere;",
        ]),
        E = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-11" })(
          [
            "display:flex;position:relative;@media (min-width:",
            "){justify-content:center;}",
          ],
          u.fi.smMax
        ),
        C = l.Ay.button.withConfig({ componentId: "sc-3c5d6a3b-12" })(
          [
            "position:absolute;width:32px;height:32px;top:135px;z-index:2;&.prev{left:5px;}&.next{right:5px;}&:focus{outline:",
            " dashed 1px;outline-offset:-0.5px;-moz-outline-radius:4px;opacity:1;}&:disabled{visibility:hidden;}> svg{width:inherit;background-color:#fff;border-radius:100%;}",
          ],
          u.Tj.border.focusOutline
        ),
        w = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-13" })([
          "opacity:0;",
        ]),
        T = l.Ay.div.withConfig({ componentId: "sc-3c5d6a3b-14" })([
          "margin-top:auto;",
        ]),
        I = (0, l.Ay)(n.p).withConfig({ componentId: "sc-3c5d6a3b-15" })([
          "& button{width:auto;margin-top:0;}",
        ]),
        S = (0, l.Ay)(d.$).withConfig({ componentId: "sc-3c5d6a3b-16" })([
          "padding:0;height:auto;margin-top:-2px;&:focus{outline:#fff dashed 1px;}",
        ]);
    },
    28874: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => i, s: () => o });
      var l = a(14232);
      let i = (0, l.createContext)({
        hideWriteReviewButton: !1,
        isFullReviewsVariant: !1,
      });
      i.displayName = "ProductDetailWriteReviewContext";
      let o = () => (0, l.useContext)(i);
    },
    29041: (e, t, a) => {
      "use strict";
      a.d(t, {
        C_: () => l,
        Q_: () => u,
        dW: () => i,
        f2: () => s,
        i7: () => o,
        nR: () => p,
        nd: () => c,
        oW: () => d,
        uT: () => r,
        vP: () => n,
        zj: () => m,
      });
      let l = 150,
        i = 185,
        o = 200,
        d = 300,
        r = 200,
        n = {
          label: "sort by",
          boldLabel: !1,
          boldValue: !0,
          defaultValue: "most recent",
          options: [
            { label: "most recent", value: "most_recent", selected: !0 },
            { label: "highest rated", value: "highest_rating" },
            { label: "lowest rated", value: "lowest_rating" },
            { label: "most helpful", value: "helpfulness_desc" },
          ],
        },
        s = {
          label: "filter by",
          boldLabel: !1,
          boldValue: !0,
          defaultValue: "all ratings",
          options: [
            { label: "5 stars", value: "5" },
            { label: "4 stars", value: "4" },
            { label: "3 stars", value: "3" },
            { label: "2 stars", value: "2" },
            { label: "1 stars", value: "1" },
          ],
        },
        u = 8;
      var c = (function (e) {
        return (
          (e.VERIFIED_PURCHASER = "verifiedPurchaser"),
          (e.INCENTIVIZED_REVIEW = "incentivizedReview"),
          (e.HEY_BULLSEYE = "hey_Bullseyetrue"),
          (e.POWER_SAMPLING = "pwr_samplingtrue"),
          e
        );
      })({});
      let p = "scroll_to_review_section",
        m = "Verified purchase";
    },
    29443: (e, t, a) => {
      "use strict";
      a.d(t, {
        J9: () => s,
        Uo: () => h,
        hl: () => c,
        ry: () => m,
        u8: () => n,
      });
      var l = a(3422),
        i = a(91342),
        o = a(13967),
        d = a(42252),
        r = a(70418);
      let n = () => {
          var e, t;
          let { asPath: a, query: r } = (0, d.rd)(),
            n = (0, o.ll)(a),
            s =
              null !=
              (t =
                null != (e = (0, l.xs)(r, "afid"))
                  ? e
                  : (0, l.xs)(r, "socialex"))
                ? t
                : "",
            u = (0, i.Bb)(s.toLowerCase());
          return n
            ? (0, o.GC)(a)
              ? { isSocialPage: n, marketplaceType: u, socialPageType: "pdp" }
              : { isSocialPage: n, marketplaceType: u }
            : { isSocialPage: !1 };
        },
        s = (e, t, a, l, i, o) =>
          r.o.buildURLWithParams(e, {
            tcin: t,
            q: a || "1",
            fft: l || "SHIP",
            addToCartOnLoad: i,
            socialex: o,
          }),
        u = {
          SHIPPING: "SHIP",
          ORDER_PICKUP: "PICKUP",
          SCHEDULED_DELIVERY: "DELIVERY",
        },
        c = (e) => u[e],
        p = {
          ORDER_PICKUP: "PICKUP",
          SCHEDULED_DELIVERY: "SHIP",
          SHIPPING: "SHIP",
        },
        m = (e) => p[e],
        _ = {
          ORDER_PICKUP: "STORE_PICKUP",
          SCHEDULED_DELIVERY: "SCHEDULED_DELIVERY",
          SHIPPING: "STANDARD",
        },
        h = (e) => _[e];
    },
    30114: (e) => {
      e.exports = {
        productNotFoundCard: "styles_productNotFoundCard__YVjdC",
        productNotFoundImage: "styles_productNotFoundImage__07T7F",
        productWarningWrapper: "styles_productWarningWrapper__KJW7z",
        divider: "styles_divider__5uk_h",
      };
    },
    33508: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c, q: () => u });
      var l = a(3576),
        i = a(62701),
        o = a(37876),
        d = a(14232),
        r = a(13967),
        n = a(58816);
      let s = (0, d.createContext)({
        manufacturerNotesInformation: void 0,
        setManufacturerNotesInformation: void 0,
        ratingValue: void 0,
        haveProductDetailCoreCallsCompleted: !1,
        setAccordionControl: () => {},
      });
      s.displayName = "ProductDetailPageContext";
      let u = (0, d.memo)((e) => {
        let { children: t, haveProductDetailCoreCallsCompleted: a } = e,
          [u, c] = (0, d.useState)(!1),
          p = (0, d.useCallback)(() => c(!0), []),
          [m, _] = (0, d.useState)(),
          h = (0, d.useRef)(null),
          g = (0, d.useRef)(null),
          y = (0, d.useRef)(null),
          [v, P] = (0, d.useState)(),
          [f, x] = (0, d.useState)({}),
          b = (0, d.useCallback)(
            (e) => {
              if (!e || !f) return;
              let t = f[e];
              if (t) {
                let { isAccordionOpen: a } = t;
                a ||
                  x((t) =>
                    (0, i._)((0, l._)({}, t), { [e]: { isAccordionOpen: !0 } })
                  );
                let o = '[href="#'.concat((0, n.Rn)(e), '"]'),
                  d = document.querySelector(o);
                d
                  ? (d.scrollIntoView({ behavior: "smooth", block: "center" }),
                    d.focus())
                  : (0, r.o6)(y, 120);
              }
            },
            [f]
          ),
          [D, A] = (0, d.useState)(),
          E = (0, d.useMemo)(
            () => ({
              ratingValue: m,
              manufacturerNotesInformation: D,
              setManufacturerNotesInformation: A,
              setRatingValue: _,
              ratingsAndReviewsHeadingRef: h,
              accordionControl: f,
              setAccordionControl: x,
              goToTab: b,
              priceBlockRef: g,
              tabsListHeadingRef: y,
              stickyAddToCartRef: v,
              setStickyAddToCartRef: P,
              haveProductDetailCoreCallsCompleted: a,
              shouldLoadProductDetailBelowTheFoldContentImmediately: u,
              setShouldLoadProductDetailBelowTheFoldContentImmediatelyToTrue: p,
            }),
            [m, D, A, _, h, f, x, b, g, y, v, P, a, u, p]
          );
        return (0, o.jsx)(s.Provider, { value: E, children: t });
      });
      u.displayName = "ProductDetailPageContextProvider";
      let c = () => (0, d.useContext)(s);
    },
    33912: (e, t, a) => {
      "use strict";
      a.d(t, { uQ: () => m });
      var l = a(3576),
        i = a(45983),
        o = a(57086),
        d = a(70418),
        r = a(51439),
        n = a(20881),
        s = a(26763),
        u = a(19427);
      class c extends r.I {}
      let { useMutation: p } = (0, o.k)({
          name: "@web/domain-one-cart-click/post-ope-add-to-cart",
          mutationFn: async (e) => {
            var t, a;
            let i,
              {
                apis: {
                  offPlatformExperience: {
                    baseUrl: o,
                    endpointPaths: { opeCartExternalServiceV1: r },
                  },
                },
              } =
                null !=
                (a = null == (t = (0, u.$)()) ? void 0 : t.services.apiPlatform)
                  ? a
                  : {},
              s = d.o.buildURLWithParams(r, {}, o);
            try {
              i = await (0, n.bE)(s, {
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify((0, l._)({}, e)),
                credentials: "include",
              });
            } catch (e) {
              throw new c(e.statusText, {
                method: "POST",
                ok: e.ok,
                status: e.status,
                response: e.response,
              });
            }
            return i;
          },
        }),
        m = (0, s.g)((0, i.U)(p, { allowAnonymous: !0 }), {
          proceedTimeout: 1e4,
          debugName: "postOpeAddToCart",
        });
    },
    34078: (e, t, a) => {
      "use strict";
      a.d(t, {
        Ox: () => s,
        Tw: () => u,
        UP: () => p,
        oO: () => c,
        pn: () => n,
      });
      var l = a(77232),
        i = a(98601),
        o = a(6908),
        d = a(42773),
        r = a(41622);
      let n = l.Ay.div.withConfig({ componentId: "sc-1c502004-0" })(
        [
          "display:flex;overflow-x:auto;@media (min-width:",
          "){justify-content:center;}",
        ],
        i.fi.md
      );
      (0, l.Ay)(o.V).withConfig({ componentId: "sc-1c502004-1" })([
        "width:300px;height:unset;flex-shrink:0;",
      ]);
      let s = l.Ay.div.withConfig({ componentId: "sc-1c502004-2" })([
          "width:300px;",
        ]),
        u = l.Ay.div.withConfig({ componentId: "sc-1c502004-3" })(
          [
            "text-align:left;display:flex;flex-direction:row;margin:",
            ";margin-bottom:0;flex-basis:0%;flex-grow:1;@media (max-width:",
            "){text-align:center;flex-shrink:0;min-width:300px;flex-direction:column;align-items:center;margin:",
            " 0;}",
          ],
          i.xe.generic.x4,
          i.fi.smMax,
          i.xe.generic.x4
        ),
        c = (0, l.Ay)(d.D).withConfig({ componentId: "sc-1c502004-4" })([
          "flex-grow:1;",
        ]),
        p = (0, l.Ay)(r.O).withConfig({ componentId: "sc-1c502004-5" })([
          "flex-shrink:0;",
        ]);
    },
    35840: (e, t, a) => {
      "use strict";
      a.d(t, { k: () => r });
      var l = a(17379),
        i = a(19427),
        o = a(20881);
      let d = "@web/domain-product/pdp-salify-exists-v1",
        { useQuery: r } = (0, l.T)({
          name: d,
          defaultOptions: { staleTime: 5e3 },
          keyFn: (e) => {
            if (!e.tcin)
              throw TypeError(
                "tcin is required for pdp_salsify_exists_v1 query"
              );
            return [d, e];
          },
          queryFn: async (e) => {
            let { tcin: t } = null != e ? e : {},
              { baseUrl: a, clientId: l } = (0, i.$)().services.salsify,
              d = ""
                .concat(a)
                .concat(l, "/en-US/BTF/TCIN/")
                .concat(t, "/index.html"),
              { headers: r, ok: n, statusText: s } = await (0, o.d5)(d),
              u = r.get("content-length");
            if (n) return !!u && "0" !== u;
            throw Error("".concat(s));
          },
        });
    },
    35914: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => s });
      var l = a(37876),
        i = a(14232),
        o = a(66318),
        d = a(30820),
        r = a(94259),
        n = a(42401);
      let s = (e) => {
        let { suppressAds: t = !1 } = e,
          { isBot: a } = (0, i.useContext)(r.B.Context);
        return a || t
          ? null
          : (0, l.jsx)("div", {
              className: "h-padding-a-module-gap",
              "data-test": "adContainer",
              id: "adContainer",
              style: { overflow: "hidden", height: "auto" },
              children: (0, l.jsx)("div", {
                id: "adDesktopWrapperContainer",
                children: (0, l.jsx)(o.f, {
                  className: "h-flex-justify-center",
                  children: (0, l.jsx)(d.f, {
                    children: (0, l.jsx)(n.f, {
                      adName: "btf",
                      showSponsored: !0,
                    }),
                  }),
                }),
              }),
            });
      };
      s.displayName = "BtfPubAd";
    },
    36637: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => r, m: () => d });
      var l = a(37876),
        i = a(14232);
      let o = (0, i.createContext)({
        postSocialAddToCartResult: null,
        setPostSocialAddToCartResult: () => null,
        isAddToCartAttempting: !1,
        setIsAddToCartAttempting: () => null,
      });
      o.displayName = "CreateSocialAddToCartContext";
      let d = (e) => {
          let { children: t } = e,
            [a, d] = (0, i.useState)(null),
            [r, n] = (0, i.useState)(!1),
            s = (0, i.useMemo)(
              () => ({
                postSocialAddToCartResult: a,
                setPostSocialAddToCartResult: d,
                isAddToCartAttempting: r,
                setIsAddToCartAttempting: n,
              }),
              [r, a]
            );
          return (0, l.jsx)(o.Provider, { value: s, children: t });
        },
        r = () => (0, i.useContext)(o);
      d.displayName = "SocialAddToCartContextProvider";
    },
    37570: (e) => {
      e.exports = {
        productCardImageWrapper: "styles_productCardImageWrapper__FW3Xt",
        productCardVariantCarouselWrapper:
          "styles_productCardVariantCarouselWrapper__08q3M",
      };
    },
    43297: (e) => {
      e.exports = {
        IncorrectProductInfo: "styles_IncorrectProductInfo__3BH57",
      };
    },
    43792: (e, t, a) => {
      "use strict";
      a.d(t, { RM: () => o, dS: () => i, hz: () => d, oi: () => l });
      let l = "@web/site-top-of-funnel/ProductDetailAccordion",
        i = "@web/site-top-of-funnel/ProductDetailCollapsible-",
        o = 300,
        d = { EXPAND: "EXPAND", COLLAPSE: "COLLAPSE" };
    },
    44279: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => d });
      var l = a(55472),
        i = a(33508),
        o = a(85009);
      let d = () => {
        var e, t, a;
        let { screenMd: d } = (0, l.e)(),
          { stickyAddToCartRef: r, priceBlockRef: n } = (0, i.A)(),
          s = d ? o.yU : o.PD,
          u =
            null !=
            (t = null == n || null == (e = n.current) ? void 0 : e.offsetHeight)
              ? t
              : 195;
        return {
          scrollOffsetFromStickyAddToCart:
            Number.parseInt(s, 10) +
            (null != (a = null == r ? void 0 : r.offsetHeight) ? a : 195),
          scrollOffsetFromPurchaseBlock:
            Number.parseInt(s, 10) + (d ? 68 : 124) + u,
        };
      };
    },
    45354: (e, t, a) => {
      "use strict";
      a.d(t, { d: () => l });
      let l = new Set([
        "/adaptive/placeholders/productgrid/v01/mobile",
        "/adaptive/c_web_a_0045/v01/mobile",
        "/adaptive/seller-productgrid",
      ]);
    },
    45715: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { ProductDetailHighlights: () => d });
      var l = a(37876),
        i = a(52243),
        o = a(68516);
      let d = () =>
        (0, l.jsx)("div", {
          className: "h-margin-a-module-gap",
          id: i.B7,
          children: (0, l.jsx)(o.O, {}),
        });
      d.displayName = "ProductDetailHighlights";
    },
    46846: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { RecommendationCarousel: () => eh });
      var l = a(3576),
        i = a(62701),
        o = a(37876),
        d = a(14232),
        r = a(42773),
        n = a(60700),
        s = a(94259),
        u = a(40123),
        c = a.n(u),
        p = a(19351),
        m = a(90214),
        _ = a(37294),
        h = a(72396),
        g = a(58111),
        y = a(73208),
        v = a(26989),
        P = a(33232),
        f = a(3422),
        x = a(85167),
        b = a(78502),
        D = a(95408),
        A = a(59010),
        E = a(42252),
        C = a(13967),
        w = a(9248),
        T = a(49315),
        I = a(98650),
        S = a(10754),
        R = a(73232),
        N = a(9864),
        j = a(75570),
        k = a(38858),
        L = a(30997),
        O = a(30334),
        F = a(36810),
        M = a(32038),
        B = a(9068),
        G = a(50525),
        V = a(60823),
        z = a(94170),
        H = a(80459),
        U = a(60816),
        W = a(11140),
        K = a(71334),
        q = a(78994),
        J = a(55578),
        Y = a(77026),
        Q = a(87850),
        $ = a(15039),
        X = a.n($),
        Z = a(93839),
        ee = a(97091),
        et = a(26426),
        ea = a.n(et),
        el = a(37570),
        ei = a.n(el);
      let eo = (e) => {
        var t;
        let {
            "data-category-id": a,
            "data-position": r,
            "data-strategy-description": n,
            "data-strategy-id": s,
            "data-strategy-name": u,
            "placement-id": c,
            featureType: _ = "RECOMMENDATION",
            hasAddToCartButton: h = !1,
            overrideBehavior: g,
            overrideDrawerBehavior: P,
            searchTitle: x,
            totalResults: b,
            productCardVariant: C = ee.E.MINI,
          } = e,
          { query: w } = (0, E.rd)(),
          T = (0, f.Rj)(w),
          { onRememberedNavigationClick: I } = (0, W.a)(),
          S = (0, D.Mv)("GLOBAL_PRICE_STRIKETHROUGH_ENABLED"),
          R = (0, y.K1)(v.Gs),
          N = (0, L.T)(),
          z = null != (t = (0, O.k)()) ? t : "",
          H = (0, Q.a)(z),
          J = (0, y.K1)(F.oc),
          Y = (0, y.K1)(F.y4),
          {
            ad_source: $,
            click_token: et,
            impression_id: el,
          } = null != Y ? Y : {},
          eo = (0, B.d)(),
          ed =
            (0, y.K1)(M.lG) && P === U.Sh.SUPPRESS_CART_SUCCESS_DRAWER
              ? void 0
              : P,
          er = (0, d.useCallback)(
            (e) =>
              (0, l._)(
                {},
                e,
                s && {
                  lnk: (0, i._)((0, l._)({}, e.lnk), {
                    recClick: {
                      position: r,
                      productId: R,
                      categoryId: a,
                      strategyId: s,
                      strategyName: u,
                      placement_id: c,
                    },
                  }),
                }
              ),
            [r, R, s, u, a, c]
          ),
          en = (0, m.hE)(null == Y ? void 0 : Y.ad_source),
          { trackClick: es } = (0, V.f)(),
          eu = (0, d.useMemo)(() => {
            if ("ratp" === $)
              return {
                ad_token: null != et ? et : "",
                position: r,
                server_impression_id: el,
              };
          }, [$, et, el, r]),
          ec = "".concat(s, "_").concat(c, "_").concat(R, "_mini_card"),
          ep = (0, d.useCallback)(
            (e) => {
              if (I) {
                var t;
                I(null != (t = e.currentTarget.dataset.focusid) ? t : "", a, r);
              }
            },
            [a, r, I]
          ),
          em = (0, d.useCallback)(
            (e) => {
              var t;
              ep(e),
                en(),
                es.track(
                  (0, l._)(
                    {
                      featureType: _,
                      clickType: "PRODUCT",
                      element: R
                        ? { type: "TCIN", id: R, position: r, sponsored: !!J }
                        : void 0,
                      prz:
                        c && s && u && n
                          ? {
                              placementId: c,
                              strategyDescription: n,
                              strategyId: s,
                              strategyName: u,
                            }
                          : void 0,
                      search:
                        (x || n) && b && T
                          ? {
                              title: null != (t = null != x ? x : n) ? t : "",
                              type: "KEYWORD",
                              keyword: T,
                              total_search_results: b,
                            }
                          : void 0,
                    },
                    eu && { ratp: eu }
                  )
                ),
                s &&
                  u &&
                  (0, p.cW)({
                    recClick: {
                      position: r,
                      productId: R,
                      strategyId: s,
                      strategyName: u,
                      type: "product",
                    },
                  });
            },
            [r, s, u, n, _, ep, J, c, eu, T, x, R, b, es, en]
          ),
          { hasPdpRecommendationsPreloadVariablesFromSSR: e_ } = (0,
          d.useContext)(A.e),
          { hasPdpFindAlternativePreloadVariablesFromSSR: eh } = (0,
          d.useContext)(A.e);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(j.N, {
              className: ea().productCardLink,
              "data-focusid": ec,
              href: H,
              noHoverColor: !0,
              onClick: em,
              underline: "never",
              children: (0, o.jsx)("div", {
                className: ""
                  .concat(ei().productCardImageWrapper, " ")
                  .concat(ea().productCardVariantMiniOrMicroImageWrapper),
                children: (0, o.jsx)(K.D, {
                  lazyLoad: !eh && !e_ && void 0,
                  noAnimation: !!eh || !!e_ || void 0,
                  noLink: !0,
                  resolutionsByBreakpoint: Z.I,
                }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: "h-margin-t-tight",
              children: [
                (0, o.jsx)(G.x, {
                  isStrikethroughPriceEnabled: S,
                  textAlignment: "left",
                }),
                C === ee.E.MINI
                  ? (0, o.jsx)("div", {
                      className: "h-text-md",
                      "data-test":
                        "ProductCardVariantRecommendationWithLayoutOptionsTitle",
                      children: (0, o.jsx)(j.N, {
                        className: ea().productCardLink,
                        "data-focusid": "".concat(ec, "_title"),
                        href: H,
                        noHoverColor: !0,
                        onClick: em,
                        underline: "never",
                        children: (0, o.jsx)(k.P, {
                          lines: 4 - eo,
                          children: N,
                        }),
                      }),
                    })
                  : null,
                J &&
                  (0, o.jsx)("div", {
                    className: "h-text-sm",
                    children: "Sponsored",
                  }),
              ],
            }),
            h
              ? (0, o.jsx)("div", {
                  className: X()(ea().productCardAddToCartWrapper),
                  children: (0, o.jsx)(q.E, {
                    "aria-label": "Add to cart for ".concat(N),
                    featureType: _,
                    handleOverridingOrAddingTrackingFieldsToAddToCartClick: er,
                    handleOverridingOrAddingTrackingFieldsToAddToCartSuccess:
                      er,
                    isIntentAware: !0,
                    overrideBehavior: g,
                    overrideDrawerBehavior: ed,
                    placementType: "recommendation-product-card-".concat(s),
                    size: "sm",
                    tcin: R,
                    willHaveProductContextFulfillmentDataForAddToCart: !0,
                  }),
                })
              : null,
          ],
        });
      };
      eo.displayName =
        "ProductCardVariantRecommendationWithLayoutOptionsWithTracking";
      let ed = (e) => {
        var t;
        let { query: a } = (0, E.rd)(),
          i = (0, f.Rj)(a),
          r = (0, y.K1)(F.y4),
          n = (0, m.I3)(null == r ? void 0 : r.ad_source),
          s = (0, y.K1)(v.Gs),
          u = e["data-position"],
          c =
            e["placement-id"] &&
            e["data-strategy-id"] &&
            e["data-strategy-name"] &&
            e["data-strategy-description"]
              ? {
                  placementId: e["placement-id"],
                  strategyId: e["data-strategy-id"],
                  strategyName: e["data-strategy-name"],
                  strategyDescription: e["data-strategy-description"],
                }
              : void 0,
          p = (0, d.useMemo)(() => {
            if ((null == r ? void 0 : r.ad_source) === "ratp") {
              var e;
              return {
                ad_token:
                  null != (e = null == r ? void 0 : r.click_token) ? e : "",
                position: u,
                server_impression_id: null == r ? void 0 : r.impression_id,
              };
            }
          }, [r, u]),
          _ = null != (t = e.searchTitle) ? t : e["data-strategy-description"],
          h =
            _ && i && e.totalResults
              ? {
                  title: _,
                  type: "KEYWORD",
                  keyword: i,
                  totalSearchResults: e.totalResults,
                }
              : void 0,
          g = (0, J.P)(e["data-position"], c, h, p),
          { productCardVariant: P = ee.E.DEFAULT } = e;
        if (P === ee.E.DEFAULT) return (0, o.jsx)(Y.k, (0, l._)({}, e));
        let x = "312px",
          b = Z.b;
        return (
          P === ee.E.MINI
            ? ((x = "200px"), (b = "132px"))
            : P === ee.E.MICRO && ((x = "180px"), (b = "132px")),
          (0, o.jsx)(z.F, {
            carouselData: g,
            tracking: ["impression"],
            useTrackers: H.F,
            children: (0, o.jsx)("div", {
              className: "".concat(ei().productCardVariantCarouselWrapper),
              "data-category-id": e["data-category-id"],
              "data-position": e["data-position"],
              "data-product-id": s,
              "data-strategy-description": e["data-strategy-description"],
              "data-strategy-id": e["data-strategy-id"],
              "data-strategy-name": e["data-strategy-name"],
              "data-test": "ProductCardVariantRecommendation",
              style: { minHeight: x, minWidth: b, width: b },
              tabIndex: -1,
              children: (0, o.jsx)(z.F, {
                clickId: null == r ? void 0 : r.click_id,
                creativeId: null == r ? void 0 : r.impression_id,
                tcin: s,
                token: null == r ? void 0 : r.click_token,
                useTrackers: n,
                children: (0, o.jsx)("div", {
                  style: {
                    display: "inline-flex",
                    flexDirection: "column",
                    flex: 1,
                  },
                  children: (0, o.jsx)(eo, (0, l._)({}, e)),
                }),
              }),
            }),
          })
        );
      };
      ed.displayName = "ProductCardVariantRecommendationWithLayoutOptions";
      var er = a(50085),
        en = a(98601),
        es = a(77232);
      let eu = es.Ay.div.withConfig({ componentId: "sc-2369bea1-0" })([
          "overflow:hidden;a{float:right;display:inline-block;}a svg{margin-left:2px;}h2.hideAuxtext{float:none;}",
        ]),
        ec = es.Ay.div.withConfig({ componentId: "sc-2369bea1-1" })(
          [
            "[data-test='pagination-dots']{display:flex;height:52px;}[data-direction='forward'],[data-direction='back']{padding:",
            ";}div.children{padding-bottom:",
            ";@media (min-width:",
            "){padding-bottom:0;}}",
          ],
          en.xe.generic.x1,
          en.xe.generic.x4,
          en.fi.md
        ),
        ep = {
          "--filmstrip-button-width": en.xe.generic.x10,
          "--filmstrip-horizontal-padding": "var(--module-gap-left, ".concat(
            en.xe.generic.x4,
            ")"
          ),
          "--filmstrip-item-spacing": en.xe.generic.x4,
        };
      var em = a(66363),
        e_ = a(64103);
      let eh = (e) => {
        var t;
        let {
            hasAddToCartButton: a = !1,
            placementId: u,
            facetId: j,
            categoryNodeId: k,
            customCarouselHeading: L,
            shouldUseTcinFromUrl: O,
            dataTest: F,
            productCardVariant: M = ee.E.DEFAULT,
            category_id: B,
            doctype: G,
            moduleMetadata: V,
            recommended_products: z,
            should_skip_client_side_recommendations_request: H,
            strategy_description: U,
            strategy_id: W,
            strategy_name: K,
          } = e,
          { isBot: q } = (0, d.useContext)(s.B.Context),
          J = (0, E.rd)(),
          Y = (0, y.K1)(v.Gs),
          Q = (0, C.pH)(J),
          $ = (q && !(0, em.Y)()) || O ? Q : Y,
          { trackEvent: X } = (0, p.z1)(),
          [Z, et] = (0, d.useState)(!1),
          { query: ea } = J,
          { criteoAdTrackServedDisplayImpression: el } = (0, m.Eh)(),
          { ratpAdTrackServedDisplayImpression: ei } = (0, m.Ro)(),
          {
            hasPdpFindAlternativePreloadVariablesFromSSR: eo,
            findAlternativePreloadVariables: en,
            hasPdpRecommendationsPreloadVariablesFromSSR: es,
            pdpRecommendationsPreloadVariables: eh,
          } = (0, d.useContext)(A.e),
          eg = es && (S.Mv.includes(u) || u.includes("aiui")),
          ey = eo && u === S.CH.ADAPTPDPOOS01,
          ev = (0, d.useMemo)(
            () =>
              eg
                ? (0, i._)((0, l._)({}, eh), { placement_id: u })
                : ey
                ? (0, i._)((0, l._)({}, en), { placement_id: u })
                : void 0,
            [en, ey, eg, eh, u]
          ),
          eP = eg || ey,
          [ef, ex] = (0, w.cD)(ev, { enabled: eP && !H }),
          [eb, eD] = (0, w.UH)({
            variables: (0, i._)((0, l._)({}, void 0), {
              placement_id: u,
              tcins: $,
              facet_id: j,
              category_id: k,
            }),
            isEnabled: !eP && !H,
          }),
          eA = eP ? ef : eb,
          eE = (0, d.useMemo)(
            () => ({
              isFetching: !1,
              isLoading: !1,
              isSuccess: !0,
              isError: !1,
              status: x.RE.Success,
            }),
            []
          ),
          eC = H ? eE : eP ? ex : eD,
          ew = (0, b.$6)(eC),
          {
            recommendedProducts: eT,
            strategyDescription: eI,
            strategyId: eS,
            strategyName: eR,
            categoryId: eN,
            docType: ej,
            placementId: ek,
          } = (0, e_.h)({
            selectPdpSpecificRecommendations: eA,
            should_skip_client_side_recommendations_request: H,
            category_id: B,
            doctype: G,
            placementId: u,
            recommended_products: z,
            strategy_description: U,
            strategy_id: W,
            strategy_name: K,
          }),
          eL = (0, f.xs)(ea, "moveTo"),
          {
            placeholder: eO,
            handleUnload: eF,
            setHeadingText: eM,
          } = (0, d.useContext)(T.p);
        (0, d.useEffect)(() => {
          L ? null == eM || eM(L) : eI && (null == eM || eM(eI));
        }, [eM, eI, L]),
          (0, d.useEffect)(() => {
            "similarItems" !== eL ||
              Z ||
              c()(eT) ||
              ((0, C.rg)("similarItemsHeading"), et(!0));
          }, [eT, Z, eL]),
          (0, d.useEffect)(() => {
            ew && c()(eT) && (null == eF || eF());
          }, [eF, ew, eT]);
        let eB = eA(N.Fk),
          eG = (0, R.h)(eB),
          eV = (0, er.ec)(eT),
          ez = (0, er.jb)(eT);
        (0, d.useEffect)(() => {
          if (eT) {
            X({
              experimentsViewed: eG,
              guest: { eventType: "recommendations" },
              recommendations: {
                categoryId: eN,
                docType: ej,
                placementId: u,
                strategyDescription: eI,
                strategyId: eS,
                strategyName: eR,
                type: "product",
              },
              products: eT.map((e) => ({
                placementType: "recommendations",
                tcin: (0, v.Gs)(e),
              })),
            });
            let e =
              null == eT
                ? void 0
                : eT.filter((e) => (null == e ? void 0 : e.is_sponsored_sku));
            if (
              (null == e ? void 0 : e.length) &&
              (0, D.Mv)("TPA_FIREFLY_VNEXT_IMPRESSIONS_ENABLED")
            ) {
              let e = (null != eV ? eV : []).length > 0,
                t = (null != ez ? ez : []).length > 0;
              e && t
                ? el.track({ criteo: eV, ratp: ez })
                : e
                ? el.track({ criteo: eV })
                : t && ei.track({ ratp: ez });
            }
          }
        }, [eN, ej, eG, eV, ez, el, ei, u, eT, eI, eS, eR, X]);
        let eH = (0, d.useCallback)(
            (e) => {
              let { type: t, newPage: a } = e;
              X({
                guest: { eventType: "customInteraction" },
                customInteraction: {
                  value: "RecommendationCarousel_"
                    .concat(u, "_")
                    .concat(t, "_")
                    .concat(a),
                },
              });
            },
            [u, X]
          ),
          eU =
            null != (t = (0, _.Y)().EXP_PDP_SEASONAL_DEALS_CAROUSEL_ENABLED)
              ? t
              : (0, D.Mv)(I.Jc),
          eW = (0, d.useMemo)(() => "seasonalDealsCarousel" === F, [F]),
          { checkIsExperimentEnabledAndTrackFireflyEvent: eK } = (0, h.G)(
            "EXP_PDP_SEASONAL_DEALS_CAROUSEL_ENABLED"
          ),
          eq = (0, g.p)();
        if (
          ((0, d.useEffect)(() => {
            eW &&
              ew &&
              eT &&
              eT.length > 0 &&
              (eK(), eq("EXP_PDP_SEASONAL_DEALS_CAROUSEL_ENABLED"));
          }, [eT, ew, eq, eK, eW]),
          eW && !eU)
        )
          return null;
        if (c()(eT))
          return !ew || (null == V ? void 0 : V.isLoading)
            ? (0, o.jsx)(o.Fragment, { children: eO })
            : null;
        let eJ = "recsHeading-".concat(u);
        return (0, o.jsxs)(ec, {
          className: "h-margin-b-module-gap",
          "data-test": "RecommendationCarousel",
          children: [
            void 0 === eM
              ? (0, o.jsx)(eu, {
                  className: "h-text-center",
                  children: (0, o.jsx)(
                    r.D,
                    (0, i._)(
                      (0, l._)(
                        {},
                        ey
                          ? {
                              className:
                                "h-text-left h-padding-b-default h-margin-b-none h-padding-t-module-gap h-padding-h-module-gap",
                              level: 3,
                              size: 3,
                            }
                          : null
                      ),
                      { "data-test": eJ, id: eJ, tabIndex: -1, children: eI }
                    )
                  ),
                })
              : null,
            (0, o.jsx)(n.H, {
              alignItems: "center",
              hasPaginationDots: !0,
              onPageChanged: eH,
              style: ep,
              children:
                null == eT
                  ? void 0
                  : eT.map((e, t) =>
                      (0, o.jsx)(
                        P.M,
                        {
                          debugName: "RecommendationCarousel",
                          position: t,
                          prz: {
                            strategyName: eR,
                            strategyId: eS,
                            strategyDescription: eI,
                            placementId: ek,
                          },
                          queryResult: eC,
                          value: e,
                          children: (0, o.jsx)(ed, {
                            "data-position": t,
                            "data-strategy-description": eI,
                            "data-strategy-id": eS,
                            "data-strategy-name": eR,
                            "facet-id": j,
                            hasAddToCartButton: a,
                            "placement-id": u,
                            productCardVariant: M,
                          }),
                        },
                        (0, v.t2)(e)
                      )
                    ),
            }),
          ],
        });
      };
      eh.displayName = "RecommendationCarousel";
    },
    47641: (e, t, a) => {
      "use strict";
      a.d(t, { v: () => r });
      var l = a(42252),
        i = a(73208),
        o = a(26989),
        d = a(3422);
      let r = () => {
        let { asPath: e, query: t } = (0, l.rd)(),
          a = (0, i.EJ)(o.Gs);
        return a && e.includes(a) && !(0, d.xs)(t, "preselect");
      };
    },
    48957: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => r });
      var l = a(72396),
        i = a(98650),
        o = a(14232),
        d = a(95408);
      let r = () => {
        let e = (0, o.useCallback)(
            (e) => (null != e ? e : (0, d.Mv)(i.VM)),
            []
          ),
          { checkIsExperimentEnabledAndTrackFireflyEvent: t } = (0, l.G)(
            "PDP_ACCORDION_CLOSED_ENABLED",
            { checkIsExperimentEnabledWithCustomConditions: e }
          );
        return t();
      };
    },
    49315: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => m, p: () => p });
      var l = a(3576),
        i = a(62701),
        o = a(65699),
        d = a(37876),
        r = a(14232),
        n = a(42773),
        s = a(91907),
        u = a(15039),
        c = a.n(u);
      let p = (0, r.createContext)({});
      p.displayName = "LazyComponentWithHeadingContext";
      let m = (e) => {
        let {
            headingDataTest: t,
            headingSrOnly: a,
            headingProps: u = {
              className: c()(
                "h-text-center",
                "h-margin-b-default",
                "h-padding-t-module-gap",
                "h-padding-h-module-gap",
                { "h-sr-only": a }
              ),
              level: 3,
              size: 2,
            },
            placeholder: m,
            placeholderHeading: _,
            headingRef: h,
          } = e,
          g = (0, o._)(e, [
            "headingDataTest",
            "headingSrOnly",
            "headingProps",
            "placeholder",
            "placeholderHeading",
            "headingRef",
          ]),
          { className: y, level: v, size: P } = u,
          [f, x] = (0, r.useState)(_),
          [b, D] = (0, r.useState)(!0),
          A = (0, r.useCallback)(() => D(!1), []),
          E = (0, r.useMemo)(
            () => ({ placeholder: m, handleUnload: A, setHeadingText: x }),
            [m, A]
          );
        return b
          ? (0, d.jsxs)(p.Provider, {
              value: E,
              children: [
                f
                  ? (0, d.jsx)(n.D, {
                      className: y,
                      "data-test": t,
                      level: v,
                      ref: h,
                      size: P,
                      tabIndex: -1,
                      children: f,
                    })
                  : null,
                (0, d.jsx)(s.I, (0, i._)((0, l._)({}, g), { placeholder: m })),
              ],
            })
          : null;
      };
      m.displayName = "LazyComponentWithHeading";
    },
    50085: (e, t, a) => {
      "use strict";
      a.d(t, {
        ec: () => I.ec,
        jb: () => I.jb,
        v_: () => h,
        W$: () => T,
        Ny: () => l.N,
      });
      var l = a(7407),
        i = a(40123),
        o = a.n(i),
        d = a(14232),
        r = a(73208),
        n = a(32038),
        s = a(97003),
        u = a(95441),
        c = a(951),
        p = a(76989),
        m = a(18551),
        _ = a(50301);
      let h = () => {
        var e, t, a;
        let [l] = (0, m.RJ)(),
          i = l(_.xF),
          h = (0, r.EJ)(n.FU),
          g = (0, r.K1)(s.$N),
          y = null == (e = (0, r.K1)(n.vk)) ? void 0 : e[0],
          v = !o()((0, r.EJ)(u.$)),
          P = !o()((0, r.EJ)(u.N)),
          f = v || P,
          x =
            null != (a = null == (t = (0, r.EJ)(n.u7)) ? void 0 : t.length)
              ? a
              : 0,
          b = (0, r.K1)((0, c._K)({ isCircle360ActivePaidMember: i })),
          D = (0, r.K1)(p.$q);
        return (0, d.useMemo)(
          () => ({
            isAvailableToPurchase: b,
            unavailNearMe: D,
            collectionPanel: h,
            isSpinnerAvailable: g,
            ribbon: y,
            ugc: f,
            videoCount: x,
          }),
          [b, D, h, g, y, f, x]
        );
      };
      var g = a(20172),
        y = a(40897),
        v = a(91518),
        P = a(66580),
        f = a(86965),
        x = a(26989),
        b = a(21554),
        D = a(46242),
        A = a(23945),
        E = a(48603),
        C = a(78502),
        w = a(67136);
      let T = () => {
        let [e, t] = (0, m.RJ)(),
          a = e(_.xF),
          l = (0, A.V)(),
          i = (0, E.Ry)(),
          o = (0, r.K1)((0, y.hf)({ isCircle360ActivePaidMember: a })),
          n = (0, r.K1)(v.I),
          s = (0, r.K1)(P.OY),
          u = (0, r.K1)(P.oi),
          c = (0, r.K1)(f.iq),
          p = (0, r.K1)(P.K8),
          h = (0, r.K1)(P.Wr),
          T = (0, r.K1)(f.Uf),
          I = (0, r.K1)(f.yv),
          S = (0, r.K1)(y.Bu),
          R = (0, r.K1)(y.ll),
          N = (0, r.K1)(y.eE),
          j = (0, r.K1)(x.Gs),
          { scheduledDeliveryStoreId: k, enabled: L } = (0, D.Y)(),
          { earliestDeliveryWindowStartTime: O, queryState: F } = (0, b.u)(),
          M = (0, C.$6)(t),
          B = (0, C.$6)(F);
        return {
          productFulfillmentForTracking: (0, d.useMemo)(
            () =>
              [
                s
                  ? {
                      edd: p,
                      shippingMethod: "pickup",
                      tcin: j,
                      type: "pickup",
                    }
                  : void 0,
                u
                  ? {
                      edd: h,
                      shippingMethod: "pickup",
                      tcin: j,
                      type: "pickup",
                      isBackupStore: !0,
                    }
                  : void 0,
                c
                  ? {
                      edd: (0, w.sP)(T, I),
                      shippingMethod: "ship_to_store",
                      tcin: j,
                      type: "pickup",
                    }
                  : void 0,
                n
                  ? {
                      edd: O,
                      shippingMethod: "scheduled_delivery",
                      tcin: j,
                      type: "same day delivery",
                    }
                  : void 0,
                o
                  ? {
                      edd: (0, w.sP)(S, R),
                      isTwoDayEligible: N,
                      shippingMethod: "ship",
                      tcin: j,
                      type: "ship to home",
                    }
                  : void 0,
              ].filter(g.v),
            [j, o, n, s, u, c, N, S, R, O, p, h, T, I]
          ),
          isTrackingNodeProductFulfillmentReady:
            ((l && i) || M) && !!L && (!k || B),
        };
      };
      var I = a(62100);
    },
    51622: (e, t, a) => {
      "use strict";
      a.d(t, { NN: () => o, Od: () => l, a4: () => i });
      let l = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return t.some((t) => e.includes(t));
        },
        i = ["87652713", "54264873", "82257718", "89635166"],
        o = ["5xtg6", "5xtvd"];
    },
    51894: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => C });
      var l = a(42252),
        i = a(14232),
        o = a(37294),
        d = a(55873),
        r = a(91996),
        n = a(4063),
        s = a(53724),
        u = a(31294),
        c = a(44145),
        p = a(40196),
        m = a(36093),
        _ = a(69507),
        h = a(15046),
        g = a(45123),
        y = a(40152),
        v = a(13967),
        P = a(74583),
        f = a(62207),
        x = a(60780),
        b = a(88044),
        D = a(40123),
        A = a.n(D);
      let E = (e) => {
        var t, a;
        let {
            adUnitPath: _,
            getAdSlots: D,
            shouldUseRedoakAdSlots: E = !0,
            initialRedOakPage: C,
          } = e,
          w = (0, l.rd)(),
          T = (0, o.Y)(),
          I = (0, d.b)(),
          [S] = (0, f.A)(),
          R = S(P.$M),
          N = (0, p.Hq)(w.asPath),
          j = (0, p.rv)(w.asPath),
          k = (0, b.d)(),
          L = (0, u.W)(),
          O = (0, i.useMemo)(() => (C ? (e) => C : L), [C, L]),
          F = O(c.pQ),
          { isPageLevelTargetingReady: M, targeting: B } = (0, h.O)(O),
          G = (0, v.UD)(w.asPath),
          V = (0, x.t)("DLP_SIMPLIFIED_MWEB_ENABLED"),
          z = (0, v.tJ)(w.asPath) || (0, v.mf)(w.asPath),
          H = O(c.Pb),
          { isInRegistryMode: U } = (0, m.Tl)(),
          W = U && N === s.XJ,
          K = (0, g.qf)(w.asPath, j),
          q = (0, h.$)();
        (0, i.useEffect)(() => {
          (0, y.Q3)(), (0, y.h6)();
        }, []),
          (0, i.useEffect)(() => {
            M && (0, y.DV)();
          }, [M]);
        let J = (0, i.useMemo)(() => {
            let e = null != F ? F : {};
            W && (q.pt = "registry");
            let t = (0, r.CC)({
                pageContent: O,
                adUnitPath: _,
                targeting: q,
                pageKey: N,
                isRegistryPageType: W,
                isTopDealsPage: K,
                experimentFlags: T,
              }),
              a = V
                ? t.filter((e) => {
                    var t, a, l, i, o, d;
                    return (
                      (null == (l = e.targeting) ||
                      null == (a = l.pos) ||
                      null == (t = a.toString())
                        ? void 0
                        : t.toLowerCase()) !== "slpespot" &&
                      (null == (d = e.targeting) ||
                      null == (o = d.pos) ||
                      null == (i = o.toString())
                        ? void 0
                        : i.toLowerCase()) !== "block0"
                    );
                  })
                : t,
              l = ((e, t, a, l) => {
                var i, o, d;
                if (A()(e) || !(0, v.UD)(l)) return a;
                let r = () =>
                  a.filter((e) => {
                    var t, a, l;
                    return (
                      (null == (l = e.targeting) ||
                      null == (a = l.pos) ||
                      null == (t = a.toString())
                        ? void 0
                        : t.toLowerCase()) !== "block0"
                    );
                  });
                if (
                  !(
                    (null == t || null == (i = t.metadata)
                      ? void 0
                      : i.breadcrumbs) &&
                    (null == t ||
                    null == (d = t.metadata) ||
                    null == (o = d.breadcrumbs)
                      ? void 0
                      : o.length) === 1
                  )
                )
                  return r();
                let n = Object.values(e)
                  .filter((e) => {
                    var t, a, l, i, o, d, r, n;
                    return (
                      (null == (a = e.content) || null == (t = a.pos)
                        ? void 0
                        : t.toLowerCase()) === "block0" ||
                      (null == (i = e.content) || null == (l = i.pos)
                        ? void 0
                        : l.toLowerCase()) === "block1" ||
                      (null == (d = e.content) || null == (o = d.position)
                        ? void 0
                        : o.toLowerCase()) === "block0" ||
                      (null == (n = e.content) || null == (r = n.position)
                        ? void 0
                        : r.toLowerCase()) === "block1"
                    );
                  })
                  .map((e) => {
                    var t;
                    return null != (t = e.order) ? t : 0;
                  })
                  .sort((e, t) => (e && t ? e - t : 0));
                return !Object.values(e).some((e) => {
                  let t = e.order;
                  return n[0] && n[1] && t && t > n[0] && t < n[1];
                }) &&
                  n[0] &&
                  n[1]
                  ? r()
                  : a;
              })(e, O(), a, w.asPath);
            return E ? l : [];
          }, [_, T, W, V, K, F, N, w.asPath, O, E, q]),
          Y = [];
        E && Y.push(...J), D && Y.push(...D());
        let Q =
          null == R || null == (a = R[0]) || null == (t = a.split("-"))
            ? void 0
            : t.at(-1);
        Q &&
          Y.forEach((e) => {
            var t;
            (null == (t = e.targeting) ? void 0 : t.as) &&
              !e.targeting.as.includes(Q) &&
              (e.targeting.as = ""
                .concat(e.targeting.as.toString(), "_")
                .concat(Q));
          });
        let $ = "15826";
        void 0 !== I.EXP_BASEBOARD_AD_VARIANT &&
          Y.forEach((e) => {
            var t, a;
            (null == (t = e.targeting) ? void 0 : t.pos) === "ss" &&
              (null == (a = e.targeting) ? void 0 : a.as) &&
              !e.targeting.as.includes($) &&
              ((null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) ===
                "control" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_c")),
              (null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) === "v1_15_4" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_v1")),
              (null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) === "v2_30_6" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_v2")),
              (null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) === "v3_30_4" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_v3")),
              (null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) === "v4_10_6" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_v4")),
              (null == I ? void 0 : I.EXP_BASEBOARD_AD_VARIANT) === "v5_5_6" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat($, "_v5")));
          });
        let X = "16374";
        void 0 !== T.EXPERIMENT_AESTHETIC_CARD_ENABLED &&
          Y.forEach((e) => {
            var t, a;
            (null == (t = e.targeting) ? void 0 : t.pos) === "slpespot" &&
              (null == (a = e.targeting) ? void 0 : a.as) &&
              !e.targeting.as.includes(X) &&
              (T.EXPERIMENT_AESTHETIC_CARD_ENABLED
                ? ((e.targeting.as = ""
                    .concat(e.targeting.as.toString(), "_")
                    .concat(X, "_v1")),
                  (e.targeting.experiment =
                    "EXPERIMENT_AESTHETIC_CARD_ENABLED true"))
                : ((e.targeting.as = ""
                    .concat(e.targeting.as.toString(), "_")
                    .concat(X, "_c")),
                  (e.targeting.experiment =
                    "EXPERIMENT_AESTHETIC_CARD_ENABLED false")));
          });
        let Z = "21715";
        void 0 === I.PDP_HIGHLIGHT_AD_VARIANT ||
          "pdp" !== N ||
          k ||
          Y.forEach((e) => {
            var t, a;
            (null == (t = e.targeting) ? void 0 : t.pos) === "sskinny" &&
              (null == (a = e.targeting) ? void 0 : a.as) &&
              !e.targeting.as.includes(Z) &&
              ((null == I ? void 0 : I.PDP_HIGHLIGHT_AD_VARIANT) ===
                "control" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat(Z, "_c")),
              (null == I ? void 0 : I.PDP_HIGHLIGHT_AD_VARIANT) ===
                "v1_below_atc" &&
                (e.targeting.as = ""
                  .concat(e.targeting.as.toString(), "_")
                  .concat(Z, "_v1")));
          });
        let ee = (0, i.useCallback)(() => {
          (0, y.YR)();
        }, []);
        return (
          (0, n.x)({
            deferAdLoading: !M,
            enableSingleRequest: !0,
            slots: (G || z) && H ? [] : Y,
            slotRequested: ee,
            targeting: B,
          }),
          null
        );
      };
      E.displayName = "UseGptComponentInnerBase";
      let C = (0, _.h)({ action: "error_boundary_usegpt_component_inner" })(E);
      C.displayName = "UseGptComponentInner";
    },
    52243: (e, t, a) => {
      "use strict";
      a.d(t, { B7: () => d, WM: () => l, aS: () => i, rF: () => o });
      let l = "480px",
        i = "PdpImageGallerySection",
        o = "PdpDealsSection",
        d = "PdpHighlightsSection";
    },
    53210: (e, t, a) => {
      "use strict";
      a.d(t, { TR: () => r, hA: () => d, R1: () => n }), a(19653);
      var l = a(40123),
        i = a.n(l),
        o = a(12111);
      let d = (e) => {
          var t;
          return (0, o.DL)(e)
            ? null == e || null == (t = e.circle_offers)
              ? void 0
              : t.circle_offer_details
            : void 0;
        },
        r = (e) => {
          var t;
          return null == e || null == (t = e.loyalty) ? void 0 : t.games;
        },
        n = (e) => (t) => {
          var a, l, d, r, n, s, u;
          return (0, o.DL)(t)
            ? !(
                i()(
                  null == t || null == (a = t.circle_offers)
                    ? void 0
                    : a.circle_offer_details
                ) &&
                i()(
                  null == t ||
                    null == (r = t.children) ||
                    null == (d = r[0]) ||
                    null == (l = d.circle_offers)
                    ? void 0
                    : l.circle_offer_details
                ) &&
                i()(
                  null == t ||
                    null == (u = t.children) ||
                    null == (s = u.find((t) => t.tcin === e)) ||
                    null == (n = s.circle_offers)
                    ? void 0
                    : n.circle_offer_details
                )
              )
            : void 0;
        };
    },
    55935: (e, t, a) => {
      "use strict";
      a.d(t, { S: () => s, s: () => u });
      var l = a(73208),
        i = a(32038),
        o = a(20172),
        d = a(70798),
        r = a(90845),
        n = a(14232);
      let s = () => {
          var e;
          let t =
              null == (e = (0, l.EJ)(i.Io))
                ? void 0
                : e
                    .map((e) => (null == e ? void 0 : e.tcin))
                    .filter(o.v)
                    .join(","),
            [a] = (0, d.m)({ tcins: t });
          return a(r.R);
        },
        u = () => {
          let e = s();
          return (0, n.useMemo)(() => {
            if (!e || 0 === e.length) return;
            let [t] = e;
            if (t.children)
              return t.children
                .filter((e) => (0, o.v)(e))
                .map((e) => e.tcin)
                .filter((e) => (0, o.v)(e));
          }, [e]);
        };
    },
    56788: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => b });
      var l = a(3576),
        i = a(62701),
        o = a(14232),
        d = a(95408),
        r = a(4042),
        n = a(73208),
        s = a(32038),
        u = a(76989),
        c = a(78654),
        p = a(25222),
        m = a(47641),
        _ = a(85055),
        h = a(10444),
        g = a(87281),
        y = a(16753),
        v = a(40897),
        P = a(46143),
        f = a(7359),
        x = a(40595);
      let b = (e) => {
        let { storeId: t, regionId: a } = e || {},
          b = (0, n.K1)(s.JJ),
          D = (0, n.K1)(u.ff),
          A = !a && D,
          E = A ? _.C.OnSitePickup : _.C.ParcelService,
          C = ((e) => {
            let { storeId: t, regionId: a } = e,
              l = t && t !== r.Vz && !a,
              i = t && t !== r.Vz && a,
              o = !t || t === r.Vz,
              d = (0, n.K1)(h.tK),
              s = (0, n.K1)(g.s_),
              c = (0, n.K1)(g.d6),
              p = (0, n.K1)(u.W9),
              m = { isCircle360ActivePaidMember: !1 },
              b = (0, n.K1)(y.yY),
              D = (0, n.K1)((0, v.Wi)(m)),
              A = (0, n.K1)((0, v.Sw)(m)),
              E = (0, n.K1)((0, P.e_)(m)),
              C = (0, n.K1)((0, P.Nf)(m)),
              w = (0, n.K1)(f.I5),
              T = (0, n.K1)(f.qo),
              I = (0, n.K1)(f.zH),
              S = (0, n.K1)(x.j),
              R = (0, n.K1)(x.A);
            if (w)
              return S
                ? _.h.PreOrder
                : T
                ? _.h.InStock
                : I || R
                ? _.h.OutOfStock
                : "";
            if (l && d) return s ? _.h.InStock : c ? _.h.OutOfStock : "";
            if (o) {
              if ("boolean" == typeof p && !p) return _.h.InStock;
              if (b) {
                if (E) return _.h.PreOrder;
                if (C) return _.h.OutOfStock;
                if (D) return _.h.InStock;
                if (A) return _.h.OutOfStock;
              }
              return "";
            }
            if (i && b) {
              if (E) return _.h.PreOrder;
              if (C) return _.h.OutOfStock;
              if (D) return _.h.InStock;
              if (A) return _.h.OutOfStock;
            }
            return "";
          })({ storeId: t, regionId: a }),
          w = (0, m.v)(),
          T = (0, n.EJ)(c.J4);
        (0, d.Mv)("SEO_VAP_URL_AVAILABILITY_RULE_ENABLED") &&
          C === _.h.OutOfStock &&
          w &&
          T &&
          (!t || t === r.Vz) &&
          !a &&
          (C = "");
        let {
            selectedCurrentPrice: I,
            selectedHidePrice: S,
            selectedComparisonPrice: R,
          } = (0, p.B)(),
          { priceObject: N } = (0, p.P)({
            selectedCurrentPrice: I,
            selectedHidePrice: S,
            selectedComparisonPrice: R,
          });
        return (0, o.useMemo)(
          () =>
            (0, i._)((0, l._)({ "@type": "Offer" }, N), {
              availability: C,
              availableAtOrFrom: t
                ? { "@type": "Place", branchCode: "".concat(t, "S") }
                : void 0,
              availableDeliveryMethod: E,
              deliveryLeadTime: A
                ? { "@type": "QuantitativeValue", value: "0" }
                : void 0,
              potentialAction: { "@type": "BuyAction" },
              url: b,
            }),
          [C, E, b, A, N, t]
        );
      };
    },
    57025: (e, t, a) => {
      "use strict";
      a.d(t, {
        Cz: () => d,
        EV: () => s,
        Fn: () => n,
        K4: () => i,
        PV: () => u,
        Qj: () => c,
        Vz: () => p,
        bv: () => l,
        qS: () => o,
        uS: () => m,
        ux: () => r,
      });
      let l = 6,
        i = 10,
        o = 44,
        d = 154,
        r = "@web/site-top-of-funnel/ProductWellnessSummaryContainer",
        n = "@web/site-top-of-funnel/ProductWellnessSummaryHeading",
        s = "@web/site-top-of-funnel/ProductWellnessBadgeContainer",
        u = "@web/site-top-of-funnel/ProductWellnessBadgeWrapper",
        c = "@web/site-top-of-funnel/ProductWellnessContentExpansionButton",
        p = "@web/site-top-of-funnel/ProductWellnessModal",
        m = "@web/site-top-of-funnel/ProductWellnessBadgeLink";
    },
    57787: (e, t, a) => {
      "use strict";
      a.d(t, { M: () => v });
      var l = a(3576),
        i = a(37876),
        o = a(14232),
        d = a(40123),
        r = a.n(d),
        n = a(31294),
        s = a(44145),
        u = a(68979),
        c = a(43580),
        p = a(9555),
        m = a(42252),
        _ = a(94259),
        h = a(91342),
        g = a(13967),
        y = a(62701);
      let v = (e) => {
        var t, a, d, v, P, f, x;
        let { breadcrumbs: b } = e,
          D = "https://www.target.com",
          { asPath: A } = (0, m.rd)(),
          E = (0, g.B5)(A),
          { isSeoPhantom: C } = (0, o.useContext)(_.B.Context),
          w = C && E,
          T = (0, n.W)(),
          I = (0, h.Bb)(null != (d = T(s.lo)) ? d : ""),
          S = (0, h.Bb)(null != (v = T(s.$$)) ? v : ""),
          R = (0, h.Bb)(null != (P = T(s.h9)) ? P : ""),
          N = (0, h.Bb)(
            null != (f = null == (t = T(s.vx)) ? void 0 : t.seo_title) ? f : ""
          ),
          j = (0, h.Bb)(
            null != (x = null == (a = T(s.vx)) ? void 0 : a.seo_description)
              ? x
              : ""
          ),
          k = (0, u.w)(c.V8),
          L = (0, u.w)(p.$),
          O = ((e) => {
            let { breadcrumbs: t, canonicalUrl: a } = e;
            return t.length && a
              ? t.map((e, i) =>
                  i !== t.length - 1 || e.canonical_url
                    ? e
                    : (0, y._)((0, l._)({}, e), { canonical_url: a })
                )
              : t;
          })({ breadcrumbs: b, canonicalUrl: R });
        return (0, i.jsx)("script", {
          dangerouslySetInnerHTML: {
            __html: JSON.stringify(
              (0, l._)(
                { "@context": "https://schema.org", "@type": "WebPage" },
                N ? { name: N } : void 0,
                R ? { url: "".concat(D).concat(R) } : void 0,
                !w || (r()(k) && r()(L))
                  ? void 0
                  : {
                      additionalProperty: [
                        ...(r()(k)
                          ? []
                          : [
                              {
                                "@type": "PropertyValue",
                                name: "RelatedSearches",
                                value: k,
                              },
                            ]),
                        ...(r()(L)
                          ? []
                          : [
                              {
                                "@type": "PropertyValue",
                                name: "PopularFilters",
                                value:
                                  null == L
                                    ? void 0
                                    : L.map((e) => e.display_name),
                              },
                            ]),
                      ],
                    },
                r()(O)
                  ? void 0
                  : {
                      breadcrumb: {
                        "@type": "BreadcrumbList",
                        itemListElement: O.filter((e) => {
                          let { canonical_url: t } = e;
                          return t;
                        }).map(function () {
                          let { canonical_url: e, seo_h1: t } =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            a = arguments.length > 1 ? arguments[1] : void 0;
                          return {
                            "@type": "ListItem",
                            position: a + 1,
                            item: { "@id": "".concat(D).concat(e), name: t },
                          };
                        }),
                      },
                    },
                w && j ? { description: j } : void 0,
                w && I ? { headline: I } : void 0,
                w && S ? { keywords: S } : void 0
              )
            ),
          },
          "data-test": "page-level-json-ld",
          type: "application/ld+json",
        });
      };
      v.displayName = "PageLevelJsonLD";
    },
    58816: (e, t, a) => {
      "use strict";
      a.d(t, { B$: () => u, Rn: () => m, vS: () => p, yp: () => c });
      var l = a(3576),
        i = a(62701),
        o = a(65699),
        d = a(40123),
        r = a.n(d),
        n = a(91342),
        s = a(79012);
      let u = (e, t) => {
          let {
            wellnessAttributes: a,
            downstreamDescription: l,
            appleTermsUrl: i,
            commonSenseUrl: o,
            drugFacts: d,
            energyGuide: n,
            nutritionFacts: s,
            sizeChartFragmentUrl: u,
            hasChemicalDisclosure: c,
            hasWarningAndDisclosureData: p,
            hasMaterialSafetyDisclosure: m,
            softBullets: _,
            virtualBundleComponents: h,
            isProductComplementaryVirtualBundleParent: g,
          } = t;
          switch (e) {
            case "AtAGlance":
              return !r()(a);
            case "ProductDetails":
            case "Highlights":
              return l;
            case "ProductDetailsAndHighlights":
              return l || _;
            case "EnergyGuide":
              return !r()(n);
            case "AppleTerms":
              return i;
            case "DrugFacts":
              return d;
            case "LabelInfo":
              var y;
              return (
                (null == s || null == (y = s.value_prepared_list)
                  ? void 0
                  : y.length) ||
                (null == s ? void 0 : s.ingredients) ||
                (null == s ? void 0 : s.warning)
              );
            case "SizeChart":
              return u;
            case "ParentalInfo":
              return o;
            case "ChemicalData":
              return c || m;
            case "WarningsAndDisclosureData":
              return p;
            case "VirtualBundleComponentCarousel":
              return (null == h ? void 0 : h.length) && g;
            case "Specifications":
              return !g;
            default:
              return !0;
          }
        },
        c = (e) => {
          let {
            sectionType: t,
            questionCount: a,
            isBot: d,
            virtualBundleComponentsTotalQuantity: r,
          } = e;
          switch (t) {
            case "QuestionsAndAnswers": {
              let e = (0, s.mU)(),
                { title: t } = e,
                d = (0, o._)(e, ["title"]);
              return (0, i._)((0, l._)({}, d), {
                title: t + (a && a > 0 ? " (".concat(a, ")") : ""),
              });
            }
            case "ShippingAndReturns":
              return (0, s.rM)(d);
            case "VirtualBundleComponentCarousel":
              return (0, i._)((0, l._)({}, (0, s._z)()), {
                title: "This Value Bundle includes "
                  .concat(r, " ")
                  .concat((0, n.td)("item", null != r ? r : 0)),
              });
            default:
              return s.Us[t];
          }
        },
        p = (e) => {
          let { sections: t } = e;
          return t.reduce(
            (e, t) => (
              (e[t.section_type] = { isAccordionOpen: t.is_open_by_default }), e
            ),
            {}
          );
        },
        m = (e) => "".concat(e, "-accordion-scroll-id");
    },
    59955: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => i });
      var l = a(18847);
      let i = a.n(l)()(
        () =>
          a
            .e(5101)
            .then(a.bind(a, 25332))
            .then((e) => e.ReviewSummary),
        { loadableGenerated: { webpack: () => [25332] } }
      );
      i.displayName = "ReviewSummary";
    },
    60780: (e, t, a) => {
      "use strict";
      a.d(t, { t: () => u });
      var l = a(95408),
        i = a(42252),
        o = a(81994),
        d = a(94259),
        r = a(72396),
        n = a(14232),
        s = a(1022);
      let u = (e) => {
        let { formFactor: t } = (0, n.useContext)(d.B.Context),
          { asPath: a } = (0, i.rd)(),
          u = (0, s.B5)(a),
          { sendSpeedCurveABTestData: c } = (0, o.Z)({ forceSample: !0 }),
          p = (0, n.useCallback)(
            (a) => (null != a ? a : (0, l.Mv)(e)) && "phone" === t && u,
            [e, t, u]
          );
        c(e);
        let { checkIsExperimentEnabledAndTrackFireflyEvent: m } = (0, r.G)(e, {
          checkIsExperimentEnabledWithCustomConditions: p,
        });
        return m();
      };
    },
    62100: (e, t, a) => {
      "use strict";
      a.d(t, { FU: () => D, ec: () => A, jb: () => E });
      var l = a(3576),
        i = a(62701),
        o = a(14232),
        d = a(42252),
        r = a(12001),
        n = a(3422),
        s = a(40196),
        u = a(68979),
        c = a(92013),
        p = a(76577),
        m = a(56606),
        _ = a(25017),
        h = a(52492),
        g = a(36810),
        y = a(26989),
        v = a(95636),
        P = a(54315),
        f = a(34781),
        x = a(1022);
      let b = {
          classifier: void 0,
          customPlp: !1,
          displayView: "standard",
          scan: !1,
          scanError: !1,
          scanType: "",
          searchKeywordMatch: "",
          searchRedirect: !1,
          searchRephrase: !1,
          searchType: "",
          search: !0,
        },
        D = () => {
          var e, t, a, y, D, A;
          let E = (0, d.rd)(),
            { asPath: C, query: w } = E,
            T = "true" === (0, n.xs)(w, "redirect"),
            I = (0, s.Hq)(C),
            S = null == (e = (0, u.w)(c.kI)) ? void 0 : e.toString(),
            R = (0, u.w)(c.ew),
            N = (0, u.w)(c.x4),
            j = (0, u.w)(c.ni),
            k = (0, u.w)(c.dU),
            L = !!k,
            O = (0, u.w)(p.Mv),
            F = L ? k : j,
            M = (0, n.xs)(w, "searchTermRaw"),
            B = (0, x.Pw)(E),
            G =
              null == (y = (0, u.w)((0, m.X6)("d_categorytaxonomy"))) ||
              null == (a = y.options) ||
              null == (t = a[0])
                ? void 0
                : t.display_name,
            V = (0, u.w)(_.XN),
            [z, H] = (0, o.useState)(() => (0, r.OZ)());
          (0, o.useEffect)(() => H((0, r.OZ)()), [C]);
          let { previousSearchTerm: U } = z,
            W = (!!F && F !== U) || T,
            K = 0 === R,
            q = (0, f.XM)(),
            J = (0, u.w)(_.F1),
            Y =
              null !=
              (A = null == (D = (0, v.Y7)()) ? void 0 : D.preferredStoreName)
                ? A
                : "",
            Q = (0, u.w)(h.ae),
            $ = (0, o.useMemo)(
              () => (null == Q ? void 0 : Q.filter((e) => (0, g.oc)(e)).length),
              [Q]
            ),
            X = (0, o.useMemo)(
              () =>
                null == J
                  ? void 0
                  : J.map((e) => {
                      var t;
                      return null == (t = e.values)
                        ? void 0
                        : t.map((t) => ({ type: e.facet_id, value: t.label }));
                    }).flat(),
              [J]
            ),
            Z = (0, o.useMemo)(() => {
              let e = null == B ? void 0 : B.includes(P.$O);
              if (B && Y && e)
                return [{ type: "d_storeavailability", value: Y }];
            }, [Y, B]),
            ee = (0, o.useMemo)(
              () => [...(null != X ? X : []), ...(null != Z ? Z : [])],
              [X, Z]
            ),
            et = ["search", "category", "DLP"].includes(I),
            ea = [
              "search",
              "category",
              "dynamicBrand",
              "seller",
              "promo",
              "DLP",
            ].includes(I),
            el = L || "y" === (0, n.xs)(w, "oi"),
            ei = "y" === (0, n.xs)(w, "oi") && U !== j ? U : null,
            eo = ["search", "DLP"].includes(I)
              ? null != F
                ? F
                : ""
              : "non-search",
            ed = (0, o.useMemo)(
              () =>
                (0, i._)((0, l._)({}, et ? b : void 0), {
                  displayView: "standard",
                  hasPreselectedFacet: V,
                  newSearch: W,
                  nullSearch: K,
                  refinement: ee,
                  responseId: O,
                  resultCount: R,
                  searchAutocorrect: L,
                  searchCategory: G,
                  searchPage: S,
                  searchRawTerm: null != ei ? ei : M || j,
                  searchRecovery: q,
                  searchRedirect: T,
                  searchRephrase: el,
                  searchTerm: eo,
                  sortMethod: N,
                  sponsoredResultCount: $,
                }),
              [el, V, W, K, ee, O, R, L, G, j, S, q, T, M, eo, et, N, $, ei]
            );
          if (ea) return ed;
        },
        A = (e) =>
          (0, o.useMemo)(
            () =>
              null == e
                ? void 0
                : e
                    .filter((e) => (0, g.oc)(e))
                    .filter((e) => "criteo" === (0, g.$Z)(e))
                    .map((e) => {
                      var t, a;
                      let l =
                          null != (t = (0, y.Gs)(null == e ? void 0 : e.parent))
                            ? t
                            : (0, y.Gs)(e),
                        { impression_id: i } =
                          null != (a = (0, g.y4)(e)) ? a : {};
                      return { creative_id: i, tcin: l };
                    }),
            [e]
          ),
        E = (e) =>
          (0, o.useMemo)(
            () =>
              null == e
                ? void 0
                : e
                    .map((e, t) => {
                      if ((0, g.oc)(e) && "ratp" === (0, g.$Z)(e)) {
                        var a;
                        let { impression_id: l, click_token: i } =
                          null != (a = (0, g.y4)(e)) ? a : {};
                        return {
                          ad_token: i,
                          position: t,
                          server_impression_id: l,
                        };
                      }
                      return null;
                    })
                    .filter((e) => null !== e),
            [e]
          );
    },
    64103: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => s, h: () => n });
      var l = a(14232),
        i = a(9864),
        o = a(10754),
        d = a(73208),
        r = a(29733);
      let n = (e) => {
          let {
              selectPdpSpecificRecommendations: t,
              category_id: a,
              doctype: o,
              placementId: d,
              recommended_products: r,
              should_skip_client_side_recommendations_request: n,
              strategy_description: s,
              strategy_id: u,
              strategy_name: c,
            } = e,
            p = (0, l.useMemo)(
              () => ({
                categoryId: t(i.k0),
                docType: t(i.by),
                placementId: t(i.J1),
                recommendedProducts: t(i.S),
                strategyDescription: t(i.wn),
                strategyId: t(i.$G),
                strategyName: t(i.Lv),
              }),
              [t]
            ),
            m = (0, l.useMemo)(
              () => ({
                categoryId: a,
                docType: o,
                placementId: d,
                recommendedProducts:
                  null == r ? void 0 : r.map((e) => e.redsky_product),
                strategyDescription: null != s ? s : "",
                strategyId: null != u ? u : "",
                strategyName: null != c ? c : "",
              }),
              [a, o, d, r, s, u, c]
            );
          return n ? m : p;
        },
        s = (e) => {
          let { placementId: t } = e,
            a = (0, d.EJ)(r.pS);
          return a && t === o.CH.PDP_PRODUCT_ALTERNATIVES
            ? "Explore more ".concat(a)
            : a && t === o.CH.PDP_DISCOVERY_TOP_PERFORMING
            ? "Top-rated in ".concat(a)
            : a && t === o.CH.PDP_DISCOVERY_NEWNESS
            ? "Best-selling new arrivals in ".concat(a)
            : a && t === o.CH.PDP_DISCOVERY_DEALS
            ? "Deals on trending ".concat(a)
            : null === o.ut || void 0 === o.ut
            ? void 0
            : o.ut[t];
        };
    },
    65205: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => o });
      var l = a(53441),
        i = a(87964);
      let o = async function (e) {
        var t;
        let { queryVariables: a = {} } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.preloadInitialQuery(i.pq, a, {
          cookies: l.parse(
            (null == (t = e.req) ? void 0 : t.headers.cookie) || ""
          ),
        });
      };
    },
    68189: (e, t, a) => {
      "use strict";
      a.d(t, { lY: () => b, uk: () => E, xs: () => C, zc: () => A });
      var l = a(3576),
        i = a(62701),
        o = a(65699),
        d = a(14232),
        r = a(42252),
        n = a(94259),
        s = a(4042),
        u = a(54687),
        c = a(70418),
        p = a(53842),
        m = a(17379),
        _ = a(78502),
        h = a(95636),
        g = a(89514),
        y = a(19427),
        v = a(95408),
        P = a(40196),
        f = a(61870),
        x = a(3422);
      let b = "@web/domain-product/get-pdp-v1",
        { useQuery: D } = (0, m.T)({
          name: b,
          defaultOptions: { staleTime: 5e3, keepPreviousData: !0 },
          keyFn: (e) => {
            let { visitor_id: t } = e;
            return [b, (0, o._)(e, ["visitor_id"])];
          },
          queryFn: async (e) => {
            let {
                tcin: t,
                store_id: i,
                pricing_store_id: o = s.Vz,
                scheduled_delivery_store_id: d,
                has_financing_options: r,
                visitor_id: n,
                include_obsolete: m,
                is_bot: _,
                latitude: h,
                longitude: g,
                page: v,
                channel: P,
                zip: x,
                state: b,
                skip_personalized: D,
                skip_variation_hierarchy: A,
              } = null != e ? e : {},
              {
                apiKey: E,
                baseUrl: C,
                apis: {
                  product: { endpointPaths: w },
                },
              } = (0, y.$)().services.redskyAggregations,
              T = await (0, u.E)(),
              { pdpClientV1: I, pdpServerV1: S } = null != w ? w : {};
            if (!I) throw Error("path not defined for pdp_v1 query");
            let R = c.o.buildURLWithParams(
              I,
              {
                key: E,
                effective_date: T,
                tcin: t,
                is_bot: _,
                store_id: i,
                pricing_store_id: o,
                has_pricing_store_id: !!o,
                scheduled_delivery_store_id: d,
                has_financing_options: r,
                include_obsolete: m,
                visitor_id: n,
                latitude: h,
                longitude: g,
                zip: x,
                state: b,
                skip_personalized: D,
                skip_variation_hierarchy: A,
                channel: P,
                page: v,
              },
              C
            );
            try {
              let {
                data: e,
                ok: t,
                statusText: i,
                status: o,
              } = await (0, p.n)(R, {
                partialErrorTag: f.O0.REDSKY_AGGREGATIONS_PDP_PARTIAL_API_ERROR,
                debugImportQueryForGraphQLSourceMode: () =>
                  a.e(612).then(a.t.bind(a, 58119, 17)),
              });
              if (t)
                return {
                  data: (0, l._)(
                    {},
                    null == e ? void 0 : e.data,
                    null == e ? void 0 : e.extensions
                  ),
                  metadata: { status: o },
                };
              throw Error("".concat(i));
            } catch (e) {
              return {
                data: void 0,
                metadata: { status: e.status, isError: !0 },
              };
            }
          },
        }),
        A = D,
        E = (e) => {
          var t, a, l, i, o, u, c, p, m;
          let y = (0, r.rd)(),
            f =
              null !=
              (t = null == e ? void 0 : e.parentOrStandaloneTcinElseChildTcin)
                ? t
                : (0, x.aZ)(y.asPath),
            { preferredStoreId: b, queryState: D } = (0, h._f)(),
            E = null != (a = null == e ? void 0 : e.storeIdFromParam) ? a : b,
            C = (0, v.Mv)("PDP_FINANCING_OPTION_ENABLED"),
            w = !!f && (0, _.$6)(D) && (null == e ? void 0 : e.enabled) !== !1,
            T = (0, g.j)() || "0",
            { isBot: I } = (0, d.useContext)(n.B.Context),
            S = {
              tcin:
                null != (i = null != (l = null == e ? void 0 : e.tcin) ? l : f)
                  ? i
                  : "",
              pricing_store_id:
                null !=
                (u =
                  null != (o = null == e ? void 0 : e.storeIdFromServer)
                    ? o
                    : E)
                  ? u
                  : s.Vz,
              store_id:
                null != (c = null == e ? void 0 : e.storeIdFromServer) ? c : E,
              has_financing_options: C,
              visitor_id: T,
              include_obsolete: !0,
              is_bot: I,
              skip_personalized: !0,
              skip_variation_hierarchy: !0,
              channel: null != (p = null == e ? void 0 : e.channel) ? p : "WEB",
              page:
                null != (m = null == e ? void 0 : e.page)
                  ? m
                  : (0, P.x6)(y.asPath),
            };
          return A(S, { enabled: w });
        },
        C = (e) => {
          let { queryState: t } = (0, h._f)(),
            a = !!(null == e ? void 0 : e.tcin) && (0, _.$6)(t);
          return E((0, i._)((0, l._)({}, e), { enabled: e.enabled && a }));
        };
    },
    68516: (e, t, a) => {
      "use strict";
      a.d(t, { O: () => h });
      var l = a(37876),
        i = a(18847),
        o = a.n(i),
        d = a(40123),
        r = a.n(d),
        n = a(96753),
        s = a(73208),
        u = a(32038),
        c = a(95408),
        p = a(98650),
        m = a(48957);
      let _ = o()(
          () =>
            a
              .e(2985)
              .then(a.bind(a, 55664))
              .then((e) => e.ProductDetailPageHighlights),
          { loadableGenerated: { webpack: () => [55664] } }
        ),
        h = () => {
          var e;
          let t = (0, m.Q)(),
            { bullets: a = [], title: i } =
              null !=
              (e = (() => {
                var e, t, a, l;
                let i = null != (e = (0, s.K1)(u.hf)) ? e : {},
                  o = null != (t = (0, s.K1)(u.h5)) ? t : [],
                  d = (0, s.K1)(u.Gp);
                if (!(0, c.Mv)(p.d4)) return i;
                let r = o.find((e) => e.image_url === d),
                  n =
                    null != (a = null == r ? void 0 : r.model_metadata)
                      ? a
                      : [];
                if (!n.length) return i;
                if (!i) return;
                let m = (
                    null != (l = null == i ? void 0 : i.bullets) ? l : []
                  ).filter(function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "";
                    return (
                      !e.toLowerCase().startsWith("model wears") &&
                      !e.toLowerCase().startsWith("models wear")
                    );
                  }),
                  _ = [];
                return (
                  null == n ||
                    n.forEach((e) => {
                      (null == e ? void 0 : e.size_as_worn) &&
                        (null == e ? void 0 : e.height) &&
                        _.push(
                          "Model wears size "
                            .concat(e.size_as_worn, " and is ")
                            .concat(e.height)
                        ),
                        (null == e ? void 0 : e.size_as_worn) &&
                          !(null == e ? void 0 : e.height) &&
                          _.push("Model wears size ".concat(e.size_as_worn));
                    }),
                  { title: i.title, bullets: [..._, ...m] }
                );
              })())
                ? e
                : {};
          return r()(a)
            ? null
            : (0, l.jsx)("div", {
                className: t ? "h-margin-l-default" : void 0,
                "data-test": n.DN,
                children: (0, l.jsx)(_, { bullets: a, title: i }),
              });
        };
      h.displayName = "DynamicProductDetailPageHighlights";
    },
    70798: (e, t, a) => {
      "use strict";
      a.d(t, { m: () => u });
      var l = a(53842),
        i = a(70418),
        o = a(54687),
        d = a(17379),
        r = a(19427),
        n = a(61870);
      let s = "@web/domain-product/get-collection-parents-v1",
        { useQuery: u } = (0, d.T)({
          name: s,
          keyFn: (e) => {
            if (void 0 === e.tcins) throw TypeError("tcins are required");
            return [s, e];
          },
          queryFn: async (e) => {
            let { tcins: t } = null != e ? e : {},
              {
                apiKey: a,
                baseUrl: d,
                apis: {
                  product: { endpointPaths: s },
                },
              } = (0, r.$)().services.redskyAggregations,
              u = await (0, o.E)();
            if (!t)
              throw Error("TCINS not defined for collection_parents_v1 query");
            if (!(null == s ? void 0 : s.collectionParentsV1))
              throw Error("path not defined for collection_parents_v1 query");
            let c = i.o.buildURLWithParams(
                null == s ? void 0 : s.collectionParentsV1,
                { key: a, effective_date: u, tcins: t },
                d
              ),
              {
                data: p,
                ok: m,
                statusText: _,
              } = await (0, l.n)(c, {
                partialErrorTag:
                  n.O0.REDSKY_AGGREGATIONS_COLLECTION_PARENTS_PARTIAL_API_ERROR,
              });
            if (m) {
              var h;
              return null != (h = null == p ? void 0 : p.data) ? h : null;
            }
            throw Error("".concat(_));
          },
        });
    },
    71705: (e, t, a) => {
      "use strict";
      a.d(t, { B: () => r, h: () => d });
      var l = a(37876),
        i = a(14232);
      let o = (0, i.createContext)({ isWithinDrawer: !1 });
      o.displayName = "ViewDetailsModalContext";
      let d = (e) => {
        let { children: t } = e;
        return (0, l.jsx)(o.Provider, {
          value: { isWithinDrawer: !0 },
          children: t,
        });
      };
      d.displayName = "ViewDetailsModalContextProvider";
      let r = () => (0, i.useContext)(o);
    },
    71933: (e, t, a) => {
      "use strict";
      a.d(t, {
        B_: () => c,
        D3: () => g,
        SR: () => u,
        Wf: () => p,
        _S: () => _,
        j: () => r,
        n2: () => n,
        of: () => m,
        sc: () => s,
        wX: () => h,
      });
      var l = a(77232),
        i = a(98601),
        o = a(42773),
        d = a(48649);
      let r = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-0" })(
          ["font-size:", ";padding-top:", ";padding-bottom:", ";", ""],
          i.gx.size.text.medium,
          i.xe.generic.x2,
          i.xe.generic.x4,
          (e) => {
            let { $isWithinDrawer: t } = e;
            return (
              !t &&
              "\n  @media (min-width: "
                .concat(i.fi.md, ") {\n    padding-right: ")
                .concat(i.xe.generic.x4, ";\n    padding-left: ")
                .concat(i.xe.generic.x4, ";\n  }\n  ")
            );
          }
        ),
        n = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-1" })(
          [".apple-term > span:first-child{font-size:", ";font-weight:bold;}"],
          i.gx.size.heading.level4
        ),
        s = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-2" })([
          "background:#fff000;max-width:385px;padding:20px 5px;",
        ]),
        u = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-3" })([
          "border-bottom:1px dotted #000;",
        ]),
        c = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-4" })([
          "font-size:40px;",
        ]),
        p = (0, l.Ay)(o.D).withConfig({ componentId: "sc-e5cb9e7d-5" })([
          "border-bottom:1px solid rgb(214,214,214);",
        ]),
        m = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-6" })([
          "margin-left:15px;border-top:1px solid rgb(214,214,214);",
        ]),
        _ = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-7" })(
          [
            "background-color:",
            ";border-radius:",
            ";box-shadow:",
            ";padding:",
            " ",
            ";@media (min-width:",
            "){padding:",
            " ",
            ";}",
          ],
          i.Tj.background.default,
          i.PQ.radius.x2,
          i.r7.low.onLight,
          i.xe.generic.x4,
          i.xe.generic.x2,
          i.fi.md,
          i.xe.generic.x4,
          i.xe.generic.x6
        ),
        h = (0, l.Ay)(d.n).withConfig({ componentId: "sc-e5cb9e7d-8" })(
          [
            "position:relative;margin:0;&::after{width:calc(100% - calc(",
            " * 2)) !important;}&:last-child::after{content:none;}",
          ],
          i.xe.generic.x4
        ),
        g = l.Ay.div.withConfig({ componentId: "sc-e5cb9e7d-9" })(
          [
            "@media (min-width:",
            "){display:grid;grid-template-columns:",
            ";column-gap:",
            ";}",
          ],
          i.fi.lg,
          (e) => {
            let { shouldContainHighlights: t } = e;
            return t ? "1fr 1fr" : "1fr";
          },
          i.xe.generic.x8
        );
    },
    73232: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => n });
      var l = a(31294),
        i = a(40123),
        o = a.n(i),
        d = a(50046),
        r = a.n(d);
      let n = (e) => {
        var t, a;
        let i = (0, l.W)()(),
          d = null == i || null == (t = i.metadata) ? void 0 : t.xv,
          n =
            null == d
              ? void 0
              : d.map((e) => {
                  var t, a;
                  return {
                    contextQualified:
                      null != (t = null == e ? void 0 : e.xc) ? t : "",
                    treatmentDelivered: (null == e ? void 0 : e.xd)
                      ? Object.entries(r()(...e.xd)).map((e) => {
                          let [t, a] = e;
                          return { key: t, value: a };
                        })
                      : void 0,
                    treatmentId:
                      null != (a = null == e ? void 0 : e.xt) ? a : "",
                  };
                }),
          s =
            null !=
            (a =
              null == e
                ? void 0
                : e
                    .map((e) => {
                      var t, a;
                      return null !=
                        (a =
                          null == e || null == (t = e.xv)
                            ? void 0
                            : t.map((t) => {
                                var a, l;
                                return {
                                  contextQualified:
                                    null != (a = null == t ? void 0 : t.xc)
                                      ? a
                                      : "",
                                  treatmentId:
                                    null != (l = null == t ? void 0 : t.xt)
                                      ? l
                                      : "",
                                  treatmentDelivered: (
                                    null == e ? void 0 : e.tcin
                                  )
                                    ? [{ key: "tcin", value: e.tcin }]
                                    : void 0,
                                  treatmentErrorId: null == t ? void 0 : t.err,
                                };
                              }))
                        ? a
                        : [];
                    })
                    .flat())
              ? a
              : [],
          u = [...(null != n ? n : []), ...(null != s ? s : [])];
        return o()(u) ? void 0 : u;
      };
    },
    77140: (e, t, a) => {
      "use strict";
      a.d(t, { P: () => d });
      var l = a(37876),
        i = a(74820),
        o = a(18847);
      let d = a.n(o)()(
        () =>
          a
            .e(5821)
            .then(a.bind(a, 95805))
            .then((e) => e.SizeChartTab),
        {
          loadableGenerated: { webpack: () => [95805] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(i.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      d.displayName = "SizeChartTab";
    },
    77248: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => T });
      var l = a(37876),
        i = a(14232),
        o = a(73208),
        d = a(32038),
        r = a(26989),
        n = a(19351),
        s = a(60823),
        u = a(42773),
        c = a(55472),
        p = a(1905),
        m = a(15550),
        _ = a(15039),
        h = a.n(_),
        g = a(75570),
        y = a(57025);
      let v = (e) => {
        let {
            badgeAttributes: t,
            badgeIndex: a = 0,
            badgeRef: o = null,
            isExpanded: d,
            isHeading: r,
            onClick: u,
            children: c,
          } = e,
          { value_name: p } = null != t ? t : {},
          { trackEvent: m } = (0, n.z1)(),
          { trackClick: _ } = (0, s.f)(),
          h = (0, i.useCallback)(() => {
            u && u(t),
              p &&
                (m({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    location: "pdp",
                    type: "click",
                    value: "at a glance badges_".concat(p),
                  },
                }),
                _.track({
                  featureType: "AT_A_GLANCE",
                  clickType: "EXPAND",
                  element: { type: "LINK", id: p },
                }));
          }, [t, u, _, m, p]),
          v = a > 5 && !d,
          P = "".concat(y.uS).concat(a);
        return (0, l.jsx)("div", {
          "data-test": y.PV,
          children: r
            ? c
            : (0, l.jsx)(g.N, {
                "aria-hidden": v,
                className: "h-text-md",
                "data-test": P,
                onClick: h,
                ref: o,
                tabIndex: v ? -1 : 0,
                children: c,
              }),
        });
      };
      v.displayName = "ProductWellnessBadgeWrapper";
      var P = a(98601),
        f = a(77232);
      let x = f.Ay.ul.withConfig({ componentId: "sc-ad9d1286-0" })(
          ["display:grid;grid-template-columns:", ";column-gap:", ";"],
          (e) => {
            let { visibleBadges: t = y.bv } = e;
            return t > 6 ? "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr";
          },
          P.xe.generic.x2
        ),
        b = f.Ay.span.withConfig({ componentId: "sc-ad9d1286-1" })(
          ["column-gap:", ";margin-top:6px;margin-bottom:6px;"],
          P.xe.generic.x2
        ),
        D = (e) => {
          let {
            badgeAttributes: t,
            badgeIndex: a,
            badgeRef: i,
            isExpanded: o,
            isHeading: d,
            onClick: r,
          } = e;
          if (!t) return null;
          let { value_name: n, badge_url: s } = t;
          return (0, l.jsx)(v, {
            badgeAttributes: t,
            badgeIndex: a,
            badgeRef: i,
            isExpanded: o,
            isHeading: d,
            onClick: r,
            children: (0, l.jsxs)(b, {
              className: "h-display-flex h-flex-align-center h-text-left",
              children: [
                (0, l.jsx)(m._, {
                  alt: "",
                  className: h()("h-display-flex", "h-flex-align-center", {
                    "h-padding-a-tiny": d,
                  }),
                  height: 32,
                  src: null != s ? s : "",
                  style: { objectFit: "cover" },
                  width: 32,
                }),
                (0, l.jsx)("span", { children: n }),
              ],
            }),
          });
        };
      D.displayName = "ProductWellnessBadge";
      var A = a(78456),
        E = a(37801);
      let C = (e) => {
        let { badgeAttributes: t, isModalOpen: a, closeModalCallback: i } = e,
          { value_name: o, wellness_description: d } = null != t ? t : {},
          r = (0, l.jsx)(D, { badgeAttributes: t, isHeading: !0 });
        return (0, l.jsx)(A.$, {
          "data-test": y.Vz,
          headingText: null != o ? o : "",
          isOpen: a,
          isShort: !0,
          modalHeaderProps: {
            headingText: r,
            headingProps: { className: "h-margin-l-x2 h-margin-v-tight" },
          },
          onCloseClick: i,
          onRequestClose: i,
          renderCellButton: (0, l.jsx)(E.N, {
            firstButtonProps: { children: "Got it!", onClick: i },
            firstButtonVariant: "primary",
          }),
          children: d,
        });
      };
      C.displayName = "ProductWellnessModal";
      var w = a(71705);
      let T = (e) => {
        var t;
        let {
            headingLevel: a = 2,
            shouldDisplayHeading: m = !0,
            visibleBadgesOverride: _,
          } = e,
          h = null != (t = (0, o.K1)(d.qO)) ? t : [],
          [g, v] = (0, i.useState)(),
          [P, f] = (0, i.useState)(!1),
          [b, A] = (0, i.useState)(!1),
          [E, T] = (0, i.useState)(y.Cz),
          { isWithinDrawer: I } = (0, w.B)(),
          { screenLg: S } = (0, c.e)(),
          R = (0, i.useRef)(null),
          N = S && !I ? y.K4 : y.bv,
          j = _ || N,
          k = (0, o.K1)(r.Gs) || "",
          { trackEvent: L } = (0, n.z1)(),
          { trackClick: O } = (0, s.f)(),
          F = (0, i.useCallback)(
            (e) => {
              e &&
                (L({
                  guest: { eventType: "customInteraction" },
                  customInteraction: {
                    location: "pdp",
                    type: "click",
                    value: "at a glance badges_".concat(e),
                  },
                }),
                O.track({
                  featureType: "AT_A_GLANCE",
                  clickType: "show less" === e ? "SHOW_LESS" : "SHOW_MORE",
                  element: { type: "TCIN", id: k },
                })),
                A((e) => !e);
            },
            [L, O, k]
          ),
          M = (0, i.useCallback)((e) => {
            f(!0), v(e);
          }, []),
          B = (0, i.useCallback)(() => {
            f(!1);
          }, [f]),
          G = h.length > j;
        return ((0, i.useEffect)(() => {
          var e;
          b && (null == R || null == (e = R.current) || e.focus());
        }, [b]),
        (0, i.useEffect)(() => {
          var e, t;
          T(
            ((e, t) => {
              let a = t === y.K4 ? 5 : 2;
              return e * (t / a + 0.5);
            })(
              null !=
                (t =
                  null == R || null == (e = R.current)
                    ? void 0
                    : e.clientHeight)
                ? t
                : y.qS,
              j
            )
          );
        }, [S, j, I]),
        h.length)
          ? (0, l.jsxs)("div", {
              className: "h-margin-v-default h-margin-l-auto h-margin-r-auto",
              "data-test": y.ux,
              children: [
                m &&
                  (0, l.jsx)(u.D, {
                    "data-test": y.Fn,
                    level: a,
                    size: 4,
                    children: "At a glance",
                  }),
                (0, l.jsx)(p.Y, {
                  buttonDataTest: y.Qj,
                  collapsedHeight: E,
                  isExpandableContent: G,
                  isExpanded: b,
                  onClick: F,
                  children: (0, l.jsx)(x, {
                    "data-test": y.EV,
                    visibleBadges: j,
                    children: h.map((e, t) =>
                      (0, l.jsx)(
                        "li",
                        {
                          className: "h-display-flex h-flex-align-center",
                          children: (0, l.jsx)(D, {
                            badgeAttributes: e,
                            badgeIndex: t,
                            badgeRef: t === j ? R : null,
                            isExpanded: b,
                            onClick: M,
                          }),
                        },
                        e.value_id
                      )
                    ),
                  }),
                }),
                (0, l.jsx)(C, {
                  badgeAttributes: g,
                  closeModalCallback: B,
                  isModalOpen: P,
                }),
              ],
            })
          : null;
      };
      T.displayName = "ProductWellnessSummary";
    },
    77658: (e, t, a) => {
      "use strict";
      a.d(t, { Q: () => eX });
      var l = a(81110),
        i = a(40120),
        o = a(3576),
        d = a(37876),
        r = a(4594),
        n = a(23540),
        s = a(18847),
        u = a.n(s),
        c = a(72396),
        p = a(7337),
        m = a(80567);
      let _ = (0, d.jsx)(m.f, { COLUMNS: 12, ROWS: 4 }),
        h = () =>
          Promise.all([a.e(1178), a.e(9232), a.e(9681)])
            .then(a.bind(a, 43378))
            .then((e) => e.CompareChart),
        g = (e) => {
          var t = (0, l._)({}, (0, i._)(e));
          let { checkIsExperimentEnabledAndTrackFireflyEvent: a } = (0, c.G)(
            "PDP_COMPARE_SIMILAR_ITEMS_ENABLED"
          );
          return a()
            ? (0, d.jsx)(p.p, (0, o._)({ loader: h, placeholder: _ }, t))
            : null;
        };
      g.displayName = "LazyCompareChart";
      var y = a(73208),
        v = a(32038),
        P = a(29733),
        f = a(41622),
        x = a(19968),
        b = a(26989),
        D = a(34078),
        A = a(14398);
      let E = () => {
        var e, t;
        let a = null != (t = (0, y.EJ)(b.$W)) ? t : [];
        return (0, d.jsx)("div", {
          className: "h-margin-h-wide h-margin-b-jumbo h-text-center",
          children: (0, d.jsx)(D.pn, {
            "data-test": "collectionParentsPlaceholder",
            children:
              a.length > 1
                ? null == a
                  ? void 0
                  : a.map((e) => {
                      let { tcin: t, title: a } = e;
                      return (0, d.jsxs)(
                        D.Ox,
                        {
                          className:
                            "h-text-center h-margin-a-jumbo h-display-flex h-flex-direction-col",
                          "data-test": "collectionCardPlaceholder",
                          children: [
                            (0, d.jsx)(f.O, {
                              height: "300px",
                              isAnimated: !0,
                              width: "300px",
                            }),
                            (0, d.jsx)(A.L, { titleOverride: a }),
                            (0, d.jsx)("div", {
                              children: (0, d.jsx)(x.n, {
                                disabled: !0,
                                children: "View\xa0collection",
                              }),
                            }),
                          ],
                        },
                        "featured_in_collections_placeholder_".concat(t)
                      );
                    })
                : (0, d.jsxs)(D.Tw, {
                    children: [
                      (0, d.jsx)(D.UP, {
                        height: "300px",
                        isAnimated: !0,
                        width: "300px",
                      }),
                      (0, d.jsxs)("div", {
                        className: "h-margin-l-wide h-full-width",
                        children: [
                          (0, d.jsx)(A.L, {
                            titleOverride:
                              null == a || null == (e = a[0])
                                ? void 0
                                : e.title,
                          }),
                          (0, d.jsxs)("div", {
                            className:
                              "h-text-left h-margin-b-wide h-padding-t-wide",
                            children: [
                              (0, d.jsx)("div", {
                                className:
                                  "h-text-bs h-text-bold h-margin-b-tight",
                                children: "About the collection",
                              }),
                              (0, d.jsx)("div", {
                                children: (0, d.jsx)(f.O, {
                                  height: "136px",
                                  isAnimated: !0,
                                }),
                              }),
                            ],
                          }),
                          (0, d.jsx)("div", {
                            children: (0, d.jsx)(x.n, {
                              disabled: !0,
                              children: "View\xa0collection",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
          }),
        });
      };
      E.displayName = "FeaturedInCollectionsPlaceholder";
      let C = () =>
          Promise.all([a.e(3103), a.e(9735)])
            .then(a.bind(a, 94494))
            .then((e) => e.FeaturedInCollections),
        w = [
          "5xtnr",
          "5xtvd",
          "hz89j",
          "5xtq9",
          "4ydi5",
          "5xt3c",
          "5xsxr",
          "54v3g",
        ],
        T = (0, d.jsx)(E, {}),
        I = (e) => {
          let { "data-test": t = "featuredInCollections" } = e,
            a = (0, y.EJ)(v.Io);
          return (0, y.EJ)((0, P.oF)(w)) && (null == a ? void 0 : a.length)
            ? (0, d.jsx)("div", {
                "data-test": t,
                children: (0, d.jsx)(p.p, {
                  loader: C,
                  placeholder: T,
                  placeholderHeading: "This item is featured in",
                }),
              })
            : null;
        };
      I.displayName = "FeaturedInCollections";
      let S = (0, d.jsx)(f.O, {
          className: "h-margin-v-default",
          height: "60px",
        }),
        R = () =>
          Promise.all([a.e(2394), a.e(338), a.e(2601)])
            .then(a.bind(a, 61730))
            .then((e) => e.PriceMatchAndStoreInfo),
        N = () =>
          (0, d.jsx)(p.p, {
            headingSrOnly: !0,
            loader: R,
            placeholder: S,
            placeholderHeading: "Disclaimer",
          });
      N.displayName = "LazyPriceMatchAndStoreInfo";
      var j = a(3422),
        k = a(42252),
        L = a(14232),
        O = a(95408),
        F = a(98650),
        M = a(33508),
        B = a(13967),
        G = a(28391),
        V = a(44279);
      let z = Array.from({ length: 8 }, (e, t) => t),
        H = (e) => {
          let { reviewCardCount: t = 8 } = e;
          return (0, d.jsxs)("div", {
            className:
              "h-display-flex h-flex-direction-col h-flex-align-center",
            children: [
              (0, d.jsxs)("div", {
                className:
                  "h-display-flex h-flex-wrap h-full-width h-flex-justify-center",
                children: [
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "100px",
                    width: "360px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "100px",
                    width: "360px",
                  }),
                ],
              }),
              (0, d.jsx)(f.O, {
                className: "h-margin-h-tiny h-margin-t-wide h-margin-b-jumbo",
                height: "60px",
                width: "300px",
              }),
              (0, d.jsxs)("div", {
                className:
                  "h-display-flex h-flex-justify-center h-full-width h-margin-v-jumbo",
                children: [
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                  (0, d.jsx)(f.O, {
                    className: "h-margin-a-tiny",
                    height: "125px",
                    width: "125px",
                  }),
                ],
              }),
              (0, d.jsx)(f.O, {
                className: "h-margin-a-tiny",
                height: "30px",
                width: "100px",
              }),
              (0, d.jsx)(f.O, {
                className: "h-margin-h-tiny h-margin-v-jumbo",
                height: "100px",
              }),
              z
                .slice(0, t)
                .map((e) =>
                  (0, d.jsx)(
                    f.O,
                    { className: "h-margin-a-tiny", height: "200px" },
                    e
                  )
                ),
              (0, d.jsx)(f.O, {
                className: "h-margin-h-tiny h-margin-v-jumbo",
                height: "30px",
                width: "100px",
              }),
              (0, d.jsx)(f.O, {
                className: "h-margin-h-tiny h-margin-v-jumbo",
                height: "30px",
                width: "100px",
              }),
            ],
          });
        };
      H.displayName = "ReviewsPlaceholder";
      var U = a(29041),
        W = a(28874),
        K = a(82207),
        q = a(59955);
      let J = () =>
          Promise.all([
            a.e(3103),
            a.e(6397),
            a.e(6097),
            a.e(2394),
            a.e(338),
            a.e(6143),
            a.e(8764),
            a.e(4763),
          ])
            .then(a.bind(a, 6782))
            .then((e) => e.ReviewsSection),
        Y = (e) => {
          var t;
          let {
              review_card_count: a,
              hide_write_a_review_button: l = !1,
              variant: i,
            } = e,
            o = void 0 !== a && [0, 2, 8].includes(a) ? a : 8,
            { ratingsAndReviewsHeadingRef: r } = (0, M.A)(),
            { scrollOffsetFromPurchaseBlock: n } = (0, V.o)(),
            { query: s } = (0, k.rd)(),
            u = (0, j.xs)(s, "type"),
            c = null != (t = (0, y.EJ)(G.wk)) ? t : 0,
            m = (0, K.U)();
          (0, L.useEffect)(() => {
            (0, O.Mv)(F.Y$) || (u === U.nR && (0, B.o6)(r, n));
          }, [r, n, u]);
          let _ = (0, L.useMemo)(
            () => ({
              hideWriteReviewButton: l,
              isFullReviewsVariant: "FullReviews" === i,
            }),
            [l, i]
          );
          return (0, O.Mv)(F.Y$) || m
            ? null
            : "GenAiOnly" === i
            ? (0, d.jsx)(q.B, { variant: "GenAiOnly" })
            : (0, d.jsx)("div", {
                className:
                  (m
                    ? "h-display-none"
                    : "h-text-center h-padding-b-module-gap") +
                  ("FullReviews" === i ? " h-padding-v-default " : ""),
                "data-test": "ReviewsDashboard",
                id: "Reviews",
                children: (0, d.jsx)(W.R.Provider, {
                  value: _,
                  children: (0, d.jsx)(p.p, {
                    headingDataTest: "reviews-heading",
                    headingProps: {
                      className:
                        "h-bg-grayLightest h-text-center h-padding-b-default h-margin-b-none h-padding-h-module-gap h-padding-t-module-gap",
                      level: 3,
                      size: 2,
                    },
                    headingRef: r,
                    loadedProps: { review_card_count: o, variant: i },
                    loader: J,
                    placeholder: (0, d.jsx)(H, { reviewCardCount: o }),
                    placeholderHeading:
                      0 === c
                        ? "Guest ratings & reviews (0)"
                        : "Guest ratings & reviews",
                  }),
                }),
              });
        };
      Y.displayName = "ProductReviewsLazy";
      var Q = a(40123),
        $ = a.n(Q),
        X = a(1800),
        Z = a(98601),
        ee = a(94039),
        et = a(99064);
      let ea = () => {
        let e = (0, y.EJ)(b.$W),
          t = null == e ? void 0 : e[0].title,
          a = [];
        for (let e = 0; e < 6; e++)
          a.push(
            (0, d.jsx)(
              f.O,
              {
                fillColor: Z.Tj.palette.white,
                height: "490px",
                isAnimated: !0,
                stroke: Z.Tj.palette.gray.light,
                width: "300px",
              },
              "complete_the_set_placeholder_".concat(e)
            )
          );
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("div", {
              className: "h-text-center h-margin-b-wide",
              children: (0, d.jsx)("span", {
                className: "h-text-grayMedium",
                children: (0, X.D4)(t),
              }),
            }),
            (0, d.jsxs)("div", {
              className: "h-position-relative",
              children: [
                (0, d.jsx)(et.f, { noFadeInAnimation: !0, children: a }),
                (0, d.jsx)(ee.x, { layout: "selfCentering", size: "large" }),
              ],
            }),
          ],
        });
      };
      ea.displayName = "CompleteTheSetPlaceholder";
      var el = a(55935);
      let ei = (e) => {
        let { children: t } = e;
        return (0, d.jsx)("div", {
          className: "h-bg-grayLightest h-padding-v-module-gap",
          "data-test": "completeTheSet",
          children: t,
        });
      };
      ei.displayName = "CompleteTheSetLayout";
      let eo = () =>
          Promise.all([a.e(2365), a.e(7957)])
            .then(a.bind(a, 89770))
            .then((e) => e.CompleteTheSet),
        ed = () => {
          let e = (0, O.Mv)(F.v2),
            t = (0, y.EJ)(v.hw),
            a = (0, y.EJ)(b.$W),
            l = (0, el.s)();
          if (!l || l.length <= 1 || !e || $()(a)) return null;
          let i = (0, d.jsx)(ea, {});
          return "VPC" === t || "VC" === t || "CC" === t
            ? (0, d.jsx)(ei, {
                children: (0, d.jsx)(p.p, {
                  headingDataTest: "complete-the-set",
                  headingProps: {
                    className: "h-padding-h-module-gap h-text-center",
                  },
                  loader: eo,
                  placeholder: i,
                  placeholderHeading: "Complete the set",
                }),
              })
            : null;
        };
      ed.displayName = "LazyCompleteTheSet";
      var er = a(69107),
        en = a(10754),
        es = a(4588);
      let eu = () => {
        let e = (0, y.K1)(er.pD),
          t = null == e ? void 0 : e[0],
          a = (0, y.EJ)(P.gt),
          l = null == a ? void 0 : a.at(-1),
          { name: i, category_id: o } = null != l ? l : {},
          { description: r, facet_id: n } = null != t ? t : {},
          s = t && "".concat(r, " deals in ").concat(i);
        return t && o
          ? (0, d.jsx)(es.A, {
              categoryNodeId: o,
              customCarouselHeading: s,
              "data-test": "seasonalDealsCarousel",
              facetId: n,
              hasAddToCartButton: !0,
              placementId: en.CH.FACETED_ITEMS_WITH_DEALS,
            })
          : null;
      };
      eu.displayName = "LazyFestiveDealsRecommendationContainer";
      let ec = u()(
          () =>
            a
              .e(7653)
              .then(a.bind(a, 49765))
              .then((e) => e.ProductDetailAddByParam),
          { loadableGenerated: { webpack: () => [49765] } }
        ),
        ep = u()(
          () =>
            a
              .e(5818)
              .then(a.bind(a, 10180))
              .then((e) => e.ProductDetailAddToList),
          { loadableGenerated: { webpack: () => [10180] } }
        ),
        em = u()(
          () =>
            a
              .e(331)
              .then(a.bind(a, 60269))
              .then((e) => e.ProductDetailAddToRegistry),
          { loadableGenerated: { webpack: () => [60269] } }
        ),
        e_ = u()(
          () =>
            a
              .e(3858)
              .then(a.bind(a, 80078))
              .then((e) => e.ProductDetailAtAGlance),
          { loadableGenerated: { webpack: () => [80078] } }
        ),
        eh = u()(
          () =>
            Promise.all([a.e(1178), a.e(9232), a.e(5926)])
              .then(a.bind(a, 90466))
              .then((e) => e.ProductDetailAvailabilitySneakPeek),
          { loadableGenerated: { webpack: () => [90466] } }
        ),
        eg = u()(
          () =>
            Promise.all([a.e(2394), a.e(338), a.e(2774)])
              .then(a.bind(a, 38504))
              .then((e) => e.ProductDetailBreadcrumbs),
          { loadableGenerated: { webpack: () => [38504] } }
        ),
        ey = u()(
          () =>
            Promise.all([a.e(6397), a.e(6097), a.e(1417)])
              .then(a.bind(a, 1694))
              .then((e) => e.ProductDetailDeals),
          { loadableGenerated: { webpack: () => [1694] } }
        ),
        ev = u()(
          () =>
            Promise.all([a.e(8802), a.e(8374)])
              .then(a.bind(a, 15684))
              .then((e) => e.ProductDetailFinance),
          { loadableGenerated: { webpack: () => [15684] } }
        ),
        eP = u()(
          () =>
            Promise.all([
              a.e(6397),
              a.e(6097),
              a.e(2365),
              a.e(1178),
              a.e(9232),
              a.e(6974),
              a.e(8562),
              a.e(5825),
              a.e(4402),
            ])
              .then(a.bind(a, 81078))
              .then((e) => e.ProductDetailFulfillment),
          { loadableGenerated: { webpack: () => [81078] } }
        ),
        ef = u()(
          () =>
            Promise.all([
              a.e(6397),
              a.e(6097),
              a.e(2394),
              a.e(338),
              a.e(9778),
              a.e(5525),
              a.e(3273),
            ])
              .then(a.bind(a, 31228))
              .then((e) => e.ProductDetailFulfillmentMessaging),
          { loadableGenerated: { webpack: () => [31228] } }
        ),
        ex = u()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 45715))
              .then((e) => e.ProductDetailHighlights),
          { loadableGenerated: { webpack: () => [45715] } }
        ),
        eb = u()(
          () =>
            Promise.all([
              a.e(2394),
              a.e(338),
              a.e(939),
              a.e(8002),
              a.e(7218),
              a.e(3117),
              a.e(3742),
            ])
              .then(a.bind(a, 66181))
              .then((e) => e.ProductDetailImageGallery),
          { loadableGenerated: { webpack: () => [66181] } }
        ),
        eD = u()(
          () =>
            a
              .e(5729)
              .then(a.bind(a, 22349))
              .then((e) => e.ProductDetailLastPurchasedInfo),
          { loadableGenerated: { webpack: () => [22349] } }
        ),
        eA = u()(
          () =>
            a
              .e(9276)
              .then(a.bind(a, 17332))
              .then((e) => e.ProductDetailManufacturerNotesJumpLinks),
          { loadableGenerated: { webpack: () => [17332] } }
        ),
        eE = u()(
          () =>
            Promise.all([a.e(6397), a.e(6097), a.e(4756), a.e(3587)])
              .then(a.bind(a, 78145))
              .then((e) => e.ProductDetailPrice),
          { loadableGenerated: { webpack: () => [78145] } }
        ),
        eC = u()(
          () =>
            a
              .e(3541)
              .then(a.bind(a, 91724))
              .then((e) => e.ProductDetailRelatedLinks),
          { loadableGenerated: { webpack: () => [91724] } }
        ),
        ew = u()(
          () =>
            Promise.all([a.e(3103), a.e(6691), a.e(5900)])
              .then(a.bind(a, 38848))
              .then((e) => e.ProductDetailReviewsAndQuestionsJumpLinks),
          { loadableGenerated: { webpack: () => [38848] } }
        ),
        eT = u()(
          () =>
            a
              .e(9462)
              .then(a.bind(a, 74132))
              .then((e) => e.ProductDetailTitle),
          { loadableGenerated: { webpack: () => [74132] } }
        ),
        eI = u()(
          () =>
            Promise.all([a.e(2394), a.e(338), a.e(9573), a.e(1667)])
              .then(a.bind(a, 76463))
              .then((e) => e.ProductDetailVariationSelector),
          { loadableGenerated: { webpack: () => [76463] } }
        ),
        eS = u()(
          () =>
            Promise.all([a.e(3982), a.e(6397), a.e(6097), a.e(20)])
              .then(a.bind(a, 81816))
              .then((e) => e.ProductDetailSeasonalAssortmentDriver),
          { loadableGenerated: { webpack: () => [81816] } }
        ),
        eR = u()(
          () =>
            Promise.all([
              a.e(3103),
              a.e(6397),
              a.e(6097),
              a.e(1178),
              a.e(6974),
              a.e(4756),
              a.e(8098),
              a.e(3117),
              a.e(6691),
              a.e(6374),
            ])
              .then(a.bind(a, 68582))
              .then((e) => e.ProductDetailMiniBuyBox),
          { loadableGenerated: { webpack: () => [68582] } }
        ),
        eN = u()(
          () =>
            a
              .e(5555)
              .then(a.bind(a, 9708))
              .then((e) => e.ProductDetailAd),
          { loadableGenerated: { webpack: () => [9708] } }
        ),
        ej = u()(
          () =>
            Promise.all([a.e(6397), a.e(6097), a.e(8931)])
              .then(a.bind(a, 89644))
              .then((e) => e.ProductDetailCategoryBrowse),
          { loadableGenerated: { webpack: () => [89644] } }
        ),
        ek = u()(
          () =>
            a
              .e(9439)
              .then(a.bind(a, 29510))
              .then((e) => e.ManufacturerNotes),
          { loadableGenerated: { webpack: () => [29510] } }
        ),
        eL = u()(
          () =>
            a
              .e(2994)
              .then(a.bind(a, 39219))
              .then((e) => e.ProductDetailAccordionContainer),
          { loadableGenerated: { webpack: () => [39219] } }
        ),
        eO = u()(
          () =>
            a
              .e(7678)
              .then(a.bind(a, 45290))
              .then((e) => e.ProductDetailRecommendedProducts),
          { loadableGenerated: { webpack: () => [45290] } }
        ),
        eF = u()(
          () =>
            a
              .e(7934)
              .then(a.bind(a, 67884))
              .then((e) => e.OutfittingWrapper),
          { loadableGenerated: { webpack: () => [67884] } }
        ),
        eM = u()(
          () =>
            a
              .e(8648)
              .then(a.bind(a, 34332))
              .then((e) => e.ProductDetailPageFindsDriver),
          { loadableGenerated: { webpack: () => [34332] } }
        ),
        eB = u()(
          () =>
            a
              .e(911)
              .then(a.bind(a, 59378))
              .then((e) => e.TargetStyle),
          { loadableGenerated: { webpack: () => [59378] } }
        ),
        eG = u()(
          () =>
            Promise.all([a.e(6397), a.e(6097), a.e(7078), a.e(1874), a.e(1561)])
              .then(a.bind(a, 93470))
              .then((e) => e.ProductDetailTrafficAwareProductGrid),
          { loadableGenerated: { webpack: () => [93470] } }
        ),
        eV = u()(
          () =>
            a
              .e(6270)
              .then(a.bind(a, 48460))
              .then((e) => e.BeautyArViewerContainer),
          { loadableGenerated: { webpack: () => [48460] } }
        ),
        ez = u()(
          () =>
            Promise.resolve()
              .then(a.bind(a, 92642))
              .then((e) => e.SocialBuyNowButton),
          { loadableGenerated: { webpack: () => [92642] } }
        ),
        eH = (0, o._)(
          {},
          {
            ProductDetailAddByParam: ec,
            ProductDetailAddToList: ep,
            ProductDetailAddToRegistry: em,
            ProductDetailAtAGlance: e_,
            ProductDetailAvailabilitySneakPeek: eh,
            ProductDetailBreadcrumbs: eg,
            ProductDetailDeals: ey,
            ProductDetailFinance: ev,
            ProductDetailFulfillment: {
              component: eP,
              requiredInputs: ["store_id"],
            },
            ProductDetailFulfillmentMessaging: {
              component: ef,
              requiredInputs: ["circle_membership"],
            },
            ProductDetailHighlights: ex,
            ProductDetailImageGallery: eb,
            ProductDetailLastPurchasedInfo: eD,
            ProductDetailManufacturerNotesJumpLinks: eA,
            ProductDetailPrice: eE,
            ProductDetailRelatedLinks: eC,
            ProductDetailReviewsAndQuestionsJumpLinks: ew,
            ProductDetailTitle: eT,
            ProductDetailVariationSelector: eI,
            ProductDetailSeasonalAssortmentDriver: eS,
            ProductDetailMiniBuyBox: eR,
            SocialBuyNowButton: ez,
          },
          {
            UnderDevelopmentRecommendedProducts: {
              component: eO,
              requiredInputs: [
                "circle_membership",
                "purchasable_store_ids",
                "store_id",
              ],
            },
            ProductDetailAd: eN,
            ProductDetailCategoryBrowse: ej,
            ProductDetailCompareSimilarProducts: g,
            ProductDetailFeaturedInCollections: I,
            ProductDetailManufacturerNotes: ek,
            ProductDetailPriceMatchAndStoreInfo: N,
            ProductDetailAccordion: eL,
            ProductDetailRatingsAndReviews: Y,
            ProductDetailRecommendedProducts: eO,
            ProductDetailRecommendedProductsShopTheCollection: ed,
            ProductDetailRecommendedProductsDealsEvent: eu,
            ProductDetailRecommendedProductsOutfitting: eF,
            ProductDetailTargetFindsStories: eM,
            ProductDetailTargetStyle: eB,
            ProductDetailTrafficAwareProductGrid: eG,
            ProductDetailVirtualTryOnVisualizer: eV,
          }
        );
      var eU = a(18551),
        eW = a(50301),
        eK = a(951),
        eq = a(23945),
        eJ = a(48603),
        eY = a(55472),
        eQ = a(26),
        e$ = a(1814);
      let eX = (e) => {
        var t = (0, l._)({}, (0, i._)(e));
        let a = (() => {
            var e;
            let [t] = (0, eU.RJ)(),
              a = t(eW.xF),
              l =
                null !=
                  (e = (0, y.K1)(
                    (0, eK._K)({ isCircle360ActivePaidMember: a })
                  )) && e,
              i = (0, eq.V)(),
              o = (0, eJ.$7)(),
              d = i && o,
              { screenSmMax: r } = (0, eY.e)(),
              n =
                (0, eQ.X)() &&
                !(0, O.Mv)("FIND_ALTERNATIVE_CAROUSEL_KILL_SWITCH");
            return (0, L.useMemo)(
              () => ({
                is_product_buyable: !!l,
                is_auth_ready_and_guest_logged_in: d,
                is_mobile: r,
                should_show_find_alternative_carousel: n,
              }),
              [l, d, r, n]
            );
          })(),
          [s] = (0, e$.z)(),
          u = s(r.K8),
          c = s(r.IH),
          p = s(r.bF);
        return (0, d.jsx)(
          n.r,
          (0, o._)(
            {
              conditionMap: a,
              layout: u,
              modulesToComponentsMap: eH,
              pageContext: c,
              pageType: p,
            },
            t
          )
        );
      };
      eX.displayName = "ProductDetailPageLayoutZone";
    },
    79012: (e, t, a) => {
      "use strict";
      a.d(t, {
        h2: () => eh,
        Us: () => eP,
        mU: () => ey,
        rM: () => eg,
        _z: () => ev,
      });
      var l = a(37876),
        i = a(45715),
        o = a(74820),
        d = a(18847),
        r = a.n(d);
      let n = r()(
        () =>
          Promise.all([a.e(2394), a.e(338), a.e(989), a.e(1358)])
            .then(a.bind(a, 6417))
            .then((e) => e.QuestionsAndAnswersTab),
        {
          loadableGenerated: { webpack: () => [6417] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      n.displayName = "QuestionsAndAnswers";
      let s = r()(
        () =>
          a
            .e(599)
            .then(a.bind(a, 13642))
            .then((e) => e.DrugFactsTab),
        {
          loadableGenerated: { webpack: () => [13642] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      s.displayName = "AsyncSizeChartTab";
      let u = r()(
        () =>
          a
            .e(575)
            .then(a.bind(a, 86217))
            .then((e) => e.AppleTermsTab),
        {
          loadableGenerated: { webpack: () => [86217] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      u.displayName = "AppleTermsTab";
      let c = r()(
        () =>
          a
            .e(5349)
            .then(a.bind(a, 93883))
            .then((e) => e.NutritionFactsTab),
        {
          loadableGenerated: { webpack: () => [93883] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      c.displayName = "AsyncNutritionFactsTab";
      let p = r()(
        () =>
          Promise.all([a.e(2394), a.e(338), a.e(6051)])
            .then(a.bind(a, 9719))
            .then((e) => e.ParentalInfoTab),
        {
          loadableGenerated: { webpack: () => [9719] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      p.displayName = "AsyncParentalInfoTab";
      var m = a(77140);
      let _ = r()(
        () =>
          Promise.all([a.e(2394), a.e(338), a.e(6087)])
            .then(a.bind(a, 41446))
            .then((e) => e.EnergyGuide),
        {
          loadableGenerated: { webpack: () => [41446] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      _.displayName = "EnergyGuideTab";
      let h = r()(
        () =>
          a
            .e(3869)
            .then(a.bind(a, 49732))
            .then((e) => e.ChemicalDisclosureTab),
        {
          loadableGenerated: { webpack: () => [49732] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      h.displayName = "ChemicalDisclosureTab";
      var g = a(14232),
        y = a(19351),
        v = a(1905),
        P = a(94259),
        f = a(43792),
        x = a(68516),
        b = a(71933),
        D = a(77232),
        A = a(98601);
      let E = D.Ay.div.withConfig({ componentId: "sc-186bb31-0" })([
        "display:flex;justify-content:space-evenly;width:100%;",
      ]);
      D.Ay.div.withConfig({ componentId: "sc-186bb31-1" })(["height:100%;"]),
        D.Ay.div
          .attrs({ className: "h-text-break-word" })
          .withConfig({ componentId: "sc-186bb31-2" })([
          "max-width:100px;picture{margin:0 auto;}",
        ]),
        D.Ay.div.withConfig({ componentId: "sc-186bb31-3" })(
          ["@media (max-width:", "){min-width:92px;}"],
          A.fi.sm
        ),
        D.Ay.div.withConfig({ componentId: "sc-186bb31-4" })([
          "max-width:100px;margin:0 auto;",
        ]);
      var C = a(19968),
        w = a(78456),
        T = a(9361),
        I = a(73208),
        S = a(32038);
      let R = new Set(["Skyline Furniture", "Cloth & Co."]);
      var N = a(42773),
        j = a(75570);
      let k = D.Ay.div
          .attrs({
            className: "h-text-left h-margin-v-jumbo h-display-inline-block",
          })
          .withConfig({ componentId: "sc-7c55ef37-0" })(["max-width:100%;"]),
        L = D.Ay.ul.withConfig({ componentId: "sc-7c55ef37-1" })(
          ["padding-left:", ";> li{list-style-type:disc;}"],
          A.xe.generic.x10
        ),
        O = (e) => {
          let { itemNumber: t, headingRef: a } = e;
          return (0, l.jsxs)("div", {
            className: "h-text-center h-margin-t-default",
            children: [
              (0, l.jsx)(T.U, { width: 65 }),
              (0, l.jsx)(N.D, {
                className: "h-margin-b-tiny",
                "data-test": "swatchRequestHeading",
                level: 2,
                ref: a,
                size: 1,
                tabIndex: -1,
                children: "Request a free fabric sample",
              }),
              (0, l.jsx)("p", {
                children:
                  "This item has fabric samples available. Shipping is free.",
              }),
              (0, l.jsxs)(k, {
                children: [
                  (0, l.jsx)(N.D, {
                    className: "h-margin-t-default h-margin-b-none",
                    level: 3,
                    size: 2,
                    children: "Send an email to",
                  }),
                  (0, l.jsx)(j.N, {
                    className: "h-text-break-word",
                    "data-lnk": "HomeSwatch|emailOpen|".concat(t),
                    "data-test": "swatchRequestLink",
                    href: ((e) => {
                      let t = [
                        "Name & Address:",
                        "Item Number: ".concat(e),
                        "Color(s) desired:",
                      ].join("\n\n\n");
                      return ""
                        .concat(
                          "mailto:targetswatches@skylinefurnituremfg.com",
                          "?subject="
                        )
                        .concat(
                          encodeURIComponent(
                            "Fabric Sample Request for Item ".concat(e)
                          ),
                          "&body="
                        )
                        .concat(encodeURIComponent(t));
                    })(t),
                    children: "targetswatches@skylinefurnituremfg.com",
                  }),
                  (0, l.jsx)(N.D, {
                    className: "h-margin-t-default h-margin-b-none",
                    level: 3,
                    size: 2,
                    children: "Include in the email",
                  }),
                  (0, l.jsxs)(L, {
                    children: [
                      (0, l.jsx)("li", { children: "Your name and address" }),
                      (0, l.jsxs)("li", {
                        children: [
                          "This item number: ",
                          (0, l.jsxs)("b", { children: ["#", t] }),
                        ],
                      }),
                      (0, l.jsx)("li", {
                        children: "The color(s) you would like to request",
                      }),
                    ],
                  }),
                  (0, l.jsx)(N.D, {
                    className: "h-margin-t-default h-margin-b-x6",
                    level: 3,
                    size: 2,
                    children: "Samples ship in 1-2 business days",
                  }),
                ],
              }),
            ],
          });
        };
      O.displayName = "SwatchRequest";
      let F = () => {
        let [e, t] = (0, g.useState)(!1),
          a = (0, I.K1)(S.eX),
          i = ((e) => R.has(null != e ? e : ""))((0, I.K1)(S.Au)),
          o = (0, g.useRef)(null),
          { trackEvent: d } = (0, y.z1)(),
          r = (0, g.useCallback)(() => {
            e ||
              d({
                guest: { eventType: "customInteraction" },
                customInteraction: {
                  type: "click",
                  value: "HomeSwatch|modalOpen|".concat(a),
                },
              }),
              t(!e);
          }, [d, e, t, a]),
          n = (0, g.useCallback)(() => {
            var e;
            null == o || null == (e = o.current) || e.focus();
          }, [o]);
        return i
          ? (0, l.jsxs)("div", {
              className: "h-margin-b-wide",
              children: [
                (0, l.jsxs)(C.n, {
                  "data-test": "swatch-request-button",
                  onClick: r,
                  children: [
                    (0, l.jsx)(T.U, {
                      className: "h-margin-r-tiny",
                      width: 24,
                    }),
                    "Free fabric sample",
                  ],
                }),
                (0, l.jsx)(w.$, {
                  headingText: "Request a free fabric sample",
                  isOpen: e,
                  onAfterOpen: n,
                  onCloseClick: r,
                  onRequestClose: r,
                  children: (0, l.jsx)(O, { headingRef: o, itemNumber: a }),
                }),
              ],
            })
          : null;
      };
      F.displayName = "SwatchRequestButton";
      var M = a(36442),
        B = a(19581),
        G = a(84231),
        V = a(48957);
      let z = () => {
        let e = (0, I.K1)(S.Ou),
          t = (0, V.Q)(),
          a = (0, G.n)();
        return e
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                !a &&
                  !t &&
                  (0, l.jsx)(N.D, {
                    className: "h-text-bs h-margin-b-none",
                    level: 4,
                    children: "Description",
                  }),
                (0, l.jsx)(M.N, {
                  debugName: "pdp-details-description",
                  strategy: B.k.suppress,
                  children: (0, l.jsx)("div", {
                    className: t ? void 0 : "h-margin-t-x2",
                    dangerouslySetInnerHTML: { __html: e },
                    "data-test": "item-details-description",
                  }),
                }),
              ],
            })
          : null;
      };
      z.displayName = "ProductDetailDescription";
      var H = a(96753),
        U = a(71705);
      let W = (e) => {
        let { shouldContainHighlights: t } = e,
          { isBot: a } = (0, g.useContext)(P.B.Context),
          [i, o] = (0, g.useState)(!1),
          { trackEvent: d } = (0, y.z1)(),
          { isWithinDrawer: r } = (0, U.B)(),
          n = (0, V.Q)(),
          s = (0, g.useCallback)(() => {
            if (
              (d({
                guest: { eventType: "customInteraction" },
                customInteraction: {
                  type: "click",
                  value: "tab-".concat(
                    i ? "showLessDetails" : "showMoreDetails"
                  ),
                },
              }),
              !i)
            ) {
              var e;
              let t =
                null == (e = document.querySelector("#specAndDescript"))
                  ? void 0
                  : e.querySelector("h4");
              null == t || t.focus();
            }
            o(!i);
          }, [i, o, d]),
          [u, c] = (0, g.useState)(!1),
          p = (0, g.useCallback)((e) => {
            if (!e) return;
            let t = new ResizeObserver(() => {
              c(e.clientHeight > f.RM);
            });
            return t.observe(e), () => t.disconnect();
          }, []),
          m = t || a;
        return (0, l.jsx)(b.j, {
          $isWithinDrawer: r,
          "data-test": "productDetailTabs-itemDetailsTab",
          children: (0, l.jsx)(v.Y, {
            buttonDataTest: H.nP,
            collapsedHeight: f.RM,
            isExpandableContent: u,
            isExpanded: i,
            onClick: s,
            children: (0, l.jsxs)("div", {
              ref: p,
              children: [
                (0, l.jsx)(E, { children: (0, l.jsx)(F, {}) }),
                (0, l.jsxs)(b.D3, {
                  shouldContainHighlights: m,
                  children: [
                    m && !n && (0, l.jsx)(x.O, {}),
                    (0, l.jsx)("div", { children: (0, l.jsx)(z, {}) }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      W.displayName = "ItemDetailsTabInner";
      let K = () => (0, l.jsx)(W, { shouldContainHighlights: !1 });
      K.displayName = "ItemDetailsTab";
      let q = r()(
        () =>
          Promise.all([a.e(2394), a.e(338), a.e(1178), a.e(9232), a.e(7117)])
            .then(a.bind(a, 36314))
            .then((e) => e.ShippingReturnsTab),
        {
          loadableGenerated: { webpack: () => [36314] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      q.displayName = "ShippingReturnsTab";
      var J = a(5989),
        Y = a(97082),
        Q = a(2967),
        $ = a(43297),
        X = a.n($);
      let Z = () => {
        let { formId: e } = (0, Y.D)("incorrectProductInfoFormId"),
          t = (0, g.useCallback)(() => {
            (0, Q.Dw)(e);
          }, [e]);
        return (0, l.jsxs)("div", {
          className: X().IncorrectProductInfo,
          children: [
            "If the item details aren’t accurate or complete, we want to know about it.",
            (0, l.jsx)(J.C, {
              className: "h-margin-l-tiny",
              onClick: t,
              size: "sm",
              children: "Report this item.",
            }),
          ],
        });
      };
      Z.displayName = "IncorrectProductInfo";
      var ee = a(26989),
        et = a(14875),
        ea = a(39322),
        el = a(12281),
        ei = a(40123),
        eo = a.n(ei),
        ed = a(66634),
        er = a.n(ed);
      let en = () => {
        var e;
        let t = (0, I.K1)(S.N),
          a = (0, I.K1)(S.OD),
          i = (0, I.K1)(S.eX),
          o = (0, I.K1)(S.u0),
          d = null != (e = (0, I.K1)(S.V8)) && e,
          r = (0, I.K1)(S.me),
          n = (0, I.K1)(S.$X),
          s = n ? (0, et.pW)(n) : void 0,
          u = s ? (0, el.GP)(s, "MMMM d, yyyy") : "",
          c = (0, I.K1)(ee.Gs);
        return (0, l.jsxs)("div", {
          "data-test": "item-details-specifications",
          children: [
            !eo()(t) &&
              (null == t
                ? void 0
                : t.map((e) => {
                    let t = e
                      ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(ea.rQ, { html: e }),
                        })
                      : "";
                    return (0, l.jsxs)(
                      "div",
                      {
                        children: [
                          t,
                          (0, l.jsx)("hr", { "aria-hidden": "true" }),
                        ],
                      },
                      e
                    );
                  })),
            u &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: "Street Date" }),
                  ": ",
                  u,
                  (0, l.jsx)("hr", { "aria-hidden": "true" }),
                ],
              }),
            c &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: "TCIN" }),
                  ": ",
                  c,
                  (0, l.jsx)("hr", { "aria-hidden": "true" }),
                ],
              }),
            r &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: "UPC" }),
                  ": ",
                  r,
                  (0, l.jsx)("hr", { "aria-hidden": "true" }),
                ],
              }),
            i &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: "Item Number (DPCI)" }),
                  ": ",
                  i,
                  (0, l.jsx)("hr", { "aria-hidden": "true" }),
                ],
              }),
            o &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: "Origin" }),
                  ": ",
                  o,
                  (0, l.jsx)("hr", { "aria-hidden": "true" }),
                ],
              }),
            !eo()(a) &&
              (null == a ? void 0 : a.type) &&
              (null == a ? void 0 : a.description) &&
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("b", { children: er()(a.type) }),
                  ":",
                  " ",
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)(ea.rQ, { html: a.description }),
                  }),
                ],
              }),
            d &&
              (0, l.jsxs)("div", {
                "data-test": "itemDetailsTabMarketplaceMessage",
                children: [
                  (0, l.jsx)("div", {
                    className: "h-padding-t-x2",
                    children: (0, l.jsx)(ea.rQ, { html: H.t5 }),
                  }),
                  (0, l.jsx)("div", {
                    className: "h-padding-t-x2",
                    children: (0, l.jsx)(ea.rQ, { html: H.mr }),
                  }),
                ],
              }),
          ],
        });
      };
      en.displayName = "ProductDetailSpecifications";
      let es = () =>
        (0, l.jsxs)(b.j, {
          children: [
            (0, l.jsx)(en, {}),
            (0, l.jsx)("div", {
              className: "h-margin-t-x6",
              children: (0, l.jsx)(Z, {}),
            }),
          ],
        });
      es.displayName = "SpecificationsTab";
      var eu = a(77248);
      let ec = () =>
        (0, l.jsx)(b.j, {
          children: (0, l.jsx)(eu.F, {
            headingLevel: 4,
            shouldDisplayHeading: !1,
          }),
        });
      ec.displayName = "WellnessTab";
      let ep = () => (0, l.jsx)(W, { shouldContainHighlights: !0 });
      ep.displayName = "ItemDetailsAndHighlightsTab";
      let em = r()(
        () =>
          Promise.all([a.e(4030), a.e(7671)])
            .then(a.bind(a, 72382))
            .then((e) => e.VirtualBundleComponentCarouselTab),
        {
          loadableGenerated: { webpack: () => [72382] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(o.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      em.displayName = "VirtualBundleComponentCarouselTab";
      var e_ = a(89800);
      let eh = {
          AtAGlance: "AtAGlance",
          ProductDetails: "ProductDetails",
          ProductDetailsAndHighlights: "ProductDetailsAndHighlights",
          Highlights: "Highlights",
          Specifications: "Specifications",
          ShippingAndReturns: "ShippingAndReturns",
          SizeChart: "SizeChart",
          AppleTerms: "AppleTerms",
          QuestionsAndAnswers: "QuestionsAndAnswers",
          ParentalInfo: "ParentalInfo",
          DrugFacts: "DrugFacts",
          LabelInfo: "LabelInfo",
          EnergyGuide: "EnergyGuide",
          ChemicalData: "ChemicalData",
          WarningsAndDisclosureData: "WarningsAndDisclosureData",
          VirtualBundleComponentCarousel: "VirtualBundleComponentCarousel",
        },
        eg = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return {
            title: "Shipping & Returns",
            accordionId: eh.ShippingAndReturns,
            content: (0, l.jsx)(q, {}),
            isLoaded: e,
            trackingValueForAccordion: "tabShippingReturns",
            trackingFeatureType: "PRODUCT_SHIPPING_RETURNS_INFO",
          };
        },
        ey = () => ({
          title: "Q&A",
          accordionId: eh.QuestionsAndAnswers,
          content: (0, l.jsx)(n, {}),
          trackingValueForAccordion: "tabQA",
          trackingFeatureType: "QUESTIONS_AND_ANSWERS",
        }),
        ev = () => ({
          title: "",
          subhead: "Items in this Value Bundle may ship separately",
          accordionId: eh.VirtualBundleComponentCarousel,
          content: (0, l.jsx)(em, {}),
        }),
        eP = {
          AtAGlance: {
            title: "At a glance",
            accordionId: eh.AtAGlance,
            content: (0, l.jsx)(ec, {}),
            trackingValueForAccordion: "tabWellness",
          },
          ProductDetails: {
            title: "Description",
            accordionId: eh.ProductDetails,
            content: (0, l.jsx)(K, {}),
            trackingValueForAccordion: "tabDetails",
            trackingFeatureType: "PRODUCT_DETAILS",
          },
          ProductDetailsAndHighlights: {
            title: "Details",
            accordionId: eh.ProductDetailsAndHighlights,
            content: (0, l.jsx)(ep, {}),
            trackingValueForAccordion: "tabDetails",
            trackingFeatureType: "PRODUCT_HIGHLIGHTS_AND_DESCRIPTION",
          },
          Highlights: {
            title: "Highlights",
            accordionId: eh.Highlights,
            content: (0, l.jsx)(i.ProductDetailHighlights, {}),
            trackingValueForAccordion: "tabHighlights",
            trackingFeatureType: "PRODUCT_HIGHLIGHTS",
          },
          Specifications: {
            title: "Specifications",
            accordionId: eh.Specifications,
            content: (0, l.jsx)(es, {}),
            trackingValueForAccordion: "tabSpecifications",
            trackingFeatureType: "PRODUCT_SPECIFICATIONS",
          },
          ShippingAndReturns: eg(),
          SizeChart: {
            title: "Size Guide",
            accordionId: eh.SizeChart,
            content: (0, l.jsx)(m.P, {}),
            trackingValueForAccordion: "tabSizeChart",
            trackingFeatureType: "PRODUCT_SIZE_CHART",
          },
          AppleTerms: {
            title: "Apple terms",
            accordionId: eh.AppleTerms,
            content: (0, l.jsx)(u, {}),
            trackingValueForAccordion: "tabAppleTerms",
            trackingFeatureType: "PRODUCT_APPLE_TERMS",
          },
          QuestionsAndAnswers: ey(),
          ParentalInfo: {
            title: "Parental guide",
            accordionId: eh.ParentalInfo,
            content: (0, l.jsx)(p, {}),
            trackingValueForAccordion: "tabParentalInfo",
            trackingFeatureType: "PRODUCT_PARENTAL_INFO",
          },
          DrugFacts: {
            title: "Drug facts",
            accordionId: eh.DrugFacts,
            content: (0, l.jsx)(s, {}),
            trackingValueForAccordion: "tabDrugFacts",
            trackingFeatureType: "PRODUCT_DRUG_FACTS",
          },
          LabelInfo: {
            title: "Label info",
            accordionId: eh.LabelInfo,
            content: (0, l.jsx)(c, {}),
            trackingValueForAccordion: "tabLabelInfo",
            trackingFeatureType: "PRODUCT_LABEL_INFO",
          },
          EnergyGuide: {
            title: "Energy Guide",
            accordionId: eh.EnergyGuide,
            content: (0, l.jsx)(_, {}),
            trackingValueForAccordion: "tabEnergyGuide",
            trackingFeatureType: "PRODUCT_ENERGY_GUIDE",
          },
          ChemicalData: {
            title: "Ingredients & Safety",
            accordionId: eh.ChemicalData,
            content: (0, l.jsx)(h, {}),
            trackingValueForAccordion: "tabChemicalDisclosure",
            trackingFeatureType: "PRODUCT_INGREDIENTS_AND_SAFETY",
          },
          WarningsAndDisclosureData: {
            title: "Warnings & Disclosures",
            accordionId: eh.WarningsAndDisclosureData,
            content: (0, l.jsx)(e_.n, {}),
            trackingValueForAccordion: "tabDisclosures",
            trackingFeatureType: "PRODUCT_DISCLOSURES",
          },
          VirtualBundleComponentCarousel: ev(),
        };
    },
    80567: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => c });
      var l = a(37876),
        i = a(70578),
        o = a(27902),
        d = a(41622);
      let r = () =>
        (0, l.jsxs)("div", {
          className: "h-display-flex h-flex-direction-col",
          children: [
            (0, l.jsx)(d.O, {
              className: "h-margin-b-tight",
              height: "162px",
              width: "100%",
            }),
            (0, l.jsx)(d.O, {
              className: "h-margin-b-tiny",
              height: "20px",
              width: "100px",
            }),
            (0, l.jsx)(d.O, {
              className: "h-margin-b-tiny",
              height: "20px",
              width: "162px",
            }),
            (0, l.jsx)(d.O, {
              className: "h-margin-b-tight",
              height: "20px",
              width: "162px",
            }),
            (0, l.jsx)(d.O, { height: "35px", width: "90px" }),
          ],
        });
      r.displayName = "ProductCardSkeleton";
      let n = () =>
        (0, l.jsxs)("div", {
          className: "h-display-flex h-flex-direction-col",
          children: [
            (0, l.jsx)(d.O, {
              className: "h-margin-b-tiny",
              height: "20px",
              width: "100%",
            }),
            (0, l.jsx)(d.O, { height: "20px", width: "100%" }),
          ],
        });
      n.displayName = "AttributeSkeleton";
      let s = () =>
        (0, l.jsx)("div", {
          className: "h-display-flex h-flex-justify-center",
          children: (0, l.jsx)(d.O, {
            className: "h-margin-t-default h-margin-b-jumbo",
            height: "44px",
            width: "300px",
          }),
        });
      s.displayName = "HeaderSkeleton";
      let u = () =>
        (0, l.jsx)("div", {
          className: "h-display-flex h-flex-justify-center",
          children: (0, l.jsx)(d.O, {
            className: "h-margin-t-default h-margin-b-jumbo",
            height: "44px",
            width: "300px",
          }),
        });
      u.displayName = "ShowMoreSkeleton";
      let c = (e) => {
        let { ROWS: t, COLUMNS: a } = e,
          d = Array.from({ length: a }, (e, t) => t),
          c = Array.from({ length: t }, (e, t) => t);
        return (0, i.m)()
          ? (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(s, {}),
                (0, l.jsx)(o.AC, {
                  className: "h-display-flex",
                  children: (0, l.jsx)("table", {
                    className: "h-overflow-hidden",
                    children: (0, l.jsx)("tbody", {
                      children: c.map((e, t) =>
                        (0, l.jsx)(
                          "tr",
                          {
                            children: d.map((e) =>
                              (0, l.jsx)(
                                "td",
                                {
                                  className: "h-padding-a-tight",
                                  children:
                                    0 === t
                                      ? (0, l.jsx)(r, {})
                                      : (0, l.jsx)(n, {}),
                                },
                                e
                              )
                            ),
                          },
                          e
                        )
                      ),
                    }),
                  }),
                }),
                (0, l.jsx)(u, {}),
              ],
            })
          : null;
      };
      c.displayName = "CompareChartSkeleton";
    },
    82207: (e, t, a) => {
      "use strict";
      a.d(t, { U: () => s });
      var l = a(18551),
        i = a(50301),
        o = a(73208),
        d = a(40897),
        r = a(71237),
        n = a(951);
      let s = () => {
        let [e] = (0, l.RJ)(),
          t = e(i.xF),
          a = (0, o.K1)((0, d.SX)({ isCircle360ActivePaidMember: t })),
          s = (0, o.K1)((0, r.oq)({ isCircle360ActivePaidMember: t })),
          u = (0, o.K1)(n.ld);
        return !!(a || s || u);
      };
    },
    82266: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => o });
      var l = a(17379);
      a(19427), a(20881);
      let i = "@web/domain-product/pdp-syndigo-exists-v1",
        { useQuery: o } = (0, l.T)({
          name: i,
          defaultOptions: { staleTime: 5e3 },
          keyFn: (e) => {
            if (!e.childOrStandaloneTcin && !e.parentOrStandaloneTcin)
              throw TypeError(
                "at least one tcin is required for pdp_syndigo_exists_v1 query"
              );
            return [i, e];
          },
          queryFn: async (e) => null,
        });
    },
    84231: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => n, x: () => r });
      var l = a(73208),
        i = a(32038);
      let o = new Set(["GROCERY"]),
        d = new Set(["APPAREL"]),
        r = () => {
          var e;
          let t = null != (e = (0, l.EJ)(i.Zr)) ? e : "";
          return o.has(t);
        },
        n = () => {
          var e;
          let t = null != (e = (0, l.EJ)(i.Zr)) ? e : "";
          return d.has(t);
        };
    },
    85055: (e, t, a) => {
      "use strict";
      a.d(t, { C: () => l, h: () => i });
      var l = (function (e) {
          return (
            (e.OnSitePickup = "OnSitePickup"),
            (e.ParcelService = "ParcelService"),
            e
          );
        })({}),
        i = (function (e) {
          return (
            (e.OutOfStock = "OutOfStock"),
            (e.InStock = "InStock"),
            (e.PreOrder = "PreOrder"),
            e
          );
        })({});
    },
    87323: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => u, C: () => m });
      var l = a(3576),
        i = a(17379),
        o = a(53842),
        d = a(70418),
        r = a(19427),
        n = a(17800),
        s = a(61870);
      let u = "@web/domain/promotions/pdp-circle-offers-v1",
        c = ["tcin", "store_id"],
        { useQuery: p } = (0, i.T)({
          name: u,
          keyFn: (e) => (
            c.forEach((t) => {
              if (!e[t])
                throw Error(
                  "Required `"
                    .concat(t, "` was missing from query: `")
                    .concat(u, "`")
                );
            }),
            [u, e]
          ),
          queryFn: async (e, t) => {
            var i, n;
            let {
                apiKey: u,
                apis: { circle: c },
                baseUrl: p,
              } = null !=
              (n =
                null == (i = (0, r.$)())
                  ? void 0
                  : i.services.redskyAggregations)
                ? n
                : {},
              { member_id: m, store_id: _, tcin: h } = null != e ? e : {},
              g = d.o.buildURLWithParams(
                c.endpointPaths.pdpCircleOffersV1,
                { member_id: m, store_id: _, tcin: h, key: u },
                p
              ),
              {
                data: y,
                ok: v,
                statusText: P,
              } = await (0, o.n)(
                g,
                (0, l._)(
                  {
                    partialErrorTag:
                      s.O0
                        .REDSKY_AGGREGATIONS_PDP_CIRCLE_OFFERS_API_ERROR_PARTIAL,
                    debugImportQueryForGraphQLSourceMode: () =>
                      a.e(2699).then(a.t.bind(a, 14641, 17)),
                  },
                  t
                )
              );
            if (v) return null == y ? void 0 : y.data;
            throw Error("".concat(P));
          },
        }),
        m = (0, n.L)(p, { allowAnonymous: !0, shouldEstimateAnonymous: !0 });
    },
    87850: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => r });
      var l = a(14232),
        i = a(70578),
        o = a(70418),
        d = a(88044);
      let r = (e) => {
        let t = (0, i.m)(),
          a = (0, d.d)(),
          r = (0, l.useMemo)(
            () =>
              e ? new o.o(e).setQuery({ prehydrateClick: !0 }).toString() : e,
            [e]
          );
        return e ? (t || !a ? e : r) : "";
      };
    },
    87964: (e, t, a) => {
      "use strict";
      a.d(t, { GH: () => s, pq: () => r });
      var l = a(65699),
        i = a(17379),
        o = a(9894),
        d = a(70578);
      let { useQuery: r } = (0, i.T)({
          name: "site-top-of-funnel/get-cookies",
          defaultOptions: { keepPreviousData: !0 },
          queryFn: async (e, t) => {
            var a, l;
            return null !=
              (l =
                null != (a = null == t ? void 0 : t.cookies) ? a : (0, o.OR)())
              ? l
              : {};
          },
        }),
        n = function () {
          var e, t;
          let a =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { queryVariables: i = {}, ignoreClientSideCookies: n = !1 } = a,
            [s] = r(
              i,
              (0, l._)(a, ["queryVariables", "ignoreClientSideCookies"])
            ),
            u = s((e) => e);
          return !(0, d.m)() || n
            ? null != u
              ? u
              : {}
            : null != (t = null != (e = (0, o.OR)()) ? e : u)
            ? t
            : {};
        },
        s = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return n(t)[e];
        };
    },
    89800: (e, t, a) => {
      "use strict";
      a.d(t, { n: () => d });
      var l = a(37876),
        i = a(74820),
        o = a(18847);
      let d = a.n(o)()(
        () =>
          a
            .e(1540)
            .then(a.bind(a, 63290))
            .then((e) => e.WarningsAndDisclosureTab),
        {
          loadableGenerated: { webpack: () => [63290] },
          loading: () =>
            (0, l.jsx)("div", {
              className: "h-margin-t-jumbo h-margin-h-auto",
              children: (0, l.jsx)(i.y, {
                layout: "selfCentering",
                size: "large",
              }),
            }),
        }
      );
      d.displayName = "WarningsAndDisclosureTab";
    },
    90522: (e, t, a) => {
      "use strict";
      a.d(t, { T: () => n });
      var l = a(3576),
        i = a(14232),
        o = a(95408),
        d = a(22928),
        r = a(67396);
      function n(e) {
        let { layout: t, extensions: a } = e,
          n = (0, o.Mv)(d.wu),
          s = null == t ? void 0 : t.id,
          u = null == a ? void 0 : a.selection_metadata,
          c = null == u ? void 0 : u["x-redoak-selection-rule-id"];
        (0, i.useEffect)(() => {
          !n &&
            (s || c) &&
            (0, r.R_)(
              (0, l._)(
                {},
                s ? { page_layoutId: s } : {},
                c ? { page_selectionRuleId: c } : {}
              )
            );
        }, [n, s, c]);
      }
    },
    90845: (e, t, a) => {
      "use strict";
      a.d(t, { R: () => l });
      let l = (e) => (null == e ? void 0 : e.products);
    },
    92642: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { SocialBuyNowButton: () => N });
      var l = a(37876),
        i = a(14232),
        o = a(68581),
        d = a(58117),
        r = a(18673),
        n = a(29443),
        s = a(33912),
        u = a(42252),
        c = a(7493),
        p = a(73208),
        m = a(26989),
        _ = a(76989),
        h = a(25012),
        g = a(951),
        y = a(40897),
        v = a(66580),
        P = a(91518),
        f = a(3422),
        x = a(23945),
        b = a(48603),
        D = a(2503),
        A = a(32697),
        E = a(79777),
        C = a(15847),
        w = a(36637),
        T = a(60823),
        I = a(38502),
        S = a(3259),
        R = a(28324);
      let N = (e) => {
        var t, a;
        let { fulfillmentIntent: N, isCircle360ActivePaidMember: j } = e,
          k = (0, u.rd)(),
          L = (0, x.V)(),
          O = (0, b.$7)(),
          F = (0, b.qf)(),
          M = (0, c.m3)(k.query),
          B = (0, f.xs)(M, "socialex"),
          G = (0, f.xs)(M, "addToCartOnLoad"),
          [V] = (0, s.uQ)(),
          z = null != (t = (0, p.K1)(m.Gs)) ? t : "",
          H = (0, p.K1)(_.UY),
          U = null != (a = (0, f.xs)(M, "afid")) ? a : B,
          { quantityOverride: W } = (0, C.U)(),
          K = (0, n.hl)(null != N ? N : ""),
          {
            isAddToCartAttempting: q,
            setPostSocialAddToCartResult: J,
            setIsAddToCartAttempting: Y,
          } = (0, w.E)(),
          { trackClick: Q } = (0, T.f)(),
          { trackAddEvent: $ } = (0, I.F)(),
          X = (0, p.K1)(h.X_),
          [Z] = (0, S.M6)({ cart_type: "MARKETPLACE" }),
          ee = Z(R.EI);
        (0, i.useEffect)(() => {
          G && Y(!0);
        }, [G, Y]);
        let et = (0, i.useCallback)(
            (e, t, a) => {
              let { fulfillment: l, quantity: i, pickupLocation: o } = e;
              Y(!0),
                U && d.Ay.set("socialex", U, { expiry: Date.now() + 18e5 }),
                V(
                  { fft: l, q: i, loc: o, afid: U, tcin: z, exp: "IN_APP" },
                  {
                    onSuccess: () => {
                      let e = new Date().toISOString();
                      $.track({
                        timestamp: e,
                        cartId: ee,
                        fulfillmentType: (0, n.ry)(null != N ? N : ""),
                        shippingMethod: (0, n.Uo)(null != N ? N : ""),
                        price: null == X ? void 0 : X.current_retail,
                        quantity: W
                          ? "string" == typeof W
                            ? Number.parseInt(W, 10)
                            : W
                          : 1,
                        tcin: z,
                        addToCartRequestMethod: void 0,
                        cartItemId: void 0,
                      }),
                        J(!0),
                        Y(!1),
                        t && t();
                    },
                    onError: () => {
                      J(!1), Y(!1), a && a();
                    },
                  }
                );
            },
            [U, ee, N, V, null == X ? void 0 : X.current_retail, W, Y, J, z, $]
          ),
          ea = (0, i.useCallback)(() => {
            et(
              { fulfillment: K, quantity: W, pickupLocation: H },
              () =>
                k.push(
                  "/checkout/start?afid=".concat(U, "&socialex=").concat(U)
                ),
              () => {}
            );
          }, [K, W, H, k, et, U]),
          el = (0, i.useCallback)(() => {
            if (L)
              if (F) ea();
              else {
                Y(!1);
                let e = (0, n.J9)(k.asPath, z, W, N, "true", B);
                (0, D.Jv)(e, A.HV);
              }
          }, [L, F, ea, W, k, N, z, B, Y]),
          ei = (0, i.useCallback)(() => {
            if (O) ea();
            else {
              Y(!1);
              let e = (0, n.J9)(k.asPath, z, W, N, void 0, B);
              (0, o.v)({
                messageCode: "AUTHENTICATE",
                url: "".concat(window.location.origin).concat(e),
              });
            }
          }, [N, O, ea, k, Y, z, B, W]),
          eo = (0, i.useCallback)(() => {
            Q.track({
              featureType: "BUY_BOX",
              clickType: "SOCIAL_BUY_NOW",
              element: { type: "TCIN", id: z },
            }),
              (null === E.ag || void 0 === E.ag ? void 0 : E.ag.clientId) ===
              A.OS
                ? ei()
                : el();
          }, [el, ei, Q, z]),
          ed = (0, p.K1)((0, g.Qj)({ isCircle360ActivePaidMember: j })),
          er = (0, p.K1)((0, y.hf)({ isCircle360ActivePaidMember: j })),
          en = (0, p.K1)(v.OY),
          es = (0, p.K1)(P.I),
          eu = (0, i.useMemo)(
            () =>
              !ed &&
              (("SHIP" === K && !!er) ||
                ("PICKUP" === K && !!en) ||
                ("DELIVERY" === K && !!es)),
            [ed, K, er, en, es]
          );
        return (0, l.jsx)(r.$, {
          "data-test": "clickBuyNow",
          disabled: !L || q || !eu,
          isFullWidth: !0,
          onClick: eo,
          variant: "filled",
          children: q ? "Please wait..." : "Buy with Target",
        });
      };
      N.displayName = "SocialBuyNowButton";
    },
    93132: (e, t, a) => {
      "use strict";
      a.d(t, { o: () => r });
      var l = a(19427),
        i = a(17379),
        o = a(20881),
        d = a(70418);
      let { useQuery: r } = (0, i.T)({
        name: "@web/domain-product-reviews/get-product-review-summarization",
        queryFn: async (e) => {
          var t, a;
          let { tcin: i } = e,
            {
              apiKey: r,
              apis: { reviews: n },
              baseUrl: s,
            } = null !=
            (a = null == (t = (0, l.$)()) ? void 0 : t.services.nova)
              ? a
              : {},
            u = d.o.buildURLWithParams(
              n.endpointPaths.reviewSummarizationV1,
              { key: r, tcin: i },
              s
            ),
            { data: c, ok: p, statusText: m } = await (0, o.Jt)(u, {});
          if (p) return null != c ? c : null;
          throw Error("".concat(m));
        },
      });
    },
    93839: (e, t, a) => {
      "use strict";
      a.d(t, { I: () => i, b: () => l });
      let l = "188px",
        i = { 0: 350 };
    },
    94039: (e, t, a) => {
      "use strict";
      a.d(t, { x: () => o });
      var l = a(77232),
        i = a(74820);
      let o = (0, l.Ay)(i.y).withConfig({ componentId: "sc-7f108f22-0" })([
        "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);",
      ]);
    },
    96457: (e, t, a) => {
      "use strict";
      a.d(t, { K: () => n, V: () => s });
      var l = a(14232),
        i = a(95408),
        o = a(72396),
        d = a(97239),
        r = a(98650);
      let n = () => {
          let e = (0, l.useCallback)(
            (e) => (null != e ? e : (0, i.Mv)(r.m9)),
            []
          );
          return (0, o.G)(r.m9, {
            checkIsExperimentEnabledWithCustomConditions: e,
          });
        },
        s = (e) => {
          var t;
          let { ctx: a } = e;
          return (0, d.qe)(null == (t = a.res) ? void 0 : t.sapphire, {
            experimentFlag: r.m9,
          });
        };
    },
    96753: (e, t, a) => {
      "use strict";
      a.d(t, { DN: () => o, mr: () => i, nP: () => d, t5: () => l });
      let l =
          "The above item details were provided by the Target Plus&trade; Partner. Target does not represent or warrant that this information is accurate or complete. On occasion, manufacturers may modify their items and update their labels.",
        i =
          "We recommend that you do not rely solely on the information presented. If you have a specific question about this item, you may consult the item's label, contact the manufacturer directly or call Target Guest Services at 1-800-591-3869.",
        o = "@web/ProductDetailPageHighlights",
        d = "@web/ProductDetailsTabContentExpansionButton";
    },
    97091: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => l });
      let l = { DEFAULT: "default", MINI: "mini", MICRO: "micro" };
    },
    97115: (e, t, a) => {
      "use strict";
      a.d(t, { N: () => i, o: () => o });
      var l = a(3576);
      let i = (e, t) =>
          (0, l._)({ "@context": "https://schema.org", "@type": e }, t),
        o = (e) => {
          let { formattedPrice: t, hidePrice: a } = e,
            l = [];
          if (!t) return "";
          if (a) return t;
          let i = t.replaceAll(",", ""),
            o = /\$(\d+\.?\d{0,2})/g,
            d = o.exec(i);
          for (; d; )
            void 0 !== d[1] && l.push(Number.parseFloat(d[1])), (d = o.exec(i));
          return 0 === l.length ? "" : Math.min(...l).toFixed(2);
        };
    },
    98650: (e, t, a) => {
      "use strict";
      a.d(t, {
        $e: () => b,
        $r: () => r,
        Ar: () => D,
        DN: () => y,
        EB: () => n,
        HN: () => p,
        J1: () => A,
        Jc: () => _,
        QP: () => s,
        TT: () => m,
        VM: () => x,
        VV: () => v,
        XO: () => g,
        Y$: () => h,
        ZF: () => i,
        bt: () => E,
        d$: () => P,
        d4: () => l,
        j5: () => u,
        jP: () => c,
        m9: () => C,
        nx: () => f,
        v2: () => d,
        wz: () => o,
      });
      let l = "PDP_MODEL_METADATA_ENABLED",
        i = "SHOP_THE_LOOK_ENABLED",
        o = "SHOP_THE_LOOK_BUTTON_ENABLED",
        d = "COMPLETE_THE_SET_ENABLED",
        r = "PDP_OUTFITTING_ENABLED",
        n = "SELLER_PAGES_RATINGS_REVIEWS_ENABLED",
        s = "SLP_SPANISH_SEARCH_TRANSLATION_ENABLED",
        u = "EXP_PDP_PROMO_COMPLETER_ENABLED",
        c = "PDP_CATEGORY_BROWSE_ENABLED",
        p = "PDP_SEASONAL_DEALS_LINKING_ENABLED",
        m = "EXP_PDP_SEASONAL_DEALS_LINKING_ENABLED",
        _ = "PDP_SEASONAL_DEALS_CAROUSEL_ENABLED",
        h = "PDP_RATINGS_AND_REVIEWS_KILL_SWITCH",
        g = "PDP_MIDDLE_OF_BELOW_THE_FOLD_KILL_SWITCH",
        y = "GLOBAL_CIRCLE_OFFERS_DPLP_LINKING_ENABLED",
        v = "PDP_GEN_AI_REVIEW_SUMMARY_ENABLED",
        P = "EXP_CIRCLE_OFFERS_DPLP_LINKING_ENABLED",
        f = "PDP_CHATBOT_ENABLED",
        x = "PDP_ACCORDION_CLOSED_ENABLED",
        b = "PDP_TRAFFIC_AWARE_RATINGS_AND_REVIEWS_ENABLED",
        D = "EXP_PDP_MINI_BUY_BOX_RETURNS_ENABLED",
        A = "SEASONAL_ASSORTMENT_DRIVER_ENABLED",
        E = "PDP_CDUI_SEO_ENABLED",
        C = "PDP_CDUI_DATA_SOURCE_MODULES_ENABLED";
    },
    99064: (e, t, a) => {
      "use strict";
      a.d(t, { f: () => o });
      var l = a(60700),
        i = a(98601);
      let o = (0, a(77232).Ay)(l.H).withConfig({
        componentId: "sc-b9025d5c-0",
      })(
        [
          "--filmstrip-item-spacing:",
          ";--filmstrip-horizontal-padding:var(--module-gap-left,",
          ");margin-bottom:",
          ";",
        ],
        i.xe.generic.x4,
        i.xe.generic.x4,
        i.xe.generic.x4
      );
    },
  },
]);
