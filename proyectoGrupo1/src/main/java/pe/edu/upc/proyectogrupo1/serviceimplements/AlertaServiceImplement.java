package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Alerta;
import pe.edu.upc.proyectogrupo1.repositories.IAlertaRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IAlertaService;

import java.util.List;
@Service
public class AlertaServiceImplement implements IAlertaService {
    @Autowired
    private IAlertaRepository aR;

    @Override
    public List<Alerta> list(){return aR.findAll();}
    @Override
    public void insert (Alerta alerta){aR.save(alerta);}
    @Override
    public void delete(int id_alerta){aR.deleteById(id_alerta);}
    @Override
    public void update(Alerta alerta){aR.save(alerta);}

}
