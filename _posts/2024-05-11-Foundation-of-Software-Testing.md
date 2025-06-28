---
layout: post
title: Foundation of Software Testing
date: 2024-03-26 10:40:16
description: Overview of state machine strategy in approaching embedded software design.
tags: formatting links
image: "/assets/img/image2.png"
categories: blog
---

In this syllabus, the following five test levels are described:
• Component testing (also known as unit testing) focuses on testing components in isolation. It
often requires specific support, such as test harnesses or unit test frameworks. Component
testing is normally performed by developers in their development environments.
• Component integration testing (also known as unit integration testing) focuses on testing the
interfaces and interactions between components. Component integration testing is heavily
dependent on the integration strategy approaches like bottom-up, top-down or big-bang.
• System testing focuses on the overall behavior and capabilities of an entire system or product,
often including functional testing of end-to-end tasks and the non-functional testing of quality
characteristics. For some non-functional quality characteristics, it is preferable to test them on a
complete system in a representative test environment (e.g., usability). Using simulations of sub
systems is also possible. System testing may be performed by an independent test team, and is
related to specifications for the system.
• System integration testing focuses on testing the interfaces of the system under test and other
systems and external services . System integration testing requires suitable test environments
preferably similar to the operational environment.
• Acceptance testing focuses on validation and on demonstrating readiness for deployment,
which means that the system fulfills the user’s business needs. Ideally, acceptance testing should
be performed by the intended users. The main forms of acceptance testing are: user acceptance
testing (UAT), operational acceptance testing, contractual and regulatory acceptance testing,
alpha testing and beta testing


A lot of test types exist and can be applied in projects. In this syllabus, the following four test types are
addressed:
Functional testing evaluates the functions that a component or system should perform. The functions
are “what” the test object should do. The main objective of functional testing is checking the functional
completeness, functional correctness and functional appropriateness.
Non-functional testing evaluates attributes other than functional characteristics of a component or
system. Non-functional testing is the testing of “how well the system behaves”. The main objective of nonfunctional testing is checking the non-functional software quality characteristics. The ISO/IEC 25010
standard provides the following classification of the non-functional software quality characteristics:
• Performance efficiency
• Compatibility
• Usability
• Reliability
• Security
• Maintainability
• Portability

Black-box testing (see section 4.2) is specification-based and derives tests from documentation external
to the test object. The main objective of black-box testing is checking the system's behavior against its
specifications.
White-box testing (see section 4.3) is structure-based and derives tests from the system's
implementation or internal structure (e.g., code, architecture, work flows, and data flows). The main
objective of white-box testing is to cover the underlying structure by the tests to the acceptable level