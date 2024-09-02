package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.util.List;

@Repository
public interface IZonaRepository extends JpaRepository<Zona,Integer> {
    @Query("SELECT d FROM Zona d WHERE d.nombre_zona LIKE %:nombre%")
    public List<Zona> buscarPorNombre(@Param("nombre") String nombre);
    @Query("SELECT count (*)FROM Zona")
    public int contar();

}
