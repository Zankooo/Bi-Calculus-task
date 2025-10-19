# Testna naloga za preizkus znanja

Projekt je razdeljen na backend (Nest.js) in frontend (Angular).

## <u>Backend</u>


### 0. korak; Node.js
Predkorak. Če slučajno še nimamo nameščenega node.js na računalniku ga naložimo. Projekt je bil razvit z uporabo Node.js verzija: v22.20.0 Najbolje je, da se uporabi isto verzijo če je le mogoče, bi pa moralo delati tudi na drugih verzijah, če le ni verzija preveč zastarela.


### 1. Korak; Setup

Namestimo node_modules. To najlažje naredimo iz terminala. Postavimo se v mapo backend, in uporabimo komando:
```bash
npm install
```

### 2. Korak; Kako zagnati backend?
Pravtako se postavimo v mapo backend in to naredimo enostavno z komando:

```bash
npm run start
```

### 3. Korak Kako preveriti pravilno delovanje?
V terminalu ko smo backend zagnali in backend laufa, nam v konzolo izpiše vse tri strani. Samo kliknemo na povezavo oziroma kopiramo povezavo v brskalnik in enter. 
Še najbolje pa je da to naredimo samo za prvo povezavo (prva stran) saj iz nje z gumbi pridemo na drugi dve podstrani.

- Povezava domača stran: http://localhost:3000

- Povezava na Swagger/OpenApi dokumentacijo. http://localhost:3000/api 

- Povezava na json sporočilo: http://localhost:3000/hello 


## <u>Frontend - koraki za zagon</u></u>

### 1. Korak; Setup

Tudi tukaj moramo namestiti prvo node_modules. To najlažje naredimo iz terminala. Postavimo se v mapo frontend, in uporabimo komando:

```bash
npm install
```
### 2. Korak; Kako zagnati frontend?
Pravtako se postavimo v mapo frontend in to naredimo enostavno z komando:

```bash
ng serve
```
ali

```bash
npm start
```

### 3. Korak; Kako preveriti pravilno delovanje?
V terminalu ko smo frontend zagnali, nam v konzolo izpiše na katerem local host. Torej: http://localhost:4200/ 


## <u>Koraki za zagon obeh delov aplikacije skupaj</u>

Za pravilno delovanje backenda sledimo navodilom za backend. 

Za pravilno delovanje frontenda sledimo navodilu za frontend, le da se ne pokaže rezultat iz REST endpointa (in v Visual Studiu Code v konzoli nam bo javilo, da je napaka pri pridobivanju sporočila)..

Če pa želimo, tako kot je bilo v navodilu povedano; "da se na frontendu prikaže rezultat, ki ga vrne REST endpoint", potem moramo pa tako frontend kot backend skupaj poganjati, da bo res delalo... Torej v ločenih terminalih poženemo prvo backend potem še frontend in vidimo prikazan rezultat iz backenda na frontnedu na povezavi: http://localhost:4200/ 

## <u>Uporabljene tehnologije in verzije</u>

| Sklad  | Tehnologija / Orodje       |
| ------------- | -------------------------- |
| **Backend**   | Node.js (verzija: v22.20.0)         |
|               | NestJS                     |
| **Frontend**  | Angular                    |
| **API**       | REST API                   |
| **Jezik**     | TypeScript, Javascript               |
| **Ostalo**    | NPM (Node Package Manager) |

