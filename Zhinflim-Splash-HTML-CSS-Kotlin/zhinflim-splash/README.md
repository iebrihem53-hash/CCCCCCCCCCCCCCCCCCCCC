# Zhinflim Splash Screen

ئەم پڕۆژەیە Splash Screen ـەکە بە **HTML + CSS + JavaScript** دروست دەکات و بە **Kotlin WebView** لە Android پیشانی دەدات.

## تایبەتمەندییەکان

- وێنەی Zhinflim بە تەواوی پارێزراوە.
- خەتە کۆنەکەی ناو وێنەکە بە ماسکی ڕەش داپۆشراوە.
- خەتە مۆرە درەوشاوەکە لە 0% بۆ 100% لە ماوەی 5 چرکەدا دەڕوات.
- دوای 5 چرکە شاشەکە بە نەرمی ڕەش دەبێت و دەقە کوردییەکە پیشان دەدرێت.
- هیچ گواستنەوەیەک بۆ Login یان Home نییە؛ شاشەی کۆتایی هەر دەمێنێتەوە.
- Fullscreen ـە و بۆ قەبارە جیاوازەکانی مۆبایل گونجاو کراوە.

## بەکارهێنان لە Android Studio

1. فۆڵدەری `zhinflim-splash` لە Android Studio بکەرەوە.
2. چاوەڕێی Gradle Sync بکە.
3. مۆبایل یان Emulator هەڵبژێرە و `Run` بکە.

## پێشبینینی HTML

فایلی خوارەوە لە وێبگەڕدا بکەرەوە:

`app/src/main/assets/index.html`

## گۆڕینی کات

لە `app/src/main/assets/app.js` ئەم بەهایە بگۆڕە:

```js
const SPLASH_DURATION_MS = 5000;
```

`5000` واتە 5 چرکە.

## پێشبینینەکان

- `preview/01-loading.png` — دۆخی پڕبوونەوەی خەتە مۆرەکە.
- `preview/02-final-screen.png` — شاشەی ڕەشی کۆتایی کە هەر دەمێنێتەوە.
