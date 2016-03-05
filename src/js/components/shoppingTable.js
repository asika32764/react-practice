/**
 * Part of react project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var React = require('react');

var ProductTable = require('./productTable.js');
var SearchBar = require('./searchBar.js');

var ShopptingTable = React.createClass({
    getInitialState: function()
    {
        return {
            filterText: '',
            stockOnly: false
        }
    },
    render: function()
    {
        return (
            <div>
                <h1>Hello Shopping</h1>
                <SearchBar onChangeSearchBar={this.onChangeSearchBar} />
                <ProductTable
                    filterText={this.state.filterText}
                    stockOnly={this.state.stockOnly}
                    products={this.props.products}
                />
            </div>
        )
    },
    onChangeSearchBar: function(filterText, stockOnly)
    {
        this.setState({
            filterText: filterText,
            stockOnly: stockOnly
        });
        
        console.log(this.state);
    }
});

module.exports = ShopptingTable;
