# 赤刃亭is Portfolio

黒・深紅・金を基調にした、和モダンのポートフォリオサイトです。外部サービスやビルド工程なしで動作する静的サイトとして構成しています。

## 内容
- `index.html` — HOME / WORKS / VIDEOS / ABOUT / LINKS / CONTACT
- `style.css` — PC 3列・スマホ 2列の作品グリッド、レスポンシブデザイン
- `script.js` — 不規則な形の紅葉アニメーション、作品フィルター、スマホメニュー、背景画像アップロード
- 作品枠：Xヘッダー3点、料理3点、絵2点、ハンドメイドアクセ1点
- YouTube 2アカウント、X 2アカウント、GitHub、X DMへのリンク枠

## カスタマイズ
1. `index.html` 内の各 `href` を実際のYouTube / X / GitHubアカウントURLに変更してください。
2. `CONTACT` のリンク先を希望するXプロフィールまたはDM導線に変更してください。現在は `https://x.com/messages/compose` を仮設定しています。
3. 作品カード内のCSSプレースホルダーを実作品の画像に差し替えてください。画像を使う場合は `assets/` フォルダを作り、`<div class="work-art ...">` を `<img class="work-art" src="assets/作品名.jpg" alt="作品の説明">` などに変更できます。`style.css` の `.work-art` に `object-fit: cover;` を加えると扱いやすくなります。
4. トップの「背景画像を設定」は、確認中に手元の画像をブラウザ上でプレビューする機能です。アップロード画像は自動保存・公開されません。公開サイトでも同じ背景を使うには、画像を `assets/hero-background.jpg` として配置し、`style.css` の `.hero-image` の `background-image` を調整してください。

## GitHub Pagesで公開
1. GitHubで新しいリポジトリを作成します。
2. このZIPを解凍し、`index.html`、`style.css`、`script.js` と必要な画像をリポジトリのルートへアップロードします。
3. リポジトリの **Settings → Pages** を開き、Build and deployment を **Deploy from a branch**、ブランチを `main`、フォルダを `/(root)` にして保存します。
4. 公開URLが表示されたらアクセスして確認します。静的ホスティングなので、GitHub Pagesの無料枠で維持費を抑えられます。

## 注意
- Google Fontsを読み込むため、フォント表示にはインターネット接続が必要です。オフラインでは端末の代替フォントが使われます。
- 紅葉はCanvasで描画し、形・回転・速度・横揺れを個別にランダム化しています。動きを減らすOS設定にも配慮しています。
