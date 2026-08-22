# Version 15.2 Test Report

Date: 2026-08-22

## Static / syntax

- JavaScript syntax: PASS
- Storage schema version: 15（互換性維持）

## Regression

- Ver.15.1 inference constants / safe startup: PASS
- Existing custom master survives startup: PASS
- Hierarchical inference subgroup / fallback behavior: PASS
- free sugar strong-zero exceptions: PASS

## Version 15.2

- 卵・バナナの個数/本数初期設定: PASS
- 既存卵データを個数メタデータへ安全移行: PASS
- 生年月日→年齢（誕生日前日/当日境界）: PASS
- 今日画面3サブタブ機能: PASS
- 定期食材ドラッグ用グリップ: PASS
- 定期食材の並び順保存ロジック: PASS
- 通常食材の並び順保存ロジック: PASS
- 食材候補選択からtouchstart/preventDefaultを除去: PASS
- 候補リストのpan-y / 慣性スクロールCSS: PASS
- 栄養カードの過不足主表示: PASS
- 推定幅の別ラベル・別配色: PASS
- 推定判定注意書きをフッターへ移動する処理: PASS

## Environment note

JavaScript構文とVMロジック回帰は実施済みです。この実行環境ではブラウザのローカルURL/file URLアクセスが管理ポリシーで遮断されたため、今回の最終版について実iPhone Safariそのものの操作試験は未実施です。
