package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.entities.Zona;
import pe.edu.upc.proyectogrupo1.repositories.ISimulacroRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.ISimulacroService;

import java.util.List;

@Service
public class SimulacroServiceImplement implements ISimulacroService {
    @Autowired
    private ISimulacroRepository siR;

    @Override
    public List<Simulacro> list() {
        return siR.findAll();
    }

    @Override
    public void insert(Simulacro s) {
        siR.save(s);


    }

    @Override
    public Simulacro listId(int id) {
        return siR.findById(id).orElse(new Simulacro());
    }

    @Override
    public void update(Simulacro s) {
        siR.save(s);

    }

    @Override
    public void delete(int id) {
        siR.deleteById(id);

    }

    @Override
    public List<Simulacro> buscarPorNombre(String nombre) {
        return siR.buscarPorNombre(nombre);
    }
}
