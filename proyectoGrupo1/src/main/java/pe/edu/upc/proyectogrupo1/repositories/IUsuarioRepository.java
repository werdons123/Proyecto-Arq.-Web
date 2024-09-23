package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.edu.upc.proyectogrupo1.entities.Usuario;
import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.util.List;

import java.util.List;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {
    public Usuario findOneByUsername(String username);
    @Query("select count(u.username) from Usuario u where u.username =:username")
    public int buscarUsername(@Param("username") String nombre);
    @Transactional
    @Modifying
    @Query(value = "insert into roles (rol, user_id) VALUES (:rol, :user_id)", nativeQuery = true)
    public void insRol(@Param("rol") String authority, @Param("user_id") Long user_id);
    @Query(value = "SELECT us.id_usuario, COUNT(a.id_alerta) AS quantity\n" +
            " FROM usuario us\n" +
            " LEFT JOIN alerta a ON us.id_usuario = a.id_usuario\n" +
            " GROUP BY us.id_usuario" ,nativeQuery = true)
    public List<String[]>usuarioporalerta();
    @Query("SELECT u FROM Usuario u INNER JOIN Rol r ON u.id_usuario = r.us.id_usuario")
    public List<Usuario> usuarioporrol();


    @Query(value = "SELECT usuario.nombre, usuario.apellidos, COUNT(*) as alertsquantity\n" +
            " FROM alerta INNER JOIN usuario ON alerta.id_usuario = usuario.id_usuario\n" +
            " GROUP BY usuario.nombre, usuario.apellidos\n" +
            " ORDER BY alertsquantity DESC", nativeQuery = true)
    public List<String[]> cantidadalerta();

}
