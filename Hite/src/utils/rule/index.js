export async function getRulesByProp(propArr) {
    let needRules = {};

    for (let prop of propArr) {
        let arr = prop.split(".");
        if(arr.length === 1) {
            const commonFile = await getModuleByFileName("./common");
            needRules[prop] = commonFile.default[prop];
        } else {
            let [fileName, propName] = arr;
            fileName = `./${fileName}`;
            const ruleFile = await getModuleByFileName(fileName);
            needRules[propName] = ruleFile.default[propName];
        }
    }
    return needRules;
}

export async function getModuleByFileName(fileName, fileExt=".js") {
    return import(`${fileName}${fileExt}`);
}

