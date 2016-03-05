/**
 * Part of react project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var React = require('react');

var ProductCategoryRow = require('./ProductCategoryRow.js');
var ProductRow = require('./ProductRow.js');

var productTable = React.createClass({
    render: function()
    {
        var rows = [];
        var lastCategory = null;
        var filterText = this.props.filterText;
        var stockOnly = this.props.stockOnly;

        this.props.products.forEach(function(product)
        {
            if (product.name.toLowerCase().indexOf(filterText) == -1 || stockOnly && product.stocked)
            {
                return;
            }

            if (lastCategory != product.category)
            {
                rows.push(
                    <ProductCategoryRow category={product.category} />
                );

                lastCategory = product.category;
            }

            rows.push(<ProductRow name={product.name} price={product.price} />);
        });

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
});

module.exports = productTable;