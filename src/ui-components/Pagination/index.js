import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "../Typography/Typography";
import { pageCount } from "../Pagination/paginationConstant";
import Pagination from "react-responsive-pagination";
import translate from "../../i18n/translate";
import { RECORDS_PER_PAGE } from "../../constants/words";
import "./styles.scss";
import NormalDropDown from "../NormalDropDown";

class PaginationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: this.props.totalPages,
      recordsPerPage: RECORDS_PER_PAGE,
      recordsCount: [25, 50, 100, 150, 200],
      startCount: 1,
      totalCount: this.props.totalCount,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      totalPages: props.totalPages,
      totalCount: props.totalCount,
    });
  }

  getCurrentRows(rowsPerPage, currPage, rowCount) {
    var from = rowsPerPage * currPage - rowsPerPage + 1;
    var to = rowsPerPage * currPage > rowCount ? rowCount : rowsPerPage * currPage;
    return from + " - " + to + " of " + rowCount;
  }
  updateRecordsPerPage(value) {
    this.setState({ recordsPerPage: value });
    let pageObject = { recordsPerPage: value, currentPage: this.state.currentPage };
    this.props.onRecordPageUpdate(pageObject);
  }
  updateCurrentPage(newPage) {
    this.setState({ currentPage: newPage });
    let pageObject = { recordsPerPage: this.state.recordsPerPage, currentPage: newPage };
    this.props.onPageChange(pageObject);
  }
  render() {
    return (
      <div className="paginationWrapper">
        <div className="resultWrapper">
          <Typography text={translate("resultsPerPage")} size="regular12" color="font-grey-dark" />

          <div className="count-list-dropdown marginLeft8">
            <NormalDropDown
              positionUp={true}
              list={pageCount}
              defaultValue={this.state.recordsPerPage}
              type="Enabled"
              handleChange={(val) => this.updateRecordsPerPage(val)}
              size="small-dropdown"
            />
          </div>
        </div>
        <Typography
          text={this.getCurrentRows(this.state.recordsPerPage, this.state.currentPage, this.state.totalCount)}
          size="regular12"
          color="font-grey-dark"
        />
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

PaginationBar.propTypes = {
  props: PropTypes.object,
};

export default PaginationBar;
