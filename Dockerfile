# 拉取node镜像，build stage
FROM node:16.20.0 as build-stage

# 谁维护这个项目
LABEL maintainer=2852736760@qq.com

# 在Docker镜像内部创建一个工作目录
WORKDIR /app

# 拷贝所有源代码，在dockerignore文件中忽略node_modules
COPY . .

RUN npm install cnpm -g --no-progress --registry=https://registry.npmmirror.com

RUN cnpm install --no-progress

RUN npm run build

# 拉取nginx镜像，production stage
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]