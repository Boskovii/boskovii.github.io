---
layout: page
title: Robotic Dynamometer
description: Robotic ankle dynamometer for measuring muscle work loops and characterizing human sensorimotor control
img: assets/img/dyno_side.png
importance: 2
category: research
---

**Physiology of Wearable Robotics Lab**  
*Principal Investigator: Prof. Gregory Sawicki* | Aug 2024 - May 2025

I designed and built a robotic ankle dynamometer used to study human muscle-tendon dynamics and to characterize how people control force at the ankle. The full system included an in-line dynamic torque transducer, a foot pedal with a custom force plate that measures both normal and shear forces, and interfaces for EMG and ultrasound imaging. My motor-driven actuation subsystem replaced an open-source weight-stack system with a platform capable of variable-speed and complex loading profiles. The goal was a single platform that could **accurately measure plantar-flexion torque under isometric and isokinetic conditions** and serve as a tool for **investigating human sensorimotor control**, including how people regulate force at the ankle.

My contributions spanned **diagnosing mechanical limitations in existing platforms**, **designing a new motor-driven dynamometer**, **selecting components through torque-speed modeling**, and **fabricating a structurally rigid, high-force prototype** suitable for human testing.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/dyno_iso.png" caption="Motor-driven robotic dynamometer designed for ankle work loop experiments." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Characterizing Human Sensorimotor Control

The afferent and efferent signal loops of the nervous system can't be measured directly, but how a person controls force at a joint can be. This dynamometer was built to study the human neuromuscular system as a feedback control system, including how external influences such as exoskeletons affect force control and responsiveness. Participants lie prone with the shank supported, which isolates the ankle so that measured torque is not influenced by the knee or hip.

In target-matching tasks, a monitor in front of the participant displays a torque target, and their response can be analyzed like the response of any dynamic system, using control metrics such as **rise time**, **overshoot**, **settling time**, and **steady-state error**. Two independent torque measurements, an in-line torque transducer and a custom 2-D force plate in the foot pedal that measures both normal and shear forces, also capture **center of pressure and force direction**, opening the door to future studies of how people control where force is directed, not just how much they produce.

The controller supports isometric, isokinetic, position-controlled, and torque-controlled modes, an admittance-controlled simulated environment emulating a hanging mass, and rapid perturbations triggered by ankle kinematics. EMG, ultrasound imaging, and real-time visual and auditory biofeedback can be integrated into these tasks. These needs for torque fidelity, joint isolation, and controllable loading drove the design described below.

## Improving Open-Source Force Plate Design

My first role in the lab involved evaluating the design of an open-source ankle work-loop platform. Structural flexion in the force plate was corrupting sensor readings, thus preventing isolation of soleus muscle activity. Through inspection and testing, I identified the exact weak points responsible for the deformation and redesigned the structural components to increase rigidity and improve measurement fidelity. These corrections created a stable baseline for collecting accurate biomechanical signals across the platform’s multimodal sensing suite.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/schematic.png" caption="Open-source ankle work-loop platform used before developing motor-driven dynamometer." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Mechanical Design of Motor-Driven Dynamometer

To support isokinetic and variable-speed loading, I designed a new motor-driven dynamometer in Fusion 360 to replace the weight stack entirely. The system integrated a high-torque motor and gearbox that could apply controlled rotational loads at the ankle joint across a wide range of velocities. This mechanical redesign enabled dynamic loading patterns that better reflect real-world conditions and expanded the types of work loop experiments the ergometry platform could perform.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/dyno_side_page.png" caption="Motor-driven dynamometer with reinforced frame and custom motor mount." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Component Selection & Torque-Speed Analysis

I used MATLAB to generate torque-speed curves for combinations of candidate motors, gearboxes, and belt gear ratios, with two goals:

- **produce a torque-speed profile comparable to maximum human isokinetic plantar-flexion torque** across speeds, so the system can impose loads that are a significant fraction of a participant's maximum, and
- **minimize reflected inertia** relative to the human ankle, so the system is more responsive than the joint being measured.

I compared each candidate against literature-reported maximum isokinetic plantar-flexion torques at 30, 90, and 180°/s. This analysis led to the selection of a 1 kW low-inertia AC servo motor with a 20:1 planetary gearbox, coupled to the pedal through a belt drive.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/TorqueSpeed.png" caption="Torque-speed modeling used to select motor and gearbox for isokinetic testing." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Fabrication & Safety Features

I fabricated aluminum brackets and structural bars using waterjet cutting, a chop saw, and a drill press. I designed a reinforced aluminum motor mount, water-jet cut and welded, to minimize frame deformation under high loads. I also machined steel hard-stop bars that, together with software range-of-motion limits, prevent ankle overextension during high-force testing. These fabrication steps were critical for creating a rigid, high-fidelity measurement system capable of safely delivering and withstanding large torques.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Bars.jpg" caption="Aluminum structural beams and supporting plate; steel hard-stop bars for safety." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AssemblyDyno.png" caption="Aluminum 80/20 bars and waterjet-cut brackets assembled with force plate subassembly and torque transducer." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/WaterjetCuts.jpg" caption="Waterjet-cut motor mount components for assembly via welding." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


