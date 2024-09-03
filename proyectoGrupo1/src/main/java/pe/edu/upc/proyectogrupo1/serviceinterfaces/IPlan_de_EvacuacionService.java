package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;

import java.util.List;

public interface IPlan_de_EvacuacionService {
    public List<Plan_de_Evacuacion> list();
    public void insert(Plan_de_Evacuacion p);
    public void update(Plan_de_Evacuacion p);
    public void delete(int id);
    public Plan_de_Evacuacion listId(int id);
}
