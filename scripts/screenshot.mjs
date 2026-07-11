import puppeteer from "puppeteer-core";
const [url, out, w = "1440", h = "900"] = process.argv.slice(2);
const browser = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: "new" });
const page = await browser.newPage();
let bytes = 0;
page.on("response", async (res) => { try { bytes += (await res.buffer()).length; } catch {} });
await page.setViewport({ width: +w, height: +h });
await page.goto(url, { waitUntil: "networkidle0" });
await page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += 500) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 100));
  }
  window.scrollTo(0, 0);
});
await page.evaluate(() => document.querySelectorAll(".reveal").forEach(e => e.classList.add("is-in")));
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: out, fullPage: true });
console.log("TOTAL_KB", Math.round(bytes / 1024));
await browser.close();
