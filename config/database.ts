import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'
import path from 'path'
import fs from 'fs'

// Chemin vers le fichier de la base de données
const databasePath = path.resolve(app.tmpPath())

// Vérifiez et créez le répertoire si nécessaire
if (!fs.existsSync(databasePath)) {
  fs.mkdirSync(databasePath, { recursive: true })
}

const dbConfig = defineConfig({
  connection: 'sqlite',
  connections: {
    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: path.join(databasePath, 'db.sqlite3'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  },
})

export default dbConfig
