Ext.define('Справочники.СтатьиАналитическогоБаланса.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:486px;height:60px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Группа Статьи аналитического баланса',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:8px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			style: 'position:absolute;left:94px;top:8px;width:209px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код для отчета:',
			style: 'position:absolute;left:305px;top:8px;width:88px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодДляОтчета',
			style: 'position:absolute;left:397px;top:8px;width:81px;height:19px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:35px;width:486px;height:25px;',
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