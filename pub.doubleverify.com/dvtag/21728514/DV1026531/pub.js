/* CustomSignals GptSignals HouseHold LegacyLayer PLEMetrics SignalsBsc SignalsIds SignalsTvp SignalsVlp */
(() => {
  var hr = Object.create;
  var Ve = Object.defineProperty,
    vr = Object.defineProperties,
    Dt = Object.getOwnPropertyDescriptor,
    Sr = Object.getOwnPropertyDescriptors,
    Tr = Object.getOwnPropertyNames,
    Pt = Object.getOwnPropertySymbols,
    yr = Object.getPrototypeOf,
    It = Object.prototype.hasOwnProperty,
    Er = Object.prototype.propertyIsEnumerable;
  var at = (n, e, t) =>
      e in n
        ? Ve(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (n[e] = t),
    M = (n, e) => {
      for (var t in e || (e = {})) It.call(e, t) && at(n, t, e[t]);
      if (Pt) for (var t of Pt(e)) Er.call(e, t) && at(n, t, e[t]);
      return n;
    },
    ye = (n, e) => vr(n, Sr(e)),
    o = (n, e) => Ve(n, "name", { value: e, configurable: !0 });
  var xt = (n, e) => () => (n && (e = n((n = 0))), e);
  var Rr = (n, e) => () => (
    e || n((e = { exports: {} }).exports, e), e.exports
  );
  var Ar = (n, e, t, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let i of Tr(e))
        !It.call(n, i) &&
          i !== t &&
          Ve(n, i, {
            get: () => e[i],
            enumerable: !(r = Dt(e, i)) || r.enumerable,
          });
    return n;
  };
  var br = (n, e, t) => (
    (t = n != null ? hr(yr(n)) : {}),
    Ar(
      e || !n || !n.__esModule
        ? Ve(t, "default", { value: n, enumerable: !0 })
        : t,
      n
    )
  );
  var d = (n, e, t, r) => {
    for (
      var i = r > 1 ? void 0 : r ? Dt(e, t) : e, l = n.length - 1, c;
      l >= 0;
      l--
    )
      (c = n[l]) && (i = (r ? c(e, t, i) : c(i)) || i);
    return r && i && Ve(e, t, i), i;
  };
  var u = (n, e, t) => at(n, typeof e != "symbol" ? e + "" : e, t);
  var T = (n, e, t) =>
    new Promise((r, i) => {
      var l = (v) => {
          try {
            g(t.next(v));
          } catch (y) {
            i(y);
          }
        },
        c = (v) => {
          try {
            g(t.throw(v));
          } catch (y) {
            i(y);
          }
        },
        g = (v) => (v.done ? r(v.value) : Promise.resolve(v.value).then(l, c));
      g((t = t.apply(n, e)).next());
    });
  var p,
    s = xt(() => {
      p = [
        {
          adServerId: "48",
          adServerAccountId: "7079046",
          type: "gpt",
          customTracking: {
            c1: { type: "targeting", key: "pt" },
            c2: { type: "targeting", key: "registrytype" },
            c3: { type: "targeting", key: "as" },
            c4: { type: "targeting", key: "nap" },
            c5: { type: "targeting", key: "cat" },
          },
          adPositionKey: "pos",
        },
      ];
    });
  var a = xt(() => {});
  var Gt = Rr((pa, jt) => {
    s();
    a();
    function Gr(n, e) {
      if (typeof n != "function")
        throw new TypeError(
          `Expected the first argument to be a \`function\`, got \`${typeof n}\`.`
        );
      let t,
        r = 0;
      return o(function (...l) {
        clearTimeout(t);
        let c = Date.now(),
          g = c - r,
          v = e - g;
        v <= 0
          ? ((r = c), n.apply(this, l))
          : (t = setTimeout(() => {
              (r = Date.now()), n.apply(this, l);
            }, v));
      }, "throttled");
    }
    o(Gr, "throttle");
    jt.exports = Gr;
  });
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  var x = [];
  for (let n = 0; n < 256; ++n) x.push((n + 256).toString(16).slice(1));
  function Ot(n, e = 0) {
    return (
      x[n[e + 0]] +
      x[n[e + 1]] +
      x[n[e + 2]] +
      x[n[e + 3]] +
      "-" +
      x[n[e + 4]] +
      x[n[e + 5]] +
      "-" +
      x[n[e + 6]] +
      x[n[e + 7]] +
      "-" +
      x[n[e + 8]] +
      x[n[e + 9]] +
      "-" +
      x[n[e + 10]] +
      x[n[e + 11]] +
      x[n[e + 12]] +
      x[n[e + 13]] +
      x[n[e + 14]] +
      x[n[e + 15]]
    ).toLowerCase();
  }
  o(Ot, "unsafeStringify");
  s();
  a();
  var lt,
    _r = new Uint8Array(16);
  function ut() {
    if (!lt) {
      if (typeof crypto == "undefined" || !crypto.getRandomValues)
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      lt = crypto.getRandomValues.bind(crypto);
    }
    return lt(_r);
  }
  o(ut, "rng");
  s();
  a();
  s();
  a();
  var Cr =
      typeof crypto != "undefined" &&
      crypto.randomUUID &&
      crypto.randomUUID.bind(crypto),
    dt = { randomUUID: Cr };
  function Pr(n, e, t) {
    var i, l, c;
    if (dt.randomUUID && !e && !n) return dt.randomUUID();
    n = n || {};
    let r =
      (c =
        (l = n.random) != null
          ? l
          : (i = n.rng) == null
          ? void 0
          : i.call(n)) != null
        ? c
        : ut();
    if (r.length < 16) throw new Error("Random bytes length must be >= 16");
    if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), e)) {
      if (((t = t || 0), t < 0 || t + 16 > e.length))
        throw new RangeError(
          `UUID byte range ${t}:${t + 15} is out of buffer bounds`
        );
      for (let g = 0; g < 16; ++g) e[t + g] = r[g];
      return e;
    }
    return Ot(r);
  }
  o(Pr, "v4");
  var ct = Pr;
  var ee = o(() => ct(), "uuid");
  s();
  a();
  var xe = o(
    (n, e) =>
      (...t) => {
        try {
          let r = n(...t);
          return r instanceof Promise
            ? r.then(
                (i) => i,
                (i) => e(i, ...t)
              )
            : r;
        } catch (r) {
          return e(r, ...t);
        }
      },
    "withErrorHandler"
  );
  s();
  a();
  var Oe,
    Ne,
    Le,
    Y = class Y {
      constructor(e, t) {
        u(this, "collections", new Set());
        u(this, "children", new Y.Set());
        u(this, "beforeDestroyed");
        this.beforeDestroyed = t != null ? t : () => {};
        for (let [r, i] of Object.entries(e))
          Object.defineProperty(this, r, { value: i });
        e.parent != null &&
          (e.parent.destroyed ? this.destroy() : e.parent.children.add(this));
      }
      static Create(e, t) {
        return new Y(e, t);
      }
      static CreateRoot(e, t) {
        return new Y(e, t);
      }
      destroy() {
        if (this.beforeDestroyed != null) {
          try {
            this.beforeDestroyed(this);
          } catch (e) {}
          for (let e of this.children) e.destroy();
          this.beforeDestroyed = void 0;
          for (let e of this.collections) e.delete(this);
        }
        return this;
      }
      get destroyed() {
        return this.beforeDestroyed == null;
      }
    };
  o(Y, "EntityClass"),
    u(
      Y,
      "Set",
      ((Oe = class extends Set {
        add(t) {
          return t.destroyed || (t.collections.add(this), super.add(t)), this;
        }
        delete(t) {
          return t.collections.delete(this), super.delete(t);
        }
        clear() {
          for (let t of this.values()) t.collections.delete(this);
          super.clear();
        }
        peek() {
          return this.values().next().value;
        }
        conjure(t) {
          let r = this.peek();
          return r == null && ((r = t()), this.add(r)), r;
        }
      }),
      o(Oe, "EntitySet"),
      Oe)
    ),
    u(
      Y,
      "Map",
      ((Ne = class extends Map {
        set(t, r) {
          return (
            t.destroyed || (t.collections.add(this), super.set(t, r)), this
          );
        }
        delete(t) {
          return t.collections.delete(this), super.delete(t);
        }
        clear() {
          for (let t of this.keys()) t.collections.delete(this);
          return super.clear();
        }
        summon(t, r) {
          let i = super.get(t);
          return i == null && ((i = r), this.set(t, i)), i;
        }
        conjure(t, r) {
          let i = super.get(t);
          return i == null && ((i = r()), this.set(t, i)), i;
        }
      }),
      o(Ne, "EntityMap"),
      Ne)
    ),
    u(
      Y,
      "Link",
      ((Le = class extends Y.Map {
        get(t) {
          return super.conjure(t, () => new Y.Set());
        }
      }),
      o(Le, "EntityLink"),
      Le)
    );
  var Ee = Y,
    E;
  ((l) => (
    (l.Set = Ee.Set),
    (l.Map = Ee.Map),
    (l.Link = Ee.Link),
    (l.Create = Ee.Create),
    (l.CreateRoot = Ee.CreateRoot)
  ))(E || (E = {}));
  s();
  a();
  var Ke = class Ke {
    constructor(e, t, r) {
      u(this, "_message", "unknown");
      u(this, "_trace", []);
      u(this, "_silenced", !1);
      if (e instanceof Ke) return e.addToTrace(r, t);
      typeof e == "object" &&
      e != null &&
      "message" in e &&
      typeof e.message == "string"
        ? (this._message = e.message)
        : (this._message = `${e}`),
        this.addToTrace(r, t);
    }
    get message() {
      return this._message;
    }
    get trace() {
      return this._trace;
    }
    get silenced() {
      return this._silenced;
    }
    silence() {
      return (this._silenced = !0), this;
    }
    addToTrace(e, t) {
      return this._trace.unshift(e), this.maybeCompleteTrace(t), this;
    }
    maybeCompleteTrace(e) {
      return T(this, null, function* () {
        let t = this._trace.length;
        yield Promise.resolve(),
          yield Promise.resolve(),
          yield Promise.resolve(),
          !this.silenced && t === this._trace.length && e(this);
      });
    }
  };
  o(Ke, "TracedError");
  var $e = Ke;
  var pt = class pt {
    constructor(e) {
      u(this, "moduleInstances", new Map());
      u(this, "methodsToExecute", []);
      u(this, "errorHandlers", []);
      u(this, "activeSession", null);
      u(this, "executedMethodIndex", 0);
      this.initializeModules(e);
    }
    initializeModules(e) {
      let t = e.map((r) => this.createModule(r));
      for (let r of t)
        this.applyModuleDecoration(r),
          this.applyExecuteDecoration(r),
          this.applyPluginDecoration(r),
          this.applyErrorDecoration(r),
          this.applyCatchErrorDecoration(r);
    }
    get session() {
      if (this.activeSession == null)
        throw new Error("Core has no active session");
      return this.activeSession;
    }
    inject(e) {
      let t = this.modules,
        r = [];
      for (let i of e) {
        let l = t[i.name];
        l == null ? r.push(i) : this.moduleInstances.set(i, l);
      }
      this.initializeModules(r),
        console.log(
          "Injected new modules:",
          r.map((i) => i.name)
        ),
        this.execute();
    }
    get(e) {
      return this.getModule(e);
    }
    execute() {
      this.activeSession == null &&
        (this.activeSession = E.CreateRoot({ id: ee() }));
      for (let e of this.methodsToExecute.slice(this.executedMethodIndex)) e();
      this.executedMethodIndex = this.methodsToExecute.length;
    }
    reset() {
      this.activeSession != null &&
        (this.activeSession.destroy(),
        (this.activeSession = null),
        (this.executedMethodIndex = 0));
    }
    get modules() {
      let e = {};
      for (let [t, r] of this.moduleInstances) e[t.name] = r;
      return e;
    }
    getModule(e) {
      let t = this.moduleInstances.get(e);
      if (t == null) throw new Error(`module not in core: ${e.name}`);
      return t;
    }
    createModule(e) {
      if (e.prototype.moduleConfig == null)
        throw new Error(`not a module: ${e.name}`);
      let t = new e();
      return (t.core = this), this.moduleInstances.set(e, t), t;
    }
    applyModuleDecoration(e) {
      var r;
      let t = e.constructor.prototype.moduleConfig;
      for (let { method: i } of t)
        e[i] = xe(e[i].bind(e), (l, ...c) => {
          throw this.traceError(
            l,
            `${e.constructor.name}.${i}(${c.map((g) => typeof g).join(",")})`
          );
        });
      (r = e.plugins) != null || (e.plugins = {}), (e.pluginFunctions = {});
      for (let i of Object.keys(e.plugins))
        (e.pluginFunctions[i] = []),
          (e.plugins[i] = (...l) => {
            let c = [];
            for (let g of e.pluginFunctions[i]) g(c, ...l);
            return c;
          });
    }
    applyExecuteDecoration(e) {
      var r;
      let t = (r = e.constructor.prototype.executeConfig) != null ? r : [];
      for (let { method: i } of t)
        this.methodsToExecute.push(
          xe(e[i], (l) => {
            this.traceError(l, "@execute");
          })
        );
    }
    applyPluginDecoration(e) {
      var r;
      let t = (r = e.constructor.prototype.pluginConfig) != null ? r : [];
      for (let { PluggableClass: i, category: l, method: c } of t)
        this.getModule(i).pluginFunctions[l].push(
          xe(
            (g, ...v) => {
              g.push(e[c](...v));
            },
            (g) => {
              this.traceError(g, `@plugin(${i.name},'${l}')`);
            }
          )
        );
    }
    applyErrorDecoration(e) {
      var r;
      let t = (r = e.constructor.prototype.errorConfig) != null ? r : [];
      for (let { method: i } of t)
        this.errorHandlers.push(
          xe(e[i], (l) => {
            l instanceof $e && l.silence();
          })
        );
    }
    applyCatchErrorDecoration(e) {
      var r;
      let t = (r = e.constructor.prototype.catchErrorConfig) != null ? r : [];
      for (let { method: i } of t)
        e[i] = xe(e[i], (l) => {
          this.traceError(l, "@catchError");
        });
    }
    traceError(e, t) {
      return new $e(e, (r) => this.reportError(r), t);
    }
    reportError(e) {
      for (let t of this.errorHandlers) t(e.message, [...e.trace]);
    }
  };
  o(pt, "Core");
  var je = pt;
  s();
  a();
  s();
  a();
  var mt = [],
    Xe = mt;
  var f = o((n) => {
      let e = n.prototype,
        t = Object.getOwnPropertyNames(e).filter((r) => {
          var i;
          return (
            r !== "constructor" &&
            ((i = Object.getOwnPropertyDescriptor(e, r)) == null
              ? void 0
              : i.value) instanceof Function
          );
        });
      (e.moduleConfig = t.map((r) => ({ method: r }))), mt.push(n);
    }, "moduleClass"),
    P = o((n) => (e) => {}, "attachModule"),
    b = o((n, e) => {
      var t;
      (n.executeConfig = (t = n.executeConfig) != null ? t : []),
        n.executeConfig.push({ method: e });
    }, "executeMethod"),
    h = o(
      (n, e) => (t, r) => {
        var i;
        (t.pluginConfig = (i = t.pluginConfig) != null ? i : []),
          t.pluginConfig.push({ PluggableClass: n, category: e, method: r });
      },
      "pluginMethod"
    ),
    Ge = o((n, e) => {
      var t;
      (n.catchErrorConfig = (t = n.catchErrorConfig) != null ? t : []),
        n.catchErrorConfig.push({ method: e });
    }, "catchErrorMethod"),
    gt = o((n, e) => {
      var t;
      (n.errorConfig = (t = n.errorConfig) != null ? t : []),
        n.errorConfig.push({ method: e });
    }, "errorMethod");
  s();
  a();
  s();
  a();
  s();
  a();
  var S = class {
    constructor() {
      u(this, "timeFunction", new E.Map());
    }
    window() {
      return window;
    }
    document() {
      return this.window().document;
    }
    pageUrl() {
      var e, t;
      return (t = (e = this.window().location) == null ? void 0 : e.href) !=
        null
        ? t
        : "";
    }
    hostname() {
      return new URL(this.pageUrl()).hostname;
    }
    time() {
      return this.timeFunction.conjure(this.core.session, () => {
        let e = this.window(),
          t = !1;
        try {
          t = typeof e.performance.now() == "number";
        } catch (r) {}
        return t ? () => Math.floor(e.performance.now()) : () => e.Date.now();
      })();
    }
    sendBeacon(e) {
      try {
        let t = this.window().navigator;
        typeof (t == null ? void 0 : t.sendBeacon) == "function"
          ? t.sendBeacon(e)
          : (new Image().src = e);
      } catch (t) {}
    }
  };
  o(S, "Env"), (S = d([f], S));
  s();
  a();
  var Nt = o(
    (n, e) =>
      (e == null ? void 0 : e.structuredClone) != null
        ? e.structuredClone(n)
        : JSON.parse(JSON.stringify(n)),
    "deepClone"
  );
  s();
  a();
  s();
  a();
  var Lt = o((n) => {
      if (typeof n != "object" || n === null || Array.isArray(n)) return !1;
      let e = n;
      return (e.gdprApplies !== void 0 &&
        typeof e.gdprApplies != "boolean" &&
        e.gdprApplies !== 0 &&
        e.gdprApplies !== 1) ||
        (e.eventStatus !== "tcloaded" &&
          e.eventStatus !== "cmpuishown" &&
          e.eventStatus !== "useractioncomplete" &&
          e.eventStatus !== void 0) ||
        (e.tcString !== void 0 && typeof e.tcString != "string")
        ? !1
        : e.gdprApplies === !1 ||
          e.gdprApplies === 0 ||
          e.gdprApplies === void 0
        ? !(
            e.tcString !== void 0 ||
            e.purpose !== void 0 ||
            e.vendor !== void 0 ||
            e.publisher !== void 0
          )
        : !(
            typeof e.tcString != "string" ||
            !Dr(e.purpose) ||
            !Ir(e.vendor) ||
            !xr(e.publisher)
          );
    }, "isValidTCData"),
    Dr = o((n) => {
      if (typeof n != "object" || n === null) return !1;
      let e = n;
      return Je(e.consents) && Je(e.legitimateInterests);
    }, "isValidPurposeObject"),
    Ir = o((n) => {
      if (typeof n != "object" || n === null) return !1;
      let e = n;
      return Je(e.consents) && Je(e.legitimateInterests);
    }, "isValidVendorObject"),
    xr = o((n) => {
      if (typeof n != "object" || n === null || n === void 0) return !1;
      let e = n;
      return !(e.restrictions !== void 0 && !Or(e.restrictions));
    }, "isValidPublisherObject"),
    Je = o(
      (n) =>
        typeof n != "object" || n === null
          ? !1
          : Object.entries(n).every(([e, t]) => {
              let r = parseInt(e, 10);
              return !isNaN(r) && (typeof t == "boolean" || t === void 0);
            }),
      "isRecordOfBooleansOrUndefined"
    ),
    Or = o(
      (n) =>
        typeof n != "object" || n === null
          ? !1
          : Object.entries(n).every(([e, t]) => {
              let r = parseInt(e, 10);
              return isNaN(r) || typeof t != "object" || t === null
                ? !1
                : Object.entries(t).every(([i, l]) => {
                    let c = parseInt(i, 10),
                      g = Number(l);
                    return !isNaN(c) && !isNaN(g) && g >= 0 && g <= 3;
                  });
            }),
      "isValidPublisherRestrictions"
    );
  var Be = 126,
    Mt = 2,
    Nr = 20,
    Lr = 250;
  var F = class {
    constructor() {
      u(this, "firstResultPromise", new E.Map());
      u(this, "tcState", new E.Map());
      u(this, "declaredPurposes", new E.Map());
      u(this, "plugins", { signalReady: o(() => [], "signalReady") });
    }
    getTcState() {
      return M(
        {},
        this.tcState.conjure(this.core.session, () => ({
          apiAvailable: this._getCmpApi() != null,
          applies: "",
          signalSettled: !1,
          tcString: "",
        }))
      );
    }
    getDeclaredPurposes() {
      return M(
        {},
        this.declaredPurposes.conjure(this.core.session, () => ({
          purposes: [],
          flexiblePurposes: [2, 7, 8, 10],
          legIntPurposes: [2, 7, 8, 10],
        }))
      );
    }
    getTcStateAsync() {
      return T(this, null, function* () {
        return yield this._getTcStatePromise(), this.getTcState();
      });
    }
    apiAvailable() {
      return this.getTcState().apiAvailable;
    }
    applies() {
      let e = this.getTcState();
      return e.applies === "1" ? !0 : e.applies === "0" ? !1 : void 0;
    }
    hasLegalBasis(e) {
      let {
        applies: t,
        tcString: r,
        purpose: i,
        vendor: l,
      } = this.getTcState();
      if (t !== "1" || r === "" || i == null || l == null) return;
      let c = this._getActiveLegalBasis(e);
      if (c != null)
        return c === 0
          ? !1
          : c === 1
          ? i.consents[e] === !0 && l.consent === !0
          : i.legitimateInterests[e] === !0 && l.legitimateInterest === !0;
    }
    _getTcStatePromise() {
      return T(this, null, function* () {
        return this.firstResultPromise
          .conjure(this.core.session, () => this._monitorTcState())
          .catch(() => {});
      });
    }
    _monitorTcState() {
      return T(this, null, function* () {
        let e = yield this._getCmpApiAsync();
        if (e != null) {
          try {
            e("getVendorList", Mt, (t, r) => {
              var i;
              if (
                r === !0 &&
                ((i = t == null ? void 0 : t.vendors) == null
                  ? void 0
                  : i[Be]) != null
              ) {
                let {
                  purposes: l,
                  flexiblePurposes: c,
                  legIntPurposes: g,
                } = t.vendors[Be];
                this._setDeclaredPurposes({
                  purposes: l,
                  flexiblePurposes: c,
                  legIntPurposes: g,
                });
              }
            });
          } catch (t) {}
          yield new Promise((t) => {
            try {
              e("addEventListener", Mt, (r, i) => {
                i === !0 && Lt(r) && this._setTcState(r), t();
              });
            } catch (r) {
              t();
            }
          });
        }
      });
    }
    _getCmpApiAsync() {
      return T(this, null, function* () {
        let e = this.core.get(S).window(),
          t = this._getCmpApi(),
          r = 0;
        for (; t == null && r < Nr; )
          r++,
            yield new Promise((i) => e.setTimeout(i, Lr)),
            (t = this._getCmpApi());
        return t;
      });
    }
    _getCmpApi() {
      let t = this.core.get(S).window().__tcfapi;
      if (typeof t == "function") return t;
    }
    _setDeclaredPurposes(e) {
      this.declaredPurposes.set(this.core.session, {
        purposes: [...e.purposes],
        flexiblePurposes: [...e.flexiblePurposes],
        legIntPurposes: [...e.legIntPurposes],
      });
    }
    _setTcState(e) {
      let t = this._convertTcDataToTcState(e);
      this.tcState.set(this.core.session, t),
        t.signalSettled && this.plugins.signalReady();
    }
    _convertTcDataToTcState(e) {
      let t =
          e.gdprApplies == null
            ? ""
            : e.gdprApplies === !0 || e.gdprApplies === 1
            ? "1"
            : "0",
        r =
          e.eventStatus === "tcloaded" ||
          e.eventStatus === "useractioncomplete" ||
          t === "0",
        i = { apiAvailable: !0, applies: t, signalSettled: r, tcString: "" };
      return !(e.gdprApplies === !0 || e.gdprApplies === 1) || e.tcString === ""
        ? i
        : ye(M({}, i), {
            tcString: e.tcString,
            purpose: Nt(e.purpose),
            vendor: {
              legitimateInterest: e.vendor.legitimateInterests[Be] === !0,
              consent: e.vendor.consents[Be] === !0,
            },
            publisherRestrictions: this._extractDvRestrictions(
              e.publisher.restrictions
            ),
          });
    }
    _extractDvRestrictions(e) {
      let t = {};
      for (let [r, i] of Object.entries(e)) {
        let l = i[Be];
        l != null && (t[Number(r)] = l);
      }
      return t;
    }
    _getActiveLegalBasis(e) {
      let t = this.getDeclaredPurposes(),
        { publisherRestrictions: r } = this.getTcState();
      if (r == null) return;
      let i = r[e];
      if (i === 0) return 0;
      let l = t.legIntPurposes.includes(e) ? 2 : t.purposes.includes(e) ? 1 : 0;
      if (l === 0) return 0;
      if (i === 1 || i === 2) {
        let c = i === 1 ? 1 : 2,
          g = t.flexiblePurposes.includes(e);
        return l === c || g ? c : 0;
      }
      return l;
    }
  };
  o(F, "Gdpr"), d([b], F.prototype, "_getTcStatePromise", 1), (F = d([f], F));
  s();
  a();
  s();
  a();
  var Mr = [
      [/((\?)|&)(?:amp_lite|fr=operanews)/g, "$2"],
      [/(^https?:\/\/)(www\.)/g, "$1"],
      [
        /(((\?)|&|%3F|%26|;)(?:utm_campaign|utm_source|utm_content|utm_term|utm_viral|utm_medium|utm_identifier|utm_key|fb_source|referrer|referer|ref|rand|rnd|randid|\.?rand|\.?partner|cb|count|adid|session|sessionid|session_redirect|param\d|userinfo|uid|refresh|ocid|ncid|clickenc|fbclid|amp_js_v|amp_gsa|ns_source|ns_campaign|ns_mchanel|ns_mchannel|ns_linkname|ns_fee|src|ex_cid|usqp|source|xid|trkid|utm_social-type|mbid|utm_brand|__twitter_impression|utm_referrer|CMP|cmp|_cmp|cq_cmp)=[^&]*)/g,
        "$3",
      ],
      [/[/.]amp(?:\/[?&]*)?$/g, ""],
      [
        /((\?)|&)(?:outputType|isFollow|suppressMediaBar|cid|ICID|icid|bdk|wtu_id_h|utm_placement|intcmp|_native_ads|traffic_source|entry|\.tsrc|autoplay|autostart|dc_data|influencer|pubdate|utm_hp_ref|redirect|service|refresh_ce|refresh_cens|xcmg|target_id|_amp)=[^&]*/g,
        "$2",
      ],
      [/(\?|&)(?:amp)(?:&|$|=[^&]*)/g, "$1"],
    ],
    Ur = [
      [/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g, ""],
      [/(?:\/|\/\?|\?|&|\/\$0|#[\s\S]*)+$/g, ""],
    ],
    Ut = o((n, e) => {
      for (let [t, r] of n) e = e.replace(t, r);
      return e;
    }, "replaceByRules"),
    qt = o((n) => {
      let e = Ut(Mr, n);
      return Ut(Ur, e);
    }, "normalizeUrl");
  s();
  a();
  var kt = o((n) => n.split("?", 1)[0].split("#", 1)[0], "stripUrlQuery");
  s();
  a();
  var Ft = o((n, e) => {
      try {
        let t = new URLSearchParams(n),
          r = t.get("ctx"),
          i = t.get("cmp");
        if (r != null && i != null)
          return { ctx: r, cmp: i, prefetch: e, legacy: !0 };
      } catch (t) {}
      return null;
    }, "parseInfo"),
    Vt = o((n) => {
      var e;
      return n.pathname !== "/signals/pub.js"
        ? null
        : (e = Ft(n.search, !0)) != null
        ? e
        : Ft(n.hash.substring(1).split("?")[0], !1);
    }, "parseLegacyPagetagUrl");
  var qr = 1e3,
    kr = /^\/dvtag\/([^/]+)\/([^/]+)\/pub\.js$/,
    C = class {
      constructor() {
        u(this, "visit");
        u(this, "tagInfo");
        u(this, "plugins", {
          newVisit: o((e) => [], "newVisit"),
          overrideTagInfo: o((e) => [], "overrideTagInfo"),
        });
        u(this, "_normalizeUrl", qt);
      }
      _initialize() {
        this.getTagInfo(),
          this.updateVisit(!1),
          this.plugins.newVisit(this.visit),
          this._installNavigationListener();
      }
      getTagInfo() {
        var e;
        if (this.tagInfo == null) {
          try {
            this.tagInfo = this._parseTagInfo();
          } catch (r) {}
          (e = this.tagInfo) != null ||
            (this.tagInfo = { ctx: "unknown", cmp: "unknown" });
          let t = this.plugins.overrideTagInfo(this.tagInfo);
          t.length > 0 && (this.tagInfo = M(M({}, this.tagInfo), t[0]));
        }
        return this.tagInfo;
      }
      _parseTagInfo() {
        let e = this.getCurrentScriptSrc();
        if (e == null) return null;
        let t = new URL(e, "https://pub.doubleverify.com"),
          r = t.pathname,
          i = kr.exec(r);
        if (i != null) {
          let [, l, c] = i;
          return { ctx: l, cmp: c };
        }
        return Vt(t);
      }
      getCurrentScriptSrc() {
        var e, t;
        return (t =
          (e = this.core.get(S).window().document.currentScript) == null
            ? void 0
            : e.getAttribute("src")) != null
          ? t
          : null;
      }
      getCurrentScriptBaseUrl() {
        let e = this.getCurrentScriptSrc();
        if (e == null) return null;
        try {
          let { origin: t, pathname: r } = new URL(e),
            i = r.split("/").slice(0, -1).join("/");
          return `${t}${i}/`;
        } catch (t) {
          return null;
        }
      }
      updateVisit(e = !0) {
        var r, i;
        let t = this.getStrippedPageUrl();
        if (this.visit == null || this.visit.strippedUrl !== t) {
          let l = ee();
          (this.visit = {
            strippedUrl: t,
            normalizedUrl: this._normalizeUrl(
              this.core.get(S).window().location.href
            ),
            uuid: l,
            sessionUuid:
              (i = (r = this.visit) == null ? void 0 : r.sessionUuid) != null
                ? i
                : l,
          }),
            e && this.plugins.newVisit(this.visit);
        }
        return this.visit;
      }
      getVisit() {
        var e;
        return (e = this.visit) != null ? e : this.updateVisit(!1);
      }
      getStrippedPageUrl() {
        return kt(this.core.get(S).window().location.href);
      }
      getNormalizedPageUrl() {
        return this.getVisit().normalizedUrl;
      }
      getVisitUuid() {
        return this.getVisit().uuid;
      }
      getSessionUuid() {
        return this.getVisit().sessionUuid;
      }
      _installNavigationListener() {
        var r;
        let e = this.core.get(S).window(),
          t = o(() => this.updateVisit(!0), "cb");
        ((r = e.navigation) == null ? void 0 : r.addEventListener) != null
          ? e.navigation.addEventListener("navigatesuccess", t)
          : setInterval(t, qr);
      }
    };
  o(C, "Context"), d([b], C.prototype, "_initialize", 1), (C = d([f], C));
  s();
  a();
  var te = class {
    getShortCommitId() {
      return "f2d6b17";
    }
    getBuildTimestamp() {
      return 1764075618286;
    }
    getAuthToken() {
      return "3hy0pF59r+OwDHE3s/mi15ShExQa2Wf+soua8tX1YjjGOYbfWxmq8hBvERGoqFEUiV1MyvdcFC6qKAH3SH3MU6THTCUC4Zs7W7wElT2bBYiPyFJN9FMULpbIzP6OSFlmRT6fTCSVCDrfB2N2z3LvqMU=";
    }
  };
  o(te, "DefinedVariables"), (te = d([f], te));
  s();
  a();
  s();
  a();
  s();
  a();
  var Re = o(
      () =>
        (...n) =>
          [],
      "apiPlugin"
    ),
    O = class {
      constructor() {
        u(this, "plugins", {
          queueAdRequest: Re(),
          defineSlot: Re(),
          adRendered: Re(),
          adRemoved: Re(),
          getTargeting: Re(),
          addEventListener: o((e, t) => [], "addEventListener"),
          removeEventListener: o((e, t) => [], "removeEventListener"),
          toggleDebugMode: Re(),
          _debugScriptLoaded: Re(),
        });
      }
      _initialize() {
        var r;
        let e = this.core.get(S).window(),
          t = (r = e.dvtag) != null ? r : {};
        (e.dvtag = t),
          (t.queueAdRequest = this.queueAdRequest),
          (t.defineSlot = this.defineSlot),
          (t.adRendered = this.adRendered),
          (t.adRemoved = this.adRemoved),
          (t.getTargeting = this.getTargeting),
          (t.addEventListener = this.addEventListener),
          (t.removeEventListener = this.removeEventListener),
          (t.toggleDebugMode = this.toggleDebugMode),
          (t._debugScriptLoaded = this._debugScriptLoaded);
      }
      queueAdRequest(...e) {
        this.plugins.queueAdRequest(...e);
      }
      defineSlot(...e) {
        this.plugins.defineSlot(...e);
      }
      adRendered(...e) {
        this.plugins.adRendered(...e);
      }
      adRemoved(...e) {
        this.plugins.adRemoved(...e);
      }
      getTargeting(...e) {
        var t;
        return (t = this.plugins.getTargeting(...e)[0]) != null ? t : {};
      }
      addEventListener(e, t) {
        this.plugins.addEventListener(e, t);
      }
      removeEventListener(e, t) {
        this.plugins.removeEventListener(e, t);
      }
      toggleDebugMode(...e) {
        this.plugins.toggleDebugMode(...e);
      }
      _debugScriptLoaded(...e) {
        this.plugins._debugScriptLoaded(...e);
      }
    };
  o(O, "Api"), d([b], O.prototype, "_initialize", 1), (O = d([f], O));
  s();
  a();
  var ft = class ft {
    constructor() {
      u(this, "pending", []);
      u(this, "flushing", !1);
    }
    push(e) {
      this.pending.push(e), this.flush();
    }
    flush() {
      return T(this, null, function* () {
        var t;
        if (this.flushing) return;
        this.flushing = !0;
        let e = this.pending.shift();
        for (; e != null; ) {
          try {
            yield e.promise;
          } catch (r) {}
          try {
            (t = e.callback) == null || t.call(e);
          } catch (r) {}
          e = this.pending.shift();
        }
        this.flushing = !1;
      });
    }
  };
  o(ft, "AsyncQueue");
  var Ze = ft;
  var A = class {
    constructor() {
      u(this, "plugins", {
        adRequestQueued: o((e) => [], "adRequestQueued"),
        adRequestTimedOut: o((e) => [], "adRequestTimedOut"),
        adRequestBeforeRelease: o((e) => [], "adRequestBeforeRelease"),
        adRequestCompleted: o((e) => [], "adRequestCompleted"),
      });
      u(this, "queue", new Ze());
      u(this, "adRequestCounter", 0);
    }
    _queueAdRequest(e = {}) {
      var l, c;
      let t = {
        index: this.adRequestCounter++,
        status: "queued",
        timeoutValue: (l = e.timeout) != null ? l : 0,
        onDvtagReadyCalled: (c = e.timestamp) != null ? c : 0,
        waitingStarted: new Date().getTime(),
        internal: e.internal,
      };
      this.core.get(C).updateVisit(), this.plugins.adRequestQueued(t);
      let r = e.callback;
      r === void 0
        ? (e.callback = () => {})
        : r === null
        ? (t.status = "tag-timeout")
        : (e.callback = () => {
            (t.status = "queue-timeout"),
              (t.callbackCalled = new Date().getTime()),
              (e.callback = null),
              this.plugins.adRequestTimedOut(t);
            try {
              r();
            } catch (g) {}
          });
      let i = o(() => {
        if (e.callback != null) {
          (e.callback = null),
            (t.status = "success"),
            (t.callbackCalled = new Date().getTime()),
            this.plugins.adRequestBeforeRelease(t);
          try {
            r == null || r();
          } catch (g) {}
        } else this.plugins.adRequestBeforeRelease(t);
        (t.waitingEnded = new Date().getTime()),
          this.plugins.adRequestCompleted(t);
      }, "onAsyncOperationsCompleted");
      this.queue.push({ callback: i, adRequest: t });
    }
    delayAdRequests(e) {
      this.queue.push({ promise: e });
    }
  };
  o(A, "AdRequestQueue"),
    d([h(O, "queueAdRequest")], A.prototype, "_queueAdRequest", 1),
    (A = d([f], A));
  s();
  a();
  var Vr = "https://vtrk.doubleverify.com",
    $t = "dvtag",
    $r = 1,
    N = class {
      constructor() {
        u(this, "sharedDataPoints");
      }
      _onAdRequestCompleted(e) {
        if (e.index !== 0) return;
        let { timeoutValue: t, onDvtagReadyCalled: r, callbackCalled: i } = e,
          l = i != null ? i - r : t,
          { applies: c, apiAvailable: g } = this.core.get(F).getTcState();
        this.fireEvent(
          "ad-request",
          {
            cd111: e.status,
            cm106: e.index,
            cm107: l,
            cd112: e.internal ? "legacy" : "modern",
            cd115: c,
            cm116: g ? 1 : 0,
          },
          { sampleInterval: $r }
        );
      }
      _getSharedDataPoints() {
        if (this.sharedDataPoints == null) {
          let e = this.core.get(C),
            t = this.core.get(te),
            r = this.core.get(S),
            { ctx: i, cmp: l, legacy: c } = e.getTagInfo(),
            g = r.hostname(),
            v = e.getSessionUuid(),
            y = t.getShortCommitId();
          this.sharedDataPoints = {
            cd102: y,
            cd103: "",
            cd107: v,
            cd109: c ? "legacy" : "modern",
            cd108: "",
            cd105: i,
            cd106: l,
            cd104: g,
          };
        }
        return this.sharedDataPoints;
      }
      fireEvent(
        e,
        t,
        {
          sampleInterval: r = 1,
          trackerUuid: i = ee(),
          spoofWrapperId: l = !1,
        } = {}
      ) {
        if (Math.random() >= 1 / r) return;
        t = ye(M(M({}, t), this._getSharedDataPoints()), {
          cd101: e,
          cm101: r,
        });
        let c = ye(
            M({ ec: $t, ea: t.cd101, ctx: l ? $t : t.cd105, cmp: t.cd106 }, t),
            { cid: i, t: "event", v: 1, z: i, cd160: i }
          ),
          g = new URL(Vr);
        for (let [v, y] of Object.entries(c))
          y != null && g.searchParams.set(v, `${y}`);
        this.core.get(S).sendBeacon(g.href);
      }
    };
  o(N, "Events"),
    d([h(A, "adRequestCompleted")], N.prototype, "_onAdRequestCompleted", 1),
    (N = d([f], N));
  s();
  a();
  s();
  a();
  var re = class {
    constructor() {
      u(this, "plugins", {
        shouldPerformIntentionalDuplicateMeasurement: o(
          (e) => [],
          "shouldPerformIntentionalDuplicateMeasurement"
        ),
        shouldEnforcePLEMetricsCompliance: o(
          () => [],
          "shouldEnforcePLEMetricsCompliance"
        ),
      });
    }
    shouldPerformIntentionalDuplicateMeasurement(e) {
      return this.plugins
        .shouldPerformIntentionalDuplicateMeasurement(e)
        .some((t) => t === !0);
    }
    shouldEnforcePLEMetricsCompliance() {
      return this.plugins
        .shouldEnforcePLEMetricsCompliance()
        .some((e) => e === !0);
    }
  };
  o(re, "MeasurementFlags"), (re = d([f], re));
  var jr = { PLEMetrics: { purposes: [8] } },
    H = class {
      constructor() {
        u(this, "plugins", {
          permissionsChanged: o(() => [], "permissionsChanged"),
        });
        u(this, "plemDryRunEnabled", new E.Map());
      }
      _onSignalReady() {
        this.plugins.permissionsChanged();
      }
      _canProcessInternal(e) {
        let t = jr[e];
        if (t == null) return !0;
        let r = this.core.get(F);
        if (!r.apiAvailable()) return !0;
        let i = r.applies();
        return i === void 0
          ? !1
          : i === !1
          ? !0
          : t.purposes.every((l) => r.hasLegalBasis(l) === !0);
      }
      canProcess(e) {
        return e === "PLEMetrics" &&
          this.plemDryRunEnabled.conjure(
            this.core.session,
            () => this.core.get(re).shouldEnforcePLEMetricsCompliance() !== !0
          )
          ? {
              result: !0,
              resultWithoutDryRun: this._canProcessInternal(e),
              dryRunEnabled: !0,
            }
          : { result: this._canProcessInternal(e) };
      }
    };
  o(H, "DataProcessingPermissions"),
    d([h(F, "signalReady")], H.prototype, "_onSignalReady", 1),
    (H = d([f], H));
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  var R = class {
    constructor() {
      u(this, "plugins", { slotDiscovered: o((e, t) => [], "slotDiscovered") });
      u(this, "slots", new E.Set());
    }
    getSlot(e, t) {
      for (let r of this.slots)
        if (r.adServer === e && r.elementId === t) return r;
    }
    getSlots(e) {
      let t = [...this.slots];
      return e == null ? t : t.filter((r) => r.adServer === e);
    }
    createSlot(e, t, r, i, l, c) {
      let g = this.getSlot(e, r);
      g != null && g.destroy();
      let v = E.Create({
        parent: this.core.session,
        adServer: e,
        elementId: r,
        adUnit: i,
        adServerConfig: l,
        uuid: ee(),
        creationTime: Date.now(),
      });
      return (
        this.slots.add(v),
        c == null || c(v),
        this.plugins.slotDiscovered(v, t),
        v
      );
    }
  };
  o(R, "SlotStore"), (R = d([f], R));
  var de = class {
    constructor() {
      u(this, "plugins", { adRemoved: o((e) => [], "adRemoved") });
    }
    _monitorAdRemoval(e) {
      let t = this.core.get(S).document().getElementById(e.elementId);
      if (t == null) return;
      E.Create(
        {
          parent: e,
          observer: new MutationObserver((i) => {
            let l = i.length,
              c = 0,
              g = t.children.length;
            for (let v = i.length - 1; v >= 0; v--) {
              let y = i[v];
              if (g === 0) {
                this.plugins.adRemoved(e);
                break;
              }
              if (c === l - 1) break;
              let I = y.removedNodes.length - y.addedNodes.length;
              (g += I), c++;
            }
          }),
        },
        ({ parent: i, observer: l }) => {
          l.disconnect(), this.plugins.adRemoved(i);
        }
      ).observer.observe(t, { childList: !0 });
    }
  };
  o(de, "AdRemoved"),
    d([h(R, "slotDiscovered")], de.prototype, "_monitorAdRemoval", 1),
    (de = d([f], de));
  var D = class {
    constructor() {
      u(this, "adEmpty", new E.Map());
      u(this, "adRequestInFlight", new E.Map());
      u(this, "nonEmptyAdResponses", new E.Map());
      u(this, "creatives", new E.Link());
      u(this, "plugins", {
        adRequested: o((e) => [], "adRequested"),
        adRequestedOrInferred: o((e) => [], "adRequestedOrInferred"),
        adRendered: o((e, t) => [], "adRendered"),
        adRemoved: o((e) => [], "adRemoved"),
      });
    }
    setAdRequested(e) {
      this.adRequestInFlight.set(e, !0),
        this.plugins.adRequested(e),
        this.plugins.adRequestedOrInferred(e);
    }
    setAdRendered(e, t) {
      this.adRequestInFlight.get(e) !== !0 &&
        this.plugins.adRequestedOrInferred(e),
        this._setAdRemoved(e),
        this.adEmpty.set(e, !1),
        this.adRequestInFlight.set(e, !1),
        t != null &&
          this.nonEmptyAdResponses.set(
            e,
            this.nonEmptyAdResponses.summon(e, 0) + 1
          );
      let r = null;
      if (t != null) {
        let i = this.core.get(S).time();
        (r = E.Create(M({ parent: e, timestamp: i }, t))),
          this.creatives.get(e).add(r);
      }
      this.plugins.adRendered(e, r);
    }
    _setAdRemoved(e) {
      if (this.adEmpty.get(e) === !1) {
        this.adEmpty.set(e, !0);
        for (let t of this.creatives.get(e)) t.destroy();
        this.plugins.adRemoved(e);
      }
    }
    getNonEmptyAdRenderedCount(e) {
      return this.nonEmptyAdResponses.summon(e, 0);
    }
  };
  o(D, "AdServerHub"),
    d([h(de, "adRemoved")], D.prototype, "_setAdRemoved", 1),
    (D = d([f], D));
  var K = class {
    constructor() {
      u(this, "renderCount", 0);
      u(this, "disabled", !1);
    }
    _onAdRendered() {
      this.disabled || (this.renderCount += 1);
    }
    reset() {
      this.disabled || (this.renderCount = 0);
    }
    getRenderCount() {
      return this.renderCount;
    }
    disable() {
      this.disabled = !0;
    }
  };
  o(K, "AdRenderedCounter"),
    d([h(D, "adRendered")], K.prototype, "_onAdRendered", 1),
    (K = d([f], K));
  s();
  a();
  var ce = class {
    _shouldEnforcePLEMetricsCompliance() {
      return !0;
    }
  };
  o(ce, "PLEMetricsComplianceFlag"),
    d(
      [h(re, "shouldEnforcePLEMetricsCompliance")],
      ce.prototype,
      "_shouldEnforcePLEMetricsCompliance",
      1
    ),
    (ce = d([f], ce));
  s();
  a();
  var Qt = br(Gt());
  s();
  a();
  var ht = class ht {
    constructor(e) {
      u(this, "arr");
      u(this, "start");
      u(this, "size");
      (this.arr = new Array(e)), (this.start = 0), (this.size = 0);
    }
    push(e) {
      this.size === this.arr.length
        ? (this.start = this.nthIndex(1))
        : (this.size += 1),
        (this.arr[this.nthIndex(this.size - 1)] = e);
    }
    nthIndex(e) {
      return (this.start + e) % this.arr.length;
    }
    last() {
      return this.size === 0 ? null : this.arr[this.nthIndex(this.size - 1)];
    }
    findNewest(e) {
      for (let t = this.size - 1; t >= 0; t--) {
        let r = this.arr[this.nthIndex(t)];
        if (e(r)) return r;
      }
      return null;
    }
  };
  o(ht, "RingBuffer");
  var et = ht;
  var Bt = 10,
    Br = 100,
    Qr = 3e3,
    zr = 2e3,
    V = class {
      constructor() {
        u(this, "measurements", new et(20));
        u(this, "lastNavigationTime");
        u(this, "viewportWidths", new Set());
        u(this, "documentHeights", new Set());
        u(this, "disabled", !1);
        u(this, "scrollListener");
        u(this, "resetTimeoutId");
      }
      _initialize() {
        return T(this, null, function* () {
          let { document: e } = this.core.get(S).window();
          e.readyState === "loading" &&
            (yield new Promise((t) =>
              e.addEventListener("DOMContentLoaded", () => t(void 0))
            )),
            (this.scrollListener = (0, Qt.default)(() => {
              this._updateScrollMetrics();
            }, 200)),
            e.addEventListener("scroll", this.scrollListener),
            this._updateScrollMetrics();
        });
      }
      _getScrollData() {
        let e = this.core.get(S).document().compatMode === "BackCompat",
          {
            scrollHeight: t,
            clientHeight: r,
            clientWidth: i,
          } = this.core.get(S).window().document[
            e ? "body" : "documentElement"
          ];
        return {
          scrollY: Math.floor(this.core.get(S).window().scrollY),
          viewportHeight: r,
          viewportWidth: i,
          documentHeight: t,
        };
      }
      _getScrollPercentage({
        scrollY: e,
        documentHeight: t,
        viewportHeight: r,
      }) {
        return t === r ? 0 : e / (t - r);
      }
      _updateScrollMetrics(e = !1) {
        var v;
        let t = this._getScrollData(),
          r =
            this.lastNavigationTime != null &&
            Date.now() - this.lastNavigationTime < Qr;
        this.viewportWidths.size < Bt &&
          this.viewportWidths.add(t.viewportWidth),
          this.documentHeights.size < Bt &&
            this.documentHeights.add(t.documentHeight);
        let {
          deepestScrollData: i,
          deepestScrollWithResetData: l,
          maxScrollData: c,
          hasScrolledToTop: g,
        } = (v = this.measurements.last()) != null ? v : {};
        (g = (!e && g === !0) || t.scrollY < t.viewportHeight),
          (c == null || r || t.scrollY >= c.scrollY) && (c = t),
          (i == null ||
            r ||
            this._getScrollPercentage(t) >= this._getScrollPercentage(i)) &&
            (i = t),
          (l == null ||
            r ||
            this._getScrollPercentage(t) >= this._getScrollPercentage(l) ||
            t.documentHeight - l.documentHeight > Br) &&
            (l = t),
          this.measurements.push({
            time: Date.now(),
            hasScrolledToTop: g,
            maxScrollData: c,
            deepestScrollData: i,
            deepestScrollWithResetData: l,
          });
      }
      getScrollMeasurements(e) {
        var r;
        let t;
        return (
          e == null
            ? (t = this.measurements.last())
            : (t =
                (r = this.measurements.findNewest(
                  (i) => i.time < Date.now() - e
                )) != null
                  ? r
                  : this.measurements.last()),
          t == null
            ? null
            : ye(M({}, t), {
                viewportWidths: this.viewportWidths,
                documentHeights: this.documentHeights,
              })
        );
      }
      reset() {
        this.disabled ||
          (this.resetTimeoutId != null && clearTimeout(this.resetTimeoutId),
          (this.lastNavigationTime = Date.now()),
          this._updateScrollMetrics(!0),
          (this.resetTimeoutId = setTimeout(
            () => this._updateScrollMetrics(),
            zr
          )));
      }
      disable() {
        this.disabled ||
          (this.scrollListener &&
            (this.core
              .get(S)
              .window()
              .document.removeEventListener("scroll", this.scrollListener),
            (this.scrollListener = void 0)),
          this.resetTimeoutId != null &&
            (clearTimeout(this.resetTimeoutId), (this.resetTimeoutId = void 0)),
          (this.disabled = !0));
      }
    };
  o(V, "ScrollMetrics"), d([b], V.prototype, "_initialize", 1), (V = d([f], V));
  s();
  a();
  s();
  a();
  var zt = o(
      (
        n,
        {
          deepestScrollData: e,
          deepestScrollWithResetData: t,
          maxScrollData: r,
          viewportWidths: i,
          documentHeights: l,
        },
        { inFocusMs: c, visibleMs: g, visibleAndInFocusMs: v },
        y,
        I,
        ue,
        De
      ) => {
        var Ie;
        let W =
          (Ie = performance == null ? void 0 : performance.now) == null
            ? void 0
            : Ie.call(performance);
        return {
          cd110: n.visit.normalizedUrl,
          cd111: [...i].join(","),
          cd112: [...l].join(","),
          cd113: n.visit.uuid,
          cm106: c,
          cm107: g,
          cm108: I,
          cm109: ue,
          cm110: n.visitIndex,
          cm111: n.infiniteScrollDetected ? 1 : 0,
          cm116: W != null ? W / 1e3 : void 0,
          cm117: v,
          cm118: n.visitStart / 1e3,
          cm119: Date.now() / 1e3,
          cm120: n.trackerCount,
          cm121: e.scrollY,
          cm122: e.viewportHeight,
          cm123: e.viewportWidth,
          cm124: e.documentHeight,
          cm125: t.scrollY,
          cm126: t.viewportHeight,
          cm127: t.viewportWidth,
          cm128: t.documentHeight,
          cm129: r.scrollY,
          cm130: r.viewportHeight,
          cm131: r.viewportWidth,
          cm132: r.documentHeight,
          cm133: y,
          cd114: De === !1 ? "0" : "1",
        };
      },
      "createPlemTracker"
    ),
    Wt = o(
      (n) => ({
        cd110: n.visit.normalizedUrl,
        cd113: n.visit.uuid,
        cm110: n.visitIndex,
        cm118: n.visitStart / 1e3,
        cm119: Date.now() / 1e3,
        cm120: n.trackerCount,
        cd114: "0",
      }),
      "createPlemRejectionTracker"
    );
  s();
  a();
  s();
  a();
  var vt = class vt {
    constructor() {
      u(this, "runningSince", null);
      u(this, "totalTimeMs", 0);
    }
    getTimestamp() {
      return Date.now();
    }
    getCurrentRunningTime() {
      return this.runningSince != null
        ? this.getTimestamp() - this.runningSince
        : 0;
    }
    start() {
      this.runningSince = this.getTimestamp();
    }
    stop() {
      (this.totalTimeMs += this.getCurrentRunningTime()),
        (this.runningSince = null);
    }
    add(e) {
      this.totalTimeMs += e;
    }
    get() {
      return this.totalTimeMs + this.getCurrentRunningTime();
    }
    reset(e = !1) {
      (this.runningSince = this.runningSince != null && e ? Date.now() : null),
        (this.totalTimeMs = 0);
    }
  };
  o(vt, "Timer");
  var Me = vt;
  var X = class {
    constructor() {
      u(this, "inFocusTimer", new Me());
      u(this, "visibleTimer", new Me());
      u(this, "visibleInFocusTimer", new Me());
      u(this, "disabled", !1);
      u(this, "focusListener");
      u(this, "blurListener");
      u(this, "visibilityChangeListener");
    }
    _initialize() {
      return T(this, null, function* () {
        var r, i, l;
        let e = this.core.get(S).window(),
          t =
            (l =
              (i = (r = e.performance) == null ? void 0 : r.now) == null
                ? void 0
                : i.call(r)) != null
              ? l
              : 0;
        (this.focusListener = () => {
          this.inFocusTimer.start(),
            e.document.hidden || this.visibleInFocusTimer.start();
        }),
          (this.blurListener = () => {
            this.inFocusTimer.stop(), this.visibleInFocusTimer.stop();
          }),
          (this.visibilityChangeListener = () => {
            e.document.hidden
              ? (this.visibleTimer.stop(), this.visibleInFocusTimer.stop())
              : (this.visibleTimer.start(),
                e.document.hasFocus() && this.visibleInFocusTimer.start());
          }),
          e.addEventListener("focus", this.focusListener),
          e.addEventListener("blur", this.blurListener),
          e.document.addEventListener(
            "visibilitychange",
            this.visibilityChangeListener
          ),
          e.document.hasFocus() &&
            (this.inFocusTimer.add(t),
            this.inFocusTimer.start(),
            e.document.hidden ||
              (this.visibleInFocusTimer.add(t),
              this.visibleInFocusTimer.start())),
          e.document.hidden ||
            (this.visibleTimer.add(t), this.visibleTimer.start());
      });
    }
    getVisibilityMeasurements() {
      return {
        inFocusMs: this.inFocusTimer.get(),
        visibleMs: this.visibleTimer.get(),
        visibleAndInFocusMs: this.visibleInFocusTimer.get(),
      };
    }
    reset() {
      this.disabled ||
        (this.visibleTimer.reset(!0),
        this.inFocusTimer.reset(!0),
        this.visibleInFocusTimer.reset(!0));
    }
    disable() {
      if (this.disabled) return;
      let e = this.core.get(S).window();
      this.focusListener &&
        (e.removeEventListener("focus", this.focusListener),
        (this.focusListener = void 0)),
        this.blurListener &&
          (e.removeEventListener("blur", this.blurListener),
          (this.blurListener = void 0)),
        this.visibilityChangeListener &&
          (e.document.removeEventListener(
            "visibilitychange",
            this.visibilityChangeListener
          ),
          (this.visibilityChangeListener = void 0)),
        (this.disabled = !0);
    }
  };
  o(X, "VisibilityMetrics"),
    d([b], X.prototype, "_initialize", 1),
    (X = d([f], X));
  var Wr = 6e4,
    Yr = 61 * 60 * 1e3,
    Hr = 59.5 * 60 * 1e3,
    Kr = 6e4,
    Xr = 2500,
    Jr = 5e3,
    Zr = 1500,
    pe = class {
      constructor() {
        u(this, "currVisit");
        u(this, "pendingTracker");
        u(this, "tagLoadTime");
        u(this, "firstContentfulPaint");
        u(this, "processingAllowed");
        u(this, "disabled", !1);
        u(this, "visibilityChangeListener");
        u(this, "finalTrackerIntervalId");
      }
      _initialize() {
        return T(this, null, function* () {
          var t, r;
          let e = this.core.get(S).window();
          (this.tagLoadTime =
            (r = (t = e.performance) == null ? void 0 : t.now) == null
              ? void 0
              : r.call(t)),
            this._updateFirstContentfulPaint(),
            (this.visibilityChangeListener = () => {
              e.document.hidden && this._flushTrackers();
            }),
            e.document.addEventListener(
              "visibilitychange",
              this.visibilityChangeListener
            ),
            (this.finalTrackerIntervalId = setInterval(() => {
              this.currVisit != null &&
                Date.now() > this.currVisit.visitStart + Hr &&
                (e.document.hidden || (this._fireTracker(), this._disable()));
            }, Kr));
        });
      }
      _onPermissionsChanged() {
        if (this.disabled) return;
        let { result: e } = this.core.get(H).canProcess("PLEMetrics");
        e || (this._fireRejectionTracker(), this._disable());
      }
      _disable() {
        let e = this.core.get(S).window();
        this.visibilityChangeListener != null &&
          (e.document.removeEventListener(
            "visibilitychange",
            this.visibilityChangeListener
          ),
          (this.visibilityChangeListener = void 0)),
          this.finalTrackerIntervalId != null &&
            (e.clearInterval(this.finalTrackerIntervalId),
            (this.finalTrackerIntervalId = void 0)),
          this.pendingTracker != null &&
            (e.clearTimeout(this.pendingTracker.timer),
            (this.pendingTracker = void 0)),
          this.core.get(V).disable(),
          this.core.get(X).disable(),
          this.core.get(K).disable(),
          (this.disabled = !0);
      }
      _updateFirstContentfulPaint() {
        let e = this.core.get(S).window().PerformanceObserver;
        try {
          let t = new e((r) => {
            r.getEntries().forEach((i) => {
              i.name === "first-contentful-paint" &&
                ((this.firstContentfulPaint = i.startTime), t.disconnect());
            });
          });
          t.observe({ type: "paint", buffered: !0 });
        } catch (t) {}
      }
      _fireTracker(
        {
          visit: e,
          scroll: t,
          visibility: r,
          adRenderCount: i,
        } = this._getTrackerData(),
        l = !1
      ) {
        if (
          t == null ||
          (!l &&
            (Date.now() > e.visitStart + Yr ||
              (e.lastTrackerTime != null &&
                e.lastTrackerTime > Date.now() - Wr)))
        )
          return;
        let c = this.core.get(H).canProcess("PLEMetrics"),
          { result: g } = c;
        if (!g) return;
        let y = c.dryRunEnabled === !0 ? c.resultWithoutDryRun : void 0;
        this.core
          .get(N)
          .fireEvent(
            "content-metrics",
            zt(e, t, r, i, this.tagLoadTime, this.firstContentfulPaint, y),
            { sampleInterval: 1, spoofWrapperId: !0 }
          ),
          (e.lastTrackerTime = Date.now()),
          (e.trackerCount += 1);
      }
      _fireRejectionTracker() {
        if (this.currVisit == null) throw new Error("No data!");
        this.core
          .get(N)
          .fireEvent("content-metrics-rejection", Wt(this.currVisit), {
            sampleInterval: 1,
            spoofWrapperId: !0,
          });
      }
      _getTrackerData() {
        if (this.currVisit == null) throw new Error("No data!");
        return {
          visit: this.currVisit,
          scroll: this.core.get(V).getScrollMeasurements(Zr),
          visibility: this.core.get(X).getVisibilityMeasurements(),
          adRenderCount: this.core.get(K).getRenderCount(),
        };
      }
      _checkForInfiniteScroll() {
        let e = this.core.get(V).getScrollMeasurements();
        e != null &&
          !e.hasScrolledToTop &&
          (this.pendingTracker != null &&
            (this.pendingTracker.data.visit.infiniteScrollDetected = !0),
          this.currVisit != null &&
            (this.currVisit.infiniteScrollDetected = !0));
      }
      _scheduleDelayedTracker() {
        this._flushPendingTracker(),
          (this.pendingTracker = {
            data: this._getTrackerData(),
            timer: setTimeout(() => {
              this._flushPendingTracker();
            }, Jr),
          });
      }
      _flushPendingTracker() {
        this.pendingTracker != null &&
          (this._checkForInfiniteScroll(),
          this._fireTracker(this.pendingTracker.data, !0),
          clearTimeout(this.pendingTracker.timer),
          (this.pendingTracker = void 0));
      }
      _flushTrackers() {
        this._flushPendingTracker(), this._fireTracker();
      }
      _onNewVisit(e) {
        var r, i;
        if (this.disabled) return;
        let t = this.currVisit == null;
        this.currVisit != null &&
          (Date.now() - this.currVisit.visitStart > Xr &&
            this._scheduleDelayedTracker(),
          this.core.get(X).reset(),
          this.core.get(V).reset(),
          this.core.get(K).reset()),
          (this.currVisit = {
            visit: e,
            visitStart:
              Date.now() -
              (t && this.tagLoadTime != null ? this.tagLoadTime : 0),
            visitIndex:
              ((i = (r = this.currVisit) == null ? void 0 : r.visitIndex) !=
              null
                ? i
                : -1) + 1,
            trackerCount: 0,
          });
      }
    };
  o(pe, "PLEMetrics"),
    d([b], pe.prototype, "_initialize", 1),
    d([h(H, "permissionsChanged")], pe.prototype, "_onPermissionsChanged", 1),
    d([h(C, "newVisit")], pe.prototype, "_onNewVisit", 1),
    (pe = d([f, P(ce)], pe));
  s();
  a();
  s();
  a();
  var Qe = ["BSC", "ABS", "CCT", "CBS"],
    St = ["IDS"],
    ze = ["VLP", "TVP"],
    en = [...Qe, ...St, ...ze],
    al = [...Qe, ...St, ...ze].filter((n) => n !== "CCT"),
    Yt = o((n) => en.includes(n.toUpperCase()), "isSignal"),
    Ht = o((n) => ze.includes(n.toUpperCase()), "isSlotSignal"),
    Kt = o((n) => St.includes(n.toUpperCase()), "isUserSignal"),
    Xt = o((n) => Qe.includes(n.toUpperCase()), "isPageSignal");
  s();
  a();
  s();
  a();
  s();
  a();
  var me = o((...n) => {
    let e = [];
    for (let t of n) if (t != null) for (let r of t) e.includes(r) || e.push(r);
    return e;
  }, "mergeUnique");
  var w = class {
    constructor() {
      u(this, "plugins", {
        getAdServerTargeting: o((e, t) => [], "getAdServerTargeting"),
        setAdServerTargeting: o((e, t, r) => [], "setAdServerTargeting"),
      });
      u(this, "globalTargeting", {});
      u(this, "slotTargeting", new E.Map());
    }
    getGlobalTargeting(e) {
      var t;
      return (t = this.globalTargeting[e]) != null ? t : {};
    }
    _getSlotTargeting(e) {
      return this.slotTargeting.summon(e, {});
    }
    _getTargetingKeys(e) {
      return me(
        Object.keys(this.getGlobalTargeting(e.adServer)),
        Object.keys(this._getSlotTargeting(e))
      );
    }
    _getTargetingValues(e, t) {
      return me(
        this.getGlobalTargeting(e.adServer)[t],
        this._getSlotTargeting(e)[t]
      );
    }
    getTargeting(e) {
      let t = {};
      for (let r of this._getTargetingKeys(e))
        t[r] = this._getTargetingValues(e, r);
      return t;
    }
    setSlotTargeting(e, t, r = !1) {
      var c;
      let i = Object.keys(t),
        l = this._getSlotTargeting(e);
      for (let g of i)
        l[g] = me(
          t[g],
          r ? ((c = this.slotTargeting.get(e)) == null ? void 0 : c[g]) : null
        );
      this.setAdServerTargeting(e, i);
    }
    setGlobalTargeting(e, t, r = !1) {
      var l, c;
      let i = Object.keys(t);
      for (let g of e) {
        for (let v of i)
          (c = (l = this.globalTargeting)[g]) != null || (l[g] = {}),
            (this.globalTargeting[g][v] = me(
              t[v],
              r ? this.globalTargeting[g][v] : null
            ));
        for (let v of this.core.get(R).getSlots(g))
          this.setAdServerTargeting(v, i);
      }
    }
    getAdServerTargeting(e, t) {
      var r;
      return (r = this.plugins
        .getAdServerTargeting(e, t)
        .find((i) => i.length !== 0)) != null
        ? r
        : [];
    }
    setAdServerTargeting(e, t) {
      t == null && (t = this._getTargetingKeys(e));
      for (let r of t)
        this.plugins.setAdServerTargeting(e, r, this._getTargetingValues(e, r));
    }
    _onSlotDiscovered(e) {
      this.setAdServerTargeting(e);
    }
  };
  o(w, "TargetingHub"),
    d([h(R, "slotDiscovered")], w.prototype, "_onSlotDiscovered", 1),
    (w = d([f], w));
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  var Tt = "qt_loaded";
  s();
  a();
  s();
  a();
  var $ = class {
    constructor() {
      u(this, "cache", new E.Map());
    }
    _performFetchJson(e, t) {
      return T(this, null, function* () {
        let r = this.core.get(S).window().fetch,
          i = e;
        if (t != null && t.authToken) {
          let l = this.core.get(te).getAuthToken(),
            c = new URL(e);
          c.searchParams.set("token", l), (i = c.href);
        }
        try {
          return yield r(i).then((l) => l.json());
        } catch (l) {
          return null;
        }
      });
    }
    fetchJson(e, t) {
      return T(this, null, function* () {
        let r = this.cache.summon(this.core.session, {}),
          i = r[e];
        return (
          i == null && ((i = this._performFetchJson(e, t)), (r[e] = i)), yield i
        );
      });
    }
  };
  o($, "Fetch"), ($ = d([f], $));
  s();
  a();
  s();
  a();
  var tt = o((n) => (n == null ? "" : `@${n}`), "getPositionSuffix");
  s();
  a();
  var tn = /^(\d+)x(\d+)$/,
    Jt = o(
      (n) =>
        n === "all"
          ? []
          : n.split(",").map((e) => {
              let t = e.match(tn);
              return t == null
                ? { label: e }
                : { width: parseInt(t[1], 10), height: parseInt(t[2], 10) };
            }),
      "stringToSlotSizes"
    ),
    yt = o(
      (n) =>
        n.length === 0
          ? "all"
          : n
              .map(({ width: e, height: t, label: r }) =>
                r != null ? r : `${e}x${t}`
              )
              .join(","),
      "slotSizesToString"
    ),
    Zt = o(
      (n) =>
        n == null
          ? ""
          : n.length > 0 && n.every(({ label: r }) => r == null)
          ? yt(n)
          : "",
      "slotSizesToStringIfSpecific"
    );
  var rn = "https://pub.doubleverify.com/dvtag/signals/",
    j = class {
      _getBaseUrl(e) {
        let t = this.core.get(C),
          { ctx: r, cmp: i } = t.getTagInfo(),
          l = t.getNormalizedPageUrl();
        try {
          l = new URL(l).origin;
        } catch (g) {}
        let c = new URL(e, rn);
        return (
          c.searchParams.set("ctx", r),
          c.searchParams.set("cmp", i),
          c.searchParams.set("url", l),
          c
        );
      }
      getUserTargetingUrl(e) {
        let t = this._getBaseUrl("ids/pub.json");
        return e.includes("IDS") && t.searchParams.set("ids", "1"), t.href;
      }
      getPageTargetingUrl(e, t) {
        let r = this._getBaseUrl("bsc/pub.json");
        return (
          r.searchParams.set("url", t),
          e.includes("BSC") && r.searchParams.set("bsc", "1"),
          e.includes("ABS") && r.searchParams.set("abs", "1"),
          e.includes("CBS") && r.searchParams.set("cbs", "1"),
          e.includes("CCT") && r.searchParams.set("cct", "1"),
          r.href
        );
      }
      getSlotTargetingUrl(e, t) {
        var l;
        let r = this._getBaseUrl("vlp/pub.json");
        e.includes("VLP") && r.searchParams.set("vlp", "1"),
          e.includes("TVP") && r.searchParams.set("tvp", "1");
        let i = 0;
        for (let c of t) {
          let {
              id: g,
              position: v,
              sizes: y,
            } = (l = c.adUnit) != null ? l : {},
            I = g + tt(v);
          r.searchParams.set(`slot-${i++}-${I}`, Zt(y));
        }
        return r.href;
      }
    };
  o(j, "SignalsUrlBuilder"), (j = d([f], j));
  var he = class {
    constructor() {
      u(this, "cache", {});
    }
    _fetchFreshSignals(e, t) {
      return T(this, null, function* () {
        if (!t.some(Xt)) return {};
        let r = this.core.get(j).getPageTargetingUrl(t, e),
          i = yield this.core.get($).fetchJson(r, { authToken: !0 });
        return i instanceof Object ? i : {};
      });
    }
    fetchSignals(e, t = 3) {
      return T(this, null, function* () {
        let r = this.core.get(C),
          i = r.getNormalizedPageUrl(),
          l = r.getStrippedPageUrl();
        this.cache[l] == null &&
          (this.cache[l] = this._fetchFreshSignals(i, e));
        let c = yield this.cache[l];
        return this.core.get(C).getStrippedPageUrl() !== l && t > 0
          ? this.fetchSignals(e, t - 1)
          : c;
      });
    }
  };
  o(he, "PageSignals"), (he = d([f], he));
  s();
  a();
  var ve = class {
    constructor() {
      u(this, "cache", {});
      u(this, "pendingSlots", []);
      u(this, "pendingBulkRequest", null);
    }
    _scheduleBulkRequest(e) {
      return T(this, null, function* () {
        yield Promise.resolve();
        let t = this.core.get(j).getSlotTargetingUrl(e, this.pendingSlots);
        (this.pendingSlots = []), (this.pendingBulkRequest = null);
        let r = yield this.core.get($).fetchJson(t, { authToken: !0 });
        return r instanceof Array ? r : [];
      });
    }
    _fetchFreshSignals(e, t) {
      return T(this, null, function* () {
        if (!t.some(Ht)) return {};
        let r = this.pendingSlots.push(e) - 1;
        this.pendingBulkRequest == null &&
          (this.pendingBulkRequest = this._scheduleBulkRequest(t));
        let l = (yield this.pendingBulkRequest)[r];
        return l instanceof Object ? l : {};
      });
    }
    _getCacheKey(e) {
      var g, v;
      let { id: t, position: r, sizes: i } = (g = e.adUnit) != null ? g : {},
        l = t + tt(r),
        c =
          (v =
            i == null
              ? void 0
              : i
                  .map((y) => {
                    var I;
                    return (I = y.label) != null ? I : `${y.width}x${y.height}`;
                  })
                  .sort()
                  .join(",")) != null
            ? v
            : "";
      return `${l}#${c}`;
    }
    fetchSignals(e, t) {
      return T(this, null, function* () {
        let r = this._getCacheKey(e);
        return (
          this.cache[r] == null &&
            (this.cache[r] = this._fetchFreshSignals(e, t)),
          this.cache[r]
        );
      });
    }
  };
  o(ve, "SlotSignals"), (ve = d([f], ve));
  s();
  a();
  var Se = class {
    constructor() {
      u(this, "cache");
    }
    _fetchFreshSignals(e) {
      return T(this, null, function* () {
        if (!e.some(Kt)) return {};
        let t = this.core.get(j).getUserTargetingUrl(e),
          r = yield this.core.get($).fetchJson(t, { authToken: !0 });
        return r instanceof Object ? r : {};
      });
    }
    fetchSignals(e) {
      return T(this, null, function* () {
        return (
          this.cache == null && (this.cache = this._fetchFreshSignals(e)),
          this.cache
        );
      });
    }
  };
  o(Se, "UserSignals"), (Se = d([f], Se));
  s();
  a();
  var Et = o(
    (n) => [...new Set(n.filter(Yt).map((e) => e.toLowerCase()))],
    "getGreenlightSignal"
  );
  var _ = class {
    constructor() {
      u(this, "plugins", {
        getEnabledSignals: o(() => [], "getEnabledSignals"),
        getEnabledAdServers: o(() => [], "getEnabledAdServers"),
        userTargetingUpdated: o((e) => [], "userTargetingUpdated"),
        pageTargetingUpdated: o((e) => [], "pageTargetingUpdated"),
        slotTargetingUpdated: o((e, t) => [], "slotTargetingUpdated"),
      });
    }
    getEnabledSignals() {
      return this.plugins.getEnabledSignals();
    }
    getEnabledAdServers() {
      return this.plugins.getEnabledAdServers();
    }
    _initialize() {
      this.getUserTargeting(), this.getPageTargeting();
    }
    _onAdRequestQueued() {
      this.getPageTargeting();
    }
    _onSlotDiscovered(e) {
      this.getEnabledAdServers().includes(e.adServer) &&
        this.getSlotTargeting(e);
    }
    getUserTargeting() {
      return T(this, null, function* () {
        let e = this._fetchUserTargeting();
        return this.core.get(A).delayAdRequests(e), e;
      });
    }
    getPageTargeting() {
      return T(this, null, function* () {
        let e = this._fetchPageTargeting();
        return this.core.get(A).delayAdRequests(e), e;
      });
    }
    getSlotTargeting(e) {
      return T(this, null, function* () {
        let t = this._fetchSlotTargeting(e);
        return this.core.get(A).delayAdRequests(t), t;
      });
    }
    _fetchUserTargeting() {
      return T(this, null, function* () {
        let e = yield this.core.get(Se).fetchSignals(this.getEnabledSignals());
        return (
          this.core.get(w).setGlobalTargeting(this.getEnabledAdServers(), e),
          this._updateGlobalGreenlightSignal(e),
          this.plugins.userTargetingUpdated(e),
          e
        );
      });
    }
    _fetchPageTargeting() {
      return T(this, null, function* () {
        let e = yield this.core.get(he).fetchSignals(this.getEnabledSignals());
        return (
          this.core.get(w).setGlobalTargeting(this.getEnabledAdServers(), e),
          this._updateGlobalGreenlightSignal(e),
          this.plugins.pageTargetingUpdated(e),
          e
        );
      });
    }
    _fetchSlotTargeting(e) {
      return T(this, null, function* () {
        if (e.adServer === "ast") return {};
        let t = yield this.core
          .get(ve)
          .fetchSignals(e, this.getEnabledSignals());
        return (
          this.core.get(w).setSlotTargeting(e, t),
          this._updateSlotGreenlightSignal(e, t),
          this.plugins.slotTargetingUpdated(e, t),
          t
        );
      });
    }
    _updateGlobalGreenlightSignal(e) {
      this.core
        .get(w)
        .setGlobalTargeting(
          this.getEnabledAdServers(),
          { [Tt]: Et(Object.keys(e)) },
          !0
        );
    }
    _updateSlotGreenlightSignal(e, t) {
      this.core.get(w).setSlotTargeting(e, { [Tt]: Et(Object.keys(t)) }, !0);
    }
  };
  o(_, "Signals"),
    d([b], _.prototype, "_initialize", 1),
    d([h(A, "adRequestQueued")], _.prototype, "_onAdRequestQueued", 1),
    d([h(R, "slotDiscovered")], _.prototype, "_onSlotDiscovered", 1),
    (_ = d([f], _));
  var Ae = class {
    _getEnabledSignals() {
      return "IDS";
    }
  };
  o(Ae, "SignalsIds"),
    d([h(_, "getEnabledSignals")], Ae.prototype, "_getEnabledSignals", 1),
    (Ae = d([f], Ae));
  s();
  a();
  var be = class {
    _getEnabledSignals() {
      return "BSC";
    }
  };
  o(be, "SignalsBsc"),
    d([h(_, "getEnabledSignals")], be.prototype, "_getEnabledSignals", 1),
    (be = d([f], be));
  s();
  a();
  var we = class {
    _getEnabledSignals() {
      return "VLP";
    }
  };
  o(we, "SignalsVlp"),
    d([h(_, "getEnabledSignals")], we.prototype, "_getEnabledSignals", 1),
    (we = d([f], we));
  s();
  a();
  var _e = class {
    _getEnabledSignals() {
      return "TVP";
    }
  };
  o(_e, "SignalsTvp"),
    d([h(_, "getEnabledSignals")], _e.prototype, "_getEnabledSignals", 1),
    (_e = d([f], _e));
  s();
  a();
  s();
  a();
  var Ue = o((n) => {
    let e = n
      .split("/")
      .map((i) => i.trim())
      .filter((i) => i.length > 0);
    if (e.length < 2) return;
    let t = e[0].split(",", 1)[0],
      r = Number(t);
    return Number.isNaN(r) ? void 0 : `${r}`;
  }, "getNetworkCodeFromAdUnit");
  s();
  a();
  s();
  a();
  var qe = o((n) => {
      if (n == null) return [];
      let e = er(n);
      return e != null
        ? [e]
        : Array.isArray(n)
        ? n.map(er).filter((t) => t != null)
        : [];
    }, "parseSlotSizes"),
    er = o((n) => {
      if (n == null) return null;
      if (typeof n == "string") return { label: n };
      if (Array.isArray(n)) {
        if (n.length === 1 && typeof n[0] == "string") return { label: n[0] };
        if (
          n.length === 2 &&
          typeof n[0] == "number" &&
          typeof n[1] == "number"
        )
          return { width: n[0], height: n[1] };
      }
      if (typeof n == "object") {
        let { label: e, width: t, height: r } = n;
        if (typeof t == "number" && typeof r == "number")
          return { width: t, height: r };
        if (typeof e == "string") return { label: e };
      }
      return null;
    }, "parseSlotSize");
  s();
  a();
  var tr = o((n) => {
    try {
      return n.getSizes();
    } catch (e) {
      return [];
    }
  }, "getGptSlotSizesSafe");
  var rt = o((n, e) => {
    let t = n.getAdUnitPath(),
      r = Ue(t);
    return {
      id: t,
      network: r,
      sizes: qe(tr(n)),
      position: e != null ? n.getTargeting(e)[0] : void 0,
    };
  }, "gptSlotToAdUnit");
  s();
  a();
  var ne = class {
    _getConfiguredAdServers() {
      try {
        return p;
      } catch (e) {
        return [];
      }
    }
    get(e, t) {
      if (t != null)
        return this._getConfiguredAdServers().find(
          (r) => r.type === e && r.adServerAccountId === t
        );
    }
  };
  o(ne, "AdServerConfigs"), (ne = d([f], ne));
  s();
  a();
  var G = class {
    constructor() {
      u(this, "pq", null);
    }
    getPq() {
      return this.pq == null && (this.pq = this._initialize()), this.pq;
    }
    getPts() {
      let e = this.getPq();
      return e.PTS == null && (e.PTS = {}), e.PTS;
    }
    setApi(e) {
      let t = this.getPq();
      t != null &&
        ((t.init = () => {}),
        (t.loadSignals = e.loadSignals),
        (t.loadSignalsForSlots = e.loadSignalsForSlots),
        (t.getTargeting = e.getTargeting));
    }
    _pushToDvtagCmd(...e) {
      var r, i;
      let t = this.core.get(S).window();
      (t.dvtag = (r = t.dvtag) != null ? r : {}),
        (t.dvtag.cmd = (i = t.dvtag.cmd) != null ? i : []),
        t.dvtag.cmd.push(...e);
    }
    _initialize() {
      var i, l;
      let e = this.core.get(S).window();
      e.PQ = (i = e.PQ) != null ? i : {};
      let t = e.PQ;
      if (t.loaded) return { cmd: [], PTS: {} };
      (t.loaded = !0), (t.PTS = (l = t.PTS) != null ? l : {});
      let r = t.cmd;
      return (
        (t.cmd = { push: o((c) => this._pushToDvtagCmd(c), "push") }),
        Array.isArray(r) && this._pushToDvtagCmd(...r),
        t
      );
    }
  };
  o(G, "LegacyPq"), (G = d([f], G));
  s();
  a();
  var rr = o((n) => {
    var r, i, l;
    let e = ee(),
      t = {
        id:
          (i = (r = n.adUnitPath) != null ? r : n.invCode) != null
            ? i
            : n.tagId,
        sizes: qe(Jt((l = n.sizes) != null ? l : "all")),
        position: n.position,
      };
    return { elementId: e, adUnit: t };
  }, "parseLegacyAdUnit");
  s();
  a();
  var nr = o((n, e) => {
      var i;
      let t = (i = n.IDS) == null ? void 0 : i[0];
      if (t == null) return;
      let r = parseInt(t);
      isNaN(r) || (e.IDS = r);
    }, "setUserTargetingOnPts"),
    ir = o((n, e) => {
      for (let t of Qe) n[t] != null && (e[t] = n[t]);
    }, "setPageTargetingOnPts"),
    or = o((n, e, t) => {
      var g, v, y, I, ue, De;
      let { adUnit: r } = n;
      if ((r == null ? void 0 : r.id) == null) return;
      let i = r.id,
        l = yt((g = r.sizes) != null ? g : []),
        c = r.position;
      for (let W of ze) {
        let Ie = e[W];
        Ie != null &&
          ((v = t[W]) != null || (t[W] = {}),
          (I = (y = t[W])[i]) != null || (y[i] = {}),
          (t[W][i][l] = Ie[0]),
          c != null &&
            ((De = (ue = t[W][i])[c]) != null || (ue[c] = {}),
            (t[W][i][c][l] = Ie[0])));
      }
    }, "setSlotTargetingOnPts");
  var ie = class {
    _initialize() {
      this.core
        .get(G)
        .setApi({
          loadSignals: this.loadSignals.bind(this),
          loadSignalsForSlots: this.loadSignalsForSlots.bind(this),
          getTargeting: this.getTargeting.bind(this),
        });
    }
    _setUserTargetingOnPts(e) {
      let t = this.core.get(G).getPts();
      nr(e, t);
    }
    _setPageTargetingOnPts(e) {
      let t = this.core.get(G).getPts();
      ir(e, t);
    }
    _setSlotTargetingOnPts(e, t) {
      let r = this.core.get(G).getPts();
      or(e, t, r);
    }
    loadSignals(e, t) {
      return T(this, null, function* () {
        yield this._onDvtagReady("loadSignals", t);
      });
    }
    loadSignalsForSlots(e, t, r) {
      return T(this, null, function* () {
        let i = this.core.get(_),
          l = this.core.get(R);
        for (let g of e) {
          let v = g.getSlotElementId(),
            y = l.getSlot("gpt", v);
          if (y == null) {
            let I = Ue(g.getAdUnitPath()),
              ue = this.core.get(ne).get("gpt", I),
              De = ue == null ? void 0 : ue.adPositionKey;
            y = l.createSlot("gpt", 0, v, rt(g, De), ue);
          }
          i.getSlotTargeting(y);
        }
        let c = typeof t == "function" ? t : r;
        yield this._onDvtagReady("loadSignalsForSlots", c);
      });
    }
    getTargeting(e, t) {
      return T(this, null, function* () {
        var c;
        let r = this.core.get(_),
          i = this.core.get(R);
        for (let g of (c = e.adUnits) != null ? c : []) {
          let { elementId: v, adUnit: y } = rr(g),
            I = i.createSlot("legacy-api", 0, v, y);
          r.getSlotTargeting(I);
        }
        let l = o(
          () => (t == null ? void 0 : t(void 0, this.core.get(G).getPts())),
          "callback"
        );
        yield this._onDvtagReady("getTargeting", l);
      });
    }
    _getPubAdsTargeting(e) {
      var t, r, i;
      return (i =
        (r =
          (t = this.core.get(S).window().googletag) == null
            ? void 0
            : t.pubads) == null
          ? void 0
          : r.call(t).getTargeting(e)) != null
        ? i
        : [];
    }
    _onDvtagReady(e, t) {
      return T(this, null, function* () {
        yield new Promise((r) => {
          this.core
            .get(S)
            .window()
            .dvtag.queueAdRequest({
              callback: o(() => {
                try {
                  t == null || t();
                } catch (i) {}
                r();
              }, "callback"),
              timestamp: new Date().getTime(),
              timeout: 750,
              internal: !0,
            });
        });
      });
    }
  };
  o(ie, "LegacyLayer"),
    d([b], ie.prototype, "_initialize", 1),
    d(
      [h(_, "userTargetingUpdated")],
      ie.prototype,
      "_setUserTargetingOnPts",
      1
    ),
    d(
      [h(_, "pageTargetingUpdated")],
      ie.prototype,
      "_setPageTargetingOnPts",
      1
    ),
    d(
      [h(_, "slotTargetingUpdated")],
      ie.prototype,
      "_setSlotTargetingOnPts",
      1
    ),
    (ie = d([f], ie));
  s();
  a();
  s();
  a();
  s();
  a();
  var it = o((n) => {
    if (
      typeof n == "string" ||
      (Array.isArray(n) &&
        n.length === 2 &&
        n.every((e) => typeof e == "number"))
    )
      return n;
    if (n != null && typeof n.width == "number" && typeof n.height == "number")
      return [n.width, n.height];
  }, "cleanSizeInput");
  s();
  a();
  var q = o((n) => {
    if (typeof n == "string") return n;
    if (typeof n == "number") return `${n}`;
  }, "cleanStringInput");
  var B = class {
    _defineSlot(e, t = {}) {
      if (typeof e != "string" || t == null || typeof t != "object") return;
      let r = {
        id: q(t.id),
        network: q(t.network),
        sizes: t.sizes != null ? qe(t.sizes) : void 0,
        position: q(t.position),
      };
      this.core.get(R).createSlot("custom", 0, e, r);
    }
    _adRendered(e, t) {
      if (typeof e != "string" || t == null || typeof t != "object") return;
      let r = this.core.get(R).getSlot("custom", e);
      if (r == null) return;
      let i = {
        type: "display",
        advertiserId: q(t.advertiserId),
        campaignId: q(t.campaignId),
        creativeId: q(t.creativeId),
        lineItemId: q(t.lineItemId),
        renderedSize: it(t.renderedSize),
      };
      this.core.get(D).setAdRendered(r, i);
    }
    _getTargeting(e) {
      let t = this.core.get(w);
      if (typeof e != "string") return t.getGlobalTargeting("custom");
      let r = this.core.get(R).getSlot("custom", e);
      return r == null ? t.getGlobalTargeting("custom") : t.getTargeting(r);
    }
  };
  o(B, "CustomAdServer"),
    d([h(O, "defineSlot")], B.prototype, "_defineSlot", 1),
    d([h(O, "getTargeting")], B.prototype, "_getTargeting", 1),
    (B = d([f], B));
  var Ce = class {
    _getEnabledAdServers() {
      return "custom";
    }
  };
  o(Ce, "CustomSignals"),
    d([h(_, "getEnabledAdServers")], Ce.prototype, "_getEnabledAdServers", 1),
    (Ce = d([f, P(B)], Ce));
  s();
  a();
  s();
  a();
  s();
  a();
  s();
  a();
  var sr = o((n, e = !0) => {
    let t = document.createElement("script");
    return t.setAttribute("src", n), e && t.setAttribute("async", ""), t;
  }, "createScriptElement");
  s();
  a();
  s();
  a();
  var Te = o(() => {
    var n, e, t;
    return Math.floor(
      (t =
        (e = (n = window.performance) == null ? void 0 : n.now) == null
          ? void 0
          : e.call(n)) != null
        ? t
        : Date.now()
    );
  }, "perfNowOrDateNow");
  s();
  a();
  var Rt = class Rt {
    constructor() {
      u(this, "_firstQueuedAdRequest", 1 / 0);
      u(this, "_lastQueuedAdRequest", -1 / 0);
      u(this, "_firstReleasedAdRequest", 1 / 0);
      u(this, "_lastReleasedAdRequest", -1 / 0);
      u(this, "_lastReleasedAdRequestTime", null);
      u(this, "_hasBeenSuccessful", !1);
    }
    setAdRequestQueued(e) {
      (this._firstQueuedAdRequest = Math.min(this._firstQueuedAdRequest, e)),
        (this._lastQueuedAdRequest = Math.max(this._lastQueuedAdRequest, e));
    }
    setAdRequestReleased(e) {
      (this._firstReleasedAdRequest = Math.min(
        this._firstReleasedAdRequest,
        e
      )),
        (this._lastReleasedAdRequest = Math.max(
          this._lastReleasedAdRequest,
          e
        )),
        (this._lastReleasedAdRequestTime = Te());
    }
    getLastQueuedAdRequest() {
      return Number.isFinite(this._lastQueuedAdRequest)
        ? this._lastQueuedAdRequest
        : null;
    }
    getLastReleasedAdRequest() {
      return Number.isFinite(this._lastReleasedAdRequest)
        ? this._lastReleasedAdRequest
        : null;
    }
    getLastReleasedAdRequestTime() {
      return this._lastReleasedAdRequestTime;
    }
    getLastSuccessfulAdRequest() {
      let e = Math.max(
          this._firstQueuedAdRequest,
          this._firstReleasedAdRequest
        ),
        t = Math.min(this._lastQueuedAdRequest, this._lastReleasedAdRequest);
      return t < e ? null : t;
    }
    getPreviouslySuccessful() {
      return this._hasBeenSuccessful;
    }
    markAdServerAdRequest() {
      this.getLastSuccessfulAdRequest() != null &&
        (this._hasBeenSuccessful = !0),
        (this._firstQueuedAdRequest = 1 / 0),
        (this._lastQueuedAdRequest = -1 / 0),
        (this._firstReleasedAdRequest = 1 / 0),
        (this._lastReleasedAdRequest = -1 / 0),
        (this._lastReleasedAdRequestTime = null);
    }
  };
  o(Rt, "SlotAdRequestTracker");
  var ot = Rt;
  s();
  a();
  var st = ((c) => (
    (c.UNKNOWN = "UNKNOWN"),
    (c.SEEN = "SEEN"),
    (c.NOT_READY = "NOT_READY"),
    (c.POSSIBLE_TIMEOUT = "POSSIBLE_TIMEOUT"),
    (c.PREV_READY = "PREV_READY"),
    (c.READY = "READY"),
    c
  ))(st || {});
  var At = "dv_upt_slot_ready",
    on = [
      "https://securepubads.g.doubleclick.net/gampad/ads?",
      "https://pagead2.googlesyndication.com/gampad/ads?",
    ],
    sn = 750,
    L = class {
      constructor() {
        u(this, "plugins", {
          onSlotRequested: o(() => [], "onSlotRequested"),
          onSlotRequestValidated: o(() => [], "onSlotRequestValidated"),
        });
        u(this, "validateAdRequests", !1);
        u(this, "lastAdRequestQueued", null);
        u(this, "lastAdRequestReleased", null);
        u(this, "state", {
          adRequestTracker: new E.Map(),
          triggered: new E.Map(),
        });
      }
      _getSlotAdRequestTracker(e) {
        return this.state.adRequestTracker.conjure(e, () => new ot());
      }
      _onAdRequestQueued({ index: e }) {
        this.lastAdRequestQueued = e;
        for (let t of this.core.get(R).getSlots())
          this._getSlotAdRequestTracker(t).setAdRequestQueued(e),
            this.state.triggered.set(t, !1);
      }
      _onAdRequestBeforeRelease({ index: e }) {
        let t = this.core.get(w);
        this.lastAdRequestReleased = e;
        for (let r of this.core.get(R).getSlots())
          this._getSlotAdRequestTracker(r).setAdRequestReleased(e),
            this.validateAdRequests && t.setSlotTargeting(r, { [At]: ["1"] });
      }
      _onSlotDiscovered(e, t) {
        t === 0 &&
          this.lastAdRequestQueued != null &&
          this._getSlotAdRequestTracker(e).setAdRequestQueued(
            this.lastAdRequestQueued
          );
      }
      _determineReadyState(e) {
        let t = this._getSlotAdRequestTracker(e),
          r = t.getLastQueuedAdRequest(),
          i = t.getLastSuccessfulAdRequest(),
          l = t.getPreviouslySuccessful();
        return i != null
          ? "READY"
          : l
          ? "PREV_READY"
          : r != null
          ? "NOT_READY"
          : Date.now() - e.creationTime > sn
          ? "SEEN"
          : "UNKNOWN";
      }
      getSlotReadyStateOnAdServerAdRequest(e) {
        let t = this._determineReadyState(e);
        if (t === "READY") {
          if (this.state.triggered.get(e) === !0)
            return { readyState: "PREV_READY" };
          this.state.triggered.set(e, !0);
          let r =
            this._getSlotAdRequestTracker(e).getLastReleasedAdRequestTime();
          return { readyState: t, readyFor: Te() - r };
        }
        return { readyState: t };
      }
      _onSlotRequested(e) {
        let { readyState: t, readyFor: r } =
          this.getSlotReadyStateOnAdServerAdRequest(e);
        this._getSlotAdRequestTracker(e).markAdServerAdRequest(),
          this.validateAdRequests &&
            this.core.get(w).setSlotTargeting(e, { [At]: ["0"] }),
          this.plugins.onSlotRequested(e, t, r);
      }
      enableAdRequestValidation() {
        if (!this.validateAdRequests)
          try {
            let e = this._processResourceRequest.bind(this);
            new PerformanceObserver((r) => r.getEntries().forEach(e)).observe({
              type: "resource",
            }),
              (this.validateAdRequests = !0);
          } catch (e) {}
      }
      _processResourceRequest(e) {
        var t, r, i;
        try {
          if (on.every((g) => !e.name.startsWith(g))) return;
          let c =
            (r =
              (t = new URL(e.name).searchParams.get("prev_scp")) == null
                ? void 0
                : t.split("|")) != null
              ? r
              : [];
          for (let g of c) {
            let y =
              ((i = new URLSearchParams(g).get(At)) == null ? void 0 : i[0]) ===
              "1";
            this.plugins.onSlotRequestValidated(y);
          }
        } catch (l) {}
      }
    };
  o(L, "SlotReadinessTracker"),
    d([h(A, "adRequestQueued")], L.prototype, "_onAdRequestQueued", 1),
    d(
      [h(A, "adRequestBeforeRelease"), h(A, "adRequestTimedOut")],
      L.prototype,
      "_onAdRequestBeforeRelease",
      1
    ),
    d([h(R, "slotDiscovered")], L.prototype, "_onSlotDiscovered", 1),
    d([h(D, "adRequested")], L.prototype, "_onSlotRequested", 1),
    (L = d([f], L));
  var bt = "__dvtag_debug_mode",
    ar = "1",
    oe = class {
      constructor() {
        u(this, "enabled", !1);
        u(
          this,
          "debugScriptResolve",
          o((e) => {}, "debugScriptResolve")
        );
      }
      _initialize() {
        let e = this.core.get(S).window();
        try {
          this.enabled = e === e.top && e.sessionStorage.getItem(bt) === ar;
        } catch (t) {}
        this.enabled &&
          (this.core.get(A).delayAdRequests(
            new Promise((t) => {
              this.debugScriptResolve = t;
            })
          ),
          this._loadDebugScript());
      }
      _toggleDebugMode() {
        let e = this.core.get(S).window();
        this.enabled
          ? e.sessionStorage.removeItem(bt)
          : e.sessionStorage.setItem(bt, ar),
          e.location.reload();
      }
      debugScriptLoaded() {
        this.debugScriptResolve(void 0);
      }
      _loadDebugScript() {
        return T(this, null, function* () {
          let e = this.core.get(S).document(),
            t = this.core.get(C).getCurrentScriptBaseUrl(),
            r = sr(`${t}debug.js`, !0);
          e.readyState === "loading" &&
            (yield new Promise((i) =>
              e.addEventListener("DOMContentLoaded", () => i(void 0))
            )),
            e.head.appendChild(r);
        });
      }
    };
  o(oe, "DebugScriptLoader"),
    d([b], oe.prototype, "_initialize", 1),
    d([h(O, "toggleDebugMode")], oe.prototype, "_toggleDebugMode", 1),
    (oe = d([P(L), f], oe));
  s();
  a();
  s();
  a();
  var an = Object.defineProperty,
    ln = Object.defineProperties,
    un = Object.getOwnPropertyDescriptors,
    lr = Object.getOwnPropertySymbols,
    dn = Object.prototype.hasOwnProperty,
    cn = Object.prototype.propertyIsEnumerable,
    ur = o(
      (n, e, t) =>
        e in n
          ? an(n, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (n[e] = t),
      "__defNormalProp"
    ),
    Ye = o((n, e) => {
      for (var t in e || (e = {})) dn.call(e, t) && ur(n, t, e[t]);
      if (lr) for (var t of lr(e)) cn.call(e, t) && ur(n, t, e[t]);
      return n;
    }, "__spreadValues"),
    dr = o((n, e) => ln(n, un(e)), "__spreadProps");
  var ke = ((n) => (
    (n.GAM = "gam"),
    (n.XANDR = "xandr"),
    (n.FREEWHEEL = "freewheel"),
    (n.CUSTOM = "custom"),
    n
  ))(ke || {});
  var wt = ((n) => (
    (n[(n.Disabled = 0)] = "Disabled"), (n[(n.Dryrun = 1)] = "Dryrun"), n
  ))(wt || {});
  var tm = typeof TextDecoder == "function" ? new TextDecoder() : void 0,
    rm = typeof TextEncoder == "function" ? new TextEncoder() : void 0,
    pn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    mn = Array.prototype.slice.call(pn),
    nm = ((n) => {
      let e = {};
      return n.forEach((t, r) => (e[t] = r)), e;
    })(mn),
    im = String.fromCharCode.bind(String),
    om =
      typeof Uint8Array.from == "function"
        ? Uint8Array.from.bind(Uint8Array)
        : (n) => new Uint8Array(Array.prototype.slice.call(n, 0));
  var gn = "__DVPUB_OT__",
    fn = o(
      (n) =>
        gn +
        new URLSearchParams(n)
          .toString()
          .replace(/=/g, ":")
          .replace(/&/g, "|")
          .replace(/\+/g, "%20")
          .replace(
            /[^a-zA-Z0-9:|%_]/g,
            (e) => `%${e.charCodeAt(0).toString(16)}`
          ),
      "encodeParams"
    ),
    cr = o(
      (n, e) =>
        Object.entries(e).reduce((r, [i, l]) => ((r[`${n}${i}`] = l), r), {}),
      "prefixKeys"
    ),
    hn = o((n) => {
      let e = {};
      for (let [t, r] of Object.entries(n)) e[t] = `${r}`;
      return e;
    }, "stringifyValues"),
    pr = o((n, e, t) => {
      if (n === "custom" || n === "freewheel") return {};
      let r = hn(
          dr(Ye({}, e.passthroughParams), {
            dvp_uptpid: e.pageId,
            dvp_uptsid: e.slotId,
            dvp_uptsacnt: e.slotAdCount,
            dvp_qtpid: e.pageId,
          })
        ),
        i = fn(
          Ye(
            Ye({}, e.wrapperMode != null ? { m: String(e.wrapperMode) } : {}),
            cr("_", r)
          )
        );
      return n === "gam"
        ? dr(
            Ye(
              Ye(
                { dvpub_ot_params: i },
                e.wrapperMode != null
                  ? { dv_upt_cwm: String(e.wrapperMode) }
                  : {}
              ),
              cr("dv__", r)
            ),
            { pts_pid: e.pageId, pts_sid: e.slotId }
          )
        : n === "xandr"
        ? { [t != null ? t : "pt1"]: i }
        : {};
    }, "generateOmniTagTargeting");
  s();
  a();
  var mr = o((n) => {
    let e = {};
    for (let [t, r] of Object.entries(n))
      r != null && (e[t] = typeof r == "string" ? [r] : r);
    return e;
  }, "toTargeting");
  var vn = {
      gpt: ke.GAM,
      ast: ke.XANDR,
      custom: ke.CUSTOM,
      "legacy-api": ke.CUSTOM,
    },
    Sn = "pt9",
    J = class {
      constructor() {
        u(this, "plugins", {
          disableCreativeWrapperMeasurement: o(
            (e) => [],
            "disableCreativeWrapperMeasurement"
          ),
        });
        u(this, "targetingSet", new E.Map());
        u(this, "targetingReliable", new E.Map());
      }
      _setCreativeWrapperTargeting(e) {
        if (e.adServer !== "gpt") return;
        let t = e.uuid,
          r = this.core.get(C).getVisitUuid(),
          i = this._getNextSlotAdCount(e),
          l = this.plugins
            .disableCreativeWrapperMeasurement(e)
            .some((c) => c === !0)
            ? wt.Disabled
            : void 0;
        this.core
          .get(w)
          .setSlotTargeting(
            e,
            mr(
              pr(
                vn[e.adServer],
                {
                  slotId: t,
                  pageId: r,
                  slotAdCount: i,
                  wrapperMode: l,
                  passthroughParams: { dvp_uptacf: "1" },
                },
                Sn
              )
            )
          ),
          this.targetingSet.set(e, !0);
      }
      _onNewVisit() {
        let e = this.core.get(R).getSlots();
        for (let t of e) this._setCreativeWrapperTargeting(t);
      }
      _onAdRequested(e) {
        this.targetingReliable.set(e, this.targetingSet.get(e) === !0);
      }
      isTargetingReliable(e) {
        return e.adServer !== "gpt" ? !0 : this.targetingReliable.get(e) === !0;
      }
      _getNextSlotAdCount(e) {
        return this.core.get(D).getNonEmptyAdRenderedCount(e) + 1;
      }
    };
  o(J, "CreativeWrapperTargeting"),
    d(
      [h(R, "slotDiscovered"), h(D, "adRendered")],
      J.prototype,
      "_setCreativeWrapperTargeting",
      1
    ),
    d([h(C, "newVisit")], J.prototype, "_onNewVisit", 1),
    d([h(D, "adRequested")], J.prototype, "_onAdRequested", 1),
    (J = d([f], J));
  s();
  a();
  var Z = class {
    constructor() {
      u(this, "restoreCount", 0);
    }
    getRestoreCount() {
      return this.restoreCount;
    }
    _restoreTargeting() {
      let e = this.core.get(w);
      for (let t of this.core.get(R).getSlots()) {
        if (t.adServer === "custom" || t.adServer === "legacy-api") continue;
        let r = e.getTargeting(t),
          i = Object.keys(r)[0];
        i != null &&
          e.getAdServerTargeting(t, i).length === 0 &&
          (e.setAdServerTargeting(t), (this.restoreCount += 1));
      }
    }
  };
  o(Z, "TargetingRestorer"),
    d([h(A, "adRequestQueued")], Z.prototype, "_restoreTargeting", 1),
    (Z = d([f], Z));
  s();
  a();
  s();
  a();
  var Q = class {
    getPubAds() {
      var t, r;
      let e = this.core.get(S).window();
      try {
        return (r = (t = e.googletag) == null ? void 0 : t.pubads) == null
          ? void 0
          : r.call(t);
      } catch (i) {
        return;
      }
    }
    onPubAdsReady(e) {
      var i, l, c, g;
      let t = this.core.get(S).window();
      (t.googletag = (i = t.googletag) != null ? i : {}),
        (t.googletag.cmd = (l = t.googletag.cmd) != null ? l : []);
      let r = this.getPubAds();
      if (r != null) e(r);
      else
        try {
          (g = (c = t.googletag.cmd) == null ? void 0 : c.push) == null ||
            g.call(c, () => {
              (r = this.getPubAds()), r != null && e(r);
            });
        } catch (v) {}
    }
  };
  o(Q, "GoogletagPubAds"), (Q = d([f], Q));
  s();
  a();
  var k = class {
    constructor() {
      u(this, "gptReference", new E.Map());
    }
    _scanForSlots() {
      this.core.get(Q).onPubAdsReady((e) => {
        e.getSlots().map((t) => this.maybeDiscoverSlot(t, 0));
      });
    }
    getGptSlot(e) {
      return this.gptReference.get(e);
    }
    maybeDiscoverSlot(e, t) {
      let r = this.core.get(R).getSlot("gpt", e.getSlotElementId());
      return r == null || this.gptReference.get(r) !== e
        ? this._createSlot(e, t)
        : r;
    }
    _createSlot(e, t) {
      let r = e.getSlotElementId(),
        i = e.getAdUnitPath(),
        l = Ue(i),
        c = this.core.get(ne).get("gpt", l),
        g = rt(e, c == null ? void 0 : c.adPositionKey);
      return this.core
        .get(R)
        .createSlot("gpt", t, r, g, c, (y) => this.gptReference.set(y, e));
    }
  };
  o(k, "GoogletagSlots"),
    d([b, h(A, "adRequestQueued")], k.prototype, "_scanForSlots", 1),
    (k = d([f], k));
  var se = class {
    constructor() {
      u(this, "plugins", {
        adRequested: o((e) => [], "adRequested"),
        adRendered: o((e, t) => [], "adRendered"),
      });
    }
    _getHtmlSafe(e) {
      var t, r;
      try {
        return (r = (t = e.getHtml) == null ? void 0 : t.call(e)) != null
          ? r
          : void 0;
      } catch (i) {
        return;
      }
    }
    _initialize() {
      this.core.get(Q).onPubAdsReady((e) => {
        e.addEventListener("slotRequested", (t) => {
          let r = this.core.get(k).maybeDiscoverSlot(t.slot, 1);
          this.plugins.adRequested(r);
        }),
          e.addEventListener("slotRenderEnded", (t) => {
            let r = this.core.get(k).maybeDiscoverSlot(t.slot, 2);
            if (t.isEmpty) {
              this.plugins.adRendered(r, null);
              return;
            }
            let i = {
              type: "display",
              advertiserId: q(t.advertiserId),
              campaignId: q(t.campaignId),
              creativeId: q(t.creativeId),
              lineItemId: q(t.lineItemId),
              renderedSize: it(t.size),
              html: this._getHtmlSafe(t.slot),
            };
            this.plugins.adRendered(r, i);
          });
      });
    }
  };
  o(se, "GoogletagEvents"),
    d([b], se.prototype, "_initialize", 1),
    (se = d([f], se));
  s();
  a();
  s();
  a();
  var _t = o(
    (n) =>
      typeof n == "string" || typeof n == "number"
        ? [`${n}`]
        : n instanceof Array
        ? me(
            n
              .filter((e) => typeof e == "string" || typeof e == "number")
              .map((e) => `${e}`)
          )
        : [],
    "cleanTargetingInput"
  );
  var fe = class {
    getAdServerTargeting(e, t) {
      var l, c, g;
      if (e.adServer !== "gpt") return [];
      let r = [];
      try {
        r = _t(
          (c =
            (l = this.core.get(Q).getPubAds()) == null
              ? void 0
              : l.getTargeting) == null
            ? void 0
            : c.call(l, t)
        );
      } catch (v) {}
      let i = [];
      try {
        i = _t(
          (g = this.core.get(k).getGptSlot(e)) == null
            ? void 0
            : g.getTargeting(t)
        );
      } catch (v) {}
      return me(r, i);
    }
    setAdServerTargeting(e, t, r) {
      var i;
      if (e.adServer === "gpt")
        try {
          (i = this.core.get(k).getGptSlot(e)) == null || i.setTargeting(t, r);
        } catch (l) {}
    }
  };
  o(fe, "GoogletagTargeting"), (fe = d([f], fe));
  var z = class {
    _onAdRequested(e) {
      this.core.get(D).setAdRequested(e);
    }
    _onAdRendered(e, t) {
      this.core.get(D).setAdRendered(e, t);
    }
    _getAdServerTargeting(e, t) {
      return e.adServer !== "gpt"
        ? []
        : this.core.get(fe).getAdServerTargeting(e, t);
    }
    _setAdServerTargeting(e, t, r) {
      e.adServer === "gpt" && this.core.get(fe).setAdServerTargeting(e, t, r);
    }
  };
  o(z, "Googletag"),
    d([h(se, "adRequested")], z.prototype, "_onAdRequested", 1),
    d([h(se, "adRendered")], z.prototype, "_onAdRendered", 1),
    d([h(w, "getAdServerTargeting")], z.prototype, "_getAdServerTargeting", 1),
    d([h(w, "setAdServerTargeting")], z.prototype, "_setAdServerTargeting", 1),
    (z = d([f, P(J), P(Z), P(oe)], z));
  var Pe = class {
    _getEnabledAdServers() {
      return "gpt";
    }
  };
  o(Pe, "GptSignals"),
    d([h(_, "getEnabledAdServers")], Pe.prototype, "_getEnabledAdServers", 1),
    (Pe = d([f, P(z)], Pe));
  s();
  a();
  s();
  a();
  s();
  a();
  var Ct = class Ct {
    constructor() {
      u(this, "total", 0);
      u(this, "dataPoints", 0);
    }
    push(e) {
      return (this.total += e), (this.dataPoints += 1), this;
    }
    get() {
      return this.total / this.dataPoints;
    }
    getRounded() {
      return Math.round(this.get());
    }
  };
  o(Ct, "Average");
  var He = Ct;
  var Tn = "implcheck",
    yn = 1e-4,
    En = 5e3,
    Rn = 5,
    U = class {
      constructor() {
        u(this, "enabled", !1);
        u(this, "totalInternalAdRequestQueuedCount", 0);
        u(this, "totalAdRequestsCompletedCount", 0);
        u(this, "totalSlotsRequestedCount", 0);
        u(this, "totalSlotsRequestedOkCount", 0);
        u(this, "totalTimeoutCount", 0);
        u(this, "trackersSent", 0);
        u(this, "totalValidatedAdServerRequests", { ok: 0, notOk: 0 });
        u(this, "lastOnDvtagReadyCall", NaN);
        u(this, "slotReqAvgTimeSinceCall", new He());
        u(this, "slotReqAvgTimeSinceDone", new He());
        u(this, "batch", null);
      }
      isDebugForceEnabled() {
        return !1;
      }
      _initialize() {
        (this.enabled =
          this.core.get(U).isDebugForceEnabled() || Math.random() < yn),
          this.enabled && this.core.get(L).enableAdRequestValidation();
      }
      _onAdRequestQueued(e) {
        this.enabled &&
          ((this.lastOnDvtagReadyCall = Te()),
          e.internal && (this.totalInternalAdRequestQueuedCount += 1));
      }
      _onAdRequestCompleted(e) {
        this.enabled &&
          ((this.totalAdRequestsCompletedCount += 1),
          (e.status === "tag-timeout" || e.status === "queue-timeout") &&
            (this.totalTimeoutCount += 1));
      }
      _onSlotRequested(e, t, r) {
        if (!this.enabled) return;
        let i = this._getOrStartBatch();
        (this.totalSlotsRequestedCount += 1),
          t === "READY" && (this.totalSlotsRequestedOkCount += 1),
          i.slots[t].push(e.elementId),
          r != null &&
            (this.slotReqAvgTimeSinceDone.push(r),
            this.slotReqAvgTimeSinceCall.push(
              Te() - this.lastOnDvtagReadyCall
            ));
        let l = this._validateAdServerTargeting(e);
        l === 1
          ? (i.targeting.extendedCount += 1)
          : l === 0 && (i.targeting.reducedCount += 1);
      }
      _validateAdServerTargeting(e) {
        let t = this.core.get(w),
          r = 2,
          i = t.getTargeting(e);
        for (let [l, c] of Object.entries(i)) {
          let g = t.getAdServerTargeting(e, l);
          if (c.length > g.length || c.some((v) => !g.includes(v))) return 0;
          g.length > c.length && (r = 1);
        }
        return r;
      }
      _onSlotRequestValidated(e) {
        e
          ? (this.totalValidatedAdServerRequests.ok += 1)
          : (this.totalValidatedAdServerRequests.notOk += 1);
      }
      _sendTracker() {
        let e = this.core.get(Z).getRestoreCount(),
          { slots: t, targeting: r, start: i } = this._getOrStartBatch(),
          l = {
            cd110: t.READY.join(),
            cd111: t.PREV_READY.join(),
            cd112: t.SEEN.join(),
            cd113: t.NOT_READY.join(),
            cd114: t.UNKNOWN.join(),
            cd115: t.POSSIBLE_TIMEOUT.join(),
            cm106: this.trackersSent,
            cm107: i,
            cm109: this.totalTimeoutCount,
            cm110: this.slotReqAvgTimeSinceCall.getRounded(),
            cm111: this.slotReqAvgTimeSinceDone.getRounded(),
            cm112: this.totalSlotsRequestedOkCount,
            cm113: this.totalValidatedAdServerRequests.ok,
            cm114: this.totalValidatedAdServerRequests.notOk,
            cm115: e,
            cm116: this.totalAdRequestsCompletedCount,
            cm117: this.totalInternalAdRequestQueuedCount,
            cm118: this.totalSlotsRequestedCount,
            cm119: r.reducedCount,
            cm120: r.extendedCount,
          };
        this.core.get(N).fireEvent(Tn, l),
          (this.batch = null),
          (this.trackersSent += 1),
          this.trackersSent >= Rn && (this.enabled = !1);
      }
      _getOrStartBatch() {
        return (
          this.batch == null &&
            ((this.batch = {
              start: Te(),
              slots: Object.fromEntries(Object.values(st).map((e) => [e, []])),
              targeting: { extendedCount: 0, reducedCount: 0 },
            }),
            setTimeout(() => this._sendTracker(), En)),
          this.batch
        );
      }
    };
  o(U, "ImplementationValidator"),
    d([b], U.prototype, "_initialize", 1),
    d([h(A, "adRequestQueued")], U.prototype, "_onAdRequestQueued", 1),
    d([h(A, "adRequestCompleted")], U.prototype, "_onAdRequestCompleted", 1),
    d([h(L, "onSlotRequested")], U.prototype, "_onSlotRequested", 1),
    d(
      [h(L, "onSlotRequestValidated")],
      U.prototype,
      "_onSlotRequestValidated",
      1
    ),
    (U = d([f], U));
  s();
  a();
  var ae = class {
    _initialize() {
      this._flushCommandBuffer();
    }
    _flushCommandBuffer() {
      return T(this, null, function* () {
        var l;
        yield Promise.resolve();
        let e = this.core.get(S).window(),
          t = (l = e.dvtag) != null ? l : {};
        (e.dvtag = t), t.cmd instanceof Array || (t.cmd = []);
        let r = t.cmd,
          i = r.length;
        (t.cmd = {
          push: o((...c) => {
            for (let g of c)
              try {
                g();
              } catch (v) {}
            return (i += c.length), i;
          }, "push"),
        }),
          t.cmd.push(...r);
      });
    }
  };
  o(ae, "CommandBuffer"),
    d([b], ae.prototype, "_initialize", 1),
    d([Ge], ae.prototype, "_flushCommandBuffer", 1),
    (ae = d([f], ae));
  s();
  a();
  var gr = 10,
    le = class {
      constructor() {
        u(this, "errors", new E.Map());
      }
      _getErrors() {
        return this.errors.summon(this.core.session, []);
      }
      toSafeCallback(e) {
        return (...t) => this._callSafely(e, t);
      }
      _callSafely(e, t) {
        return e(...t);
      }
      _handleError(e, t) {
        let r = this._getErrors(),
          i = t.join("=>");
        if ((r.unshift(`${e}: ${i}`), r.length > gr)) {
          r.length = gr;
          return;
        }
        this.core
          .get(N)
          .fireEvent("log", { cd111: "error", cd112: e, cd113: i });
      }
    };
  o(le, "ErrorHandler"),
    d([Ge], le.prototype, "_callSafely", 1),
    d([gt], le.prototype, "_handleError", 1),
    (le = d([f], le));
  var Fe = class {};
  o(Fe, "HouseHold"),
    (Fe = d([f, P(O), P(A), P(ae), P(N), P(le), P(B), P(U)], Fe));
  s();
  a();
  s();
  a();
  var fr = o((n) => {
    var e, t, r, i, l, c;
    try {
      let g = {};
      for (let [v, y, I] of (t =
        (e = window.dvtag) == null ? void 0 : e._overrides) != null
        ? t
        : [])
        (r = g[v]) != null || (g[v] = {}),
          (l = (i = g[v])[y]) != null || (i[y] = I);
      for (let v of n)
        for (let [y, I] of Object.entries((c = g[v.name]) != null ? c : {}))
          v.prototype[y] = I;
    } catch (g) {}
  }, "applyDebugOverrides");
  var An = o(() => {
    var n, e;
    ((n = window.dvtag) == null ? void 0 : n._core) == null &&
      (fr(Xe),
      (window.dvtag = (e = window.dvtag) != null ? e : {}),
      (window.dvtag._core = new je(Xe)),
      window.dvtag._core.execute());
  }, "main");
  try {
    An();
  } catch (n) {}
})();
