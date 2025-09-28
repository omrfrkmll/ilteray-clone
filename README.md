# Ömer Faruk MALI Kişisel Web Sitesi

Bu proje, Ömer Faruk MALI'nın Webflow sitesinin TypeScript ve React kullanılarak klonlanmış halidir. Site, kullanıcının CV bilgileriyle senkronize edilmiş ve açık/koyu mod desteği eklenmiştir. GitHub Pages üzerinden kolayca yayınlanabilir.

## Proje Yapısı

- **React**: Kullanıcı arayüzü için JavaScript kütüphanesi.
- **TypeScript**: Daha güvenli ve ölçeklenebilir kod yazmak için.
- **Tailwind CSS**: Hızlı ve modern UI geliştirme için.
- **Vite**: Hızlı geliştirme deneyimi için build aracı.
- **Shadcn/ui**: Erişilebilir ve özelleştirilebilir UI bileşenleri.

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  Depoyu klonlayın:
    ```bash
    git clone https://github.com/KULLANICI_ADINIZ/ilteray-clone.git
    cd ilteray-clone
    ```
2.  Bağımlılıkları yükleyin:
    ```bash
    pnpm install
    ```
3.  Geliştirme sunucusunu başlatın:
    ```bash
    pnpm run dev
    ```
    Tarayıcınızda `http://localhost:5173` adresini ziyaret edin.

## GitHub Pages ile Yayınlama

Bu proje, GitHub Pages'e otomatik dağıtım için GitHub Actions kullanacak şekilde yapılandırılmıştır. Aşağıdaki adımları izleyerek sitenizi yayınlayabilirsiniz:

1.  **Depoyu GitHub'a Yükleyin**: Bu projenin kodunu kendi GitHub hesabınıza yükleyin. Depo adının `ilteray-clone` olduğundan emin olun.

2.  **GitHub Actions'ı Etkinleştirin**: GitHub deponuzda `Actions` sekmesine gidin. Eğer bir uyarı veya öneri görürseniz, GitHub Actions'ın çalışmasına izin verin.

3.  **Varsayılan Dalı Ayarlayın**: Projenizin ana dalının `main` olduğundan emin olun. Eğer farklı bir dal kullanıyorsanız (`master` gibi), `.github/workflows/deploy.yml` dosyasındaki `on: push: branches: [ main ]` ve `if: github.ref == 'refs/heads/main'` kısımlarını kendi dal adınızla güncelleyin.

4.  **İlk Push**: Kodunuzu `main` dalına push ettiğinizde, GitHub Actions otomatik olarak tetiklenecek ve sitenizi build edip `gh-pages` dalına dağıtacaktır.
    ```bash
    git add .
    git commit -m "Initial commit for GitHub Pages deployment"
    git push origin main
    ```

5.  **GitHub Pages Ayarları**: Deponuzun ayarlarına gidin (`Settings` -> `Pages`). `Source` kısmında `Deploy from a branch` seçeneğini seçin ve `gh-pages` dalını seçerek `/(root)` klasörünü ayarlayın. `Save` butonuna tıklayın.

6.  **Sitenizi Ziyaret Edin**: Birkaç dakika sonra siteniz `https://KULLANICI_ADINIZ.github.io/ilteray-clone/` adresinde yayınlanacaktır. (KULLANICI_ADINIZ yerine kendi GitHub kullanıcı adınızı yazın.)

## Açık/Koyu Mod Desteği

Web sitesi, sayfanın sağ üst köşesindeki düğmeye tıklayarak açık ve koyu mod arasında geçiş yapma özelliğine sahiptir. Renkler, orijinal Webflow sitesinin estetiğini koruyacak şekilde ayarlanmıştır.

## İletişim

Herhangi bir sorunuz veya geri bildiriminiz olursa, lütfen iletişime geçmekten çekinmeyin.

- **Email**: omrfrkmll@gmail.com
- **GitHub**: [https://github.com/KULLANICI_ADINIZ](https://github.com/KULLANICI_ADINIZ)
- **LinkedIn**: [https://linkedin.com/in/omerfarukmali](https://linkedin.com/in/omerfarukmali)

