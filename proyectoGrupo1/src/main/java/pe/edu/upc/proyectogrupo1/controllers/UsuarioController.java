package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.QuantityUsuarioByAlertaDTO;
import pe.edu.upc.proyectogrupo1.dtos.QuantityUsuarioByRolDTO;
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
    public List<UsuarioDTO> listarUsuarios(){
        return uS.listarUsuarios().stream().map( x-> {
            ModelMapper m =new ModelMapper();
            return m.map(x,UsuarioDTO.class);
        }).collect(Collectors.toList());
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
    @GetMapping("/cantidad")
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
    @GetMapping("/cantidadusuario_rol")
    public List<QuantityUsuarioByRolDTO> usuarioporrol(){
        List<String[]> lista = uS.usuarioporrol();
        List<QuantityUsuarioByRolDTO> listaDTO = new ArrayList<>();
        for(String[] columna:lista){
            QuantityUsuarioByRolDTO dto= new QuantityUsuarioByRolDTO();
            dto.setId_usuario(Integer.parseInt(columna[0]));
            dto.setQuantity(Integer.parseInt(columna[1]));
            listaDTO.add(dto);
        }
        return listaDTO;

    }


}
