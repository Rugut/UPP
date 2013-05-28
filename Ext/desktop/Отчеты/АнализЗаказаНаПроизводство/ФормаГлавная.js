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
			xtype: 'label',
			name: 'НадписьЗаказ',
			text: 'Заказ на производство:',
			style: 'position:absolute;left:8px;top:33px;width:135px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Заказ',
			width: 611,
			height: 19,
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
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаНаДату',
			width: 80,
			height: 19,
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
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:767px;height:25px;',
			dock: 'top',
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
	]
});