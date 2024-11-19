package pe.edu.upc.proyectogrupo1.dtos;

import jakarta.persistence.*;
import pe.edu.upc.proyectogrupo1.entities.Zona;

public class Plan_de_EvacuacionDTO {

    private int id_plan_evacuacion;
    private String titulo;
    private String descripcion;
    private String rutas_evacuacion;
    private String puntos_seguros;
    private Zona zona;

    public int getId_plan_evacuacion() {
        return id_plan_evacuacion;
    }

    public void setId_plan_evacuacion(int id_plan_evacuacion) {
        this.id_plan_evacuacion = id_plan_evacuacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getRutas_evacuacion() {
        return rutas_evacuacion;
    }

    public void setRutas_evacuacion(String rutas_evacuacion) {
        this.rutas_evacuacion = rutas_evacuacion;
    }

    public String getPuntos_seguros() {
        return puntos_seguros;
    }

    public void setPuntos_seguros(String puntos_seguros) {
        this.puntos_seguros = puntos_seguros;
    }

    public Zona getZona() {
        return zona;
    }

    public void setZona(Zona zona) {
        this.zona = zona;
    }
}
