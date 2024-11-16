package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.util.List;

@Repository
public interface ISimulacroRepository extends JpaRepository<Simulacro, Integer> {
    @Query("SELECT s FROM Simulacro s WHERE s.zo.nombre_zona LIKE %:nombre%")
    public List<Simulacro> buscarPorNombre(@Param("nombre") String nombre);

}
