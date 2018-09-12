# 1: Start off with node 6:
# NOTE: firebase-tools serve won't run unless using node v6.11:
FROM node:6.11-alpine

# 2: We'll set the application path as the working directory
WORKDIR /usr/src/app

# 3: We'll add the app's binaries path to $PATH:
ENV HOME=/usr/src/app PATH=/usr/src/app/bin:$PATH

# 4: Install build tools:
RUN set -ex && \
  apk add --no-cache build-base python jq libc6-compat curl

# 5: We'll install check-dependencies and firebase-tools in a separate command (layer), so the
# Multi-stage build uses a lighter image from cache:
RUN set -ex && \
  npm install --global check-dependencies webpack webpack-cli

# As with all node projects, we won't install npm dependencies (even with yarn) here.
# We will, however, add a `check || install` routine on the development entrypoint script.