#!bin/sh
# portfolioのルートディレクトリで
# npm install
# package-lock.json
# に変更があれば、事前にコミットしておく。その後
# development:開発のみ
# sh deploy.sh development
# production:本番のみ
# sh deploy.sh production
# both:本番、開発両方
# sh deploy.sh both
# 上記コマンドのいずれかを実行する
#
# masterブランチ名が異なる人は変えてください(いないと思うが)
MASTER_BRANCH='master'
# TODO: 自分の開発用サービス名に変更する
DEVELOPMENT_SERVER="deployportfolio"
# TODO: 自分の本番公開用サービス名に変更する
PRODUCTION_SERVER="portfolio-1b6d7"

# $1:execute status
# $2:error message
function check_execute() {
  if [ $1 -gt 0 ]; then
    echo $2
    exit $1
  fi
}

if [ $1 = "development" ] || [ $1 = "both" ]; then
  # 開発環境用デプロイ(currentブランチ)
  # switch to development server
  firebase use ${DEVELOPMENT_SERVER}
  # build with development mode
  npm run build:development
  # build check
  check_execute $? "build error for development"
  # deploy to development server
  firebase deploy
fi

if [ $1 = "production" ] || [ $1 = "both" ]; then
  # 本番用デプロイ(masterブランチ)
  # switch to production server
  git checkout .firebase/hosting.ZGlzdA.cache
  # TODO: masterにこの修正がマージされたら外して、masterのデプロイもこのシェルでできるようになります
  # git checkout ${MASTER_BRANCH}
  # checkout check
  check_execute $? "checkout to master error"
  git pull
  # switch to production server
  firebase use ${PRODUCTION_SERVER}
  # build with production mode
  npm run build:production
  # build check
  check_execute $? "build error for development"
  # deploy to production server
  firebase deploy
  # cache一応戻しておく
  git checkout .firebase/hosting.ZGlzdA.cache
fi
