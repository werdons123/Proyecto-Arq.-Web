package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.AlertaDTO;
import pe.edu.upc.proyectogrupo1.dtos.CantidadTipoDesastreDTO;
import pe.edu.upc.proyectogrupo1.entities.Alerta;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IAlertaService;

import java.util.ArrayList;
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

    @GetMapping("/cantidadPorTipo")
    public List<CantidadTipoDesastreDTO> cantidadController(){
        List<String []> lista = aS.cantidad();
        List<CantidadTipoDesastreDTO> listaDTO = new ArrayList<>();
        for (String[] column : lista){
            CantidadTipoDesastreDTO dto = new CantidadTipoDesastreDTO();
            dto.setTipoDesastre(column[0]);
            dto.setCantidad(Integer.parseInt(column[1]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }
}
