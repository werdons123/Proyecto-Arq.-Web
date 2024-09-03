package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.Alerta;

public class ConsejoDTO {
    private int id_Consejo;
    private String titulo;
    private String descripcion;
    private Alerta al;
    public int getId_Consejo() {
        return id_Consejo;
    }

    public void setId_Consejo(int id_Consejo) {
        this.id_Consejo = id_Consejo;
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

    public Alerta getAl() {
        return al;
    }

    public void setAl(Alerta al) {
        this.al = al;
    }
}
