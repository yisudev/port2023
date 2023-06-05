export default function Contact() {
    return (
        <>
            <div className="contenedor-contacto bg-gray-800 h-screen" id='contacto'>
                <div className="links flex justify-around flex-wrap">
                    <a href=""  className='link-img'>
                        <img src={require('../../img/ig.png')} alt="" className='img-link'/>
                        <span className='text-white text-2xl'>@yisudev</span>
                    </a>
                    <a href="" className='link-img'>
                        <img src={require('../../img/fb.png')} alt="" className='img-link'/>
                        <span className='text-white text-2xl'>Jesús Baez</span>
                    </a>
                    <a href="" className='link-img'>
                        <img src={require('../../img/wa.png')} alt="" className='img-link'/>
                        <span className='text-white text-2xl'> Whatsapp</span>
                    </a>
                </div>
                <div className='flex w-full justify-center'> 
                    <a href="" className='bg-green-800 text-white px-4 py-2 rounded hover:bg-white hover:text-green-500'>DESCARGAR CV</a>
                </div>
                
            </div>
            <footer className='bg-white text-center'>
                <p>Este portafolio es propiedad de Jesús Amin Baez (yisudev).</p>
            </footer>
        </>
    );
}