Ext.define('Справочники.ДоговорыКонтрагентов.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:442px;height:136px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа договоров взаиморасчетов',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:134px;top:84px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:394px;top:84px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование группы:',
			style: 'position:absolute;left:8px;top:84px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:354px;top:84px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:134px;top:32px;width:300px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВладелец',
			text: 'Контрагент:',
			style: 'position:absolute;left:8px;top:32px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа договоров:',
			style: 'position:absolute;left:8px;top:56px;width:124px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:134px;top:56px;width:300px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:442px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:111px;width:442px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});