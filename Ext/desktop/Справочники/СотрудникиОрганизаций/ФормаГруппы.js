Ext.define('Справочники.СотрудникиОрганизаций.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:442px;height:108px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Сотрудники',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:442px;height:25px;',
			items:
			[
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:83px;width:442px;height:25px;',
			items:
			[
				'-',
				'-',
				{
					text:'Записать',
				},
				{
					text:'OK',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Код:',
			style: 'position:absolute;left:320px;top:33px;width:32px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код1',
			style: 'position:absolute;left:354px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование1',
			style: 'position:absolute;left:112px;top:33px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Группа сотрудника:',
			style: 'position:absolute;left:8px;top:56px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:112px;top:56px;width:322px;height:19px;',
		},
	]
});