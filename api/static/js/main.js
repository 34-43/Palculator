$(document).ready(function () {
    $('#combo-box').change(function () {
        var selected_item = $(this).val();
        updateDynamicList(selected_item);
    });

    function updateDynamicList(selected_item) {
        $.ajax({
            url: '/dynamic_list',
            type: 'GET',
            data: { selected_item: selected_item },
            success: function (response) {
                var dynamic_list = response.dynamic_list;
                var dynamicListElement = $('#dynamic-list');
                dynamicListElement.empty();
                dynamic_list.forEach(function (item) {
                    dynamicListElement.append(makeParentsCard(item));
                });
            }
        });
    }
    function makeParentCard(name) {
        return `
        <div class="block min-w-32 text-left z-10">
        <img class="inline size-12 bg-zinc-900 rounded-full border-2 border-zinc-800" src='/api/static/portrait/${name}.jpg' onerror="this.src='/static/portrait/${name}.jpg';">
        ${name}
        </div>`;
    }

    function makeParentsCard(item) {
        return `
        <li class="max-w-[100%] w-128 mx-auto flex justify-between p-4 bg-[#343F45] rounded-[5px] shadow border-4 border-gray-800">
            ${makeParentCard(item.male) + makeParentCard(item.female)}
        </li>
        `
    }

    // 초기 로드 시 동적 리스트 업데이트
    updateDynamicList($('#combo-box').val());
});