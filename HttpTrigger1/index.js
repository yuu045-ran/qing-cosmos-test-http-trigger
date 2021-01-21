module.exports = async function (context, req, cosmosnamein, cosmosnameout) {

    const responseMessage = "The item with id " + req.query.id + " and partition " + req.query.partitionKeyValue + " has incremented 1 weight from its previous weight " + context.bindings.cosmosnamein.weight
        
    const newWeight = context.bindings.cosmosnamein.weight+1;
    context.bindings.cosmosnameout = JSON.stringify([
        {
            "id": req.query.id,
            "weight": newWeight,
            "partition": req.query.partitionKeyValue,
            "first": req.query.first       
        }]);

    context.res = {

        body: responseMessage
    };
}