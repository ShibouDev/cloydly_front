import { ArrowDown } from '@/assets/svg';
import FilterItem from '@/components/simple/filterItem';
import { useState } from 'react';
import * as Styled from './style';
const Filter = () => {
    const [open, setOpen] = useState<boolean>(false);
    const toogle = () => {
        setOpen(value => !value);
    };
    return (
        <Styled.FilterWrapper onClick={toogle}>
            <Styled.FilterContainer>
                <Styled.FilterTitle>Filter</Styled.FilterTitle>
                <Styled.Tooltip rotate={open ? true : false}>
                    <ArrowDown />
                </Styled.Tooltip>
            </Styled.FilterContainer>
            {open &&
                <Styled.FilterItems>
                    <FilterItem opened/>
                </Styled.FilterItems>
            }
        </Styled.FilterWrapper>
    );
};
export default Filter;