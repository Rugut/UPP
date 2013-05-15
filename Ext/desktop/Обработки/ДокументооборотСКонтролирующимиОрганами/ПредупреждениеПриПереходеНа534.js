Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ПредупреждениеПриПереходеНа534',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:273px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Внимание!',
	
	items:
	[
		{
			xtype: 'checkbox',
			boxLabel: 'Больше не показывать это сообщение',
			style: 'position:absolute;left:8px;top:225px;width:217px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:218px;width:637px;height:3px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:248px;width:653px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
				},
			]
		},
	]
});