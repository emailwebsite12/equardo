// Tambahkan event listener ke semua elemen dengan class "nama"
document.querySelectorAll('.nama').forEach(nama => {
  nama.addEventListener('click', () => {
    const parentSection = nama.closest('.anggota');
    parentSection.classList.toggle('active');
  });
});
        // Mengganti background sesuai dengan profile yang dipilih
        function changeBackground(profile) {
            const body = document.getElementById('background');
            body.className = profile + '-bg';

            
            
            // Dapatkan path ke gambar berdasarkan profile
            let imagePath;
            switch(profile) {
                case 'profile1':
                    imagePath = 'img/profile1-background.jpg'; // Akan diganti dengan path aktual
                    // Untuk demo, kita menggunakan URL placeholder
                    imagePath = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/96407331-d065-4f18-ae5f-2267e54440b5.png';
                    break;
                case 'profile2':
                    imagePath = 'img/profile2-background.jpg';
                    imagePath = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06efa87e-a2aa-4ef1-8fb5-bfc856adff5c.png';
                    break;
                case 'profile3':
                    imagePath = 'img/profile3-background.jpg';
                    imagePath = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b68ac203-18bc-4001-bf1c-e337d90be472.png';
                    break;
                default:
                    imagePath = 'img/default-background.jpg';
            }
            
            
            // Set background image
            body.style.backgroundImage = `url('${imagePath}')`;
            
            // Highlight button aktif
            document.querySelectorAll('button').forEach(btn => {
                btn.style.opacity = '0.7';
            });
            document.getElementById(profile).style.opacity = '1';
        }
        // Inisialisasi background default
        document.addEventListener('DOMContentLoaded', function() {
            changeBackground('profile1');
        });

let buttonMusic = document.getElementById('music1')

buttonMusic.addEventListener('click', () => {
  alert("Ubah")
})

