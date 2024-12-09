## 🌐 Fullstack Web App with React & TypeScript

Proyek ini adalah aplikasi fullstack dengan **React.js** untuk frontend dan **TypeScript** serta **Express.js** untuk backend. Backend menggunakan **PostgreSQL** sebagai database, diakses melalui **Prisma ORM**.
.

[![Demo](https://github.com/wahyurifia/user-management/blob/main/client/src/components/demo.png?raw=true)](https://usermanagement-chi.vercel.app/)

Link Preview : https://usermanagement-chi.vercel.app/
## ✨ Fitur Utama
- ✅ Fitur 1: Fitur Get all user
- ✅ Fitur 2: Fitur untuk menambah dan mengedit
- ✅ Fitur 3: Fitur untuk menghapus user dengan bantuan id yang dikirim

## 📦 Teknologi yang Digunakan
### Frontend
- [React.js](https://reactjs.org/) - Library untuk membangun antarmuka pengguna
- [Axios](https://axios-http.com/) - Untuk permintaan HTTP

### Backend
- [Node.js](https://nodejs.org/) - Lingkungan runtime untuk JavaScript
- [Express.js](https://expressjs.com/) - Framework backend minimalis
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript yang diketik secara statis
- [Prisma](https://www.prisma.io/) - ORM modern untuk PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) - Database relasional
- [Postman](https://www.postman.com/) - Untuk pengujian API

---

## 🚀 Instalasi & Menjalankan Aplikasi
### Prasyarat
Pastikan Anda telah menginstal:
- **Node.js** (versi terbaru)
- **PostgreSQL**
- **npm** atau **yarn**

### Langkah-langkah
#### 1. Clone Repository
```bash
git clone https://github.com/wahyurifia/user-management.git
cd user-management
```
#### 2. Instalasi Frontend
```bash
cd client
npm install
npm start
```
Aplikasi frontend akan berjalan di http://localhost:8000.

#### 3. Instalasi Backend
```bash
cd ../server
npm install
npm run dev
```
Aplikasi Backend berjalan di http://localhost:2150.

## 📚 Struktur Folder

Struktur folder proyek ini terdiri dari **client** dan **server** dengan pembagian sebagai berikut:

<p class="has-line-data" data-line-start="0" data-line-end="19">📦client<br>
┣ 📂public<br>
┃ ┗ 📜index.html<br>
┣ 📂src<br>
┃ ┣ 📂components<br>
┃ ┃ ┣ 📂modal<br>
┃ ┃ ┃ ┗ 📜index.tsx<br>
┃ ┃ ┣ 📜AddUser.tsx<br>
┃ ┃ ┣ 📜EditUser.tsx<br>
┃ ┃ ┗ 📜UserList.tsx<br>
┃ ┣ 📜App.tsx<br>
┃ ┗ 📜index.tsx<br>
┣ 📜.gitignore<br>
┣ 📜package-lock.json<br>
┣ 📜package.json<br>
┣ 📜postcss.config.js<br>
┣ <a href="http://xn--README-o754e.md">📜README.md</a><br>
┣ 📜tailwind.config.js<br>
┗ 📜tsconfig.json</p>

<p class="has-line-data" data-line-start="0" data-line-end="18">📦server<br>
┣ 📂prisma<br>
┃ ┣ 📂migrations<br>
┃ ┃ ┣ 📂20241014133657_setup_supabase<br>
┃ ┃ ┃ ┗ 📜migration.sql<br>
┃ ┃ ┗ 📜migration_lock.toml<br>
┃ ┗ 📜schema.prisma<br>
┣ 📂src<br>
┃ ┣ 📂user<br>
┃ ┃ ┣ 📜user.controller.ts<br>
┃ ┃ ┣ 📜user.repository.ts<br>
┃ ┃ ┗ 📜user.services.ts<br>
┃ ┗ 📜index.ts<br>
┣ 📜.gitignore<br>
┣ 📜package-lock.json<br>
┣ 📜package.json<br>
┣ 📜tsconfig.json<br>
┗ 📜vercel.json</p>

