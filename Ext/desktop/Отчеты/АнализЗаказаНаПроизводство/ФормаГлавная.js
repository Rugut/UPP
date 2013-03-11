Ext.define('Отчеты.АнализЗаказаНаПроизводство.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	height: 406,width: 767,
	iconCls: 'bogus',
	title: 'Анализ заказа на производство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:767px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Заказ',
			style: 'position:absolute;left:148px;top:33px;width:611px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:623px;top:0px;width:144px;height:24px;',
			height: 24,width: 144,
			items:
			[
				{
					title:'СтраницаНаДату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату',
			style: 'position:absolute;left:57px;top:2px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});