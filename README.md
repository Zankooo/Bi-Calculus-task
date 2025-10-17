# Testna naloga za preizkus znanja

Projekt je razdeljen na backend in frontend.

## <u>Backend</u>

### Setup

Prvo moramo namestiti node_modules. To najlažje naredimo iz terminala. Postavimo se v mapo backend, in uporabimo komando:
```bash
npm install
```

### Kako zagnati backend?
Pravtako se postavimo v mapo backend in to naredimo enostavno z komando:

```bash
npm run start
```

### Kako preveriti pravilno delovanje?
V terminalu ko smo backend zagnali, nam v konzolo izpiše eno glavo stran in dve podstrani, nekako tako kot je bilo zahtevano v navodilih. Najenostavneje je da samo kopiramo prvo povezavo, torej od prve strani, saj iz nje nato lahko preidemo z gumboma na drugi dve podstrani. 

Lahko pa preidemo na podstrani tudi ročno:

- S povezavo: http://localhost:3000/api pridemo naSwagger/OpenApi dokumentacijo.

- S povezavo: http://localhost:3000/hello pa pridemo na json sporočilo. 


## <u>Frontend</u>

### Setup

Tudi tukaj moramo namestiti prvo node_modules. To najlažje naredimo iz terminala. Postavimo se v mapo backend, in uporabimo komando:

```bash
npm install
```
### Kako zagnati backend?
Pravtako se postavimo v mapo backend in to naredimo enostavno z komando:

```bash
ng serve
```
ali

```bash
npm start
```

### Kako preveriti pravilno delovanje?
V terminalu ko smo backend zagnali, nam v konzolo izpiše na katerem local host. Torej: http://localhost:4200/ 


## <u>Pravilno delovanje obeh delov skupaj</u>

Za pravilno delovanje backenda sledimo navodilom za backend. In dela.

Za pravilno delovanje frontenda sledimo navodilu za frontend. In dela, le da se ne pokaže rezultat iz REST endpointa (in v visual studiu konzoli nam bo javilo, da je napaka pri pridobivanju sporočila)..

Če pa želimo, tako kot je bilo v navodilu povedano; "da se na frontendu prikaže rezultat, ki ga vrne REST endpoint", potem moramo pa tako frontend in backend skupaj poganjati, da bo res delalo... Torej v ločenih terminalih poženemo prvo recimo backend potem še frontend in vidimo prikazan rezultat iz backenda na frontnedu. 