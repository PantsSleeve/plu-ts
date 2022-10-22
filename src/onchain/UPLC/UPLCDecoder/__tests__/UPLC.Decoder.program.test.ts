import UPLCDecoder from ".."


describe("decode program", () => {

    test("pmap", () => {

        console.log(
            UPLCDecoder.parse(
                Buffer.from(
                    "58d058ce0100003232323222253335734666444646464a666ae68cdc3a4000004294454ccd5cd19b87480080085280b1aab9e00235573a0026ea8ccc0248894ccd5cd1aba300113374a90010050992999ab9a300300113374a900019aba037500020162660080066ae88008d5d08009b874815000800ccc015d69bac002001149858dd8a4c46660044444646660106008002600600200466008006004497ac022233574060080046006002464600446600400400246004466004004002444a666aae7c004400c4cc008d5d08009aba200101",
                    "hex"
                )
            )
        );
        
    })
})