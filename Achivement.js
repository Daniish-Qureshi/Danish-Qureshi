// Initialize AOS animations
    AOS.init();

    // Tab Switching Functionality
    function showTab(tabName) {
      const allTabs = document.querySelectorAll('.tab-content');
      allTabs.forEach(tab => tab.classList.remove('active'));

      const allTabsBtn = document.querySelectorAll('.tab');
      allTabsBtn.forEach(btn => btn.classList.remove('active'));

      document.getElementById(tabName).classList.add('active');

      const activeTab = Array.from(allTabsBtn).find(btn => btn.dataset.tab === tabName);
      if (activeTab) activeTab.classList.add('active');
    }

    function toggleComponents() {
      const gallery = document.getElementById("componentGallery");
      const button = event.target;
      if (gallery.style.display === "none") {
        gallery.style.display = "block";
        button.innerText = "Hide Components";
      } else {
        gallery.style.display = "none";
        button.innerText = "Show Components";
      }
    }