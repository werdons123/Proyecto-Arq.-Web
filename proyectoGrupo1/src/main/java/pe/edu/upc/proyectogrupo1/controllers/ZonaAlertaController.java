package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.ZonaAlertaDTO;
import pe.edu.upc.proyectogrupo1.dtos.ZonaContactoAyudaDTO;
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
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<ZonaAlertaDTO> list(){
        return aS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ZonaAlertaDTO.class);
        }).collect(Collectors.toList());

    }
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void insertar(@RequestBody ZonaAlertaDTO dto)
    {
        ModelMapper m = new ModelMapper();
        ZonaAlerta za = m.map(dto, ZonaAlerta.class);
        aS.insert(za);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void delete(@PathVariable("id") Integer id)
    {
        aS.delete(id);
    }
    @PutMapping()
    @PreAuthorize("hasAuthority('ADMIN')")
    public void modificar(@RequestBody ZonaAlertaDTO dto)
    {
        ModelMapper m = new ModelMapper();
        ZonaAlerta za = m.map(dto,ZonaAlerta.class);

    }
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ZonaAlertaDTO buscarPorId(@PathVariable Integer id) {
        ModelMapper m = new ModelMapper();
        ZonaAlertaDTO dto = m.map(aS.listId(id), ZonaAlertaDTO.class);
        return dto;
    }

}
