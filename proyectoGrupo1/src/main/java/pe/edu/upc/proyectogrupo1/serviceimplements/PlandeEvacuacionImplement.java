package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;
import pe.edu.upc.proyectogrupo1.repositories.IPlan_de_EvacuacionRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IPlan_de_EvacuacionService;

import java.util.List;

@Service
public class PlandeEvacuacionImplement implements IPlan_de_EvacuacionService {
    @Autowired
    private IPlan_de_EvacuacionRepository pR;

    @Override
    public List<Plan_de_Evacuacion> list() {
        return pR.findAll();
    }

    @Override
    public void insert(Plan_de_Evacuacion p) {
        pR.save(p);
    }

    @Override
    public void update(Plan_de_Evacuacion p) {
        pR.save(p);
    }

    @Override
    public void delete(int id) {
        pR.deleteById(id);
    }

    @Override
    public Plan_de_Evacuacion listId(int id) {
        return pR.findById(id).orElse(new Plan_de_Evacuacion());
    }

    @Override
    public List<Plan_de_Evacuacion> buscarPorNombre(String nombre) {
        return pR.buscarPorNombre(nombre);
    }

    @Override
    public List<Plan_de_Evacuacion> listarPorZona(Integer idZona) {
        return pR.listarPlanesPorZona(idZona);    }

}
