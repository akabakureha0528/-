# 赤刃亭is ポートフォリオ

## 公開方法（GitHub Pages・無料）
1. GitHubで新しいリポジトリを作成します。
2. `index.html` をリポジトリのルートにアップロードします。
3. Settings → Pages → Build and deployment で `Deploy from a branch` を選び、`main` / `/(root)` を保存します。
4. 表示されたURLからアクセスできます。

## 公開前に変更する箇所
- `index.html` 内の `https://www.youtube.com/` をYouTube 2アカウントのURLに変更
- `https://x.com/` をX 2アカウントのURLに変更
- `https://x.com/messages` はDM入口です。DMを受け付けるアカウントのURLに変更してもOK
- GitHubカードの `https://github.com/` をプロフィールURLに変更
- 作品カードは現在デザイン見本です。実際の画像を使う場合は各 `.art` 要素を `<img>` に置き換え、画像ファイルをリポジトリへ追加してください。

トップの「＋ トップ背景画像を選択」はブラウザ内で背景をプレビューする機能です。リロード後も背景を固定したい場合は、画像をリポジトリに追加し、CSSの `.hero` の `background` を `url('assets/your-background.jpg') center/cover` に変更してください。

紅葉アニメーションはCSS/JavaScriptのみで動作し、外部ライブラリやサーバーは不要です。
