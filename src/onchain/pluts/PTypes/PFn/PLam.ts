import PFn from ".";
import BasePlutsError from "../../../../errors/BasePlutsError";
import Cloneable, { isCloneable } from "../../../../types/interfaces/Cloneable";
import { Tail } from "../../../../utils/ts";
import PType from "../../PType"
import Term from "../../Term";
import PData from "../PData";

export default class PLam<A extends PType, B extends PType > extends PType
    implements Cloneable<PLam<A,B>>
{
    // phantom
    private _input: A
    private _output: B

    constructor( input: A = new PType as A, output: B = new PType as B )
    {
        super();
        this._input = input;
        this._output = output;
    }

    clone(): PLam<A,B>
    {
        return new PLam(
            isCloneable( this._input ) ? this._input.clone() : this._input ,
            isCloneable( this._output ) ? this._output.clone() : this._output 
        ) as PLam<A,B>;
    }

}

export type  PLamIn< PLamInstance extends PLam< PType, PType > > = PLamInstance extends PLam< infer PIn, any >  ? PIn  : never;
export type PLamOut< PLamInstance extends PLam< PType, PType > > = PLamInstance extends PLam< any, infer POut > ? POut : never;

export type TermFn<Ins extends [ PType, ...PType[] ] , Out extends PType> =
    Out extends PLam<infer A extends PType, infer B extends PType> ? TermFn<[ Ins[0], ...Tail<Ins> , A ], B> :
    Ins extends [ infer PInstance extends PType ] ? Term<PLam<PInstance, Out>> & { $: ( input: Term<PInstance> ) => Term<Out> } :
    Ins extends [ infer PInstance extends PType, ...infer RestIns extends [ PType, ...PType[] ] ] ?
        Term<PLam<PInstance,PFn<RestIns, Out>>>
        & { $: ( input: Term< PInstance > ) => TermFn< RestIns, Out > } :
    never

export type UnTermLambda< LamTerm extends Term<PLam<PType, PType>> > =
    LamTerm extends Term<PLam<infer In extends PType, infer Out extends PType >> ? PLam< In, Out > :
    never;