# PlateCounter

## Project Overview
PlateCounter is a dynamic web application designed to address the practical needs of gym-goers. The app allows users to quickly determine the plates needed for their workouts by entering a desired weight and displaying a visual representation of the weights. Integrated with React.js for dynamic user interactions and Tailwind for responsive design, PlateCounter has been adopted by members at a local gym who find it extremely useful.

## Key Features
- **Weight Input Options**: Users can enter the desired weight either by typing the specific value or by scrolling through each digit like a combination lock.
- **Instant Visual Representation**: Upon entering the weight, the app displays a visual representation of the weights as different gym plates.
- **Stats Section**: Specifies the number of each type of plate needed.
- **Three Display Options**:
  1. **45-pound Barbell**: Displays weights placed on either side of the barbell horizontally.
  2. **Single-side Option**: Shows all the weights stacked vertically in one pile without a barbell.
  3. **Double-side Option**: Displays half the weight in one pile on the left and the other half on the right, both vertically without a barbell.

## Technologies Used
- **HTML**
- **CSS**
- **JavaScript**
- **React.js**
- **Tailwind**
- **Figma**: Used to create custom SVGs

## Challenges Overcome
- **Data Structure Definition**: The originality of the project required constantly evolving data structures. By defining data as objects with multiple attributes, I was able to simplify data access and manipulation across various parts of the codebase.
- **Dynamic SVG Positioning**: Moving the positioning of SVGs based on the entered weight and screen size was challenging. I managed this by tracking these variables in the state and creating functions to interpolate the necessary information into the JSX.
- **Reutilizing Concepts from Other Frameworks**: Adapting traditional concepts like reactivity, state management, and lifecycle hooks to new frameworks and technologies was a significant learning curve. Overcoming this enhanced my ability to solve problems using modern development practices.

## Overall Impact and Significance
PlateCounter has significantly improved the gym experience for its users by solving a common annoyance. Its aesthetic and satisfying design encourages users to return to the app repeatedly. For me personally, it built confidence in using new technologies and showcased my originality. Professionally, PlateCounter stands as a testament to my abilities and practical problem-solving skills.

## Contributing
Contributions to enhance the functionality, usability, or documentation of PlateCounter are welcome. To contribute:
1. Fork the repository
2. Create a new branch for your feature or fix
3. Commit your changes
4. Push your changes to your fork
5. Submit a pull request
