🌟 Sims 2 Asp Calculator

📝 About the Project

This is a Front-end project that simulates the logic for assigning Primary and Secondary Aspirations from the The Sims 2 game, combining Sim personality traits, horoscope sign, and interests.
The design has been carefully crafted to evoke the nostalgic and technical interface of The Sims 2, utilizing neon colors, gradients, transparency effects, and a plumbob-like aesthetic.

🖥️ Technologies Used

The project is built entirely using the fundamental web technologies:
HTML5, CSS3 and JavaScript.

⚙️ How the Calculation Works

The aspiration is determined by a weighted scoring system based on three main factors:

1. Primary Aspiration (Sign)
The Primary Aspiration is fixed by the Zodiac sign, according to the canonical logic of The Sims 2.

3. Weighted Score (Secondary)
Scores for the 6 aspiration categories (Family, Romance, Knowledge, Popularity, Fortune, Pleasure) are calculated by summing the following weights:
Sign Bonus: Each sign adds weight points (e.g., Aries has weight in Popularity and Pleasure).
Hobby: The "One True Hobby" adds focused points (e.g., Cuisine adds points in Family and Pleasure).
Personality and Interests: The 5 personality points (and the 19 interests) add aspiration points based on defined rules (e.g., high Nice adds points to Family; interest in Politics adds points to Fortune).

4. Secondary Aspiration Selection
All aspirations are scored.
The Secondary Aspiration is chosen as the one with the highest remaining score after the removal of the Primary Aspiration from the candidate list.
The Primary and Secondary Aspirations will never be the same.

Built by nathalymarsura,
inspired by the nostalgic world of The Sims 2.
