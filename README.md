# Terminal-Themed Developer Portfolio

Codul sursă pentru portofoliul meu personal. Este o aplicație web cu o interfață inspirată din terminalele retro/neon, care preia, filtrează și afișează automat proiectele mele publice de pe GitHub.

Pentru a ocoli limita standard de request-uri a API-ului GitHub și a păstra token-ul de autentificare strict pe server, cererile nu se fac din frontend, ci printr-un proxy serverless.

## Tehnologii folosite

- **Frontend:** Vue 3 (Composition API), TypeScript, Vite
- **Backend (Proxy):** Vercel Serverless Functions (Node.js)
- **Date:** GitHub REST API
- **Stilizare:** CSS pur (fără framework-uri externe)

## Instalare și rulare locală

Pentru a rula acest proiect pe calculatorul tău, asigură-te că ai [Node.js](https://nodejs.org/) instalat.

### 1. Clonarea proiectului

```bash
git clone [https://github.com/Mihnea332/Numele-Repo-ului-Tau.git](https://github.com/Mihnea332/Numele-Repo-ului-Tau.git)
cd Numele-Repo-ului-Tau
npm install
```
