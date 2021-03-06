# HDC Messages Format

HDC is an acronym for Human Dividend Currency. HDC aims at defining messages and an interpretation of it in order to describe a monetary system based on Humans and allowing to apply Universal Dividend on its community.

## Contents
* [Contents](#contents)
* [Vocabluary](#vocabulary)
* [Certificate](#certificate)
  * [Definition](#definition)
  * [Validity](#validity)
  * [OpenUDC User ID](#openudc-user-id)
  * [ASCII-armored format](#ascii-armored-format)
* [Amendment](#amendment)
  * [Definition](#definition-1)
  * [Validity](#validity-1)
* [Transaction](#transaction)
  * [Definition](#definition-2)
  * [Validity](#validity-2)
  * [Coins format](#coins-format)
  * [Issuance transaction](#issuance-transaction)
  * [Transfert transaction](#transfert-transaction)
  * [Fusion transaction](#fusion-transaction)
  * [Money ownership](#money-ownership)
  * [Transactions chain](#transactions-chain)

## Vocabulary

Word | Description
---- | -------------
Universal Dividend | Money issuance **directly** and **exclusively** on community members.
Community | A groupment of individuals linked together trought a Monetary Contract.
Monetary Contract | A document gathering the informations defining the community members, voters and monetary mass inside it.

## Certificate

### Definition

A certificate is an OpenPGP public key used to identify an individual as unique inside the Community.

For more informations on OpenPGP, see [RFC 4880 - OpenPGP Message Format](http://tools.ietf.org/html/rfc4880).

### Validity
To be valid, a certificate MUST contain exactly one OpenUDC User ID in it. An OpenPGP certificate with zero or more than one OpenUDC User ID in it **IS NOT** a valid certificate.

### OpenUDC User ID

A common User ID in **OpenPGP** looks like:

    Full name (Comment) <email@address>

A common User ID in **OpenUDC** looks like:

    Pseudonyms (udid2;c;LASTNAME;FIRSTNAME;1970-01-01;e+47.47-000.56;0;) <email@address>

As shown, OpenUDC User ID is simply an OpenPGP User ID with the following transformations:

* `Full name` turns into `Pseudonyms` which is a list of pseudonyms separated by spaces
* `Comment` turns into an OpenUDC-specific string called `udid2`
* `email@address` does not change

Of course, turning `Full name` into `Pseudonyms` is not mandatory. Any string may be used here.

The format of `udid2` is defined in [OpenUDC specifications](https://github.com/Open-UDC/open-udc/blob/master/docs/OpenUDC_Authentication_Mechanisms.draft.txt#L164).

### ASCII-armored format

Classically, OpenPGP keys can be represented in ASCII-armored format which allows it to be transfered in a textual way.

An example of such a certificate could be:

    -----BEGIN PGP PUBLIC KEY BLOCK-----
    Version: GnuPG v1.4.12 (GNU/Linux)

    mQENBFHHC/EBCADWTLSN7EGP+n30snndS3ZNcB02foL+0opcS6LK2coPDJLg2noo
    keJRHZxF3THmZQrKwZOjiuDBinOc5DWlzIS/gD/RaXwntgPFlGKBlBU+g255fr28
    ziSb5Y1lW4N//nUFdPZzoMmPgRj0b17T0UPCoMR8ZZ/Smk5LINbQwt+A+LEoxEdE
    Vcq+Tyc0OlEabqO6RFqiKDRiPhGPiCwVQA3yPjb6iCp5gTchObCxCnDbxA0Mfj9F
    mHrGbepNHGXxStO4xT0woCb7y02S1E8K08kOc5Bq9e1Yj5I/mdaw4Hn/Wp28lZl1
    mnO1u1z9ZU/rcglhEyaEOTwasheb44QcdGSfABEBAAG0TUxvTCBDYXQgKHVkaWQy
    O2M7Q0FUO0xPTDsyMDAwLTA0LTE5O2UrNDMuNzAtMDc5LjQyOzA7KSA8Y2VtLm1v
    cmVhdUBnbWFpbC5jb20+iQE9BBMBCAAnBQJRxwvxAhsDBQkLR5jvBQsJCAcDBRUK
    CQgLBRYCAwEAAh4BAheAAAoJEOnKt20ZqGUeZYcH/0ItH4b/O0y7V1Jzc1DZAdn4
    iDiI7/SF3fN4f6cJCu/SOVb+ERFIb6JK+HNHdVAcMHKaPW625R0FahHUkcXWkkGm
    Q6+sLIsVZwVN1oeZtlD12cq9A4UJyfJUXkinMKkI8xpdV8J7s5wFRavOS/qaF5be
    ah0Z+IGwQK0nuXxWpT6UZWbpUfXPQB2Mz2/rpjSWKwO3X4FwwOfDiuZExyH2JPDY
    shdPcj/x+gnzYW9XfWCJw3rOK42vtM+aLtUpJO0Jh6X/sj/iqyS4rPB4DVCmEgSX
    Px1P+kqnsz3aNTOIujXS8Faz+TC+eNhn+z3SoTl5gBlNNM171fWFr0BR3nIfIu65
    AQ0EUccL8QEIAPAQaxK6s4DjDHiOwrMotvb479QD5PsHU6S0VG0+naoPlNJb2d5w
    YhnFAn4aYLiXx4IIl38rHnV+yWATOUe2rdCe4enTXkxyWJVaxIcNJLFpUjHYGbrC
    nNwiXpuQfSDuRN/wcVNSBKXhWNUPY9IsbgERWhS5YTFnuQcBjMqDwF6JImQ8O4nZ
    wno811nqK1XaMuLVvXZAsO1Vi1k3NArM5+jdlq9e3BA0NcHJmGEcQdTw0Tk5Oq6r
    mE8ux7pS0bn6OUkkseR5DyRlFtzqi4wp30GeggeFExx7ZCVuctpJX9ZoC3cJoZT0
    s3LuUtV0EW50yCtP+3Vpkek2WtjfVbM6kDkAEQEAAYkBJQQYAQgADwUCUccL8QIb
    DAUJC0eY7wAKCRDpyrdtGahlHg7+B/95xEoSrFQ7/mc7g6sbisvx3s547gUXXYSu
    FHS03IMDWJrfGKqXtBf9ETBx4OLeBXY7z1lL4WCN6/xtrL+mSQ9dbDqdXv/1EhkS
    v0s+IvJ34KYGAkFXSCoTE7rnkPwQjoMYVSFkf5e8g9adyKvndq/QSPNuv+FPL6sH
    m1N9nmus5Ebr0zTVDmmfoqzokuDfHm5h6YrkFscMGjrCKWuXSiTaGj9Hm3MqeZ3T
    Kva5isa/h0h7Ai3wJ5XJpMrFNN6BU/wIt7fM2hsNAOwaG+WUfgjYEkOua8gPPtpL
    ZJJPb/89yrs9F7JkLi/oiAl5VpItm+hlFpLe1TE7oa6k53eZ2a+V
    =rOj9
    -----END PGP PUBLIC KEY BLOCK-----

## Amendment

### Definition

An amendment is the atomic part **constituting** a Monetary Contract. A Monetary Contract is nothing but a chained list of Amendments.
An Amendment is an ASCII document defining:

* A currency name
* An exhaustive list of current members
* An exhaustive list of current voters
* Eventually, a Universal Dividend amount
* Eventually, a reference to its preceding Amendment (every Amendment have a predecessor, excepted the first)

Amendments, forming the Monetary Contract, are *collectively signed* and thus should be considered as the only authentic reference document towards money community and potential monetary mass.

Amendments have the following structure:

    Version: VERSION
    Currency: CURRENCY_NAME
    Number: INCREMENT
    PreviousHash: PREVIOUS_HASH
    UniversalDividend: UNIVERSAL_DIVIDEND
    CoinMinimalPower: COIN_MINIMAL_POWER
    MembersRoot: WOT_MERKLE_ROOT
    MembersCount: WOT_SIZE
    MembersChanges:
    +NEW_INDIVIDUAL_FPR
    -LEAVING_INDIVIDUAL_FPR
    VotersRoot: VOTERS_MERKLE_ROOT
    VotersCount: VOTERS_COUNT
    VotersChanges:
    +INDIVIDUAL_FPR_VOTING_THIS_ONE_NOT_VOTED_PREVIOUS
    -INDIVIDUAL_FPR_VOTED_PREVIOUS_NOT_VOTING_THIS_ONE

All fields are not mandatory for a given amendment. Note that this precise structure is the version 1 amendment structure, and that any other structure may be proposed with a different version number. The only requirement is to have a `Version: VERSION` starting the text structure.

Here is the interpretation of each field:

Field | Description | Required
----- | ----------- | --------
`Version` | denotes the current structure version. | **Required**
`Currency` | contains the name of the currency. This is used to identify the target of the amendment, as several moneys may be HDC-based. | **Required**
`Number` | references the position of the amendment in the amendment chain. Initial amendment has the value `0`. | **Required**
`PreviousHash` | **is mandatory if `Number` is positive**. It is a hash of the previous amendment content, and is used for people to identify without ambiguity the previous amendment (`Number` field is not enough for that purpose, `PreviousHash` is an authentication mecanism to do this job). | *Not Required*
`UniversalDividend` | if provided, is a positive number. It defines the amount of money each member of the community may create for **THIS** amendment. | *Not Required*
`CoinMinimalPower` | if provided, is a zero or positive number. It restricts the newly issued coins to a minimal decimal power. For example, with a value of 2, only coins with a value starting from 100 may be created from this amendment. This field is used to avoid abuses linked to money issuance. | *Not Required*
`MembersRoot` | is the root hash of a Merkle tree listing the current members of the whole community. It is a checksum mecanism. Note that `MembersChanges` are included in the Merkle. | **Required**
`MembersCount` | is used in combination of `MembersRoot`, it defines how many leafs were used to generate the Merkle tree. | **Required**
`MembersChanges` | contains a list of members joining or leaving the community. A joining member has a line starting with `+` and a leaving one with `-`. | **Required**
`VotersRoot` | is the root hash of a Merkle tree listing the current voters of the whole community. It is a checksum mecanism. Note that `VotersChanges` are included in the Merkle. | **Required**
`VotersCount` | is used in combination of `VotersRoot`, it defines how many leafs were used to generate the Merkle tree. | **Required**
`VotersChanges` | contains a list of members whose voting state change. A new voting member has a line starting with `+` and a no more voting one with `-`. Members who voted previous amendment and voted this one is not considered a change, thus does not appear in this list. | **Required**

### Validity

In HDC, an Amendment structure is considered *valid* if:

* Every required field is present, without consideration of any order.
* Every present field ends with new line character.
* Fields `Version`, `Number`, `UniversalDividend` (if present), `CoinMinimalPower` (if present), `MembersCount`, `VotersCount` are zero or positive integer values.
* Fields `PreviousHash`, `MembersRoot`, `VotersRoot` are upper-cased SHA-1 hashes.
* Fields `MembersChanges` and `VotersChanges` are upper-cased SHA-1 hashes, preceded either by a `+` or `-` character.
* When `Number` field is positive, Amendment has a `PreviousHash` value.

Note that having an Amendment with a `CoinMinimalPower` without `UniversalDividend` field (or `0` valued) is not a considerated as invalid, but is a non-sense from HDC point of view.

## Transaction

### Definition

Transactions are the last step after defining Certificates and Amendments. Transactions are the conceptual support of money inside HDC: it allows to materialize money ownership.

A transaction is used either to:

* Transfert *new* money
* Transfert *existing* money
* Transfert *fusionned* money

A transaction is defined by the following format:

    Version: VERSION
    Sender: SENDER_FINGERPRINT
    Number: INCREMENT
    Recipient: RECIPIENT_FINGERPRINT
    Type: TRANSACTION_TYPE
    Coins:
    COIN_ID1[, TRANSACTION_ID1]
    COIN_ID2[, TRANSACTION_ID1]
    COIN_ID3[, TRANSACTION_ID7]
    ...
    Comment:
    [Some multiple line
    comment here...]

Here is a description of each field:

Field | Description
----- | -----------
`Version` | denotes the current structure version.
`Sender` | the current owner's OpenPGP fingerprint of the coins to be sent.
`Number` | an increment number identifying this transaction among all others sender's transactions.
`Recipient` | the recipient's OpenPGP fingerprint to whom the coins are to be sent.
`Type` | gives information on how to to interprete the coin list. Value is either `TRANSFERT`, `ISSUANCE` or `FUSION`.
`Coins` | a list of coins that are to be sent. Each line starts with a `COIN_ID` identifying the coin, eventually followed by a comma and a `TRANSACTION_ID` justifying the ownership of the coin.
`Comment` | comment for transaction. May be used for any future purpose. Multiline field, ends at the end of the transaction message.

And `TRANSACTION_ID` has the following format:

    SENDER_FINGERPRINT-INCREMENT

### Validity

In HDC, a Transaction structure is considered *valid* if:

* Fields `Sender`, `Recipient` are upper-cased SHA-1 hashes.
* Fields `Version`, `Number` are zero or positive integer values.
* Field `Type` has either `TRANSFERT`, `ISSUANCE` or `FUSION` value.
* In case of `Type: TRANSFERT`:
  * `Coins` must have at least one coin.
  * Each line must be **with** `TRANSACTION_ID` provided.
* In case of `Type: ISSUANCE`:
  * `Coins` must have at least one coin.
  * Each line must be **without** `TRANSACTION_ID` provided.
* In case of `Type: FUSION`:
  * `Coins` must have its first coin, matching a `F-TRANSACTION_NUMBER` format (it is the result coin).
  * Following coins must have lines **with** `TRANSACTION_ID` provided.
  * Following coins sum of values **must be exactly** the same value as the first coin (result coin)

### Coins format

A `COIN_ID` has the following format:

    INDIVIDUAL_FINGERPRINT-COIN_NUMBER-COIN_BASE-COIN_POWER-COIN_ORIGIN

Here is a description of each field:

Field | Description
----- | -----------
`INDIVIDUAL_FINGERPRINT` | is the member's OpenPGP fingerprint issuing this coin.
`COIN_NUMBER` | is an increment number identifying this coin among all others issued by this individual.
`COIN_BASE` | is a decimal number between 1 and 9 defining the base value of the coin.
`COIN_POWER` | is a decimal number with no maximum power, but with a minimal value defined in the Monetary Contract.
`COIN_ORIGIN` | is a special string used to identify this coin origin.

`COIN_ORIGIN` is one of the following structure:

    A-AMENDMENT_NUMBER
    F-TRANSACTION_NUMBER

With the following meaning:

Field | Description
----- | -----------
`A or F` | `A` indicates the coin is issued from an amendment, while `F` indicates the coin is issued by fusion of other coins.
`AMENDMENT_NUMBER` | is the unique Amendment number from which this coin is created (justifying the issuance).
`TRANSACTION_NUMBER` | is the unique Transaction number of the individual from which this coin is created (fusion case).

#### Examples

For a *new coin* of value 500 issued by individual 31A6302161AC8F5938969E85399EB3415C237F93, `COIN_ID` would be:

    31A6302161AC8F5938969E85399EB3415C237F93-1-5-2-A-1

and his next coins would have a value of 40 and 60 respectively:

    31A6302161AC8F5938969E85399EB3415C237F93-2-4-1-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-3-6-1-A-1

if he wanted to forge coins 2 and 3 thereafter (say in his 14th transaction), the future coin id of value 100 would be:

    31A6302161AC8F5938969E85399EB3415C237F93-4-1-2-F-14

### Issuance transaction

Such a transaction is used to *create* new money, i.e. new coins. To be a valid money issuance transaction, it MUST have the `Type: ISSUANCE` value. With this information, `Coins` field MUST be filled with coins WITHOUT `TRANSACTION_ID` besides them. Indeed, `TRANSACTION_ID` is used to justify an anterior ownership, as transactions materializes ownership. And of course, a new coin have no anterior ownership, because it is a *new* coin.

#### Example

    Version: 1
    Sender: 31A6302161AC8F5938969E85399EB3415C237F93
    Number: 1
    Recipient: 31A6302161AC8F5938969E85399EB3415C237F93
    Type: ISSUANCE
    Coins:
    31A6302161AC8F5938969E85399EB3415C237F93-1-5-2-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-2-2-2-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-3-1-2-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-4-1-2-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-5-5-1-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-6-3-1-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-7-1-1-A-1
    31A6302161AC8F5938969E85399EB3415C237F93-8-1-1-A-1
    Comment:
    Creating 8 new coins according to Amendment 1
    (imaginary one, with Universal Dividend 1000)
    Coins are:
        - 1 value 500
        - 1 value 200
        - 2 value 100
        - 1 value 50
        - 1 value 30
        - 2 value 10
    Note that this comment is part of transaction thus
    il also signed.

### Transfert transaction

Transfert transaction is identified by having `Type: TRANSFERT` value. Such a transaction alter the ownership of one or more coins from `Sender` to `Recipient`. Ownership can be proved by the `Recipient` simply by showing this transaction.

Thereafter, when `Recipient` wants to send those coins to someone else, he will put himself as sender, put those coins in the `Coins` field, adding the previous transaction's `TRANSACTION_ID` besides the coins to justify he is the owner of the coins.

#### Example

    Version: 1
    Sender: 31A6302161AC8F5938969E85399EB3415C237F93
    Number: 92
    Recipient: 86F7E437FAA5A7FCE15D1DDCB9EAEAEA377667B8
    Type: TRANSFERT
    Coins:
    31A6302161AC8F5938969E85399EB3415C237F93-1-5-2-A-1, 31A6302161AC8F5938969E85399EB3415C237F93-1
    31A6302161AC8F5938969E85399EB3415C237F93-2-2-2-A-1, 31A6302161AC8F5938969E85399EB3415C237F93-1
    Comment:
    Here I am sending coins 500 and 200 to someone else (either an individual or organization).

### Fusion transaction

Fusion transaction is identified by having `Type: FUSION` value. Such a transaction allows to fusion *existing* coins into a *new* one with a value equals to the sum of the material coins.

#### Example

    Version: 1
    Sender: 31A6302161AC8F5938969E85399EB3415C237F93
    Number: 92
    Recipient: 31A6302161AC8F5938969E85399EB3415C237F93
    Type: FUSION
    Coins:
    31A6302161AC8F5938969E85399EB3415C237F93-9-5-1-F-92
    31A6302161AC8F5938969E85399EB3415C237F93-6-3-1-A-1, 31A6302161AC8F5938969E85399EB3415C237F93-1
    31A6302161AC8F5938969E85399EB3415C237F93-7-1-1-A-1, 31A6302161AC8F5938969E85399EB3415C237F93-1
    31A6302161AC8F5938969E85399EB3415C237F93-8-1-1-A-1, 31A6302161AC8F5938969E85399EB3415C237F93-1
    Comment:
    Here I am fusioning my coins 6,7,8 (of respective value 30,10,10) to make a new coin of value 50.
    Of course, coins 6,7,8 are therefore unusable as they are no more part of monetary mass.

### Money ownership

Money ownership **IS NOT** limited to members of the Community. Any owner (an individual or an organization) of an OpenPGP certificate may own money. However, he won't be able to issue new coins as only individuals can be part of the Community, i.e. be inscribed in the amendments chain to which refers any Issuance Transaction.

### Transactions chain

It is obvious that a coin a sender does not own CAN NOT be sent by him. That is why a transaction refers to other transactions, to prove that the sender actually owns the coins he wants to send.
