import React from "react";

export default function Blog() {
    return (
        <div className="flex items-center justify-center ">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        React Interview Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                When Should you use context APT ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What is a custom hook? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature. 
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            What is useRef ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            What is useMemo ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) Reference. useMemo(calculateValue, dependencies)
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}
