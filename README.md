# api-publication

![Gif de la bonne humeur](https://media1.tenor.com/images/f72cb542d6b3e3c3421889e0a3d9628d/tenor.gif?itemid=4533805)

# Installer l'API Rest

```bash
git clone https://gitlab.com/meltingpotes/api-publication.git
cd api-publication
npm i
```

# Installer la BDD PostgreSQL

## Installation:
```bash
brew install postgresql
brew services start postgresql
psql postgres
```

### Créé la base de donnée publicationdb et l'utilisateur developper:
```sql
CREATE ROLE developper WITH LOGIN PASSWORD 'developper';
ALTER ROLE developper CREATEDB;
CREATE DATABASE publicationdb;
GRANT ALL PRIVILEGES ON DATABASE publicationdb TO developper;

CREATE DATABASE publicationsequelize;
```

### Connexion à la base publicationdb avec l'utilisateur developper:
```slq
psql -d publicationdb -U developper;
```

### Commande pour lancer et stopper postgre:
```sql
brew services start postgresql
brew services stop postgresql
```



# Développez l'api from scratch

### Installer node & npm:

```bash
brew install node
brew install npm
```

### Installer express & pg-promise:

```bash
npm install --save express
npm install --save sequelize
npm install --save pg pg-hstore
```

### Générer une image docker et la push sur le containeur registry de gitlab:
```docker
docker login registry.gitlab.com -u aloishias
docker build -t registry.gitlab.com/meltingpotes/api-publication .
docker push registry.gitlab.com/meltingpotes/api-publication
```


### Liens:

http://www.postgresqltutorial.com/postgresql-uuid/
https://sequelize.org/v5/manual/getting-started.html

