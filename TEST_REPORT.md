# Version 15.1 Test Report

Date: 2026-08-21

## Static / syntax

- JavaScript syntax: PASS
- Service Worker syntax: PASS
- Storage schema version: 15（互換性維持）

## Ver.15 regression

- 推定範囲 / lower / upper / confidence / inference: PASS
- `estimated-zero`: PASS
- `fallback-zero` lower bound 0 + open upper bound: PASS
- 履歴への推定メタデータ保存: PASS
- 不確実な食品量が多いほど信頼度が低下: PASS
- 5段階判定すべて: PASS
- 今日の不足・推定範囲・信頼度UI: PASS

## Startup hotfix

- `V15_QUALITY_CONFIDENCE` 初期化前参照が発生しない: PASS
- カスタムmasterを保持したまま起動: PASS
- 起動時に保存済みmasterをデフォルトで上書きしない: PASS
- 旧Ver.15クラッシュ保存形を検出: PASS
- legacy profile / daily item復旧: PASS
- 直近history itemSnapから新しいdaily item復旧: PASS
- 復旧後masterを現行shapeへnormalize: PASS

## Hierarchical inference groups

- ほうれん草 → 葉物野菜: PASS
- 人参 → 根菜: PASS
- 鯖 → 青魚: PASS
- たら → 白身魚: PASS
- 牛乳 → 牛乳・ヨーグルト: PASS
- 食パン → パン類: PASS
- サンプル十分な葉物はsubgroup推定: PASS
- サンプル不足の白身魚はparent/globalへfallback: PASS
- 食パンの遊離糖を強制0にしない: PASS
- オレンジジュースの遊離糖を強制0にしない: PASS
- whole fruitのfree sugarは定義上の0推定が可能: PASS

## Interpretation

細分化は「分類を細かくすること」自体を目的にせず、十分なサンプルがあるときだけ推定範囲を狭めます。サンプルが足りない分類は自動で親グループへ戻るため、少数データから過度に精密な推定値を作りません。
