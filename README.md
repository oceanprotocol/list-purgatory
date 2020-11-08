[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

> Ocean Market Negative-Label Lists

The lists here track assets and accounts as `Purgatory` and `Disabled`, which has consequences in the Ocean Market UI. 

---

- [🦑 Policies](#-policies)
- [🐬 List Files](#-list-files)
- [🤿 List Schema](#-list-schema)
- [🏄‍♀️ List Usage](#️-list-usage)
- [⬆️ Releases](#️-releases)
- [🏛 License](#-license)

---

## 🦑 Policies

**[Here](policies/README.md)** are the policies & processes by which assets & accounts move to Purgatory and Disabled States, for example by the reporting of an IP violation or sensitive data. 

## 🐬 List Files

There is one json file for each list:
- list-assets-purgatory.json - assets in Purgatory state
- list-assets-disabled.json - assets in Disabled
- list-accounts-purgatory.json - accounts in Purgatory
- list-accounts-disabled.json - accounts in Disabled

## 🤿 List Schema

All asset lists follow this schema.

```json
{
  "did": "did:op:0000",
  "date": "2020-10-27T18:29:35Z",
  "reason": "stolen data"
},
{
   ...
}
```

There are two account (actor) lists: Purgatory, and Disabled. All asset lists follow this schema. For each account:

```json
{
  "address": "0x.....",
  "date": "2020-10-27T18:29:35Z",
  "reason": "stolen data"
},
{
   ...
}
```


## 🏄‍♀️ List Usage

```bash
npm i @oceanprotocol/list-purgatory
```

These lists are published as an npm module and the [`market`](https://github.com/oceanprotocol/market) and [`react`](https://github.com/oceanprotocol/react) use it as a dependency to enhance the UI for those data partners.

After every change, a new version of the list needs to be released.

You can also directly fetch the lists from the `main` branch, for example:

```text
https://raw.githubusercontent.com/oceanprotocol/list-datapartners/main/list-assets-purgatory.json
```

JavaScript usage:

```js
import listAssets from '@oceanprotocol/list-assets-purgatory'

// old-school
const listAssets = require('@oceanprotocol/list-assets-purgatory')
```

TypeScript usage:

```ts
import listAssets from '@oceanprotocol/list-assets'
import { AssetData } from '@oceanprotocol/list-assets/types'
```

## ⬆️ Releases

Releases are managed semi-automatically. They are always manually triggered from a developer's machine with release scripts.

From a clean `main` branch you can run the release task bumping the version accordingly based on semantic versioning:

```bash
npm run release
```

The task does the following:

- bumps the project version in `package.json`, `package-lock.json`
- auto-generates and updates the CHANGELOG.md file from commit messages
- creates a Git tag
- commits and pushes everything
- creates a GitHub release with commit messages as description
- Git tag push will trigger Travis to do a npm release

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. [Setup](https://github.com/release-it/release-it#github-releases)

## 🏛 License

```text
Copyright 2020 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
