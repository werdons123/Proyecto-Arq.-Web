package pe.edu.upc.proyectogrupo1.controllers;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.QuantityAlertsByZoneDTO;
import pe.edu.upc.proyectogrupo1.dtos.ZonaDTO;
import pe.edu.upc.proyectogrupo1.entities.Zona;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/zonas")
public class ZonaController {
    @Autowired
    private IZonaService vs;
    @PostMapping
    public void registrar(@RequestBody ZonaDTO dto)
    {
        ModelMapper m = new ModelMapper();
        Zona d = m.map(dto, Zona.class);
        vs.insert(d);
    }

    @GetMapping
    public List<ZonaDTO> listar(){

        return vs.list().stream().map(x->{
            ModelMapper m=new ModelMapper();
            return  m.map(x,ZonaDTO.class);
        }).collect(Collectors.toList());
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable("id") Integer id) {
        vs.delete(id);
    }

    @GetMapping("/{id}")
    public ZonaDTO listarId(@PathVariable("id") Integer id) {
        ModelMapper m=new ModelMapper();
        ZonaDTO dto =m.map(vs.listId(id),ZonaDTO.class);
        return dto;
    }
    @PutMapping
    public void modificar(@RequestBody ZonaDTO dto) {
        ModelMapper m = new ModelMapper();
        Zona d = m.map(dto, Zona.class);
        vs.update(d);
    }
    @GetMapping("/buscar")
    public List<ZonaDTO> buscar(@RequestParam String zona) {
        return vs.buscar(zona).stream().map(x->{
            ModelMapper m=new ModelMapper();
            return m.map(x,ZonaDTO.class);
        }).collect(Collectors.toList());
    }
    @GetMapping("contar")
    public int contar()
    {
        return vs.contar();
    };
    @GetMapping("/cantidadesalertas")
    public  List<QuantityAlertsByZoneDTO> cantidadalesertasController(){
        List<String[]> lista = vs.cantidadAlertaservice();
        List<QuantityAlertsByZoneDTO>listaDTO=new ArrayList<>();
        for (String[] columna : lista){
            QuantityAlertsByZoneDTO dto=new QuantityAlertsByZoneDTO();
            dto.setNombre_zona(columna[0]);
            dto.setQuantityAlertsByZone(Integer.parseInt(columna[1]));
            listaDTO.add(dto);
        }
        return listaDTO;
    }


}