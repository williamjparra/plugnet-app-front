const dateFormater = (date) => {
    const dateExt = /((\d+)?[-Tt])+/
    
    var extract = dateExt.exec(date)[0].replace(/-/g,"/")
    
    return extract.replace("T", "")
}

export default dateFormater