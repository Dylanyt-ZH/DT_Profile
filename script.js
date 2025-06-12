 // 获取元素引用
        const responsiveBox = document.getElementById('responsiveBox');
        const resizeIndicator = document.getElementById('resizeIndicator');
        const full_name = document.getElementById('full-name')

        // 定义断点宽度（以像素为单位）
        const breakpoint = 768; // 相当于 Bootstrap 的 lg 断点

        // 更新盒子高度的函数
        function updateBoxHeight() {
            const windowWidth = window.innerWidth;
            const isLargeScreen = windowWidth >= breakpoint;

            // 根据屏幕尺寸设置不同的高度百分比
            const heightPercentage = isLargeScreen ? 30 : 10;
            responsiveBox.style.height = `${heightPercentage}vh`;


        }
        // 初始调用一次以设置正确的高度
        updateBoxHeight();
        // 监听窗口大小变化事件
        window.addEventListener('resize', updateBoxHeight);
        function updateNamePadding() {
            const windowWidth = window.innerWidth;
            const isLargeScreen = windowWidth >= breakpoint;

            const PaddingNum = isLargeScreen ? 15 : 5;
            full_name.style.paddingTop = `${PaddingNum}rch`;

        }
        updateNamePadding();
        // 监听窗口大小变化事件
        window.addEventListener('resize', updateNamePadding);