import './ArtefactoAgregar.css';
import { useForm } from 'react-hook-form';
import { agregarArtefacto, modificarArtefacto, leerArtefacto } from '../../api/auth'

function ArtefactoAgregar( { estadoModal, setEstadoModal, artefactoSeleccionado, setArtefactoSeleccionado, setArtefactos } ) {

    const { register, handleSubmit } = useForm();

    async function enviar(data) {

        let artefactoModificado = { ...artefactoSeleccionado, ...data };

        if(artefactoSeleccionado) {
            await modificarArtefacto(artefactoModificado);
        } else {
            await agregarArtefacto(data);
        }
        await actualizarArtefactos();
        setEstadoModal(false);
    }

    async function actualizarArtefactos() {
        const res = await leerArtefacto();
        setArtefactos(res.data);
    }


    return(
        estadoModal && (
        <section className='agregar-seccion'>

        <div className="agregar-contenedor">
           
            <h1 className='agregar-titulo'>Registrar nuevo artefacto</h1>
            
            <form className='agregar-formulario' onSubmit={handleSubmit(enviar)}>
                
                <section className='agregar-separar'>
                    <div className='agregar-izquierda'>
                        <label htmlFor="nombre">Nombre</label>
                        <input defaultValue={artefactoSeleccionado?.nombre} type="text" id='nombre' className='agregar-input' {...register("nombre", { required:true })}/>
                        <label htmlFor="color">Color</label>
                        <input defaultValue={artefactoSeleccionado?.color} type="text" id='color' className='agregar-input' {...register("color", { required:true })}/>
                        <label htmlFor="precio">Precio</label>
                        <input defaultValue={artefactoSeleccionado?.precio} type="number" id='precio' className='agregar-input' {...register("precio", { required:true })}/>
                        <label htmlFor="caracteristicas">Caracteristicas</label>
                        <textarea defaultValue={artefactoSeleccionado?.caracteristicas} name="caracteristicas" id="caracteristicas" cols="10" rows="3" className='agregar-textarea' {...register("caracteristicas", { required:true })}></textarea>
                        <label htmlFor="descripcion">Descripcion</label>
                        <textarea defaultValue={artefactoSeleccionado?.descripcion} name="descripcion" id="descripcion" cols="10" rows="3" className='agregar-textarea' {...register("descripcion", { required:true })}></textarea>
                    </div>

                    <div className='agregar-derecha'>
                        <label htmlFor="imagen">Imagen</label>
                        <input defaultValue={artefactoSeleccionado?.imagen} type="text" id='imagen' className='agregar-input' {...register("imagen", { required:true })}/>
                        <label htmlFor="dimensiones">Dimensiones</label>
                        <input defaultValue={artefactoSeleccionado?.dimensiones} type="text" id='dimensiones' className='agregar-input' {...register("dimensiones", { required:true })} />
                        <label htmlFor="peso">Peso</label>
                        <input defaultValue={artefactoSeleccionado?.peso} type="number" id='peso' className='agregar-input' {...register("peso", { required:true })}/>
                        <label htmlFor="materiales">Materiales</label>
                        <input defaultValue={artefactoSeleccionado?.materiales} type="text" id='materiales' className='agregar-input' {...register("materiales", { required:true })} />
                        <label htmlFor="categoria">Categoria</label>
                        <select defaultValue={artefactoSeleccionado?.categoria} name="categoria" id="categoria" className='agregar-select' {...register("categoria", { required:true })} >
                            <option value="Escritorio">Escritorio</option>
                            <option value="Silla">Silla</option>
                            <option value="Accesorio">Accesorio</option>
                            <option value="bicicleta">Porta bicicleta</option>
                        </select>
                    </div>
                </section>

                {artefactoSeleccionado ? 
                <button className='modificar-boton' type='submit'>Modificar Artefacto<i class="bi bi-person-fill-add"></i></button>
                : 
                <button className='agregar-boton' type='submit'>Agregar Artefacto<i class="bi bi-person-fill-add"></i></button>
                }
                
                <button className='cerrar-boton' onClick={() => { setEstadoModal(false); setArtefactoSeleccionado && setArtefactoSeleccionado(null); }}><i class="bi bi-x-lg"></i></button>
 
            </form>

        </div>
        </section>
        )
    )
}

export default ArtefactoAgregar;