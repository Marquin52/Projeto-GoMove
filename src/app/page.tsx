import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="h-screen flex justify-center items-center px-5"
        style={{
          backgroundImage: 'url("/ProjetoEsportes.jfif")', // Substituir pelo caminho da Imagem
          backgroundSize: 'cover', // AAjustar a imagem para cobrir toda a tela
          backgroundPosition: 'center', // Centraliza a imagem de fundo
        }}
      >
        <div className="p-12 rounded-lg w-95 max-w-full flex justify-center items-center flex-col gap-2"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)', // Fundo branco com transparência
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Sombra para destacar o conteúdo
          }}>
        <div className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2">
          <Image src="/logoGoMove.png" width={191} height={168} alt="logo go Move" className="mb-8"/>
          <input 
            type="email" 
            placeholder="E-mail" 
            className="input w-full p-2 border border-gray-300 rounded-lg text-gray-800 bg-gray-100" 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="input w-full p-2 border border-gray-300 rounded-lg text-gray-800 bg-gray-100" 
          />
          <button className="w-full mt-4 p-2 bg-[#c084fc] text-white rounded-lg">
            Entrar
          </button>
          </div>
        </div>
      </div>
    </main>
  );
}
