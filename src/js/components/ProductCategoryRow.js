/**
 * Part of react project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var React = require('react');

var ProductCategoryRow = React.createClass({
    render: function()
    {
        return (
            <tr>
                <th>
                    {this.props.category}
                </th>
            </tr>
        )
    }
});

module.exports = ProductCategoryRow;
