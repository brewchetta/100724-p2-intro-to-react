function Dog( props ) {

    console.log( props )

    const dogNamePTags = props.doggos.map(dogName => <p>{ dogName }</p>)

    return (
        <div>
            <h2>Doggos are all good</h2>

            { dogNamePTags }
        </div>
    )

}

export default Dog