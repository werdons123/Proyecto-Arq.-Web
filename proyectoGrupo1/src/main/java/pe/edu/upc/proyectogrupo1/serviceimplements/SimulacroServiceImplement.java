package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.repositories.ISimulacroRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.ISimulacroService;

import java.util.List;

@Service
public class SimulacroServiceImplement implements ISimulacroService {
    @Autowired
    private ISimulacroRepository siR;

    @Override
    public List<Simulacro> list() {
        return List.of();
    }

    @Override
    public void insert(Simulacro s) {

    }

    @Override
    public Simulacro listId(int id) {
        return null;
    }

    @Override
    public void update(Simulacro s) {

    }

    @Override
    public void delete(int id) {

    }
}
