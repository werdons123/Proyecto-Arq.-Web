package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;

import java.util.List;

public interface IZonaContactoAyudaService {
    public List<ZonaContactoAyuda> list();
    public void insert(ZonaContactoAyuda zca);
}
