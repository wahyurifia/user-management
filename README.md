## 🌐 Fullstack Web App with React & TypeScript

Proyek ini adalah aplikasi fullstack dengan **React.js** untuk frontend dan **TypeScript** serta **Express.js** untuk backend. Backend menggunakan **PostgreSQL** sebagai database, diakses melalui **Prisma ORM**.
.

![Demo](https://usermanagement-chi.vercel.app/) 

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

Struktur folder proyek ini terdiri dari **frontend** dan **backend** dengan pembagian sebagai berikut:

fullstack-app/ ├── frontend/ # Frontend menggunakan React.js │ ├── src/ # Folder utama untuk source code │ │ ├── components/ # Komponen UI yang dapat digunakan kembali │ │ ├── pages/ # Halaman utama aplikasi │ │ ├── services/ # Modul untuk permintaan HTTP menggunakan Axios │ │ ├── App.tsx # Komponen utama React │ │ └── index.tsx # File utama untuk render aplikasi │ ├── public/ # Folder untuk aset publik (favicon, gambar, dll.) │ └── vite.config.ts # Konfigurasi untuk Vite ├── backend/ # Backend menggunakan Express.js dan TypeScript │ ├── src/ # Folder utama untuk source code backend │ │ ├── controllers/ # Logika utama untuk menangani request │ │ ├── prisma/ # Prisma Client dan skema database │ │ ├── routes/ # Definisi rute API │ │ ├── services/ # Fungsi untuk interaksi dengan database │ │ ├── app.ts # Konfigurasi utama aplikasi │ │ └── server.ts # Entry point untuk menjalankan server │ ├── prisma/ # Folder untuk skema Prisma │ │ └── schema.prisma # Definisi skema database │ ├── tsconfig.json # Konfigurasi TypeScript │ └── package.json # Dependensi backend └── README.md # Dokumentasi proyek


