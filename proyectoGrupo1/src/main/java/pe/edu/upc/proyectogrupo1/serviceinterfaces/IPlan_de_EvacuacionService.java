package pe.edu.upc.proyectogrupo1.serviceinterfaces;

import org.springframework.data.repository.query.Param;
import pe.edu.upc.proyectogrupo1.dtos.Plan_de_EvacuacionDTO;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;

import java.util.List;

public interface IPlan_de_EvacuacionService {
    public List<Plan_de_Evacuacion> list();
    public void insert(Plan_de_Evacuacion p);
    public void update(Plan_de_Evacuacion p);
    public void delete(int id);
    public Plan_de_Evacuacion listId(int id);
    public List<Plan_de_Evacuacion> buscarPorNombre(String nombre);
    public List<Plan_de_Evacuacion> listarPorZona(Integer idZona); // Obtener los planes por zona

}
