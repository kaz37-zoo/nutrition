# Ver.15.3.1 Hotfix Tests

- JavaScript syntax: PASS
- Service Worker syntax: PASS
- Final `aggregateNutrientsForDate()` uses `v15EstimateAccumulator`: PASS
- Empty inference aggregate contains `lower`, `upper`, `confidence`, `coverage`, `quality`, `inference`: PASS
- Final source after the last aggregate definition contains no fallback to `createNutAccumulator()`: PASS

# Version 15.3 Test Report

Date: 2026-08-22

## Syntax

- `index.html` inline JavaScript: PASS
- `sw.js`: PASS
- `manifest.webmanifest`: valid JSON

## Ver.15.3 static regression — 21/21 PASS

- PWA/title name = nutridiary
- ヘッダーに日時要素なし
- nutridiary wordmarkあり
- 旧グローバル達成率バーは非表示
- 下部タブでAIの右側に設定
- 朝食 / 昼食 / 夕食 / 間食の4タブ
- 定期食材は朝・昼・夕の3画面に同期表示
- 間食には定期食材を置かない
- 追加・編集に食事タイミング選択あり
- 最終食材行に `≡` ドラッグハンドルあり
- 最終食材行に `↔` 移動ボタンなし
- 薬・サプリは通常食材型のチェック行
- 服用時刻を右端に表示
- 毎日の薬・サプリ行に取消/後で/スキップ/編集ボタンなし
- 設定側の薬・サプリ編集を維持
- 通知処理を維持
- 旧バックアップ互換あり
- 新規バックアップはnutridiary名
- 食材マスタから設定へ戻る
- 食材候補にnative縦スクロール設定
- snackデータをschema normalize対象へ追加

## Browser environment

この実行環境のChromiumはローカルURLへのアクセスが管理ポリシーで `ERR_BLOCKED_BY_ADMINISTRATOR` となるため、GitHub Pages相当の実URLでのE2E操作試験は実施できません。構文・静的回帰・既存ロジックの整合性を確認しています。

---

## Previous Ver.15.2 report

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
