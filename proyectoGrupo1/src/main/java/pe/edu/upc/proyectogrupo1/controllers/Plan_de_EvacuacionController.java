package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.Plan_de_EvacuacionDTO;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IPlan_de_EvacuacionService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/planesdeevacuacion")
public class Plan_de_EvacuacionController {

    @Autowired
    private IPlan_de_EvacuacionService pS;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<Plan_de_EvacuacionDTO> listarPlanesDeEvacuacion(){
        return pS. list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,Plan_de_EvacuacionDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping ("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public Plan_de_EvacuacionDTO listarID(@PathVariable("id") Integer id){
        ModelMapper m = new ModelMapper();
        Plan_de_EvacuacionDTO p = m.map(pS.listId(id), Plan_de_EvacuacionDTO.class);
        return p;
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void insert(@RequestBody Plan_de_EvacuacionDTO dto){
        ModelMapper m = new ModelMapper();
        Plan_de_Evacuacion p = m.map(dto, Plan_de_Evacuacion.class);
        pS.insert(p);
    }


    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void update(@RequestBody Plan_de_EvacuacionDTO dto){
        ModelMapper m = new ModelMapper();
        Plan_de_Evacuacion p = m.map(dto, Plan_de_Evacuacion.class);
        pS.update(p);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void delete(@PathVariable("id") Integer id){
        pS.delete(id);
    }
    @GetMapping("/planesdeevacionporzona")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<Plan_de_Evacuacion> planesdeevacionporzona(@RequestParam String nombre)
    {
        return pS.buscarPorNombre(nombre).stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,Plan_de_Evacuacion.class);
        }).collect(Collectors.toList());

    }

    @GetMapping("/por-zona/{idZona}")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public ResponseEntity<List<Plan_de_Evacuacion>> obtenerPlanesPorZona(@PathVariable Integer idZona) {
        List<Plan_de_Evacuacion> planes = pS.listarPorZona(idZona);
        return new ResponseEntity<>(planes, HttpStatus.OK);
    }

}
