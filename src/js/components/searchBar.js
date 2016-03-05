/**
 * Part of react project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var React = require('react');

var SearchBar = React.createClass({
    render: function()
    {
        return (
            <form action="">
                <input
                    type="text"
                    ref="filterText"
                    onChange={this.onInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        ref="stockOnly"
                        onChange={this.onInputChange}
                    /> Only show
                </p>
            </form>
        )
    },
    onInputChange: function(event)
    {
        this.props.onChangeSearchBar(this.refs.filterText.value, this.refs.stockOnly.checked);
    }
});

module.exports = SearchBar;
