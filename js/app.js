document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelectorAll(".registerBtn"),
    t = document.getElementById("registrationModal"),
    n = document.getElementById("closeModalBtn"),
    o = document.querySelector(".homeModalOverlay"),
    d = document.getElementById("registrationForm"),
    l = document.getElementById("name"),
    a = document.getElementById("nameError"),
    c = document.getElementById("phone"),
    i = document.getElementById("phoneError"),
    r = document.getElementById("submitBtn");

  const E = window.phoneFormatter;

  let p = !1,
    g = 0;

  function f() {
    t &&
      ((p = !0),
      (g = window.scrollY),
      (t.style.display = "block"),
      (document.body.style.overflow = "hidden"),
      (a.style.display = "none"),
      (i.style.display = "none"));
  }

  function v() {
    t &&
      p &&
      ((p = !1),
      (t.style.display = "none"),
      (document.body.style.overflow = ""),
      (document.body.style.position = ""),
      (document.body.style.top = ""),
      window.scrollTo(0, g));
  }

  e.forEach((e) => e.addEventListener("click", f));
  n && n.addEventListener("click", v);
  o && o.addEventListener("click", v);

  d.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!E) {
      console.error("phoneFormatter is not initialized. Check formatter.js load order and p/g variables.");
      i.style.display = "block";
      return;
    }

    const t = l.value.trim(),
      n = c.value.trim();

    let o = !1;

    if (t) a.style.display = "none";
    else (a.style.display = "block"), (o = !0);

    if (E.validate(n)) i.style.display = "none";
    else (i.style.display = "block"), (o = !0);

    if (o) return;

    r.textContent = "YUBORILMOQDA...";
    r.disabled = !0;

    const now = new Date(),
      s = now.toLocaleDateString("uz-UZ"),
      m = now.toLocaleTimeString("uz-UZ");

    const payload = {
      Ism: t,
      TelefonRaqam: E.getCurrentCode() + " " + n,
      SanaSoat: s + " - " + m,
    };

    localStorage.setItem("formData", JSON.stringify(payload));
    window.location.href = "/thankYou.html";

    r.textContent = "DAVOM ETISH";
    r.disabled = !1;
    l.value = "";
    c.value = "";
    v();
  });
});

!function(){var e=document.querySelector('.timer_p'),t=119;if(!e)return;setInterval(function(){t--;if(t<0)t=119;var m=Math.floor(t/60),s=t%60;e.textContent=(m<10?'0':'')+m+':'+(s<10?'0':'')+s},1000)}()