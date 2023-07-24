import { Metadata } from 'next';

type Props = {
    params: {
        id: string;
    };
};

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) throw new Error('Ошибка загрузки постов!');

    return response.json();
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    return { title: `Blog #${id}` };
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}
