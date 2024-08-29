package pe.edu.upc.proyectogrupo1.dtos;

public class ContactoAyudaDTO {

    private int idContactoAyuda;
    private String nombreInstitucion;
    private String descripcion;
    private String telefono;

    public int getIdContactoAyuda() {
        return idContactoAyuda;
    }

    public void setIdContactoAyuda(int idContactoAyuda) {
        this.idContactoAyuda = idContactoAyuda;
    }

    public String getNombreInstitucion() {
        return nombreInstitucion;
    }

    public void setNombreInstitucion(String nombreInstitucion) {
        this.nombreInstitucion = nombreInstitucion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

}
