# Version 15 Test Report

Date: 2026-08-21

## Static / syntax

- JavaScript syntax: PASS
- Service Worker syntax: PASS
- Schema version: 15

## Inference engine

- Inference fields (`lower`, `upper`, `confidence`, `inference`) produced: PASS
- Nutrient-specific confidence is numeric: PASS
- Quality provenance remains available: PASS
- Unresolved values use `fallback-zero`: PASS
- `fallback-zero` lower bound is 0 while upper bound remains open: PASS
- Strong-zero inference (`estimated-zero`) works for a strict plant/B12 case: PASS
- Snapshot persists confidence/range/inference metadata: PASS
- Larger uncertain food amount has a larger negative effect on nutrient confidence: PASS

## Five-stage assessment

All stages tested directly: PASS

1. 不足
2. 不足気味予測
3. 判定幅あり
4. 充足気味予測
5. 充足

## UI integration

- Nutrient screen renders 今日の不足 summary: PASS
- Nutrient cards render estimated range: PASS
- Nutrient cards render nutrient-specific confidence: PASS
- Conservative-zero / inferred-range / estimated-zero quality labels supported: PASS

## Interpretation rule

`fallback-zero` is **not an observed zero**. It is a conservative lower-bound contribution used when no stronger estimate can be generated. The uncertainty remains in the open upper bound and low confidence score.
