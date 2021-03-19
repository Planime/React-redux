function withLoginCheck(WrapperComponent) {
    const NewComponent = () => {


        return <WrapperComponent />
    };

    return NewComponent
}

export default withLoginCheck