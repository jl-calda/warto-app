const Post = () => {
  return (
    <section>
      <form className="p-4 border">
        <div className="flex flex-col space-y-2">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="status">status</label>
          <input type="text" name="status" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="currency">currency</label>
          <input type="text" name="currency" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="date">date</label>
          <input type="data" name="date" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="block-number">block-number</label>
          <input type="text" name="block-number" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="postal-code">postal-code</label>
          <input type="text" name="postal-code" id="title" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="unit-number">unit-number</label>
          <input type="text" name="unit-number" id="title" />
        </div>
      </form>
    </section>
  );
};

export default Post;
