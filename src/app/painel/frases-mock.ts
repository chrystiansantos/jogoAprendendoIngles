//aqui importo a classe que criei
import { Frase } from '../shared/frase.model';
//const FRASES: Array<Frase> = [] posso utilizar essas duas sintaxes pois e um array de frases
//aqui adiciono valores nela
//export fara com que consigfa exporta lo para outros components
export const FRASES: Frase[] = [
    //new Frase("I like coca", "Eu gosto de coca"),
    { fraseEng: "I like to learn", frasePtBr: "Eu gosto de aprender" },
    { fraseEng: "I watch Tv", frasePtBr: "Eu assisto Tv" },
    { fraseEng: "How are you ?", frasePtBr: "Como vai voce ?" },
    { fraseEng: "I eat breaad", frasePtBr: "Eu como pao" },
];
