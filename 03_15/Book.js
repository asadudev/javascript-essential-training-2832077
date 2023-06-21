class Books {
  constructor(
    Title,
    Rating,
    Latest_Edition,
    Publisher,
    Publish_year,
    Current_page,
    Total_page,
    Status,
  ) {
    this.Title = Title;
    this.Rating = Rating;
    this.Latest_Edition = Latest_Edition;
    this.Publisher = Publisher;
    this.Publish_year = Publish_year;
    this.Current_page = Current_page;
    this.Total_page = Total_page;
    this.Status = Status
  }
  updateCurrentPage(newCurrentPage) {
    this.Current_page = newCurrentPage;
  }
  updateStatus(newStatus) {
    this.Status = newStatus;
  }

}

export default Books;
