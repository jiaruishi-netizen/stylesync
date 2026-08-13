# StyleSync Classroom Demo Script / StyleSync 课堂演示稿

Suggested length: 5–7 minutes. The English lines are written to be spoken aloud. The Chinese lines help you understand and rehearse each point.

建议时长：5–7 分钟。英文部分可以直接照着讲，中文部分帮助你理解和排练。

## 1. Opening / 开场（约 30 秒）

**English**

Hi everyone. Today I’m introducing StyleSync, an AI wardrobe stylist that helps people decide what to wear using clothes they already own. Instead of recommending a completely new outfit that requires more shopping, StyleSync starts with the user’s real wardrobe and builds practical combinations from it.

The problem is simple: many of us own enough clothes, but we still spend time every morning wondering what works for the occasion, the weather, and our personal style. StyleSync turns that decision into a guided, personalized process.

**中文**

大家好，今天我要介绍的是 StyleSync。它是一个 AI 衣橱造型助手，帮助用户使用自己已经拥有的衣服决定今天穿什么。它不会一开始就推荐你购买一整套新衣服，而是先从你的真实衣橱出发，组合出实用的穿搭。

我们面对的问题很简单：很多人其实已经有足够多的衣服，但每天早上仍然要花时间思考什么衣服适合场合、天气和个人风格。StyleSync 把这个选择过程变成一个有引导、个性化的体验。

## 2. Explain the navigation / 介绍顶部导航（约 30 秒）

**Action:** Point to the four tabs at the top: Get Dressed, Pack a Trip, Wardrobe, and Style Profile.

**English**

The website has four main areas. “Get Dressed” creates an outfit for today. “Pack a Trip” helps build a compact travel wardrobe. “Wardrobe” stores and manages clothing items. “Style Profile” records the user’s aesthetic and shopping preferences.

For this demo, I’ll first show the wardrobe, then generate an outfit, and finally show the travel feature.

**中文**

网站顶部有四个主要功能。“Get Dressed” 用来生成今天的穿搭；“Pack a Trip” 帮助用户准备精简的旅行衣橱；“Wardrobe” 用来保存和管理衣服；“Style Profile” 记录用户的审美和购物偏好。

这次演示我会先介绍衣橱，再生成一套穿搭，最后展示旅行打包功能。

## 3. Import and explain the wardrobe / 导入并介绍衣橱（约 1 分 30 秒）

**Action:** Open **Wardrobe**. The personal wardrobe and its photos are already visible; no import step is needed.

**English**

This is the wardrobe page. In normal use, a user can click “Add item” and upload a photo of a garment. StyleSync analyzes the photo and suggests editable tags such as category, color, pattern, season, warmth, formality, and style.

For this presentation, the wardrobe is already stored on this device. These are the clothes I have added to my closet, so I can move directly from the wardrobe to outfit recommendations.

Notice that every card uses a real raster image. The old clothing line drawings have been removed. If an image cannot load, the site shows “Photo unavailable” instead of pretending that a generic drawing is the real item.

Because the wardrobe is ready when the site opens, I do not need to pause the presentation to load or reset any data.

**中文**

这是衣橱页面。正常使用时，用户可以点击 “Add item” 上传一张衣服照片。StyleSync 会分析图片，并自动建议可以编辑的标签，例如类别、颜色、图案、季节、保暖度、正式程度和风格。

为了课堂演示，我准备了三组可选数据。ZARA 数据展示商品信息和 AI 生成的平铺图；Urban Outfitters 数据补充了更多当代休闲服装；开放衣橱加入了 12 张来自 Wikimedia Commons 的开放许可图片，并保留作者和许可信息。

大家可以注意到，每张卡片现在都使用真实的位图图片，原来的服装线稿已经全部删除。如果图片加载失败，网站会显示 “Photo unavailable”，而不会用一张通用线稿假装是真实商品。

每件导入商品也保留了官方商品页，或图片和许可说明页的链接。重复点击导入按钮不会产生重复数据。

## 4. Show how an image is added and tagged / 展示图片上传与标签设定（约 1 分钟）

**Action:** Click **Add item**. Choose a prepared clothing photo if you have one. Point to each editable field, but do not spend too long changing every field.

For the live demo, choose `party-dress-upload.png` from **Documents → StyleSync Classroom Demo**. The prepared local photo produces a stable editable result: **Plum sequin party dress**, category **dress**, style **evening, party**, warmth **2**, and formality **4**.

**English**

To add something I actually own, I click “Add item” and choose a clothing photo. The system first tries the AI vision endpoint. During local development, if that endpoint is unavailable, it falls back to basic on-device color and pattern detection.

The important design choice is that AI does not make the final decision. I can review and change the item name, category, subcategory, color, pattern, seasons, style tags, warmth, and formality before saving. This keeps the user in control and gives the recommendation engine structured information.

**中文**

如果我要添加自己真正拥有的衣服，就点击 “Add item” 并选择一张服装照片。系统会先尝试使用 AI 图像识别接口；在本地开发环境中，如果接口不可用，就会使用设备端的基础颜色和图案检测作为备用方案。

这里最重要的设计是：AI 不会替用户做最终决定。在保存之前，我可以检查并修改衣服名称、类别、子类别、颜色、图案、适合季节、风格标签、保暖度和正式程度。这样既保留了用户控制，也为推荐系统提供了结构化信息。

## 5. Generate an outfit / 生成当天穿搭（约 1 分 30 秒）

**Action:** Open **Get Dressed**. Set an occasion, temperature, and weather. A reliable classroom example is **Work / office day**, around **60°F**, and **Clear**. Optionally choose **Want to impress**. Click **Style me**.

**English**

Now I’ll use “Get Dressed.” First, I choose the occasion. Then I set the temperature and weather. I can also add a preference such as comfort, warmth, keeping the outfit low-key, or wanting to impress.

For this example, I’m choosing a workday at about sixty degrees with clear weather. When I click “Style me,” the system ranks combinations using formality, warmth, color harmony, weather coverage, and the user’s style profile.

The result is not only a group of pictures. StyleSync explains why each outfit works, identifies assumptions or limitations, and only uses item IDs that exist in the wardrobe. I can also rate the recommendation, and that feedback influences future ranking.

**中文**

现在我使用 “Get Dressed”。首先选择场合，然后设定温度和天气。我还可以增加偏好，例如优先舒适、注意保暖、保持低调，或者希望穿得更有表现力。

这个例子里，我选择上班场景、约华氏 60 度、晴天。点击 “Style me” 后，系统会根据正式程度、保暖度、颜色协调、天气覆盖需求和用户风格偏好来排列组合。

结果不只是几张图片。StyleSync 会解释为什么这套搭配适合当前场景，也会说明它做出的假设或存在的限制，并且只会使用衣橱里真实存在的商品 ID。用户还可以评价推荐，反馈会影响之后的排序。

## 6. Demonstrate “Style around this” / 展示围绕单品搭配（约 40 秒）

**Action:** Return to **Wardrobe**, choose a visually distinctive item, and click **Style around this**.

**English**

Sometimes the user already knows one piece they want to wear. From the wardrobe, I can choose “Style around this.” StyleSync then treats that item as a fixed constraint and builds the rest of the outfit around it. This makes the system useful without asking the user to describe everything from scratch.

**中文**

有时候用户已经知道自己今天想穿哪一件衣服。在衣橱中点击 “Style around this”，StyleSync 就会把这件衣服作为固定条件，再围绕它完成其余搭配。这样用户不需要每次都从头描述所有需求。

## 7. Demonstrate trip packing / 展示旅行打包（约 50 秒）

**Action:** Open **Pack a Trip**, enter a short trip if required, and generate the packing list.

**English**

The “Pack a Trip” feature solves a different problem. Instead of selecting one outfit, it tries to find a smaller set of versatile pieces that can cover several days and situations. It considers garment bulk, wrinkle risk, warmth, and how easily pieces combine.

This shows that the same wardrobe data can support multiple decisions: what to wear now, what to pack, and what category may be missing.

**中文**

“Pack a Trip” 解决的是另一个问题。它不是只选择一套穿搭，而是尝试用更少、搭配性更强的单品覆盖多天和多种场景。它会考虑衣服体积、易皱程度、保暖度以及不同衣服之间是否容易组合。

这说明同一套衣橱数据可以支持多种决策：今天穿什么、旅行带什么，以及衣橱中可能缺少什么类别。

## 8. Explain what the wardrobe is missing / 介绍“衣橱缺什么”（约 40 秒）

**English**

StyleSync can also identify gaps. For example, if the weather is cold but the wardrobe has no suitable layer, or if an outfit needs shoes and none are available, the system can explain the limitation and optionally suggest a purchase category.

The goal is not to maximize shopping. The goal is to show exactly what is missing and why it would make the existing wardrobe more useful.

**中文**

StyleSync 也可以识别衣橱缺口。例如天气很冷但衣橱中没有合适外套，或者搭配需要鞋子但没有可用鞋类时，系统会说明这个限制，并可以选择性地建议需要补充的品类。

它的目标不是让用户购买更多，而是清楚说明真正缺少什么，以及为什么这一件补充会让现有衣橱更实用。

## 9. Closing / 结尾（约 30 秒）

**English**

To summarize, StyleSync combines computer vision, structured wardrobe data, and explainable recommendations. It helps users get more value from clothes they already own, reduces decision fatigue, and can encourage more intentional consumption.

This prototype already supports photo-based tagging, editable attributes, wardrobe-grounded outfit generation, trip packing, source tracking, and optional cloud synchronization. Thank you — I’m happy to answer questions.

**中文**

总结来说，StyleSync 把计算机视觉、结构化衣橱数据和可解释推荐结合在一起。它帮助用户更充分地使用已经拥有的衣服，减少选择疲劳，也可以鼓励更有意识的消费。

目前这个原型已经支持基于照片的标签识别、可编辑属性、只使用衣橱商品的穿搭生成、旅行打包、来源追踪和可选云同步。谢谢大家，欢迎提问。

## Quick backup version / 课堂时间不足时的 90 秒版本

**English**

StyleSync is an AI wardrobe stylist that recommends outfits from clothes the user already owns. The user adds a garment photo, reviews AI-generated tags, and saves the item to a structured wardrobe. On “Get Dressed,” the user selects an occasion, temperature, weather, and preference. StyleSync then ranks real wardrobe combinations and explains why they work. “Style around this” builds an outfit around one chosen piece, while “Pack a Trip” selects a compact group of versatile clothes. The system can also explain wardrobe gaps instead of automatically pushing unnecessary purchases. The main value is less decision fatigue, better use of existing clothes, and more intentional consumption.

**中文**

StyleSync 是一个 AI 衣橱造型助手，它只使用用户已经拥有的衣服推荐穿搭。用户上传服装照片，检查 AI 生成的标签，并把衣服保存到结构化衣橱中。在 “Get Dressed” 页面，用户选择场合、温度、天气和偏好，StyleSync 就会排列真实衣橱中的组合，并解释推荐理由。“Style around this” 可以围绕指定单品搭配，“Pack a Trip” 则选择一组精简且百搭的旅行衣物。系统还会解释衣橱缺口，而不是自动推动不必要的购买。它的核心价值是减少选择疲劳、更充分地使用已有衣服，并促进更有意识的消费。

## Pre-class checklist / 上课前检查清单

1. Run `npm run serve` and open `http://127.0.0.1:4173`.
2. Open Wardrobe and import each dataset only once.
3. Wait until the first row of images is visible.
4. Prepare one local clothing photo for the Add item demonstration.
5. Use Work / office day, 60°F, Clear as the safest outfit example.
6. Keep the 90-second version available in case class time is shortened.
7. Do not describe AI-generated ZARA flat lays as official ZARA images; call them prototype flat lays.
