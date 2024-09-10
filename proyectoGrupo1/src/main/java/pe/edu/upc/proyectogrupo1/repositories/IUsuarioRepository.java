package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Usuario;

import java.util.List;

import java.util.List;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {
    @Query(value = "SELECT us.id_usuario, COUNT(a.id_alerta) AS quantity\n" +
            " FROM usuario us\n" +
            " LEFT JOIN alerta a ON us.id_usuario = a.id_usuario\n" +
            " GROUP BY us.id_usuario" ,nativeQuery = true)
    public List<String[]>usuarioporalerta();
    @Query(value = "SELECT us.id_usuario, COUNT(a.id_rol) AS quantity\n" +
            " FROM usuario us\n" +
            " LEFT JOIN rol r ON us.id_usuario = a.id_usuario\n" +
            " GROUP BY us.id_usuario",nativeQuery = true)
    public List<String[]>usuarioporrol();


    @Query(value = "SELECT usuario.nombre, usuario.apellidos, COUNT(*) as alertsquantity\n" +
            " FROM alerta INNER JOIN usuario ON alerta.id_usuario = usuario.id_usuario\n" +
            " GROUP BY usuario.nombre, usuario.apellidos\n" +
            " ORDER BY alertsquantity DESC", nativeQuery = true)
    public List<String[]> cantidadalerta();

}
