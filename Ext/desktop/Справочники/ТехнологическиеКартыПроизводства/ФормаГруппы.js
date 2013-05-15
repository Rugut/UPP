Ext.define('Справочники.ТехнологическиеКартыПроизводства.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:423px;height:112px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Технологические карты производства',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:321px;top:60px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			style: 'position:absolute;left:351px;top:60px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:60px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:97px;top:60px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Родитель:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Родитель',
			style: 'position:absolute;left:97px;top:33px;width:318px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:423px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:87px;width:423px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
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