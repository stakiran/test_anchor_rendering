# test_anchor_rendering

GFM の見出しからどう HTML Anchor が作られるかを調べたもの。

## まとめ（判明したもの）
置換の対応

- 半角アルファベットと数字はそのまま使われる
- 半角ハイフン `-` と半角アンダースコア `_` はそのまま使われる
- 全角かなカナ数字はそのまま使われる
- 漢字もそのまま使われる
- 半角スペースは `-` に置換される(n個あればn個のハイフン)
- 上記以外は除去される

アンカー名重複時の動作

- 先頭から順次アンカーを作成していき、以前作成したアンカー名と重複があった場合、`-n` が末尾に付与される。`n` は 1 から始まり、1ずつ増えていく。

## 未だ判明していないもの
- ~~漢字~~ テキトーだけどたぶん
- ~~全角スペース~~
- ~~タブ~~
- ~~半角スペースを二個重ねた時~~
- ~~半角スペース置換後に dup るケース~~

# Q:なんでこんなこと調べているの？
Markdown ファイルから TOC（目次）を作るツールを作るため。

# Q:なんで自分で頑張って調べてるの？
このアンカー名生成アルゴリズムの仕様が公開されてないから。

GitHub のサポートに問い合わせてみたけど [GitHub Flavored Markdown Spec](https://github.github.com/gfm/
) これが返ってきた。が、ここにも当該内容は書いてないっぽい。
