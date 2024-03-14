export const CartWidget = () => {
    return (
    <>
    <img src="data:image/png;base64,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"/>
    0
    </>
    )
}