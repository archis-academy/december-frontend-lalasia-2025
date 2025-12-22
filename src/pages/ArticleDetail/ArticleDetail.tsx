import { useParams } from "react-router"

export default function ArticleDetail() {
    const { id } = useParams<{ id: string }>();
    return (
        <div>ArticleDetail: {id}</div>
    )
}