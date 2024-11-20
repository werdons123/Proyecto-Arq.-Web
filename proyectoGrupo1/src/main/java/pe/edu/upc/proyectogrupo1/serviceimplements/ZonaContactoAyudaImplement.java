package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.entities.ZonaAlerta;
import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;
import pe.edu.upc.proyectogrupo1.repositories.IZonaContactoAyudaRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaContactoAyudaService;

import java.util.List;

@Service
public class ZonaContactoAyudaImplement implements IZonaContactoAyudaService {
    @Autowired
    private IZonaContactoAyudaRepository zcaR;

    @Override
    public List<ZonaContactoAyuda> list() {
        return zcaR.findAll();
    }

    @Override
    public void insert(ZonaContactoAyuda zca) {
        zcaR.save(zca);
    }
    @Override
    public void delete(int id_ZonaContacto){zcaR.deleteById(id_ZonaContacto);}
    @Override
    public void update(ZonaContactoAyuda zonaContactoAyuda){zcaR.save(zonaContactoAyuda);}
    @Override
    public ZonaContactoAyuda listId(int id) {
        return zcaR.findById(id).orElse(new ZonaContactoAyuda());
    }
    @Override
    public List<String[]> findByNombreZona(String nombreZona) {
        return zcaR.findByNombreZona(nombreZona);
    }
}
