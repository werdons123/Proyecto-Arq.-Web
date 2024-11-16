package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.Zona;

import java.time.LocalDate;
import java.time.LocalTime;

public class SimulacroDTO {
    private int idSimulacro;
    private String tipoSimlacro;
    private LocalDate fecha;
    private LocalTime hora;
    private String descripcion;
    private int participantes;
    private Zona zo;

    public int getIdSimulacro() {
        return idSimulacro;
    }

    public void setIdSimulacro(int idSimulacro) {
        this.idSimulacro = idSimulacro;
    }

    public String getTipoSimlacro() {
        return tipoSimlacro;
    }

    public void setTipoSimlacro(String tipoSimlacro) {
        this.tipoSimlacro = tipoSimlacro;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getParticipantes() {
        return participantes;
    }

    public void setParticipantes(int participantes) {
        this.participantes = participantes;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }
}
