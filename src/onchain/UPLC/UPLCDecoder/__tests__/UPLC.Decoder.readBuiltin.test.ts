import UPLCDecoder from ".."
import UPLCEncoder from "../../UPLCEncoder"
import UPLCProgram from "../../UPLCProgram"
import UPLCVersion from "../../UPLCProgram/UPLCVersion"
import Application from "../../UPLCTerms/Application"
import Builtin from "../../UPLCTerms/Builtin"
import Force from "../../UPLCTerms/Force"
import UPLCConst from "../../UPLCTerms/UPLCConst"


describe("readTerm( Builtin )", () => {

    describe("ifThenElse", () => {

        test("simple", () => {

            const ifThenElseProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                Builtin.ifThenElse
            );
    
            const ifThenElseActualProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                new Force( Builtin.ifThenElse )
            );
    
            expect(
                UPLCDecoder.parse(
                    UPLCEncoder.compile( ifThenElseProgr ).toBuffer().buffer,
                    "flat"
                )
            ).toEqual(
                ifThenElseActualProgr
            );

        });

        test("single Application", () => {
            
            const ifThenElseProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                new Application(
                    Builtin.ifThenElse,
                    UPLCConst.bool( true )
                )
            );
    
            const ifThenElseActualProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                new Application(
                    new Force( Builtin.ifThenElse ),
                    UPLCConst.bool( true )
                )
            );
    
            expect(
                UPLCDecoder.parse(
                    UPLCEncoder.compile( ifThenElseProgr ).toBuffer().buffer,
                    "flat"
                )
            ).toEqual(
                ifThenElseActualProgr
            );

        });

        test("double Application", () => {
            
            const ifThenElseProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                new Application(
                    new Application(
                        Builtin.ifThenElse,
                        UPLCConst.bool( true )
                    ),
                    UPLCConst.int( 69 )
                )
            );
    
            const ifThenElseActualProgr = new UPLCProgram(
                new UPLCVersion( 1, 0, 0 ),
                new Application(
                    new Application(
                        new Force( Builtin.ifThenElse ),
                        UPLCConst.bool( true )
                    ),
                    UPLCConst.int( 69 )
                )
            );
    
            expect(
                UPLCDecoder.parse(
                    UPLCEncoder.compile( ifThenElseProgr ).toBuffer().buffer,
                    "flat"
                )
            ).toEqual(
                ifThenElseActualProgr
            );

        });


    })

})