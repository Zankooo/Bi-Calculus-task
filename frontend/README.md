## <u>Frontend</u>

### Setup

Tudi tukaj moramo namestiti prvo node_modules. To najlažje naredimo iz terminala. Postavimo se v mapo frontend, in uporabimo komando:

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

Za pravilno delovanje frontenda sledimo navodilu za frontend. In dela, le da se ne pokaže rezultat iz REST endpointa (in v Visual Studiu Code v konzoli nam bo javilo, da je napaka pri pridobivanju sporočila)..

Če pa želimo, tako kot je bilo v navodilu povedano; "da se na frontendu prikaže rezultat, ki ga vrne REST endpoint", potem moramo pa tako frontend kot backend skupaj poganjati, da bo res delalo... Torej v ločenih terminalih poženemo prvo recimo backend potem še frontend in vidimo prikazan rezultat iz backenda na frontnedu. 