package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;

import java.util.List;

public interface IContactoAyudaService {
    public List<ContactoAyuda> list();
    public void insert(ContactoAyuda ca);
    public ContactoAyuda listId(int id);
    public void update(ContactoAyuda ca);
    public void delete(int id);
}
