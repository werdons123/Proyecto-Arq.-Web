package pe.edu.upc.proyectogrupo1.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;

public interface IContactoAyudaRepository extends JpaRepository<ContactoAyuda, Integer> {
}
