# securitychampions.no

Nettside for fellesskapet Security Champions Norge.

Laget med [11ty](https://www.11ty.dev).

## Hvem kan bidra?

Security Champions Norge er 100 % drevet av fellesskapet selv, og baserer seg på bidrag fra frivillige.

Det er bare å sende inn en pull requester hvis du har noe å legge ut på nettsiden!

## Hvordan skrive artikler/blogginnlegg?

Blogginnlegg legges i mappen [`src/blogg`](https://github.com/Security-Champions-Norway/securitychampions.no/tree/main/src/blogg) og skrives i Markdown. Se tidligere innlegg for eksempler på format.

Øverst i innlegget må det legges inn nødvendig metadata for at innlegget skal vises riktig. Eksempel:

```yaml
---
title: Velkommen til securitychampions.no! 👋🏻
description: Hva er dette, og hvordan kan du bidra?
postDate: 2022-12-03
author:
  name: Julian Ravn Thrap-Meyer
  link: https://www.linkedin.com/in/julian-ravn-thrap-meyer/
  image: https://media-exp1.licdn.com/dms/image/C4D03AQEpftwbX54xiA/profile-displayphoto-shrink_100_100/0/1645188444451?e=1675296000&v=beta&t=CUyhf_Et2oBeEm9JIf4M0CUkiSuL7fotN_2WmZUlXhw
layout: layouts/blogpost.njk
---

... her kommer innlegget ...
```

Dette vil lage en egen side for innlegget ditt, og liste den opp på bloggoversikten.

## Hvordan jobbe med siden lokalt?

Dersom du ønsker å jobbe med siden lokalt, for eksempel for å se hvordan artikler blir seende ut, trenger du:

- `node` minimum versjon 18

#### Forberede kjøring

```shell
$ npm install
```

#### Kjøre nettsiden lokalt

```shell
$ npm start
```

Nettsiden kjøres så opp og kan sees på [localhost:8080](http://localhost:8080).
