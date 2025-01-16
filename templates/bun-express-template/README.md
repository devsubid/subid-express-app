# Bun Express Template

## Run the app

```bash
docker compose up -d
```

## Backup and restore

```bash
mongodump --uri "mongodb://root:example@localhost:27017/theasian?authSource=admin" --out ./backup
```

```bash
mongorestore --uri "mongodb://mongo:p7miqwooyzdfqvst@195.110.58.190:27017/theasian?authSource=admin" ./backup/theasian
```
