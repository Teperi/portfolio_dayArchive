# Ubuntu 설치 이후 과정 기록

2019.03.19: 작성 시작

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

## Node.js 구축