package pe.edu.upc.proyectogrupo1.serviceimplements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Zona;
import pe.edu.upc.proyectogrupo1.repositories.IZonaRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaService;
import java.util.List;

@Service
public class ZonaServiceImplement implements IZonaService{
    @Autowired
    private IZonaRepository vR;
    @Override
    public void insert(Zona zona) {
        vR.save(zona);
    }
    @Override
    public List<Zona> list() {
        return vR.findAll();
    }
    @Override
    public void delete(int id_zona) {
        vR.deleteById(id_zona);
    }

    @Override
    public Zona listId(int id_zona) {
        return vR.findById(id_zona).orElse(new Zona());
    }

    @Override
    public void update(Zona zona) {
        vR.save(zona);
    }
    @Override
    public List<Zona> buscar(String nombre) {
        return vR.buscarPorNombre(nombre);
    }
    @Override
    public int contar(){
        return vR.contar();
    }
}