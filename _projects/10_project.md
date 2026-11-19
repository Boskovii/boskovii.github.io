---
layout: page
title: Interface Design Evaluation Framework
description: A device-agnostic framework for evaluating physical human-robot interface design in wearable robotics
img: assets/img/thesis_thumbnail.png
importance: 2.1
category: research
---

**Undergraduate Thesis (Research Option)**  
*Advisor: Prof. Aaron Young* | *Second Reader: Prof. Gregory Sawicki* | Aug 2025 - May 2026

***A Device-Agnostic Framework for Evaluating Physical Human-Robot Interface Design in Wearable Robotics***  
<a href="/assets/pdf/Boskovic_Thesis.pdf" target="_blank" rel="noopener noreferrer">Read the thesis (PDF)</a> | <a href="/assets/pdf/Fall2025_BoskovicA_Proposal.pdf" target="_blank" rel="noopener noreferrer">Thesis proposal (Dec 2025)</a> | Approved April 2026

Physical human-robot interfaces (pHRIs), the cuffs, straps, and mounts where a robot meets the body, are usually evaluated with non-standardized, device-specific methods. That makes it hard to compare designs across systems, and it is one reason wearable robots struggle to move from laboratory prototypes into clinical and real-world use. Working on both a hip exoskeleton and an ankle dynamometer showed me that very different devices share the same design challenges at their physical interfaces. My thesis turned that observation into a two-level, device-agnostic framework for evaluating interface design.

<br>

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0" style="max-width: 1200px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/thesis.png" caption="Physical Interface Evaluation Framework." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## The Framework

**Level 1: Device characterization.** An interface is first described along six fundamental properties: contact geometry, force direction, mobility context, contact duration, interaction dynamics, and interface compliance.

**Level 2: Metric prioritization.** That characterization then determines which evaluation metrics are primary across five universal dimensions: **safety, comfort, fit, usability, and task performance**. The structure stays the same for every device; only the prioritization of metrics changes. In other words, the framework is device-agnostic without being dimension-agnostic, and it evaluates human factors and functional performance together rather than one after the other.

## Methods

The framework was built by (1) conducting a structured literature review of pHRI evaluation in exoskeletons, prostheses, and biomechanical measurement devices; (2) identifying and organizing performance metrics from that literature; (3) synthesizing them into the two-level framework; and (4) testing its feasibility through case studies on two devices I helped develop.

## Case Studies

**RHEx hip exoskeleton thigh interface (V4.3 and V6).** Version 4.3 was characterized as circumferential, assistive, mobile, prolonged-contact, dynamic, and semi-compliant. For that profile, the framework prioritizes pressure distribution, kinematic drift, chafing, interface slip and migration, and force transmission efficiency. These were exactly the failure modes that surfaced during testing, where users reported skin irritation and strut migration sometimes halted experiments. Applied earlier, the framework would have flagged them before subject testing. In V6, the Planar Mobility Mechanism shifts the interface from semi-compliant to highly compliant, which elevates energy loss to a primary task-performance metric. This captures an open question in the device's development: whether the comfort gains of the mechanism cost meaningful actuator torque.

**EmPoWeR ankle dynamometer foot mount.** Characterized as planar, measurement-oriented, fixed, brief-contact, dynamic, and rigid, the foot mount's priorities concentrate on measurement accuracy, repeatability, and alignment sensitivity. These priorities corroborate the team's focus on sensor accuracy and controllability. The framework also surfaced two gaps: alignment sensitivity, since ankle-axis misalignment introduces torque-scaling moment-arm errors, and the discomfort-versus-force curve, since interface discomfort during maximal contractions may systematically bias torque measurements downward.

## Findings

Across both devices, which sit at opposite ends of the mobility, compliance, and force-direction spectrum, the framework required no structural modification. Only metric prioritization changed in response to the Level 1 characterization. The case studies also showed the framework working in three modes: **retrospectively** (RHEx V4.3), **to guide design iteration** (RHEx V6), and **prospectively** (EmPoWeR). Together, these results support the central claim that a device-agnostic structure with device-specific prioritization is feasible.

## Limitations and Next Steps

The thesis demonstrates feasibility rather than empirical validation. The case studies establish that the framework produces sensible priorities, not yet that following them yields better designs. The metric set also draws heavily on lower-limb devices, and the compliance axis does not yet distinguish passive from engineered compliance. The next step is prospective validation: collecting the recommended measurements and using them to refine interface designs.
