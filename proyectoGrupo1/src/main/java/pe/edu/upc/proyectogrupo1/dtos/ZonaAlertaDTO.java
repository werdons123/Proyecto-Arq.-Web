package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.Alerta;
import pe.edu.upc.proyectogrupo1.entities.Zona;

public class ZonaAlertaDTO {
    private int id_Zona;
    private Zona zo;
    private Alerta al;
    public int getId_Zona() {
        return id_Zona;
    }

    public void setId_Zona(int id_Zona) {
        this.id_Zona = id_Zona;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }

    public Alerta getAl() {
        return al;
    }

    public void setAl(Alerta al) {
        this.al = al;
    }

}
