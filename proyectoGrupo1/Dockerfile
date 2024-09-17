FROM amazoncorretto:21
WORKDIR /app
COPY proyectoGrupo1/pom.xml .
RUN mvn dependency:resolve
COPY . .
RUN mvn install
COPY proyectoGrupo1/target/proyectoGrupo1-0.0.1-SNAPSHOT.jar app_proyectoGrupo1.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app_proyectoGrupo1.jar"]
