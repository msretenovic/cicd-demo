# CI/CD Demo

Moj prvi projekat sa GitHub Actions pipeline-om.

## Sta sadrzi

- `src/math.js` - dve jednostavne funkcije (saberi, pomnozi)
- `src/math.test.js` - testovi za te funkcije (Jest)
- `.github/workflows/ci.yml` - CI pipeline koji se pokrece na svaki push

## Sta radi pipeline

1. Preuzima kod
2. Instalira Node.js i pakete
3. Pokrece linter
4. Pokrece testove
5. Build-uje projekat (samo ako testovi prodju)
