import React, { Component } from "react";
import PropTypes from "prop-types";
import DropDownWithoutLable from "../DropDownWithoutLabel";
import Pagination from "react-responsive-pagination";
import translate from "../../i18n/translate";
import { RECORDS_PER_PAGE } from "../../constants/words";
import { pageCount } from "./paginationConstant";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 5,
      recordsPerPage: RECORDS_PER_PAGE,
      recordsCount: [5, 10, 20, 25, 50],
      startCount: 1,
      totalCount: 50,
    };
  }

  getCurrentRows(rowsPerPage, currPage, rowCount) {
    var from = rowsPerPage * currPage - rowsPerPage + 1;
    var to = rowsPerPage * currPage > rowCount ? rowCount : rowsPerPage * currPage;
    return from + " - " + to + " of " + rowCount;
  }
  updateRecordsPerPage(value) {
    this.setState({ recordsPerPage: value });
    let pageObject = { recordsPerPage: value, currentPage: this.state.currentPage };
    //this.props.onRecordPageUpdate(pageObject);
  }
  updateCurrentPage(newPage) {
    this.setState({ currentPage: newPage });
    let pageObject = { recordsPerPage: this.state.recordsPerPage, currentPage: newPage };
    //this.props.onPageChange(pageObject);
  }
  render() {
    return (
      <div className="paginationWrapper">
        <div className="resultWrapper">
          <div className="title">Results Per Page</div>
          <div className="dropdownResult">
            <DropDownWithoutLable list={pageCount} />
          </div>
        </div>
        <div className="">
          {this.getCurrentRows(this.state.recordsPerPage, this.state.currentPage, this.state.totalCount)}
        </div>
        <div className="">
          <Pagination
            current={this.state.currentPage}
            total={this.state.totalPages}
            onPageChange={(newPage) => this.updateCurrentPage(newPage)}
          />
        </div>
      </div>
    );
  }
}

PaginationBar.propTypes = {};

export default PaginationBar;
