import React, { Fragment } from "react";

const LastUpdate = () => {

    var d = new Date();
    var n = d.toJSON();

    return (
    <Fragment>
        <p className="text-center mt-5">
        Last Update :: {n}
        </p>
    </Fragment>
    );
};

export default LastUpdate;