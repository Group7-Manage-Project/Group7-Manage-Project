exports.nested = function (values,res){
    const hasil = values.reduce((arrCate,item)=>{
        if (arrCate[item.CATEGORY_NAME]){
            const group = arrCate[item.CATEGORY_NAME]
            if (Array.isArray(group.TITLE)){
                group.TITLE.push(item.TITLE);
            }
            else{
                group.TITLE = [group.TITLE, item.TITLE];
            }
        }
        else{
            arrCate[item.CATEGORY_NAME] = item;
        }
        return arrCate;
    },{});

    var data = {
        'JSON' : hasil
    };

    res.json(data);
    res.end();
}