You can use the included dockerfile as such:
```
  docker build -t 'solumwebtest'
  docker  run -p 5173:5173 'solumwebtest'
```
Or simply install and run with npm (project was built with node version 25.0.0)
```
  npm i
  npm run dev
```
Then open [localhost:5173](localhost:5173) in a webbrowser.<br>
Please note that the dev script will host the frontend on 0.0.0.0:5173.<br> 
The only valid credential for logging in is test@example.com, Password1!.