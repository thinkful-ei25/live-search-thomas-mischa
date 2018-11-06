import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {
            searchTerm: '',
            listOfChars: this.props.characters
        }
    }

    handleChange(e) {

        this.setState ({
            searchTerm: e.target.value,
            // listOfChars: this.props.characters.filter(char => char.name.toLowerCase()
            //                             .includes(e.target.value.toLowerCase()))
        })
    }

    render() {
        const jsArray = this.props.characters
        const newList = jsArray.filter(character => {
            for (let key in character) {
                if (character[key].toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                    return character;
                }
            }
        });
        // console.log(newList)
        // const chars = this.props.characters.filter(char => char.name.toLowerCase()
        //                             .includes(this.state.searchTerm.toLowerCase()))
        return (
            <div className="live-search">
                <SearchForm onUpdate={(e) => this.handleChange(e)}/>
                <CharacterCount count={newList.length} />
                <CharacterList characters={newList} />
            </div>
        );
    }
}
