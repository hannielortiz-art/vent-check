# Vent Check

A bedside ventilator check for ICU nurses: PBW and mL/kg, plateau and driving pressure, static compliance, P/F and S/F, blood gas, cuff pressure, ETT depth, SAT/SBT readiness and RSBI, with prompts for when to tell RT and the provider.

The flags are prompts, not orders. Unit protocols, the provider's orders and RT's assessment decide what changes. Nothing typed into the app is saved or sent anywhere.

## Put it online (GitHub Pages, free)

Easiest on a computer.

1. Sign in at github.com (or create a free account).
2. Top right: **+** → **New repository**. Name it `vent-check`, set it to **Public**, and click **Create repository**.
3. On the next page, click **uploading an existing file**. Drag in **all the files from this folder** (not the folder itself), then click **Commit changes**.
4. Go to **Settings** → **Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. Wait 1–2 minutes. The address appears at the top of the Pages screen: `https://YOUR-USERNAME.github.io/vent-check/`

## Put it on your iPhone

1. Open that address in **Safari** (or Chrome), and wait until the page has fully loaded once. That is when it saves itself for offline use.
2. Tap **Share** → **Add to Home Screen** → **Add**. It gets the VENT icon and opens full screen.

## Updating it

Upload the new files to the same repository (they replace the old ones). Each update changes `VERSION` at the top of `sw.js`; that is what tells phones to fetch the new version. Open the app once while online to pick it up.

## Files

- `index.html` – the app
- `manifest.webmanifest`, `*.png` – app name and icons
- `sw.js` – offline support
- `*.woff2` – fonts (SIL Open Font License; see the `OFL-*.txt` files)
