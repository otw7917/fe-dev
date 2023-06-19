# express

## express.static()

- 정적 파일 제공하기
- `node`가 프로세스하는 위치에서 상대경로 -> `path` 모듈 사용하기.

```js
app.use(express.static("public"));
// -> path.join(__dirname, "public") 이런 형태로 수정 <-

/* 이때 "/src" 형태로 오면
"./src" 디렉토리에 있는 정적파일을 제공해줌 */
app.use("/src", express.static("src"));
```

[express static files 🚀](https://expressjs.com/en/starter/static-files.html)
