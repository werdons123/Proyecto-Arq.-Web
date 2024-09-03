package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.AlertaDTO;
import pe.edu.upc.proyectogrupo1.entities.Alerta;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IAlertaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/alertas")
public class AlertaController {
    @Autowired
    private IAlertaService aS;
    @GetMapping
    public List<AlertaDTO> listar(){
        return aS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,AlertaDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody AlertaDTO dto){
        ModelMapper m = new ModelMapper();
        Alerta al = m.map(dto,Alerta.class);
        aS.insert(al);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id){aS.delete(id);}

    @PutMapping()
    public void modificar(@RequestBody AlertaDTO dto){
        ModelMapper m = new ModelMapper();
        Alerta al = m.map(dto, Alerta.class);
        aS.update(al);
    }

}
