package pe.edu.upc.proyectogrupo1.dtos;

import pe.edu.upc.proyectogrupo1.entities.ContactoAyuda;
import pe.edu.upc.proyectogrupo1.entities.Zona;

public class ZonaContactoAyudaDTO {
    private int idZonaContactoAyuda;
    private Zona zo;
    private ContactoAyuda coay;

    public int getIdZonaContactoAyuda() {
        return idZonaContactoAyuda;
    }

    public void setIdZonaContactoAyuda(int idZonaContactoAyuda) {
        this.idZonaContactoAyuda = idZonaContactoAyuda;
    }

    public Zona getZo() {
        return zo;
    }

    public void setZo(Zona zo) {
        this.zo = zo;
    }

    public ContactoAyuda getCoay() {
        return coay;
    }

    public void setCoay(ContactoAyuda coay) {
        this.coay = coay;
    }
}
