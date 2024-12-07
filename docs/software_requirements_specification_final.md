# Overview
This document outlines the Software Requirements Specification (SRS) for a system that assists users in generating summaries, quizzes, and managing educational content effectively. It covers both functional and non-functional requirements, ensuring the system meets user needs and technical standards.

# Software Requirements
This section details the functional and non-functional requirements for the system, categorized by feature and usability.

## Functional Requirements

### User Account Management
ID | Requirement |
:-------------: | :----------: |
FR1 | The system shall allow users to register an account using their email address and a password that meets security criteria, with a minimum of 8 characters including a mix of numbers, letters, and symbols. |
FR2 | The system shall allow users to log in with their registered email address and password. |
FR3 | The system shall allow users to reset their password by sending a secure reset link to their registered email address. |
FR4 | The system shall send a verification email to the user’s registered email address upon successful account creation to confirm identity. |
FR5 | The system shall log users out after 60 minutes of inactivity, requiring re-authentication for subsequent actions. |

### Content Summarization
ID | Requirement |
:-------------: | :----------: |
FR6 | The system shall allow users to input text content for summarization. |
FR7 | The system shall generate a summary of the text content that is clear, concise, and maintains the information in the original text. |
FR8 | The system shall allow users to regenerate a new summary if they are not satisfied with the previous one. |
FR9 | The system shall notify the user once the summary is ready for viewing. |
FR10 | The system shall allow users to save, cut, copy, or delete the generated summaries. |

### Quiz Generation and Management
ID | Requirement |
:-------------: | :----------: |
FR11 | The system shall automatically generate a quiz based on the summarized content, covering key points for comprehension. |
FR12 | The system shall allow users to review quiz results, showing correct and incorrect answers. |
FR13 | The system shall randomize quiz questions to ensure variability when the quiz is retaken. |
FR14 | The system shall track users' quiz scores and allow users to review their performance history. |
FR15 | The system shall display the total number of questions at the start of the quiz. |

### Output Handling
ID | Requirement |
:-------------: | :----------: |
FR16 | The system shall allow users to copy the generated summary to the clipboard with a single click of the copy button. |
FR17 | The system shall provide an option to download summaries and quiz results as a PDF file. |
FR18 | The system shall provide an option to share summaries via email or social media platforms. |
FR19 | The system shall allow users to print the summary or quiz results directly from the interface. |
FR20 | The system shall maintain version control for each user’s generated summaries and quiz results. |

### User Interface (UI) and Experience (UX)
ID | Requirement |
:-------------: | :----------: |
FR21 | The system’s interface shall allow users to input educational content in a clearly defined text box. |
FR22 | The system shall display progress bars or status indicators during actions such as summary generation and quiz creation. |
FR23 | The system shall ensure that all buttons, links, and actions are easily accessible with no more than two clicks to access core functionalities. |
FR24 | The system shall provide tooltips or a help guide for new users, explaining how to use the key features. |
FR25 | The system shall display a confirmation prompt before performing irreversible actions such as deleting a quiz. |

### User Profile Management
ID | Requirement |
:-------------: | :----------: |
FR26 | The system shall allow users to register for an account using their email and password. |
FR27 | The system shall allow users to reset their password by clicking the "Forgot Password" button. |
FR28 | The system shall allow users with an account to sign in using their email and password. |
FR29 | The system shall allow users to view their account activity history of summaries generated. |
FR30 | The system shall allow users to view the quiz results history associated with their account. |

## Non-Functional Requirements

### Performance and Efficiency
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR1 | The system shall process content summaries for documents under 500 words within 10 seconds. |
| NFR2 | The system shall generate quizzes based on summaries in under 20 seconds.   |
| NFR3 | The system shall support at least 100 concurrent users without degrading performance. |
| NFR4 | The system shall handle large volumes of data without significant delays or failures. |
| NFR5 | The system shall allow users to access previously generated summaries and quizzes within 5 seconds of request. |

### Data Security and Privacy
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR6 | The system shall store all user passwords securely using robust encryption methods. |
| NFR7 | The system shall ensure encrypted communication between the client and server. |
| NFR8 | The system shall require multi-factor authentication for users.             |
| NFR9 | The system shall provide users with the ability to delete their account and all associated data. |
| NFR10| The system shall not share user data with third parties without consent.    |

### Availability and Reliability
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR11| The system shall be available all year round, throughout the day.           |
| NFR12| The system shall recover from failures automatically within ten minutes of any service interruption. |
| NFR13| The system shall send a clear notification to users via emails if any maintenance is planned. |
| NFR14| The system shall have a scheduled automatic data backup every week to ensure availability and reliability. |
| NFR15| The system shall include real-time monitoring tools to detect any issues or threats that may threaten the security of the information of the users. |

### Usability and Accessibility
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR16| The system shall ensure the platform is usable by users with disabilities.  |
| NFR17| The system shall maintain compatibility with assistive technologies such as screen readers and voice recognition software for persons with disabilities. |
| NFR18| The system shall allow easy navigation using keyboard shortcuts for users with limited mobility. |
| NFR19| The system shall provide an accessible font size for all users.             |
| NFR20| The system shall include a feedback form to allow users to report any usability issues. |

### Scalability and Maintainability
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR21| The system shall log errors and performance issues for debugging and future improvements. |
| NFR22| The system shall be built using modular architecture to allow for easy updates and feature additions without disrupting existing functionality. |
| NFR23| The system shall be able to scale horizontally to support additional users and traffic during peak usage times. |
| NFR24| The system shall allow administrators to perform regular security audits and software updates seamlessly. |
| NFR25| The system shall include automated testing tools for bug fixes and adding new features. |

### Compliance and Legal Requirements
| ID   | Requirement                                                                 |
|:----:|:---------------------------------------------------------------------------:|
| NFR26| The system shall ensure that all data handling and storage practices meet the legal standards for security and privacy. |
| NFR27| The system shall maintain mechanisms for obtaining, storing, and managing user consent in accordance with applicable regulations such as consent for data collection. |
| NFR28| The system shall provide clear terms of service, privacy policies, and user agreements that are easy to understand and accessible to all users. |
| NFR29| The system shall provide users with the ability to request access to their personal data in accordance with data protection laws. |
| NFR30| The system shall perform regular audits and assessments to ensure compliance with legal and regulatory requirements, with reports available for review by authorized personnel. |


## Change Management Plan for Application Integration

Our Change Management Plan provides a strategy to address adoption, training, integration, and issue resolution. The following points outline steps for ensuring an efficient approach to implement changes in the application.

---

### 1. Training Plan for Users

Our training program will be comprehensive and well-structured, ensuring that users feel confident with the new technology.

#### 1.1. Training Sessions
We will begin with onboarding training sessions for different users such as students, professors, and IT support staff. These sessions will be conducted through:

- **Video Tutorials**: Pre-recorded video tutorials will be made available for users at their convenience. These videos will provide detailed instructions for specific tasks such as uploading educational content, generating summaries, and reviewing generated summaries.
- **Live Webinars and Interactive Demos**: Practical walkthroughs of the application’s core features (e.g., summarizing content, generating quizzes, and handling user accounts) will be conducted. Live demonstrations will be followed by a Q&A session to address any questions.

#### 1.2. Training Materials and Documentation
Comprehensive documentation will be provided, including user manuals, quick-start tutorials, and FAQs. These materials will cover:
- Step-by-step tutorials for core functionalities such as uploading content and generating quizzes.
- Troubleshooting and issue resolution guides.
- Instructions on integrating the application into classrooms and leveraging administrative features.

#### 1.3. Continuous Learning
To ensure continuous learning, we will provide:
- **Regular Workshops**: Monthly sessions for users to explore new features and integrations.
- **Community Forums**: A user forum will enable peer-to-peer learning and knowledge exchange.

---

### 2. Ensuring Integration within Ecosystems/Software

The application needs to fit seamlessly within the existing business ecosystem. Steps for successful integration include:

#### 2.1. Integration with Existing Systems
We will work closely with the customer’s IT department to ensure smooth integration, focusing on:
- **Single Sign-On (SSO)**: Integration with authentication systems for frictionless login experiences, reducing barriers to adoption.
- **Learning Management Systems (LMS)**: Compatibility with popular platforms such as Blackboard and Canvas to allow educators to pull in class materials directly.
- **Data Syncing and API Access**: Providing APIs for seamless syncing of grades, quizzes, and other data with internal systems.

#### 2.2. Configuration and Customization
Personalization and customization will be achieved through:
- **Branding and UI Customization**: Enabling institutions to apply their branding (e.g., colors and logos) to the application.
- **Feature Customization**: Configurable options for quiz generation styles, summary output formats, and content classification based on institutional needs.

#### 2.3. Pilot Program and Feedback Loops
A pilot program will be launched with key stakeholders to gather feedback on usability and integration. Challenges identified during the pilot phase will be documented and addressed before full-scale adoption.

---

### 3. Issue Resolution and Continuous Improvement

#### 3.1. Proactive Monitoring
To ensure smooth functionality, we will implement:
- **Real-time Performance Monitoring**: Tracking system performance to identify bottlenecks or failures early.
- **Error Reporting Mechanism**: An in-app feature for users to report issues, which will be logged into our tracking system for quick resolution.

#### 3.2. Regular Updates and Bug Fixes
A structured release schedule will ensure quick resolution of discovered issues:
- **Security Patches**: Immediate updates for identified vulnerabilities.
- **Monthly Bug Fixes**: Minor fixes and improvements based on user feedback.
- **Quarterly Feature Updates**: Enhancements to platform capabilities and resolution of major challenges.

#### 3.3. Customer Support Team
A dedicated support team will be available through multiple channels:
- **Chat**: Immediate assistance for technical issues.
- **Email and Phone Support**: Direct lines for resolving complex issues.
- **Help Desk and Ticketing System**: Users will receive status updates on their issues through a ticketing system.

#### 3.4. User Feedback Loops for Continuous Improvement
Feedback will be gathered through:
- **User Surveys and Focus Groups**: Regularly identifying areas for improvement.
- **Usage Analytics**: Monitoring application usage to identify usability issues or bottlenecks.

---

### 4. Change Management Communication Plan

#### 4.1. Transparent Communication
Clear and consistent communication will be maintained throughout the change management process:
- **Regular Updates**: Users will be notified via email about major updates or issues with clear information on what to expect.
- **Regular Check-ins**: Administrators, professors, teachers, and IT personnel will be kept informed about progress and challenges.

#### 4.2. Communicate the Benefits
The application’s benefits will be highlighted to help users adjust to changes:
- Saves time by automating content summarization and quiz generation.
- Enhances student understanding of complex content with concise summaries.
- Improves learning outcomes through interactive quizzes.

--- 


## Traceability Links

### Use Case Diagram Traceability
Artifact ID | Artifact Name | Requirement ID |
:-------------: | :----------: | :----------: |
UseCase1 | Content Summarization | FR1.1-FR1.5, NFR2.1-NFR2.5, NFR6.1-NFR6.5  |
UseCase2 | Output Handling | FR2.1-FR2.5, NFR1.1-NFR1.5, NFR3.1-NFR3.5  |
UseCase3 | Progress Tracking | FR3.1-FR3.5, NFR1.2-NFR1.5, NFR5.1-NFR5.5 |
UseCase4 | User Account | FR4.1-FR4.5, NFR1.5, NFR4.1-NFR4.5, NFR5.1-NFR5.5 |

### Class Diagram Traceability

| Artifact Name  | Class Name              | Requirement ID                              |
|:--------------:|:-----------------------:|:------------------------------------------:|
| ClassUser      | Authentication          | FR1.1, FR1.2, FR1.3, FR1.4, FR1.5          |
| ClassUser      | User                    | FR1.1, FR1.2, FR1.3, FR1.4, FR6.4, FR6.5   |
| ClassUser      | QuizResultsHistory      | FR3.2, FR3.4, FR6.4, FR6.5                 |
| ClassSummary   | Summary                 | FR2.1, FR2.2, FR2.3, FR2.4, FR4.1, FR4.5   |
| ClassSummary   | Quiz                    | FR3.1, FR3.3, FR3.5, FR4.2, FR4.4          |
| ClassSummary   | TextProcessor           | FR2.1, FR2.2, FR2.3, FR2.4, FR2.5          |

### Object Diagram Traceability
| Artifact Name  | Object Name              | Requirement ID                              |
|:--------------:|:-----------------------:|:------------------------------------------:|
| Object1      | MultiObjects          | FR1.1, FR1.2, FR1.3, FR1.4, FR1.5, FR3.2, FR3.4, FR6.4, FR6.5             |

### Activity Diagram Traceability
| Artifact ID | Artifact Name             | Requirement ID    |
|:-----------:|:-------------------------:|:-----------------:|
| Diagram1    | Generate Summary and Quiz | FR6.1, FR6.5, FR7.1, FR7.5, FR6.2, FR7.4, FR6.3, FR7.3, FR6.4, FR7.2|

### Sequence Diagrams and State Machine Diagram Traceability
| Artifact ID | Artifact Name             | Requirement ID            |
|:-----------:|:-------------------------:|:-------------------------:|
| Sequence1    | Generate Quiz Sequence    | FR3.1, FR3.2, FR3.3, FR3.4, FR3.5              |
| State1    | Summary and Quiz Generation   | FR1.1-FR1.5, NFR2.1-NFR2.5, NFR6.1-NFR6.5          |

### Window Nav Diagrams Traceability
| Artifact ID | Artifact Name             | Requirement ID            |
|:-----------:|:-------------------------:|:-------------------------:|
| Nav1    | Summary and Quiz Window   | FR1.1-FR1.5, NFR2.1-NFR2.5, NFR6.1-NFR6.5            |


# Software Artifacts
This section describes the output files and documents produced during the development process.
* [Activity Diagram - Generate Summary and Quiz](https://github.com/KhajiraCraft/neurons/blob/main/artifacts/Activity%20Diagrams/Diagram1.png)
* [API Documentation](to_api_docs.pdf)
