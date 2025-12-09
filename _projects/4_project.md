---
layout: page
title: Design and Control of an Autonomous Robot
description: Autonomous robot with scissor lift mechanism and obstacle clearing capabilities
img: assets/img/subject.png
importance: 4
category: course projects
---

**ME2110: Creative Decisions and Design**  
*Instructor: Ms. Nisha Detchprohm* | Jan 2024 – May 2024

I designed, built, and programmed a fully autonomous robot capable of completing a Kung Fu Panda-themed competition challenge involving object retrieval, obstacle neutralization, and vertical lifting tasks. My work on the team focused on mechanical subsystem design, mechatronic sensing, rapid prototyping, and Arduino-based control integration.

<div class="row">
  <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
      {% include figure.liquid loading="eager" path="assets/img/subject.png" 
         caption="Assembled autonomous robot integrating sensing, actuation, and mechanical subsystems." 
         class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

## Embedded Control System (Arduino)

I developed the robot’s integrated sensing and control architecture, enabling fully autonomous behavior:

- IR sensors and mechanical limit switches for activation and subsystem triggering  
- Arduino-based sequencing logic following the control flowchart below
- Coordinated control of DC motors, pneumatic actuator, and solenoid  
- Timed actuation of the lift system, including the 15-second delay before releasing Po into the courtyard  

<div class="row">
  <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
      {% include figure.liquid loading="eager" path="assets/img/flowchart.png" 
         caption="High-level control flow for autonomous activation and subsystem coordination." 
         class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Scissor Lift Design & Fabrication

I designed a compact, high-reach scissor lift that extended **4.5 ft from a 4-inch collapsed height**, enabling the robot to reach elevated scoring targets. This involved determining appropriate linkage geometry, machining an aluminum spool on the lathe for cable actuation, and evaluating several cable options before selecting a reliable configuration. The lift structure was built from laser-cut MDF components, and the sliders were reinforced to reduce lateral motion under load. Through iterative testing and refinement, the lift mechanism performed reliably throughout competition trials.

<div class="row">
  <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
      {% include figure.liquid loading="eager" path="assets/img/scissor lift side view.png" 
         caption="Scissor lift side view showing system's ability to reach elevated target from home zone." 
         class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
      <iframe src="https://drive.google.com/file/d/1gAQ1mhVH0052zd6COi9ailDUGmZUHJYW/preview" style="width: 100%; height: 600px; border: none; border-radius: 8px; display: block;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
      <div class="caption" style="text-align: center; margin-top: 0.5rem;">
        Scissor lift deployment demonstration.
      </div>
  </div>
</div>

## Obstacle Removal and Collection Mechanisms

I developed several other mechanical subsystems to support object retrieval and obstacle clearing during the autonomous sequence. One mechanism used drawer slides and stored elastic energy released by an actuator to push obstacles out of the robot's path. For object collection, I built a forward-extending drawer-slide assembly, an unfurling arm to collect small objects on top of a rotating central platform, and a rotating mechanism driven by a small motor to secure a scroll with a specific color assigned during setup. After finding that early prototypes were unnecessarily complex, I simplified our designs to improve reliability and reduce failure points.

<div class="row">
  <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
      {% include figure.liquid loading="eager" path="assets/img/competition.jpeg" 
         caption="Deployed robot at the final competition (white zone)." 
         class="img-fluid rounded z-depth-1" %}
  </div>
</div>
