/**
 * Copies Font Awesome webfonts into public/assets/fonts/ so the @font-face
 * rules in public/assets/css/plugins.css (../fonts/*.woff2) resolve on Vercel
 * and anywhere else after a clean npm install.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(
	root,
	"node_modules",
	"@fortawesome",
	"fontawesome-free",
	"webfonts",
);
const dest = path.join(root, "public", "assets", "fonts");

if (!fs.existsSync(src)) {
	console.error(
		"[copy-fontawesome] Missing node_modules/@fortawesome/fontawesome-free/webfonts — run npm install.",
	);
	process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });
let n = 0;
for (const name of fs.readdirSync(src)) {
	if (!name.endsWith(".woff2") && !name.endsWith(".ttf")) continue;
	fs.copyFileSync(path.join(src, name), path.join(dest, name));
	n++;
}
console.log(`[copy-fontawesome] Copied ${n} files to public/assets/fonts/`);
