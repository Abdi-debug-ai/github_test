// Initialize EmailJS with your user ID
(function() {
    emailjs.init("abdihalimnasir@gmail.com"); // Replace YOUR_USER_ID with your actual EmailJS User ID
})();

// JavaScript for Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        alert("Thank you for your message, " + name + "! We'll get back to you soon.");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert('There was a problem with your submission. Please try again later.');
        console.error('Error:', error);
    });
});
<div class="news-article">
    <h2>Escalating Conflict in the Middle East: A Growing Crisis</h2>
    <p><strong>Date:</strong> October 13, 2024</p>
    <p>The ongoing conflict in the Middle East has reached alarming levels, with increasing casualties and widespread displacement of civilians. The latest reports indicate a significant escalation in hostilities, particularly between various factions in the region, leading to urgent calls for international intervention.</p>
    
    <h3>Recent Developments</h3>
    <p>In the past week, major cities have been under siege, and airstrikes have intensified, targeting both military installations and civilian infrastructure. Thousands of residents are fleeing their homes, seeking refuge in neighboring countries, while humanitarian organizations warn of an impending crisis as resources become critically low.</p>
    
    <h3>International Response</h3>
    <p>The international community has expressed deep concern over the situation. The United Nations has called for an immediate ceasefire and urged all parties to engage in diplomatic talks to address the root causes of the conflict. Meanwhile, protests against the violence are erupting in various cities worldwide, with citizens demanding action from their governments to intervene and support peace efforts.</p>
    
    <h3>Humanitarian Impact</h3>
    <p>Local charities and international NGOs are struggling to meet the needs of those affected. Access to basic necessities such as food, water, and medical supplies is dwindling, and the health crisis is worsening as more people suffer from injuries and diseases in overcrowded refugee camps.</p>

    <h3>Looking Ahead</h3>
    <p>As the situation continues to unfold, analysts warn of the potential for wider regional instability. The geopolitical implications of the conflict could affect global oil markets, international relations, and the lives of millions in the Middle East and beyond. Urgent action is needed to prevent further escalation and promote a path to peace.</p>
    
    <p><a href="https://www.example.com/full-article">Read more</a></p>
</div>
