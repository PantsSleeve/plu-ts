import pstruct from "../../../PTypes/PStruct";
import { bs } from "../../../Term/Type";

// plutarch implementation https://github.com/Plutonomicon/plutarch-plutus/blob/f0805033ec7ad83643ba3c90902673ba6e5b90c3/Plutarch/Api/V1/Tx.hs#L39
// no idea why this is not an alias
const PTxId = pstruct({
    PTxId: { txId: bs }
})

export default PTxId;