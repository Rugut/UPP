Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаПередШифрованиемИОтправкой',
	{
	extend: 'Ext.window.Window',
	height: 116,width: 378,
	iconCls: 'bogus',
	title: 'Шифрование и отправка',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:91px;width:378px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Отмена',
				},
				{
					text:'Разделитель',
				},
				{
					text:'КнопкаПродолжить',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:362px;height:74px;',
			height: 74,width: 362,
			items:
			[
				{
					title:'СтраницаОписание',
					items:
					[
					]
				},
			]
		},
	]
});