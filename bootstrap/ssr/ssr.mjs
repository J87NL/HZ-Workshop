import { createServer } from "http";
import * as runtimeDom from "@vue/runtime-dom";
import { registerRuntimeCompiler, initCustomFormatter, warn, ref, computed, defineComponent, h, Fragment, onMounted, watch, onUnmounted, provide, inject, watchEffect, Teleport, reactive, unref, nextTick, cloneVNode, openBlock, createBlock, createCommentVNode, createElementBlock, normalizeStyle, KeepAlive, createVNode, renderList, onBeforeUnmount, renderSlot, withModifiers, createElementVNode, resolveComponent, withCtx, normalizeProps, mergeProps, createSSRApp } from "@vue/runtime-dom";
import { compile } from "@vue/compiler-dom";
import { isString, NOOP, extend, generateCodeFrame } from "@vue/shared";
import { renderToString } from "@vue/server-renderer";
import Pr from "axios";
function initDev() {
  {
    initCustomFormatter();
  }
}
if (process.env.NODE_ENV !== "production") {
  initDev();
}
const compileCache = /* @__PURE__ */ Object.create(null);
function compileToFunction(template, options) {
  if (!isString(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
      process.env.NODE_ENV !== "production" && warn(`invalid template option: `, template);
      return NOOP;
    }
  }
  const key = template;
  const cached = compileCache[key];
  if (cached) {
    return cached;
  }
  if (template[0] === "#") {
    const el2 = document.querySelector(template);
    if (process.env.NODE_ENV !== "production" && !el2) {
      warn(`Template element not found or is empty: ${template}`);
    }
    template = el2 ? el2.innerHTML : ``;
  }
  const opts = extend({
    hoistStatic: true,
    onError: process.env.NODE_ENV !== "production" ? onError : void 0,
    onWarn: process.env.NODE_ENV !== "production" ? (e) => onError(e, true) : NOOP
  }, options);
  if (!opts.isCustomElement && typeof customElements !== "undefined") {
    opts.isCustomElement = (tag) => !!customElements.get(tag);
  }
  const { code } = compile(template, opts);
  function onError(err, asWarning = false) {
    const message = asWarning ? err.message : `Template compilation error: ${err.message}`;
    const codeFrame = err.loc && generateCodeFrame(template, err.loc.start.offset, err.loc.end.offset);
    warn(codeFrame ? `${message}
${codeFrame}` : message);
  }
  const render = new Function("Vue", code)(runtimeDom);
  render._rc = true;
  return compileCache[key] = render;
}
registerRuntimeCompiler(compileToFunction);
function Ia(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== false; )
    ;
  return e;
}
function Pa(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), o = s.length; o--; ) {
      var l = s[e ? o : ++i];
      if (r(a[l], l, a) === false)
        break;
    }
    return t;
  };
}
var Ca = Pa();
const Da = Ca;
function qa(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var La = typeof global == "object" && global && global.Object === Object && global;
const ni = La;
var ja = typeof self == "object" && self && self.Object === Object && self, ka = ni || ja || Function("return this")();
const le = ka;
var Ba = le.Symbol;
const Se = Ba;
var ii = Object.prototype, Fa = ii.hasOwnProperty, Ra = ii.toString, rt = Se ? Se.toStringTag : void 0;
function Ma(e) {
  var t = Fa.call(e, rt), r = e[rt];
  try {
    e[rt] = void 0;
    var n = true;
  } catch {
  }
  var i = Ra.call(e);
  return n && (t ? e[rt] = r : delete e[rt]), i;
}
var Na = Object.prototype, Va = Na.toString;
function Ha(e) {
  return Va.call(e);
}
var Ua = "[object Null]", Wa = "[object Undefined]", mn = Se ? Se.toStringTag : void 0;
function xe(e) {
  return e == null ? e === void 0 ? Wa : Ua : mn && mn in Object(e) ? Ma(e) : Ha(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var za = "[object Arguments]";
function vn(e) {
  return Oe(e) && xe(e) == za;
}
var ai = Object.prototype, Ga = ai.hasOwnProperty, Ka = ai.propertyIsEnumerable, Xa = vn(function() {
  return arguments;
}()) ? vn : function(e) {
  return Oe(e) && Ga.call(e, "callee") && !Ka.call(e, "callee");
};
const si = Xa;
var Qa = Array.isArray;
const k = Qa;
function Ja() {
  return false;
}
var oi = typeof exports == "object" && exports && !exports.nodeType && exports, gn = oi && typeof module == "object" && module && !module.nodeType && module, Ya = gn && gn.exports === oi, yn = Ya ? le.Buffer : void 0, Za = yn ? yn.isBuffer : void 0, es = Za || Ja;
const fr = es;
var ts = 9007199254740991, rs = /^(?:0|[1-9]\d*)$/;
function Dr(e, t) {
  var r = typeof e;
  return t = t == null ? ts : t, !!t && (r == "number" || r != "symbol" && rs.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ns = 9007199254740991;
function qr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ns;
}
var is = "[object Arguments]", as = "[object Array]", ss = "[object Boolean]", os = "[object Date]", ls = "[object Error]", us = "[object Function]", cs = "[object Map]", fs = "[object Number]", ds = "[object Object]", ps = "[object RegExp]", hs = "[object Set]", ms = "[object String]", vs = "[object WeakMap]", gs = "[object ArrayBuffer]", ys = "[object DataView]", bs = "[object Float32Array]", ws = "[object Float64Array]", Ss = "[object Int8Array]", Os = "[object Int16Array]", $s = "[object Int32Array]", Es = "[object Uint8Array]", _s = "[object Uint8ClampedArray]", xs = "[object Uint16Array]", Ts = "[object Uint32Array]", D = {};
D[bs] = D[ws] = D[Ss] = D[Os] = D[$s] = D[Es] = D[_s] = D[xs] = D[Ts] = true;
D[is] = D[as] = D[gs] = D[ss] = D[ys] = D[os] = D[ls] = D[us] = D[cs] = D[fs] = D[ds] = D[ps] = D[hs] = D[ms] = D[vs] = false;
function As(e) {
  return Oe(e) && qr(e.length) && !!D[xe(e)];
}
function Is(e) {
  return function(t) {
    return e(t);
  };
}
var li = typeof exports == "object" && exports && !exports.nodeType && exports, st = li && typeof module == "object" && module && !module.nodeType && module, Ps = st && st.exports === li, rr = Ps && ni.process, Cs = function() {
  try {
    var e = st && st.require && st.require("util").types;
    return e || rr && rr.binding && rr.binding("util");
  } catch {
  }
}();
const bn = Cs;
var wn = bn && bn.isTypedArray, Ds = wn ? Is(wn) : As;
const ui = Ds;
var qs = Object.prototype, Ls = qs.hasOwnProperty;
function js(e, t) {
  var r = k(e), n = !r && si(e), i = !r && !n && fr(e), a = !r && !n && !i && ui(e), s = r || n || i || a, o = s ? qa(e.length, String) : [], l = o.length;
  for (var u in e)
    (t || Ls.call(e, u)) && !(s && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Dr(u, l))) && o.push(u);
  return o;
}
var ks = Object.prototype;
function Bs(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ks;
  return e === r;
}
function Fs(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Rs = Fs(Object.keys, Object);
const Ms = Rs;
var Ns = Object.prototype, Vs = Ns.hasOwnProperty;
function Hs(e) {
  if (!Bs(e))
    return Ms(e);
  var t = [];
  for (var r in Object(e))
    Vs.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function te(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Us = "[object AsyncFunction]", Ws = "[object Function]", zs = "[object GeneratorFunction]", Gs = "[object Proxy]";
function ci(e) {
  if (!te(e))
    return false;
  var t = xe(e);
  return t == Ws || t == zs || t == Us || t == Gs;
}
function Ft(e) {
  return e != null && qr(e.length) && !ci(e);
}
function Rt(e) {
  return Ft(e) ? js(e) : Hs(e);
}
function Lr(e, t) {
  return e && Da(e, t, Rt);
}
function Ks(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Ft(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== false; )
      ;
    return r;
  };
}
var Xs = Ks(Lr);
const jr = Xs;
function fi(e) {
  return e;
}
function di(e) {
  return typeof e == "function" ? e : fi;
}
function Qs(e, t) {
  var r = k(e) ? Ia : jr;
  return r(e, di(t));
}
function J(e, t) {
  return e && Lr(e, di(t));
}
var Js = Array.prototype, Ys = Js.reverse;
function Zs(e) {
  return e == null ? e : Ys.call(e);
}
const Dt = ref(0), dr = ref(1), j = ref({}), ne = ref(0), $e = typeof window > "u";
function eo(e, t, r) {
  $e || window.addEventListener("popstate", to.bind(this)), Object.keys(t).length > 0 && Dt.value++, Fr(r), Mt(r.head), Rr(e);
  const n = $e ? "" : location.href, i = kr(
    n,
    r.head,
    e,
    t,
    {},
    dr.value,
    Dt.value
  );
  pi(i);
}
function to(e) {
  !e.state || (j.value = e.state, ne.value = 0, Mr.value = {}, Mt(j.value.head), Rr(j.value.html, j.value.rememberedState.scrollY));
}
function kr(e, t, r, n, i, a, s) {
  const o = {
    url: e,
    head: t,
    html: r,
    dynamics: n,
    rememberedState: i,
    pageVisitId: a,
    dynamicVisitId: s
  };
  return j.value = o, o;
}
function ro(e) {
  $e || window.history.pushState(e, "", e.url);
}
function no(e) {
  const t = kr(
    e,
    JSON.parse(JSON.stringify(j.value.head)),
    j.value.html,
    j.value.dynamics,
    { ...j.value.rememberedState },
    j.value.pageVisitId,
    j.value.dynamicVisitId
  );
  $e || window.history.replaceState(t, "", t.url);
}
function pi(e) {
  $e || window.history.replaceState(e, "", e.url);
}
const nr = ref(0);
function io(e, t) {
  nr.value++;
  const r = e.request.responseURL;
  if (e.data.splade.lazy)
    return;
  if (e.data.splade.modal && ne.value++, Fr(e.data.splade), Mt(e.data.splade.head), r === j.value.url && (t = true), e.data.splade.modal)
    return $i(e.data.html, e.data.splade.modal);
  if (e.data.splade.preventRefresh)
    return;
  ne.value = 0;
  let n = e.data.html, i = e.data.dynamics;
  const a = Object.keys(j.value.dynamics).length > 0, s = Object.keys(i).length > 0;
  t ? (s && J(i, (l, u) => {
    i[u] += `<!-- ${nr.value} -->`;
  }), (!s || !a) && (n += `<!-- ${nr.value} -->`)) : (s && Dt.value++, (!s || !a) && dr.value++), Rr(n, 0);
  const o = kr(
    r,
    e.data.splade.head,
    n,
    i,
    j.value.rememberedState ? { ...j.value.rememberedState } : {},
    dr.value,
    Dt.value
  );
  t ? pi(o) : ro(o);
}
function ao() {
  ne.value--, Mt(oo(ne.value));
}
const hi = ref({}), mi = (e) => hi.value[e], so = (e) => Object.keys(mi.value[e]).length > 0, vi = ref({}), oo = (e) => vi.value[e], gi = ref({}), lo = (e) => gi.value[e], We = ref([]);
function uo(e) {
  We.value.push(e);
}
const co = computed(() => Zs(We.value));
function fo(e) {
  We.value[e].dismissed = true, We.value[e].html = null;
}
const Br = ref(null);
function po(e, t, r, n) {
  let i, a;
  const s = new Promise((o, l) => {
    i = o, a = l;
  });
  return Br.value = {
    title: e,
    text: t,
    confirmButton: r,
    cancelButton: n,
    resolvePromise: i,
    rejectPromise: a
  }, s;
}
function ho() {
  Br.value = null;
}
const yi = ref({});
function Fr(e) {
  yi.value = e.shared ? e.shared : {}, gi.value[ne.value] = e.flash ? e.flash : {}, vi.value[ne.value] = e.head ? e.head : {}, Qs(e.toasts ? e.toasts : [], (t) => {
    We.value.push(t);
  }), hi.value[ne.value] = e.errors ? e.errors : {};
}
const bi = ref(() => {
}), wi = ref(() => {
}), Si = ref(() => {
}), Oi = ref(() => {
});
function Mt(e) {
  bi.value(e);
}
function Rr(e, t) {
  wi.value(e, t);
}
function $i(e, t) {
  Si.value(e, t);
}
function mo(e) {
  Oi.value(e);
}
const Ei = ref({});
function _i(e, t, r) {
  Ei.value[e] = t, r && vo(e, t);
}
function vo(e, t) {
  let r = JSON.parse(localStorage.getItem("splade") || "{}") || {};
  r[e] = t, localStorage.setItem("splade", JSON.stringify(r));
}
function go(e, t) {
  return t ? (JSON.parse(localStorage.getItem("splade") || "{}") || {})[e] : Ei.value[e];
}
function $t(e, t) {
  $e || document.dispatchEvent(new CustomEvent(`splade:${e}`, { detail: t }));
}
function Qe(e, t, r, n, i) {
  $e || _i("scrollY", window.scrollY), $t("request", { url: e, method: t, data: r, headers: n, replace: i });
  const a = Pr({
    method: t,
    url: e,
    data: r,
    headers: {
      "X-Splade": true,
      "X-Requested-With": "XMLHttpRequest",
      Accept: "text/html, application/xhtml+xml",
      ...n
    },
    onUploadProgress: (s) => {
      r instanceof FormData && (s.percentage = Math.round(s.loaded / s.total * 100), $t("request-progress", { url: e, method: t, data: r, headers: n, replace: i, progress: s }));
    }
  });
  return a.then((s) => {
    io(s, i), $t("request-response", { url: e, method: t, data: r, headers: n, replace: i, response: s });
  }).catch((s) => {
    if ($t("request-error", { url: e, method: t, data: r, headers: n, replace: i, error: s }), s.response.status == 409 && s.response.headers["x-splade-redirect-away"])
      return window.location = s.response.headers["x-splade-redirect-away"];
    const o = s.response.data.splade;
    o && (o.lazy || Fr(o)), s.response.status != 422 && mo(
      s.response.data.html ? s.response.data.html : s.response.data
    );
  }), a;
}
function xi(e) {
  return Qe(e, "GET", {}, {}, true);
}
function yo(e) {
  return Qe(e, "GET", {}, {}, false);
}
function bo(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "modal" }, false);
}
const Mr = ref({});
function wo(e) {
  const t = Mr.value[e];
  return t ? (ne.value++, $i(t.html, t.type), true) : false;
}
function So(e, t, r) {
  Mr.value[e] = { html: t, type: r };
}
function Oo(e) {
  return Qe(e, "GET", {}, { "X-Splade-Modal": "slideover" }, false);
}
function $o(e, t) {
  return Qe(e, "GET", {}, { "X-Splade-Lazy": t }, false);
}
function Eo() {
  return xi(j.value.url);
}
const m = {
  init: eo,
  replace: xi,
  visit: yo,
  modal: bo,
  slideover: Oo,
  refresh: Eo,
  request: Qe,
  lazy: $o,
  replaceUrlOfCurrentPage: no,
  htmlForDynamicComponent(e) {
    return j.value.dynamics[e];
  },
  setOnHead(e) {
    bi.value = e;
  },
  setOnHtml(e) {
    wi.value = e;
  },
  setOnModal(e) {
    Si.value = e;
  },
  setOnServerError(e) {
    Oi.value = e;
  },
  hasValidationErrors: so,
  validationErrors: mi,
  sharedData: yi,
  flashData: lo,
  toasts: We,
  toastsReversed: co,
  confirmModal: Br,
  confirm: po,
  clearConfirmModal: ho,
  pushToast: uo,
  dismissToast: fo,
  restore: go,
  remember: _i,
  popStack: ao,
  currentStack: ne,
  pageVisitId: computed(() => j.value.pageVisitId),
  dynamicVisitId: computed(() => j.value.dynamicVisitId),
  isSsr: $e,
  openPreloadedModal: wo,
  registerPreloadedModal: So
};
var _o = "[object String]";
function Et(e) {
  return typeof e == "string" || !k(e) && Oe(e) && xe(e) == _o;
}
const ue = {
  __name: "Render",
  props: {
    html: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(e) {
    const t = e, r = ref(null);
    function n() {
      r.value = h({
        template: t.html
      });
    }
    return watch(() => t.html, n, { immediate: true }), (i, a) => e.html ? (openBlock(), createBlock(unref(r), { key: 0 })) : createCommentVNode("", true);
  }
}, xo = {
  __name: "ServerError",
  props: {
    html: {
      type: String,
      required: true
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const r = e, n = ref(null);
    function i() {
      const o = document.createElement("html");
      o.innerHTML = r.html, o.querySelectorAll("a").forEach((u) => u.setAttribute("target", "_top")), document.body.style.overflow = "hidden";
      const l = n.value;
      if (!l.contentWindow)
        throw new Error("iframe not yet ready.");
      l.contentWindow.document.open(), l.contentWindow.document.write(o.outerHTML), l.contentWindow.document.close(), document.addEventListener("keydown", a);
    }
    function a(o) {
      o.keyCode === 27 && s();
    }
    function s() {
      document.body.style.overflow = "visible", document.removeEventListener("keydown", a), t("close");
    }
    return onMounted(() => i()), (o, l) => (openBlock(), createElementBlock("div", {
      style: { position: "fixed", top: "0px", right: "0px", bottom: "0px", left: "0px", "z-index": "200000", "box-sizing": "border-box", height: "100vh", width: "100vw", "background-color": "rgb(0 0 0 / 0.75)", padding: "2rem" },
      onClick: s
    }, [
      createElementVNode("iframe", {
        ref_key: "iframeElement",
        ref: n,
        class: "bg-white w-full h-full"
      }, null, 512)
    ]));
  }
}, To = {
  __name: "SpladeApp",
  props: {
    el: {
      type: [String, Object],
      required: false,
      default: ""
    },
    components: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Et(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.components) || "";
        }
      }
    },
    initialHtml: {
      type: String,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Et(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.html) || "";
        }
      }
    },
    initialDynamics: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Et(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.dynamics) || {};
        }
      }
    },
    initialSpladeData: {
      type: Object,
      required: false,
      default: (e) => {
        if (!m.isSsr) {
          const t = Et(e.el) ? document.getElementById(e.el) : e.el;
          return JSON.parse(t.dataset.splade) || {};
        }
      }
    }
  },
  setup(e) {
    const t = e;
    provide("stack", 0);
    const r = ref(), n = ref([]), i = ref(null), a = ref(null), s = inject("$spladeOptions") || {}, o = computed(() => m.currentStack.value < 1 ? [] : {
      filter: "blur(4px)",
      "transition-property": "filter",
      "transition-duration": "150ms",
      "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)"
    });
    function l() {
      i.value = null;
    }
    function u(f) {
      n[f] = null, m.popStack();
    }
    function c(f) {
      const d = document.createElement("meta");
      J(f, (h2, g) => {
        d[g] = h2;
      }), document.getElementsByTagName("head")[0].appendChild(d);
    }
    function p(f) {
      var h2;
      let d = "meta";
      J(f, (g, w) => {
        d = `${d}[${w}="${g}"]`;
      });
      try {
        (h2 = document.querySelector(d)) == null || h2.remove();
      } catch {
      }
    }
    return m.setOnHead((f) => {
      var d;
      if (!m.isSsr) {
        if (a.value === null) {
          a.value = f.meta;
          return;
        }
        if (a.value.forEach((h2) => {
          p(h2);
        }), a.value = f.meta, document.title = f.title, f.meta.forEach((h2) => {
          c(h2);
        }), (d = document.querySelector('link[rel="canonical"]')) == null || d.remove(), f.canonical) {
          const h2 = document.createElement("link");
          h2.rel = "canonical", h2.href = f.canonical, document.getElementsByTagName("head")[0].appendChild(h2);
        }
      }
    }), m.setOnHtml((f, d) => {
      n.value = [], r.value = f, nextTick(() => {
        m.isSsr || window.scrollTo(0, d), s.transform_anchors && [...document.querySelectorAll("a")].forEach((h2) => {
          h2.href == "" || h2.href.charAt(0) == "#" || h2.__vnode.dynamicProps === null && (h2.hasAttribute("download") || (h2.onclick = function(g) {
            g.preventDefault(), m.visit(h2.href);
          }));
        });
      });
    }), m.setOnModal(function(f, d) {
      n.value[m.currentStack.value] = { html: f, type: d };
    }), m.setOnServerError(function(f) {
      i.value = f;
    }), m.init(t.initialHtml, t.initialDynamics, t.initialSpladeData), (f, d) => (openBlock(), createElementBlock("div", null, [
      unref(m).isSsr ? (openBlock(), createBlock(ue, {
        key: `visit.${unref(m).pageVisitId.value}`,
        style: normalizeStyle(unref(o)),
        html: r.value
      }, null, 8, ["style", "html"])) : (openBlock(), createBlock(KeepAlive, {
        key: 0,
        max: unref(s).max_keep_alive
      }, [
        (openBlock(), createBlock(ue, {
          key: `visit.${unref(m).pageVisitId.value}`,
          style: normalizeStyle(unref(o)),
          html: r.value
        }, null, 8, ["style", "html"]))
      ], 1032, ["max"])),
      createVNode(ue, { html: e.components }, null, 8, ["html"]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m).currentStack.value, (h2) => (openBlock(), createBlock(ue, {
        key: `modal.${h2}`,
        type: n.value[h2].type,
        html: n.value[h2].html,
        stack: h2,
        "on-top-of-stack": unref(m).currentStack.value === h2,
        onClose: (g) => u(h2)
      }, null, 8, ["type", "html", "stack", "on-top-of-stack", "onClose"]))), 128)),
      i.value ? (openBlock(), createBlock(xo, {
        key: 2,
        html: i.value,
        onClose: l
      }, null, 8, ["html"])) : createCommentVNode("", true)
    ]));
  }
};
function Zd(e) {
  return () => h(To, e);
}
var Ao = Object.prototype, Io = Ao.hasOwnProperty;
function Po(e, t) {
  return e != null && Io.call(e, t);
}
var Co = "[object Symbol]";
function Nt(e) {
  return typeof e == "symbol" || Oe(e) && xe(e) == Co;
}
var Do = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qo = /^\w*$/;
function Nr(e, t) {
  if (k(e))
    return false;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Nt(e) ? true : qo.test(e) || !Do.test(e) || t != null && e in Object(t);
}
var Lo = le["__core-js_shared__"];
const ir = Lo;
var Sn = function() {
  var e = /[^.]+$/.exec(ir && ir.keys && ir.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function jo(e) {
  return !!Sn && Sn in e;
}
var ko = Function.prototype, Bo = ko.toString;
function Re(e) {
  if (e != null) {
    try {
      return Bo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fo = /[\\^$.*+?()[\]{}|]/g, Ro = /^\[object .+?Constructor\]$/, Mo = Function.prototype, No = Object.prototype, Vo = Mo.toString, Ho = No.hasOwnProperty, Uo = RegExp(
  "^" + Vo.call(Ho).replace(Fo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wo(e) {
  if (!te(e) || jo(e))
    return false;
  var t = ci(e) ? Uo : Ro;
  return t.test(Re(e));
}
function zo(e, t) {
  return e == null ? void 0 : e[t];
}
function Me(e, t) {
  var r = zo(e, t);
  return Wo(r) ? r : void 0;
}
var Go = Me(Object, "create");
const ut = Go;
function Ko() {
  this.__data__ = ut ? ut(null) : {}, this.size = 0;
}
function Xo(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qo = "__lodash_hash_undefined__", Jo = Object.prototype, Yo = Jo.hasOwnProperty;
function Zo(e) {
  var t = this.__data__;
  if (ut) {
    var r = t[e];
    return r === Qo ? void 0 : r;
  }
  return Yo.call(t, e) ? t[e] : void 0;
}
var el = Object.prototype, tl = el.hasOwnProperty;
function rl(e) {
  var t = this.__data__;
  return ut ? t[e] !== void 0 : tl.call(t, e);
}
var nl = "__lodash_hash_undefined__";
function il(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ut && t === void 0 ? nl : t, this;
}
function ke(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ke.prototype.clear = Ko;
ke.prototype.delete = Xo;
ke.prototype.get = Zo;
ke.prototype.has = rl;
ke.prototype.set = il;
function al() {
  this.__data__ = [], this.size = 0;
}
function Vr(e, t) {
  return e === t || e !== e && t !== t;
}
function Vt(e, t) {
  for (var r = e.length; r--; )
    if (Vr(e[r][0], t))
      return r;
  return -1;
}
var sl = Array.prototype, ol = sl.splice;
function ll(e) {
  var t = this.__data__, r = Vt(t, e);
  if (r < 0)
    return false;
  var n = t.length - 1;
  return r == n ? t.pop() : ol.call(t, r, 1), --this.size, true;
}
function ul(e) {
  var t = this.__data__, r = Vt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function cl(e) {
  return Vt(this.__data__, e) > -1;
}
function fl(e, t) {
  var r = this.__data__, n = Vt(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function me(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
me.prototype.clear = al;
me.prototype.delete = ll;
me.prototype.get = ul;
me.prototype.has = cl;
me.prototype.set = fl;
var dl = Me(le, "Map");
const ct = dl;
function pl() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (ct || me)(),
    string: new ke()
  };
}
function hl(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ht(e, t) {
  var r = e.__data__;
  return hl(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function ml(e) {
  var t = Ht(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vl(e) {
  return Ht(this, e).get(e);
}
function gl(e) {
  return Ht(this, e).has(e);
}
function yl(e, t) {
  var r = Ht(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function ve(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ve.prototype.clear = pl;
ve.prototype.delete = ml;
ve.prototype.get = vl;
ve.prototype.has = gl;
ve.prototype.set = yl;
var bl = "Expected a function";
function Hr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bl);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (Hr.Cache || ve)(), r;
}
Hr.Cache = ve;
var wl = 500;
function Sl(e) {
  var t = Hr(e, function(n) {
    return r.size === wl && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Ol = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $l = /\\(\\)?/g, El = Sl(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ol, function(r, n, i, a) {
    t.push(i ? a.replace($l, "$1") : n || r);
  }), t;
});
const _l = El;
function Ti(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var xl = 1 / 0, On = Se ? Se.prototype : void 0, $n = On ? On.toString : void 0;
function Ut(e) {
  if (typeof e == "string")
    return e;
  if (k(e))
    return Ti(e, Ut) + "";
  if (Nt(e))
    return $n ? $n.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -xl ? "-0" : t;
}
function Ur(e) {
  return e == null ? "" : Ut(e);
}
function Wr(e, t) {
  return k(e) ? e : Nr(e, t) ? [e] : _l(Ur(e));
}
var Tl = 1 / 0;
function mt(e) {
  if (typeof e == "string" || Nt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Tl ? "-0" : t;
}
function Ai(e, t, r) {
  t = Wr(t, e);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var s = mt(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && qr(i) && Dr(s, i) && (k(e) || si(e)));
}
function G(e, t) {
  return e != null && Ai(e, t, Po);
}
function Y(e, t, ...r) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...r) : i;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Y), n;
}
var qt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qt || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function z({ visible: e = true, features: t = 0, ourProps: r, theirProps: n, ...i }) {
  var a;
  let s = Al(n, r), o = Object.assign(i, { props: s });
  if (e || t & 2 && s.static)
    return ar(o);
  if (t & 1) {
    let l = (a = s.unmount) == null || a ? 0 : 1;
    return Y(l, { [0]() {
      return null;
    }, [1]() {
      return ar({ ...i, props: { ...s, hidden: true, style: { display: "none" } } });
    } });
  }
  return ar(o);
}
function ar({ props: e, attrs: t, slots: r, slot: n, name: i }) {
  var a;
  let { as: s, ...o } = Pi(e, ["unmount", "static"]), l = (a = r.default) == null ? void 0 : a.call(r, n), u = {};
  if (n) {
    let c = false, p = [];
    for (let [f, d] of Object.entries(n))
      typeof d == "boolean" && (c = true), d === true && p.push(f);
    c && (u["data-headlessui-state"] = p.join(" "));
  }
  if (s === "template") {
    if (l = Ii(l != null ? l : []), Object.keys(o).length > 0 || Object.keys(t).length > 0) {
      let [c, ...p] = l != null ? l : [];
      if (!Il(c) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(o).concat(Object.keys(t)).sort((f, d) => f.localeCompare(d)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      return cloneVNode(c, Object.assign({}, o, u));
    }
    return Array.isArray(l) && l.length === 1 ? l[0] : l;
  }
  return h(s, Object.assign({}, o, u), { default: () => l });
}
function Ii(e) {
  return e.flatMap((t) => t.type === Fragment ? Ii(t.children) : [t]);
}
function Al(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let i in n)
      i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](i, ...a) {
      let s = r[n];
      for (let o of s) {
        if (i instanceof Event && i.defaultPrevented)
          return;
        o(i, ...a);
      }
    } });
  return t;
}
function Pi(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
function Il(e) {
  return e == null ? false : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Pl = 0;
function Cl() {
  return ++Pl;
}
function Ne() {
  return Cl();
}
var Ci = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Ci || {});
function he(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Di = Symbol("Context");
var Be = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Be || {});
function Dl() {
  return zr() !== null;
}
function zr() {
  return inject(Di, null);
}
function ql(e) {
  provide(Di, e);
}
const Wt = typeof window > "u" || typeof document > "u";
function Je(e) {
  if (Wt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = he(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let pr = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ft = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ft || {}), qi = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(qi || {}), Ll = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ll || {});
function jl(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(pr));
}
var Li = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Li || {});
function kl(e, t = 0) {
  var r;
  return e === ((r = Je(e)) == null ? void 0 : r.body) ? false : Y(t, { [0]() {
    return e.matches(pr);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(pr))
        return true;
      n = n.parentElement;
    }
    return false;
  } });
}
function ot(e) {
  e == null || e.focus({ preventScroll: true });
}
let Bl = ["textarea", "input"].join(",");
function Fl(e) {
  var t, r;
  return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Bl)) != null ? r : false;
}
function Rl(e, t = (r) => r) {
  return e.slice().sort((r, n) => {
    let i = t(r), a = t(n);
    if (i === null || a === null)
      return 0;
    let s = i.compareDocumentPosition(a);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function hr(e, t, r = true, n = null) {
  var i;
  let a = (i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? i : document, s = Array.isArray(e) ? r ? Rl(e) : e : jl(e);
  n = n != null ? n : a.activeElement;
  let o = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, s.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, s.indexOf(n)) + 1;
    if (t & 8)
      return s.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: true } : {}, c = 0, p = s.length, f;
  do {
    if (c >= p || c + p <= 0)
      return 0;
    let d = l + c;
    if (t & 16)
      d = (d + p) % p;
    else {
      if (d < 0)
        return 3;
      if (d >= p)
        return 1;
    }
    f = s[d], f == null || f.focus(u), c += o;
  } while (f !== a.activeElement);
  return t & 6 && Fl(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2;
}
function sr(e, t, r) {
  Wt || watchEffect((n) => {
    document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r));
  });
}
function Ml(e, t, r = computed(() => true)) {
  function n(a, s) {
    if (!r.value || a.defaultPrevented)
      return;
    let o = s(a);
    if (o === null || !o.getRootNode().contains(o))
      return;
    let l = function u(c) {
      return typeof c == "function" ? u(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let u of l) {
      if (u === null)
        continue;
      let c = u instanceof HTMLElement ? u : he(u);
      if (c != null && c.contains(o))
        return;
    }
    return !kl(o, Li.Loose) && o.tabIndex !== -1 && a.preventDefault(), t(a, o);
  }
  let i = ref(null);
  sr("mousedown", (a) => {
    var s, o;
    r.value && (i.value = ((o = (s = a.composedPath) == null ? void 0 : s.call(a)) == null ? void 0 : o[0]) || a.target);
  }, true), sr("click", (a) => {
    !i.value || (n(a, () => i.value), i.value = null);
  }, true), sr("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
var Lt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Lt || {});
let mr = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: n, ...i } = e, a = { "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return z({ ourProps: a, theirProps: i, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Nl(e, t, r) {
  Wt || watchEffect((n) => {
    window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r));
  });
}
var vr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(vr || {});
function Vl() {
  let e = ref(0);
  return Nl("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ji(e, t, r, n) {
  Wt || watchEffect((i) => {
    e = e != null ? e : window, e.addEventListener(t, r, n), i(() => e.removeEventListener(t, r, n));
  });
}
function Hl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ki = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(ki || {});
let nt = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = ref(null);
  n({ el: i, $el: i });
  let a = computed(() => Je(i));
  Ul({ ownerDocument: a }, computed(() => Boolean(e.features & 16)));
  let s = Wl({ ownerDocument: a, container: i, initialFocus: computed(() => e.initialFocus) }, computed(() => Boolean(e.features & 2)));
  zl({ ownerDocument: a, container: i, containers: e.containers, previousActiveElement: s }, computed(() => Boolean(e.features & 8)));
  let o = Vl();
  function l() {
    let u = he(i);
    !u || Y(o.value, { [vr.Forwards]: () => hr(u, ft.First), [vr.Backwards]: () => hr(u, ft.Last) });
  }
  return () => {
    let u = {}, c = { ref: i }, { features: p, initialFocus: f, containers: d, ...h$1 } = e;
    return h(Fragment, [Boolean(p & 4) && h(mr, { as: "button", type: "button", onFocus: l, features: Lt.Focusable }), z({ ourProps: c, theirProps: { ...t, ...h$1 }, slot: u, attrs: t, slots: r, name: "FocusTrap" }), Boolean(p & 4) && h(mr, { as: "button", type: "button", onFocus: l, features: Lt.Focusable })]);
  };
} }), { features: ki });
function Ul({ ownerDocument: e }, t) {
  let r = ref(null);
  function n() {
    var a;
    r.value || (r.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function i() {
    !r.value || (ot(r.value), r.value = null);
  }
  onMounted(() => {
    watch(t, (a, s) => {
      a !== s && (a ? n() : i());
    }, { immediate: true });
  }), onUnmounted(i);
}
function Wl({ ownerDocument: e, container: t, initialFocus: r }, n) {
  let i = ref(null), a = ref(false);
  return onMounted(() => a.value = true), onUnmounted(() => a.value = false), onMounted(() => {
    watch([t, r, n], (s, o) => {
      if (s.every((u, c) => (o == null ? void 0 : o[c]) === u) || !n.value)
        return;
      let l = he(t);
      !l || Hl(() => {
        var u, c;
        if (!a.value)
          return;
        let p = he(r), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (p) {
          if (p === f) {
            i.value = f;
            return;
          }
        } else if (l.contains(f)) {
          i.value = f;
          return;
        }
        p ? ot(p) : hr(l, ft.First | ft.NoScroll) === qi.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), i;
}
function zl({ ownerDocument: e, container: t, containers: r, previousActiveElement: n }, i) {
  var a;
  ji((a = e.value) == null ? void 0 : a.defaultView, "focus", (s) => {
    if (!i.value)
      return;
    let o = new Set(r == null ? void 0 : r.value);
    o.add(t);
    let l = n.value;
    if (!l)
      return;
    let u = s.target;
    u && u instanceof HTMLElement ? Gl(o, u) ? (n.value = u, ot(u)) : (s.preventDefault(), s.stopPropagation(), ot(l)) : ot(n.value);
  }, true);
}
function Gl(e, t) {
  var r;
  for (let n of e)
    if ((r = n.value) != null && r.contains(t))
      return true;
  return false;
}
let En = "body > *", Ue = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Map();
function _n(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function xn(e) {
  let t = be.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Kl(e, t = ref(true)) {
  watchEffect((r) => {
    if (!t.value || !e.value)
      return;
    let n = e.value, i = Je(n);
    if (i) {
      Ue.add(n);
      for (let a of be.keys())
        a.contains(n) && (xn(a), be.delete(a));
      i.querySelectorAll(En).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let s of Ue)
            if (a.contains(s))
              return;
          Ue.size === 1 && (be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), _n(a));
        }
      }), r(() => {
        if (Ue.delete(n), Ue.size > 0)
          i.querySelectorAll(En).forEach((a) => {
            if (a instanceof HTMLElement && !be.has(a)) {
              for (let s of Ue)
                if (a.contains(s))
                  return;
              be.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), _n(a);
            }
          });
        else
          for (let a of be.keys())
            xn(a), be.delete(a);
      });
    }
  });
}
let Bi = Symbol("ForcePortalRootContext");
function Xl() {
  return inject(Bi, false);
}
let gr = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(e, { slots: t, attrs: r }) {
  return provide(Bi, e.force), () => {
    let { force: n, ...i } = e;
    return z({ theirProps: i, ourProps: {}, slot: {}, slots: t, attrs: r, name: "ForcePortalRoot" });
  };
} });
function Ql(e) {
  let t = Je(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let r = t.getElementById("headlessui-portal-root");
  if (r)
    return r;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let Fi = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: r }) {
  let n = ref(null), i = computed(() => Je(n)), a = Xl(), s = inject(Ri, null), o = ref(a === true || s == null ? Ql(n.value) : s.resolveTarget());
  return watchEffect(() => {
    a || s != null && (o.value = s.resolveTarget());
  }), onUnmounted(() => {
    var l, u;
    let c = (l = i.value) == null ? void 0 : l.getElementById("headlessui-portal-root");
    !c || o.value === c && o.value.children.length <= 0 && ((u = o.value.parentElement) == null || u.removeChild(o.value));
  }), () => {
    if (o.value === null)
      return null;
    let l = { ref: n, "data-headlessui-portal": "" };
    return h(Teleport, { to: o.value }, z({ ourProps: l, theirProps: e, slot: {}, attrs: r, slots: t, name: "Portal" }));
  };
} }), Ri = Symbol("PortalGroupContext"), Jl = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: r }) {
  let n = reactive({ resolveTarget() {
    return e.target;
  } });
  return provide(Ri, n), () => {
    let { target: i, ...a } = e;
    return z({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: r, name: "PortalGroup" });
  };
} }), Mi = Symbol("StackContext");
var yr = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(yr || {});
function Yl() {
  return inject(Mi, () => {
  });
}
function Zl({ type: e, enabled: t, element: r, onUpdate: n }) {
  let i = Yl();
  function a(...s) {
    n == null || n(...s), i(...s);
  }
  onMounted(() => {
    watch(t, (s, o) => {
      s ? a(0, e, r) : o === true && a(1, e, r);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    t.value && a(1, e, r);
  }), provide(Mi, a);
}
let Ni = Symbol("DescriptionContext");
function eu() {
  let e = inject(Ni, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function tu({ slot: e = ref({}), name: t = "Description", props: r = {} } = {}) {
  let n = ref([]);
  function i(a) {
    return n.value.push(a), () => {
      let s = n.value.indexOf(a);
      s !== -1 && n.value.splice(s, 1);
    };
  }
  return provide(Ni, { register: i, slot: e, name: t, props: r }), computed(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" } }, setup(e, { attrs: t, slots: r }) {
  let n = eu(), i = `headlessui-description-${Ne()}`;
  return onMounted(() => onUnmounted(n.register(i))), () => {
    let { name: a = "Description", slot: s = ref({}), props: o = {} } = n, l = e, u = { ...Object.entries(o).reduce((c, [p, f]) => Object.assign(c, { [p]: unref(f) }), {}), id: i };
    return z({ ourProps: u, theirProps: l, slot: s.value, attrs: t, slots: r, name: a });
  };
} });
function Gr() {
  let e = [], t = [], r = { enqueue(n) {
    t.push(n);
  }, addEventListener(n, i, a, s) {
    return n.addEventListener(i, a, s), r.add(() => n.removeEventListener(i, a, s));
  }, requestAnimationFrame(...n) {
    let i = requestAnimationFrame(...n);
    r.add(() => cancelAnimationFrame(i));
  }, nextFrame(...n) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let i = setTimeout(...n);
    r.add(() => clearTimeout(i));
  }, add(n) {
    e.push(n);
  }, dispose() {
    for (let n of e.splice(0))
      n();
  }, async workQueue() {
    for (let n of t.splice(0))
      await n();
  } };
  return r;
}
function ru() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var nu = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(nu || {});
let br = Symbol("DialogContext");
function vt(e) {
  let t = inject(br, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, vt), r;
  }
  return t;
}
let _t = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Kr = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: _t }, initialFocus: { type: Object, default: null } }, emits: { close: (e) => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  var a;
  let s = ref(false);
  onMounted(() => {
    s.value = true;
  });
  let o = ref(0), l = zr(), u = computed(() => e.open === _t && l !== null ? Y(l.value, { [Be.Open]: true, [Be.Closed]: false }) : e.open), c = ref(/* @__PURE__ */ new Set()), p = ref(null), f = ref(null), d = computed(() => Je(p));
  if (i({ el: p, $el: p }), !(e.open !== _t || l !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === _t ? void 0 : e.open}`);
  let h$1 = computed(() => s.value && u.value ? 0 : 1), g = computed(() => h$1.value === 0), w = computed(() => o.value > 1), T = inject(br, null) !== null, A = computed(() => w.value ? "parent" : "leaf");
  Kl(p, computed(() => w.value ? g.value : false)), Zl({ type: "Dialog", enabled: computed(() => h$1.value === 0), element: p, onUpdate: (b, S, _) => {
    if (S === "Dialog")
      return Y(b, { [yr.Add]() {
        c.value.add(_), o.value += 1;
      }, [yr.Remove]() {
        c.value.delete(_), o.value -= 1;
      } });
  } });
  let I = tu({ name: "DialogDescription", slot: computed(() => ({ open: u.value })) }), E = `headlessui-dialog-${Ne()}`, O = ref(null), v = { titleId: O, panelRef: ref(null), dialogState: h$1, setTitleId(b) {
    O.value !== b && (O.value = b);
  }, close() {
    t("close", false);
  } };
  return provide(br, v), Ml(() => {
    var b, S, _;
    return [...Array.from((S = (b = d.value) == null ? void 0 : b.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? S : []).filter((x) => !(!(x instanceof HTMLElement) || x.contains(he(f)) || v.panelRef.value && x.contains(v.panelRef.value))), (_ = v.panelRef.value) != null ? _ : p.value];
  }, (b, S) => {
    v.close(), nextTick(() => S == null ? void 0 : S.focus());
  }, computed(() => h$1.value === 0 && !w.value)), ji((a = d.value) == null ? void 0 : a.defaultView, "keydown", (b) => {
    b.defaultPrevented || b.key === Ci.Escape && h$1.value === 0 && (w.value || (b.preventDefault(), b.stopPropagation(), v.close()));
  }), watchEffect((b) => {
    var S;
    if (h$1.value !== 0 || T)
      return;
    let _ = d.value;
    if (!_)
      return;
    let x = Gr();
    function $(B, V, R) {
      let M = B.style.getPropertyValue(V);
      return Object.assign(B.style, { [V]: R }), x.add(() => {
        Object.assign(B.style, { [V]: M });
      });
    }
    let C = _ == null ? void 0 : _.documentElement, L = ((S = _.defaultView) != null ? S : window).innerWidth - C.clientWidth;
    if ($(C, "overflow", "hidden"), L > 0) {
      let B = C.clientWidth - C.offsetWidth, V = L - B;
      $(C, "paddingRight", `${V}px`);
    }
    if (ru()) {
      let B = window.pageYOffset;
      $(C, "position", "fixed"), $(C, "marginTop", `-${B}px`), $(C, "width", "100%"), x.add(() => window.scrollTo(0, B));
    }
    b(x.dispose);
  }), watchEffect((b) => {
    if (h$1.value !== 0)
      return;
    let S = he(p);
    if (!S)
      return;
    let _ = new IntersectionObserver((x) => {
      for (let $ of x)
        $.boundingClientRect.x === 0 && $.boundingClientRect.y === 0 && $.boundingClientRect.width === 0 && $.boundingClientRect.height === 0 && v.close();
    });
    _.observe(S), b(() => _.disconnect());
  }), () => {
    let b = { ...r, ref: p, id: E, role: "dialog", "aria-modal": h$1.value === 0 ? true : void 0, "aria-labelledby": O.value, "aria-describedby": I.value }, { open: S, initialFocus: _, ...x } = e, $ = { open: h$1.value === 0 };
    return h(gr, { force: true }, () => [h(Fi, () => h(Jl, { target: p.value }, () => h(gr, { force: false }, () => h(nt, { initialFocus: _, containers: c, features: g.value ? Y(A.value, { parent: nt.features.RestoreFocus, leaf: nt.features.All & ~nt.features.FocusLock }) : nt.features.None }, () => z({ ourProps: b, theirProps: x, slot: $, attrs: r, slots: n, visible: h$1.value === 0, features: qt.RenderStrategy | qt.Static, name: "Dialog" }))))), h(mr, { features: Lt.Hidden, ref: f })]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r }) {
  let n = vt("DialogOverlay"), i = `headlessui-dialog-overlay-${Ne()}`;
  function a(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => z({ ourProps: { id: i, "aria-hidden": true, onClick: a }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogOverlay" });
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" } }, inheritAttrs: false, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = vt("DialogBackdrop"), a = `headlessui-dialog-backdrop-${Ne()}`, s = ref(null);
  return n({ el: s, $el: s }), onMounted(() => {
    if (i.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let o = e, l = { id: a, ref: s, "aria-hidden": true };
    return h(gr, { force: true }, () => h(Fi, () => z({ ourProps: l, theirProps: { ...t, ...o }, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogBackdrop" })));
  };
} });
let Xr = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: r, expose: n }) {
  let i = vt("DialogPanel"), a = `headlessui-dialog-panel-${Ne()}`;
  n({ el: i.panelRef, $el: i.panelRef });
  function s(o) {
    o.stopPropagation();
  }
  return () => {
    let o = { id: a, ref: i.panelRef, onClick: s };
    return z({ ourProps: o, theirProps: e, slot: { open: i.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" } }, setup(e, { attrs: t, slots: r }) {
  let n = vt("DialogTitle"), i = `headlessui-dialog-title-${Ne()}`;
  return onMounted(() => {
    n.setTitleId(i), onUnmounted(() => n.setTitleId(null));
  }), () => z({ ourProps: { id: i }, theirProps: e, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: r, name: "DialogTitle" });
} });
function iu(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function or(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function xt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var wr = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(wr || {});
function au(e, t) {
  let r = Gr();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: i } = getComputedStyle(e), [a, s] = [n, i].map((o) => {
    let [l = 0] = o.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return l;
  });
  return a !== 0 ? r.setTimeout(() => t("finished"), a + s) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Tn(e, t, r, n, i, a) {
  let s = Gr(), o = a !== void 0 ? iu(a) : () => {
  };
  return xt(e, ...i), or(e, ...t, ...r), s.nextFrame(() => {
    xt(e, ...r), or(e, ...n), s.add(au(e, (l) => (xt(e, ...n, ...t), or(e, ...i), o(l))));
  }), s.add(() => xt(e, ...t, ...r, ...n, ...i)), s.add(() => o("cancelled")), s.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Qr = Symbol("TransitionContext");
var su = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(su || {});
function ou() {
  return inject(Qr, null) !== null;
}
function lu() {
  let e = inject(Qr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function uu() {
  let e = inject(Jr, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Jr = Symbol("NestingContext");
function zt(e) {
  return "children" in e ? zt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Vi(e) {
  let t = ref([]), r = ref(false);
  onMounted(() => r.value = true), onUnmounted(() => r.value = false);
  function n(a, s = we.Hidden) {
    let o = t.value.findIndex(({ id: l }) => l === a);
    o !== -1 && (Y(s, { [we.Unmount]() {
      t.value.splice(o, 1);
    }, [we.Hidden]() {
      t.value[o].state = "hidden";
    } }), !zt(t) && r.value && (e == null || e()));
  }
  function i(a) {
    let s = t.value.find(({ id: o }) => o === a);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: i, unregister: n };
}
let Hi = qt.RenderStrategy, Ye = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n, expose: i }) {
  if (!ou() && Dl())
    return () => h(Ze, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, n);
  let a = ref(null), s = ref("visible"), o = computed(() => e.unmount ? we.Unmount : we.Hidden);
  i({ el: a, $el: a });
  let { show: l, appear: u } = lu(), { register: c, unregister: p } = uu(), f = { value: true }, d = Ne(), h$1 = { value: false }, g = Vi(() => {
    h$1.value || (s.value = "hidden", p(d), t("afterLeave"));
  });
  onMounted(() => {
    let S = c(d);
    onUnmounted(S);
  }), watchEffect(() => {
    if (o.value === we.Hidden && !!d) {
      if (l && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      Y(s.value, { hidden: () => p(d), visible: () => c(d) });
    }
  });
  let w = Ce(e.enter), T = Ce(e.enterFrom), A = Ce(e.enterTo), I = Ce(e.entered), E = Ce(e.leave), O = Ce(e.leaveFrom), v = Ce(e.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (s.value === "visible") {
        let S = he(a);
        if (S instanceof Comment && S.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function b(S) {
    let _ = f.value && !u.value, x = he(a);
    !x || !(x instanceof HTMLElement) || _ || (h$1.value = true, l.value && t("beforeEnter"), l.value || t("beforeLeave"), S(l.value ? Tn(x, w, T, A, I, ($) => {
      h$1.value = false, $ === wr.Finished && t("afterEnter");
    }) : Tn(x, E, O, v, I, ($) => {
      h$1.value = false, $ === wr.Finished && (zt(g) || (s.value = "hidden", p(d), t("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([l], (S, _, x) => {
      b(x), f.value = false;
    }, { immediate: true });
  }), provide(Jr, g), ql(computed(() => Y(s.value, { visible: Be.Open, hidden: Be.Closed }))), () => {
    let { appear: S, show: _, enter: x, enterFrom: $, enterTo: C, entered: L, leave: B, leaveFrom: V, leaveTo: R, ...M } = e;
    return z({ theirProps: M, ourProps: { ref: a }, slot: {}, slots: n, attrs: r, features: Hi, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), cu = Ye, Ze = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e, { emit: t, attrs: r, slots: n }) {
  let i = zr(), a = computed(() => e.show === null && i !== null ? Y(i.value, { [Be.Open]: true, [Be.Closed]: false }) : e.show);
  watchEffect(() => {
    if (![true, false].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = ref(a.value ? "visible" : "hidden"), o = Vi(() => {
    s.value = "hidden";
  }), l = ref(true), u = { show: a, appear: computed(() => e.appear || !l.value) };
  return onMounted(() => {
    watchEffect(() => {
      l.value = false, a.value ? s.value = "visible" : zt(o) || (s.value = "hidden");
    });
  }), provide(Jr, o), provide(Qr, u), () => {
    let c = Pi(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p = { unmount: e.unmount };
    return z({ ourProps: { ...p, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [h(cu, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...r, ...p, ...c }, n.default)] }, attrs: {}, features: Hi, visible: s.value === "visible", name: "Transition" });
  };
} });
const fu = {
  props: {
    defaultTitle: {
      type: String,
      required: false,
      default: ""
    },
    defaultText: {
      type: String,
      required: false,
      default: ""
    },
    defaultConfirmButton: {
      type: String,
      required: false,
      default: ""
    },
    defaultCancelButton: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    hasConfirmModal: () => !!m.confirmModal.value,
    title: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.title ? m.confirmModal.value.title : this.defaultTitle;
    },
    text: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.text ? m.confirmModal.value.text : this.defaultText;
    },
    confirmButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.confirmButton ? m.confirmModal.value.confirmButton : this.defaultConfirmButton;
    },
    cancelButton: function() {
      var e;
      return (e = m.confirmModal.value) != null && e.cancelButton ? m.confirmModal.value.cancelButton : this.defaultCancelButton;
    }
  },
  watch: {
    hasConfirmModal(e) {
      e && (this.isOpen = true);
    }
  },
  methods: {
    cancel() {
      m.confirmModal.value.rejectPromise(), this.setIsOpen(false);
    },
    confirm() {
      m.confirmModal.value.resolvePromise(), this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    },
    emitClose() {
      m.clearConfirmModal();
    }
  },
  render() {
    return this.$slots.default({
      title: this.title,
      text: this.text,
      confirmButton: this.confirmButton,
      cancelButton: this.cancelButton,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      cancel: this.cancel,
      confirm: this.confirm,
      emitClose: this.emitClose,
      Dialog: Kr,
      DialogPanel: Xr,
      TransitionRoot: Ze,
      TransitionChild: Ye
    });
  }
};
function Ui(e, t) {
  t = Wr(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[mt(t[r++])];
  return r && r == n ? e : void 0;
}
function dt(e, t, r) {
  var n = e == null ? void 0 : Ui(e, t);
  return n === void 0 ? r : n;
}
var du = function() {
  try {
    var e = Me(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const An = du;
function Wi(e, t, r) {
  t == "__proto__" && An ? An(e, t, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : e[t] = r;
}
var pu = Object.prototype, hu = pu.hasOwnProperty;
function mu(e, t, r) {
  var n = e[t];
  (!(hu.call(e, t) && Vr(n, r)) || r === void 0 && !(t in e)) && Wi(e, t, r);
}
function vu(e, t, r, n) {
  if (!te(e))
    return e;
  t = Wr(t, e);
  for (var i = -1, a = t.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var l = mt(t[i]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (i != s) {
      var c = o[l];
      u = n ? n(c, l, o) : void 0, u === void 0 && (u = te(c) ? c : Dr(t[i + 1]) ? [] : {});
    }
    mu(o, l, u), o = o[l];
  }
  return e;
}
function zi(e, t, r) {
  return e == null ? e : vu(e, t, r);
}
const gu = {
  props: {
    default: {
      type: Object,
      default: () => ({}),
      required: false
    },
    remember: {
      type: String,
      default: null,
      required: false
    },
    localStorage: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      values: {}
    };
  },
  mounted() {
    if (this.remember) {
      let e = m.restore(this.remember, this.localStorage);
      e || (e = {}), this.values = Object.assign({}, { ...this.default, ...e });
    } else
      this.values = Object.assign({}, { ...this.default });
  },
  updated() {
    this.remember && m.remember(this.remember, { ...this.values }, this.localStorage);
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(this.values, {
        ownKeys() {
          return Object.keys(e.values);
        },
        get(t, r) {
          return dt(e.values, r);
        },
        set(t, r, n) {
          zi(e.values, r, n);
        }
      })
    );
  }
};
var yu = function() {
  return le.Date.now();
};
const lr = yu;
var bu = /\s/;
function wu(e) {
  for (var t = e.length; t-- && bu.test(e.charAt(t)); )
    ;
  return t;
}
var Su = /^\s+/;
function Ou(e) {
  return e && e.slice(0, wu(e) + 1).replace(Su, "");
}
var In = 0 / 0, $u = /^[-+]0x[0-9a-f]+$/i, Eu = /^0b[01]+$/i, _u = /^0o[0-7]+$/i, xu = parseInt;
function Sr(e) {
  if (typeof e == "number")
    return e;
  if (Nt(e))
    return In;
  if (te(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = te(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ou(e);
  var r = Eu.test(e);
  return r || _u.test(e) ? xu(e.slice(2), r ? 2 : 8) : $u.test(e) ? In : +e;
}
var Tu = "Expected a function", Au = Math.max, Iu = Math.min;
function Yr(e, t, r) {
  var n, i, a, s, o, l, u = 0, c = false, p = false, f = true;
  if (typeof e != "function")
    throw new TypeError(Tu);
  t = Sr(t) || 0, te(r) && (c = !!r.leading, p = "maxWait" in r, a = p ? Au(Sr(r.maxWait) || 0, t) : a, f = "trailing" in r ? !!r.trailing : f);
  function d(v) {
    var b = n, S = i;
    return n = i = void 0, u = v, s = e.apply(S, b), s;
  }
  function h2(v) {
    return u = v, o = setTimeout(T, t), c ? d(v) : s;
  }
  function g(v) {
    var b = v - l, S = v - u, _ = t - b;
    return p ? Iu(_, a - S) : _;
  }
  function w(v) {
    var b = v - l, S = v - u;
    return l === void 0 || b >= t || b < 0 || p && S >= a;
  }
  function T() {
    var v = lr();
    if (w(v))
      return A(v);
    o = setTimeout(T, g(v));
  }
  function A(v) {
    return o = void 0, f && n ? d(v) : (n = i = void 0, s);
  }
  function I() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = i = o = void 0;
  }
  function E() {
    return o === void 0 ? s : A(lr());
  }
  function O() {
    var v = lr(), b = w(v);
    if (n = arguments, i = this, l = v, b) {
      if (o === void 0)
        return h2(l);
      if (p)
        return clearTimeout(o), o = setTimeout(T, t), d(l);
    }
    return o === void 0 && (o = setTimeout(T, t)), s;
  }
  return O.cancel = I, O.flush = E, O;
}
const Pu = {
  props: {
    url: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: false,
      default: "GET"
    },
    acceptHeader: {
      type: String,
      required: false,
      default: "application/json"
    },
    poll: {
      type: Number,
      required: false,
      default: null
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    request: {
      type: Object,
      required: false,
      default: () => ({})
    },
    manual: {
      type: Boolean,
      required: false,
      default: false
    },
    watchDebounce: {
      type: Number,
      required: false,
      default: 0
    },
    watchValue: {
      validator() {
        return true;
      },
      required: false,
      default: null
    }
  },
  data() {
    return {
      response: Object.assign({}, { ...this.default }),
      processing: false,
      debounceFunction: null
    };
  },
  watch: {
    watchValue: {
      deep: true,
      handler() {
        this.processing = true, this.watchDebounce ? this.debounceFunction() : this.performRequest();
      }
    }
  },
  mounted() {
    this.manual || this.$nextTick(this.performRequest);
  },
  created() {
    this.debounceFunction = Yr(() => {
      this.performRequest();
    }, this.watchDebounce);
  },
  methods: {
    performRequest() {
      this.processing = true;
      const e = {
        url: this.url,
        method: this.method,
        headers: {
          Accept: this.acceptHeader
        }
      };
      Object.keys(this.request).length > 0 && (e.data = this.request), Pr(e).then((t) => {
        this.response = t.data, this.processing = false;
      }).catch(() => {
        this.processing = false;
      }), this.poll && setTimeout(() => {
        this.performRequest();
      }, this.poll);
    }
  },
  render() {
    return this.$slots.default({
      processing: this.processing,
      response: this.response,
      reload: this.performRequest
    });
  }
}, Cu = {
  data() {
    return {
      isActivated: true
    };
  },
  deactivated() {
    this.isActivated = false;
  },
  activated() {
    this.isActivated = true;
  },
  render() {
    return this.$slots.default({
      Dialog: Kr,
      DialogPanel: Xr,
      isActivated: this.isActivated
    });
  }
}, Gi = {
  __name: "OnClickOutside",
  props: {
    do: {
      type: Function,
      required: true
    },
    opened: {
      type: Boolean,
      required: true
    },
    closeOnEscape: {
      type: Boolean,
      required: false,
      default: true
    },
    ignoreInnerTargets: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e, r = ref(null), n = ref(null), i = ref(null);
    return onMounted(() => {
      r.value = (a) => {
        n.value.children[0].contains(a.target) || t.ignoreInnerTargets && n.value.contains(a.target) || t.do();
      }, document.addEventListener("click", r.value), document.addEventListener("touchstart", r.value), t.closeOnEscape && (i.value = (a) => {
        t.opened && a.key === "Escape" && t.do();
      }, document.addEventListener("keydown", i.value));
    }), onBeforeUnmount(() => {
      document.removeEventListener("click", r.value), document.removeEventListener("touchstart", r.value), t.closeOnEscape && document.removeEventListener("keydown", i.value);
    }), (a, s) => (openBlock(), createElementBlock("div", {
      ref_key: "root",
      ref: n
    }, [
      renderSlot(a.$slots, "default")
    ], 512));
  }
};
function Q(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Fe(e) {
  var t = Q(e).Element;
  return e instanceof t || e instanceof Element;
}
function X(e) {
  var t = Q(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zr(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = Q(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Le = Math.max, jt = Math.min, ze = Math.round;
function Or() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ki() {
  return !/^((?!chrome|android).)*safari/i.test(Or());
}
function Ge(e, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e.getBoundingClientRect(), i = 1, a = 1;
  t && X(e) && (i = e.offsetWidth > 0 && ze(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ze(n.height) / e.offsetHeight || 1);
  var s = Fe(e) ? Q(e) : window, o = s.visualViewport, l = !Ki() && r, u = (n.left + (l && o ? o.offsetLeft : 0)) / i, c = (n.top + (l && o ? o.offsetTop : 0)) / a, p = n.width / i, f = n.height / a;
  return {
    width: p,
    height: f,
    top: c,
    right: u + p,
    bottom: c + f,
    left: u,
    x: u,
    y: c
  };
}
function en(e) {
  var t = Q(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Du(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function qu(e) {
  return e === Q(e) || !X(e) ? en(e) : Du(e);
}
function se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Te(e) {
  return ((Fe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function tn(e) {
  return Ge(Te(e)).left + en(e).scrollLeft;
}
function re(e) {
  return Q(e).getComputedStyle(e);
}
function rn(e) {
  var t = re(e), r = t.overflow, n = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + i + n);
}
function Lu(e) {
  var t = e.getBoundingClientRect(), r = ze(t.width) / e.offsetWidth || 1, n = ze(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function ju(e, t, r) {
  r === void 0 && (r = false);
  var n = X(t), i = X(t) && Lu(t), a = Te(t), s = Ge(e, i, r), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((se(t) !== "body" || rn(a)) && (o = qu(t)), X(t) ? (l = Ge(t, true), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = tn(a))), {
    x: s.left + o.scrollLeft - l.x,
    y: s.top + o.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function Xi(e) {
  var t = Ge(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Gt(e) {
  return se(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zr(e) ? e.host : null) || Te(e);
}
function Qi(e) {
  return ["html", "body", "#document"].indexOf(se(e)) >= 0 ? e.ownerDocument.body : X(e) && rn(e) ? e : Qi(Gt(e));
}
function lt(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Qi(e), i = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Q(n), s = i ? [a].concat(a.visualViewport || [], rn(n) ? n : []) : n, o = t.concat(s);
  return i ? o : o.concat(lt(Gt(s)));
}
function ku(e) {
  return ["table", "td", "th"].indexOf(se(e)) >= 0;
}
function Pn(e) {
  return !X(e) || re(e).position === "fixed" ? null : e.offsetParent;
}
function Bu(e) {
  var t = /firefox/i.test(Or()), r = /Trident/i.test(Or());
  if (r && X(e)) {
    var n = re(e);
    if (n.position === "fixed")
      return null;
  }
  var i = Gt(e);
  for (Zr(i) && (i = i.host); X(i) && ["html", "body"].indexOf(se(i)) < 0; ) {
    var a = re(i);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Kt(e) {
  for (var t = Q(e), r = Pn(e); r && ku(r) && re(r).position === "static"; )
    r = Pn(r);
  return r && (se(r) === "html" || se(r) === "body" && re(r).position === "static") ? t : r || Bu(e) || t;
}
var Z = "top", oe = "bottom", Ee = "right", ce = "left", Xt = "auto", Qt = [Z, oe, Ee, ce], Ke = "start", pt = "end", Fu = "clippingParents", Ji = "viewport", it = "popper", Ru = "reference", Cn = /* @__PURE__ */ Qt.reduce(function(e, t) {
  return e.concat([t + "-" + Ke, t + "-" + pt]);
}, []), Mu = /* @__PURE__ */ [].concat(Qt, [Xt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ke, t + "-" + pt]);
}, []), Nu = "beforeRead", Vu = "read", Hu = "afterRead", Uu = "beforeMain", Wu = "main", zu = "afterMain", Gu = "beforeWrite", Ku = "write", Xu = "afterWrite", $r = [Nu, Vu, Hu, Uu, Wu, zu, Gu, Ku, Xu];
function Qu(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function i(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(o) {
      if (!r.has(o)) {
        var l = t.get(o);
        l && i(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || i(a);
  }), n;
}
function Ju(e) {
  var t = Qu(e);
  return $r.reduce(function(r, n) {
    return r.concat(t.filter(function(i) {
      return i.phase === n;
    }));
  }, []);
}
function Yu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function ye(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return [].concat(r).reduce(function(i, a) {
    return i.replace(/%s/, a);
  }, e);
}
var De = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Zu = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Dn = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ec(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Dn).filter(function(r, n, i) {
      return i.indexOf(r) === n;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof t.name != "string" && console.error(ye(De, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(ye(De, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          $r.indexOf(t.phase) < 0 && console.error(ye(De, t.name, '"phase"', "either " + $r.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(ye(De, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(ye(De, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(ye(De, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(ye(De, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Dn.map(function(n) {
            return '"' + n + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      t.requires && t.requires.forEach(function(n) {
        e.find(function(i) {
          return i.name === n;
        }) == null && console.error(ye(Zu, String(t.name), n, n));
      });
    });
  });
}
function tc(e, t) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(n) {
    var i = t(n);
    if (!r.has(i))
      return r.add(i), true;
  });
}
function fe(e) {
  return e.split("-")[0];
}
function rc(e) {
  var t = e.reduce(function(r, n) {
    var i = r[n.name];
    return r[n.name] = i ? Object.assign({}, i, n, {
      options: Object.assign({}, i.options, n.options),
      data: Object.assign({}, i.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function nc(e, t) {
  var r = Q(e), n = Te(e), i = r.visualViewport, a = n.clientWidth, s = n.clientHeight, o = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    var u = Ki();
    (u || !u && t === "fixed") && (o = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: o + tn(e),
    y: l
  };
}
function ic(e) {
  var t, r = Te(e), n = en(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, a = Le(r.scrollWidth, r.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Le(r.scrollHeight, r.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), o = -n.scrollLeft + tn(e), l = -n.scrollTop;
  return re(i || r).direction === "rtl" && (o += Le(r.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: o,
    y: l
  };
}
function ac(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (r && Zr(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Er(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function sc(e, t) {
  var r = Ge(e, false, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function qn(e, t, r) {
  return t === Ji ? Er(nc(e, r)) : Fe(t) ? sc(t, r) : Er(ic(Te(e)));
}
function oc(e) {
  var t = lt(Gt(e)), r = ["absolute", "fixed"].indexOf(re(e).position) >= 0, n = r && X(e) ? Kt(e) : e;
  return Fe(n) ? t.filter(function(i) {
    return Fe(i) && ac(i, n) && se(i) !== "body";
  }) : [];
}
function lc(e, t, r, n) {
  var i = t === "clippingParents" ? oc(e) : [].concat(t), a = [].concat(i, [r]), s = a[0], o = a.reduce(function(l, u) {
    var c = qn(e, u, n);
    return l.top = Le(c.top, l.top), l.right = jt(c.right, l.right), l.bottom = jt(c.bottom, l.bottom), l.left = Le(c.left, l.left), l;
  }, qn(e, s, n));
  return o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
function Xe(e) {
  return e.split("-")[1];
}
function Yi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Zi(e) {
  var t = e.reference, r = e.element, n = e.placement, i = n ? fe(n) : null, a = n ? Xe(n) : null, s = t.x + t.width / 2 - r.width / 2, o = t.y + t.height / 2 - r.height / 2, l;
  switch (i) {
    case Z:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case oe:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ee:
      l = {
        x: t.x + t.width,
        y: o
      };
      break;
    case ce:
      l = {
        x: t.x - r.width,
        y: o
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? Yi(i) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Ke:
        l[u] = l[u] - (t[c] / 2 - r[c] / 2);
        break;
      case pt:
        l[u] = l[u] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return l;
}
function ea() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function uc(e) {
  return Object.assign({}, ea(), e);
}
function cc(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
function nn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, o = r.boundary, l = o === void 0 ? Fu : o, u = r.rootBoundary, c = u === void 0 ? Ji : u, p = r.elementContext, f = p === void 0 ? it : p, d = r.altBoundary, h2 = d === void 0 ? false : d, g = r.padding, w = g === void 0 ? 0 : g, T = uc(typeof w != "number" ? w : cc(w, Qt)), A = f === it ? Ru : it, I = e.rects.popper, E = e.elements[h2 ? A : f], O = lc(Fe(E) ? E : E.contextElement || Te(e.elements.popper), l, c, s), v = Ge(e.elements.reference), b = Zi({
    reference: v,
    element: I,
    strategy: "absolute",
    placement: i
  }), S = Er(Object.assign({}, I, b)), _ = f === it ? S : v, x = {
    top: O.top - _.top + T.top,
    bottom: _.bottom - O.bottom + T.bottom,
    left: O.left - _.left + T.left,
    right: _.right - O.right + T.right
  }, $ = e.modifiersData.offset;
  if (f === it && $) {
    var C = $[i];
    Object.keys(x).forEach(function(L) {
      var B = [Ee, oe].indexOf(L) >= 0 ? 1 : -1, V = [Z, oe].indexOf(L) >= 0 ? "y" : "x";
      x[L] += C[V] * B;
    });
  }
  return x;
}
var Ln = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", fc = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", jn = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function kn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function dc(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, i = t.defaultOptions, a = i === void 0 ? jn : i;
  return function(o, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jn, a),
      modifiersData: {},
      elements: {
        reference: o,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], f = false, d = {
      state: c,
      setOptions: function(T) {
        var A = typeof T == "function" ? T(c.options) : T;
        g(), c.options = Object.assign({}, a, c.options, A), c.scrollParents = {
          reference: Fe(o) ? lt(o) : o.contextElement ? lt(o.contextElement) : [],
          popper: lt(l)
        };
        var I = Ju(rc([].concat(n, c.options.modifiers)));
        if (c.orderedModifiers = I.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var E = tc([].concat(I, c.options.modifiers), function($) {
            var C = $.name;
            return C;
          });
          if (ec(E), fe(c.options.placement) === Xt) {
            var O = c.orderedModifiers.find(function($) {
              var C = $.name;
              return C === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var v = re(l), b = v.marginTop, S = v.marginRight, _ = v.marginBottom, x = v.marginLeft;
          [b, S, _, x].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h2(), d.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = c.elements, A = T.reference, I = T.popper;
          if (!kn(A, I)) {
            process.env.NODE_ENV !== "production" && console.error(Ln);
            return;
          }
          c.rects = {
            reference: ju(A, Kt(I), c.options.strategy === "fixed"),
            popper: Xi(I)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function($) {
            return c.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var E = 0, O = 0; O < c.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (E += 1, E > 100)) {
              console.error(fc);
              break;
            }
            if (c.reset === true) {
              c.reset = false, O = -1;
              continue;
            }
            var v = c.orderedModifiers[O], b = v.fn, S = v.options, _ = S === void 0 ? {} : S, x = v.name;
            typeof b == "function" && (c = b({
              state: c,
              options: _,
              name: x,
              instance: d
            }) || c);
          }
        }
      },
      update: Yu(function() {
        return new Promise(function(w) {
          d.forceUpdate(), w(c);
        });
      }),
      destroy: function() {
        g(), f = true;
      }
    };
    if (!kn(o, l))
      return process.env.NODE_ENV !== "production" && console.error(Ln), d;
    d.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h2() {
      c.orderedModifiers.forEach(function(w) {
        var T = w.name, A = w.options, I = A === void 0 ? {} : A, E = w.effect;
        if (typeof E == "function") {
          var O = E({
            state: c,
            name: T,
            instance: d,
            options: I
          }), v = function() {
          };
          p.push(O || v);
        }
      });
    }
    function g() {
      p.forEach(function(w) {
        return w();
      }), p = [];
    }
    return d;
  };
}
var Tt = {
  passive: true
};
function pc(e) {
  var t = e.state, r = e.instance, n = e.options, i = n.scroll, a = i === void 0 ? true : i, s = n.resize, o = s === void 0 ? true : s, l = Q(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", r.update, Tt);
  }), o && l.addEventListener("resize", r.update, Tt), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", r.update, Tt);
    }), o && l.removeEventListener("resize", r.update, Tt);
  };
}
const hc = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: pc,
  data: {}
};
function mc(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = Zi({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const vc = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: mc,
  data: {}
};
var gc = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function yc(e) {
  var t = e.x, r = e.y, n = window, i = n.devicePixelRatio || 1;
  return {
    x: ze(t * i) / i || 0,
    y: ze(r * i) / i || 0
  };
}
function Bn(e) {
  var t, r = e.popper, n = e.popperRect, i = e.placement, a = e.variation, s = e.offsets, o = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, f = s.x, d = f === void 0 ? 0 : f, h2 = s.y, g = h2 === void 0 ? 0 : h2, w = typeof c == "function" ? c({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  d = w.x, g = w.y;
  var T = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), I = ce, E = Z, O = window;
  if (u) {
    var v = Kt(r), b = "clientHeight", S = "clientWidth";
    if (v === Q(r) && (v = Te(r), re(v).position !== "static" && o === "absolute" && (b = "scrollHeight", S = "scrollWidth")), v = v, i === Z || (i === ce || i === Ee) && a === pt) {
      E = oe;
      var _ = p && v === O && O.visualViewport ? O.visualViewport.height : v[b];
      g -= _ - n.height, g *= l ? 1 : -1;
    }
    if (i === ce || (i === Z || i === oe) && a === pt) {
      I = Ee;
      var x = p && v === O && O.visualViewport ? O.visualViewport.width : v[S];
      d -= x - n.width, d *= l ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: o
  }, u && gc), C = c === true ? yc({
    x: d,
    y: g
  }) : {
    x: d,
    y: g
  };
  if (d = C.x, g = C.y, l) {
    var L;
    return Object.assign({}, $, (L = {}, L[E] = A ? "0" : "", L[I] = T ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, $, (t = {}, t[E] = A ? g + "px" : "", t[I] = T ? d + "px" : "", t.transform = "", t));
}
function bc(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, i = n === void 0 ? true : n, a = r.adaptive, s = a === void 0 ? true : a, o = r.roundOffsets, l = o === void 0 ? true : o;
  if (process.env.NODE_ENV !== "production") {
    var u = re(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: fe(t.placement),
    variation: Xe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Bn(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Bn(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const wc = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: bc,
  data: {}
};
function Sc(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, i = t.attributes[r] || {}, a = t.elements[r];
    !X(a) || !se(a) || (Object.assign(a.style, n), Object.keys(i).forEach(function(s) {
      var o = i[s];
      o === false ? a.removeAttribute(s) : a.setAttribute(s, o === true ? "" : o);
    }));
  });
}
function Oc(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var i = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), o = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !X(i) || !se(i) || (Object.assign(i.style, o), Object.keys(a).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const $c = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: Sc,
  effect: Oc,
  requires: ["computeStyles"]
};
var Ec = [hc, vc, wc, $c], _c = /* @__PURE__ */ dc({
  defaultModifiers: Ec
});
function xc(e) {
  return e === "x" ? "y" : "x";
}
function It(e, t, r) {
  return Le(e, jt(t, r));
}
function Tc(e, t, r) {
  var n = It(e, t, r);
  return n > r ? r : n;
}
function Ac(e) {
  var t = e.state, r = e.options, n = e.name, i = r.mainAxis, a = i === void 0 ? true : i, s = r.altAxis, o = s === void 0 ? false : s, l = r.boundary, u = r.rootBoundary, c = r.altBoundary, p = r.padding, f = r.tether, d = f === void 0 ? true : f, h2 = r.tetherOffset, g = h2 === void 0 ? 0 : h2, w = nn(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), T = fe(t.placement), A = Xe(t.placement), I = !A, E = Yi(T), O = xc(E), v = t.modifiersData.popperOffsets, b = t.rects.reference, S = t.rects.popper, _ = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, x = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, C = {
    x: 0,
    y: 0
  };
  if (!!v) {
    if (a) {
      var L, B = E === "y" ? Z : ce, V = E === "y" ? oe : Ee, R = E === "y" ? "height" : "width", M = v[E], yt = M + w[B], Ae = M - w[V], bt = d ? -S[R] / 2 : 0, Yt = A === Ke ? b[R] : S[R], et = A === Ke ? -S[R] : -b[R], wt = t.elements.arrow, He = d && wt ? Xi(wt) : {
        width: 0,
        height: 0
      }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ea(), tt = ge[B], St = ge[V], Ie = It(0, b[R], He[R]), Zt = I ? b[R] / 2 - bt - Ie - tt - x.mainAxis : Yt - Ie - tt - x.mainAxis, ha = I ? -b[R] / 2 + bt + Ie + St + x.mainAxis : et + Ie + St + x.mainAxis, er = t.elements.arrow && Kt(t.elements.arrow), ma = er ? E === "y" ? er.clientTop || 0 : er.clientLeft || 0 : 0, sn = (L = $ == null ? void 0 : $[E]) != null ? L : 0, va = M + Zt - sn - ma, ga = M + ha - sn, on = It(d ? jt(yt, va) : yt, M, d ? Le(Ae, ga) : Ae);
      v[E] = on, C[E] = on - M;
    }
    if (o) {
      var ln, ya = E === "x" ? Z : ce, ba = E === "x" ? oe : Ee, Pe = v[O], Ot = O === "y" ? "height" : "width", un = Pe + w[ya], cn = Pe - w[ba], tr = [Z, ce].indexOf(T) !== -1, fn = (ln = $ == null ? void 0 : $[O]) != null ? ln : 0, dn = tr ? un : Pe - b[Ot] - S[Ot] - fn + x.altAxis, pn = tr ? Pe + b[Ot] + S[Ot] - fn - x.altAxis : cn, hn = d && tr ? Tc(dn, Pe, pn) : It(d ? dn : un, Pe, d ? pn : cn);
      v[O] = hn, C[O] = hn - Pe;
    }
    t.modifiersData[n] = C;
  }
}
const Ic = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Ac,
  requiresIfExists: ["offset"]
};
var Pc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pc[t];
  });
}
var Cc = {
  start: "end",
  end: "start"
};
function Fn(e) {
  return e.replace(/start|end/g, function(t) {
    return Cc[t];
  });
}
function Dc(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, i = r.boundary, a = r.rootBoundary, s = r.padding, o = r.flipVariations, l = r.allowedAutoPlacements, u = l === void 0 ? Mu : l, c = Xe(n), p = c ? o ? Cn : Cn.filter(function(h2) {
    return Xe(h2) === c;
  }) : Qt, f = p.filter(function(h2) {
    return u.indexOf(h2) >= 0;
  });
  f.length === 0 && (f = p, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var d = f.reduce(function(h2, g) {
    return h2[g] = nn(e, {
      placement: g,
      boundary: i,
      rootBoundary: a,
      padding: s
    })[fe(g)], h2;
  }, {});
  return Object.keys(d).sort(function(h2, g) {
    return d[h2] - d[g];
  });
}
function qc(e) {
  if (fe(e) === Xt)
    return [];
  var t = Pt(e);
  return [Fn(e), t, Fn(t)];
}
function Lc(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var i = r.mainAxis, a = i === void 0 ? true : i, s = r.altAxis, o = s === void 0 ? true : s, l = r.fallbackPlacements, u = r.padding, c = r.boundary, p = r.rootBoundary, f = r.altBoundary, d = r.flipVariations, h2 = d === void 0 ? true : d, g = r.allowedAutoPlacements, w = t.options.placement, T = fe(w), A = T === w, I = l || (A || !h2 ? [Pt(w)] : qc(w)), E = [w].concat(I).reduce(function(He, ge) {
      return He.concat(fe(ge) === Xt ? Dc(t, {
        placement: ge,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: h2,
        allowedAutoPlacements: g
      }) : ge);
    }, []), O = t.rects.reference, v = t.rects.popper, b = /* @__PURE__ */ new Map(), S = true, _ = E[0], x = 0; x < E.length; x++) {
      var $ = E[x], C = fe($), L = Xe($) === Ke, B = [Z, oe].indexOf(C) >= 0, V = B ? "width" : "height", R = nn(t, {
        placement: $,
        boundary: c,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), M = B ? L ? Ee : ce : L ? oe : Z;
      O[V] > v[V] && (M = Pt(M));
      var yt = Pt(M), Ae = [];
      if (a && Ae.push(R[C] <= 0), o && Ae.push(R[M] <= 0, R[yt] <= 0), Ae.every(function(He) {
        return He;
      })) {
        _ = $, S = false;
        break;
      }
      b.set($, Ae);
    }
    if (S)
      for (var bt = h2 ? 3 : 1, Yt = function(ge) {
        var tt = E.find(function(St) {
          var Ie = b.get(St);
          if (Ie)
            return Ie.slice(0, ge).every(function(Zt) {
              return Zt;
            });
        });
        if (tt)
          return _ = tt, "break";
      }, et = bt; et > 0; et--) {
        var wt = Yt(et);
        if (wt === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[n]._skip = true, t.placement = _, t.reset = true);
  }
}
const jc = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Lc,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
}, Ve = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, i] of t)
    r[n] = i;
  return r;
}, kc = {
  components: {
    OnClickOutside: Gi
  },
  props: {
    spladeId: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: "bottom-start",
      required: false
    },
    strategy: {
      type: String,
      default: "absolute",
      required: false
    },
    inline: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    teleport: {
      type: Boolean,
      default: false,
      required: false
    },
    closeOnClick: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      opened: false,
      popper: null
    };
  },
  computed: {
    buttonStyle() {
      return this.inline ? { display: "inline" } : {};
    },
    wrapperStyle() {
      const e = { position: "relative" };
      return this.inline && (e.display = "inline"), e;
    }
  },
  watch: {
    opened() {
      this.popper.update();
    }
  },
  mounted: async function() {
    this.teleport && await nextTick();
    const e = this.teleport ? document.querySelector(`div[data-splade-dropdown-id="${this.spladeId}"]`) : this.$refs.tooltip.children[0];
    this.popper = _c(this.$refs.button, e, {
      placement: this.placement,
      modifiers: [jc, Ic],
      strategy: this.strategy
    });
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  }
}, Bc = { ref: "tooltip" };
function Fc(e, t, r, n, i, a) {
  const s = resolveComponent("OnClickOutside");
  return openBlock(), createBlock(s, {
    style: normalizeStyle(a.wrapperStyle),
    do: a.hide,
    opened: i.opened,
    "ignore-inner-targets": !r.closeOnClick
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "button",
        style: normalizeStyle(a.buttonStyle)
      }, [
        renderSlot(e.$slots, "button", {
          toggle: a.toggle,
          disabled: r.disabled
        })
      ], 4),
      createElementVNode("div", Bc, [
        renderSlot(e.$slots, "default", {
          hide: a.hide,
          opened: i.opened
        })
      ], 512)
    ]),
    _: 3
  }, 8, ["style", "do", "opened", "ignore-inner-targets"]);
}
const Rc = /* @__PURE__ */ Ve(kc, [["render", Fc]]), Mc = {
  __name: "DynamicHtml",
  props: {
    keepAliveKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(e) {
    const t = inject("$splade") || {}, r = inject("$spladeOptions") || {};
    return (n, i) => unref(t).isSsr ? (openBlock(), createBlock(ue, {
      key: e.keepAliveKey,
      html: unref(t).htmlForDynamicComponent(e.name)
    }, null, 8, ["html"])) : (openBlock(), createBlock(KeepAlive, {
      key: 0,
      max: unref(r).max_keep_alive
    }, [
      (openBlock(), createBlock(ue, {
        key: e.keepAliveKey,
        html: unref(t).htmlForDynamicComponent(e.name)
      }, null, 8, ["html"]))
    ], 1032, ["max"]));
  }
};
function ta(e) {
  return e && e.length ? e[0] : void 0;
}
const Nc = {
  inject: ["stack"],
  computed: {
    values() {
      return m.validationErrors(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return G(e.values, t);
      },
      first(t) {
        return ta(e.values[t] || []);
      },
      all: { ...this.values },
      ...this.values
    });
  }
}, Vc = {
  props: {
    private: {
      type: Boolean,
      required: false,
      default: false
    },
    channel: {
      type: String,
      required: true
    },
    listeners: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      subscribed: false,
      subscription: null,
      subscriptions: [],
      events: []
    };
  },
  beforeUnmount() {
    this.subscription && (window.Echo.leave(this.subscription.subscription.name), this.subscription = null, this.subscriptions = []);
  },
  mounted() {
    this.subscription = this.private ? window.Echo.private(this.channel) : window.Echo.channel(this.channel), this.subscription.on("pusher:subscription_succeeded", () => {
      this.subscribed = true;
    }), this.listeners.forEach((e) => {
      const t = this.subscription.listen(e, (r) => {
        const n = "splade.redirect", i = "splade.refresh", a = "splade.toast";
        let s = null, o = false, l = [];
        J(r, (u) => {
          !te(u) || (n in u && (s = u[n]), i in u && (o = u[i]), a in u && l.push(u));
        }), s ? m.visit(s) : o ? m.refresh() : this.events.push({ name: e, data: r }), l.length > 0 && l.forEach((u) => {
          m.pushToast(u);
        }), this.$root.$emit(`event.${e}`, r);
      });
      this.subscriptions.push(t);
    });
  },
  render() {
    return this.$slots.default({
      subscribed: this.subscribed,
      events: this.events
    });
  }
}, Hc = {
  props: {
    form: {
      type: Object,
      required: true
    },
    field: {
      type: String,
      required: true
    },
    multiple: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      filenames: []
    };
  },
  methods: {
    handleFileInput(e) {
      const t = Object.values(e.target.files);
      this.form.$put(this.field, this.multiple ? t : t[0]), this.filenames = [], t.forEach((r) => {
        this.filenames.push(r.name);
      });
    }
  }
}, Uc = { ref: "file" };
function Wc(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", Uc, [
    renderSlot(e.$slots, "default", {
      handleFileInput: a.handleFileInput,
      filenames: i.filenames
    })
  ], 512);
}
const zc = /* @__PURE__ */ Ve(Hc, [["render", Wc]]), Gc = {
  inject: ["stack"],
  computed: {
    values() {
      return m.flashData(this.stack);
    }
  },
  render() {
    const e = this;
    return this.$slots.default({
      has(t) {
        return G(e.values, t);
      },
      ...this.values
    });
  }
};
function ra(e, t, r) {
  e = e || {}, t = t || new FormData(), r = r || null;
  for (const n in e)
    Object.prototype.hasOwnProperty.call(e, n) && ia(t, na(r, n), e[n]);
  return t;
}
function na(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ia(e, t, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => ia(e, na(t, n.toString()), r[n]));
  if (r instanceof Date)
    return e.append(t, r.toISOString());
  if (r instanceof File)
    return e.append(t, r, r.name);
  if (r instanceof Blob)
    return e.append(t, r);
  if (typeof r == "boolean")
    return e.append(t, r ? "1" : "0");
  if (typeof r == "string")
    return e.append(t, r);
  if (typeof r == "number")
    return e.append(t, `${r}`);
  if (r == null)
    return e.append(t, "");
  ra(r, e, t);
}
function Kc() {
  this.__data__ = new me(), this.size = 0;
}
function Xc(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Qc(e) {
  return this.__data__.get(e);
}
function Jc(e) {
  return this.__data__.has(e);
}
var Yc = 200;
function Zc(e, t) {
  var r = this.__data__;
  if (r instanceof me) {
    var n = r.__data__;
    if (!ct || n.length < Yc - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new ve(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function de(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
de.prototype.clear = Kc;
de.prototype.delete = Xc;
de.prototype.get = Qc;
de.prototype.has = Jc;
de.prototype.set = Zc;
var ef = "__lodash_hash_undefined__";
function tf(e) {
  return this.__data__.set(e, ef), this;
}
function rf(e) {
  return this.__data__.has(e);
}
function kt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new ve(); ++t < r; )
    this.add(e[t]);
}
kt.prototype.add = kt.prototype.push = tf;
kt.prototype.has = rf;
function nf(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return true;
  return false;
}
function af(e, t) {
  return e.has(t);
}
var sf = 1, of = 2;
function aa(e, t, r, n, i, a) {
  var s = r & sf, o = e.length, l = t.length;
  if (o != l && !(s && l > o))
    return false;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, f = true, d = r & of ? new kt() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < o; ) {
    var h2 = e[p], g = t[p];
    if (n)
      var w = s ? n(g, h2, p, t, e, a) : n(h2, g, p, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      f = false;
      break;
    }
    if (d) {
      if (!nf(t, function(T, A) {
        if (!af(d, A) && (h2 === T || i(h2, T, r, n, a)))
          return d.push(A);
      })) {
        f = false;
        break;
      }
    } else if (!(h2 === g || i(h2, g, r, n, a))) {
      f = false;
      break;
    }
  }
  return a.delete(e), a.delete(t), f;
}
var lf = le.Uint8Array;
const Rn = lf;
function uf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
function cf(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ff = 1, df = 2, pf = "[object Boolean]", hf = "[object Date]", mf = "[object Error]", vf = "[object Map]", gf = "[object Number]", yf = "[object RegExp]", bf = "[object Set]", wf = "[object String]", Sf = "[object Symbol]", Of = "[object ArrayBuffer]", $f = "[object DataView]", Mn = Se ? Se.prototype : void 0, ur = Mn ? Mn.valueOf : void 0;
function Ef(e, t, r, n, i, a, s) {
  switch (r) {
    case $f:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Of:
      return !(e.byteLength != t.byteLength || !a(new Rn(e), new Rn(t)));
    case pf:
    case hf:
    case gf:
      return Vr(+e, +t);
    case mf:
      return e.name == t.name && e.message == t.message;
    case yf:
    case wf:
      return e == t + "";
    case vf:
      var o = uf;
    case bf:
      var l = n & ff;
      if (o || (o = cf), e.size != t.size && !l)
        return false;
      var u = s.get(e);
      if (u)
        return u == t;
      n |= df, s.set(e, t);
      var c = aa(o(e), o(t), n, i, a, s);
      return s.delete(e), c;
    case Sf:
      if (ur)
        return ur.call(e) == ur.call(t);
  }
  return false;
}
function _f(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
function xf(e, t, r) {
  var n = t(e);
  return k(e) ? n : _f(n, r(e));
}
function sa(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function Tf() {
  return [];
}
var Af = Object.prototype, If = Af.propertyIsEnumerable, Nn = Object.getOwnPropertySymbols, Pf = Nn ? function(e) {
  return e == null ? [] : (e = Object(e), sa(Nn(e), function(t) {
    return If.call(e, t);
  }));
} : Tf;
const Cf = Pf;
function Vn(e) {
  return xf(e, Rt, Cf);
}
var Df = 1, qf = Object.prototype, Lf = qf.hasOwnProperty;
function jf(e, t, r, n, i, a) {
  var s = r & Df, o = Vn(e), l = o.length, u = Vn(t), c = u.length;
  if (l != c && !s)
    return false;
  for (var p = l; p--; ) {
    var f = o[p];
    if (!(s ? f in t : Lf.call(t, f)))
      return false;
  }
  var d = a.get(e), h2 = a.get(t);
  if (d && h2)
    return d == t && h2 == e;
  var g = true;
  a.set(e, t), a.set(t, e);
  for (var w = s; ++p < l; ) {
    f = o[p];
    var T = e[f], A = t[f];
    if (n)
      var I = s ? n(A, T, f, t, e, a) : n(T, A, f, e, t, a);
    if (!(I === void 0 ? T === A || i(T, A, r, n, a) : I)) {
      g = false;
      break;
    }
    w || (w = f == "constructor");
  }
  if (g && !w) {
    var E = e.constructor, O = t.constructor;
    E != O && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof O == "function" && O instanceof O) && (g = false);
  }
  return a.delete(e), a.delete(t), g;
}
var kf = Me(le, "DataView");
const _r = kf;
var Bf = Me(le, "Promise");
const xr = Bf;
var Ff = Me(le, "Set");
const Tr = Ff;
var Rf = Me(le, "WeakMap");
const Ar = Rf;
var Hn = "[object Map]", Mf = "[object Object]", Un = "[object Promise]", Wn = "[object Set]", zn = "[object WeakMap]", Gn = "[object DataView]", Nf = Re(_r), Vf = Re(ct), Hf = Re(xr), Uf = Re(Tr), Wf = Re(Ar), qe = xe;
(_r && qe(new _r(new ArrayBuffer(1))) != Gn || ct && qe(new ct()) != Hn || xr && qe(xr.resolve()) != Un || Tr && qe(new Tr()) != Wn || Ar && qe(new Ar()) != zn) && (qe = function(e) {
  var t = xe(e), r = t == Mf ? e.constructor : void 0, n = r ? Re(r) : "";
  if (n)
    switch (n) {
      case Nf:
        return Gn;
      case Vf:
        return Hn;
      case Hf:
        return Un;
      case Uf:
        return Wn;
      case Wf:
        return zn;
    }
  return t;
});
const Kn = qe;
var zf = 1, Xn = "[object Arguments]", Qn = "[object Array]", At = "[object Object]", Gf = Object.prototype, Jn = Gf.hasOwnProperty;
function Kf(e, t, r, n, i, a) {
  var s = k(e), o = k(t), l = s ? Qn : Kn(e), u = o ? Qn : Kn(t);
  l = l == Xn ? At : l, u = u == Xn ? At : u;
  var c = l == At, p = u == At, f = l == u;
  if (f && fr(e)) {
    if (!fr(t))
      return false;
    s = true, c = false;
  }
  if (f && !c)
    return a || (a = new de()), s || ui(e) ? aa(e, t, r, n, i, a) : Ef(e, t, l, r, n, i, a);
  if (!(r & zf)) {
    var d = c && Jn.call(e, "__wrapped__"), h2 = p && Jn.call(t, "__wrapped__");
    if (d || h2) {
      var g = d ? e.value() : e, w = h2 ? t.value() : t;
      return a || (a = new de()), i(g, w, r, n, a);
    }
  }
  return f ? (a || (a = new de()), jf(e, t, r, n, i, a)) : false;
}
function Jt(e, t, r, n, i) {
  return e === t ? true : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : Kf(e, t, r, n, Jt, i);
}
var Xf = 1, Qf = 2;
function Jf(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var o = r[i];
    if (s && o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return false;
  }
  for (; ++i < a; ) {
    o = r[i];
    var l = o[0], u = e[l], c = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(l in e))
        return false;
    } else {
      var p = new de();
      if (n)
        var f = n(u, c, l, e, t, p);
      if (!(f === void 0 ? Jt(c, u, Xf | Qf, n, p) : f))
        return false;
    }
  }
  return true;
}
function oa(e) {
  return e === e && !te(e);
}
function Yf(e) {
  for (var t = Rt(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, oa(i)];
  }
  return t;
}
function la(e, t) {
  return function(r) {
    return r == null ? false : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Zf(e) {
  var t = Yf(e);
  return t.length == 1 && t[0][2] ? la(t[0][0], t[0][1]) : function(r) {
    return r === e || Jf(r, e, t);
  };
}
function ed(e, t) {
  return e != null && t in Object(e);
}
function td(e, t) {
  return e != null && Ai(e, t, ed);
}
var rd = 1, nd = 2;
function id(e, t) {
  return Nr(e) && oa(t) ? la(mt(e), t) : function(r) {
    var n = dt(r, e);
    return n === void 0 && n === t ? td(r, e) : Jt(t, n, rd | nd);
  };
}
function ad(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function sd(e) {
  return function(t) {
    return Ui(t, e);
  };
}
function od(e) {
  return Nr(e) ? ad(mt(e)) : sd(e);
}
function gt(e) {
  return typeof e == "function" ? e : e == null ? fi : typeof e == "object" ? k(e) ? id(e[0], e[1]) : Zf(e) : od(e);
}
function ld(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!Ft(t)) {
      var a = gt(r);
      t = Rt(t), r = function(o) {
        return a(i[o], o, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
function ud(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Yn = 1 / 0, cd = 17976931348623157e292;
function fd(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = Sr(e), e === Yn || e === -Yn) {
    var t = e < 0 ? -1 : 1;
    return t * cd;
  }
  return e === e ? e : 0;
}
function an(e) {
  var t = fd(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var dd = Math.max;
function pd(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : an(r);
  return i < 0 && (i = dd(n + i, 0)), ud(e, gt(t), i);
}
var hd = ld(pd);
const ua = hd;
var md = "[object Boolean]";
function ca(e) {
  return e === true || e === false || Oe(e) && xe(e) == md;
}
function fa(e, t) {
  var r = {};
  return t = gt(t), Lr(e, function(n, i, a) {
    Wi(r, i, t(n, i, a));
  }), r;
}
const vd = {
  inject: ["stack"],
  props: {
    spladeId: {
      type: String,
      required: true,
      default: ""
    },
    action: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : location.href;
      }
    },
    method: {
      type: String,
      required: false,
      default: "POST"
    },
    default: {
      type: Object,
      required: false,
      default: () => ({})
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    stay: {
      type: Boolean,
      require: false,
      default: false
    },
    restoreOnSuccess: {
      type: Boolean,
      required: false,
      default: true
    },
    resetOnSuccess: {
      type: Boolean,
      required: false,
      default: false
    },
    scrollOnError: {
      type: Boolean,
      required: false,
      default: true
    },
    submitOnChange: {
      type: [Boolean, Array],
      required: false,
      default: false
    }
  },
  emits: ["success", "error"],
  data() {
    return {
      missingAttributes: [],
      values: Object.assign({}, { ...this.default }),
      processing: false,
      wasSuccessful: false,
      recentlySuccessful: false,
      recentlySuccessfulTimeoutId: null,
      formElement: null
    };
  },
  computed: {
    $all() {
      return this.values;
    },
    rawErrors() {
      return m.validationErrors(this.stack);
    },
    errors() {
      return fa(this.rawErrors, (e) => e.join(`
`));
    }
  },
  mounted() {
    let e = document.querySelector(`form[data-splade-id="${this.spladeId}"]`);
    e || (e = document), this.formElement = e, this.missingAttributes.forEach((t) => {
      let r = "";
      const n = e.querySelector(`[name="${t}"]`);
      n ? r = n.type === "checkbox" ? false : "" : e.querySelector(`[name="${t}[]"]`) ? r = [] : (e.querySelector(`[name^="${t}."]`) || e.querySelector(`[name^="${t}["]`)) && (r = {}), this.$put(t, r);
    }), this.missingAttributes = [], this.submitOnChange === true ? this.$watch("values", () => {
      this.$nextTick(() => this.request());
    }, { deep: true }) : k(this.submitOnChange) && this.submitOnChange.forEach((t) => {
      this.$watch(`values.${t}`, () => {
        this.$nextTick(() => this.request());
      }, { deep: true });
    });
  },
  methods: {
    hasError(e) {
      return e in this.errors;
    },
    reset() {
      this.values = {};
    },
    restore() {
      this.values = Object.assign({}, { ...this.default });
    },
    $put(e, t) {
      return zi(this.values, e, t);
    },
    focusAndScrollToElement(e) {
      let t = true;
      if (e._flatpickr && (t = false), e.tagName === "SELECT" && e.getAttribute("data-choice") && (t = false), t) {
        const r = new IntersectionObserver((n) => {
          let [i] = n;
          i.isIntersecting && (setTimeout(() => i.target.focus(), 150), r.disconnect());
        });
        r.observe(e);
      }
      e.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    },
    submit(e) {
      if (e) {
        const t = e.submitter;
        t && t.name && this.$put(t.name, t.value);
      }
      if (!this.confirm)
        return this.request();
      m.confirm(
        ca(this.confirm) ? "" : this.confirm,
        this.confirmText,
        this.confirmButton,
        this.cancelButton
      ).then(() => {
        this.request();
      }).catch(() => {
      });
    },
    async request() {
      await this.$nextTick(), this.processing = true, this.wasSuccessful = false, this.recentlySuccessful = false, clearTimeout(this.recentlySuccessfulTimeoutId);
      const e = this.values instanceof FormData ? this.values : ra(this.values), t = { Accept: "application/json" };
      this.stay && (t["X-Splade-Prevent-Refresh"] = true);
      let r = this.method.toUpperCase();
      r !== "GET" && r !== "POST" && (e.append("_method", r), r = "POST"), m.request(this.action, r, e, t).then((n) => {
        this.$emit("success", n), this.restoreOnSuccess && this.restore(), this.resetOnSuccess && this.reset(), this.processing = false, this.wasSuccessful = true, this.recentlySuccessful = true, this.recentlySuccessfulTimeoutId = setTimeout(() => this.recentlySuccessful = false, 2e3);
      }).catch(async (n) => {
        if (this.processing = false, this.$emit("error", n), !this.scrollOnError)
          return;
        await this.$nextTick();
        const i = ua(Object.keys(this.errors), (a) => this.formElement.querySelector(`[data-validation-key="${a}"]`));
        i && this.focusAndScrollToElement(
          this.formElement.querySelector(`[data-validation-key="${i}"]`)
        );
      });
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.values);
          },
          get(t, r) {
            return [
              "$all",
              "$attrs",
              "$put",
              "errors",
              "restore",
              "reset",
              "hasError",
              "processing",
              "rawErrors",
              "submit",
              "wasSuccessful",
              "recentlySuccessful"
            ].includes(r) ? e[r] : (G(e.values, r) || (e.missingAttributes.push(r), e.$put(r, "")), dt(e.values, r));
          },
          set(t, r, n) {
            return e.$put(r, n);
          }
        }
      )
    );
  }
}, gd = {
  props: {
    flatpickr: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsFlatpickrOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      disabled: false,
      element: null,
      flatpickrInstance: null,
      observer: null
    };
  },
  watch: {
    modelValue(e) {
      this.flatpickrInstance && this.flatpickrInstance.setDate(e);
    }
  },
  mounted() {
    this.element = this.$refs.input.querySelector("input"), this.flatpickr && this.initFlatpickr(this.element), this.disabled = this.element.disabled;
    const e = this;
    this.observer = new MutationObserver(function(t) {
      t.forEach(function(r) {
        r.attributeName === "disabled" && (e.disabled = r.target.disabled);
      });
    }), this.observer.observe(this.element, { attributes: true });
  },
  beforeUnmount() {
    this.observer.disconnect(), this.flatpickrInstance && this.flatpickrInstance.destroy();
  },
  methods: {
    initFlatpickr(e) {
      import("flatpickr").then((t) => {
        this.flatpickrInstance = t.default(
          e,
          Object.assign({}, this.flatpickr, this.jsFlatpickrOptions, {
            onChange: (r, n) => {
              this.flatpickrInstance.config.mode === "range" && this.flatpickrInstance.selectedDates.length < 2 || n != this.modelValue && this.$emit("update:modelValue", n);
            }
          })
        ), this.modelValue && this.flatpickrInstance.setDate(this.modelValue);
      });
    }
  }
}, yd = { ref: "input" };
function bd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", yd, [
    renderSlot(e.$slots, "default", { disabled: i.disabled })
  ], 512);
}
const wd = /* @__PURE__ */ Ve(gd, [["render", bd]]), Sd = {
  components: { Render: ue },
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false,
      default() {
        return m.isSsr ? "" : window.location.href;
      }
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      html: null
    };
  },
  watch: {
    show(e) {
      e ? this.request() : this.html = null;
    }
  },
  mounted() {
    this.show && this.request();
  },
  methods: {
    async request() {
      this.html = null, m.lazy(this.url, this.name).then((e) => {
        this.html = e.data.html;
      });
    }
  }
};
function Od(e, t, r, n, i, a) {
  const s = resolveComponent("Render");
  return i.html ? (openBlock(), createBlock(s, {
    key: 0,
    html: i.html
  }, null, 8, ["html"])) : r.show ? renderSlot(e.$slots, "default", { key: 1 }) : createCommentVNode("", true);
}
const $d = /* @__PURE__ */ Ve(Sd, [["render", Od]]);
function da(e, t, r) {
  return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
}
function at(e, t, r) {
  return e = Ur(e), r = r == null ? 0 : da(an(r), 0, e.length), t = Ut(t), e.slice(r, r + t.length) == t;
}
const Ed = ["href", "onClick"], _d = {
  __name: "Link",
  props: {
    href: {
      type: String,
      required: false,
      default: "#"
    },
    replace: {
      type: Boolean,
      required: false,
      default: false
    },
    confirm: {
      type: [Boolean, String],
      required: false,
      default: false
    },
    confirmText: {
      type: String,
      required: false,
      default: ""
    },
    confirmButton: {
      type: String,
      required: false,
      default: ""
    },
    cancelButton: {
      type: String,
      required: false,
      default: ""
    },
    modal: {
      type: Boolean,
      required: false,
      default: false
    },
    slideover: {
      type: Boolean,
      required: false,
      default: false
    },
    away: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(e) {
    const t = e;
    function r() {
      if (!t.confirm)
        return n();
      m.confirm(
        ca(t.confirm) ? "" : t.confirm,
        t.confirmText,
        t.confirmButton,
        t.cancelButton
      ).then(() => {
        n();
      }).catch(() => {
      });
    }
    function n() {
      if (t.away)
        return window.location = t.href;
      if (t.modal)
        return m.modal(t.href);
      if (t.slideover)
        return m.slideover(t.href);
      if (at(t.href, "#")) {
        if (m.openPreloadedModal(t.href.substring(1)))
          return;
        console.log("No preloaded modal found for " + t.href);
      }
      t.replace ? m.replace(t.href) : m.visit(t.href);
    }
    return (i, a) => (openBlock(), createElementBlock("a", {
      href: e.href,
      onClick: withModifiers(r, ["prevent"])
    }, [
      renderSlot(i.$slots, "default")
    ], 8, Ed));
  }
}, xd = {
  provide() {
    return {
      stack: this.stack
    };
  },
  props: {
    closeButton: {
      type: Boolean,
      required: false,
      default: true
    },
    type: {
      type: String,
      required: true
    },
    stack: {
      type: Number,
      required: true
    },
    onTopOfStack: {
      type: Boolean,
      required: false,
      default: false
    },
    maxWidth: {
      type: String,
      required: false,
      default: (e) => e.type === "modal" ? "2xl" : "md"
    },
    name: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["close"],
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    this.setIsOpen(true);
  },
  methods: {
    emitClose() {
      this.$emit("close");
    },
    close() {
      this.setIsOpen(false);
    },
    setIsOpen(e) {
      this.isOpen = e;
    }
  },
  render() {
    return this.$slots.default({
      type: this.type,
      isOpen: this.isOpen,
      setIsOpen: this.setIsOpen,
      close: this.close,
      stack: this.stack,
      onTopOfStack: this.onTopOfStack,
      maxWidth: this.maxWidth,
      emitClose: this.emitClose,
      closeButton: this.closeButton,
      Dialog: Kr,
      DialogPanel: Xr,
      TransitionRoot: Ze,
      TransitionChild: Ye
    });
  }
}, Td = {
  __name: "PreloadedModal",
  props: {
    name: {
      type: String,
      required: true
    },
    html: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: "modal"
    }
  },
  setup(e) {
    const t = e;
    return m.registerPreloadedModal(t.name, t.html, t.type), () => {
    };
  }
};
function Ad(e, t) {
  var r = -1, n = Ft(e) ? Array(e.length) : [];
  return jr(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
function pa(e, t) {
  var r = k(e) ? Ti : Ad;
  return r(e, gt(t));
}
const Id = {
  inject: ["stack"],
  props: {
    choices: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    jsChoicesOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    placeholder: {
      type: [Boolean, Object],
      required: false,
      default: false
    },
    dusk: {
      type: String,
      required: false,
      default: null
    },
    remoteUrl: {
      type: String,
      required: false,
      default: null
    },
    optionValue: {
      type: String,
      required: false,
      default: null
    },
    optionLabel: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      choicesInstance: null,
      element: null,
      placeholderText: null,
      headlessListener: null,
      selectChangeListener: null,
      selectShowDropdownListener: null,
      loading: false
    };
  },
  computed: {
    hasSelection() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.length > 0 : false : !(this.modelValue === null || this.modelValue === "" || this.modelValue === void 0);
    }
  },
  watch: {
    modelValue(e, t) {
      if (!this.choicesInstance && this.multiple && k(e)) {
        const r = e.filter((n) => n !== "" && n !== null && n !== void 0);
        if (JSON.stringify(r) != JSON.stringify(e)) {
          this.$emit("update:modelValue", r);
          return;
        }
      }
      if (this.choicesInstance) {
        if (JSON.stringify(e) == JSON.stringify(t))
          return;
        this.setValueOnChoices(e);
      }
    },
    remoteUrl: {
      handler() {
        this.loadRemoteOptions();
      }
    }
  },
  mounted() {
    if (this.element = this.$refs.select.querySelector("select"), this.choices)
      return this.initChoices(this.element).then(() => {
        this.loadRemoteOptions();
      });
    this.loadRemoteOptions();
  },
  beforeUnmount() {
    this.destroyChoicesInstance();
  },
  methods: {
    loadRemoteOptions() {
      !this.remoteUrl || (this.loading = true, Pr({
        url: this.remoteUrl,
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }).then((e) => {
        this.destroyChoicesInstance();
        let t = [];
        this.placeholder && t.push(this.placeholder), t = this.normalizeOptions(e.data, t);
        var r, n = this.element.options.length - 1;
        for (r = n; r >= 0; r--)
          this.element.remove(r);
        let i = false;
        if (J(t, (a) => {
          var s = document.createElement("option");
          s.value = a.value, s.text = a.label, a.value === this.modelValue && (i = true), a.disabled && (s.disabled = a.disabled), a.placeholder && (s.placeholder = a.placeholder), this.element.appendChild(s);
        }), i || this.$emit("update:modelValue", this.multiple ? [] : ""), this.choices)
          return this.initChoices(this.element).then(() => {
            this.loading = false;
          });
        i ? this.element.value = this.modelValue : this.$nextTick(() => {
          this.element.selectedIndex = 0;
        }), this.loading = false;
      }).catch(() => {
        this.loading = false;
      }));
    },
    destroyChoicesInstance() {
      var e;
      this.choices && this.choicesInstance && (this.headlessListener && ((e = document.querySelector("#headlessui-portal-root")) == null || e.removeEventListener("click", this.headlessListener)), this.selectChangeListener && this.element.removeEventListener("change", this.selectChangeListener), this.selectShowDropdownListener && this.element.removeEventListener("showDropdown", this.selectShowDropdownListener), this.choicesInstance.destroy(), this.choicesInstance = null);
    },
    normalizeOptions(e, t) {
      const r = k(e);
      return !r && te(e) ? this.optionValue && this.optionLabel ? t.push({
        value: dt(e, this.optionValue),
        label: dt(e, this.optionLabel)
      }) : J(e, (n, i) => {
        t.push({ label: n, value: i });
      }) : r && e.forEach((n) => {
        this.normalizeOptions(n, t);
      }), t;
    },
    setValueOnChoices(e) {
      Array.isArray(e) && (e = pa(e, (t) => `${t}`), this.choicesInstance.removeActiveItems()), e == null ? e = "" : Array.isArray(e) || (e = `${e}`), this.choicesInstance.setChoiceByValue(e), this.updateHasSelectionAttribute(), this.handlePlaceholderVisibility();
    },
    getItemOfCurrentModel() {
      const e = this.modelValue;
      return ua(this.choicesInstance._store.choices, (t) => t.value == e);
    },
    handlePlaceholderVisibility() {
      if (!this.multiple)
        return;
      const e = this.choicesInstance.containerInner.element.querySelector(
        "input.choices__input"
      );
      this.placeholderText = e.placeholder ? e.placeholder : this.placeholderText;
      const t = this.choicesInstance.getValue().length;
      e.placeholder = t ? "" : this.placeholderText ? this.placeholderText : "", e.style.minWidth = "0", e.style.width = t ? "1px" : "auto", e.style.paddingTop = t ? "0px" : "1px", e.style.paddingBottom = t ? "0px" : "1px";
    },
    initChoices(e) {
      return new Promise((t) => {
        const r = Array.from(
          e.querySelectorAll("option:not([placeholder])")
        ).length, n = this;
        import("choices.js").then((i) => {
          const a = Object.assign({}, this.choices, this.jsChoicesOptions, {
            callbackOnInit: function() {
              const s = this;
              n.stack > 0 && (n.headlessListener = function(o) {
                const l = n.choicesInstance.dropdown.isActive;
                !l && o.target === e ? n.choicesInstance.showDropdown() : l && o.target !== e && n.choicesInstance.hideDropdown();
              }, document.querySelector("#headlessui-portal-root").addEventListener("click", n.headlessListener, { capture: true })), s.containerInner.element.setAttribute(
                "data-select-name",
                e.name
              ), e.hasAttribute("dusk") && e.removeAttribute("dusk"), n.dusk && (s.containerInner.element.setAttribute("dusk", n.dusk), s.choiceList.element.setAttribute("dusk", `${n.dusk}-listbox`)), n.selectChangeListener = function() {
                let o = s.getValue(true);
                if (o == null && (o = ""), n.$emit("update:modelValue", o), !n.multiple || r < 1)
                  return;
                s.getValue().length >= r && s.hideDropdown();
              }, e.addEventListener("change", n.selectChangeListener), s.containerInner.element.addEventListener("hideDropdownFromDusk", function() {
                s.hideDropdown();
              }), n.selectShowDropdownListener = function() {
                if (n.multiple || !n.modelValue)
                  return;
                const o = n.getItemOfCurrentModel(), l = s.dropdown.element.querySelector(
                  `.choices__item[data-id="${o.id}"]`
                );
                s.choiceList.scrollToChildElement(l, 1), s._highlightChoice(l);
              }, e.addEventListener("showDropdown", n.selectShowDropdownListener), n.choicesInstance = s, n.setValueOnChoices(n.modelValue), t();
            }
          });
          new i.default(e, a);
        });
      });
    },
    updateHasSelectionAttribute() {
      this.choicesInstance.containerInner.element.setAttribute(
        "data-has-selection",
        this.hasSelection
      );
    }
  }
}, Pd = { ref: "select" };
function Cd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", Pd, [
    renderSlot(e.$slots, "default", { loading: i.loading })
  ], 512);
}
const Dd = /* @__PURE__ */ Ve(Id, [["render", Cd]]), qd = {
  inject: ["stack"],
  render() {
    const e = m.validationErrors(this.stack), t = m.flashData(this.stack), r = m.sharedData.value, n = fa(e, (i) => i.join(`
`));
    return this.$slots.default({
      flash: t,
      errors: n,
      rawErrors: e,
      shared: r,
      hasError(i) {
        return i in e;
      },
      hasFlash(i) {
        return G(t, i);
      },
      hasShared(i) {
        return G(r, i);
      },
      hasErrors: Object.keys(e).length > 0
    });
  }
};
function Ld(e, t, r) {
  e = Ur(e), t = Ut(t);
  var n = e.length;
  r = r === void 0 ? n : da(an(r), 0, n);
  var i = r;
  return r -= t.length, r >= 0 && e.slice(r, i) == t;
}
function jd(e, t) {
  var r = [];
  return jr(e, function(n, i, a) {
    t(n, i, a) && r.push(n);
  }), r;
}
function kd(e, t) {
  var r = k(e) ? sa : jd;
  return r(e, gt(t));
}
function Zn(e, t) {
  return Jt(e, t);
}
const Bd = {
  props: {
    striped: {
      type: Boolean,
      required: false,
      default: false
    },
    columns: {
      type: Object,
      required: true
    },
    defaultVisibleToggleableColumns: {
      type: Array,
      required: true
    },
    searchDebounce: {
      type: Number,
      required: false,
      default: 350
    },
    itemsOnThisPage: {
      type: Number,
      required: false,
      default: 0
    },
    itemsOnAllPages: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selectedItems: [],
      visibleColumns: [],
      forcedVisibleSearchInputs: [],
      debounceUpdateQuery: null,
      isLoading: false,
      processingAction: false
    };
  },
  computed: {
    columnsAreToggled() {
      return !Zn(this.visibleColumns, this.defaultVisibleToggleableColumns);
    },
    hasForcedVisibleSearchInputs() {
      return this.forcedVisibleSearchInputs.length > 0;
    },
    allItemsFromAllPagesAreSelected() {
      return this.selectedItems.length === 1 && this.selectedItems[0] === "*";
    },
    allVisibleItemsAreSelected() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" || e > 0 && e === this.itemsOnThisPage;
    },
    hasSelectedItems() {
      return this.selectedItems.length > 0;
    },
    totalSelectedItems() {
      const e = this.selectedItems.length;
      return e === 1 && this.selectedItems[0] === "*" ? this.itemsOnAllPages : e;
    }
  },
  created() {
    this.debounceUpdateQuery = Yr(function(e, t, r) {
      this.updateQuery(e, t, r);
    }, this.searchDebounce);
  },
  mounted() {
    const e = this.getCurrentQuery(), t = e.columns || [];
    J(e, (r, n) => {
      if (at(n, "filter[") && !r) {
        const i = n.split("["), a = i[1].substring(0, i[1].length - 1);
        this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, a];
      }
    }), t.length === 0 ? this.visibleColumns = this.defaultVisibleToggleableColumns : this.visibleColumns = t;
  },
  methods: {
    visitLink(e, t) {
      return t === "modal" ? m.modal(e) : t === "slideover" ? m.slideover(e) : m.visit(e);
    },
    reset() {
      this.forcedVisibleSearchInputs = [], this.visibleColumns = this.defaultVisibleToggleableColumns;
      let e = this.getCurrentQuery();
      e.columns = [], e.page = null, e.perPage = null, e.sort = null, J(e, (t, r) => {
        at(r, "filter[") && (e[r] = null);
      }), this.visitWithQueryObject(e, null, true);
    },
    columnIsVisible(e) {
      return this.visibleColumns.includes(e);
    },
    toggleColumn(e) {
      const t = !this.columnIsVisible(e), r = kd(this.columns, (i) => i.can_be_hidden ? i.key === e ? t : this.visibleColumns.includes(i.key) : true);
      let n = pa(r, (i) => i.key).sort();
      Zn(n, this.defaultVisibleToggleableColumns) && (n = []), this.visibleColumns = n.length === 0 ? this.defaultVisibleToggleableColumns : n, this.updateQuery("columns", n, null, false);
    },
    disableSearchInput(e) {
      this.forcedVisibleSearchInputs = this.forcedVisibleSearchInputs.filter((t) => t != e), this.updateQuery(`filter[${e}]`, null);
    },
    showSearchInput(e) {
      this.forcedVisibleSearchInputs = [...this.forcedVisibleSearchInputs, e], nextTick(() => {
        document.querySelector(`[name="searchInput-${e}"]`).focus();
      });
    },
    isForcedVisible(e) {
      return this.forcedVisibleSearchInputs.includes(e);
    },
    getCurrentQuery() {
      const e = window.location.search;
      if (!e)
        return {};
      let t = {};
      return e.substring(1).split("&").forEach((r) => {
        const n = decodeURIComponent(r).split("=");
        let i = n[0];
        if (!Ld(i, "]")) {
          t[i] = n[1];
          return;
        }
        const a = i.split("["), s = a[1].substring(0, a[1].length - 1);
        parseInt(s) == s ? (i = a[0], k(t[i]) || (t[i] = []), t[i].push(n[1])) : t[i] = n[1];
      }), t;
    },
    updateQuery(e, t, r, n) {
      typeof n > "u" && (n = true);
      let i = this.getCurrentQuery();
      i[e] = t, (at(e, "perPage") || at(e, "filter[")) && delete i.page, this.visitWithQueryObject(i, r, n);
    },
    visitWithQueryObject(e, t, r) {
      var o;
      typeof r > "u" && (r = true);
      let n = {};
      J(e, (l, u) => {
        if (!k(l)) {
          n[u] = l;
          return;
        }
        l.length !== 0 && l.forEach((c, p) => {
          n[`${u}[${p}]`] = c;
        });
      });
      let i = "";
      J(n, (l, u) => {
        l === null || l === [] || (i && (i += "&"), i += `${u}=${l}`);
      }), i && (i = "?" + i);
      const a = window.location.pathname + i;
      if (!r)
        return m.replaceUrlOfCurrentPage(a);
      this.isLoading = true;
      let s = null;
      typeof t < "u" && t && (s = (o = document.querySelector(`[name="${t.name}"]`)) == null ? void 0 : o.value), m.replace(a).then(() => {
        this.isLoading = false, typeof t < "u" && t && nextTick(() => {
          const l = document.querySelector(`[name="${t.name}"]`);
          l.focus(), s && (l.value = s);
        });
      });
    },
    async performBulkAction(e, t, r, n, i) {
      if (t)
        try {
          await m.confirm(t === true ? "" : t, r, n, i);
        } catch {
          return false;
        }
      this.isLoading = true, m.request(e, "POST", { ids: this.selectedItems }, {}, false).then((a) => {
        a.data;
      }).catch(() => {
        this.isLoading = false;
      });
    },
    setSelectedItems(e) {
      this.selectedItems = k(e) ? e : [];
    },
    itemIsSelected(e) {
      return this.selectedItems.length == 1 && this.selectedItems[0] == "*" ? true : this.selectedItems.includes(e);
    },
    setSelectedItem(e, t) {
      t ? this.selectedItems.push(e) : this.selectedItems = this.selectedItems.filter((r) => r !== e);
    }
  },
  render() {
    return this.$slots.default({
      columnIsVisible: this.columnIsVisible,
      columnsAreToggled: this.columnsAreToggled,
      debounceUpdateQuery: this.debounceUpdateQuery,
      disableSearchInput: this.disableSearchInput,
      hasForcedVisibleSearchInputs: this.hasForcedVisibleSearchInputs,
      isForcedVisible: this.isForcedVisible,
      reset: this.reset,
      showSearchInput: this.showSearchInput,
      striped: this.striped,
      toggleColumn: this.toggleColumn,
      updateQuery: this.updateQuery,
      visit: this.visitLink,
      totalSelectedItems: this.totalSelectedItems,
      allItemsFromAllPagesAreSelected: this.allItemsFromAllPagesAreSelected,
      allVisibleItemsAreSelected: this.allVisibleItemsAreSelected,
      hasSelectedItems: this.hasSelectedItems,
      setSelectedItems: this.setSelectedItems,
      itemIsSelected: this.itemIsSelected,
      setSelectedItem: this.setSelectedItem,
      performBulkAction: this.performBulkAction,
      processingAction: this.processingAction,
      isLoading: this.isLoading
    });
  }
}, Fd = {
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  }
};
function Rd(e, t, r, n, i, a) {
  return i.isMounted ? (openBlock(), createBlock(Teleport, normalizeProps(mergeProps({ key: 0 }, e.$attrs)), [
    renderSlot(e.$slots, "default")
  ], 16)) : createCommentVNode("", true);
}
const Md = /* @__PURE__ */ Ve(Fd, [["render", Rd]]), Nd = {
  props: {
    autosize: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      autosizeInstance: null,
      element: null
    };
  },
  watch: {
    modelValue() {
      !this.autosize || !this.autosizeInstance || import("autosize").then((e) => {
        nextTick(() => e.default.update(this.element));
      });
    }
  },
  mounted() {
    this.element = this.$refs.textarea.querySelector("textarea"), this.autosize && import("autosize").then((e) => {
      this.autosizeInstance = e.default(this.element);
    });
  },
  beforeUnmount() {
    this.autosize && this.autosizeInstance && import("autosize").then((e) => {
      e.default.destroy(this.element);
    });
  }
}, Vd = { ref: "textarea" };
function Hd(e, t, r, n, i, a) {
  return openBlock(), createElementBlock("div", Vd, [
    renderSlot(e.$slots, "default")
  ], 512);
}
const Ud = /* @__PURE__ */ Ve(Nd, [["render", Hd]]), Wd = {
  props: {
    toastKey: {
      type: Number,
      required: true
    },
    autoDismiss: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["dismiss"],
  data() {
    return {
      show: true
    };
  },
  mounted() {
    this.autoDismiss && setTimeout(() => {
      this.setShow(false);
    }, this.autoDismiss * 1e3);
  },
  methods: {
    setShow(e) {
      this.show = e;
    },
    emitDismiss() {
      this.$emit("dismiss");
    }
  },
  render() {
    return this.$slots.default({
      key: this.toastKey,
      show: this.show,
      setShow: this.setShow,
      emitDismiss: this.emitDismiss,
      TransitionRoot: Ze,
      TransitionChild: Ye
    });
  }
}, zd = [
  "left-top",
  "center-top",
  "right-top",
  "left-center",
  "center-center",
  "right-center",
  "left-bottom",
  "center-bottom",
  "right-bottom"
], Gd = {
  computed: {
    toasts: function() {
      return m.toastsReversed.value;
    },
    hasBackdrop: function() {
      return m.toasts.value.filter((e) => !e.dismissed && e.backdrop && e.html).length > 0;
    }
  },
  methods: {
    dismissToast(e) {
      m.dismissToast(e);
    }
  },
  render() {
    return this.$slots.default({
      positions: zd,
      toasts: this.toasts,
      dismissToast: this.dismissToast,
      hasBackdrop: this.hasBackdrop,
      Render: ue,
      TransitionRoot: Ze,
      TransitionChild: Ye
    });
  }
}, Kd = {
  props: {
    default: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      toggles: { ...this.default }
    };
  },
  methods: {
    toggled(e) {
      var t;
      return (t = this.toggles[e]) != null ? t : false;
    },
    toggle(e) {
      this.setToggle(e, !this.toggled(e));
    },
    setToggle(e, t) {
      this.toggles[e] = t;
    }
  },
  render() {
    const e = this;
    return this.$slots.default(
      new Proxy(
        {},
        {
          ownKeys() {
            return Object.keys(e.toggles);
          },
          get(t, r) {
            const n = Object.keys(e.toggles);
            if (n.length === 1 && ta(n) === "default") {
              if (r === "toggled")
                return e.toggled("default");
              if (r === "setToggle")
                return (i) => {
                  e.setToggle("default", i);
                };
              if (r === "toggle")
                return () => {
                  e.toggle("default");
                };
            }
            return r === "setToggle" ? (i, a) => {
              e.setToggle(i, a);
            } : r === "toggle" ? (i) => {
              e.toggle(i);
            } : e.toggled(r);
          }
        }
      )
    );
  }
}, Xd = {
  render() {
    return this.$slots.default({
      TransitionRoot: Ze,
      TransitionChild: Ye
    });
  }
}, Qd = {
  created: (e, t) => {
    if (m.isSsr)
      return;
    const r = `preserveScroll-${t.arg}`, n = m.restore(r);
    n && nextTick(() => {
      typeof e.scrollTo == "function" ? e.scrollTo(n.left, n.top) : (e.scrollTop = n.top, e.scrollLeft = n.left);
    });
    const i = function() {
      m.remember(r, {
        top: e.scrollTop,
        left: e.scrollLeft
      });
    };
    e.addEventListener("scroll", Yr(i, 100)), i();
  }
}, Ir = {
  injectCSS(e) {
    const t = document.createElement("style");
    t.type = "text/css", t.textContent = `
    #nprogress {
      pointer-events: none;
    }
    #nprogress .bar {
      background: ${e};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
    }
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;
      -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;
      -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
      0%   { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes nprogress-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
  },
  timeout: null,
  start(e, t, r) {
    Ir.timeout = setTimeout(() => r.start(), t);
  },
  progress(e, t) {
    t.isStarted() && e.detail.progress.percentage && t.set(Math.max(t.status, e.detail.progress.percentage / 100 * 0.9));
  },
  stop(e, t) {
    clearTimeout(Ir.timeout), t.done(), t.remove();
  },
  init(e) {
    const t = this;
    import("nprogress").then((r) => {
      document.addEventListener("splade:request", (n) => t.start(n, e.delay, r.default)), document.addEventListener("splade:request-progress", (n) => t.progress(n, r.default)), document.addEventListener("splade:request-response", (n) => t.stop(n, r.default)), document.addEventListener("splade:request-error", (n) => t.stop(n, r.default)), r.default.configure({ showSpinner: e.spinner }), e.css && this.injectCSS(e.color);
    });
  }
}, tp = {
  install: (e, t) => {
    t = t || {}, t.max_keep_alive = G(t, "max_keep_alive") ? t.max_keep_alive : 10, t.prefix = G(t, "prefix") ? t.prefix : "Splade", t.transform_anchors = G(t, "transform_anchors") ? t.transform_anchors : false, t.link_component = G(t, "link_component") ? t.link_component : "Link", t.progress_bar = G(t, "progress_bar") ? t.progress_bar : false, t.components = G(t, "components") ? t.components : {};
    const r = t.prefix;
    if (e.component(`${r}Confirm`, fu).component(`${r}Data`, gu).component(`${r}Defer`, Pu).component(`${r}Dialog`, Cu).component(`${r}Dropdown`, Rc).component(`${r}DynamicHtml`, Mc).component(`${r}Errors`, Nc).component(`${r}Event`, Vc).component(`${r}File`, zc).component(`${r}Flash`, Gc).component(`${r}Form`, vd).component(`${r}Input`, wd).component(`${r}Lazy`, $d).component(`${r}Modal`, xd).component(`${r}OnClickOutside`, Gi).component(`${r}PreloadedModal`, Td).component(`${r}Render`, ue).component(`${r}Select`, Dd).component(`${r}State`, qd).component(`${r}Table`, Bd).component(`${r}Teleport`, Md).component(`${r}Textarea`, Ud).component(`${r}Toast`, Wd).component(`${r}Toasts`, Gd).component(`${r}Toggle`, Kd).component(`${r}Transition`, Xd).component(t.link_component, _d).directive(`${r}PreserveScroll`, Qd), Object.defineProperty(e.config.globalProperties, "$splade", { get: () => m }), Object.defineProperty(e.config.globalProperties, "$spladeOptions", { get: () => Object.assign({}, { ...t }) }), e.provide("$splade", e.config.globalProperties.$splade), e.provide("$spladeOptions", e.config.globalProperties.$spladeOptions), t.progress_bar) {
      const n = {
        delay: 250,
        color: "#4B5563",
        css: true,
        spinner: false
      };
      te(t.progress_bar) || (t.progress_bar = {}), ["delay", "color", "css", "spinner"].forEach((i) => {
        G(t.progress_bar, i) || (t.progress_bar[i] = n[i]);
      }), Ir.init(t.progress_bar);
    }
    J(t.components, (n, i) => {
      e.component(i, n);
    });
  }
};
function rp(e, t, r) {
  const n = {};
  process.argv.slice(2).forEach((a) => {
    const s = a.replace(/^-+/, "").split("=");
    n[s[0]] = s.length === 2 ? s[1] : true;
  });
  const i = n.port || 9e3;
  e(async (a, s) => {
    if (a.method == "POST") {
      let o = "";
      a.on("data", (l) => o += l), a.on("end", async () => {
        const l = JSON.parse(o), u = r({
          components: l.components,
          initialDynamics: l.dynamics,
          initialHtml: l.html,
          initialSpladeData: l.splade
        }), c = await t(u);
        s.writeHead(200, { "Content-Type": "application/json", Server: "Splade SSR" }), s.write(JSON.stringify({ body: c })), s.end();
      });
    }
  }).listen(i, () => console.log(`Splade SSR server started on port ${i}.`));
}
rp(createServer, renderToString, (props) => {
  return createSSRApp({
    render: Zd(props)
  }).use(tp);
});
