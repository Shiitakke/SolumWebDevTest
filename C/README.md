You can use the included dockerfile as such:
```
  docker build -t 'solumwebtest'
  docker  run -p 5173:5173 'solumwebtest'
```
Or simply build and run with npm
```
  npm i
  npm run dev
```
Then open localhost:5173 in the browser
Note that the dockerfile will host on 0.0.0.0:5173.
The only valid credential is test@example.com, Password1!, stored in localstorage