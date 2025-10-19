## <u>Backend</u>


### 0. korak; Node.js
Predkorak. Če slučajno še nimamo nameščenega Node.js na računalniku ga naložimo. Projekt je bil razvit z uporabo Node.js verzija: v22.20.0 Najbolje je, da se uporabi isto verzijo če je le mogoče, bi pa moralo delati tudi na drugih verzijah, če le ni verzija preveč zastarela.


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
