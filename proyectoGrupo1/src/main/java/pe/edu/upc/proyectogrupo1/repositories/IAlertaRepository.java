package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Alerta;

import java.util.List;

@Repository

public interface IAlertaRepository extends JpaRepository<Alerta,Integer> {

    @Query(value= "select \ttipo_desastre as tipoDesastre,\n" +
            " count(*) as cantidad\n" +
            " from alerta\n" +
            " group by tipo_desastre\n" +
            " order by cantidad desc;", nativeQuery = true)
    public List<String []> cantidad();
}
