package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.Simulacro;

import java.util.List;

public interface ISimulacroService {
    public List<Simulacro> list();
    public void insert(Simulacro s);
    public Simulacro listId(int id);
    public void update(Simulacro s);
    public void delete(int id);
}
