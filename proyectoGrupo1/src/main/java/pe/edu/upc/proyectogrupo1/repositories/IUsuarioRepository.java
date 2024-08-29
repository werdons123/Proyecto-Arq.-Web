package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.proyectogrupo1.entities.Usuario;

public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {

}
