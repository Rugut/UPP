Ext.define('Отчеты.РегламентированныйОтчетРСВ2.ФормаВводаДокументПредставителя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:361px;height:383px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ, подтверждающий полномочия представителя ',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеУд',
			style: 'position:absolute;left:31px;top:62px;width:300px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияРимские',
			style: 'position:absolute;left:31px;top:113px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияРусские',
			style: 'position:absolute;left:31px;top:165px;width:101px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерУд',
			style: 'position:absolute;left:31px;top:218px;width:101px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			name: 'Дата',
			style: 'position:absolute;left:31px;top:271px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Кем',
			style: 'position:absolute;left:31px;top:324px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование удостоверяющего документа',
			style: 'position:absolute;left:31px;top:42px;width:279px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Серия (римские цифры)',
			style: 'position:absolute;left:31px;top:94px;width:157px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Серия (русские буквы)',
			style: 'position:absolute;left:31px;top:146px;width:141px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Номер удостоверяющего документа',
			style: 'position:absolute;left:31px;top:199px;width:229px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата выдачи',
			style: 'position:absolute;left:31px;top:252px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Кем выдан',
			style: 'position:absolute;left:31px;top:305px;width:101px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:361px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:358px;width:361px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});