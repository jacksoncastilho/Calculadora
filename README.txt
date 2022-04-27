Calculadora


{data-num
https://pt.stackoverflow.com/questions/362345/qual-a-diferen%C3%A7a-entre-o-vo-value-object-e-o-dto-data-transfer-object
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/data-*

Qual a diferença entre o VO (Value Object) e o DTO (Data Transfer Object)

DTO, como o próprio nome diz, é um objeto com dados sendo transferidos entre memória e persistência. Ele costuma ser uma classe com todos os campos de um modelo e geralmente não tem comportamentos, só estado. Pode ser grande e complexo e não costuma ter identidade, ou seja, se mudar algo nele, tudo bem, continua sendo o mesmo objeto, portanto semântica típica de referência. Por exemplo, um cliente ou produto poderiam ser representados em determinado momento da aplicação com o DTO. É um objetivo de mecanismo.

Value Object é algo bem mais simples e que representa um valor único, por exemplo um telefone, um e-mail, uma quantidade. Ele tem identidade e mudar alguma coisa nele passa ser outro objeto, portanto semântica típica de valor. Nas linguagens que permitem, de fato ele é por valor e não uma classe. Há casos que pode ter comportamento.
}