# ZERO: Arise

Minecraft Bedrock Edition add-on for Android.

## Status
Early development. The initial pack and simulation foundation are being implemented. Civilization, hunter, magic and ecosystem features are planned, not yet playable.

## Structure
- `behavior_pack/`: gameplay scripts and definitions
- `resource_pack/`: visual resources
- `docs/`: roadmap and design decisions

## Approved defaults
- 120 real minutes per in-game day
- Child aging 4x; adult and elder aging 1x; player aging disabled; NPC aging enabled
- Fully autonomous NPC relationships; mixed inheritance
- Limited magic block destruction; anomaly spread enabled; player territory protection enabled; normal disaster frequency

## Development
Enable both packs in a **test world**. The target Bedrock Script API version must be checked on the Android installation before release.
See [roadmap](docs/ROADMAP.md).
