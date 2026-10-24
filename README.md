# Сайт «Лікар Кононенко»

Статичний сайт на [Astro](https://astro.build). Розгортається на GitHub Pages автоматично після кожної
зміни в гілці `main` (`.github/workflows/deploy.yml`).

## Що де редагувати

| Що змінити | Файл |
|---|---|
| Ціни та послуги | `src/data/prices.yaml` |
| Телефон, Telegram, Instagram, адреса, графік, ліцензія, текст «Про лікаря» | `src/data/site.yaml` |
| Відгуки | `src/data/reviews.yaml` |
| Часті запитання | `src/data/faq.yaml` |
| Сторінки проблем (акне, розацеа…) | `src/data/problems.yaml` |
| Пам'ятки після процедур | `src/data/aftercare.yaml` |
| Фото «до/після» | `src/data/gallery.yaml` + файли в `public/images/` |
| Фото, логотип | `public/images/` (замініть файл, зберігши назву) |
| Іконка вкладки | `public/favicon.svg` |
| Кольори та шрифти | `src/styles/global.css` (змінні на початку файлу) |

Усе, що позначено `ЗАМІНИТИ`, — заглушки.

### Як змінити ціну прямо на GitHub
1. Відкрийте `src/data/prices.yaml` у репозиторії → іконка олівця (Edit).
2. Змініть рядок `price: ...`. Відступи (пробіли на початку рядків) не чіпайте.
3. **Commit changes**. За 1–2 хвилини сайт оновиться сам (вкладка **Actions** показує прогрес).

## Локальний запуск
Потрібен Node.js 22.22 або новіший.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # збірка в dist/
```

## Сторінки
- `/` — головна
- `/poslugy/` — послуги та ціни
- `/pro-likarya/` — про лікаря, освіта, сертифікати
- `/problemy/` і `/problemy/<назва>/` — проблеми шкіри
- `/vidguky/` — відгуки та «до/після»
- `/pytannia/` — часті запитання
- `/kontakty/` — контакти, мапа, запис
- `/pamiatky/` і `/pamiatky/<назва>/` — пам'ятки після процедур (посилання надсилати пацієнтам)
- `/konfidentsiinist/` — конфіденційність
