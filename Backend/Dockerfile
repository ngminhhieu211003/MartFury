# ===== BUILD STAGE =====
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy source code
COPY . .

# Build jar (bỏ test cho nhanh và tránh lỗi test)
RUN ./mvnw clean package -DskipTests

# ===== RUN STAGE =====
FROM eclipse-temurin:17-jdk

WORKDIR /app

# Copy jar từ build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port Spring Boot
EXPOSE 8080

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]
