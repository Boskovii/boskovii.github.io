---
layout: page
title: Robotic Hip Exoskeleton
description: Development of a hip exoskeleton from conceptual design through prototyping and clinical testing.
img: assets/img/full_exo_front.png
importance: 1
category: research
---


**Exoskeleton and Prosthetic Intelligent Controls Lab**  
*PI: Prof. Aaron Young* | Aug 2023 – Present

My team is developing a hip exoskeleton that serves as a research platform for evaluating biological torque estimation and [on-body sensing]({{ '/publications/' | relative_url }}) as a control strategy for post-stroke mobility restoration. The system is designed to enable studies on how real-time torque estimates derived from wearable IMUs can synchronize assistance with a user's intent without relying on less accurate on-device sensors.

My contributions span the mechanical design and biomechanical analysis tasks required to support this goal: designing and analyzing structural components, fabricating lightweight composite hardware, and conducting multimodal locomotion experiments with both able-bodied and stroke-impaired participants.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/Exo with Subject.png" caption="Robotic Hip Exoskeleton with Second-Skin On-Body Sensor Suit." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Hardware Development

I designed and prototyped several core hardware subsystems of the exoskeleton, including the thigh struts, actuator mounts, and a novel mechanism at the thigh interface. Using SolidWorks FEA, I optimized the strut structures to reduce mass by more than 35% while maintaining stiffness above safety margins. I also incorporated a modular thigh strut design with several sizes to ensure the exoskeleton fits users from the 1st to the 99th percentile, thereby accommodating stroke survivors who often experience weight changes due to immobility.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/full_exo_front.png" caption="Full Robotic Hip Exoskeleton Assembly." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Passive 3-DOF Planar Mobility Mechanism

One of my first major responsibilities in the EPIC Lab was to redesign the exoskeleton's thigh interface. Instead of directly iterating on the existing hardware, I began by interviewing former users to understand the root cause of the recurring discomfort and skin irritation they experienced at the rigid thigh strut. These conversations made it clear that the primary issue was misalignment between the biological hip joint and the exoskeleton’s actuator axis, which caused repeated separation, rubbing, and skin irritation during use.

A review of prior work showed that soft, compliant interfaces can mitigate misalignment but cannot transmit the high torques required for post-stroke hip assistance. To bridge this gap, I explored a hybrid approach and developed a **passive 3-degree-of-freedom planar mobility mechanism** that allows controlled motion within the thigh plane while maintaining rigid torque transmission. The design permits rotation and translation during gait, with elastic elements providing restoring forces that return the thigh strut to a neutral position after each cycle.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/PMMExploded.jpg" caption="Passive 3-DOF planar mobility mechanism." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/ThighInterfaceSubassembly.jpg" caption="Thigh interface subassembly." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This mechanism contributed to reports of increased user comfort in our new exoskeleton. Working on this project taught me a key engineering lesson early in my research career: taking time to understand current limitations leads to more effective and creative design solutions than blindly iterating on inherited hardware. I recently gave a talk about my work on this mechanism at the Gulf Coast Undergraduate Research Symposium at Rice University.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        <iframe src="https://drive.google.com/file/d/16Kq3pckW9unH6V8WWYQeoN7BbOgWl0dP/preview" style="width: 100%; height: 800px; border: none; border-radius: 8px; display: block;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <iframe src="https://drive.google.com/file/d/1gN_tMzNtHG9KoXANFK5Q9ATU5VQWD_r9/preview" style="width: 100%; height: 800px; border: none; border-radius: 8px; display: block;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
    </div>
</div>
<div class="caption">
    Comparison of the old thigh interface (left) and the new passive 3-DOF planar mobility mechanism (right).
</div>

## Rapid Prototyping & Composite Fabrication

I fabricated functional prototypes using **SLS, SLA, and FDM additive manufacturing** to iterate on design concepts rapidly. I then manufactured final exoskeleton components using both **wet-laminated and prepreg carbon-fiber layups** to maximize strength-to-weight ratio. Through iterative mold design, I achieved consistent composite quality that meets structural requirements while minimizing weight.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/Carbon Fiber.jpg" caption="Wet-Laminated Carbon Fiber Layup Process." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Multimodal Human-Subject Testing & Clinical Evaluation

I conducted locomotion experiments using a comprehensive sensor suite including **VICON motion capture, force plates, EMG, IMUs, and insole pressure sensors** to build datasets for training biological torque estimation algorithms. To handle the complexity of these multimodal datasets, I developed automated MATLAB tools for data validation and preprocessing. I supported experimental setups for both able-bodied participants and stroke-impaired individuals, working to ensure consistent data collection across diverse gait patterns and impairment levels. I also assisted with clinical evaluations of stroke participants using the **Fugl-Meyer Assessment** and used assessment outcomes to contextualize gait mechanics across different impairment levels.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/DataProcessing.png" caption="Automated visualization and outlier flagging (red) for IMU data." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Team Leadership

I coordinate and mentor a team of undergraduate researchers across mechanical design, fabrication, data processing, and experimental workflows, ensuring the project's continued progress and knowledge transfer. 

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/VIP Team.jpg" caption="Research team developing our hip exoskeleton." class="img-fluid rounded z-depth-1" %}
    </div>
</div>









