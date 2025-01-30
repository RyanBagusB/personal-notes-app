const navigation = {
  id: {
    homepage: 'Beranda',
    archive: 'Arsip',
    logout: 'Keluar',
  },
  en: {
    homepage: 'Homepage',
    archive: 'Archive',
    logout: 'Log Out',
  },
};

const authForm = {
  id: {
    header: 'Masuk',
    name: 'Name',
    namePlaceholder: 'Masukkan Nama',
    email: 'Email',
    emailPlaceholder: 'Masukkan Email',
    password: 'Password',
    passwordPlaceholder: 'Masukkan Password',
    passwordConfirmation: 'Konfirmasi Password',
    passwordConfirmationPlaceholder: 'Masukkan Konfirmasi Password',
    loginSubmit: 'Masuk',
    registerSubmit: 'Registrasi',
    dontHaveAccount: 'Belum memiliki akun?',
    registerLink: 'Daftar',
    haveAccount: 'Sudah memiliki akun?',
    loginLink: 'Masuk',
  },
    en: {
    header: 'Login',
    name: 'Name',
    namePlaceholder: 'Enter Name',
    email: 'Email',
    emailPlaceholder: 'Enter Email',
    password: 'Password',
    passwordPlaceholder: 'Enter Password',
    passwordConfirmation: 'Confirm Password',
    passwordConfirmationPlaceholder: 'Enter Password Confirmation',
    loginSubmit: 'Login',
    registerSubmit: 'Register',
    dontHaveAccount: 'Dont have an account?',
    registerLink: 'Register',
    haveAccount: 'already have an account?',
    loginLink: 'Login',
  },
}

const notFound = {
  id: {
    note: 'Tidak ada catatan',
    detailNote: 'Catatan tidak ditemukan',
    page: 'Halaman tidak ditemukan',
  },
  en: {
    note: 'No notes found',
    detailNote: 'Note not found',
    page: 'Page not found',
  },
}

const addNoteLocale = {
  id: {
    heading: 'Menambahkan Catatan',
    remainingCharacters: 'Sisa Karakter:',
    titlePlaceholder: 'Tulis judul catatan (Maksimal 50 karakter)',
    bodyPlaceholder: 'Tulis isi catatan...',
    saveButton: 'Simpan',
  },
  en: {
    heading: 'Add Note',
    remainingCharacters: 'Remaining Characters:',
    titlePlaceholder: 'Write note title (Max 50 characters)',
    bodyPlaceholder: 'Write note content...',
    saveButton: 'Save',
  },
};

const homeLocale = {
  id: {
    heading: 'Daftar Catatan',
    searchPlaceholder: 'Cari Catatan...',
  },
  en: {
    heading: 'Note List',
    searchPlaceholder: 'Search Note...',
  },
};

export { navigation, authForm, notFound, addNoteLocale, homeLocale };