package pe.edu.upc.proyectogrupo1.dtos;

public class CantidadTipoDesastreDTO {
    private String tipoDesastre;
    private long cantidad;

    public String getTipoDesastre() {
        return tipoDesastre;
    }

    public void setTipoDesastre(String tipoDesastre) {
        this.tipoDesastre = tipoDesastre;
    }

    public long getCantidad() {
        return cantidad;
    }

    public void setCantidad(long cantidad) {
        this.cantidad = cantidad;
    }

}
