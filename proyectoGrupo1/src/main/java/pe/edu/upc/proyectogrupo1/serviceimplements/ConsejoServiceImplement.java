package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Consejo;
import pe.edu.upc.proyectogrupo1.repositories.IConsejoRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IConsejoService;

import java.util.List;

@Service

public class ConsejoServiceImplement implements IConsejoService {
    @Autowired
    private IConsejoRepository cR;
    @Override
    public List<Consejo> list(){return cR.findAll();}
    @Override
    public void insert(Consejo co){cR.save(co);}
    @Override
    public void update(Consejo co){cR.save(co);}
    @Override
    public void delete(int id_Consejo){cR.deleteById(id_Consejo);}

    @Override
    public List<Consejo> buscarPorTipo(String tipo) {
        return cR.buscarPorTipo(tipo);
    }

}
