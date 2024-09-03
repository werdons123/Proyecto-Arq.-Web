package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.proyectogrupo1.entities.Rol;

public interface IRolRepository extends JpaRepository<Rol, Integer> {
}
