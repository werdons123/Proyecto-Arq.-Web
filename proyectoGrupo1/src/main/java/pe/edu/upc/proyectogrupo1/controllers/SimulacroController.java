package pe.edu.upc.proyectogrupo1.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.edu.upc.proyectogrupo1.dtos.SimulacroDTO;
import pe.edu.upc.proyectogrupo1.entities.Simulacro;
import pe.edu.upc.proyectogrupo1.serviceinterfaces.ISimulacroService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/simulacros")
public class SimulacroController {
    @Autowired
    private ISimulacroService siS;
    @GetMapping
    public List<SimulacroDTO> listar() {
        return siS.list().stream().map(x->{
            ModelMapper m = new ModelMapper();
            return m.map(x,SimulacroDTO.class);
        }).collect(Collectors.toList());
    }
    @PostMapping
    public void insertar(@RequestBody SimulacroDTO dto) {
        ModelMapper m = new ModelMapper();
        Simulacro si = m.map(dto, Simulacro.class);
        siS.insert(si);
    }
    @GetMapping("/{id}")
    public SimulacroDTO buscarPorId(@RequestParam("Id") Integer id) {
        ModelMapper m = new ModelMapper();
        SimulacroDTO dto = m.map(siS.listId(id), SimulacroDTO.class);
        return dto;
    }
    @PutMapping
    public void modificar(@RequestBody SimulacroDTO dto) {
        ModelMapper m = new ModelMapper();
        Simulacro si = m.map(dto, Simulacro.class);
        siS.update(si);
    }
    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) { siS.delete(id); }
}
