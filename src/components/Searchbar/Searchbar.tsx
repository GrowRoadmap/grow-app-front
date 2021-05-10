import React, { ReactElement } from 'react';
import { Wrapper } from './styles';
import { Cascader, Form } from 'antd';

interface SearchbarProps {
    placeholder: string;
    options: Option[];
}

type Option = {
    value: string;
    label: string;
};

export function Searchbar({
    placeholder,
    options,
    ...props
}: SearchbarProps): ReactElement {
    function onChange(value: string[], selectedOptions: Option[]) {
        console.log(value, selectedOptions);
    }

    function filter(inputValue: string, path: Option[]) {
        return path.some(
            (option) =>
                option.label.toLowerCase().indexOf(inputValue.toLowerCase()) >
                -1
        );
    }
    return (
        <Wrapper>
            <Cascader
                data-testid='Search'
                options={options}
                onChange={onChange}
                placeholder={placeholder}
                showSearch={{ filter }}
            />
        </Wrapper>
    );
}
