---
title: op cli ftw
description: Hemmeligheter på kommandolinja med 1Password 🤐
date: 2023-03-07
author:
  name: Jan-Kåre Solbakken
  link: https://www.linkedin.com/in/jksolbakken/
  image: /img/authors/jk.jpg
---

<img src="/img/passwordnote.png" height="300px" style="border: 1px solid white" alt="Passord på gul lapp" title="Passord på gul lapp">

### Innledning

Utviklere er over snittet glade i terminalen sin og kommandolinja, og alle produkter og skyleverandører med et snev av respekt for seg selv tilbyr minst ett "Command Line Interface" eller "CLI". Mange av disse CLI-ene har behov for å lagre hemmeligheter i form av API keys eller tokens som trengs for å aksessere tjenesten de er tilknyttet. Det er varierende praksis på hvordan disse hemmelighetene lagres, men ofte ender de opp i klartekst et eller annet sted i brukerens hjemmekatalog. Utviklere trenger også å kunne kjøre tingene sine lokalt, og da ender ofte passord til tilknyttede databaser og tjenester opp i klartekst i `.env`-filer som man kanskje eller kanskje ikke husker å legge i `.gitignore` slik at de ikke sjekkes inn ved et uhell.

Etterhvert som utviklermaskiner blir [stadig mer attraktive angrepsmål](https://arstechnica.com/information-technology/2023/02/lastpass-hackers-infected-employees-home-computer-and-stole-corporate-vault/) trenger vi å gjøre det enkelt å håndtere hemmeligheter på en trygg måte. De fleste av oss bruker (håper jeg) en passord-manager, og flere av dem har nå fått egne CLI-er som skal gjøre hverdagen på kommandolinja litt enklere og sikrere. De følgende eksemplene er med bruk av [1Password](https://1password.com/downloads/command-line/) fordi det er den jeg bruker og kjenner, tilsvarende ting kan sikkert gjøres i andre passord-managere også. CLI-et samarbeider med desktop-appen for å autentisere deg med bl.a. biometri og/eller Apple Watch.

### Uthenting av hemmeligheter

```shell
❯ op item get Tullekonto --vault=demo --fields password
veldighemmelig
```

### Hemmeligheter i miljøvariabler

Referansen til en hemmelighet er på formen `op://vault/item/[section/]field`, feks. `op://demo/Tullekonto/password`. Istedenfor å legge legge den hemmelige verdien rett i miljøvariabelen

```shell
MYTHING="veldighemmelig"
```

så legger man inn referansen verdien i 1Password.

```shell
MYTHING="op://demo/Tullekonto/password"
```

Programmet som bruker miljøvariabelen må da startes opp via 1Password for å få fylt inn verdien. Istedenfor å kjøre

```shell
myprogram
```

kjører man da

```shell
op run -- myprogram
```

### Bruk av .env-filer

Env-filer lar deg definere flere miljøvariabler på formen `KEY=value` separert av linjeskift. Opplegget er derfor det samme som i forrige avsnitt, istedenfor å legge verdier direkte i miljøvariablene legger man inn referansen i 1Password.

```shell
MYTHING="op://demo/Tullekonto/password"
MYOTHERTHING="op://demo/Tullekonto2/password"
```

For å bruke disse verdiene starter man programmet sitt med

```shell
op run --env-file="./filnavn.env" -- myprogram
```

Disse env-filene kan sjekkes inn i git uten å utgjøre en sikkerhetsrisiko, og hvis alle utviklerne bruker 1Password er det enkelt å dele disse hemmelighetene slik at nye på teamet kan komme raskt i gang.

### Bruk av Shell Plugins

1Password sitt CLI tilbyr også integrasjon med andre CLI-er vha [Shell Plugins](https://developer.1password.com/docs/cli/shell-plugins/). Disse dekrypterer og legger hemmelighetene inn i de andre CLI-ene når de trengs. Shell Plugins er støttet i Bash, Zsh og fish.

For å sette opp for eksempel integrasjon med GitHub's `gh` kjører man følgende kommando:

```shell
op plugin init gh
```

Etter å ha svart på et par enkle spørsmål er pluginet klart til bruk. Nødvendige alias mm. legges automatisk inn i konfigurasjonen til ditt shell, og neste gang du skriver feks. `gh pr list` må du "vise fingeren".

### SSH og Git

1Password kan også hjelpe deg med å håndtere nøkler for SSH og signering av Git commits. Den kan generere nøkler og fylle dem automatisk inn i GUI-en til GitHub og flere av de store skyplattformene i tillegg til å automatisk konfigurere dine SSH og/eller Git-klienter. Sjekk lista over hvilke klienter som støttes [her](https://developer.1password.com/docs/ssh).

### Oppsummering

Dette var en kort intro til 1Password sitt CLI. Verktøy som dette gjør det vesentlig enklere å håndtere hemmeligheter på en trygg måte også på kommandolinja. Sjekk [dokumentasjonen](https://developer.1password.com/docs/cli/get-started/) for detaljer og oversikt over all funksjonalitet.

Happy (litt sikrere) coding!
