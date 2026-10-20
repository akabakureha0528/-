# 赤刃亭 is — Creative Portfolio

黒・深紅・金を基調にした、GitHub Pages向けの静的ポートフォリオです。

## ファイル
- `index.html` — ページ構造
- `style.css` — デザイン、レスポンシブ対応、紅葉演出
- `script.js` — 作品・SNS情報、作品モーダル、メニュー
- `assets/` — 仮画像・アイコン

## まず変更する場所
`script.js` の上部にある以下を編集します。
- `works`：作品タイトル、画像パス、説明文（9点）
- `youtubeAccounts`：YouTubeチャンネル名、紹介文、URL
- `socialAccounts`：X 2アカウントとその他リンク
- `contactUrl`：CONTACTボタンのリンク先

## 画像の差し替え
1. 画像ファイルを `assets/` にアップロードします。
2. `works` の `image` を新しいファイル名に変更します。
3. トップ背景は `assets/hero-placeholder.svg` を置き換えるか、`style.css` 内の `.hero` の背景URLを変更します。
4. 公開前に仮画像・仮URLが残っていないか確認してください。

## GitHub Pagesで公開
1. GitHubでリポジトリを作成します（簡単に始めるなら Public）。
2. このフォルダ内のファイルと `assets` フォルダをリポジトリのルートへアップロードします。
3. リポジトリの **Settings → Pages** を開きます。
4. **Deploy from a branch** を選び、`main` と `/(root)` を指定して保存します。
5. 表示された公開URLでPC・スマホの表示を確認します。

## 注意
- YouTubeとXのURLは仮リンクです。公開前に実際のURLへ変更してください。
- Google Fontsを読み込んでいます。完全に外部通信を避けたい場合は、`style.css` の `@import` を削除してシステムフォントを使ってください。
- GitHub Pagesの無料利用条件・容量・転送量などはGitHubの現行ポリシーに従います。
