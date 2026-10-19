// NB: the shipped SVGs are all drawn in the engine's 'both' view (latent nodes and the identifiability badge visible), whatever the JSON's fmt says.
// Renders a graph JSON (arc_engine data shape) to the book's SVG, byte-for-byte what
// _meta/causal-diagram-research/arc_engine.jsx DiagramSVG draws at 1280x950 (the size the shipped SVGs use).
//   node _meta/tools/render-diagram.mjs <graph.json> [out.svg]        render one
//   node _meta/tools/render-diagram.mjs --check                       diff every graph/*.json against its shipped svg/*.svg
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CAT_COL = { driver: '#0c3a6a', outcome: '#e8722a', mediator: '#3a1a6a', feedback: '#1a5a32', latent: '#9a9a9a' };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderSvg(G, width = 1280, height = 950, fmt = 'both') {
  const showL = fmt !== 'cld';
  const cx = width / 2, cy = (height - 24) / 2;
  const vis = G.nodes.filter((n) => !n.is_latent);
  const lat = G.nodes.filter((n) => n.is_latent);
  const r = Math.min(width, height) * 0.27;
  const rL = Math.min(width, height) * 0.42;
  const P = {};
  vis.forEach((n, i) => { const a = (2 * Math.PI * i / Math.max(vis.length, 1)) - Math.PI / 2; P[n.id] = { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }; });
  lat.forEach((n, i) => { const a = (2 * Math.PI * i / Math.max(lat.length, 1)) + Math.PI / 5; P[n.id] = { x: cx + rL * Math.cos(a), y: cy + rL * Math.sin(a) }; });

  let out = `<?xml version="1.0" standalone="no"?>\n<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="position: absolute; inset: 0px; background: rgb(255, 255, 255);" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>`;
  out += `<marker id="ap" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#1a5a32"/></marker>`;
  out += `<marker id="an" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#7a1a1a"/></marker>`;
  out += `<marker id="ac" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#9a9a9a"/></marker></defs>`;

  for (const e of G.edges.filter((e) => showL || !e.is_confounding)) {
    const fp = P[e.from], tp = P[e.to]; if (!fp || !tp) continue;
    const dx = tp.x - fp.x, dy = tp.y - fp.y, dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const nr = e.is_confounding ? 24 : 34, curl = e.is_confounding ? 40 : 18;
    const mx = (fp.x + tp.x) / 2, my = (fp.y + tp.y) / 2;
    const qx = mx - (dy / dist) * curl, qy = my + (dx / dist) * curl;
    const sx = fp.x + (dx / dist) * nr, sy = fp.y + (dy / dist) * nr;
    const ex = tp.x - (dx / dist) * (nr + 4), ey = tp.y - (dy / dist) * (nr + 4);
    const col = e.is_confounding ? '#9a9a9a' : e.polarity === 'positive' ? '#1a5a32' : '#7a1a1a';
    const mkr = e.is_confounding ? 'ac' : e.polarity === 'positive' ? 'ap' : 'an';
    out += '<g>';
    out += `<path d="M${sx},${sy} Q${qx},${qy} ${ex},${ey}" fill="none" stroke="${col}" stroke-width="${e.is_confounding ? 0.9 : 1.4}" stroke-opacity="${e.is_confounding ? 0.5 : 0.85}"`;
    if (e.is_confounding) out += ` marker-end="url(#${mkr})" stroke-dasharray="4 3"/>`; else out += ` marker-end="url(#${mkr})"/>`;
    if (e.has_delay && !e.is_confounding) out += `<g transform="translate(${(sx + qx * 2 + ex) / 4},${(sy + qy * 2 + ey) / 4}) rotate(${Math.atan2(ey - sy, ex - sx) * 180 / Math.PI})"><line x1="-3" y1="-5" x2="-3" y2="5" stroke="${col}" stroke-width="1.3"/><line x1="3" y1="-5" x2="3" y2="5" stroke="${col}" stroke-width="1.3"/></g>`;
    if (!e.is_confounding) out += `<rect x="${qx - 6}" y="${qy - 6}" width="12" height="12" fill="#ebebeb"/><text x="${qx}" y="${qy + 1}" text-anchor="middle" dominant-baseline="middle" fill="${col}" font-family="monospace" font-size="11" font-weight="700">${e.polarity === 'positive' ? '+' : '-'}</text>`;
    out += '</g>';
  }

  for (const node of G.nodes) {
    const p = P[node.id]; if (!p) continue;
    const col = CAT_COL[node.category] || '#3a3a3a';
    const words = node.label.split(' '), lines = []; let cur = '';
    words.forEach((w) => { const t = cur ? cur + ' ' + w : w; if (t.length > 10 && cur) { lines.push(cur); cur = w; } else cur = t; });
    if (cur) lines.push(cur);
    const lh = 11, y0 = -((lines.length - 1) * lh) / 2;
    out += `<g transform="translate(${p.x},${p.y})">`;
    if (node.is_latent) {
      out += `<ellipse rx="40" ry="22" fill="#ebebeb" stroke="#9a9a9a" stroke-width="1" stroke-dasharray="5 3" opacity="${showL ? 1 : 0}"/>`;
      out += `<text x="0" y="-3" text-anchor="middle" dominant-baseline="middle" fill="#6a6a6a" font-family="Barlow Condensed,sans-serif" font-size="10" font-weight="600" opacity="${showL ? 1 : 0}">${esc(node.label.toUpperCase())}</text>`;
      out += `<text x="0" y="10" text-anchor="middle" fill="#9a9a9a" font-family="monospace" font-size="8" opacity="${showL ? 1 : 0}">latent</text>`;
    } else {
      out += `<circle r="40" fill="none" stroke="${col}" stroke-width="0.5" stroke-opacity="0.18" stroke-dasharray="3 3"/><circle r="33" fill="#ebebeb" stroke="${col}" stroke-width="1.5"/><circle r="31" fill="${col}" fill-opacity="0.07"/><rect x="16" y="-30" width="14" height="3" fill="${col}"/>`;
      lines.forEach((ln, li) => { out += `<text x="0" y="${y0 + li * lh}" text-anchor="middle" dominant-baseline="middle" fill="#0a0a0a" font-family="Barlow Condensed,sans-serif" font-size="10" font-weight="700" letter-spacing="0.05em">${esc(ln.toUpperCase())}</text>`; });
      if (showL && node.category === 'outcome' && G.identifiability) {
        const ok = G.identifiability !== 'not_identifiable';
        out += `<circle cx="26" cy="-26" r="8" fill="${ok ? '#1a5a32' : '#7a1a1a'}"/><text x="26" y="-25" text-anchor="middle" dominant-baseline="middle" fill="#fff" font-size="8" font-weight="700">${ok ? '✓' : '✗'}</text>`;
      }
    }
    out += '</g>';
  }
  return out + '</svg>';
}

const here = dirname(fileURLToPath(import.meta.url));
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [a, b] = process.argv.slice(2);
  if (a === '--check') {
    const root = join(here, '..', '..', 'chapters');
    let ok = 0, bad = 0;
    const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]);
    for (const f of walk(root).filter((f) => /\/diagrams\/graph\/[^/]+\.json$/.test(f))) {
      const G = JSON.parse(readFileSync(f, 'utf8'));
      const dir = dirname(dirname(f));
      const slug = G.id || basename(f, '.json');
      const svgPath = [join(dir, 'svg', slug + '.svg'), join(dir, 'svg', basename(f, '.json') + '.svg')].find(existsSync);
      if (!svgPath) { console.log('no-svg  ' + f.replace(root + '/', '')); continue; }
      const norm = (t) => t.replace(/\n$/, '').replace(/ stroke-dasharray="4 3" marker-end="url\(#ac\)"/g, ' marker-end="url(#ac)" stroke-dasharray="4 3"'); // browser serialises attribute order inconsistently
      const shipped = norm(readFileSync(svgPath, 'utf8'));
      const same = shipped === norm(renderSvg(G));
      same ? ok++ : bad++;
      if (!same) console.log('DIFFERS ' + svgPath.replace(root + '/', ''));
    }
    console.log(`${ok} identical, ${bad} differ`);
  } else {
    const svg = renderSvg(JSON.parse(readFileSync(a, 'utf8')));
    b ? writeFileSync(b, svg) : process.stdout.write(svg);
  }
}
