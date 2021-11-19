const formatNumber = (number) => {
    const formatNumber = new Intl.NumberFormat("id-ID")
    return formatNumber.format(number)
}

export default formatNumber