package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.ContactoAyudaDTO;
import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IContactoAyudaService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/contactoayuda")

public class ContactoAyudaController {
    @Autowired
    private IContactoAyudaService caS;
    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<ContactoAyudaDTO> listar() {

        return caS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,ContactoAyudaDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void insertar(@RequestBody ContactoAyudaDTO dto) {
        ModelMapper m = new ModelMapper();
        ContactoAyuda ca = m.map(dto, ContactoAyuda.class);
        caS.insert(ca);
    }
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public ContactoAyudaDTO buscarPorId(@PathVariable("id") Integer id) {
        ModelMapper m = new ModelMapper();
        ContactoAyudaDTO dto = m.map(caS.listId(id),ContactoAyudaDTO.class);
        return dto;
    }
    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public void modificar(@RequestBody ContactoAyudaDTO dto) {
        ModelMapper m = new ModelMapper();
        ContactoAyuda ca = m.map(dto, ContactoAyuda.class);
        caS.update(ca);
    }
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public void eliminar(@PathVariable("id") Integer id) {
        caS.delete(id);
    }
}
