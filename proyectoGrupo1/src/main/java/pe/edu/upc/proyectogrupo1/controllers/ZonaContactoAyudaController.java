package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.ZonaContactoAyudaDTO;
import pe.edu.upc.proyectogrupo1.dtos.contactoDTO;
import pe.edu.upc.proyectogrupo1.entities.ZonaContactoAyuda;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.IZonaContactoAyudaService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/zonacontactosayuda")
public class ZonaContactoAyudaController {
    @Autowired
    private IZonaContactoAyudaService zcaR;
    @GetMapping
    public List<ZonaContactoAyudaDTO>listar(){
        return zcaR.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x, ZonaContactoAyudaDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody ZonaContactoAyudaDTO dto){
        ModelMapper m = new ModelMapper();
        ZonaContactoAyuda zca = m.map(dto, ZonaContactoAyuda.class);
        zcaR.insert(zca);
    }

    @GetMapping("/listarContactosPorZona")
    public List<contactoDTO> listarContactos(@RequestParam String nombreZona){
        List<String []> lista = zcaR.findByNombreZona(nombreZona);
        List<contactoDTO> listaDTO = new ArrayList<>();
        for (String[] column : lista){
            contactoDTO dto = new contactoDTO();
            dto.setNombre_zona(column[0]);
            dto.setNombre_institucion(column[1]);
            dto.setDescripcion_institucion(column[2]);
            dto.setTelefono_institucion(column[3]);
            listaDTO.add(dto);
        }
        return listaDTO;

    }

}
