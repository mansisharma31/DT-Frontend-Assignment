async function loadData() {
  try {
    const response = await fetch("data.json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    document.getElementById("title").textContent = data.title;
    const task1 = data.tasks[0];
    document.getElementById("explore").textContent = task1.task_title;
    document.getElementById("para1").textContent = task1.task_description;
    const assets = data.assets;

    const content = document.getElementById("content");

    content.innerHTML = "";

    data.tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.classList.add("my-task");

      // Assets
      task.assets.forEach((asset) => {
        const assetElement = document.createElement("div");
        assetElement.classList.add("asset");

        const assetTitle = document.createElement("h3");
        assetTitle.textContent = asset.asset_title;

        const assetDescription = document.createElement("p");
        const descriptionLabelSpan = document.createElement("span");
        // const descriptionLabelSpan = document.createTextNode('Description: ');
        descriptionLabelSpan.textContent = "Description: ";
        descriptionLabelSpan.classList.add("description-label");
        assetDescription.appendChild(descriptionLabelSpan);
        const descriptionText = document.createTextNode(
          asset.asset_description
        );
        assetDescription.appendChild(descriptionText);

        assetElement.appendChild(assetTitle);
        assetElement.appendChild(assetDescription);

        if (asset.asset_content_type === "video") {
          const assetContent = document.createElement("iframe");
          assetContent.src = asset.asset_content;
          assetContent.width = "560";
          assetContent.height = "315";
          assetContent.frameBorder = "0";
          assetContent.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          assetContent.allowFullscreen = true;
          assetElement.appendChild(assetContent);
        } else if (asset.asset_content_type === "article") {
          const articleLink = document.createElement("a");
          articleLink.href = asset.asset_content;
          assetElement.appendChild(articleLink);
        }
        if (asset.asset_content_type === "threadbuilder") {
          const threadBuilder = document.createElement("div");
          threadBuilder.className = "collapsible-container";

          const collapsibleButton = document.createElement("button");
          collapsibleButton.className = "collapsible";
          const threadText = document.createElement("span");
          threadText.textContent = "Thread A";
          threadText.className = "thread-text";
          collapsibleButton.appendChild(threadText);
          threadBuilder.appendChild(collapsibleButton);

          const contentContainer = document.createElement("div");
          contentContainer.className = "content";
          contentContainer.style.display = "block";
          collapsibleButton.classList.add("active");
          threadBuilder.appendChild(contentContainer);

          const subThreadContainer = document.createElement("div");
          subThreadContainer.className = "sub-thread";
          contentContainer.appendChild(subThreadContainer);

          const inputGroup1 = document.createElement("div");
          inputGroup1.className = "input-group";
          subThreadContainer.appendChild(inputGroup1);

          const label1 = document.createElement("label");
          label1.for = "sub-thread-1";
          label1.textContent = "Sub thread 1";
          inputGroup1.appendChild(label1);

          const textarea1 = document.createElement("textarea");
          textarea1.id = "sub-thread-1";
          textarea1.placeholder = "Enter text here";
          inputGroup1.appendChild(textarea1);

          const inputGroup2 = document.createElement("div");
          inputGroup2.className = "input-group";
          subThreadContainer.appendChild(inputGroup2);

          const label2 = document.createElement("label");
          label2.for = "sub-interpretation-1";
          label2.textContent = "Sub Interpretation 1";
          inputGroup2.appendChild(label2);

          const textarea2 = document.createElement("textarea");
          textarea2.id = "sub-interpretation-1";
          textarea2.placeholder = "Enter text here";
          inputGroup2.appendChild(textarea2);

          const iconsSection = document.createElement("div");
          iconsSection.className = "icons-section";
          contentContainer.appendChild(iconsSection);

          const categorySelect = document.createElement("select");
          categorySelect.name = "category";
          categorySelect.id = "category";
          iconsSection.appendChild(categorySelect);

          const categoryOptions = [
            { value: "", text: "Select Categ" },
            { value: "category1", text: "Category 1" },
            { value: "category2", text: "Category 2" },
          ];
          categoryOptions.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            categorySelect.appendChild(optionElement);
          });

          const processSelect = document.createElement("select");
          processSelect.name = "process";
          processSelect.id = "process";
          iconsSection.appendChild(processSelect);

          const processOptions = [
            { value: "", text: "Select Process" },
            { value: "process1", text: "Process 1" },
            { value: "process2", text: "Process 2" },
          ];
          processOptions.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            processSelect.appendChild(optionElement);
          });

          const addSubthreadButton = document.createElement("button");
          addSubthreadButton.className = "add-subthread";
          addSubthreadButton.textContent = "+ Sub-thread";
          contentContainer.appendChild(addSubthreadButton);

          const summarySection = document.createElement("div");
          summarySection.className = "summary-section";
          contentContainer.appendChild(summarySection);

          const summaryLabel = document.createElement("label");
          summaryLabel.for = "summary";
          summaryLabel.textContent = "Summary for Thread A";
          summarySection.appendChild(summaryLabel);

          const summaryTextarea = document.createElement("textarea");
          summaryTextarea.id = "summary";
          summaryTextarea.placeholder = "Enter text here";
          summarySection.appendChild(summaryTextarea);

          assetElement.appendChild(threadBuilder);

          collapsibleButton.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }

        if (
          asset.asset_content_type === "article" &&
          asset.asset_id === 18885
        ) {
          const asset3 = document.createElement("div");
          asset3.className = "asset-3";

          const boxContainer = document.createElement("div");
          boxContainer.className = "box-container";
          asset3.appendChild(boxContainer);

          const inputBox = document.createElement("div");
          inputBox.className = "input-box";
          boxContainer.appendChild(inputBox);

          const label = document.createElement("label");
          label.htmlFor = "title";
          label.textContent = "Title";
          inputBox.appendChild(label);

          const input = document.createElement("input");
          input.type = "text";
          input.id = "title";
          // input.placeholder = 'Enter title here';
          inputBox.appendChild(input);

          const contentBox = document.createElement("div");
          contentBox.className = "content-box";
          boxContainer.appendChild(contentBox);

          const contentLabel = document.createElement("label");
          contentLabel.htmlFor = "content";
          contentLabel.textContent = "Content";
          contentBox.appendChild(contentLabel);

          const toolbar = document.createElement("div");
          toolbar.className = "toolbar";
          contentBox.appendChild(toolbar);

          const toolbarSpans = [
            "File",
            "Edit",
            "View",
            "Insert",
            "Format",
            "Tools",
            "Table",
            "Help",
          ];
          toolbarSpans.forEach((text) => {
            const span = document.createElement("span");
            span.textContent = text;
            toolbar.appendChild(span);
          });

          const editor = document.createElement("div");
          editor.className = "editor";
          contentBox.appendChild(editor);

          const editorToolbar = document.createElement("div");
          editorToolbar.className = "editor-toolbar";
          editor.appendChild(editorToolbar);

          const editorToolbarSpans = ["↩", "↪", "↕↔", "Paragraph", "•••"];
          editorToolbarSpans.forEach((text) => {
            const span = document.createElement("span");
            span.textContent = text;
            editorToolbar.appendChild(span);
          });

          const textarea = document.createElement("textarea");
          textarea.id = "content";
          // textarea.placeholder = 'Enter content here';
          editor.appendChild(textarea);

          assetElement.appendChild(asset3);
        }

        if (
          asset.asset_content_type === "article" &&
          asset.asset_id === 18886
        ) {
          const asset4 = document.createElement("div");
          asset4.className = "asset-4";
          assetElement.appendChild(asset4);

          const collapseContainer = document.createElement("div");
          collapseContainer.className = "collapse-container";
          asset4.appendChild(collapseContainer);

          const section1 = document.createElement("div");
          section1.className = "section";
          collapseContainer.appendChild(section1);

          const button1 = document.createElement("button");
          button1.className = "collapse";
          button1.textContent = "Introduction";
          section1.appendChild(button1);

          const content1 = document.createElement("div");
          content1.className = "content";
          section1.appendChild(content1);

          const paragraph1 = document.createElement("p");
          paragraph1.textContent =
            "The 4SA Method, How to bring an idea into progress?";
          content1.appendChild(paragraph1);

          const link1 = document.createElement("a");
          link1.href = "#";
          link1.textContent = "See More";
          content1.appendChild(link1);

          const section2 = document.createElement("div");
          section2.className = "section";
          collapseContainer.appendChild(section2);

          const button2 = document.createElement("button");
          button2.className = "collapse";
          button2.textContent = "Thread A";
          section2.appendChild(button2);

          const content2 = document.createElement("div");
          content2.className = "content";
          section2.appendChild(content2);

          const paragraph2 = document.createElement("p");
          paragraph2.textContent =
            "How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?";
          content2.appendChild(paragraph2);

          const link2 = document.createElement("a");
          link2.href = "#";
          link2.textContent = "See More";
          content2.appendChild(link2);

          const section3 = document.createElement("div");
          section3.className = "section";
          collapseContainer.appendChild(section3);

          const button3 = document.createElement("button");
          button3.className = "collapse";
          button3.textContent = "Example 1";
          section3.appendChild(button3);

          const content3 = document.createElement("div");
          content3.className = "content";
          section3.appendChild(content3);

          const paragraph3 = document.createElement("p");
          paragraph3.textContent =
            "You have a concept, how will you put it into progress?";
          content3.appendChild(paragraph3);

          const coll = asset4.querySelectorAll(".collapse");

          for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
              this.classList.toggle("active");

              const content = this.nextElementSibling;
              if (content.style.display === "block") {
                content.style.display = "none";
              } else {
                content.style.display = "block";
              }
            });
          }
          for (let i = 0; i < coll.length; i++) {
            coll[i].classList.add("active");
            const content = coll[i].nextElementSibling;
            content.style.display = "block";
          }
        }
        taskElement.appendChild(assetElement);
      });

      content.appendChild(taskElement);
    });
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

window.onload = loadData;

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("close-btn");
//const title = document.querySelector('.sidebar-title');
const toggleIcon = document.getElementById("toggle-icon");
const content = document.querySelector(".collapde");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains("collapsed")) {
    toggleIcon.src = "Assets/arrow2.png";
  } else {
    toggleIcon.src = "Assets/arrow.png";
  }
});
