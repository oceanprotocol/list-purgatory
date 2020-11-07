# Ocean Market Purgatory Process

### What is the Ocean Market Purgatory Process?

[Ocean Market](https://market.oceanprotocol.com) is a decentralized data marketplace operated by [Ocean Protocol Foundation](https://www.oceanprotocol.com) (OPF).

Purgatory can be for a data asset, or an actor.

* **Purgatory for a data asset** is state in which a published data asset is tagged as "in purgatory" in Ocean Market. Being in purgatory has implications into how the asset is displayed in Ocean Market, and what actions are permitted to be performed on the asset. Once in purgatory, the asset (actor) may stay there, or leave purgatory if certain conditions are fulfilled.

![](images/process-asset.svg)

* **Purgatory for an actor** is a state in which an actor (Ethereum address) is tagged as "in purgatory" in Ocean Market. Being in purgatory has implications into how the actor profile is displayed in Ocean Market, and what actions the actor is permitted to be perform in Ocean Market. Once in purgatory, the actor may stay there, or leave purgatory if certain conditions are fulfilled.

![](images/process-actor.svg)

### How Does A Data Asset Enter Purgatory?

It can happen in one of these ways:
* OPF receives a DMCA takedown notice (report of copyright violation)
* OPF receives a report of Trademark Policy Violation
* OPF receives a sensitive data takedown request
* OPF flags an asset likely of copyright violation, trademark violation, sensitive data, or otherwise. OPF reserves the right for subjective judgements.

### How Does A Data Asset Leave Purgatory?

If an asset leaves purgatory, it either (a) reverts back to default state in Ocean Market, or (b) access to the asset is disabled.

Access to the asset will be disabled (removed from Ocean Market) if all of the following conditions are fulfilled:
* (Only needed if in a pool) > 95% of the non-publisher liquidity has been removed, or >30 days have elapsed since the asset entered purgatory
* The notice has not been retracted

The asset can be reverted back to default state if all of the following conditions are fulfilled:
* (Only needed if in a pool) > 95% of the non-publisher liquidity has been removed, or >30 days have elapsed since the asset entered purgatory
* The notice is retracted

Here are ways that notice may be retracted:
* The reporter submits a retraction in writing to OPF; or
* The publisher submits a counter-proposal by email to OPF within two weeks; then the reporter submits a retraction by email to OPF within two weeks

### Data Asset Scenario Extremes

Scenario: good publisher, scam reporter.
1. Good publisher publishes good asset
2. Reporter reports it as bad (in bad faith)
3. Publisher submits a counter-proposal
4. Reporter doesn't retract
5. OPF doesn't know if asset is good or bad. Item stays in purgatory. At 30 day mark or when enough liquidity is removed, access is disabled.
6. Publisher gives OPF more information to make it clear that asset is good, and access gets re-enabled. Or, they take scam reporter to court.

Scenario: bad publisher, good reporter.
1. Bad publisher publishes stolen asset
2. Reporter reports it as bad (in good faith)
3. Publisher submits a counter-proposal
4. Reporter doesn't retract
5. OPF doesn't know if asset is good or bad. Item stays in purgatory. At 30 day mark or when enough liquidity is removed, access is disabled.
6. Publisher won't take reporter to court, because they know they'll lose.


* The publisher submits a counter-proposal to the reporter within two weeks (and cc's OPF); then the reporter does not submit a retraction in writing to OPF within two weeks

**Publisher May Send A Counter Notice.** We encourage users who have a data asset in purgatory to consult with a lawyer about their options. If a user believes that their content was disabled as a result of a mistake or misidentification, they may send OPF a [counter notice](guide-to-submitting-a-dmca-counter-notice). As with the original notice, we will make sure that the counter notice is sufficiently detailed (as explained in the [how-to guide](guide-to-submitting-a-dmca-counter-notice)). If it is, we will [post it](#d-transparency) to our [public repository](https://github.com/oceanprotocol/dmca) and pass the notice back to the copyright owner by sending them the link.

**Copyright Owner May File a Legal Action.** If a copyright owner wishes to keep the content disabled after receiving a counter notice, they will need to initiate a legal action seeking a court order to restrain the user from engaging in infringing activity relating to the content on Ocean Market. In other words, you might get sued. If the copyright owner does not give Ocean Market notice within 10-14 days, by sending a copy of a valid legal complaint filed in a court of competent jurisdiction, Ocean Market will reenable the disabled content.


### How Does An Actor Enter Purgatory?

It can happen in one of these ways:
* An asset that the actor has published has been put into purgatory
* On an asset that the actor has published where the actor still has >10% of the holdings, and then withdraws most of their stake at once, without warning to the community. Colloquially, the actor has done a "rug pull" to the detriment of the community.

### How Does An Actor Leave Purgatory?

It can happen in one of these ways:
* The actor submits a request in writing to OPF, and OPF decides at its discretion whether to remove purgatory status.

----

OPF reserves the right to change this policy on an ad-hoc basis, always according to core principles of fairness and transparency.