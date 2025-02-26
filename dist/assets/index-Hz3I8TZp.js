var ib = Object.defineProperty;
var ob = (e, t, n) =>
  t in e
    ? ib(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var jn = (e, t, n) => (ob(e, typeof t != "symbol" ? t + "" : t, n), n),
  Jd = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  };
var k = (e, t, n) => (
    Jd(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ae = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  te = (e, t, n, r) => (
    Jd(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  );
var Au = (e, t, n, r) => ({
    set _(s) {
      te(e, t, s, n);
    },
    get _() {
      return k(e, t, r);
    },
  }),
  ke = (e, t, n) => (Jd(e, t, "access private method"), n);
function em(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const i = Object.getOwnPropertyDescriptor(r, s);
          i &&
            Object.defineProperty(
              e,
              s,
              i.get ? i : { enumerable: !0, get: () => r[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
var Xs =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function ab(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var s = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var iw = { exports: {} },
  vd = {},
  ow = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eu = Symbol.for("react.element"),
  lb = Symbol.for("react.portal"),
  ub = Symbol.for("react.fragment"),
  cb = Symbol.for("react.strict_mode"),
  db = Symbol.for("react.profiler"),
  fb = Symbol.for("react.provider"),
  hb = Symbol.for("react.context"),
  pb = Symbol.for("react.forward_ref"),
  mb = Symbol.for("react.suspense"),
  yb = Symbol.for("react.memo"),
  gb = Symbol.for("react.lazy"),
  fg = Symbol.iterator;
function vb(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fg && e[fg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var aw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  lw = Object.assign,
  uw = {};
function Jo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uw),
    (this.updater = n || aw);
}
Jo.prototype.isReactComponent = {};
Jo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Jo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cw() {}
cw.prototype = Jo.prototype;
function tm(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = uw),
    (this.updater = n || aw);
}
var nm = (tm.prototype = new cw());
nm.constructor = tm;
lw(nm, Jo.prototype);
nm.isPureReactComponent = !0;
var hg = Array.isArray,
  dw = Object.prototype.hasOwnProperty,
  rm = { current: null },
  fw = { key: !0, ref: !0, __self: !0, __source: !0 };
function hw(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      dw.call(t, r) && !fw.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: eu,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: rm.current,
  };
}
function xb(e, t) {
  return {
    $$typeof: eu,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sm(e) {
  return typeof e == "object" && e !== null && e.$$typeof === eu;
}
function wb(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pg = /\/+/g;
function ef(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wb("" + e.key)
    : t.toString(36);
}
function rc(e, t, n, r, s) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case eu:
          case lb:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (s = s(o)),
      (e = r === "" ? "." + ef(o, 0) : r),
      hg(s)
        ? ((n = ""),
          e != null && (n = e.replace(pg, "$&/") + "/"),
          rc(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (sm(s) &&
            (s = xb(
              s,
              n +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(pg, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), hg(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ef(i, a);
      o += rc(i, t, n, l, s);
    }
  else if (((l = vb(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ef(i, a++)), (o += rc(i, t, n, l, s));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Nu(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    rc(e, r, "", "", function (i) {
      return t.call(n, i, s++);
    }),
    r
  );
}
function Sb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var on = { current: null },
  sc = { transition: null },
  _b = {
    ReactCurrentDispatcher: on,
    ReactCurrentBatchConfig: sc,
    ReactCurrentOwner: rm,
  };
function pw() {
  throw Error("act(...) is not supported in production builds of React.");
}
be.Children = {
  map: Nu,
  forEach: function (e, t, n) {
    Nu(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Nu(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Nu(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sm(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
be.Component = Jo;
be.Fragment = ub;
be.Profiler = db;
be.PureComponent = tm;
be.StrictMode = cb;
be.Suspense = mb;
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _b;
be.act = pw;
be.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = lw({}, e.props),
    s = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = rm.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      dw.call(t, l) &&
        !fw.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: eu, type: e.type, key: s, ref: i, props: r, _owner: o };
};
be.createContext = function (e) {
  return (
    (e = {
      $$typeof: hb,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fb, _context: e }),
    (e.Consumer = e)
  );
};
be.createElement = hw;
be.createFactory = function (e) {
  var t = hw.bind(null, e);
  return (t.type = e), t;
};
be.createRef = function () {
  return { current: null };
};
be.forwardRef = function (e) {
  return { $$typeof: pb, render: e };
};
be.isValidElement = sm;
be.lazy = function (e) {
  return { $$typeof: gb, _payload: { _status: -1, _result: e }, _init: Sb };
};
be.memo = function (e, t) {
  return { $$typeof: yb, type: e, compare: t === void 0 ? null : t };
};
be.startTransition = function (e) {
  var t = sc.transition;
  sc.transition = {};
  try {
    e();
  } finally {
    sc.transition = t;
  }
};
be.unstable_act = pw;
be.useCallback = function (e, t) {
  return on.current.useCallback(e, t);
};
be.useContext = function (e) {
  return on.current.useContext(e);
};
be.useDebugValue = function () {};
be.useDeferredValue = function (e) {
  return on.current.useDeferredValue(e);
};
be.useEffect = function (e, t) {
  return on.current.useEffect(e, t);
};
be.useId = function () {
  return on.current.useId();
};
be.useImperativeHandle = function (e, t, n) {
  return on.current.useImperativeHandle(e, t, n);
};
be.useInsertionEffect = function (e, t) {
  return on.current.useInsertionEffect(e, t);
};
be.useLayoutEffect = function (e, t) {
  return on.current.useLayoutEffect(e, t);
};
be.useMemo = function (e, t) {
  return on.current.useMemo(e, t);
};
be.useReducer = function (e, t, n) {
  return on.current.useReducer(e, t, n);
};
be.useRef = function (e) {
  return on.current.useRef(e);
};
be.useState = function (e) {
  return on.current.useState(e);
};
be.useSyncExternalStore = function (e, t, n) {
  return on.current.useSyncExternalStore(e, t, n);
};
be.useTransition = function () {
  return on.current.useTransition();
};
be.version = "18.3.1";
ow.exports = be;
var P = ow.exports;
const en = Xo(P),
  Eb = em({ __proto__: null, default: en }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pb = P,
  bb = Symbol.for("react.element"),
  Tb = Symbol.for("react.fragment"),
  kb = Object.prototype.hasOwnProperty,
  Cb = Pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rb = { key: !0, ref: !0, __self: !0, __source: !0 };
function mw(e, t, n) {
  var r,
    s = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kb.call(t, r) && !Rb.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: bb,
    type: e,
    key: i,
    ref: o,
    props: s,
    _owner: Cb.current,
  };
}
vd.Fragment = Tb;
vd.jsx = mw;
vd.jsxs = mw;
iw.exports = vd;
var x = iw.exports,
  lh = {},
  yw = { exports: {} },
  Cn = {},
  gw = { exports: {} },
  vw = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, ee) {
    var re = I.length;
    I.push(ee);
    e: for (; 0 < re; ) {
      var ge = (re - 1) >>> 1,
        Se = I[ge];
      if (0 < s(Se, ee)) (I[ge] = ee), (I[re] = Se), (re = ge);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var ee = I[0],
      re = I.pop();
    if (re !== ee) {
      I[0] = re;
      e: for (var ge = 0, Se = I.length, qe = Se >>> 1; ge < qe; ) {
        var st = 2 * (ge + 1) - 1,
          at = I[st],
          Ne = st + 1,
          Ve = I[Ne];
        if (0 > s(at, re))
          Ne < Se && 0 > s(Ve, at)
            ? ((I[ge] = Ve), (I[Ne] = re), (ge = Ne))
            : ((I[ge] = at), (I[st] = re), (ge = st));
        else if (Ne < Se && 0 > s(Ve, re))
          (I[ge] = Ve), (I[Ne] = re), (ge = Ne);
        else break e;
      }
    }
    return ee;
  }
  function s(I, ee) {
    var re = I.sortIndex - ee.sortIndex;
    return re !== 0 ? re : I.id - ee.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    y = !1,
    p = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(I) {
    for (var ee = n(u); ee !== null; ) {
      if (ee.callback === null) r(u);
      else if (ee.startTime <= I)
        r(u), (ee.sortIndex = ee.expirationTime), t(l, ee);
      else break;
      ee = n(u);
    }
  }
  function _(I) {
    if (((v = !1), g(I), !p))
      if (n(l) !== null) (p = !0), we(T);
      else {
        var ee = n(u);
        ee !== null && Te(_, ee.startTime - I);
      }
  }
  function T(I, ee) {
    (p = !1), v && ((v = !1), m(b), (b = -1)), (y = !0);
    var re = f;
    try {
      for (
        g(ee), d = n(l);
        d !== null && (!(d.expirationTime > ee) || (I && !Z()));

      ) {
        var ge = d.callback;
        if (typeof ge == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Se = ge(d.expirationTime <= ee);
          (ee = e.unstable_now()),
            typeof Se == "function" ? (d.callback = Se) : d === n(l) && r(l),
            g(ee);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var qe = !0;
      else {
        var st = n(u);
        st !== null && Te(_, st.startTime - ee), (qe = !1);
      }
      return qe;
    } finally {
      (d = null), (f = re), (y = !1);
    }
  }
  var O = !1,
    w = null,
    b = -1,
    L = 5,
    N = -1;
  function Z() {
    return !(e.unstable_now() - N < L);
  }
  function $() {
    if (w !== null) {
      var I = e.unstable_now();
      N = I;
      var ee = !0;
      try {
        ee = w(!0, I);
      } finally {
        ee ? q() : ((O = !1), (w = null));
      }
    } else O = !1;
  }
  var q;
  if (typeof h == "function")
    q = function () {
      h($);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      oe = ie.port2;
    (ie.port1.onmessage = $),
      (q = function () {
        oe.postMessage(null);
      });
  } else
    q = function () {
      S($, 0);
    };
  function we(I) {
    (w = I), O || ((O = !0), q());
  }
  function Te(I, ee) {
    b = S(function () {
      I(e.unstable_now());
    }, ee);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || y || ((p = !0), we(T));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (I) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = f;
      }
      var re = f;
      f = ee;
      try {
        return I();
      } finally {
        f = re;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, ee) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var re = f;
      f = I;
      try {
        return ee();
      } finally {
        f = re;
      }
    }),
    (e.unstable_scheduleCallback = function (I, ee, re) {
      var ge = e.unstable_now();
      switch (
        (typeof re == "object" && re !== null
          ? ((re = re.delay),
            (re = typeof re == "number" && 0 < re ? ge + re : ge))
          : (re = ge),
        I)
      ) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return (
        (Se = re + Se),
        (I = {
          id: c++,
          callback: ee,
          priorityLevel: I,
          startTime: re,
          expirationTime: Se,
          sortIndex: -1,
        }),
        re > ge
          ? ((I.sortIndex = re),
            t(u, I),
            n(l) === null &&
              I === n(u) &&
              (v ? (m(b), (b = -1)) : (v = !0), Te(_, re - ge)))
          : ((I.sortIndex = Se), t(l, I), p || y || ((p = !0), we(T))),
        I
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (I) {
      var ee = f;
      return function () {
        var re = f;
        f = ee;
        try {
          return I.apply(this, arguments);
        } finally {
          f = re;
        }
      };
    });
})(vw);
gw.exports = vw;
var Ob = gw.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jb = P,
  Tn = Ob;
function V(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var xw = new Set(),
  Xa = {};
function Ri(e, t) {
  Io(e, t), Io(e + "Capture", t);
}
function Io(e, t) {
  for (Xa[e] = t, e = 0; e < t.length; e++) xw.add(t[e]);
}
var Br = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uh = Object.prototype.hasOwnProperty,
  Ab =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mg = {},
  yg = {};
function Nb(e) {
  return uh.call(yg, e)
    ? !0
    : uh.call(mg, e)
    ? !1
    : Ab.test(e)
    ? (yg[e] = !0)
    : ((mg[e] = !0), !1);
}
function Db(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lb(e, t, n, r) {
  if (t === null || typeof t > "u" || Db(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function an(e, t, n, r, s, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var It = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    It[e] = new an(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  It[t] = new an(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  It[e] = new an(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  It[e] = new an(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    It[e] = new an(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  It[e] = new an(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  It[e] = new an(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  It[e] = new an(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  It[e] = new an(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var im = /[\-:]([a-z])/g;
function om(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clipRule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fillRule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(im, om);
    It[t] = new an(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(im, om);
    It[t] = new an(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(im, om);
  It[t] = new an(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  It[e] = new an(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
It.xlinkHref = new an(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  It[e] = new an(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function am(e, t, n, r) {
  var s = It.hasOwnProperty(t) ? It[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Lb(t, n, s, r) && (n = null),
    r || s === null
      ? Nb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kr = jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Du = Symbol.for("react.element"),
  Gi = Symbol.for("react.portal"),
  Yi = Symbol.for("react.fragment"),
  lm = Symbol.for("react.strict_mode"),
  ch = Symbol.for("react.profiler"),
  ww = Symbol.for("react.provider"),
  Sw = Symbol.for("react.context"),
  um = Symbol.for("react.forward_ref"),
  dh = Symbol.for("react.suspense"),
  fh = Symbol.for("react.suspense_list"),
  cm = Symbol.for("react.memo"),
  ts = Symbol.for("react.lazy"),
  _w = Symbol.for("react.offscreen"),
  gg = Symbol.iterator;
function da(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gg && e[gg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rt = Object.assign,
  tf;
function ka(e) {
  if (tf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      tf = (t && t[1]) || "";
    }
  return (
    `
` +
    tf +
    e
  );
}
var nf = !1;
function rf(e, t) {
  if (!e || nf) return "";
  nf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (nf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ka(e) : "";
}
function Mb(e) {
  switch (e.tag) {
    case 5:
      return ka(e.type);
    case 16:
      return ka("Lazy");
    case 13:
      return ka("Suspense");
    case 19:
      return ka("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = rf(e.type, !1)), e;
    case 11:
      return (e = rf(e.type.render, !1)), e;
    case 1:
      return (e = rf(e.type, !0)), e;
    default:
      return "";
  }
}
function hh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yi:
      return "Fragment";
    case Gi:
      return "Portal";
    case ch:
      return "Profiler";
    case lm:
      return "StrictMode";
    case dh:
      return "Suspense";
    case fh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Sw:
        return (e.displayName || "Context") + ".Consumer";
      case ww:
        return (e._context.displayName || "Context") + ".Provider";
      case um:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cm:
        return (
          (t = e.displayName || null), t !== null ? t : hh(e.type) || "Memo"
        );
      case ts:
        (t = e._payload), (e = e._init);
        try {
          return hh(e(t));
        } catch {}
    }
  return null;
}
function Ib(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return hh(t);
    case 8:
      return t === lm ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rs(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ew(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fb(e) {
  var t = Ew(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Lu(e) {
  e._valueTracker || (e._valueTracker = Fb(e));
}
function Pw(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ew(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ec(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ph(e, t) {
  var n = t.checked;
  return rt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function vg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rs(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function bw(e, t) {
  (t = t.checked), t != null && am(e, "checked", t, !1);
}
function mh(e, t) {
  bw(e, t);
  var n = Rs(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yh(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yh(e, t.type, Rs(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yh(e, t, n) {
  (t !== "number" || Ec(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ca = Array.isArray;
function yo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rs(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function gh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return rt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function wg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(V(92));
      if (Ca(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rs(n) };
}
function Tw(e, t) {
  var n = Rs(t.value),
    r = Rs(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Sg(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function kw(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? kw(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Mu,
  Cw = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Mu = Mu || document.createElement("div"),
          Mu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Mu.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ja(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ma = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ma).forEach(function (e) {
  Vb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ma[t] = Ma[e]);
  });
});
function Rw(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ma.hasOwnProperty(e) && Ma[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ow(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Rw(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var Ub = rt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xh(e, t) {
  if (t) {
    if (Ub[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function wh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Sh = null;
function dm(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _h = null,
  go = null,
  vo = null;
function _g(e) {
  if ((e = ru(e))) {
    if (typeof _h != "function") throw Error(V(280));
    var t = e.stateNode;
    t && ((t = Ed(t)), _h(e.stateNode, e.type, t));
  }
}
function jw(e) {
  go ? (vo ? vo.push(e) : (vo = [e])) : (go = e);
}
function Aw() {
  if (go) {
    var e = go,
      t = vo;
    if (((vo = go = null), _g(e), t)) for (e = 0; e < t.length; e++) _g(t[e]);
  }
}
function Nw(e, t) {
  return e(t);
}
function Dw() {}
var sf = !1;
function Lw(e, t, n) {
  if (sf) return e(t, n);
  sf = !0;
  try {
    return Nw(e, t, n);
  } finally {
    (sf = !1), (go !== null || vo !== null) && (Dw(), Aw());
  }
}
function el(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ed(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var Eh = !1;
if (Br)
  try {
    var fa = {};
    Object.defineProperty(fa, "passive", {
      get: function () {
        Eh = !0;
      },
    }),
      window.addEventListener("test", fa, fa),
      window.removeEventListener("test", fa, fa);
  } catch {
    Eh = !1;
  }
function Bb(e, t, n, r, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Ia = !1,
  Pc = null,
  bc = !1,
  Ph = null,
  zb = {
    onError: function (e) {
      (Ia = !0), (Pc = e);
    },
  };
function $b(e, t, n, r, s, i, o, a, l) {
  (Ia = !1), (Pc = null), Bb.apply(zb, arguments);
}
function Hb(e, t, n, r, s, i, o, a, l) {
  if (($b.apply(this, arguments), Ia)) {
    if (Ia) {
      var u = Pc;
      (Ia = !1), (Pc = null);
    } else throw Error(V(198));
    bc || ((bc = !0), (Ph = u));
  }
}
function Oi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Mw(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Eg(e) {
  if (Oi(e) !== e) throw Error(V(188));
}
function Wb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Oi(e)), t === null)) throw Error(V(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === n) return Eg(s), e;
        if (i === r) return Eg(s), t;
        i = i.sibling;
      }
      throw Error(V(188));
    }
    if (n.return !== r.return) (n = s), (r = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(V(189));
      }
    }
    if (n.alternate !== r) throw Error(V(190));
  }
  if (n.tag !== 3) throw Error(V(188));
  return n.stateNode.current === n ? e : t;
}
function Iw(e) {
  return (e = Wb(e)), e !== null ? Fw(e) : null;
}
function Fw(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fw(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vw = Tn.unstable_scheduleCallback,
  Pg = Tn.unstable_cancelCallback,
  Kb = Tn.unstable_shouldYield,
  Zb = Tn.unstable_requestPaint,
  ft = Tn.unstable_now,
  Qb = Tn.unstable_getCurrentPriorityLevel,
  fm = Tn.unstable_ImmediatePriority,
  Uw = Tn.unstable_UserBlockingPriority,
  Tc = Tn.unstable_NormalPriority,
  qb = Tn.unstable_LowPriority,
  Bw = Tn.unstable_IdlePriority,
  xd = null,
  Sr = null;
function Gb(e) {
  if (Sr && typeof Sr.onCommitFiberRoot == "function")
    try {
      Sr.onCommitFiberRoot(xd, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rr = Math.clz32 ? Math.clz32 : Jb,
  Yb = Math.log,
  Xb = Math.LN2;
function Jb(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yb(e) / Xb) | 0)) | 0;
}
var Iu = 64,
  Fu = 4194304;
function Ra(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function kc(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (r = Ra(a)) : ((i &= o), i !== 0 && (r = Ra(i)));
  } else (o = n & ~s), o !== 0 ? (r = Ra(o)) : i !== 0 && (r = Ra(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rr(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function eT(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tT(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - rr(i),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & n) || a & r) && (s[o] = eT(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function bh(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zw() {
  var e = Iu;
  return (Iu <<= 1), !(Iu & 4194240) && (Iu = 64), e;
}
function of(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tu(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rr(t)),
    (e[t] = n);
}
function nT(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - rr(n),
      i = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
  }
}
function hm(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rr(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var Me = 0;
function $w(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hw,
  pm,
  Ww,
  Kw,
  Zw,
  Th = !1,
  Vu = [],
  vs = null,
  xs = null,
  ws = null,
  tl = new Map(),
  nl = new Map(),
  is = [],
  rT =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vs = null;
      break;
    case "dragenter":
    case "dragleave":
      xs = null;
      break;
    case "mouseover":
    case "mouseout":
      ws = null;
      break;
    case "pointerover":
    case "pointerout":
      tl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      nl.delete(t.pointerId);
  }
}
function ha(e, t, n, r, s, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [s],
      }),
      t !== null && ((t = ru(t)), t !== null && pm(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function sT(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (vs = ha(vs, e, t, n, r, s)), !0;
    case "dragenter":
      return (xs = ha(xs, e, t, n, r, s)), !0;
    case "mouseover":
      return (ws = ha(ws, e, t, n, r, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return tl.set(i, ha(tl.get(i) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), nl.set(i, ha(nl.get(i) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function Qw(e) {
  var t = Js(e.target);
  if (t !== null) {
    var n = Oi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Mw(n)), t !== null)) {
          (e.blockedOn = t),
            Zw(e.priority, function () {
              Ww(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ic(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Sh = r), n.target.dispatchEvent(r), (Sh = null);
    } else return (t = ru(n)), t !== null && pm(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tg(e, t, n) {
  ic(e) && n.delete(t);
}
function iT() {
  (Th = !1),
    vs !== null && ic(vs) && (vs = null),
    xs !== null && ic(xs) && (xs = null),
    ws !== null && ic(ws) && (ws = null),
    tl.forEach(Tg),
    nl.forEach(Tg);
}
function pa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Th ||
      ((Th = !0),
      Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority, iT)));
}
function rl(e) {
  function t(s) {
    return pa(s, e);
  }
  if (0 < Vu.length) {
    pa(Vu[0], e);
    for (var n = 1; n < Vu.length; n++) {
      var r = Vu[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vs !== null && pa(vs, e),
      xs !== null && pa(xs, e),
      ws !== null && pa(ws, e),
      tl.forEach(t),
      nl.forEach(t),
      n = 0;
    n < is.length;
    n++
  )
    (r = is[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < is.length && ((n = is[0]), n.blockedOn === null); )
    Qw(n), n.blockedOn === null && is.shift();
}
var xo = Kr.ReactCurrentBatchConfig,
  Cc = !0;
function oT(e, t, n, r) {
  var s = Me,
    i = xo.transition;
  xo.transition = null;
  try {
    (Me = 1), mm(e, t, n, r);
  } finally {
    (Me = s), (xo.transition = i);
  }
}
function aT(e, t, n, r) {
  var s = Me,
    i = xo.transition;
  xo.transition = null;
  try {
    (Me = 4), mm(e, t, n, r);
  } finally {
    (Me = s), (xo.transition = i);
  }
}
function mm(e, t, n, r) {
  if (Cc) {
    var s = kh(e, t, n, r);
    if (s === null) yf(e, t, r, Rc, n), bg(e, r);
    else if (sT(s, e, t, n, r)) r.stopPropagation();
    else if ((bg(e, r), t & 4 && -1 < rT.indexOf(e))) {
      for (; s !== null; ) {
        var i = ru(s);
        if (
          (i !== null && Hw(i),
          (i = kh(e, t, n, r)),
          i === null && yf(e, t, r, Rc, n),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && r.stopPropagation();
    } else yf(e, t, r, null, n);
  }
}
var Rc = null;
function kh(e, t, n, r) {
  if (((Rc = null), (e = dm(r)), (e = Js(e)), e !== null))
    if (((t = Oi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Mw(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Rc = e), null;
}
function qw(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Qb()) {
        case fm:
          return 1;
        case Uw:
          return 4;
        case Tc:
        case qb:
          return 16;
        case Bw:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ms = null,
  ym = null,
  oc = null;
function Gw() {
  if (oc) return oc;
  var e,
    t = ym,
    n = t.length,
    r,
    s = "value" in ms ? ms.value : ms.textContent,
    i = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
  return (oc = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ac(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Uu() {
  return !0;
}
function kg() {
  return !1;
}
function Rn(e) {
  function t(n, r, s, i, o) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Uu
        : kg),
      (this.isPropagationStopped = kg),
      this
    );
  }
  return (
    rt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Uu));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Uu));
      },
      persist: function () {},
      isPersistent: Uu,
    }),
    t
  );
}
var ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  gm = Rn(ea),
  nu = rt({}, ea, { view: 0, detail: 0 }),
  lT = Rn(nu),
  af,
  lf,
  ma,
  wd = rt({}, nu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vm,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ma &&
            (ma && e.type === "mousemove"
              ? ((af = e.screenX - ma.screenX), (lf = e.screenY - ma.screenY))
              : (lf = af = 0),
            (ma = e)),
          af);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : lf;
    },
  }),
  Cg = Rn(wd),
  uT = rt({}, wd, { dataTransfer: 0 }),
  cT = Rn(uT),
  dT = rt({}, nu, { relatedTarget: 0 }),
  uf = Rn(dT),
  fT = rt({}, ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hT = Rn(fT),
  pT = rt({}, ea, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mT = Rn(pT),
  yT = rt({}, ea, { data: 0 }),
  Rg = Rn(yT),
  gT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  xT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xT[e]) ? !!t[e] : !1;
}
function vm() {
  return wT;
}
var ST = rt({}, nu, {
    key: function (e) {
      if (e.key) {
        var t = gT[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ac(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vT[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vm,
    charCode: function (e) {
      return e.type === "keypress" ? ac(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ac(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _T = Rn(ST),
  ET = rt({}, wd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Og = Rn(ET),
  PT = rt({}, nu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vm,
  }),
  bT = Rn(PT),
  TT = rt({}, ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kT = Rn(TT),
  CT = rt({}, wd, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  RT = Rn(CT),
  OT = [9, 13, 27, 32],
  xm = Br && "CompositionEvent" in window,
  Fa = null;
Br && "documentMode" in document && (Fa = document.documentMode);
var jT = Br && "TextEvent" in window && !Fa,
  Yw = Br && (!xm || (Fa && 8 < Fa && 11 >= Fa)),
  jg = " ",
  Ag = !1;
function Xw(e, t) {
  switch (e) {
    case "keyup":
      return OT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Jw(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Xi = !1;
function AT(e, t) {
  switch (e) {
    case "compositionend":
      return Jw(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ag = !0), jg);
    case "textInput":
      return (e = t.data), e === jg && Ag ? null : e;
    default:
      return null;
  }
}
function NT(e, t) {
  if (Xi)
    return e === "compositionend" || (!xm && Xw(e, t))
      ? ((e = Gw()), (oc = ym = ms = null), (Xi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yw && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var DT = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ng(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!DT[e.type] : t === "textarea";
}
function eS(e, t, n, r) {
  jw(r),
    (t = Oc(t, "onChange")),
    0 < t.length &&
      ((n = new gm("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Va = null,
  sl = null;
function LT(e) {
  dS(e, 0);
}
function Sd(e) {
  var t = to(e);
  if (Pw(t)) return e;
}
function MT(e, t) {
  if (e === "change") return t;
}
var tS = !1;
if (Br) {
  var cf;
  if (Br) {
    var df = "oninput" in document;
    if (!df) {
      var Dg = document.createElement("div");
      Dg.setAttribute("oninput", "return;"),
        (df = typeof Dg.oninput == "function");
    }
    cf = df;
  } else cf = !1;
  tS = cf && (!document.documentMode || 9 < document.documentMode);
}
function Lg() {
  Va && (Va.detachEvent("onpropertychange", nS), (sl = Va = null));
}
function nS(e) {
  if (e.propertyName === "value" && Sd(sl)) {
    var t = [];
    eS(t, sl, e, dm(e)), Lw(LT, t);
  }
}
function IT(e, t, n) {
  e === "focusin"
    ? (Lg(), (Va = t), (sl = n), Va.attachEvent("onpropertychange", nS))
    : e === "focusout" && Lg();
}
function FT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sd(sl);
}
function VT(e, t) {
  if (e === "click") return Sd(t);
}
function UT(e, t) {
  if (e === "input" || e === "change") return Sd(t);
}
function BT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lr = typeof Object.is == "function" ? Object.is : BT;
function il(e, t) {
  if (lr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!uh.call(t, s) || !lr(e[s], t[s])) return !1;
  }
  return !0;
}
function Mg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ig(e, t) {
  var n = Mg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Mg(n);
  }
}
function rS(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? rS(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function sS() {
  for (var e = window, t = Ec(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ec(e.document);
  }
  return t;
}
function wm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zT(e) {
  var t = sS(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    rS(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wm(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          i = Math.min(r.start, s);
        (r = r.end === void 0 ? i : Math.min(r.end, s)),
          !e.extend && i > r && ((s = r), (r = i), (i = s)),
          (s = Ig(n, i));
        var o = Ig(n, r);
        s &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $T = Br && "documentMode" in document && 11 >= document.documentMode,
  Ji = null,
  Ch = null,
  Ua = null,
  Rh = !1;
function Fg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Rh ||
    Ji == null ||
    Ji !== Ec(r) ||
    ((r = Ji),
    "selectionStart" in r && wm(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ua && il(Ua, r)) ||
      ((Ua = r),
      (r = Oc(Ch, "onSelect")),
      0 < r.length &&
        ((t = new gm("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ji))));
}
function Bu(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var eo = {
    animationend: Bu("Animation", "AnimationEnd"),
    animationiteration: Bu("Animation", "AnimationIteration"),
    animationstart: Bu("Animation", "AnimationStart"),
    transitionend: Bu("Transition", "TransitionEnd"),
  },
  ff = {},
  iS = {};
Br &&
  ((iS = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete eo.animationend.animation,
    delete eo.animationiteration.animation,
    delete eo.animationstart.animation),
  "TransitionEvent" in window || delete eo.transitionend.transition);
function _d(e) {
  if (ff[e]) return ff[e];
  if (!eo[e]) return e;
  var t = eo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in iS) return (ff[e] = t[n]);
  return e;
}
var oS = _d("animationend"),
  aS = _d("animationiteration"),
  lS = _d("animationstart"),
  uS = _d("transitionend"),
  cS = new Map(),
  Vg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Fs(e, t) {
  cS.set(e, t), Ri(t, [e]);
}
for (var hf = 0; hf < Vg.length; hf++) {
  var pf = Vg[hf],
    HT = pf.toLowerCase(),
    WT = pf[0].toUpperCase() + pf.slice(1);
  Fs(HT, "on" + WT);
}
Fs(oS, "onAnimationEnd");
Fs(aS, "onAnimationIteration");
Fs(lS, "onAnimationStart");
Fs("dblclick", "onDoubleClick");
Fs("focusin", "onFocus");
Fs("focusout", "onBlur");
Fs(uS, "onTransitionEnd");
Io("onMouseEnter", ["mouseout", "mouseover"]);
Io("onMouseLeave", ["mouseout", "mouseover"]);
Io("onPointerEnter", ["pointerout", "pointerover"]);
Io("onPointerLeave", ["pointerout", "pointerover"]);
Ri(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ri(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ri("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ri(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ri(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ri(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Oa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  KT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));
function Ug(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hb(r, t, void 0, e), (e.currentTarget = null);
}
function dS(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          Ug(s, a, u), (i = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          Ug(s, a, u), (i = l);
        }
    }
  }
  if (bc) throw ((e = Ph), (bc = !1), (Ph = null), e);
}
function ze(e, t) {
  var n = t[Dh];
  n === void 0 && (n = t[Dh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (fS(t, e, 2, !1), n.add(r));
}
function mf(e, t, n) {
  var r = 0;
  t && (r |= 4), fS(n, e, r, t);
}
var zu = "_reactListening" + Math.random().toString(36).slice(2);
function ol(e) {
  if (!e[zu]) {
    (e[zu] = !0),
      xw.forEach(function (n) {
        n !== "selectionchange" && (KT.has(n) || mf(n, !1, e), mf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zu] || ((t[zu] = !0), mf("selectionchange", !1, t));
  }
}
function fS(e, t, n, r) {
  switch (qw(t)) {
    case 1:
      var s = oT;
      break;
    case 4:
      s = aT;
      break;
    default:
      s = mm;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Eh ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function yf(e, t, n, r, s) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Js(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Lw(function () {
    var u = i,
      c = dm(n),
      d = [];
    e: {
      var f = cS.get(e);
      if (f !== void 0) {
        var y = gm,
          p = e;
        switch (e) {
          case "keypress":
            if (ac(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = _T;
            break;
          case "focusin":
            (p = "focus"), (y = uf);
            break;
          case "focusout":
            (p = "blur"), (y = uf);
            break;
          case "beforeblur":
          case "afterblur":
            y = uf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Cg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = bT;
            break;
          case oS:
          case aS:
          case lS:
            y = hT;
            break;
          case uS:
            y = kT;
            break;
          case "scroll":
            y = lT;
            break;
          case "wheel":
            y = RT;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Og;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          m = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var _ = g.stateNode;
          if (
            (g.tag === 5 &&
              _ !== null &&
              ((g = _),
              m !== null && ((_ = el(h, m)), _ != null && v.push(al(h, _, g)))),
            S)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((f = new y(f, p, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Sh &&
            (p = n.relatedTarget || n.fromElement) &&
            (Js(p) || p[zr]))
        )
          break e;
        if (
          (y || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          y
            ? ((p = n.relatedTarget || n.toElement),
              (y = u),
              (p = p ? Js(p) : null),
              p !== null &&
                ((S = Oi(p)), p !== S || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((y = null), (p = u)),
          y !== p)
        ) {
          if (
            ((v = Cg),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Og),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (S = y == null ? f : to(y)),
            (g = p == null ? f : to(p)),
            (f = new v(_, h + "leave", y, n, c)),
            (f.target = S),
            (f.relatedTarget = g),
            (_ = null),
            Js(c) === u &&
              ((v = new v(m, h + "enter", p, n, c)),
              (v.target = g),
              (v.relatedTarget = S),
              (_ = v)),
            (S = _),
            y && p)
          )
            t: {
              for (v = y, m = p, h = 0, g = v; g; g = Bi(g)) h++;
              for (g = 0, _ = m; _; _ = Bi(_)) g++;
              for (; 0 < h - g; ) (v = Bi(v)), h--;
              for (; 0 < g - h; ) (m = Bi(m)), g--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Bi(v)), (m = Bi(m));
              }
              v = null;
            }
          else v = null;
          y !== null && Bg(d, f, y, v, !1),
            p !== null && S !== null && Bg(d, S, p, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? to(u) : window),
          (y = f.nodeName && f.nodeName.toLowerCase()),
          y === "select" || (y === "input" && f.type === "file"))
        )
          var T = MT;
        else if (Ng(f))
          if (tS) T = UT;
          else {
            T = FT;
            var O = IT;
          }
        else
          (y = f.nodeName) &&
            y.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = VT);
        if (T && (T = T(e, u))) {
          eS(d, T, n, c);
          break e;
        }
        O && O(e, f, u),
          e === "focusout" &&
            (O = f._wrapperState) &&
            O.controlled &&
            f.type === "number" &&
            yh(f, "number", f.value);
      }
      switch (((O = u ? to(u) : window), e)) {
        case "focusin":
          (Ng(O) || O.contentEditable === "true") &&
            ((Ji = O), (Ch = u), (Ua = null));
          break;
        case "focusout":
          Ua = Ch = Ji = null;
          break;
        case "mousedown":
          Rh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Rh = !1), Fg(d, n, c);
          break;
        case "selectionchange":
          if ($T) break;
        case "keydown":
        case "keyup":
          Fg(d, n, c);
      }
      var w;
      if (xm)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        Xi
          ? Xw(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Yw &&
          n.locale !== "ko" &&
          (Xi || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Xi && (w = Gw())
            : ((ms = c),
              (ym = "value" in ms ? ms.value : ms.textContent),
              (Xi = !0))),
        (O = Oc(u, b)),
        0 < O.length &&
          ((b = new Rg(b, e, null, n, c)),
          d.push({ event: b, listeners: O }),
          w ? (b.data = w) : ((w = Jw(n)), w !== null && (b.data = w)))),
        (w = jT ? AT(e, n) : NT(e, n)) &&
          ((u = Oc(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Rg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    dS(d, t);
  });
}
function al(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = el(e, n)),
      i != null && r.unshift(al(e, i, s)),
      (i = el(e, t)),
      i != null && r.push(al(e, i, s))),
      (e = e.return);
  }
  return r;
}
function Bi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bg(e, t, n, r, s) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = el(n, i)), l != null && o.unshift(al(n, l, a)))
        : s || ((l = el(n, i)), l != null && o.push(al(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var ZT = /\r\n?/g,
  QT = /\u0000|\uFFFD/g;
function zg(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ZT,
      `
`
    )
    .replace(QT, "");
}
function $u(e, t, n) {
  if (((t = zg(t)), zg(e) !== t && n)) throw Error(V(425));
}
function jc() {}
var Oh = null,
  jh = null;
function Ah(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nh = typeof setTimeout == "function" ? setTimeout : void 0,
  qT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $g = typeof Promise == "function" ? Promise : void 0,
  GT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $g < "u"
      ? function (e) {
          return $g.resolve(null).then(e).catch(YT);
        }
      : Nh;
function YT(e) {
  setTimeout(function () {
    throw e;
  });
}
function gf(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), rl(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  rl(t);
}
function Ss(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Hg(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ta = Math.random().toString(36).slice(2),
  xr = "__reactFiber$" + ta,
  ll = "__reactProps$" + ta,
  zr = "__reactContainer$" + ta,
  Dh = "__reactEvents$" + ta,
  XT = "__reactListeners$" + ta,
  JT = "__reactHandles$" + ta;
function Js(e) {
  var t = e[xr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zr] || n[xr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Hg(e); e !== null; ) {
          if ((n = e[xr])) return n;
          e = Hg(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ru(e) {
  return (
    (e = e[xr] || e[zr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function to(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ed(e) {
  return e[ll] || null;
}
var Lh = [],
  no = -1;
function Vs(e) {
  return { current: e };
}
function He(e) {
  0 > no || ((e.current = Lh[no]), (Lh[no] = null), no--);
}
function Ue(e, t) {
  no++, (Lh[no] = e.current), (e.current = t);
}
var Os = {},
  Kt = Vs(Os),
  pn = Vs(!1),
  xi = Os;
function Fo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Os;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in n) s[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function mn(e) {
  return (e = e.childContextTypes), e != null;
}
function Ac() {
  He(pn), He(Kt);
}
function Wg(e, t, n) {
  if (Kt.current !== Os) throw Error(V(168));
  Ue(Kt, t), Ue(pn, n);
}
function hS(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(V(108, Ib(e) || "Unknown", s));
  return rt({}, n, r);
}
function Nc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Os),
    (xi = Kt.current),
    Ue(Kt, e),
    Ue(pn, pn.current),
    !0
  );
}
function Kg(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n
    ? ((e = hS(e, t, xi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      He(pn),
      He(Kt),
      Ue(Kt, e))
    : He(pn),
    Ue(pn, n);
}
var Ar = null,
  Pd = !1,
  vf = !1;
function pS(e) {
  Ar === null ? (Ar = [e]) : Ar.push(e);
}
function ek(e) {
  (Pd = !0), pS(e);
}
function Us() {
  if (!vf && Ar !== null) {
    vf = !0;
    var e = 0,
      t = Me;
    try {
      var n = Ar;
      for (Me = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ar = null), (Pd = !1);
    } catch (s) {
      throw (Ar !== null && (Ar = Ar.slice(e + 1)), Vw(fm, Us), s);
    } finally {
      (Me = t), (vf = !1);
    }
  }
  return null;
}
var ro = [],
  so = 0,
  Dc = null,
  Lc = 0,
  Fn = [],
  Vn = 0,
  wi = null,
  Nr = 1,
  Dr = "";
function Zs(e, t) {
  (ro[so++] = Lc), (ro[so++] = Dc), (Dc = e), (Lc = t);
}
function mS(e, t, n) {
  (Fn[Vn++] = Nr), (Fn[Vn++] = Dr), (Fn[Vn++] = wi), (wi = e);
  var r = Nr;
  e = Dr;
  var s = 32 - rr(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var i = 32 - rr(t) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (s -= o),
      (Nr = (1 << (32 - rr(t) + s)) | (n << s) | r),
      (Dr = i + e);
  } else (Nr = (1 << i) | (n << s) | r), (Dr = e);
}
function Sm(e) {
  e.return !== null && (Zs(e, 1), mS(e, 1, 0));
}
function _m(e) {
  for (; e === Dc; )
    (Dc = ro[--so]), (ro[so] = null), (Lc = ro[--so]), (ro[so] = null);
  for (; e === wi; )
    (wi = Fn[--Vn]),
      (Fn[Vn] = null),
      (Dr = Fn[--Vn]),
      (Fn[Vn] = null),
      (Nr = Fn[--Vn]),
      (Fn[Vn] = null);
}
var Pn = null,
  En = null,
  Ze = !1,
  Xn = null;
function yS(e, t) {
  var n = Bn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Zg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pn = e), (En = Ss(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pn = e), (En = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wi !== null ? { id: Nr, overflow: Dr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Bn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pn = e),
            (En = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mh(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ih(e) {
  if (Ze) {
    var t = En;
    if (t) {
      var n = t;
      if (!Zg(e, t)) {
        if (Mh(e)) throw Error(V(418));
        t = Ss(n.nextSibling);
        var r = Pn;
        t && Zg(e, t)
          ? yS(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ze = !1), (Pn = e));
      }
    } else {
      if (Mh(e)) throw Error(V(418));
      (e.flags = (e.flags & -4097) | 2), (Ze = !1), (Pn = e);
    }
  }
}
function Qg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pn = e;
}
function Hu(e) {
  if (e !== Pn) return !1;
  if (!Ze) return Qg(e), (Ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ah(e.type, e.memoizedProps))),
    t && (t = En))
  ) {
    if (Mh(e)) throw (gS(), Error(V(418)));
    for (; t; ) yS(e, t), (t = Ss(t.nextSibling));
  }
  if ((Qg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              En = Ss(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      En = null;
    }
  } else En = Pn ? Ss(e.stateNode.nextSibling) : null;
  return !0;
}
function gS() {
  for (var e = En; e; ) e = Ss(e.nextSibling);
}
function Vo() {
  (En = Pn = null), (Ze = !1);
}
function Em(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
var tk = Kr.ReactCurrentBatchConfig;
function ya(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(V(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(V(147, e));
      var s = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(V(284));
    if (!n._owner) throw Error(V(290, e));
  }
  return e;
}
function Wu(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      V(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qg(e) {
  var t = e._init;
  return t(e._payload);
}
function vS(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function s(m, h) {
    return (m = bs(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, g, _) {
    return h === null || h.tag !== 6
      ? ((h = bf(g, m.mode, _)), (h.return = m), h)
      : ((h = s(h, g)), (h.return = m), h);
  }
  function l(m, h, g, _) {
    var T = g.type;
    return T === Yi
      ? c(m, h, g.props.children, _, g.key)
      : h !== null &&
        (h.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === ts &&
            qg(T) === h.type))
      ? ((_ = s(h, g.props)), (_.ref = ya(m, h, g)), (_.return = m), _)
      : ((_ = pc(g.type, g.key, g.props, null, m.mode, _)),
        (_.ref = ya(m, h, g)),
        (_.return = m),
        _);
  }
  function u(m, h, g, _) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = Tf(g, m.mode, _)), (h.return = m), h)
      : ((h = s(h, g.children || [])), (h.return = m), h);
  }
  function c(m, h, g, _, T) {
    return h === null || h.tag !== 7
      ? ((h = mi(g, m.mode, _, T)), (h.return = m), h)
      : ((h = s(h, g)), (h.return = m), h);
  }
  function d(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = bf("" + h, m.mode, g)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Du:
          return (
            (g = pc(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = ya(m, null, h)),
            (g.return = m),
            g
          );
        case Gi:
          return (h = Tf(h, m.mode, g)), (h.return = m), h;
        case ts:
          var _ = h._init;
          return d(m, _(h._payload), g);
      }
      if (Ca(h) || da(h))
        return (h = mi(h, m.mode, g, null)), (h.return = m), h;
      Wu(m, h);
    }
    return null;
  }
  function f(m, h, g, _) {
    var T = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return T !== null ? null : a(m, h, "" + g, _);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Du:
          return g.key === T ? l(m, h, g, _) : null;
        case Gi:
          return g.key === T ? u(m, h, g, _) : null;
        case ts:
          return (T = g._init), f(m, h, T(g._payload), _);
      }
      if (Ca(g) || da(g)) return T !== null ? null : c(m, h, g, _, null);
      Wu(m, g);
    }
    return null;
  }
  function y(m, h, g, _, T) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(g) || null), a(h, m, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Du:
          return (m = m.get(_.key === null ? g : _.key) || null), l(h, m, _, T);
        case Gi:
          return (m = m.get(_.key === null ? g : _.key) || null), u(h, m, _, T);
        case ts:
          var O = _._init;
          return y(m, h, g, O(_._payload), T);
      }
      if (Ca(_) || da(_)) return (m = m.get(g) || null), c(h, m, _, T, null);
      Wu(h, _);
    }
    return null;
  }
  function p(m, h, g, _) {
    for (
      var T = null, O = null, w = h, b = (h = 0), L = null;
      w !== null && b < g.length;
      b++
    ) {
      w.index > b ? ((L = w), (w = null)) : (L = w.sibling);
      var N = f(m, w, g[b], _);
      if (N === null) {
        w === null && (w = L);
        break;
      }
      e && w && N.alternate === null && t(m, w),
        (h = i(N, h, b)),
        O === null ? (T = N) : (O.sibling = N),
        (O = N),
        (w = L);
    }
    if (b === g.length) return n(m, w), Ze && Zs(m, b), T;
    if (w === null) {
      for (; b < g.length; b++)
        (w = d(m, g[b], _)),
          w !== null &&
            ((h = i(w, h, b)), O === null ? (T = w) : (O.sibling = w), (O = w));
      return Ze && Zs(m, b), T;
    }
    for (w = r(m, w); b < g.length; b++)
      (L = y(w, m, b, g[b], _)),
        L !== null &&
          (e && L.alternate !== null && w.delete(L.key === null ? b : L.key),
          (h = i(L, h, b)),
          O === null ? (T = L) : (O.sibling = L),
          (O = L));
    return (
      e &&
        w.forEach(function (Z) {
          return t(m, Z);
        }),
      Ze && Zs(m, b),
      T
    );
  }
  function v(m, h, g, _) {
    var T = da(g);
    if (typeof T != "function") throw Error(V(150));
    if (((g = T.call(g)), g == null)) throw Error(V(151));
    for (
      var O = (T = null), w = h, b = (h = 0), L = null, N = g.next();
      w !== null && !N.done;
      b++, N = g.next()
    ) {
      w.index > b ? ((L = w), (w = null)) : (L = w.sibling);
      var Z = f(m, w, N.value, _);
      if (Z === null) {
        w === null && (w = L);
        break;
      }
      e && w && Z.alternate === null && t(m, w),
        (h = i(Z, h, b)),
        O === null ? (T = Z) : (O.sibling = Z),
        (O = Z),
        (w = L);
    }
    if (N.done) return n(m, w), Ze && Zs(m, b), T;
    if (w === null) {
      for (; !N.done; b++, N = g.next())
        (N = d(m, N.value, _)),
          N !== null &&
            ((h = i(N, h, b)), O === null ? (T = N) : (O.sibling = N), (O = N));
      return Ze && Zs(m, b), T;
    }
    for (w = r(m, w); !N.done; b++, N = g.next())
      (N = y(w, m, b, N.value, _)),
        N !== null &&
          (e && N.alternate !== null && w.delete(N.key === null ? b : N.key),
          (h = i(N, h, b)),
          O === null ? (T = N) : (O.sibling = N),
          (O = N));
    return (
      e &&
        w.forEach(function ($) {
          return t(m, $);
        }),
      Ze && Zs(m, b),
      T
    );
  }
  function S(m, h, g, _) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Yi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Du:
          e: {
            for (var T = g.key, O = h; O !== null; ) {
              if (O.key === T) {
                if (((T = g.type), T === Yi)) {
                  if (O.tag === 7) {
                    n(m, O.sibling),
                      (h = s(O, g.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  O.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === ts &&
                    qg(T) === O.type)
                ) {
                  n(m, O.sibling),
                    (h = s(O, g.props)),
                    (h.ref = ya(m, O, g)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            g.type === Yi
              ? ((h = mi(g.props.children, m.mode, _, g.key)),
                (h.return = m),
                (m = h))
              : ((_ = pc(g.type, g.key, g.props, null, m.mode, _)),
                (_.ref = ya(m, h, g)),
                (_.return = m),
                (m = _));
          }
          return o(m);
        case Gi:
          e: {
            for (O = g.key; h !== null; ) {
              if (h.key === O)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  n(m, h.sibling),
                    (h = s(h, g.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = Tf(g, m.mode, _)), (h.return = m), (m = h);
          }
          return o(m);
        case ts:
          return (O = g._init), S(m, h, O(g._payload), _);
      }
      if (Ca(g)) return p(m, h, g, _);
      if (da(g)) return v(m, h, g, _);
      Wu(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = s(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = bf(g, m.mode, _)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return S;
}
var Uo = vS(!0),
  xS = vS(!1),
  Mc = Vs(null),
  Ic = null,
  io = null,
  Pm = null;
function bm() {
  Pm = io = Ic = null;
}
function Tm(e) {
  var t = Mc.current;
  He(Mc), (e._currentValue = t);
}
function Fh(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function wo(e, t) {
  (Ic = e),
    (Pm = io = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (hn = !0), (e.firstContext = null));
}
function Hn(e) {
  var t = e._currentValue;
  if (Pm !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), io === null)) {
      if (Ic === null) throw Error(V(308));
      (io = e), (Ic.dependencies = { lanes: 0, firstContext: e });
    } else io = io.next = e;
  return t;
}
var ei = null;
function km(e) {
  ei === null ? (ei = [e]) : ei.push(e);
}
function wS(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), km(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    $r(e, r)
  );
}
function $r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ns = !1;
function Cm(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function SS(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _s(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ae & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      $r(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), km(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    $r(e, n)
  );
}
function lc(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hm(e, n);
  }
}
function Gg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (s = i = t) : (i = i.next = t);
    } else s = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Fc(e, t, n, r) {
  var s = e.updateQueue;
  ns = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = s.baseState;
    (o = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        y = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var p = e,
            v = a;
          switch (((f = t), (y = n), v.tag)) {
            case 1:
              if (((p = v.payload), typeof p == "function")) {
                d = p.call(y, d, f);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = v.payload),
                (f = typeof p == "function" ? p.call(y, d, f) : p),
                f == null)
              )
                break e;
              d = rt({}, d, f);
              break e;
            case 2:
              ns = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        (y = {
          eventTime: y,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = d)) : (c = c.next = y),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (o |= s.lane), (s = s.next);
      while (s !== t);
    } else i === null && (s.shared.lanes = 0);
    (_i |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Yg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(V(191, s));
        s.call(r);
      }
    }
}
var su = {},
  _r = Vs(su),
  ul = Vs(su),
  cl = Vs(su);
function ti(e) {
  if (e === su) throw Error(V(174));
  return e;
}
function Rm(e, t) {
  switch ((Ue(cl, t), Ue(ul, e), Ue(_r, su), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vh(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vh(t, e));
  }
  He(_r), Ue(_r, t);
}
function Bo() {
  He(_r), He(ul), He(cl);
}
function _S(e) {
  ti(cl.current);
  var t = ti(_r.current),
    n = vh(t, e.type);
  t !== n && (Ue(ul, e), Ue(_r, n));
}
function Om(e) {
  ul.current === e && (He(_r), He(ul));
}
var et = Vs(0);
function Vc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xf = [];
function jm() {
  for (var e = 0; e < xf.length; e++)
    xf[e]._workInProgressVersionPrimary = null;
  xf.length = 0;
}
var uc = Kr.ReactCurrentDispatcher,
  wf = Kr.ReactCurrentBatchConfig,
  Si = 0,
  nt = null,
  xt = null,
  Et = null,
  Uc = !1,
  Ba = !1,
  dl = 0,
  nk = 0;
function Ft() {
  throw Error(V(321));
}
function Am(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lr(e[n], t[n])) return !1;
  return !0;
}
function Nm(e, t, n, r, s, i) {
  if (
    ((Si = i),
    (nt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (uc.current = e === null || e.memoizedState === null ? ok : ak),
    (e = n(r, s)),
    Ba)
  ) {
    i = 0;
    do {
      if (((Ba = !1), (dl = 0), 25 <= i)) throw Error(V(301));
      (i += 1),
        (Et = xt = null),
        (t.updateQueue = null),
        (uc.current = lk),
        (e = n(r, s));
    } while (Ba);
  }
  if (
    ((uc.current = Bc),
    (t = xt !== null && xt.next !== null),
    (Si = 0),
    (Et = xt = nt = null),
    (Uc = !1),
    t)
  )
    throw Error(V(300));
  return e;
}
function Dm() {
  var e = dl !== 0;
  return (dl = 0), e;
}
function pr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Et === null ? (nt.memoizedState = Et = e) : (Et = Et.next = e), Et;
}
function Wn() {
  if (xt === null) {
    var e = nt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xt.next;
  var t = Et === null ? nt.memoizedState : Et.next;
  if (t !== null) (Et = t), (xt = e);
  else {
    if (e === null) throw Error(V(310));
    (xt = e),
      (e = {
        memoizedState: xt.memoizedState,
        baseState: xt.baseState,
        baseQueue: xt.baseQueue,
        queue: xt.queue,
        next: null,
      }),
      Et === null ? (nt.memoizedState = Et = e) : (Et = Et.next = e);
  }
  return Et;
}
function fl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Sf(e) {
  var t = Wn(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = xt,
    s = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (r.baseQueue = s = i), (n.pending = null);
  }
  if (s !== null) {
    (i = s.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Si & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (nt.lanes |= c),
          (_i |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = r) : (l.next = a),
      lr(r, t.memoizedState) || (hn = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (i = s.lane), (nt.lanes |= i), (_i |= i), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _f(e) {
  var t = Wn(),
    n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    i = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var o = (s = s.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== s);
    lr(i, t.memoizedState) || (hn = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ES() {}
function PS(e, t) {
  var n = nt,
    r = Wn(),
    s = t(),
    i = !lr(r.memoizedState, s);
  if (
    (i && ((r.memoizedState = s), (hn = !0)),
    (r = r.queue),
    Lm(kS.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Et !== null && Et.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hl(9, TS.bind(null, n, r, s, t), void 0, null),
      Pt === null)
    )
      throw Error(V(349));
    Si & 30 || bS(n, t, s);
  }
  return s;
}
function bS(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = nt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (nt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function TS(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), CS(t) && RS(e);
}
function kS(e, t, n) {
  return n(function () {
    CS(t) && RS(e);
  });
}
function CS(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lr(e, n);
  } catch {
    return !0;
  }
}
function RS(e) {
  var t = $r(e, 1);
  t !== null && sr(t, e, 1, -1);
}
function Xg(e) {
  var t = pr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = ik.bind(null, nt, e)),
    [t.memoizedState, e]
  );
}
function hl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = nt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (nt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function OS() {
  return Wn().memoizedState;
}
function cc(e, t, n, r) {
  var s = pr();
  (nt.flags |= e),
    (s.memoizedState = hl(1 | t, n, void 0, r === void 0 ? null : r));
}
function bd(e, t, n, r) {
  var s = Wn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xt !== null) {
    var o = xt.memoizedState;
    if (((i = o.destroy), r !== null && Am(r, o.deps))) {
      s.memoizedState = hl(t, n, i, r);
      return;
    }
  }
  (nt.flags |= e), (s.memoizedState = hl(1 | t, n, i, r));
}
function Jg(e, t) {
  return cc(8390656, 8, e, t);
}
function Lm(e, t) {
  return bd(2048, 8, e, t);
}
function jS(e, t) {
  return bd(4, 2, e, t);
}
function AS(e, t) {
  return bd(4, 4, e, t);
}
function NS(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function DS(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bd(4, 4, NS.bind(null, t, e), n)
  );
}
function Mm() {}
function LS(e, t) {
  var n = Wn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Am(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function MS(e, t) {
  var n = Wn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Am(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function IS(e, t, n) {
  return Si & 21
    ? (lr(n, t) || ((n = zw()), (nt.lanes |= n), (_i |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (hn = !0)), (e.memoizedState = n));
}
function rk(e, t) {
  var n = Me;
  (Me = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = wf.transition;
  wf.transition = {};
  try {
    e(!1), t();
  } finally {
    (Me = n), (wf.transition = r);
  }
}
function FS() {
  return Wn().memoizedState;
}
function sk(e, t, n) {
  var r = Ps(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    VS(e))
  )
    US(t, n);
  else if (((n = wS(e, t, n, r)), n !== null)) {
    var s = rn();
    sr(n, e, r, s), BS(n, t, r);
  }
}
function ik(e, t, n) {
  var r = Ps(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (VS(e)) US(t, s);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), lr(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((s.next = s), km(t))
            : ((s.next = l.next), (l.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = wS(e, t, s, r)),
      n !== null && ((s = rn()), sr(n, e, r, s), BS(n, t, r));
  }
}
function VS(e) {
  var t = e.alternate;
  return e === nt || (t !== null && t === nt);
}
function US(e, t) {
  Ba = Uc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function BS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hm(e, n);
  }
}
var Bc = {
    readContext: Hn,
    useCallback: Ft,
    useContext: Ft,
    useEffect: Ft,
    useImperativeHandle: Ft,
    useInsertionEffect: Ft,
    useLayoutEffect: Ft,
    useMemo: Ft,
    useReducer: Ft,
    useRef: Ft,
    useState: Ft,
    useDebugValue: Ft,
    useDeferredValue: Ft,
    useTransition: Ft,
    useMutableSource: Ft,
    useSyncExternalStore: Ft,
    useId: Ft,
    unstable_isNewReconciler: !1,
  },
  ok = {
    readContext: Hn,
    useCallback: function (e, t) {
      return (pr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Hn,
    useEffect: Jg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        cc(4194308, 4, NS.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return cc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return cc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = sk.bind(null, nt, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Xg,
    useDebugValue: Mm,
    useDeferredValue: function (e) {
      return (pr().memoizedState = e);
    },
    useTransition: function () {
      var e = Xg(!1),
        t = e[0];
      return (e = rk.bind(null, e[1])), (pr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = nt,
        s = pr();
      if (Ze) {
        if (n === void 0) throw Error(V(407));
        n = n();
      } else {
        if (((n = t()), Pt === null)) throw Error(V(349));
        Si & 30 || bS(r, t, n);
      }
      s.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (s.queue = i),
        Jg(kS.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        hl(9, TS.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pr(),
        t = Pt.identifierPrefix;
      if (Ze) {
        var n = Dr,
          r = Nr;
        (n = (r & ~(1 << (32 - rr(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = dl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = nk++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ak = {
    readContext: Hn,
    useCallback: LS,
    useContext: Hn,
    useEffect: Lm,
    useImperativeHandle: DS,
    useInsertionEffect: jS,
    useLayoutEffect: AS,
    useMemo: MS,
    useReducer: Sf,
    useRef: OS,
    useState: function () {
      return Sf(fl);
    },
    useDebugValue: Mm,
    useDeferredValue: function (e) {
      var t = Wn();
      return IS(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = Sf(fl)[0],
        t = Wn().memoizedState;
      return [e, t];
    },
    useMutableSource: ES,
    useSyncExternalStore: PS,
    useId: FS,
    unstable_isNewReconciler: !1,
  },
  lk = {
    readContext: Hn,
    useCallback: LS,
    useContext: Hn,
    useEffect: Lm,
    useImperativeHandle: DS,
    useInsertionEffect: jS,
    useLayoutEffect: AS,
    useMemo: MS,
    useReducer: _f,
    useRef: OS,
    useState: function () {
      return _f(fl);
    },
    useDebugValue: Mm,
    useDeferredValue: function (e) {
      var t = Wn();
      return xt === null ? (t.memoizedState = e) : IS(t, xt.memoizedState, e);
    },
    useTransition: function () {
      var e = _f(fl)[0],
        t = Wn().memoizedState;
      return [e, t];
    },
    useMutableSource: ES,
    useSyncExternalStore: PS,
    useId: FS,
    unstable_isNewReconciler: !1,
  };
function Qn(e, t) {
  if (e && e.defaultProps) {
    (t = rt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : rt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Td = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Oi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = rn(),
      s = Ps(e),
      i = Mr(r, s);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = _s(e, i, s)),
      t !== null && (sr(t, e, s, r), lc(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = rn(),
      s = Ps(e),
      i = Mr(r, s);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = _s(e, i, s)),
      t !== null && (sr(t, e, s, r), lc(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = rn(),
      r = Ps(e),
      s = Mr(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = _s(e, s, r)),
      t !== null && (sr(t, e, r, n), lc(t, e, r));
  },
};
function ev(e, t, n, r, s, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !il(n, r) || !il(s, i)
      : !0
  );
}
function zS(e, t, n) {
  var r = !1,
    s = Os,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Hn(i))
      : ((s = mn(t) ? xi : Kt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Fo(e, s) : Os)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Td),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function tv(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Td.enqueueReplaceState(t, t.state, null);
}
function Uh(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), Cm(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (s.context = Hn(i))
    : ((i = mn(t) ? xi : Kt.current), (s.context = Fo(e, i))),
    (s.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Vh(e, t, i, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Td.enqueueReplaceState(s, s.state, null),
      Fc(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function zo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mb(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function Ef(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uk = typeof WeakMap == "function" ? WeakMap : Map;
function $S(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $c || (($c = !0), (Yh = r)), Bh(e, t);
    }),
    n
  );
}
function HS(e, t, n) {
  (n = Mr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Bh(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Bh(e, t),
          typeof r != "function" &&
            (Es === null ? (Es = new Set([this])) : Es.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function nv(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uk();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = Ek.bind(null, e, t, n)), t.then(e, e));
}
function rv(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sv(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mr(-1, 1)), (t.tag = 2), _s(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ck = Kr.ReactCurrentOwner,
  hn = !1;
function tn(e, t, n, r) {
  t.child = e === null ? xS(t, null, n, r) : Uo(t, e.child, n, r);
}
function iv(e, t, n, r, s) {
  n = n.render;
  var i = t.ref;
  return (
    wo(t, s),
    (r = Nm(e, t, n, r, i, s)),
    (n = Dm()),
    e !== null && !hn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Hr(e, t, s))
      : (Ze && n && Sm(t), (t.flags |= 1), tn(e, t, r, s), t.child)
  );
}
function ov(e, t, n, r, s) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Hm(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), WS(e, t, i, r, s))
      : ((e = pc(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : il), n(o, r) && e.ref === t.ref)
    )
      return Hr(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = bs(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function WS(e, t, n, r, s) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (il(i, r) && e.ref === t.ref)
      if (((hn = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
        e.flags & 131072 && (hn = !0);
      else return (t.lanes = e.lanes), Hr(e, t, s);
  }
  return zh(e, t, n, r, s);
}
function KS(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ue(ao, _n),
        (_n |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ue(ao, _n),
          (_n |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ue(ao, _n),
        (_n |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ue(ao, _n),
      (_n |= r);
  return tn(e, t, s, n), t.child;
}
function ZS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function zh(e, t, n, r, s) {
  var i = mn(n) ? xi : Kt.current;
  return (
    (i = Fo(t, i)),
    wo(t, s),
    (n = Nm(e, t, n, r, i, s)),
    (r = Dm()),
    e !== null && !hn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Hr(e, t, s))
      : (Ze && r && Sm(t), (t.flags |= 1), tn(e, t, n, s), t.child)
  );
}
function av(e, t, n, r, s) {
  if (mn(n)) {
    var i = !0;
    Nc(t);
  } else i = !1;
  if ((wo(t, s), t.stateNode === null))
    dc(e, t), zS(t, n, r), Uh(t, n, r, s), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Hn(u))
      : ((u = mn(n) ? xi : Kt.current), (u = Fo(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && tv(t, o, r, u)),
      (ns = !1);
    var f = t.memoizedState;
    (o.state = f),
      Fc(t, r, o, s),
      (l = t.memoizedState),
      a !== r || f !== l || pn.current || ns
        ? (typeof c == "function" && (Vh(t, n, c, r), (l = t.memoizedState)),
          (a = ns || ev(t, n, a, r, f, l, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      SS(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Qn(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Hn(l))
        : ((l = mn(n) ? xi : Kt.current), (l = Fo(t, l)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && tv(t, o, r, l)),
      (ns = !1),
      (f = t.memoizedState),
      (o.state = f),
      Fc(t, r, o, s);
    var p = t.memoizedState;
    a !== d || f !== p || pn.current || ns
      ? (typeof y == "function" && (Vh(t, n, y, r), (p = t.memoizedState)),
        (u = ns || ev(t, n, u, r, f, p, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, p, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, p, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (o.props = r),
        (o.state = p),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $h(e, t, n, r, i, s);
}
function $h(e, t, n, r, s, i) {
  ZS(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return s && Kg(t, n, !1), Hr(e, t, i);
  (r = t.stateNode), (ck.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Uo(t, e.child, null, i)), (t.child = Uo(t, null, a, i)))
      : tn(e, t, a, i),
    (t.memoizedState = r.state),
    s && Kg(t, n, !0),
    t.child
  );
}
function QS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wg(e, t.context, !1),
    Rm(e, t.containerInfo);
}
function lv(e, t, n, r, s) {
  return Vo(), Em(s), (t.flags |= 256), tn(e, t, n, r), t.child;
}
var Hh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qS(e, t, n) {
  var r = t.pendingProps,
    s = et.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    Ue(et, s & 1),
    e === null)
  )
    return (
      Ih(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Rd(o, r, 0, null)),
              (e = mi(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wh(n)),
              (t.memoizedState = Hh),
              e)
            : Im(t, o))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return dk(e, t, o, r, a, s, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = bs(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = bs(a, i)) : ((i = mi(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Wh(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hh),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = bs(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Im(e, t) {
  return (
    (t = Rd({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ku(e, t, n, r) {
  return (
    r !== null && Em(r),
    Uo(t, e.child, null, n),
    (e = Im(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function dk(e, t, n, r, s, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ef(Error(V(422)))), Ku(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (s = t.mode),
        (r = Rd({ mode: "visible", children: r.children }, s, 0, null)),
        (i = mi(i, s, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Uo(t, e.child, null, o),
        (t.child.memoizedState = Wh(o)),
        (t.memoizedState = Hh),
        i);
  if (!(t.mode & 1)) return Ku(e, t, o, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(V(419))), (r = Ef(i, r, void 0)), Ku(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), hn || a)) {
    if (((r = Pt), r !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), $r(e, s), sr(r, e, s, -1));
    }
    return $m(), (r = Ef(Error(V(421)))), Ku(e, t, o, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pk.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (En = Ss(s.nextSibling)),
      (Pn = t),
      (Ze = !0),
      (Xn = null),
      e !== null &&
        ((Fn[Vn++] = Nr),
        (Fn[Vn++] = Dr),
        (Fn[Vn++] = wi),
        (Nr = e.id),
        (Dr = e.overflow),
        (wi = t)),
      (t = Im(t, r.children)),
      (t.flags |= 4096),
      t);
}
function uv(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fh(e.return, t, n);
}
function Pf(e, t, n, r, s) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = s));
}
function GS(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    i = r.tail;
  if ((tn(e, t, r.children, n), (r = et.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uv(e, n, t);
        else if (e.tag === 19) uv(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ue(et, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Vc(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Pf(t, !1, s, n, i);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Vc(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Pf(t, !0, n, null, i);
        break;
      case "together":
        Pf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function dc(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_i |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bs(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bs(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function fk(e, t, n) {
  switch (t.tag) {
    case 3:
      QS(t), Vo();
      break;
    case 5:
      _S(t);
      break;
    case 1:
      mn(t.type) && Nc(t);
      break;
    case 4:
      Rm(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      Ue(Mc, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ue(et, et.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qS(e, t, n)
          : (Ue(et, et.current & 1),
            (e = Hr(e, t, n)),
            e !== null ? e.sibling : null);
      Ue(et, et.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return GS(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        Ue(et, et.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), KS(e, t, n);
  }
  return Hr(e, t, n);
}
var YS, Kh, XS, JS;
YS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Kh = function () {};
XS = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), ti(_r.current);
    var i = null;
    switch (n) {
      case "input":
        (s = ph(e, s)), (r = ph(e, r)), (i = []);
        break;
      case "select":
        (s = rt({}, s, { value: void 0 })),
          (r = rt({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = gh(e, s)), (r = gh(e, r)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = jc);
    }
    xh(n, r);
    var o;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Xa.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Xa.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ze("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
JS = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ga(e, t) {
  if (!Ze)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function hk(e, t, n) {
  var r = t.pendingProps;
  switch ((_m(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Vt(t), null;
    case 1:
      return mn(t.type) && Ac(), Vt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Bo(),
        He(pn),
        He(Kt),
        jm(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hu(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xn !== null && (ep(Xn), (Xn = null)))),
        Kh(e, t),
        Vt(t),
        null
      );
    case 5:
      Om(t);
      var s = ti(cl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        XS(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Vt(t), null;
        }
        if (((e = ti(_r.current)), Hu(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xr] = t), (r[ll] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ze("cancel", r), ze("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ze("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Oa.length; s++) ze(Oa[s], r);
              break;
            case "source":
              ze("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ze("error", r), ze("load", r);
              break;
            case "details":
              ze("toggle", r);
              break;
            case "input":
              vg(r, i), ze("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ze("invalid", r);
              break;
            case "textarea":
              wg(r, i), ze("invalid", r);
          }
          xh(n, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      $u(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      $u(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : Xa.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ze("scroll", r);
            }
          switch (n) {
            case "input":
              Lu(r), xg(r, i, !0);
              break;
            case "textarea":
              Lu(r), Sg(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = jc);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = kw(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xr] = t),
            (e[ll] = r),
            YS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = wh(n, r)), n)) {
              case "dialog":
                ze("cancel", e), ze("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Oa.length; s++) ze(Oa[s], e);
                s = r;
                break;
              case "source":
                ze("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                ze("error", e), ze("load", e), (s = r);
                break;
              case "details":
                ze("toggle", e), (s = r);
                break;
              case "input":
                vg(e, r), (s = ph(e, r)), ze("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = rt({}, r, { value: void 0 })),
                  ze("invalid", e);
                break;
              case "textarea":
                wg(e, r), (s = gh(e, r)), ze("invalid", e);
                break;
              default:
                s = r;
            }
            xh(n, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? Ow(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Cw(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ja(e, l)
                    : typeof l == "number" && Ja(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Xa.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ze("scroll", e)
                      : l != null && am(e, i, l, o));
              }
            switch (n) {
              case "input":
                Lu(e), xg(e, r, !1);
                break;
              case "textarea":
                Lu(e), Sg(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rs(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? yo(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      yo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = jc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Vt(t), null;
    case 6:
      if (e && t.stateNode != null) JS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (((n = ti(cl.current)), ti(_r.current), Hu(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xr] = t),
            (i = r.nodeValue !== n) && ((e = Pn), e !== null))
          )
            switch (e.tag) {
              case 3:
                $u(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $u(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xr] = t),
            (t.stateNode = r);
      }
      return Vt(t), null;
    case 13:
      if (
        (He(et),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ze && En !== null && t.mode & 1 && !(t.flags & 128))
          gS(), Vo(), (t.flags |= 98560), (i = !1);
        else if (((i = Hu(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(V(317));
            i[xr] = t;
          } else
            Vo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Vt(t), (i = !1);
        } else Xn !== null && (ep(Xn), (Xn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || et.current & 1 ? wt === 0 && (wt = 3) : $m())),
          t.updateQueue !== null && (t.flags |= 4),
          Vt(t),
          null);
    case 4:
      return (
        Bo(), Kh(e, t), e === null && ol(t.stateNode.containerInfo), Vt(t), null
      );
    case 10:
      return Tm(t.type._context), Vt(t), null;
    case 17:
      return mn(t.type) && Ac(), Vt(t), null;
    case 19:
      if ((He(et), (i = t.memoizedState), i === null)) return Vt(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ga(i, !1);
        else {
          if (wt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Vc(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ga(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ue(et, (et.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ft() > $o &&
            ((t.flags |= 128), (r = !0), ga(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vc(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ga(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !Ze)
            )
              return Vt(t), null;
          } else
            2 * ft() - i.renderingStartTime > $o &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ga(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ft()),
          (t.sibling = null),
          (n = et.current),
          Ue(et, r ? (n & 1) | 2 : n & 1),
          t)
        : (Vt(t), null);
    case 22:
    case 23:
      return (
        zm(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _n & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function pk(e, t) {
  switch ((_m(t), t.tag)) {
    case 1:
      return (
        mn(t.type) && Ac(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Bo(),
        He(pn),
        He(Kt),
        jm(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Om(t), null;
    case 13:
      if (
        (He(et), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(V(340));
        Vo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return He(et), null;
    case 4:
      return Bo(), null;
    case 10:
      return Tm(t.type._context), null;
    case 22:
    case 23:
      return zm(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Zu = !1,
  $t = !1,
  mk = typeof WeakSet == "function" ? WeakSet : Set,
  Y = null;
function oo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ot(e, t, r);
      }
    else n.current = null;
}
function Zh(e, t, n) {
  try {
    n();
  } catch (r) {
    ot(e, t, r);
  }
}
var cv = !1;
function yk(e, t) {
  if (((Oh = Cc), (e = sS()), wm(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var y;
              d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (y = d.firstChild) !== null;

            )
              (f = d), (d = y);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === s && (a = o),
                f === i && ++c === r && (l = o),
                (y = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jh = { focusedElem: e, selectionRange: n }, Cc = !1, Y = t; Y !== null; )
    if (((t = Y), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Y = e);
    else
      for (; Y !== null; ) {
        t = Y;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var v = p.memoizedProps,
                    S = p.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Qn(t.type, v),
                      S
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(V(163));
            }
        } catch (_) {
          ot(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Y = e);
          break;
        }
        Y = t.return;
      }
  return (p = cv), (cv = !1), p;
}
function za(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && Zh(t, n, i);
      }
      s = s.next;
    } while (s !== r);
  }
}
function kd(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function e1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), e1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xr], delete t[ll], delete t[Dh], delete t[XT], delete t[JT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function t1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dv(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || t1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function qh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = jc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qh(e, t, n), e = e.sibling; e !== null; ) qh(e, t, n), (e = e.sibling);
}
function Gh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gh(e, t, n), e = e.sibling; e !== null; ) Gh(e, t, n), (e = e.sibling);
}
var Nt = null,
  Gn = !1;
function Gr(e, t, n) {
  for (n = n.child; n !== null; ) n1(e, t, n), (n = n.sibling);
}
function n1(e, t, n) {
  if (Sr && typeof Sr.onCommitFiberUnmount == "function")
    try {
      Sr.onCommitFiberUnmount(xd, n);
    } catch {}
  switch (n.tag) {
    case 5:
      $t || oo(n, t);
    case 6:
      var r = Nt,
        s = Gn;
      (Nt = null),
        Gr(e, t, n),
        (Nt = r),
        (Gn = s),
        Nt !== null &&
          (Gn
            ? ((e = Nt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Nt.removeChild(n.stateNode));
      break;
    case 18:
      Nt !== null &&
        (Gn
          ? ((e = Nt),
            (n = n.stateNode),
            e.nodeType === 8
              ? gf(e.parentNode, n)
              : e.nodeType === 1 && gf(e, n),
            rl(e))
          : gf(Nt, n.stateNode));
      break;
    case 4:
      (r = Nt),
        (s = Gn),
        (Nt = n.stateNode.containerInfo),
        (Gn = !0),
        Gr(e, t, n),
        (Nt = r),
        (Gn = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$t &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Zh(n, t, o),
            (s = s.next);
        } while (s !== r);
      }
      Gr(e, t, n);
      break;
    case 1:
      if (
        !$t &&
        (oo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ot(n, t, a);
        }
      Gr(e, t, n);
      break;
    case 21:
      Gr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? (($t = (r = $t) || n.memoizedState !== null), Gr(e, t, n), ($t = r))
        : Gr(e, t, n);
      break;
    default:
      Gr(e, t, n);
  }
}
function fv(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mk()),
      t.forEach(function (r) {
        var s = bk.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Zn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Nt = a.stateNode), (Gn = !1);
              break e;
            case 3:
              (Nt = a.stateNode.containerInfo), (Gn = !0);
              break e;
            case 4:
              (Nt = a.stateNode.containerInfo), (Gn = !0);
              break e;
          }
          a = a.return;
        }
        if (Nt === null) throw Error(V(160));
        n1(i, o, s), (Nt = null), (Gn = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        ot(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) r1(t, e), (t = t.sibling);
}
function r1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zn(t, e), hr(e), r & 4)) {
        try {
          za(3, e, e.return), kd(3, e);
        } catch (v) {
          ot(e, e.return, v);
        }
        try {
          za(5, e, e.return);
        } catch (v) {
          ot(e, e.return, v);
        }
      }
      break;
    case 1:
      Zn(t, e), hr(e), r & 512 && n !== null && oo(n, n.return);
      break;
    case 5:
      if (
        (Zn(t, e),
        hr(e),
        r & 512 && n !== null && oo(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ja(s, "");
        } catch (v) {
          ot(e, e.return, v);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && bw(s, i),
              wh(a, o);
            var u = wh(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                d = l[o + 1];
              c === "style"
                ? Ow(s, d)
                : c === "dangerouslySetInnerHTML"
                ? Cw(s, d)
                : c === "children"
                ? Ja(s, d)
                : am(s, c, d, u);
            }
            switch (a) {
              case "input":
                mh(s, i);
                break;
              case "textarea":
                Tw(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? yo(s, !!i.multiple, y, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? yo(s, !!i.multiple, i.defaultValue, !0)
                      : yo(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[ll] = i;
          } catch (v) {
            ot(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Zn(t, e), hr(e), r & 4)) {
        if (e.stateNode === null) throw Error(V(162));
        (s = e.stateNode), (i = e.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (v) {
          ot(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Zn(t, e), hr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          rl(t.containerInfo);
        } catch (v) {
          ot(e, e.return, v);
        }
      break;
    case 4:
      Zn(t, e), hr(e);
      break;
    case 13:
      Zn(t, e),
        hr(e),
        (s = e.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Um = ft())),
        r & 4 && fv(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? (($t = (u = $t) || c), Zn(t, e), ($t = u)) : Zn(t, e),
        hr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Y = e, c = e.child; c !== null; ) {
            for (d = Y = c; Y !== null; ) {
              switch (((f = Y), (y = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  za(4, f, f.return);
                  break;
                case 1:
                  oo(f, f.return);
                  var p = f.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (v) {
                      ot(r, n, v);
                    }
                  }
                  break;
                case 5:
                  oo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    pv(d);
                    continue;
                  }
              }
              y !== null ? ((y.return = f), (Y = y)) : pv(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (s = d.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Rw("display", o)));
              } catch (v) {
                ot(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                ot(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Zn(t, e), hr(e), r & 4 && fv(e);
      break;
    case 21:
      break;
    default:
      Zn(t, e), hr(e);
  }
}
function hr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (t1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ja(s, ""), (r.flags &= -33));
          var i = dv(e);
          Gh(e, i, s);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = dv(e);
          qh(e, a, o);
          break;
        default:
          throw Error(V(161));
      }
    } catch (l) {
      ot(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gk(e, t, n) {
  (Y = e), s1(e);
}
function s1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Y !== null; ) {
    var s = Y,
      i = s.child;
    if (s.tag === 22 && r) {
      var o = s.memoizedState !== null || Zu;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || $t;
        a = Zu;
        var u = $t;
        if (((Zu = o), ($t = l) && !u))
          for (Y = s; Y !== null; )
            (o = Y),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? mv(s)
                : l !== null
                ? ((l.return = o), (Y = l))
                : mv(s);
        for (; i !== null; ) (Y = i), s1(i), (i = i.sibling);
        (Y = s), (Zu = a), ($t = u);
      }
      hv(e);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (Y = i)) : hv(e);
  }
}
function hv(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $t || kd(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$t)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Yg(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Yg(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && rl(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(V(163));
          }
        $t || (t.flags & 512 && Qh(t));
      } catch (f) {
        ot(t, t.return, f);
      }
    }
    if (t === e) {
      Y = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function pv(e) {
  for (; Y !== null; ) {
    var t = Y;
    if (t === e) {
      Y = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Y = n);
      break;
    }
    Y = t.return;
  }
}
function mv(e) {
  for (; Y !== null; ) {
    var t = Y;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kd(4, t);
          } catch (l) {
            ot(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ot(t, s, l);
            }
          }
          var i = t.return;
          try {
            Qh(t);
          } catch (l) {
            ot(t, i, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Qh(t);
          } catch (l) {
            ot(t, o, l);
          }
      }
    } catch (l) {
      ot(t, t.return, l);
    }
    if (t === e) {
      Y = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (Y = a);
      break;
    }
    Y = t.return;
  }
}
var vk = Math.ceil,
  zc = Kr.ReactCurrentDispatcher,
  Fm = Kr.ReactCurrentOwner,
  zn = Kr.ReactCurrentBatchConfig,
  Ae = 0,
  Pt = null,
  pt = null,
  Mt = 0,
  _n = 0,
  ao = Vs(0),
  wt = 0,
  pl = null,
  _i = 0,
  Cd = 0,
  Vm = 0,
  $a = null,
  fn = null,
  Um = 0,
  $o = 1 / 0,
  jr = null,
  $c = !1,
  Yh = null,
  Es = null,
  Qu = !1,
  ys = null,
  Hc = 0,
  Ha = 0,
  Xh = null,
  fc = -1,
  hc = 0;
function rn() {
  return Ae & 6 ? ft() : fc !== -1 ? fc : (fc = ft());
}
function Ps(e) {
  return e.mode & 1
    ? Ae & 2 && Mt !== 0
      ? Mt & -Mt
      : tk.transition !== null
      ? (hc === 0 && (hc = zw()), hc)
      : ((e = Me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qw(e.type))),
        e)
    : 1;
}
function sr(e, t, n, r) {
  if (50 < Ha) throw ((Ha = 0), (Xh = null), Error(V(185)));
  tu(e, n, r),
    (!(Ae & 2) || e !== Pt) &&
      (e === Pt && (!(Ae & 2) && (Cd |= n), wt === 4 && os(e, Mt)),
      yn(e, r),
      n === 1 && Ae === 0 && !(t.mode & 1) && (($o = ft() + 500), Pd && Us()));
}
function yn(e, t) {
  var n = e.callbackNode;
  tT(e, t);
  var r = kc(e, e === Pt ? Mt : 0);
  if (r === 0)
    n !== null && Pg(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pg(n), t === 1))
      e.tag === 0 ? ek(yv.bind(null, e)) : pS(yv.bind(null, e)),
        GT(function () {
          !(Ae & 6) && Us();
        }),
        (n = null);
    else {
      switch ($w(r)) {
        case 1:
          n = fm;
          break;
        case 4:
          n = Uw;
          break;
        case 16:
          n = Tc;
          break;
        case 536870912:
          n = Bw;
          break;
        default:
          n = Tc;
      }
      n = f1(n, i1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function i1(e, t) {
  if (((fc = -1), (hc = 0), Ae & 6)) throw Error(V(327));
  var n = e.callbackNode;
  if (So() && e.callbackNode !== n) return null;
  var r = kc(e, e === Pt ? Mt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Wc(e, r);
  else {
    t = r;
    var s = Ae;
    Ae |= 2;
    var i = a1();
    (Pt !== e || Mt !== t) && ((jr = null), ($o = ft() + 500), pi(e, t));
    do
      try {
        Sk();
        break;
      } catch (a) {
        o1(e, a);
      }
    while (!0);
    bm(),
      (zc.current = i),
      (Ae = s),
      pt !== null ? (t = 0) : ((Pt = null), (Mt = 0), (t = wt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = bh(e)), s !== 0 && ((r = s), (t = Jh(e, s)))), t === 1)
    )
      throw ((n = pl), pi(e, 0), os(e, r), yn(e, ft()), n);
    if (t === 6) os(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !xk(s) &&
          ((t = Wc(e, r)),
          t === 2 && ((i = bh(e)), i !== 0 && ((r = i), (t = Jh(e, i)))),
          t === 1))
      )
        throw ((n = pl), pi(e, 0), os(e, r), yn(e, ft()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          Qs(e, fn, jr);
          break;
        case 3:
          if (
            (os(e, r), (r & 130023424) === r && ((t = Um + 500 - ft()), 10 < t))
          ) {
            if (kc(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              rn(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = Nh(Qs.bind(null, e, fn, jr), t);
            break;
          }
          Qs(e, fn, jr);
          break;
        case 4:
          if ((os(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var o = 31 - rr(r);
            (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
          }
          if (
            ((r = s),
            (r = ft() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * vk(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nh(Qs.bind(null, e, fn, jr), r);
            break;
          }
          Qs(e, fn, jr);
          break;
        case 5:
          Qs(e, fn, jr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return yn(e, ft()), e.callbackNode === n ? i1.bind(null, e) : null;
}
function Jh(e, t) {
  var n = $a;
  return (
    e.current.memoizedState.isDehydrated && (pi(e, t).flags |= 256),
    (e = Wc(e, t)),
    e !== 2 && ((t = fn), (fn = n), t !== null && ep(t)),
    e
  );
}
function ep(e) {
  fn === null ? (fn = e) : fn.push.apply(fn, e);
}
function xk(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!lr(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function os(e, t) {
  for (
    t &= ~Vm,
      t &= ~Cd,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rr(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yv(e) {
  if (Ae & 6) throw Error(V(327));
  So();
  var t = kc(e, 0);
  if (!(t & 1)) return yn(e, ft()), null;
  var n = Wc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bh(e);
    r !== 0 && ((t = r), (n = Jh(e, r)));
  }
  if (n === 1) throw ((n = pl), pi(e, 0), os(e, t), yn(e, ft()), n);
  if (n === 6) throw Error(V(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qs(e, fn, jr),
    yn(e, ft()),
    null
  );
}
function Bm(e, t) {
  var n = Ae;
  Ae |= 1;
  try {
    return e(t);
  } finally {
    (Ae = n), Ae === 0 && (($o = ft() + 500), Pd && Us());
  }
}
function Ei(e) {
  ys !== null && ys.tag === 0 && !(Ae & 6) && So();
  var t = Ae;
  Ae |= 1;
  var n = zn.transition,
    r = Me;
  try {
    if (((zn.transition = null), (Me = 1), e)) return e();
  } finally {
    (Me = r), (zn.transition = n), (Ae = t), !(Ae & 6) && Us();
  }
}
function zm() {
  (_n = ao.current), He(ao);
}
function pi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qT(n)), pt !== null))
    for (n = pt.return; n !== null; ) {
      var r = n;
      switch ((_m(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ac();
          break;
        case 3:
          Bo(), He(pn), He(Kt), jm();
          break;
        case 5:
          Om(r);
          break;
        case 4:
          Bo();
          break;
        case 13:
          He(et);
          break;
        case 19:
          He(et);
          break;
        case 10:
          Tm(r.type._context);
          break;
        case 22:
        case 23:
          zm();
      }
      n = n.return;
    }
  if (
    ((Pt = e),
    (pt = e = bs(e.current, null)),
    (Mt = _n = t),
    (wt = 0),
    (pl = null),
    (Vm = Cd = _i = 0),
    (fn = $a = null),
    ei !== null)
  ) {
    for (t = 0; t < ei.length; t++)
      if (((n = ei[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (r.next = o);
        }
        n.pending = r;
      }
    ei = null;
  }
  return e;
}
function o1(e, t) {
  do {
    var n = pt;
    try {
      if ((bm(), (uc.current = Bc), Uc)) {
        for (var r = nt.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Uc = !1;
      }
      if (
        ((Si = 0),
        (Et = xt = nt = null),
        (Ba = !1),
        (dl = 0),
        (Fm.current = null),
        n === null || n.return === null)
      ) {
        (wt = 1), (pl = t), (pt = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Mt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = rv(o);
          if (y !== null) {
            (y.flags &= -257),
              sv(y, o, a, i, t),
              y.mode & 1 && nv(i, u, t),
              (t = y),
              (l = u);
            var p = t.updateQueue;
            if (p === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else p.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              nv(i, u, t), $m();
              break e;
            }
            l = Error(V(426));
          }
        } else if (Ze && a.mode & 1) {
          var S = rv(o);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              sv(S, o, a, i, t),
              Em(zo(l, a));
            break e;
          }
        }
        (i = l = zo(l, a)),
          wt !== 4 && (wt = 2),
          $a === null ? ($a = [i]) : $a.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = $S(i, l, t);
              Gg(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Es === null || !Es.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = HS(i, a, t);
                Gg(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      u1(n);
    } catch (T) {
      (t = T), pt === n && n !== null && (pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function a1() {
  var e = zc.current;
  return (zc.current = Bc), e === null ? Bc : e;
}
function $m() {
  (wt === 0 || wt === 3 || wt === 2) && (wt = 4),
    Pt === null || (!(_i & 268435455) && !(Cd & 268435455)) || os(Pt, Mt);
}
function Wc(e, t) {
  var n = Ae;
  Ae |= 2;
  var r = a1();
  (Pt !== e || Mt !== t) && ((jr = null), pi(e, t));
  do
    try {
      wk();
      break;
    } catch (s) {
      o1(e, s);
    }
  while (!0);
  if ((bm(), (Ae = n), (zc.current = r), pt !== null)) throw Error(V(261));
  return (Pt = null), (Mt = 0), wt;
}
function wk() {
  for (; pt !== null; ) l1(pt);
}
function Sk() {
  for (; pt !== null && !Kb(); ) l1(pt);
}
function l1(e) {
  var t = d1(e.alternate, e, _n);
  (e.memoizedProps = e.pendingProps),
    t === null ? u1(e) : (pt = t),
    (Fm.current = null);
}
function u1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pk(n, t)), n !== null)) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (wt = 6), (pt = null);
        return;
      }
    } else if (((n = hk(n, t, _n)), n !== null)) {
      pt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pt = t;
      return;
    }
    pt = t = e;
  } while (t !== null);
  wt === 0 && (wt = 5);
}
function Qs(e, t, n) {
  var r = Me,
    s = zn.transition;
  try {
    (zn.transition = null), (Me = 1), _k(e, t, n, r);
  } finally {
    (zn.transition = s), (Me = r);
  }
  return null;
}
function _k(e, t, n, r) {
  do So();
  while (ys !== null);
  if (Ae & 6) throw Error(V(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(V(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (nT(e, i),
    e === Pt && ((pt = Pt = null), (Mt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qu ||
      ((Qu = !0),
      f1(Tc, function () {
        return So(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = zn.transition), (zn.transition = null);
    var o = Me;
    Me = 1;
    var a = Ae;
    (Ae |= 4),
      (Fm.current = null),
      yk(e, n),
      r1(n, e),
      zT(jh),
      (Cc = !!Oh),
      (jh = Oh = null),
      (e.current = n),
      gk(n),
      Zb(),
      (Ae = a),
      (Me = o),
      (zn.transition = i);
  } else e.current = n;
  if (
    (Qu && ((Qu = !1), (ys = e), (Hc = s)),
    (i = e.pendingLanes),
    i === 0 && (Es = null),
    Gb(n.stateNode),
    yn(e, ft()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if ($c) throw (($c = !1), (e = Yh), (Yh = null), e);
  return (
    Hc & 1 && e.tag !== 0 && So(),
    (i = e.pendingLanes),
    i & 1 ? (e === Xh ? Ha++ : ((Ha = 0), (Xh = e))) : (Ha = 0),
    Us(),
    null
  );
}
function So() {
  if (ys !== null) {
    var e = $w(Hc),
      t = zn.transition,
      n = Me;
    try {
      if (((zn.transition = null), (Me = 16 > e ? 16 : e), ys === null))
        var r = !1;
      else {
        if (((e = ys), (ys = null), (Hc = 0), Ae & 6)) throw Error(V(331));
        var s = Ae;
        for (Ae |= 4, Y = e.current; Y !== null; ) {
          var i = Y,
            o = i.child;
          if (Y.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Y = u; Y !== null; ) {
                  var c = Y;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      za(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (Y = d);
                  else
                    for (; Y !== null; ) {
                      c = Y;
                      var f = c.sibling,
                        y = c.return;
                      if ((e1(c), c === u)) {
                        Y = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = y), (Y = f);
                        break;
                      }
                      Y = y;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              Y = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (Y = o);
          else
            e: for (; Y !== null; ) {
              if (((i = Y), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    za(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (Y = m);
                break e;
              }
              Y = i.return;
            }
        }
        var h = e.current;
        for (Y = h; Y !== null; ) {
          o = Y;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (Y = g);
          else
            e: for (o = h; Y !== null; ) {
              if (((a = Y), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kd(9, a);
                  }
                } catch (T) {
                  ot(a, a.return, T);
                }
              if (a === o) {
                Y = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (Y = _);
                break e;
              }
              Y = a.return;
            }
        }
        if (
          ((Ae = s), Us(), Sr && typeof Sr.onPostCommitFiberRoot == "function")
        )
          try {
            Sr.onPostCommitFiberRoot(xd, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Me = n), (zn.transition = t);
    }
  }
  return !1;
}
function gv(e, t, n) {
  (t = zo(n, t)),
    (t = $S(e, t, 1)),
    (e = _s(e, t, 1)),
    (t = rn()),
    e !== null && (tu(e, 1, t), yn(e, t));
}
function ot(e, t, n) {
  if (e.tag === 3) gv(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gv(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Es === null || !Es.has(r)))
        ) {
          (e = zo(n, e)),
            (e = HS(t, e, 1)),
            (t = _s(t, e, 1)),
            (e = rn()),
            t !== null && (tu(t, 1, e), yn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ek(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = rn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pt === e &&
      (Mt & n) === n &&
      (wt === 4 || (wt === 3 && (Mt & 130023424) === Mt && 500 > ft() - Um)
        ? pi(e, 0)
        : (Vm |= n)),
    yn(e, t);
}
function c1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fu), (Fu <<= 1), !(Fu & 130023424) && (Fu = 4194304))
      : (t = 1));
  var n = rn();
  (e = $r(e, t)), e !== null && (tu(e, t, n), yn(e, n));
}
function Pk(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), c1(e, n);
}
function bk(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(V(314));
  }
  r !== null && r.delete(t), c1(e, n);
}
var d1;
d1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pn.current) hn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (hn = !1), fk(e, t, n);
      hn = !!(e.flags & 131072);
    }
  else (hn = !1), Ze && t.flags & 1048576 && mS(t, Lc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      dc(e, t), (e = t.pendingProps);
      var s = Fo(t, Kt.current);
      wo(t, n), (s = Nm(null, t, r, e, s, n));
      var i = Dm();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            mn(r) ? ((i = !0), Nc(t)) : (i = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Cm(t),
            (s.updater = Td),
            (t.stateNode = s),
            (s._reactInternals = t),
            Uh(t, r, e, n),
            (t = $h(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ze && i && Sm(t), tn(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (dc(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = kk(r)),
          (e = Qn(r, e)),
          s)
        ) {
          case 0:
            t = zh(null, t, r, e, n);
            break e;
          case 1:
            t = av(null, t, r, e, n);
            break e;
          case 11:
            t = iv(null, t, r, e, n);
            break e;
          case 14:
            t = ov(null, t, r, Qn(r.type, e), n);
            break e;
        }
        throw Error(V(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Qn(r, s)),
        zh(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Qn(r, s)),
        av(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((QS(t), e === null)) throw Error(V(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (s = i.element),
          SS(e, t),
          Fc(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (s = zo(Error(V(423)), t)), (t = lv(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = zo(Error(V(424)), t)), (t = lv(e, t, r, n, s));
            break e;
          } else
            for (
              En = Ss(t.stateNode.containerInfo.firstChild),
                Pn = t,
                Ze = !0,
                Xn = null,
                n = xS(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Vo(), r === s)) {
            t = Hr(e, t, n);
            break e;
          }
          tn(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _S(t),
        e === null && Ih(t),
        (r = t.type),
        (s = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = s.children),
        Ah(r, s) ? (o = null) : i !== null && Ah(r, i) && (t.flags |= 32),
        ZS(e, t),
        tn(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ih(t), null;
    case 13:
      return qS(e, t, n);
    case 4:
      return (
        Rm(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Uo(t, null, r, n)) : tn(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Qn(r, s)),
        iv(e, t, r, s, n)
      );
    case 7:
      return tn(e, t, t.pendingProps, n), t.child;
    case 8:
      return tn(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return tn(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (i = t.memoizedProps),
          (o = s.value),
          Ue(Mc, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (lr(i.value, o)) {
            if (i.children === s.children && !pn.current) {
              t = Hr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Mr(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Fh(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(V(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Fh(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        tn(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        wo(t, n),
        (s = Hn(s)),
        (r = r(s)),
        (t.flags |= 1),
        tn(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Qn(r, t.pendingProps)),
        (s = Qn(r.type, s)),
        ov(e, t, r, s, n)
      );
    case 15:
      return WS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Qn(r, s)),
        dc(e, t),
        (t.tag = 1),
        mn(r) ? ((e = !0), Nc(t)) : (e = !1),
        wo(t, n),
        zS(t, r, s),
        Uh(t, r, s, n),
        $h(null, t, r, !0, e, n)
      );
    case 19:
      return GS(e, t, n);
    case 22:
      return KS(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function f1(e, t) {
  return Vw(e, t);
}
function Tk(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bn(e, t, n, r) {
  return new Tk(e, t, n, r);
}
function Hm(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function kk(e) {
  if (typeof e == "function") return Hm(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === um)) return 11;
    if (e === cm) return 14;
  }
  return 2;
}
function bs(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Bn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function pc(e, t, n, r, s, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Hm(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Yi:
        return mi(n.children, s, i, t);
      case lm:
        (o = 8), (s |= 8);
        break;
      case ch:
        return (
          (e = Bn(12, n, t, s | 2)), (e.elementType = ch), (e.lanes = i), e
        );
      case dh:
        return (e = Bn(13, n, t, s)), (e.elementType = dh), (e.lanes = i), e;
      case fh:
        return (e = Bn(19, n, t, s)), (e.elementType = fh), (e.lanes = i), e;
      case _w:
        return Rd(n, s, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ww:
              o = 10;
              break e;
            case Sw:
              o = 9;
              break e;
            case um:
              o = 11;
              break e;
            case cm:
              o = 14;
              break e;
            case ts:
              (o = 16), (r = null);
              break e;
          }
        throw Error(V(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Bn(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mi(e, t, n, r) {
  return (e = Bn(7, e, r, t)), (e.lanes = n), e;
}
function Rd(e, t, n, r) {
  return (
    (e = Bn(22, e, r, t)),
    (e.elementType = _w),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bf(e, t, n) {
  return (e = Bn(6, e, null, t)), (e.lanes = n), e;
}
function Tf(e, t, n) {
  return (
    (t = Bn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ck(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = of(0)),
    (this.expirationTimes = of(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = of(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Wm(e, t, n, r, s, i, o, a, l) {
  return (
    (e = new Ck(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Bn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cm(i),
    e
  );
}
function Rk(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function h1(e) {
  if (!e) return Os;
  e = e._reactInternals;
  e: {
    if (Oi(e) !== e || e.tag !== 1) throw Error(V(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (mn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(V(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (mn(n)) return hS(e, n, t);
  }
  return t;
}
function p1(e, t, n, r, s, i, o, a, l) {
  return (
    (e = Wm(n, r, !0, e, s, i, o, a, l)),
    (e.context = h1(null)),
    (n = e.current),
    (r = rn()),
    (s = Ps(n)),
    (i = Mr(r, s)),
    (i.callback = t ?? null),
    _s(n, i, s),
    (e.current.lanes = s),
    tu(e, s, r),
    yn(e, r),
    e
  );
}
function Od(e, t, n, r) {
  var s = t.current,
    i = rn(),
    o = Ps(s);
  return (
    (n = h1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mr(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _s(s, t, o)),
    e !== null && (sr(e, s, o, i), lc(e, s, o)),
    o
  );
}
function Kc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function vv(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Km(e, t) {
  vv(e, t), (e = e.alternate) && vv(e, t);
}
function Ok() {
  return null;
}
var m1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zm(e) {
  this._internalRoot = e;
}
jd.prototype.render = Zm.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  Od(e, t, null, null);
};
jd.prototype.unmount = Zm.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ei(function () {
      Od(null, e, null, null);
    }),
      (t[zr] = null);
  }
};
function jd(e) {
  this._internalRoot = e;
}
jd.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Kw();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < is.length && t !== 0 && t < is[n].priority; n++);
    is.splice(n, 0, e), n === 0 && Qw(e);
  }
};
function Qm(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ad(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xv() {}
function jk(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Kc(o);
        i.call(u);
      };
    }
    var o = p1(t, r, e, 0, null, !1, !1, "", xv);
    return (
      (e._reactRootContainer = o),
      (e[zr] = o.current),
      ol(e.nodeType === 8 ? e.parentNode : e),
      Ei(),
      o
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Kc(l);
      a.call(u);
    };
  }
  var l = Wm(e, 0, !1, null, null, !1, !1, "", xv);
  return (
    (e._reactRootContainer = l),
    (e[zr] = l.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    Ei(function () {
      Od(t, l, n, r);
    }),
    l
  );
}
function Nd(e, t, n, r, s) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = Kc(o);
        a.call(l);
      };
    }
    Od(t, o, e, s);
  } else o = jk(n, t, e, s, r);
  return Kc(o);
}
Hw = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ra(t.pendingLanes);
        n !== 0 &&
          (hm(t, n | 1), yn(t, ft()), !(Ae & 6) && (($o = ft() + 500), Us()));
      }
      break;
    case 13:
      Ei(function () {
        var r = $r(e, 1);
        if (r !== null) {
          var s = rn();
          sr(r, e, 1, s);
        }
      }),
        Km(e, 1);
  }
};
pm = function (e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var n = rn();
      sr(t, e, 134217728, n);
    }
    Km(e, 134217728);
  }
};
Ww = function (e) {
  if (e.tag === 13) {
    var t = Ps(e),
      n = $r(e, t);
    if (n !== null) {
      var r = rn();
      sr(n, e, t, r);
    }
    Km(e, t);
  }
};
Kw = function () {
  return Me;
};
Zw = function (e, t) {
  var n = Me;
  try {
    return (Me = e), t();
  } finally {
    Me = n;
  }
};
_h = function (e, t, n) {
  switch (t) {
    case "input":
      if ((mh(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Ed(r);
            if (!s) throw Error(V(90));
            Pw(r), mh(r, s);
          }
        }
      }
      break;
    case "textarea":
      Tw(e, n);
      break;
    case "select":
      (t = n.value), t != null && yo(e, !!n.multiple, t, !1);
  }
};
Nw = Bm;
Dw = Ei;
var Ak = { usingClientEntryPoint: !1, Events: [ru, to, Ed, jw, Aw, Bm] },
  va = {
    findFiberByHostInstance: Js,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Nk = {
    bundleType: va.bundleType,
    version: va.version,
    rendererPackageName: va.rendererPackageName,
    rendererConfig: va.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Iw(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: va.findFiberByHostInstance || Ok,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qu.isDisabled && qu.supportsFiber)
    try {
      (xd = qu.inject(Nk)), (Sr = qu);
    } catch {}
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ak;
Cn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qm(t)) throw Error(V(200));
  return Rk(e, t, null, n);
};
Cn.createRoot = function (e, t) {
  if (!Qm(e)) throw Error(V(299));
  var n = !1,
    r = "",
    s = m1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Wm(e, 1, !1, null, null, n, !1, r, s)),
    (e[zr] = t.current),
    ol(e.nodeType === 8 ? e.parentNode : e),
    new Zm(t)
  );
};
Cn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(V(188))
      : ((e = Object.keys(e).join(",")), Error(V(268, e)));
  return (e = Iw(t)), (e = e === null ? null : e.stateNode), e;
};
Cn.flushSync = function (e) {
  return Ei(e);
};
Cn.hydrate = function (e, t, n) {
  if (!Ad(t)) throw Error(V(200));
  return Nd(null, e, t, !0, n);
};
Cn.hydrateRoot = function (e, t, n) {
  if (!Qm(e)) throw Error(V(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    i = "",
    o = m1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = p1(t, null, e, 1, n ?? null, s, !1, i, o)),
    (e[zr] = t.current),
    ol(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new jd(t);
};
Cn.render = function (e, t, n) {
  if (!Ad(t)) throw Error(V(200));
  return Nd(null, e, t, !1, n);
};
Cn.unmountComponentAtNode = function (e) {
  if (!Ad(e)) throw Error(V(40));
  return e._reactRootContainer
    ? (Ei(function () {
        Nd(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zr] = null);
        });
      }),
      !0)
    : !1;
};
Cn.unstable_batchedUpdates = Bm;
Cn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ad(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return Nd(e, t, n, !1, r);
};
Cn.version = "18.3.1-next-f1338f8080-20240426";
function y1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y1);
    } catch (e) {
      console.error(e);
    }
}
y1(), (yw.exports = Cn);
var qm = yw.exports;
const Dk = Xo(qm),
  Lk = em({ __proto__: null, default: Dk }, [qm]);
var wv = qm;
(lh.createRoot = wv.createRoot), (lh.hydrateRoot = wv.hydrateRoot);
function g1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = g1(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function je() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = g1(e)) && (r && (r += " "), (r += t));
  return r;
}
const vn = ({ children: e, project: t = !1, id: n }) =>
  x.jsx("div", {
    id: n || "",
    className: je("max-w-[1192px] w-full mx-auto px-4 md:px-3", {
      "h-full": t,
    }),
    children: e,
  });
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Je() {
  return (
    (Je = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Je.apply(this, arguments)
  );
}
var ht;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ht || (ht = {}));
const Sv = "popstate";
function Mk(e) {
  e === void 0 && (e = {});
  function t(r, s) {
    let { pathname: i, search: o, hash: a } = r.location;
    return ml(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function n(r, s) {
    return typeof s == "string" ? s : Pi(s);
  }
  return Fk(t, n, null, e);
}
function Pe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ho(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Ik() {
  return Math.random().toString(36).substr(2, 8);
}
function _v(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ml(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Je(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bs(t) : t,
      { state: n, key: (t && t.key) || r || Ik() }
    )
  );
}
function Pi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Bs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Fk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = r,
    o = s.history,
    a = ht.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(Je({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = ht.Pop;
    let S = c(),
      m = S == null ? null : S - u;
    (u = S), l && l({ action: a, location: v.location, delta: m });
  }
  function f(S, m) {
    a = ht.Push;
    let h = ml(v.location, S, m);
    u = c() + 1;
    let g = _v(h, u),
      _ = v.createHref(h);
    try {
      o.pushState(g, "", _);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      s.location.assign(_);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function y(S, m) {
    a = ht.Replace;
    let h = ml(v.location, S, m);
    u = c();
    let g = _v(h, u),
      _ = v.createHref(h);
    o.replaceState(g, "", _),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function p(S) {
    let m = s.location.origin !== "null" ? s.location.origin : s.location.href,
      h = typeof S == "string" ? S : Pi(S);
    return (
      (h = h.replace(/ $/, "%20")),
      Pe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(s, o);
    },
    listen(S) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Sv, d),
        (l = S),
        () => {
          s.removeEventListener(Sv, d), (l = null);
        }
      );
    },
    createHref(S) {
      return t(s, S);
    },
    createURL: p,
    encodeLocation(S) {
      let m = p(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: y,
    go(S) {
      return o.go(S);
    },
  };
  return v;
}
var Ke;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ke || (Ke = {}));
const Vk = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Uk(e) {
  return e.index === !0;
}
function tp(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((s, i) => {
      let o = [...n, i],
        a = typeof s.id == "string" ? s.id : o.join("-");
      if (
        (Pe(
          s.index !== !0 || !s.children,
          "Cannot specify children on an index route"
        ),
        Pe(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Uk(s))
      ) {
        let l = Je({}, s, t(s), { id: a });
        return (r[a] = l), l;
      } else {
        let l = Je({}, s, t(s), { id: a, children: void 0 });
        return (
          (r[a] = l), s.children && (l.children = tp(s.children, t, o, r)), l
        );
      }
    })
  );
}
function lo(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Bs(t) : t,
    s = na(r.pathname || "/", n);
  if (s == null) return null;
  let i = v1(e);
  zk(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let l = eC(s);
    o = Yk(i[a], l);
  }
  return o;
}
function Bk(e, t) {
  let { route: n, pathname: r, params: s } = e;
  return { id: n.id, pathname: r, params: s, data: t[n.id], handle: n.handle };
}
function v1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Pe(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Ir([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Pe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      v1(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: qk(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of x1(i.path)) s(i, o, l);
    }),
    t
  );
}
function x1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    s = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return s ? [i, ""] : [i];
  let o = x1(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function zk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Gk(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const $k = /^:[\w-]+$/,
  Hk = 3,
  Wk = 2,
  Kk = 1,
  Zk = 10,
  Qk = -2,
  Ev = (e) => e === "*";
function qk(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ev) && (r += Qk),
    t && (r += Wk),
    n
      .filter((s) => !Ev(s))
      .reduce((s, i) => s + ($k.test(i) ? Hk : i === "" ? Kk : Zk), r)
  );
}
function Gk(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Yk(e, t) {
  let { routesMeta: n } = e,
    r = {},
    s = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      l = o === n.length - 1,
      u = s === "/" ? t : t.slice(s.length) || "/",
      c = Xk(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Ir([s, c.pathname]),
      pathnameBase: rC(Ir([s, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (s = Ir([s, c.pathnameBase]));
  }
  return i;
}
function Xk(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Jk(e.path, e.caseSensitive, e.end),
    s = t.match(n);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: y } = c;
      if (f === "*") {
        let v = a[d] || "";
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const p = a[d];
      return (
        y && !p ? (u[f] = void 0) : (u[f] = (p || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Jk(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Ho(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    s =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (s += "\\/*$")
      : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, t ? void 0 : "i"), r]
  );
}
function eC(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Ho(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function na(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function tC(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: s = "",
  } = typeof e == "string" ? Bs(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : nC(n, t)) : t,
    search: sC(r),
    hash: iC(s),
  };
}
function nC(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((s) => {
      s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function kf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function w1(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Gm(e, t) {
  let n = w1(e);
  return t
    ? n.map((r, s) => (s === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ym(e, t, n, r) {
  r === void 0 && (r = !1);
  let s;
  typeof e == "string"
    ? (s = Bs(e))
    : ((s = Je({}, e)),
      Pe(
        !s.pathname || !s.pathname.includes("?"),
        kf("?", "pathname", "search", s)
      ),
      Pe(
        !s.pathname || !s.pathname.includes("#"),
        kf("#", "pathname", "hash", s)
      ),
      Pe(!s.search || !s.search.includes("#"), kf("#", "search", "hash", s)));
  let i = e === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      s.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = tC(s, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Ir = (e) => e.join("/").replace(/\/\/+/g, "/"),
  rC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  iC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Xm {
  constructor(t, n, r, s) {
    s === void 0 && (s = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = s),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Jm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const S1 = ["post", "put", "patch", "delete"],
  oC = new Set(S1),
  aC = ["get", ...S1],
  lC = new Set(aC),
  uC = new Set([301, 302, 303, 307, 308]),
  cC = new Set([307, 308]),
  Cf = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  dC = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  xa = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ey = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  fC = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  _1 = "remix-router-transitions";
function hC(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Pe(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let s;
  if (e.mapRouteProperties) s = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let C = e.detectErrorBoundary;
    s = (j) => ({ hasErrorBoundary: C(j) });
  } else s = fC;
  let i = {},
    o = tp(e.routes, s, void 0, i),
    a,
    l = e.basename || "/",
    u = e.unstable_dataStrategy || gC,
    c = Je(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    d = null,
    f = new Set(),
    y = null,
    p = null,
    v = null,
    S = e.hydrationData != null,
    m = lo(o, e.history.location, l),
    h = null;
  if (m == null) {
    let C = Mn(404, { pathname: e.history.location.pathname }),
      { matches: j, route: M } = Nv(o);
    (m = j), (h = { [M.id]: C });
  }
  let g,
    _ = m.some((C) => C.route.lazy),
    T = m.some((C) => C.route.loader);
  if (_) g = !1;
  else if (!T) g = !0;
  else if (c.v7_partialHydration) {
    let C = e.hydrationData ? e.hydrationData.loaderData : null,
      j = e.hydrationData ? e.hydrationData.errors : null,
      M = (B) =>
        B.route.loader
          ? typeof B.route.loader == "function" && B.route.loader.hydrate === !0
            ? !1
            : (C && C[B.route.id] !== void 0) || (j && j[B.route.id] !== void 0)
          : !0;
    if (j) {
      let B = m.findIndex((X) => j[X.route.id] !== void 0);
      g = m.slice(0, B + 1).every(M);
    } else g = m.every(M);
  } else g = e.hydrationData != null;
  let O,
    w = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: m,
      initialized: g,
      navigation: Cf,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || h,
      fetchers: new Map(),
      blockers: new Map(),
    },
    b = ht.Pop,
    L = !1,
    N,
    Z = !1,
    $ = new Map(),
    q = null,
    ie = !1,
    oe = !1,
    we = [],
    Te = [],
    I = new Map(),
    ee = 0,
    re = -1,
    ge = new Map(),
    Se = new Set(),
    qe = new Map(),
    st = new Map(),
    at = new Set(),
    Ne = new Map(),
    Ve = new Map(),
    Ge = !1;
  function Kn() {
    if (
      ((d = e.history.listen((C) => {
        let { action: j, location: M, delta: B } = C;
        if (Ge) {
          Ge = !1;
          return;
        }
        Ho(
          Ve.size === 0 || B != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let X = ku({
          currentLocation: w.location,
          nextLocation: M,
          historyAction: j,
        });
        if (X && B != null) {
          (Ge = !0),
            e.history.go(B * -1),
            Mi(X, {
              state: "blocked",
              location: M,
              proceed() {
                Mi(X, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: M,
                }),
                  e.history.go(B);
              },
              reset() {
                let pe = new Map(w.blockers);
                pe.set(X, xa), W({ blockers: pe });
              },
            });
          return;
        }
        return yt(j, M);
      })),
      n)
    ) {
      RC(t, $);
      let C = () => OC(t, $);
      t.addEventListener("pagehide", C),
        (q = () => t.removeEventListener("pagehide", C));
    }
    return w.initialized || yt(ht.Pop, w.location, { initialHydration: !0 }), O;
  }
  function Qt() {
    d && d(),
      q && q(),
      f.clear(),
      N && N.abort(),
      w.fetchers.forEach((C, j) => dr(j)),
      w.blockers.forEach((C, j) => la(j));
  }
  function Fe(C) {
    return f.add(C), () => f.delete(C);
  }
  function W(C, j) {
    j === void 0 && (j = {}), (w = Je({}, w, C));
    let M = [],
      B = [];
    c.v7_fetcherPersist &&
      w.fetchers.forEach((X, pe) => {
        X.state === "idle" && (at.has(pe) ? B.push(pe) : M.push(pe));
      }),
      [...f].forEach((X) =>
        X(w, {
          deletedFetchers: B,
          unstable_viewTransitionOpts: j.viewTransitionOpts,
          unstable_flushSync: j.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (M.forEach((X) => w.fetchers.delete(X)), B.forEach((X) => dr(X)));
  }
  function _e(C, j, M) {
    var B, X;
    let { flushSync: pe } = M === void 0 ? {} : M,
      le =
        w.actionData != null &&
        w.navigation.formMethod != null &&
        Yn(w.navigation.formMethod) &&
        w.navigation.state === "loading" &&
        ((B = C.state) == null ? void 0 : B._isRedirect) !== !0,
      J;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (J = j.actionData)
        : (J = null)
      : le
      ? (J = w.actionData)
      : (J = null);
    let ve = j.loaderData
        ? jv(w.loaderData, j.loaderData, j.matches || [], j.errors)
        : w.loaderData,
      he = w.blockers;
    he.size > 0 && ((he = new Map(he)), he.forEach((fe, We) => he.set(We, xa)));
    let kt =
      L === !0 ||
      (w.navigation.formMethod != null &&
        Yn(w.navigation.formMethod) &&
        ((X = C.state) == null ? void 0 : X._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      ie ||
        b === ht.Pop ||
        (b === ht.Push
          ? e.history.push(C, C.state)
          : b === ht.Replace && e.history.replace(C, C.state));
    let Ct;
    if (b === ht.Pop) {
      let fe = $.get(w.location.pathname);
      fe && fe.has(C.pathname)
        ? (Ct = { currentLocation: w.location, nextLocation: C })
        : $.has(C.pathname) &&
          (Ct = { currentLocation: C, nextLocation: w.location });
    } else if (Z) {
      let fe = $.get(w.location.pathname);
      fe
        ? fe.add(C.pathname)
        : ((fe = new Set([C.pathname])), $.set(w.location.pathname, fe)),
        (Ct = { currentLocation: w.location, nextLocation: C });
    }
    W(
      Je({}, j, {
        actionData: J,
        loaderData: ve,
        historyAction: b,
        location: C,
        initialized: !0,
        navigation: Cf,
        revalidation: "idle",
        restoreScrollPosition: cg(C, j.matches || w.matches),
        preventScrollReset: kt,
        blockers: he,
      }),
      { viewTransitionOpts: Ct, flushSync: pe === !0 }
    ),
      (b = ht.Pop),
      (L = !1),
      (Z = !1),
      (ie = !1),
      (oe = !1),
      (we = []),
      (Te = []);
  }
  async function Be(C, j) {
    if (typeof C == "number") {
      e.history.go(C);
      return;
    }
    let M = np(
        w.location,
        w.matches,
        l,
        c.v7_prependBasename,
        C,
        c.v7_relativeSplatPath,
        j == null ? void 0 : j.fromRouteId,
        j == null ? void 0 : j.relative
      ),
      {
        path: B,
        submission: X,
        error: pe,
      } = Pv(c.v7_normalizeFormMethod, !1, M, j),
      le = w.location,
      J = ml(w.location, B, j && j.state);
    J = Je({}, J, e.history.encodeLocation(J));
    let ve = j && j.replace != null ? j.replace : void 0,
      he = ht.Push;
    ve === !0
      ? (he = ht.Replace)
      : ve === !1 ||
        (X != null &&
          Yn(X.formMethod) &&
          X.formAction === w.location.pathname + w.location.search &&
          (he = ht.Replace));
    let kt =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      Ct = (j && j.unstable_flushSync) === !0,
      fe = ku({ currentLocation: le, nextLocation: J, historyAction: he });
    if (fe) {
      Mi(fe, {
        state: "blocked",
        location: J,
        proceed() {
          Mi(fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: J,
          }),
            Be(C, j);
        },
        reset() {
          let We = new Map(w.blockers);
          We.set(fe, xa), W({ blockers: We });
        },
      });
      return;
    }
    return await yt(he, J, {
      submission: X,
      pendingError: pe,
      preventScrollReset: kt,
      replace: j && j.replace,
      enableViewTransition: j && j.unstable_viewTransition,
      flushSync: Ct,
    });
  }
  function mt() {
    if (
      (Ee(),
      W({ revalidation: "loading" }),
      w.navigation.state !== "submitting")
    ) {
      if (w.navigation.state === "idle") {
        yt(w.historyAction, w.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      yt(b || w.historyAction, w.navigation.location, {
        overrideNavigation: w.navigation,
      });
    }
  }
  async function yt(C, j, M) {
    N && N.abort(),
      (N = null),
      (b = C),
      (ie = (M && M.startUninterruptedRevalidation) === !0),
      nb(w.location, w.matches),
      (L = (M && M.preventScrollReset) === !0),
      (Z = (M && M.enableViewTransition) === !0);
    let B = a || o,
      X = M && M.overrideNavigation,
      pe = lo(B, j, l),
      le = (M && M.flushSync) === !0;
    if (!pe) {
      let fe = Mn(404, { pathname: j.pathname }),
        { matches: We, route: _t } = Nv(B);
      Ii(),
        _e(
          j,
          { matches: We, loaderData: {}, errors: { [_t.id]: fe } },
          { flushSync: le }
        );
      return;
    }
    if (
      w.initialized &&
      !oe &&
      EC(w.location, j) &&
      !(M && M.submission && Yn(M.submission.formMethod))
    ) {
      _e(j, { matches: pe }, { flushSync: le });
      return;
    }
    N = new AbortController();
    let J = zi(e.history, j, N.signal, M && M.submission),
      ve;
    if (M && M.pendingError)
      ve = [Wa(pe).route.id, { type: Ke.error, error: M.pendingError }];
    else if (M && M.submission && Yn(M.submission.formMethod)) {
      let fe = await ln(J, j, M.submission, pe, {
        replace: M.replace,
        flushSync: le,
      });
      if (fe.shortCircuited) return;
      (ve = fe.pendingActionResult),
        (X = Rf(j, M.submission)),
        (le = !1),
        (J = zi(e.history, J.url, J.signal));
    }
    let {
      shortCircuited: he,
      loaderData: kt,
      errors: Ct,
    } = await E(
      J,
      j,
      pe,
      X,
      M && M.submission,
      M && M.fetcherSubmission,
      M && M.replace,
      M && M.initialHydration === !0,
      le,
      ve
    );
    he ||
      ((N = null),
      _e(j, Je({ matches: pe }, Av(ve), { loaderData: kt, errors: Ct })));
  }
  async function ln(C, j, M, B, X) {
    X === void 0 && (X = {}), Ee();
    let pe = kC(j, M);
    W({ navigation: pe }, { flushSync: X.flushSync === !0 });
    let le,
      J = sp(B, j);
    if (!J.route.action && !J.route.lazy)
      le = {
        type: Ke.error,
        error: Mn(405, {
          method: C.method,
          pathname: j.pathname,
          routeId: J.route.id,
        }),
      };
    else if (((le = (await F("action", C, [J], B))[0]), C.signal.aborted))
      return { shortCircuited: !0 };
    if (ri(le)) {
      let ve;
      return (
        X && X.replace != null
          ? (ve = X.replace)
          : (ve =
              Cv(le.response.headers.get("Location"), new URL(C.url), l) ===
              w.location.pathname + w.location.search),
        await z(C, le, { submission: M, replace: ve }),
        { shortCircuited: !0 }
      );
    }
    if (ni(le)) throw Mn(400, { type: "defer-action" });
    if (Un(le)) {
      let ve = Wa(B, J.route.id);
      return (
        (X && X.replace) !== !0 && (b = ht.Push),
        { pendingActionResult: [ve.route.id, le] }
      );
    }
    return { pendingActionResult: [J.route.id, le] };
  }
  async function E(C, j, M, B, X, pe, le, J, ve, he) {
    let kt = B || Rf(j, X),
      Ct = X || pe || Mv(kt),
      fe = a || o,
      [We, _t] = bv(
        e.history,
        w,
        M,
        Ct,
        j,
        c.v7_partialHydration && J === !0,
        c.unstable_skipActionErrorRevalidation,
        oe,
        we,
        Te,
        at,
        qe,
        Se,
        fe,
        l,
        he
      );
    if (
      (Ii(
        (Re) =>
          !(M && M.some((qt) => qt.route.id === Re)) ||
          (We && We.some((qt) => qt.route.id === Re))
      ),
      (re = ++ee),
      We.length === 0 && _t.length === 0)
    ) {
      let Re = Ws();
      return (
        _e(
          j,
          Je(
            {
              matches: M,
              loaderData: {},
              errors: he && Un(he[1]) ? { [he[0]]: he[1].error } : null,
            },
            Av(he),
            Re ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: ve }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!ie && (!c.v7_partialHydration || !J)) {
      _t.forEach((qt) => {
        let On = w.fetchers.get(qt.key),
          Rt = wa(void 0, On ? On.data : void 0);
        w.fetchers.set(qt.key, Rt);
      });
      let Re;
      he && !Un(he[1])
        ? (Re = { [he[0]]: he[1].data })
        : w.actionData &&
          (Object.keys(w.actionData).length === 0
            ? (Re = null)
            : (Re = w.actionData)),
        W(
          Je(
            { navigation: kt },
            Re !== void 0 ? { actionData: Re } : {},
            _t.length > 0 ? { fetchers: new Map(w.fetchers) } : {}
          ),
          { flushSync: ve }
        );
    }
    _t.forEach((Re) => {
      I.has(Re.key) && Tt(Re.key),
        Re.controller && I.set(Re.key, Re.controller);
    });
    let ua = () => _t.forEach((Re) => Tt(Re.key));
    N && N.signal.addEventListener("abort", ua);
    let { loaderResults: qr, fetcherResults: Fi } = await ne(
      w.matches,
      M,
      We,
      _t,
      C
    );
    if (C.signal.aborted) return { shortCircuited: !0 };
    N && N.signal.removeEventListener("abort", ua),
      _t.forEach((Re) => I.delete(Re.key));
    let Vi = Dv([...qr, ...Fi]);
    if (Vi) {
      if (Vi.idx >= We.length) {
        let Re = _t[Vi.idx - We.length].key;
        Se.add(Re);
      }
      return await z(C, Vi.result, { replace: le }), { shortCircuited: !0 };
    }
    let { loaderData: Ui, errors: fr } = Ov(w, M, We, qr, he, _t, Fi, Ne);
    Ne.forEach((Re, qt) => {
      Re.subscribe((On) => {
        (On || Re.done) && Ne.delete(qt);
      });
    }),
      c.v7_partialHydration &&
        J &&
        w.errors &&
        Object.entries(w.errors)
          .filter((Re) => {
            let [qt] = Re;
            return !We.some((On) => On.route.id === qt);
          })
          .forEach((Re) => {
            let [qt, On] = Re;
            fr = Object.assign(fr || {}, { [qt]: On });
          });
    let Ru = Ws(),
      Ou = Di(re),
      ju = Ru || Ou || _t.length > 0;
    return Je(
      { loaderData: Ui, errors: fr },
      ju ? { fetchers: new Map(w.fetchers) } : {}
    );
  }
  function R(C, j, M, B) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    I.has(C) && Tt(C);
    let X = (B && B.unstable_flushSync) === !0,
      pe = a || o,
      le = np(
        w.location,
        w.matches,
        l,
        c.v7_prependBasename,
        M,
        c.v7_relativeSplatPath,
        j,
        B == null ? void 0 : B.relative
      ),
      J = lo(pe, le, l);
    if (!J) {
      Ye(C, j, Mn(404, { pathname: le }), { flushSync: X });
      return;
    }
    let {
      path: ve,
      submission: he,
      error: kt,
    } = Pv(c.v7_normalizeFormMethod, !0, le, B);
    if (kt) {
      Ye(C, j, kt, { flushSync: X });
      return;
    }
    let Ct = sp(J, ve);
    if (((L = (B && B.preventScrollReset) === !0), he && Yn(he.formMethod))) {
      D(C, j, ve, Ct, J, X, he);
      return;
    }
    qe.set(C, { routeId: j, path: ve }), H(C, j, ve, Ct, J, X, he);
  }
  async function D(C, j, M, B, X, pe, le) {
    if ((Ee(), qe.delete(C), !B.route.action && !B.route.lazy)) {
      let Rt = Mn(405, { method: le.formMethod, pathname: M, routeId: j });
      Ye(C, j, Rt, { flushSync: pe });
      return;
    }
    let J = w.fetchers.get(C);
    De(C, CC(le, J), { flushSync: pe });
    let ve = new AbortController(),
      he = zi(e.history, M, ve.signal, le);
    I.set(C, ve);
    let kt = ee,
      fe = (await F("action", he, [B], X))[0];
    if (he.signal.aborted) {
      I.get(C) === ve && I.delete(C);
      return;
    }
    if (c.v7_fetcherPersist && at.has(C)) {
      if (ri(fe) || Un(fe)) {
        De(C, Xr(void 0));
        return;
      }
    } else {
      if (ri(fe))
        if ((I.delete(C), re > kt)) {
          De(C, Xr(void 0));
          return;
        } else
          return Se.add(C), De(C, wa(le)), z(he, fe, { fetcherSubmission: le });
      if (Un(fe)) {
        Ye(C, j, fe.error);
        return;
      }
    }
    if (ni(fe)) throw Mn(400, { type: "defer-action" });
    let We = w.navigation.location || w.location,
      _t = zi(e.history, We, ve.signal),
      ua = a || o,
      qr =
        w.navigation.state !== "idle"
          ? lo(ua, w.navigation.location, l)
          : w.matches;
    Pe(qr, "Didn't find any matches after fetcher action");
    let Fi = ++ee;
    ge.set(C, Fi);
    let Vi = wa(le, fe.data);
    w.fetchers.set(C, Vi);
    let [Ui, fr] = bv(
      e.history,
      w,
      qr,
      le,
      We,
      !1,
      c.unstable_skipActionErrorRevalidation,
      oe,
      we,
      Te,
      at,
      qe,
      Se,
      ua,
      l,
      [B.route.id, fe]
    );
    fr
      .filter((Rt) => Rt.key !== C)
      .forEach((Rt) => {
        let ca = Rt.key,
          dg = w.fetchers.get(ca),
          sb = wa(void 0, dg ? dg.data : void 0);
        w.fetchers.set(ca, sb),
          I.has(ca) && Tt(ca),
          Rt.controller && I.set(ca, Rt.controller);
      }),
      W({ fetchers: new Map(w.fetchers) });
    let Ru = () => fr.forEach((Rt) => Tt(Rt.key));
    ve.signal.addEventListener("abort", Ru);
    let { loaderResults: Ou, fetcherResults: ju } = await ne(
      w.matches,
      qr,
      Ui,
      fr,
      _t
    );
    if (ve.signal.aborted) return;
    ve.signal.removeEventListener("abort", Ru),
      ge.delete(C),
      I.delete(C),
      fr.forEach((Rt) => I.delete(Rt.key));
    let Re = Dv([...Ou, ...ju]);
    if (Re) {
      if (Re.idx >= Ui.length) {
        let Rt = fr[Re.idx - Ui.length].key;
        Se.add(Rt);
      }
      return z(_t, Re.result);
    }
    let { loaderData: qt, errors: On } = Ov(
      w,
      w.matches,
      Ui,
      Ou,
      void 0,
      fr,
      ju,
      Ne
    );
    if (w.fetchers.has(C)) {
      let Rt = Xr(fe.data);
      w.fetchers.set(C, Rt);
    }
    Di(Fi),
      w.navigation.state === "loading" && Fi > re
        ? (Pe(b, "Expected pending action"),
          N && N.abort(),
          _e(w.navigation.location, {
            matches: qr,
            loaderData: qt,
            errors: On,
            fetchers: new Map(w.fetchers),
          }))
        : (W({
            errors: On,
            loaderData: jv(w.loaderData, qt, qr, On),
            fetchers: new Map(w.fetchers),
          }),
          (oe = !1));
  }
  async function H(C, j, M, B, X, pe, le) {
    let J = w.fetchers.get(C);
    De(C, wa(le, J ? J.data : void 0), { flushSync: pe });
    let ve = new AbortController(),
      he = zi(e.history, M, ve.signal);
    I.set(C, ve);
    let kt = ee,
      fe = (await F("loader", he, [B], X))[0];
    if (
      (ni(fe) && (fe = (await T1(fe, he.signal, !0)) || fe),
      I.get(C) === ve && I.delete(C),
      !he.signal.aborted)
    ) {
      if (at.has(C)) {
        De(C, Xr(void 0));
        return;
      }
      if (ri(fe))
        if (re > kt) {
          De(C, Xr(void 0));
          return;
        } else {
          Se.add(C), await z(he, fe);
          return;
        }
      if (Un(fe)) {
        Ye(C, j, fe.error);
        return;
      }
      Pe(!ni(fe), "Unhandled fetcher deferred data"), De(C, Xr(fe.data));
    }
  }
  async function z(C, j, M) {
    let {
      submission: B,
      fetcherSubmission: X,
      replace: pe,
    } = M === void 0 ? {} : M;
    j.response.headers.has("X-Remix-Revalidate") && (oe = !0);
    let le = j.response.headers.get("Location");
    Pe(le, "Expected a Location header on the redirect Response"),
      (le = Cv(le, new URL(C.url), l));
    let J = ml(w.location, le, { _isRedirect: !0 });
    if (n) {
      let We = !1;
      if (j.response.headers.has("X-Remix-Reload-Document")) We = !0;
      else if (ey.test(le)) {
        const _t = e.history.createURL(le);
        We = _t.origin !== t.location.origin || na(_t.pathname, l) == null;
      }
      if (We) {
        pe ? t.location.replace(le) : t.location.assign(le);
        return;
      }
    }
    N = null;
    let ve = pe === !0 ? ht.Replace : ht.Push,
      { formMethod: he, formAction: kt, formEncType: Ct } = w.navigation;
    !B && !X && he && kt && Ct && (B = Mv(w.navigation));
    let fe = B || X;
    if (cC.has(j.response.status) && fe && Yn(fe.formMethod))
      await yt(ve, J, {
        submission: Je({}, fe, { formAction: le }),
        preventScrollReset: L,
      });
    else {
      let We = Rf(J, B);
      await yt(ve, J, {
        overrideNavigation: We,
        fetcherSubmission: X,
        preventScrollReset: L,
      });
    }
  }
  async function F(C, j, M, B) {
    try {
      let X = await vC(u, C, j, M, B, i, s);
      return await Promise.all(
        X.map((pe, le) => {
          if (PC(pe)) {
            let J = pe.result;
            return {
              type: Ke.redirect,
              response: SC(J, j, M[le].route.id, B, l, c.v7_relativeSplatPath),
            };
          }
          return wC(pe);
        })
      );
    } catch (X) {
      return M.map(() => ({ type: Ke.error, error: X }));
    }
  }
  async function ne(C, j, M, B, X) {
    let [pe, ...le] = await Promise.all([
      M.length ? F("loader", X, M, j) : [],
      ...B.map((J) => {
        if (J.matches && J.match && J.controller) {
          let ve = zi(e.history, J.path, J.controller.signal);
          return F("loader", ve, [J.match], J.matches).then((he) => he[0]);
        } else
          return Promise.resolve({
            type: Ke.error,
            error: Mn(404, { pathname: J.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Lv(
          C,
          M,
          pe,
          pe.map(() => X.signal),
          !1,
          w.loaderData
        ),
        Lv(
          C,
          B.map((J) => J.match),
          le,
          B.map((J) => (J.controller ? J.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: pe, fetcherResults: le }
    );
  }
  function Ee() {
    (oe = !0),
      we.push(...Ii()),
      qe.forEach((C, j) => {
        I.has(j) && (Te.push(j), Tt(j));
      });
  }
  function De(C, j, M) {
    M === void 0 && (M = {}),
      w.fetchers.set(C, j),
      W(
        { fetchers: new Map(w.fetchers) },
        { flushSync: (M && M.flushSync) === !0 }
      );
  }
  function Ye(C, j, M, B) {
    B === void 0 && (B = {});
    let X = Wa(w.matches, j);
    dr(C),
      W(
        { errors: { [X.route.id]: M }, fetchers: new Map(w.fetchers) },
        { flushSync: (B && B.flushSync) === !0 }
      );
  }
  function bt(C) {
    return (
      c.v7_fetcherPersist &&
        (st.set(C, (st.get(C) || 0) + 1), at.has(C) && at.delete(C)),
      w.fetchers.get(C) || dC
    );
  }
  function dr(C) {
    let j = w.fetchers.get(C);
    I.has(C) && !(j && j.state === "loading" && ge.has(C)) && Tt(C),
      qe.delete(C),
      ge.delete(C),
      Se.delete(C),
      at.delete(C),
      w.fetchers.delete(C);
  }
  function kr(C) {
    if (c.v7_fetcherPersist) {
      let j = (st.get(C) || 0) - 1;
      j <= 0 ? (st.delete(C), at.add(C)) : st.set(C, j);
    } else dr(C);
    W({ fetchers: new Map(w.fetchers) });
  }
  function Tt(C) {
    let j = I.get(C);
    Pe(j, "Expected fetch controller: " + C), j.abort(), I.delete(C);
  }
  function Ni(C) {
    for (let j of C) {
      let M = bt(j),
        B = Xr(M.data);
      w.fetchers.set(j, B);
    }
  }
  function Ws() {
    let C = [],
      j = !1;
    for (let M of Se) {
      let B = w.fetchers.get(M);
      Pe(B, "Expected fetcher: " + M),
        B.state === "loading" && (Se.delete(M), C.push(M), (j = !0));
    }
    return Ni(C), j;
  }
  function Di(C) {
    let j = [];
    for (let [M, B] of ge)
      if (B < C) {
        let X = w.fetchers.get(M);
        Pe(X, "Expected fetcher: " + M),
          X.state === "loading" && (Tt(M), ge.delete(M), j.push(M));
      }
    return Ni(j), j.length > 0;
  }
  function Li(C, j) {
    let M = w.blockers.get(C) || xa;
    return Ve.get(C) !== j && Ve.set(C, j), M;
  }
  function la(C) {
    w.blockers.delete(C), Ve.delete(C);
  }
  function Mi(C, j) {
    let M = w.blockers.get(C) || xa;
    Pe(
      (M.state === "unblocked" && j.state === "blocked") ||
        (M.state === "blocked" && j.state === "blocked") ||
        (M.state === "blocked" && j.state === "proceeding") ||
        (M.state === "blocked" && j.state === "unblocked") ||
        (M.state === "proceeding" && j.state === "unblocked"),
      "Invalid blocker state transition: " + M.state + " -> " + j.state
    );
    let B = new Map(w.blockers);
    B.set(C, j), W({ blockers: B });
  }
  function ku(C) {
    let { currentLocation: j, nextLocation: M, historyAction: B } = C;
    if (Ve.size === 0) return;
    Ve.size > 1 && Ho(!1, "A router only supports one blocker at a time");
    let X = Array.from(Ve.entries()),
      [pe, le] = X[X.length - 1],
      J = w.blockers.get(pe);
    if (
      !(J && J.state === "proceeding") &&
      le({ currentLocation: j, nextLocation: M, historyAction: B })
    )
      return pe;
  }
  function Ii(C) {
    let j = [];
    return (
      Ne.forEach((M, B) => {
        (!C || C(B)) && (M.cancel(), j.push(B), Ne.delete(B));
      }),
      j
    );
  }
  function Cu(C, j, M) {
    if (((y = C), (v = j), (p = M || null), !S && w.navigation === Cf)) {
      S = !0;
      let B = cg(w.location, w.matches);
      B != null && W({ restoreScrollPosition: B });
    }
    return () => {
      (y = null), (v = null), (p = null);
    };
  }
  function ug(C, j) {
    return (
      (p &&
        p(
          C,
          j.map((B) => Bk(B, w.loaderData))
        )) ||
      C.key
    );
  }
  function nb(C, j) {
    if (y && v) {
      let M = ug(C, j);
      y[M] = v();
    }
  }
  function cg(C, j) {
    if (y) {
      let M = ug(C, j),
        B = y[M];
      if (typeof B == "number") return B;
    }
    return null;
  }
  function rb(C) {
    (i = {}), (a = tp(C, s, void 0, i));
  }
  return (
    (O = {
      get basename() {
        return l;
      },
      get future() {
        return c;
      },
      get state() {
        return w;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: Kn,
      subscribe: Fe,
      enableScrollRestoration: Cu,
      navigate: Be,
      fetch: R,
      revalidate: mt,
      createHref: (C) => e.history.createHref(C),
      encodeLocation: (C) => e.history.encodeLocation(C),
      getFetcher: bt,
      deleteFetcher: kr,
      dispose: Qt,
      getBlocker: Li,
      deleteBlocker: la,
      _internalFetchControllers: I,
      _internalActiveDeferreds: Ne,
      _internalSetRoutes: rb,
    }),
    O
  );
}
function pC(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function np(e, t, n, r, s, i, o, a) {
  let l, u;
  if (o) {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === o)) {
        u = d;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let c = Ym(s || ".", Gm(l, i), na(e.pathname, n) || e.pathname, a === "path");
  return (
    s == null && ((c.search = e.search), (c.hash = e.hash)),
    (s == null || s === "" || s === ".") &&
      u &&
      u.route.index &&
      !ty(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : Ir([n, c.pathname])),
    Pi(c)
  );
}
function Pv(e, t, n, r) {
  if (!r || !pC(r)) return { path: n };
  if (r.formMethod && !TC(r.formMethod))
    return { path: n, error: Mn(405, { method: r.formMethod }) };
  let s = () => ({ path: n, error: Mn(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = P1(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Yn(o)) return s();
      let f =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((y, p) => {
              let [v, S] = p;
              return (
                "" +
                y +
                v +
                "=" +
                S +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!Yn(o)) return s();
      try {
        let f = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return s();
      }
    }
  }
  Pe(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let l, u;
  if (r.formData) (l = rp(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = rp(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Rv(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Rv(l));
    } catch {
      return s();
    }
  let c = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (Yn(c.formMethod)) return { path: n, submission: c };
  let d = Bs(n);
  return (
    t && d.search && ty(d.search) && l.append("index", ""),
    (d.search = "?" + l),
    { path: Pi(d), submission: c }
  );
}
function mC(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((s) => s.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function bv(e, t, n, r, s, i, o, a, l, u, c, d, f, y, p, v) {
  let S = v ? (Un(v[1]) ? v[1].error : v[1].data) : void 0,
    m = e.createURL(t.location),
    h = e.createURL(s),
    g = v && Un(v[1]) ? v[0] : void 0,
    _ = g ? mC(n, g) : n,
    T = v ? v[1].statusCode : void 0,
    O = o && T && T >= 400,
    w = _.filter((L, N) => {
      let { route: Z } = L;
      if (Z.lazy) return !0;
      if (Z.loader == null) return !1;
      if (i)
        return typeof Z.loader != "function" || Z.loader.hydrate
          ? !0
          : t.loaderData[Z.id] === void 0 &&
              (!t.errors || t.errors[Z.id] === void 0);
      if (
        yC(t.loaderData, t.matches[N], L) ||
        l.some((ie) => ie === L.route.id)
      )
        return !0;
      let $ = t.matches[N],
        q = L;
      return Tv(
        L,
        Je(
          {
            currentUrl: m,
            currentParams: $.params,
            nextUrl: h,
            nextParams: q.params,
          },
          r,
          {
            actionResult: S,
            unstable_actionStatus: T,
            defaultShouldRevalidate: O
              ? !1
              : a ||
                m.pathname + m.search === h.pathname + h.search ||
                m.search !== h.search ||
                E1($, q),
          }
        )
      );
    }),
    b = [];
  return (
    d.forEach((L, N) => {
      if (i || !n.some((oe) => oe.route.id === L.routeId) || c.has(N)) return;
      let Z = lo(y, L.path, p);
      if (!Z) {
        b.push({
          key: N,
          routeId: L.routeId,
          path: L.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let $ = t.fetchers.get(N),
        q = sp(Z, L.path),
        ie = !1;
      f.has(N)
        ? (ie = !1)
        : u.includes(N)
        ? (ie = !0)
        : $ && $.state !== "idle" && $.data === void 0
        ? (ie = a)
        : (ie = Tv(
            q,
            Je(
              {
                currentUrl: m,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: h,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: S,
                unstable_actionStatus: T,
                defaultShouldRevalidate: O ? !1 : a,
              }
            )
          )),
        ie &&
          b.push({
            key: N,
            routeId: L.routeId,
            path: L.path,
            matches: Z,
            match: q,
            controller: new AbortController(),
          });
    }),
    [w, b]
  );
}
function yC(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    s = e[n.route.id] === void 0;
  return r || s;
}
function E1(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Tv(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function kv(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let s = n[e.id];
  Pe(s, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let l = s[o] !== void 0 && o !== "hasErrorBoundary";
    Ho(
      !l,
      'Route "' +
        s.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !l && !Vk.has(o) && (i[o] = r[o]);
  }
  Object.assign(s, i), Object.assign(s, Je({}, t(s), { lazy: void 0 }));
}
function gC(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function vC(e, t, n, r, s, i, o, a) {
  let l = r.reduce((d, f) => d.add(f.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: s.map((d) => {
        let f = l.has(d.route.id);
        return Je({}, d, {
          shouldLoad: f,
          resolve: (p) => (
            u.add(d.route.id),
            f
              ? xC(t, n, d, i, o, p, a)
              : Promise.resolve({ type: Ke.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: s[0].params,
      context: a,
    });
  return (
    s.forEach((d) =>
      Pe(
        u.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    c.filter((d, f) => l.has(s[f].route.id))
  );
}
async function xC(e, t, n, r, s, i, o) {
  let a,
    l,
    u = (c) => {
      let d,
        f = new Promise((v, S) => (d = S));
      (l = () => d()), t.signal.addEventListener("abort", l);
      let y = (v) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : c(
                { request: t, params: n.params, context: o },
                ...(v !== void 0 ? [v] : [])
              ),
        p;
      return (
        i
          ? (p = i((v) => y(v)))
          : (p = (async () => {
              try {
                return { type: "data", result: await y() };
              } catch (v) {
                return { type: "error", result: v };
              }
            })()),
        Promise.race([p, f])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let d,
          [f] = await Promise.all([
            u(c).catch((y) => {
              d = y;
            }),
            kv(n.route, s, r),
          ]);
        if (d !== void 0) throw d;
        a = f;
      } else if ((await kv(n.route, s, r), (c = n.route[e]), c)) a = await u(c);
      else if (e === "action") {
        let d = new URL(t.url),
          f = d.pathname + d.search;
        throw Mn(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: Ke.data, result: void 0 };
    else if (c) a = await u(c);
    else {
      let d = new URL(t.url),
        f = d.pathname + d.search;
      throw Mn(404, { pathname: f });
    }
    Pe(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (c) {
    return { type: Ke.error, result: c };
  } finally {
    l && t.signal.removeEventListener("abort", l);
  }
  return a;
}
async function wC(e) {
  let { result: t, type: n, status: r } = e;
  if (b1(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: Ke.error, error: a };
    }
    return n === Ke.error
      ? {
          type: Ke.error,
          error: new Xm(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: Ke.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === Ke.error)
    return { type: Ke.error, error: t, statusCode: Jm(t) ? t.status : r };
  if (bC(t)) {
    var s, i;
    return {
      type: Ke.deferred,
      deferredData: t,
      statusCode: (s = t.init) == null ? void 0 : s.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: Ke.data, data: t, statusCode: r };
}
function SC(e, t, n, r, s, i) {
  let o = e.headers.get("Location");
  if (
    (Pe(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !ey.test(o))
  ) {
    let a = r.slice(0, r.findIndex((l) => l.route.id === n) + 1);
    (o = np(new URL(t.url), a, s, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function Cv(e, t, n) {
  if (ey.test(e)) {
    let r = e,
      s = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = na(s.pathname, n) != null;
    if (s.origin === t.origin && i) return s.pathname + s.search + s.hash;
  }
  return e;
}
function zi(e, t, n, r) {
  let s = e.createURL(P1(t)).toString(),
    i = { signal: n };
  if (r && Yn(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = rp(r.formData))
        : (i.body = r.formData);
  }
  return new Request(s, i);
}
function rp(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Rv(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function _C(e, t, n, r, s, i) {
  let o = {},
    a = null,
    l,
    u = !1,
    c = {},
    d = r && Un(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((f, y) => {
      let p = t[y].route.id;
      if (
        (Pe(!ri(f), "Cannot handle redirect results in processLoaderData"),
        Un(f))
      ) {
        let v = f.error;
        d !== void 0 && ((v = d), (d = void 0)), (a = a || {});
        {
          let S = Wa(e, p);
          a[S.route.id] == null && (a[S.route.id] = v);
        }
        (o[p] = void 0),
          u || ((u = !0), (l = Jm(f.error) ? f.error.status : 500)),
          f.headers && (c[p] = f.headers);
      } else
        ni(f)
          ? (s.set(p, f.deferredData),
            (o[p] = f.deferredData.data),
            f.statusCode != null &&
              f.statusCode !== 200 &&
              !u &&
              (l = f.statusCode),
            f.headers && (c[p] = f.headers))
          : ((o[p] = f.data),
            f.statusCode && f.statusCode !== 200 && !u && (l = f.statusCode),
            f.headers && (c[p] = f.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: c }
  );
}
function Ov(e, t, n, r, s, i, o, a) {
  let { loaderData: l, errors: u } = _C(t, n, r, s, a);
  for (let c = 0; c < i.length; c++) {
    let { key: d, match: f, controller: y } = i[c];
    Pe(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let p = o[c];
    if (!(y && y.signal.aborted))
      if (Un(p)) {
        let v = Wa(e.matches, f == null ? void 0 : f.route.id);
        (u && u[v.route.id]) || (u = Je({}, u, { [v.route.id]: p.error })),
          e.fetchers.delete(d);
      } else if (ri(p)) Pe(!1, "Unhandled fetcher revalidation redirect");
      else if (ni(p)) Pe(!1, "Unhandled fetcher deferred data");
      else {
        let v = Xr(p.data);
        e.fetchers.set(d, v);
      }
  }
  return { loaderData: l, errors: u };
}
function jv(e, t, n, r) {
  let s = Je({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (s[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (s[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return s;
}
function Av(e) {
  return e
    ? Un(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Wa(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Nv(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Mn(e, t) {
  let { pathname: n, routeId: r, method: s, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        s && n && r
          ? (a =
              "You made a " +
              s +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (a = "defer() is not supported in actions")
          : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        s && n && r
          ? (a =
              "You made a " +
              s.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : s && (a = 'Invalid request method "' + s.toUpperCase() + '"')),
    new Xm(e || 500, o, new Error(a), !0)
  );
}
function Dv(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (ri(n)) return { result: n, idx: t };
  }
}
function P1(e) {
  let t = typeof e == "string" ? Bs(e) : e;
  return Pi(Je({}, t, { hash: "" }));
}
function EC(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function PC(e) {
  return b1(e.result) && uC.has(e.result.status);
}
function ni(e) {
  return e.type === Ke.deferred;
}
function Un(e) {
  return e.type === Ke.error;
}
function ri(e) {
  return (e && e.type) === Ke.redirect;
}
function bC(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function b1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function TC(e) {
  return lC.has(e.toLowerCase());
}
function Yn(e) {
  return oC.has(e.toLowerCase());
}
async function Lv(e, t, n, r, s, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      l = t[o];
    if (!l) continue;
    let u = e.find((d) => d.route.id === l.route.id),
      c = u != null && !E1(u, l) && (i && i[l.route.id]) !== void 0;
    if (ni(a) && (s || c)) {
      let d = r[o];
      Pe(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await T1(a, d, s).then((f) => {
          f && (n[o] = f || n[o]);
        });
    }
  }
}
async function T1(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ke.data, data: e.deferredData.unwrappedData };
      } catch (s) {
        return { type: Ke.error, error: s };
      }
    return { type: Ke.data, data: e.deferredData.data };
  }
}
function ty(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function sp(e, t) {
  let n = typeof t == "string" ? Bs(t).search : t.search;
  if (e[e.length - 1].route.index && ty(n || "")) return e[e.length - 1];
  let r = w1(e);
  return r[r.length - 1];
}
function Mv(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: s,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: s,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Rf(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function kC(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function wa(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function CC(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Xr(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function RC(e, t) {
  try {
    let n = e.sessionStorage.getItem(_1);
    if (n) {
      let r = JSON.parse(n);
      for (let [s, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(s, new Set(i || []));
    }
  } catch {}
}
function OC(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, s] of t) n[r] = [...s];
    try {
      e.sessionStorage.setItem(_1, JSON.stringify(n));
    } catch (r) {
      Ho(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zc() {
  return (
    (Zc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zc.apply(this, arguments)
  );
}
const Dd = P.createContext(null),
  k1 = P.createContext(null),
  ji = P.createContext(null),
  ny = P.createContext(null),
  Zr = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  C1 = P.createContext(null);
function jC(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  iu() || Pe(!1);
  let { basename: r, navigator: s } = P.useContext(ji),
    { hash: i, pathname: o, search: a } = O1(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Ir([r, o])),
    s.createHref({ pathname: l, search: a, hash: i })
  );
}
function iu() {
  return P.useContext(ny) != null;
}
function ra() {
  return iu() || Pe(!1), P.useContext(ny).location;
}
function R1(e) {
  P.useContext(ji).static || P.useLayoutEffect(e);
}
function AC() {
  let { isDataRoute: e } = P.useContext(Zr);
  return e ? KC() : NC();
}
function NC() {
  iu() || Pe(!1);
  let e = P.useContext(Dd),
    { basename: t, future: n, navigator: r } = P.useContext(ji),
    { matches: s } = P.useContext(Zr),
    { pathname: i } = ra(),
    o = JSON.stringify(Gm(s, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    R1(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = Ym(u, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ir([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, o, i, e]
    )
  );
}
const DC = P.createContext(null);
function LC(e) {
  let t = P.useContext(Zr).outlet;
  return t && P.createElement(DC.Provider, { value: e }, t);
}
function ou() {
  let { matches: e } = P.useContext(Zr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function O1(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(ji),
    { matches: s } = P.useContext(Zr),
    { pathname: i } = ra(),
    o = JSON.stringify(Gm(s, r.v7_relativeSplatPath));
  return P.useMemo(() => Ym(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function MC(e, t, n, r) {
  iu() || Pe(!1);
  let { navigator: s } = P.useContext(ji),
    { matches: i } = P.useContext(Zr),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = ra(),
    c;
  c = u;
  let d = c.pathname || "/",
    f = d;
  if (l !== "/") {
    let v = l.replace(/^\//, "").split("/");
    f = "/" + d.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let y = lo(e, { pathname: f });
  return BC(
    y &&
      y.map((v) =>
        Object.assign({}, v, {
          params: Object.assign({}, a, v.params),
          pathname: Ir([
            l,
            s.encodeLocation
              ? s.encodeLocation(v.pathname).pathname
              : v.pathname,
          ]),
          pathnameBase:
            v.pathnameBase === "/"
              ? l
              : Ir([
                  l,
                  s.encodeLocation
                    ? s.encodeLocation(v.pathnameBase).pathname
                    : v.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
}
function IC() {
  let e = WC(),
    t = Jm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: s }, n) : null,
    null
  );
}
const FC = P.createElement(IC, null);
class VC extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Zr.Provider,
          { value: this.props.routeContext },
          P.createElement(C1.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function UC(e) {
  let { routeContext: t, match: n, children: r } = e,
    s = P.useContext(Dd);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Zr.Provider, { value: t }, r)
  );
}
function BC(e, t, n, r) {
  var s;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (s = n) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || Pe(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let d = o[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: y } = n,
          p =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!y || y[d.route.id] === void 0);
        if (d.route.lazy || p) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, d, f) => {
    let y,
      p = !1,
      v = null,
      S = null;
    n &&
      ((y = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || FC),
      l &&
        (u < 0 && f === 0
          ? (ZC("route-fallback"), (p = !0), (S = null))
          : u === f &&
            ((p = !0), (S = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, f + 1)),
      h = () => {
        let g;
        return (
          y
            ? (g = v)
            : p
            ? (g = S)
            : d.route.Component
            ? (g = P.createElement(d.route.Component, null))
            : d.route.element
            ? (g = d.route.element)
            : (g = c),
          P.createElement(UC, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? P.createElement(VC, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var j1 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(j1 || {}),
  Qc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Qc || {});
function zC(e) {
  let t = P.useContext(Dd);
  return t || Pe(!1), t;
}
function $C(e) {
  let t = P.useContext(k1);
  return t || Pe(!1), t;
}
function HC(e) {
  let t = P.useContext(Zr);
  return t || Pe(!1), t;
}
function A1(e) {
  let t = HC(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Pe(!1), n.route.id;
}
function WC() {
  var e;
  let t = P.useContext(C1),
    n = $C(Qc.UseRouteError),
    r = A1(Qc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function KC() {
  let { router: e } = zC(j1.UseNavigateStable),
    t = A1(Qc.UseNavigateStable),
    n = P.useRef(!1);
  return (
    R1(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof s == "number"
              ? e.navigate(s)
              : e.navigate(s, Zc({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Iv = {};
function ZC(e, t, n) {
  Iv[e] || (Iv[e] = !0);
}
function QC(e) {
  return LC(e.context);
}
function qC(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: s = ht.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  iu() && Pe(!1);
  let l = t.replace(/^\/*/, "/"),
    u = P.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: Zc({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o]
    );
  typeof r == "string" && (r = Bs(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: y = null,
      key: p = "default",
    } = r,
    v = P.useMemo(() => {
      let S = na(c, l);
      return S == null
        ? null
        : {
            location: { pathname: S, search: d, hash: f, state: y, key: p },
            navigationType: s,
          };
    }, [l, c, d, f, y, p, s]);
  return v == null
    ? null
    : P.createElement(
        ji.Provider,
        { value: u },
        P.createElement(ny.Provider, { children: n, value: v })
      );
}
new Promise(() => {});
function GC(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yl.apply(this, arguments)
  );
}
function YC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    i;
  for (i = 0; i < r.length; i++)
    (s = r[i]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function XC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function JC(e, t) {
  return e.button === 0 && (!t || t === "_self") && !XC(e);
}
const eR = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  tR = "6";
try {
  window.__reactRouterVersion = tR;
} catch {}
function nR(e, t) {
  return hC({
    basename: void 0,
    future: yl({}, void 0, { v7_prependBasename: !0 }),
    history: Mk({ window: void 0 }),
    hydrationData: rR(),
    routes: e,
    mapRouteProperties: GC,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function rR() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = yl({}, t, { errors: sR(t.errors) })), t;
}
function sR(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, s] of t)
    if (s && s.__type === "RouteErrorResponse")
      n[r] = new Xm(s.status, s.statusText, s.data, s.internal === !0);
    else if (s && s.__type === "Error") {
      if (s.__subType) {
        let i = window[s.__subType];
        if (typeof i == "function")
          try {
            let o = new i(s.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(s.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = s;
  return n;
}
const iR = P.createContext({ isTransitioning: !1 }),
  oR = P.createContext(new Map()),
  aR = "startTransition",
  Fv = Eb[aR],
  lR = "flushSync",
  Vv = Lk[lR];
function uR(e) {
  Fv ? Fv(e) : e();
}
function Sa(e) {
  Vv ? Vv(e) : e();
}
class cR {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function dR(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [s, i] = P.useState(n.state),
    [o, a] = P.useState(),
    [l, u] = P.useState({ isTransitioning: !1 }),
    [c, d] = P.useState(),
    [f, y] = P.useState(),
    [p, v] = P.useState(),
    S = P.useRef(new Map()),
    { v7_startTransition: m } = r || {},
    h = P.useCallback(
      (w) => {
        m ? uR(w) : w();
      },
      [m]
    ),
    g = P.useCallback(
      (w, b) => {
        let {
          deletedFetchers: L,
          unstable_flushSync: N,
          unstable_viewTransitionOpts: Z,
        } = b;
        L.forEach((q) => S.current.delete(q)),
          w.fetchers.forEach((q, ie) => {
            q.data !== void 0 && S.current.set(ie, q.data);
          });
        let $ =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Z || $) {
          N ? Sa(() => i(w)) : h(() => i(w));
          return;
        }
        if (N) {
          Sa(() => {
            f && (c && c.resolve(), f.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Z.currentLocation,
                nextLocation: Z.nextLocation,
              });
          });
          let q = n.window.document.startViewTransition(() => {
            Sa(() => i(w));
          });
          q.finished.finally(() => {
            Sa(() => {
              d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Sa(() => y(q));
          return;
        }
        f
          ? (c && c.resolve(),
            f.skipTransition(),
            v({
              state: w,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }))
          : (a(w),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Z.currentLocation,
              nextLocation: Z.nextLocation,
            }));
      },
      [n.window, f, c, S, h]
    );
  P.useLayoutEffect(() => n.subscribe(g), [n, g]),
    P.useEffect(() => {
      l.isTransitioning && !l.flushSync && d(new cR());
    }, [l]),
    P.useEffect(() => {
      if (c && o && n.window) {
        let w = o,
          b = c.promise,
          L = n.window.document.startViewTransition(async () => {
            h(() => i(w)), await b;
          });
        L.finished.finally(() => {
          d(void 0), y(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          y(L);
      }
    }, [h, o, c, n.window]),
    P.useEffect(() => {
      c && o && s.location.key === o.location.key && c.resolve();
    }, [c, f, s.location, o]),
    P.useEffect(() => {
      !l.isTransitioning &&
        p &&
        (a(p.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: p.currentLocation,
          nextLocation: p.nextLocation,
        }),
        v(void 0));
    }, [l.isTransitioning, p]),
    P.useEffect(() => {}, []);
  let _ = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (w) => n.navigate(w),
        push: (w, b, L) =>
          n.navigate(w, {
            state: b,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
        replace: (w, b, L) =>
          n.navigate(w, {
            replace: !0,
            state: b,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset,
          }),
      }),
      [n]
    ),
    T = n.basename || "/",
    O = P.useMemo(
      () => ({ router: n, navigator: _, static: !1, basename: T }),
      [n, _, T]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      Dd.Provider,
      { value: O },
      P.createElement(
        k1.Provider,
        { value: s },
        P.createElement(
          oR.Provider,
          { value: S.current },
          P.createElement(
            iR.Provider,
            { value: l },
            P.createElement(
              qC,
              {
                basename: T,
                location: s.location,
                navigationType: s.historyAction,
                navigator: _,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              s.initialized || n.future.v7_partialHydration
                ? P.createElement(fR, {
                    routes: n.routes,
                    future: n.future,
                    state: s,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function fR(e) {
  let { routes: t, future: n, state: r } = e;
  return MC(t, void 0, r, n);
}
const hR =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  pR = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  er = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: d,
      } = t,
      f = YC(t, eR),
      { basename: y } = P.useContext(ji),
      p,
      v = !1;
    if (typeof u == "string" && pR.test(u) && ((p = u), hR))
      try {
        let g = new URL(window.location.href),
          _ = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          T = na(_.pathname, y);
        _.origin === g.origin && T != null
          ? (u = T + _.search + _.hash)
          : (v = !0);
      } catch {}
    let S = jC(u, { relative: s }),
      m = mR(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: s,
        unstable_viewTransition: d,
      });
    function h(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return P.createElement(
      "a",
      yl({}, f, { href: p || S, onClick: v || i ? r : h, ref: n, target: l })
    );
  });
var Uv;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Uv || (Uv = {}));
var Bv;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Bv || (Bv = {}));
function mR(e, t) {
  let {
      target: n,
      replace: r,
      state: s,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    l = AC(),
    u = ra(),
    c = O1(e, { relative: o });
  return P.useCallback(
    (d) => {
      if (JC(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Pi(u) === Pi(c);
        l(e, {
          replace: f,
          state: s,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [u, l, c, r, s, n, e, i, o, a]
  );
}
var Gu,
  yR = new Uint8Array(16);
function gR() {
  if (
    !Gu &&
    ((Gu =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !Gu)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Gu(yR);
}
const vR =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function xR(e) {
  return typeof e == "string" && vR.test(e);
}
var At = [];
for (var Of = 0; Of < 256; ++Of) At.push((Of + 256).toString(16).substr(1));
function wR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = (
      At[e[t + 0]] +
      At[e[t + 1]] +
      At[e[t + 2]] +
      At[e[t + 3]] +
      "-" +
      At[e[t + 4]] +
      At[e[t + 5]] +
      "-" +
      At[e[t + 6]] +
      At[e[t + 7]] +
      "-" +
      At[e[t + 8]] +
      At[e[t + 9]] +
      "-" +
      At[e[t + 10]] +
      At[e[t + 11]] +
      At[e[t + 12]] +
      At[e[t + 13]] +
      At[e[t + 14]] +
      At[e[t + 15]]
    ).toLowerCase();
  if (!xR(n)) throw TypeError("Stringified UUID is invalid");
  return n;
}
function ry(e, t, n) {
  e = e || {};
  var r = e.random || (e.rng || gR)();
  return (r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), wR(r);
}
const sy = P.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ld = P.createContext({}),
  Md = P.createContext(null),
  iy = typeof document < "u",
  oy = iy ? P.useLayoutEffect : P.useEffect,
  N1 = P.createContext({ strict: !1 }),
  ay = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  SR = "framerAppearId",
  D1 = "data-" + ay(SR),
  _R = { skipAnimations: !1, useManualTiming: !1 };
class zv {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function ER(e) {
  let t = new zv(),
    n = new zv(),
    r = 0,
    s = !1,
    i = !1;
  const o = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && s,
          f = d ? t : n;
        return u && o.add(l), f.add(l) && d && s && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), o.delete(l);
      },
      process: (l) => {
        if (s) {
          i = !0;
          return;
        }
        if (((s = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            o.has(c) && (a.schedule(c), e()), c(l);
          }
        (s = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const Yu = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  PR = 40;
function L1(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Yu.reduce((d, f) => ((d[f] = ER(() => (n = !0))), d), {}),
    o = (d) => {
      i[d].process(s);
    },
    a = () => {
      const d = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(d - s.timestamp, PR), 1)),
        (s.timestamp = d),
        (s.isProcessing = !0),
        Yu.forEach(o),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), s.isProcessing || e(a);
    };
  return {
    schedule: Yu.reduce((d, f) => {
      const y = i[f];
      return (d[f] = (p, v = !1, S = !1) => (n || l(), y.schedule(p, v, S))), d;
    }, {}),
    cancel: (d) => Yu.forEach((f) => i[f].cancel(d)),
    state: s,
    steps: i,
  };
}
const { schedule: ly, cancel: W3 } = L1(queueMicrotask, !1);
function bR(e, t, n, r) {
  const { visualElement: s } = P.useContext(Ld),
    i = P.useContext(N1),
    o = P.useContext(Md),
    a = P.useContext(sy).reducedMotion,
    l = P.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  P.useInsertionEffect(() => {
    u && u.update(n, o);
  });
  const c = P.useRef(!!(n[D1] && !window.HandoffComplete));
  return (
    oy(() => {
      u &&
        (ly.render(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    P.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function uo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function TR(e, t, n) {
  return P.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : uo(n) && (n.current = r));
    },
    [t]
  );
}
function gl(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Id(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const uy = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  cy = ["initial", ...uy];
function Fd(e) {
  return Id(e.animate) || cy.some((t) => gl(e[t]));
}
function M1(e) {
  return !!(Fd(e) || e.variants);
}
function kR(e, t) {
  if (Fd(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || gl(n) ? n : void 0,
      animate: gl(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function CR(e) {
  const { initial: t, animate: n } = kR(e, P.useContext(Ld));
  return P.useMemo(() => ({ initial: t, animate: n }), [$v(t), $v(n)]);
}
function $v(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Hv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  vl = {};
for (const e in Hv) vl[e] = { isEnabled: (t) => Hv[e].some((n) => !!t[n]) };
function RR(e) {
  for (const t in e) vl[t] = { ...vl[t], ...e[t] };
}
const dy = P.createContext({}),
  I1 = P.createContext({}),
  OR = Symbol.for("motionComponentSymbol");
function jR({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && RR(e);
  function i(a, l) {
    let u;
    const c = { ...P.useContext(sy), ...a, layoutId: AR(a) },
      { isStatic: d } = c,
      f = CR(a),
      y = r(a, d);
    if (!d && iy) {
      f.visualElement = bR(s, y, c, t);
      const p = P.useContext(I1),
        v = P.useContext(N1).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, v, e, p));
    }
    return x.jsxs(Ld.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? x.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(s, a, TR(y, f.visualElement, l), y, d, f.visualElement),
      ],
    });
  }
  const o = P.forwardRef(i);
  return (o[OR] = s), o;
}
function AR({ layoutId: e }) {
  const t = P.useContext(dy).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function NR(e) {
  function t(r, s = {}) {
    return jR(e(r, s));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s)),
  });
}
const DR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function fy(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(DR.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const qc = {};
function LR(e) {
  Object.assign(qc, e);
}
const au = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ai = new Set(au);
function F1(e, { layout: t, layoutId: n }) {
  return (
    Ai.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!qc[e] || e === "opacity"))
  );
}
const Ht = (e) => !!(e && e.getVelocity),
  MR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  IR = au.length;
function FR(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  s
) {
  let i = "";
  for (let o = 0; o < IR; o++) {
    const a = au[o];
    if (e[a] !== void 0) {
      const l = MR[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    s ? (i = s(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const V1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  U1 = V1("--"),
  VR = V1("var(--"),
  hy = (e) => (VR(e) ? UR.test(e.split("/*")[0].trim()) : !1),
  UR =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  BR = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  js = (e, t, n) => (n > t ? t : n < e ? e : n),
  sa = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ka = { ...sa, transform: (e) => js(0, 1, e) },
  Xu = { ...sa, default: 1 },
  Za = (e) => Math.round(e * 1e5) / 1e5,
  py = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  zR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  $R =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function lu(e) {
  return typeof e == "string";
}
const uu = (e) => ({
    test: (t) => lu(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Jr = uu("deg"),
  Er = uu("%"),
  ue = uu("px"),
  HR = uu("vh"),
  WR = uu("vw"),
  Wv = {
    ...Er,
    parse: (e) => Er.parse(e) / 100,
    transform: (e) => Er.transform(e * 100),
  },
  Kv = { ...sa, transform: Math.round },
  B1 = {
    borderWidth: ue,
    borderTopWidth: ue,
    borderRightWidth: ue,
    borderBottomWidth: ue,
    borderLeftWidth: ue,
    borderRadius: ue,
    radius: ue,
    borderTopLeftRadius: ue,
    borderTopRightRadius: ue,
    borderBottomRightRadius: ue,
    borderBottomLeftRadius: ue,
    width: ue,
    maxWidth: ue,
    height: ue,
    maxHeight: ue,
    size: ue,
    top: ue,
    right: ue,
    bottom: ue,
    left: ue,
    padding: ue,
    paddingTop: ue,
    paddingRight: ue,
    paddingBottom: ue,
    paddingLeft: ue,
    margin: ue,
    marginTop: ue,
    marginRight: ue,
    marginBottom: ue,
    marginLeft: ue,
    rotate: Jr,
    rotateX: Jr,
    rotateY: Jr,
    rotateZ: Jr,
    scale: Xu,
    scaleX: Xu,
    scaleY: Xu,
    scaleZ: Xu,
    skew: Jr,
    skewX: Jr,
    skewY: Jr,
    distance: ue,
    translateX: ue,
    translateY: ue,
    translateZ: ue,
    x: ue,
    y: ue,
    z: ue,
    perspective: ue,
    transformPerspective: ue,
    opacity: Ka,
    originX: Wv,
    originY: Wv,
    originZ: ue,
    zIndex: Kv,
    backgroundPositionX: ue,
    backgroundPositionY: ue,
    fillOpacity: Ka,
    strokeOpacity: Ka,
    numOctaves: Kv,
  };
function my(e, t, n, r) {
  const { style: s, vars: i, transform: o, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (U1(d)) {
      i[d] = f;
      continue;
    }
    const y = B1[d],
      p = BR(f, y);
    if (Ai.has(d)) {
      if (((l = !0), (o[d] = p), !c)) continue;
      f !== (y.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = p)) : (s[d] = p);
  }
  if (
    (t.transform ||
      (l || r
        ? (s.transform = FR(e.transform, n, c, r))
        : s.transform && (s.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: y = 0 } = a;
    s.transformOrigin = `${d} ${f} ${y}`;
  }
}
const yy = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function z1(e, t, n) {
  for (const r in t) !Ht(t[r]) && !F1(r, n) && (e[r] = t[r]);
}
function KR({ transformTemplate: e }, t, n) {
  return P.useMemo(() => {
    const r = yy();
    return (
      my(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function ZR(e, t, n) {
  const r = e.style || {},
    s = {};
  return z1(s, r, e), Object.assign(s, KR(e, t, n)), s;
}
function QR(e, t, n) {
  const r = {},
    s = ZR(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const qR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Gc(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    qR.has(e)
  );
}
let $1 = (e) => !Gc(e);
function GR(e) {
  e && ($1 = (t) => (t.startsWith("on") ? !Gc(t) : e(t)));
}
try {
  GR(require("@emotion/is-prop-valid").default);
} catch {}
function YR(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      (($1(s) ||
        (n === !0 && Gc(s)) ||
        (!t && !Gc(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Zv(e, t, n) {
  return typeof e == "string" ? e : ue.transform(t + n * e);
}
function XR(e, t, n) {
  const r = Zv(t, e.x, e.width),
    s = Zv(n, e.y, e.height);
  return `${r} ${s}`;
}
const JR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  eO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function tO(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? JR : eO;
  e[i.offset] = ue.transform(-r);
  const o = ue.transform(t),
    a = ue.transform(n);
  e[i.array] = `${o} ${a}`;
}
function gy(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((my(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: y, style: p, dimensions: v } = e;
  y.transform && (v && (p.transform = y.transform), delete y.transform),
    v &&
      (s !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = XR(
        v,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (y.x = t),
    n !== void 0 && (y.y = n),
    r !== void 0 && (y.scale = r),
    o !== void 0 && tO(y, o, a, l, !1);
}
const H1 = () => ({ ...yy(), attrs: {} }),
  vy = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function nO(e, t, n, r) {
  const s = P.useMemo(() => {
    const i = H1();
    return (
      gy(i, t, { enableHardwareAcceleration: !1 }, vy(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    z1(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function rO(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (fy(n) ? nO : QR)(r, i, o, n),
      u = YR(r, typeof n == "string", e),
      c = n !== P.Fragment ? { ...u, ...l, ref: s } : {},
      { children: d } = r,
      f = P.useMemo(() => (Ht(d) ? d.get() : d), [d]);
    return P.createElement(n, { ...c, children: f });
  };
}
function W1(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const K1 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Z1(e, t, n, r) {
  W1(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(K1.has(s) ? s : ay(s), t.attrs[s]);
}
function xy(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Ht(s[o]) ||
      (t.style && Ht(t.style[o])) ||
      F1(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function Q1(e, t, n) {
  const r = xy(e, t, n);
  for (const s in e)
    if (Ht(e[s]) || Ht(t[s])) {
      const i =
        au.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function Qv(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function wy(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Qv(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Qv(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function q1(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ip = (e) => Array.isArray(e),
  sO = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  iO = (e) => (ip(e) ? e[e.length - 1] || 0 : e);
function mc(e) {
  const t = Ht(e) ? e.get() : e;
  return sO(t) ? t.toValue() : t;
}
function oO(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  s,
  i
) {
  const o = { latestValues: aO(r, s, i, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const G1 = (e) => (t, n) => {
  const r = P.useContext(Ld),
    s = P.useContext(Md),
    i = () => oO(e, t, r, s);
  return n ? i() : q1(i);
};
function aO(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = mc(i[f]);
  let { initial: o, animate: a } = e;
  const l = Fd(e),
    u = M1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  return (
    d &&
      typeof d != "boolean" &&
      !Id(d) &&
      (Array.isArray(d) ? d : [d]).forEach((y) => {
        const p = wy(e, y);
        if (!p) return;
        const { transitionEnd: v, transition: S, ...m } = p;
        for (const h in m) {
          let g = m[h];
          if (Array.isArray(g)) {
            const _ = c ? g.length - 1 : 0;
            g = g[_];
          }
          g !== null && (s[h] = g);
        }
        for (const h in v) s[h] = v[h];
      }),
    s
  );
}
const Wt = (e) => e,
  {
    schedule: Ie,
    cancel: As,
    state: Dt,
    steps: jf,
  } = L1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Wt, !0),
  lO = {
    useVisualState: G1({
      scrapeMotionValuesFromProps: Q1,
      createRenderState: H1,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Ie.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Ie.render(() => {
            gy(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              vy(t.tagName),
              e.transformTemplate
            ),
              Z1(t, n);
          });
      },
    }),
  },
  uO = {
    useVisualState: G1({
      scrapeMotionValuesFromProps: xy,
      createRenderState: yy,
    }),
  };
function cO(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(fy(e) ? lO : uO),
    preloadedFeatures: n,
    useRender: rO(t),
    createVisualElement: r,
    Component: e,
  };
}
function Lr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Y1 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Vd(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const dO = (e) => (t) => Y1(t) && e(t, Vd(t));
function Fr(e, t, n, r) {
  return Lr(e, t, dO(n), r);
}
const fO = (e, t) => (n) => t(e(n)),
  Vr = (...e) => e.reduce(fO);
function X1(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const qv = X1("dragHorizontal"),
  Gv = X1("dragVertical");
function J1(e) {
  let t = !1;
  if (e === "y") t = Gv();
  else if (e === "x") t = qv();
  else {
    const n = qv(),
      r = Gv();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function e_() {
  const e = J1(!0);
  return e ? (e(), !1) : !0;
}
class zs {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Yv(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    s = (i, o) => {
      if (i.pointerType === "touch" || e_()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && Ie.postRender(() => l(i, o));
    };
  return Fr(e.current, n, s, { passive: !e.getProps()[r] });
}
class hO extends zs {
  mount() {
    this.unmount = Vr(Yv(this.node, !0), Yv(this.node, !1));
  }
  unmount() {}
}
class pO extends zs {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Vr(
      Lr(this.node.current, "focus", () => this.onFocus()),
      Lr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const t_ = (e, t) => (t ? (e === t ? !0 : t_(e, t.parentElement)) : !1);
function Af(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Vd(n));
}
class mO extends zs {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Wt),
      (this.removeEndListeners = Wt),
      (this.removeAccessibleListeners = Wt),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = Fr(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !t_(this.node.current, a.target) ? c : u;
              f && Ie.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Fr(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Vr(i, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Af("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Ie.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Lr(this.node.current, "keyup", o)),
              Af("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Lr(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Af("cancel", (i, o) => this.cancelPress(i, o));
          },
          s = Lr(this.node.current, "blur", r);
        this.removeAccessibleListeners = Vr(n, s);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    s &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Ie.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !e_()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ie.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Fr(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Lr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Vr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const op = new WeakMap(),
  Nf = new WeakMap(),
  yO = (e) => {
    const t = op.get(e.target);
    t && t(e);
  },
  gO = (e) => {
    e.forEach(yO);
  };
function vO({ root: e, ...t }) {
  const n = e || document;
  Nf.has(n) || Nf.set(n, {});
  const r = Nf.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(gO, { root: e, ...t })), r[s];
}
function xO(e, t, n) {
  const r = vO(t);
  return (
    op.set(e, n),
    r.observe(e),
    () => {
      op.delete(e), r.unobserve(e);
    }
  );
}
const wO = { some: 0, all: 1 };
class SO extends zs {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : wO[s],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return xO(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(_O(t, n)) && this.startObserver();
  }
  unmount() {}
}
function _O({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const EO = {
  inView: { Feature: SO },
  tap: { Feature: mO },
  focus: { Feature: pO },
  hover: { Feature: hO },
};
function n_(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ud(e, t, n) {
  const r = e.getProps();
  return wy(r, t, n !== void 0 ? n : r.custom, e);
}
const Ts = (e) => e * 1e3,
  Ur = (e) => e / 1e3,
  PO = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  bO = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  TO = { type: "keyframes", duration: 0.8 },
  kO = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  CO = (e, { keyframes: t }) =>
    t.length > 2
      ? TO
      : Ai.has(e)
      ? e.startsWith("scale")
        ? bO(t[1])
        : PO
      : kO;
function RO({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Sy(e, t) {
  return e[t] || e.default || e;
}
const OO = (e) => e !== null;
function Bd(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(OO),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
let yc;
function jO() {
  yc = void 0;
}
const ks = {
    now: () => (
      yc === void 0 &&
        ks.set(
          Dt.isProcessing || _R.useManualTiming
            ? Dt.timestamp
            : performance.now()
        ),
      yc
    ),
    set: (e) => {
      (yc = e), queueMicrotask(jO);
    },
  },
  r_ = (e) => /^0[^.\s]+$/u.test(e);
function AO(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || r_(e)
    : !0;
}
let ap = Wt;
const s_ = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  NO = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function DO(e) {
  const t = NO.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function i_(e, t, n = 1) {
  const [r, s] = DO(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return s_(o) ? parseFloat(o) : o;
  }
  return hy(s) ? i_(s, t, n + 1) : s;
}
const LO = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Xv = (e) => e === sa || e === ue,
  Jv = (e, t) => parseFloat(e.split(", ")[t]),
  e0 =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return Jv(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? Jv(i[1], e) : 0;
      }
    },
  MO = new Set(["x", "y", "z"]),
  IO = au.filter((e) => !MO.has(e));
function FO(e) {
  const t = [];
  return (
    IO.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Wo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: e0(4, 13),
  y: e0(5, 14),
};
Wo.translateX = Wo.x;
Wo.translateY = Wo.y;
const o_ = (e) => (t) => t.test(e),
  VO = { test: (e) => e === "auto", parse: (e) => e },
  a_ = [sa, ue, Er, Jr, WR, HR, VO],
  t0 = (e) => a_.find(o_(e)),
  yi = new Set();
let lp = !1,
  up = !1;
function l_() {
  if (up) {
    const e = Array.from(yi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = FO(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (up = !1), (lp = !1), yi.forEach((e) => e.complete()), yi.clear();
}
function u_() {
  yi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (up = !0);
  });
}
function UO() {
  u_(), l_();
}
class _y {
  constructor(t, n, r, s, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (yi.add(this),
          lp || ((lp = !0), Ie.read(u_), Ie.resolveKeyframes(l_)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      yi.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), yi.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ey = (e, t) => (n) =>
    !!(
      (lu(n) && $R.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  c_ = (e, t, n) => (r) => {
    if (!lu(r)) return r;
    const [s, i, o, a] = r.match(py);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  BO = (e) => js(0, 255, e),
  Df = { ...sa, transform: (e) => Math.round(BO(e)) },
  si = {
    test: Ey("rgb", "red"),
    parse: c_("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Df.transform(e) +
      ", " +
      Df.transform(t) +
      ", " +
      Df.transform(n) +
      ", " +
      Za(Ka.transform(r)) +
      ")",
  };
function zO(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const cp = { test: Ey("#"), parse: zO, transform: si.transform },
  co = {
    test: Ey("hsl", "hue"),
    parse: c_("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Er.transform(Za(t)) +
      ", " +
      Er.transform(Za(n)) +
      ", " +
      Za(Ka.transform(r)) +
      ")",
  },
  zt = {
    test: (e) => si.test(e) || cp.test(e) || co.test(e),
    parse: (e) =>
      si.test(e) ? si.parse(e) : co.test(e) ? co.parse(e) : cp.parse(e),
    transform: (e) =>
      lu(e) ? e : e.hasOwnProperty("red") ? si.transform(e) : co.transform(e),
  };
function $O(e) {
  var t, n;
  return (
    isNaN(e) &&
    lu(e) &&
    (((t = e.match(py)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(zR)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const d_ = "number",
  f_ = "color",
  HO = "var",
  WO = "var(",
  n0 = "${}",
  KO =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function xl(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      KO,
      (l) => (
        zt.test(l)
          ? (r.color.push(i), s.push(f_), n.push(zt.parse(l)))
          : l.startsWith(WO)
          ? (r.var.push(i), s.push(HO), n.push(l))
          : (r.number.push(i), s.push(d_), n.push(parseFloat(l))),
        ++i,
        n0
      )
    )
    .split(n0);
  return { values: n, split: a, indexes: r, types: s };
}
function h_(e) {
  return xl(e).values;
}
function p_(e) {
  const { split: t, types: n } = xl(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === d_
          ? (i += Za(s[o]))
          : a === f_
          ? (i += zt.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const ZO = (e) => (typeof e == "number" ? 0 : e);
function QO(e) {
  const t = h_(e);
  return p_(e)(t.map(ZO));
}
const Ns = {
    test: $O,
    parse: h_,
    createTransformer: p_,
    getAnimatableNone: QO,
  },
  qO = new Set(["brightness", "contrast", "saturate", "opacity"]);
function GO(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(py) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = qO.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const YO = /\b([a-z-]*)\(.*?\)/gu,
  dp = {
    ...Ns,
    getAnimatableNone: (e) => {
      const t = e.match(YO);
      return t ? t.map(GO).join(" ") : e;
    },
  },
  XO = {
    ...B1,
    color: zt,
    backgroundColor: zt,
    outlineColor: zt,
    fill: zt,
    stroke: zt,
    borderColor: zt,
    borderTopColor: zt,
    borderRightColor: zt,
    borderBottomColor: zt,
    borderLeftColor: zt,
    filter: dp,
    WebkitFilter: dp,
  },
  Py = (e) => XO[e];
function m_(e, t) {
  let n = Py(e);
  return (
    n !== dp && (n = Ns), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const JO = new Set(["auto", "none", "0"]);
function ej(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !JO.has(i) && xl(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = m_(n, s);
}
class y_ extends _y {
  constructor(t, n, r, s) {
    super(t, n, r, s, s == null ? void 0 : s.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      const u = t[l];
      if (typeof u == "string" && hy(u)) {
        const c = i_(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !LO.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = t0(s),
      a = t0(i);
    if (o !== a)
      if (Xv(o) && Xv(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) AO(t[s]) && r.push(s);
    r.length && ej(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Wo[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    (s[o] = Wo[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function tj(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const r0 = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Ns.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function nj(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function rj(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = r0(s, t),
    a = r0(i, t);
  return !o || !a ? !1 : nj(e) || (n === "spring" && r);
}
class g_ {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && UO(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !rj(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        l == null || l(Bd(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function v_(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const sj = 5;
function x_(e, t, n) {
  const r = Math.max(t - sj, 0);
  return v_(n - e(r), t - r);
}
const Lf = 0.001,
  ij = 0.01,
  oj = 10,
  aj = 0.05,
  lj = 1;
function uj({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let s,
    i,
    o = 1 - t;
  (o = js(aj, lj, o)),
    (e = js(ij, oj, Ur(e))),
    o < 1
      ? ((s = (u) => {
          const c = u * o,
            d = c * e,
            f = c - n,
            y = fp(u, o),
            p = Math.exp(-d);
          return Lf - (f / y) * p;
        }),
        (i = (u) => {
          const d = u * o * e,
            f = d * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            p = Math.exp(-d),
            v = fp(Math.pow(u, 2), o);
          return ((-s(u) + Lf > 0 ? -1 : 1) * ((f - y) * p)) / v;
        }))
      : ((s = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Lf + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = dj(s, i, a);
  if (((e = Ts(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const cj = 12;
function dj(e, t, n) {
  let r = n;
  for (let s = 1; s < cj; s++) r = r - e(r) / t(r);
  return r;
}
function fp(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const fj = ["duration", "bounce"],
  hj = ["stiffness", "damping", "mass"];
function s0(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function pj(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!s0(e, hj) && s0(e, fj)) {
    const n = uj(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function w_({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const s = e[0],
    i = e[e.length - 1],
    o = { done: !1, value: s },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = pj({ ...r, velocity: -Ur(r.velocity || 0) }),
    y = d || 0,
    p = l / (2 * Math.sqrt(a * u)),
    v = i - s,
    S = Ur(Math.sqrt(a / u)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (p < 1) {
    const g = fp(S, p);
    h = (_) => {
      const T = Math.exp(-p * S * _);
      return (
        i - T * (((y + p * S * v) / g) * Math.sin(g * _) + v * Math.cos(g * _))
      );
    };
  } else if (p === 1) h = (g) => i - Math.exp(-S * g) * (v + (y + S * v) * g);
  else {
    const g = S * Math.sqrt(p * p - 1);
    h = (_) => {
      const T = Math.exp(-p * S * _),
        O = Math.min(g * _, 300);
      return (
        i - (T * ((y + p * S * v) * Math.sinh(O) + g * v * Math.cosh(O))) / g
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (g) => {
      const _ = h(g);
      if (f) o.done = g >= c;
      else {
        let T = y;
        g !== 0 && (p < 1 ? (T = x_(h, g, _)) : (T = 0));
        const O = Math.abs(T) <= n,
          w = Math.abs(i - _) <= t;
        o.done = O && w;
      }
      return (o.value = o.done ? i : _), o;
    },
  };
}
function i0({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    y = (b) => (a !== void 0 && b < a) || (l !== void 0 && b > l),
    p = (b) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - b) < Math.abs(l - b)
        ? a
        : l;
  let v = n * t;
  const S = d + v,
    m = o === void 0 ? S : o(S);
  m !== S && (v = m - d);
  const h = (b) => -v * Math.exp(-b / r),
    g = (b) => m + h(b),
    _ = (b) => {
      const L = h(b),
        N = g(b);
      (f.done = Math.abs(L) <= u), (f.value = f.done ? m : N);
    };
  let T, O;
  const w = (b) => {
    y(f.value) &&
      ((T = b),
      (O = w_({
        keyframes: [f.value, p(f.value)],
        velocity: x_(g, b, f.value),
        damping: s,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    w(0),
    {
      calculatedDuration: null,
      next: (b) => {
        let L = !1;
        return (
          !O && T === void 0 && ((L = !0), _(b), w(b)),
          T !== void 0 && b >= T ? O.next(b - T) : (!L && _(b), f)
        );
      },
    }
  );
}
const S_ = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  mj = 1e-7,
  yj = 12;
function gj(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = S_(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > mj && ++a < yj);
  return o;
}
function cu(e, t, n, r) {
  if (e === t && n === r) return Wt;
  const s = (i) => gj(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : S_(s(i), t, r));
}
const vj = cu(0.42, 0, 1, 1),
  __ = cu(0, 0, 0.58, 1),
  E_ = cu(0.42, 0, 0.58, 1),
  xj = (e) => Array.isArray(e) && typeof e[0] != "number",
  P_ = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  b_ = (e) => (t) => 1 - e(1 - t),
  by = (e) => 1 - Math.sin(Math.acos(e)),
  T_ = b_(by),
  wj = P_(by),
  k_ = cu(0.33, 1.53, 0.69, 0.99),
  Ty = b_(k_),
  Sj = P_(Ty),
  _j = (e) =>
    (e *= 2) < 1 ? 0.5 * Ty(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  o0 = {
    linear: Wt,
    easeIn: vj,
    easeInOut: E_,
    easeOut: __,
    circIn: by,
    circInOut: wj,
    circOut: T_,
    backIn: Ty,
    backInOut: Sj,
    backOut: k_,
    anticipate: _j,
  },
  a0 = (e) => {
    if (Array.isArray(e)) {
      ap(e.length === 4);
      const [t, n, r, s] = e;
      return cu(t, n, r, s);
    } else if (typeof e == "string") return ap(o0[e] !== void 0), o0[e];
    return e;
  },
  wl = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  tt = (e, t, n) => e + (t - e) * n;
function Mf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ej({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (s = Mf(l, a, e + 1 / 3)), (i = Mf(l, a, e)), (o = Mf(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const If = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  Pj = [cp, si, co],
  bj = (e) => Pj.find((t) => t.test(e));
function l0(e) {
  const t = bj(e);
  let n = t.parse(e);
  return t === co && (n = Ej(n)), n;
}
const u0 = (e, t) => {
    const n = l0(e),
      r = l0(t),
      s = { ...n };
    return (i) => (
      (s.red = If(n.red, r.red, i)),
      (s.green = If(n.green, r.green, i)),
      (s.blue = If(n.blue, r.blue, i)),
      (s.alpha = tt(n.alpha, r.alpha, i)),
      si.transform(s)
    );
  },
  hp = new Set(["none", "hidden"]);
function Tj(e, t) {
  return hp.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function pp(e, t) {
  return (n) => (n > 0 ? t : e);
}
function kj(e, t) {
  return (n) => tt(e, t, n);
}
function ky(e) {
  return typeof e == "number"
    ? kj
    : typeof e == "string"
    ? hy(e)
      ? pp
      : zt.test(e)
      ? u0
      : Oj
    : Array.isArray(e)
    ? C_
    : typeof e == "object"
    ? zt.test(e)
      ? u0
      : Cj
    : pp;
}
function C_(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => ky(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Cj(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = ky(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Rj(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), s[o]++;
  }
  return r;
}
const Oj = (e, t) => {
  const n = Ns.createTransformer(t),
    r = xl(e),
    s = xl(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (hp.has(e) && !s.values.length) || (hp.has(t) && !r.values.length)
      ? Tj(e, t)
      : Vr(C_(Rj(r, s), s.values), n)
    : pp(e, t);
};
function R_(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? tt(e, t, n)
    : ky(e)(e, t);
}
function jj(e, t, n) {
  const r = [],
    s = n || R_,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Wt : t;
      a = Vr(l, a);
    }
    r.push(a);
  }
  return r;
}
function Aj(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((ap(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = jj(t, r, s),
    a = o.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = wl(e[c], e[c + 1], u);
      return o[c](d);
    };
  return n ? (u) => l(js(e[0], e[i - 1], u)) : l;
}
function Nj(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = wl(0, t, r);
    e.push(tt(n, 1, s));
  }
}
function Dj(e) {
  const t = [0];
  return Nj(t, e.length - 1), t;
}
function Lj(e, t) {
  return e.map((n) => n * t);
}
function Mj(e, t) {
  return e.map(() => t || E_).splice(0, e.length - 1);
}
function Yc({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = xj(r) ? r.map(a0) : a0(r),
    i = { done: !1, value: t[0] },
    o = Lj(n && n.length === t.length ? n : Dj(t), e),
    a = Aj(o, t, { ease: Array.isArray(s) ? s : Mj(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const c0 = 2e4;
function Ij(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < c0; ) (t += n), (r = e.next(t));
  return t >= c0 ? 1 / 0 : t;
}
const Fj = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ie.update(t, !0),
      stop: () => As(t),
      now: () => (Dt.isProcessing ? Dt.timestamp : ks.now()),
    };
  },
  Vj = { decay: i0, inertia: i0, tween: Yc, keyframes: Yc, spring: w_ },
  Uj = (e) => e / 100;
class Cy extends g_ {
  constructor({ KeyframeResolver: t = _y, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: r, motionValue: s, keyframes: i } = this.options,
      o = (a, l) => this.onKeyframesResolved(a, l);
    r && s && s.owner
      ? (this.resolver = s.owner.resolveKeyframes(i, o, r, s))
      : (this.resolver = new t(i, o, r, s)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Vj[n] || Yc;
    let l, u;
    a !== Yc &&
      typeof t[0] != "number" &&
      ((l = Vr(Uj, R_(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = Ij(c));
    const { calculatedDuration: d } = c,
      f = d + s,
      y = f * (r + 1) - s;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: y,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: y,
      repeatType: p,
      repeatDelay: v,
      onUpdate: S,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let g = this.currentTime,
      _ = i;
    if (y) {
      const b = Math.min(this.currentTime, c) / d;
      let L = Math.floor(b),
        N = b % 1;
      !N && b >= 1 && (N = 1),
        N === 1 && L--,
        (L = Math.min(L, y + 1)),
        !!(L % 2) &&
          (p === "reverse"
            ? ((N = 1 - N), v && (N -= v / d))
            : p === "mirror" && (_ = o)),
        (g = js(0, 1, N) * d);
    }
    const T = h ? { done: !1, value: l[0] } : _.next(g);
    a && (T.value = a(T.value));
    let { done: O } = T;
    !h &&
      u !== null &&
      (O = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const w =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && O));
    return (
      w && s !== void 0 && (T.value = Bd(l, this.options, s)),
      S && S(T.value),
      w && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ur(t.calculatedDuration) : 0;
  }
  get time() {
    return Ur(this.currentTime);
  }
  set time(t) {
    (t = Ts(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Ur(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Fj, onPlay: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const O_ = (e) => Array.isArray(e) && typeof e[0] == "number";
function j_(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in Ry) ||
    O_(e) ||
    (Array.isArray(e) && e.every(j_))
  );
}
const ja = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ry = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ja([0, 0.65, 0.55, 1]),
    circOut: ja([0.55, 0, 1, 0.45]),
    backIn: ja([0.31, 0.01, 0.66, -0.59]),
    backOut: ja([0.33, 1.53, 0.69, 0.99]),
  };
function Bj(e) {
  return A_(e) || Ry.easeOut;
}
function A_(e) {
  if (e) return O_(e) ? ja(e) : Array.isArray(e) ? e.map(Bj) : Ry[e];
}
function zj(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = A_(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: s,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const $j = tj(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Hj = new Set(["opacity", "clipPath", "filter", "transform"]),
  Xc = 10,
  Wj = 2e4;
function Kj(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !j_(e.ease);
}
function Zj(e, t) {
  const n = new Cy({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < Wj; ) (r = n.sample(i)), s.push(r.value), (i += Xc);
  return { times: void 0, keyframes: s, duration: i - Xc, ease: "linear" };
}
class d0 extends g_ {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: s } = this.options;
    (this.resolver = new y_(s, (i, o) => this.onKeyframesResolved(i, o), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: s = 300,
      times: i,
      ease: o,
      type: a,
      motionValue: l,
      name: u,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (Kj(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: y, ...p } = this.options,
        v = Zj(t, p);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (s = v.duration),
        (i = v.times),
        (o = v.ease),
        (a = "keyframes");
    }
    const c = zj(l.owner.current, u, t, {
      ...this.options,
      duration: s,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = ks.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Bd(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: s, times: i, type: a, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Ur(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Ur(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Ts(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Wt;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return Wt;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: l,
            onUpdate: u,
            onComplete: c,
            ...d
          } = this.options,
          f = new Cy({
            ...d,
            keyframes: r,
            duration: s,
            type: i,
            ease: o,
            times: a,
            isGenerator: !0,
          }),
          y = Ts(this.time);
        l.setWithVelocity(f.sample(y - Xc).value, f.sample(y).value, Xc);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    return (
      $j() &&
      r &&
      Hj.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const Oy =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = Sy(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Ts(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    RO(a) || (c = { ...c, ...CO(e, c) }),
      c.duration && (c.duration = Ts(c.duration)),
      c.repeatDelay && (c.repeatDelay = Ts(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = Bd(c.keyframes, a);
      if (f !== void 0) {
        Ie.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return !i && d0.supports(c) ? new d0(c) : new Cy(c);
  };
function Jc(e) {
  return !!(Ht(e) && e.add);
}
function jy(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ay(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ny {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jy(this.subscriptions, t), () => Ay(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const f0 = 30,
  Qj = (e) => !isNaN(parseFloat(e));
class qj {
  constructor(t, n = {}) {
    (this.version = "11.2.6"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = ks.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = ks.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Qj(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ny());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ks.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > f0
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, f0);
    return v_(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Sl(e, t) {
  return new qj(e, t);
}
function Gj(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Sl(n));
}
function Yj(e, t) {
  const n = Ud(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = iO(i[o]);
    Gj(e, o, a);
  }
}
function Xj({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function N_(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  const u = e.getValue("willChange");
  r && (o = r);
  const c = [],
    d = s && e.animationState && e.animationState.getState()[s];
  for (const f in l) {
    const y = e.getValue(
        f,
        (i = e.latestValues[f]) !== null && i !== void 0 ? i : null
      ),
      p = l[f];
    if (p === void 0 || (d && Xj(d, f))) continue;
    const v = { delay: n, elapsed: 0, ...Sy(o || {}, f) };
    let S = !1;
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[D1];
      if (g) {
        const _ = window.HandoffAppearAnimations(g, f, y, Ie);
        _ !== null && ((v.elapsed = _), (S = !0));
      }
    }
    y.start(
      Oy(f, y, p, e.shouldReduceMotion && Ai.has(f) ? { type: !1 } : v, e, S)
    );
    const m = y.animation;
    m && (Jc(u) && (u.add(f), m.then(() => u.remove(f))), c.push(m));
  }
  return (
    a &&
      Promise.all(c).then(() => {
        Ie.update(() => {
          a && Yj(e, a);
        });
      }),
    c
  );
}
function mp(e, t, n = {}) {
  var r;
  const s = Ud(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(N_(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return Jj(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function Jj(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(eA)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          o.push(
            mp(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function eA(e, t) {
  return e.sortNodePosition(t);
}
function tA(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => mp(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = mp(e, t, n);
  else {
    const s = typeof t == "function" ? Ud(e, t, n.custom) : t;
    r = Promise.all(N_(e, s, n));
  }
  return r.then(() => {
    Ie.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const nA = [...uy].reverse(),
  rA = uy.length;
function sA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => tA(e, n, r)));
}
function iA(e) {
  let t = sA(e);
  const n = aA();
  let r = !0;
  const s = (l) => (u, c) => {
    var d;
    const f = Ud(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: p, ...v } = f;
      u = { ...u, ...v, ...p };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const u = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      f = new Set();
    let y = {},
      p = 1 / 0;
    for (let S = 0; S < rA; S++) {
      const m = nA[S],
        h = n[m],
        g = u[m] !== void 0 ? u[m] : c[m],
        _ = gl(g),
        T = m === l ? h.isActive : null;
      T === !1 && (p = S);
      let O = g === c[m] && g !== u[m] && _;
      if (
        (O && r && e.manuallyAnimateOnMount && (O = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && T === null) ||
          (!g && !h.prevProp) ||
          Id(g) ||
          typeof g == "boolean")
      )
        continue;
      let b =
          oA(h.prevProp, g) ||
          (m === l && h.isActive && !O && _) ||
          (S > p && _),
        L = !1;
      const N = Array.isArray(g) ? g : [g];
      let Z = N.reduce(s(m), {});
      T === !1 && (Z = {});
      const { prevResolvedValues: $ = {} } = h,
        q = { ...$, ...Z },
        ie = (oe) => {
          (b = !0),
            f.has(oe) && ((L = !0), f.delete(oe)),
            (h.needsAnimating[oe] = !0);
          const we = e.getValue(oe);
          we && (we.liveStyle = !1);
        };
      for (const oe in q) {
        const we = Z[oe],
          Te = $[oe];
        if (y.hasOwnProperty(oe)) continue;
        let I = !1;
        ip(we) && ip(Te) ? (I = !n_(we, Te)) : (I = we !== Te),
          I
            ? we != null
              ? ie(oe)
              : f.add(oe)
            : we !== void 0 && f.has(oe)
            ? ie(oe)
            : (h.protectedKeys[oe] = !0);
      }
      (h.prevProp = g),
        (h.prevResolvedValues = Z),
        h.isActive && (y = { ...y, ...Z }),
        r && e.blockInitialAnimation && (b = !1),
        b &&
          (!O || L) &&
          d.push(...N.map((oe) => ({ animation: oe, options: { type: m } })));
    }
    if (f.size) {
      const S = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (S[m] = h ?? null);
      }),
        d.push({ animation: S });
    }
    let v = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var y;
        return (y = f.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function oA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !n_(t, e) : !1;
}
function Ks(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function aA() {
  return {
    animate: Ks(!0),
    whileInView: Ks(),
    whileHover: Ks(),
    whileTap: Ks(),
    whileDrag: Ks(),
    whileFocus: Ks(),
    exit: Ks(),
  };
}
class lA extends zs {
  constructor(t) {
    super(t), t.animationState || (t.animationState = iA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Id(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let uA = 0;
class cA extends zs {
  constructor() {
    super(...arguments), (this.id = uA++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const dA = { animation: { Feature: lA }, exit: { Feature: cA } },
  h0 = (e, t) => Math.abs(e - t);
function fA(e, t) {
  const n = h0(e.x, t.x),
    r = h0(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class D_ {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Vf(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          y = fA(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !y) return;
        const { point: p } = d,
          { timestamp: v } = Dt;
        this.history.push({ ...p, timestamp: v });
        const { onStart: S, onMove: m } = this.handlers;
        f ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Ff(f, this.transformPagePoint)),
          Ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: y, onSessionEnd: p, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = Vf(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ff(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && y && y(d, S), p && p(d, S);
      }),
      !Y1(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = Vd(t),
      a = Ff(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Dt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Vf(a, this.history)),
      (this.removeListeners = Vr(
        Fr(this.contextWindow, "pointermove", this.handlePointerMove),
        Fr(this.contextWindow, "pointerup", this.handlePointerUp),
        Fr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), As(this.updatePoint);
  }
}
function Ff(e, t) {
  return t ? { point: t(e.point) } : e;
}
function p0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Vf({ point: e }, t) {
  return {
    point: e,
    delta: p0(e, L_(t)),
    offset: p0(e, hA(t)),
    velocity: pA(t, 0.1),
  };
}
function hA(e) {
  return e[0];
}
function L_(e) {
  return e[e.length - 1];
}
function pA(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = L_(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Ts(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Ur(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function kn(e) {
  return e.max - e.min;
}
function yp(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function m0(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = tt(t.min, t.max, e.origin)),
    (e.scale = kn(n) / kn(t)),
    (yp(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = tt(n.min, n.max, e.origin) - e.originPoint),
    (yp(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Qa(e, t, n, r) {
  m0(e.x, t.x, n.x, r ? r.originX : void 0),
    m0(e.y, t.y, n.y, r ? r.originY : void 0);
}
function y0(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + kn(t));
}
function mA(e, t, n) {
  y0(e.x, t.x, n.x), y0(e.y, t.y, n.y);
}
function g0(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + kn(t));
}
function qa(e, t, n) {
  g0(e.x, t.x, n.x), g0(e.y, t.y, n.y);
}
function yA(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? tt(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? tt(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function v0(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function gA(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: v0(e.x, n, s), y: v0(e.y, t, r) };
}
function x0(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vA(e, t) {
  return { x: x0(e.x, t.x), y: x0(e.y, t.y) };
}
function xA(e, t) {
  let n = 0.5;
  const r = kn(e),
    s = kn(t);
  return (
    s > r
      ? (n = wl(t.min, t.max - r, e.min))
      : r > s && (n = wl(e.min, e.max - s, t.min)),
    js(0, 1, n)
  );
}
function wA(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const gp = 0.35;
function SA(e = gp) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = gp),
    { x: w0(e, "left", "right"), y: w0(e, "top", "bottom") }
  );
}
function w0(e, t, n) {
  return { min: S0(e, t), max: S0(e, n) };
}
function S0(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const _0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fo = () => ({ x: _0(), y: _0() }),
  E0 = () => ({ min: 0, max: 0 }),
  ct = () => ({ x: E0(), y: E0() });
function Dn(e) {
  return [e("x"), e("y")];
}
function M_({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function _A({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function EA(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Uf(e) {
  return e === void 0 || e === 1;
}
function vp({ scale: e, scaleX: t, scaleY: n }) {
  return !Uf(e) || !Uf(t) || !Uf(n);
}
function qs(e) {
  return (
    vp(e) ||
    I_(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function I_(e) {
  return P0(e.x) || P0(e.y);
}
function P0(e) {
  return e && e !== "0%";
}
function ed(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function b0(e, t, n, r, s) {
  return s !== void 0 && (e = ed(e, s, r)), ed(e, n, r) + t;
}
function xp(e, t = 0, n = 1, r, s) {
  (e.min = b0(e.min, t, n, r, s)), (e.max = b0(e.max, t, n, r, s));
}
function F_(e, { x: t, y: n }) {
  xp(e.x, t.translate, t.scale, t.originPoint),
    xp(e.y, n.translate, n.scale, n.originPoint);
}
function PA(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        ho(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), F_(e, o)),
      r && qs(i.latestValues) && ho(e, i.latestValues));
  }
  (t.x = T0(t.x)), (t.y = T0(t.y));
}
function T0(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function rs(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function k0(e, t, [n, r, s]) {
  const i = t[s] !== void 0 ? t[s] : 0.5,
    o = tt(e.min, e.max, i);
  xp(e, t[n], t[r], o, t.scale);
}
const bA = ["x", "scaleX", "originX"],
  TA = ["y", "scaleY", "originY"];
function ho(e, t) {
  k0(e.x, t, bA), k0(e.y, t, TA);
}
function V_(e, t) {
  return M_(EA(e.getBoundingClientRect(), t));
}
function kA(e, t, n) {
  const r = V_(e, n),
    { scroll: s } = t;
  return s && (rs(r.x, s.offset.x), rs(r.y, s.offset.y)), r;
}
const U_ = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  CA = new WeakMap();
class RA {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ct()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Vd(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: y, onDragStart: p } = this.getProps();
        if (
          f &&
          !y &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = J1(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Dn((S) => {
            let m = this.getAxisMotionValue(S).get() || 0;
            if (Er.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const g = h.layout.layoutBox[S];
                g && (m = kn(g) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[S] = m;
          }),
          p && Ie.postRender(() => p(c, d));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: y,
          onDirectionLock: p,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (y && this.currentDirection === null) {
          (this.currentDirection = OA(S)),
            this.currentDirection !== null && p && p(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          v && v(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Dn((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new D_(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: U_(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && Ie.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Ju(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = yA(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && uo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = gA(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = SA(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Dn((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = wA(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !uo(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = kA(r, s.root, this.visualElement.getTransformPagePoint());
    let o = vA(s.layout.layoutBox, i);
    if (n) {
      const a = n(_A(o));
      (this.hasMutatedConstraints = !!a), a && (o = M_(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Dn((c) => {
        if (!Ju(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          y = s ? 40 : 1e7,
          p = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, p);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Oy(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    Dn((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Dn((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Dn((n) => {
      const { drag: r } = this.getProps();
      if (!Ju(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - tt(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!uo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Dn((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = xA({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Dn((o) => {
        if (!Ju(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(tt(l, u, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    CA.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Fr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        uo(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), r();
    const o = Lr(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Dn((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = gp,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ju(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function OA(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class jA extends zs {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Wt),
      (this.removeListeners = Wt),
      (this.controls = new RA(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Wt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const C0 = (e) => (t, n) => {
  e && Ie.postRender(() => e(t, n));
};
class AA extends zs {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Wt);
  }
  onPointerDown(t) {
    this.session = new D_(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: U_(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: C0(t),
      onStart: C0(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && Ie.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Fr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function NA() {
  const e = P.useContext(Md);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    s = P.useId();
  return P.useEffect(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0];
}
const gc = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function R0(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const _a = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (ue.test(e)) e = parseFloat(e);
        else return e;
      const n = R0(e, t.target.x),
        r = R0(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  DA = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Ns.parse(e);
      if (s.length > 5) return r;
      const i = Ns.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= l);
      const u = tt(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= u),
        typeof s[3 + o] == "number" && (s[3 + o] /= u),
        i(s)
      );
    },
  };
class LA extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    LR(MA),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (gc.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              Ie.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      ly.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function B_(e) {
  const [t, n] = NA(),
    r = P.useContext(dy);
  return x.jsx(LA, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: P.useContext(I1),
    isPresent: t,
    safeToRemove: n,
  });
}
const MA = {
    borderRadius: {
      ..._a,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: _a,
    borderTopRightRadius: _a,
    borderBottomLeftRadius: _a,
    borderBottomRightRadius: _a,
    boxShadow: DA,
  },
  z_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  IA = z_.length,
  O0 = (e) => (typeof e == "string" ? parseFloat(e) : e),
  j0 = (e) => typeof e == "number" || ue.test(e);
function FA(e, t, n, r, s, i) {
  s
    ? ((e.opacity = tt(0, n.opacity !== void 0 ? n.opacity : 1, VA(r))),
      (e.opacityExit = tt(t.opacity !== void 0 ? t.opacity : 1, 0, UA(r))))
    : i &&
      (e.opacity = tt(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < IA; o++) {
    const a = `border${z_[o]}Radius`;
    let l = A0(t, a),
      u = A0(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || j0(l) === j0(u)
        ? ((e[a] = Math.max(tt(O0(l), O0(u), r), 0)),
          (Er.test(u) || Er.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = tt(t.rotate || 0, n.rotate || 0, r));
}
function A0(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const VA = $_(0, 0.5, T_),
  UA = $_(0.5, 0.95, Wt);
function $_(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(wl(e, t, r)));
}
function N0(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function An(e, t) {
  N0(e.x, t.x), N0(e.y, t.y);
}
function D0(e, t, n, r, s) {
  return (
    (e -= t), (e = ed(e, 1 / n, r)), s !== void 0 && (e = ed(e, 1 / s, r)), e
  );
}
function BA(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (Er.test(t) &&
      ((t = parseFloat(t)), (t = tt(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = tt(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = D0(e.min, t, n, a, s)),
    (e.max = D0(e.max, t, n, a, s));
}
function L0(e, t, [n, r, s], i, o) {
  BA(e, t[n], t[r], t[s], t.scale, i, o);
}
const zA = ["x", "scaleX", "originX"],
  $A = ["y", "scaleY", "originY"];
function M0(e, t, n, r) {
  L0(e.x, t, zA, n ? n.x : void 0, r ? r.x : void 0),
    L0(e.y, t, $A, n ? n.y : void 0, r ? r.y : void 0);
}
function I0(e) {
  return e.translate === 0 && e.scale === 1;
}
function H_(e) {
  return I0(e.x) && I0(e.y);
}
function HA(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function W_(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function F0(e) {
  return kn(e.x) / kn(e.y);
}
class WA {
  constructor() {
    this.members = [];
  }
  add(t) {
    jy(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Ay(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function V0(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: y,
      skewY: p,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      y && (r += `skewX(${y}deg) `),
      p && (r += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const KA = (e, t) => e.depth - t.depth;
class ZA {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    jy(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Ay(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(KA),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function QA(e, t) {
  const n = ks.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (As(r), e(i - t));
    };
  return Ie.read(r, !0), () => As(r);
}
function qA(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function GA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function YA(e, t, n) {
  const r = Ht(e) ? e : Sl(e);
  return r.start(Oy("", r, t, n)), r.animation;
}
const Bf = ["", "X", "Y", "Z"],
  XA = { visibility: "hidden" },
  U0 = 1e3;
let JA = 0;
const Gs = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function zf(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function K_({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = JA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Gs.totalNodes =
              Gs.resolvedTargetDeltas =
              Gs.recalculatedProjection =
                0),
            this.nodes.forEach(nN),
            this.nodes.forEach(aN),
            this.nodes.forEach(lN),
            this.nodes.forEach(rN),
            qA(Gs);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ZA());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ny()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = GA(o)), (this.instance = o);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = QA(f, 250)),
            gc.hasAnimatedSinceResize &&
              ((gc.hasAnimatedSinceResize = !1), this.nodes.forEach(z0));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: y,
              layout: p,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || hN,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !W_(this.targetLayout, p) || y,
                g = !f && y;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const _ = { ...Sy(v, "layout"), onPlay: S, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((_.delay = 0), (_.type = !1)),
                  this.startAnimation(_);
              } else
                f || z0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = p;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        As(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes && this.nodes.forEach(uN),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(B0);
        return;
      }
      this.isUpdating || this.nodes.forEach(iN),
        (this.isUpdating = !1),
        this.nodes.forEach(oN),
        this.nodes.forEach(eN),
        this.nodes.forEach(tN),
        this.clearAllSnapshots();
      const a = ks.now();
      (Dt.delta = js(0, 1e3 / 60, a - Dt.timestamp)),
        (Dt.timestamp = a),
        (Dt.isProcessing = !0),
        jf.update.process(Dt),
        jf.preRender.process(Dt),
        jf.render.process(Dt),
        (Dt.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ly.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(sN), this.sharedNodes.forEach(cN);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ct()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!s) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !H_(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || qs(this.latestValues) || c) &&
        (s(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        pN(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return ct();
      const a = o.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (rs(a.x, l.offset.x), rs(a.y, l.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = ct();
      An(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            An(a, o);
            const { scroll: f } = this.root;
            f && (rs(a.x, -f.offset.x), rs(a.y, -f.offset.y));
          }
          rs(a.x, c.offset.x), rs(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = ct();
      An(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          ho(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          qs(c.latestValues) && ho(l, c.latestValues);
      }
      return qs(this.latestValues) && ho(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = ct();
      An(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !qs(u.latestValues)) continue;
        vp(u.latestValues) && u.updateSnapshot();
        const c = ct(),
          d = u.measurePageBox();
        An(c, d),
          M0(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return qs(this.latestValues) && M0(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Dt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Dt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ct()),
              (this.relativeTargetOrigin = ct()),
              qa(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              An(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ct()), (this.targetWithTransforms = ct())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                mA(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : An(this.target, this.layout.layoutBox),
                F_(this.target, this.targetDelta))
              : An(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const y = this.getClosestProjectingParent();
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = y),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ct()),
                (this.relativeTargetOrigin = ct()),
                qa(this.relativeTargetOrigin, this.target, y.target),
                An(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Gs.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          vp(this.parent.latestValues) ||
          I_(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Dt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      An(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        y = this.treeScale.y;
      PA(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ct()));
      const { target: p } = a;
      if (!p) {
        this.projectionTransform &&
          ((this.projectionDelta = fo()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = fo()),
        (this.projectionDeltaWithTransform = fo()));
      const v = this.projectionTransform;
      Qa(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
        (this.projectionTransform = V0(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== f ||
          this.treeScale.y !== y) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", p)),
        Gs.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = fo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ct(),
        y = l ? l.source : void 0,
        p = this.layout ? this.layout.source : void 0,
        v = y !== p,
        S = this.getStack(),
        m = !S || S.members.length <= 1,
        h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(fN));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (_) => {
        const T = _ / 1e3;
        $0(d.x, o.x, T),
          $0(d.y, o.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (qa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            dN(this.relativeTarget, this.relativeTargetOrigin, f, T),
            g && HA(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ct()),
            An(g, this.relativeTarget)),
          v &&
            ((this.animationValues = c), FA(c, u, this.latestValues, T, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (As(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ie.update(() => {
          (gc.hasAnimatedSinceResize = !0),
            (this.currentAnimation = YA(0, U0, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(U0),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Z_(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ct();
          const d = kn(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = kn(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        An(a, l),
          ho(a, c),
          Qa(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new WA()),
        this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && zf("z", o, u, this.animationValues);
      for (let c = 0; c < Bf.length; c++)
        zf(`rotate${Bf[c]}`, o, u, this.animationValues),
          zf(`skew${Bf[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return XA;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = mc(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = mc(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !qs(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = V0(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: y, y: p } = this.projectionDelta;
      (u.transformOrigin = `${y.origin * 100}% ${p.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in qc) {
        if (f[v] === void 0) continue;
        const { correct: S, applyTo: m } = qc[v],
          h = u.transform === "none" ? f[v] : S(f[v], d);
        if (m) {
          const g = m.length;
          for (let _ = 0; _ < g; _++) u[m[_]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? mc(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(B0),
        this.root.sharedNodes.clear();
    }
  };
}
function eN(e) {
  e.updateLayout();
}
function tN(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? Dn((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = kn(f);
          (f.min = r[d].min), (f.max = f.min + y);
        })
      : Z_(i, n.layoutBox, r) &&
        Dn((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            y = kn(r[d]);
          (f.max = f.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + y));
        });
    const a = fo();
    Qa(a, r, n.layoutBox);
    const l = fo();
    o ? Qa(l, e.applyTransform(s, !0), n.measuredBox) : Qa(l, r, n.layoutBox);
    const u = !H_(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: y } = d;
        if (f && y) {
          const p = ct();
          qa(p, n.layoutBox, f.layoutBox);
          const v = ct();
          qa(v, r, y.layoutBox),
            W_(p, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = p),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function nN(e) {
  Gs.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function rN(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function sN(e) {
  e.clearSnapshot();
}
function B0(e) {
  e.clearMeasurements();
}
function iN(e) {
  e.isLayoutDirty = !1;
}
function oN(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function z0(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function aN(e) {
  e.resolveTargetDelta();
}
function lN(e) {
  e.calcProjection();
}
function uN(e) {
  e.resetSkewAndRotation();
}
function cN(e) {
  e.removeLeadSnapshot();
}
function $0(e, t, n) {
  (e.translate = tt(t.translate, 0, n)),
    (e.scale = tt(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function H0(e, t, n, r) {
  (e.min = tt(t.min, n.min, r)), (e.max = tt(t.max, n.max, r));
}
function dN(e, t, n, r) {
  H0(e.x, t.x, n.x, r), H0(e.y, t.y, n.y, r);
}
function fN(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const hN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  W0 = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  K0 = W0("applewebkit/") && !W0("chrome/") ? Math.round : Wt;
function Z0(e) {
  (e.min = K0(e.min)), (e.max = K0(e.max));
}
function pN(e) {
  Z0(e.x), Z0(e.y);
}
function Z_(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !yp(F0(t), F0(n), 0.2))
  );
}
const mN = K_({
    attachResizeListener: (e, t) => Lr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  $f = { current: void 0 },
  Q_ = K_({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!$f.current) {
        const e = new mN({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), ($f.current = e);
      }
      return $f.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  yN = {
    pan: { Feature: AA },
    drag: { Feature: jA, ProjectionNode: Q_, MeasureLayout: B_ },
  },
  wp = { current: null },
  q_ = { current: !1 };
function gN() {
  if (((q_.current = !0), !!iy))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (wp.current = e.matches);
      e.addListener(t), t();
    } else wp.current = !1;
}
function vN(e, t, n) {
  const { willChange: r } = t;
  for (const s in t) {
    const i = t[s],
      o = n[s];
    if (Ht(i)) e.addValue(s, i), Jc(r) && r.add(s);
    else if (Ht(o)) e.addValue(s, Sl(i, { owner: e })), Jc(r) && r.remove(s);
    else if (o !== i)
      if (e.hasValue(s)) {
        const a = e.getValue(s);
        a.liveStyle === !0 ? a.jump(i) : a.hasAnimated || a.set(i);
      } else {
        const a = e.getStaticValue(s);
        e.addValue(s, Sl(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const s in n) t[s] === void 0 && e.removeValue(s);
  return t;
}
const Q0 = new WeakMap(),
  xN = [...a_, zt, Ns],
  wN = (e) => xN.find(o_(e)),
  G_ = Object.keys(vl),
  SN = G_.length,
  q0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  _N = cy.length;
function Y_(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Y_(e.parent);
}
class EN {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.resolveKeyframes = (f, y, p, v) =>
      new this.KeyframeResolver(f, y, p, v, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = _y),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Ie.render(this.render, !1, !0));
    const { latestValues: l, renderState: u } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Fd(n)),
      (this.isVariantNode = M1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const y = d[f];
      l[f] !== void 0 && Ht(y) && (y.set(l[f], !1), Jc(c) && c.add(f));
    }
  }
  mount(t) {
    (this.current = t),
      Q0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      q_.current || gN(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : wp.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    Q0.delete(this.current),
      this.projection && this.projection.unmount(),
      As(this.notifyUpdate),
      As(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features)
      (t = this.features[n]) === null || t === void 0 || t.unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Ai.has(t),
      s = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && Ie.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      s(), i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, s, i) {
    let o, a;
    for (let l = 0; l < SN; l++) {
      const u = G_[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: y,
        } = vl[u];
      f && (o = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          y && (a = y));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: y,
      } = n;
      (this.projection = new o(
        this.latestValues,
        n["data-framer-portal-id"] ? void 0 : Y_(this.parent)
      )),
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || (d && uo(d)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: i,
          layoutScroll: f,
          layoutRoot: y,
        });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ct();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < q0.length; r++) {
      const s = q0[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = vN(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < _N; r++) {
      const s = cy[r],
        i = this.props[s];
      (gl(i) || i === !1) && (n[s] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Sl(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (s_(s) || r_(s))
          ? (s = parseFloat(s))
          : !wN(s) && Ns.test(n) && (s = m_(t, n)),
        this.setBaseTarget(t, Ht(s) ? s.get() : s)),
      Ht(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = wy(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ht(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ny()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class X_ extends EN {
  constructor() {
    super(...arguments), (this.KeyframeResolver = y_);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function PN(e) {
  return window.getComputedStyle(e);
}
class bN extends X_ {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Ai.has(n)) {
      const r = Py(n);
      return (r && r.default) || 0;
    } else {
      const r = PN(t),
        s = (U1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return V_(t, n);
  }
  build(t, n, r, s) {
    my(t, n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xy(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ht(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, s) {
    W1(t, n, r, s);
  }
}
class TN extends X_ {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ai.has(n)) {
      const r = Py(n);
      return (r && r.default) || 0;
    }
    return (n = K1.has(n) ? n : ay(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ct();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Q1(t, n, r);
  }
  build(t, n, r, s) {
    gy(t, n, r, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    Z1(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = vy(t.tagName)), super.mount(t);
  }
}
const kN = (e, t) =>
    fy(e)
      ? new TN(t, { enableHardwareAcceleration: !1 })
      : new bN(t, {
          allowProjection: e !== P.Fragment,
          enableHardwareAcceleration: !0,
        }),
  CN = { layout: { ProjectionNode: Q_, MeasureLayout: B_ } },
  RN = { ...dA, ...EO, ...yN, ...CN },
  Cs = NR((e, t) => cO(e, t, RN, kN));
function J_() {
  const e = P.useRef(!1);
  return (
    oy(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function ON() {
  const e = J_(),
    [t, n] = P.useState(0),
    r = P.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [P.useCallback(() => Ie.postRender(r), [r]), t];
}
class jN extends P.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function AN({ children: e, isPresent: t }) {
  const n = P.useId(),
    r = P.useRef(null),
    s = P.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = P.useContext(sy);
  return (
    P.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = s.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    x.jsx(jN, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: P.cloneElement(e, { ref: r }),
    })
  );
}
const Hf = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
}) => {
  const a = q1(NN),
    l = P.useId(),
    u = P.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      i ? [Math.random()] : [n]
    );
  return (
    P.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [n]),
    P.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = x.jsx(AN, { isPresent: n, children: e })),
    x.jsx(Md.Provider, { value: u, children: e })
  );
};
function NN() {
  return new Map();
}
function DN(e) {
  return P.useEffect(() => () => e(), []);
}
const Ys = (e) => e.key || "";
function LN(e, t) {
  e.forEach((n) => {
    const r = Ys(n);
    t.set(r, n);
  });
}
function MN(e) {
  const t = [];
  return (
    P.Children.forEach(e, (n) => {
      P.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const td = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: s,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
  }) => {
    const a = P.useContext(dy).forceRender || ON()[0],
      l = J_(),
      u = MN(e);
    let c = u;
    const d = P.useRef(new Map()).current,
      f = P.useRef(c),
      y = P.useRef(new Map()).current,
      p = P.useRef(!0);
    if (
      (oy(() => {
        (p.current = !1), LN(u, y), (f.current = c);
      }),
      DN(() => {
        (p.current = !0), y.clear(), d.clear();
      }),
      p.current)
    )
      return x.jsx(x.Fragment, {
        children: c.map((h) =>
          x.jsx(
            Hf,
            {
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: i,
              mode: o,
              children: h,
            },
            Ys(h)
          )
        ),
      });
    c = [...c];
    const v = f.current.map(Ys),
      S = u.map(Ys),
      m = v.length;
    for (let h = 0; h < m; h++) {
      const g = v[h];
      S.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
    }
    return (
      o === "wait" && d.size && (c = []),
      d.forEach((h, g) => {
        if (S.indexOf(g) !== -1) return;
        const _ = y.get(g);
        if (!_) return;
        const T = v.indexOf(g);
        let O = h;
        if (!O) {
          const w = () => {
            d.delete(g);
            const b = Array.from(y.keys()).filter((L) => !S.includes(L));
            if (
              (b.forEach((L) => y.delete(L)),
              (f.current = u.filter((L) => {
                const N = Ys(L);
                return N === g || b.includes(N);
              })),
              !d.size)
            ) {
              if (l.current === !1) return;
              a(), r && r();
            }
          };
          (O = x.jsx(
            Hf,
            {
              isPresent: !1,
              onExitComplete: w,
              custom: t,
              presenceAffectsLayout: i,
              mode: o,
              children: _,
            },
            Ys(_)
          )),
            d.set(g, O);
        }
        c.splice(T, 0, O);
      }),
      (c = c.map((h) => {
        const g = h.key;
        return d.has(g)
          ? h
          : x.jsx(
              Hf,
              { isPresent: !0, presenceAffectsLayout: i, mode: o, children: h },
              Ys(h)
            );
      })),
      x.jsx(x.Fragment, {
        children: d.size ? c : c.map((h) => P.cloneElement(h)),
      })
    );
  },
  G0 = ["en", "tm", "ru", "tr", "ch"],
  IN = ({ scrollY: e }) => {
    const [t, n] = P.useState(!1),
      [r, s] = P.useState(G0[0]);
    P.useEffect(() => {
      n(!1);
    }, [e]);
    const i = (o) => {
      s(o), n((a) => !a);
    };
    return x.jsxs("div", {
      className: "flex flex-col gap-[4px] items-center relative",
      children: [
        x.jsx("div", {
          className: je(
            "border group flex items-center justify-center py-[2px] px-[3px] ",
            { "border-black": e, "border-white": !e }
          ),
          children: x.jsx("span", {
            className: je(
              "uppercase text-[14px] leading-[19.6px] tracking-[-3%]",
              { "text-black": e }
            ),
            children: r,
          }),
        }),
        x.jsx(td, {
          children:
            t &&
            x.jsx(Cs.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.3 },
              className: je(
                "absolute top-8 left-0 flex flex-col gap-[4px] items-center origin-top overflow-hidden",
                { "bg-white/100": e, "bg-white/0": !e }
              ),
              children: G0.filter((o) => o !== r).map((o, a) =>
                x.jsx(
                  Cs.div,
                  {
                    initial: { y: "-100%", opacity: 0 },
                    animate: { y: "0%", opacity: 1 },
                    exit: { y: "-100%", opacity: 0 },
                    transition: { delay: a * 0.1 + 0.1 },
                    className:
                      "flex items-center justify-center py-[2px] px-[3px] cursor-pointer origin-top",
                    onClick: () => i(o),
                    children: x.jsx("span", {
                      className: je(
                        "uppercase text-[14px] leading-[19.6px] tracking-[-3%]",
                        { "text-white": !e, "text-black": e }
                      ),
                      children: o,
                    }),
                  },
                  ry()
                )
              ),
            }),
        }),
      ],
    });
  };
var FN = typeof Xs == "object" && Xs && Xs.Object === Object && Xs,
  VN = typeof self == "object" && self && self.Object === Object && self;
FN || VN || Function("return this")();
var eE = typeof window < "u" ? P.useLayoutEffect : P.useEffect;
function Sp(e, t, n, r) {
  const s = P.useRef(t);
  eE(() => {
    s.current = t;
  }, [t]),
    P.useEffect(() => {
      const i = (n == null ? void 0 : n.current) ?? window;
      if (!(i && i.addEventListener)) return;
      const o = (a) => {
        s.current(a);
      };
      return (
        i.addEventListener(e, o, r),
        () => {
          i.removeEventListener(e, o, r);
        }
      );
    }, [e, n, r]);
}
var UN = typeof window > "u";
function Dy(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (UN ? t : window.matchMedia(a).matches),
    [s, i] = P.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    eE(() => {
      const a = window.matchMedia(e);
      return (
        o(),
        a.addListener ? a.addListener(o) : a.addEventListener("change", o),
        () => {
          a.removeListener
            ? a.removeListener(o)
            : a.removeEventListener("change", o);
        }
      );
    }, [e]),
    s
  );
}
function BN(e) {
  const [t, n] = P.useState(!1),
    r = () => {
      n(!0);
    },
    s = () => {
      n(!1);
    };
  return Sp("mouseenter", r, e), Sp("mouseleave", s, e), t;
}
function zN(e, t, n = "mousedown", r = {}) {
  Sp(
    n,
    (s) => {
      const i = s.target;
      !i ||
        !i.isConnected ||
        (Array.isArray(e)
          ? e
              .filter((o) => !!o.current)
              .every((o) => o.current && !o.current.contains(i))
          : e.current && e.current.contains(i));
    },
    void 0,
    r
  );
}
var $N = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Y0 = (e) => {
    let t;
    const n = new Set(),
      r = (c, d) => {
        const f = typeof c == "function" ? c(t) : c;
        if (!Object.is(f, t)) {
          const y = t;
          (t =
            d ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((p) => p(t, y));
        }
      },
      s = () => t,
      l = {
        setState: r,
        getState: s,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
        destroy: () => {
          ($N ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, s, l));
    return l;
  },
  HN = (e) => (e ? Y0(e) : Y0);
var tE = { exports: {} },
  nE = {},
  rE = { exports: {} },
  sE = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ko = P;
function WN(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var KN = typeof Object.is == "function" ? Object.is : WN,
  ZN = Ko.useState,
  QN = Ko.useEffect,
  qN = Ko.useLayoutEffect,
  GN = Ko.useDebugValue;
function YN(e, t) {
  var n = t(),
    r = ZN({ inst: { value: n, getSnapshot: t } }),
    s = r[0].inst,
    i = r[1];
  return (
    qN(
      function () {
        (s.value = n), (s.getSnapshot = t), Wf(s) && i({ inst: s });
      },
      [e, n, t]
    ),
    QN(
      function () {
        return (
          Wf(s) && i({ inst: s }),
          e(function () {
            Wf(s) && i({ inst: s });
          })
        );
      },
      [e]
    ),
    GN(n),
    n
  );
}
function Wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !KN(e, n);
  } catch {
    return !0;
  }
}
function XN(e, t) {
  return t();
}
var JN =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? XN
    : YN;
sE.useSyncExternalStore =
  Ko.useSyncExternalStore !== void 0 ? Ko.useSyncExternalStore : JN;
rE.exports = sE;
var eD = rE.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd = P,
  tD = eD;
function nD(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rD = typeof Object.is == "function" ? Object.is : nD,
  sD = tD.useSyncExternalStore,
  iD = zd.useRef,
  oD = zd.useEffect,
  aD = zd.useMemo,
  lD = zd.useDebugValue;
nE.useSyncExternalStoreWithSelector = function (e, t, n, r, s) {
  var i = iD(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = aD(
    function () {
      function l(y) {
        if (!u) {
          if (((u = !0), (c = y), (y = r(y)), s !== void 0 && o.hasValue)) {
            var p = o.value;
            if (s(p, y)) return (d = p);
          }
          return (d = y);
        }
        if (((p = d), rD(c, y))) return p;
        var v = r(y);
        return s !== void 0 && s(p, v) ? p : ((c = y), (d = v));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, s]
  );
  var a = sD(e, i[0], i[1]);
  return (
    oD(
      function () {
        (o.hasValue = !0), (o.value = a);
      },
      [a]
    ),
    lD(a),
    a
  );
};
tE.exports = nE;
var uD = tE.exports;
const cD = Xo(uD);
var iE = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: dD } = en,
  { useSyncExternalStoreWithSelector: fD } = cD;
let X0 = !1;
const hD = (e) => e;
function pD(e, t = hD, n) {
  (iE ? "production" : void 0) !== "production" &&
    n &&
    !X0 &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (X0 = !0));
  const r = fD(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return dD(r), r;
}
const J0 = (e) => {
    (iE ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? HN(e) : e,
      n = (r, s) => pD(t, r, s);
    return Object.assign(n, t), n;
  },
  oE = (e) => (e ? J0(e) : J0),
  _p = oE((e) => ({
    burgerIsOpen: !1,
    setBurgerIsOpen: (t) => e((n) => ({ burgerIsOpen: (n.burgerIsOpen = t) })),
  })),
  mD = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/works" },
    { title: "Services", link: "/services" },
    { title: "Contacts", link: "/contact" },
  ],
  yD = () => {
    P.useEffect(
      () => (
        document.body.classList.add("overflow-y-hidden"),
        () => document.body.classList.remove("overflow-y-hidden")
      ),
      []
    );
    const e = _p((t) => t.setBurgerIsOpen);
    return x.jsx(Cs.div, {
      initial: { x: "100%" },
      animate: { x: 0 },
      transition: { duration: 0.3 },
      exit: { x: "100%" },
      className:
        "min-h-[100vh] pt-16 w-full h-full fixed top-[88px] overflow-y-auto bottom-0 bg-eerieBlack",
      children: x.jsx("div", {
        className: "flex flex-col items-center gap-4",
        children: mD.map((t, n) =>
          x.jsx(
            er,
            {
              onClick: () => e(!1),
              to: t.link,
              className:
                "text-[40px] text-white uppercase leading-[120%] font-medium",
              children: t.title,
            },
            n
          )
        ),
      }),
    });
  };
var du = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Zo = typeof window > "u" || "Deno" in globalThis;
function In() {}
function gD(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ep(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function aE(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function _o(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ex(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Ly(o, t.options)) return !1;
    } else if (!El(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (s && s !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function tx(e, t) {
  const { exact: n, status: r, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (_l(t.options.mutationKey) !== _l(i)) return !1;
    } else if (!El(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (s && !s(t)));
}
function Ly(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || _l)(e);
}
function _l(e) {
  return JSON.stringify(e, (t, n) =>
    bp(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, s) => ((r[s] = n[s]), r), {})
      : n
  );
}
function El(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !El(e[n], t[n]))
    : !1;
}
function lE(e, t) {
  if (e === t) return e;
  const n = nx(e) && nx(t);
  if (n || (bp(e) && bp(t))) {
    const r = n ? e : Object.keys(e),
      s = r.length,
      i = n ? t : Object.keys(t),
      o = i.length,
      a = n ? [] : {};
    let l = 0;
    for (let u = 0; u < o; u++) {
      const c = n ? u : i[u];
      ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((a[c] = void 0), l++)
        : ((a[c] = lE(e[c], t[c])), a[c] === e[c] && e[c] !== void 0 && l++);
    }
    return s === o && l === s ? e : a;
  }
  return t;
}
function Pp(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function nx(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function bp(e) {
  if (!rx(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !rx(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function rx(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function vD(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Tp(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? lE(e, t)
    : t;
}
function xD(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function wD(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var uE = Symbol(),
  cE = (e, t) =>
    !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === uE
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn,
  oi,
  us,
  Po,
  Gx,
  SD =
    ((Gx = class extends du {
      constructor() {
        super();
        ae(this, oi, void 0);
        ae(this, us, void 0);
        ae(this, Po, void 0);
        te(this, Po, (t) => {
          if (!Zo && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, us) || this.setEventListener(k(this, Po));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, us)) == null || t.call(this), te(this, us, void 0));
      }
      setEventListener(t) {
        var n;
        te(this, Po, t),
          (n = k(this, us)) == null || n.call(this),
          te(
            this,
            us,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        k(this, oi) !== t && (te(this, oi, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof k(this, oi) == "boolean"
          ? k(this, oi)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (oi = new WeakMap()),
    (us = new WeakMap()),
    (Po = new WeakMap()),
    Gx),
  My = new SD(),
  bo,
  cs,
  To,
  Yx,
  _D =
    ((Yx = class extends du {
      constructor() {
        super();
        ae(this, bo, !0);
        ae(this, cs, void 0);
        ae(this, To, void 0);
        te(this, To, (t) => {
          if (!Zo && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        k(this, cs) || this.setEventListener(k(this, To));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = k(this, cs)) == null || t.call(this), te(this, cs, void 0));
      }
      setEventListener(t) {
        var n;
        te(this, To, t),
          (n = k(this, cs)) == null || n.call(this),
          te(this, cs, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        k(this, bo) !== t &&
          (te(this, bo, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return k(this, bo);
      }
    }),
    (bo = new WeakMap()),
    (cs = new WeakMap()),
    (To = new WeakMap()),
    Yx),
  nd = new _D();
function ED(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function dE(e) {
  return (e ?? "online") === "online" ? nd.isOnline() : !0;
}
var fE = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Kf(e) {
  return e instanceof fE;
}
function hE(e) {
  let t = !1,
    n = 0,
    r = !1,
    s,
    i,
    o;
  const a = new Promise((m, h) => {
      (i = m), (o = h);
    }),
    l = (m) => {
      var h;
      r || (p(new fE(m)), (h = e.abort) == null || h.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () =>
      My.isFocused() &&
      (e.networkMode === "always" || nd.isOnline()) &&
      e.canRun(),
    f = () => dE(e.networkMode) && e.canRun(),
    y = (m) => {
      var h;
      r ||
        ((r = !0),
        (h = e.onSuccess) == null || h.call(e, m),
        s == null || s(),
        i(m));
    },
    p = (m) => {
      var h;
      r ||
        ((r = !0),
        (h = e.onError) == null || h.call(e, m),
        s == null || s(),
        o(m));
    },
    v = () =>
      new Promise((m) => {
        var h;
        (s = (g) => {
          (r || d()) && m(g);
        }),
          (h = e.onPause) == null || h.call(e);
      }).then(() => {
        var m;
        (s = void 0), r || (m = e.onContinue) == null || m.call(e);
      }),
    S = () => {
      if (r) return;
      let m;
      const h = n === 0 ? e.initialPromise : void 0;
      try {
        m = h ?? e.fn();
      } catch (g) {
        m = Promise.reject(g);
      }
      Promise.resolve(m)
        .then(y)
        .catch((g) => {
          var b;
          if (r) return;
          const _ = e.retry ?? (Zo ? 0 : 3),
            T = e.retryDelay ?? ED,
            O = typeof T == "function" ? T(n, g) : T,
            w =
              _ === !0 ||
              (typeof _ == "number" && n < _) ||
              (typeof _ == "function" && _(n, g));
          if (t || !w) {
            p(g);
            return;
          }
          n++,
            (b = e.onFail) == null || b.call(e, n, g),
            vD(O)
              .then(() => (d() ? void 0 : v()))
              .then(() => {
                t ? p(g) : S();
              });
        });
    };
  return {
    promise: a,
    cancel: l,
    continue: () => (s == null || s(), a),
    cancelRetry: u,
    continueRetry: c,
    canStart: f,
    start: () => (f() ? S() : v().then(S), a),
  };
}
function PD() {
  let e = [],
    t = 0,
    n = (f) => {
      f();
    },
    r = (f) => {
      f();
    },
    s = (f) => setTimeout(f, 0);
  const i = (f) => {
      s = f;
    },
    o = (f) => {
      let y;
      t++;
      try {
        y = f();
      } finally {
        t--, t || u();
      }
      return y;
    },
    a = (f) => {
      t
        ? e.push(f)
        : s(() => {
            n(f);
          });
    },
    l =
      (f) =>
      (...y) => {
        a(() => {
          f(...y);
        });
      },
    u = () => {
      const f = e;
      (e = []),
        f.length &&
          s(() => {
            r(() => {
              f.forEach((y) => {
                n(y);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: l,
    schedule: a,
    setNotifyFunction: (f) => {
      n = f;
    },
    setBatchNotifyFunction: (f) => {
      r = f;
    },
    setScheduler: i,
  };
}
var Lt = PD(),
  ai,
  Xx,
  pE =
    ((Xx = class {
      constructor() {
        ae(this, ai, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Ep(this.gcTime) &&
            te(
              this,
              ai,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Zo ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        k(this, ai) && (clearTimeout(k(this, ai)), te(this, ai, void 0));
      }
    }),
    (ai = new WeakMap()),
    Xx),
  ko,
  Co,
  Ln,
  Bt,
  $l,
  li,
  qn,
  Rr,
  Jx,
  bD =
    ((Jx = class extends pE {
      constructor(t) {
        super();
        ae(this, qn);
        ae(this, ko, void 0);
        ae(this, Co, void 0);
        ae(this, Ln, void 0);
        ae(this, Bt, void 0);
        ae(this, $l, void 0);
        ae(this, li, void 0);
        te(this, li, !1),
          te(this, $l, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          te(this, Ln, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          te(this, ko, t.state || TD(this.options)),
          (this.state = k(this, ko)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = k(this, Bt)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...k(this, $l), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          k(this, Ln).remove(this);
      }
      setData(t, n) {
        const r = Tp(this.state.data, t, this.options);
        return (
          ke(this, qn, Rr).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        ke(this, qn, Rr).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, s;
        const n = (r = k(this, Bt)) == null ? void 0 : r.promise;
        return (
          (s = k(this, Bt)) == null || s.cancel(t),
          n ? n.then(In).catch(In) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(k(this, ko));
      }
      isActive() {
        return this.observers.some((t) => Jn(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !aE(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Bt)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = k(this, Bt)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          k(this, Ln).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (k(this, Bt) &&
              (k(this, li)
                ? k(this, Bt).cancel({ revert: !0 })
                : k(this, Bt).cancelRetry()),
            this.scheduleGc()),
          k(this, Ln).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          ke(this, qn, Rr).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var l, u, c;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (k(this, Bt))
            return k(this, Bt).continueRetry(), k(this, Bt).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const d = this.observers.find((f) => f.options.queryFn);
          d && this.setOptions(d.options);
        }
        const r = new AbortController(),
          s = (d) => {
            Object.defineProperty(d, "signal", {
              enumerable: !0,
              get: () => (te(this, li, !0), r.signal),
            });
          },
          i = () => {
            const d = cE(this.options, n),
              f = { queryKey: this.queryKey, meta: this.meta };
            return (
              s(f),
              te(this, li, !1),
              this.options.persister ? this.options.persister(d, f, this) : d(f)
            );
          },
          o = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        s(o),
          (l = this.options.behavior) == null || l.onFetch(o, this),
          te(this, Co, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = o.fetchOptions) == null ? void 0 : u.meta)) &&
            ke(this, qn, Rr).call(this, {
              type: "fetch",
              meta: (c = o.fetchOptions) == null ? void 0 : c.meta,
            });
        const a = (d) => {
          var f, y, p, v;
          (Kf(d) && d.silent) ||
            ke(this, qn, Rr).call(this, { type: "error", error: d }),
            Kf(d) ||
              ((y = (f = k(this, Ln).config).onError) == null ||
                y.call(f, d, this),
              (v = (p = k(this, Ln).config).onSettled) == null ||
                v.call(p, this.state.data, d, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          te(
            this,
            Bt,
            hE({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: o.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (d) => {
                var f, y, p, v;
                if (d === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(d),
                  (y = (f = k(this, Ln).config).onSuccess) == null ||
                    y.call(f, d, this),
                  (v = (p = k(this, Ln).config).onSettled) == null ||
                    v.call(p, d, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: a,
              onFail: (d, f) => {
                ke(this, qn, Rr).call(this, {
                  type: "failed",
                  failureCount: d,
                  error: f,
                });
              },
              onPause: () => {
                ke(this, qn, Rr).call(this, { type: "pause" });
              },
              onContinue: () => {
                ke(this, qn, Rr).call(this, { type: "continue" });
              },
              retry: o.options.retry,
              retryDelay: o.options.retryDelay,
              networkMode: o.options.networkMode,
              canRun: () => !0,
            })
          ),
          k(this, Bt).start()
        );
      }
    }),
    (ko = new WeakMap()),
    (Co = new WeakMap()),
    (Ln = new WeakMap()),
    (Bt = new WeakMap()),
    ($l = new WeakMap()),
    (li = new WeakMap()),
    (qn = new WeakSet()),
    (Rr = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...mE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const s = t.error;
            return Kf(s) && s.revert && k(this, Co)
              ? { ...k(this, Co), fetchStatus: "idle" }
              : {
                  ...r,
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Lt.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            k(this, Ln).notify({ query: this, type: "updated", action: t });
        });
    }),
    Jx);
function mE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: dE(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function TD(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var mr,
  ew,
  kD =
    ((ew = class extends du {
      constructor(t = {}) {
        super();
        ae(this, mr, void 0);
        (this.config = t), te(this, mr, new Map());
      }
      build(t, n, r) {
        const s = n.queryKey,
          i = n.queryHash ?? Ly(s, n);
        let o = this.get(i);
        return (
          o ||
            ((o = new bD({
              cache: this,
              queryKey: s,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(t) {
        k(this, mr).has(t.queryHash) ||
          (k(this, mr).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = k(this, mr).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && k(this, mr).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Lt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return k(this, mr).get(t);
      }
      getAll() {
        return [...k(this, mr).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ex(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => ex(t, r)) : n;
      }
      notify(t) {
        Lt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Lt.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Lt.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (mr = new WeakMap()),
    ew),
  yr,
  Xt,
  ui,
  gr,
  es,
  tw,
  CD =
    ((tw = class extends pE {
      constructor(t) {
        super();
        ae(this, gr);
        ae(this, yr, void 0);
        ae(this, Xt, void 0);
        ae(this, ui, void 0);
        (this.mutationId = t.mutationId),
          te(this, Xt, t.mutationCache),
          te(this, yr, []),
          (this.state = t.state || RD()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        k(this, yr).includes(t) ||
          (k(this, yr).push(t),
          this.clearGcTimeout(),
          k(this, Xt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        te(
          this,
          yr,
          k(this, yr).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          k(this, Xt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        k(this, yr).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : k(this, Xt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = k(this, ui)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var s, i, o, a, l, u, c, d, f, y, p, v, S, m, h, g, _, T, O, w;
        te(
          this,
          ui,
          hE({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (b, L) => {
              ke(this, gr, es).call(this, {
                type: "failed",
                failureCount: b,
                error: L,
              });
            },
            onPause: () => {
              ke(this, gr, es).call(this, { type: "pause" });
            },
            onContinue: () => {
              ke(this, gr, es).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => k(this, Xt).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !k(this, ui).canStart();
        try {
          if (!n) {
            ke(this, gr, es).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (s = k(this, Xt).config).onMutate) == null
                ? void 0
                : i.call(s, t, this));
            const L = await ((a = (o = this.options).onMutate) == null
              ? void 0
              : a.call(o, t));
            L !== this.state.context &&
              ke(this, gr, es).call(this, {
                type: "pending",
                context: L,
                variables: t,
                isPaused: r,
              });
          }
          const b = await k(this, ui).start();
          return (
            await ((u = (l = k(this, Xt).config).onSuccess) == null
              ? void 0
              : u.call(l, b, t, this.state.context, this)),
            await ((d = (c = this.options).onSuccess) == null
              ? void 0
              : d.call(c, b, t, this.state.context)),
            await ((y = (f = k(this, Xt).config).onSettled) == null
              ? void 0
              : y.call(
                  f,
                  b,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((v = (p = this.options).onSettled) == null
              ? void 0
              : v.call(p, b, null, t, this.state.context)),
            ke(this, gr, es).call(this, { type: "success", data: b }),
            b
          );
        } catch (b) {
          try {
            throw (
              (await ((m = (S = k(this, Xt).config).onError) == null
                ? void 0
                : m.call(S, b, t, this.state.context, this)),
              await ((g = (h = this.options).onError) == null
                ? void 0
                : g.call(h, b, t, this.state.context)),
              await ((T = (_ = k(this, Xt).config).onSettled) == null
                ? void 0
                : T.call(
                    _,
                    void 0,
                    b,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((w = (O = this.options).onSettled) == null
                ? void 0
                : w.call(O, void 0, b, t, this.state.context)),
              b)
            );
          } finally {
            ke(this, gr, es).call(this, { type: "error", error: b });
          }
        } finally {
          k(this, Xt).runNext(this);
        }
      }
    }),
    (yr = new WeakMap()),
    (Xt = new WeakMap()),
    (ui = new WeakMap()),
    (gr = new WeakSet()),
    (es = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Lt.batch(() => {
          k(this, yr).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            k(this, Xt).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    tw);
function RD() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var wn,
  Hl,
  nw,
  OD =
    ((nw = class extends du {
      constructor(t = {}) {
        super();
        ae(this, wn, void 0);
        ae(this, Hl, void 0);
        (this.config = t), te(this, wn, new Map()), te(this, Hl, Date.now());
      }
      build(t, n, r) {
        const s = new CD({
          mutationCache: this,
          mutationId: ++Au(this, Hl)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(s), s;
      }
      add(t) {
        const n = ec(t),
          r = k(this, wn).get(n) ?? [];
        r.push(t),
          k(this, wn).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = ec(t);
        if (k(this, wn).has(n)) {
          const s =
            (r = k(this, wn).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          s && (s.length === 0 ? k(this, wn).delete(n) : k(this, wn).set(n, s));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = k(this, wn).get(ec(t))) == null
            ? void 0
            : r.find((s) => s.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = k(this, wn).get(ec(t))) == null
            ? void 0
            : r.find((s) => s !== t && s.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Lt.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...k(this, wn).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => tx(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => tx(t, n));
      }
      notify(t) {
        Lt.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Lt.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(In)))
        );
      }
    }),
    (wn = new WeakMap()),
    (Hl = new WeakMap()),
    nw);
function ec(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function jD(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var p, v, S, m, h;
        const s = t.options,
          i =
            (S =
              (v = (p = t.fetchOptions) == null ? void 0 : p.meta) == null
                ? void 0
                : v.fetchMore) == null
              ? void 0
              : S.direction,
          o = ((m = t.state.data) == null ? void 0 : m.pages) || [],
          a = ((h = t.state.data) == null ? void 0 : h.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const c = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener("abort", () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          d = cE(t.options, t.fetchOptions),
          f = async (g, _, T) => {
            if (u) return Promise.reject();
            if (_ == null && g.pages.length) return Promise.resolve(g);
            const O = {
              queryKey: t.queryKey,
              pageParam: _,
              direction: T ? "backward" : "forward",
              meta: t.options.meta,
            };
            c(O);
            const w = await d(O),
              { maxPages: b } = t.options,
              L = T ? wD : xD;
            return {
              pages: L(g.pages, w, b),
              pageParams: L(g.pageParams, _, b),
            };
          };
        let y;
        if (i && o.length) {
          const g = i === "backward",
            _ = g ? AD : sx,
            T = { pages: o, pageParams: a },
            O = _(s, T);
          y = await f(T, O, g);
        } else {
          y = await f(l, a[0] ?? s.initialPageParam);
          const g = e ?? o.length;
          for (let _ = 1; _ < g; _++) {
            const T = sx(s, y);
            y = await f(y, T);
          }
        }
        return y;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var s, i;
            return (i = (s = t.options).persister) == null
              ? void 0
              : i.call(
                  s,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function sx(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(t[r], t, n[r], n);
}
function AD(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null
    ? void 0
    : r.call(e, t[0], t, n[0], n);
}
var it,
  ds,
  fs,
  Ro,
  Oo,
  hs,
  jo,
  Ao,
  rw,
  ND =
    ((rw = class {
      constructor(e = {}) {
        ae(this, it, void 0);
        ae(this, ds, void 0);
        ae(this, fs, void 0);
        ae(this, Ro, void 0);
        ae(this, Oo, void 0);
        ae(this, hs, void 0);
        ae(this, jo, void 0);
        ae(this, Ao, void 0);
        te(this, it, e.queryCache || new kD()),
          te(this, ds, e.mutationCache || new OD()),
          te(this, fs, e.defaultOptions || {}),
          te(this, Ro, new Map()),
          te(this, Oo, new Map()),
          te(this, hs, 0);
      }
      mount() {
        Au(this, hs)._++,
          k(this, hs) === 1 &&
            (te(
              this,
              jo,
              My.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, it).onFocus());
              })
            ),
            te(
              this,
              Ao,
              nd.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), k(this, it).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Au(this, hs)._--,
          k(this, hs) === 0 &&
            ((e = k(this, jo)) == null || e.call(this),
            te(this, jo, void 0),
            (t = k(this, Ao)) == null || t.call(this),
            te(this, Ao, void 0));
      }
      isFetching(e) {
        return k(this, it).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return k(this, ds).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, it).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = k(this, it).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(_o(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return k(this, it)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          s = k(this, it).get(r.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = gD(t, i);
        if (o !== void 0)
          return k(this, it)
            .build(this, r)
            .setData(o, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Lt.batch(() =>
          k(this, it)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = k(this, it).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = k(this, it);
        Lt.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = k(this, it),
          r = { type: "active", ...e };
        return Lt.batch(
          () => (
            n.findAll(e).forEach((s) => {
              s.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Lt.batch(() =>
            k(this, it)
              .findAll(e)
              .map((s) => s.cancel(n))
          );
        return Promise.all(r).then(In).catch(In);
      }
      invalidateQueries(e = {}, t = {}) {
        return Lt.batch(() => {
          if (
            (k(this, it)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Lt.batch(() =>
            k(this, it)
              .findAll(e)
              .filter((s) => !s.isDisabled())
              .map((s) => {
                let i = s.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(In)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(In);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = k(this, it).build(this, t);
        return n.isStaleByTime(_o(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(In).catch(In);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = jD(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(In).catch(In);
      }
      resumePausedMutations() {
        return nd.isOnline()
          ? k(this, ds).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return k(this, it);
      }
      getMutationCache() {
        return k(this, ds);
      }
      getDefaultOptions() {
        return k(this, fs);
      }
      setDefaultOptions(e) {
        te(this, fs, e);
      }
      setQueryDefaults(e, t) {
        k(this, Ro).set(_l(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...k(this, Ro).values()];
        let n = {};
        return (
          t.forEach((r) => {
            El(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        k(this, Oo).set(_l(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...k(this, Oo).values()];
        let n = {};
        return (
          t.forEach((r) => {
            El(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...k(this, fs).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ly(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === uE && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...k(this, fs).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        k(this, it).clear(), k(this, ds).clear();
      }
    }),
    (it = new WeakMap()),
    (ds = new WeakMap()),
    (fs = new WeakMap()),
    (Ro = new WeakMap()),
    (Oo = new WeakMap()),
    (hs = new WeakMap()),
    (jo = new WeakMap()),
    (Ao = new WeakMap()),
    rw),
  dn,
  Ce,
  Wl,
  Jt,
  ci,
  No,
  vr,
  Kl,
  Do,
  Lo,
  di,
  fi,
  ps,
  Mo,
  hi,
  Aa,
  Zl,
  kp,
  Ql,
  Cp,
  ql,
  Rp,
  Gl,
  Op,
  Yl,
  jp,
  Xl,
  Ap,
  Jl,
  Np,
  gd,
  yE,
  sw,
  DD =
    ((sw = class extends du {
      constructor(t, n) {
        super();
        ae(this, hi);
        ae(this, Zl);
        ae(this, Ql);
        ae(this, ql);
        ae(this, Gl);
        ae(this, Yl);
        ae(this, Xl);
        ae(this, Jl);
        ae(this, gd);
        ae(this, dn, void 0);
        ae(this, Ce, void 0);
        ae(this, Wl, void 0);
        ae(this, Jt, void 0);
        ae(this, ci, void 0);
        ae(this, No, void 0);
        ae(this, vr, void 0);
        ae(this, Kl, void 0);
        ae(this, Do, void 0);
        ae(this, Lo, void 0);
        ae(this, di, void 0);
        ae(this, fi, void 0);
        ae(this, ps, void 0);
        ae(this, Mo, new Set());
        (this.options = n),
          te(this, dn, t),
          te(this, vr, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (k(this, Ce).addObserver(this),
          ix(k(this, Ce), this.options)
            ? ke(this, hi, Aa).call(this)
            : this.updateResult(),
          ke(this, Gl, Op).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Dp(k(this, Ce), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Dp(k(this, Ce), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          ke(this, Yl, jp).call(this),
          ke(this, Xl, Ap).call(this),
          k(this, Ce).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          s = k(this, Ce);
        if (
          ((this.options = k(this, dn).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof Jn(this.options.enabled, k(this, Ce)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        ke(this, Jl, Np).call(this),
          k(this, Ce).setOptions(this.options),
          r._defaulted &&
            !Pp(this.options, r) &&
            k(this, dn)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: k(this, Ce),
                observer: this,
              });
        const i = this.hasListeners();
        i && ox(k(this, Ce), s, this.options, r) && ke(this, hi, Aa).call(this),
          this.updateResult(n),
          i &&
            (k(this, Ce) !== s ||
              Jn(this.options.enabled, k(this, Ce)) !==
                Jn(r.enabled, k(this, Ce)) ||
              _o(this.options.staleTime, k(this, Ce)) !==
                _o(r.staleTime, k(this, Ce))) &&
            ke(this, Zl, kp).call(this);
        const o = ke(this, Ql, Cp).call(this);
        i &&
          (k(this, Ce) !== s ||
            Jn(this.options.enabled, k(this, Ce)) !==
              Jn(r.enabled, k(this, Ce)) ||
            o !== k(this, ps)) &&
          ke(this, ql, Rp).call(this, o);
      }
      getOptimisticResult(t) {
        const n = k(this, dn).getQueryCache().build(k(this, dn), t),
          r = this.createResult(n, t);
        return (
          MD(this, r) &&
            (te(this, Jt, r),
            te(this, No, this.options),
            te(this, ci, k(this, Ce).state)),
          r
        );
      }
      getCurrentResult() {
        return k(this, Jt);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((s) => {
            Object.defineProperty(r, s, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(s), n == null || n(s), t[s]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        k(this, Mo).add(t);
      }
      getCurrentQuery() {
        return k(this, Ce);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = k(this, dn).defaultQueryOptions(t),
          r = k(this, dn).getQueryCache().build(k(this, dn), n);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, n))
        );
      }
      fetch(t) {
        return ke(this, hi, Aa)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), k(this, Jt)));
      }
      createResult(t, n) {
        var w;
        const r = k(this, Ce),
          s = this.options,
          i = k(this, Jt),
          o = k(this, ci),
          a = k(this, No),
          u = t !== r ? t.state : k(this, Wl),
          { state: c } = t;
        let d = { ...c },
          f = !1,
          y;
        if (n._optimisticResults) {
          const b = this.hasListeners(),
            L = !b && ix(t, n),
            N = b && ox(t, r, n, s);
          (L || N) && (d = { ...d, ...mE(c.data, t.options) }),
            n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
        }
        let { error: p, errorUpdatedAt: v, status: S } = d;
        if (n.select && d.data !== void 0)
          if (
            i &&
            d.data === (o == null ? void 0 : o.data) &&
            n.select === k(this, Kl)
          )
            y = k(this, Do);
          else
            try {
              te(this, Kl, n.select),
                (y = n.select(d.data)),
                (y = Tp(i == null ? void 0 : i.data, y, n)),
                te(this, Do, y),
                te(this, vr, null);
            } catch (b) {
              te(this, vr, b);
            }
        else y = d.data;
        if (n.placeholderData !== void 0 && y === void 0 && S === "pending") {
          let b;
          if (
            i != null &&
            i.isPlaceholderData &&
            n.placeholderData === (a == null ? void 0 : a.placeholderData)
          )
            b = i.data;
          else if (
            ((b =
              typeof n.placeholderData == "function"
                ? n.placeholderData(
                    (w = k(this, Lo)) == null ? void 0 : w.state.data,
                    k(this, Lo)
                  )
                : n.placeholderData),
            n.select && b !== void 0)
          )
            try {
              (b = n.select(b)), te(this, vr, null);
            } catch (L) {
              te(this, vr, L);
            }
          b !== void 0 &&
            ((S = "success"),
            (y = Tp(i == null ? void 0 : i.data, b, n)),
            (f = !0));
        }
        k(this, vr) &&
          ((p = k(this, vr)),
          (y = k(this, Do)),
          (v = Date.now()),
          (S = "error"));
        const m = d.fetchStatus === "fetching",
          h = S === "pending",
          g = S === "error",
          _ = h && m,
          T = y !== void 0;
        return {
          status: S,
          fetchStatus: d.fetchStatus,
          isPending: h,
          isSuccess: S === "success",
          isError: g,
          isInitialLoading: _,
          isLoading: _,
          data: y,
          dataUpdatedAt: d.dataUpdatedAt,
          error: p,
          errorUpdatedAt: v,
          failureCount: d.fetchFailureCount,
          failureReason: d.fetchFailureReason,
          errorUpdateCount: d.errorUpdateCount,
          isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
          isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount ||
            d.errorUpdateCount > u.errorUpdateCount,
          isFetching: m,
          isRefetching: m && !h,
          isLoadingError: g && !T,
          isPaused: d.fetchStatus === "paused",
          isPlaceholderData: f,
          isRefetchError: g && T,
          isStale: Iy(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = k(this, Jt),
          r = this.createResult(k(this, Ce), this.options);
        if (
          (te(this, ci, k(this, Ce).state),
          te(this, No, this.options),
          k(this, ci).data !== void 0 && te(this, Lo, k(this, Ce)),
          Pp(r, n))
        )
          return;
        te(this, Jt, r);
        const s = {},
          i = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: o } = this.options,
              a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !k(this, Mo).size)) return !0;
            const l = new Set(a ?? k(this, Mo));
            return (
              this.options.throwOnError && l.add("error"),
              Object.keys(k(this, Jt)).some((u) => {
                const c = u;
                return k(this, Jt)[c] !== n[c] && l.has(c);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0),
          ke(this, gd, yE).call(this, { ...s, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && ke(this, Gl, Op).call(this);
      }
    }),
    (dn = new WeakMap()),
    (Ce = new WeakMap()),
    (Wl = new WeakMap()),
    (Jt = new WeakMap()),
    (ci = new WeakMap()),
    (No = new WeakMap()),
    (vr = new WeakMap()),
    (Kl = new WeakMap()),
    (Do = new WeakMap()),
    (Lo = new WeakMap()),
    (di = new WeakMap()),
    (fi = new WeakMap()),
    (ps = new WeakMap()),
    (Mo = new WeakMap()),
    (hi = new WeakSet()),
    (Aa = function (t) {
      ke(this, Jl, Np).call(this);
      let n = k(this, Ce).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(In)), n;
    }),
    (Zl = new WeakSet()),
    (kp = function () {
      ke(this, Yl, jp).call(this);
      const t = _o(this.options.staleTime, k(this, Ce));
      if (Zo || k(this, Jt).isStale || !Ep(t)) return;
      const r = aE(k(this, Jt).dataUpdatedAt, t) + 1;
      te(
        this,
        di,
        setTimeout(() => {
          k(this, Jt).isStale || this.updateResult();
        }, r)
      );
    }),
    (Ql = new WeakSet()),
    (Cp = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(k(this, Ce))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (ql = new WeakSet()),
    (Rp = function (t) {
      ke(this, Xl, Ap).call(this),
        te(this, ps, t),
        !(
          Zo ||
          Jn(this.options.enabled, k(this, Ce)) === !1 ||
          !Ep(k(this, ps)) ||
          k(this, ps) === 0
        ) &&
          te(
            this,
            fi,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || My.isFocused()) &&
                ke(this, hi, Aa).call(this);
            }, k(this, ps))
          );
    }),
    (Gl = new WeakSet()),
    (Op = function () {
      ke(this, Zl, kp).call(this),
        ke(this, ql, Rp).call(this, ke(this, Ql, Cp).call(this));
    }),
    (Yl = new WeakSet()),
    (jp = function () {
      k(this, di) && (clearTimeout(k(this, di)), te(this, di, void 0));
    }),
    (Xl = new WeakSet()),
    (Ap = function () {
      k(this, fi) && (clearInterval(k(this, fi)), te(this, fi, void 0));
    }),
    (Jl = new WeakSet()),
    (Np = function () {
      const t = k(this, dn).getQueryCache().build(k(this, dn), this.options);
      if (t === k(this, Ce)) return;
      const n = k(this, Ce);
      te(this, Ce, t),
        te(this, Wl, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (gd = new WeakSet()),
    (yE = function (t) {
      Lt.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(k(this, Jt));
          }),
          k(this, dn)
            .getQueryCache()
            .notify({ query: k(this, Ce), type: "observerResultsUpdated" });
      });
    }),
    sw);
function LD(e, t) {
  return (
    Jn(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function ix(e, t) {
  return LD(e, t) || (e.state.data !== void 0 && Dp(e, t, t.refetchOnMount));
}
function Dp(e, t, n) {
  if (Jn(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Iy(e, t));
  }
  return !1;
}
function ox(e, t, n, r) {
  return (
    (e !== t || Jn(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Iy(e, n)
  );
}
function Iy(e, t) {
  return Jn(t.enabled, e) !== !1 && e.isStaleByTime(_o(t.staleTime, e));
}
function MD(e, t) {
  return !Pp(e.getCurrentResult(), t);
}
var gE = P.createContext(void 0),
  ID = (e) => {
    const t = P.useContext(gE);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  FD = ({ client: e, children: t }) => (
    P.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    x.jsx(gE.Provider, { value: e, children: t })
  ),
  vE = P.createContext(!1),
  VD = () => P.useContext(vE);
vE.Provider;
function UD() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var BD = P.createContext(UD()),
  zD = () => P.useContext(BD);
function $D(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var HD = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  WD = (e) => {
    P.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  KD = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && $D(n, [e.error, r]),
  ZD = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  QD = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  qD = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function GD(e, t, n) {
  var u, c, d, f;
  const r = ID(),
    s = VD(),
    i = zD(),
    o = r.defaultQueryOptions(e);
  (c =
    (u = r.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || c.call(u, o),
    (o._optimisticResults = s ? "isRestoring" : "optimistic"),
    ZD(o),
    HD(o, i),
    WD(i);
  const [a] = P.useState(() => new t(r, o)),
    l = a.getOptimisticResult(o);
  if (
    (P.useSyncExternalStore(
      P.useCallback(
        (y) => {
          const p = s ? () => {} : a.subscribe(Lt.batchCalls(y));
          return a.updateResult(), p;
        },
        [a, s]
      ),
      () => a.getCurrentResult(),
      () => a.getCurrentResult()
    ),
    P.useEffect(() => {
      a.setOptions(o, { listeners: !1 });
    }, [o, a]),
    QD(o, l))
  )
    throw qD(o, a, i);
  if (
    KD({
      result: l,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: r.getQueryCache().get(o.queryHash),
    })
  )
    throw l.error;
  return (
    (f =
      (d = r.getDefaultOptions().queries) == null
        ? void 0
        : d._experimental_afterQuery) == null || f.call(d, o, l),
    o.notifyOnChangeProps ? l : a.trackResult(l)
  );
}
function $s(e, t) {
  return GD(e, DD);
}
function xE(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: YD } = Object.prototype,
  { getPrototypeOf: Fy } = Object,
  $d = ((e) => (t) => {
    const n = YD.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  cr = (e) => ((e = e.toLowerCase()), (t) => $d(t) === e),
  Hd = (e) => (t) => typeof t === e,
  { isArray: ia } = Array,
  Pl = Hd("undefined");
function XD(e) {
  return (
    e !== null &&
    !Pl(e) &&
    e.constructor !== null &&
    !Pl(e.constructor) &&
    $n(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const wE = cr("ArrayBuffer");
function JD(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && wE(e.buffer)),
    t
  );
}
const eL = Hd("string"),
  $n = Hd("function"),
  SE = Hd("number"),
  Wd = (e) => e !== null && typeof e == "object",
  tL = (e) => e === !0 || e === !1,
  vc = (e) => {
    if ($d(e) !== "object") return !1;
    const t = Fy(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  nL = cr("Date"),
  rL = cr("File"),
  sL = cr("Blob"),
  iL = cr("FileList"),
  oL = (e) => Wd(e) && $n(e.pipe),
  aL = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        ($n(e.append) &&
          ((t = $d(e)) === "formdata" ||
            (t === "object" &&
              $n(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  lL = cr("URLSearchParams"),
  [uL, cL, dL, fL] = ["ReadableStream", "Request", "Response", "Headers"].map(
    cr
  ),
  hL = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function fu(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), ia(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function _E(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const EE =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  PE = (e) => !Pl(e) && e !== EE;
function Lp() {
  const { caseless: e } = (PE(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && _E(t, s)) || s;
      vc(t[i]) && vc(r)
        ? (t[i] = Lp(t[i], r))
        : vc(r)
        ? (t[i] = Lp({}, r))
        : ia(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && fu(arguments[r], n);
  return t;
}
const pL = (e, t, n, { allOwnKeys: r } = {}) => (
    fu(
      t,
      (s, i) => {
        n && $n(s) ? (e[i] = xE(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  mL = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  yL = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  gL = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && Fy(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  vL = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  xL = (e) => {
    if (!e) return null;
    if (ia(e)) return e;
    let t = e.length;
    if (!SE(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  wL = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Fy(Uint8Array)),
  SL = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  _L = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  EL = cr("HTMLFormElement"),
  PL = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ax = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  bL = cr("RegExp"),
  bE = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    fu(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  TL = (e) => {
    bE(e, (t, n) => {
      if ($n(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if ($n(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  kL = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return ia(e) ? r(e) : r(String(e).split(t)), n;
  },
  CL = () => {},
  RL = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Zf = "abcdefghijklmnopqrstuvwxyz",
  lx = "0123456789",
  TE = { DIGIT: lx, ALPHA: Zf, ALPHA_DIGIT: Zf + Zf.toUpperCase() + lx },
  OL = (e = 16, t = TE.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function jL(e) {
  return !!(
    e &&
    $n(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const AL = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (Wd(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = ia(r) ? [] : {};
            return (
              fu(r, (o, a) => {
                const l = n(o, s + 1);
                !Pl(l) && (i[a] = l);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  NL = cr("AsyncFunction"),
  DL = (e) => e && (Wd(e) || $n(e)) && $n(e.then) && $n(e.catch),
  A = {
    isArray: ia,
    isArrayBuffer: wE,
    isBuffer: XD,
    isFormData: aL,
    isArrayBufferView: JD,
    isString: eL,
    isNumber: SE,
    isBoolean: tL,
    isObject: Wd,
    isPlainObject: vc,
    isReadableStream: uL,
    isRequest: cL,
    isResponse: dL,
    isHeaders: fL,
    isUndefined: Pl,
    isDate: nL,
    isFile: rL,
    isBlob: sL,
    isRegExp: bL,
    isFunction: $n,
    isStream: oL,
    isURLSearchParams: lL,
    isTypedArray: wL,
    isFileList: iL,
    forEach: fu,
    merge: Lp,
    extend: pL,
    trim: hL,
    stripBOM: mL,
    inherits: yL,
    toFlatObject: gL,
    kindOf: $d,
    kindOfTest: cr,
    endsWith: vL,
    toArray: xL,
    forEachEntry: SL,
    matchAll: _L,
    isHTMLForm: EL,
    hasOwnProperty: ax,
    hasOwnProp: ax,
    reduceDescriptors: bE,
    freezeMethods: TL,
    toObjectSet: kL,
    toCamelCase: PL,
    noop: CL,
    toFiniteNumber: RL,
    findKey: _E,
    global: EE,
    isContextDefined: PE,
    ALPHABET: TE,
    generateString: OL,
    isSpecCompliantForm: jL,
    toJSONObject: AL,
    isAsyncFn: NL,
    isThenable: DL,
  };
function me(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
A.inherits(me, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: A.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const kE = me.prototype,
  CE = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  CE[e] = { value: e };
});
Object.defineProperties(me, CE);
Object.defineProperty(kE, "isAxiosError", { value: !0 });
me.from = (e, t, n, r, s, i) => {
  const o = Object.create(kE);
  return (
    A.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    me.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const LL = null;
function Mp(e) {
  return A.isPlainObject(e) || A.isArray(e);
}
function RE(e) {
  return A.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ux(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = RE(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function ML(e) {
  return A.isArray(e) && !e.some(Mp);
}
const IL = A.toFlatObject(A, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Kd(e, t, n) {
  if (!A.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = A.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, S) {
        return !A.isUndefined(S[v]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || c,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && A.isSpecCompliantForm(t);
  if (!A.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (A.isDate(p)) return p.toISOString();
    if (!l && A.isBlob(p))
      throw new me("Blob is not supported. Use a Buffer instead.");
    return A.isArrayBuffer(p) || A.isTypedArray(p)
      ? l && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, v, S) {
    let m = p;
    if (p && !S && typeof p == "object") {
      if (A.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (A.isArray(p) && ML(p)) ||
        ((A.isFileList(p) || A.endsWith(v, "[]")) && (m = A.toArray(p)))
      )
        return (
          (v = RE(v)),
          m.forEach(function (g, _) {
            !(A.isUndefined(g) || g === null) &&
              t.append(
                o === !0 ? ux([v], _, i) : o === null ? v : v + "[]",
                u(g)
              );
          }),
          !1
        );
    }
    return Mp(p) ? !0 : (t.append(ux(S, v, i), u(p)), !1);
  }
  const d = [],
    f = Object.assign(IL, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Mp,
    });
  function y(p, v) {
    if (!A.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(p),
        A.forEach(p, function (m, h) {
          (!(A.isUndefined(m) || m === null) &&
            s.call(t, m, A.isString(h) ? h.trim() : h, v, f)) === !0 &&
            y(m, v ? v.concat(h) : [h]);
        }),
        d.pop();
    }
  }
  if (!A.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function cx(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Vy(e, t) {
  (this._pairs = []), e && Kd(e, this, t);
}
const OE = Vy.prototype;
OE.append = function (t, n) {
  this._pairs.push([t, n]);
};
OE.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, cx);
      }
    : cx;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function FL(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function jE(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || FL,
    s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = A.isURLSearchParams(t) ? t.toString() : new Vy(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class dx {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    A.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const AE = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  VL = typeof URLSearchParams < "u" ? URLSearchParams : Vy,
  UL = typeof FormData < "u" ? FormData : null,
  BL = typeof Blob < "u" ? Blob : null,
  zL = {
    isBrowser: !0,
    classes: { URLSearchParams: VL, FormData: UL, Blob: BL },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Uy = typeof window < "u" && typeof document < "u",
  $L = ((e) => Uy && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  HL =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  WL = (Uy && window.location.href) || "http://localhost",
  KL = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Uy,
        hasStandardBrowserEnv: $L,
        hasStandardBrowserWebWorkerEnv: HL,
        origin: WL,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ir = { ...KL, ...zL };
function ZL(e, t) {
  return Kd(
    e,
    new ir.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return ir.isNode && A.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function QL(e) {
  return A.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function qL(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function NE(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && A.isArray(s) ? s.length : o),
      l
        ? (A.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !A.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && A.isArray(s[o]) && (s[o] = qL(s[o])),
          !a)
    );
  }
  if (A.isFormData(e) && A.isFunction(e.entries)) {
    const n = {};
    return (
      A.forEachEntry(e, (r, s) => {
        t(QL(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function GL(e, t, n) {
  if (A.isString(e))
    try {
      return (t || JSON.parse)(e), A.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const hu = {
  transitional: AE,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = A.isObject(t);
      if ((i && A.isHTMLForm(t) && (t = new FormData(t)), A.isFormData(t)))
        return s ? JSON.stringify(NE(t)) : t;
      if (
        A.isArrayBuffer(t) ||
        A.isBuffer(t) ||
        A.isStream(t) ||
        A.isFile(t) ||
        A.isBlob(t) ||
        A.isReadableStream(t)
      )
        return t;
      if (A.isArrayBufferView(t)) return t.buffer;
      if (A.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ZL(t, this.formSerializer).toString();
        if ((a = A.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Kd(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), GL(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || hu.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (A.isResponse(t) || A.isReadableStream(t)) return t;
      if (t && A.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? me.from(a, me.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ir.classes.FormData, Blob: ir.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
A.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  hu.headers[e] = {};
});
const YL = A.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  XL = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && YL[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  fx = Symbol("internals");
function Ea(e) {
  return e && String(e).trim().toLowerCase();
}
function xc(e) {
  return e === !1 || e == null ? e : A.isArray(e) ? e.map(xc) : String(e);
}
function JL(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const eM = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qf(e, t, n, r, s) {
  if (A.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!A.isString(t))) {
    if (A.isString(r)) return t.indexOf(r) !== -1;
    if (A.isRegExp(r)) return r.test(t);
  }
}
function tM(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function nM(e, t) {
  const n = A.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class gn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, u) {
      const c = Ea(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = A.findKey(s, c);
      (!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
        (s[d || l] = xc(a));
    }
    const o = (a, l) => A.forEach(a, (u, c) => i(u, c, l));
    if (A.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (A.isString(t) && (t = t.trim()) && !eM(t)) o(XL(t), n);
    else if (A.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Ea(t)), t)) {
      const r = A.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return JL(s);
        if (A.isFunction(n)) return n.call(this, s, r);
        if (A.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Ea(t)), t)) {
      const r = A.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Qf(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = Ea(o)), o)) {
        const a = A.findKey(r, o);
        a && (!n || Qf(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return A.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Qf(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      A.forEach(this, (s, i) => {
        const o = A.findKey(r, i);
        if (o) {
          (n[o] = xc(s)), delete n[i];
          return;
        }
        const a = t ? tM(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = xc(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      A.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && A.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[fx] = this[fx] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = Ea(o);
      r[a] || (nM(s, o), (r[a] = !0));
    }
    return A.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
gn.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
A.reduceDescriptors(gn.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
A.freezeMethods(gn);
function qf(e, t) {
  const n = this || hu,
    r = t || n,
    s = gn.from(r.headers);
  let i = r.data;
  return (
    A.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function DE(e) {
  return !!(e && e.__CANCEL__);
}
function oa(e, t, n) {
  me.call(this, e ?? "canceled", me.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
A.inherits(oa, me, { __CANCEL__: !0 });
function LE(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new me(
          "Request failed with status code " + n.status,
          [me.ERR_BAD_REQUEST, me.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function rM(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function sM(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      o || (o = u), (n[s] = l), (r[s] = u);
      let d = i,
        f = 0;
      for (; d !== s; ) (f += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), u - o < t)) return;
      const y = c && u - c;
      return y ? Math.round((f * 1e3) / y) : void 0;
    }
  );
}
function iM(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let s = null;
  return function () {
    const o = this === !0,
      a = Date.now();
    if (o || a - n > r)
      return (
        s && (clearTimeout(s), (s = null)), (n = a), e.apply(null, arguments)
      );
    s ||
      (s = setTimeout(
        () => ((s = null), (n = Date.now()), e.apply(null, arguments)),
        r - (a - n)
      ));
  };
}
const rd = (e, t, n = 3) => {
    let r = 0;
    const s = sM(50, 250);
    return iM((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        u = s(l),
        c = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: u || void 0,
        estimated: u && a && c ? (a - o) / u : void 0,
        event: i,
        lengthComputable: a != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  oM = ir.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(i) {
          let o = i;
          return (
            t && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (o) {
            const a = A.isString(o) ? s(o) : o;
            return a.protocol === r.protocol && a.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  aM = ir.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          A.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            A.isString(r) && o.push("path=" + r),
            A.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function lM(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uM(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ME(e, t) {
  return e && !lM(t) ? uM(e, t) : t;
}
const hx = (e) => (e instanceof gn ? { ...e } : e);
function bi(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return A.isPlainObject(u) && A.isPlainObject(c)
      ? A.merge.call({ caseless: d }, u, c)
      : A.isPlainObject(c)
      ? A.merge({}, c)
      : A.isArray(c)
      ? c.slice()
      : c;
  }
  function s(u, c, d) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!A.isUndefined(c)) return r(void 0, c);
  }
  function o(u, c) {
    if (A.isUndefined(c)) {
      if (!A.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (u, c) => s(hx(u), hx(c), !0),
  };
  return (
    A.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || s,
        f = d(e[c], t[c], c);
      (A.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const IE = (e) => {
    const t = bi({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = gn.from(o)),
      (t.url = jE(ME(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (A.isFormData(n)) {
      if (ir.hasStandardBrowserEnv || ir.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [u, ...c] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      ir.hasStandardBrowserEnv &&
      (r && A.isFunction(r) && (r = r(t)), r || (r !== !1 && oM(t.url)))
    ) {
      const u = s && i && aM.read(i);
      u && o.set(s, u);
    }
    return t;
  },
  cM = typeof XMLHttpRequest < "u",
  dM =
    cM &&
    function (e) {
      return new Promise(function (n, r) {
        const s = IE(e);
        let i = s.data;
        const o = gn.from(s.headers).normalize();
        let { responseType: a } = s,
          l;
        function u() {
          s.cancelToken && s.cancelToken.unsubscribe(l),
            s.signal && s.signal.removeEventListener("abort", l);
        }
        let c = new XMLHttpRequest();
        c.open(s.method.toUpperCase(), s.url, !0), (c.timeout = s.timeout);
        function d() {
          if (!c) return;
          const y = gn.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            v = {
              data:
                !a || a === "text" || a === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          LE(
            function (m) {
              n(m), u();
            },
            function (m) {
              r(m), u();
            },
            v
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = d)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (c.onabort = function () {
            c &&
              (r(new me("Request aborted", me.ECONNABORTED, s, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new me("Network Error", me.ERR_NETWORK, s, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let p = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const v = s.transitional || AE;
            s.timeoutErrorMessage && (p = s.timeoutErrorMessage),
              r(
                new me(
                  p,
                  v.clarifyTimeoutError ? me.ETIMEDOUT : me.ECONNABORTED,
                  s,
                  c
                )
              ),
              (c = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            A.forEach(o.toJSON(), function (p, v) {
              c.setRequestHeader(v, p);
            }),
          A.isUndefined(s.withCredentials) ||
            (c.withCredentials = !!s.withCredentials),
          a && a !== "json" && (c.responseType = s.responseType),
          typeof s.onDownloadProgress == "function" &&
            c.addEventListener("progress", rd(s.onDownloadProgress, !0)),
          typeof s.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", rd(s.onUploadProgress)),
          (s.cancelToken || s.signal) &&
            ((l = (y) => {
              c &&
                (r(!y || y.type ? new oa(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(l),
            s.signal &&
              (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
        const f = rM(s.url);
        if (f && ir.protocols.indexOf(f) === -1) {
          r(new me("Unsupported protocol " + f + ":", me.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  fM = (e, t) => {
    let n = new AbortController(),
      r;
    const s = function (l) {
      if (!r) {
        (r = !0), o();
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof me ? u : new oa(u instanceof Error ? u.message : u)
        );
      }
    };
    let i =
      t &&
      setTimeout(() => {
        s(new me(`timeout ${t} of ms exceeded`, me.ETIMEDOUT));
      }, t);
    const o = () => {
      e &&
        (i && clearTimeout(i),
        (i = null),
        e.forEach((l) => {
          l &&
            (l.removeEventListener
              ? l.removeEventListener("abort", s)
              : l.unsubscribe(s));
        }),
        (e = null));
    };
    e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", s));
    const { signal: a } = n;
    return (
      (a.unsubscribe = o),
      [
        a,
        () => {
          i && clearTimeout(i), (i = null);
        },
      ]
    );
  },
  hM = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  pM = async function* (e, t, n) {
    for await (const r of e)
      yield* hM(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  px = (e, t, n, r, s) => {
    const i = pM(e, t, s);
    let o = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(a) {
          const { done: l, value: u } = await i.next();
          if (l) {
            a.close(), r();
            return;
          }
          let c = u.byteLength;
          n && n((o += c)), a.enqueue(new Uint8Array(u));
        },
        cancel(a) {
          return r(a), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  mx = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  Zd =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  FE = Zd && typeof ReadableStream == "function",
  Ip =
    Zd &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  mM =
    FE &&
    (() => {
      let e = !1;
      const t = new Request(ir.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  yx = 64 * 1024,
  Fp =
    FE &&
    !!(() => {
      try {
        return A.isReadableStream(new Response("").body);
      } catch {}
    })(),
  sd = { stream: Fp && ((e) => e.body) };
Zd &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !sd[t] &&
        (sd[t] = A.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new me(
                `Response type '${t}' is not supported`,
                me.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const yM = async (e) => {
    if (e == null) return 0;
    if (A.isBlob(e)) return e.size;
    if (A.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (A.isArrayBufferView(e)) return e.byteLength;
    if ((A.isURLSearchParams(e) && (e = e + ""), A.isString(e)))
      return (await Ip(e)).byteLength;
  },
  gM = async (e, t) => {
    const n = A.toFiniteNumber(e.getContentLength());
    return n ?? yM(t);
  },
  vM =
    Zd &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = IE(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [y, p] = s || i || o ? fM([s, i], o) : [],
        v,
        S;
      const m = () => {
        !v &&
          setTimeout(() => {
            y && y.unsubscribe();
          }),
          (v = !0);
      };
      let h;
      try {
        if (
          l &&
          mM &&
          n !== "get" &&
          n !== "head" &&
          (h = await gM(c, r)) !== 0
        ) {
          let O = new Request(t, { method: "POST", body: r, duplex: "half" }),
            w;
          A.isFormData(r) &&
            (w = O.headers.get("content-type")) &&
            c.setContentType(w),
            O.body && (r = px(O.body, yx, mx(h, rd(l)), null, Ip));
        }
        A.isString(d) || (d = d ? "cors" : "omit"),
          (S = new Request(t, {
            ...f,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let g = await fetch(S);
        const _ = Fp && (u === "stream" || u === "response");
        if (Fp && (a || _)) {
          const O = {};
          ["status", "statusText", "headers"].forEach((b) => {
            O[b] = g[b];
          });
          const w = A.toFiniteNumber(g.headers.get("content-length"));
          g = new Response(
            px(g.body, yx, a && mx(w, rd(a, !0)), _ && m, Ip),
            O
          );
        }
        u = u || "text";
        let T = await sd[A.findKey(sd, u) || "text"](g, e);
        return (
          !_ && m(),
          p && p(),
          await new Promise((O, w) => {
            LE(O, w, {
              data: T,
              headers: gn.from(g.headers),
              status: g.status,
              statusText: g.statusText,
              config: e,
              request: S,
            });
          })
        );
      } catch (g) {
        throw (
          (m(),
          g && g.name === "TypeError" && /fetch/i.test(g.message)
            ? Object.assign(new me("Network Error", me.ERR_NETWORK, e, S), {
                cause: g.cause || g,
              })
            : me.from(g, g && g.code, e, S))
        );
      }
    }),
  Vp = { http: LL, xhr: dM, fetch: vM };
A.forEach(Vp, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const gx = (e) => `- ${e}`,
  xM = (e) => A.isFunction(e) || e === null || e === !1,
  VE = {
    getAdapter: (e) => {
      e = A.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !xM(n) && ((r = Vp[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new me(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(gx).join(`
`)
            : " " + gx(i[0])
          : "as no adapter specified";
        throw new me(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Vp,
  };
function Gf(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new oa(null, e);
}
function vx(e) {
  return (
    Gf(e),
    (e.headers = gn.from(e.headers)),
    (e.data = qf.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    VE.getAdapter(e.adapter || hu.adapter)(e).then(
      function (r) {
        return (
          Gf(e),
          (r.data = qf.call(e, e.transformResponse, r)),
          (r.headers = gn.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          DE(r) ||
            (Gf(e),
            r &&
              r.response &&
              ((r.response.data = qf.call(e, e.transformResponse, r.response)),
              (r.response.headers = gn.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const UE = "1.7.2",
  By = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    By[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const xx = {};
By.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      UE +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new me(
        s(o, " has been removed" + (n ? " in " + n : "")),
        me.ERR_DEPRECATED
      );
    return (
      n &&
        !xx[o] &&
        ((xx[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
function wM(e, t, n) {
  if (typeof e != "object")
    throw new me("options must be an object", me.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0)
        throw new me("option " + i + " must be " + l, me.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new me("Unknown option " + i, me.ERR_BAD_OPTION);
  }
}
const Up = { assertOptions: wM, validators: By },
  Yr = Up.validators;
class gi {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new dx(), response: new dx() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = bi(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Up.assertOptions(
        r,
        {
          silentJSONParsing: Yr.transitional(Yr.boolean),
          forcedJSONParsing: Yr.transitional(Yr.boolean),
          clarifyTimeoutError: Yr.transitional(Yr.boolean),
        },
        !1
      ),
      s != null &&
        (A.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Up.assertOptions(
              s,
              { encode: Yr.function, serialize: Yr.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && A.merge(i.common, i[n.method]);
    i &&
      A.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete i[p];
        }
      ),
      (n.headers = gn.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const p = [vx.bind(this), void 0];
      for (
        p.unshift.apply(p, a),
          p.push.apply(p, u),
          f = p.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    f = a.length;
    let y = n;
    for (d = 0; d < f; ) {
      const p = a[d++],
        v = a[d++];
      try {
        y = p(y);
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      c = vx.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = bi(this.defaults, t);
    const n = ME(t.baseURL, t.url);
    return jE(n, t.params, t.paramsSerializer);
  }
}
A.forEach(["delete", "get", "head", "options"], function (t) {
  gi.prototype[t] = function (n, r) {
    return this.request(
      bi(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
A.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        bi(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (gi.prototype[t] = n()), (gi.prototype[t + "Form"] = n(!0));
});
class zy {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new oa(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new zy(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function SM(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function _M(e) {
  return A.isObject(e) && e.isAxiosError === !0;
}
const Bp = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Bp).forEach(([e, t]) => {
  Bp[t] = e;
});
function BE(e) {
  const t = new gi(e),
    n = xE(gi.prototype.request, t);
  return (
    A.extend(n, gi.prototype, t, { allOwnKeys: !0 }),
    A.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return BE(bi(e, s));
    }),
    n
  );
}
const Le = BE(hu);
Le.Axios = gi;
Le.CanceledError = oa;
Le.CancelToken = zy;
Le.isCancel = DE;
Le.VERSION = UE;
Le.toFormData = Kd;
Le.AxiosError = me;
Le.Cancel = Le.CanceledError;
Le.all = function (t) {
  return Promise.all(t);
};
Le.spread = SM;
Le.isAxiosError = _M;
Le.mergeConfig = bi;
Le.AxiosHeaders = gn;
Le.formToJSON = (e) => NE(A.isHTMLForm(e) ? new FormData(e) : e);
Le.getAdapter = VE.getAdapter;
Le.HttpStatusCode = Bp;
Le.default = Le;
class EM {
  constructor() {
    jn(this, "URL", "https://menzilmekan.com.tm/app/api/v1");
    jn(this, "getPages", async () => await Le.get(`${this.URL}/pages`));
    jn(this, "getPartners", async () => await Le.get(`${this.URL}/partners`));
    jn(this, "getCartoons", async () => await Le.get(`${this.URL}/cartoons`));
    jn(
      this,
      "getHomeServices",
      async () => await Le.get(`${this.URL}/home-services`)
    );
    jn(
      this,
      "getHomeProjects",
      async () => await Le.get(`${this.URL}/cartoons?index=true`)
    );
    jn(this, "getContact", async () => await Le.get(`${this.URL}/contact`));
    jn(
      this,
      "getMainServices",
      async () => await Le.get(`${this.URL}/mainServices`)
    );
    jn(
      this,
      "getProject",
      async (t) => await Le.get(`${this.URL}/cartoons/${t}`)
    );
    jn(this, "getContactUs", async () => await Le.get(`${this.URL}/contactUs`));
    jn(
      this,
      "postContactForm",
      async (t) =>
        await Le.post(`${this.URL}/contact`, t, {
          headers: { "Content-Type": "multipart/form-data" },
        })
    );
  }
}
const Qr = new EM(),
  aa = () => {
    const {
      isLoading: e,
      isError: t,
      isSuccess: n,
      data: r,
    } = $s({
      queryKey: ["pagesData"],
      queryFn: () => Qr.getPages(),
      select: ({ data: s }) => s.data,
    });
    return { isLoading: e, isError: t, isSuccess: n, data: r };
  },
  PM = ({ position: e }) => {
    const [t, n] = P.useState(!1),
      r = Dy("(min-width: 980px)"),
      { pathname: s } = ra(),
      i = _p((u) => u.burgerIsOpen),
      o = _p((u) => u.setBurgerIsOpen),
      a = () => {
        n(window.scrollY > 20);
      },
      { data: l } = aa();
    return (
      P.useEffect(
        () => (
          window.addEventListener("scroll", a),
          () => {
            window.removeEventListener("scroll", a);
          }
        ),
        []
      ),
      x.jsxs(Cs.header, {
        className: je("z-[1000] transition-all duration-300", {
          "fixed top-0 left-0 right-0": e === "fixed",
          "bg-white/100 text-black drop-shadow-headerShadow": t || i,
          "bg-white/0 text-white": !t,
        }),
        children: [
          x.jsx(vn, {
            children: x.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                x.jsx("div", {
                  className: "hidden tab:block w-10 h-10 bg-transparent",
                }),
                x.jsxs("nav", {
                  className: je(
                    "flex items-center justify-center uppercase text-base font-[500] leading-[130%] tracking-[3%] transition-all duration-300 ease-out",
                    {
                      "gap-[56px] py-6 tab:py-[48px]": !t,
                      "gap-8 py-6": t || i,
                    }
                  ),
                  children: [
                    x.jsx(er, {
                      to: "/",
                      className: je(
                        "hidden tab:block hover:text-gray transition-all duration-300",
                        {
                          "text-orochimaru hover:text-orochimaru":
                            s === "/" && !t,
                          "text-bauhaus hover:text-bauhaus cursor-default pointer-events-none":
                            s === "/" && t,
                          "text-white": s !== "/" && !t,
                          "text-black": s !== "/" && t,
                        }
                      ),
                      children: l ? l[0].name : "",
                    }),
                    x.jsx(er, {
                      to: "/works",
                      className: je(
                        "hidden tab:block hover:text-gray transition-all duration-300",
                        {
                          "text-orochimaru hover:text-orochimaru":
                            s === "/works" && !t,
                          "text-bauhaus hover:text-bauhaus cursor-default pointer-events-none":
                            s === "/works" && t,
                          "text-white": s !== "/works" && !t,
                          "text-black": s !== "/works" && t,
                        }
                      ),
                      children: l ? l[1].name : "",
                    }),
                    x.jsx(er, {
                      to: "/",
                      children: x.jsx(td, {
                        children:
                          t || i
                            ? x.jsx(Cs.img, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.3 },
                                src: r
                                  ? "/desktop-scroll-logo.svg"
                                  : "/scroll-logo.svg",
                                className: je({ "h-12": r }),
                                alt: "logo",
                              })
                            : x.jsx(Cs.img, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                exit: { opacity: 0 },
                                transition: { duration: 0.3 },
                                src: "/logo-text.svg",
                                alt: "logo",
                              }),
                      }),
                    }),
                    x.jsx(er, {
                      to: "/services",
                      className: je(
                        "hidden tab:block hover:text-gray transition-all duration-300",
                        {
                          "text-orochimaru hover:text-orochimaru":
                            s === "/services" && !t,
                          "text-bauhaus hover:text-bauhaus cursor-default pointer-events-none":
                            s === "/services" && t,
                          "text-white": s !== "/services" && !t,
                          "text-black ": s !== "/services" && t,
                        }
                      ),
                      children: l ? l[2].name : "",
                    }),
                    x.jsx(er, {
                      to: "/get-in-touch",
                      className: je(
                        "hidden tab:block hover:text-gray transition-all duration-300",
                        {
                          "text-orochimaru hover:text-orochimaru":
                            s === "/get-in-touch" && !t,
                          "text-bauhaus hover:text-bauhaus cursor-default pointer-events-none":
                            s === "/get-in-touch" && t,
                          "text-white": s !== "/get-in-touch" && !t,
                          "text-black": s !== "/get-in-touch" && t,
                        }
                      ),
                      children: l ? l[3].name : "",
                    }),
                  ],
                }),
                x.jsxs("div", {
                  className: "flex items-center gap-6",
                  children: [
                    !i && x.jsx(IN, { scrollY: t }),
                    x.jsxs("div", {
                      onClick: () => o(!i),
                      className:
                        "tab:hidden flex flex-col items-center justify-center gap-1 w-6 h-6 cursor-pointer",
                      children: [
                        x.jsx("div", {
                          className: je("w-[17.5px] h-[2px] rounded-[10px]", {
                            "bg-white": !t && !i,
                            "bg-black": t,
                            "bg-black/100 rotate-[45deg] translate-y-[2px]": i,
                          }),
                        }),
                        x.jsx("div", {
                          className: je("w-[17.5px] h-[2px] rounded-[10px]", {
                            "bg-white": !t && !i,
                            "bg-black": t,
                            "bg-black/100 hidden": i,
                          }),
                        }),
                        x.jsx("div", {
                          className: je("w-[17.5px] h-[2px] rounded-[10px]", {
                            "bg-white": !t && !i,
                            "bg-black": t,
                            "bg-black/100 rotate-[-45deg] translate-y-[-4px]":
                              i,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          x.jsx(td, { children: i && x.jsx(yD, {}) }),
        ],
      })
    );
  },
  wx = [
    { path: "https://www.youtube.com/@MenzilMekan", name: "youtube" },
    { path: "https://www.vimeo.com/menzilmekan", name: "v" },
    { path: "https://www.instagram.com/menzilmekan", name: "instagram" },
    {
      path: "https://www.horjuntv.com.tm/claude-monet-prints/view_channel/jOxL",
      name: "play",
    },
    {
      path: "https://www.video.belet.me/en/channel/UCJ60gX6NK_72eeVZ_mTGm6A/",
      name: "belet",
    },
    { path: "https://www.aydym.com/artist/show/468/mhb", name: "music" },
  ],
  bM = () =>
    x.jsx("footer", {
      className: "bg-summerSky py-16 section-mt text-white",
      children: x.jsx(vn, {
        children: x.jsxs("div", {
          className: "flex flex-col gap-0 sm:gap-6 ",
          children: [
            x.jsxs("div", {
              className: "flex flex-col sm:flex-row items-start w-full ",
              children: [
                x.jsx("div", {
                  className:
                    "cont mx-auto flex flex-col items-center sm:items-start sm:justify-between",
                  children: x.jsxs("div", {
                    className:
                      "flex flex-col items-center sm:flex-row text-center justify-center sm:text-left gap-[16px] w-[340px]",
                    children: [
                      x.jsx("img", {
                        src: "/footer/footer-logo.svg",
                        alt: "",
                        className: "w-[58px] mx-auto sm:mx-0 h-[88px]",
                      }),
                      x.jsxs("div", {
                        className: "flex flex-col h-[88px] justify-between",
                        children: [
                          x.jsxs("h3", {
                            className: "text-[24px] font-medium leading-[100%]",
                            children: [
                              "MenzilMekan ",
                              x.jsx("br", {}),
                              " Animation",
                            ],
                          }),
                          x.jsx("h4", {
                            className:
                              "text-[16px] hidden sm:block leading-[60%]",
                            children: "TPS Advertising Agency ©2024",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                x.jsxs("div", {
                  className:
                    "sm:flex flex-row-reverse items-center gap-6 w-full hidden",
                  children: [
                    x.jsx("div", {
                      className:
                        "flex flex-col justify-between items-end gap-[8px]",
                      children: x.jsxs("div", {
                        className: "",
                        children: [
                          x.jsx("h4", {
                            className:
                              "text-[24px] font-medium mb-2 leading-[23px] tracking-[6%] uppercase w-full",
                            children: "2 000 000",
                          }),
                          x.jsx("h4", {
                            className:
                              "text-[16px] leading-[16px] tracking-[6%] uppercase w-full",
                            children: "Views on all Platform",
                          }),
                        ],
                      }),
                    }),
                    x.jsx("div", {
                      className:
                        "tab:flex hidden flex-col justify-between items-end",
                      children: x.jsx("div", {
                        className: "flex gap-3 h-fit items-end",
                        children: wx.map((e, t) =>
                          x.jsx(
                            "a",
                            {
                              target: "_blank",
                              href: e.path,
                              className:
                                "block size-10 hover:scale-110 transition duration-200",
                              children: x.jsx("img", {
                                src: "/footer/" + e.name + ".svg",
                                alt: "youtube",
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            x.jsxs("div", {
              className:
                "tab:hidden flex flex-col items-center gap-6 sm:gap-8 justify-center",
              children: [
                x.jsx("div", {
                  className: "flex gap-2",
                  children: wx.map((e, t) =>
                    x.jsx(
                      "a",
                      {
                        target: "_blank",
                        href: e.path,
                        className:
                          "block size-8 hover:scale-110 transition duration-200",
                        children: x.jsx("img", {
                          src: "/footer/" + e.name + ".svg",
                          alt: "youtube",
                        }),
                      },
                      t
                    )
                  ),
                }),
                x.jsx("h4", {
                  className: "text-[16px]",
                  children: "TPS Advertising Agency ©2024",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  TM = () =>
    x.jsx(x.Fragment, {
      children: x.jsxs("div", {
        className: "min-h-screen overflow-x-hidden main",
        children: [
          x.jsx(PM, { position: "fixed" }),
          x.jsx(QC, {}),
          x.jsx(bM, {}),
        ],
      }),
    }),
  zp = oE((e) => ({
    activeVideo: !1,
    setActiveVideo: (t) => e((n) => ({ activeVideo: (n.activeVideo = t) })),
  })),
  $p = ({ text: e, type: t, children: n }) =>
    x.jsx("button", {
      className: je(
        " tracking-[1%] text-center rounded-full transition-all",
        {
          "uppercase text-[18px] px-[32px] py-[16px] leading-[24.3px] bg-summerSky border-[1px] border-white font-medium text-white  transition-all duration-300 ease-out button-primary":
            t === "primary",
        },
        {
          "uppercase text-[16px] px-[24px] py-[12px] leading-[21.6px] border border-white":
            t === "secondary",
        }
      ),
      children: x.jsxs("span", { className: "z-10", children: [e, n] }),
    }),
  kM = ({}) =>
    x.jsx("a", {
      onClick: () => window.scrollTo,
      className: "chevrons-container cursor-pointer",
      children: x.jsxs("div", {
        className: "relative w-full h-full",
        children: [
          x.jsx("div", {
            className: "chevron chevron--one ",
            children: x.jsx("img", {
              src: "/hero/shape-blue.svg",
              alt: "blue shape",
            }),
          }),
          x.jsx("div", {
            className: "chevron chevron--two ",
            children: x.jsx("img", {
              src: "/hero/shape-green.svg",
              alt: "green shape",
            }),
          }),
          x.jsx("div", {
            className: "chevron chevron--three ",
            children: x.jsx("img", {
              src: "/hero/shape-blue.svg",
              alt: "blue shape",
            }),
          }),
        ],
      }),
    }),
  CM = "modulepreload",
  RM = function (e) {
    return "/" + e;
  },
  Sx = {},
  cn = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        o =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      s = Promise.all(
        n.map((a) => {
          if (((a = RM(a)), a in Sx)) return;
          Sx[a] = !0;
          const l = a.endsWith(".css"),
            u = l ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${a}"]${u}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = l ? "stylesheet" : CM),
            l || ((c.as = "script"), (c.crossOrigin = "")),
            (c.href = a),
            o && c.setAttribute("nonce", o),
            document.head.appendChild(c),
            l)
          )
            return new Promise((d, f) => {
              c.addEventListener("load", d),
                c.addEventListener("error", () =>
                  f(new Error(`Unable to preload CSS for ${a}`))
                );
            });
        })
      );
    }
    return s
      .then(() => t())
      .catch((i) => {
        const o = new Event("vite:preloadError", { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented))
          throw i;
      });
  };
var OM = function (t, n, r) {
  var s = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("script");
  typeof n == "function" && ((r = n), (n = {})),
    (n = n || {}),
    (r = r || function () {}),
    (i.type = n.type || "text/javascript"),
    (i.charset = n.charset || "utf8"),
    (i.async = "async" in n ? !!n.async : !0),
    (i.src = t),
    n.attrs && jM(i, n.attrs),
    n.text && (i.text = "" + n.text);
  var o = "onload" in i ? _x : AM;
  o(i, r), i.onload || _x(i, r), s.appendChild(i);
};
function jM(e, t) {
  for (var n in t) e.setAttribute(n, t[n]);
}
function _x(e, t) {
  (e.onload = function () {
    (this.onerror = this.onload = null), t(null, e);
  }),
    (e.onerror = function () {
      (this.onerror = this.onload = null),
        t(new Error("Failed to load " + this.src), e);
    });
}
function AM(e, t) {
  e.onreadystatechange = function () {
    (this.readyState != "complete" && this.readyState != "loaded") ||
      ((this.onreadystatechange = null), t(null, e));
  };
}
var NM = function (t) {
  return DM(t) && !LM(t);
};
function DM(e) {
  return !!e && typeof e == "object";
}
function LM(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || FM(e);
}
var MM = typeof Symbol == "function" && Symbol.for,
  IM = MM ? Symbol.for("react.element") : 60103;
function FM(e) {
  return e.$$typeof === IM;
}
function VM(e) {
  return Array.isArray(e) ? [] : {};
}
function bl(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Qo(VM(e), e, t) : e;
}
function UM(e, t, n) {
  return e.concat(t).map(function (r) {
    return bl(r, n);
  });
}
function BM(e, t) {
  if (!t.customMerge) return Qo;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Qo;
}
function zM(e) {
  return Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(e).filter(function (t) {
        return Object.propertyIsEnumerable.call(e, t);
      })
    : [];
}
function Ex(e) {
  return Object.keys(e).concat(zM(e));
}
function zE(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function $M(e, t) {
  return (
    zE(e, t) &&
    !(
      Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t)
    )
  );
}
function HM(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Ex(e).forEach(function (s) {
        r[s] = bl(e[s], n);
      }),
    Ex(t).forEach(function (s) {
      $M(e, s) ||
        (zE(e, s) && n.isMergeableObject(t[s])
          ? (r[s] = BM(s, n)(e[s], t[s], n))
          : (r[s] = bl(t[s], n)));
    }),
    r
  );
}
function Qo(e, t, n) {
  (n = n || {}),
    (n.arrayMerge = n.arrayMerge || UM),
    (n.isMergeableObject = n.isMergeableObject || NM),
    (n.cloneUnlessOtherwiseSpecified = bl);
  var r = Array.isArray(t),
    s = Array.isArray(e),
    i = r === s;
  return i ? (r ? n.arrayMerge(e, t, n) : HM(e, t, n)) : bl(t, n);
}
Qo.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, s) {
    return Qo(r, s, n);
  }, {});
};
var WM = Qo,
  $E = WM,
  KM = Object.create,
  Qd = Object.defineProperty,
  ZM = Object.getOwnPropertyDescriptor,
  QM = Object.getOwnPropertyNames,
  qM = Object.getPrototypeOf,
  GM = Object.prototype.hasOwnProperty,
  YM = (e, t) => {
    for (var n in t) Qd(e, n, { get: t[n], enumerable: !0 });
  },
  HE = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of QM(t))
        !GM.call(e, s) &&
          s !== n &&
          Qd(e, s, {
            get: () => t[s],
            enumerable: !(r = ZM(t, s)) || r.enumerable,
          });
    return e;
  },
  $y = (e, t, n) => (
    (n = e != null ? KM(qM(e)) : {}),
    HE(
      !e || !e.__esModule ? Qd(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  XM = (e) => HE(Qd({}, "__esModule", { value: !0 }), e),
  WE = {};
YM(WE, {
  callPlayer: () => p2,
  getConfig: () => f2,
  getSDK: () => d2,
  isBlobUrl: () => y2,
  isMediaStream: () => m2,
  lazy: () => n2,
  omit: () => h2,
  parseEndTime: () => l2,
  parseStartTime: () => a2,
  queryString: () => c2,
  randomString: () => u2,
  supportsWebKitPresentationMode: () => g2,
});
var pu = XM(WE),
  JM = $y(P),
  e2 = $y(OM),
  t2 = $y($E);
const n2 = (e) =>
    JM.default.lazy(async () => {
      const t = await e();
      return typeof t.default == "function" ? t : t.default;
    }),
  r2 = /[?&#](?:start|t)=([0-9hms]+)/,
  s2 = /[?&#]end=([0-9hms]+)/,
  Hp = /(\d+)(h|m|s)/g,
  i2 = /^\d+$/;
function KE(e, t) {
  if (e instanceof Array) return;
  const n = e.match(t);
  if (n) {
    const r = n[1];
    if (r.match(Hp)) return o2(r);
    if (i2.test(r)) return parseInt(r);
  }
}
function o2(e) {
  let t = 0,
    n = Hp.exec(e);
  for (; n !== null; ) {
    const [, r, s] = n;
    s === "h" && (t += parseInt(r, 10) * 60 * 60),
      s === "m" && (t += parseInt(r, 10) * 60),
      s === "s" && (t += parseInt(r, 10)),
      (n = Hp.exec(e));
  }
  return t;
}
function a2(e) {
  return KE(e, r2);
}
function l2(e) {
  return KE(e, s2);
}
function u2() {
  return Math.random().toString(36).substr(2, 5);
}
function c2(e) {
  return Object.keys(e)
    .map((t) => `${t}=${e[t]}`)
    .join("&");
}
function Yf(e) {
  return window[e]
    ? window[e]
    : window.exports && window.exports[e]
    ? window.exports[e]
    : window.module && window.module.exports && window.module.exports[e]
    ? window.module.exports[e]
    : null;
}
const $i = {},
  d2 = function (t, n, r = null, s = () => !0, i = e2.default) {
    const o = Yf(n);
    return o && s(o)
      ? Promise.resolve(o)
      : new Promise((a, l) => {
          if ($i[t]) {
            $i[t].push({ resolve: a, reject: l });
            return;
          }
          $i[t] = [{ resolve: a, reject: l }];
          const u = (c) => {
            $i[t].forEach((d) => d.resolve(c));
          };
          if (r) {
            const c = window[r];
            window[r] = function () {
              c && c(), u(Yf(n));
            };
          }
          i(t, (c) => {
            c
              ? ($i[t].forEach((d) => d.reject(c)), ($i[t] = null))
              : r || u(Yf(n));
          });
        });
  };
function f2(e, t) {
  return (0, t2.default)(t.config, e.config);
}
function h2(e, ...t) {
  const n = [].concat(...t),
    r = {},
    s = Object.keys(e);
  for (const i of s) n.indexOf(i) === -1 && (r[i] = e[i]);
  return r;
}
function p2(e, ...t) {
  if (!this.player || !this.player[e]) {
    let n = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;
    return (
      this.player
        ? this.player[e] || (n += "The method was not available")
        : (n += "The player was not available"),
      console.warn(n, "font-weight: bold", ""),
      null
    );
  }
  return this.player[e](...t);
}
function m2(e) {
  return (
    typeof window < "u" &&
    typeof window.MediaStream < "u" &&
    e instanceof window.MediaStream
  );
}
function y2(e) {
  return /^blob:/.test(e);
}
function g2(e = document.createElement("video")) {
  const t = /iPhone|iPod/.test(navigator.userAgent) === !1;
  return (
    e.webkitSupportsPresentationMode &&
    typeof e.webkitSetPresentationMode == "function" &&
    t
  );
}
var Hy = Object.defineProperty,
  v2 = Object.getOwnPropertyDescriptor,
  x2 = Object.getOwnPropertyNames,
  w2 = Object.prototype.hasOwnProperty,
  S2 = (e, t) => {
    for (var n in t) Hy(e, n, { get: t[n], enumerable: !0 });
  },
  _2 = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of x2(t))
        !w2.call(e, s) &&
          s !== n &&
          Hy(e, s, {
            get: () => t[s],
            enumerable: !(r = v2(t, s)) || r.enumerable,
          });
    return e;
  },
  E2 = (e) => _2(Hy({}, "__esModule", { value: !0 }), e),
  ZE = {};
S2(ZE, {
  AUDIO_EXTENSIONS: () => Wy,
  DASH_EXTENSIONS: () => lP,
  FLV_EXTENSIONS: () => uP,
  HLS_EXTENSIONS: () => Zy,
  MATCH_URL_DAILYMOTION: () => sP,
  MATCH_URL_FACEBOOK: () => XE,
  MATCH_URL_FACEBOOK_WATCH: () => JE,
  MATCH_URL_KALTURA: () => aP,
  MATCH_URL_MIXCLOUD: () => iP,
  MATCH_URL_MUX: () => YE,
  MATCH_URL_SOUNDCLOUD: () => qE,
  MATCH_URL_STREAMABLE: () => eP,
  MATCH_URL_TWITCH_CHANNEL: () => rP,
  MATCH_URL_TWITCH_VIDEO: () => nP,
  MATCH_URL_VIDYARD: () => oP,
  MATCH_URL_VIMEO: () => GE,
  MATCH_URL_WISTIA: () => tP,
  MATCH_URL_YOUTUBE: () => Wp,
  VIDEO_EXTENSIONS: () => Ky,
  canPlay: () => P2,
});
var QE = E2(ZE),
  Px = pu;
const Wp =
    /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
  qE = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
  GE = /vimeo\.com\/(?!progressive_redirect).+/,
  YE = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
  XE =
    /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
  JE = /^https?:\/\/fb\.watch\/.+$/,
  eP = /streamable\.com\/([a-z0-9]+)$/,
  tP = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
  nP = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
  rP = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
  sP =
    /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
  iP = /mixcloud\.com\/([^/]+\/[^/]+)/,
  oP = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
  aP =
    /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
  Wy = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
  Ky = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
  Zy = /\.(m3u8)($|\?)/i,
  lP = /\.(mpd)($|\?)/i,
  uP = /\.(flv)($|\?)/i,
  Kp = (e) => {
    if (e instanceof Array) {
      for (const t of e)
        if ((typeof t == "string" && Kp(t)) || Kp(t.src)) return !0;
      return !1;
    }
    return (0, Px.isMediaStream)(e) || (0, Px.isBlobUrl)(e)
      ? !0
      : Wy.test(e) || Ky.test(e) || Zy.test(e) || lP.test(e) || uP.test(e);
  },
  P2 = {
    youtube: (e) =>
      e instanceof Array ? e.every((t) => Wp.test(t)) : Wp.test(e),
    soundcloud: (e) => qE.test(e) && !Wy.test(e),
    vimeo: (e) => GE.test(e) && !Ky.test(e) && !Zy.test(e),
    mux: (e) => YE.test(e),
    facebook: (e) => XE.test(e) || JE.test(e),
    streamable: (e) => eP.test(e),
    wistia: (e) => tP.test(e),
    twitch: (e) => nP.test(e) || rP.test(e),
    dailymotion: (e) => sP.test(e),
    mixcloud: (e) => iP.test(e),
    vidyard: (e) => oP.test(e),
    kaltura: (e) => aP.test(e),
    file: Kp,
  };
var Qy = Object.defineProperty,
  b2 = Object.getOwnPropertyDescriptor,
  T2 = Object.getOwnPropertyNames,
  k2 = Object.prototype.hasOwnProperty,
  C2 = (e, t) => {
    for (var n in t) Qy(e, n, { get: t[n], enumerable: !0 });
  },
  R2 = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of T2(t))
        !k2.call(e, s) &&
          s !== n &&
          Qy(e, s, {
            get: () => t[s],
            enumerable: !(r = b2(t, s)) || r.enumerable,
          });
    return e;
  },
  O2 = (e) => R2(Qy({}, "__esModule", { value: !0 }), e),
  cP = {};
C2(cP, { default: () => A2 });
var j2 = O2(cP),
  un = pu,
  Gt = QE,
  A2 = [
    {
      key: "youtube",
      name: "YouTube",
      canPlay: Gt.canPlay.youtube,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => Promise.resolve().then(() => iF), void 0)
      ),
    },
    {
      key: "soundcloud",
      name: "SoundCloud",
      canPlay: Gt.canPlay.soundcloud,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./SoundCloud-GXiVlsur.js").then((e) => e.S), [])
      ),
    },
    {
      key: "vimeo",
      name: "Vimeo",
      canPlay: Gt.canPlay.vimeo,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Vimeo-KbfzLteI.js").then((e) => e.V), [])
      ),
    },
    {
      key: "mux",
      name: "Mux",
      canPlay: Gt.canPlay.mux,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Mux-CrN8UKXK.js").then((e) => e.M), [])
      ),
    },
    {
      key: "facebook",
      name: "Facebook",
      canPlay: Gt.canPlay.facebook,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Facebook-9K1Lsf_T.js").then((e) => e.F), [])
      ),
    },
    {
      key: "streamable",
      name: "Streamable",
      canPlay: Gt.canPlay.streamable,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Streamable-CHNMobYR.js").then((e) => e.S), [])
      ),
    },
    {
      key: "wistia",
      name: "Wistia",
      canPlay: Gt.canPlay.wistia,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Wistia-COTuDiIg.js").then((e) => e.W), [])
      ),
    },
    {
      key: "twitch",
      name: "Twitch",
      canPlay: Gt.canPlay.twitch,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Twitch-CR2eDGSm.js").then((e) => e.T), [])
      ),
    },
    {
      key: "dailymotion",
      name: "DailyMotion",
      canPlay: Gt.canPlay.dailymotion,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./DailyMotion-Bikz-T1R.js").then((e) => e.D), [])
      ),
    },
    {
      key: "mixcloud",
      name: "Mixcloud",
      canPlay: Gt.canPlay.mixcloud,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Mixcloud-BtK5EYMJ.js").then((e) => e.M), [])
      ),
    },
    {
      key: "vidyard",
      name: "Vidyard",
      canPlay: Gt.canPlay.vidyard,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Vidyard-DgtE-Jtj.js").then((e) => e.V), [])
      ),
    },
    {
      key: "kaltura",
      name: "Kaltura",
      canPlay: Gt.canPlay.kaltura,
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./Kaltura-CWiT4qEA.js").then((e) => e.K), [])
      ),
    },
    {
      key: "file",
      name: "FilePlayer",
      canPlay: Gt.canPlay.file,
      canEnablePIP: (e) =>
        Gt.canPlay.file(e) &&
        (document.pictureInPictureEnabled ||
          (0, un.supportsWebKitPresentationMode)()) &&
        !Gt.AUDIO_EXTENSIONS.test(e),
      lazyPlayer: (0, un.lazy)(() =>
        cn(() => import("./FilePlayer-BLyLsjyT.js").then((e) => e.F), [])
      ),
    },
  ],
  bx =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function N2(e, t) {
  return !!(e === t || (bx(e) && bx(t)));
}
function D2(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!N2(e[n], t[n])) return !1;
  return !0;
}
function L2(e, t) {
  t === void 0 && (t = D2);
  var n,
    r = [],
    s,
    i = !1;
  function o() {
    for (var a = [], l = 0; l < arguments.length; l++) a[l] = arguments[l];
    return (
      (i && n === this && t(a, r)) ||
        ((s = e.apply(this, a)), (i = !0), (n = this), (r = a)),
      s
    );
  }
  return o;
}
const M2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: L2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  I2 = ab(M2);
var F2 = typeof Element < "u",
  V2 = typeof Map == "function",
  U2 = typeof Set == "function",
  B2 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function wc(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, s;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!wc(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (V2 && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!wc(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (U2 && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (B2 && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[r])) return !1;
    if (F2 && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (s[r] === "_owner" || s[r] === "__v" || s[r] === "__o") &&
          e.$$typeof
        ) &&
        !wc(e[s[r]], t[s[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var dP = function (t, n) {
    try {
      return wc(t, n);
    } catch (r) {
      if ((r.message || "").match(/stack|recursion/i))
        return (
          console.warn("react-fast-compare cannot handle circular refs"), !1
        );
      throw r;
    }
  },
  fP = { exports: {} },
  z2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  $2 = z2,
  H2 = $2;
function hP() {}
function pP() {}
pP.resetWarningCache = hP;
var W2 = function () {
  function e(r, s, i, o, a, l) {
    if (l !== H2) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: pP,
    resetWarningCache: hP,
  };
  return (n.PropTypes = n), n;
};
fP.exports = W2();
var K2 = fP.exports,
  Z2 = Object.create,
  qd = Object.defineProperty,
  Q2 = Object.getOwnPropertyDescriptor,
  q2 = Object.getOwnPropertyNames,
  G2 = Object.getPrototypeOf,
  Y2 = Object.prototype.hasOwnProperty,
  X2 = (e, t) => {
    for (var n in t) qd(e, n, { get: t[n], enumerable: !0 });
  },
  mP = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of q2(t))
        !Y2.call(e, s) &&
          s !== n &&
          qd(e, s, {
            get: () => t[s],
            enumerable: !(r = Q2(t, s)) || r.enumerable,
          });
    return e;
  },
  J2 = (e, t, n) => (
    (n = e != null ? Z2(G2(e)) : {}),
    mP(
      !e || !e.__esModule ? qd(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  eI = (e) => mP(qd({}, "__esModule", { value: !0 }), e),
  yP = {};
X2(yP, { defaultProps: () => rI, propTypes: () => nI });
var gP = eI(yP),
  tI = J2(K2);
const {
    string: Ot,
    bool: Yt,
    number: Hi,
    array: Xf,
    oneOfType: Pa,
    shape: xn,
    object: Ut,
    func: gt,
    node: Tx,
  } = tI.default,
  nI = {
    url: Pa([Ot, Xf, Ut]),
    playing: Yt,
    loop: Yt,
    controls: Yt,
    volume: Hi,
    muted: Yt,
    playbackRate: Hi,
    width: Pa([Ot, Hi]),
    height: Pa([Ot, Hi]),
    style: Ut,
    progressInterval: Hi,
    playsinline: Yt,
    pip: Yt,
    stopOnUnmount: Yt,
    light: Pa([Yt, Ot, Ut]),
    playIcon: Tx,
    previewTabIndex: Hi,
    previewAriaLabel: Ot,
    fallback: Tx,
    oEmbedUrl: Ot,
    wrapper: Pa([Ot, gt, xn({ render: gt.isRequired })]),
    config: xn({
      soundcloud: xn({ options: Ut }),
      youtube: xn({ playerVars: Ut, embedOptions: Ut, onUnstarted: gt }),
      facebook: xn({ appId: Ot, version: Ot, playerId: Ot, attributes: Ut }),
      dailymotion: xn({ params: Ut }),
      vimeo: xn({ playerOptions: Ut, title: Ot }),
      mux: xn({ attributes: Ut, version: Ot }),
      file: xn({
        attributes: Ut,
        tracks: Xf,
        forceVideo: Yt,
        forceAudio: Yt,
        forceHLS: Yt,
        forceSafariHLS: Yt,
        forceDisableHls: Yt,
        forceDASH: Yt,
        forceFLV: Yt,
        hlsOptions: Ut,
        hlsVersion: Ot,
        dashVersion: Ot,
        flvVersion: Ot,
      }),
      wistia: xn({ options: Ut, playerId: Ot, customControls: Xf }),
      mixcloud: xn({ options: Ut }),
      twitch: xn({ options: Ut, playerId: Ot }),
      vidyard: xn({ options: Ut }),
    }),
    onReady: gt,
    onStart: gt,
    onPlay: gt,
    onPause: gt,
    onBuffer: gt,
    onBufferEnd: gt,
    onEnded: gt,
    onError: gt,
    onDuration: gt,
    onSeek: gt,
    onPlaybackRateChange: gt,
    onPlaybackQualityChange: gt,
    onProgress: gt,
    onClickPreview: gt,
    onEnablePIP: gt,
    onDisablePIP: gt,
  },
  jt = () => {},
  rI = {
    playing: !1,
    loop: !1,
    controls: !1,
    volume: null,
    muted: !1,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: !1,
    pip: !1,
    stopOnUnmount: !0,
    light: !1,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    previewAriaLabel: "",
    oEmbedUrl: "https://noembed.com/embed?url={url}",
    config: {
      soundcloud: {
        options: {
          visual: !0,
          buying: !1,
          liking: !1,
          download: !1,
          sharing: !1,
          show_comments: !1,
          show_playcount: !1,
        },
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1,
        },
        embedOptions: {},
        onUnstarted: jt,
      },
      facebook: {
        appId: "1309697205772819",
        version: "v3.3",
        playerId: null,
        attributes: {},
      },
      dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
      vimeo: {
        playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
        title: null,
      },
      mux: { attributes: {}, version: "2" },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: !1,
        forceAudio: !1,
        forceHLS: !1,
        forceDASH: !1,
        forceFLV: !1,
        hlsOptions: {},
        hlsVersion: "1.1.4",
        dashVersion: "3.1.3",
        flvVersion: "1.5.0",
        forceDisableHls: !1,
      },
      wistia: { options: {}, playerId: null, customControls: null },
      mixcloud: { options: { hide_cover: 1 } },
      twitch: { options: {}, playerId: null },
      vidyard: { options: {} },
    },
    onReady: jt,
    onStart: jt,
    onPlay: jt,
    onPause: jt,
    onBuffer: jt,
    onBufferEnd: jt,
    onEnded: jt,
    onError: jt,
    onDuration: jt,
    onSeek: jt,
    onPlaybackRateChange: jt,
    onPlaybackQualityChange: jt,
    onProgress: jt,
    onClickPreview: jt,
    onEnablePIP: jt,
    onDisablePIP: jt,
  };
var sI = Object.create,
  mu = Object.defineProperty,
  iI = Object.getOwnPropertyDescriptor,
  oI = Object.getOwnPropertyNames,
  aI = Object.getPrototypeOf,
  lI = Object.prototype.hasOwnProperty,
  uI = (e, t, n) =>
    t in e
      ? mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  cI = (e, t) => {
    for (var n in t) mu(e, n, { get: t[n], enumerable: !0 });
  },
  vP = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of oI(t))
        !lI.call(e, s) &&
          s !== n &&
          mu(e, s, {
            get: () => t[s],
            enumerable: !(r = iI(t, s)) || r.enumerable,
          });
    return e;
  },
  xP = (e, t, n) => (
    (n = e != null ? sI(aI(e)) : {}),
    vP(
      !e || !e.__esModule ? mu(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  dI = (e) => vP(mu({}, "__esModule", { value: !0 }), e),
  ut = (e, t, n) => (uI(e, typeof t != "symbol" ? t + "" : t, n), n),
  wP = {};
cI(wP, { default: () => Gd });
var fI = dI(wP),
  kx = xP(P),
  hI = xP(dP),
  SP = gP,
  pI = pu;
const mI = 5e3;
let Gd = class extends kx.Component {
  constructor() {
    super(...arguments),
      ut(this, "mounted", !1),
      ut(this, "isReady", !1),
      ut(this, "isPlaying", !1),
      ut(this, "isLoading", !0),
      ut(this, "loadOnReady", null),
      ut(this, "startOnPlay", !0),
      ut(this, "seekOnPlay", null),
      ut(this, "onDurationCalled", !1),
      ut(this, "handlePlayerMount", (t) => {
        if (this.player) {
          this.progress();
          return;
        }
        (this.player = t), this.player.load(this.props.url), this.progress();
      }),
      ut(this, "getInternalPlayer", (t) =>
        this.player ? this.player[t] : null
      ),
      ut(this, "progress", () => {
        if (this.props.url && this.player && this.isReady) {
          const t = this.getCurrentTime() || 0,
            n = this.getSecondsLoaded(),
            r = this.getDuration();
          if (r) {
            const s = { playedSeconds: t, played: t / r };
            n !== null && ((s.loadedSeconds = n), (s.loaded = n / r)),
              (s.playedSeconds !== this.prevPlayed ||
                s.loadedSeconds !== this.prevLoaded) &&
                this.props.onProgress(s),
              (this.prevPlayed = s.playedSeconds),
              (this.prevLoaded = s.loadedSeconds);
          }
        }
        this.progressTimeout = setTimeout(
          this.progress,
          this.props.progressFrequency || this.props.progressInterval
        );
      }),
      ut(this, "handleReady", () => {
        if (!this.mounted) return;
        (this.isReady = !0), (this.isLoading = !1);
        const { onReady: t, playing: n, volume: r, muted: s } = this.props;
        t(),
          !s && r !== null && this.player.setVolume(r),
          this.loadOnReady
            ? (this.player.load(this.loadOnReady, !0),
              (this.loadOnReady = null))
            : n && this.player.play(),
          this.handleDurationCheck();
      }),
      ut(this, "handlePlay", () => {
        (this.isPlaying = !0), (this.isLoading = !1);
        const { onStart: t, onPlay: n, playbackRate: r } = this.props;
        this.startOnPlay &&
          (this.player.setPlaybackRate &&
            r !== 1 &&
            this.player.setPlaybackRate(r),
          t(),
          (this.startOnPlay = !1)),
          n(),
          this.seekOnPlay &&
            (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
          this.handleDurationCheck();
      }),
      ut(this, "handlePause", (t) => {
        (this.isPlaying = !1), this.isLoading || this.props.onPause(t);
      }),
      ut(this, "handleEnded", () => {
        const { activePlayer: t, loop: n, onEnded: r } = this.props;
        t.loopOnEnded && n && this.seekTo(0), n || ((this.isPlaying = !1), r());
      }),
      ut(this, "handleError", (...t) => {
        (this.isLoading = !1), this.props.onError(...t);
      }),
      ut(this, "handleDurationCheck", () => {
        clearTimeout(this.durationCheckTimeout);
        const t = this.getDuration();
        t
          ? this.onDurationCalled ||
            (this.props.onDuration(t), (this.onDurationCalled = !0))
          : (this.durationCheckTimeout = setTimeout(
              this.handleDurationCheck,
              100
            ));
      }),
      ut(this, "handleLoaded", () => {
        this.isLoading = !1;
      });
  }
  componentDidMount() {
    this.mounted = !0;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout),
      clearTimeout(this.durationCheckTimeout),
      this.isReady &&
        this.props.stopOnUnmount &&
        (this.player.stop(),
        this.player.disablePIP && this.player.disablePIP()),
      (this.mounted = !1);
  }
  componentDidUpdate(t) {
    if (!this.player) return;
    const {
      url: n,
      playing: r,
      volume: s,
      muted: i,
      playbackRate: o,
      pip: a,
      loop: l,
      activePlayer: u,
      disableDeferredLoading: c,
    } = this.props;
    if (!(0, hI.default)(t.url, n)) {
      if (this.isLoading && !u.forceLoad && !c && !(0, pI.isMediaStream)(n)) {
        console.warn(
          `ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`
        ),
          (this.loadOnReady = n);
        return;
      }
      (this.isLoading = !0),
        (this.startOnPlay = !0),
        (this.onDurationCalled = !1),
        this.player.load(n, this.isReady);
    }
    !t.playing && r && !this.isPlaying && this.player.play(),
      t.playing && !r && this.isPlaying && this.player.pause(),
      !t.pip && a && this.player.enablePIP && this.player.enablePIP(),
      t.pip && !a && this.player.disablePIP && this.player.disablePIP(),
      t.volume !== s && s !== null && this.player.setVolume(s),
      t.muted !== i &&
        (i
          ? this.player.mute()
          : (this.player.unmute(),
            s !== null && setTimeout(() => this.player.setVolume(s)))),
      t.playbackRate !== o &&
        this.player.setPlaybackRate &&
        this.player.setPlaybackRate(o),
      t.loop !== l && this.player.setLoop && this.player.setLoop(l);
  }
  getDuration() {
    return this.isReady ? this.player.getDuration() : null;
  }
  getCurrentTime() {
    return this.isReady ? this.player.getCurrentTime() : null;
  }
  getSecondsLoaded() {
    return this.isReady ? this.player.getSecondsLoaded() : null;
  }
  seekTo(t, n, r) {
    if (!this.isReady) {
      t !== 0 &&
        ((this.seekOnPlay = t),
        setTimeout(() => {
          this.seekOnPlay = null;
        }, mI));
      return;
    }
    if (n ? n === "fraction" : t > 0 && t < 1) {
      const i = this.player.getDuration();
      if (!i) {
        console.warn(
          "ReactPlayer: could not seek using fraction – duration not yet available"
        );
        return;
      }
      this.player.seekTo(i * t, r);
      return;
    }
    this.player.seekTo(t, r);
  }
  render() {
    const t = this.props.activePlayer;
    return t
      ? kx.default.createElement(t, {
          ...this.props,
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError,
        })
      : null;
  }
};
ut(Gd, "displayName", "Player");
ut(Gd, "propTypes", SP.propTypes);
ut(Gd, "defaultProps", SP.defaultProps);
var yI = Object.create,
  yu = Object.defineProperty,
  gI = Object.getOwnPropertyDescriptor,
  vI = Object.getOwnPropertyNames,
  xI = Object.getPrototypeOf,
  wI = Object.prototype.hasOwnProperty,
  SI = (e, t, n) =>
    t in e
      ? yu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _I = (e, t) => {
    for (var n in t) yu(e, n, { get: t[n], enumerable: !0 });
  },
  _P = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of vI(t))
        !wI.call(e, s) &&
          s !== n &&
          yu(e, s, {
            get: () => t[s],
            enumerable: !(r = gI(t, s)) || r.enumerable,
          });
    return e;
  },
  gu = (e, t, n) => (
    (n = e != null ? yI(xI(e)) : {}),
    _P(
      !e || !e.__esModule ? yu(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  EI = (e) => _P(yu({}, "__esModule", { value: !0 }), e),
  lt = (e, t, n) => (SI(e, typeof t != "symbol" ? t + "" : t, n), n),
  EP = {};
_I(EP, { createReactPlayer: () => jI });
var PP = EI(EP),
  Qi = gu(P),
  PI = gu($E),
  Jf = gu(I2),
  Cx = gu(dP),
  Na = gP,
  bP = pu,
  bI = gu(fI);
const TI = (0, bP.lazy)(() =>
    cn(() => import("./Preview-Bf77K97z.js").then((e) => e.P), [])
  ),
  kI = typeof window < "u" && window.document && typeof document < "u",
  CI = typeof Xs < "u" && Xs.window && Xs.window.document,
  RI = Object.keys(Na.propTypes),
  OI = kI || CI ? Qi.Suspense : () => null,
  ba = [],
  jI = (e, t) => {
    var n;
    return (
      (n = class extends Qi.Component {
        constructor() {
          super(...arguments),
            lt(this, "state", { showPreview: !!this.props.light }),
            lt(this, "references", {
              wrapper: (r) => {
                this.wrapper = r;
              },
              player: (r) => {
                this.player = r;
              },
            }),
            lt(this, "handleClickPreview", (r) => {
              this.setState({ showPreview: !1 }), this.props.onClickPreview(r);
            }),
            lt(this, "showPreview", () => {
              this.setState({ showPreview: !0 });
            }),
            lt(this, "getDuration", () =>
              this.player ? this.player.getDuration() : null
            ),
            lt(this, "getCurrentTime", () =>
              this.player ? this.player.getCurrentTime() : null
            ),
            lt(this, "getSecondsLoaded", () =>
              this.player ? this.player.getSecondsLoaded() : null
            ),
            lt(this, "getInternalPlayer", (r = "player") =>
              this.player ? this.player.getInternalPlayer(r) : null
            ),
            lt(this, "seekTo", (r, s, i) => {
              if (!this.player) return null;
              this.player.seekTo(r, s, i);
            }),
            lt(this, "handleReady", () => {
              this.props.onReady(this);
            }),
            lt(
              this,
              "getActivePlayer",
              (0, Jf.default)((r) => {
                for (const s of [...ba, ...e]) if (s.canPlay(r)) return s;
                return t || null;
              })
            ),
            lt(
              this,
              "getConfig",
              (0, Jf.default)((r, s) => {
                const { config: i } = this.props;
                return PI.default.all([
                  Na.defaultProps.config,
                  Na.defaultProps.config[s] || {},
                  i,
                  i[s] || {},
                ]);
              })
            ),
            lt(
              this,
              "getAttributes",
              (0, Jf.default)((r) => (0, bP.omit)(this.props, RI))
            ),
            lt(this, "renderActivePlayer", (r) => {
              if (!r) return null;
              const s = this.getActivePlayer(r);
              if (!s) return null;
              const i = this.getConfig(r, s.key);
              return Qi.default.createElement(bI.default, {
                ...this.props,
                key: s.key,
                ref: this.references.player,
                config: i,
                activePlayer: s.lazyPlayer || s,
                onReady: this.handleReady,
              });
            });
        }
        shouldComponentUpdate(r, s) {
          return (
            !(0, Cx.default)(this.props, r) || !(0, Cx.default)(this.state, s)
          );
        }
        componentDidUpdate(r) {
          const { light: s } = this.props;
          !r.light && s && this.setState({ showPreview: !0 }),
            r.light && !s && this.setState({ showPreview: !1 });
        }
        renderPreview(r) {
          if (!r) return null;
          const {
            light: s,
            playIcon: i,
            previewTabIndex: o,
            oEmbedUrl: a,
            previewAriaLabel: l,
          } = this.props;
          return Qi.default.createElement(TI, {
            url: r,
            light: s,
            playIcon: i,
            previewTabIndex: o,
            previewAriaLabel: l,
            oEmbedUrl: a,
            onClick: this.handleClickPreview,
          });
        }
        render() {
          const {
              url: r,
              style: s,
              width: i,
              height: o,
              fallback: a,
              wrapper: l,
            } = this.props,
            { showPreview: u } = this.state,
            c = this.getAttributes(r),
            d = typeof l == "string" ? this.references.wrapper : void 0;
          return Qi.default.createElement(
            l,
            { ref: d, style: { ...s, width: i, height: o }, ...c },
            Qi.default.createElement(
              OI,
              { fallback: a },
              u ? this.renderPreview(r) : this.renderActivePlayer(r)
            )
          );
        }
      }),
      lt(n, "displayName", "ReactPlayer"),
      lt(n, "propTypes", Na.propTypes),
      lt(n, "defaultProps", Na.defaultProps),
      lt(n, "addCustomPlayer", (r) => {
        ba.push(r);
      }),
      lt(n, "removeCustomPlayers", () => {
        ba.length = 0;
      }),
      lt(n, "canPlay", (r) => {
        for (const s of [...ba, ...e]) if (s.canPlay(r)) return !0;
        return !1;
      }),
      lt(n, "canEnablePIP", (r) => {
        for (const s of [...ba, ...e])
          if (s.canEnablePIP && s.canEnablePIP(r)) return !0;
        return !1;
      }),
      n
    );
  };
var AI = Object.create,
  Yd = Object.defineProperty,
  NI = Object.getOwnPropertyDescriptor,
  DI = Object.getOwnPropertyNames,
  LI = Object.getPrototypeOf,
  MI = Object.prototype.hasOwnProperty,
  II = (e, t) => {
    for (var n in t) Yd(e, n, { get: t[n], enumerable: !0 });
  },
  TP = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of DI(t))
        !MI.call(e, s) &&
          s !== n &&
          Yd(e, s, {
            get: () => t[s],
            enumerable: !(r = NI(t, s)) || r.enumerable,
          });
    return e;
  },
  FI = (e, t, n) => (
    (n = e != null ? AI(LI(e)) : {}),
    TP(
      !e || !e.__esModule ? Yd(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  VI = (e) => TP(Yd({}, "__esModule", { value: !0 }), e),
  kP = {};
II(kP, { default: () => $I });
var UI = VI(kP),
  Zp = FI(j2),
  BI = PP;
const zI = Zp.default[Zp.default.length - 1];
var $I = (0, BI.createReactPlayer)(Zp.default, zI);
const HI = Xo(UI);
var WI = Object.create,
  vu = Object.defineProperty,
  KI = Object.getOwnPropertyDescriptor,
  ZI = Object.getOwnPropertyNames,
  QI = Object.getPrototypeOf,
  qI = Object.prototype.hasOwnProperty,
  GI = (e, t, n) =>
    t in e
      ? vu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  YI = (e, t) => {
    for (var n in t) vu(e, n, { get: t[n], enumerable: !0 });
  },
  CP = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let s of ZI(t))
        !qI.call(e, s) &&
          s !== n &&
          vu(e, s, {
            get: () => t[s],
            enumerable: !(r = KI(t, s)) || r.enumerable,
          });
    return e;
  },
  XI = (e, t, n) => (
    (n = e != null ? WI(QI(e)) : {}),
    CP(
      !e || !e.__esModule ? vu(n, "default", { value: e, enumerable: !0 }) : n,
      e
    )
  ),
  JI = (e) => CP(vu({}, "__esModule", { value: !0 }), e),
  ss = (e, t, n) => (GI(e, typeof t != "symbol" ? t + "" : t, n), n),
  RP = {};
YI(RP, { default: () => Gy });
var qy = JI(RP),
  eh = XI(P),
  Wi = pu,
  OP = QE;
const eF = "https://www.youtube.com/iframe_api",
  Rx = "YT",
  tF = "onYouTubeIframeAPIReady",
  tc = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
  th = /user\/([a-zA-Z0-9_-]+)\/?/,
  nF = /youtube-nocookie\.com/,
  rF = "https://www.youtube-nocookie.com";
class Gy extends eh.Component {
  constructor() {
    super(...arguments),
      ss(this, "callPlayer", Wi.callPlayer),
      ss(this, "parsePlaylist", (t) => {
        if (t instanceof Array)
          return {
            listType: "playlist",
            playlist: t.map(this.getID).join(","),
          };
        if (tc.test(t)) {
          const [, n] = t.match(tc);
          return { listType: "playlist", list: n.replace(/^UC/, "UU") };
        }
        if (th.test(t)) {
          const [, n] = t.match(th);
          return { listType: "user_uploads", list: n };
        }
        return {};
      }),
      ss(this, "onStateChange", (t) => {
        const { data: n } = t,
          {
            onPlay: r,
            onPause: s,
            onBuffer: i,
            onBufferEnd: o,
            onEnded: a,
            onReady: l,
            loop: u,
            config: { playerVars: c, onUnstarted: d },
          } = this.props,
          {
            UNSTARTED: f,
            PLAYING: y,
            PAUSED: p,
            BUFFERING: v,
            ENDED: S,
            CUED: m,
          } = window[Rx].PlayerState;
        if (
          (n === f && d(),
          n === y && (r(), o()),
          n === p && s(),
          n === v && i(),
          n === S)
        ) {
          const h = !!this.callPlayer("getPlaylist");
          u && !h && (c.start ? this.seekTo(c.start) : this.play()), a();
        }
        n === m && l();
      }),
      ss(this, "mute", () => {
        this.callPlayer("mute");
      }),
      ss(this, "unmute", () => {
        this.callPlayer("unMute");
      }),
      ss(this, "ref", (t) => {
        this.container = t;
      });
  }
  componentDidMount() {
    this.props.onMount && this.props.onMount(this);
  }
  getID(t) {
    return !t || t instanceof Array || tc.test(t)
      ? null
      : t.match(OP.MATCH_URL_YOUTUBE)[1];
  }
  load(t, n) {
    const {
        playing: r,
        muted: s,
        playsinline: i,
        controls: o,
        loop: a,
        config: l,
        onError: u,
      } = this.props,
      { playerVars: c, embedOptions: d } = l,
      f = this.getID(t);
    if (n) {
      if (tc.test(t) || th.test(t) || t instanceof Array) {
        this.player.loadPlaylist(this.parsePlaylist(t));
        return;
      }
      this.player.cueVideoById({
        videoId: f,
        startSeconds: (0, Wi.parseStartTime)(t) || c.start,
        endSeconds: (0, Wi.parseEndTime)(t) || c.end,
      });
      return;
    }
    (0, Wi.getSDK)(eF, Rx, tF, (y) => y.loaded).then((y) => {
      this.container &&
        (this.player = new y.Player(this.container, {
          width: "100%",
          height: "100%",
          videoId: f,
          playerVars: {
            autoplay: r ? 1 : 0,
            mute: s ? 1 : 0,
            controls: o ? 1 : 0,
            start: (0, Wi.parseStartTime)(t),
            end: (0, Wi.parseEndTime)(t),
            origin: window.location.origin,
            playsinline: i ? 1 : 0,
            ...this.parsePlaylist(t),
            ...c,
          },
          events: {
            onReady: () => {
              a && this.player.setLoop(!0), this.props.onReady();
            },
            onPlaybackRateChange: (p) =>
              this.props.onPlaybackRateChange(p.data),
            onPlaybackQualityChange: (p) =>
              this.props.onPlaybackQualityChange(p),
            onStateChange: this.onStateChange,
            onError: (p) => u(p.data),
          },
          host: nF.test(t) ? rF : void 0,
          ...d,
        }));
    }, u),
      d.events &&
        console.warn(
          "Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause"
        );
  }
  play() {
    this.callPlayer("playVideo");
  }
  pause() {
    this.callPlayer("pauseVideo");
  }
  stop() {
    document.body.contains(this.callPlayer("getIframe")) &&
      this.callPlayer("stopVideo");
  }
  seekTo(t, n = !1) {
    this.callPlayer("seekTo", t), !n && !this.props.playing && this.pause();
  }
  setVolume(t) {
    this.callPlayer("setVolume", t * 100);
  }
  setPlaybackRate(t) {
    this.callPlayer("setPlaybackRate", t);
  }
  setLoop(t) {
    this.callPlayer("setLoop", t);
  }
  getDuration() {
    return this.callPlayer("getDuration");
  }
  getCurrentTime() {
    return this.callPlayer("getCurrentTime");
  }
  getSecondsLoaded() {
    return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
  }
  render() {
    const { display: t } = this.props,
      n = { width: "100%", height: "100%", display: t };
    return eh.default.createElement(
      "div",
      { style: n },
      eh.default.createElement("div", { ref: this.ref })
    );
  }
}
ss(Gy, "displayName", "YouTube");
ss(Gy, "canPlay", OP.canPlay.youtube);
const sF = Xo(qy),
  iF = em({ __proto__: null, default: sF }, [qy]);
var oF = PP.createReactPlayer,
  Ox = qy.default,
  aF = oF([{ key: "youtube", canPlay: Ox.canPlay, lazyPlayer: Ox }]);
const lF = Xo(aF),
  uF = () => {
    P.useEffect(
      () => (
        document.body.classList.add("overflow-hidden"),
        () => document.body.classList.remove("overflow-hidden")
      ),
      []
    );
    const e = zp((n) => n.setActiveVideo),
      { data: t } = aa();
    return x.jsxs(Cs.div, {
      initial: { y: "-100%" },
      animate: { y: 0 },
      exit: { y: "-100%" },
      transition: { ease: "linear" },
      className:
        "fixed top-0 right-0 bottom-0 left-0 z-[3000] px-5 overflow-hidden w-full h-screen flex justify-center items-center bg-black/50",
      children: [
        x.jsx("div", {
          className:
            "cursor-pointer absolute top-[70px] right-[30px] z-[5000] p-5",
          onClick: () => e(!1),
          children: x.jsx("img", {
            width: 30,
            height: 30,
            src: "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close",
            alt: "close",
            className: "w-[30px] h-[30px]",
          }),
        }),
        x.jsx("div", {
          className: "md:w-full md:h-full w-full h-[300px]",
          children: x.jsx(lF, {
            url: t ? t[0].youtube_link : "",
            width: "100%",
            height: "100%",
            controls: !0,
            style: { width: "100%", height: "100%" },
          }),
        }),
      ],
    });
  },
  xu = (e) => {
    const { pathname: t } = ra(),
      n = zp((l) => l.activeVideo),
      r = zp((l) => l.setActiveVideo),
      [s, i] = P.useState(!1),
      o = t === "/services" ? 120 : t === "/project" ? 125 : 80,
      a = (l) => {
        const u = document.getElementById(l);
        if (u) {
          const c = u.offsetTop - o;
          window.scrollTo({ top: c, behavior: "smooth" });
        }
      };
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(td, { children: n && x.jsx(uF, {}) }),
        x.jsxs("section", {
          className: je("relative overflow-hidden text-center", {
            "md:h-screen sm:h-[456px] h-[380px]": e.size === "big",
            "h-[360px] sm:h-[400px] lg:h-[600px]": e.size === "small",
          }),
          children: [
            e.size === "small" || (e.size === "big" && e.page === "services")
              ? x.jsx("img", {
                  src: e.banner,
                  alt: "banner",
                  className: je("w-full h-full object-cover", {
                    "object-bottom": e.size === "small",
                  }),
                })
              : e.page.includes("/project")
              ? null
              : x.jsxs("div", {
                  className: "relative h-full",
                  children: [
                    x.jsx("img", {
                      src: e.page === "project" ? e.banner : e.poster,
                      className: je(" w-full h-full absolute top-0 left-0", {
                        hidden: s,
                        block: !s,
                      }),
                    }),
                    x.jsx(HI, {
                      muted: !0,
                      playing: !!s,
                      controls: !1,
                      url: e.banner,
                      loop: !!s,
                      height: "100%",
                      width: "100%",
                      playsinline: !0,
                      onReady: () => {
                        i(!0);
                      },
                      className: "react-player",
                    }),
                  ],
                }),
            e.size === "big" &&
              x.jsx("div", {
                onClick: () => {
                  a(
                    e.page === "home"
                      ? "features"
                      : (e.page === "services" && "services") ||
                          (e.page === "project" && "project")
                  );
                },
                children: x.jsx(kM, {}),
              }),
            x.jsx("div", {
              className: je(
                "overlay z-10 absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center text-white",
                {
                  "bg-opacity-50":
                    (e.size === "big" && e.page === "home") ||
                    (e.size === "big" && e.page === "services") ||
                    (e.size === "big" && e.page === "contact") ||
                    (e.size === "big" && e.page === "project") ||
                    e.size === "small",
                },
                { "bg-opacity-20": e.size === "big" && e.page === "cartoon" },
                {
                  "backdrop-blur-[20px]":
                    e.size === "big" && e.page === "services",
                }
              ),
              children: x.jsx(vn, {
                project: e.project,
                children:
                  e.size === "big"
                    ? x.jsx("div", {
                        className:
                          "flex flex-col h-full gap-4 sm:gap-10 items-center pt-[76px] pb-[28px]",
                        children:
                          e.page === "home"
                            ? x.jsxs(x.Fragment, {
                                children: [
                                  x.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-0 sm:gap-2 text-center uppercase text-white",
                                    children: [
                                      x.jsx("h1", {
                                        className:
                                          "text-[36px] sm:text-[64px] font-medium leading-[125%] tracking-[3%]",
                                        children: e.title,
                                      }),
                                      x.jsx("h2", {
                                        className:
                                          "text-[20px] sm:text-[32px] leading-[125%] tracking-[3%]",
                                        children: e.subtitle,
                                      }),
                                    ],
                                  }),
                                  x.jsx("div", {
                                    onClick: () => r(!0),
                                    children: x.jsx($p, {
                                      text: e.buttonText,
                                      type: "primary",
                                    }),
                                  }),
                                ],
                              })
                            : e.page === "cartoon"
                            ? x.jsxs(x.Fragment, {
                                children: [
                                  x.jsxs("div", {
                                    className:
                                      "flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white",
                                    children: [
                                      x.jsx("h1", {
                                        className:
                                          "text-[64px] leading-[80px] tracking-[3%] text-center",
                                        children: "Our works",
                                      }),
                                      x.jsx("h2", {
                                        className:
                                          "text-[32px] leading-[40px] tracking-[3%]",
                                        children: "turkmen animation studio",
                                      }),
                                    ],
                                  }),
                                  x.jsx("div", {
                                    onClick: () => r(!0),
                                    children: x.jsx($p, {
                                      text: "Watch trailer",
                                      type: "secondary",
                                    }),
                                  }),
                                ],
                              })
                            : e.page === "services"
                            ? x.jsx("div", {
                                className: "flex w-full justify-end text-start",
                                children: x.jsxs("div", {
                                  className:
                                    "flex flex-col gap-4 max-w-[596px] text-white",
                                  children: [
                                    x.jsx("div", {
                                      className:
                                        "text-[20px] md:text-[32px] md:leading-[150%] leading-[150%] max-w-[400px] mr-20 tracking-[3%]",
                                      dangerouslySetInnerHTML: {
                                        __html: e.title,
                                      },
                                    }),
                                    x.jsx("div", {
                                      className: "h-[1.5px] w-[80px] bg-white",
                                    }),
                                    e.subtitle &&
                                      x.jsx("div", {
                                        className:
                                          "text-[14px] flex flex-col md:text-[16px] md:leading-[150%] leading-[140%]",
                                        dangerouslySetInnerHTML: {
                                          __html: e.subtitle,
                                        },
                                      }),
                                  ],
                                }),
                              })
                            : e.page === "contact"
                            ? x.jsx("div", {
                                className: "flex w-full justify-center",
                                children: x.jsx("div", {
                                  className:
                                    "flex flex-col gap-[16px] text-white",
                                  children: x.jsx("h1", {
                                    className:
                                      "leading-[125%] font-medium tracking-[3%] text-[64px] uppercase",
                                    children: e.title,
                                  }),
                                }),
                              })
                            : e.page === "project"
                            ? x.jsx("div", {
                                className: "flex w-full h-full justify-center",
                                children: x.jsxs("div", {
                                  className:
                                    "flex flex-col justify-end pb-20 h-full gap-12 text-white",
                                  children: [
                                    x.jsx("img", {
                                      src: e.icon,
                                      className: "w-[144px] h-[80px]",
                                    }),
                                    x.jsx("button", {
                                      type: "button",
                                      className:
                                        "rounded-full border-[1px] border-white leading-[135%] py-3 px-6",
                                      children: e.btnText,
                                    }),
                                  ],
                                }),
                              })
                            : null,
                      })
                    : e.size === "small"
                    ? x.jsx("div", {
                        className:
                          "flex flex-col gap-[40px] items-center justify-center pt-[48px]",
                        children: x.jsx("h1", {
                          className:
                            " text-[64px] font-semibold leading-[80px] tracking-[3%] uppercase",
                          children: e.title,
                        }),
                      })
                    : null,
              }),
            }),
          ],
        }),
      ],
    });
  };
function cF(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function jx(e) {
  return cF(e) || Array.isArray(e);
}
function dF() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Yy(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== i
    ? !1
    : n.every((o) => {
        const a = e[o],
          l = t[o];
        return typeof a == "function"
          ? `${a}` == `${l}`
          : !jx(a) || !jx(l)
          ? a === l
          : Yy(a, l);
      });
}
function Ax(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function fF(e, t) {
  if (e.length !== t.length) return !1;
  const n = Ax(e),
    r = Ax(t);
  return n.every((s, i) => {
    const o = r[i];
    return Yy(s, o);
  });
}
function Xy(e) {
  return typeof e == "number";
}
function Qp(e) {
  return typeof e == "string";
}
function Jy(e) {
  return typeof e == "boolean";
}
function Nx(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qe(e) {
  return Math.abs(e);
}
function eg(e) {
  return Math.sign(e);
}
function Ga(e, t) {
  return Qe(e - t);
}
function hF(e, t) {
  if (e === 0 || t === 0 || Qe(e) <= Qe(t)) return 0;
  const n = Ga(Qe(e), Qe(t));
  return Qe(n / e);
}
function Tl(e) {
  return kl(e).map(Number);
}
function or(e) {
  return e[wu(e)];
}
function wu(e) {
  return Math.max(0, e.length - 1);
}
function tg(e, t) {
  return t === wu(e);
}
function Dx(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function kl(e) {
  return Object.keys(e);
}
function jP(e, t) {
  return [e, t].reduce(
    (n, r) => (
      kl(r).forEach((s) => {
        const i = n[s],
          o = r[s],
          a = Nx(i) && Nx(o);
        n[s] = a ? jP(i, o) : o;
      }),
      n
    ),
    {}
  );
}
function qp(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function pF(e, t) {
  const n = { start: r, center: s, end: i };
  function r() {
    return 0;
  }
  function s(l) {
    return i(l) / 2;
  }
  function i(l) {
    return t - l;
  }
  function o(l, u) {
    return Qp(e) ? n[e](l) : e(t, l, u);
  }
  return { measure: o };
}
function Cl() {
  let e = [];
  function t(s, i, o, a = { passive: !0 }) {
    let l;
    if ("addEventListener" in s)
      s.addEventListener(i, o, a), (l = () => s.removeEventListener(i, o, a));
    else {
      const u = s;
      u.addListener(o), (l = () => u.removeListener(o));
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = { add: t, clear: n };
  return r;
}
function mF(e, t, n, r) {
  const s = Cl(),
    i = 1e3 / 60;
  let o = null,
    a = 0,
    l = 0;
  function u() {
    s.add(e, "visibilitychange", () => {
      e.hidden && p();
    });
  }
  function c() {
    y(), s.clear();
  }
  function d(S) {
    if (!l) return;
    o || (o = S);
    const m = S - o;
    for (o = S, a += m; a >= i; ) n(), (a -= i);
    const h = Qe(a / i);
    r(h), l && t.requestAnimationFrame(d);
  }
  function f() {
    l || (l = t.requestAnimationFrame(d));
  }
  function y() {
    t.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0);
  }
  function p() {
    (o = null), (a = 0);
  }
  return { init: u, destroy: c, start: f, stop: y, update: n, render: r };
}
function yF(e, t) {
  const n = t === "rtl",
    r = e === "y",
    s = r ? "y" : "x",
    i = r ? "x" : "y",
    o = !r && n ? -1 : 1,
    a = c(),
    l = d();
  function u(p) {
    const { height: v, width: S } = p;
    return r ? v : S;
  }
  function c() {
    return r ? "top" : n ? "right" : "left";
  }
  function d() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function f(p) {
    return p * o;
  }
  return {
    scroll: s,
    cross: i,
    startEdge: a,
    endEdge: l,
    measureSize: u,
    direction: f,
  };
}
function Ti(e = 0, t = 0) {
  const n = Qe(e - t);
  function r(u) {
    return u < e;
  }
  function s(u) {
    return u > t;
  }
  function i(u) {
    return r(u) || s(u);
  }
  function o(u) {
    return i(u) ? (r(u) ? e : t) : u;
  }
  function a(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: o,
    reachedAny: i,
    reachedMax: s,
    reachedMin: r,
    removeOffset: a,
  };
}
function AP(e, t, n) {
  const { constrain: r } = Ti(0, e),
    s = e + 1;
  let i = o(t);
  function o(f) {
    return n ? Qe((s + f) % s) : r(f);
  }
  function a() {
    return i;
  }
  function l(f) {
    return (i = o(f)), d;
  }
  function u(f) {
    return c().set(a() + f);
  }
  function c() {
    return AP(e, a(), n);
  }
  const d = { get: a, set: l, add: u, clone: c };
  return d;
}
function gF(e, t, n, r, s, i, o, a, l, u, c, d, f, y, p, v, S, m, h) {
  const { cross: g, direction: _ } = e,
    T = ["INPUT", "SELECT", "TEXTAREA"],
    O = { passive: !1 },
    w = Cl(),
    b = Cl(),
    L = Ti(50, 225).constrain(y.measure(20)),
    N = { mouse: 300, touch: 400 },
    Z = { mouse: 500, touch: 600 },
    $ = p ? 43 : 25;
  let q = !1,
    ie = 0,
    oe = 0,
    we = !1,
    Te = !1,
    I = !1,
    ee = !1;
  function re(W) {
    if (!h) return;
    function _e(mt) {
      (Jy(h) || h(W, mt)) && Ne(mt);
    }
    const Be = t;
    w.add(Be, "dragstart", (mt) => mt.preventDefault(), O)
      .add(Be, "touchmove", () => {}, O)
      .add(Be, "touchend", () => {})
      .add(Be, "touchstart", _e)
      .add(Be, "mousedown", _e)
      .add(Be, "touchcancel", Ge)
      .add(Be, "contextmenu", Ge)
      .add(Be, "click", Kn, !0);
  }
  function ge() {
    w.clear(), b.clear();
  }
  function Se() {
    const W = ee ? n : t;
    b.add(W, "touchmove", Ve, O)
      .add(W, "touchend", Ge)
      .add(W, "mousemove", Ve, O)
      .add(W, "mouseup", Ge);
  }
  function qe(W) {
    const _e = W.nodeName || "";
    return T.includes(_e);
  }
  function st() {
    return (p ? Z : N)[ee ? "mouse" : "touch"];
  }
  function at(W, _e) {
    const Be = d.add(eg(W) * -1),
      mt = c.byDistance(W, !p).distance;
    return p || Qe(W) < L
      ? mt
      : S && _e
      ? mt * 0.5
      : c.byIndex(Be.get(), 0).distance;
  }
  function Ne(W) {
    const _e = qp(W, r);
    (ee = _e),
      (I = p && _e && !W.buttons && q),
      (q = Ga(s.get(), o.get()) >= 2),
      !(_e && W.button !== 0) &&
        (qe(W.target) ||
          ((we = !0),
          i.pointerDown(W),
          u.useFriction(0).useDuration(0),
          s.set(o),
          Se(),
          (ie = i.readPoint(W)),
          (oe = i.readPoint(W, g)),
          f.emit("pointerDown")));
  }
  function Ve(W) {
    if (!qp(W, r) && W.touches.length >= 2) return Ge(W);
    const Be = i.readPoint(W),
      mt = i.readPoint(W, g),
      yt = Ga(Be, ie),
      ln = Ga(mt, oe);
    if (!Te && !ee && (!W.cancelable || ((Te = yt > ln), !Te))) return Ge(W);
    const E = i.pointerMove(W);
    yt > v && (I = !0),
      u.useFriction(0.3).useDuration(0.75),
      a.start(),
      s.add(_(E)),
      W.preventDefault();
  }
  function Ge(W) {
    const Be = c.byDistance(0, !1).index !== d.get(),
      mt = i.pointerUp(W) * st(),
      yt = at(_(mt), Be),
      ln = hF(mt, yt),
      E = $ - 10 * ln,
      R = m + ln / 50;
    (Te = !1),
      (we = !1),
      b.clear(),
      u.useDuration(E).useFriction(R),
      l.distance(yt, !p),
      (ee = !1),
      f.emit("pointerUp");
  }
  function Kn(W) {
    I && (W.stopPropagation(), W.preventDefault(), (I = !1));
  }
  function Qt() {
    return we;
  }
  return { init: re, destroy: ge, pointerDown: Qt };
}
function vF(e, t) {
  let r, s;
  function i(d) {
    return d.timeStamp;
  }
  function o(d, f) {
    const p = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (qp(d, t) ? d : d.touches[0])[p];
  }
  function a(d) {
    return (r = d), (s = d), o(d);
  }
  function l(d) {
    const f = o(d) - o(s),
      y = i(d) - i(r) > 170;
    return (s = d), y && (r = d), f;
  }
  function u(d) {
    if (!r || !s) return 0;
    const f = o(s) - o(r),
      y = i(d) - i(r),
      p = i(d) - i(s) > 170,
      v = f / y;
    return y && !p && Qe(v) > 0.1 ? v : 0;
  }
  return { pointerDown: a, pointerMove: l, pointerUp: u, readPoint: o };
}
function xF() {
  function e(n) {
    const { offsetTop: r, offsetLeft: s, offsetWidth: i, offsetHeight: o } = n;
    return {
      top: r,
      right: s + i,
      bottom: r + o,
      left: s,
      width: i,
      height: o,
    };
  }
  return { measure: e };
}
function wF(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function SF(e, t, n, r, s, i, o) {
  let a,
    l,
    u = [],
    c = !1;
  function d(v) {
    return s.measureSize(o.measure(v));
  }
  function f(v) {
    if (!i) return;
    (l = d(e)), (u = r.map(d));
    function S(h) {
      for (const g of h) {
        const _ = g.target === e,
          T = r.indexOf(g.target),
          O = _ ? l : u[T],
          w = d(_ ? e : r[T]);
        if (Qe(w - O) >= 0.5) {
          n.requestAnimationFrame(() => {
            v.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    (a = new ResizeObserver((h) => {
      c || ((Jy(i) || i(v, h)) && S(h));
    })),
      [e].concat(r).forEach((h) => a.observe(h));
  }
  function y() {
    a && a.disconnect(), (c = !0);
  }
  return { init: f, destroy: y };
}
function _F(e, t, n, r, s) {
  let i = 0,
    o = 0,
    a = r,
    l = s,
    u = e.get(),
    c = 0;
  function d() {
    const T = n.get() - e.get(),
      O = !a;
    let w = 0;
    return (
      O
        ? ((i = 0), e.set(n), (w = T))
        : ((i += T / a), (i *= l), (u += i), e.add(i), (w = u - c)),
      (o = eg(w)),
      (c = u),
      _
    );
  }
  function f() {
    const T = n.get() - t.get();
    return Qe(T) < 0.001;
  }
  function y() {
    return a;
  }
  function p() {
    return o;
  }
  function v() {
    return i;
  }
  function S() {
    return h(r);
  }
  function m() {
    return g(s);
  }
  function h(T) {
    return (a = T), _;
  }
  function g(T) {
    return (l = T), _;
  }
  const _ = {
    direction: p,
    duration: y,
    velocity: v,
    seek: d,
    settled: f,
    useBaseFriction: m,
    useBaseDuration: S,
    useFriction: g,
    useDuration: h,
  };
  return _;
}
function EF(e, t, n, r, s) {
  const i = s.measure(10),
    o = s.measure(50),
    a = Ti(0.1, 0.99);
  let l = !1;
  function u() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function c(y) {
    if (!u()) return;
    const p = e.reachedMin(t.get()) ? "min" : "max",
      v = Qe(e[p] - t.get()),
      S = n.get() - t.get(),
      m = a.constrain(v / o);
    n.subtract(S * m),
      !y &&
        Qe(S) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function d(y) {
    l = !y;
  }
  return { constrain: c, toggleActive: d };
}
function PF(e, t, n, r, s) {
  const i = Ti(-t + e, 0),
    o = d(),
    a = c(),
    l = f();
  function u(p, v) {
    return Ga(p, v) < 1;
  }
  function c() {
    const p = o[0],
      v = or(o),
      S = o.lastIndexOf(p),
      m = o.indexOf(v) + 1;
    return Ti(S, m);
  }
  function d() {
    return n
      .map((p, v) => {
        const { min: S, max: m } = i,
          h = i.constrain(p),
          g = !v,
          _ = tg(n, v);
        return g ? m : _ || u(S, h) ? S : u(m, h) ? m : h;
      })
      .map((p) => parseFloat(p.toFixed(3)));
  }
  function f() {
    if (t <= e + s) return [i.max];
    if (r === "keepSnaps") return o;
    const { min: p, max: v } = a;
    return o.slice(p, v);
  }
  return { snapsContained: l, scrollContainLimit: a };
}
function bF(e, t, n) {
  const r = t[0],
    s = n ? r - e : or(t);
  return { limit: Ti(s, r) };
}
function TF(e, t, n, r) {
  const i = t.min + 0.1,
    o = t.max + 0.1,
    { reachedMin: a, reachedMax: l } = Ti(i, o);
  function u(f) {
    return f === 1 ? l(n.get()) : f === -1 ? a(n.get()) : !1;
  }
  function c(f) {
    if (!u(f)) return;
    const y = e * (f * -1);
    r.forEach((p) => p.add(y));
  }
  return { loop: c };
}
function kF(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const o = i - t;
    return n ? o / -n : 0;
  }
  return { get: r };
}
function CF(e, t, n, r, s) {
  const { startEdge: i, endEdge: o } = e,
    { groupSlides: a } = s,
    l = d().map(t.measure),
    u = f(),
    c = y();
  function d() {
    return a(r)
      .map((v) => or(v)[o] - v[0][i])
      .map(Qe);
  }
  function f() {
    return r.map((v) => n[i] - v[i]).map((v) => -Qe(v));
  }
  function y() {
    return a(u)
      .map((v) => v[0])
      .map((v, S) => v + l[S]);
  }
  return { snaps: u, snapsAligned: c };
}
function RF(e, t, n, r, s, i) {
  const { groupSlides: o } = s,
    { min: a, max: l } = r,
    u = c();
  function c() {
    const f = o(i),
      y = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : y
      ? f
      : f.slice(a, l).map((p, v, S) => {
          const m = !v,
            h = tg(S, v);
          if (m) {
            const g = or(S[0]) + 1;
            return Dx(g);
          }
          if (h) {
            const g = wu(i) - or(S)[0] + 1;
            return Dx(g, or(S)[0]);
          }
          return p;
        });
  }
  return { slideRegistry: u };
}
function OF(e, t, n, r, s) {
  const { reachedAny: i, removeOffset: o, constrain: a } = r;
  function l(p) {
    return p.concat().sort((v, S) => Qe(v) - Qe(S))[0];
  }
  function u(p) {
    const v = e ? o(p) : a(p),
      S = t
        .map((h, g) => ({ diff: c(h - v, 0), index: g }))
        .sort((h, g) => Qe(h.diff) - Qe(g.diff)),
      { index: m } = S[0];
    return { index: m, distance: v };
  }
  function c(p, v) {
    const S = [p, p + n, p - n];
    if (!e) return p;
    if (!v) return l(S);
    const m = S.filter((h) => eg(h) === v);
    return m.length ? l(m) : or(S) - n;
  }
  function d(p, v) {
    const S = t[p] - s.get(),
      m = c(S, v);
    return { index: p, distance: m };
  }
  function f(p, v) {
    const S = s.get() + p,
      { index: m, distance: h } = u(S),
      g = !e && i(S);
    if (!v || g) return { index: m, distance: p };
    const _ = t[m] - h,
      T = p + c(_, 0);
    return { index: m, distance: T };
  }
  return { byDistance: f, byIndex: d, shortcut: c };
}
function jF(e, t, n, r, s, i, o) {
  function a(d) {
    const f = d.distance,
      y = d.index !== t.get();
    i.add(f),
      f && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
      y && (n.set(t.get()), t.set(d.index), o.emit("select"));
  }
  function l(d, f) {
    const y = s.byDistance(d, f);
    a(y);
  }
  function u(d, f) {
    const y = t.clone().set(d),
      p = s.byIndex(y.get(), f);
    a(p);
  }
  return { distance: l, index: u };
}
function AF(e, t, n, r, s, i, o) {
  let a = 0;
  function l() {
    i.add(document, "keydown", u, !1), t.forEach(c);
  }
  function u(f) {
    f.code === "Tab" && (a = new Date().getTime());
  }
  function c(f) {
    const y = () => {
      if (new Date().getTime() - a > 10) return;
      e.scrollLeft = 0;
      const S = t.indexOf(f),
        m = n.findIndex((h) => h.includes(S));
      Xy(m) && (s.useDuration(0), r.index(m, 0), o.emit("slideFocus"));
    };
    i.add(f, "focus", y, { passive: !0, capture: !0 });
  }
  return { init: l };
}
function Sc(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = o(l);
  }
  function s(l) {
    t += o(l);
  }
  function i(l) {
    t -= o(l);
  }
  function o(l) {
    return Xy(l) ? l : l.get();
  }
  return { get: n, set: r, add: s, subtract: i };
}
function NP(e, t) {
  const n = e.scroll === "x" ? i : o,
    r = t.style;
  let s = !1;
  function i(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function o(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function a(d) {
    s || (r.transform = n(e.direction(d)));
  }
  function l(d) {
    s = !d;
  }
  function u() {
    s ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: a, toggleActive: l };
}
function NF(e, t, n, r, s, i, o, a, l) {
  const c = Tl(s),
    d = Tl(s).reverse(),
    f = m().concat(h());
  function y(w, b) {
    return w.reduce((L, N) => L - s[N], b);
  }
  function p(w, b) {
    return w.reduce((L, N) => (y(L, b) > 0 ? L.concat([N]) : L), []);
  }
  function v(w) {
    return i.map((b, L) => ({
      start: b - r[L] + 0.5 + w,
      end: b + t - 0.5 + w,
    }));
  }
  function S(w, b, L) {
    const N = v(b);
    return w.map((Z) => {
      const $ = L ? 0 : -n,
        q = L ? n : 0,
        ie = L ? "end" : "start",
        oe = N[Z][ie];
      return {
        index: Z,
        loopPoint: oe,
        slideLocation: Sc(-1),
        translate: NP(e, l[Z]),
        target: () => (a.get() > oe ? $ : q),
      };
    });
  }
  function m() {
    const w = o[0],
      b = p(d, w);
    return S(b, n, !1);
  }
  function h() {
    const w = t - o[0] - 1,
      b = p(c, w);
    return S(b, -n, !0);
  }
  function g() {
    return f.every(({ index: w }) => {
      const b = c.filter((L) => L !== w);
      return y(b, t) <= 0.1;
    });
  }
  function _() {
    f.forEach((w) => {
      const { target: b, translate: L, slideLocation: N } = w,
        Z = b();
      Z !== N.get() && (L.to(Z), N.set(Z));
    });
  }
  function T() {
    f.forEach((w) => w.translate.clear());
  }
  return { canLoop: g, clear: T, loop: _, loopPoints: f };
}
function DF(e, t, n) {
  let r,
    s = !1;
  function i(l) {
    if (!n) return;
    function u(c) {
      for (const d of c)
        if (d.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((c) => {
      s || ((Jy(n) || n(l, c)) && u(c));
    })),
      r.observe(e, { childList: !0 });
  }
  function o() {
    r && r.disconnect(), (s = !0);
  }
  return { init: i, destroy: o };
}
function LF(e, t, n, r) {
  const s = {};
  let i = null,
    o = null,
    a,
    l = !1;
  function u() {
    (a = new IntersectionObserver(
      (p) => {
        l ||
          (p.forEach((v) => {
            const S = t.indexOf(v.target);
            s[S] = v;
          }),
          (i = null),
          (o = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((p) => a.observe(p));
  }
  function c() {
    a && a.disconnect(), (l = !0);
  }
  function d(p) {
    return kl(s).reduce((v, S) => {
      const m = parseInt(S),
        { isIntersecting: h } = s[m];
      return ((p && h) || (!p && !h)) && v.push(m), v;
    }, []);
  }
  function f(p = !0) {
    if (p && i) return i;
    if (!p && o) return o;
    const v = d(p);
    return p && (i = v), p || (o = v), v;
  }
  return { init: u, destroy: c, get: f };
}
function MF(e, t, n, r, s, i) {
  const { measureSize: o, startEdge: a, endEdge: l } = e,
    u = n[0] && s,
    c = p(),
    d = v(),
    f = n.map(o),
    y = S();
  function p() {
    if (!u) return 0;
    const h = n[0];
    return Qe(t[a] - h[a]);
  }
  function v() {
    if (!u) return 0;
    const h = i.getComputedStyle(or(r));
    return parseFloat(h.getPropertyValue(`margin-${l}`));
  }
  function S() {
    return n
      .map((h, g, _) => {
        const T = !g,
          O = tg(_, g);
        return T ? f[g] + c : O ? f[g] + d : _[g + 1][a] - h[a];
      })
      .map(Qe);
  }
  return { slideSizes: f, slideSizesWithGaps: y, startGap: c, endGap: d };
}
function IF(e, t, n, r, s, i, o, a, l) {
  const { startEdge: u, endEdge: c, direction: d } = e,
    f = Xy(n);
  function y(m, h) {
    return Tl(m)
      .filter((g) => g % h === 0)
      .map((g) => m.slice(g, g + h));
  }
  function p(m) {
    return m.length
      ? Tl(m)
          .reduce((h, g, _) => {
            const T = or(h) || 0,
              O = T === 0,
              w = g === wu(m),
              b = s[u] - i[T][u],
              L = s[u] - i[g][c],
              N = !r && O ? d(o) : 0,
              Z = !r && w ? d(a) : 0,
              $ = Qe(L - Z - (b + N));
            return _ && $ > t + l && h.push(g), w && h.push(m.length), h;
          }, [])
          .map((h, g, _) => {
            const T = Math.max(_[g - 1] || 0);
            return m.slice(T, h);
          })
      : [];
  }
  function v(m) {
    return f ? y(m, n) : p(m);
  }
  return { groupSlides: v };
}
function FF(e, t, n, r, s, i, o) {
  const {
      align: a,
      axis: l,
      direction: u,
      startIndex: c,
      loop: d,
      duration: f,
      dragFree: y,
      dragThreshold: p,
      inViewThreshold: v,
      slidesToScroll: S,
      skipSnaps: m,
      containScroll: h,
      watchResize: g,
      watchSlides: _,
      watchDrag: T,
    } = i,
    O = 2,
    w = xF(),
    b = w.measure(t),
    L = n.map(w.measure),
    N = yF(l, u),
    Z = N.measureSize(b),
    $ = wF(Z),
    q = pF(a, Z),
    ie = !d && !!h,
    oe = d || !!h,
    {
      slideSizes: we,
      slideSizesWithGaps: Te,
      startGap: I,
      endGap: ee,
    } = MF(N, b, L, n, oe, s),
    re = IF(N, Z, S, d, b, L, I, ee, O),
    { snaps: ge, snapsAligned: Se } = CF(N, q, b, L, re),
    qe = -or(ge) + or(Te),
    { snapsContained: st, scrollContainLimit: at } = PF(Z, qe, Se, h, O),
    Ne = ie ? st : Se,
    { limit: Ve } = bF(qe, Ne, d),
    Ge = AP(wu(Ne), c, d),
    Kn = Ge.clone(),
    Qt = Tl(n),
    Fe = ({
      dragHandler: bt,
      scrollBody: dr,
      scrollBounds: kr,
      options: { loop: Tt },
    }) => {
      Tt || kr.constrain(bt.pointerDown()), dr.seek();
    },
    W = (
      {
        scrollBody: bt,
        translate: dr,
        location: kr,
        offsetLocation: Tt,
        scrollLooper: Ni,
        slideLooper: Ws,
        dragHandler: Di,
        animation: Li,
        eventHandler: la,
        options: { loop: Mi },
      },
      ku
    ) => {
      const Ii = bt.velocity(),
        Cu = bt.settled();
      Cu && !Di.pointerDown() && (Li.stop(), la.emit("settle")),
        Cu || la.emit("scroll"),
        Tt.set(kr.get() - Ii + Ii * ku),
        Mi && (Ni.loop(bt.direction()), Ws.loop()),
        dr.to(Tt.get());
    },
    _e = mF(
      r,
      s,
      () => Fe(Ye),
      (bt) => W(Ye, bt)
    ),
    Be = 0.68,
    mt = Ne[Ge.get()],
    yt = Sc(mt),
    ln = Sc(mt),
    E = Sc(mt),
    R = _F(yt, ln, E, f, Be),
    D = OF(d, Ne, qe, Ve, E),
    H = jF(_e, Ge, Kn, R, D, E, o),
    z = kF(Ve),
    F = Cl(),
    ne = LF(t, n, o, v),
    { slideRegistry: Ee } = RF(ie, h, Ne, at, re, Qt),
    De = AF(e, n, Ee, H, R, F, o),
    Ye = {
      ownerDocument: r,
      ownerWindow: s,
      eventHandler: o,
      containerRect: b,
      slideRects: L,
      animation: _e,
      axis: N,
      dragHandler: gF(
        N,
        e,
        r,
        s,
        E,
        vF(N, s),
        yt,
        _e,
        H,
        R,
        D,
        Ge,
        o,
        $,
        y,
        p,
        m,
        Be,
        T
      ),
      eventStore: F,
      percentOfView: $,
      index: Ge,
      indexPrevious: Kn,
      limit: Ve,
      location: yt,
      offsetLocation: ln,
      options: i,
      resizeHandler: SF(t, o, s, n, N, g, w),
      scrollBody: R,
      scrollBounds: EF(Ve, ln, E, R, $),
      scrollLooper: TF(qe, Ve, ln, [yt, ln, E]),
      scrollProgress: z,
      scrollSnapList: Ne.map(z.get),
      scrollSnaps: Ne,
      scrollTarget: D,
      scrollTo: H,
      slideLooper: NF(N, Z, qe, we, Te, ge, Ne, ln, n),
      slideFocus: De,
      slidesHandler: DF(t, o, _),
      slidesInView: ne,
      slideIndexes: Qt,
      slideRegistry: Ee,
      slidesToScroll: re,
      target: E,
      translate: NP(N, t),
    };
  return Ye;
}
function VF() {
  let e = {},
    t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function s(u) {
    return r(u).forEach((c) => c(t, u)), l;
  }
  function i(u, c) {
    return (e[u] = r(u).concat([c])), l;
  }
  function o(u, c) {
    return (e[u] = r(u).filter((d) => d !== c)), l;
  }
  function a() {
    e = {};
  }
  const l = { init: n, emit: s, off: o, on: i, clear: a };
  return l;
}
const UF = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function BF(e) {
  function t(i, o) {
    return jP(i, o || {});
  }
  function n(i) {
    const o = i.breakpoints || {},
      a = kl(o)
        .filter((l) => e.matchMedia(l).matches)
        .map((l) => o[l])
        .reduce((l, u) => t(l, u), {});
    return t(i, a);
  }
  function r(i) {
    return i
      .map((o) => kl(o.breakpoints || {}))
      .reduce((o, a) => o.concat(a), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function zF(e) {
  let t = [];
  function n(i, o) {
    return (
      (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
      t.forEach((a) => a.init(i, e)),
      o.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function id(e, t, n) {
  const r = e.ownerDocument,
    s = r.defaultView,
    i = BF(s),
    o = zF(i),
    a = Cl(),
    l = VF(),
    { mergeOptions: u, optionsAtMedia: c, optionsMediaQueries: d } = i,
    { on: f, off: y, emit: p } = l,
    v = Z;
  let S = !1,
    m,
    h = u(UF, id.globalOptions),
    g = u(h),
    _ = [],
    T,
    O,
    w;
  function b() {
    const { container: Fe, slides: W } = g;
    O = (Qp(Fe) ? e.querySelector(Fe) : Fe) || e.children[0];
    const Be = Qp(W) ? O.querySelectorAll(W) : W;
    w = [].slice.call(Be || O.children);
  }
  function L(Fe) {
    const W = FF(e, O, w, r, s, Fe, l);
    if (Fe.loop && !W.slideLooper.canLoop()) {
      const _e = Object.assign({}, Fe, { loop: !1 });
      return L(_e);
    }
    return W;
  }
  function N(Fe, W) {
    S ||
      ((h = u(h, Fe)),
      (g = c(h)),
      (_ = W || _),
      b(),
      (m = L(g)),
      d([h, ..._.map(({ options: _e }) => _e)]).forEach((_e) =>
        a.add(_e, "change", Z)
      ),
      g.active &&
        (m.translate.to(m.location.get()),
        m.animation.init(),
        m.slidesInView.init(),
        m.slideFocus.init(),
        m.eventHandler.init(Qt),
        m.resizeHandler.init(Qt),
        m.slidesHandler.init(Qt),
        m.options.loop && m.slideLooper.loop(),
        O.offsetParent && w.length && m.dragHandler.init(Qt),
        (T = o.init(Qt, _))));
  }
  function Z(Fe, W) {
    const _e = ge();
    $(), N(u({ startIndex: _e }, Fe), W), l.emit("reInit");
  }
  function $() {
    m.dragHandler.destroy(),
      m.eventStore.clear(),
      m.translate.clear(),
      m.slideLooper.clear(),
      m.resizeHandler.destroy(),
      m.slidesHandler.destroy(),
      m.slidesInView.destroy(),
      m.animation.destroy(),
      o.destroy(),
      a.clear();
  }
  function q() {
    S || ((S = !0), a.clear(), $(), l.emit("destroy"), l.clear());
  }
  function ie(Fe, W, _e) {
    !g.active ||
      S ||
      (m.scrollBody.useBaseFriction().useDuration(W === !0 ? 0 : g.duration),
      m.scrollTo.index(Fe, _e || 0));
  }
  function oe(Fe) {
    const W = m.index.add(1).get();
    ie(W, Fe, -1);
  }
  function we(Fe) {
    const W = m.index.add(-1).get();
    ie(W, Fe, 1);
  }
  function Te() {
    return m.index.add(1).get() !== ge();
  }
  function I() {
    return m.index.add(-1).get() !== ge();
  }
  function ee() {
    return m.scrollSnapList;
  }
  function re() {
    return m.scrollProgress.get(m.location.get());
  }
  function ge() {
    return m.index.get();
  }
  function Se() {
    return m.indexPrevious.get();
  }
  function qe() {
    return m.slidesInView.get();
  }
  function st() {
    return m.slidesInView.get(!1);
  }
  function at() {
    return T;
  }
  function Ne() {
    return m;
  }
  function Ve() {
    return e;
  }
  function Ge() {
    return O;
  }
  function Kn() {
    return w;
  }
  const Qt = {
    canScrollNext: Te,
    canScrollPrev: I,
    containerNode: Ge,
    internalEngine: Ne,
    destroy: q,
    off: y,
    on: f,
    emit: p,
    plugins: at,
    previousScrollSnap: Se,
    reInit: v,
    rootNode: Ve,
    scrollNext: oe,
    scrollPrev: we,
    scrollProgress: re,
    scrollSnapList: ee,
    scrollTo: ie,
    selectedScrollSnap: ge,
    slideNodes: Kn,
    slidesInView: qe,
    slidesNotInView: st,
  };
  return N(t, n), setTimeout(() => l.emit("init"), 0), Qt;
}
id.globalOptions = void 0;
function Hs(e = {}, t = []) {
  const n = P.useRef(e),
    r = P.useRef(t),
    [s, i] = P.useState(),
    [o, a] = P.useState(),
    l = P.useCallback(() => {
      s && s.reInit(n.current, r.current);
    }, [s]);
  return (
    P.useEffect(() => {
      if (dF() && o) {
        id.globalOptions = Hs.globalOptions;
        const u = id(o, n.current, r.current);
        return i(u), () => u.destroy();
      } else i(void 0);
    }, [o, i]),
    P.useEffect(() => {
      Yy(n.current, e) || ((n.current = e), l());
    }, [e, l]),
    P.useEffect(() => {
      fF(r.current, t) || ((r.current = t), l());
    }, [t, l]),
    [a, s]
  );
}
Hs.globalOptions = void 0;
const $F = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function ng(e = {}) {
  let t,
    n,
    r,
    s = !1,
    i = !0,
    o = !1,
    a = 0;
  function l(_, T) {
    n = _;
    const { mergeOptions: O, optionsAtMedia: w } = T,
      b = O($F, ng.globalOptions),
      L = O(b, e);
    if (((t = w(L)), n.scrollSnapList().length <= 1)) return;
    (o = t.jump), (r = !1);
    const { eventStore: N, ownerDocument: Z } = n.internalEngine(),
      $ = n.rootNode(),
      q = (t.rootNode && t.rootNode($)) || $,
      ie = n.containerNode();
    n.on("pointerDown", d),
      t.stopOnInteraction || n.on("pointerUp", c),
      t.stopOnMouseEnter &&
        (N.add(q, "mouseenter", () => {
          (i = !1), d();
        }),
        t.stopOnInteraction ||
          N.add(q, "mouseleave", () => {
            (i = !0), c();
          })),
      t.stopOnFocusIn &&
        (N.add(ie, "focusin", d),
        t.stopOnInteraction || N.add(ie, "focusout", c)),
      N.add(Z, "visibilitychange", f),
      t.playOnInit && !y() && c();
  }
  function u() {
    n.off("pointerDown", d).off("pointerUp", c), d(), (r = !0), (s = !1);
  }
  function c() {
    if (r || !i) return;
    s || n.emit("autoplay:play");
    const { ownerWindow: _ } = n.internalEngine();
    _.clearInterval(a), (a = _.setInterval(h, t.delay)), (s = !0);
  }
  function d() {
    if (r) return;
    s && n.emit("autoplay:stop");
    const { ownerWindow: _ } = n.internalEngine();
    _.clearInterval(a), (a = 0), (s = !1);
  }
  function f() {
    if (y()) return (i = s), d();
    i && c();
  }
  function y() {
    const { ownerDocument: _ } = n.internalEngine();
    return _.visibilityState === "hidden";
  }
  function p(_) {
    typeof _ < "u" && (o = _), (i = !0), c();
  }
  function v() {
    s && d();
  }
  function S() {
    s && p();
  }
  function m() {
    return s;
  }
  function h() {
    const { index: _ } = n.internalEngine(),
      T = _.clone().add(1).get(),
      O = n.scrollSnapList().length - 1;
    t.stopOnLastSnap && T === O && d(),
      n.canScrollNext() ? n.scrollNext(o) : n.scrollTo(0, o);
  }
  return {
    name: "autoplay",
    options: e,
    init: l,
    destroy: u,
    play: p,
    stop: v,
    reset: S,
    isPlaying: m,
  };
}
ng.globalOptions = void 0;
const rg = ({ type: e, text: t, subtitle: n }) =>
    x.jsxs("div", {
      className: "flex flex-col gap-[16px] items-center",
      children: [
        x.jsx("h2", {
          className: je("uppercase leading-[40px] text-center", {
            "text-[28px] md:text-[40px] leading-[60px] tracking-[4%]":
              e === "big",
            "text-[24px] md:text-[28px] leading-[32px] tracking-[3%]":
              e === "small",
          }),
          children: t,
        }),
        e === "big" &&
          x.jsx("div", { className: "h-[3px] w-[64px] bg-eerieBlack" }),
        n &&
          x.jsx("h3", {
            className:
              "text-[15px] leading-[130%] md:leading-[150%] md:text-[16px] text-gray",
            children: n,
          }),
      ],
    }),
  HF = () => {
    const {
      data: e,
      isLoading: t,
      isSuccess: n,
      isError: r,
    } = $s({
      queryKey: ["partnersData"],
      queryFn: () => Qr.getPartners(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isSuccess: n, isError: r };
  };
function DP() {
  const e = { delay: 1500 },
    [t, n] = Hs({ loop: !0, align: "start", containScroll: !1 }, [ng(e)]);
  P.useEffect(() => {
    if (!n) return;
    const s = n.plugins().autoplay,
      i = () => {
        s.stop(),
          setTimeout(() => {
            s.play();
          }, e.delay);
      };
    return (
      n.on("select", i),
      () => {
        n.off("select", i);
      }
    );
  }, [n]);
  const { data: r } = HF();
  return x.jsx("section", {
    className: "section-mt",
    children: x.jsx(vn, {
      children: x.jsxs("div", {
        className: "flex flex-col items-center gap-10",
        children: [
          x.jsx(rg, { type: "small", text: "WE WORKED WITH" }),
          x.jsx("div", {
            className: "embla",
            ref: t,
            children: x.jsx("div", {
              className: "embla__container",
              children: r
                ? r == null
                  ? void 0
                  : r.map((s, i) =>
                      x.jsx(
                        "div",
                        {
                          className: "embla__slide p-4",
                          children: x.jsx("img", {
                            className: "w-full h-auto",
                            src: s.image,
                            alt: "pixar logo",
                          }),
                        },
                        i
                      )
                    )
                : null,
            }),
          }),
        ],
      }),
    }),
  });
}
const Lx = ({ name: e, description: t }) =>
    x.jsxs("div", {
      className: "flex flex-col w-full gap-[16px] text-center",
      children: [
        x.jsx("h2", {
          className:
            "uppercase lg:text-[32px] md:text-[24px] text-[22px] tex leading-[125%] text-blue font-[300] tracking-[3%]",
          children: e,
        }),
        x.jsx("p", {
          className: "text-[16px] leading-[24px] text-gray",
          children: t,
        }),
      ],
    }),
  Su = (e) => {
    const [t, n] = P.useState(0),
      [r, s] = P.useState([]),
      i = P.useCallback(
        (l) => {
          e && e.scrollTo(l);
        },
        [e]
      ),
      o = P.useCallback((l) => {
        s(l.scrollSnapList());
      }, []),
      a = P.useCallback((l) => {
        n(l.selectedScrollSnap());
      }, []);
    return (
      P.useEffect(() => {
        e && (o(e), a(e), e.on("reInit", o).on("reInit", a).on("select", a));
      }, [e, o, a]),
      { selectedIndex: t, scrollSnaps: r, onDotButtonClick: i }
    );
  },
  _u = (e) => {
    const { children: t, ...n } = e;
    return x.jsx("button", { type: "button", ...n, children: t });
  },
  WF = () => {
    const {
      data: e,
      isLoading: t,
      isError: n,
      isSuccess: r,
    } = $s({
      queryKey: ["homeServicesData"],
      queryFn: () => Qr.getHomeServices(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isError: n, isSuccess: r };
  },
  KF = () => {
    const [e, t] = Hs(),
      { selectedIndex: n, scrollSnaps: r, onDotButtonClick: s } = Su(t),
      { data: i } = WF();
    return x.jsx("section", {
      id: "features",
      className: "pt-[40px]",
      children: x.jsxs(vn, {
        children: [
          x.jsx("div", {
            className: "hidden lg:flex gap-[32px] md:gap-4 text-center",
            children: i
              ? i.map((o, a) =>
                  x.jsx(
                    "div",
                    { className: "w-full", children: x.jsx(Lx, { ...o }) },
                    a
                  )
                )
              : null,
          }),
          x.jsxs("div", {
            className: "embla lg:hidden flex flex-col gap-10",
            ref: e,
            children: [
              x.jsx("div", {
                className: "embla-features__container",
                children: i
                  ? i.map((o, a) =>
                      x.jsx(
                        "div",
                        {
                          className: "embla-features__slide ",
                          children: x.jsx(Lx, { ...o }),
                        },
                        a
                      )
                    )
                  : null,
              }),
              x.jsx("div", {
                className: "embla__dots",
                children: r.map((o, a) =>
                  x.jsx(
                    "div",
                    {
                      children: x.jsx(
                        _u,
                        {
                          onClick: () => s(a),
                          className: "embla__dot".concat(
                            a === n ? " embla__dot--selected" : ""
                          ),
                        },
                        a
                      ),
                    },
                    ry()
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  },
  LP = () => {
    const {
      data: e,
      isLoading: t,
      isError: n,
      isSuccess: r,
    } = $s({
      queryKey: ["homeProjectsData"],
      queryFn: () => Qr.getHomeProjects(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isError: n, isSuccess: r };
  },
  ZF = () => {
    const [e, t] = Hs(),
      { selectedIndex: n, scrollSnaps: r, onDotButtonClick: s } = Su(t),
      { data: i } = LP();
    return x.jsx("section", {
      className: "section-mt",
      children: x.jsx(vn, {
        children: x.jsxs("div", {
          className: "flex flex-col gap-[40px] items-center",
          children: [
            x.jsx(rg, { text: "portfolio", type: "big" }),
            x.jsxs("div", {
              className: "hidden lg:grid grid-cols-3 gap-[32px]",
              children: [
                x.jsx("div", {
                  className: "group h-[376px] overflow-hidden",
                  children: x.jsx(er, {
                    to: "/",
                    className: "cursor-default",
                    children: x.jsx("img", {
                      src: i ? i[0].list_image : "",
                      alt: "project",
                      className:
                        "group-hover:scale-110 transition duration-300 ease-in-out",
                    }),
                  }),
                }),
                x.jsx("div", {
                  className: "h-[376px] grid grid-cols-2 gap-[32px]",
                  children: i
                    ? i
                        .filter((o, a) => a >= 1 && a <= 4)
                        .map((o, a) =>
                          x.jsx(
                            "div",
                            {
                              className: "group overflow-hidden",
                              children: x.jsx(er, {
                                to: "/",
                                className: "cursor-default",
                                children: x.jsx("img", {
                                  src: o.list_image,
                                  alt: "project",
                                  className:
                                    "group-hover:scale-110 transition duration-300 ease-in-out",
                                }),
                              }),
                            },
                            a
                          )
                        )
                    : null,
                }),
                x.jsx("div", {
                  className: "group h-[376px] overflow-hidden",
                  children: x.jsx(er, {
                    to: "/",
                    className: "cursor-default",
                    children: x.jsx("img", {
                      src: i ? i[5].list_image : "",
                      alt: "project",
                      className:
                        "group-hover:scale-110 transition duration-300 ease-in-out",
                    }),
                  }),
                }),
              ],
            }),
            x.jsxs("div", {
              className: "embla flex flex-col gap-[40px] lg:hidden",
              ref: e,
              children: [
                x.jsx("div", {
                  className: "embla-gallery__container",
                  children: i
                    ? i.map((o, a) =>
                        x.jsx(
                          "div",
                          {
                            className:
                              "group pointer-events-auto embla-gallery__slide overflow-hidden relative",
                            children: x.jsx(er, {
                              to: "/",
                              className: "cursor-default",
                              children: x.jsx("img", {
                                src: o.list_image,
                                alt: "project",
                                className:
                                  "group-hover:scale-110 transition duration-300 ease-in-out",
                              }),
                            }),
                          },
                          a
                        )
                      )
                    : null,
                }),
                x.jsx("div", {
                  className: "embla__dots",
                  children: r.map((o, a) =>
                    x.jsx(
                      _u,
                      {
                        onClick: () => s(a),
                        className: "embla__dot".concat(
                          a === n ? " embla__dot--selected" : ""
                        ),
                      },
                      a
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  QF = () => {
    P.useEffect(() => {
      window.scroll(0, 0);
    }, []);
    const { data: e } = aa(),
      { data: t } = LP();
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(xu, {
          poster: e ? e[0].banner.path : "",
          size: "big",
          page: "home",
          title: e ? e[0].header : "",
          buttonText: "showreel",
        }),
        x.jsx(KF, {}),
        t && x.jsx(ZF, {}),
        x.jsx(DP, {}),
      ],
    });
  },
  qF = () => {
    const {
      data: e,
      isLoading: t,
      isError: n,
      isSuccess: r,
    } = $s({
      queryKey: ["cartoonsData"],
      queryFn: () => Qr.getCartoons(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isError: n, isSuccess: r };
  },
  GF = ({ list_image: e, name: t }) =>
    x.jsxs("div", {
      className: "flex flex-col gap-[16px] overflow-hidden",
      children: [
        x.jsx("div", {
          className:
            "h-[161px] w-full transition-all hover:scale-110 duration-300",
          children: x.jsx("img", {
            src: e,
            alt: "cover",
            className: "w-full h-full object-cover",
          }),
        }),
        x.jsx("h4", {
          className:
            "text-[16px] px-2 text-center font-medium leading-[19.6px] tracking-[-1%]",
          children: t,
        }),
      ],
    }),
  YF = () => {
    const { data: e } = qF(),
      t = {
        initial: { opacity: 0, y: 30, filter: "blur(3px)" },
        animate: (n) => ({
          opacity: 1,
          y: 0,
          filter: "blur(0)",
          transition: { delay: 0.3 * n, easeOut: __ },
        }),
      };
    return x.jsx("section", {
      className: "mt-10",
      children: x.jsx(vn, {
        children: e
          ? x.jsx("div", {
              className:
                "grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 md:gap-x-4 md:gap-y-8 gap-4",
              children: e.map((n, r) =>
                x.jsx(
                  Cs.div,
                  {
                    variants: t,
                    initial: "initial",
                    whileInView: "animate",
                    viewport: { once: !0 },
                    custom: r,
                    children: x.jsx(
                      er,
                      { to: "", children: x.jsx(GF, { ...n }) },
                      r
                    ),
                  },
                  r
                )
              ),
            })
          : null,
      }),
    });
  },
  XF = () => {
    P.useEffect(() => {
      window.scroll(0, 0);
    }, []);
    const { data: e } = aa();
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(xu, {
          size: "small",
          title: e ? e[1].header : "",
          banner: e ? e[1].banner.path : "",
        }),
        x.jsx(YF, {}),
        x.jsx(DP, {}),
      ],
    });
  },
  JF = () => {
    const {
      data: e,
      isLoading: t,
      isError: n,
      isSuccess: r,
    } = $s({
      queryKey: ["mainServicesData"],
      queryFn: () => Qr.getMainServices(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isError: n, isSuccess: r };
  },
  Mx = ({ title: e, text: t, parts: n }) =>
    x.jsxs("div", {
      className: "flex flex-col gap-[60px]",
      children: [
        x.jsxs("div", {
          className: "flex flex-col gap-[16px]",
          children: [
            x.jsx("h3", {
              className:
                "text-eerieBlack font-medium text-[24px] tracking-[-1%] leading-[30px]",
              children: e,
            }),
            x.jsx("div", {
              className:
                "text-bauhaus text-[16px] flex flex-col gap-4 leading-[24px]",
              dangerouslySetInnerHTML: { __html: t },
            }),
          ],
        }),
        x.jsx("div", {
          className: "flex flex-col gap-[16px]",
          children: n.map((r) =>
            x.jsxs(
              "div",
              {
                className: "flex gap-[8px]",
                children: [
                  x.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: x.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M21.7803 4.71967C22.0732 5.01256 22.0732 5.48744 21.7803 5.78033L8.98744 18.5732C8.30402 19.2566 7.19598 19.2566 6.51256 18.5732L2.21967 14.2803C1.92678 13.9874 1.92678 13.5126 2.21967 13.2197C2.51256 12.9268 2.98744 12.9268 3.28033 13.2197L7.57322 17.5126C7.67085 17.6102 7.82914 17.6102 7.92678 17.5126L20.7197 4.71967C21.0126 4.42678 21.4874 4.42678 21.7803 4.71967Z",
                      fill: "#1A1A1A",
                    }),
                  }),
                  x.jsx("span", { children: r.item }),
                ],
              },
              ry()
            )
          ),
        }),
      ],
    }),
  eV = () => {
    const [e, t] = Hs(),
      { selectedIndex: n, scrollSnaps: r, onDotButtonClick: s } = Su(t),
      { data: i } = JF();
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx("div", {
          className: "hidden md:grid grid-cols-3 gap-8",
          children: i
            ? i.map((o, a) =>
                x.jsx(Mx, { title: o.title, text: o.text, parts: o.parts }, a)
              )
            : null,
        }),
        x.jsxs("div", {
          className: "md:hidden embla flex flex-col gap-[40px]",
          ref: e,
          children: [
            x.jsx("div", {
              className: "embla-features__container",
              children: i
                ? i.map((o, a) =>
                    x.jsx(
                      "div",
                      {
                        className: "embla-features__slide",
                        children: x.jsx(Mx, {
                          title: o.title,
                          text: o.text,
                          parts: o.parts,
                        }),
                      },
                      a
                    )
                  )
                : null,
            }),
            x.jsx("div", {
              className: "embla__dots",
              children: r.map((o, a) =>
                x.jsx(
                  _u,
                  {
                    onClick: () => s(a),
                    className: "embla__dot".concat(
                      a === n ? " embla__dot--selected" : ""
                    ),
                  },
                  a
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  tV = () => {
    P.useEffect(() => {
      window.scroll(0, 0);
    }, []);
    const { data: e } = aa();
    return x.jsxs(x.Fragment, {
      children: [
        x.jsx(xu, {
          banner: e ? e[2].banner.path : "",
          size: "big",
          page: "services",
          title: e ? e[2].header : "",
          subtitle: e ? e[2].description : "",
        }),
        x.jsx("section", {
          id: "services",
          className: "mt-10 md:mt-20",
          children: x.jsx(vn, {
            children: x.jsxs("div", {
              className: "flex flex-col gap-[40px]",
              children: [
                x.jsx(rg, { type: "big", text: "Our services" }),
                x.jsx(eV, {}),
              ],
            }),
          }),
        }),
      ],
    });
  };
var Oe;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const i = {};
      for (const o of s) i[o] = o;
      return i;
    }),
    (e.getValidEnumValues = (s) => {
      const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        o = {};
      for (const a of i) o[a] = s[a];
      return e.objectValues(o);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
            return i;
          }),
    (e.find = (s, i) => {
      for (const o of s) if (i(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function r(s, i = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(Oe || (Oe = {}));
var Gp;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Gp || (Gp = {}));
const Q = Oe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  as = (e) => {
    switch (typeof e) {
      case "undefined":
        return Q.undefined;
      case "string":
        return Q.string;
      case "number":
        return isNaN(e) ? Q.nan : Q.number;
      case "boolean":
        return Q.boolean;
      case "function":
        return Q.function;
      case "bigint":
        return Q.bigint;
      case "symbol":
        return Q.symbol;
      case "object":
        return Array.isArray(e)
          ? Q.array
          : e === null
          ? Q.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? Q.promise
          : typeof Map < "u" && e instanceof Map
          ? Q.map
          : typeof Set < "u" && e instanceof Set
          ? Q.set
          : typeof Date < "u" && e instanceof Date
          ? Q.date
          : Q.object;
      default:
        return Q.unknown;
    }
  },
  U = Oe.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  nV = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class bn extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (i) {
          return i.message;
        },
      r = { _errors: [] },
      s = (i) => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) r._errors.push(n(o));
          else {
            let a = r,
              l = 0;
            for (; l < o.path.length; ) {
              const u = o.path[l];
              l === o.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(o)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof bn)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Oe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
        : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
bn.create = (e) => new bn(e);
const qo = (e, t) => {
  let n;
  switch (e.code) {
    case U.invalid_type:
      e.received === Q.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case U.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        Oe.jsonStringifyReplacer
      )}`;
      break;
    case U.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Oe.joinValues(e.keys, ", ")}`;
      break;
    case U.invalid_union:
      n = "Invalid input";
      break;
    case U.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Oe.joinValues(e.options)}`;
      break;
    case U.invalid_enum_value:
      n = `Invalid enum value. Expected ${Oe.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case U.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case U.invalid_return_type:
      n = "Invalid function return type";
      break;
    case U.invalid_date:
      n = "Invalid date";
      break;
    case U.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : Oe.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case U.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case U.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case U.custom:
      n = "Invalid input";
      break;
    case U.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case U.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case U.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), Oe.assertNever(e);
  }
  return { message: n };
};
let MP = qo;
function rV(e) {
  MP = e;
}
function od() {
  return MP;
}
const ad = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      i = [...n, ...(s.path || [])],
      o = { ...s, path: i };
    if (s.message !== void 0) return { ...s, path: i, message: s.message };
    let a = "";
    const l = r
      .filter((u) => !!u)
      .slice()
      .reverse();
    for (const u of l) a = u(o, { data: t, defaultError: a }).message;
    return { ...s, path: i, message: a };
  },
  sV = [];
function K(e, t) {
  const n = od(),
    r = ad({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === qo ? void 0 : qo,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class Zt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return de;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key,
        o = await s.value;
      r.push({ key: i, value: o });
    }
    return Zt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return de;
      i.status === "dirty" && t.dirty(),
        o.status === "dirty" && t.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const de = Object.freeze({ status: "aborted" }),
  po = (e) => ({ status: "dirty", value: e }),
  sn = (e) => ({ status: "valid", value: e }),
  Yp = (e) => e.status === "aborted",
  Xp = (e) => e.status === "dirty",
  Rl = (e) => e.status === "valid",
  Ol = (e) => typeof Promise < "u" && e instanceof Promise;
function ld(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function IP(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !s : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var se;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(se || (se = {}));
var Da, La;
class br {
  constructor(t, n, r, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Ix = (e, t) => {
  if (Rl(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new bn(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function ye(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (o, a) => {
          var l, u;
          const { message: c } = e;
          return o.code === "invalid_enum_value"
            ? { message: c ?? a.defaultError }
            : typeof a.data > "u"
            ? {
                message:
                  (l = c ?? r) !== null && l !== void 0 ? l : a.defaultError,
              }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : {
                message:
                  (u = c ?? n) !== null && u !== void 0 ? u : a.defaultError,
              };
        },
        description: s,
      };
}
class xe {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return as(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: as(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Zt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: as(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ol(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: as(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return Ix(s, i);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: as(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (Ol(s) ? s : Promise.resolve(s));
    return Ix(r, i);
  }
  refine(t, n) {
    const r = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(s)
        : n;
    return this._refinement((s, i) => {
      const o = t(s),
        a = () => i.addIssue({ code: U.custom, ...r(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((l) => (l ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) =>
      t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1)
    );
  }
  _refinement(t) {
    return new ur({
      schema: this,
      typeName: ce.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Pr.create(this, this._def);
  }
  nullable() {
    return Is.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ar.create(this, this._def);
  }
  promise() {
    return Yo.create(this, this._def);
  }
  or(t) {
    return Dl.create([this, t], this._def);
  }
  and(t) {
    return Ll.create(this, t, this._def);
  }
  transform(t) {
    return new ur({
      ...ye(this._def),
      schema: this,
      typeName: ce.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ul({
      ...ye(this._def),
      innerType: this,
      defaultValue: n,
      typeName: ce.ZodDefault,
    });
  }
  brand() {
    return new sg({ typeName: ce.ZodBranded, type: this, ...ye(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Bl({
      ...ye(this._def),
      innerType: this,
      catchValue: n,
      typeName: ce.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return Eu.create(this, t);
  }
  readonly() {
    return zl.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const iV = /^c[^\s-]{8,}$/i,
  oV = /^[0-9a-z]+$/,
  aV = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  lV =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  uV = /^[a-z0-9_-]{21}$/i,
  cV =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  dV =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  fV = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let nh;
const hV =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  pV =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  mV = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  FP =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  yV = new RegExp(`^${FP}$`);
function VP(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function gV(e) {
  return new RegExp(`^${VP(e)}$`);
}
function UP(e) {
  let t = `${FP}T${VP(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function vV(e, t) {
  return !!(
    ((t === "v4" || !t) && hV.test(e)) ||
    ((t === "v6" || !t) && pV.test(e))
  );
}
class nr extends xe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== Q.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        K(i, {
          code: U.invalid_type,
          expected: Q.string,
          received: i.parsedType,
        }),
        de
      );
    }
    const r = new Zt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            code: U.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            code: U.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value,
          a = t.data.length < i.value;
        (o || a) &&
          ((s = this._getOrReturnCtx(t, s)),
          o
            ? K(s, {
                code: U.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              K(s, {
                code: U.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        dV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "email",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        nh || (nh = new RegExp(fV, "u")),
          nh.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              validation: "emoji",
              code: U.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        lV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "uuid",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        uV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "nanoid",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        iV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "cuid",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        oV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "cuid2",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        aV.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            validation: "ulid",
            code: U.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            K(s, {
              validation: "url",
              code: U.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              K(s, {
                validation: "regex",
                code: U.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: { includes: i.value, position: i.position },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : i.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : i.kind === "startsWith"
          ? t.data.startsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? UP(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? yV.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? gV(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              code: U.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? cV.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              validation: "duration",
              code: U.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? vV(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              validation: "ip",
              code: U.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? mV.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            K(s, {
              validation: "base64",
              code: U.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : Oe.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: U.invalid_string,
      ...se.errToObj(r),
    });
  }
  _addCheck(t) {
    return new nr({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...se.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...se.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...se.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...se.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...se.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...se.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...se.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...se.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...se.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...se.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...se.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...se.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...se.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...se.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...se.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...se.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...se.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...se.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...se.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...se.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, se.errToObj(t));
  }
  trim() {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
nr.create = (e) => {
  var t;
  return new nr({
    checks: [],
    typeName: ce.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ye(e),
  });
};
function xV(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class Ds extends xe {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== Q.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        K(i, {
          code: U.invalid_type,
          expected: Q.number,
          received: i.parsedType,
        }),
        de
      );
    }
    let r;
    const s = new Zt();
    for (const i of this._def.checks)
      i.kind === "int"
        ? Oe.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? xV(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          K(r, { code: U.not_finite, message: i.message }),
          s.dirty())
        : Oe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, se.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, se.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, se.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, se.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Ds({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: se.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Ds({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: se.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: se.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: se.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: se.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: se.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: se.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: se.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: se.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: se.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && Oe.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Ds.create = (e) =>
  new Ds({
    checks: [],
    typeName: ce.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ye(e),
  });
class Ls extends xe {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== Q.bigint)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        K(i, {
          code: U.invalid_type,
          expected: Q.bigint,
          received: i.parsedType,
        }),
        de
      );
    }
    let r;
    const s = new Zt();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          K(r, {
            code: U.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : Oe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, se.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, se.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, se.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, se.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Ls({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: se.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Ls({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: se.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: se.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: se.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Ls.create = (e) => {
  var t;
  return new Ls({
    checks: [],
    typeName: ce.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ye(e),
  });
};
class jl extends xe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== Q.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.boolean,
          received: r.parsedType,
        }),
        de
      );
    }
    return sn(t.data);
  }
}
jl.create = (e) =>
  new jl({
    typeName: ce.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ye(e),
  });
class ki extends xe {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== Q.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        K(i, {
          code: U.invalid_type,
          expected: Q.date,
          received: i.parsedType,
        }),
        de
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return K(i, { code: U.invalid_date }), de;
    }
    const r = new Zt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            code: U.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          r.dirty())
        : i.kind === "max"
        ? t.data.getTime() > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          K(s, {
            code: U.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : Oe.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ki({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: se.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: se.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ki.create = (e) =>
  new ki({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: ce.ZodDate,
    ...ye(e),
  });
class ud extends xe {
  _parse(t) {
    if (this._getType(t) !== Q.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.symbol,
          received: r.parsedType,
        }),
        de
      );
    }
    return sn(t.data);
  }
}
ud.create = (e) => new ud({ typeName: ce.ZodSymbol, ...ye(e) });
class Al extends xe {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.undefined,
          received: r.parsedType,
        }),
        de
      );
    }
    return sn(t.data);
  }
}
Al.create = (e) => new Al({ typeName: ce.ZodUndefined, ...ye(e) });
class Nl extends xe {
  _parse(t) {
    if (this._getType(t) !== Q.null) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.null,
          received: r.parsedType,
        }),
        de
      );
    }
    return sn(t.data);
  }
}
Nl.create = (e) => new Nl({ typeName: ce.ZodNull, ...ye(e) });
class Go extends xe {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return sn(t.data);
  }
}
Go.create = (e) => new Go({ typeName: ce.ZodAny, ...ye(e) });
class vi extends xe {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return sn(t.data);
  }
}
vi.create = (e) => new vi({ typeName: ce.ZodUnknown, ...ye(e) });
class Wr extends xe {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      K(n, { code: U.invalid_type, expected: Q.never, received: n.parsedType }),
      de
    );
  }
}
Wr.create = (e) => new Wr({ typeName: ce.ZodNever, ...ye(e) });
class cd extends xe {
  _parse(t) {
    if (this._getType(t) !== Q.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.void,
          received: r.parsedType,
        }),
        de
      );
    }
    return sn(t.data);
  }
}
cd.create = (e) => new cd({ typeName: ce.ZodVoid, ...ye(e) });
class ar extends xe {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== Q.array)
      return (
        K(n, {
          code: U.invalid_type,
          expected: Q.array,
          received: n.parsedType,
        }),
        de
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        (K(n, {
          code: o ? U.too_big : U.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (K(n, {
          code: U.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (K(n, {
          code: U.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((o, a) => s.type._parseAsync(new br(n, o, n.path, a)))
      ).then((o) => Zt.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new br(n, o, n.path, a))
    );
    return Zt.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new ar({
      ...this._def,
      minLength: { value: t, message: se.toString(n) },
    });
  }
  max(t, n) {
    return new ar({
      ...this._def,
      maxLength: { value: t, message: se.toString(n) },
    });
  }
  length(t, n) {
    return new ar({
      ...this._def,
      exactLength: { value: t, message: se.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ar.create = (e, t) =>
  new ar({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ce.ZodArray,
    ...ye(t),
  });
function qi(e) {
  if (e instanceof Xe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Pr.create(qi(r));
    }
    return new Xe({ ...e._def, shape: () => t });
  } else
    return e instanceof ar
      ? new ar({ ...e._def, type: qi(e.element) })
      : e instanceof Pr
      ? Pr.create(qi(e.unwrap()))
      : e instanceof Is
      ? Is.create(qi(e.unwrap()))
      : e instanceof Tr
      ? Tr.create(e.items.map((t) => qi(t)))
      : e;
}
class Xe extends xe {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = Oe.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== Q.object) {
      const u = this._getOrReturnCtx(t);
      return (
        K(u, {
          code: U.invalid_type,
          expected: Q.object,
          received: u.parsedType,
        }),
        de
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof Wr && this._def.unknownKeys === "strip")
    )
      for (const u in s.data) o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const c = i[u],
        d = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new br(s, d, s.path, u)),
        alwaysSet: u in s.data,
      });
    }
    if (this._def.catchall instanceof Wr) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: s.data[c] },
          });
      else if (u === "strict")
        a.length > 0 &&
          (K(s, { code: U.unrecognized_keys, keys: a }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const d = s.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(new br(s, d, s.path, c)),
          alwaysSet: c in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const c of l) {
              const d = await c.key,
                f = await c.value;
              u.push({ key: d, value: f, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => Zt.mergeObjectSync(r, u))
      : Zt.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      se.errToObj,
      new Xe({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, i, o, a;
                const l =
                  (o =
                    (i = (s = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(s, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = se.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : l,
                    }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Xe({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Xe({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new Xe({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new Xe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: ce.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new Xe({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      Oe.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new Xe({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      Oe.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new Xe({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return qi(this);
  }
  partial(t) {
    const n = {};
    return (
      Oe.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new Xe({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      Oe.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof Pr; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new Xe({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return BP(Oe.objectKeys(this.shape));
  }
}
Xe.create = (e, t) =>
  new Xe({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Wr.create(),
    typeName: ce.ZodObject,
    ...ye(t),
  });
Xe.strictCreate = (e, t) =>
  new Xe({
    shape: () => e,
    unknownKeys: "strict",
    catchall: Wr.create(),
    typeName: ce.ZodObject,
    ...ye(t),
  });
Xe.lazycreate = (e, t) =>
  new Xe({
    shape: e,
    unknownKeys: "strip",
    catchall: Wr.create(),
    typeName: ce.ZodObject,
    ...ye(t),
  });
class Dl extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new bn(a.ctx.common.issues));
      return K(n, { code: U.invalid_union, unionErrors: o }), de;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (i) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let i;
      const o = [];
      for (const l of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          c = l._parseSync({ data: n.data, path: n.path, parent: u });
        if (c.status === "valid") return c;
        c.status === "dirty" && !i && (i = { result: c, ctx: u }),
          u.common.issues.length && o.push(u.common.issues);
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new bn(l));
      return K(n, { code: U.invalid_union, unionErrors: a }), de;
    }
  }
  get options() {
    return this._def.options;
  }
}
Dl.create = (e, t) => new Dl({ options: e, typeName: ce.ZodUnion, ...ye(t) });
const Or = (e) =>
  e instanceof Il
    ? Or(e.schema)
    : e instanceof ur
    ? Or(e.innerType())
    : e instanceof Fl
    ? [e.value]
    : e instanceof Ms
    ? e.options
    : e instanceof Vl
    ? Oe.objectValues(e.enum)
    : e instanceof Ul
    ? Or(e._def.innerType)
    : e instanceof Al
    ? [void 0]
    : e instanceof Nl
    ? [null]
    : e instanceof Pr
    ? [void 0, ...Or(e.unwrap())]
    : e instanceof Is
    ? [null, ...Or(e.unwrap())]
    : e instanceof sg || e instanceof zl
    ? Or(e.unwrap())
    : e instanceof Bl
    ? Or(e._def.innerType)
    : [];
class Xd extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.object)
      return (
        K(n, {
          code: U.invalid_type,
          expected: Q.object,
          received: n.parsedType,
        }),
        de
      );
    const r = this.discriminator,
      s = n.data[r],
      i = this.optionsMap.get(s);
    return i
      ? n.common.async
        ? i._parseAsync({ data: n.data, path: n.path, parent: n })
        : i._parseSync({ data: n.data, path: n.path, parent: n })
      : (K(n, {
          code: U.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        de);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const s = new Map();
    for (const i of n) {
      const o = Or(i.shape[t]);
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const a of o) {
        if (s.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              a
            )}`
          );
        s.set(a, i);
      }
    }
    return new Xd({
      typeName: ce.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...ye(r),
    });
  }
}
function Jp(e, t) {
  const n = as(e),
    r = as(t);
  if (e === t) return { valid: !0, data: e };
  if (n === Q.object && r === Q.object) {
    const s = Oe.objectKeys(t),
      i = Oe.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const l = Jp(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === Q.array && r === Q.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        l = Jp(o, a);
      if (!l.valid) return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === Q.date && r === Q.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Ll extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (Yp(i) || Yp(o)) return de;
        const a = Jp(i.value, o.value);
        return a.valid
          ? ((Xp(i) || Xp(o)) && n.dirty(), { status: n.value, value: a.data })
          : (K(r, { code: U.invalid_intersection_types }), de);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([i, o]) => s(i, o))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
Ll.create = (e, t, n) =>
  new Ll({ left: e, right: t, typeName: ce.ZodIntersection, ...ye(n) });
class Tr extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.array)
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.array,
          received: r.parsedType,
        }),
        de
      );
    if (r.data.length < this._def.items.length)
      return (
        K(r, {
          code: U.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        de
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (K(r, {
        code: U.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new br(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => Zt.mergeArray(n, o))
      : Zt.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Tr({ ...this._def, rest: t });
  }
}
Tr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Tr({ items: e, typeName: ce.ZodTuple, rest: null, ...ye(t) });
};
class Ml extends xe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.object)
      return (
        K(r, {
          code: U.invalid_type,
          expected: Q.object,
          received: r.parsedType,
        }),
        de
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new br(r, a, r.path, a)),
        value: o._parse(new br(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? Zt.mergeObjectAsync(n, s)
      : Zt.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof xe
      ? new Ml({ keyType: t, valueType: n, typeName: ce.ZodRecord, ...ye(r) })
      : new Ml({
          keyType: nr.create(),
          valueType: t,
          typeName: ce.ZodRecord,
          ...ye(n),
        });
  }
}
class dd extends xe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.map)
      return (
        K(r, { code: U.invalid_type, expected: Q.map, received: r.parsedType }),
        de
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, l], u) => ({
        key: s._parse(new br(r, a, r.path, [u, "key"])),
        value: i._parse(new br(r, l, r.path, [u, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key,
            c = await l.value;
          if (u.status === "aborted" || c.status === "aborted") return de;
          (u.status === "dirty" || c.status === "dirty") && n.dirty(),
            a.set(u.value, c.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of o) {
        const u = l.key,
          c = l.value;
        if (u.status === "aborted" || c.status === "aborted") return de;
        (u.status === "dirty" || c.status === "dirty") && n.dirty(),
          a.set(u.value, c.value);
      }
      return { status: n.value, value: a };
    }
  }
}
dd.create = (e, t, n) =>
  new dd({ valueType: t, keyType: e, typeName: ce.ZodMap, ...ye(n) });
class Ci extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== Q.set)
      return (
        K(r, { code: U.invalid_type, expected: Q.set, received: r.parsedType }),
        de
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (K(r, {
        code: U.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (K(r, {
          code: U.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === "aborted") return de;
        c.status === "dirty" && n.dirty(), u.add(c.value);
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) =>
      i._parse(new br(r, l, r.path, u))
    );
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, n) {
    return new Ci({
      ...this._def,
      minSize: { value: t, message: se.toString(n) },
    });
  }
  max(t, n) {
    return new Ci({
      ...this._def,
      maxSize: { value: t, message: se.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Ci.create = (e, t) =>
  new Ci({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: ce.ZodSet,
    ...ye(t),
  });
class Eo extends xe {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.function)
      return (
        K(n, {
          code: U.invalid_type,
          expected: Q.function,
          received: n.parsedType,
        }),
        de
      );
    function r(a, l) {
      return ad({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          od(),
          qo,
        ].filter((u) => !!u),
        issueData: { code: U.invalid_arguments, argumentsError: l },
      });
    }
    function s(a, l) {
      return ad({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          od(),
          qo,
        ].filter((u) => !!u),
        issueData: { code: U.invalid_return_type, returnTypeError: l },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof Yo) {
      const a = this;
      return sn(async function (...l) {
        const u = new bn([]),
          c = await a._def.args.parseAsync(l, i).catch((y) => {
            throw (u.addIssue(r(l, y)), u);
          }),
          d = await Reflect.apply(o, this, c);
        return await a._def.returns._def.type.parseAsync(d, i).catch((y) => {
          throw (u.addIssue(s(d, y)), u);
        });
      });
    } else {
      const a = this;
      return sn(function (...l) {
        const u = a._def.args.safeParse(l, i);
        if (!u.success) throw new bn([r(l, u.error)]);
        const c = Reflect.apply(o, this, u.data),
          d = a._def.returns.safeParse(c, i);
        if (!d.success) throw new bn([s(c, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Eo({ ...this._def, args: Tr.create(t).rest(vi.create()) });
  }
  returns(t) {
    return new Eo({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Eo({
      args: t || Tr.create([]).rest(vi.create()),
      returns: n || vi.create(),
      typeName: ce.ZodFunction,
      ...ye(r),
    });
  }
}
class Il extends xe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Il.create = (e, t) => new Il({ getter: e, typeName: ce.ZodLazy, ...ye(t) });
class Fl extends xe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        K(n, {
          received: n.data,
          code: U.invalid_literal,
          expected: this._def.value,
        }),
        de
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Fl.create = (e, t) => new Fl({ value: e, typeName: ce.ZodLiteral, ...ye(t) });
function BP(e, t) {
  return new Ms({ values: e, typeName: ce.ZodEnum, ...ye(t) });
}
class Ms extends xe {
  constructor() {
    super(...arguments), Da.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, {
          expected: Oe.joinValues(r),
          received: n.parsedType,
          code: U.invalid_type,
        }),
        de
      );
    }
    if (
      (ld(this, Da) || IP(this, Da, new Set(this._def.values)),
      !ld(this, Da).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        K(n, { received: n.data, code: U.invalid_enum_value, options: r }), de
      );
    }
    return sn(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Ms.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Ms.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
Da = new WeakMap();
Ms.create = BP;
class Vl extends xe {
  constructor() {
    super(...arguments), La.set(this, void 0);
  }
  _parse(t) {
    const n = Oe.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== Q.string && r.parsedType !== Q.number) {
      const s = Oe.objectValues(n);
      return (
        K(r, {
          expected: Oe.joinValues(s),
          received: r.parsedType,
          code: U.invalid_type,
        }),
        de
      );
    }
    if (
      (ld(this, La) ||
        IP(this, La, new Set(Oe.getValidEnumValues(this._def.values))),
      !ld(this, La).has(t.data))
    ) {
      const s = Oe.objectValues(n);
      return (
        K(r, { received: r.data, code: U.invalid_enum_value, options: s }), de
      );
    }
    return sn(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
La = new WeakMap();
Vl.create = (e, t) =>
  new Vl({ values: e, typeName: ce.ZodNativeEnum, ...ye(t) });
class Yo extends xe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== Q.promise && n.common.async === !1)
      return (
        K(n, {
          code: U.invalid_type,
          expected: Q.promise,
          received: n.parsedType,
        }),
        de
      );
    const r = n.parsedType === Q.promise ? n.data : Promise.resolve(n.data);
    return sn(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
Yo.create = (e, t) => new Yo({ type: e, typeName: ce.ZodPromise, ...ye(t) });
class ur extends xe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ce.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          K(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted") return de;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return l.status === "aborted"
            ? de
            : l.status === "dirty" || n.value === "dirty"
            ? po(l.value)
            : l;
        });
      {
        if (n.value === "aborted") return de;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? de
          : a.status === "dirty" || n.value === "dirty"
          ? po(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? de
          : (a.status === "dirty" && n.dirty(),
            o(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === "aborted"
              ? de
              : (a.status === "dirty" && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!Rl(o)) return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            Rl(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    Oe.assertNever(s);
  }
}
ur.create = (e, t, n) =>
  new ur({ schema: e, typeName: ce.ZodEffects, effect: t, ...ye(n) });
ur.createWithPreprocess = (e, t, n) =>
  new ur({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: ce.ZodEffects,
    ...ye(n),
  });
class Pr extends xe {
  _parse(t) {
    return this._getType(t) === Q.undefined
      ? sn(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pr.create = (e, t) =>
  new Pr({ innerType: e, typeName: ce.ZodOptional, ...ye(t) });
class Is extends xe {
  _parse(t) {
    return this._getType(t) === Q.null
      ? sn(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Is.create = (e, t) =>
  new Is({ innerType: e, typeName: ce.ZodNullable, ...ye(t) });
class Ul extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === Q.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ul.create = (e, t) =>
  new Ul({
    innerType: e,
    typeName: ce.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ye(t),
  });
class Bl extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Ol(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new bn(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new bn(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Bl.create = (e, t) =>
  new Bl({
    innerType: e,
    typeName: ce.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ye(t),
  });
class fd extends xe {
  _parse(t) {
    if (this._getType(t) !== Q.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        K(r, { code: U.invalid_type, expected: Q.nan, received: r.parsedType }),
        de
      );
    }
    return { status: "valid", value: t.data };
  }
}
fd.create = (e) => new fd({ typeName: ce.ZodNaN, ...ye(e) });
const wV = Symbol("zod_brand");
class sg extends xe {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class Eu extends xe {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? de
          : i.status === "dirty"
          ? (n.dirty(), po(i.value))
          : this._def.out._parseAsync({
              data: i.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return s.status === "aborted"
        ? de
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new Eu({ in: t, out: n, typeName: ce.ZodPipeline });
  }
}
class zl extends xe {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (Rl(s) && (s.value = Object.freeze(s.value)), s);
    return Ol(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
zl.create = (e, t) =>
  new zl({ innerType: e, typeName: ce.ZodReadonly, ...ye(t) });
function zP(e, t = {}, n) {
  return e
    ? Go.create().superRefine((r, s) => {
        var i, o;
        if (!e(r)) {
          const a =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            l =
              (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
              o !== void 0
                ? o
                : !0,
            u = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...u, fatal: l });
        }
      })
    : Go.create();
}
const SV = { object: Xe.lazycreate };
var ce;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(ce || (ce = {}));
const _V = (e, t = { message: `Input not instance of ${e.name}` }) =>
    zP((n) => n instanceof e, t),
  $P = nr.create,
  HP = Ds.create,
  EV = fd.create,
  PV = Ls.create,
  WP = jl.create,
  bV = ki.create,
  TV = ud.create,
  kV = Al.create,
  CV = Nl.create,
  RV = Go.create,
  OV = vi.create,
  jV = Wr.create,
  AV = cd.create,
  NV = ar.create,
  DV = Xe.create,
  LV = Xe.strictCreate,
  MV = Dl.create,
  IV = Xd.create,
  FV = Ll.create,
  VV = Tr.create,
  UV = Ml.create,
  BV = dd.create,
  zV = Ci.create,
  $V = Eo.create,
  HV = Il.create,
  WV = Fl.create,
  KV = Ms.create,
  ZV = Vl.create,
  QV = Yo.create,
  Fx = ur.create,
  qV = Pr.create,
  GV = Is.create,
  YV = ur.createWithPreprocess,
  XV = Eu.create,
  JV = () => $P().optional(),
  e3 = () => HP().optional(),
  t3 = () => WP().optional(),
  n3 = {
    string: (e) => nr.create({ ...e, coerce: !0 }),
    number: (e) => Ds.create({ ...e, coerce: !0 }),
    boolean: (e) => jl.create({ ...e, coerce: !0 }),
    bigint: (e) => Ls.create({ ...e, coerce: !0 }),
    date: (e) => ki.create({ ...e, coerce: !0 }),
  },
  r3 = de;
var Ki = Object.freeze({
    __proto__: null,
    defaultErrorMap: qo,
    setErrorMap: rV,
    getErrorMap: od,
    makeIssue: ad,
    EMPTY_PATH: sV,
    addIssueToContext: K,
    ParseStatus: Zt,
    INVALID: de,
    DIRTY: po,
    OK: sn,
    isAborted: Yp,
    isDirty: Xp,
    isValid: Rl,
    isAsync: Ol,
    get util() {
      return Oe;
    },
    get objectUtil() {
      return Gp;
    },
    ZodParsedType: Q,
    getParsedType: as,
    ZodType: xe,
    datetimeRegex: UP,
    ZodString: nr,
    ZodNumber: Ds,
    ZodBigInt: Ls,
    ZodBoolean: jl,
    ZodDate: ki,
    ZodSymbol: ud,
    ZodUndefined: Al,
    ZodNull: Nl,
    ZodAny: Go,
    ZodUnknown: vi,
    ZodNever: Wr,
    ZodVoid: cd,
    ZodArray: ar,
    ZodObject: Xe,
    ZodUnion: Dl,
    ZodDiscriminatedUnion: Xd,
    ZodIntersection: Ll,
    ZodTuple: Tr,
    ZodRecord: Ml,
    ZodMap: dd,
    ZodSet: Ci,
    ZodFunction: Eo,
    ZodLazy: Il,
    ZodLiteral: Fl,
    ZodEnum: Ms,
    ZodNativeEnum: Vl,
    ZodPromise: Yo,
    ZodEffects: ur,
    ZodTransformer: ur,
    ZodOptional: Pr,
    ZodNullable: Is,
    ZodDefault: Ul,
    ZodCatch: Bl,
    ZodNaN: fd,
    BRAND: wV,
    ZodBranded: sg,
    ZodPipeline: Eu,
    ZodReadonly: zl,
    custom: zP,
    Schema: xe,
    ZodSchema: xe,
    late: SV,
    get ZodFirstPartyTypeKind() {
      return ce;
    },
    coerce: n3,
    any: RV,
    array: NV,
    bigint: PV,
    boolean: WP,
    date: bV,
    discriminatedUnion: IV,
    effect: Fx,
    enum: KV,
    function: $V,
    instanceof: _V,
    intersection: FV,
    lazy: HV,
    literal: WV,
    map: BV,
    nan: EV,
    nativeEnum: ZV,
    never: jV,
    null: CV,
    nullable: GV,
    number: HP,
    object: DV,
    oboolean: t3,
    onumber: e3,
    optional: qV,
    ostring: JV,
    pipeline: XV,
    preprocess: YV,
    promise: QV,
    record: UV,
    set: zV,
    strictObject: LV,
    string: $P,
    symbol: TV,
    transformer: Fx,
    tuple: VV,
    undefined: kV,
    union: MV,
    unknown: OV,
    void: AV,
    NEVER: r3,
    ZodIssueCode: U,
    quotelessJson: nV,
    ZodError: bn,
  }),
  Pu = (e) => e.type === "checkbox",
  mo = (e) => e instanceof Date,
  nn = (e) => e == null;
const KP = (e) => typeof e == "object";
var St = (e) => !nn(e) && !Array.isArray(e) && KP(e) && !mo(e),
  s3 = (e) =>
    St(e) && e.target ? (Pu(e.target) ? e.target.checked : e.target.value) : e,
  i3 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  o3 = (e, t) => e.has(i3(t)),
  a3 = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return St(t) && t.hasOwnProperty("isPrototypeOf");
  },
  ig =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Nn(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(ig && (e instanceof Blob || e instanceof FileList)) &&
    (n || St(e))
  )
    if (((t = n ? [] : {}), !n && !a3(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Nn(e[r]));
  else return e;
  return t;
}
var bu = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  dt = (e) => e === void 0,
  G = (e, t, n) => {
    if (!t || !St(e)) return n;
    const r = bu(t.split(/[,[\].]+?/)).reduce((s, i) => (nn(s) ? s : s[i]), e);
    return dt(r) || r === e ? (dt(e[t]) ? n : e[t]) : r;
  },
  ls = (e) => typeof e == "boolean",
  og = (e) => /^\w*$/.test(e),
  ZP = (e) => bu(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  $e = (e, t, n) => {
    let r = -1;
    const s = og(t) ? [t] : ZP(t),
      i = s.length,
      o = i - 1;
    for (; ++r < i; ) {
      const a = s[r];
      let l = n;
      if (r !== o) {
        const u = e[a];
        l = St(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
      }
      if (a === "__proto__") return;
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
const Vx = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  tr = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  Cr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
en.createContext(null);
var l3 = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== tr.all &&
              (t._proxyFormState[o] = !r || tr.all),
            e[o]
          );
        },
      });
    return s;
  },
  Sn = (e) => St(e) && !Object.keys(e).length,
  u3 = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      Sn(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === tr.all)
    );
  },
  rh = (e) => (Array.isArray(e) ? e : [e]);
function c3(e) {
  const t = en.useRef(e);
  (t.current = e),
    en.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var wr = (e) => typeof e == "string",
  d3 = (e, t, n, r, s) =>
    wr(e)
      ? (r && t.watch.add(e), G(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), G(n, i)))
      : (r && (t.watchAll = !0), n),
  QP = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  Ux = (e) => ({
    isOnSubmit: !e || e === tr.onSubmit,
    isOnBlur: e === tr.onBlur,
    isOnChange: e === tr.onChange,
    isOnAll: e === tr.all,
    isOnTouch: e === tr.onTouched,
  }),
  Bx = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Ya = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = G(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) break;
        if (o.ref && t(o.ref, o.name) && !r) break;
        Ya(a, t);
      } else St(a) && Ya(a, t);
    }
  }
};
var f3 = (e, t, n) => {
    const r = bu(G(e, n));
    return $e(r, "root", t[n]), $e(e, n, r), e;
  },
  ag = (e) => e.type === "file",
  gs = (e) => typeof e == "function",
  hd = (e) => {
    if (!ig) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  _c = (e) => wr(e),
  lg = (e) => e.type === "radio",
  pd = (e) => e instanceof RegExp;
const zx = { value: !1, isValid: !1 },
  $x = { value: !0, isValid: !0 };
var qP = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !dt(e[0].attributes.value)
        ? dt(e[0].value) || e[0].value === ""
          ? $x
          : { value: e[0].value, isValid: !0 }
        : $x
      : zx;
  }
  return zx;
};
const Hx = { isValid: !1, value: null };
var GP = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Hx
      )
    : Hx;
function Wx(e, t, n = "validate") {
  if (_c(e) || (Array.isArray(e) && e.every(_c)) || (ls(e) && !e))
    return { type: n, message: _c(e) ? e : "", ref: t };
}
var Zi = (e) => (St(e) && !pd(e) ? e : { value: e, message: "" }),
  Kx = async (e, t, n, r, s) => {
    const {
        ref: i,
        refs: o,
        required: a,
        maxLength: l,
        minLength: u,
        min: c,
        max: d,
        pattern: f,
        validate: y,
        name: p,
        valueAsNumber: v,
        mount: S,
        disabled: m,
      } = e._f,
      h = G(t, p);
    if (!S || m) return {};
    const g = o ? o[0] : i,
      _ = ($) => {
        r &&
          g.reportValidity &&
          (g.setCustomValidity(ls($) ? "" : $ || ""), g.reportValidity());
      },
      T = {},
      O = lg(i),
      w = Pu(i),
      b = O || w,
      L =
        ((v || ag(i)) && dt(i.value) && dt(h)) ||
        (hd(i) && i.value === "") ||
        h === "" ||
        (Array.isArray(h) && !h.length),
      N = QP.bind(null, p, n, T),
      Z = ($, q, ie, oe = Cr.maxLength, we = Cr.minLength) => {
        const Te = $ ? q : ie;
        T[p] = {
          type: $ ? oe : we,
          message: Te,
          ref: i,
          ...N($ ? oe : we, Te),
        };
      };
    if (
      s
        ? !Array.isArray(h) || !h.length
        : a &&
          ((!b && (L || nn(h))) ||
            (ls(h) && !h) ||
            (w && !qP(o).isValid) ||
            (O && !GP(o).isValid))
    ) {
      const { value: $, message: q } = _c(a)
        ? { value: !!a, message: a }
        : Zi(a);
      if (
        $ &&
        ((T[p] = {
          type: Cr.required,
          message: q,
          ref: g,
          ...N(Cr.required, q),
        }),
        !n)
      )
        return _(q), T;
    }
    if (!L && (!nn(c) || !nn(d))) {
      let $, q;
      const ie = Zi(d),
        oe = Zi(c);
      if (!nn(h) && !isNaN(h)) {
        const we = i.valueAsNumber || (h && +h);
        nn(ie.value) || ($ = we > ie.value),
          nn(oe.value) || (q = we < oe.value);
      } else {
        const we = i.valueAsDate || new Date(h),
          Te = (re) => new Date(new Date().toDateString() + " " + re),
          I = i.type == "time",
          ee = i.type == "week";
        wr(ie.value) &&
          h &&
          ($ = I
            ? Te(h) > Te(ie.value)
            : ee
            ? h > ie.value
            : we > new Date(ie.value)),
          wr(oe.value) &&
            h &&
            (q = I
              ? Te(h) < Te(oe.value)
              : ee
              ? h < oe.value
              : we < new Date(oe.value));
      }
      if (($ || q) && (Z(!!$, ie.message, oe.message, Cr.max, Cr.min), !n))
        return _(T[p].message), T;
    }
    if ((l || u) && !L && (wr(h) || (s && Array.isArray(h)))) {
      const $ = Zi(l),
        q = Zi(u),
        ie = !nn($.value) && h.length > +$.value,
        oe = !nn(q.value) && h.length < +q.value;
      if ((ie || oe) && (Z(ie, $.message, q.message), !n))
        return _(T[p].message), T;
    }
    if (f && !L && wr(h)) {
      const { value: $, message: q } = Zi(f);
      if (
        pd($) &&
        !h.match($) &&
        ((T[p] = { type: Cr.pattern, message: q, ref: i, ...N(Cr.pattern, q) }),
        !n)
      )
        return _(q), T;
    }
    if (y) {
      if (gs(y)) {
        const $ = await y(h, t),
          q = Wx($, g);
        if (q && ((T[p] = { ...q, ...N(Cr.validate, q.message) }), !n))
          return _(q.message), T;
      } else if (St(y)) {
        let $ = {};
        for (const q in y) {
          if (!Sn($) && !n) break;
          const ie = Wx(await y[q](h, t), g, q);
          ie &&
            (($ = { ...ie, ...N(q, ie.message) }),
            _(ie.message),
            n && (T[p] = $));
        }
        if (!Sn($) && ((T[p] = { ref: g, ...$ }), !n)) return T;
      }
    }
    return _(!0), T;
  };
function h3(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function p3(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !dt(e[t])) return !1;
  return !0;
}
function vt(e, t) {
  const n = Array.isArray(t) ? t : og(t) ? [t] : ZP(t),
    r = n.length === 1 ? e : h3(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((St(r) && Sn(r)) || (Array.isArray(r) && p3(r))) &&
      vt(e, n.slice(0, -1)),
    e
  );
}
var sh = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const i of e) i.next && i.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  md = (e) => nn(e) || !KP(e);
function ii(e, t) {
  if (md(e) || md(t)) return e === t;
  if (mo(e) && mo(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (mo(i) && mo(o)) ||
        (St(i) && St(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !ii(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var YP = (e) => e.type === "select-multiple",
  m3 = (e) => lg(e) || Pu(e),
  ih = (e) => hd(e) && e.isConnected,
  XP = (e) => {
    for (const t in e) if (gs(e[t])) return !0;
    return !1;
  };
function yd(e, t = {}) {
  const n = Array.isArray(e);
  if (St(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (St(e[r]) && !XP(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), yd(e[r], t[r]))
        : nn(e[r]) || (t[r] = !0);
  return t;
}
function JP(e, t, n) {
  const r = Array.isArray(e);
  if (St(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (St(e[s]) && !XP(e[s]))
        ? dt(t) || md(n[s])
          ? (n[s] = Array.isArray(e[s]) ? yd(e[s], []) : { ...yd(e[s]) })
          : JP(e[s], nn(t) ? {} : t[s], n[s])
        : (n[s] = !ii(e[s], t[s]));
  return n;
}
var nc = (e, t) => JP(e, t, yd(t)),
  eb = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    dt(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && wr(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function oh(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return ag(t)
      ? t.files
      : lg(t)
      ? GP(e.refs).value
      : YP(t)
      ? [...t.selectedOptions].map(({ value: n }) => n)
      : Pu(t)
      ? qP(e.refs).value
      : eb(dt(t.value) ? e.ref.value : t.value, e);
}
var y3 = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = G(t, i);
      o && $e(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  Ta = (e) =>
    dt(e)
      ? e
      : pd(e)
      ? e.source
      : St(e)
      ? pd(e.value)
        ? e.value.source
        : e.value
      : e,
  g3 = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Zx(e, t, n) {
  const r = G(e, n);
  if (r || og(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = G(t, i),
      a = G(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    s.pop();
  }
  return { name: n };
}
var v3 = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  x3 = (e, t) => !bu(G(e, t)).length && vt(e, t);
const w3 = {
  mode: tr.onSubmit,
  reValidateMode: tr.onChange,
  shouldFocusError: !0,
};
function S3(e = {}) {
  let t = { ...w3, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: gs(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    s =
      St(t.defaultValues) || St(t.values)
        ? Nn(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Nn(s),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: sh(), array: sh(), state: sh() },
    f = Ux(t.mode),
    y = Ux(t.reValidateMode),
    p = t.criteriaMode === tr.all,
    v = (E) => (R) => {
      clearTimeout(u), (u = setTimeout(E, R));
    },
    S = async (E) => {
      if (c.isValid || E) {
        const R = t.resolver ? Sn((await b()).errors) : await N(r, !0);
        R !== n.isValid && d.state.next({ isValid: R });
      }
    },
    m = (E, R) => {
      (c.isValidating || c.validatingFields) &&
        ((E || Array.from(a.mount)).forEach((D) => {
          D && (R ? $e(n.validatingFields, D, R) : vt(n.validatingFields, D));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Sn(n.validatingFields),
        }));
    },
    h = (E, R = [], D, H, z = !0, F = !0) => {
      if (H && D) {
        if (((o.action = !0), F && Array.isArray(G(r, E)))) {
          const ne = D(G(r, E), H.argA, H.argB);
          z && $e(r, E, ne);
        }
        if (F && Array.isArray(G(n.errors, E))) {
          const ne = D(G(n.errors, E), H.argA, H.argB);
          z && $e(n.errors, E, ne), x3(n.errors, E);
        }
        if (c.touchedFields && F && Array.isArray(G(n.touchedFields, E))) {
          const ne = D(G(n.touchedFields, E), H.argA, H.argB);
          z && $e(n.touchedFields, E, ne);
        }
        c.dirtyFields && (n.dirtyFields = nc(s, i)),
          d.state.next({
            name: E,
            isDirty: $(E, R),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else $e(i, E, R);
    },
    g = (E, R) => {
      $e(n.errors, E, R), d.state.next({ errors: n.errors });
    },
    _ = (E) => {
      (n.errors = E), d.state.next({ errors: n.errors, isValid: !1 });
    },
    T = (E, R, D, H) => {
      const z = G(r, E);
      if (z) {
        const F = G(i, E, dt(D) ? G(s, E) : D);
        dt(F) || (H && H.defaultChecked) || R
          ? $e(i, E, R ? F : oh(z._f))
          : oe(E, F),
          o.mount && S();
      }
    },
    O = (E, R, D, H, z) => {
      let F = !1,
        ne = !1;
      const Ee = { name: E },
        De = !!(G(r, E) && G(r, E)._f.disabled);
      if (!D || H) {
        c.isDirty &&
          ((ne = n.isDirty),
          (n.isDirty = Ee.isDirty = $()),
          (F = ne !== Ee.isDirty));
        const Ye = De || ii(G(s, E), R);
        (ne = !!(!De && G(n.dirtyFields, E))),
          Ye || De ? vt(n.dirtyFields, E) : $e(n.dirtyFields, E, !0),
          (Ee.dirtyFields = n.dirtyFields),
          (F = F || (c.dirtyFields && ne !== !Ye));
      }
      if (D) {
        const Ye = G(n.touchedFields, E);
        Ye ||
          ($e(n.touchedFields, E, D),
          (Ee.touchedFields = n.touchedFields),
          (F = F || (c.touchedFields && Ye !== D)));
      }
      return F && z && d.state.next(Ee), F ? Ee : {};
    },
    w = (E, R, D, H) => {
      const z = G(n.errors, E),
        F = c.isValid && ls(R) && n.isValid !== R;
      if (
        (e.delayError && D
          ? ((l = v(() => g(E, D))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            D ? $e(n.errors, E, D) : vt(n.errors, E)),
        (D ? !ii(z, D) : z) || !Sn(H) || F)
      ) {
        const ne = {
          ...H,
          ...(F && ls(R) ? { isValid: R } : {}),
          errors: n.errors,
          name: E,
        };
        (n = { ...n, ...ne }), d.state.next(ne);
      }
    },
    b = async (E) => {
      m(E, !0);
      const R = await t.resolver(
        i,
        t.context,
        y3(E || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return m(E), R;
    },
    L = async (E) => {
      const { errors: R } = await b(E);
      if (E)
        for (const D of E) {
          const H = G(R, D);
          H ? $e(n.errors, D, H) : vt(n.errors, D);
        }
      else n.errors = R;
      return R;
    },
    N = async (E, R, D = { valid: !0 }) => {
      for (const H in E) {
        const z = E[H];
        if (z) {
          const { _f: F, ...ne } = z;
          if (F) {
            const Ee = a.array.has(F.name);
            m([H], !0);
            const De = await Kx(z, i, p, t.shouldUseNativeValidation && !R, Ee);
            if ((m([H]), De[F.name] && ((D.valid = !1), R))) break;
            !R &&
              (G(De, F.name)
                ? Ee
                  ? f3(n.errors, De, F.name)
                  : $e(n.errors, F.name, De[F.name])
                : vt(n.errors, F.name));
          }
          ne && (await N(ne, R, D));
        }
      }
      return D.valid;
    },
    Z = () => {
      for (const E of a.unMount) {
        const R = G(r, E);
        R &&
          (R._f.refs ? R._f.refs.every((D) => !ih(D)) : !ih(R._f.ref)) &&
          Ne(E);
      }
      a.unMount = new Set();
    },
    $ = (E, R) => (E && R && $e(i, E, R), !ii(ge(), s)),
    q = (E, R, D) =>
      d3(E, a, { ...(o.mount ? i : dt(R) ? s : wr(E) ? { [E]: R } : R) }, D, R),
    ie = (E) =>
      bu(G(o.mount ? i : s, E, e.shouldUnregister ? G(s, E, []) : [])),
    oe = (E, R, D = {}) => {
      const H = G(r, E);
      let z = R;
      if (H) {
        const F = H._f;
        F &&
          (!F.disabled && $e(i, E, eb(R, F)),
          (z = hd(F.ref) && nn(R) ? "" : R),
          YP(F.ref)
            ? [...F.ref.options].forEach(
                (ne) => (ne.selected = z.includes(ne.value))
              )
            : F.refs
            ? Pu(F.ref)
              ? F.refs.length > 1
                ? F.refs.forEach(
                    (ne) =>
                      (!ne.defaultChecked || !ne.disabled) &&
                      (ne.checked = Array.isArray(z)
                        ? !!z.find((Ee) => Ee === ne.value)
                        : z === ne.value)
                  )
                : F.refs[0] && (F.refs[0].checked = !!z)
              : F.refs.forEach((ne) => (ne.checked = ne.value === z))
            : ag(F.ref)
            ? (F.ref.value = "")
            : ((F.ref.value = z),
              F.ref.type || d.values.next({ name: E, values: { ...i } })));
      }
      (D.shouldDirty || D.shouldTouch) &&
        O(E, z, D.shouldTouch, D.shouldDirty, !0),
        D.shouldValidate && re(E);
    },
    we = (E, R, D) => {
      for (const H in R) {
        const z = R[H],
          F = `${E}.${H}`,
          ne = G(r, F);
        (a.array.has(E) || !md(z) || (ne && !ne._f)) && !mo(z)
          ? we(F, z, D)
          : oe(F, z, D);
      }
    },
    Te = (E, R, D = {}) => {
      const H = G(r, E),
        z = a.array.has(E),
        F = Nn(R);
      $e(i, E, F),
        z
          ? (d.array.next({ name: E, values: { ...i } }),
            (c.isDirty || c.dirtyFields) &&
              D.shouldDirty &&
              d.state.next({
                name: E,
                dirtyFields: nc(s, i),
                isDirty: $(E, F),
              }))
          : H && !H._f && !nn(F)
          ? we(E, F, D)
          : oe(E, F, D),
        Bx(E, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? E : void 0, values: { ...i } });
    },
    I = async (E) => {
      o.mount = !0;
      const R = E.target;
      let D = R.name,
        H = !0;
      const z = G(r, D),
        F = () => (R.type ? oh(z._f) : s3(E)),
        ne = (Ee) => {
          H = Number.isNaN(Ee) || Ee === G(i, D, Ee);
        };
      if (z) {
        let Ee, De;
        const Ye = F(),
          bt = E.type === Vx.BLUR || E.type === Vx.FOCUS_OUT,
          dr =
            (!g3(z._f) && !t.resolver && !G(n.errors, D) && !z._f.deps) ||
            v3(bt, G(n.touchedFields, D), n.isSubmitted, y, f),
          kr = Bx(D, a, bt);
        $e(i, D, Ye),
          bt
            ? (z._f.onBlur && z._f.onBlur(E), l && l(0))
            : z._f.onChange && z._f.onChange(E);
        const Tt = O(D, Ye, bt, !1),
          Ni = !Sn(Tt) || kr;
        if (
          (!bt && d.values.next({ name: D, type: E.type, values: { ...i } }),
          dr)
        )
          return (
            c.isValid && S(), Ni && d.state.next({ name: D, ...(kr ? {} : Tt) })
          );
        if ((!bt && kr && d.state.next({ ...n }), t.resolver)) {
          const { errors: Ws } = await b([D]);
          if ((ne(Ye), H)) {
            const Di = Zx(n.errors, r, D),
              Li = Zx(Ws, r, Di.name || D);
            (Ee = Li.error), (D = Li.name), (De = Sn(Ws));
          }
        } else
          m([D], !0),
            (Ee = (await Kx(z, i, p, t.shouldUseNativeValidation))[D]),
            m([D]),
            ne(Ye),
            H && (Ee ? (De = !1) : c.isValid && (De = await N(r, !0)));
        H && (z._f.deps && re(z._f.deps), w(D, De, Ee, Tt));
      }
    },
    ee = (E, R) => {
      if (G(n.errors, R) && E.focus) return E.focus(), 1;
    },
    re = async (E, R = {}) => {
      let D, H;
      const z = rh(E);
      if (t.resolver) {
        const F = await L(dt(E) ? E : z);
        (D = Sn(F)), (H = E ? !z.some((ne) => G(F, ne)) : D);
      } else
        E
          ? ((H = (
              await Promise.all(
                z.map(async (F) => {
                  const ne = G(r, F);
                  return await N(ne && ne._f ? { [F]: ne } : ne);
                })
              )
            ).every(Boolean)),
            !(!H && !n.isValid) && S())
          : (H = D = await N(r));
      return (
        d.state.next({
          ...(!wr(E) || (c.isValid && D !== n.isValid) ? {} : { name: E }),
          ...(t.resolver || !E ? { isValid: D } : {}),
          errors: n.errors,
        }),
        R.shouldFocus && !H && Ya(r, ee, E ? z : a.mount),
        H
      );
    },
    ge = (E) => {
      const R = { ...(o.mount ? i : s) };
      return dt(E) ? R : wr(E) ? G(R, E) : E.map((D) => G(R, D));
    },
    Se = (E, R) => ({
      invalid: !!G((R || n).errors, E),
      isDirty: !!G((R || n).dirtyFields, E),
      isTouched: !!G((R || n).touchedFields, E),
      isValidating: !!G((R || n).validatingFields, E),
      error: G((R || n).errors, E),
    }),
    qe = (E) => {
      E && rh(E).forEach((R) => vt(n.errors, R)),
        d.state.next({ errors: E ? n.errors : {} });
    },
    st = (E, R, D) => {
      const H = (G(r, E, { _f: {} })._f || {}).ref,
        z = G(n.errors, E) || {},
        { ref: F, message: ne, type: Ee, ...De } = z;
      $e(n.errors, E, { ...De, ...R, ref: H }),
        d.state.next({ name: E, errors: n.errors, isValid: !1 }),
        D && D.shouldFocus && H && H.focus && H.focus();
    },
    at = (E, R) =>
      gs(E)
        ? d.values.subscribe({ next: (D) => E(q(void 0, R), D) })
        : q(E, R, !0),
    Ne = (E, R = {}) => {
      for (const D of E ? rh(E) : a.mount)
        a.mount.delete(D),
          a.array.delete(D),
          R.keepValue || (vt(r, D), vt(i, D)),
          !R.keepError && vt(n.errors, D),
          !R.keepDirty && vt(n.dirtyFields, D),
          !R.keepTouched && vt(n.touchedFields, D),
          !R.keepIsValidating && vt(n.validatingFields, D),
          !t.shouldUnregister && !R.keepDefaultValue && vt(s, D);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(R.keepDirty ? { isDirty: $() } : {}) }),
        !R.keepIsValid && S();
    },
    Ve = ({ disabled: E, name: R, field: D, fields: H, value: z }) => {
      if ((ls(E) && o.mount) || E) {
        const F = E ? void 0 : dt(z) ? oh(D ? D._f : G(H, R)._f) : z;
        $e(i, R, F), O(R, F, !1, !1, !0);
      }
    },
    Ge = (E, R = {}) => {
      let D = G(r, E);
      const H = ls(R.disabled);
      return (
        $e(r, E, {
          ...(D || {}),
          _f: {
            ...(D && D._f ? D._f : { ref: { name: E } }),
            name: E,
            mount: !0,
            ...R,
          },
        }),
        a.mount.add(E),
        D
          ? Ve({ field: D, disabled: R.disabled, name: E, value: R.value })
          : T(E, !0, R.value),
        {
          ...(H ? { disabled: R.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!R.required,
                min: Ta(R.min),
                max: Ta(R.max),
                minLength: Ta(R.minLength),
                maxLength: Ta(R.maxLength),
                pattern: Ta(R.pattern),
              }
            : {}),
          name: E,
          onChange: I,
          onBlur: I,
          ref: (z) => {
            if (z) {
              Ge(E, R), (D = G(r, E));
              const F =
                  (dt(z.value) &&
                    z.querySelectorAll &&
                    z.querySelectorAll("input,select,textarea")[0]) ||
                  z,
                ne = m3(F),
                Ee = D._f.refs || [];
              if (ne ? Ee.find((De) => De === F) : F === D._f.ref) return;
              $e(r, E, {
                _f: {
                  ...D._f,
                  ...(ne
                    ? {
                        refs: [
                          ...Ee.filter(ih),
                          F,
                          ...(Array.isArray(G(s, E)) ? [{}] : []),
                        ],
                        ref: { type: F.type, name: E },
                      }
                    : { ref: F }),
                },
              }),
                T(E, !1, void 0, F);
            } else
              (D = G(r, E, {})),
                D._f && (D._f.mount = !1),
                (t.shouldUnregister || R.shouldUnregister) &&
                  !(o3(a.array, E) && o.action) &&
                  a.unMount.add(E);
          },
        }
      );
    },
    Kn = () => t.shouldFocusError && Ya(r, ee, a.mount),
    Qt = (E) => {
      ls(E) &&
        (d.state.next({ disabled: E }),
        Ya(
          r,
          (R, D) => {
            const H = G(r, D);
            H &&
              ((R.disabled = H._f.disabled || E),
              Array.isArray(H._f.refs) &&
                H._f.refs.forEach((z) => {
                  z.disabled = H._f.disabled || E;
                }));
          },
          0,
          !1
        ));
    },
    Fe = (E, R) => async (D) => {
      let H;
      D && (D.preventDefault && D.preventDefault(), D.persist && D.persist());
      let z = Nn(i);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: F, values: ne } = await b();
        (n.errors = F), (z = ne);
      } else await N(r);
      if ((vt(n.errors, "root"), Sn(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await E(z, D);
        } catch (F) {
          H = F;
        }
      } else R && (await R({ ...n.errors }, D)), Kn(), setTimeout(Kn);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Sn(n.errors) && !H,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        H)
      )
        throw H;
    },
    W = (E, R = {}) => {
      G(r, E) &&
        (dt(R.defaultValue)
          ? Te(E, Nn(G(s, E)))
          : (Te(E, R.defaultValue), $e(s, E, Nn(R.defaultValue))),
        R.keepTouched || vt(n.touchedFields, E),
        R.keepDirty ||
          (vt(n.dirtyFields, E),
          (n.isDirty = R.defaultValue ? $(E, Nn(G(s, E))) : $())),
        R.keepError || (vt(n.errors, E), c.isValid && S()),
        d.state.next({ ...n }));
    },
    _e = (E, R = {}) => {
      const D = E ? Nn(E) : s,
        H = Nn(D),
        z = Sn(E),
        F = z ? s : H;
      if ((R.keepDefaultValues || (s = D), !R.keepValues)) {
        if (R.keepDirtyValues)
          for (const ne of a.mount)
            G(n.dirtyFields, ne) ? $e(F, ne, G(i, ne)) : Te(ne, G(F, ne));
        else {
          if (ig && dt(E))
            for (const ne of a.mount) {
              const Ee = G(r, ne);
              if (Ee && Ee._f) {
                const De = Array.isArray(Ee._f.refs)
                  ? Ee._f.refs[0]
                  : Ee._f.ref;
                if (hd(De)) {
                  const Ye = De.closest("form");
                  if (Ye) {
                    Ye.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = e.shouldUnregister ? (R.keepDefaultValues ? Nn(s) : {}) : Nn(F)),
          d.array.next({ values: { ...F } }),
          d.values.next({ values: { ...F } });
      }
      (a = {
        mount: R.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !c.isValid || !!R.keepIsValid || !!R.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        d.state.next({
          submitCount: R.keepSubmitCount ? n.submitCount : 0,
          isDirty: z
            ? !1
            : R.keepDirty
            ? n.isDirty
            : !!(R.keepDefaultValues && !ii(E, s)),
          isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: z
            ? []
            : R.keepDirtyValues
            ? R.keepDefaultValues && i
              ? nc(s, i)
              : n.dirtyFields
            : R.keepDefaultValues && E
            ? nc(s, E)
            : {},
          touchedFields: R.keepTouched ? n.touchedFields : {},
          errors: R.keepErrors ? n.errors : {},
          isSubmitSuccessful: R.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    Be = (E, R) => _e(gs(E) ? E(i) : E, R);
  return {
    control: {
      register: Ge,
      unregister: Ne,
      getFieldState: Se,
      handleSubmit: Fe,
      setError: st,
      _executeSchema: b,
      _getWatch: q,
      _getDirty: $,
      _updateValid: S,
      _removeUnmounted: Z,
      _updateFieldArray: h,
      _updateDisabledField: Ve,
      _getFieldArray: ie,
      _reset: _e,
      _resetDefaultValues: () =>
        gs(t.defaultValues) &&
        t.defaultValues().then((E) => {
          Be(E, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (E) => {
        n = { ...n, ...E };
      },
      _disableForm: Qt,
      _subjects: d,
      _proxyFormState: c,
      _setErrors: _,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(E) {
        o = E;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(E) {
        a = E;
      },
      get _formState() {
        return n;
      },
      set _formState(E) {
        n = E;
      },
      get _options() {
        return t;
      },
      set _options(E) {
        t = { ...t, ...E };
      },
    },
    trigger: re,
    register: Ge,
    handleSubmit: Fe,
    watch: at,
    setValue: Te,
    getValues: ge,
    reset: Be,
    resetField: W,
    clearErrors: qe,
    unregister: Ne,
    setError: st,
    setFocus: (E, R = {}) => {
      const D = G(r, E),
        H = D && D._f;
      if (H) {
        const z = H.refs ? H.refs[0] : H.ref;
        z.focus && (z.focus(), R.shouldSelect && z.select());
      }
    },
    getFieldState: Se,
  };
}
function _3(e = {}) {
  const t = en.useRef(),
    n = en.useRef(),
    [r, s] = en.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: gs(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: gs(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...S3(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    c3({
      subject: i._subjects.state,
      next: (o) => {
        u3(o, i._proxyFormState, i._updateFormState) && s({ ...i._formState });
      },
    }),
    en.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    en.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    en.useEffect(() => {
      e.values && !ii(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    en.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    en.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    en.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = l3(r, i)),
    t.current
  );
}
var Qx = function (e, t, n) {
    if (e && "reportValidity" in e) {
      var r = G(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  tb = function (e, t) {
    var n = function (s) {
      var i = t.fields[s];
      i && i.ref && "reportValidity" in i.ref
        ? Qx(i.ref, s, e)
        : i.refs &&
          i.refs.forEach(function (o) {
            return Qx(o, s, e);
          });
    };
    for (var r in t.fields) n(r);
  },
  E3 = function (e) {
    return e instanceof Date;
  },
  P3 = function (e) {
    return e == null;
  },
  b3 = function (e) {
    return typeof e == "object";
  },
  T3 = function (e) {
    return !P3(e) && !Array.isArray(e) && b3(e) && !E3(e);
  },
  k3 = function (e) {
    return /^\w*$/.test(e);
  },
  ah = function (e, t, n) {
    for (
      var r = -1,
        s = k3(t)
          ? [t]
          : (function (c) {
              return (
                (d = c.replace(/["|']|\]/g, "").split(/\.|\[/)),
                Array.isArray(d) ? d.filter(Boolean) : []
              );
              var d;
            })(t),
        i = s.length,
        o = i - 1;
      ++r < i;

    ) {
      var a = s[r],
        l = n;
      if (r !== o) {
        var u = e[a];
        l = T3(u) || Array.isArray(u) ? u : isNaN(+s[r + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
    }
    return e;
  },
  C3 = function (e, t) {
    t.shouldUseNativeValidation && tb(e, t);
    var n = {};
    for (var r in e) {
      var s = G(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (R3(t.names || Object.keys(e), r)) {
        var o = Object.assign({}, G(n, r));
        ah(o, "root", i), ah(n, r, o);
      } else ah(n, r, i);
    }
    return n;
  },
  R3 = function (e, t) {
    return e.some(function (n) {
      return n.startsWith(t + ".");
    });
  },
  O3 = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        s = r.code,
        i = r.message,
        o = r.path.join(".");
      if (!n[o])
        if ("unionErrors" in r) {
          var a = r.unionErrors[0].errors[0];
          n[o] = { message: a.message, type: a.code };
        } else n[o] = { message: i, type: s };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (c) {
            return c.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var l = n[o].types,
          u = l && l[r.code];
        n[o] = QP(o, t, n, s, u ? [].concat(u, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  j3 = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var l = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (u) {
                  return (
                    i.shouldUseNativeValidation && tb({}, i),
                    { errors: {}, values: n.raw ? r : u }
                  );
                });
              } catch (u) {
                return a(u);
              }
              return l && l.then ? l.then(void 0, a) : l;
            })(0, function (o) {
              if (
                (function (a) {
                  return a.errors != null;
                })(o)
              )
                return {
                  values: {},
                  errors: C3(
                    O3(
                      o.errors,
                      !i.shouldUseNativeValidation && i.criteriaMode === "all"
                    ),
                    i
                  ),
                };
              throw o;
            })
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  };
const A3 = /^\+\d{11}$/,
  qx = 5 * 1024 * 1024,
  N3 = Ki.object({
    name: Ki.string({ required_error: "Fill in the blank!" }).min(
      2,
      "Min length 2 symbols"
    ),
    email: Ki.string({ required_error: "Fill in the blank!" }).email(
      "Invalid e-mail address"
    ),
    phone: Ki.string({ message: "Fill in the blank!" }).refine(
      (e) => A3.test(e.trim()),
      { message: "Fill in the following format +993 6X XXXXXX" }
    ),
    message: Ki.string({ required_error: "Fill in the blank!" }).min(
      5,
      "Min length 5 symbols"
    ),
    file: Ki.instanceof(File)
      .refine((e) => e.size <= qx, {
        message: `Файл должен быть меньше ${qx / (1024 * 1024)} MB`,
      })
      .optional(),
  }),
  D3 = () => {
    var y, p;
    const e = P.useRef(null),
      t = P.useRef(null),
      n = P.useRef(null),
      r = BN(t),
      {
        register: s,
        handleSubmit: i,
        setValue: o,
        reset: a,
        formState: { errors: l, isSubmitSuccessful: u, isLoading: c },
      } = _3({ resolver: j3(N3) }),
      d = (v) => {
        const S = v.target.files;
        S && S.length > 0 && o("file", S[0]);
      };
    zN(e);
    const f = async (v) => {
      var m, h, g, _;
      const S = {
        name: v.name,
        email: v.email,
        phone: v.phone,
        message: v.message,
        file:
          (h = (m = n.current) == null ? void 0 : m.files) == null
            ? void 0
            : h[0],
      };
      console.log(
        (_ = (g = n.current) == null ? void 0 : g.files) == null ? void 0 : _[0]
      );
      try {
        Qr.postContactForm(S), console.log(v), a();
      } catch (T) {
        console.error(T);
      }
    };
    return x.jsx("section", {
      className: "section-mt",
      children: x.jsx(vn, {
        children: x.jsxs("form", {
          className: "flex flex-col gap-10 items-center max-w-[580px] mx-auto",
          onSubmit: i(f),
          children: [
            x.jsx("div", {
              className: "text-center flex flex-col gap-2",
              children: x.jsx("h4", {
                className:
                  "text-[15px] leading-[130%] md:leading-[150%] md:text-[16px] text-gray",
              }),
            }),
            x.jsxs("div", {
              className: "flex flex-col w-full gap-4 sm:gap-6",
              children: [
                x.jsxs("div", {
                  className: "flex flex-col gap-[8px]",
                  children: [
                    x.jsx("input", {
                      ...s("name"),
                      type: "text",
                      className: je(
                        "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                        { "border-orochimaru": !l.name },
                        { "border-lust": l.name }
                      ),
                      placeholder: "Your full name",
                    }),
                    l.name &&
                      x.jsx("span", {
                        className: "text-lust leading-[18.2px] text-[14px]",
                        children: l.name.message,
                      }),
                  ],
                }),
                x.jsxs("div", {
                  className: "flex sm:flex-row flex-col gap-[16px]",
                  children: [
                    x.jsxs("div", {
                      className: "flex w-full flex-col gap-[8px]",
                      children: [
                        x.jsx("input", {
                          ...s("email"),
                          type: "text",
                          className: je(
                            "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                            { "border-orochimaru": !l.email },
                            { "border-lust": l.email }
                          ),
                          placeholder: "Your email",
                        }),
                        l.email &&
                          x.jsx("span", {
                            className: "text-lust leading-[18.2px] text-[14px]",
                            children: l.email.message,
                          }),
                      ],
                    }),
                    x.jsxs("div", {
                      className: "flex w-full flex-col gap-[8px]",
                      children: [
                        x.jsx("input", {
                          ...s("phone"),
                          type: "text",
                          className: je(
                            "block placeholder-uniformGrey hover:placeholder-gray w-full border-b  outline-none text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                            { "border-orochimaru": !l.phone },
                            { "border-lust": l.phone }
                          ),
                          placeholder: "Your phone",
                        }),
                        l.phone &&
                          x.jsx("span", {
                            className: "text-lust leading-[18.2px] text-[14px]",
                            children: l.phone.message,
                          }),
                      ],
                    }),
                  ],
                }),
                x.jsxs("div", {
                  className: "text-area flex flex-col w-full gap-[100px]",
                  children: [
                    x.jsx("label", {
                      htmlFor: "message",
                      className:
                        "text-uniformGrey hover:text-gray focus:text-eerieBlack",
                      children:
                        "Describe your request. Details like reference links or target deadline would definitely help.",
                    }),
                    x.jsxs("div", {
                      className: "flex w-full flex-col gap-[8px]",
                      children: [
                        x.jsx("input", {
                          ...s("message"),
                          type: "text",
                          id: "message",
                          className: je(
                            "block w-full border-b  outline-none  text-[16px] leading-[24px] text-eerieBlack pb-[8px] hover:text-gray hover:border-gray focus:border-eerieBlack transition-all duration-200",
                            { "border-orochimaru": !l.message },
                            { "border-lust": l.message }
                          ),
                        }),
                        l.message &&
                          x.jsx("span", {
                            className: "text-lust leading-[18.2px] text-[14px]",
                            children: l.message.message,
                          }),
                      ],
                    }),
                  ],
                }),
                x.jsx("div", {
                  className: "relative",
                  children: x.jsxs("div", {
                    ref: t,
                    className: "relative cursor-pointer sm:mt-0 mt-6",
                    children: [
                      x.jsx("input", {
                        ...s("file"),
                        ref: n,
                        type: "file",
                        onChange: d,
                        accept: ".rar, .pdf, .png, .jpeg, .jpg",
                        className: je(
                          "border-b-[1px] relative z-[100] border-b-orochimaru w-full py-2 file:hidden cursor-pointer text-uniformGrey transition-all duration-200 text-opacity-0 hover:text-opacity-0"
                        ),
                      }),
                      x.jsx("div", {
                        className: je(
                          "absolute bottom-2 transition-all left-0 text-uniformGrey",
                          { "text-[#808080]": r }
                        ),
                        children:
                          (y = n.current) != null && y.value
                            ? (p = n.current) == null
                              ? void 0
                              : p.value
                            : x.jsxs("div", {
                                children: [
                                  "Please upload your file ",
                                  x.jsx("br", { className: "sm:hidden" }),
                                  " (rar or pdf, less than 15 MB)",
                                ],
                              }),
                      }),
                      x.jsx("img", {
                        src: "/form/upload.svg",
                        alt: "upload",
                        className: "absolute top-2 right-0 h-6 w-6",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            x.jsxs("div", {
              className: "flex flex-col gap-[24px] items-center",
              children: [
                x.jsx("div", {
                  className: "flex sm:flex-row flex-col items-center gap-[8px]",
                  children: x.jsx("span", {
                    className: je(
                      "text-[16px] leading-[130%] text-eerieBlack text-center",
                      { "text-green-600": u }
                    ),
                    children: u
                      ? "Application sent successfully!"
                      : "To send an application you need to fill in all fields",
                  }),
                }),
                x.jsx("button", {
                  className: "font-bold relative transition-all",
                  type: "submit",
                  disabled: c,
                  children: x.jsx($p, {
                    type: "primary",
                    text: c ? "Loading..." : "send request",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  L3 = () => {
    const {
      data: e,
      isLoading: t,
      isError: n,
      isSuccess: r,
    } = $s({
      queryKey: ["contactUsData"],
      queryFn: () => Qr.getContactUs(),
      select: ({ data: s }) => s.data,
    });
    return { data: e, isLoading: t, isError: n, isSuccess: r };
  },
  M3 = () => {
    P.useEffect(() => {
      window.scroll(0, 0);
    }, []);
    const { data: e } = aa(),
      { data: t } = L3();
    return x.jsxs("div", {
      children: [
        x.jsx(xu, {
          size: "small",
          page: "contact",
          title: e ? e[3].header : "",
          banner: e ? e[3].banner.path : "",
        }),
        x.jsxs("section", {
          className: "md:mt-20 mt-10",
          children: [
            x.jsxs(vn, {
              children: [
                x.jsx("div", {
                  className:
                    "flex sm:flex-row flex-col items-center sm:items-start gap-[18px] justify-between",
                  children: t
                    ? t.map((n, r) =>
                        x.jsxs(
                          "div",
                          {
                            className:
                              "w-full max-w-[380px] text-center flex flex-col gap-4",
                            children: [
                              x.jsx("img", {
                                width: 64,
                                height: 64,
                                src: n.image,
                                className: "w-[64px] h-[64px] mx-auto",
                              }),
                              x.jsx("h2", {
                                className:
                                  "text-[24px] text-eerieBlack font-medium leading-[125%]",
                                children: n.title,
                              }),
                              x.jsx("div", {
                                className:
                                  "text-[16px] leading-[150%] text-bauhaus",
                                dangerouslySetInnerHTML: { __html: n.text },
                              }),
                            ],
                          },
                          r
                        )
                      )
                    : null,
                }),
                x.jsx(D3, {}),
              ],
            }),
            x.jsx("div", {
              className:
                "relative w-full section-mt h-[300px] sm:h-[350px] md:h-[400px] lg:h-[600px] mb-[50px]",
              children: x.jsx("iframe", {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.469591718711!2d58.40673556446483!3d37.91009744768412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffda866883d31%3A0x1fae3d9bf0c3e369!2z0JrQuNC90L7QutC-0L3RhtC10YDRgtC90YvQuSDRhtC10L3RgtGAICLQotGD0YDQutC80LXQvdC40YHRgtCw0L0iINGF0LDRg9GBINC00LvRjyDQvdC10YTQvtGA0L7Qsg!5e0!3m2!1sru!2sru!4v1717413904608!5m2!1sru!2sru",
                className: "absolute inset-0 w-full h-full ",
                style: { border: 0 },
                allowFullScreen: !0,
                loading: "lazy",
              }),
            }),
          ],
        }),
      ],
    });
  },
  Tu = (e) => {
    const {
      data: t,
      isLoading: n,
      isError: r,
      isSuccess: s,
    } = $s({
      queryKey: ["projectData"],
      queryFn: () => Qr.getProject(e),
      select: ({ data: i }) => i.data,
    });
    return { data: t, isLoading: n, isError: r, isSuccess: s };
  },
  I3 = () => {
    const { id: e } = ou(),
      { data: t } = Tu(e || ""),
      [n, r] = Hs(),
      { selectedIndex: s, scrollSnaps: i, onDotButtonClick: o } = Su(r),
      a = Dy("(min-width: 1300px)");
    P.useEffect(() => {
      window.scroll(0, 0);
    }, []);
    const l = P.useCallback(() => {
        r && r.scrollPrev();
      }, [r]),
      u = P.useCallback(() => {
        r && r.scrollNext();
      }, [r]),
      d = t && t[0] && t[0].list_characters && t[0].list_characters.length > 0;
    return x.jsxs("section", {
      className: "section-mt",
      children: [
        x.jsxs("div", {
          className:
            "w-full h-[84px] sm:h-[188px] tab:h-[220px] relative flex justify-center items-center section-mb",
          children: [
            x.jsx("img", {
              src: t && t[0] ? t[0].main_characters_image : "",
              alt: "bg-image",
              className: "w-full h-full",
            }),
            x.jsx("div", {
              className:
                "uppercase text-center text-white sm:text-[48px] text-[28px] sm:leading-[125%] leading-[130%] absolute top-[50%] translate-y-[-50%] justify-center w-full",
            }),
          ],
        }),
        x.jsxs(vn, {
          children: [
            x.jsx("div", {
              className: "flex flex-col relative",
              children: x.jsxs("div", {
                className: "flex items-center",
                children: [
                  x.jsx("button", {
                    type: "button",
                    onClick: l,
                    className: je("md:inline-block hidden cursor-pointer", {
                      "absolute w-8 h-8 -left-12 z-[100]": a,
                      "translate-x-5 w-[300px] h-8": !a,
                    }),
                    children: x.jsx("img", {
                      src: "/project/arrow.svg",
                      alt: "",
                      className: "",
                    }),
                  }),
                  x.jsx("div", {
                    className: "embla mx-0 md:mx-10 min-[1300px]:mx-0",
                    ref: n,
                    children: x.jsx("div", {
                      className: "flex items-center sm:gap-14 gap-6",
                      children: d
                        ? t[0].list_characters.map((f, y) =>
                            x.jsxs(
                              "div",
                              {
                                className:
                                  "flex-[0_0_100%] justify-center items-center",
                                children: [
                                  x.jsx("div", {
                                    className:
                                      "hidden md:flex gap-8 justify-center",
                                    children: f.character_images
                                      ? f.character_images.map((p, v) =>
                                          x.jsx(
                                            "div",
                                            {
                                              className: "h-[376px] w-full",
                                              children: x.jsx("img", {
                                                src: p.image,
                                                alt: "",
                                                className: "h-full w-full",
                                              }),
                                            },
                                            v
                                          )
                                        )
                                      : null,
                                  }),
                                  x.jsx("h4", {
                                    className:
                                      "uppercase font-bold sm:text-[32px] text-[24px] leading-[125%] sm:my-8 my-6 text-bauhaus",
                                    children: f.character_header,
                                  }),
                                  x.jsx("p", {
                                    className:
                                      "text-[16px] sm:text-[28px] font-light leading-[140%]",
                                    children: f.character_text,
                                  }),
                                ],
                              },
                              y
                            )
                          )
                        : null,
                    }),
                  }),
                  x.jsx("button", {
                    type: "button",
                    onClick: u,
                    className: je("md:block hidden cursor-pointer", {
                      "absolute w-8 h-8 -right-12 z-[100]": a,
                      "block -translate-x-5 w-[300px] h-8": !a,
                    }),
                    children: x.jsx("img", {
                      src: "/project/arrow.svg",
                      alt: "",
                      className: "rotate-180 ",
                    }),
                  }),
                ],
              }),
            }),
            x.jsx("div", {
              className: "embla__dots mt-8",
              children: i.map((f, y) =>
                x.jsx(
                  _u,
                  {
                    onClick: () => o(y),
                    className: "embla__dot".concat(
                      y === s ? " embla__dot--selected" : ""
                    ),
                  },
                  y
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  F3 = () => {
    const { id: e } = ou(),
      { data: t } = Tu(e || "");
    return x.jsx(vn, {
      children: x.jsxs("div", {
        id: "project",
        className: "sm:mt-20 mt-10",
        children: [
          x.jsxs("div", {
            className:
              "flex md:flex-nowrap flex-wrap text-white md:justify-between justify-center md:gap-0 gap-x-3 tab:px-20 md:px-[60px] px-0 sm:mb-14 mb-10",
            children: [
              x.jsxs("div", {
                className: "project-info-ellips",
                children: [
                  x.jsx("div", {
                    className:
                      "tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold",
                    children: t && t[0] ? t[0].information_number_1 : "",
                  }),
                  x.jsx("div", {
                    className:
                      "tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium",
                    children: t && t[0] ? t[0].information_text_1 : "",
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "project-info-ellips",
                children: [
                  x.jsx("div", {
                    className:
                      "tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold",
                    children: t && t[0] ? t[0].information_number_2 : "",
                  }),
                  x.jsx("div", {
                    className:
                      "tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium",
                    children: t && t[0] ? t[0].information_text_2 : "",
                  }),
                ],
              }),
              x.jsxs("div", {
                className: "project-info-ellips",
                children: [
                  x.jsx("div", {
                    className:
                      "tab:text-[72px] sm:text-[48px] text-[40px] leding-[110%] sm:mb-3 mb-2 font-semibold",
                    children: t && t[0] ? t[0].information_number_3 : "",
                  }),
                  x.jsx("div", {
                    className:
                      "tab:text-[28px] sm:text-[22px] text-[18px] leding-[110%] text-medium",
                    children: t && t[0] ? t[0].information_text_3 : "",
                  }),
                ],
              }),
            ],
          }),
          x.jsx("p", {
            className:
              "text-bauhaus leading-[150%] sm:text-[24px] text-[18px] text-center font-light",
            children: t ? t[0].information : "",
          }),
        ],
      }),
    });
  },
  V3 = () => {
    const { id: e } = ou(),
      { data: t } = Tu(e || ""),
      r = t && t[0] && t[0].list_posters && t[0].list_posters.length > 0;
    return x.jsxs("section", {
      className: "section-mt",
      children: [
        x.jsxs("div", {
          className:
            "w-full tab:h-[220px] sm:h-[188px] h-[84px] relative flex justify-center items-center section-mb",
          children: [
            x.jsx("img", {
              src: t && t[0] ? t[0].posters_image : "",
              alt: "bg-image",
              className: "w-full h-full",
            }),
            x.jsx("div", {
              className:
                "uppercase text-center text-white sm:text-[48px] text-[28px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full",
            }),
          ],
        }),
        r &&
          x.jsx(vn, {
            children: x.jsxs("div", {
              className: "grid grid-cols-2 gap-8",
              children: [
                x.jsx("img", {
                  src: t[0].list_posters[0].image,
                  alt: "poster image",
                  className: "row-span-2",
                }),
                t[0].list_posters
                  .slice(1)
                  .map((s, i) =>
                    x.jsx("img", { src: s.image, alt: "poster image" }, i)
                  ),
              ],
            }),
          }),
      ],
    });
  },
  U3 = () => {
    const { id: e } = ou(),
      { data: t } = Tu(e || ""),
      [n, r] = Hs(),
      { selectedIndex: s, scrollSnaps: i, onDotButtonClick: o } = Su(r),
      a = Dy("(min-width: 1300px)"),
      l = P.useCallback(() => {
        r && r.scrollPrev();
      }, [r]),
      u = P.useCallback(() => {
        r && r.scrollNext();
      }, [r]);
    return x.jsxs("section", {
      className: "section-mt",
      children: [
        x.jsxs("div", {
          className:
            "w-full tab:h-[220px] sm:h-[188px] h-[84px] relative flex justify-center items-center section-mb",
          children: [
            x.jsx("img", {
              src: t ? t[0].shots_image : "",
              alt: "bg-image",
              className: "w-full h-full",
            }),
            x.jsx("div", {
              className:
                "uppercase text-center text-white sm:text-[48px] text-[28px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full",
            }),
          ],
        }),
        x.jsxs(vn, {
          children: [
            x.jsxs("div", {
              className: "flex relative items-center",
              children: [
                x.jsx("button", {
                  type: "button",
                  onClick: l,
                  className: je(" cursor-pointer hidden md:block", {
                    "absolute w-8 h-8 -left-12 z-[100]": a,
                    "translate-x-5 w-20 h-8": !a,
                  }),
                  children: x.jsx("img", {
                    onClick: l,
                    src: "/project/arrow.svg",
                    alt: "",
                    className: "w-full h-full",
                  }),
                }),
                x.jsx("div", {
                  className: je("embla", {
                    "min-[1300px]:mx-0 md:mx-14 mx-0": !a,
                  }),
                  ref: n,
                  children: x.jsx("div", {
                    className: "flex gap-8",
                    children:
                      t && t[0] && t[0].list_shots
                        ? t[0].list_shots.map((c, d) =>
                            x.jsx(
                              "img",
                              {
                                src: c.shot_image,
                                alt: "",
                                className: "flex-[0_0_100%]",
                              },
                              d
                            )
                          )
                        : null,
                  }),
                }),
                x.jsx("button", {
                  type: "button",
                  onClick: u,
                  className: je(" cursor-pointer hidden md:block", {
                    "absolute -right-12 w-8 h-8 z-[100]": a,
                    "-translate-x-5 w-20 h-8": !a,
                  }),
                  children: x.jsx("img", {
                    src: "/project/arrow.svg",
                    alt: "",
                    className: "rotate-180 ",
                  }),
                }),
              ],
            }),
            x.jsx("div", {
              className: "embla__dots mt-8",
              children: i.map((c, d) =>
                x.jsx(
                  _u,
                  {
                    onClick: () => o(d),
                    className: "embla__dot".concat(
                      d === s ? " embla__dot--selected" : ""
                    ),
                  },
                  d
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  B3 = () => {
    const { id: e } = ou(),
      { data: t } = Tu(e || "");
    return (
      console.log(t || "asdas"),
      x.jsxs("div", {
        children: [
          x.jsx(xu, {
            project: !0,
            size: "big",
            page: "project",
            banner: t && t[0] ? t[0].banner_image : "",
            icon: t && t[0] ? t[0].logo : "",
            btnText: "Watch trailer",
          }),
          t && t[0].information_number_1 && x.jsx(F3, {}),
          t && t[0].list_characters && x.jsx(I3, {}),
          t && t[0].list_shots && x.jsx(U3, {}),
          t && t[0].list_posters && x.jsx(V3, {}),
        ],
      })
    );
  },
  z3 = nR([
    {
      path: "/",
      element: x.jsx(TM, {}),
      children: [
        { path: "/", element: x.jsx(QF, {}) },
        { path: "/works", element: x.jsx(XF, {}) },
        { path: "/services", element: x.jsx(tV, {}) },
        { path: "/get-in-touch", element: x.jsx(M3, {}) },
        { path: "/works/project/:id", element: x.jsx(B3, {}) },
      ],
    },
  ]),
  $3 = new ND();
lh.createRoot(document.getElementById("root")).render(
  x.jsx(en.StrictMode, {
    children: x.jsx(FD, { client: $3, children: x.jsx(dR, { router: z3 }) }),
  })
);
export { cn as _, Xo as g, QE as p, P as r, pu as u };
