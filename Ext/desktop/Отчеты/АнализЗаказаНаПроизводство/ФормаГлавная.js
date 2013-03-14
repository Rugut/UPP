Ext.define('Отчеты.АнализЗаказаНаПроизводство.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:767px;height:406px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ заказа на производство',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:767px;height:25px;',
			items:
			[
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ на производство:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;text-align:left;',
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
			tabBar:{hidden:true},
			items:
			[
				{
					title:'На дату',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаНаДату',
			style: 'position:absolute;left:57px;top:2px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаДату',
			text: 'На дату:',
			style: 'position:absolute;left:0px;top:2px;width:55px;height:19px;',
		},
					]
				},
			]
		},
	]
});