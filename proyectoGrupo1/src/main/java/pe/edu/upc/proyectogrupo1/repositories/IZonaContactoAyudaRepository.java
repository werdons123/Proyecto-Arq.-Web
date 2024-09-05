package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;

import java.util.List;

public interface IZonaContactoAyudaRepository extends JpaRepository<ZonaContactoAyuda, Integer> {
    @Query(value = "SELECT \tz.nombre_zona as Nombre_Zona,\n" +
            " \t\tca.nombre_institucion as Nombre_Institucion,\n" +
            " \t\tca.descripcion as Descripcion_Institucion ,\n" +
            " \t\tca.telefono as Telefono_Institucion\n" +
            " FROM zona_contacto_ayuda zca \n" +
            " INNER JOIN zona z ON z.id_zona = zca.id_zona \n" +
            " INNER JOIN contacto_ayuda ca ON ca.id_contacto_ayuda = zca.id_contacto_ayuda \n" +
            " WHERE z.nombre_zona LIKE %:nombreZona%", nativeQuery = true)
    public List<String []> findByNombreZona(@Param("nombreZona") String nombreZona);
}
