package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.QuantityUsuarioByAlertaDTO;
import pe.edu.upc.proyectogrupo1.dtos.QuantityUsuarioByRolDTO;
import pe.edu.upc.proyectogrupo1.dtos.QuantityAlertsByUserDTO;
import pe.edu.upc.proyectogrupo1.dtos.UsuarioDTO;
import pe.edu.upc.proyectogrupo1.entities.Usuario;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IUsuarioService;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private IUsuarioService uS;

    @GetMapping
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UsuarioDTO> listarUsuarios(){
        return uS.listarUsuarios().stream().map( x-> {
            ModelMapper m =new ModelMapper();
            return m.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());
    }

    @GetMapping ("/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
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
    @PreAuthorize("hasAuthority('ADMIN')")
    public void eliminar(@PathVariable("id") Integer id) {
        uS.delete(id);
    }

    @PutMapping
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public void modificar(@RequestBody UsuarioDTO dto) {
        ModelMapper m = new ModelMapper();
        Usuario d = m.map(dto, Usuario.class);
        uS.update(d);
    }
    @GetMapping("/cantidad")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<QuantityUsuarioByAlertaDTO> usuarioporalerta(){
        List<String[]> lista = uS.usuarioporalerta();
        List<QuantityUsuarioByAlertaDTO> listaDTO = new ArrayList<>();
        for(String[] columna:lista){
            QuantityUsuarioByAlertaDTO dto = new QuantityUsuarioByAlertaDTO();
            dto.setId_usuario(Integer.parseInt(columna[0]));
            dto.setQuantity(Integer.parseInt(columna[1]));
            listaDTO.add(dto);
        }
        return listaDTO;

    }
    @GetMapping("/usuario_rol")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<UsuarioDTO> usuarioporrol(){
        return uS.listarUsuarios().stream().map( x-> {
            ModelMapper m =new ModelMapper();
            return m.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());

    }

    @GetMapping("/cantidadesalertas")
    @PreAuthorize("hasAuthority('ADMIN') || hasAuthority('CLIENTE')")
    public List<QuantityAlertsByUserDTO> cantidadAlertasController(){
        List<String[]> lista = uS.cantidadalertaservice();
        List<QuantityAlertsByUserDTO>listaDTO=new ArrayList<>();
        for (String[] columna:lista){
            QuantityAlertsByUserDTO dto=new QuantityAlertsByUserDTO();
            dto.setNombre(columna[0]);
            dto.setApellidos(columna[1]);
            dto.setQuantityAlertsByUser(Integer.parseInt(columna[2]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }

}
