package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.ZonaAlertaDTO;
import pe.edu.upc.proyectogrupo1.entities.ZonaAlerta;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaAlertaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/zonaalertas")
public class ZonaAlertaController {
    @Autowired
    private IZonaAlertaService aS;
    @GetMapping()
    public List<ZonaAlerta> list(){
        return aS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ZonaAlerta.class);

        }).collect(Collectors.toList());

    }
    @PostMapping
    public void insertar(@RequestBody ZonaAlertaDTO dto)
    {
        ModelMapper m = new ModelMapper();
        ZonaAlerta za = m.map(dto, ZonaAlerta.class);
        aS.insert(za);
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id)
    {
        aS.delete(id);
    }
    @PutMapping()
    public void modificar(@RequestBody ZonaAlertaDTO dto)
    {
        ModelMapper m = new ModelMapper();
        ZonaAlerta za = m.map(dto,ZonaAlerta.class);

    }

}
