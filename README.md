[![Netlify Status](https://api.netlify.com/api/v1/badges/e2614683-9c74-4ae0-89dc-59ed5e6b818b/deploy-status)](https://app.netlify.com/sites/30hari/deploys)

# Website

Buku 30 Hari React dibuat dengan [Docusaurus 2](https://v2.docusaurus.io/), Berdasarkan translate Buku [30 Days of React](https://github.com/fullstackreact/30-days-of-react) dan [Kode 30 Hari](https://github.com/topidesta/30hariCode)

### Installation

```
$ yarn
$ yarn start
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Searching Build

```
$ yarn build
$ node build-search-data.js
```

Update your index of searching using lunr.js!

### Netlify

```
https://30hari.netlify.com/
```
