package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Consejo;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;

import java.util.List;

@Repository

public interface IConsejoRepository extends JpaRepository<Consejo,Integer> {
    @Query("SELECT c FROM Consejo c WHERE c.al.tipo_desastre LIKE %:tipo%")
    public List<Consejo> buscarPorTipo(@Param("tipo") String tipo);
}
