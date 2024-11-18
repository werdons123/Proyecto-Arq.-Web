package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;

import java.util.List;

public interface IZonaContactoAyudaService {
    public List<ZonaContactoAyuda> list();
    public void insert(ZonaContactoAyuda zca);
    public List<String[]> findByNombreZona(String nombreZona);
    public ZonaContactoAyuda listId(int id);
    public void update(ZonaContactoAyuda c);
    public void delete(int id);
}
