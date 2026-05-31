import CDB_img from "../assets/Projetos/CDB.png";


// Não mexa em nada aqui professor, o filtro é para futuramente quando ter mais projetos filtrar por categoria.


export const projetos = [
    {
        id: 1,
        img: CDB_img,
        nome: "Site CIDADE BAIXA ROLEPLAY",
        descricao: "Um site para um servidor de minecraft bedrock roleplay, onde as pessoas podem saber sobre o servidor, ver as regras, wiki completa do servidor e notícias do servidor.",
        link: "",
        filtro: ["Gaming", "Web"],
        tecnologias: [
            {
                nome: "React",
                cor: "#9d31dbd0"
            },
            {
                nome: "CSS",
                cor: "#00b7c4"
            },
            {
                nome: "GitHub",
                cor: "#353535"
            },
            {
                nome: "three.js",
                cor: "#119400"
            }
        ]
    },
];

export const projetos_detalhados = [
    {
        id: 1,
        nome: "Site CIDADE BAIXA ROLEPLAY",
        descricaoCompleta: "Um site para um servidor de minecraft bedrock roleplay, focado em fornecer informações detalhadas sobre o servidor, incluindo regras, wiki e notícias. O projeto foi desenvolvido utilizando React para a construção da interface, CSS para estilização e a biblioteca three.js para elementos gráficos interativos. O objetivo principal do site é criar uma plataforma informativa e envolvente para os jogadores do servidor, facilitando o acesso a informações essenciais e promovendo a comunidade de roleplay.",
        objetivo: "Facilitar o acesso a informações sobre o servidor de Minecraft Bedrock Cidade Baixa Roleplay, promovendo a comunidade informações sobre o Roleplay e Wiki completa do servidor.",
        funcionalidades: ["Conexão com API externa para notícias", "Sistema de navegação intuitivo", "Design responsivo para dispositivos móveis"],
        desafios: "Exportação de modelos 3D para web, integração com APIs externas e otimização de desempenho para garantir uma experiência fluida.",
        aprendizados: "Desenvolvimento de habilidades em React, CSS e three.js, além de experiência prática na criação de interfaces web interativas e responsivas.",
        github: null,
        deploy: null,
        img: CDB_img
    },
    // ... outros projetos
];