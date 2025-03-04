import Term from ".."
import UPLCVar from "../../../UPLC/UPLCTerms/UPLCVar"
import { pgreaterInt } from "../../Prelude/Builtins"
import { pInt } from "../../PTypes/PInt"
import { phoist } from "../../Syntax"
import Type from "../Type"


describe("phoist", () => {

    it("throws on non closed terms", () => {

        expect( () => phoist(
            new Term(
                Type.Int,
                _dbn => new UPLCVar( 0 )
            )
        )).toThrow()

    })

    it("keeps Term's properties", () => {

        /**
         * ```pgreaterInt``` definition:
         * ```ts
         *  phoist(
         *      pfn<[ PInt , PInt ], PBool>([ Type.Int, Type.Int ], Type.Bool )(
         *          ( a: Term<PInt>, b: Term<PInt> ): TermBool => plessInt.$( b ).$( a )
         *      )
         *  )
         * ```
         */
        expect( () => pgreaterInt.$( pInt( 2 ) ) ).not.toThrow();

    })
})