[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

# Ocean Market Purgatory

The lists here track assets and accounts in `Purgatory`, which has consequences in the Ocean Market UI. 

---

- [🦑 Policies](#-policies)
- [🤿 List Schema](#-list-schema)
- [🏄‍♀️ List Usage](#️-list-usage)
- [🏛 License](#-license)

---

## 🦑 Policies

**[Here](policies/README.md)** are the policies & processes by which assets & accounts move to Purgatory states, for example by the reporting of an IP violation or sensitive data. 

## 🤿 List Schema

The file [list-assets.json](list-assets.json) lists all assets in Purgatory. It follows this schema.

```json
{
  "did": "did:op:0000",
  "reason": "stolen data"
}, ...
```

The file [list-accounts.json](list-accounts.json) lists all accounts in Purgatory. It follows this schema. 

```json
{
  "address": "0x.....",
  "reason": "stolen data"
}, ...
```

For both assets and accounts, the `reason` field can be one of these values: `IP Infringement`, `Impersonation`, `Sensitive Data`, `Government Order`, and potentially more.

## 🏄‍♀️ List Usage

These lists go live once merged to `main`, and the tools using them will pick up the changes immediately.

The lists are exposed by [`market-purgatory`](https://github.com/oceanprotocol/market-purgatory) as an HTTP API endpoint, fetched on run time by [`aquarius`](https://github.com/oceanprotocol/aquarius) and the [`market`](https://github.com/oceanprotocol/market). In the market, alerts are shown for data sets and accounts in purgatory, and actions are blocked as described in the [policies](https://github.com/oceanprotocol/list-purgatory/tree/main/policies).

## 🏛 License

```text
Copyright 2023 Ocean Protocol Foundation Ltd.

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
