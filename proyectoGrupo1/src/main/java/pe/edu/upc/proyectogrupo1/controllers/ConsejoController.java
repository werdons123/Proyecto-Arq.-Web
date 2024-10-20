package pe.edu.upc.proyectogrupo1.controllers;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.ConsejoDTO;
import pe.edu.upc.proyectogrupo1.entities.Consejo;
import pe.edu.upc.proyectogrupo1.entities.Plan_de_Evacuacion;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IConsejoService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/contactos")

public class ConsejoController {
    @Autowired
    private IConsejoService cS;
    @GetMapping
    public List<ConsejoDTO> listar(){
        return cS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,ConsejoDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody ConsejoDTO dto){
        ModelMapper m = new ModelMapper();
        Consejo c = m.map(dto,Consejo.class);
        cS.insert(c);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){cS.delete(id);}
    @PutMapping
    public void modificar(@RequestBody ConsejoDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Consejo co = m.map(dto, Consejo.class);
        cS.update(co);
    }
    @GetMapping("/planesdeevacionporzona")
    public List<ConsejoDTO> consejosportipodedesastre(@RequestParam String tipo)
    {
        return cS.buscarPorTipo(tipo).stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,ConsejoDTO.class);
        }).collect(Collectors.toList());

    }

}
