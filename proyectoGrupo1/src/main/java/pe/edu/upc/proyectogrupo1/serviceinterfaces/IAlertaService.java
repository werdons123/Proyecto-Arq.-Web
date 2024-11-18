package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.Alerta;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;

import java.util.List;

public interface IAlertaService {
    public List<Alerta> list();
    public void insert(Alerta a);
    public void delete(int id_alerta);
    public void update(Alerta alerta);
    public List<String []> cantidad ();
    public Alerta listId(int id);

}
