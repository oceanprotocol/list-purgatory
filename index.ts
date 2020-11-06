import listAssetsJson from './list-assets.json'
import { AssetData } from './types'

import listAccountsJson from './list-accounts.json'
import { AccountData } from './types'

const listAssets: AssetData[] = listAssetsJson.map((asset) => {
  return { did: asset.did, reason: asset.did, date: asset.date } as AssetData
})

const listAccounts: AccountData[] = listAccountsJson.map((account) => {
  return {
    address: account.address,
    reason: account.reason,
    date: account.date
  } as AccountData
})

export { listAssets, listAccounts }
