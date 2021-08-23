//@format
import test from "ava";
import { checkAddressChecksum } from "ethereum-checksum-address";

import statements from "../list-accounts.json";

test("if all addresses in list-accounts.json are checksummed EIP55 addresses", t => {
  t.plan(statements.length);
  for (let { address } of statements) {
    t.true(
      checkAddressChecksum(address),
      `Address "${address}" isn't checksummed. Addresses in "list-accounts.json" have to be valid according to EIP55 (checksum addresses). You can manually checksum an address e.g. on this website: https://ethsum.netlify.app/`
    );
  }
});
