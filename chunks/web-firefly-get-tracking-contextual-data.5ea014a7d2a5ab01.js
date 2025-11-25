"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3459],
  {
    40133: (e, a, s) => {
      s.r(a), s.d(a, { getTrackingContextualData: () => n });
      var t = s(2503),
        u = s(30377),
        l = s(7669),
        r = s(95500),
        p = s(50301),
        i = s(18551);
      let n = (e) => {
        var a, s, n, h;
        let { memberId: d } = null != (h = (0, t.LL)()) ? h : {},
          R = (0, p.Cv)(null == (a = (0, r.pS)(i.RJ)) ? void 0 : a.data),
          m = [],
          v = (0, p.OT)(null == (s = (0, r.pS)(i.RJ)) ? void 0 : s.data),
          _ = (0, p.n5)(null == (n = (0, r.pS)(i.RJ)) ? void 0 : n.data);
        return (
          (0, t.Ms)() && v
            ? (v.paid_membership &&
                m.push(
                  (null == _ ? void 0 : _.membership_status) === "trial"
                    ? u.eR.TRIAL
                    : u.eR.PAID
                ),
              v.card_membership && m.push(u.eR.CARD),
              v.base_membership && m.push(u.eR.BASE),
              0 === m.length && m.push(u.eR.NONMEMBER))
            : m.push(u.eR.ANON),
          (0, l.v)({
            referrer: e(),
            targetGuid: (0, t.Ms)() ? d : "",
            loggedInStatus: m.join(","),
            hasRedcard: R,
          })
        );
      };
    },
  },
]);
