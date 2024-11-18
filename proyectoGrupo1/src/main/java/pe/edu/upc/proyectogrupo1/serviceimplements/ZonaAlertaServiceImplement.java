package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.ZonaAlerta;
import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;
import pe.edu.upc.proyectogrupo1.repositories.IZonaAlertaRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaAlertaService;

import java.util.List;
@Service
public class ZonaAlertaServiceImplement implements IZonaAlertaService {
    @Autowired
    private IZonaAlertaRepository aR;
    @Override
    public List<ZonaAlerta> list(){return aR.findAll();}
    @Override
    public void insert(ZonaAlerta zonaAlerta){aR.save(zonaAlerta);}
    @Override
    public void delete(int id_ZonaAlerta){aR.deleteById(id_ZonaAlerta);}
    @Override
    public void update(ZonaAlerta zonaAlerta){aR.save(zonaAlerta);}
    @Override
    public ZonaAlerta listId(int id) {
        return aR.findById(id).orElse(new ZonaAlerta());
    }
}
