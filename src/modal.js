// Primeiro, vamos criar a estrutura HTML dos modais
document.addEventListener('DOMContentLoaded', function() {
    // Modal de Política de Privacidade
    const privacyModalHTML = `
        <div id="privacy-modal" class="modal-overlay">
            <div class="modal-content">
                <span class="close-button" onclick="closePrivacyModal()">&times;</span>
                <h2>Política de Privacidade</h2>
                <div class="modal-body">
                    <p><strong>Última atualização: 05/11/2024</strong></p>
                    <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações dos visitantes do nosso site.</p>
                    
                    <h3>Informações que Coletamos</h3>
                    <p>Não coletamos dados pessoais identificáveis de nossos visitantes. Não registramos informações pessoais como nome, e-mail ou número de telefone.</p>
                    
                    <h3>Uso de Cookies</h3>
                    <p>Nós usamos cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a lembrar suas preferências e melhorar a funcionalidade do site. Você pode optar por desativar os cookies nas configurações do seu navegador.</p>
                    
                    <h3>Links para Outros Sites</h3>
                    <p>Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que você revise as políticas de privacidade de qualquer site que você visitar.</p>
                    
                    <h3>Isenção de Responsabilidade</h3>
                    <p>Como afiliados da Amazon, fornecemos links para produtos disponíveis na Amazon. Não somos responsáveis pela compra, entrega ou suporte dos produtos comprados através de nossos links.</p>
                    
                    <h3>Alterações a Esta Política</h3>
                    <p>Reservamo-nos o direito de atualizar esta Política de Privacidade a qualquer momento. Notificaremos os usuários sobre alterações significativas através de um aviso em nosso site.</p>
                    
                    <h3>Contato</h3>
                    <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: vitalurestore@gmail.com</p>
                </div>
            </div>
        </div>
    `;

    // Modal de Termos e Condições
    const termsModalHTML = `
        <div id="terms-modal" class="modal-overlay">
            <div class="modal-content">
                <span class="close-button" onclick="closeTermsModal()">&times;</span>
                <h2>Termos e Condições</h2>
                <div class="modal-body">
                    <p><strong>Última atualização: 05/11/2024</strong></p>
                    
                    <h3>1. Sobre Nosso Serviço</h3>
                    <p>A Vitalure é um site de afiliados que fornece informações sobre produtos e redireciona os visitantes para o site da Amazon para completar a compra. Não vendemos produtos diretamente e não somos responsáveis por questões relacionadas à compra, entrega ou suporte dos produtos mostrados no nosso site.</p>

                    <h3>2. Afiliados da Amazon</h3>
                    <p>Somos participantes do Programa de Associados da Amazon, um programa de afiliados que permite a geração de receita por meio de links para produtos da Amazon. Quando você clica em nossos links e realiza uma compra, podemos receber uma comissão sem nenhum custo adicional para você.</p>

                    <h3>3. Responsabilidade por Produtos e Compras</h3>
                    <p>Toda a compra realizada através dos nossos links de afiliados será processada diretamente pela Amazon. Nós não temos controle sobre os produtos oferecidos, preços, disponibilidade, prazos de entrega ou qualquer questão relacionada ao atendimento ao cliente da Amazon.</p>

                    <h3>4. Precisão das Informações</h3>
                    <p>Nos esforçamos para garantir que as informações exibidas em nossa página estejam corretas e atualizadas, mas não podemos garantir a exatidão completa de preços, disponibilidade ou características dos produtos.</p>

                    <h3>5. Contato</h3>
                    <p>Para quaisquer dúvidas sobre nossos Termos e Condições, entre em contato conosco em vitalurestore@gmail.com</p>
                </div>
            </div>
        </div>
    `;

    // Adicionar os modais ao body
    document.body.insertAdjacentHTML('beforeend', privacyModalHTML);
    document.body.insertAdjacentHTML('beforeend', termsModalHTML);

    // Adicionar estilos
    const styles = `
        <style>
            .modal-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 9999;
                overflow-y: auto;
                padding: 20px;
            }

            .modal-content {
                background-color: #fff;
                margin: 20px auto;
                padding: 30px;
                width: 90%;
                max-width: 800px;
                border-radius: 8px;
                position: relative;
                max-height: 90vh;
                overflow-y: auto;
            }

            .modal-body {
                margin-top: 20px;
                color: #333;
                line-height: 1.6;
            }

            .modal-content h2 {
                color: #333;
                margin-bottom: 20px;
                font-size: 24px;
            }

            .modal-content h3 {
                color: #444;
                margin-top: 25px;
                margin-bottom: 15px;
                font-size: 20px;
            }

            .modal-content p {
                margin-bottom: 15px;
                color: #666;
                font-size: 16px;
            }

            .close-button {
                position: absolute;
                right: 20px;
                top: 20px;
                font-size: 28px;
                font-weight: bold;
                color: #666;
                cursor: pointer;
                border: none;
                background: none;
                padding: 0;
                line-height: 1;
            }

            .close-button:hover {
                color: #000;
            }

            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    padding: 20px;
                    margin: 10px auto;
                }
                
                .modal-content h2 {
                    font-size: 20px;
                }

                .modal-content h3 {
                    font-size: 18px;
                }

                .modal-content p {
                    font-size: 14px;
                }
            }
        </style>
    `;

    // Adicionar estilos ao head
    document.head.insertAdjacentHTML('beforeend', styles);
});

// Funções para controlar os modais
function openPrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closePrivacyModal() {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function openTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Adicionar eventos para fechar os modais quando clicar fora
document.addEventListener('click', function(event) {
    const privacyModal = document.getElementById('privacy-modal');
    const termsModal = document.getElementById('terms-modal');
    
    if (event.target === privacyModal) {
        closePrivacyModal();
    }
    if (event.target === termsModal) {
        closeTermsModal();
    }
});