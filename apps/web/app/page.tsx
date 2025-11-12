'use client';

import {Button} from "@workspace/ui/components/button"
import {useCountStore} from "@workspace/zustand"

export default function Page() {
    const {count, increment, decrement} = useCountStore();
    return (
        <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Cnt : {count}</h1>
                <Button variant="outline" className="" size="sm" onClick={increment}>Increment</Button>
                <Button variant="outline" className="" size="sm" onClick={decrement}>Decrement</Button>
            </div>
        </div>
    )
}
