import { Form } from '@inertiajs/react';

export function App() {
    return (
        <Form action="/login" method="post">
            {({ processing, errors }) => (
                <>
                    <input name="email" />
                    {errors.email && <p>{errors.email}</p>}
                    <button disabled={processing}>Log in</button>
                </>
            )}
        </Form>
    );
}
