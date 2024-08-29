package pe.edu.upc.proyectogrupo1.serviceimplements;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.repositories.IContactoAyudaRepository;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IContactoAyudaService;

import java.util.List;

@Service
public class ContactoAyudaImplement implements IContactoAyudaService {
    @Autowired
    private IContactoAyudaRepository caR;

    @Override
    public List<ContactoAyuda> list() { return caR.findAll(); }

    @Override
    public void insert(ContactoAyuda ca) {
        caR.save(ca);
    }

    @Override
    public ContactoAyuda listId(int id) {
        return caR.findById(id).orElse(new ContactoAyuda());
    }

    @Override
    public void update(ContactoAyuda ca) {
        caR.save(ca);
    }

    @Override
    public void delete(int id) {
        caR.deleteById(id);
    }
}
