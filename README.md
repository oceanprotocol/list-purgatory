# Self Description Lifecycle Management

- [Self Description Lifecycle](#-lifecycle)
- [List Schema](#-list-schema)
- [List Usage](#️-list-usage)
- [License](#-license)

## Based on the Gaia-X Architecture Document 21.06 by Gaia-X AISBL

The Gaia-X Architecture defines a lifecycle for all self descriptions. This lifecycle shall be tracked within self-descriptions at status.

The Self-Description Storage contains the raw published Self-Description files in the JSON-LD format together with additional lifecycle metadata. The Self-Description Graph is the basis for advanced query mechanisms that take the references between Self-Descriptions into consideration.

Since Self-Descriptions are protected by cryptographic signatures, they are immutable and cannot be
changed once published. This implies that after any changes to a Self-Description, the Participant as the
Self-Description issuer has to sign the Self-Description again and release it as a new version.

The lifecycle state of a Self-Description is described in additional metadata. There are four possible states for the Self-Description lifecycle. The default state is “active”. The other states are terminal, i.e., no further state
transitions follow upon them:

- Active

- End-of-Life (after a timeout date, e.g., the expiry of a cryptographic signature)

- Deprecated (by a newer Self-Description)

- Revoked (by the original issuer or a trusted party, e.g., because it contained wrong or fraudulent
information)

The Catalogues provide access to the raw Self-Descriptions that are currently loaded including the lifecycle
metadata. This allows Consumers to verify the Self-Descriptions and the cryptographic proofs contained in
them in a self-service manner.

The Self-Description Graph contains the information imported from the Self-Descriptions that are known
to a Catalogue and in an “active” lifecycle state. 

Gaia-X Self-Descriptions express characteristics of Assets, Service Offerings and Participants that are
linked to their respective Identifiers. Providers are responsible for the creation of Self-Descriptions of their
Assets or Resources. In addition to self-declared Claims made by Participants about themselves or about
the Service Offering provided by them, a Self-Description may comprise Credentials issued and signed by
trusted parties. Such Credentials include Claims about the Provider or Asset/Resource, which have been
asserted by the issuer.

Self-Descriptions can be used for:

- Discovery and composition of Service Offerings in a Catalogue

- Tool-assisted evaluation, selection, integration and orchestration of Service Instances comprising
Assets and Resources

- Enforcement, continuous validation and trust monitoring together with Usage Policies

- Negotiation of contractual terms concerning Assets and Resources of a Service Offering and
Participants

An Identity is composed of a unique Identifier and an attribute or set of attributes that uniquely describe an
entity (Participant/Asset) within a given context. The lifetime of an Identifier is permanent. It may be used
as a reference to an entity well beyond the lifetime of the entity it identifies or of any naming authority
involved in the assignment of its name. Reuse of an Identifier for a different entity is forbidden. Attributes
will be derived from existing identities as shown in the IAM Framework. 

Gaia-X itself enables fine-grained access control-based attribute evaluation. Attributes will be derived from
the metadata, Self-Descriptions and runtime contexts (e.g., user Identity and associated properties).

Gaia-X will not implement central access control mechanisms for Assets or Resources. The responsibility
stays with the Provider. However, Gaia-X will provide a standardized query API which enables the Provider
and Consumer to query and verify the Identity and Self-Description of the respective other party.



Based on the Functional Requirements for a Federated Catalogue:

- A self-description can be revoked by a Catalogue Administrator. 

## Lifecycle

![Self-Description Lifecycle](https://raw.githubusercontent.com/deltaDAO/data-lifecycle-management/main/self-description-lifecycle.png)

The Provider or Asset owner who submitted a Self-Description may update it. The Federated Catalogue will retain previous versions of such updated Self-Descriptions, and clients will be able to retrieve each version of a Self-Description.

For the purpose of querying, the most recent versions of all Self-Descriptions will be indexed into the Self-Description Graph.

To organize the indexing, versioning, etc. of Self-Descriptions, the Federated Catalogue maintains Administrative Metadata about each Self-Description, including in what state of the life cycle according to ADR-003 it is. These metadata are not included inside the Self-Descriptions and are not required to be expressed in terms of the Self-Description Schema.

A registered Self-Description can be deleted by an authorized Participant, usually the one who created it or a Participant that is explicitly authorized to do so. In addition, dedicated Catalogue administrators have the permission to delete corrupted or outdated Self-Descriptions. Furthermore, they are allowed to delete any Self-Description that puts the proper functionality of the Catalogue at risk, for instance by their size.

A Deletion event results in the Self-Description in question not being listed anymore in the regular search queries. The Catalogue may however still store a local copy for legal issues or to provide backup capabilities.

This requires a central lifecycle management repository next to the federated catalogue that allows to filter self descriptions and their associated participants and/or service offerings.

## Services revocation
The importance of the Compliance through Automation will grow over time, covering more and more Gaia-X principles such as interoperability, portability, security. However automation will not be able to cover all aspects of the Self-Declaration and the governance model must include a mechanism to demotivate malicious actors to pollute the Catalogues.

- Level 1: Any Self-Description with an attribute to be automatically found non-conformant will be declared non-conformant on the Gaia-X Registry and the associated DID's public keys will be revoked until the conformance is gain. 

- Level 2: Any self-declared attributes of a Gaia-X conformant Self-Description found to be incorrect after an audit of a conformant Gaia-X CAB, will lead to the revocation of all DID's public keys associated with that Self-Description. 
- The activation of that revocation will be submitted for approval to the Gaia-X Board of Directors with the opportunity for the Participant to state its views within a period of 15 days. To minimize subjective decisions and promote transparency, the votes and vote's results will visible and stored on the Gaia-X Registry.
For example, a non-conformant self-declared attribute in the Service Offering, will lead to the revocation of the Service Offering's Provider keys and all the Service Offerings from the same Provider.

- Level 3: Any Provider found to be convicted by the Court of Justice of the European Union - CJEU - or a European's Member State court of justice on Data Breach will lead to the revocation of all Provider's key and Provider's Services Offering.

 For this reason a distributed ledger or governance repositories will be established that can be accessed by all participants to ensure that the life-cycle management across communities is synchronized. This is the function of the current life-cycle management.



## List Schema

The file [list-assets.json](list-assets.json) lists all assets under management. It follows this schema.

```json
{
  "did": "did:op:0000",
  "reason": "depreceated data"
}, ...
```

The file [list-accounts.json](list-accounts.json) lists all accounts under management. It follows this schema. 

```json
{
  "address": "0x.....",
  "reason": "depreceated data"
}, ...
```

For both assets and accounts, the `reason` field can be one of these values: `IP Infringement`, `Impersonation`, `Sensitive Data`, `Government Order`, and potentially more.

## List Usage

These lists go live once merged to `main`, and the tools using them will pick up the changes immediately.

The lists are exposed by [`Self Description Lifecycle Management`](https://github.com/deltaDAO/self-description-lifecycle-management) as an HTTP API endpoint, fetched on run time by [`aquarius`](https://github.com/deltaDAO/aquarius) and the [`Minimal Viable Gaia-X Portal Demonstrator`](https://github.com/deltaDAO/GAIA-X-Portal). In the Portal, alerts are shown for data sets and accounts in purgatory, and actions are blocked as described in the [policies](https://github.com/deltaDAO/self-description-lifecycle-management/tree/main/policies).

## License

```text
Copyright 2021 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
