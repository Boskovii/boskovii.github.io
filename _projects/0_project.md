---
layout: page
title: Robotic Ankle Exoskeleton
description: Hardware reliability improvements and working toward home and community use of an ankle exoskeleton
img: assets/img/harvard/ankle_exo_card.jpg
importance: 2.5
category: research
---

**Harvard Biodesign Lab**  
*Principal Investigator: Prof. Conor Walsh* | Sep 2026 - Present

As a Research Fellow in the Harvard Biodesign Lab, I am currently working on a portable ankle exoskeleton for post-stroke walking. Since joining the lab, I have been supporting ongoing human-subject experiments and have taken on several hardware projects that make the exoskeleton more reliable during testing. More recently, I’ve started leading the lab’s effort to move the device from supervised laboratory experiments toward use at home and in the community.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/harvard/ankle_exo_actuator.jpg" caption="Ankle exoskeleton actuator mounted on an ankle-foot orthosis." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Human-Subject Experiments

I collaborate with graduate students and physical therapists to assist with participant study visits. My work includes placing motion-capture markers on participants, calibrating the **COSMED K5** portable metabolic system, and collecting and labeling **Qualisys** motion-capture data.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/harvard/mocap_station.jpg" caption="Motion-capture data collection station in Qualisys Track Manager." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Control Box Redesign

Our exoskeleton required increased battery capacity and a soft power board that could support higher motor torque, and the existing control box had room for neither. I designed and prototyped a new control box assembly that houses both, with mounts for two swappable battery packs on the waist belt.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/harvard/control_box_exploded.jpg" caption="Exploded view of the control box assembly." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/harvard/control_box_photo.jpg" caption="Prototype control box with dual battery mounts." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Connector Retention

Actuator connectors were sometimes pulled loose while the exoskeleton was running, which interrupted assistance mid-trial. I developed an elastic retention mechanism that keeps the connectors seated during operation.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/harvard/connector_retention.jpg" caption="Elastic retention holding the actuator connector seated in the control box." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Reinforced Ankle-Foot Orthosis

For a larger participant, the ankle-foot orthosis flexed more than it should under the exoskeleton's assistive torque. I designed and fabricated aluminum reinforcement plates that fasten to the orthosis shell to improve its structural rigidity.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/harvard/afo_plate_front.jpg" caption="Aluminum reinforcement plate fastened to the orthosis shell." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/harvard/afo_plate_side.jpg" caption="Side view of the reinforced ankle-foot orthosis." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Torque-Pin Failure Analysis

After mechanical malfunctions during participant visits, I investigated the pin mechanism that transmits torque from the actuator to the orthosis. I identified likely failure modes involving **pin engagement**, **wear**, and **insufficient axial constraint**. Working with the machine shop, I implemented three fixes:

- **stronger replacement torque pins**,
- **a custom axial retention washer** to keep the pins from vibrating out of place, and
- **steel threaded inserts** to stop fasteners from loosening during use.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 420px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/harvard/torque_pin_wear.jpg" caption="Wear around the torque-pin holes of the actuator output, found while investigating malfunctions during participant visits." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

All four hardware modifications on this page are now in use in participant studies. Since they were implemented, study visits have run without any cancellations due to hardware issues.

## Toward Home and Community Use

I’m now helping lead the transition of our ankle exoskeleton from supervised laboratory experiments to home and community use. I began by consulting senior lab members with relevant experience and used those discussions to create a system-level roadmap outlining a phased development and validation strategy. I’m now working with other lab members to refine technical requirements, identify promising design solutions, and plan initial prototyping and feasibility testing.

## Technology Venture Immersion

Outside my research, I’m helping prepare the January **Technology Venture Immersion** course as a Teaching Fellow. So far, I have organized a bill-of-materials framework for student projects and am coordinating with teaching staff to identify and source the components students will need.
