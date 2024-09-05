package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;
@Repository
public interface IPlan_de_EvacuacionRepository extends JpaRepository<Plan_de_Evacuacion, Integer> {

}
