/*
# LETS CREATE AND POPULATE DATABASE WITH SAMPLE DATA

- LET'S MAKE SURE WE KNOW THE DATA WE ARE USING
- SO WE WILL 
    - DELETE EXISTING TABLE 
    - CREATE IT AGAIN
    - WE WILL FILL IT WITH KNOWN DATA SET

## BEFORE ALL
*/

USE BOOKS_DB;



DROP TABLE IF EXISTS BOOKS;



CREATE TABLE BOOKS(

    TITLE VARCHAR(100) NOT NULL,

    AUTHOR VARCHAR(100) NOT NULL,

    COVER VARCHAR(250) NOT NULL DEFAULT('unknown.jpg'),

    PRICE DECIMAL(10,2) DEFAULT(0),

    RATING DECIMAL(5,2) NOT NULL,

    DESCRIPTION VARCHAR(2000) 

)

/*
## INSERT THE SAMPLE DATA
*/

INSERT 

    INTO BOOKS (TITLE, AUTHOR, COVER, PRICE, RATING, DESCRIPTION)

    VALUES   

    ('The God of Small Things', 'Arundhati Roy', 'https://m.media-amazon.com/images/I/81WEuClqKBL._SY466_.jpg', 399, 4.5, 'Booker Prize winner exploring forbidden love and family secrets in Kerala'),

    

    ('Midnight''s Children', 'Salman Rushdie', 'https://m.media-amazon.com/images/I/81KJXPqFpTL._SY466_.jpg', 499, 4.4, 'Magical realism masterpiece about children born at India''s independence'),

    

    ('The White Tiger', 'Aravind Adiga', 'https://m.media-amazon.com/images/I/71X4dVyPTaL._SY466_.jpg', 350, 4.2, 'Man Booker Prize winner critiquing India''s class divide with dark humor'),

    

    ('The Immortals of Meluha', 'Amish Tripathi', 'https://m.media-amazon.com/images/I/91aVuFZhfTL._SY466_.jpg', 299, 4.3, 'First book of Shiva Trilogy reimagining Lord Shiva as a mortal hero'),

    

    ('2 States: The Story of My Marriage', 'Chetan Bhagat', 'https://m.media-amazon.com/images/I/71EyxCKE+1L._SY466_.jpg', 199, 3.8, 'Popular romance about inter-community marriage and cultural differences'),

    

    ('The Palace of Illusions', 'Chitra Banerjee Divakaruni', 'https://m.media-amazon.com/images/I/81r9zIOqPsL._SY466_.jpg', 350, 4.4, 'Mahabharata retelling from Draupadi''s perspective'),

    

    ('A Suitable Boy', 'Vikram Seth', 'https://m.media-amazon.com/images/I/91gDW7u4O9L._SY466_.jpg', 699, 4.5, 'Epic saga of post-independence India exploring love, family and politics'),

    

    ('The Secret of the Nagas', 'Amish Tripathi', 'https://m.media-amazon.com/images/I/91ME8lc1h+L._SY466_.jpg', 299, 4.2, 'Second book in Shiva Trilogy continuing the mythological adventure'),

    

    ('Five Point Someone', 'Chetan Bhagat', 'https://m.media-amazon.com/images/I/71VjCnMIiPL._SY466_.jpg', 195, 3.7, 'Story of friendship and academic pressure at IIT Delhi'),

    

    ('The Guide', 'R.K. Narayan', 'https://m.media-amazon.com/images/I/71zJB-KqVWL._SY466_.jpg', 299, 4.3, 'Sahitya Akademi Award winner about identity and self-discovery'),

    

    ('Sea of Poppies', 'Amitav Ghosh', 'https://m.media-amazon.com/images/I/81pn7dCpQSL._SY466_.jpg', 499, 4.3, 'First book of Ibis Trilogy set during the Opium Wars era'),

    

    ('The Krishna Key', 'Ashwin Sanghi', 'https://m.media-amazon.com/images/I/81y2YF-SkwL._SY466_.jpg', 350, 4.1, 'Thriller weaving mythology and history around Krishna''s secrets'),

    

    ('The Oath of the Vayuputras', 'Amish Tripathi', 'https://m.media-amazon.com/images/I/91-QfmYo6HL._SY466_.jpg', 350, 4.2, 'Epic conclusion to the bestselling Shiva Trilogy'),

    

    ('Chanakya''s Chant', 'Ashwin Sanghi', 'https://m.media-amazon.com/images/I/81GdoWyy28L._SY466_.jpg', 299, 4.3, 'Parallel narratives connecting ancient Chanakya with modern politics'),

    

    ('The Shadow Lines', 'Amitav Ghosh', 'https://m.media-amazon.com/images/I/71yTowWdSZL._SY466_.jpg', 399, 4.4, 'Sahitya Akademi winner exploring memories, borders and identity'),

    

    ('Wings of Fire', 'A.P.J. Abdul Kalam', 'https://m.media-amazon.com/images/I/81v4M0NhJ+L._SY466_.jpg', 199, 4.7, 'Inspiring autobiography of India''s Missile Man and former President'),

    

    ('The Ministry of Utmost Happiness', 'Arundhati Roy', 'https://m.media-amazon.com/images/I/71CeuNr36hL._SY466_.jpg', 599, 4.1, 'Powerful novel about love, politics and social justice in modern India'),

    

    ('Revolution 2020', 'Chetan Bhagat', 'https://m.media-amazon.com/images/I/71tGxFwpUkL._SY466_.jpg', 195, 3.4, 'Story of love, corruption and ambition in contemporary India'),

    

    ('The Rozabal Line', 'Ashwin Sanghi', 'https://m.media-amazon.com/images/I/81FhzHELTvL._SY466_.jpg', 299, 4.0, 'Thriller blending religion, history and conspiracy theories'),

    

    ('Train to Pakistan', 'Khushwant Singh', 'https://m.media-amazon.com/images/I/71z0SJNUPBL._SY466_.jpg', 299, 4.3, 'Classic novel set during the partition of India in 1947');



    INSERT 

    INTO BOOKS (TITLE, AUTHOR, COVER, PRICE, RATING, DESCRIPTION)

    VALUES   

    -- Jeffrey Archer (5 books)

    ('Kane and Abel', 'Jeffrey Archer', 'https://m.media-amazon.com/images/I/71zQWY8QXUL._SY466_.jpg', 399, 4.7, 'Epic saga spanning decades following two men born on the same day'),

    

    ('Not a Penny More, Not a Penny Less', 'Jeffrey Archer', 'https://m.media-amazon.com/images/I/71YJRy3QEXL._SY466_.jpg', 299, 4.3, 'Four victims of a stock swindle unite for revenge in this debut novel'),

    

    ('A Prisoner of Birth', 'Jeffrey Archer', 'https://m.media-amazon.com/images/I/71s0xHZYpUL._SY466_.jpg', 399, 4.5, 'Modern retelling of The Count of Monte Cristo set in contemporary London'),

    

    ('The Clifton Chronicles: Only Time Will Tell', 'Jeffrey Archer', 'https://m.media-amazon.com/images/I/81oexVRqIjL._SY466_.jpg', 450, 4.6, 'First book of epic family saga spanning from 1920s to present day'),

    

    ('Heads You Win', 'Jeffrey Archer', 'https://m.media-amazon.com/images/I/81C+BrOwZDL._SY466_.jpg', 499, 4.4, 'Parallel lives story of a Russian immigrant in two different countries'),

    

    -- J.K. Rowling (7 books - Harry Potter series)

    ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/81YOuOGFCJL._SY466_.jpg', 350, 4.8, 'Boy wizard discovers his magical heritage and attends Hogwarts School'),

    

    ('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/81lAPl9Fl0L._SY466_.jpg', 350, 4.7, 'Harry returns to Hogwarts as mysterious attacks plague the school'),

    

    ('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/81lT2pvVekL._SY466_.jpg', 399, 4.8, 'Harry faces an escaped convict and learns dark secrets about his past'),

    

    ('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71q6N71h-GL._SY466_.jpg', 499, 4.8, 'Harry competes in the dangerous Triwizard Tournament'),

    

    ('Harry Potter and the Order of the Phoenix', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71IaHY87yaL._SY466_.jpg', 599, 4.7, 'Harry leads students in rebellion against Ministry interference at Hogwarts'),

    

    ('Harry Potter and the Half-Blood Prince', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71R3pUQbJ8L._SY466_.jpg', 675, 4.7, 'Harry discovers a mysterious textbook and learns about Voldemort''s past'),

    

    ('Harry Potter and the Deathly Hallows', 'J.K. Rowling', 'https://m.media-amazon.com/images/I/71sH3vxziLL._SY466_.jpg', 719, 4.9, 'Epic conclusion as Harry faces Voldemort in the final battle'),

    

    -- Agatha Christie (4 books)

    ('And Then There Were None', 'Agatha Christie', 'https://m.media-amazon.com/images/I/71Vkg00wVJL._SY466_.jpg', 250, 4.6, 'Ten strangers trapped on an island die one by one in Christie''s masterpiece'),

    

    ('Murder on the Orient Express', 'Agatha Christie', 'https://m.media-amazon.com/images/I/71W7z8-9aYL._SY466_.jpg', 299, 4.5, 'Hercule Poirot investigates a murder on a snowbound luxury train'),

    

    ('Death on the Nile', 'Agatha Christie', 'https://m.media-amazon.com/images/I/71cU86FdlEL._SY466_.jpg', 295, 4.4, 'Poirot solves a murder aboard a Nile river cruise in Egypt'),

    

    ('The ABC Murders', 'Agatha Christie', 'https://m.media-amazon.com/images/I/71yWmLfxfNL._SY466_.jpg', 240, 4.3, 'Serial killer taunts Poirot with alphabetical clues'),

    

    -- Dan Brown (2 books)

    ('The Da Vinci Code', 'Dan Brown', 'https://m.media-amazon.com/images/I/815WORuYMML._SY466_.jpg', 399, 4.2, 'Robert Langdon unravels centuries-old mystery hidden in Da Vinci paintings'),

    

    ('Angels and Demons', 'Dan Brown', 'https://m.media-amazon.com/images/I/81AeTQ3R5zL._SY466_.jpg', 350, 4.3, 'Langdon races to stop antimatter bomb threatening Vatican City'),

    

    -- Sidney Sheldon (2 books)

    ('Master of the Game', 'Sidney Sheldon', 'https://m.media-amazon.com/images/I/81EqZXYXwYL._SY466_.jpg', 299, 4.5, 'Multi-generational saga of power, greed and revenge in diamond empire'),

    

    ('If Tomorrow Comes', 'Sidney Sheldon', 'https://m.media-amazon.com/images/I/81e-3Ea1PFL._SY466_.jpg', 275, 4.4, 'Woman wrongly imprisoned becomes master con artist seeking justice');





INSERT 

    INTO BOOKS (TITLE, AUTHOR, COVER, PRICE, RATING, DESCRIPTION)

    VALUES   

    ('The Accursed God', 'Vivek Dutta Mishra', 'https://m.media-amazon.com/images/I/71VH8tYLVYL._SY466_.jpg', 399, 4.4, 'First book of The Lost Epic Series exploring Bhishma''s journey before Kurukshetra'),

    

    ('The Shadows of Kali', 'Vivek Dutta Mishra', 'https://m.media-amazon.com/images/I/71qzGq6HWEL._SY466_.jpg', 299, 4.5, 'Second book of The Lost Epic Series - story of a world quietly burning'),

    

    ('Manas: Mahabharat Nyay Samiti', 'Vivek Dutta Mishra', 'https://m.media-amazon.com/images/I/71bQZPqH5PL._SY466_.jpg', 350, 4.4, 'Hindi book exploring the justice committee of Mahabharat epic');





