import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleTextChange = (e) => {
        if (e.target.value === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (e.target.value !== "" && e.target.value.trim().length < 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };

            handleAdd(newFeedback);
            setBtnDisabled(true);
            setText("");
        }
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect
                    selected={rating}
                    select={(rating) => {
                        setRating(rating);
                    }}
                />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>

                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
