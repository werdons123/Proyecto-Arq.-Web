package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.Usuario;

import java.util.List;

public interface IUsuarioService {
    public List<Usuario> listarUsuarios();
    public Usuario listID(int id);
    public void insert(Usuario u);
    public void delete(int id_usuario);
    public void update(Usuario u);
    public List<String[]> cantidadalertaservice();


}
