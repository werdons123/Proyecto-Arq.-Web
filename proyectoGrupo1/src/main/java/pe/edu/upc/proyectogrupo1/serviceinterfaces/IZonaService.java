package pe.edu.upc.proyectogrupo1.serviceinterfaces;
import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.util.List;

public interface IZonaService {
    public void insert(Zona zona);
    public List<Zona> list();
    public void delete(int id_zona);
    public Zona listId(int id_zona);
    public void update(Zona zona);
    public List<Zona> buscar(String zona);
    public int contar();
    public List<String[]> cantidadAlertaservice();



}
