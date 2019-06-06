import React, { Component } from 'react';
import ReactDataGrid from "react-data-grid";
import { Editors } from "react-data-grid-addons";

const { DropDownEditor } = Editors;

const phoneTypes = [
    { id: "mobile", value: "Mobile" },
    { id: "work", value: "Work" },
    { id: "personal", value: "Personal" },
    { id: "Home", value: "Home" }
];
const PhoneTypeEditor = <DropDownEditor options={ phoneTypes } />;

const columns = [
    { key: "firstName", name: "FirstName" },
    { key: "lastName", name: "LastName" },
    { key: "type", name: "Type", editor: PhoneTypeEditor },
    { key: "number", name: "Number" },
    { key: "note", name: "Note" }
];

class ContactPage extends Component {
    state = {
        data: this.props.data
    };

    componentWillMount() {
        const contacts  = this.state.data;

        const temp = contacts.map(c => {
            return c.phones.map(p => {
                return {
                    firstName: c.firstName,
                    lastName: c.lastName,
                    type: p.type,
                    number: p.number,
                    note: c.note
                }
            });
        });

        console.log(temp[0]);

        this.setState({ data: temp[0] })
    }

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.data.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { data: rows };
        });
    };

    render() {
        return (
            <div>
                <ReactDataGrid
                    columns={ columns }
                    rowGetter={ i => this.state.data[i] }
                    rowsCount={ this.state.data.length }
                    onGridRowsUpdated={ this.onGridRowsUpdated }
                    enableCellSelect={ true }
                />
            </div>
        );
    }
}

export default ContactPage;