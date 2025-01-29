# Nginx stage
FROM nginx:1.23-alpine

# Set environment variables
ARG REACT_APP_SERVER_BASE_URL
ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy built assets from build stage
COPY --from=build /app/dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]