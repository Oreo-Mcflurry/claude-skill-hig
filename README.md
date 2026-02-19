# claude-skill-hig

[Claude Code](https://claude.com/claude-code) skill for Apple framework development, powered by [HIGLab](https://github.com/M1zz/HIGLab) AI Reference.

50개 Apple 프레임워크에 대한 AI Reference 문서를 실시간으로 가져와서 정확한 iOS 코드를 생성합니다.

## Install

```bash
npm install -g claude-skill-hig
```

This copies the `/hig` skill to `~/.claude/commands/hig.md`.

## Uninstall

```bash
claude-skill-hig-uninstall && npm uninstall -g claude-skill-hig
```

## Usage

In Claude Code:

```
/hig storekit            # StoreKit 2 인앱결제 레퍼런스
/hig arkit               # ARKit AR 레퍼런스
/hig 인앱결제 구현해줘      # 키워드로 자동 매칭
/hig list                # 50개 프레임워크 전체 목록
```

## Supported Frameworks (50)

| Category | Frameworks |
|----------|-----------|
| App Frameworks | SwiftUI, Observation, SwiftData, WidgetKit, ActivityKit, App Intents, Foundation Models, TipKit |
| App Services | StoreKit 2, PassKit, CloudKit, AuthServices, LocalAuth, CryptoKit, HealthKit, MapKit, Core Location, Core ML, Vision, Notifications, SharePlay, EventKit, Contacts, MusicKit |
| Graphics & Media | ARKit, RealityKit, SpriteKit, Core Image, PencilKit, PDFKit, AVFoundation, AVKit, PhotosUI, Core Haptics, ShazamKit, Image Playground, WeatherKit |
| System & Network | Core Bluetooth, Core NFC, MultipeerConnectivity, Network, CallKit, Wi-Fi Aware |
| iOS 26 | Visual Intelligence, AlarmKit, EnergyKit, PermissionKit, RelevanceKit, AccessorySetupKit, ExtensibleImage |

## Auto-Detection (Optional)

For automatic framework detection without `/hig`, copy `claude-md-snippet.md` content into your project's `CLAUDE.md`:

```bash
cat $(npm root -g)/claude-skill-hig/claude-md-snippet.md
```

## How It Works

1. User asks about an Apple framework
2. Skill maps the request to the correct AI Reference document
3. Fetches from `https://m1zz.github.io/HIGLab/ai-reference/{framework}.md`
4. Uses the document as context to generate production-quality iOS code

Documents are always fetched live from HIGLab — no local caching, always up-to-date.

## Credits

- AI Reference documents: [HIGLab by @M1zz](https://github.com/M1zz/HIGLab)
- Blog: [m1zz.github.io/HIGLab](https://m1zz.github.io/HIGLab/)

## License

MIT
