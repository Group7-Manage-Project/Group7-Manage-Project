exports.nested = function (values,res){
    const hasil = values.reduce((arrDepart,item)=>{
        if (arrDepart[item.DEPARTMENT_NAME]){
            const group = arrDepart[item.DEPARTMENT_NAME]
            if (Array.isArray(group.CATEGORY_NAME)){
                group.CATEGORY_NAME.push(item.CATEGORY_NAME);
            }
            else{
                group.CATEGORY_NAME = [group.CATEGORY_NAME, item.CATEGORY_NAME];
            }
        }
        else{
            arrDepart[item.DEPARTMENT_NAME] = item;
        }
        return arrDepart;
    },{});

    var data = {
        'JSON' : hasil
    };

    res.json(data);
    res.end();
}