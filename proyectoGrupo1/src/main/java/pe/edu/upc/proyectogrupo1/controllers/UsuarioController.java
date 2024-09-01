package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.UsuarioDTO;
import pe.edu.upc.proyectogrupo1.entities.Usuario;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IUsuarioService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private IUsuarioService uS;

    @GetMapping
    public List<UsuarioDTO> listarUsuarios(){
        return uS.listarUsuarios().stream().map( x-> {
            ModelMapper m =new ModelMapper();
            return m.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping ("/{id}")
    public UsuarioDTO listID(@PathVariable("id") Integer id){
        ModelMapper m =new ModelMapper();
        UsuarioDTO dto = m.map(uS.listID(id),UsuarioDTO.class);
        return dto;
    }

    @PostMapping
    public void insertarUsuario(@RequestBody UsuarioDTO dto){
        ModelMapper m =new ModelMapper();
        Usuario u=m.map(dto,Usuario.class);
        uS.insert(u);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        uS.delete(id);
    }

    @PutMapping
    public void modificar(@RequestBody UsuarioDTO dto) {
        ModelMapper m = new ModelMapper();
        Usuario d = m.map(dto, Usuario.class);
        uS.update(d);
    }

}
