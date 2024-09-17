FROM openjdk:21-jdk
ARG JAR_FILE=target/proyectoGrupo1-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app_proyectoGrupo1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_proyectoGrupo1.jar"]