package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Usuario;
import pe.edu.upc.proyectogrupo1.repositories.IUsuarioRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IUsuarioService;

import java.util.List;

@Service
public class UsuarioServiceImplement implements IUsuarioService {
    @Autowired
    private IUsuarioRepository uR;
    @Override
    public List<Usuario> listarUsuarios() {
        return uR.findAll();
    }

    @Override
    public Usuario listID(int id) {
        return uR.findById(id).orElse(new Usuario() );
    }

    @Override
    public void insert(Usuario u) {
        uR.save(u);
    }
    @Override
    public void delete(int id_usuario) {uR.deleteById(id_usuario);
    }
    @Override
    public void update(Usuario u) {
        uR.save(u);
    }


}
