(function () {
  var S = window.SITE, L = S.enlaces || {};
  var esc = function (t) { return String(t == null ? "" : t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var has = function (a) { return a && a.length; };
  var chips = function (a) { return '<div class="chips">' + a.map(function (v) { return '<span class="chip">' + esc(v) + '</span>'; }).join("") + '</div>'; };
  var H = S.hackaton, h = "";

  var nav = '<nav class="nav wrap"><b>' + esc(S.nombre) + '</b><span>' +
    '<a href="#quienes">Nosotros</a><a href="#actividades">Qué hacemos</a>' +
    (H && H.activa ? '<a href="#hackaton">Hackatón</a>' : '') + '<a href="#unete">Únete</a></span></nav>';

  var logo = '<svg class="logo" viewBox="0 0 120 80" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-label="Logo"><path d="M26 24 8 40l18 16" stroke="var(--purple)" stroke-width="9"/><path d="M94 24l18 16-18 16" stroke="var(--teal)" stroke-width="9"/><path d="M42 68 60 12l18 56" stroke="#fff" stroke-width="10"/><path d="M52 50l16-8" stroke="#fff" stroke-width="7"/></svg>';

  h += '<header class="hero">' + nav + '<div class="wrap">' + logo +
    '<span class="badge">' + esc(S.badge) + '</span>' +
    '<h1>' + esc(S.titulo) + ' <span class="grad">' + esc(S.tituloResaltado) + '</span></h1>' +
    '<p class="lead">' + esc(S.descripcion) + '</p><div class="btns">' +
    '<a class="btn p" href="#unete">Únete a la comunidad</a>' +
    (H && H.activa ? '<a class="btn s" href="#hackaton">Ver hackatón</a>' : '') + '</div></div></header>';

  if (has(S.estadisticas)) h += '<div class="wrap stats">' + S.estadisticas.map(function (e) {
    return '<div><b class="grad">' + esc(e.n) + '</b><span>' + esc(e.t) + '</span></div>'; }).join("") + '</div>';

  h += '<section id="quienes"><div class="wrap"><h2>Quiénes <span class="grad">somos</span></h2><p class="sub">' + esc(S.quienesSomos) + '</p>' +
    (has(S.valores) ? chips(S.valores) : '') + '</div></section>';

  if (has(S.actividades)) h += '<section id="actividades"><div class="wrap"><h2>Qué <span class="grad">hacemos</span></h2><div class="grid">' +
    S.actividades.map(function (a) { return '<div class="card"><div class="ic">' + esc(a.icono) + '</div><h3>' + esc(a.titulo) + '</h3><p>' + esc(a.texto) + '</p></div>'; }).join("") + '</div></div></section>';

  if (H && H.activa) h += '<section id="hackaton"><div class="wrap"><div class="hack"><span class="badge">' + esc(H.etiqueta) + '</span>' +
    '<h2 style="margin-top:16px">' + esc(H.titulo) + ' <span class="grad">' + esc(H.resaltado) + '</span></h2><p class="sub c">' + esc(H.texto) + '</p>' +
    chips(H.chips || []) +
    '<div class="info"><div><small>Fecha</small>' + esc(H.fecha) + '</div><div><small>Lugar</small>' + esc(H.lugar) + '</div><div><small>Formato</small>' + esc(H.formato) + '</div></div>' +
    (has(H.temas) ? '<h3>Temas</h3>' + chips(H.temas) : '') +
    (has(H.cronograma) ? '<h3>Cronograma</h3><ul class="time">' + H.cronograma.map(function (c) { return '<li><b>' + esc(c.hora) + '</b>' + esc(c.act) + '</li>'; }).join("") + '</ul>' : '') +
    (has(H.premios) ? '<h3>Premios</h3><div class="grid">' + H.premios.map(function (p) { return '<div class="card"><h3>' + esc(p.puesto) + '</h3><p>' + esc(p.detalle) + '</p></div>'; }).join("") + '</div>' : '') +
    (H.inscripcion ? '<p style="margin-top:24px"><a class="btn p" href="' + esc(H.inscripcion) + '">Inscribirme</a></p>' : '') + '</div></div></section>';

  if (has(S.eventos)) h += '<section><div class="wrap"><h2>Próximos <span class="grad">eventos</span></h2><div class="grid">' +
    S.eventos.map(function (e) { return '<div class="card"><small>' + esc(e.fecha) + '</small><h3>' + esc(e.titulo) + '</h3><p>' + esc(e.texto) + '</p></div>'; }).join("") + '</div></div></section>';

  if (has(S.equipo)) h += '<section><div class="wrap"><h2>Nuestro <span class="grad">equipo</span></h2><div class="grid">' +
    S.equipo.map(function (m) { var n = esc(m.nombre); return '<div class="card tm"><div class="av">' + n.charAt(0) + '</div><h3>' + (m.link ? '<a href="' + esc(m.link) + '">' + n + '</a>' : n) + '</h3><p>' + esc(m.rol) + '</p></div>'; }).join("") + '</div></div></section>';

  if (has(S.aliados)) h += '<section><div class="wrap"><h2>Nuestros <span class="grad">aliados</span></h2>' + chips(S.aliados) + '</div></section>';

  if (has(S.faq)) h += '<section><div class="wrap"><h2>Preguntas <span class="grad">frecuentes</span></h2>' +
    S.faq.map(function (f) { return '<details><summary>' + esc(f.p) + '</summary><p>' + esc(f.r) + '</p></details>'; }).join("") + '</div></section>';

  h += '<section id="unete"><div class="wrap c"><h2>Sé parte de <span class="grad">' + esc(S.nombre) + '</span></h2><p class="sub c">Entra a nuestro grupo y entérate de eventos, talleres y la hackatón.</p><div class="btns">' +
    (L.whatsapp ? '<a class="btn p" href="' + esc(L.whatsapp) + '">Unirme por WhatsApp</a>' : '') +
    (L.discord ? '<a class="btn s" href="' + esc(L.discord) + '">Unirme a Discord</a>' : '') +
    (!L.whatsapp && !L.discord ? '<span class="badge">Pronto abriremos el grupo</span>' : '') + '</div></div></section>';

  var soc = [["instagram", "Instagram"], ["tiktok", "TikTok"], ["linkedin", "LinkedIn"]].filter(function (s) { return L[s[0]]; })
    .map(function (s) { return '<a href="' + esc(L[s[0]]) + '">' + s[1] + '</a>'; });
  if (L.correo) soc.push('<a href="mailto:' + esc(L.correo) + '">Correo</a>');
  h += '<footer><div>' + soc.join("") + '</div><p>© ' + new Date().getFullYear() + ' ' + esc(S.nombre) + ' · Hecho con 💜 por la comunidad</p></footer>';

  document.getElementById("app").innerHTML = h;
})();
