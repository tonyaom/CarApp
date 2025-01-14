# CarApp

This project is a web application that showcases a variety of backend and frontend technical skills. The backend is built using .NET, while the frontend is developed using Angular. The project also incorporates modern design patterns and best practices.

## Technical Skills Highlighted

### Backend

- **BaseApiController**: A reusable base controller to streamline API endpoint creation and reduce redundant code.
- **Extension for Clean Program.cs**: A clean and modular `Program.cs` setup using dependency injection and extension methods for better maintainability.
- **Exception Handling Middleware**: A custom middleware for centralized exception handling, eliminating the need for try-catch blocks throughout the application. Errors are handled globally and returned with consistent error messages.
- **Repository Pattern**: The repository pattern is implemented to abstract data access logic and provide a clean separation of concerns between the database and business logic.
- **DTOs and AutoMapper**: Data Transfer Objects (DTOs) are used to structure data and prevent direct exposure of entities. AutoMapper is utilized to automatically map between entities and DTOs, reducing boilerplate code.
- **SignalR**: Real-time communication is facilitated through SignalR, enabling efficient bi-directional communication between clients and the server.


### Frontend

- **Bootstrap**: The UI is styled using Bootstrap, providing a responsive, mobile-first design and easy-to-use components.
- **Angular Service**:
  - **HttpClient**: The `HttpClient` service is used for making HTTP requests to the backend, handling data retrieval and submission.
  - **Toastr**: The `Toastr` service is utilized for displaying user-friendly notifications, such as success and error messages.
  - The `HttpClient` and `Toastr` services are injected into components to handle communication with the backend and display feedback to the user.
- **Router**: Angular's Router is used for client-side navigation, allowing users to seamlessly navigate through different views.
- **Error Interceptors**:
  - **Wrong Endpoint**: An error interceptor catches requests to wrong endpoints, ensuring the app gracefully handles incorrect API routes.
  - **Server Error**: Another interceptor handles server errors (e.g., 500 internal server errors), displaying appropriate messages to the user.
  - **Server Down**: An interceptor specifically handles scenarios where the server is down, providing a user-friendly message about the issue.
- **Loading Indicator**: A global loading indicator is displayed while data is being fetched, ensuring users are aware of ongoing processes.
- **Client-Side SignalR**: The frontend is integrated with SignalR to receive real-time updates from the server.
- **Search by Make**: A search functionality is implemented to allow users to filter results based on the car make.
- **Background Service with MD5 Hash**: A background service that generates an MD5 hash of the data and pushes or sends updates to the client only when data has been modified. This ensures efficient communication and reduces unnecessary data transfer.

### Possible Enhancements

#### Backend:
- **Unit Tests for Car Repository and Paging Logic**: Implement unit tests to ensure the reliability and correctness of the Car repository and paging logic.
- **API Rate Limiting**: Implement rate limiting for API requests to prevent abuse and improve server stability.

#### Frontend:
- **Paging Functionality**: Implement paging functionality to handle large datasets and improve user experience.
- **Mobile-Friendly Design**: Enhance the UI for mobile responsiveness, ensuring all features and content are easily accessible and usable on smaller screens.
