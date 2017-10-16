## To Run

Start Server
npm start or node app.js

## API
http://localhost:3000/v1/hello
http://localhost:3000/v1/helloGet
http://localhost:3000/v1/hello/Tom

http://localhost:3000/v1/contacts
http://localhost:3000/v1/contacts/+359777123456

http://localhost:3000/v1/groups
http://localhost:3000/v1/groups/Dev

## To Test

npm Test

To See Coverage browse To

coverage/lcov-report/index.html

## To add to Git

Create repo from an existing folder

Add .gitignore to root folder
Add README to root folderinit
got to folder
Type git init.
Type git add to add the files to staging
Type git commit -m "initial commit" to commit the files

Connect to github - create New Repository 
https://github.com/tom-halpin/node-RESTFul-API-POC 

Push an existing repository from the command line

git remote add origin https://github.com/tom-halpin/node-RESTFul-API-POC.git
git push -u origin master

need to authenticate user:tom.halpin@dxc.com pwd next team

to verify

change a file
add it to staging : git add .
ensure it is added: git status
commit: git commit -m "comment"
add to repo: git push origin master

## Docker Container

create .Dockerfile init containter with node image and expose port
create docker-compose.yml

build containter : docker build -t restfulapi_v1 -f./.Dockerfile .
verify image created : docker images 
run image : docker run -it -p 1337:3000 restfulapi_v1
call API: http://192.168.99.101:1337/v1/hello 

publish container to docker hub

docker login
tag the image: docker tag restful-api-poc tomhalpin/restful-api-poc:v1
push image to docker hub: docker push tomhalpin/restful-api-poc:v1
view repo on docker hub: https://hub.docker.com/u/tomhalpin/

## Jenkins

run jenkins from a container mapped to local folder

docker run --name myjenkins -p 8080:8080 -p 50000:50000 -v //c/Users/halpint/Downloads/jenkins/:/var/jenkins_home jenkins

open jenkins

http://192.168.99.101:8080

admin and password

go to update center : http://192.168.99.101:8080/updateCenter/

download and install nodejs Jenkins plugin https://plugins.jenkins.io/nodejs

force jenkins restart : http://192.168.99.101:8080/restart