# FORMAPI UB

### Apa itu Formapi?

Formapi kepanjangan dari Forum Mahasiswa Peduli Inklusi Universitas Brawijaya adalah salah satu kegiatan untuk mewadahkan melibatkan para disabilitas maupun non disabilitas agar bekerja sama organisasi dalam kampus.

 ---

### Pengembangan perangkat lunak untuk formapi ub?

Membuat sebuah pengembangan sistem organisasi untuk formapi ub karena website bisa dilihat oleh para mahasiswa apalagi luar mahasiswa agar menarik itu website.

### Page home 

Ini adalah page terutama telah dibuka  websitenya dan bisa membaca di paling atas terus silakan klik untuk bagian kemana.

--- 

### Semisal saya belum non mahasiswa, Apa boleh masuk akun?

Ya tentukan, silakan masuk akun tapi anda memilih opsi non mahasiswa. 

--- 


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1320px',
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    fontFamily: {
      'ub': 'Kaisei HarunoUmi, serif',
      'cover':'Kaushan Script, cursive'
    },
    fontSize: {
      'logo' : '14px',
      'ub' : '20px',
      'cover' : '64px'
    },
    colors: {
      'primary' :'#4050A6',
      'white' : '#ffffff'
    }
  },
  plugins: [],
}

