# Tenisový svět - frontend

[Trello](https://trello.com/b/0HTT2NqU/tenisov%C3%BD-sv%C4%9Bt)

Při napojování na data ti mohou usnadnit práci **Nunjucks šablony** (podobnost s Latte) ve složce [**src/templates/**](src/templates/) a [**src/pages/**](src/pages/).

**!! Většina [typových stránek](src/pages/) má na `body` svou vlastní třídu, která je nutná pro korektní zobrazení obsahu stránky!!**

**!!! CSS, JS, obrázky, případně fonty vždy použij ze složky [dist](dist/) !!!**, ve které se nachází soubory, které prošly produkčním buildem.

**Soubory main.min.+(css|js) a main-\[hash\].min.+(css|js) jsou obsahově stejné.** Výhodnější je pro tebe použít soubory bez hashe - při kodérských změnách si nemusíš pokaždé přepisovat název, resp. hash (který kodér používá pro zamezení cachování starých verzí během změn/updatů při posílání šablon projekt. manažerovi a klientovi ke kontrole).

V případě potřeby úpravy se neváhej obrátit na kodéra projektu (Ondřej Kučera), nebo si připoj vlastní hotfix.

## Vložená sociální média a cookie consent

Pro správné (ne)zobrazování vložených soc. médií je na nich nutné v HTML provádět několik úprav.

### Facebook, YouTube

- Změna atributu `src` za `data-src`
- Přidání atributů `data-cookiecategory="social" data-placeholder="data-placeholder"`

### Twitter

Do `script` doplnit `type="text/plain" data-cookiecategory="social"`

### Instagram, TikTok

Do `script` doplnit `charset="utf-8" type="text/plain" data-cookiecategory="social"`

## Setup

`npm install`

## Gulp

Development:

`gulp`

Následně jakákoliv změna v Nunjucks a SCSS vygeneruje src HTML a CSS soubory

Production build:

`gulp build`

Generuje produkční dist soubory
