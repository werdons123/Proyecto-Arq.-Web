package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<Plan_de_EvacuacionDTO> listarPlanesDeEvacuacion(){
        return pS. list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,Plan_de_EvacuacionDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping ("/{id}")
    public Plan_de_EvacuacionDTO listarID(@PathVariable("id") Integer id){
        ModelMapper m = new ModelMapper();
        Plan_de_EvacuacionDTO p = m.map(pS.listId(id), Plan_de_EvacuacionDTO.class);
        return p;
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ESPECIALISTA')")
    public void insert(@RequestBody Plan_de_EvacuacionDTO dto){
        ModelMapper m = new ModelMapper();
        Plan_de_Evacuacion p = m.map(dto, Plan_de_Evacuacion.class);
        pS.insert(p);
    }


    @PutMapping
    public void update(@RequestBody Plan_de_EvacuacionDTO dto){
        ModelMapper m = new ModelMapper();
        Plan_de_Evacuacion p = m.map(dto, Plan_de_Evacuacion.class);
        pS.update(p);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id){
        pS.delete(id);
    }
    @GetMapping("/planesdeevacionporzona")
    public List<Plan_de_Evacuacion> planesdeevacionporzona(@RequestParam String nombre)
    {
        return pS.buscarPorNombre(nombre).stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,Plan_de_Evacuacion.class);
        }).collect(Collectors.toList());

    }

}
