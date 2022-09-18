let d = true;
switch (typeof d) {
    case "string":
        result = "строка"
        break;
    case "number":
        result = "число"
        break;
    case "BigInt":
        result = "число"
        break;
    case "boolean":
        result = "логический тип"
        break;
    default:
        result = "тип не определен"
}
