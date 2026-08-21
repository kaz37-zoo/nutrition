# Version 13 Test Report

Date: 2026-08-21

## Automated checks

- JavaScript syntax: PASS
- Service Worker syntax: PASS
- VM logic regression: 14 / 14 PASS
- Static UI / feature audit: 24 / 24 PASS

## VM regression scope

- schemaVersion 13
- three newly added products and official macro values
- medicine/supplement timing migration
- date-local hidden foods
- meal-group batch checking
- meal groups excluded from duplicate progress targets
- hide/restore food for one date
- time-slot bulk check includes scheduled medication/supplements
- health editor timing control
- technical notification messages removed from normal UI
- swipe-to-dismiss handler present
- explicit one-day/default deletion choices

## Static UI / feature audit scope

- morning/noon/evening integrated health containers
- menu actions and persistence
- automatic safe MEXT enrichment
- unknown != zero model
- proxy/estimate source metadata
- iPhone nutrient cards switch to one column
- readable typography floors
- 16px form inputs
- no inline text below 12px
- major action targets 46–52px, menu/filter controls at least 44px
- existing notification actions preserved

## Limitation

This environment cannot reproduce final tactile behavior in Mobile Safari. The final iPhone-specific touch feel, keyboard behavior and installed-PWA notification behavior should be checked on the actual device after deployment.
