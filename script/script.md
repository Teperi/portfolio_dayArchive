# Ubuntu 설치 이후 과정 기록

2019.03.19: 작성 시작
2019.03.20: DynamoDB 작성 추가

## 기본 작업

```bash
sudo apt-get update
sudo apt-get upgrade
```

## DOCKER 설치

```bash
# docker 공식 사이트 설치 방법 참고
# https://docs.docker.com/install/linux/docker-ce/ubuntu/
# Install Docker CE -> Install using the repository 따라서 작업
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# OK

sudo apt-key fingerprint 0EBFCD88
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
sudo docker run hello-world
```

## git 설치

```bash
# 만약 설치되어있다면 굳이 할 필요 없음
sudo apt-get install git-all

# git 설정
git config --global user.name "Teperi"
git config --global user.email teperi31@gmail.com
git config --global core.autocrlf input
```

## Node.js 구축

1. 개발자 컴퓨터
   - 기존에 개발자 컴퓨터에 node 가 설치되어 있음을 가정함
   - 개발자 컴퓨터의 터미널에서 실행

    ```bash
    npm init
    npm install express
    ```

    - 이후 Dockerfile 을 만들어서 Docker 환경 설정

    ```docker
    # 출처: http://labs.brandi.co.kr/2018/05/25/kangww.html
    # https://programmingsummaries.tistory.com/392
    # 버전 신경을 쓰지 않기 위해 lts 버전을 사용하기로 결정함
    FROM node:lts
    MAINTAINER Teperi Lee teperi31@gmail.com

    #app 폴더 만들기 - NodeJS 어플리케이션 폴더
    RUN mkdir -p /app
    #winston 등을 사용할떄엔 log 폴더도 생성

    #어플리케이션 폴더를 Workdir로 지정 - 서버가동용
    WORKDIR /app

    #서버 파일 복사 ADD [어플리케이션파일 위치] [컨테이너내부의 어플리케이션 파일위치]
    ADD ./ /app

    #패키지파일들 받기
    RUN npm install

    #배포버젼으로 설정 - 이 설정으로 환경을 나눌 수 있습니다.
    ENV NODE_ENV=production

    #서버실행
    CMD node app.js
    ```

2. 서버
   - 서버에서 git 으로 파일을 받은 후 Docker 파일 실행
   - 출처: [브랜디 랩: Docker, NodeJS, Nginx! 너로 정했다!](http://labs.brandi.co.kr/2018/05/25/kangww.html)
   - 주의사항: 80포트가 닫혀있는 에러가 발생했었는데, 알고보니 아파치가 실행중이었음. 아파치를 stop 종료시키고 다시 docker 실행시켜주면 됨

## DynamoDB 연결

1. 개발자 컴퓨터에 DynamoDB 사용을 위해 연결
   - 출처: [AWS 자습서: Node.js와 DynamoDB](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html) 기준 따라해보기
   - 설치작업 진행
     - [컴퓨터에서 DynamoDB(다운로드 가능 버전)](https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html)
     - [Microsoft Windows에 AWS Command Line Interface 설치](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/install-windows.html)
     - [IAM 계정 생성](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/getting-started_create-admin-group.html)
     - [AWS CLI 구성](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-chap-configure.html)
   - 오프라인 작업 예제 진행