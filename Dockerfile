FROM ezdelivery/docker-android-react-native
RUN mkdir /TestTabs_v2
WORKDIR /TestTabs_v2
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils
RUN apt-get update && apt-get upgrade -y && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get -y install yarn
RUN npm i create-react-native-app -g
ADD . /TestTabs_v2
