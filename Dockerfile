# Gunakan base image Node.js versi 20
FROM node:20

# Buat folder kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project ke dalam container
COPY . .

# Ekspos port (sesuai dengan port app kamu)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]
