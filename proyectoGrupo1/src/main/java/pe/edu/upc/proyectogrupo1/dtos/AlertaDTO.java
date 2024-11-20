package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.Usuario;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

public class AlertaDTO {
    private int id_alerta;
    private String tipo_desastre;
    private LocalDate fecha;
    private LocalTime hora;
    private String descripcion;
    private String nivel_gravedad;
    private Boolean estado;
    private Usuario us;

    public int getId_alerta() {
        return id_alerta;
    }

    public void setId_alerta(int id_alerta) {
        this.id_alerta = id_alerta;
    }

    public String getTipo_desastre() {
        return tipo_desastre;
    }

    public void setTipo_desastre(String tipo_desastre) {
        this.tipo_desastre = tipo_desastre;
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

    public String getNivel_gravedad() {
        return nivel_gravedad;
    }

    public void setNivel_gravedad(String nivel_gravedad) {
        this.nivel_gravedad = nivel_gravedad;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Usuario getUs() {
        return us;
    }

    public void setUs(Usuario us) {
        this.us = us;
    }
}
