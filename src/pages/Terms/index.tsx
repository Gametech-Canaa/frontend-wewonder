import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

import * as Styled from "./styles";

const Terms: React.FC = () => {
  return (
    <Styled.PageTeacherForm className="container">
      <PageHeader
        title="Bem vindo à WeWonder"
        description="Estes são os termos e condições de uso do nosso sistema."
      />

      <Styled.Main>
        <h3>POLÍTICA DE PRIVACIDADE</h3>

        <strong>SEÇÃO 1 - INFORMAÇÕES GERAIS</strong>
        <hr />
        <div>
          <p>
            A presente Política de Privacidade contém informações sobre coleta,
            uso, armazenamento, tratamento e proteção dos dados pessoais dos
            usuários e visitantes do aplicativo WeWonder e site (URL DO NOSSO
            SITE), com a finalidade de demonstrar absoluta transparência quanto
            ao assunto e esclarecer a todos interessados sobre os tipos de dados
            que são coletados, os motivos da coleta e a forma como os usuários
            podem gerenciar ou excluir as suas informações pessoais.
          </p>
        </div>
        <div>
          <p>
            Esta Política de Privacidade aplica-se a todos os usuários e
            visitantes do aplicativo WeWonder e site (URL DO NOSSO SITE) e
            integra os Termos e Condições Gerais de Uso do aplicativo WeWonder e
            site (URL DO NOSSO SITE), situado em R. Prof. Lázaro Costa, n° 348 -
            Vila Canaã, Goiânia - GO, 74415-420 (endereço completo), doravante
            nominada Equipe Gametech de Robótica.
          </p>
        </div>
        <div>
          {" "}
          <p>
            O presente documento foi elaborado em conformidade com a Lei Geral
            de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da
            Internet (Lei 12.965/14) (e o Regulamento da UE n. 2016/6790).
            Ainda, o documento poderá ser atualizado em decorrência de eventual
            atualização normativa, razão pela qual se convida o usuário a
            consultar periodicamente esta seção.
          </p>
        </div>
        <strong>
          SEÇÃO 2 - COMO RECOLHEMOS OS DADOS PESSOAIS DO USUÁRIO E DO VISITANTE?{" "}
        </strong>
        <hr />
        <div>
          <p>
            Os dados pessoais do usuário e visitante são recolhidos pela
            plataforma da seguinte forma:{" "}
          </p>
        </div>
        <ol>
          <li>
            Quando o usuário cria uma conta/perfil na plataforma WeWonder: esses
            dados são os dados de identificação básicos, como E-mail, Nome
            Completo, CEP, Telefone, Informações sobre interesse pessoal do
            cliente. A partir deles, podemos identificar o usuário e o
            visitante, além de garantir uma maior segurança e bem-estar às suas
            necessidades. Ficam cientes os usuários e visitantes de que seu
            perfil na plataforma estará acessível a todos demais usuários e
            visitantes da plataforma WeWonder.
          </li>
          <li>
            Quando um usuário e visitante acessa páginas do site (URL DO NOSSO
            SITE) e o aplicativo WeWonder: as informações sobre interação e
            acesso são coletadas pela empresa para garantir uma melhor
            experiência ao usuário e visitante. Estes dados podem tratar sobre
            as palavras-chaves utilizadas em uma busca, o compartilhamento de um
            documento específico, comentários, visualizações de páginas, perfis,
            a URL de onde o usuário e visitante provêm, o navegador que utilizam
            e seus IPs de acesso, dentre outras que poderão ser armazenadas e
            retidas.
          </li>
          <li>
            Por intermédio de terceiro: a plataforma WeWonder recebe dados de
            terceiros, como Google e Facebook quando um usuário faz login com o
            seu perfil de um desses sites. A utilização desses dados é
            autorizada previamente pelos usuários junto ao terceiro em questão.
          </li>
        </ol>
        <strong>
          SEÇÃO 3 - QUAIS DADOS PESSOAIS RECOLHEMOS SOBRE O USUÁRIO E VISITANTE?{" "}
        </strong>
        <hr />
        <div>
          <p>
            Os dados pessoais do usuário e visitante recolhidos são os
            seguintes:
          </p>
        </div>
        <strong>
          (Realizar pergunta de múltipla escolha com opção outras)
        </strong>
        <ol>
          <li>
            Dados para a criação da conta/perfil na plataforma WeWonder: E-mail,
            Nome Completo, Telefone e informações sobre interesse pessoal do
            cliente (exemplo: e-mail, nome completo, cidade de residência e
            profissão).
          </li>
          <li>
            Dados para otimização da navegação: Logs de acesso, palavras chaves,
            grupos favoritos, perfis favoritos, histórico de busca, CEP,
            Localização em tempo real, locais visitados com frequência.
          </li>
          <li>
            Dados para concretizar transações: dados referentes ao pagamento e
            transações, tais como, número do cartão de crédito e outras
            informações sobre o cartão, além dos pagamentos efetuados.
          </li>
          <li>
            Dados sensíveis: a plataforma poderá coletar os seguintes dados
            sensíveis do usuário Dados genéticos e Dados relativos a saúde.
          </li>
        </ol>
        <strong>
          SEÇÃO 3 - PARA QUE FINALIDADES UTILIZAMOS OS DADOS PESSOAIS DO USUÁRIO
          E VISITANTE?
        </strong>
        <hr />
        <div>
          <p>
            Os dados pessoais do usuário e do visitante coletados e armazenados
            pela plataforma WeWonder tem por finalidade:
          </p>
        </div>
        <ol>
          <li>
            Bem-estar do usuário e visitante: aprimorar o produto e/ou serviço
            oferecido, facilitar, agilizar e cumprir os compromissos
            estabelecidos entre o usuário e a empresa, melhorar a experiência
            dos usuários e fornecer funcionalidades específicas a depender das
            características básicas do usuário.
          </li>
          <li>
            Melhorias da plataforma: compreender como o usuário utiliza os
            serviços da plataforma, para ajudar no desenvolvimento de negócios e
            técnicas.
          </li>
          <li>
            Anúncios: apresentar anúncios personalizados para o usuário com base
            nos dados fornecidos.
          </li>
          <li>
            Comercial: os dados são usados para personalizar o conteúdo
            oferecido e gerar subsídio à plataforma para a melhora da qualidade
            no funcionamento dos serviços.
          </li>
          <li>
            Previsão do perfil do usuário: tratamento automatizados de dados
            pessoais para avaliar o uso na plataforma.
          </li>
          <li>
            Dados de cadastro: para permitir o acesso do usuário a determinados
            conteúdos da plataforma, exclusivo para usuários cadastrados
          </li>
          <li>
            Dados de contrato: conferir às partes segurança jurídica e facilitar
            a conclusão do negócio.
          </li>
          <li>
            O tratamento de dados pessoais para finalidades não previstas nesta
            Política de Privacidade somente ocorrerá mediante comunicação prévia
            ao usuário, de modo que os direitos e obrigações aqui previstos
            permanecem aplicáveis.
          </li>
        </ol>
        <strong>
          SEÇÃO 4 - POR QUANTO TEMPO OS DADOS PESSOAIS FICAM ARMAZENADOS?
        </strong>
        <hr />
        <div>
          <p>
            Os dados pessoais do usuário e visitante são armazenados pela
            plataforma durante o período necessário para a prestação do serviço
            ou o cumprimento das finalidades previstas no presente documento,
            conforme o disposto no inciso I do artigo 15 da Lei 13.709/18.
          </p>
        </div>
        <div>
          <p>
            Os dados podem ser removidos ou anonimizados a pedido do usuário,
            excetuando os casos em que a lei oferecer outro tratamento.
          </p>
        </div>
        <div>
          <p>
            Ainda, os dados pessoais dos usuários apenas podem ser conservados
            após o término de seu tratamento nas seguintes hipóteses previstas
            no artigo 16 da referida lei:
          </p>
        </div>
        <ol type="I">
          <li>
            Cumprimento de obrigação legal ou regulatória pelo controlador;
          </li>
          <li>
            Estudo por órgão de pesquisa, garantida, sempre que possível, a
            anonimização dos dados pessoais;
          </li>
          <li>
            Transferência a terceiro, desde que respeitados os requisitos de
            tratamento de dados dispostos nesta Lei;
          </li>
          <li>
            Uso exclusivo do controlador, vedado seu acesso por terceiro, e
            desde que anonimizados os dados.
          </li>
        </ol>
        <strong>SEÇÃO 5 - SEGURANÇA DOS DADOS PESSOAIS ARMAZENADOS</strong>
        <hr />
        <div>
          <p>
            A plataforma se compromete a aplicar as medidas técnicas e
            organizativas aptas a proteger os dados pessoais de acessos não
            autorizados e de situações de destruição, perda, alteração,
            comunicação ou difusão de tais dados.
          </p>
        </div>
        <div>
          <p>
            Os dados relativos a cartões de crédito são criptografados usando a
            tecnologia "secure socket layer" (SSL) que garante a transmissão de
            dados de forma segura e confidencial, de modo que a transmissão dos
            dados entre o servidor e o usuário ocorre de maneira cifrada e
            encriptada.
          </p>
        </div>
        <div>
          <p>
            A plataforma não se exime de responsabilidade por culpa exclusiva de
            terceiros, como em caso de ataque de hackers ou crackers, ou culpa
            exclusiva do usuário, como no caso em que ele mesmo transfere seus
            dados a terceiros.
          </p>
        </div>
        <div>
          <p>
            Os dados pessoais armazenados são tratados com confidencialidade,
            dentro dos limites legais. No entanto, podemos divulgar suas
            informações pessoais caso sejamos obrigados pela lei para fazê-lo ou
            se você violar nossos Termos de Serviço.
          </p>
        </div>
        <strong>SEÇÃO 6 - COMPARTILHAMENTO DOS DADOS</strong>
        <hr />
        <div>
          {" "}
          <p>
            O compartilhamento de dados do usuário ocorre apenas com os dados
            referentes a publicações realizadas pelo próprio usuário, tais ações
            são compartilhadas publicamente com os outros usuários.
          </p>
        </div>
        <div>
          <p>
            Os dados do perfil do usuário são compartilhados publicamente em
            sistemas de busca e dentro da plataforma, sendo permitido ao usuário
            modificar tal configuração para que seu perfil não apareça nos
            resultados de busca de tais ferramentas.
          </p>
        </div>
        <strong>
          SEÇÃO 6 - OS DADOS PESSOAIS ARMAZENADOS SERÃO TRANSFERIDOS A
          TERCEIROS?
        </strong>
        <div>
          {" "}
          <p>Os dados pessoais não podem ser compartilhados </p>
        </div>
        <hr />
        <strong>SEÇÃO 07 – COOKIES OU DADOS DE NAVEGAÇÃO</strong>
        <div>
          <p>
            Os cookies referem-se a arquivos de texto enviados pela plataforma
            ao computador do usuário e visitante e que nele ficam armazenados,
            com informações relacionadas à navegação no site. Tais informações
            são relacionadas aos dados de acesso como local e horário de acesso
            e são armazenadas pelo navegador do usuário e visitante para que o
            servidor da plataforma possa lê-las posteriormente a fim de
            personalizar os serviços da plataforma.
          </p>
        </div>
        <div>
          <p>
            O usuário e o visitante da plataforma WeWonder manifesta conhecer e
            aceitar que pode ser utilizado um sistema de coleta de dados de
            navegação mediante à utilização de cookies.
          </p>
        </div>
        <div>
          <p>
            O cookie persistente permanece no disco rígido do usuário e
            visitante depois que o navegador é fechado e será usado pelo
            navegador em visitas subsequentes ao site. Os cookies persistentes
            podem ser removidos seguindo as instruções do seu navegador. Já o
            cookie de sessão é temporário e desaparece depois que o navegador é
            fechado. É possível redefinir seu navegador da web para recusar
            todos os cookies, porém alguns recursos da plataforma podem não
            funcionar corretamente se a capacidade de aceitar cookies estiver
            desabilitada.
          </p>
        </div>
        <strong>SEÇÃO 8 - CONSENTIMENTO</strong>
        <hr />
        <div>
          <p>
            Ao utilizar os serviços e fornecer as informações pessoais na
            plataforma, o usuário está consentindo com a presente Política de
            Privacidade.
          </p>
        </div>
        <div>
          <p>
            O usuário, ao cadastrar-se, manifesta conhecer e pode exercitar seus
            direitos de cancelar seu cadastro, acessar e atualizar seus dados
            pessoais e garante a veracidade das informações por ele
            disponibilizadas.
          </p>
        </div>
        <div>
          <p>
            O usuário tem direito de retirar o seu consentimento a qualquer
            tempo, para tanto deve entrar em contato através do e-mail
            gametechcanaa@gmail.com ou por correio enviado ao seguinte endereço:
            R. Prof. Lázaro Costa, n° 348 - Vila Canaã, Goiânia - GO, 74415-420
          </p>
        </div>
        <strong>SEÇÃO 9 - ALTERAÇÕES PARA ESSA POLÍTICA DE PRIVACIDADE</strong>
        <hr />
        <div>
          <p>
            Reservamos o direito de modificar essa Política de Privacidade a
            qualquer momento, então, é recomendável que o usuário e visitante
            revise-a com frequência.
          </p>
        </div>
        <div>
          {" "}
          <p>
            As alterações e esclarecimentos vão surtir efeito imediatamente após
            sua publicação na plataforma. Quando realizadas alterações os
            usuários serão notificados. Ao utilizar o serviço ou fornecer
            informações pessoais após eventuais modificações, o usuário e
            visitante demonstra sua concordância com as novas normas.
          </p>
        </div>
        <div>
          <p>
            Diante da fusão ou venda da plataforma à outra empresa os dados dos
            usuários podem ser transferidos para os novos proprietários para que
            a permanência dos serviços oferecidos.
          </p>
        </div>
        <strong>SEÇÃO 10 – JURISDIÇÃO PARA RESOLUÇÃO DE CONFLITOS</strong>
        <hr />
        <div>
          <p>
            Para a solução de controvérsias decorrentes do presente instrumento
            será aplicado integralmente o Direito brasileiro.
          </p>
        </div>
        <div>
          <p>
            Os eventuais litígios deverão ser apresentados no foro da comarca em
            que se encontra a sede da empresa.
          </p>
        </div>
      </Styled.Main>
    </Styled.PageTeacherForm>
  );
};

export default Terms;
