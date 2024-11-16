package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.Usuario;


public class RolDTO {
    private int idRol;
    private String tipoRol;
    private Usuario us;

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
    }

    public String getTipoRol() {
        return tipoRol;
    }

    public void setTipoRol(String tipoRol) {
        this.tipoRol = tipoRol;
    }

    public Usuario getUs() {
        return us;
    }

    public void setUs(Usuario us) {
        this.us = us;
    }
}
