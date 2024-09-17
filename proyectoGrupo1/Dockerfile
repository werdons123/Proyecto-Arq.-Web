FROM amazoncorretto:21
ARG JAR_FILE=proyectoGrupo1/target/proyectoGrupo1-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app_proyectoGrupo1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_proyectoGrupo1.jar"]
