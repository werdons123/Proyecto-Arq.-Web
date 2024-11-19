package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.dtos.Plan_de_EvacuacionDTO;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;
import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.util.List;

@Repository
public interface IPlan_de_EvacuacionRepository extends JpaRepository<Plan_de_Evacuacion, Integer> {

    @Query("SELECT p FROM Plan_de_Evacuacion p WHERE p.zona.nombre_zona LIKE %:nombre%")
    public List<Plan_de_Evacuacion> buscarPorNombre(@Param("nombre") String nombre);

    // Consulta para listar planes de evacuación por zona
    @Query("SELECT p FROM Plan_de_Evacuacion p WHERE p.zona.id_Zona = :idZona")
    List<Plan_de_Evacuacion> listarPlanesPorZona(@Param("idZona") Integer idZona);

}
