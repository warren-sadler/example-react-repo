import React from 'react'

/**
 * Props for the Example component.
 */
export interface ExampleProps {
    /**
     * The text to display.
     * @default "Hello, World!"
     * @type {string}
     * @memberof ExampleProps
     * @public
     * @required
     */
    message: string
}
/**
 *
 * @param props {ExampleProps}
 * @returns
 */
export const Example: React.FC<ExampleProps> = ({
    message = 'Hello, World!',
}) => {
    return (
        <div>
            <h2 data-testid="exampleHeader">Example component</h2>
            <p data-testid="exampleMessage">{message}</p>
        </div>
    )
}
