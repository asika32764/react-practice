/**
 * Part of react project.
 *
 * @copyright  Copyright (C) 2016 {ORGANIZATION}. All rights reserved.
 * @license    GNU General Public License version 2 or later.
 */

var React = require('react');

var ProductRow = React.createClass({
    render: function()
    {
        return (
            <tr>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.price}
                </td>
            </tr>
        )
    }
});

module.exports = ProductRow;
