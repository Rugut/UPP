Ext.define('Справочники.КомпетенцииРаботников.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа компетенций сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:93px;top:58px;width:299px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:33px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:93px;top:33px;width:299px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:400px;height:25px;',
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