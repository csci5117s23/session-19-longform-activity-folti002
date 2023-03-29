export default function FlashcardBuilder({ onAdd }) {
  return (
    <>
      <h1> Submit new flashcard: </h1>
      <div>
        <form method="post" onSubmit={onAdd}>
          <label type="reset">
            Question: <input name="front" />
          </label>
          <label type="reset">
            Answer: <input name="back" />
          </label>
          <button type="submit"> Submit new flashcard! </button>
        </form>
      </div>
    </>
  );
}