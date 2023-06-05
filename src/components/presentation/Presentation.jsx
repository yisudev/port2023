export default function Presentation() {
    return (
        <>
            <div  className=" present backdrop-filter backdrop-blur-lg bg-opacity-50 p-8 py-8 h-screen " id='sobre'>
                <div className="container mx-auto flex flex-col items-center">
                    <img
                        src={require('../../img/foto2.webp')}
                        alt="Mi foto"
                        className="w-80 h-80 rounded-full mb-4"
                    />
                    <h1 className="text-3xl font-bold text-white">¡Hola, soy yisudev!</h1>
                    <p className="text-lg text-2xl text-white text-center">
                    Soy un joven de 17 años con conocimientos MERN STACK, habilidades avanzadas en JavaScript y experiencia en el uso de Tailwind CSS. Estoy listo para enfrentar desafíos y colaborar en la creación de soluciones tecnológicas innovadoras. ¡Dispuesto a aprender y crecer en el campo del desarrollo web!
                    </p>
                </div>
            </div>
        </>
    );
}