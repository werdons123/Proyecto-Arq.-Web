package pe.edu.upc.proyectogrupo1.dtos;

public class ZonaDTO {

    private int id_Zona;
    private String nombre_zona;
    private String descripcion;
    private String ubicacion;
    private Double latitud;
    private Double longitud;

    public int getId_Zona() {
        return id_Zona;
    }

    public void setId_Zona(int id_Zona) {
        this.id_Zona = id_Zona;
    }

    public String getNombre_zona() {
        return nombre_zona;
    }

    public void setNombre_zona(String nombre_zona) {
        this.nombre_zona = nombre_zona;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Double getLatitud() {
        return latitud;
    }

    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }

    public Double getLongitud() {
        return longitud;
    }

    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }
}
