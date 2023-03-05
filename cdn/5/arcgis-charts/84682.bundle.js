"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[84682],{84682:(e,a,o)=>{o.r(a),o.d(a,{additionalProperty:()=>f,anyOfValues:()=>L,bubbleChartValidateMsg:()=>x,default:()=>V,defaultError:()=>r,defaultInvalidChart:()=>d,duplicateSeriesID:()=>u,enumValues:()=>$,histogramEmptyField:()=>b,invalidSeriesType:()=>q,layerLoadFailure:()=>l,lineChartMarkersCannotExceedLimit:()=>I,lineChartSeriesAndMarkersCannotExceedLimit:()=>O,maxItems:()=>h,minItems:()=>g,minLength:()=>v,negativeValueInDataForLogTransformation:()=>n,negativeValueInDataForSqrtTransformation:()=>m,nonNumericAggregation:()=>c,or:()=>E,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>S,pieChartSlicesCannotExceedLimit:()=>y,queryError:()=>P,requiredProperty:()=>p,threePlusSeriesBarCountCannotExceedLimit:()=>t,twoSeriesBarCountCannotExceedLimit:()=>i,uniqueSeriesBarCountCannotExceedLimit:()=>s,whiteSpacePattern:()=>C});const r="Ocorreu um erro ao carregar o gráfico.",s="Há um total de ${ elementCount } barras para este gráfico. Os gráficos de barras com uma série são limitados a ${ totalLimit } barras. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",i="Os gráficos de barras com duas séries são limitados a ${ totalLimit } barras ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",t="Os gráficos de barras com três séries são limitados a ${ totalLimit } barras, ou ${ seriesLimit } barras por série. Escolha um campo Categoria com menos valores exclusivos ou aplique um filtro aos seus dados.",d="Ocorreu um erro ao criar o gráfico.",n="Não é possível aplicar transformação de log para valores negativos ou zero.",m="Não é possível aplicar transformação de raiz quadrada para valores negativos.",l="Ocorreu um erro ao carregar a camada. URL = ${ url }. D de item do portal = ${ portalItemId }.",u="${ dataPath } deve ser único. A série denominada ${ seriesName } tem um id (${ seriesID }) que já é usado por outra série.",c="${ dataPath } não deve realizar agregação sem contagem em campo não numérico.",p="${ dataPath } está sem uma propriedade denominada ${ missingProperty }.",v="${ dataPath } não deve ser menor que ${ limit } caracteres.",g="${ dataPath } não deve ter menos que ${ limit } itens.",h="${ dataPath } não deve ter mais de ${ limit } itens.",C="${ dataPath } deve ter pelo menos um caractere diferente de espaço em branco.",f="${ dataPath } não deve ter ${ additionalProperty }.",$="${ dataPath } deve ser igual a um destes valores permitidos: ${ allowedValues }.",L="${ dataPath } deve corresponder ao esquema de um destes: ${ schemaOptions }.",x="Gráficos de dispersão com símbolos proporcionais não são suportados. O tamanho padrão do símbolo foi aplicado.",P="Falha ao ler os dados de entrada.",b="Os histogramas exigem pelo menos dois valores numéricos.",q="O tipo de série esperado no índice${ seriesIndex } é '${ expectedType }' mas '${ receivedType }' foi recebido em seu lugar",E="ou",S="Certifique-se de que a soma total dos campos numéricos escolhidos retorne todos os valores positivos ou todos os valores negativos.",y="Há um total de ${ sliceCount } divisões neste gráfico. Os gráficos de pizza são limitados a ${ totalLimit } divisões. Escolha um campo de Categoria com menos valores únicos, adicione menos campos numéricos ou aplique um filtro aos seus dados.",O="Há um total de ${ seriesCount } séries e${ elementCount } pontos de dados neste gráfico. Os gráficos de linha são limitados a ${ seriesLimit } séries e ${ totalLimit } pontos de dados. Reduza o número de séries e/ou reagrupe ou filtre seus dados.",I="Os gráficos de linha são limitados a ${ totalLimit } pontos de dados. Filtre ou reagrupe seus dados e tente novamente.";var V={defaultError:r,uniqueSeriesBarCountCannotExceedLimit:s,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:t,defaultInvalidChart:"Ocorreu um erro ao criar o gráfico.",negativeValueInDataForLogTransformation:"Não é possível aplicar transformação de log para valores negativos ou zero.",negativeValueInDataForSqrtTransformation:"Não é possível aplicar transformação de raiz quadrada para valores negativos.",layerLoadFailure:l,duplicateSeriesID:u,nonNumericAggregation:c,requiredProperty:p,minLength:v,minItems:g,maxItems:h,whiteSpacePattern:C,additionalProperty:"${ dataPath } não deve ter ${ additionalProperty }.",enumValues:$,anyOfValues:L,bubbleChartValidateMsg:x,queryError:P,histogramEmptyField:"Os histogramas exigem pelo menos dois valores numéricos.",invalidSeriesType:q,or:"ou",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Certifique-se de que a soma total dos campos numéricos escolhidos retorne todos os valores positivos ou todos os valores negativos.",pieChartSlicesCannotExceedLimit:y,lineChartSeriesAndMarkersCannotExceedLimit:O,lineChartMarkersCannotExceedLimit:I}}}]);