Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПодтверждениеВыходаВИнтернетДляЦелейОбновленияМодуля',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:545px;height:232px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обновление модуля документооборота с контролирующими органами',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:199px;width:529px;height:25px;',
			height: 25,width: 529,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Жесткая блокировка',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаРазрешить',
			text: 'Разрешить (рекомендуется)',
			style: 'position:absolute;left:0px;top:0px;width:256px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаЗапретить',
			text: 'Запретить',
			style: 'position:absolute;left:269px;top:0px;width:124px;height:25px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаНапомнитьПозже',
			text: 'Напомнить позже',
			style: 'position:absolute;left:405px;top:0px;width:124px;height:25px;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:189px;width:529px;height:3px;',
		},
	],
	dockedItems:
	[
	]
});