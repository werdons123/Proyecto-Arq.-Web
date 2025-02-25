package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.RolDTO;
import pe.edu.upc.proyectogrupo1.entities.Rol;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IRolService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/rol")
public class RolController {

    @Autowired
    private IRolService rS;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<RolDTO> listar() {
        return rS.list().stream().map(x -> {
            ModelMapper m = new ModelMapper();
            return m.map(x, RolDTO.class);
        }).collect(Collectors.toList());
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void insertar(@RequestBody RolDTO dto) {
        ModelMapper m = new ModelMapper();
        Rol r = m.map(dto, Rol.class);
        rS.insert(r);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public RolDTO listID(@PathVariable("id") Integer id) {
        ModelMapper m = new ModelMapper();
        RolDTO dto = m.map(rS.listId(id), RolDTO.class);
        return dto;
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void modificar(@RequestBody RolDTO dto) {
        ModelMapper m = new ModelMapper();
        Rol r = m.map(dto, Rol.class);
        rS.update(r);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void eliminar(@PathVariable("id") Integer id) {
        rS.delete(id);
    }
}