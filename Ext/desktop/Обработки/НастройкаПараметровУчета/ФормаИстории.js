Ext.define('Обработки.НастройкаПараметровУчета.ФормаИстории',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:431px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:431px;height:25px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:415px;height:227px;',
			height: 227,width: 415,
			columns:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:37px;top:128px;width:145px;height:24px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:268px;width:431px;height:24px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Действие',
				},
			]
		},
	]
});