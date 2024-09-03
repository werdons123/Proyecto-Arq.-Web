package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.Consejo;

import java.util.List;

public interface IConsejoService {
    public List<Consejo> list();
    public void insert(Consejo consejo);
    public void update(Consejo consejo);
    public void delete(int id_Consejo);

}
