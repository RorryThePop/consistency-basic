
interface IPosts {
    name: string;
    lastName: string;
    age: string[]
}

function Posts(props: IPosts) {

    const {lastName} = props
    return (
        <div>Posts</div>
    )
}

export default Posts