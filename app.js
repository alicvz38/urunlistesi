const urunEkle = document.querySelector('.ekle');
const tumSil = document.querySelector('.tumSil');
const urunSil = document.querySelector('.liste');
let veri = 0;
tumSil.style.display = 'none';
const urun = urunEkle.addEventListener('click', function () {
    let urun;
    urun = document.querySelector('.urunAdi').value;
    let urunler = document.querySelectorAll('li');
    if (urun == "") {
        alert('Lütfen ürün giriniz...');
    } else {
        let liste = document.querySelector('.liste');
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.className = 'bunuSil';
        a.href = '';
        a.append('X');
        li.append(urun);
        li.appendChild(a);
        liste.appendChild(li);
        veri = urunler.length + 1;
        if (tumSil.style.display == 'none') {
            tumSil.style.display = 'flex';
        }
    }
});
tumSil.addEventListener('click', function () {
    let urunler;
    urunler = document.querySelectorAll('li');
    if (veri == 0) {
        tumSil.style.display = 'none';
    } else {
        for (let i = urunler.length - 1; i >= 0; i--) {
            urunler[i].remove();
            tumSil.style.display = 'none';
        }
        veri = urunler.length;
    }
});
urunSil.addEventListener('click', function (e) {
    let urunler;
    urunler = document.querySelectorAll('li');
    if (e.target.className === 'bunuSil') {
        e.target.parentElement.remove();
        veri = urunler.length - 1;
            if (veri == 0) {
                tumSil.style.display = 'none';
            }
        e.preventDefault();
    }
});
