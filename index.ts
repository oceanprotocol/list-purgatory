import listAssetsJson from './list-assets.json'
import { AssetPurgatoryData } from './types'

import listAccountsJson from './list-accounts.json'
import { AccountPurgatoryData } from './types'

const listAssets: AssetPurgatoryData[] = listAssetsJson.map((asset) => {
  return { did: asset.did, reason: asset.did, date: asset.date } as AssetPurgatoryData
})

const listAccounts: AccountPurgatoryData[] = listAccountsJson.map((account) => {
  return {
    address: account.address,
    reason: account.reason,
    date: account.date
  } as AccountPurgatoryData
})

export { listAssets, listAccounts, AssetPurgatoryData, AccountPurgatoryData }
