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
                    dynamicListElement.append(makeParentCard(item));
                });
            }
        });
    }
    function makeParentCard(item) {
        return '<li>'+
        '<div class="big">'+
        '<div class="small">'+item.male+'</div>'+
        '<div class="small">'+item.female+'</div>'+
        '</div>'+
        '</li>';
    }

    // 초기 로드 시 동적 리스트 업데이트
    updateDynamicList($('#combo-box').val());
});