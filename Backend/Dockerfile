# ===== BUILD STAGE =====
FROM eclipse-temurin:17-jdk AS build
WORKDIR /app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN chmod +x mvnw

# 🔥 FIX LỖI RENDER
ENV MAVEN_CONFIG=""

RUN ./mvnw -B dependency:go-offline

COPY src src
RUN ./mvnw clean package -DskipTests

# ===== RUN STAGE =====
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
